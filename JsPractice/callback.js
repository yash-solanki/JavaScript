// let x =function() {
//   setTimeout(() => {
//     console.log('Inside settimeout1');
//   },0)
//     console.log('Inside Fun');
//     setTimeout(() => {
//       console.log('Inside settimeout2');
//     },0)
// }
// let y = function(callback) {
//     callback();
//     console.log('do something');   
// }
// y(x);

// Just experimant with async await
// let x =async function() {
//    setTimeout(() => {
//     console.log('Inside settimeout1');
//   },0)
//     console.log('Inside Fun');
//     await  setTimeout(() => {
//       console.log('Inside settimeout2');
//     },0)
// }
// let y =  function(callback) {
//    callback();
//   console.log('do something');
// }
// y(x);

//Without callback
// function a() {
//     const result = [];
//     for ( let i=0; i<50; i++) {
//        result.push(i);
//     }
//     return result;
// }
// function b() {
//     console.log(a());
// }
// b();

//with callback
// function a(callback) {
//     const result = [];
//     for ( let i=0; i<5000; i++) {
//        result.push(i);
//     }
//     callback(result);
// }
// function b() {
//     a(function(result) {
//         console.log(result);
//     });
// }
// b();

function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  function alertFinished(){
    console.log('Finished my homework');
  }
  doHomework('math', alertFinished);