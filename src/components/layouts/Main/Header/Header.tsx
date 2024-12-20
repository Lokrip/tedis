"use client"

import { Container } from "@/components/module/Container/Container";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo/Logo";

import styles from './header.module.scss'

import MenuH from "./Menu/Menu";
import Search from "./Search/Search";
import { signOut, useSession } from "next-auth/react";
import { HeadingH } from "@/components/plagins/H.number";
import Link from "next/link";

export const HeaderMain: FC<PropsWithChildren> = ({children}) => {
    return (
        <header className={styles.header} id="header">
            {children}
        </header>
    )
}

export const Header: FC = () => {
    const session = useSession();
    
    const onSignOut = () => {
        signOut({callbackUrl: '/'})
    }

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
                        {session.status === "loading" ? (
                            <HeadingH level={2} content={"loading"} />
                        ) : session.data ? (
                            <>
                                <HeadingH level={2} content={session.data.user?.name || "Guest"} />
                                <Link onClick={onSignOut} href={"#"}>
                                    Sign out
                                </Link>
                            </>
                        ) : (
                            <div>
                                <Link href={"/account/login/"}>Войти </Link>
                                <span>/</span>
                                <Link href={"/account/register/"}> Зарегистрироваться</Link>
                            </div>
                        )}
                    </Navbar.Right>
                </Navbar>
            </Container>
        </HeaderMain>
    )
}