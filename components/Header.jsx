import Link from "next/link";
import { Button } from "./ui/button"

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
             <Link href="mailto:anjos7623@gmail.com">
             <Button>Me Contrate</Button>
             </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>

        </div>
    </header>;
};

export default Header