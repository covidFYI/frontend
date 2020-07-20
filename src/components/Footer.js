import React, { Component } from 'react'
// import ChatBot from "./ChatBot"
import ContactDetails from './ContactDetails'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';


export default class Footer extends Component {
  componentDidMount() {
    // let floatingButton = document.querySelector('.floating-button');
    // let closeButton = document.querySelector('.close-button');
    // const chatbot = document.querySelector('#chatbot');

    // floatingButton.addEventListener('click', () => {
    //   chatbot.classList.add('visible');
    // });

    // closeButton.addEventListener('click', () => {
    //   chatbot.classList.remove('visible');
    // });
  }

  render() {
    return (
      <footer className="footer">
        <div className="details">
          {/* <p>
            {/* It feels proud to inform that collectively we have over 1500 contact
            details in our database (Adding more on daily basis). */}
            {/* Click here for full details }
          </p> */}
          <ContactDetails />
          {/* <div className="chatbot-popper">
            <img className="floating-button" src="/assets/message-icon.svg" width="40px" />
            <ChatBot />
          </div> */}
        </div>
        <div className="footer-end">
          <p style={{ color:"white"}}>Copyright ©️ 2020 COVIDFYI.in, All Rights Reserved.</p>
          {/* <p className="footer-left">Privacy Policy | Terms of Use | Stay updated:</p> */}
          <div className="social-handles">
            <a href="mailto:ncov2019@gov.in">
              <Tooltip style={{ color:"white;", "fontSize":"16px;"}} title="Contact@covidfyi.in" arrow>
                <EmailIcon style={{ color:"white"}} />
              </Tooltip>
              
            </a>
            <a className="social-media-link" href="https://www.instagram.com/covidfyi.in/" target="_blank">
              {/* <img src="/assets/instagram.svg" /> */}
              <InstagramIcon style={{ color:"white"}} />
            </a>
            <a className="social-media-link" href="https://www.facebook.com/covidfyi" target="_blank">
              {/* <img src="/assets/facebook.svg" /> */}
              <FacebookIcon style={{ color:"white"}} />
            </a>
            {/* <a className="social-media-link" href="" target="_blank"> */}
              {/* <img src="/assets/linkedin.svg" /> */}
              {/* <LinkedInIcon style={{ color:"white"}}></LinkedInIcon> */}
            {/* </a> */}
            <a className="social-media-link" href="https://twitter.com/covid_fyi" target="_blank">
              {/* <img src="/assets/twitter.svg" /> */}
              <TwitterIcon style={{ color:"white"}} >  </TwitterIcon>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

