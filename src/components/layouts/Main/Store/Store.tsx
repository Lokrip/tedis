import { Container } from "@/components/module/Container/Container"
import { MainStore } from "./MainStore/MainStore"
import Banner from "./Banner/Banner"
import ContentWrapper from "./ContentWrapper/ContentWrapper"

export default function Store(): JSX.Element {
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