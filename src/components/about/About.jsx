import React, { useState } from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  const [expandContent, setExpandContent] = useState(false);

  const handleExpandContent = () => {
    setExpandContent(!expandContent);
  };

  return (
    <>
      <section className="about">
        <Back title="Who We Are? and What do we do?" cover={img} />
        <div className={`container flex mtop ${expandContent ? "expand" : ""}`}>
          <div className="left row">
            <Heading title="Our Story" subtitle="Check out our company story and work process" />

            <p>
            Welcome to CarbonSense, a cutting-edge web application dedicated to helping individuals track and reduce their carbon footprints. Our platform leverages modern technologies such as React.js, Node.js with Express.js, and MongoDB to deliver a seamless and engaging user experience. We integrate with external APIs to provide sustainability ratings and ethical information, while our gamification and social sharing features foster a sense of community and enhance user engagement.



At the core of CarbonSense lies a robust system design built on Node.js, ensuring efficient and scalable server-side development. We prioritize the security of our users' data by implementing user authentication and authorization through JSON Web Tokens (JWT). Our backend handles API requests, interacts with the MongoDB database, performs carbon footprint calculations, and manages user profiles and data.


The flow of data within CarbonSense follows a request-response pattern. Users can easily register and log in using our authentication endpoints, and their credentials are securely validated before generating a JWT for subsequent requests. Our frontend allows users to input their daily activities and behaviors, which are then sent to our backend's carbon footprint calculation endpoint. Leveraging predefined emission factors, the backend performs accurate calculations and updates the user's profile or stores the data separately.



            </p>
            {expandContent && (
              <>
                <p>
                To provide comprehensive insights, we integrate external APIs that supply sustainability ratings and ethical information about products. Our backend communicates with these APIs, retrieves relevant data, and either stores it in our database or sends it back to the frontend for display. Users can conveniently track their daily carbon footprint, including emissions from transportation, food consumption, and waste generation. Our frontend fetches the necessary data from the backend, ensuring real-time tracking and visualization.


In addition to our powerful tracking capabilities, CarbonSense incorporates gamification and social sharing features. Users have the opportunity to earn achievements and rewards based on their sustainable actions, creating a sense of accomplishment and motivation. Furthermore, our social media integration allows users to share their progress, engage with others, and inspire positive change. The backend validates achievements, updates user profiles accordingly, and interacts with social media APIs for seamless sharing functionality.


At CarbonSense, we are committed to empowering individuals to make a difference in the fight against climate change. Join us on our journey towards a more sustainable future, where tracking and reducing your carbon footprint becomes a rewarding and engaging experience. Together, let's optimize our impact and pave the way for a greener world.
                </p>
              </>
            )}
            <button className="btn2" onClick={handleExpandContent}>
              {expandContent ? "Show Less" : "More About Us"}
            </button>
          </div>
          <div className="right row">
          <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
