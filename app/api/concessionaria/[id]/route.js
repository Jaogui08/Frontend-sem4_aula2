import { NextResponse } from 'next/server';
import { ConcessionariaRepository } from '@/src/repository/ConcessionariaRepository';
import { ConcessionariaService } from '@/src/services/ConcessionariaService';

const service = new ConcessionariaService(new ConcessionariaRepository());

export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const concessionaria = await service.buscarPorId(id);
        return NextResponse.json(concessionaria, { status: 200 });
    } catch (e) {
        return NextResponse.json({ erro: e.message }, { status: 404 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const res = await service.atualizar(id, body.nome, body.cnpj, body.cidade);
        return NextResponse.json(res, { status: 200 });
    } catch (e) {
        return NextResponse.json({ erro: e.message }, { status: 400 });
    }
}

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;       
        const res = await service.excluir(id);
        return NextResponse.json(res, { status: 200 });
    } catch (e) {
        return NextResponse.json({ erro: e.message }, { status: 400 });
    }
}
