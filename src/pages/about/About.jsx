import React from "react";
import "./About.css";
import Header from "../../components/Header";
import headerChobi from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
   return (
      <>
         <Header title="About Us" image={headerChobi}>
            Welcome to our gym, where fitness becomes a lifestyle. We are dedicated to helping you reach your goals through expert training, state-of-the-art facilities, and a supportive community
         </Header>
         <section className="about__story">
            <div className="container about__story-container">
               <div className="about__section-image">
                  <img src={StoryImage} alt="story" />
               </div>
               <div className="about__section-content">
                  <h1>Our Story</h1>

                  <p>
                     Our story began with a passion for fitness and a vision to create a gym that goes beyond the ordinary. Founded by a group of fitness enthusiasts, we aimed to build a space where people could achieve their goals while feeling supported and inspired. With meticulous planning and attention to detail, we created a state-of-the-art facility equipped with cutting-edge equipment and knowledgeable trainers.
                  </p>
                  <p>
                    Since our humble beginnings, our gym has grown into a thriving community where members of all fitness levels come together to pursue their health and wellness aspirations. We take pride in fostering an inclusive environment that embraces diversity and encourages personal growth.
                  </p>
                  <p>
                     Today, we continue to evolve and innovate, staying ahead of the fitness industry's trends and providing an exceptional experience for every individual who walks through our doors.
                  </p>
               </div>
            </div>
         </section>

         <section className="about__vision">
            <div className="container about__vision-container">
               <div className="about__section-content">
                  <h1>Our Vision</h1>

                  <p>
                     Our vision is to create a world where fitness becomes a way of life for everyone. We envision a society where individuals prioritize their health and well-being, embracing the power of physical activity to enhance their quality of life. We strive to be the leading fitness destination, providing innovative programs, cutting-edge facilities, and exceptional experiences that inspire individuals to unlock their full potential.
                  </p>
                  <p>
                    We aim to create a positive ripple effect, where the impact of our fitness community extends beyond our gym walls, influencing the overall health and happiness of our members, their families, and the broader community.
                  </p>
               </div>
               <div className="about__section-image">
                  <img src={VisionImage} alt="vision" />
               </div>
            </div>
         </section>

         <section className="about__mission">
            <div className="container about__mission-container">
               <div className="about__section-image">
                  <img src={MissionImage} alt="mission" />
               </div>
               <div className="about__section-content">
                  <h1>Our Mission</h1>

                  <p>
                    Our mission is to empower individuals to live their healthiest and happiest lives through fitness. We are dedicated to providing a supportive and inclusive environment where everyone feels welcome and encouraged to pursue their fitness goals. Our highly trained team of professionals is committed to delivering personalized guidance and expert instruction, ensuring our members receive the knowledge and tools they need to succeed.
                  </p>
                  <p>
                     We strive to inspire and motivate our community to prioritize their physical and mental well-being. Through our innovative programs, state-of-the-art facilities, and a focus on continuous improvement, we aim to be the catalyst for positive transformations in the lives of our members.
                  </p>
                  <p>
                    At the core of our mission is the belief that fitness is a lifelong journey, and we are here to support and guide you every step of the way.
                  </p>
               </div>
            </div>
         </section>
      </>
   );
};

export default About;
