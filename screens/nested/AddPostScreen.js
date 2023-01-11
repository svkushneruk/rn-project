import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Dimensions } from "react-native";

// import SvgUri from "react-native-svg-uri";

import * as ImagePicker from "expo-image-picker";

import AddPostHeader from "../../components/AddPostHeader/AddPostHeader";

// import PhotoSVG from "../../assets/img/Photo.svg";

const AddPostScreen = () => {
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );
  const [image, setImage] = useState(null);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;
      setDimensions(width);
    };
    const dimensionsHandler = Dimensions.addEventListener("change", onChange);

    return () => {
      dimensionsHandler.remove();
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.screen}>
      <AddPostHeader />
      <View style={{ ...styles.content, width: dimensions }}>
        <View style={styles.photoWrap}>
          <View style={styles.photo}></View>
          <Text style={styles.textLoad}>Завантажити фото</Text>
        </View>
        {
          // <SvgUri
          //   width={40}
          //   height={40}
          //   style={{ borderColor: buildExternalHelpers, borderWidth: 2 }}
          //   source={require("../../assets/img/Photo.svg")}
          // />
        }
      </View>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    paddingTop: 32,
  },
  photoWrap: {
    borderWidth: 1,
    borderColor: "red",
    marginBottom: 32,
  },
  photo: {
    borderWidth: 1,
    borderColor: "green",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 8,
  },
  textLoad: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
