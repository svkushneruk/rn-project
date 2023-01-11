import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MyHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.content}>
        <Text style={styles.title}>Публікації</Text>
        <View style={styles.imgWrap}>
          <Image
            source={require('../../assets/img/log-out.png')}
            style={styles.title}
          />
        </View>
      </View>
    </View>
  )
}

export default MyHeader

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
  content: {
    paddingBottom: 11,
    paddingTop: 11,
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    letterSpacing: -0.408,
  },
  imgWrap: {
    position: 'absolute',
    right: 0,
  },
  img: {},
})
