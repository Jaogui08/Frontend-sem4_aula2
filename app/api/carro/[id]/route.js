import { NextResponse } from 'next/server';
import { CarroRepository } from '@/src/repository/CarroRepository';
import { CarroService } from '@/src/services/CarroService';

const service = new CarroService(new CarroRepository());

export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const carro = await service.buscarPorId(id);
        return NextResponse.json(carro, { status: 200 });
    } catch (e) {
        return NextResponse.json({ erro: e.message }, { status: 404 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const res = await service.atualizar(id, body.nome, body.tipo);
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
