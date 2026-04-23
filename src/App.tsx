import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsTicker from './components/StatsTicker';
import ExperienceSection from './components/ExperienceSection';
import MenuCards from './components/MenuCards';
import ContactFooter from './components/ContactFooter';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-obsidian font-sans selection:bg-mexico selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-mexico via-tequila to-japan z-[200] origin-left"
        style={{ scaleX }}
      />

      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <StatsTicker />
        <ExperienceSection />
        
        {/* Decorative Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <MenuCards />
        <ContactFooter />
      </main>

      {/* Persistent Audio Toggle Placeholder (for Vibe) */}
      <div className="fixed bottom-10 right-10 z-50">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center interactive group"
        >
          <div className="flex gap-1 items-end">
            {[0.4, 0.7, 0.3, 0.9].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "80%", "20%"] }}
                transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity }}
                className="w-1 bg-mexico"
                style={{ height: `${h * 100}%` }}
              />
            ))}
          </div>
        </motion.button>
      </div>
    </div>
  );
}
