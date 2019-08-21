class Orchestrator {
    constructor(services = []) {
        this.services = services;
        this.run();
    }

    run() {
        let services = this.services;
        console.log("Orchestrating services")
        services.forEach(service => {
            console.log("Run service", service.id, "...");
        });
    }
}

module.exports = Orchestrator;