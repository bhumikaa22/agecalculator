function calculateage(){
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    if (birthdate){
        const today = new Date();
        const birthDate = new Date(birthdate);
    
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0 ){
        ageMonths--;
        ageDays = ageDays + new Date (
            today.getFullYear(), 
            today.getmonth(),
            0
        ).getDate();
        }
    if (ageMonths < 0){
        ageYears--;
        ageMonths = ageMonths + 12 ;
    }
    resultElement.innerText = `your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days`;
    resultElement.style.color = "green";
    }else{
        resultElement.innerText= "please enter your birthdate";
        resultElement.style.color = "red";
    }
}