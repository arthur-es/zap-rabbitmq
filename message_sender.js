const readline = require("readline");
const amqp = require("amqplib");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const exchange = "chat_exchange";
const username = process.argv[2];

async function setupRabbitMQ() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertExchange(exchange, "fanout", { durable: false });

  console.log(`Bem-vindo, ${username}!`);
  console.log('Digite a mensagem ou "exit" para sair.');

  rl.on("line", async (message) => {
    if (message.toLowerCase() === "exit") {
      rl.close();
      connection.close();
    } else {
      const msg = {
        user: username,
        message: message,
      };

      await channel.publish(exchange, "", Buffer.from(JSON.stringify(msg)));
      console.log("✉️ Mensagem enviada: ", message);
    }
  });
}

setupRabbitMQ().catch(console.error);
