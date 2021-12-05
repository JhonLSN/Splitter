const inputBill = document.querySelector('.main-wrapper__card01__bill-input-number')
const inputPeople = document.querySelector('.main-wrapper__card01__people-amount-input')
const percentageOne = document.querySelector('.main-wrapper__card01__percentage-options-one')
const percentageTwo = document.querySelector('.main-wrapper__card01__percentage-options-two')
const percentageThree = document.querySelector('.main-wrapper__card01__percentage-options-three')
const percentageFor = document.querySelector('.main-wrapper__card01__percentage-options-for')
const percentageFive = document.querySelector('.main-wrapper__card01__percentage-options-five')
const percentageChange = document.querySelector('.main-wrapper__card01__percentage-options--change')
const amountResult = document.querySelector('.main-wrapper__card02__tip-amount-result')
const totalResult = document.querySelector('.main-wrapper__card02__total-result')
const btnReset = document.querySelector('.main-wrapper__card02__btn-reset')
let percentagem = 0;

percentageOne.addEventListener('click', () => {
  percentageOne.style.backgroundColor = '#9fe8df'
  percentageOne.style.color = '#00474b'
  percentageTwo.style.backgroundColor = '#00474b'
  percentageTwo.style.color = '#fff'
  percentageThree.style.backgroundColor = '#00474b'
  percentageThree.style.color = '#fff'
  percentageFor.style.backgroundColor = '#00474b'
  percentageFor.style.color = '#fff'
  percentageFive.style.backgroundColor = '#00474b'
  percentageFive.style.color = '#fff'
})

percentageTwo.addEventListener('click', () => {
  percentageTwo.style.backgroundColor = '#9fe8df'
  percentageTwo.style.color = '#00474b'
  percentageOne.style.backgroundColor = '#00474b'
  percentageOne.style.color = '#fff'
  percentageThree.style.backgroundColor = '#00474b'
  percentageThree.style.color = '#fff'
  percentageFor.style.backgroundColor = '#00474b'
  percentageFor.style.color = '#fff'
  percentageFive.style.backgroundColor = '#00474b'
  percentageFive.style.color = '#fff'
})

percentageThree.addEventListener('click', () => {
  percentageThree.style.backgroundColor = '#9fe8df'
  percentageThree.style.color = '#00474b'
  percentageTwo.style.backgroundColor = '#00474b'
  percentageTwo.style.color = '#fff'
  percentageOne.style.backgroundColor = '#00474b'
  percentageOne.style.color = '#fff'
  percentageFor.style.backgroundColor = '#00474b'
  percentageFor.style.color = '#fff'
  percentageFive.style.backgroundColor = '#00474b'
  percentageFive.style.color = '#fff'
})

percentageFor.addEventListener('click', () => {
  percentageFor.style.backgroundColor = '#9fe8df'
  percentageFor.style.color = '#00474b'
  percentageTwo.style.backgroundColor = '#00474b'
  percentageTwo.style.color = '#fff'
  percentageThree.style.backgroundColor = '#00474b'
  percentageThree.style.color = '#fff'
  percentageOne.style.backgroundColor = '#00474b'
  percentageOne.style.color = '#fff'
  percentageFive.style.backgroundColor = '#00474b'
  percentageFive.style.color = '#fff'
})

percentageFive.addEventListener('click', () => {
  percentageFive.style.backgroundColor = '#9fe8df'
  percentageFive.style.color = '#00474b'
  percentageTwo.style.backgroundColor = '#00474b'
  percentageTwo.style.color = '#fff'
  percentageThree.style.backgroundColor = '#00474b'
  percentageThree.style.color = '#fff'
  percentageFor.style.backgroundColor = '#00474b'
  percentageFor.style.color = '#fff'
  percentageOne.style.backgroundColor = '#00474b'
  percentageOne.style.color = '#fff'
})

percentageChange.addEventListener('click', () => {
  percentageFive.style.backgroundColor = '#00474b'
  percentageFive.style.color = '#fff'
  percentageTwo.style.backgroundColor = '#00474b'
  percentageTwo.style.color = '#fff'
  percentageThree.style.backgroundColor = '#00474b'
  percentageThree.style.color = '#fff'
  percentageFor.style.backgroundColor = '#00474b'
  percentageFor.style.color = '#fff'
  percentageOne.style.backgroundColor = '#00474b'
  percentageOne.style.color = '#fff'
})

inputPeople.addEventListener('blur', () => {
  if (percentageOne.style.backgroundColor == 'rgb(159, 232, 223)') {
    percentagem = 5;
    percentageChange.value = ''
  }

  if (percentageTwo.style.backgroundColor == 'rgb(159, 232, 223)') {
    percentagem = 10;
    percentageChange.value = ''
  }

  if (percentageThree.style.backgroundColor == 'rgb(159, 232, 223)') {
    percentagem = 15;
    percentageChange.value = ''
  }

  if (percentageFor.style.backgroundColor == 'rgb(159, 232, 223)') {
    percentagem = 25;
    percentageChange.value = ''
  }

  if (percentageFive.style.backgroundColor == 'rgb(159, 232, 223)') {
    percentagem = 50;
    percentageChange.value = ''
  }

  if (percentageChange.value != '') { percentagem = percentageChange.value }

  if (inputBill.value == '') {
    alert('Insira um valor na conta')
    inputBill.style.border = '2px solid red'

    let time = setInterval(() => {
      inputBill.style.border = ''
    }, 2000)
    return
  }

  if (inputPeople.value == '') {
    alert('Insira a quantidade de pessoas')
    inputPeople.style.border = '2px solid red'

    let time = setInterval(() => {
      inputPeople.style.border = ''
    }, 2000)
    return
  }

  let tip = ((percentagem * inputBill.value) / 100) / inputPeople.value;
  let total = (inputBill.value / inputPeople.value) + tip

  amountResult.innerHTML = `$ ${tip.toFixed(2)}`
  totalResult.innerHTML = `$ ${total.toFixed(2)}`

  if (amountResult.innerHTML !== '$ 0.00') {
    btnReset.style.backgroundColor = '#9fe8df'
    btnReset.style.cursor = 'pointer'

    btnReset.addEventListener('click', () => {
      amountResult.innerHTML = `$ ${0.00}`
      totalResult.innerHTML = `$ ${0.00}`
      btnReset.style.backgroundColor = ''
      btnReset.style.cursor = ''
    })
  }
})
