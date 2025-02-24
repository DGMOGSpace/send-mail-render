import fastify from "fastify";
import cors from "@fastify/cors";
import nodemailer from "nodemailer";
import config from "./config";
import { AppNotFoundError } from './errors/AppNotFoundError';
import dotenv from 'dotenv';

dotenv.config();

const app = fastify();

app.register(cors, {
  origin: "*",
});

interface SendEmailRequest {
  email: string;
  password: string;
  app: string
}

async function sendEmail(email: string, password: string, app: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = config(app, email, password);
  const info = await transporter.sendMail(mailOptions);
  console.log("E-mail enviado: %s", info.messageId);
}

app.post("/sendmail", async (request, reply) => {
  try {
    const { email, password, app } = request.body as SendEmailRequest;
    await sendEmail(email, password, app);
    return reply.status(200).send({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar o e-mail: ", error);
    
    if (error instanceof AppNotFoundError) {
      return reply.status(400).send({ error: error.message });
    }
    
    return reply.status(500).send({ error: "Erro ao enviar email" });
  }
});

const start = async () => {
  try {
    await app.listen({ port: 9022, host: '0.0.0.0' });
    console.log('Servidor rodando na porta 9022');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
