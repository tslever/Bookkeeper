// This file is based on https://github.com/ps-kate/tabs.

type Props = {
    title: string,
    children: string
};

function TabBody ({ children }: Props) {
    return (
        <div>
            { children }
        </div>
    );
};

export default TabBody;