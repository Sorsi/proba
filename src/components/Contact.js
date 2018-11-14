import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Orsolya Sütő</h2>
            <img
              id="profile-pic"
              src="Sorsi-about.png"
              alt="profile"
              style={{ height: '250px' }}
            />
            <p id="intro">
            Welcome on my website! From February of 2018 I'm working on my webdeveloper skills. 
            Watched a lot of online videos and courses (Youtube, Udemy, Codeacademy...) 
            On 12th October 2018 graduated at Green Fox Academy and got my certification from software development.
            Now I'm a junior Full Stack Web Developer using MERN (MongoDB, Express, React, Node.js), 
            Redux, RESTful APIs, MySQL/MongoDB, Lodash, Express, Bootstrap, Ant Design, SASS, LESS
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr />
            <div className="contact-list">
              <List>

                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i class="fa fa-phone" aria-hidden="true" />
                    +36 (70) 3318-405</ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i class="fa fa-envelope" aria-hidden="true" />
                    orsolya.suto.so@gmail.com</ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                    <i class="fa fa-skype" aria-hidden="true" />
                    sutikecske</ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
