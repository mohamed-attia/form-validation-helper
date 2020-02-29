import { ValidationStrategy } from "./validationStrategey";
import { Helper } from "./helper";
export const FormInputFiltration = input => {
  let el = document.querySelector(`input[name=${input.name}]`);
  input.rules.forEach(rule => {
    const validationError = ValidationStrategy[rule.name](el.value, rule);
    if (validationError) {
      Helper.errorHandler({
        name: input.name,
        rules: [
          {
            name: rule.name,
            errMsg: validationError
          }
        ]
      });
    }
  });
};
