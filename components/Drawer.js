import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

export default function Drawer({ toggleDrawer, state, ...props}) {

    return (
        <div>
            <SwipeableDrawer
                anchor={"right"}
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {props.children}
            </SwipeableDrawer>
        </div>
    );
}
