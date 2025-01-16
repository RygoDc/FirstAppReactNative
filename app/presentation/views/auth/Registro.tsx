import React from "react";
import { View, Text, TextInput, ToastAndroid, TouchableOpacity } from "react-native";
import styles from "./StylesLogin";
import { RoundedButton } from "../../components/RoundedButton";
import App from "../../../../App";
import { FormInputInlineWithIcon } from "../../components/FormInputInlineWithIcon";

function RegistroScreen  ()  {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <View style={styles.formContainer}>
            <FormInputInlineWithIcon
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={() => {alert('')}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={() => {alert('')}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={() => {alert('')}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={() => {alert('')}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={() => {alert('')}}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/confirm_password.png")}
                    placeholder={"Repetir contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={() => {alert('')}}
                ></FormInputInlineWithIcon>               

                <View style={{marginTop: 20}}>
                    <RoundedButton text={'Registrar'} onPressFromInterface={() => {alert('Registro exitoso')}}/>
                    
                </View>
            </View>
        </View>
    );
}

export default RegistroScreen;