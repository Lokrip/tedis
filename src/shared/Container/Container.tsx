import { correctClass } from "../../utils/utils";
import { FC, memo } from "react"

import styles from './container.module.scss'
import { ContainerProps } from "./container-type";


export const Container: FC<ContainerProps> = memo(({ children, className, maxWidth }) => {
    // Если maxWidth это число, добавляем 'px' (если необходимо)
    const computedMaxWidth = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
    const styleCorrect = correctClass(styles.container, className!);

    return (
      <div style={{ maxWidth: computedMaxWidth }} className={styleCorrect}>
        {children}
      </div>
    );
});

Container.displayName = "Container"
