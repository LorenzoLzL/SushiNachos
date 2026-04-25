import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

function MenuCard({ title, desc, img, color }: { title: string, desc: string, img: string, color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.innerWidth < 1024) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative aspect-[3/4] w-full glass-card group interactive overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 rounded-[1.5rem] overflow-hidden"
      >
        <img src={img} className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700 md:scale-125 md:group-hover:scale-100 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>

      <div 
        style={{ transform: "translateZ(100px)" }}
        className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 whitespace-normal"
      >
        <h3 className={`font-display text-xl lg:text-2xl font-black uppercase tracking-tight ${color}`}>{title}</h3>
      </div>

      <div className={`absolute top-10 right-10 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:${color} transition-colors glass`}>
        <span className="text-white font-mono text-xs font-bold">$</span>
      </div>
    </motion.div>
  );
}

export default function MenuCards() {
  const items = [
    {
      title: "SUSHI",
      desc: "A técnica milenar japonesa encontra o tempero explosivo da rua mexicana.",
      img: "https://lh3.googleusercontent.com/u/0/d/1FPGA7SHZ27W6lCDV4bMg8Ev9uELAGuly",
      color: "text-japan"
    },
    {
      title: "NACHOS GOURMET",
      desc: "Crocância absoluta com toppings premium e queijos artesanais fundidos.",
      img: "https://lh3.googleusercontent.com/u/0/d/1-rsi0D7NDTixyqwb8-EsRYoAY0mHoTGG",
      color: "text-mexico"
    },
    {
      title: "DRINKS DE AUTOR",
      desc: "Margaritas, Sakes e infusões exclusivas que contam a história da nossa fusão.",
      img: "https://lh3.googleusercontent.com/u/0/d/1J5V-8BkyB0b03Hm75jtMcqLXhr_l7qF-",
      color: "text-tequila"
    }
  ];

  return (
    <section id="menu" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-mexico font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Manifesto de Sabor</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter">
              A FUSÃO QUE <span className="italic text-japan">DESAFIA</span> A LÓGICA.
            </h2>
          </div>
          <a 
            href="https://www.deliway.com.br/sushi-nachos-delivery-navegantes-sc?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoPjuDyJbbndULF1B_DzoEA378XZ9nQ6BXYeK6rMznjX2FsKh7bAuJvSg9N4_aem_jURwzb7-vufvt1UbfjkX8A"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive text-white/40 hover:text-white transition-colors flex items-center gap-4 group"
          >
            <span className="font-bold text-sm tracking-widest uppercase">Ver Cardápio Digital</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
              →
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <MenuCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
