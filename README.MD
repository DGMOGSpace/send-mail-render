# 📧 Send Mail Service API

Uma API elegante e robusta para envio de e-mails automatizados para diferentes aplicações da DGMOG.

## 🚀 Recursos

- Envio de e-mails personalizados
- Suporte para múltiplas aplicações
- Templates HTML responsivos
- Tratamento de erros robusto
- API RESTful

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Fastify
- Nodemailer
- CORS

## 📋 Pré-requisitos

- Node.js >= 14.x
- npm ou yarn

## 🔧 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/send-mail-render.git

# Entre no diretório
cd send-mail-render

# Instale as dependências
npm install
```

## 🎮 Como Usar

### Endpoint

`POST /sendmail`

### Corpo da Requisição

```json
{
  "email": "usuario@exemplo.com",
  "password": "nova-senha",
  "app": "filas-cirurgias"
}
```

### Aplicações Suportadas

- `filas-cirurgias`: Sistema de Monitoramento de Filas Cirurgicas
- `monitoramento-geres`: Sistema de Monitoramento GERES

### Exemplo de Uso

```typescript
const response = await fetch('http://seu-dominio:9022/sendmail', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'usuario@exemplo.com',
    password: '123456',
    app: 'filas-cirurgias'
  })
});
```

## 🚦 Códigos de Status

- `200`: E-mail enviado com sucesso
- `400`: Aplicação não encontrada
- `500`: Erro interno do servidor

## ⚠️ Tratamento de Erros

O serviço retorna mensagens de erro descritivas:

```json
{
  "error": "Aplicação 'app-inexistente' não encontrada"
}
```

## 🔐 Variáveis de Ambiente

Configure as seguintes variáveis:

- `SMTP_HOST`: Servidor SMTP
- `SMTP_PORT`: Porta do servidor
- `SMTP_USER`: Usuário SMTP
- `SMTP_PASS`: Senha SMTP

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 🤝 Suporte

Em caso de dúvidas ou problemas, abra uma issue ou contate a equipe DGMOG.

---
Desenvolvido com ❤️ pela equipe DGMOG
```

Este README.md inclui:
1. Descrição clara do projeto
2. Instruções de instalação e uso
3. Documentação da API
4. Exemplos práticos
5. Informações sobre tratamento de erros
6. Guia de contribuição
7. Formatação atraente com emojis
8. Seções bem organizadas e estruturadas

Fez alterações.