import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: User,
      title: "Personal Approach",
      description: "I work closely with each client to understand their unique vision."
    },
    {
      icon: Target,
      title: "Result-Driven",
      description: "Every project is crafted to achieve measurable outcomes."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quality work delivered on time, every time."
    }
  ];

  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent -z-10" />
      
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <img 
                  src={profilePhoto}
                  alt="Aniket Chaturvedi"
                  className="w-full h-96 object-cover object-top rounded-2xl"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -z-10 top-8 -left-8 w-full h-full bg-primary/10 rounded-3xl"
                animate={{ rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <div>
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              About Me
            </motion.span>
            
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Crafting digital
              <br />
              <span className="text-primary italic">experiences</span> that matter
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi, I'm <span className="text-foreground font-semibold">Aniket Chaturvedi</span>. 
              I specialize in building modern websites and editing engaging videos that are 
              clean, purposeful, and result-driven. I work closely with clients to understand 
              their vision and transform it into digital products that look professional and 
              perform well.
            </motion.p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
