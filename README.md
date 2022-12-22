## Description

Aplicação para encurtar links

### Requisitos funcionais

- Receber link longos transformando em links curtos
- Renomear o link de acordo com o contexto do link longo ou especificado pelo usuário
- Haverá opção para escolha do tempo de expiração do link
- Usuário pode ter uma conta para gerenciar links encurtados
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

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
