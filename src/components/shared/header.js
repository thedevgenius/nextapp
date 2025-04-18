'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        
    ]

    return (
        <header className="px-3.5 py-2">
            <div className="flex justify-between">
                <h1 className="font-bold text-lg italic">LOGO</h1>
                <div className="flex items-center gap-4">
                    <div className="w-9 h-9 bg-gray-400 rounded-full">
                        
                    </div>
                </div>
            </div>
        </header>
    );
}