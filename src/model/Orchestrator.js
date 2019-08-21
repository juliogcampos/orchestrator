class Orchestrator {
    constructor(services = []) {
        this.services = services;
        this.run();
    }

    run() {
        console.log("Orchestrate services", this.services);
    }
}

module.exports = Orchestrator;