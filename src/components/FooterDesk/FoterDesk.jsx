import styles from "./FoterDesk.module.css"
import FooterLink from "../FooterLink/FooterLink"
import CustomHr from "../CustomHr/CustomHr"

import logo from "../../assets/logos/Logo with text + green background.png"
                


export default function FooterDesk(){

    const footerLinks = [
  {
    text: "Home",
    link: "/home"
  },
  {
    text: "About",
    link: "/about"
  },
  {
    text: "Menu",
    link: "/menu"
  },
  {
    text: "Reservation",
    link: "/reservation"
  },
  {
    text: "Order online",
    link: "/order-online"
  },
  {
    text: "Login",
    link: "/login"
  }]

  const socialMediaLinks = [
  {
    text: "Facebook",
    link: "https://www.facebook.com/YourPageHandle",
    icon: "fab fa-facebook-f" // Example Font Awesome icon class
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/YourHandle",
    icon: "fab fa-instagram"
  },
  {
    text: "Twitter",
    link: "https://twitter.com/YourHandle",
    icon: "fab fa-twitter"
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/company/YourCompanyName",
    icon: "fab fa-linkedin-in"
  }]
;

const contactLinks = [
  {
    text: "Address",
    link: "https://maps.app.goo.gl/ExampleLocation", // Replace with your actual Google Maps link
    icon: "fas fa-map-marker-alt"
  },
  {
    text: "Phone number",
    link: "tel:+1234567890", // The 'tel:' prefix allows mobile users to click and call
    icon: "fas fa-phone-alt"
  },
  {
    text: "Email",
    link: "mailto:contact@littlelemon.com", // The 'mailto:' prefix opens the user's default email client
    icon: "fas fa-envelope"
  }
];

// Style for hr
 let hr = {width: "70vw"}

    return (
        <footer className={styles.footerLinks}>
            <img src={logo} alt="Little lemon logo" className={styles.img}/>

            <hr className={styles.hr}/>

            <nav>
                <FooterLink title="Navigation" data={footerLinks}/>
            </nav>

                <FooterLink title="Social Media" data={socialMediaLinks}/>

                <FooterLink title="Contact" data={contactLinks}/>

        </footer>
    )
}