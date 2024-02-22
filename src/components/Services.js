import React from "react";
import Title from "./Title";
import { servicesLink } from "../data";

const Services = () => {
  return (
    <div>
      <section class="section services" id="services">
        <Title title="our" subTitle="services" />
        <div class="section-center services-center">
          {servicesLink.map((link) => {
            return (
              <article class="service" key={link.id}>
                <span class="service-icon">
                  <i class={link.icon}></i>
                </span>
                <div class="service-info">
                  <h4 class="service-title">{link.title}</h4>
                  <p class="service-text">{link.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
