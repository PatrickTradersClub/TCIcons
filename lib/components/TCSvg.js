import React from 'react';
import { SvgFromUri } from 'react-native-svg';
export default function TCSvg({ icon, width, height, viewBox, preserveAspectRatio, color, title }) {
    return (<SvgFromUri uri={icon} override={{
        width, height, viewBox, preserveAspectRatio, color, title
    }}/>);
}
//# sourceMappingURL=TCSvg.js.map