import {type ReactNode, useState} from "react";
import "./styles/CollapsibleDiv.css"

type CollapsibleProps = {
    title: string;
    children: ReactNode;
};

const CollapsibleDiv = (props: CollapsibleProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <div className="collapsible-div" onClick={() => setCollapsed(!collapsed)}>
                <h2>{props.title}</h2>
                <span className="material-symbols-outlined">{collapsed ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
            </div>

            <div className={`content ${collapsed ? "collapsed" : ""}`}>
                {props.children}
            </div>
        </div>
    );
}

export default CollapsibleDiv;