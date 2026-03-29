# 🌊 Atlantis - Sistema de Gestão de Parques e Hotéis

O **Atlantis** é uma solução robusta desenvolvida pela **Ocean Solutions** para atender à crescente demanda do mercado de parques aquáticos, clubes e hotéis. Este sistema visa oferecer uma gestão eficiente e tecnológica, superando as limitações e os altos custos das ferramentas atuais de mercado.

---

## 📋 Sobre o Projeto

Este projeto encontra-se em sua fase de **MVP (Minimum Viable Product)**.  
O foco inicial é o desenvolvimento de um módulo generalista para o cadastro de clientes e seus respectivos dependentes.

Um dos diferenciais técnicos do Atlantis é a **garantia de integridade de dados** entre responsáveis e convidados.  
Para assegurar que os dados de endereço e telefone dos dependentes sejam idênticos aos de seus titulares, aplicamos o **Padrão de Projeto Prototype**.

---

## 🚀 Funcionalidades (MVP)

- 👤 **Cadastro de Clientes**: Registro completo de usuários titulares  
- 👥 **Gestão de Dependentes**: Cadastro de convidados vinculados a um responsável  
- 🔁 **Replicação de Dados**: Uso de prototipagem para clonagem de endereços e contatos entre titular e dependente  

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** TypeScript  
- **Ambiente de Desenvolvimento:** Node.js  
- **Paradigma:** Orientação a Objetos com foco em Design Patterns  

---

## 📐 Estrutura de Classes

O sistema foi modelado seguindo um diagrama de classes com as seguintes entidades:

- **Cliente**
  - Nome
  - Documentos
  - Endereços
  - Lista de dependentes  

- **Prototipo (Interface)**
  - Define o contrato para o método `clonar()`  

- **Endereço & Telefone**
  - Implementam a interface de prototipagem  
  - Permitem clonagem eficiente de dados  

---

## 🔧 Como Executar

1. Certifique-se de ter o **Node.js** instalado  

2. Clone o repositório:
```bash
git clone <url-do-repositorio>
````

3. Acesse a pasta do projeto:

```bash
cd AV1-Tec-II
```

4. Instale as dependências:

```bash
npm install
```

5. Compile o codigo (lembre de ter o typescript instalado):
```bash
tsc
```
ou
```bash
npx tsc
```

5. Execute o projeto:

```bash
node ./js/teste/index.js
```

---

## 🤝 Contribuição

Este projeto faz parte da atividade prática **ATVI**, sob a orientação do
**Professor Dr. Eng. Gerson Penha**.

Atualmente, o foco da equipe de engenharia é finalizar a implementação do padrão **Prototype** na classe **Telefone**.

---

## 🏝️ Desenvolvido por

**Ocean Solutions**
