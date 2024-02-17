let firstName
let lastName
let nextBtn

let pag =  () => {
    firstName = document.querySelector("#input-firstname").value 
    lastName = document.querySelector("#input-lastname").value
    nextBtn = document.querySelector("#input-surname").value
    if ( firstName.length !=0 && lastName.length !=0 && nextBtn.length !=0 ) {
            alert('хай ')
    }
    return [ firstName, lastName, nextBtn]
}
let nextForm = () => {
    inputChecks = document.querySelectorAll('.услуги')

    if ( inputChecks[0].checked === true) {

   
        return inputChecks
    }  else if (inputChecks[1].checked === true) {
        
        return inputChecks
    } 
    else if (inputChecks[2].checked === true ) {
        
  
        return inputChecks
    } 
    else if (inputChecks[3].checked === true ) {
        
  
        return inputChecks
    } 
    else if (inputChecks[4].checked === true ) {
        
  
        return inputChecks
    } 
    else {
        alert('Укажите только одно значение')
    }
    
    
}
