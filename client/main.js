const complimentBtn = document.querySelector("#complimentButton");
const fortuneBtn = document.querySelector("#fortuneButton");
const pokemonBtn = document.querySelector("#pokemonButton");
const baby = document.querySelector("#babyName");
const lucky = document.querySelector("#luckyButton");

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res=>{
            const data = res.data;
            alert(data);
    });
};
const getPokemon = () => {
    axios.get("http://localhost:4000/api/pokemon/")
        .then(res=>{
            const data = res.data;
            alert(data);
    });
};
const getBaby = () => {
    axios.get("http://localhost:4000/api/baby/")
        .then(res=>{
            const data = res.data;
            alert(data);
    });
};

const getLucky = () => {
    axios.get("http://localhost:4000/api/lucky/")
        .then(res=>{
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
pokemonBtn.addEventListener('click', getPokemon);
baby.addEventListener('click', getBaby);
lucky.addEventListener('click', getLucky);
