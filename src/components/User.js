import React from 'react';
import {
  Typography,
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  ButtonGroup,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom';

//local images: 
import picOne from '../images/img-4.jpg';
import picTwo from '../images/img-1.jpg';
import picThree from '../images/img-2.jpg';
import picFour from '../images/img-3.jpg';
import picFive from '../images/img-4.jpg';
import picSix from '../images/img-6.jpg';
import avatarMale from '../images/avatar-male.jpg';
import avatarFemale from '../images/avatar-female.jpg';

export default class User extends React.Component {

  state = {
    user: [],
    location: [],
    posts: []
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

  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dob: new Date(1990, 3, 22),
      gender: 'male',
      image: avatarMale,
      email: '',
      cell: 111,
      phone: 204,
      location: {
        city: 'Winnipeg',
        state: 'MB',
        street: 'Taylor',
        postcode: 'R#N'
      }
    },
    {
      id: 2,
      firstName: 'Anny',
      lastName: 'Lee',
      dob: new Date(1998, 3, 12),
      gender: 'female',
      image: avatarFemale,
      email: '',
      cell: 111,
      phone: 204,
      location: {
        city: 'Winnipeg',
        state: 'MB',
        street: 'Taylor',
        postcode: 'R#N'
      }
    }
  ]

  componentDidMount() {
    const { id } = this.props.match.params;
    const user = this.users.find(ele => {
      return ele.id === +id;
    });
    this.setState({
      user: user
    });

    const userPosts = this.posts.filter(post => {
      return post.owner.id === +id;
    })

    this.setState({
      posts: userPosts
    });
  }

  componentWillUnmount() {
    this.setState({
      user: null,
      posts: null
    })
  }

  render() {

    let dob;

    if (this.state.user.dob) {
      dob = new Date(this.state.user.dob);
      let date = dob.getDate();
      let month = dob.getMonth() + 1;
      let year = dob.getFullYear();
      dob = `Born ${date}/${month}/${year}`;
    } else {
      dob = '';
    }

    let color;

    if (this.state.user.gender === 'male') {
      color = 'primary';
    } else if (this.state.user.gender === 'female') {
      color = 'secondary';
    } else {
      color = 'inherit';
    }

    let address;

    if (this.state.location.street) {
      address = `${this.state.location.street}, ${this.state.location.city}, ${this.state.location.state}, ${this.state.location.postcode}`
    } else {
      address = '';
    }

    return (
      <div className="User">
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <Avatar src={this.state.user.image} alt={this.state.user.firstName + ' ' + this.state.user.lastName} style={{ margin: '10px', width: '80px', height: '80px' }} />
          <div>
            <Typography variant="h4" component="h2">
              {this.state.user.firstName} {this.state.user.lastName}
            </Typography>
            <Typography component="p">
              {dob}
            </Typography>
          </div>
          <div style={{ position: 'absolute', right: 30 }}>
            <ButtonGroup
              variant="contained"
              color={color}
              aria-label="full-width contained primary button group"
            >
              <Button>Message</Button>
              <Button>Friend</Button>
              <Button>Follow</Button>
            </ButtonGroup>
          </div>
        </div>
        <Divider />
        <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
          Contact info
          </Typography>
        <Divider style={{ margin: '0 20px' }} />
        <Grid container spacing={2}>
          <Grid item xs>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon color={color} />
                </ListItemIcon>
                <ListItemText
                  primary="Phone number"
                  secondary={this.state.user.phone}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIphoneIcon color={color} />
                </ListItemIcon>
                <ListItemText
                  primary="Mobile number"
                  secondary={this.state.user.cell}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon color={color} />
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary={address}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color={color} />
                </ListItemIcon>
                <ListItemText
                  primary="Email address"
                  secondary={this.state.user.email}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Typography variant="h5" component="h2" style={{ margin: '20px' }}>
          Recent Posts
          </Typography>
        <Divider style={{ margin: '0 20px' }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '15px 10px' }}>
          {this.state.posts.map(function (item, index) {
            return (
              <Card key={item.id} style={{ width: '30%', margin: '1.5%' }}>
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
                          label={tag}
                        />
                      </Link>
                    );
                  }

                  return '';
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
      </div>
    );
  }
}