import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";


import sale from "./assests/images/sale-img.png";
import img4 from "./assests/images/img-4.jpg";
import img2 from "./assests/images/img-2.jpg";
import img3 from "./assests/images/img-3.jpg";
import html1 from "./assests/images/html.jpg";
import react1 from "./assests/images/react.jpg";
import img1 from "./assests/images/img-1.jpg";
import js from "./assests/images/javascript.jpg";
import img6 from "./assests/images/img-6.jpg";
import img5 from "./assests/images/img-5.jpg";
import react2 from "./assests/images/react2.jpg";
import node1 from "./assests/images/node.jpg"

function Navbar(){
  return(
    <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "black"}}></i>
            <input type="text" placeholder="Search for anything here. Tech,Business, Art .."></input>
        </div>
        <div class="navbar__s3">
           <p>Courses</p>
           {/* <!-- <p>My Learning</p> --> */}
           <div class="mylearning">
            <p>My Learning</p>
            <div class="mylearning__popup">
                <p>You did not purchase anything
                </p>
            </div>
           </div>
           <i class="fa-solid fa-magnifying-glass"></i>
           <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
           <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
        </div>
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>
  )
}

function Categories(){
  return(
    <div class="categories">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
    </div>
  )
}

function Sale_Img(){
  return(
    <div class="sale-img">
    <img src={sale} alt=""></img>
    <div class="sale-img__offer">
        <h2>Udemy Flash Sale! 24 hours to save.</h2>
        <p>Get the top courses for just 499. Just one day to save but a lifetime to learn. Enroll now and get access to a wealth of knowledge at your fingertips.Join our community of learners and embark on a journey towards success together!.Hurry, this offer won't last forever.</p>

    </div>
</div>
  )
}

function Recommended(){
  return(
    <div class="recommended">
        <h1 class="recommended__title">Recommended for You</h1>
        <p>Pick the best fit</p>
        <div class="recommended__container">
            <div class="course-card">
                <img src={img2} alt=""></img>
                <p>2024 Python Data Visualization MasterClass</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={html1} alt=""></img>
                <p>Web Development Bootcamp 2023</p>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img3} alt=""></img>
                <p>Java Basic to Advance Level</p>
                <p>Col Steele</p>
                <p>3.8 ⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img4} alt=""></img>
                <p>Master UI/UX with Figma</p>
                <p>Col Steele</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
        </div>
    </div>
  )
}

function Topics(){
  return(<div class="topics">
  <h1 class="topics__title">Topics Recommended For You</h1>
      <div class="topics__container">
          <p>Website</p>
          <p>JavaScript</p>
          <p>Mongo</p>
          <p>CSS</p>
          <p>Azure</p>
          <p>Docker</p>
          <p>GitHub</p>
          <p>React Js</p>
          <p>AWS</p>
      </div>
 
</div>)
}

function Popular(){
  return(
    <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
            <div class="course-card">
                <img src={react1} alt=""></img>
                <p>2023 Python Data Visualization MasterClass</p>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img1} alt=""></img>
                <p>Web Development Bootcamp 2023</p>
                <p>Col Steele</p>
                <p>4.6 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={js} alt=""></img>
                <p>JavaScript Basic to Advance Level 2024</p>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img4} alt=""></img>
                <p>Mastering Machine Learning with Pandas</p>
                <p>Col Steele</p>
                <p>4.3 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img6} alt=""></img>
                <p>Master MongoDb in 30 days</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={img5} alt=""></img>
                <p>C++ Full Complete Course</p>
                <p>Col Steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={react2} alt=""></img>
                <p>React 30 days Tutorial</p>
                <p>Col Steele</p>
                <p>3.2 ⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
            <div class="course-card">
                <img src={node1} alt=""></img>
                <p>Master Node Js Basic to Advance</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>2999</del></p>
            </div>
        </div>
    </div>
  )
}
function Footer(){
  return(
    <div class="footer">
    <div class="footer__one">
        <div class="footer__one__s1">
            <p>Udemy Business</p>
            <p>Teach on Udemy</p>
            <p>Get the app</p>
            <p>About Us</p>
            <p>Contact Us</p>
        </div>
        <div class="footer__one__s2">
            <p>Careers</p>
            <p>Bog</p>
            <p>Help and Support</p>
            <p>Affiliate</p>
            <p>Investors</p>
        </div>
    </div>
    <div class="footer__two">
        <h1>Udemy</h1>
        <p>&copy; Udemy, Inc</p>
    </div>
</div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar></Navbar>
    <Categories></Categories>
    <Sale_Img></Sale_Img>
    <Recommended></Recommended>
    <Topics></Topics>
    <Popular></Popular>
    <Footer></Footer>
  </div>
  
);

