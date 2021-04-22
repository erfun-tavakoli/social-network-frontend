import React from 'react';
import { Link } from 'react-router-dom';

// Material UI components
import {
  Chip,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Sidebar from '../components/Sidebar';

//local images
import picOne from '../images/img-4.jpg';
import picTwo from '../images/img-1.jpg';
import picThree from '../images/img-2.jpg';
import picFour from '../images/img-3.jpg';
import picFive from '../images/img-4.jpg';
import picSix from '../images/img-6.jpg';
import avatarMale from '../images/avatar-male.jpg';
import avatarFemale from '../images/avatar-female.jpg';

export default class Tag extends React.Component {

  state = {
    posts: [],
    tag: ''
  }

  posts = [
    {
      id: 1,
      message: "Live every day as if its your last",
      tags: ["Life is Good", "Joy"],
      owner: {
        id: 1,
        image: avatarMale,
        firstName: "John",
        lastName: "Doe"
      },
      image: picTwo
    },
    {
      id: 2,
      message: "You will face many defeats in life, but never let yourself be defeated",
      tags: ["Never give up", "Motivation"],
      owner: {
        id: 2,
        image: avatarFemale,
        firstName: "Anny",
        lastName: "Lee"
      },
      image: picThree
    },
    {
      id: 3,
      message: "In the end, it's not the years in your life that count",
      tags: ["Life is Good", "Joy"],
      owner: {
        id: 1,
        image: avatarMale,
        firstName: "John",
        lastName: "Doe"
      },
      image: picFour
    },
    {
      id: 4,
      message: "If life were predictable it would cease to be life, and be without flavor.",
      tags: ["Life", "Motivation"],
      owner: {
        id: 1,
        image: avatarMale,
        firstName: "John",
        lastName: "Doe"
      },
      image: picFive
    },
    {
      id: 5,
      message: "Stay safe",
      tags: ["Covid", "Stay safe"],
      owner: {
        id: 2,
        image: avatarFemale,
        firstName: "Anny",
        lastName: "Lee"
      },
      image: picSix
    }
  ]

  componentDidMount() {
    const { tag } = this.props.match.params;
    this.setState({ tag });

    const postsWithSelectedTag = this.posts.filter(post => {
      return post.tags.includes(tag);
    });

    this.setState({
      posts: postsWithSelectedTag
    });

    this.unlisten = this.props.history.listen((location, action) => {

      if (location.pathname.includes('tag')){
        const locTag = location.pathname.replace('/tag/',''); 
        this.setState({ tag: locTag });

        const newPosts = this.posts.filter(post => {
          return post.tags.includes(locTag);
        });
    
        this.setState({
          posts: newPosts
        });
      }
    });
  }

  componentWillUnmount() {

    this.unlisten();
  }

  render() {
    if (this.state.posts.length > 0) {
      return (
        <div className="Posts">
          <div className="PostStream">
            <Typography variant="h4" component="h2" style={{ margin: '20px 20px 0 20px' }}>
              Posts tagged: {this.state.tag}
            </Typography>
            {this.state.posts.map(function (item, index) {
              return (
                <Card key={item.id} style={{ maxWidth: 600, margin: '30px' }}>
                  <CardHeader
                    avatar={
                      <Link to={`/user/${item.owner.id}`}><Avatar src={item.owner.image} alt={item.owner.firstName + ' ' + item.owner.lastName} style={{ width: '40px', marginRight: 10, display: 'inline-block', verticalAlign: 'middle' }} />{item.owner.firstName + ' ' + item.owner.lastName}</Link>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item.owner.firstName + ' ' + item.owner.lastName}
                  />
                  <CardMedia
                    style={{ height: 0, paddingTop: '56.25%' }}
                    image={item.image}
                    title={item.message}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.message}
                    </Typography>
                  </CardContent>
                  {item.tags.map(tag => {
                    if (tag) {
                      return (
                        <Link to={`/tag/${tag}`} key={tag}>
                          <Chip
                            variant="outlined"
                            clickable={true}
                            style={{ margin: '5px' }}
                            key={tag}
                            label={tag}
                          />
                        </Link>
                      );
                    }
                  })}
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              )
            })}
          </div>
          <Sidebar />
        </div>
      )
    } else {
      return (
        <div className="Posts">
          <div className="PostStream">
            <Typography variant="h4" component="h2" style={{ margin: '20px 20px 0 20px' }}>
              Posts tagged: {this.state.tag}
            </Typography>
            <p style={{ margin: '20px' }}>
              No posts found
            </p>
          </div>
          <Sidebar />
        </div>
      )
    }
  }
}