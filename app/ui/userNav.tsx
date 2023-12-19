'use client'
import UserIcon from "./userIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState, useEffect } from 'react';
import { fetchUser } from '../lib/userData';

const links = [
    {
        name: "Your profile",
        path: "/dashboard/profile",
    },
    {
        name: "Settings",
        path: "/dashboard/settings",
    },
    {
        name: "Logout",
        path: "/logout",
    }
]

export default function UserNav() {
    const pathname = usePathname();
    const [userIsOpen, setUserIsOpen] = useState(false);

    useEffect(() => {
        const closeUser = () => setUserIsOpen(false);
        window.addEventListener("click", closeUser);
        return () => window.removeEventListener("click", closeUser);
    }, []);

    return (
        <div className="relative">
            <button
                className="flex items-center gap-2"
                onClick={(e) => {
                    e.stopPropagation();
                    setUserIsOpen(!userIsOpen);
                }}
            >
                <UserIcon />
                <span className="hidden sm:block">{pathname}</span>
            </button>
            <div
                className={clsx(
                    "absolute top-full right-0 w-48 bg-white shadow-lg rounded-md overflow-hidden",
                    userIsOpen ? "block" : "hidden"
                )}
            >
                {links.map((link) => (
                    <Link href={link.path} key={link.path}
                            className={clsx(
                                "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                pathname === link.path
                                    ? "bg-gray-100"
                                    : "bg-white"
                            )}>
                            {link.name}
                    </Link>
                ))};
            </div>
        </div>
    );
};
