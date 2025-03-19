import { ClassNameType } from "../../../types/react.type";
import { correctClass } from "../../../utils/utils";
import { FC, memo, PropsWithChildren } from "react"

import styles from './container.module.scss'

export const Container: FC<
    PropsWithChildren & {
        maxWidth?: string|number;
    } & ClassNameType
> = memo(({ children, className, maxWidth }) => {
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
