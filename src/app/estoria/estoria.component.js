"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tarefa_1 = require('../_model/tarefa');
var estoria_service_1 = require('../_service/estoria.service');
var EstoriaComponent = (function () {
    function EstoriaComponent(estoriaService) {
        this.estoriaService = estoriaService;
    }
    EstoriaComponent.prototype.ngOnInit = function () {
        this.estoriaList = this.estoriaService.getAll();
        this.tarefaAtual = new tarefa_1.Tarefa();
    };
    EstoriaComponent.prototype.finalizarHistoria = function (estoria) {
        this.estoriaList.splice(this.estoriaList.indexOf(estoria), 1);
        console.log("passou aqui " + this.estoriaList.length);
    };
    EstoriaComponent.prototype.visualizarTarefas = function (estoria) {
        estoria.isVisualizarTarefas = !estoria.isVisualizarTarefas;
        console.log("passou aqui " + estoria.isVisualizarTarefas);
    };
    EstoriaComponent.prototype.adicionarTarefas = function (estoria) {
        estoria.tarefas.push(this.tarefaAtual);
        this.tarefaAtual = new tarefa_1.Tarefa();
    };
    EstoriaComponent = __decorate([
        core_1.Component({
            selector: 'estoria_board',
            templateUrl: 'app/estoria/estoria.component.html',
            styleUrls: ['app/estoria/estoria.component.css']
        }), 
        __metadata('design:paramtypes', [estoria_service_1.EstoriaService])
    ], EstoriaComponent);
    return EstoriaComponent;
}());
exports.EstoriaComponent = EstoriaComponent;
//# sourceMappingURL=estoria.component.js.map