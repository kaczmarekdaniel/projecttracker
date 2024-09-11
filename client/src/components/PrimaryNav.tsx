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

import { HomeIcon, FileTextIcon, GearIcon } from "@radix-ui/react-icons";

type Link = {
    id: number;
    href: string;
    label: string;
    icon: React.ReactElement;
    active?: boolean;
};

const links: Link[] = [
    {
        id: 1,
        href: "/",
        label: "Home",
        icon: <HomeIcon className="w-4 h-4 z-20" />,
    },
    {
        id: 2,
        href: "/notes",
        label: "Notes",
        icon: <FileTextIcon className="w-4 h-4 z-20" />,
    },

    {
        id: 3,
        href: "/settings",
        label: "Settings",
        icon: <GearIcon className="w-4 h-4 z-20" />,
    },
];

const PrimaryNav = () => {
    return (
        <NavigationMenu className="row-start-3 row-end-7 col-span-1">
            <NavigationMenuList className="w-full h-full flex flex-col items-center justify-center gap-6">
                {links.map((link) => (
                    <NavigationMenuItem key={link.href}>
                        <NavigationLink {...link} />
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
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
            className={navigationMenuTriggerStyle()}
            to={link.href}
        >
            <span className={`${active ? "[&>*>*]:fill-white " : ""} z-40`}>
                {link.icon}
            </span>
            {active && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.3 }}
                    className="absolute inset-0 z-10 rounded-md bg-primary"
                ></motion.span>
            )}
        </Link>
    );
};

export default PrimaryNav;
