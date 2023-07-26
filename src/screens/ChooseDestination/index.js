import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { faAngleLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import GoogleApiSearch from "~components/GoogleApiSearch";
import CustomBtn from "~components/Button/CustomBtn";

const ChooseDestination = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.backBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faAngleLeft} size={22} color={"rgba(0, 0, 0, 0.8)"} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.text1}>Đặt xe</Text>
            <Text style={styles.text2}>Chọn điểm đến</Text>
          </View>
          <Image style={styles.headerImage} source={require("~assets/header.png")} />
        </View>

        <View style={styles.body}>
          <View style={styles.searchBar}>
            <GoogleApiSearch hint="Đến đâu?" icon={faLocationDot} />
          </View>
          <View style={styles.recommendation}></View>
          <View style={styles.confirmBtn}>
            <TouchableOpacity onPress={() => navigation.navigate("ChooseOrigin")}>
              <CustomBtn title="Chọn điểm đến" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseDestination;
