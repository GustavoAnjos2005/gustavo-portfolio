"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.8,
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.8,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname} className="w-full">
        {/* Camadas de transição com efeitos */}
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-gradient-to-l from-[#2e2257] to-[#1a1a2e]"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-40"
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-[#3b2d71] relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute -inset-[100px] bg-[url('/window.svg')] bg-repeat-space opacity-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Conteúdo da página com animação de slide */}
        <motion.main
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              // Navegação para frente
            } else if (swipe > swipeConfidenceThreshold) {
              // Navegação para trás
            }
          }}
          className="w-full"
        >
          {children}
        </motion.main>
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;