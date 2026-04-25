import { motion } from 'motion/react';

export default function ExperienceSection() {
  const features = [
    {
      title: "Ambiente Temático",
      desc: "Um ambiente vibrante e acolhedor, onde cores, luzes e cultura se misturam para criar uma experiência descontraída e cheia de personalidade.",
      color: "border-mexico",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
    },
    {
      title: "Coquetéis Autorais",
      desc: "Margaritas e Sakes que desafiam seus sentidos.",
      color: "border-japan",
      img: "https://lh3.googleusercontent.com/u/0/d/1J5V-8BkyB0b03Hm75jtMcqLXhr_l7qF-"
    },
    {
      title: "Happy Hour Vibrante",
      desc: "A melhor vibe de Gravatá, todos os dias.",
      color: "border-tequila",
      img: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-10 tracking-tighter leading-tight uppercase">
            Não é apenas comida, é um <span className="text-glow-mexico text-mexico">choque</span> cultural.
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/60 mb-10 md:mb-12 max-w-md leading-relaxed">
            Nascido da colisão entre o minimalismo zen japonês e o maximalismo vibrante mexicano, o SushiNachos redefine a experiência gastronômica.
          </p>
          
          <div className="space-y-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`p-8 border-l-4 ${feature.color} bg-white/5 backdrop-blur-sm group interactive`}
              >
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{feature.title}</h3>
                <p className="text-white/40">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative mt-12 lg:mt-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10"
          >
            <img 
              src="https://lh3.googleusercontent.com/u/0/d/1J5V-8BkyB0b03Hm75jtMcqLXhr_l7qF-" 
              alt="Japanese Mexican Fusion" 
              className="w-full h-full object-cover md:scale-110 md:hover:scale-100 transition-transform duration-1000 md:grayscale md:hover:grayscale-0"
            />
          </motion.div>
          
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-mexico/20 blur-3xl rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
