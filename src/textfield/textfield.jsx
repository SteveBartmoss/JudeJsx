import './textfield.css'

export function TextField({nameField,isPass=false,textHolder,target,handleTarget,fieldType="text"}){
    return(
        <input 
            type={isPass ? "password": fieldType} 
            name={nameField} 
            className='text-field' 
            placeholder={textHolder} 
            value={target} 
            onChange={handleTarget} 
        />
    )
}