import React, { ComponentType, Suspense, ReactElement } from "react";
import TCIcon from "../components/TCIcon";

export default function wrapIcon<TProps>(icon: string) {
  return <TCIcon icon={icon} />;
}
