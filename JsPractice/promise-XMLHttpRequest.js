let mypromise = new Promise ( (resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('get', 'https://randomuser.me/api/');
    req.onload = resolve;
    req.onerror = reject;
    req.send();
});

mypromise.then( function(data) {
    data = data.target.response;
    console.log(data);
}).catch( () => {
    console.log('There is an error');
});