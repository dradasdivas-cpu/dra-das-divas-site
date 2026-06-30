import { motion } from 'framer-motion';
import { GoldenParticles } from '../components/effects/GoldenParticles';
import { Calendar, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-banner.png"
          alt="Dra das Divas - Estética Avançada"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_20%]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-dark via-brown-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/80 via-transparent to-transparent" />
      </div>

      {/* Golden Particles */}
      <GoldenParticles />

      {/* Content */}
      <div className="relative z-20 container-custom pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream mb-4 leading-tight"
          >
            <span className="text-gradient-gold text-glow-gold">DRª DAS DIVAS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream/90 mb-6"
          >
            Estética Avançada e Harmonização
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-cream/70 mb-10 max-w-xl leading-relaxed"
          >
            Realçando sua beleza com naturalidade, ciência e segurança.
            Protocolos exclusivos para resultados transformadores.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5521969037557"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 text-base"
            >
              <Calendar size={20} />
              Agendar Avaliação
            </a>
            <a
              href="https://wa.me/5521969037557"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle size={20} />
              Fale no WhatsApp
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-serif text-xl">+10</span>
              </div>
              <div>
                <p className="text-cream font-medium">Anos de</p>
                <p className="text-cream/60 text-sm">Experiência</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-serif text-xl">+5k</span>
              </div>
              <div>
                <p className="text-cream font-medium">Clientes</p>
                <p className="text-cream/60 text-sm">Satisfeitas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="text-gold font-serif text-xl">100%</span>
              </div>
              <div>
                <p className="text-cream font-medium">Foco em</p>
                <p className="text-cream/60 text-sm">Segurança</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-gold"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
