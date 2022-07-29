declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  type NewType = {
    fillSecondary?: string;
  };

  const content: React.FC<SvgProps | NewType>;
  export default content;
}