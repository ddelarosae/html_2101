const pokedex=document.getElementById('pokedex');

const fetchPokemon=()=>{
    const promise=[];
    for(let i=1;i<=151;i++){//revisar
        const url=`https://pokeapi.co/api/v2/pokemon/${i}`;//revisar
        promise.push(fetch(url).then((res)=>res.json()));
    }
    Promise.all(promise).then((results)=>{
        const pokemon=results.map((result)=>({
            name: result.name,
            image: result.sprites['front_default'],
            type:result.types.map((type)=>type.type.name).join(','),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon=(pokemon)=>{
    console.log(pokemon);
    const pokemonHTML=pokemon.map(
        (items)=>`
        <li class="card">
        <img class="card-image" src="${items.image}"/>
        <h2 class="card-title">${items.id}.${items.name}</h2>
        <p class="card-subtitle">Type: ${items.type}</p>
        </li>`
    )
    .join('');
    pokedex.innerHTML=pokemonHTML;
};
fetchPokemon();