import React from "react";
import { View, Text, TextInput, ToastAndroid, TouchableOpacity } from "react-native";
import styles from "./StylesLogin";

function RegistroScreen  ()  {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <View style={styles.formContainer}>
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Nombre</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10}}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Apellido</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10}}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Correo</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10}} keyboardType='email-address'/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Teléfono</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10}} keyboardType='phone-pad'/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Contraseña</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10}} secureTextEntry={true}/>
                </View>
                <View style={{marginTop: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Repetir Contraseña</Text>
                    <TextInput style={{borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 10}} secureTextEntry={true}/>
                </View>

                <View style={styles.formInputConteiner, {marginTop: 20}}>
                    <TouchableOpacity style={styles.buttonForm}
                        onPress={() => {ToastAndroid.show('Presionado', ToastAndroid.SHORT)}}>
                        <Text style={styles.buttonFormTitle}>Enviar</Text>
                    </TouchableOpacity>
                    </View>
                </View>

        </View>
    );
}

export default RegistroScreen;