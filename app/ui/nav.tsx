'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Cog, Bell } from "lucide-react";
import UserNav from "./userNav";
import clsx from "clsx";
import 



const links = [
    {
        name: "dashboard",
        path: "/dashboard",
        icon: Home
    },{
        name: "settings",
        path: "/dashboard/settings",
        icon: Cog
    },
    {
        name: "notifications",
        path: "/dashboard/notifications",
        icon: Bell
    },
]

export default function Nav() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-3">
            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center ml-4 space-x-5">
                    {links.map((link) => (
                        <Link href={link.path} key={link.name} className={clsx("flex flex-row items-center px-2 py-1 rounded-lg transition duration-200 ease-in-out hover:bg-gray-50 hover:text-black",  { "bg-gray-100 text-black" : usePathname() === link.path})}
                        onClick={handleVibrate}>
                                <link.icon className="w-5 h-5" />
                        </Link>
                    ))}
                </div>
            </div>
            <UserNav />
        </div>
    );
}
