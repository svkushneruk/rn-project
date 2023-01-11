import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const AddPostHeader = () => {
  const navigation = useNavigation();
  const [dimensions, setDimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      setDimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  return (
    <View style={{ ...styles.header, width: dimensions }}>
      <View style={{ ...styles.content }}>
        <TouchableOpacity
          style={styles.imgWrap}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/img/arrow-left.png")}
            style={styles.title}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Створити публікацію</Text>
      </View>
    </View>
  );
};

export default AddPostHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    paddingTop: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    // alignItems: "center",
  },
  content: {
    paddingBottom: 11,
    paddingTop: 11,
    justifyContent: "center",
    position: "relative",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    letterSpacing: -0.408,
  },
  imgWrap: {
    position: "absolute",
    left: 0,
    zIndex: 1111,
  },
});
