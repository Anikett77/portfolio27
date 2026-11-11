import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";
import profilePhoto from "@/assets/profile-photo.png";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="container max-w-5xl mx-auto" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Have a project
            <br />
            <span className="text-primary italic">in mind?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Let's create something impactful together. I'm always excited to collaborate 
            on new projects and help bring creative visions to life.
          </p>
        </motion.div>

        <HighlightGroup className="group w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HighlighterItem>
              <div className="relative z-20 overflow-hidden rounded-3xl bg-card">
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 group-hover:opacity-30 transition-opacity duration-1000"
                  quantity={100}
                  color="#7c3aed"
                  staticity={30}
                />
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Info */}
                  <div className="flex-1 p-8 md:p-12">
                    <div className="flex flex-wrap gap-2 mb-8">
                      {["Web Development", "Video Editing", "UI/UX Design", "Branding"].map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                        <img 
                          src={profilePhoto} 
                          alt="Aniket Chaturvedi" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Aniket Chaturvedi</h4>
                        <p className="text-sm text-muted-foreground">Designer & Developer</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                        Any questions about your project?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Feel free to reach out to me! I'd love to discuss how we can work together.
                      </p>
                    </div>
                  </div>

                  {/* Right side - Actions */}
                  <div className="flex-1 p-8 md:p-12 bg-muted/30 flex flex-col justify-center">
                    <div className="space-y-4">
                      <Button variant="hero" size="lg" className="w-full group" asChild>
                        <a href="tel:+916264638602">
                          <Phone className="mr-2 w-5 h-5" />
                          Book a Call
                          <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </Button>
                      
                      <div className="flex gap-3">
                        <Button variant="outline" size="lg" className="flex-1" asChild>
                          <a href="mailto:aniketchaturvedi83@gmail.com">
                            <Mail className="mr-2 w-4 h-4" />
                            Email
                          </a>
                        </Button>
                        <Button variant="outline" size="lg" className="flex-1" asChild>
                          <a href="tel:+917879482501">
                            <Phone className="mr-2 w-4 h-4" />
                            Phone
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </motion.div>
        </HighlightGroup>
      </div>
    </section>
  );
};

export default CTA;
