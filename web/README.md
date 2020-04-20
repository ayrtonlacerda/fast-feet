# Fastfeet Dashboard Admin Web

### Pré-requisitos
para rodar esse projeto local você precisa ter instalado

```
- Node (v10 or later)
- Yarn
```

Clone o repositorio e dentro da pasta ```web```do repositorio faça o comando:
```
yarn
```

Para iniciar o projeto no modo dev:
```
yarn start
```
url: http://locahost:3000

### Dashboard

No dashbord temos as funçoes 

- encomendas 
  - lista
  - adicionar uma encomenda
  - exclui uma encomenda
  - edita uma encomenda
  - ver uma encomenda(status)
  
  ![orders](/img/orders.png)
- entregadores
  - lista
  - adicionar um entregador
  - excluir um entrgador
  - edita um entregador

![deliverymans](/img/deliverymans.png)
- destinatarios
  - lista
  - edita destinatario
  - adiciona destinatario

![recipients](/img/recipients.png)
- problemas
  - lista
  - ver problema
  - cancela encomenda

![problems](/img/problems.png)

#### Busca

A busca é feita a partir de quatro digitos, e baseada no nome.

![search](/img/search.gif)

#### Desafios adicionais 
- Criar um hook de validação proprio pra entender a arquitetura por tras da validação de formularios
  - useValidation
  
![validation](/img/hook.gif)

Campos 
  - name (tem que ter duas palavras)
  - text (tem que ser um string com tamanho minimo)
  - password (tem que ter no minimo 6 digitos)
  - number (tem que ser um numero intenger)
  - cep (um cep valido com 8 digitos)
  - email (tem que quer ser um email)

pode ser definido como obrigatorio ou facutativo