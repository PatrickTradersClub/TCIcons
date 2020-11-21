import React from "react";
import { SvgFromXml } from "react-native-svg";
export default function TCIcon({ icon, width, height, viewBox, preserveAspectRatio, color, title, }) {
    return (<SvgFromXml xml={icon} override={{
        width,
        height,
        viewBox,
        preserveAspectRatio,
        color,
        title,
    }}/>);
}
//# sourceMappingURL=TCIcon.js.map