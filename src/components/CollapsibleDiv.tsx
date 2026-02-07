import {type ReactNode, useState} from "react";

type CollapsibleProps = {
    title: string;
    content: ReactNode;
};

const CollapsibleDiv = ({ title, content }: CollapsibleProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div>
            <div className="collapsible" onClick={() => setCollapsed(!collapsed)}>
                <h2>{title}</h2>
                <span className="material-symbols-outlined">{collapsed ? "keyboard_arrow_down" : "keyboard_arrow_up"}</span>
            </div>

            <div className={`content ${collapsed ? "collapsed" : ""}`}>
                {content}
            </div>
        </div>
    );
}

export default CollapsibleDiv;