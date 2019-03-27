// const arr = [1,2,3,4];
// arr.forEach(function(element){
//       console.log(element);      
//       });

// const arr = ["Mr. Dog", "Miss. Elephant", "Mrs. Hen"]
// arr.forEach(function(item){
//              console.log(arr.concat("Wrestle"))
//             });

// const me_obj= {
//     name:"Doomed1993",
//     activity:"Sleeping"
//   }
//   var arr=[1,2,3,4]
//   for(property in me_obj){
//     console.log(property);
//   }
//   for(property in arr){
//     console.log(property);
//   }

let animals = [ 'dog', 'cat', 'tiger', 'snake' ];

animals['species']= 'mamals';

console.log(animals);

for ( let i=0; i< animals.length; i++) {
    if( animals[i] == 'cat' ) {
        break;
    }
    console.log(animals[i]);
}
console.log('');
console.log('');

animals.forEach( animal => {
    console.log(animal);
});
console.log('');
console.log('');

for( animalId in animals) {
    console.log(animalId);
    console.log(animals[animalId]);
    console.log('');
}
console.log('');
console.log('');

for ( animal of animals) {
    console.log(animal);
}