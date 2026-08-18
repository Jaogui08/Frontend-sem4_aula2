import prisma from "@/src/lib/prisma";
import { Carro } from "@/src/models/Carro";

export class CarroRepository{
    async salvar(obj) {
        return await prisma.carro.create({
            data: {nome: obj.nome, tipo: obj.tipo}
        });
    }

    async listarTodos() {
        const dados = await prisma.carro.findMany();
        return dados.map(d => new Carro(d.nome, d.tipo, d.id));
    }

    async buscarPorId(id) {
        const dados = await prisma.carro.findUnique({
            where: {id: Number(id)}
        });
        if (!dados) return null;
        return new Carro(dados.nome, dados.tipo, dados.id);
    }

    async atualizar(id, obj) {
        return await prisma.carro.update({
            where: {id: Number(id)},
            data: {nome: obj.nome, tipo: obj.tipo}
        });
    }

    async excluir(id) {
        return await prisma.carro.delete({
            where: {id: Number(id)}
        });
    }
}