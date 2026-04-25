import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-[100] px-3 md:px-6 py-4 glass"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        <div className="flex items-center">
          <span className="font-display text-sm md:text-2xl font-black tracking-tight text-white bg-mexico px-2 py-1 leading-none">
            SUSHINACHOS
          </span>
        </div>

        <div className="hidden md:flex gap-10 text-sm font-semibold tracking-widest uppercase text-white/70">
          <a href="#experience" className="hover:text-japan transition-colors interactive">Experiência</a>
          <a href="#menu" className="hover:text-mexico transition-colors interactive">Cardápio</a>
          <a href="#location" className="hover:text-tequila transition-colors interactive">Localização</a>
        </div>

        <motion.a
          href="https://www.deliway.com.br/sushi-nachos-delivery-navegantes-sc?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnoPjuDyJbbndULF1B_DzoEA378XZ9nQ6BXYeK6rMznjX2FsKh7bAuJvSg9N4_aem_jURwzb7-vufvt1UbfjkX8A"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 md:px-6 py-2 bg-gradient-to-r from-mexico to-tequila text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,0,85,0.4)] interactive transition-transform uppercase text-[10px] md:text-xs text-center leading-tight whitespace-nowrap"
        >
          PEDIR AGORA
        </motion.a>
      </div>
    </motion.nav>
  );
}
