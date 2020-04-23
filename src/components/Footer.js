import React, { Component } from 'react'
import ChatBot from "./ChatBot"

export default class Footer extends Component {
  componentDidMount() {
    let floatingButton = document.querySelector('.floating-button');
    let closeButton = document.querySelector('.close-button');
    const chatbot = document.querySelector('#chatbot');

    floatingButton.addEventListener('click', () => {
      chatbot.classList.add('visible');
    });

    closeButton.addEventListener('click', () => {
      chatbot.classList.remove('visible');
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="details">
          <p>
            It feels proud to inform that collectively we have over 1500 contact
            details in our database (Adding more on daily basis). Click here for
            full details
          </p>
          <div className="chatbot-popper">
            <img className="floating-button" src="/assets/message-icon.svg" width="40px" />
            <ChatBot />
          </div>
        </div>
        <div className="footer-end">
          <p>Copyright ©️ 2020 COVIDFYI.in, All Rights Reserved.</p>
          <p className="footer-left">Privacy Policy | Terms of Use | Stay updated:</p>
          <div className="social-handles">
            <img src="/assets/icon-instagram.svg" />
            <img src="/assets/icon-fb.svg" />
            <img src="/assets/icon-youtube.svg" />
            <img src="/assets/icon-linkedin.svg" />
            <img src="/assets/icon-twitter.svg" />
          </div>
        </div>
      </div>
    );
  }
}

