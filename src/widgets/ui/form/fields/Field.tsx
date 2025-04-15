import { forwardRef } from "react";
import { TypeInputProps } from "./field.types";
import styles from './field.module.scss';
import cn from "clsx";

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
    ({ style, Icon, error_message, className, isStyle = false, isError = false, ...rest }, ref) => {

        return (
            <label className={styles.field} style={style}>
                <div className={isStyle ? cn(styles.inputAndIcon, className) : className}>
                    {Icon && (
                        <div className={isStyle ? styles.icon : ""}>
                            <Icon />
                        </div>
                    )}
                    <input ref={ref} {...rest} />
                </div>
                {isError && <span className={styles.error}>{error_message}</span>}
            </label>
        );
    }
);

Field.displayName = "Field"

export default Field;
