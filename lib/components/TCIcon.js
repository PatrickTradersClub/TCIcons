import React from 'react';
import { SvgXml } from 'react-native-svg';
export default function TCIcon({ icon, width, height, viewBox, preserveAspectRatio, color, title }) {
    return (<SvgXml xml={icon} override={{
        width, height, viewBox, preserveAspectRatio, color, title
    }}/>);
}
//# sourceMappingURL=TCIcon.js.map