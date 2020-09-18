require('dotenv').config();
const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('text', (ctx) => {
	var a = ctx.message.text
	return ctx.reply(a)
})
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()