const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";
const FALLBACK_URL = "https://latest.currency-api.pages.dev/v1";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const updateFlag = (element) => {
  const currCode = element.value;
  // Assuming countryList is accessible
  const countryCode = countryList[currCode];
  const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  const img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

const updateExchangeRate = async () => {
  const amount = document.querySelector(".amount input");
  let amtVal = amount.value.trim();
  if (amtVal === "" || isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amount.value = "1";
  }

  const fromCurrency = fromCurr.value.toLowerCase();
  const toCurrency = toCurr.value.toLowerCase();
  const URL = `${BASE_URL}/currencies/${fromCurrency}.json`;

  try {
    const data = await fetchData(URL);
    const rate = data[fromCurrency][toCurrency];

    const finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (error) {
    console.error('Error fetching exchange rate:', error.message);
    msg.innerText = 'Error fetching exchange rate. Trying fallback...';
    try {
      const fallbackURL = `${FALLBACK_URL}/currencies/${fromCurrency}.json`;
      const data = await fetchData(fallbackURL);
      const rate = data[fromCurrency][toCurrency];

      const finalAmount = amtVal * rate;
      msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value} (fallback used)`;
    } catch (fallbackError) {
      console.error('Error fetching exchange rate from fallback:', fallbackError.message);
      msg.innerText = 'Error fetching exchange rate from fallback.';
    }
  }
};

const populateDropdowns = () => {
  for (const select of dropdowns) {
    for (const currCode in countryList) {
      const newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if ((select.name === "from" && currCode === "USD") ||
          (select.name === "to" && currCode === "INR")) {
        newOption.selected = true;
      }
      select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  populateDropdowns();
  updateExchangeRate();
});
