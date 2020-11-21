import { ReactElement } from 'react';
import { SvgProps } from 'react-native-svg';
interface TCSvgProps extends SvgProps {
    icon: string;
}
export default function TCSvg({ icon, width, height, viewBox, preserveAspectRatio, color, title }: TCSvgProps): ReactElement;
export {};
