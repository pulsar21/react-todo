import {ReactNode} from "react";

interface IListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

export default function List<T>(props: IListProps<T>) {
    const {
        items, renderItem
    } = props;
    return (
        <div className={"list"}>
            {
                items.map(renderItem)
            }
        </div>
    );
};