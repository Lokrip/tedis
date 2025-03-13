import { Container } from "../../module/Container/Container"
import { MainStore } from "./MainStore/MainStore"
import Banner from "./Banner/Banner"
import ContentWrapper from "./ContentWrapper/ContentWrapper"

interface StoreProps {
    isBannerClose: boolean;
    param: any;
}

export default function Store<P extends StoreProps>({isBannerClose, param}: P): JSX.Element {
    return (
        <MainStore className="main-indent-block">
            <Container>

                <MainStore.Banner>
                    {!isBannerClose && <Banner />}
                </MainStore.Banner>

                <MainStore.ContentWrapper>
                    <ContentWrapper param={param} />
                </MainStore.ContentWrapper>
            </Container>
        </MainStore>
    )
}
