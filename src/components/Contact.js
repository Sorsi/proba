import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
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
      </div>
    )
  }
}

export default Contact;
