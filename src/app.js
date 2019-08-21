// Importações
const Orchestrator = require('./model/Orchestrator');
const Service = require('./model/Service');

// Variáveis
let orchestrator, service;
let arr = [];

// Criar array de serviços
for (let i = 1; i <= 10; i++) {
    service = new Service(i, `service_${i}`);
    arr.push(service);
}

// Orquestrar serviços
orchestrator = new Orchestrator(arr);
orchestrator.run;