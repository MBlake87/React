
//function to get pokemon data, fetch from api, turn the result into json then set the response to .data

export async function getPokemon(url) {
    return new Promise((res, rej) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                res(data)
            })
    })

}

export async function getEachPokemon(url) {
    return new Promise((res, rej) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                res(data)
            })
    })
}