const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();
const displayCountries = countries =>{
//console.log(countries)

// for(const country of countries){
//     console.log(country)//250 ta desh dekkhabe
// }
const countryDiv = document.getElementById('countires');
countries.forEach(country => {
    //console.log(country.name);
    const div= document.createElement('div');
    div.classList.add('country');

    div.innerHTML = `
    <h3> ${country.name.common}</h3>
    <p> ${country.capital}</p>
    <button onclick="loadCountryByName('${country.name.common}')">Details</button>
    `

    // const h3 = document.createElement('h3');
    // h3.innerText=country.name.common;
    // div.appendChild(h3);

    // const p= document.createElement('p');
    // p.innerText=country.capital;
    // div.appendChild(p);

    countryDiv.appendChild(div);
});
}
const loadCountryByName = name =>{
    //dynamic babe desher name boshbe
    const url = `https://restcountries.com/v3.1/name/${name}`;
     fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail= country =>{
    console.log(country)
    const countryDiv = document.getElementById('conuntry-detail');
    countryDiv.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flags.svg}">
    `

}
