const convertButton = document.querySelector('.convert-button');

function convertValue() {
  const inputCurrencyValue = document.querySelector('.input-valor').value;
  const currencyValueToConvert = document.querySelector('.real-value'); // valor em real
  const currencyValueConverted = document.querySelector('.dolar-value'); // valor a converter

  const dolarToday = 5.76;

  const convertedValue = inputCurrencyValue / dolarToday;

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue);

  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(convertedValue);

  console.log(convertedValue);
}

convertButton.addEventListener('click', convertValue);
