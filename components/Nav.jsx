"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Introdução',
        path: '/',
    },
    {
        name: 'Especialidades',
        path: '/services',
    },
    {
        name: 'Resumo',
        path: '/resume',
    },
    {
        name: 'Projetos',
        path: '/work',
    }
];

const Nav = ({ containerStyles, linkStyles }) => {
    const pathname = usePathname();
    return (
        <nav className={`${containerStyles || 'flex gap-8'}`}>
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={`${
                            isActive ? "text-accent" : "text-white"
                        } ${linkStyles || "font-medium"} hover:text-accent transition-all duration-300`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;