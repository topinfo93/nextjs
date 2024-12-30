import React from 'react';
import Link from "next/link";
import Image from "next/image";
// type User = {
//   name: string;
// };

// export interface FooterProps {
//   user?: User;
//   onLogin?: () => void;
//   onLogout?: () => void;
//   onCreateAccount?: () => void;
// }

export const Footer = () => (
  <>
      <footer id="home-footer">
        <div className="section-container">
          <div className="row">
            <div className="slogan">
              <p>
                <b>Ready to make real change for your business?</b> Work with Good
                Humans Only.
              </p>
              <div className="wrap-btn">
                <a href="/contact-us/" target="" className="btn">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="socials">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/company/gho" target="_blank">
                    Linked in
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ghosydney/" target="_blank">
                    INSTAGRAM
                  </a>
                </li>
              </ul>
              <div className="logo">
                <Link 
                href="/" 
                >
                  <Image
                     src="https://ghosydney.com/wp-content/uploads/2024/07/Group-3.svg"
                     alt="logo"
                     width={100}
                     height={100}
                  />

                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="menu-footer">
              <nav className="site-navigation">
                <div className="menu-footer-menu-animation-container">
                  <ul id="menu-footer-menu-animation" className="menu">
                    <li
                      id="menu-item-12981"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12981"
                    >
                      <a href="/about-us/">About</a>
                    </li>
                    <li
                      id="menu-item-12984"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12984"
                    >
                      <a href="/offering/">Offering</a>
                    </li>
                    <li
                      id="menu-item-12986"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12986"
                    >
                      <a href="/work/">Work</a>
                    </li>
                    <li
                      id="menu-item-12983"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12983"
                    >
                      <a href="/government/">Government</a>
                    </li>
                    <li
                      id="menu-item-12985"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12985"
                    >
                      <a href="/ventures/">Ventures</a>
                    </li>
                    <li
                      id="menu-item-12982"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-12982"
                    >
                      <a href="/contact-us/">Contact</a>
                    </li>
                  </ul>
                </div>{" "}
              </nav>
            </div>
          </div>
          <div className="row">
            <div className="copyright-text">
              <p>
                GHO acknowledges and pays respect to the past, present and future
                Traditional Custodians and Elders of this nation and the continuation
                of cultural, spiritual and educational practices of Aboriginal and
                Torres Strait Islander peoples.©GHO Sydney 2024
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="marquee">
        <div className="track">
          <div className="content" role="list">
            <div  role="listitem">
              <b>Work with people you like. </b> Life’s short.
            </div>{" "}
            <div role="listitem">
              <b>Work with people you like. </b> Life’s short.
            </div>{" "}
            <div role="listitem">
              <b>Work with people you like. </b> Life’s short.
            </div>{" "}
          </div>
        </div>
      </div>
  </>
    

);
