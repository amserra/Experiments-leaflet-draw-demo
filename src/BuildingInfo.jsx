import { useState } from "react";

export default function BuildingInfo() {
    const [showMemberInfo, setshowMemberInfo] = useState(false);

    return showMemberInfo ? (
        <div>
            <h1>Member X</h1>
            <h2>Source: KiploCapture</h2>
            <h3>The building of this member does not belong to a community</h3>
            <h4>Data about the member below</h4>
        </div>
    ) : (
        <div>
            <h1>Building 1</h1>
            <h2>Source: KiploCapture</h2>
            <h3>This building does not belong to a community</h3>
            <h4>Members:</h4>
            <ul
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => setshowMemberInfo(true)}
            >
                <li>Member 1</li>
                <li>Member 2</li>
                <li>Member 3</li>
            </ul>
        </div>
    );
}
