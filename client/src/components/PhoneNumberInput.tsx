import { useState } from 'react'

export function decoratePhoneNumber(cleanDigits: string){
    let decoratedDigits = cleanDigits

    if(cleanDigits.length > 6){
        decoratedDigits = `(${cleanDigits.substring(0,3)}) ${cleanDigits.substring(3,6)}-${cleanDigits.substring(6)}`
    }
    
    else if(cleanDigits.length > 3){
        decoratedDigits = `(${cleanDigits.substring(0,3)}) ${cleanDigits.substring(3)}`
    }
    else if(cleanDigits.length > 0){
        decoratedDigits = `(${cleanDigits.substring(0,3)}`
    }

    return decoratedDigits
}

const PhoneNumberInput = () => {

    const [phoneNumber, setPhoneNumber] = useState('')

    function handleInputChange(event: any){
        
        //10 digits long at max, only numbers
        const cleanDigits = event.target.value.replace(/\D/g,'').substring(0,10)
        setPhoneNumber(decoratePhoneNumber(cleanDigits))
    }
    

    return (
        <div className="PhoneNumberInput">
           <input 
            placeholder={`(555) 555-5555`} 
            value={phoneNumber}
            onChange={handleInputChange}
            type="text"/>
        </div>
    );
}

export default PhoneNumberInput
