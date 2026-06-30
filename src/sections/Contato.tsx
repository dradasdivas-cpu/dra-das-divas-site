import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Instagram as InstagramIcon, 
  MessageCircle,
  Clock,
  Mail,
  ExternalLink
} from 'lucide-react';

const contactInfo = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(21) 96903-7557',
    href: 'https://wa.me/5521969037557',
    description: 'Atendimento rápido pelo WhatsApp',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(21) 96903-7557',
    href: 'tel:+5521969037557',
    description: 'Ligue para agendar sua consulta',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@dradasdivas',
    href: 'https://instagram.com/dradasdivas',
    description: 'Siga nosso perfil',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contato@dradasdivas.com',
    href: 'mailto:contato@dradasdivas.com',
    description: 'Envie sua mensagem',
  },
];

const hours = [
  { day: 'Segunda a Sexta', time: '09:00 - 18:00' },
  { day: 'Sábado', time: '09:00 - 13:00' },
  { day: 'Domingo', time: 'Fechado' },
];

export function Contato() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contato" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />

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
              Entre em Contato
            </span>
            <div className="w-8 h-px bg-gold-dark" />
          </div>
          
          <h2 className="section-title-dark mb-6">
            Vamos <span className="text-gold-dark">conversar</span>?
          </h2>
          
          <p className="text-brown-light/70 text-lg leading-relaxed">
            Estamos aqui para tirar todas as suas dúvidas e ajudar você 
            a encontrar o tratamento ideal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-serif text-2xl text-brown-dark mb-6">
              Informações de Contato
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gold/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <item.icon size={22} className="text-gold-dark" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-brown-light/60">{item.label}</p>
                    <p className="font-medium text-brown-dark group-hover:text-gold-dark transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ExternalLink size={16} className="text-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-gold/5 border border-gold/10">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-gold-dark" />
                <h4 className="font-medium text-brown-dark">Horário de Funcionamento</h4>
              </div>
              <div className="space-y-2">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-brown-light/70">{item.day}</span>
                    <span className={`font-medium ${item.time === 'Fechado' ? 'text-brown-light/40' : 'text-brown-dark'}`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-serif text-2xl text-brown-dark mb-6">
              Localização
            </h3>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gold/10 border border-gold/10">
              {/* Placeholder for Google Maps - In production, replace with actual embed */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin size={32} className="text-gold-dark" />
                  </div>
                  <p className="text-brown-dark font-medium mb-2">
                    Rio de Janeiro, RJ
                  </p>
                  <p className="text-brown-light/60 text-sm mb-4">
                    Atendimento com hora marcada
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-dark hover:text-gold transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-6 p-6 rounded-2xl bg-brown-dark text-cream">
              <p className="text-lg font-medium mb-2">
                Pronta para se sentir ainda mais linda?
              </p>
              <p className="text-cream/60 text-sm mb-4">
                Agende sua avaliação gratuita e descubra o tratamento ideal para você.
              </p>
              <a
                href="https://wa.me/5521969037557"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-brown-dark px-6 py-3 rounded-pill font-medium hover:bg-gold-light transition-colors"
              >
                <MessageCircle size={18} />
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
