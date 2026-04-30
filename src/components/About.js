import React from "react";
import aboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />
      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Welcome to our tour site, where your travel dreams come to life
            through carefully curated experiences and seamless planning. We
            specialize in creating memorable journeys, from relaxing getaways to
            adventure-filled escapes.
          </p>
          <p>
            Our dedicated team ensures every detail is handled with care, so you
            can focus on enjoying the moment. Whether you're exploring new
            cultures or revisiting favorite destinations, we’re here to make
            every trip unforgettable.
          </p>
          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
