import { forwardRef } from "react";
import Image from "next/image";
import ContentLoader from "react-content-loader";

export interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    isLoading?: boolean;
    className?: string;
}

const ImageR = forwardRef<HTMLImageElement, ImageProps>(
    ({ src, alt, isLoading, className, width, height }, ref) => {
        if (isLoading) {
            return (
                <ContentLoader
                    speed={2}
                    width={width}
                    height={height}
                    viewBox={`0 0 ${width} ${height}`}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
                </ContentLoader>
            );
        }

        return (
            <Image
                ref={ref}
                src={src}
                alt={alt}
                className={className}
                width={width}
                height={height}
            />
        );
    }
);


export default ImageR;