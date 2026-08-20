import { Carro } from "./Carro";

describe("Modelo Carro", () => {
    it("Deve criar um carro corretamente com nome e tipo", () => {
        const nomeCarro = "Passat";
        const tipoCarro = "Sedan";

        const carro = new Carro(nomeCarro, tipoCarro);

        expect(carro.nome).toBe("Passat");
        expect(carro.tipo).toBe("Sedan");
        expect(carro.id).toBeNull();
    })
})