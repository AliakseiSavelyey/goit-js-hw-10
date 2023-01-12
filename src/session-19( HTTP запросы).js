import './css/session-19( HTTP запросы).css';
// import pokemonCardTpl from './templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

// REST API - бекенд построенный по REST-архитектуре. Служит прослойкой между клиентом и базой данных. Имеет стандартный интерфейс для обращения к ресурсам. Работает как ВЕБ-САЙТ, мы посылаем HTTP-запрос, а в ответ получаем данные в JSON-формате.

// HTTP-запросы в браузере
// -Fetch API
// -Вкладка Network
// -HTTP -методы
// -Заголовки
// -MIME -типы
// -Параметры запроса
// -Документация REST API
// -Обработка 404 с fetch
// -Аутентификация
// -Библиотеки-обертки
// -https://pokeapi.co/

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};

fetchPokemon(3)
  .then(renderPokemonCard)
  .catch(error => console.log(error));

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
    return response.json();
  });
}



function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markup;
}
