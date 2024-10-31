const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValue() {
  const inputCurrencyField = document.querySelector('.input-valor');
  const inputCurrencyValue = parseFloat(inputCurrencyField.value) || 0; // Define como 0 se for NaN
  const currencyValueToConvert = document.querySelector('.real-value'); // valor em real
  const currencyValueConverted = document.querySelector('.dolar-value'); // valor a converter

  const dolarToday = 5.76;
  const euroToday = 6.18;
  const bitcoinToday = 417.34;

  let convertedValue;

  // Verifica se o campo de entrada está vazio ou com valor inválido
  if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
    currencyValueConverted.innerHTML = 'Insira um valor válido';
    currencyValueToConvert.innerHTML = '';
    return;
  }

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
    currencyValueConverted.innerHTML = `₿ ${convertedValue.toFixed(6)}`; // Usando o símbolo manualmente
  }

  // Atualiza o valor em reais (BRL) na interface
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.querySelector('.dolar');
  const currencyImage = document.querySelector('.dolar-img');

  if (currencySelect.value === 'dolar') {
    currencyName.innerHTML = 'US$ Dólar Americano';
    currencyImage.src = './assets/dolar.png';
  }

  if (currencySelect.value === 'euro') {
    currencyName.innerHTML = '€ Euro';
    currencyImage.src = './assets/euro.png';
  }

  if (currencySelect.value === 'bitcoin') {
    currencyName.innerHTML = '₿ Bitcoin';
    currencyImage.src = './assets/bitcoin.png';
  }

  convertValue();
}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValue);
