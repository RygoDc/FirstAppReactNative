import React from "react";
import { View, Text, TextInput } from "react-native";

function RegistroScreen  ()  {
    return (
        <View>
            <Text>Registro</Text>
            <View style={{marginTop: 20}}>
                <Text style={{fontWeight: 'bold'}}>Nombre</Text>
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

        </View>
    );
}

export default RegistroScreen;