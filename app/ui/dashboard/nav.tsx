'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {
        name: "dashboard",
        path: "/dashboard",
    },{
        name: "settings",
        path: "/settings",
    }
]
export default function Nav() {
    const pathname = usePathname();
    return (
        <div className='flex justify-between items-center gap-2 p-3'>
        {links.map((link) => (
            <Link href={link.path} key={link.name}
            className={clsx(
                'flex items-center justify-center gap-2 rounded-md p-3',
                { active: pathname === link.path })}
            >
                <p>{link.name}</p>
            </Link>
        ))}
        </div>
    );
}
