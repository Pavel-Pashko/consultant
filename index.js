const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '666335587:AAFoSh5nfqoLJcdDkoEUDSf3y9s5P4U7bVM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('messege', msg => {
    bot.sendMessage(msg.chat.Id, 'Hello. bot says: "Hi, $(msg.from.fist_name)"')
})
