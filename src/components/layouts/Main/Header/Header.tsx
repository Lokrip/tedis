import { Container } from "../../../module/Container/Container";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo/Logo";

import styles from './header.module.scss'

import MenuH from "./Menu/Menu";
import Search from "./Search/Search";
import NavigationBar from "./NavigationBar/NavigationBar";

export const HeaderMain: FC<PropsWithChildren> = ({children}) => {
    return (
        <header className={styles.header} id="header">
            {children}
        </header>
    )
}

export const Header: FC = () => {
    return (
        <HeaderMain>
            <Container className={styles.headerContainer}>
                <Navbar className={styles.navbarHeader}>
                    <Navbar.Left>
                        <Logo/>
                    </Navbar.Left>
                    <Navbar.Center className="flex-row-center">
                        <Navbar.Center.Menu>
                            <MenuH />
                        </Navbar.Center.Menu>

                        <Navbar.Center.Search>
                            <Search/>
                        </Navbar.Center.Search>
                    </Navbar.Center>
                    <Navbar.Right>
                        <NavigationBar />
                    </Navbar.Right>
                </Navbar>
            </Container>
        </HeaderMain>
    )
}