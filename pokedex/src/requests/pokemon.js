//function to get pokemon data, fetch from api, turn the result into json then set the response to .data

export async function getPokemon(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res(data);
      });
  });
}

export async function getEachPokemon(url) {
  return new Promise((res, rej) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res(data);
      });
  });
}

export async function getSearchPokemon(url, query) {
  return new Promise((res, rej) => {
    fetch(`${url}/${query}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        res(data);
      })
      .catch((err) => alert("Pokemon not found"));
  });
}
