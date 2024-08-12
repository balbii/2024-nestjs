import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

@Injectable()
export class TarefasService {

  tarefas = [
    {
      id: 1,
      titulo: "criar projeto nest",
      concluido: false
    }
  ]

  create(createTarefaDto: CreateTarefaDto) {
    this.tarefas.push({ id: this.tarefas.length + 1, ... createTarefaDto});
    return this.tarefas;
  }

  findAll() {
    return this.tarefas;
  }

  findOne(id: number) {
    return `This action returns a #${id} tarefa`;
  }

  update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return `This action updates a #${id} tarefa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
