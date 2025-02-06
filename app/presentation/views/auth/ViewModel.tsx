import React, { useEffect, useState } from "react";
import { ApiDelivery } from "../../../data/sources/remote/api/ApiDelivery";
import { RegisterAuthUseCase } from "../../../domain/useCases/auth/RegisterAuth";
import { loginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";
import { UserLogin, UserLoginInterface } from "../../../domain/entities/User";
import { SaveUserUseCase } from "../../../domain/useCases/userLocal/SaveUser";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { getUserUseCase} from "../../../domain/useCases/userLocal/GetUser";
import { useUserLocalStorage } from "../../hooks/useUserLocalStorage";


const LoginViewModel = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const {user, getUserSession} = useUserLocalStorage();

    const onChangeLogin = (property: string, value:any) => {
        setValues({...values, [property]: value})
    }

    const login = async() => {        
        if (validateForm()){
            const response = await loginAuthUseCase(values as UserLoginInterface)
            if (!response.success){
                setErrorMessage(response.message)                
            }
            else{
                console.log(JSON.stringify(
                    response
                )
                );
                
                await SaveUserUseCase(response.data as UserLogin)
                getUserSession()
            }
        }
    }

    const validateForm = () => {
        if (values.email === ''){
            setErrorMessage('El correo es obligatorio')
            return false
        }
        if (values.password === ''){
            setErrorMessage('La contraseña es obligatoria')
            return false
        }
        return true
    }
    //En property llega el email o password
    // values llega el valor del input
    //array[email]=value

    return {...values, onChangeLogin,login, errorMessage,user};
}

const RegistroViewModel = () => {
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    })

    const onChangeRegister = (property: string, value:any) => {
        setValues({...values, [property]: value})
    }

    const register = async() => {
        if (validateForm()){
            await RegisterAuthUseCase(values)            
        }
    }

    const validateForm = () => {
        if (values.firstName === ''){
            setErrorMessage('El nombre es obligatorio')
            return false
        }
        if (values.lastName === ''){
            setErrorMessage('Los apellidos son obligatorios')
            return false
        }
        if (values.email === ''){
            setErrorMessage('El correo es obligatorio')
            return false
        }
        if (values.phone === ''){
            setErrorMessage('El teléfono es obligatorio')
            return false
        }
        if (values.password === ''){
            setErrorMessage('La contraseña es obligatoria')
            return false
        }
        if (values.confirmPassword === ''){
            setErrorMessage('La confirmación de contraseña es obligatoria')
            return false
        }
        if (values.password !== values.confirmPassword){
            setErrorMessage('Las contraseñas no coinciden')
            return false
        }
        return true
    }
        // try {
        //     const response = await ApiDelivery.post('/users/create', values);
        //     console.log(JSON.stringify(response));

        // } catch (error) {
        //     console.log("ERROR: ",error)   
        // }

    return {...values, onChangeRegister,register, errorMessage,};
}

export default {LoginViewModel, RegistroViewModel};
