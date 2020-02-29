export const ValidationStrategy = {
    required :(inputeValue, rule)=>{
        if(rule.value && !inputeValue) {
            return rule.errMsg
        }
    },
    maxlength :(inputeValue, rule)=>{
        if(!inputeValue || inputeValue.length > rule.value) {
            return rule.errMsg
        }
    },
    minlength :(inputeValue, rule)=>{
        if(inputeValue.length < rule.value) {
            return rule.errMsg
        }
    }
}