import { Component } from '@angular/core';

import { Tarefa } from '../_model/tarefa';
import { Estoria } from '../_model/estoria';
import { EstoriaService } from '../_service/estoria.service';

@Component({
    selector: 'estoria_board',
    templateUrl: 'app/estoria/estoria.component.html',
    styleUrls: ['app/estoria/estoria.component.css']
})
export class EstoriaComponent {
    estoriaList: Estoria[];
    tarefaAtual: Tarefa;

    constructor(
        private estoriaService: EstoriaService
    ) { }

    ngOnInit() {
        this.estoriaList = this.estoriaService.getAll();
        this.tarefaAtual = new Tarefa();
    }

    finalizarHistoria(estoria: Estoria): void {
        this.estoriaList.splice(this.estoriaList.indexOf(estoria), 1)
        console.log("passou aqui " + this.estoriaList.length);

    }

    visualizarTarefas(estoria: Estoria) {
        estoria.isVisualizarTarefas = !estoria.isVisualizarTarefas;
        console.log("passou aqui " + estoria.isVisualizarTarefas);
    }

    adicionarTarefas(estoria: Estoria){
        estoria.tarefas.push(this.tarefaAtual);
        this.tarefaAtual = new Tarefa();
    }

}