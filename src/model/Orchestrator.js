class Orchestrator {
    constructor(_services = []) {
        this.services = _services;
        this.run();
    }

    run() {
        let services = this.services;
        console.log(this.services);
        console.log("Orchestrating services")
        services.forEach(service => {
            console.log("Run service", service.id, "...");
        });
    }
}

module.exports = Orchestrator;