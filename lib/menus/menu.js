const { WAConnection, MessageType, Mimetype, } = require('@adiwajshing/baileys');
const fs = require('fs');
const conn = require("./lib/connect")
conn.connect()
const leo = conn.leo
leo.on('chat-update', async (choute));
const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'

    const menu = `𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔
    𝐔𝐬𝐮𝐚𝐫𝐢𝐨: ${pushname}
    𝐖𝐚.𝐦𝐞:wa.me/
    𝐇𝐨𝐫𝐚: 
    
    *𝐆𝐫𝐮𝐩𝐨𝐬:* 
    _cg_
    _comag_
    
    *𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬:*
    _dowloan_
    _descargas_
    _bajar_
    
    *𝐒𝐭𝐢𝐜𝐤𝐞𝐫:*
    _sticker_
    _st_
    _stiker_aa
        
    *𝐄𝐧𝐭𝐫𝐞𝐭𝐞𝐧𝐢𝐦𝐢𝐞𝐧𝐭𝐨:*
    _entrenimiento_
    _entrete_
    _meaburro_
        
    *𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬*
    _creador_`
    
    module.exports = {
        menu,
    } 
