import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

const titular = new Cliente();
titular.nome = "Pedro de Alcântara João Carlos Leopoldo Salvador";
titular.nomeSocial = "Dom Pedro II";
titular.dataCadastro = new Date(1840, 6, 23);
titular.dataNascimento = new Date(1825, 11, 2);
titular.ovodepascoa = "Ovo de Páscoa Imperial";

const enderecoTitular = new Endereco();
enderecoTitular.rua = "R. do Catete";
enderecoTitular.bairro = "Copacabana";
enderecoTitular.cidade = "Rio de Janeiro";
enderecoTitular.estado = "Rio de Janeiro";
enderecoTitular.pais = "Brasil";
enderecoTitular.codigoPostal = "22220-000";
titular.endereco = enderecoTitular;

const telTitular = new Telefone();
telTitular.ddd = "21";
telTitular.numero = "999999999";
titular.telefones.push(telTitular);

const dependente = new Cliente();
dependente.nome = "Isabel Cristina Leopoldina Augusta Micaela";
dependente.nomeSocial = "Princesa Isabel";
dependente.dataCadastro = new Date(1921, 10, 14);
dependente.dataNascimento = new Date(1846, 6, 29);

dependente.titular = titular;
dependente.endereco = (titular.endereco.clonar() as Endereco);
dependente.telefones = titular.telefones.map(t => t.clonar() as Telefone);

titular.dependentes.push(dependente);

console.log("--- Objeto Titular Completo ---");
console.log(titular);

console.log("\n--- Objeto Dependente Completo ---");
console.log(dependente);

console.log("\n--- Verificacao de Integridade (Sistema Atlantis) ---");

console.log(`Endereco clonado no Dependente: ${dependente.endereco.rua}, ${dependente.endereco.bairro}`);
if (dependente.telefones.length > 0) {
    console.log(`Telefone clonado no Dependente: (${dependente.telefones[0].ddd}) ${dependente.telefones[0].numero}`);
}

titular.endereco.rua = "RUA ALTERADA NO TITULAR (PALACIO)"; 

console.log("\n--- Verificacao de Independencia (Prototype) ---");
console.log(`Rua do Titular apos alteracao: ${titular.endereco.rua}`);
console.log(`Rua do Dependente (deve permanecer 'R. do Catete'): ${dependente.endereco.rua}`);

if (titular.endereco.rua !== dependente.endereco.rua) {
    console.log("\n SUCESSO: O padrao Prototipo garante que o dependente mantenha seus dados isolados!");
} else {
    console.log("\n ERRO: O dependente esta compartilhando o mesmo espaco de memoria do titular!");
}