import React from "react";
import "./About.css";
import aboutImage from "../../images/author-image.svg";

function About() {
  return (
    <section className="about">
      <div className="about__section">
        <img src={aboutImage} alt="Author" className="about__image" />
      </div>
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Hi readers, my name is <strong>Thinh Nguyen</strong> and I am the
          author of this website. I created this website as a final project of
          TripleTen bootcamp program to learn and practice React. I hope you
          enjoy it!
        </p>
      </div>
    </section>
  );
}

export default About;
