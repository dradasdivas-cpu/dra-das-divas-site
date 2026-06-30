import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CheckCircle2, 
  Shield, 
  UserCheck, 
  Star, 
  Cpu, 
  Heart 
} from 'lucide-react';

const diferenciais = [
  {
    icon: CheckCircle2,
    title: 'Resultados Naturais',
    description: 'Técnicas que respeitam sua individualidade, realçando sua beleza sem artificialidades.',
  },
  {
    icon: Shield,
    title: 'Segurança e Ciência',
    description: 'Protocolos baseados em evidências científicas com produtos certificados e aprovados.',
  },
  {
    icon: UserCheck,
    title: 'Atendimento Personalizado',
    description: 'Cada paciente é única. Avaliação detalhada para protocolos sob medida.',
  },
  {
    icon: Star,
    title: 'Protocolos Exclusivos',
    description: 'Técnicas desenvolvidas e aprimoradas ao longo de mais de 10 anos de experiência.',
  },
  {
    icon: Cpu,
    title: 'Alta Tecnologia',
    description: 'Equipamentos de última geração para tratamentos mais eficazes e seguros.',
  },
  {
    icon: Heart,
    title: 'Foco em Autoestima',
    description: 'Acreditamos que beleza e bem-estar andam juntos. Cuidamos de você por completo.',
  },
];

export function Diferenciais() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8B6914 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

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
              Por que nos Escolher
            </span>
            <div className="w-8 h-px bg-gold-dark" />
          </div>
          
          <h2 className="section-title-dark mb-6">
            Diferenciais da <span className="text-gold-dark">Dra das Divas</span>
          </h2>
          
          <p className="text-brown-light/70 text-lg leading-relaxed">
            Compromisso com a excelência, segurança e resultados que transformam vidas.
            Conheça o que nos torna referência em estética avançada.
          </p>
        </motion.div>

        {/* Diferenciais Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-white border border-gold/10 shadow-lg shadow-gold/5 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30 transition-all duration-500 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/30 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={32} className="text-white" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gold/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-brown-dark mb-3 group-hover:text-gold-dark transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-brown-light/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Check Mark */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle2 size={16} className="text-gold-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '+5.000', label: 'Clientes Atendidas' },
            { value: '+10', label: 'Anos de Experiência' },
            { value: '100%', label: 'Foco em Segurança' },
            { value: '4.9', label: 'Avaliação Média' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl md:text-5xl text-gold-dark mb-2">{stat.value}</p>
              <p className="text-brown-light/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
