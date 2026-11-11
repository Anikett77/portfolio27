import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Instagram, Linkedin, Globe } from "lucide-react"

interface StackedCircularFooterProps {
  brandName: string;
  email: string;
  profileImage?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
  navLinks: { name: string; href: string }[];
  tagline?: string;
}

function StackedCircularFooter({ 
  brandName, 
  email,
  profileImage,
  socialLinks, 
  navLinks,
  tagline 
}: StackedCircularFooterProps) {
  return (
    <footer className="bg-background py-12 relative overflow-hidden">
      {/* Grainy texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-muted p-2 overflow-hidden">
            <a href="#">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt={brandName} 
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <span className="text-2xl font-display font-bold text-foreground p-6 block">
                  {brandName}<span className="text-primary">.</span>
                </span>
              )}
            </a>
          </div>
          {tagline && (
            <p className="text-muted-foreground text-center max-w-md mb-6">
              {tagline}
            </p>
          )}
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mb-8 flex space-x-4">
            {socialLinks.github && (
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="rounded-full bg-muted p-3 hover:bg-primary/10 transition-colors">
                <Github className="h-5 w-5 text-foreground" />
                <span className="sr-only">GitHub</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full bg-muted p-3 hover:bg-primary/10 transition-colors">
                <Linkedin className="h-5 w-5 text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {socialLinks.instagram && (
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-muted p-3 hover:bg-primary/10 transition-colors">
                <Instagram className="h-5 w-5 text-foreground" />
                <span className="sr-only">Instagram</span>
              </a>
            )}
            {socialLinks.website && (
              <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" className="rounded-full bg-muted p-3 hover:bg-primary/10 transition-colors">
                <Globe className="h-5 w-5 text-foreground" />
                <span className="sr-only">Website</span>
              </a>
            )}
          </div>
          <div className="mb-8 w-full max-w-sm">
            <form className="flex space-x-2">
              <div className="flex-1">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
