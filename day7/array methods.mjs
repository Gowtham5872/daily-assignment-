import fetch from 'node-fetch';


// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all the countries from the Asia continent/region
    const asiaCountries = data.filter(country => country.region === 'Asia');

    // Get all the countries with a population of less than 200,000
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    // Print name, capital, and flag of each country
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
    });

    // Calculate the total population of all countries
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population:", totalPopulation);

    // Find the country that uses US dollars as currency
    const countryWithUSD = data.find(country => country.currencies.USD !== undefined);
    if (countryWithUSD) {
      console.log("Country that uses US dollars:", countryWithUSD.name.common);
    } else {
      console.log("No country uses US dollars as currency.");
    }
  })
  .catch(error => console.log("Error fetching data:", error));
