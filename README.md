## Description

Aplicação para encurtar links

### Requisitos funcionais

- Gerar um link curto atrelado a um contexto
- Contexto são criados por MANAGERS do sistemas
- Haverá opção para escolha do tempo de expiração do link
- Usuário deve ter uma conta para gerenciar links encurtados
  - Login
  - Registro
- O sistema deve ser cadastrado em um domínio (www.dominio.com) comum ao JFPB (Justiça Federal da Paraíba)

### Requisitos não funcionais

- Página de interface do usuário
- Usabilidade
- Sistema acessado por meio de uma API
- API REST
- Clean Arch em ambos os projetos de API e FrontEnd
- Criar API usando [Nest](https://github.com/nestjs/nest)
- Front End usando Svelte Kit

### Papeis no sistema

<table>
  <style>
    td { text-align: center; }
  </style>
  <thead>
    <tr>
      <th>Escopo <th colspan="4">Usuários <th colspan="4">Contextos <th colspan="4">Links
    </tr>
    <tr>
      <th>Ações <td>Criar <td>Editar <td>Ler <td>Excluir <td>Criar <td>Editar <td>Ler <td>Excluir <td>Criar <td>Editar <td>Ler <td>Excluir
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>ADMIN <td colspan="12"> ✅
    </tr>
    <tr>
      <th>MANAGER <td>❌ <td>❌ <td>✅ <td>❌ <td>✅ <td>✅ <td>✅ <td>✅ <td>✅ <td>✅ <td>✅ <td>✅
    </tr>
    <tr>
      <th>USER <td>❌ <td>❌ <td>❌ <td>❌ <td>❌ <td>❌ <td>✅ <td>❌ <td>✅ <td>🔶 <td>🔶
      <td>🔶</td>
    </tr>
  </tbody>
</table>

`🔶: limitado a seus próprios itens`

## Installation

```bash
yarn install
```

## Running the app

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Test

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
