"use strict"
class Orchestrator {

    constructor(services = []) {
        this.services = services;
        this.runAllServices();
        this.runSelectedServices();
    }

    get getServices() {
        return this.services;
    }

    runAllServices() {
        let services = this.services;
        console.log("Orchestrating all services");
        console.log(this.services);
        services.forEach(service => {
            console.log("Run service", service.id, "...");
        });
    }

    runSelectedServices(arr = []) {
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
}

module.exports = Orchestrator;