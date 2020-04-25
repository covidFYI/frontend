import React, { Component } from 'react'
// import ChatBot from "./ChatBot"
import ContactDetails from './ContactDetails'


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
          <p>Copyright ©️ 2020 COVIDFYI.in, All Rights Reserved.</p>
          {/* <p className="footer-left">Privacy Policy | Terms of Use | Stay updated:</p> */}
          <div className="social-handles">
            <a className="social-media-link" href="https://www.instagram.com/covidfyi.in/" target="_blank">
              <img src="/assets/instagram.svg" />
            </a>
            <a className="social-media-link" href="https://www.facebook.com/covidfyi" target="_blank">
              <img src="/assets/facebook.svg" />
            </a>
            <a className="social-media-link" href="" target="_blank">
              <img src="/assets/linkedin.svg" />
            </a>
            <a className="social-media-link" href="https://twitter.com/covid_fyi" target="_blank">
              <img src="/assets/twitter.svg" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

