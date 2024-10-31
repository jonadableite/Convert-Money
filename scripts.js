const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValue() {
  const inputCurrencyValue = parseFloat(document.querySelector('.input-valor').value);
  const currencyValueToConvert = document.querySelector('.real-value'); // valor em real
  const currencyValueConverted = document.querySelector('.dolar-value'); // valor a converter

  const dolarToday = 5.76;
  const euroToday = 6.18;
  const bitcoinToday = 417.34;

  let convertedValue;

  // Defina o valor convertido com base na moeda selecionada
  if (currencySelect.value === 'dolar') {
    convertedValue = inputCurrencyValue / dolarToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(convertedValue);
  }

  if (currencySelect.value === 'euro') {
    convertedValue = inputCurrencyValue / euroToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(convertedValue);
  }

  if (currencySelect.value === 'bitcoin') {
    convertedValue = inputCurrencyValue / bitcoinToday;
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC',
    }).format(convertedValue);
  }

  // Atualiza o valor em reais (BRL) na interface
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue);
}

convertButton.addEventListener('click', convertValue);
