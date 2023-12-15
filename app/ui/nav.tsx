'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {
        name: "dashboard",
        href: "/dashboard",
    },{
        name: "settings",
        href: "/settings",
    }
]
export default function Nav() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => (
                <Link href={link.href} key={link.name}
                className={clsx('px-4 py-2',
                    { 'bg-sky-100 text-blue-600' : pathname === link.href })}
                >
                    <p>{link.name}</p>
                </Link>
            ))}
        </>
    );
}
