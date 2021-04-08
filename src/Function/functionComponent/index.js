import setFormMethod from './form'

const prefixFunction = (func)=>{
    const split = func.split("_")
    /* index 0 adalah prefix
       index 1 adalah method
       index 2 adalah nama uniqe
    */ 
   switch(split[0]){
        case 'form':
            return {
                method: split[1],
                func:setFormMethod(split[1],split[2])
            }
        default:
            return {
                method:null,
                func:null
            }
   }
}
const getFunctionProps = (config,index) =>{
    const {props,component} = config
    let property = {}
    property.key = `${component}-${index}`
    
    if(props.name){
        property.name = props.name
    }
    if(props.value){
        // property.value =
    }

    if(props.function){
        property.id = props.field_id
        for (let index = 0; index < props.function.length; index++) {
            const arrayMethod = props.function[index];
            const {method,func} = prefixFunction(arrayMethod)
            if(method !== null && func !== null){
                property[method] = func
            }
        }
    }

    return property
}
export default getFunctionProps