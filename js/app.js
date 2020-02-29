import {FormValidationModule} from './formValidationModule';

document.querySelector("#sendForm").addEventListener("click", (e) => {
  e.preventDefault();

  const formValidation = FormValidationModule([
    {
      name: "username",
      rules: [
        { name: "required", value: true, errMsg: "this input is required" },
        { name: "maxlength", value: 10, errMsg: "maxlength error" }
      ]
    },
    {
      name: "password",
      rules: [
        { name: "required", value: true, errMsg: "this input is required" },
        { name: "minlength", value: 5, errMsg: "minlength error" }
      ]
    }
  ]);
  console.log(formValidation)
});
