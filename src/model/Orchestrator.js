class Orchestrator {
    constructor(_services = []) {
        this.services = _services;
        this.oneService();
        this.allServices();
    }

    oneService(id) {
        let service = this.services[0].id;
        console.log("Orchestrating service", service);
        console.log("Run service", service, "...");
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