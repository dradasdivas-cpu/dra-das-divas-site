import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Sparkles, 
  Heart, 
  Droplets, 
  Smile, 
  Syringe,
  Wind,
  RefreshCw,
  User
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Harmonização Facial',
    description: 'Procedimentos avançados para equilibrar e realçar os traços do rosto, respeitando a naturalidade e individualidade de cada paciente.',
    features: ['Preenchimento', 'Toxina Botulínica', 'Fios de PDO'],
  },
  {
    icon: Heart,
    title: 'Harmonização Glútea',
    description: 'Técnicas especializadas para modelar e harmonizar a região glútea, proporcionando resultados naturais e proporcionais.',
    features: ['Bioestimuladores', 'Preenchimento', 'Colágeno'],
  },
  {
    icon: Droplets,
    title: 'Bioestimuladores de Colágeno',
    description: 'Estimulação natural da produção de colágeno para rejuvenescimento facial e corporal, com resultados progressivos e duradouros.',
    features: ['Radiesse', 'Sculptra', 'Ellansé'],
  },
  {
    icon: Smile,
    title: 'Preenchimento Labial',
    description: 'Técnica delicada para lábios mais harmoniosos, naturais e proporcionais ao rosto, respeitando a anatomia individual.',
    features: ['Naturalidade', 'Simetria', 'Hidratação'],
  },
  {
    icon: Syringe,
    title: 'Microagulhamento',
    description: 'Tratamento que estimula a regeneração celular através de microperfurações controladas, melhorando textura e firmeza.',
    features: ['Indução de colágeno', 'Rejuvenescimento', 'Estrias'],
  },
  {
    icon: Wind,
    title: 'Drenagem Linfática',
    description: 'Massagem terapêutica que estimula o sistema linfático, reduzindo inchaços, melhorando a circulação e promovendo bem-estar.',
    features: ['Redução de edemas', 'Detox', 'Relaxamento'],
  },
  {
    icon: RefreshCw,
    title: 'Terapias Regenerativas',
    description: 'Tratamentos de última geração que utilizam fatores de crescimento para regeneração tecidual e rejuvenescimento.',
    features: ['Plasma Rico', 'Exossomos', 'Células-tronco'],
  },
  {
    icon: User,
    title: 'Tratamentos Corporais',
    description: 'Protocolos completos para modelagem corporal, redução de medidas, celulite e flacidez com tecnologia de ponta.',
    features: ['Radiofrequência', 'Criolipólise', 'Ultrassom'],
  },
];

export function Especialidades() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="especialidades" className="section-padding bg-brown-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[150px]" />
      
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
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Nossos Serviços
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          
          <h2 className="section-title mb-6">
            Nossas <span className="text-gradient-gold">Especialidades</span>
          </h2>
          
          <p className="text-cream/70 text-lg leading-relaxed">
            Tratamentos personalizados e protocolos exclusivos para realçar sua beleza 
            natural com segurança, ciência e resultados transformadores.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group"
            >
              <div className="card-glass h-full p-6 transition-all duration-500 hover:border-gold/50 hover:shadow-gold">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-cream mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-cream/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold/80 border border-gold/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a
                  href="https://wa.me/5521969037557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold text-sm font-medium group/btn"
                >
                  <span className="relative">
                    Saiba Mais
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover/btn:w-full" />
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-cream/60 mb-4">
            Não sabe qual tratamento é ideal para você?
          </p>
          <a
            href="https://wa.me/5521969037557"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <Sparkles size={18} />
            Agende uma Avaliação Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
