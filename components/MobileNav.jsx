"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import Socials from "./Socials";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const linkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-2xl hover:text-accent transition-colors duration-200" />
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[385px] bg-primary/95 backdrop-blur-md border-l-2 border-accent/10"
      >
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col justify-between h-full py-6"
        >
          {/* Nav Links */}
          <motion.div
            variants={containerVars}
            initial="initial"
            animate="open"
            className="flex flex-col items-center gap-y-32"
          >
            <motion.div variants={linkVars}>
              <Link href="/" className="mb-2">
                <h1 className="text-2xl font-semibold">
                  Gustavo<span className="text-accent">.</span>
                </h1>
              </Link>
            </motion.div>
            <motion.div variants={linkVars}>
              <Nav
                containerStyles="flex flex-col items-center gap-y-6"
                linkStyles="text-lg hover:text-accent transition-all duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="flex flex-col items-center gap-y-4"
          >
            <div className="mb-2">
              <Link href="mailto:anjos7623@gmail.com">
                <Button className="h-[40px] px-8 bg-accent hover:bg-accent/80 transition-colors duration-200">
                  Entre em Contato
                </Button>
              </Link>
            </div>
            <Socials
              containerStyles="flex gap-x-4"
              iconStyles="text-xl hover:text-accent transition-colors duration-200"
            />
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;