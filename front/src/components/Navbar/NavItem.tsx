import React, {FC} from "react";

export interface NavItemProps {
	name: string,
	href: string;
}

const NavItem: FC<NavItemProps> = (props) => {
    const { name, href } = props;

    return (
        <li>
            <a
                href={href}
                className="py-2 px-4 rounded-md bg-white/10 shadow-md text-black transition duration-200 hover:bg-redPalette-soft hover:text-cream">
                {name}
            </a>
        </li>
    )
}

export default NavItem;