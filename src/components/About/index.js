import React from "react";
import profileImage from "./me.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            {" "}
            Hello, my name is Myleen Grace Santana. I am currently living in the County of riverside.
            <b>My Background:</b> Greetings, alittle about myself is Im from Moreno valley born and 
            raised. I am 27 years old. One thing about me is that I like diving into challenges as 
            you can see, I jumped head first into a coding bootcamp with out prior experience. My background was originally medical which I really enjoyed but I also am wanting to learning something different. 
            <b>My Career Transition:</b>
            I decided to do a career transition because I discovered that I like tech! 
            At my current job Im always problem solving helping my coworker with this computer issues. 
            It may not be coding but that what started my interest. So then I starting doing my research 
            and I discovered that coding might just be for me. Yes it has its challenges. I experienced many durning my program 
            but I believe it unlocked and is unlocking my potentials. This is why I decided to choose a career change. 
            Im happy that I did.
            <b>My Boot Camp Experience:</b> The boot camp was intense and
            transformative. Over several months, I immersed myself in coding,
            learning various programming languages, and honing my
            problem-solving skills. Despite the challenges of learning a new
            discipline, my perseverance and dedication helped me excel in the
            program.
            <b>My Professional Growth:</b> Following the boot camp, I will
            continue to expand his knowledge and skills by engaging in personal
            projects and participating in coding communities. I will become
            well-versed in web development, mastering front-end and back-end
            technologies. My commitment to continuous learning and growth
            allowed me to stay up-to-date with the latest industry trends and
            best practices.
            <b>My Interests:</b> A couple of my interest are hiking. I really enjoy being out doors, going to the beach, traveling, going to the museums and CODING!! It’s definitely a piece of work but I enjoy feeling my brain cells grow. I hope you enjoy my humor have a wonderful day </p>
        </div>
      </div>
    </section>
  );
}

export default About;

