import { Container } from "@/widgets/module/Container/Container";
import { MainStore } from "./MainStore/MainStore"
import Banner from "./Banner/Banner"
import ContentWrapper from "./ContentWrapper/ContentWrapper"

interface StoreProps {
    isBannerClose?: boolean;
    param?: {[key: string]: string | string[] | undefined;};
    dynamicParam?: {slug: string};
}

export default function Store<P extends StoreProps>({
    isBannerClose,
    param,
    dynamicParam
}: P): JSX.Element {
    return (
        <MainStore className="main-indent-block">
            <Container>

                <MainStore.Banner>
                    {!isBannerClose && <Banner />}
                </MainStore.Banner>

                <MainStore.ContentWrapper>
                    <ContentWrapper
                        dynamicParam={dynamicParam}
                        param={param}
                    />
                </MainStore.ContentWrapper>
            </Container>
        </MainStore>
    )
}
