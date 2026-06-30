import { Instagram as InstagramIcon, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
];

const services = [
  'Harmonização Facial',
  'Preenchimento Labial',
  'Bioestimuladores',
  'Drenagem Linfática',
  'Tratamentos Corporais',
  'Microagulhamento',
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brown-darker pt-20 pb-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-block mb-6">
              <span className="font-serif text-3xl text-gradient-gold font-semibold">
                DRª DAS DIVAS
              </span>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Estética Avançada e Harmonização Facial. 
              Realçando sua beleza com naturalidade, 
              ciência e segurança.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/dradasdivas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/5521969037557"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-dark transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#especialidades"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#especialidades');
                    }}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-cream mb-6">Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="text-cream/40 text-xs mb-1">WhatsApp</p>
                <a
                  href="https://wa.me/5521969037557"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  (21) 96903-7557
                </a>
              </div>
              <div>
                <p className="text-cream/40 text-xs mb-1">Instagram</p>
                <a
                  href="https://instagram.com/dradasdivas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  @dradasdivas
                </a>
              </div>
              <div>
                <p className="text-cream/40 text-xs mb-1">Horário</p>
                <p className="text-cream/80 text-sm">
                  Seg - Sex: 09h às 18h
                </p>
                <p className="text-cream/80 text-sm">
                  Sáb: 09h às 13h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dra das Divas. Todos os direitos reservados.
          </p>
          
          <p className="text-cream/40 text-sm">
            Desenvolvido por{' '}
            <a
              href="https://www.fton.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              Faith Traffic Solution
            </a>
          </p>
        </div>

        {/* Professional Info */}
        <div className="mt-8 pt-8 border-t border-gold/10">
          <p className="text-cream/30 text-xs text-center max-w-2xl mx-auto">
            Paula Gonçalves - Bióloga Esteta. Atuação em estética avançada e harmonização facial. 
            Todos os procedimentos são realizados com produtos certificados e aprovados pela ANVISA. 
            Resultados podem variar de acordo com a individualidade de cada paciente.
          </p>
        </div>
      </div>
    </footer>
  );
}
