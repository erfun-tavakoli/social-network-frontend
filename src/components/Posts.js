import { LocalPharmacyRounded } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';

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

//local in memory images
import avatarMale from '../images/avatar-male.jpg';
import avatarFemale from '../images/avatar-female.jpg';
import picOne from '../images/img-4.jpg';
import picTwo from '../images/img-1.jpg';
import picThree from '../images/img-2.jpg';
import picFour from '../images/img-3.jpg';
import picFive from '../images/img-4.jpg';
import picSix from '../images/img-6.jpg';

export default class Posts extends React.Component {

  state = {
    posts: [],
    tag: '',
  }

  componentDidMount() {
    this.setState({
      posts: [
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
          tags: ["Covid", "Stay Home"],
          owner: {
            id: 2,
            image: avatarFemale,
            firstName: "Anny",
            lastName: "Lee"
          },
          image: picSix
        }
      ]
    })
  }

  render() {
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
    );
  }
}