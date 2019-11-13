"use strict"

class Service {
    constructor(id, name, type, data) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.data = data;
    }

    get capitalName() {
        return this.name.toUpperCase();
    }

    set changeName(newName) {
        this.name = newName;
    }

}

module.exports = Service;