import React from "react";
import { NavLink } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import NumberTicker from "./NumberTicker";
import { Slider } from "./Slider";
import { Skill } from "./Skills";
import { useAuth } from "../store/Auth";



export const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section>
          <div className="container-home">
            <div className="main-picture">
              <img
                className="mainpic"
                src="./images/mainpagepic.png"
                alt="Picture of me"
              />
            </div>
            <div className="main-text">
              <p className="intro">
              Hi There{user && user.userData.username ? ` ${user.userData.username}` : ""}! I Am<span className="name"> Hashim Khan</span>
              </p>
              <div className="animatedtext">
                <AnimatedText />
              </div>
              <p className="details">
                Professional web developer offering custom, responsive websites
                to elevate your online presence and grow your business.
              </p>
              <div className="btn-mainpage">
                <NavLink to="/contactme">
                  <button className="btn-main-one">CONTACT NOW</button>
                </NavLink>
                <NavLink to="/services">
                  <button className="btn-main-TWO">VIEW SERVICES</button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      
        <button
  class="cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
>
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</button>

<div className="slideruse">
<Slider />
</div>

<div className="myskills">
  <Skill/>
</div>

<section className="numbers-section">
          <div className="numbers-container" >
            <div className="div1">
              <h2>
                <NumberTicker value={12} direction="up" delay={0.2} />
              </h2>
              <p>Months Experience</p>
            </div>
            <div className="div1">
              <h2>
                <NumberTicker value={100} direction="up" delay={0.4} /> +
              </h2>
              <p>Hours Of Coding</p>
            </div>
            <div className="div1">
              <h2>
                <NumberTicker value={24} direction="up" delay={0.6} /> /{" "}
                <NumberTicker value={7} direction="up" delay={0.8} />
              </h2>
              <p>Service</p>
            </div>
          </div>
        </section>


        <section className="about-section">
          <div className="about-container">
  
              <h1>About Me</h1>
              <p>Hi there! I’m MUHAMMAD HASHIM KHAN, a software engineer passionate about turning your digital ideas into reality. I have a solid background in the MERN stack and specialize in creating custom websites just for you. Whether you need an online store with Shopify, a WordPress site, or a website built from scratch, I’m here to help.</p>
             <p>
             My goal is to build high-quality, easy-to-use websites that meet your needs and boost your online presence. I see every project as a chance to learn and improve, and I’m dedicated to delivering great results.
             </p>
             <p>Let’s work together to create something amazing!

</p><NavLink to="/services"> <button class="btn-53">
  <div class="original"> View Services</div>
  <div class="letters">
  <span>V</span>
    <span>I</span>
    <span>E</span>
    <span></span>
    <span>W</span>
    <span>- </span>
    <span>S</span>
    <span>E</span>
    <span>R</span>
    <span>V</span>
    <span>I</span>
    <span>C</span>
    <span>E</span>
    <span>S</span>
  </div>
</button></NavLink>

</div>
        </section>
       
      </main>
    </>
  );
};
