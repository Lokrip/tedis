import ContentLoader from "react-content-loader";

export default function SkeletonSearchParam({...props}) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={150}
            viewBox="0 0 400 150"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            uniqueKey="search-param-loader"
            {...props}
        >
            <rect x="45" y="10" rx="5" ry="5" width="350" height="15" />
            <rect x="45" y="45" rx="5" ry="5" width="350" height="15" />
            <rect x="45" y="80" rx="5" ry="5" width="350" height="15" />
            <rect x="45" y="115" rx="5" ry="5" width="350" height="15" />
            <rect x="3" y="5" rx="4" ry="4" width="25" height="25" />
            <rect x="3" y="40" rx="4" ry="4" width="25" height="25" />
            <rect x="3" y="75" rx="4" ry="4" width="25" height="25" />
            <rect x="3" y="110" rx="4" ry="4" width="25" height="25" />
        </ContentLoader>
    )
}