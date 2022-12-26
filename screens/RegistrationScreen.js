import { Text, StyleSheet, View, ImageBackground, Button, TextInput } from "react-native";

const RegistrationScreen = () => {
    return (
        <ImageBackground style={styles.bg} source={require("../assets/img/bg.jpg")} >
            <View style={styles.form}>
                <View  style={[styles.avatarWrap, {
        transform: [{ translateX: "-50percent" }]
      }]}>
                    <View style={styles.avatar}>                
                        <Button title="asdasd" style={styles.avatarBtn } />
                    </View>
                </View>
                

                <Text style={styles.title}>Реєстрація</Text>
                
                <View style={styles.inputWrap}>                
                    <TextInput style={styles.input} placeholder="Логін"/>
                </View>

                <View style={styles.inputWrap}>                
                    <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
                </View>

                <View style={styles.inputWrap}>                
                    <TextInput style={styles.input} placeholder="Пароль"  secureTextEntry={true}/>
                    <Button title="Показати" style={styles.show} />
                </View>
                
                <Button title="Зареєструватися"  style={styles.registerBtn}/>

                

            </View>
        </ImageBackground>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
    },
    form: {
        backgroundColor: '#fff',
        position: 'relative'
    },  
    avatarWrap: {
        position: 'absolute',
        width: 120,
        height: 120,
        backgroundColor: "#000",
        zIndex: 9,
        // left: "50%",
        // top: "-50%"
    },  
    title: {
      color: "#fff",
      fontSize: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
    }
  });