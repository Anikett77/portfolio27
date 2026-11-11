import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealImageList, type ShowImageListItemProps } from "@/components/ui/reveal-images";

const services: ShowImageListItemProps[] = [
  {
    text: "Web Development",
    images: [
      {
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60",
        alt: "Web Development 1",
      },
      {
        src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60",
        alt: "Web Development 2",
      },
    ],
  },
  {
    text: "Video Editing",
    images: [
      {
        src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=200&auto=format&fit=crop&q=60",
        alt: "Video Editing 1",
      },
      {
        src: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=200&auto=format&fit=crop&q=60",
        alt: "Video Editing 2",
      },
    ],
  },
  {
    text: "UI / Visual Design",
    images: [
      {
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=60",
        alt: "UI Design 1",
      },
      {
        src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&auto=format&fit=crop&q=60",
        alt: "UI Design 2",
      },
    ],
  },
  {
    text: "Brand Identity",
    images: [
      {
        src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60",
        alt: "Brand Identity 1",
      },
      {
        src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60",
        alt: "Brand Identity 2",
      },
    ],
  },
  {
    text: "Mobile-First",
    images: [
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&auto=format&fit=crop&q=60",
        alt: "Mobile 1",
      },
      {
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&auto=format&fit=crop&q=60",
        alt: "Mobile 2",
      },
    ],
  },
  {
    text: "Performance",
    images: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=60",
        alt: "Performance 1",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=60",
        alt: "Performance 2",
      },
    ],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 -z-10" />
      
      <div className="container max-w-4xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Services tailored for <span className="text-primary italic">your success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your brand thrive in the modern landscape.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <RevealImageList title="Our services" items={services} />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
