const pokedex=document.getElementById('pokedex');

const fetchPokemon=()=>{
    const promise=[];
    for(let i=0;i<=151;i++){
        const url=`https://pokeapi.co/api/v2/pokemon/i`;//revisar
        promise.push(fetch(url).then((res)=>res.json()));
    }
}