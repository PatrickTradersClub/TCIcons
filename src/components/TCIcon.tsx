import React, { ReactElement, useMemo } from 'react';
import { SvgFromUri, SvgProps  } from 'react-native-svg';

interface TCIconProps extends SvgProps {
    icon: string;
} 

export default function TCIcon({icon, width, height, viewBox, preserveAspectRatio, color, title}: TCIconProps): ReactElement {

    return (<SvgFromUri
        uri={icon}
        override={{
            width, height, viewBox, preserveAspectRatio, color, title
        }}
        />)
}