import { View, Text } from "react-native";
import styles from "./styles";

const Triangle = (props) => {
  return <View style={[styles.triangle, props.style]} />;
};

const TriangleDown = (props) => {
  return <Triangle style={[styles.triangleDown, props.style]} />;
};

const Parallelogram = (props) => {
  const { bgColor, w, h, label, labelStyle } = props;

  return (
    <View style={[styles.parallelogram, { width: w, height: h, backgroundColor: bgColor }]}>
      <View style={[styles.parallelogramRight, { right: -w / 8 }]}>
        <TriangleDown
          style={{
            borderBottomColor: bgColor,
            borderLeftWidth: w / 8,
            borderRightWidth: 0,
            borderBottomWidth: h,
          }}
        />
      </View>
      <View style={[styles.parallelogramLeft, { left: -w / 8 }]}>
        <Triangle
          style={{
            borderBottomColor: bgColor,
            borderLeftWidth: w / 8,
            borderRightWidth: 0,
            borderBottomWidth: h,
          }}
        />
      </View>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

export { Triangle, TriangleDown, Parallelogram };
