import React, { ReactElement } from "react";
import { SvgFromXml, SvgProps } from "react-native-svg";

interface TCIconProps extends SvgProps {
  icon: string;
}

export default function TCIcon({
  icon,
  width,
  height,
  viewBox,
  preserveAspectRatio,
  color,
  title,
}: TCIconProps): ReactElement {
  return (
    <SvgFromXml
      xml={icon}
      override={{
        width,
        height,
        viewBox,
        preserveAspectRatio,
        color,
        title,
      }}
    />
  );
}
