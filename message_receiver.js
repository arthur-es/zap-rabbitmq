const amqp = require("amqplib");

const exchange = "chat_exchange";

async function setup(username) {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertExchange(exchange, "fanout", { durable: false });

  const queue = await channel.assertQueue("", { exclusive: true });
  channel.bindQueue(queue.queue, exchange, "");

  console.log(`📥 Recebendo mensagens como ${username}`);
  channel.consume(
    queue.queue,
    (msg) => {
      const content = JSON.parse(msg.content.toString());
      if (content.user !== username) {
        console.log(`👤 ${content.user}: ${content.message}`);
      }
    },
    { noAck: true }
  );
}

if (process.argv.length < 3) {
  console.log("Rode o seguinte comando: node message_receiver.js <username>");
  process.exit(1);
}

const username = process.argv[2];
setup(username).catch(console.error);
