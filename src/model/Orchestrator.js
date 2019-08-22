"use strict"

class Orchestrator {

    constructor(_services = []) {
        this.services = _services;
        this.allServices();
        this.selectedServices();
    }

    get getServices() {
        return this.services;
    }

    selectedServices(arr = []) {
        let services = this.getServices;
        let selected_services = arr;
        let index_of_services = [];
        let aux;

        selected_services.forEach(item => {
            aux = services.indexOf(services[item]);
            index_of_services.push(aux);
        });

        index_of_services.forEach(item => {
            console.log("Run selected service", services[item].id, "...");
        });
    }

    allServices() {
        let services = this.services;
        console.log("Orchestrating all services");
        console.log(this.services);
        services.forEach(service => {
            console.log("Run service", service.id, "...");
        });
    }
}

module.exports = Orchestrator;