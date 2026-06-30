import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';

const resultados = [
  {
    image: '/images/resultado-1.jpg',
    title: 'Harmonização Facial',
    description: 'Resultado natural com preenchimento e toxina botulínica',
    duration: '30 dias após procedimento',
  },
  {
    image: '/images/resultado-2.jpg',
    title: 'Preenchimento Labial',
    description: 'Lábios harmoniosos e naturalmente volumosos',
    duration: '14 dias após procedimento',
  },
  {
    image: '/images/resultado-3.jpg',
    title: 'Bioestimulador de Colágeno',
    description: 'Rejuvenescimento facial com resultado progressivo',
    duration: '60 dias após procedimento',
  },
  {
    image: '/images/resultado-4.jpg',
    title: 'Tratamento Corporal',
    description: 'Modelagem corporal com radiofrequência e drenagem',
    duration: '45 dias após protocolo',
  },
];

export function Resultados() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="resultados" className="section-padding bg-brown-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]" />

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
              Transformações Reais
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          
          <h2 className="section-title mb-6">
            Resultados que <span className="text-gradient-gold">Transformam</span>
          </h2>
          
          <p className="text-cream/70 text-lg leading-relaxed">
            Conheça algumas das transformações realizadas com dedicação, 
            técnica e cuidado. Resultados naturais e personalizados.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {resultados.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative"
            >
              <div 
                className="relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn size={20} className="text-gold" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-serif text-xl text-cream mb-1">{item.title}</h3>
                  <p className="text-cream/70 text-sm mb-2">{item.description}</p>
                  <span className="text-gold text-xs">{item.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-cream/40 text-sm max-w-2xl mx-auto"
        >
          *Os resultados podem variar de acordo com a individualidade de cada paciente. 
          Agende uma avaliação para conhecer o tratamento ideal para você.
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-brown-dark/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Resultado ampliado"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
