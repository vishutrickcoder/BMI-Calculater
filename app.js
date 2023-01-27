const btnEl = document.getElementById("btn");
const BMiInputEl = document.getElementById("bmiResult");
const WeightConditionEl = document.getElementById("weight-condition")
function calculateBmi(){

    const heightEl = document.getElementById("height").value / 100;
    const weightEl = document.getElementById("weight").value;

    const bmiValue = weightEl / (heightEl * heightEl);

    BMiInputEl.value = bmiValue;

    if(bmiValue < 18.5){
        WeightConditionEl.innerText = "Under Weight";
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        WeightConditionEl.innerText = "Normal Weight"
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        WeightConditionEl.innerText = "Over Weight ";
    }else if(bmiValue >= 30){
        WeightConditionEl.innerText = " Obesity";
    }



}



btnEl.addEventListener("click",calculateBmi)