import { motion } from 'motion/react';

const stats = [
  "⭐ 4.5 NO GOOGLE",
  "10 ANOS DE HISTÓRIA",
  "+41K NO INSTAGRAM",
  "MELHOR HAPPY HOUR DE GRAVATÁ",
  "AMBIENTE INSTAGRAMÁVEL",
  "SUSHINACHOS CREW",
];

export default function StatsTicker() {
  return (
    <div className="bg-tequila py-4 overflow-hidden flex whitespace-nowrap border-y border-black/10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-20 items-center will-change-transform"
      >
        {[...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex gap-20 items-center">
             <span className="font-display text-sm md:text-base font-black text-black uppercase italic tracking-widest">
              {stat}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
