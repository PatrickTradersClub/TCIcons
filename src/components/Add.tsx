import React from 'react';
import { SvgFromXml, SvgProps } from 'react-native-svg';
import add from '../svg/add.svg';
export default function Add(props: SvgProps) {
    return (<SvgFromXml {...props} xml={add} />);
}