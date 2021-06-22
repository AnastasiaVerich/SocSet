export const requiredField=(value:any)=>{
    if(value) return undefined
    return "Field is required"
}
export const maxLength=(maxLength: number)=>(value:any)=>{
    if(value && value.length>maxLength) return `max lenght is ${maxLength} symbols`
    return undefined
}