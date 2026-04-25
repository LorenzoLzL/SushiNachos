import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  return (
    <section ref={targetRef} className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden mesh-gradient py-20 md:py-0">
      {/* Background Floating Elements - Reduced blur for mobile performance */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-10 w-64 h-64 bg-mexico/30 blur-[60px] md:blur-[100px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-10 w-80 h-80 bg-japan/20 blur-[60px] md:blur-[100px] rounded-full" 
      />

      <motion.div 
        style={{ 
          opacity: isMobile ? 1 : opacity, 
          scale: isMobile ? 1 : scale 
        }} 
        className="relative z-10 text-center px-6 mt-16 md:mt-0 will-change-[opacity,transform]"
      >
        <div className="inline-block px-3 py-1 bg-mexico/20 text-mexico text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase rounded-sm mb-8 border border-mexico/30">
          Navegantes • GravatÁ • 10 Anos
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-8xl font-extrabold mb-8 uppercase leading-[1.1] md:leading-[0.9] tracking-tighter">
          Onde o Sol <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-mexico to-tequila">Nascente</span> <br/>
          encontra a <span className="italic font-light text-japan">Fiesta.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-sans text-white/60 text-base md:text-xl max-w-lg mx-auto mb-16 md:mb-12 leading-relaxed"
        >
          Há 10 anos, a fusão mais audaciosa de Gravatá. <br />
          <span className="text-white">Sushi criativo & Nachos explosivos</span> em <span className="text-tequila font-semibold">uma experiência incrível</span>.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <motion.a
            href="https://www.deliway.com.br/sushi-nachos-delivery-navegantes-sc?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoPjuDyJbbndULF1B_DzoEA378XZ9nQ6BXYeK6rMznjX2FsKh7bAuJvSg9N4_aem_jURwzb7-vufvt1UbfjkX8A"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-black font-black uppercase tracking-tighter rounded-sm hover:bg-tequila transition-colors interactive inline-block"
          >
            Ver CardÁpio Completo
          </motion.a>
        </div>
      </motion.div>

      {/* Hero Image - Floating Sushi/Nacho */}
      <motion.img 
        src="https://lh3.googleusercontent.com/u/0/d/1FPGA7SHZ27W6lCDV4bMg8Ev9uELAGuly" 
        alt="Modern Sushi"
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 0.2, rotate: -20 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -bottom-10 -left-20 w-3/4 md:w-1/2 max-w-lg pointer-events-none md:grayscale md:hover:grayscale-0 transition-all duration-700 md:opacity-30"
      />
      <motion.img 
        src="https://lh3.googleusercontent.com/u/0/d/1-rsi0D7NDTixyqwb8-EsRYoAY0mHoTGG" 
        alt="Gourmet Nachos"
        initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
        animate={{ scale: 1, opacity: 0.2, rotate: 25 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute -top-10 -right-20 w-3/4 md:w-1/2 max-w-lg pointer-events-none md:grayscale md:hover:grayscale-0 transition-all duration-700 md:opacity-30"
      />
    </section>
  );
}
