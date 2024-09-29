## NestJS example

A simple NestJS server integrated with RabbitMQ, designed to save entities to MongoDB.

This repo sends a `user_created` event to RabbitMQ after saving a user in MongoDB.

This project works seamlessly with another service that receives the `user_created` events and sends notifications. Check out that repo here: [Telegram Notify](https://github.com/smarenkov/telegram_notify)
