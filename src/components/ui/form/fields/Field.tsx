import { forwardRef } from "react";
import { TypeInputProps } from "./field.types";
import styles from './field.module.scss';
import cn from "clsx";

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
    ({ style, Icon, className, isStyle = false, ...rest }, ref) => {

        return (
            <label className={isStyle ? cn(styles.field, className) : className} style={style}>
                {Icon && (
                    <div className={isStyle ? styles.icon : ""}>
                        <Icon />
                    </div>
                )}

                <input ref={ref} {...rest} />
            </label>
        );
    }
);

Field.displayName = "Field"

export default Field;
