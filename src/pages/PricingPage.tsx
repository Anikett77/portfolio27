import Navbar from "@/components/Navbar";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import { motion } from "framer-motion";

const PricingPage = () => {
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
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default PricingPage;
