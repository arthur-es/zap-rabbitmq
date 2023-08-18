# ZAP - RabbitMQ

## Iniciando

1. Clone o repo

```sh
git clone https://github.com/arthur-es/zap-rabbitmq
```

2. Abra a pasta `frontend` e instale as dependencias.

```sh
npm install
```

3. Abra a pasta `backend` e instale as dependencias.

```sh
npm install
```

1. Inicie com o Docker o RabbitMQ

```sh
docker pull rabbitmq
docker run -itd --hostname rabbitmq --name rabbitmq -p 5672:5672 rabbitmq:latest
```

5. Dentro da pasta backend comece a rodar o servidor:

```sh
npm run server
```

6. Dentro da pasta backend comece a rodar o consumidor:

```sh
npm run consumer
```

7. Dentro da pasta frontend comece a rodar o front:

```sh
npm run dev
```

1. Abra o link http://localhost:8080
