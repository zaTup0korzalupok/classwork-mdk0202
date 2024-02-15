let FirstName 
let LastName 
let nextBtn 
let reqInput = () => { 
    FirstName = document.querySelector('#input-fistname').value 
    LastName = document.querySelector('#input-lastname').value 
    nextBtn = document.querySelector('#next-btn') 
    if (FirstName.lenght != 0 && LastName != 0) { 
        nextBtn.disabled = false 
    } 
    return [FirstName, LastName] 
} 
let nextFor = () => { 
    inputChecks = document.querySelector('.wrapper-form-check') 
    if (inputChecks[0].checked === true && inputChecks[1].checked === false) { 
        let contentPositive = document.querySelector('.wrapper-content-positive') 
        contentPositive.style.display = 'block' 
        return inputChecks 
    }else{ 
        alert('null') 
    } 
} 
let saveform =()=>{ 
    let check = nextForm() 
    let peopleNames  = reqInput() 
    if(check[0].checked){ 
        let contentNegative = document.querySelector('.wrapper-content-positive') 
         let inputKaf = contentNegative.querySelector('#input-kaf').value 
         let inputSchool = contentNegative.querySelector('#input-school').value 
         let select =  contentNegative.querySelector('#select-map') 
         let selectOptions = select.options[select.selectedIndex].text 
         alert(`учасьние ${peopleNames[0]} ${peopleNames[1]}, прошел обучение в школе ${inputSchool} и яявляетс\ студентом ${inputKaf} и там ${selectOptions}`) 
 
    }else if(check[1].checked){ 
        let contentNegative =document.querySelector('.wrapper-content-negative') 
        let inputChild = contentNegative.querySelector('#input-name').value 
        let inputSchooll = contentNegative.querySelector('input-school').value 
        let select = contentNegative.querySelector('#select-nap') 
        let selectOptions = select.options[select.selectedIndex].text 
        alert(`участник ${peopleNames[0]} ${peopleNames[1]} с наставником ${inputChild}, прошел обучение в школе ${inputSchooll} ${selectOptions}`) 
    } 
}