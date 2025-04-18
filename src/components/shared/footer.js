'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faHome, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className="px-5 py-2 fixed bottom-2 w-full left-0">
            <div className="flex justify-between items-center shadow bg-white rounded-3xl p-4">
                <Link href="/coffee" aria-label="Coffee">
                    <FontAwesomeIcon icon={faCoffee} />
                </Link>
                <Link href="/search" aria-label="Search">
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link href="/" aria-label="Home">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link href="/cart" aria-label="Cart">
                    <FontAwesomeIcon icon={faCartPlus} />
                </Link>
                <Link href="/user" aria-label="User">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
        </footer>
    );
}