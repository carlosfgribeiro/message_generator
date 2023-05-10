//stored data
const player = ["Ronaldo", "Messi", "Kaka", "Kane", "Haaland", "Mbappe", "Ramos", "Neymar", "Benzema", "Suarez"];
const action = ["played for", "scored against", "lost against", "won against", "assisted against", "got sent off against", "didn't score against", "didn't play against"];
const club = ["Manchester United", "Barcelona", "AC Milan", "Tottenham", "Manchester City", "PSG", "Real Madrid", "Porto", "Arsenal", "Liverpool"];


//generator a message
const messageGenerator= (arr1, arr2, arr3) => {
    const randomPlayer = arr1[Math.floor(Math.random() * arr1.length) | 0];
    const randomAction = arr2[Math.floor(Math.random() * arr2.length) | 0];
    const randomClub = arr3[Math.floor(Math.random() * arr3.length) | 0];
    console.log(randomPlayer+" "+randomAction+" "+randomClub+".");
}


//calling the function
messageGenerator(player,action,club);