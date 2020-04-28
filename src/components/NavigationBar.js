import React, { Component } from "react";
import Link from "next/link";
import { initGA, logPageView } from "../utils/analytics";

export default class NavigationBar extends Component {
  componentDidMount() {
    // const hamburgerButton = document.querySelector('.hamburger-menu');
    // const hamburgerMenu = document.querySelector('.dropdown-navigation');
    // hamburgerButton.addEventListener('click', () => {
    //     hamburgerMenu.classList.toggle('show-dropdown')
    // })

    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  componentDidUpdate() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <nav>
        <Link href="/">
          <a className="logo">
            <img src="/assets/logo.svg"></img>
          </a>
        </Link>
        {/* <ul className="nav-items hide-991">
                    <li className="nav-item active">
                        <Link href="">
                            <a className="link">
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="">
                            <a className="link">
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="">
                            <a className="link">
                                Partners
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="">
                            <a className="link">
                                Blog
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="">
                            <a className="link">
                                Volunteer
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="">
                            <a className="link">
                                Contact us
                            </a>
                        </Link>
                    </li>
                </ul> */}
        {/* <div className="show-991 hamburger-menu">
                    <img src="/assets/hamburger.svg" className="hamburger-button" />
                    <div className="dropdown-navigation">
                        <Link href="">
                            <a className="link nav-item active">
                                Home
                            </a>
                        </Link>
                        <Link href="">
                            <a className="link nav-item">
                                About
                            </a>
                        </Link>
                        <Link href="">
                            <a className="link nav-item">
                                Partners
                            </a>
                        </Link>
                        <Link href="">
                            <a className="link nav-item">
                                Blog
                            </a>
                        </Link>
                        <Link href="">
                            <a className="link nav-item">
                                Volunteer
                            </a>
                        </Link>
                        <Link href="">
                            <a className="link nav-item">
                                Contact us
                            </a>
                        </Link>
                    </div>
                </div> */}
      </nav>
    );
  }
}
