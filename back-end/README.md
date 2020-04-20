# FastFeet API

### Pré-requisitos
para rodar esse projeto local você precisa ter instalado

```
- Node (v10 or later)
- Yarn
```

Clone o repositorio:

```
git clone https://github.com/paulohlips/gobarber
```

Detro da pasta do repositorio faça o comando:
```
yarn
```

Para iniciar o projeto no modo dev:
```
yarn dev:debug
```
a api esta na porta:

http://locahost:3003

#### Insomnia
Na raiz do backend acompanha um arquivo json
```
insomnia_fastfeet.json
```
import ele no insomnia para ter acesso a todas as rotas e exeplos de chamada

### Packages

- express
- jsonwebtoken
- sequelize
- sequelize-cli
- yup
- multer
- bcryptjs
- cors
- crypto
- date-fns
- postgress

### Tabelas

- deliverymans (tabela de entregadores)
- orders (tabela de encomendas)
- problems (tabelas de problemas)
- recipients (tabela de destinatarios)
- users (tabels de usuarios)

### Routes

##### Autenticação

users

  > POST '/users'

  > PUT '/users

recipients

> POST '/recipients'

> PUT '/recipients/:id'

> GET '/recipients'

deliverymans

> GET '/deliverymans'

> GET '/deliverymans/:id'

> POST '/deliverymans'

> PUT '/deliverymans/:id'

> DELETE '/deliverymans/:id'

orders

> GET '/orders'

> GET '/orders/problems'

> GET '/orders/:id'

> PUT '/orders/:id'

> POST '/orders'

> DELETE '/orders/:id'

##### Não precisa de Atenticação

process

> GET '/process/:id/:deliveres'

> GET '/process/:id'

> PUT '/process'

problems

> GET '/problems/:id/cancel-delivery'

> GET '/problems/:id'

> PUT '/problems'

files

> POST '/files'

> GET '/files/:file'
