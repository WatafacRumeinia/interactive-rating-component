const score=document.querySelectorAll("#num")
const feetbackBefore=document.querySelector("#before-submit");
const submit=document.querySelector("#submit");
const feedbackAfter=document.querySelector(".container-submit");
const rating=document.querySelector("#rating");

score.forEach(function (button){
    button.onclick= function(){
        button.classList.add("selected")
        let value= button.dataset.value;
        submit.addEventListener('click',()=> showFeedback(value))

    }
});
function showFeedback(value){
feedbackAfter.style.display = "flex";
feetbackBefore.style.display = 'none';
rating.innerHTML =`You have selected ${value} out of 5`
}