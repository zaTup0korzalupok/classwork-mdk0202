const calculateGrate = () => {
 const gradeCount5 = parseInt(document.querySelector("#grade-5").value)         //document.querySelector("#grade-5").value
 const gradeCount4 = parseInt(document.querySelector("#grade-4").value) 
 const gradeCount3 = parseInt(document.querySelector("#grade-3").value) 
 const gradeCount2 = parseInt(document.querySelector("#grade-2").value)
 if(isNaN(gradeCount5) ||isNaN(gradeCount4) ||isNaN(gradeCount3) ||isNaN(gradeCount2) ){
    alert("пожалуйста, заполни все поля!")
 } 
 else {
    const gradeSum = gradeCount5 + gradeCount4 + gradeCount3 + gradeCount2
    const percentages = {
        '5': ((gradeCount5 / gradeSum) * 100).toFixed(2),
        '4': ((gradeCount4 / gradeSum) * 100).toFixed(2),
        '3': ((gradeCount3 / gradeSum) * 100).toFixed(2),
        '2': ((gradeCount2 / gradeSum) * 100).toFixed(2),
    }
    const resultDiv = document.querySelector("#result")
    resultDiv.innerHTML = `
    <p>Оценка5: ${percentages["5"]}/%</p>
    <p>Оценка5: ${percentages["4"]}/%</p> 
    <p>Оценка5: ${percentages["3"]}/%</p> 
    <p>Оценка5: ${percentages["2"]}/%</p> 
     
    `
 }
} 
























// const generatePassword = (
//     passwordLength = 8,
//     useUpperCase = true,
//     useNumbers = true,
//     useSpecialChars = true,
//   ) => {
//     const chars = 'abcdefghijklmnopqrstuvwxyz'
//     const numberChars = '0123456789'
//     const specialChars = '!"£$%^&*()'
  
//     const usableChars = chars
//      + (useUpperCase ? chars.toUpperCase() : '')
//      + (useNumbers ? numberChars : '')
//      + (useSpecialChars ? specialChars : '')
  
//     let generatedPassword = ''
  
//     for(i = 0; i <= passwordLength; i++) {
//       generatedPassword += usableChars[Math.floor(Math.random() * (usableChars.length))]
//     }
  
//     //return generatedPassword
//     console.log(generatedPassword)
//   }
//   generatePassword()