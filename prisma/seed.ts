import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
    //apagar todos
    await prisma.tarefa.deleteMany({});

    //inserir um dado
    const tarefa = await prisma.tarefa.create({
        data: 
            { titulo: "um obejeto apenas", concluido: true }
        
    });

    //inserir dados
    const tarefas = await prisma.tarefa.
        createManyAndReturn({
            data: [
                {
                    titulo: "criar um projeto nestjs",
                    concluido: true,
                },
                {
                    titulo: "adicionar endpoints",
                    concluido: true
                },
                {
                    titulo: "adicionar persistencia",
                    concluido: false
                }
            ]
        });

    console.log(tarefas);
};

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })