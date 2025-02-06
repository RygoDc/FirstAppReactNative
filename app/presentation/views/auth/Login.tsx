import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ToastAndroid } from "react-native";
import styles from "./StylesLogin";
import { useNavigation } from "@react-navigation/native";
import { RoundedButton } from "../../components/RoundedButton";
import { FormInputInlineWithIcon} from "../../components/FormInputInlineWithIcon";
import ViewModel from "./ViewModel";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import { PropsStackNavigation} from "../../interfaces/StackNav"



export function LoginScreen  ({navigation, route}:PropsStackNavigation)  {
    // const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    // const [email, setEmail] = useState<string>('');
    // const [password, setPassword] = useState<string>('');

    const {email, password, onChangeLogin,login, errorMessage,user} = ViewModel.LoginViewModel();

    useEffect(() => {
      if(errorMessage !== '')
        ToastAndroid.show(errorMessage, ToastAndroid.LONG)      
      }, [errorMessage])

    useEffect(() => {
      if(user && user?.token){
        console.log('user: ', JSON.stringify(user));
        navigation.replace('AdminTabNavigator');
      }

    }, [user])
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
                onPressFormInterface={(text) => onChangeLogin('email', text)}/>
        
                <FormInputInlineWithIcon 
                image={require('../../../../assets/password.png')} 
                placeholder={'Contraseña'} 
                keyboardType={'default'} 
                secureTextEntry={true}
                onPressFormInterface={(text) => onChangeLogin('password', text)}/>
        
                <View>
                  <RoundedButton text={'Iniciar Sesión'} onPressFromInterface={() => {login()}}/>
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