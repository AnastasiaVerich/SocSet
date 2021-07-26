export const requiredField=(value:any)=>{
    if(value) return undefined
    return "Field is required"
}
export const maxLenght=(maxLenght: number)=>(value:any)=>{
    if(value && value.length>maxLenght) return `max lenght is ${maxLenght} symbols`
    return undefined
}