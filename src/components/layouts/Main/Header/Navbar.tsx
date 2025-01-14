import { FC, PropsWithChildren } from "react";

import styles from './navbar.module.scss'
import { attachSubComponents, correctClass } from "../../../../utils";
import { ClassNameType } from "../../../../types/react.type";

const NavbarLeftComponets: FC<PropsWithChildren> = ({children}) => <nav className="nav navbarLeft headerNavbarItem">{children}</nav>
const NavbarRightComponets: FC<PropsWithChildren> = ({children}) => <nav className="nav navbarRight headerNavbarItem">{children}</nav>

const NavbarComponets: FC<PropsWithChildren & ClassNameType> = ({children, className}) => {
    const styleCorrect = correctClass(styles.navbar, className!);

    return <nav className={styleCorrect}>{children}</nav>
}

const MenuComponets: FC<PropsWithChildren> = ({children}) => <div className="menuContainer munuContainerHeader">{children}</div>
const SearchComponets: FC<PropsWithChildren> = ({children}) => <div className="searchContainer searchHeaderContainer">{children}</div>


const NavbarCenterSettingsComponets: FC<PropsWithChildren & ClassNameType> = ({children, className}) => {
    const classNameValid = correctClass('nav navbarCenter headerNavbarItem', className!)
    
    return <nav className={classNameValid}>{children}</nav>
}

export const NavbarCenterSettings = attachSubComponents(
    'NavbarCenterSettings',
    NavbarCenterSettingsComponets,
    {
        'Menu': MenuComponets,
        'Search': SearchComponets
    }
)

export const Navbar = attachSubComponents(
    'Navbar',
    NavbarComponets,
    {
        "Left": NavbarLeftComponets,
        "Center": NavbarCenterSettings,
        "Right": NavbarRightComponets,
    }
)