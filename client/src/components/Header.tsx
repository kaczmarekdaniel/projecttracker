import {  SearchIcon } from "lucide-react";

const Header = () => {
    return (
        <header className="h-20 w-full flex justify-center items-center px-8">
            <div className="bg-offwhite w-1/2 h-10 rounded-md shadow-sm flex items-center justify-between px-2">
                <SearchIcon className="w-5 h-5 opacity-80" />
                <span className="bg-background  rounded-sm flex items-center justify-center text-sm h-7 px-1">
                    &#8984; + F
                </span>
            </div>
        </header>
    );
};

export default Header;
