import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
