import prisma from "@/src/lib/prisma";
import { Concessionaria } from "@/src/models/Concessionaria";

export class ConcessionariaRepository{
    async salvar(obj) {
        return await prisma.concessionaria.create({
            data: {nome: obj.nome, cnpj: obj.cnpj, cidade: obj.cidade}
        });
    }

    async listarTodos() {
        const dados = await prisma.concessionaria.findMany();
        return dados.map(d => new Concessionaria(d.nome, d.cnpj, d.cidade, d.id));
    }

    async buscarPorId(id) {
        const dados = await prisma.concessionaria.findUnique({
            where: {id: Number(id)}
        });
        if (!dados) return null;
        return new Concessionaria(dados.nome, dados.cnpj, dados.cidade, dados.id);
    }

    async atualizar(id, obj) {
        return await prisma.concessionaria.update({
            where: {id: Number(id)},
            data: {nome: obj.nome, cnpj: obj.cnpj, cidade: obj.cidade}
        });
    }

    async excluir(id) {
        return await prisma.concessionaria.delete({
            where: {id: Number(id)}
        });
    }
}