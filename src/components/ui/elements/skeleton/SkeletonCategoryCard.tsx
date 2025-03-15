import ContentLoader from 'react-content-loader';

const SkeletonCategoryCard = ({
    containerWidth = 340,
    width = 300,
    height = 54,
    topOffset = 10,
    borderRadius = 4,
    ...props
}) => {
    const offsetX = (containerWidth - width) / 2;

    return (
      <ContentLoader
        viewBox={`0 0 ${containerWidth} ${height + topOffset}`}
        width={containerWidth}
        height={height + topOffset}
        {...props}
        uniqueKey="single-product-card-skeleton"
      >
        {/* Loading Block (Centered and Lowered) */}
        <rect x={offsetX} y={topOffset} rx={borderRadius} ry={borderRadius} width={width} height={height} />
      </ContentLoader>
    );
};

export default SkeletonCategoryCard;
