class Service {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }

    get capitalName() {
        return this.name.toUpperCase();
    }

    set changeName(newName) {
        this.name = newName;
    }

}

module.exports = Service;