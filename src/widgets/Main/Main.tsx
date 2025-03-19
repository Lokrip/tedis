
import { attachSubComponents } from "@/utils/utils";
import { FC, PropsWithChildren } from "react";

const MainHeaderComponets: FC<PropsWithChildren> = ({children}) => <>{children}</>
const MainContentComponets: FC<PropsWithChildren> = ({children}) => <>{children}</>
const MainFooterComponets: FC<PropsWithChildren> = ({children}) => <>{children}</>

const MainComponets: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export const Main = attachSubComponents(
    'Main',
    MainComponets,
    {
        "Header": MainHeaderComponets,
        "Content": MainContentComponets,
        "Footer": MainFooterComponets,
    }
)
