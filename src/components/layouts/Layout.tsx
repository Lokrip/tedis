import { PropsWithChildren } from "react";
import { Main } from "./Main/Main";
import { HeadingH } from "../plagins/H.number";
import { Header } from "./Main/Header/Header";

export default async function Layout<P extends PropsWithChildren>({children}: P) {
    return (
        <Main>
            <Main.Header>
                <Header/>
            </Main.Header>

            <Main.Content>
                {children}
            </Main.Content>

            <Main.Footer>
                <HeadingH 
                    level={2} 
                    content={'Footer'} 
                />
            </Main.Footer>
        </Main>
    )
}