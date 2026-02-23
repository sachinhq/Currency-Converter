const BASE_URL = "https://api.frankfurter.app/latest?";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name=== "from" && currCode === "USD"){
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);

    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1 ){
        amtVal = 1;
        amount.value = "1";
    }
    const from = fromCurr.value;
    const to = toCurr.value;
    const URL = `${BASE_URL}amount=${amtVal}&from=${from}&to=${to}`;
    let response = await fetch(URL);

    if(!response.ok){
        alert("currency not supported or api error");
        return;
    }
    let data = await response.json();
    let rate = data.rates[to];
    let msg = document.querySelector(".msg");
    msg.innerText = `${amtVal} ${from} = ${rate} ${to}`;
});

window.addEventListener("load", () => {
    updateFlag(fromCurr);
    updateFlag(toCurr);
    btn.click();
});