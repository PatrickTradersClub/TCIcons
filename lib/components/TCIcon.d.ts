import { ReactElement } from 'react';
import { SvgProps } from 'react-native-svg';
interface TCIconProps extends SvgProps {
    icon: string;
}
export default function TCIcon({ icon, width, height, viewBox, preserveAspectRatio, color, title }: TCIconProps): ReactElement;
export {};
