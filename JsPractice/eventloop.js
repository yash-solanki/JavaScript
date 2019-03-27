console.log('hiii');

setTimeout( function cd() {
    for ( let i=0; i<60; i++) {
        console.log(i);
    }
},0);

for ( let i=10; i<90000; i+=0.5){
    if( i%10 !== 0){
    console.log(i);
    } else {
        console.log('not');
    }
}