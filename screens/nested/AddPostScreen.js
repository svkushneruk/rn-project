import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import AddPostHeader from "../../components/AddPostHeader/AddPostHeader";

import PhotoPNG from "../../assets/img/photo.png";

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
        <View style={styles.inner}>
          <View style={styles.photoWrap}>
            <TouchableOpacity
              style={{
                ...styles.photo,
                height: 240,
              }}
              onPress={pickImage}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: dimensions,
                    height: 240,
                    maxHeight: "auto",
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image source={PhotoPNG} />
              )}
            </TouchableOpacity>

            <Text style={styles.textLoad}>Завантажити фото</Text>
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.textInput}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Назва"
              placeholderTextColor="#BDBDBD"
            />
          </View>
          <View
            style={{
              ...styles.inputWrap,
              flexDirection: "row",
              width: dimensions,
              // borderWidth: 1,
              // borderColor: "red",
              alignItems: "center",
              marginTop: 16,
            }}
          >
            <Image
              source={require("../../assets/img/map-pin.png")}
              style={styles.mapImage}
            />
            <TextInput
              style={styles.textInput}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="Місцевість"
              placeholderTextColor="#BDBDBD"
            />
          </View>
          <TouchableOpacity style={styles.publicBtn}>
            <Text style={styles.publicBtnText}>Опублікувати</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.trashBtn}>
          <Image source={require("../../assets/img/trash.png")} />
        </TouchableOpacity>
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
    paddingBottom: 34,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  inner: {},
  photoWrap: {
    marginBottom: 32,
  },
  photo: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textLoad: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  textInput: {
    paddingTop: 16,
    paddingBottom: 16,
    color: "#BDBDBD",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrap: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  mapImage: {
    marginRight: 4,
  },
  publicBtn: {
    marginTop: 32,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  },
  publicBtnText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  trashBtn: {
    padding: 8,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
  },
});
