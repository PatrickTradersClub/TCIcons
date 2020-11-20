"use strict";
// import React, { ReactElement, useMemo, memo } from "react";
// import { ViewPropTypes } from "react-native";
// import { SvgXml } from "react-native-svg";
// interface IconesSvgProps {
//   name: string;
//   size: number;
//   style?: ViewPropTypes.style;
// }
// function IconesSvg({ name, size, style }: IconesSvgProps): ReactElement {
//   const svg = useMemo(() => {
//     if (name.length > 0) {
//       return `./svg/${name}.svg`;
//     }
//     return `./svg/add.svg`;
//   }, [name]);
//   function styles() {
//     if (style) {
//       return style;
//     }
//     return {};
//   }
//   return (
//     <SvgXml width={`${size}%`} height={`${size}%`} xml={svg} style={styles} />
//   );
// }
// export default memo(IconesSvg);
