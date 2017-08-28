//const API_ID = process.env.REACT_APP_API_ID
const API_ID = '9bb23f13'
//const APP_KEY = process.env.REACT_APP_APP_KEY
const APP_KEY = '2bfd660a456ba772cf8ff443ce1557bb'

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}