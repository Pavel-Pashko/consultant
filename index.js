const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '666335587:AAFoSh5nfqoLJcdDkoEUDSf3y9s5P4U7bVM'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.massege_handler(commands=['start'])

def start(m):
keyboard = types.RyplyKeyboardMarkup(resize_keyboard=True)
keyboard.add(*[types.KeyboardButton(name)
for name in ['Шерлок Холмс', 'Доктор Ватсон']])
msg = bot.send_massage(m.chat.id, 'Кого выбираешь?',
    reply_markup=keyboard)
bot.register_next_step_handler(msg, name)

bot.polling()
