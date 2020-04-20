# Fastfeet App Deliveryman

### Pré-requisitos
para rodar esse projeto local você precisa ter instalado

```
- Node (v10 or later)
- Yarn
- xcode 11
```

Cloene o repositorio e dentro da pasta ```app``` do repositorio execute o comando:
```
yarn
```

na pasta ios execute o comando:
```
pod install
```

Para iniciar o projeto no modo dev:
```
react-native run-ios
```
obs: o aplicativo so foi testado no simulador

para correto funcionamento do app, o servirdor tem que esta rodando na porta localhost:3003

### Construido com:

- react-navigation
- redux
- redux-saga
- redux-persist
- data-fns
- react-redux
- react-native
- react-native-image-picker
- axios
- styled-components


### Dashboard

- Lista as encomendas pendentes e retiradas 
- lista encomendas entregues
- pode confirma a entrega com foto da assinatura
- ver problemas referentes a encomenda
- relatar um problema referente a encomenda

![signin](/img/signin2.png) ![dashboard2](/img/dashboard2.png) ![perfil](/img/perfil.png)
![details](/img/details.png) ![send](/img/send.png) ![problems](/img/problemsApp.png)
![error](/img/error.png)