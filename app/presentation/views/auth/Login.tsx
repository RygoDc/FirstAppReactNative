import React from "react";
import { View, Text, Image, TextInput, ToastAndroid, TouchableOpacity } from "react-native";
import styles from "./StylesLogin";

export function LoginScreen  ()  {
    return (
        <View style={styles.container}>
        
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../../assets/logo.png')}/>
                <Text style={styles.title}>First App</Text>
              </View>
        
              <View style={styles.formContainer}>
                <Text style={styles.formTitle}>INICIAR SESIÓN</Text>
                
                <View style={styles.formInputConteiner}>
                  <TextInput style={styles.formInput}
                    placeholder={'Usuario'}
                    keyboardType ={'default'}
                    secureTextEntry={false}
                  ></TextInput>
                </View>
        
                <View style={styles.formInputConteiner}>
                  <TextInput style={styles.formInput}
                    placeholder={'Contraseña'}
                    secureTextEntry={true}
                  ></TextInput>
                </View>
        
                <View style={styles.formInputConteiner}>
                  <TouchableOpacity style={styles.buttonForm}
                    onPress={() => {ToastAndroid.show('Presionado', ToastAndroid.SHORT)}}>
                    <Text style={styles.buttonFormTitle}>Entrar</Text>
                  </TouchableOpacity>
                </View>
              
              </View>
        
            </View>  
    );
};

export default LoginScreen;