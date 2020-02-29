import {FormInputFiltration} from './formInputFiltration'
import { Helper } from './helper'

export const FormValidationModule = (inputs) => {
    inputs.forEach((input)=>{
        FormInputFiltration(input)
    })
    return Helper.buildSchema();
}