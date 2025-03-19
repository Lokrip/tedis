"use client"
import { ArrowLeft, ArrowRight } from "lucide-react"

import styles from './banner.module.scss'
import clsx from "clsx"
import { FC, memo, useCallback, useEffect, useRef } from "react"

import { BannerError } from "@/types/app/enum/banner.enum"
import { bannerApi } from "@/redux/services/banner/BannerService"
import SkeletonBanner from "@/widgets/ui/elements/skeleton/SkeletonBanner"
import ButtonSet from "@/widgets/ui/elements/button/ButtonSet"
import { Item } from "@/widgets/ui/list/item/Item"
import ImageR from "@/widgets/ui/assets/image/Image"
import { List } from "@/widgets/ui/list/List"
import { useActions, useAppSelector } from "@/utils/hooks"

const Banner: FC = () => {
    const { data: images, isLoading: isLoadingImage } = bannerApi.useFetchAllImagesQuery(10, {
        skip: false
    });
    const { nextSlide, prevSlide, setNull, setError, stopStartScrolling } = useActions()
    const { currentMove, isLoadingScroll, isError, error } = useAppSelector(state => state.bannerReduser);

    const refImageContainer = useRef<HTMLUListElement | null>(null)
    const refImage = useRef<HTMLImageElement | null>(null)

    const onPrevMove = useCallback(() => {
        if(!isLoadingScroll) {
            stopStartScrolling(true)
            prevSlide('prev')
        }
    }, [isLoadingScroll, stopStartScrolling, prevSlide])

    const onNextMove = useCallback(() => {
        if (!isLoadingScroll) {
            stopStartScrolling(true);
            nextSlide('next');
        }
    }, [isLoadingScroll, stopStartScrolling, nextSlide]);

    useEffect(() => {
        if(currentMove && refImage.current && refImageContainer.current) {
            const moving = refImage.current.width * (currentMove === "next" ? 1 : -1);
            refImageContainer.current.scrollBy({
                left: moving,
                behavior: 'smooth'
            });

            const timeout = setTimeout(() => {
                stopStartScrolling(false);
                setNull();
            }, 800)

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [currentMove, stopStartScrolling, setNull])



    return (
        <div className={clsx(styles.sliderContainer, "banner__wrapper")}>
            <div className={styles.sliderWrapper}>
                {isLoadingImage || (isError && error === BannerError.BannerImageError) ? (
                    <SkeletonBanner />
                ) : (
                    <>
                        <ButtonSet
                            onClick={onPrevMove}
                            className={clsx(
                                styles.moveSliderPrev,
                                styles.moveButtonSlider
                            )}
                            buttonType="btnV4"
                        >
                            <ArrowLeft />
                        </ButtonSet>
                        <List
                            items={images}
                            ref={refImageContainer}
                            className={clsx("sliderItems", styles.sliderImage)}
                            mapItems={(item) => (
                                <Item className={styles.sliderItemsImageContainer}>
                                    <ImageR
                                        ref={refImage}
                                        src={item.url}
                                        alt=""
                                        width={1360}
                                        height={136}
                                        onError={() => setError(BannerError.BannerImageError)}
                                    />
                                </Item>
                            )}
                        />
                        <ButtonSet
                            onClick={onNextMove}
                            className={clsx(
                                styles.moveSliderNext,
                                styles.moveButtonSlider
                            )}
                            buttonType="btnV4"
                        >
                            <ArrowRight />
                        </ButtonSet>
                    </>
                )}
            </div>
        </div>
    );
};

export default memo(Banner);
