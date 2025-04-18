'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faHome, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer className="px-5 py-2  fixed bottom-2 w-full left-0">
            <div className="flex justify-between items-center shadow bg-white rounded-3xl p-4">
                <FontAwesomeIcon icon={faCoffee} />
                <FontAwesomeIcon icon={faCartPlus} />
                <FontAwesomeIcon icon={faHome} />
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </footer>
    );
}