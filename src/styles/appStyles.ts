import { StyleSheet } from "react-native";

export const FlexDirections = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const JustifyContent = StyleSheet.create({
  center: {
    justifyContent: "center",
  },
  spaceEvenly: {
    justifyContent: "space-evenly",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  flexEnd: {
    justifyContent: "flex-end",
  },
});

export const Display = StyleSheet.create({
  flex: {
    display: "flex",
  },
});

export const AlignText = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
});

export const TextSize = (size: number) =>
  StyleSheet.create({
    text: {
      fontSize: size,
    },
  });
export const TextColor = (color: string) =>
  StyleSheet.create({
    color: {
      color: color,
    },
  });
// eslint-disable-next-line @typescript-eslint/no-shadow
export const padding = (padding: number) =>
  StyleSheet.create({
    padding: {
      padding: padding,
    },
  });
export const paddingAll = (
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
  paddingBottom: number,
) =>
  StyleSheet.create({
    padding: {
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
    },
  });
export const marginTop = (top: number) =>
  StyleSheet.create({
    marginTop: {
      marginTop: top,
    },
  });
export const AlignItems = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  flexStart: {
    alignItems: "flex-start",
  },
});
