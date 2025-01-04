import { forwardRef } from "react";
import { TypeInputProps } from "./field.types";
import styles from './field.module.scss';
import cn from "clsx";

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
    ({ error, style, Icon, className, ...rest }, ref) => {
       
        return (
            <label className={cn(styles.field, className)} style={style}>
                {Icon && (
                    <div className={styles.icon}>
                        <Icon />
                    </div>
                )}

                <input ref={ref} {...rest} />
                {error && <div className={styles.error}>{error.message}</div>}
            </label>
        );
    }
);

Field.displayName = "Field"

export default Field;