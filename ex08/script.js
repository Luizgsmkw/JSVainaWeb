//Crie 3 variáveis, cada uma com um array:
// - Comedy
// -Action
// -Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// -title:
// -director:
// -year: 

let comedy = [
    {
        title: '21 Jump Street',
        director: ['Chris Miller', 'Phil Lord'],
        year: '2012',
    }
]


let action = [
    {
        title: 'Fury Road',
        director: 'George Miller',
        year: '2015',
    }
]


let fantasy = [
    {
        title: 'The Lord of the Rings',
        director: 'Peter Jackson',
        year: '2001',
    }
]

let favoriteMovie = "The Lord of the Rings"

if(fantasy[0].title === favoriteMovie){
    console.log(`MY FAVORIT MOVIE IS ${favoriteMovie}`)
} else{
    console.log('NOT EVEN 5 STARS')
}