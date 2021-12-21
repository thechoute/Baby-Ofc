
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,client,id,sender) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2143, 3]
    conn.browserDescription = [ 'FutureBot','Safari', '3.3.1']
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(id, buffer, MessageType.image, {caption:'_Escanea el Código QR! Para que seas Bot_\n_tienes 20 segundos o se restablecerá!_\n\n_*<INFORMACIÓN>:*_\n\n_El Bot tiene un límite cuando el_\n_propietario cierre sesión de este Bot!_'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	reply(`_Bot conectado con éxito_\n_*INFO DEL DISPOSITIVO*_\n\n ${JSON.stringify(conn.user,null,2)}`)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    listjadibot.push(conn.user)
    const authInfo = conn.base64EncodedAuthInfo()
    fs.writeFileSync(`./BOTZ/${sender}.json`, JSON.stringify(authInfo, null, '\t'))
    conn.on('chat-update', async (message) => {
        require('../dreams.js')(conn, message)
    })
}

const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close()
	reply('_*serBot fue detenido...*_')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}