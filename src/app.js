"use strict"

// Importações
const Orchestrator = require('./model/Orchestrator');
const Service = require('./model/Service');

// Variáveis
let orchestrator, service;
let arr = [];

// Criar array de serviços
for (let i = 1; i <= 10; i++) {
    service = new Service(i, `service_${i}`, "", {});
    arr.push(service);
}

// Orquestrar serviços
orchestrator = new Orchestrator(arr);
orchestrator.allServices;
orchestrator.selectedServices([1, 2]);

// Usando propriedade get da classe Service
let service_1 = arr[0];
console.log(service_1.capitalName);

// Usando propriedade set da classe Service
console.log(service_1.name)
service_1.changeName = "Serviço 0";
console.log(service_1.name);