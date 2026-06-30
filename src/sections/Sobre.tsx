import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, BookOpen, Users } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: 'Formação',
    description: 'Bióloga Esteta pós-graduada em Estética Avançada',
  },
  {
    icon: Heart,
    title: 'Filosofia',
    description: 'Resultados naturais, seguros e transformadores',
  },
  {
    icon: BookOpen,
    title: 'Conhecimento',
    description: 'Ciência, técnica e sensibilidade estética',
  },
  {
    icon: Users,
    title: 'Atendimento',
    description: 'Personalizado e focado em cada paciente',
  },
];

export function Sobre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial-gold opacity-30" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/perfil-paula.jpg"
                  alt="Paula Gonçalves - Bióloga Esteta"
                  className="w-full h-auto object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/20 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-brown-dark rounded-2xl p-6 shadow-xl"
              >
                <p className="font-serif text-4xl text-gold">+10</p>
                <p className="text-cream/80 text-sm">Anos de</p>
                <p className="text-cream text-sm font-medium">Experiência</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold-dark text-sm font-medium tracking-widest uppercase">
                Sobre a Profissional
              </span>
            </div>

            {/* Title */}
            <h2 className="section-title-dark mb-6">
              Conheça <span className="text-gold-dark">Paula Gonçalves</span>
            </h2>

            {/* Bio Text */}
            <div className="space-y-4 text-brown-light/80 text-lg leading-relaxed mb-8">
              <p>
                Paula Gonçalves é <strong className="text-brown-dark">Bióloga Esteta</strong>,
                pós-graduada em Estética Avançada, apaixonada por resultados naturais,
                seguros e transformadores.
              </p>
              <p>
                Seu trabalho une <strong className="text-brown-dark">ciência, técnica e sensibilidade estética</strong>{' '}
                para realçar a beleza natural de cada paciente, sempre respeitando a
                individualidade e buscando o equilíbrio perfeito.
              </p>
              <p>
                Cristã, mãe, avó e empreendedora, acredita que{' '}
                <strong className="text-brown-dark">autoestima também é cuidado com a alma</strong>.
                Cada tratamento é uma oportunidade de transformar vidas e restaurar
                a confiança feminina.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-10">
              <p className="font-accent text-3xl text-gold-dark italic">
                &ldquo;Realçando a beleza que já existe em você&rdquo;
              </p>
              <p className="text-brown-light/60 mt-2">— Paula Gonçalves</p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gold/5 border border-gold/10 hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <p className="font-medium text-brown-dark text-sm">{item.title}</p>
                    <p className="text-brown-light/70 text-xs mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
