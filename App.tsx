import { StyleSheet, Text, View, Button, Image, TextInput, ToastAndroid, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/logo.png')}/>
        <Text style={styles.title}>Aplicación</Text>
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
          <Button title={'Entrar'} onPress={() => {alert('Presionado')}}></Button>

          <TouchableOpacity 
          onPress={() => {ToastAndroid.show('Presionado', ToastAndroid.SHORT)}}>
            <Text>Olvidaste tu contraseña</Text>
          </TouchableOpacity>
        </View>
      
      </View>

    </View>  

    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: '6%',
    fontSize: 40,
    fontWeight: 'bold',   
  },
  imageContainer:{
    alignSelf: 'center',
    marginTop: 130,
  },
  image:{
    width: 125,
    height: 125,    
  },
  formContainer: {
    width: '95%',
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginHorizontal: 'auto',
    marginTop: 80,
    borderRadius: 20,

  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 9,
    color: 'black',
  },
  formInputConteiner: {
    marginBottom: 20,
  },
  formInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button:{
    backgroundColor: 'transparent',
  }
});
