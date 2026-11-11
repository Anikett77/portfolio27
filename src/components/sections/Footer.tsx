import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import profilePhoto from "@/assets/profile-photo.png";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <StackedCircularFooter
      brandName="Aniket"
      email="aniketchaturvedi83@gmail.com"
      profileImage={profilePhoto}
      tagline="Web Developer & Video Editor helping brands create impactful digital experiences."
      socialLinks={{
        github: "https://github.com/Aniket77",
        linkedin: "https://www.linkedin.com/in/anikett77/",
        instagram: "https://instagram.com/anikxt_chaturvxdi",
        website: "https://portfolio-anikett77.vercel.app/",
      }}
      navLinks={footerLinks}
    />
  );
};

export default Footer;
