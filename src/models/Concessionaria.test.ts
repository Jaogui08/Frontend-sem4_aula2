import { Concessionaria } from "./Concessionaria";

describe("Modelo Concessionária", () => {
    it("Deve criar uma concessionária corretamente com nome, cnpj e cidade", () => {
        const nomeConcessionaria = "Concessionária Audi";
        const cnpjConcessionaria = "12.345.678/0001-90";
        const cidadeConcessionaria = "Sorocaba";

        const concessionaria = new Concessionaria(nomeConcessionaria, cnpjConcessionaria, cidadeConcessionaria);

        expect(concessionaria.nome).toBe("Concessionária Audi");
        expect(concessionaria.cnpj).toBe("12.345.678/0001-90");
        expect(concessionaria.cidade).toBe("Sorocaba");
        expect(concessionaria.id).toBeNull();
    })
})