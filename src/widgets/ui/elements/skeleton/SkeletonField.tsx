import ContentLoader from "react-content-loader"


const SkeletonField = () => (
    <ContentLoader
      speed={2}
      viewBox="0 0 100 50" // теперь всё в процентах
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ width: "100%", height: "50px", display: "block" }}
      preserveAspectRatio="none"
      uniqueKey="field-skeleton"
    >
      {/* Иконка — 8% ширины */}
      <rect x="2" y="12" rx="2" ry="2" width="8" height="26" />
      {/* Поле ввода — оставшиеся 88% */}
      <rect x="12" y="12" rx="2" ry="2" width="86" height="26" />
    </ContentLoader>
  );

export default SkeletonField
