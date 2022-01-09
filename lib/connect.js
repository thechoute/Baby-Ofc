const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')

const leo = new WAConnection()
exports.leo = leo

exports.connect = async() => {
    leo.version = [2, 4444, 3]
    console.log(chalk.keyword("blue")('Conectando'))
    let auth = './chui.json'
    leo.logger.level = 'warn'
    leo.on("qr", () => {
       console.log(chalk.keyword("red")('Escanea el codigo de mas arriba'))
    })
    fs.existsSync(auth) && leo.loadAuthInfo(auth)
    leo.on('connecting', () => {
        console.log(chalk.whiteBright("INFO : "), chalk.keyword("red")("Estado"), chalk.keyword("aqua")("Bot Iniciado Correctamente"))
    })

    await leo.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./chui.json', JSON.stringify(leo.base64EncodedAuthInfo(), null, 2))  }

    link = 'https://chat.whatsapp.com/KOmt1i9738c2zA1SnSLwn1'
    leo.query({ json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]})
