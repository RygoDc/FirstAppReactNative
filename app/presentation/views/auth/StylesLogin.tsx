import { StyleSheet } from "react-native";

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
    buttonForm:{
      backgroundColor: 'black',
      paddingVertical: 10,
      borderRadius: 10,
      paddingHorizontal: 20,
    },
    buttonFormTitle: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    }
  });

  export default styles;