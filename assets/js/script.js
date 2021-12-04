const inputBill = document.querySelector('.main-wrapper__card01__bill-input-number')
const amountPeople = document.querySelector('.main-wrapper__card01__people-amount-input')
const percentageOne = document.querySelector('.main-wrapper__card01__percentage-options-one') 
const percentageTwo = document.querySelector('.main-wrapper__card01__percentage-options-two') 
const percentageThree = document.querySelector('.main-wrapper__card01__percentage-options-three') 
const percentageFor = document.querySelector('.main-wrapper__card01__percentage-options-for') 
const percentageFive = document.querySelector('.main-wrapper__card01__percentage-options-five') 
const percentageChange = document.querySelector('.main-wrapper__card01__percentage-options--change') 
const amountResult = document.querySelector('.main-wrapper__card02__tip-amount-result')
const totalResult = document.querySelector('.main-wrapper__card02__total-result')
const btnReset = document.querySelector('.main-wrapper__card02__btn-reset')

percentageOne.addEventListener('click', () =>{
  percentageOne.style.backgroundColor = '#9fe8df'  
  percentageOne.style.color = '#00474b'  
})

inputBill.addEventListener('blur', () =>{
  amountResult.innerHTML = `$ ${0.00}`
  totalResult.innerHTML = `$ ${0.00}`
})