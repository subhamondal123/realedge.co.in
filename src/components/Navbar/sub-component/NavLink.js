'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    console.log("pathname---",pathname)
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative text-lg font-medium group transition-colors duration-300
        ${isActive ? 'text-orange-600' : 'text-[#5D6C7C] hover:text-orange-600'}
      `}
        >
            {children}

            {/* underline */}
            <span
                className={`absolute left-1/2 bottom-0 h-0.5 bg-orange-600 transform -translate-x-1/2 transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
            />
        </Link>
    );
};

export default NavLink;