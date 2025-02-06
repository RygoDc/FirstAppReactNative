import React, { useEffect } from "react";
import { View, Text, Image,TextInput, ToastAndroid, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./StylesLogin";
import { RoundedButton } from "../../components/RoundedButton";
import { FormInputInlineWithIcon } from "../../components/FormInputInlineWithIcon";
import ViewModel from "./ViewModel";

function RegistroScreen  ()  {
    const {firstName, lastName, email, phone, password, confirmPassword, onChangeRegister, register, errorMessage} = ViewModel.RegistroViewModel();
    useEffect(() => {
          if(errorMessage !== ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
          }
          }, [errorMessage])
    return (
        <View style={styles.container}>
            <View style={stylesRegistro.imageContainer}>
                <Image style={stylesRegistro.image} source={require('../../../../assets/logo.png')}/>
                <Text style={styles.title}>First App</Text>
              </View>            

            <View style={stylesRegistro.formContainer}>
            <Text style={styles.formTitle}>Registro</Text>
            <FormInputInlineWithIcon
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => {onChangeRegister('firstName', text)}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => {onChangeRegister('lastName', text)}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => {onChangeRegister('email', text)}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => {onChangeRegister('phone', text)}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => {onChangeRegister('password', text)}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/confirm_password.png")}
                    placeholder={"Repetir contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => {onChangeRegister('confirmPassword', text)}}
                ></FormInputInlineWithIcon>               

                <View style={{marginTop: 20}}>
                    <RoundedButton text={'Finalizar'} onPressFromInterface={() => {register(); ToastAndroid.show('Registrado', ToastAndroid.SHORT);}}/>
                    
                </View>
            </View>
        </View>
    );
}

const stylesRegistro = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
    },
    imageContainer:{
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,
    },
    formContainer: {
        width: '95%',
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginHorizontal: 'auto',
        marginTop: 50,
        borderRadius: 20,
    
      },

})

export default RegistroScreen;