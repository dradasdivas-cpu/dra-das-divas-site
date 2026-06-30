import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const depoimentos = [
  {
    name: 'Ana Carolina M.',
    avatar: 'AM',
    rating: 5,
    text: 'A Paula é simplesmente incrível! Fiz harmonização facial e o resultado ficou super natural. Ela tem um olhar artístico e entende exatamente o que a gente precisa. Me sinto muito mais confiante!',
    treatment: 'Harmonização Facial',
  },
  {
    name: 'Fernanda L.',
    avatar: 'FL',
    rating: 5,
    text: 'Depois de muito pesquisar, encontrei a Dra das Divas. O preenchimento labial ficou perfeito, do jeito que eu queria - natural e harmonioso. O atendimento é impecável do início ao fim.',
    treatment: 'Preenchimento Labial',
  },
  {
    name: 'Mariana S.',
    avatar: 'MS',
    rating: 5,
    text: 'Fiz bioestimulador e estou amando o resultado! A pele ficou mais firme e com um viço incrível. A Paula explica tudo com muita paciência e segurança. Super recomendo!',
    treatment: 'Bioestimulador',
  },
  {
    name: 'Juliana R.',
    avatar: 'JR',
    rating: 5,
    text: 'A drenagem linfática com a Paula é uma experiência única. Além de ser super relaxante, os resultados são visíveis desde a primeira sessão. Profissional excelente!',
    treatment: 'Drenagem Linfática',
  },
  {
    name: 'Camila P.',
    avatar: 'CP',
    rating: 5,
    text: 'Fiz o protocolo corporal completo e estou me sentindo uma nova mulher! A Paula é muito atenciosa e os tratamentos são de altíssima qualidade. Vale cada investimento.',
    treatment: 'Tratamento Corporal',
  },
];

export function Depoimentos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="depoimentos" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <Quote size={400} className="absolute -top-20 -left-20 text-gold-dark" />
        <Quote size={400} className="absolute -bottom-20 -right-20 text-gold-dark rotate-180" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-gold-dark" />
            <span className="text-gold-dark text-sm font-medium tracking-widest uppercase">
              Depoimentos
            </span>
            <div className="w-8 h-px bg-gold-dark" />
          </div>
          
          <h2 className="section-title-dark mb-6">
            O que nossas <span className="text-gold-dark">clientes dizem</span>
          </h2>
          
          <p className="text-brown-light/70 text-lg leading-relaxed">
            A satisfação de nossas clientes é o nosso maior orgulho. 
            Conheça as experiências de quem já passou pela Dra das Divas.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-xl shadow-gold/10 p-8 md:p-12 border border-gold/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg">
              <Quote size={24} className="text-white" />
            </div>

            {/* Content */}
            <div className="pt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(depoimentos[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-brown-dark text-lg md:text-xl leading-relaxed mb-8 font-accent italic">
                &ldquo;{depoimentos[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center">
                    <span className="font-serif text-lg text-gold-dark">
                      {depoimentos[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-brown-dark">
                      {depoimentos[currentIndex].name}
                    </p>
                    <p className="text-sm text-gold-dark">
                      {depoimentos[currentIndex].treatment}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold-dark hover:bg-gold/10 transition-colors"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold-dark hover:bg-gold/10 transition-colors"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gold-dark'
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-2 text-brown-light/60">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm">4.9/5 avaliação média</span>
          </div>
          <div className="w-px h-6 bg-gold/20 hidden md:block" />
          <div className="text-brown-light/60 text-sm">
            +5.000 clientes atendidas
          </div>
          <div className="w-px h-6 bg-gold/20 hidden md:block" />
          <div className="text-brown-light/60 text-sm">
            98% de satisfação
          </div>
        </motion.div>
      </div>
    </section>
  );
}
