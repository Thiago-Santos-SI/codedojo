

# backend - api de authenticação 

## 🧐 O que tem dentro?
### Tecnologias
- AdonisJS
- mysql
- moment



# Como Usar o backend:

```
Clona o repositorio

```

## entre na pasta backend e use o comando:

```
yarn ou npm i

```

## crie um container com a imagem do mysql no docker

```
sudo docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:5.7.31

```
## conecte o container a algum banco e use com alguma ferramenta como o workebench ou datagrip

## depois de conectar o banco de dados com o container, gere as migrations. (primeiro entra na pasta do backend para usar o comando)

```
adonis migration:run

```

## depois de gerada as migrations, já estamos pronto para o desenvolvimento! e caso queira testar as rotas com requisição, deixei o arquivo do insominia, basta baixar e abrir o workspace

-- caso queira ver quais rotas temos basta usar o comando:

```
adonis route:list

```

-- para startar o servidor use o comando:


```
adonis serve --dev

```
### port: https://localhost:3333

# Frontend

## 🧐 O que tem dentro?
### Tecnologias
- ReactJS
- JavaScript
- Redux
- react-redux
- redux-saga
- ducks 

# Como usar o frontend:

## entre na pasta frontend e use o comando:

```
yarn ou npm i

```

## starta o servidor do react

```
yarn start

```
### port: https://localhost:3000






