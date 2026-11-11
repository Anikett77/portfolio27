import Navbar from "@/components/Navbar";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

const ServicesPage = () => {
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
        <Services />
        <HowItWorks />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;
