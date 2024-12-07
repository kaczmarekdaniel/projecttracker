import * as React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./ui/navigation-menu.tsx";

import { Link, useLocation } from "react-router-dom";

import {
    HomeIcon,
    FileTextIcon,
    GearIcon,
    CheckIcon,
    CheckboxIcon,
    DashboardIcon,
} from "@radix-ui/react-icons";
import { cn } from "../lib/utils.ts";

type Link = {
    id: number;
    href: string;
    label: string;
    icon: React.ReactElement;
    active?: boolean;
    title: string;
};

const links: Link[] = [
    {
        id: 1,
        href: "/",
        label: "Home",
        icon: <DashboardIcon className="w-4 h-4 z-20" />,
        title: "dashboard",
    },
    {
        id: 2,
        href: "/tasks",
        label: "Tasks",
        icon: (
            <span className="bg-gray-800 rounded-md w-5 h-5 z-20 flex items-center justify-center">
                <CheckIcon className="w-4 h-4 z-20 text-offwhite" />
            </span>
        ),
        title: "tasks",
    },
    {
        id: 3,
        href: "/notes",
        label: "Notes",
        icon: <FileTextIcon className="w-5 h-5 z-20" />,
        title: "notes",
    },
];

const settings: Link[] = [
    {
        id: 1,
        href: "/settings",
        label: "Settings",
        icon: <GearIcon className="w-5 h-5 z-20" />,
        title: "settings",
    },
];

const PrimaryNav = () => {
    return (
        <NavigationMenu className="NavigationMenu fixed h-full w-56 left-0 bg-offwhite shadow-sm">
            <div className="w-full h-full grid grid-cols-1 grid-rows-12 gap-6 p-4">
                <div className="row-span-1 row-start-1 flex items-center justify-start">
                    <h1 className="font-classic text-3xl text-primary">
                        Taskable.
                    </h1>
                </div>
                <ul className="row-span-6 row-start-3 flex flex-col gap-3">
                    {links.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <NavigationLink {...link} />
                        </NavigationMenuItem>
                    ))}
                </ul>

                <ul className="row-span-3 row-start-11 flex flex-col gap-3 border-t pt-6 ">
                    {settings.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <NavigationLink {...link} />
                        </NavigationMenuItem>
                    ))}
                </ul>
            </div>
        </NavigationMenu>
    );
};

const NavigationLink = (link: Link) => {
    const pathname = useLocation().pathname;
    // const pathname = '/'

    const isActive = (href: string): boolean => {
        const active =
            href === "/" ? pathname === href : pathname.startsWith(`${href}`);

        return active;
    };
    const active = isActive(link.href);
    return (
        <Link
            aria-label={link.label}
            className={cn(
                navigationMenuTriggerStyle(),
                " flex flex-row gap-3",
                active ? "" : "opacity-80"
            )}
            to={link.href}
        >
            <span className={`${active ? "" : ""} z-40`}>{link.icon}</span>
            <p className="font-light text-sm z-40">{link.title}</p>
            {active && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.3 }}
                    className="absolute inset-0 z-10 rounded-md bg-gradient-to-r from-red-50 to-indigo-50"
                ></motion.span>
            )}
        </Link>
    );
};

export default PrimaryNav;
