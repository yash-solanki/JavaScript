this.table = 'Window table';

// const cleanTable = function(soap) {
//     const innerFun = (_soap) => {
//     console.log(`cleaning ${this.table} using ${_soap}`);
//     }
//     innerFun(soap);
// }

this.garage = {
    table: 'garage table'
};

// let createRoom = function(name) {
//     this.table = `${name}s table`
// }

// createRoom.prototype.cleanTable = function(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// };

// const yashsRoom = new createRoom('yash');

// const abhaysRoom = new createRoom('abhay');

// yashsRoom.cleanTable('some soap');

// cleanTable.call(this, 'some soap');
// cleanTable.call(this.garage, 'some soap');
// cleanTable.call(yashsRoom, 'some soap');
// cleanTable.call(abhaysRoom, 'some soap');

class createRoom {
    constructor(name) {
        this.table = `${name}s table`
    }
    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}
const yashsRoom = new createRoom('yash');

const abhaysRoom = new createRoom('abhay');

yashsRoom.cleanTable('some soap');
