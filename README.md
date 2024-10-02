## NestJS example

A simple NestJS server integrated with RabbitMQ, designed to save entities to MongoDB.

This repo sends a `user_created` event to RabbitMQ after saving a user in MongoDB.

This project works seamlessly with another service that receives the `user_created` events and sends notifications. Check out that repo here: [Telegram Notify](https://github.com/smarenkov/telegram_notify)

### How to Launch

**Create a `.env` file in the root directory**

In the root of your project directory, create a .env file with the following content:

```env
MONGODB_URL=your mongo uri
RABBITMQ_URL=your rabbit uri
RABBITMQ_USERS_QUEUE=users_queue
```
