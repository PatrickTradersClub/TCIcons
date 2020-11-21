import React, { ReactElement, useMemo } from 'react';
import { SvgFromUri, SvgProps  } from 'react-native-svg';

interface TCSvgProps extends SvgProps {
    icon: string;
} 

export default function TCSvg({icon, width, height, viewBox, preserveAspectRatio, color, title}: TCSvgProps): ReactElement {

    return (<SvgFromUri
        uri={icon}
        override={{
            width, height, viewBox, preserveAspectRatio, color, title
        }}
        />)
}