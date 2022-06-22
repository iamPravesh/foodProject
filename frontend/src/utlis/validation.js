


export const phoneValidate =(inputValue)=>{
    let phoneNo =/^\d{10}$/;
    if(inputValue.match(phoneNo)){
        return true;
    }
    else{
        return false
    }

}