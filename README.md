# TemrinalZAP - RabbitMQ (Arthur Castro)

# Demonstração no vídeo demonstracao.webm

## Iniciando

1. Inicie com o Docker o RabbitMQ

```sh
docker pull rabbitmq
docker run -itd --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.12.2-management
```

2. Clone o repo

```sh
git clone https://github.com/arthur-es/zap-rabbitmq
```

3. Rode 1 consumidor chamado arthur

```sh
node message_receiver.js arthur
```

4. Rode 1 produtor chamado arthur

```sh
node message_sender.js arthur
```

5. Rode mais produtores e consumidores
