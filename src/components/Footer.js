import React from "react";
import { pageLinks, socialLinks } from "../data";
const Footer = () => {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} class="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                class="footer-icon"
              >
                <i class={link.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()} </span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
