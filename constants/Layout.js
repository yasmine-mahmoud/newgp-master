import { Dimensions } from "react-native";

export const width = Dimensions.get("screen").width;
export const height = Dimensions.get("screen").height;


export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
