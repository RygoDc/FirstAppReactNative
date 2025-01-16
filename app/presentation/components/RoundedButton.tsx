import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../theme/AppTheme";

interface Props {
    text: string,
    onPressFromInterface: () => void,
}



export const RoundedButton = ({text, onPressFromInterface}: Props) => {
    return (
        <TouchableOpacity style={styles.buttonForm}
            onPress={() => onPressFromInterface()}>
            <Text style={styles.buttonFormTitle}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonForm:{
        backgroundColor: AppColors.primary,
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
      },
      buttonFormTitle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
      },
});