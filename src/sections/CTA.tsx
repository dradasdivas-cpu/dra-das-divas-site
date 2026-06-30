import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Sparkles, ArrowRight } from 'lucide-react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-light to-gold-dark" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-white/60" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white/40" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-white/50" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Sparkles size={18} className="text-brown-dark" />
            <span className="text-brown-dark text-sm font-medium">
              Sua transformação começa aqui
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark mb-6 leading-tight"
          >
            Descubra sua
            <br />
            <span className="relative">
              melhor versão
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path
                  d="M2 10C50 4 100 2 150 2C200 2 250 4 298 10"
                  stroke="#2D2419"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-40"
                />
              </svg>
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-brown-dark/80 text-lg md:text-xl mb-10 max-w-xl mx-auto"
          >
            Agende sua avaliação gratuita e descubra os tratamentos 
            ideais para realçar sua beleza natural.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://wa.me/5521969037557"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-brown-dark text-cream px-10 py-5 rounded-pill text-lg font-medium shadow-xl shadow-brown-dark/30 hover:shadow-2xl hover:shadow-brown-dark/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar size={22} />
              Agendar Consulta
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-brown-dark/60 text-sm mt-6"
          >
            Avaliação gratuita • Sem compromisso • Atendimento personalizado
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
