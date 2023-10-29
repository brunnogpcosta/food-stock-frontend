# food-stock-frontend

![foodstock](https://github.com/brunnogpcosta/food-stock-frontend/assets/49787374/06dfe283-122d-4430-b798-8f49a69837bd)


This project is part of a technical evaluation for the mid/senior fullstack position.

## Requirements

### Minimundo e Requisitos
O modelo a seguir representa um gerenciador de estoques de alimentos, cada alimento tem
sua própria unidade de medida (kg, l, g, ml), cada estoque pode ter entradas de alimentos e
essas entradas podem ter saídas.

### Requisitos do sistema:
- O sistema deverá listar todos os estoques cadastrados com opções de ordenação e
filtro por nome;
- O sistema deverá listar a quantidade atualizada de todos os alimentos de um
estoque com opções de ordenação e filtro por nome do alimento e quantidade;
- O sistema deverá listar todas as movimentações (entradas e saídas) de um estoque
com opções de ordenação e filtro por nome do alimento e tipo de movimentação;
- O sistema deverá incluir uma nova entrada de alimento a um estoque;
- O sistema deverá incluir uma nova saída de alimento de um estoque;
- O sistema deverá realizar a inclusão automática de uma saída dos alimentos que
estiverem no último dia de validade

### Tecnologias e arquitetura:
- Front-end Angular (versão 12), Apollo 1.8.0;
- Back-end API Node (versão 14), Nestjs (versão 6), Graphql, TypeORM;
- Postgres 11;
- Levantar as aplicações utilizando Docker

## Observações gerais:

- Todos os dados necessários para o funcionamento do sistema podem ser
carregados diretamente no Banco de Dados, exemplo: Alimentos, Estoques,
Unidades de Medida.
- Você está livre para implementações fora dos requisitos que possam contribuir na
usabilidade, exemplo, incluir validações para evitar estoques negativos e etc;
- As versões das tecnologias são sugestões com base nas que usamos em nossos
sistemas atualmente, dê preferência por usá-las, mas não são requisitos.
- Cumpra o máximo de requisitos que conseguir, mas procure sempre manter a
qualidade. É preferível que entregue um requisito bem feito do que todos em um
nível ruim.

### `yarn`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.


