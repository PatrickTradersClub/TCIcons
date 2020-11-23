import React, { ReactElement, useMemo } from "react";
import { SvgXml, SvgProps } from "react-native-svg";

interface TCSvgProps extends SvgProps {
  icon: string;
}

export default function TCSvg({ icon, ...props }: TCSvgProps): ReactElement {
  return <SvgXml xml={icon} {...props} />;
}
