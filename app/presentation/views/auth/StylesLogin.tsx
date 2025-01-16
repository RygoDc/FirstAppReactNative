import { StyleSheet } from "react-native";
import { AppColors } from "../../theme/AppTheme";

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
      paddingBottom: 9,
      color: AppColors.secondary,
      borderBottomColor: AppColors.secondary,
    },
    
    
  });

  export default styles;