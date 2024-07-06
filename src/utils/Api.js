import { currentDate,
  previousWeek,
  lang,
  apiKey,
  checkServerResponse, } from "./Constants";

export function getNewsArticles(userInput) {
  return fetch(
    `https://newsapi.org/v2/everything?q=${userInput}&from=${previousWeek}&to=${currentDate}&language=${lang[0]}&sortBy=publishedAt&apiKey=${apiKey}`
  ).then(checkServerResponse);
}