import Link from "next/link";
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

{/* componentes */}
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return <header className="py-8 xl:py-12">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">Gustavo<span className="text-accent">.</span>
            </h1>
            </Link>


            {/* desktop nav e contrata-me button */}
            <div className="hidden xl:flex items-center gap-8">
             <Nav />
             <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link href="mailto:anjos7623@gmail.com">
                            <Button>Entre em Contato</Button>
                    </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Envie um e-mail para discutir oportunidades</p>
                    </TooltipContent>
                </Tooltip>
             </TooltipProvider>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>;
};

export default Header