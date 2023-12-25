import React, { Fragment } from "react";
import { View } from "react-native";

export interface ISpaceProps {
  top?: number;
  bottom?: number;
}
const Space = (props: ISpaceProps) => {
  const { top, bottom } = props;
  return (
    <Fragment>
      <View style={{ marginTop: top, marginBottom: bottom }} />
    </Fragment>
  );
};

export default Space;
