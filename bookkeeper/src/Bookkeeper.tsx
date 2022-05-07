// This file is based on https://github.com/ps-kate/tabs.

import TabPane from "./TabPane";
import TabBody from "./TabBody";

function Bookkeeper() {
    return (
        <TabPane>
            <TabBody
                title = "Lemon"
            >
                A lemon is yellow.
            </TabBody>
            <TabBody
                title = "Strawberry"
            >
                A strawberry is red.
            </TabBody>
            <TabBody
                title = "Pear"
            >
                A pear is green.
            </TabBody>
        </TabPane>
    );
};

export default Bookkeeper;