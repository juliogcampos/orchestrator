class Service {
    constructor(_id, _name, _type) {
        this.id = _id;
        this.name = _name;
        this.type = _type;
    }

    get capitalName() {
        return this.name.toUpperCase();
    }

    set changeName(newName) {
        this.name = newName;
    }

}

module.exports = Service;