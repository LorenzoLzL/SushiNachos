import { motion } from 'motion/react';
import { Instagram, Facebook, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function ContactFooter() {
  return (
    <footer id="location" className="relative pt-32 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          {/* Info */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-12 uppercase leading-[0.9]">NOS VISITE EM <br/> <span className="text-japan italic font-light">GRAVATÁ</span></h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div>
                  <h4 className="font-display text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Endereço</h4>
                  <p className="text-sm font-medium">R. Helmuth Baungarten, 308 - Gravatá, Navegantes - SC</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div>
                  <h4 className="font-display text-[10px] text-white/40 uppercase tracking-[0.2em] mb-2">Siga a EXPERIÊNCIA</h4>
                  <div className="flex gap-6 mt-1">
                    <a href="https://www.instagram.com/sushinachos.gravata/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-mexico interactive cursor-pointer hover:opacity-70">INSTAGRAM</a>
                    <a href="https://wa.me/554730657607" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-japan interactive cursor-pointer hover:opacity-70">WHATSAPP</a>
                    <a href="https://www.facebook.com/Sushinachos/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-tequila interactive cursor-pointer hover:opacity-70">FACEBOOK</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Visual */}
          <div className="relative rounded-[3rem] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-mexico/20 to-japan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
            <img 
              src="https://lh3.googleusercontent.com/u/0/d/17kJpvKBmn_8J7CKcidpU2x6L5x4XjG57" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover md:grayscale md:brightness-50 md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.a 
                href="https://www.google.com/maps/place/SushiNachos/@-26.8309961,-48.6294404,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8ce04ba6ced6d:0x6af4b63f4bd8c32b!8m2!3d-26.8309961!4d-48.6294404!16s%2Fg%2F11b6srkslv?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-black/80 backdrop-blur-md px-10 py-5 rounded-full border border-white/20 font-bold uppercase tracking-widest text-xs interactive block"
              >
                Abrir no Google Maps
              </motion.a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <p className="text-white/20 text-xs font-medium uppercase tracking-widest">
            © 2024 SushiNachos - Uma Obra de Arte da <span className="text-white/40">Vibe Studio</span>.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
