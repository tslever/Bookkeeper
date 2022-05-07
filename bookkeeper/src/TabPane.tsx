// This file is based on https://github.com/ps-kate/tabs.

import { ReactElement } from "react";
import { useState } from "react";
import TabTitle from "./TabTitle";

type Props = {
    children: ReactElement[] // children would be better named tabBodies.
};

function TabPane ({ children }: Props) {
    const [selectedTabIndex /*: number*/, setSelectedTabIndex /*: React.Dispatch<React.SetStateAction<number>>*/] = useState<number>(0);
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        {
                            children.map<JSX.Element>(
                                /*callbackfn =*/ function (value: ReactElement<any, string | React.JSXElementConstructor<any>>, arrayElementIndex: number) {
                                    return (
                                        <td
                                            key = { arrayElementIndex }
                                        >
                                            <TabTitle
                                                title = { value.props.title }
                                                index = { arrayElementIndex }
                                                setSelectedTabIndex = { setSelectedTabIndex }
                                            />
                                        </td>
                                    );
                                },
                                /*thisArg? =*/ undefined
                            )
                        }
                    </tr>
                </tbody>
            </table>
            { children[selectedTabIndex] }
        </div>
    );
};

export default TabPane;