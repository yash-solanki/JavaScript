
    // example of bind

    // var pokemon = {
    //     firstname: 'Pika',
    //     lastname: 'Chu ',
    //     getPokeName: function() {
    //         var fullname = this.firstname + ' ' + this.lastname;
    //         return fullname;
    //     }
    // };
    
    // var pokemonName = function() {
    //     console.log(this.getPokeName() + 'I choose you!');
    // };
    
    // var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
    
    // logPokemon(); // 'Pika Chu I choose you!'


    // Main diff in bind and call is that call does not make copy of function, call Accepts additional parameters as well

    //example of apply and call

    var pokemon = {
        firstname: 'Pika',
        lastname: 'Chu ',
        getPokeName: function() {
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
        }
    };
    
    var pokemonName = function(snack, hobby) {
        console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
    };
    
    // call and apply are almost same apply use arguments in array

    pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
    pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

