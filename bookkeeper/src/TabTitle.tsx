// This file is based on https://github.com/ps-kate/tabs.

import { useCallback } from "react";

type Props = {
    title: string,
    index: number,
    setSelectedTabIndex: (index: number) => void // void is the return type of the function assigned to setSelectedTabIndex.
};

function TabTitle ({ title, index, setSelectedTabIndex }: Props) {
    const onClick: (() => void) = useCallback<() => void>(
        /*callback = */ () => { setSelectedTabIndex(index) },
        /*deps: DependencyList = */ [index, setSelectedTabIndex]
    );
    return (
        <button
            onClick = { onClick }
        >
            { title }
        </button>
    );
};

export default TabTitle;