module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air", "A fresh start will put you on your way." ];
        let randomOne = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomOne];
        res.status(200).send(randomFortune);
    
    },

    getPokemon: (req, res) => {
        const pokemons = ["pikachu", "magicorp", "Charmander", "Beedrill", "Butterfree"];
        let randomPoke = Math.floor(Math.random()* pokemons.length);
        let randomPokemon = pokemons[randomPoke];
        res.status(200).send(randomPokemon);
    },

    getBaby: (req, res) => {
        const baby = ["Nora", "Ava", "Violetta", "Caleb", "Asher"];
        let randomName = Math.floor(Math.random()* baby.length);
        let randomBaby = baby[randomName];
        res.status(200).send(randomBaby);
    },

    getLucky: (req, res) => {
        const num = ["12", "1", "28", "5", "97"];
        let random = Math.floor(Math.random()* num.length);
        let randomLuck = num[random];
        res.status(200).send(randomLuck);
}
}