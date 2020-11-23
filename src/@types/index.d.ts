interface TCSvgProps extends SvgProps {
    fill: string;
}

declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.FC<TCSvgProps>;
    export default content;
}