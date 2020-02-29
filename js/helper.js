let errors = [];
const _check = (err)=>{
    return errors.find((error)=>{
        error.name == err.name
    })
}
export const Helper = {
    errorHandler:(error)=>{
        let check = _check(error) ;
        if(check) {
            check.rules.push(...error.rules)
        }else {
            errors.push(error)
        }
    },buildSchema:()=>{
        let outputschema;
        if(errors.length){
            outputschema = {valid: false, error:[...errors]}
            errors = [];
        }else {
            outputschema = {valid:true, errors:[]}
        }
        return outputschema
    }

}