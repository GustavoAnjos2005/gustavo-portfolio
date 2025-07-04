import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Gustavo Anjos | Desenvolvedor Full-Stack",
  description: "Portfólio profissional de Gustavo Anjos, desenvolvedor Full-Stack especializado em React, Next.js, Node.js e tecnologias modernas de desenvolvimento web.",
  keywords: "desenvolvedor full-stack, react, next.js, node.js, typescript, portfolio, desenvolvimento web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={outfit.className}>
        <div className="min-h-screen bg-primary overflow-hidden relative">
          <Header />
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
