import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import MyHeader from "../../components/MyHeader/MyHeader";

const PostsScreen = ({ navigation }) => {
  return (
    <View style={{ position: "relative", flex: 1 }}>
      <MyHeader />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => navigation.navigate("AddPostScreen")}
      >
        <AntDesign name="plus" size={24} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  addBtn: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 24,
    position: "absolute",
    bottom: 20,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
