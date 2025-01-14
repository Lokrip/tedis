import { Container } from "../../../module/Container/Container"
import { MainStore } from "./MainStore/MainStore"
import Banner from "./Banner/Banner"
import ContentWrapper from "./ContentWrapper/ContentWrapper"

interface StoreProps {param: any}

export default function Store<P extends StoreProps>({param}: P): JSX.Element {
    return (
        <MainStore>
            <Container>
                <MainStore.Banner>
                    <Banner />
                </MainStore.Banner>

                <MainStore.ContentWrapper>
                    <ContentWrapper param={param} />
                </MainStore.ContentWrapper>
            </Container>
        </MainStore>
    )
}