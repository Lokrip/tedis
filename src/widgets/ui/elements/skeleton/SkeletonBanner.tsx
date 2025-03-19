import ContentLoader from "react-content-loader";

export default function SkeletonBanner({...props}) {
    return (
        <ContentLoader 
            speed={2}
            width={1360}
            height={136}
            viewBox="0 0 1360 136"
            backgroundColor="#f2f2f2"
            foregroundColor="#ebebeb"
            uniqueKey="banner-loader"
            {...props}
        >
        <rect x="0" y="0" rx="3" ry="3" width="1360" height="136" />
        </ContentLoader>
    )
}