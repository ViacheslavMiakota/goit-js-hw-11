// export function createMarkup({ name, capital, population, flags, languages }) {
//   const langStr = Object.values(languages).join(', ');
//   return `<div class="countries__card">
//     <h2 class="countries-name">${name.official}</h2>
//     <ul class="countries-info list">
//         <li class="countriesr-info-item">
//             <p class="capital">Столиця: ${capital} </p>
//         </li>
//         <li class="countries-info-item">
//             <p class="population">Населення країни: ${population} <sup>  &#128100;</sup></p>
//         </li>
//         <li class="countries-info-item">
//         <img src="${flags.svg}" alt="Прапор країни" />
//         </li>
//         <li class="countries-info-item">
//             <p class="languages">Мова країни: ${langStr}</p>
//         </li>
//     </ul>
// </div>`;
// }
// export function createPrewiewMarkup({ flags, name }) {
//   return `<li class="country-list__item">
//       <img
//         class="country-list__flag"
//         src="${flags.svg}"
//         width="30px"
//         height="20px"
//       />
//       <p class="country-list__name">${name.official}</p>
//     </li>`;
// }
