import styles from "./Footer.module.css"
import FooterLink from "../FooterLink/FooterLink"
import CustomHr from "../CustomHr/CustomHr"

export default function Footer(){

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

// Style for hr
 let hr = {width: "70vw"}

    return (
        <footer className={styles.footerLinks}>
            <nav>
                <FooterLink title="Navigation" data={footerLinks}/>
            </nav>

                <CustomHr style={hr}/>
                
                <FooterLink title="Social Media" data={socialMediaLinks}/>

                <CustomHr style={hr}/>
                
                <FooterLink title="Social Media" data={socialMediaLinks}/>

                <CustomHr style={hr}/>

                <img src="" alt="" />
            
        </footer>
    )
}