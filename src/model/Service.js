"use strict"

class Service {
    constructor(_id, _name, _type, _data) {
        this.id = _id;
        this.name = _name;
        this.type = _type;
        this.data = _data;
    }

    get capitalName() {
        return this.name.toUpperCase();
    }

    set changeName(newName) {
        this.name = newName;
    }

}

module.exports = Service;