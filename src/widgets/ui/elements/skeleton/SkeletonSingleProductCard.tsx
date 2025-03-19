import ContentLoader from 'react-content-loader';

const SkeletonSingleProductCard = ({
  width = 210,
  height = 320,
  borderRadius = 4,
  ...props
}) => {
  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...props}
      uniqueKey="single-product-card-skeleton"
    >
      {/* Изображение */}
      <rect
        x={10}
        y={10}
        rx={borderRadius}
        ry={borderRadius}
        width={width - 20}
        height={width - 20}
      />
      {/* Заголовок */}
      <rect x={10} y={width} rx={4} ry={4} width={width - 20} height={20} />
      {/* Описание */}
      <rect x={10} y={width + 30} rx={4} ry={4} width={width * 0.6} height={16} />
      {/* Кнопка или цена */}
      <rect x={10} y={width + 60} rx={4} ry={4} width={width * 0.4} height={24} />
    </ContentLoader>
  );
};

export default SkeletonSingleProductCard;
