import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./StylesLogin";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../../components/RoundedButton";
import { FormInputInlineWithIcon} from "../../components/FormInputInlineWithIcon";

export function LoginScreen  ()  {
    const navigation = useNavigation();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={styles.container}>
        
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../../assets/logo.png')}/>
                <Text style={styles.title}>First App</Text>
              </View>
        
              <View style={styles.formContainer}>
                <Text style={styles.formTitle}>INICIAR SESIÓN</Text>
                
                <FormInputInlineWithIcon
                image={require('../../../../assets/user.png')} 
                placeholder={'Correo Electrónico'} 
                keyboardType={'email-address'} 
                secureTextEntry={false}
                onPressFormInterface={(text) => setEmail(text)}/>
        
                <FormInputInlineWithIcon 
                image={require('../../../../assets/password.png')} 
                placeholder={'Password'} 
                keyboardType={'default'} 
                secureTextEntry={true}
                onPressFormInterface={(text) => setPassword(text)}/>
        
                <View>
                  <RoundedButton text={'Iniciar Sesión'} onPressFromInterface={() => {alert('Usuario: ' + email )}}/>
                </View>

                <View style={{marginTop: 30}}>
                  <TouchableOpacity
                    onPress={() => {navigation.navigate('RegistroScreen')}}>
                    <Text>Registrarme</Text>
                  </TouchableOpacity>
                </View>

              </View>
        
            </View>  
    );
};

export default LoginScreen;