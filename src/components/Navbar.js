import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="nav-center">
          <div class="nav-header">
            <img src={logo} class="nav-logo" alt="backroads" />
            <button type="button" class="nav-toggle" id="nav-toggle">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul class="nav-icons">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target="_blank"
                    without
                    rel="noreferrer"
                    class="nav-icon"
                  >
                    <i class={link.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
