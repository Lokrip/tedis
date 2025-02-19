import ContentLoader from "react-content-loader";

export default function SkeletonSearchParam({ count = 5, ...props }) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={count * 50}
            viewBox={`0 0 400 ${count * 50}`}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            uniqueKey="search-list-loader"
            {...props}
        >
            {Array.from({ length: count }).map((_, index) => (
                <>
                    <rect key={`icon-${index}`} x="10" y={index * 50 + 10} rx="4" ry="4" width="30" height="30" />
                    <rect key={`text-${index}`} x="50" y={index * 50 + 15} rx="5" ry="5" width="320" height="20" />
                </>
            ))}
        </ContentLoader>
    );
}
