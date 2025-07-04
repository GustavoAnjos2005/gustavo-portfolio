"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Photo = () => {
  const [isReady, setIsReady] = useState(false);
  const [key, setKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Reset animation quando a página carrega
    setIsReady(false);
    setKey(prev => prev + 1);
    
    // Aguarda um pouco para garantir que a página está completamente carregada
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 300); // Aumentei para 300ms para dar mais tempo

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full h-full relative">
      <motion.div
        key={key} // Força re-render da animação
        initial={{ opacity: 0 }}
        animate={{
          opacity: isReady ? 1 : 0,
          transition: {
            delay: 0.4, // Aumentei o delay
            duration: 0.6,
            ease: "easeIn"
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isReady ? 1 : 0,
            transition: {
              delay: 0.8, // Aumentei o delay
              duration: 0.6,
              ease: "easeInOut"
            }
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/foto-eu.png"
            priority={false}
            quality={100}
            fill
            sizes="(max-width: 768px) 298px, 498px"
            alt="Foto de Gustavo Anjos"
            className="object-contain"
            onLoad={() => setIsReady(true)}
          />
        </motion.div>

        <motion.svg
          className="w-[300px] xl:w-[560px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            x="3"
            y="3"
            width="450"
            height="500"
            stroke="#bf45bf"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ 
              strokeDasharray: "15 120 25 25"
            }}
            animate={isReady ? {
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
                "15 120 25 25"
              ]
            } : {}}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;