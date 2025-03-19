import { ClassNameType } from "../../../types/react.type";
import { correctClass } from "../../../utils/utils";
import { forwardRef, Fragment, PropsWithChildren, ReactNode } from "react";


interface ListProps extends ClassNameType {
    items: any;
    mapItems: (item: any) => ReactNode;
}

const ListContainer = forwardRef<HTMLUListElement, PropsWithChildren & ClassNameType>(
    ({ children, className }, ref) => {
        const classNameValid = correctClass("container-list", className || "");

        return (
            <ul ref={ref} className={classNameValid}>
                {children}
            </ul>
        );
    }
);

ListContainer.displayName = "ListContainer";

export const List = forwardRef<HTMLUListElement, ListProps>(
    ({ items, mapItems, className }, ref) => {
      return (
          <ListContainer ref={ref} className={className}>
              {items?.map((item: any) => (
                  <Fragment key={item.id}>
                      {mapItems(item)}
                  </Fragment>
              ))}
          </ListContainer>
      );
    }
  );

List.displayName = "List";
