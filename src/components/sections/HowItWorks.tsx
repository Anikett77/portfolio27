import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Palette, Rocket } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "01 - Discovery Call",
    content: (
      <div>
        <p className="text-foreground text-lg font-medium mb-4">
          We discuss your project, goals, and vision
        </p>
        <p className="text-muted-foreground mb-8">
          I learn about your brand and what you want to achieve. This is where we align on expectations and understand the scope.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">Initial consultation</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
            alt="Discovery Call"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop"
            alt="Planning"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
        </div>
      </div>
    ),
  },
  {
    title: "02 - Strategy & Planning",
    content: (
      <div>
        <p className="text-foreground text-lg font-medium mb-4">
          I create a detailed plan and timeline
        </p>
        <p className="text-muted-foreground mb-8">
          You'll know exactly what to expect and when. We map out milestones, deliverables, and keep communication transparent.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">Strategic roadmap</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop"
            alt="Strategy"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
            alt="Planning"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
        </div>
      </div>
    ),
  },
  {
    title: "03 - Design & Build",
    content: (
      <div>
        <p className="text-foreground text-lg font-medium mb-4">
          The magic happens
        </p>
        <p className="text-muted-foreground mb-8">
          I craft your website or edit your video with precision and creativity. Regular updates keep you in the loop throughout the process.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Palette className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">Creative execution</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
            alt="Design"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
            alt="Build"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
        </div>
      </div>
    ),
  },
  {
    title: "04 - Launch & Support",
    content: (
      <div>
        <p className="text-foreground text-lg font-medium mb-4">
          Your project goes live
        </p>
        <p className="text-muted-foreground mb-8">
          I provide support and make sure everything runs smoothly. Post-launch assistance ensures your success continues.
        </p>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary" />
          </div>
          <span className="text-sm text-muted-foreground">Go live & beyond</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
            alt="Launch"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
            alt="Support"
            className="rounded-lg object-cover h-32 w-full shadow-card"
          />
        </div>
      </div>
    ),
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-muted/30">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="container max-w-6xl mx-auto" ref={containerRef}>
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            How we <span className="text-primary italic">work together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, transparent process designed to bring your vision to life efficiently.
          </p>
        </motion.div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default HowItWorks;
