import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as blankStar } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";

const RatingBar = (props) => {
  const { count = 5, rating, setRating, defaultRating = rating, split = 15, starSize = 32 } = props;

  useEffect(() => {
    setRating(defaultRating > count ? count : defaultRating);
  }, []);

  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => (
        <TouchableOpacity
          key={index}
          style={{ marginRight: index < count - 1 ? split : 0 }}
          onPress={() => setRating(index + 1)}
        >
          <FontAwesomeIcon icon={index < rating ? fullStar : blankStar} size={starSize} color="#FFCF00" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingBar;
