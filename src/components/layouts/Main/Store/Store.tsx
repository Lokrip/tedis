import { Container } from "@/components/module/Container/Container"
import { MainStore } from "./MainStore/MainStore"
import Banner from "./Banner/Banner"
import ContentWrapper from "./ContentWrapper/ContentWrapper"

export default function Store<P extends {}>() {
    return (
        <MainStore>
            <Container>
                <MainStore.Banner>
                    <Banner />
                </MainStore.Banner>

                <MainStore.ContentWrapper>
                    <ContentWrapper />
                </MainStore.ContentWrapper>
            </Container>
        </MainStore>
    )
}