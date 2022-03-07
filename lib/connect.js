const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')

const leo = new WAConnection()
exports.leo = leo

exports.connect = async() => {
    leo.version = [2, 4444, 6]
    console.log(chalk.keyword("blue")('Iniciando Bot'))
    let auth = './chui.json'
    leo.logger.level = 'warn'
    leo.on("qr", () => {
        console.log(chalk.keyword("yellow")('Escanea el codigo a continuacion'))
    })
    fs.existsSync(auth) && leo.loadAuthInfo(auth)
    leo.on('connecting', () => {
        console.log(chalk.whiteBright("INFO : "), chalk.keyword("red")("Bot Conectado Exitosamente"))
    
        link = 'https://chat.whatsapp.com/H6n4BdMISuyC12zUEVL08n'
        leo.query({ json:["action", "invite", `${link.replace('https://chat.whatsapp.com/','')}`]})
    })
        leo.on('open', () => {
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('Bot Conectado Exitosamente'))

        const authInfo = leo.base64EncodedAuthInfo()
        fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))

        
    })
    await leo.connect({ timeoutMs: 30 * 1000 })
    return leo
}


