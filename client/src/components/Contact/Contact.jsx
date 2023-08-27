import React from "react";
import Styles from "./Contact.module.css";
const ContactPage = () => {
  const contactMethods = [
    {
      platform: "Gmail",
      username: "huzaifawaqar77@gmail.com",
      link: "mailto:huzaifawaqar77@gmail.com",
    },
    {
      platform: "Facebook",
      username: "facebook.com/Huzaifawaqar34",
      link: "https://www.facebook.com/Huzaifawaqar34",
    },
    {
      platform: "Instagram",
      username: "@alius_grey",
      link: "https://www.instagram.com/alius_grey/",
    },
    {
      platform: "LinkedIn",
      username: "linkedin.com/in/huzaifa-waqar",
      link: "https://www.linkedin.com/in/huzaifa-waqar-588519163/",
    },
    // Add more contact methods as needed
  ];

  return (
    <div className={Styles.contact_page}>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us through various platforms:</p>
      <ul className={Styles.contact_methods}>
        {contactMethods.map((method, index) => (
          <li key={index}>
            <span className={Styles.platform}>{method.platform}:</span>
            <a href={method.link} target="_blank" rel="noopener noreferrer">
              {method.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactPage;
