import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram as InstagramIcon, ExternalLink, Heart, MessageCircle } from 'lucide-react';

// Mock Instagram posts (in a real scenario, these would come from the Instagram API)
const instagramPosts = [
  {
    id: 1,
    image: '/images/resultado-1.jpg',
    likes: 234,
    comments: 18,
  },
  {
    id: 2,
    image: '/images/resultado-2.jpg',
    likes: 189,
    comments: 12,
  },
  {
    id: 3,
    image: '/images/resultado-3.jpg',
    likes: 312,
    comments: 24,
  },
  {
    id: 4,
    image: '/images/resultado-4.jpg',
    likes: 156,
    comments: 9,
  },
  {
    id: 5,
    image: '/images/hero-banner.png',
    likes: 445,
    comments: 32,
  },
  {
    id: 6,
    image: '/images/perfil-paula.jpg',
    likes: 278,
    comments: 21,
  },
];

export function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-brown-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial-gold opacity-20" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <InstagramIcon size={24} className="text-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Siga-nos
            </span>
          </div>
          
          <h2 className="section-title mb-4">
            @<span className="text-gradient-gold">dradasdivas</span>
          </h2>
          
          <p className="text-cream/70 text-lg leading-relaxed mb-6">
            Acompanhe nosso dia a dia, dicas de skincare, resultados e 
            novidades sobre estética avançada.
          </p>

          <a
            href="https://instagram.com/dradasdivas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
          >
            <span className="font-medium">Ver perfil no Instagram</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/dradasdivas"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brown-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <div className="flex items-center gap-1 text-cream">
                  <Heart size={18} className="fill-gold text-gold" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-cream">
                  <MessageCircle size={18} className="text-gold" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-brown-dark/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <InstagramIcon size={14} className="text-cream" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/dradasdivas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold inline-flex items-center gap-2"
          >
            <InstagramIcon size={20} />
            Seguir @dradasdivas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
