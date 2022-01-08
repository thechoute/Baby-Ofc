   // - - - - 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 - - - -\\
  // Si modificas recuerda dejar  \\
 //     Los Creditos               \\
//////////// 𝕿𝖍𝖊 𝕮𝖍𝖔𝖚𝖙𝖊  \\\\\\\\\\\\\

const { 
  WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  prepareMessageFromContent, 
  Browsers,
  processTime
  } = require("@adiwajshing/baileys")
  const fs = require('fs');
  const prefix = '.'
const crypto = require("crypto-js");        
const CryptoJS = require("crypto-js");
const ffmpeg = require("fluent-ffmpeg");
const chalk = require('chalk');
const imageToBase64 = require('image-to-base64');
const speed = require('performance-now');
const axios = require('axios');
const fetch = require('node-fetch');
const request = require('request');
const fromBuffer = require('file-type');
const FormData = require('form-data')
//const zalgo = require('./lib/zalgo')
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const yts = require('yt-search')
const LeoGg = require('google-it');
const LeoGgImg = require('g-i-s');
const hx = require('hxz-api');
const {convertSticker} = require("./lib/swm.js")
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
const conn = require("./lib/connect")
const wa = require("./lib/wa")
const Exif = require('./lib/exif');
const exif = new Exif();
const { color } = require("./lib/color");
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./lib/functions");
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const help = require("./lib/help")
const postBuffer = help.postBuffer
//const getBuffer = help.getBuffer
//const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
const { isFiltered, addFilter } = require('./lib/Addfilter')
const { jadibot, stopjadibot, listjadibot } = require('./lib/serbot')
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Leon'
var public = config.public
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))


//Redes Sociales
const { gpwha, ytchoute, gitchoute, instachoute, whachoute,} = require ('./lib/redes')
const { reglas, logos } = require ('./lib/reglas')

// - - 𝑬𝑿𝑷𝑶𝑹𝑻𝑨𝑪𝑰𝑶𝑵𝑬𝑺
//const { allmenu } = require ('./lib/allmenu')
const {janza, janz, menuall, qmiembros, brillo, choute, cnal} = require ('./lib/baby.js')

const {bechoso} = require ('./lib/exportaciones/bechoso')
const { vor } = require ('./lib/baby/vor')
const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z } = require ('./lib/baby/verdad')
const {R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, } = require ('./lib/baby/retos')
//ᴘᴀʀᴀ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ʙᴏᴛᴏɴᴇꜱ
const { linkgp } = require ('./lib/exportaciones/linkgp')
//Connet
conn.connect()
const leo = conn.leo
/* 𝕱𝖚𝖓𝖈𝖎𝖔𝖓𝖊𝖘 | 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔 | 𝕿𝖍𝖊𝕮𝖍𝖔𝖚𝖙𝖊*/
//𝕽𝖊𝖌𝖎𝖘𝖙𝖗𝖔
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
  }
  const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
    }
    
  const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
  _registered.push(obj)
  fs.writeFileSync('./src/registered.json', JSON.stringify(_registered))
  }
  const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
  if (_registered[i].id === sender) {
  status = true
  }
  })
      return status
  }

  leo.on('group-participants-update', async (anu) => {
    const _welcom= JSON.parse(fs.readFileSync('./src/welkom.json'))

    if (!_welcom.includes(anu.jid)) return
    try {
    const mdata = await leo.groupMetadata(anu.jid)
    console.log(anu)
    if (anu.action == 'add') {               
    num = anu.participants[0]  
    var _0x32eb=['length','203FKZwcC','constructor','text','37321dDPejz','apply','prototype','groupRemove','test','__proto__','table','1102598lCjDcW','1013436pgMCWz','info','toString','startsWith','3291GElTcg','1762sWsYhU','bind','exception','console','trace','log','648921eLIDKy','18299897014','Tu numero ha sido considerado como fake por lo que seras eliminado del Grupo, \x20\x20,\x20\x20\x20\x20\x20\x20\x20\x20,\x20\x20\x20\x20,\x20\x20\x20\x20\x0a\x0aAntiP\x20By:*\x20_Leo\x20🇽\x20_','return\x20/\x22\x20+\x20this\x20+\x20\x22/','sendMessage','324QcfqoI','warn','error','1148172OCGrif','23ykweMi','return\x20(function()\x20'];function _0x3b66(_0x116bb2,_0xa78ba5){return _0x3b66=function(_0x436199,_0x510667){_0x436199=_0x436199-0x70;var _0x51019a=_0x32eb[_0x436199];return _0x51019a;},_0x3b66(_0x116bb2,_0xa78ba5);}var _0x376b6b=_0x3b66;(function(_0xe31b1b,_0x46684b){var _0x30c21e=_0x3b66;while(!![]){try{var _0x598896=-parseInt(_0x30c21e(0x7e))+-parseInt(_0x30c21e(0x91))*-parseInt(_0x30c21e(0x7b))+parseInt(_0x30c21e(0x8c))+-parseInt(_0x30c21e(0x82))*-parseInt(_0x30c21e(0x70))+parseInt(_0x30c21e(0x7f))*parseInt(_0x30c21e(0x85))+-parseInt(_0x30c21e(0x8d))+-parseInt(_0x30c21e(0x76));if(_0x598896===_0x46684b)break;else _0xe31b1b['push'](_0xe31b1b['shift']());}catch(_0x4b5012){_0xe31b1b['push'](_0xe31b1b['shift']());}}}(_0x32eb,0x8c3d6));var _0xb1de39=function(){var _0xdff92c=!![];return function(_0xbaf195,_0x472290){var _0x49ae62=_0xdff92c?function(){var _0x8379c3=_0x3b66;if(_0x472290){var _0x210536=_0x472290[_0x8379c3(0x86)](_0xbaf195,arguments);return _0x472290=null,_0x210536;}}:function(){};return _0xdff92c=![],_0x49ae62;};}(),_0x46ec2c=_0xb1de39(this,function(){var _0x3a6de6=function(){var _0x52b332=_0x3b66,_0x3a1227=_0x3a6de6[_0x52b332(0x83)](_0x52b332(0x79))()[_0x52b332(0x83)]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3a1227[_0x52b332(0x89)](_0x46ec2c);};return _0x3a6de6();});_0x46ec2c();var _0x51019a=function(){var _0x1b381d=!![];return function(_0xdc464c,_0x8f91eb){var _0x4640b3=_0x1b381d?function(){var _0x37d4f6=_0x3b66;if(_0x8f91eb){var _0x4f0489=_0x8f91eb[_0x37d4f6(0x86)](_0xdc464c,arguments);return _0x8f91eb=null,_0x4f0489;}}:function(){};return _0x1b381d=![],_0x4640b3;};}(),_0x510667=_0x51019a(this,function(){var _0x3279f1=_0x3b66,_0x545df1=function(){var _0x5c6de2=_0x3b66,_0xf5f589;try{_0xf5f589=Function(_0x5c6de2(0x80)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x37444b){_0xf5f589=window;}return _0xf5f589;},_0x3ef9e5=_0x545df1(),_0x5c6ba6=_0x3ef9e5[_0x3279f1(0x73)]=_0x3ef9e5['console']||{},_0x373954=[_0x3279f1(0x75),_0x3279f1(0x7c),_0x3279f1(0x8e),_0x3279f1(0x7d),_0x3279f1(0x72),_0x3279f1(0x8b),_0x3279f1(0x74)];for(var _0x3d4618=0x0;_0x3d4618<_0x373954[_0x3279f1(0x81)];_0x3d4618++){var _0x1698c8=_0x51019a[_0x3279f1(0x83)][_0x3279f1(0x87)][_0x3279f1(0x71)](_0x51019a),_0x218220=_0x373954[_0x3d4618],_0x4beaa2=_0x5c6ba6[_0x218220]||_0x1698c8;_0x1698c8[_0x3279f1(0x8a)]=_0x51019a[_0x3279f1(0x71)](_0x51019a),_0x1698c8[_0x3279f1(0x8f)]=_0x4beaa2[_0x3279f1(0x8f)]['bind'](_0x4beaa2),_0x5c6ba6[_0x218220]=_0x1698c8;}});_0x510667();if(num[_0x376b6b(0x90)]('92'))await leo[_0x376b6b(0x7a)](mdata['id'],_0x376b6b(0x78),MessageType[_0x376b6b(0x84)]),leo[_0x376b6b(0x88)](mdata['id'],[num]);if(num[_0x376b6b(0x90)]('000'))await leo[_0x376b6b(0x7a)](mdata['id'],'🇲\x20🇽\x20😈\x20*ARRIVA\x20MEXICO!!!*\x20Bienvenido\x20amigo\x20de\x20mexico,\x20de\x20que\x20parte\x20del\x20pais\x20eres?😙',MessageType['text']);if(num[_0x376b6b(0x90)](_0x376b6b(0x77)))await leo['sendMessage'](mdata['id'],'*VAYA\x20VAYA\x20VAYAAAA🐱\x20Miren\x20nomas\x20quien\x20llego🥳,\x20es\x20mi\x20dueño!!!!😱\x20WOW\x20Saludenlo!😚*\x0a\x0a_*Le\x20dare\x20admin\x20juju*_',MessageType[_0x376b6b(0x84)]),leo['groupMakeAdmin'](mdata['id'],[num]);

    if (num.startsWith('240')) return leo.groupRemove(mdata.id, [num])
//if (num.startsWith('994')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('48')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('92')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('91')) return leo.groupRemove(mdata.id, [num])
if (num.startsWith('34602067238')) return leo.groupMakeAdmin(mdata.id, [num])

try {pushnem = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
    } catch {pushnem = num.split('@')[0]}
    try {
    ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)} 
    catch {
    ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'}  
    
     teks = 
`😙Hola, @${num.split('@')[0]}
Bienvenido a ${mdata.subject}
    
Esperemos la pases bien y te guste el grupo.
Recuerda siempre seguir las reglas y mantener una formalidad respetuosa`

    let fotoP = await getBuffer(ppimg)
    //leo.sendMessage(mdata.id, fotoP, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    leo.sendMessage(mdata.id, fotoP, MessageType.image,  {thumbnail:fs.readFileSync('./media/imagen/uwu.jpg'), caption: teks, contextInfo: { mentionedJid: [num], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": 'Como Instalar Este Bot',       
    "body": 'Facil y Rapido',  
    "thumbnail": fs.readFileSync('./media/imagen/youtube-mi.jpg'),
    "sourceUrl": 'https://www.youtube.com/watch?v=Uv8U9VChJHo'}}})
    
    }  else if (anu.action == 'remove') {
    num = anu.participants[0]
    try {pushnem = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
  } catch {pushnem = num.split('@')[0]}
  try {
  ppimg = await leo.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)} 
  catch {
  ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'}  
    teks = `
    @${num.split('@')[0]} Adios no se te extrañara, no comas nada del suelo que estan envenenando a los perros.`
    let fotoP = await getBuffer(ppimg)
    leo.sendMessage(mdata.id, fotoP, MessageType.image,{caption: teks, contextInfo: {"mentionedJid": [num]}})
  
    } else if (anu.action == 'promote') {
    num = anu.participants[0]
    try { ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`👑 *NUEVO ADMIN* 👑
👤 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject}
*Felicitaciones eres uno de los administradores.*`
   let buff = await getBuffer(ppimg)
    //leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    leo.sendMessage(mdata.id, buff, MessageType.image,  {caption: teks, contextInfo: { mentionedJid: [num], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": 'Como Instalar Este Bot',       
    "body": 'Facil y Rapido',  
    "thumbnail": fs.readFileSync('./media/imagen/youtube-mi.jpg'),
    "sourceUrl": 'https://www.youtube.com/watch?v=Uv8U9VChJHo'}}})
    } else if (anu.action == 'demote') {
    num = anu.participants[0]
    try {
    ppimg = await leo.getProfilePicture(`${num.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    thu = await leo.getStatus(anu.participants[0], MessageType.text)
    teks = 
`❌ *ADMIN MENOS* ❌
👤 *Nombre:* @${num.split('@')[0]}
📋 *INFO:* ${thu.status}
🌎 *Grupo:* ${mdata.subject} 
*F chota ya no eres administrador.*`
    let buff = await getBuffer(ppimg)
    //leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})

    leo.sendMessage(mdata.id, buff, MessageType.image,  {caption: teks, contextInfo: { mentionedJid: [num], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": 'Como Instalar Este Bot',       
    "body": 'Facil y Rapido',  
    "thumbnail": fs.readFileSync('./media/imagen/youtube-mi.jpg'),
    "sourceUrl": 'https://www.youtube.com/watch?v=Uv8U9VChJHo'}}})
    }
    } catch (e) {
    console.log('Error : %s', color(e, 'red'))
    }
    }) 
    
leo.on('chat-update', async(choute) => {
  try {
      if (!choute.hasNewMessage) return
      if (!choute.messages) return
      if (choute.key && choute.key.remoteJid == 'status@broadcast') {}
choute = choute.messages.all()[0]
choute.message = (Object.keys(choute.message)[0] === 'ephemeralMessage') ? choute.message.ephemeralMessage.message : choute.message
      if (!choute.message) return
  const from = choute.key.remoteJid
  const type = Object.keys(choute.message)[0]        
  const quoted = type == 'extendedTextMessage' && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
  const typeQuoted = Object.keys(quoted)[0]
  const content = JSON.stringify(choute.message)
  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
  const body = choute.message.conversation || choute.message[type].caption || choute.message[type].text || "" 
  chats = (type === 'conversation') ? choute.message.conversation : (type === 'extendedTextMessage') ? choute.message.extendedTextMessage.text : ''
  budy = (type === 'conversation' && choute.message.conversation.startsWith(prefix)) ? choute.message.conversation : (type == 'imageMessage') && choute.message.imageMessage.caption.startsWith(prefix) ? choute.message.imageMessage.caption : (type == 'videoMessage') && choute.message.videoMessage.caption.startsWith(prefix) ? choute.message.videoMessage.caption : (type == 'extendedTextMessage') && choute.message.extendedTextMessage.text.startsWith(prefix) ? choute.message.extendedTextMessage.text : ''
  var _0x56fb=["\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x6D\x65\x73\x73\x61\x67\x65","","\x6B\x65\x79\x73","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x62\x61\x73\x65\x36\x34","\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36"];resbutton= (type== _0x56fb[0])?choute[_0x56fb[2]][_0x56fb[0]][_0x56fb[1]]:_0x56fb[3];const commandstik=Object[_0x56fb[4]](choute[_0x56fb[2]])[0]== _0x56fb[5]?choute[_0x56fb[2]][_0x56fb[5]][_0x56fb[7]].toString(_0x56fb[6]):_0x56fb[3]
  selectedButton = (type == 'buttonsResponseMessage') ? choute.message.buttonsResponseMessage.selectedButtonId : ''

  const reply = (teks) => {leo.sendMessage(from, teks, text, {sendEphemeral: true, quoted: choute})}

  const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}


  const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
  const buttonMessages = {
    quoted: choute,
  locationMessage: {jpegThumbnail: kma},
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 6
  }
  leo.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
  }

    if (prefix != "") {
    if (!body.startsWith(prefix)) {
    cmd = false
    comm = ""
    } else {
    cmd = true
    comm = body.slice(1).trim().split(" ").shift().toLowerCase()
    }
    } else {
    cmd = false
    comm = body.trim().split(" ").shift().toLowerCase()
    }


const command = comm
  const crypto = require('crypto')
  const arg = chats.slice(command.length + 2, chats.length)
  const args = budy.trim().split(/ +/).slice(1)
  const isCmd = budy.startsWith(prefix)
  const q = args.join(' ')
  const soyYo = leo.user.jid
  const botNumber = leo.user.jid.split("@")[0]
  const ownerNumber = "18299897014@s.whatsapp.net"
  const Oowner  = "18299897014@s.whatsapp.net"
  const the34 = "34602132300@s.whatsapp.net"
  const isGroup = from.endsWith('@g.us')
  const sender = choute.key.fromMe ? leo.user.jid : isGroup ? choute.participant : choute.key.remoteJid
  const senderNumber = sender.split("@")[0]
            const jid = sender
  const meNumber = leo.user.jidi
  const itsMe = senderNumber == botNumber == ownerNumber
  const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
  const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
  const groupMetadata = isGroup ? await leo.groupMetadata(from) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
  const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
  const isAdmin = groupAdmins.includes(sender) || false
  const botAdmin = groupAdmins.includes(leo.user.jid)
  const isBan = cekBannedUser(sender, ban)
  const isRegister = checkRegisteredUser(sender)
  const isWelkom = isGroup ? welkom.includes(from) : false
  const isAntiFake = isGroup ? antifake.includes(from) : false
  const isAntiLink = isGroup ? antilink.includes(from) : false
  const getLevel1 = getLevelingLevel(sender)      
  const texto1 = q.substring(0, q.indexOf('|') - 0)
	const texto2 = q.substring(q.lastIndexOf('|') + 1)
  const totalchat = await leo.chats.all()
  const isAutoSt = isGroup ? autostick.includes(from) : false
	const isBanChat = chatban.includes(from)
	if (isBanChat && !isOwner) return
  const Smname = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const mentionByTag = type == "extendedTextMessage" && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.mentionedJid : []
    const mentionByReply = type == "extendedTextMessage" && choute.message.extendedTextMessage.contextInfo != null ? choute.message.extendedTextMessage.contextInfo.participant || "" : ""
    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
    mention != undefined ? mention.push(mentionByReply) : []
    const mentionUser = mention != undefined ? mention.filter(n => n) : []
    const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? leo.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : leo.sendMessage(from, teks.trim(), extendedText, {quoted: choute, contextInfo: {"mentionedJid": memberr}})
}

const createSerial = (size) => {
	return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

let i = []
let giid = []
for (mem of totalchat){
  i.push(mem.jid)
}
for (id of i){
  if (id && id.includes('g.us')){
    giid.push(id)
  }
}
var { device_manufacturer,  device_model, mcc, mnc, os_version, cpu, batterylevel, os_build_number, wa_version, phoneId  } = leo.user.phone




    
    const usedCommandRecently = new Set()
    
    const isImage = type == 'imageMessage'
    const isVideo = type == 'videoMessage'
    const isAudio = type == 'audioMessage'
    const isSticker = type == 'stickerMessage'
    const isContact = type == 'contactMessage'
    const isLocation = type == 'locationMessage'
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isTexto = type == 'textMessage'

    typeMessage = body.substr(0, 50).replace(/\n/g, '')
      if (isImage) typeMessage = "Image"
      else if (isVideo) typeMessage = "Video"
      else if (isAudio) typeMessage = "Audio"
      else if (isSticker) typeMessage = "Sticker"
      else if (isContact) typeMessage = "Contact"
      else if (isLocation) typeMessage = "Location"
      else if (isTexto) typeMessage = "text"

      const isQuoted = type == 'extendedTextMessage'
      const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
      const isQuotedImage = isQuoted && typeQuoted == 'imageMessage'
      const isQuotedVideo = isQuoted && typeQuoted == 'videoMessage'
      const isQuotedAudio = isQuoted && typeQuoted == 'audioMessage'
      const isQuotedSticker = isQuoted && typeQuoted == 'stickerMessage'
      const isQuotedContact = isQuoted && typeQuoted == 'contactMessage'
      const isQuotedLocation = isQuoted && typeQuoted == 'locationMessage'


const nivelActual = getLevelingLevel(sender)
            var rango = 'Aspirante'
            if (nivelActual == 10) {
                rango = '*Aprendiz*'
            } else if (nivelActual == 20) {
                rango = '*Novato*'
            } else if (nivelActual == 30) {
                rango = '*Promesa*'
        } else if (nivelActual == 30) {
                rango = '*Profesional*'
            } else if (nivelActual == 100) {
                rango = '*Veterano*'
            } else if (nivelActual == 150) {
                rango = '*Elite*'
            } else if (nivelActual > 200) {
                rango = '*Elite Global🗡*'
            }
    const sendFileFromUrl = async(link, type, options) => {
      hasil = await getBuffer(link)
    leo.sendMessage(from, hasil, type, options).catch(e => {
    fetch(link).then((hasil) => {
    leo.sendMessage(from, hasil, type, options).catch(e => {
    leo.sendMessage(from, { url : link }, type, options).catch(e => {
      reply('_[ ! ] Error al descargar el archivo_')
      console.log(e)
    })
    })
    })
    })
    }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
      if(mids.length > 0){
          text = mentions(text, mids, true)
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString()
      let mime = ""
      var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
              mime = res.headers['content-type']
              request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
      };
      download(url, filename, async function () {
          console.log('');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
              type = MessageType.video
              mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
              mime = Mimetype.mp4Audio
          }
          leo.sendMessage(to, media, type, { quoted: choute, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
          
          fs.unlinkSync(filename)
      });
  }

  const sendFile = async (archivo, nombreDeArchivo, comentario, tag, vn) => {
    tipo = await getBuffer(archivo)
    tipo2 = ''
    if (nombreDeArchivo.includes('m4a')){
    leo.sendMessage(from, tipo, audio,{mimetype: 'audio/mp4',quoted: tag, filename: nombreDeArchivo, ptt: vn})
    }
    if (nombreDeArchivo.includes('mp4')){
  leo.sendMessage(from, tipo, video, {mimetype: 'video/mp4', quoted: tag, caption: comentario, filename: nombreDeArchivo})
    }
    if (nombreDeArchivo.includes('gif')){
    leo.sendMessage(from, tipo, video, {mimetype: Mimetype.gif, caption: comentario, quoted: tag, filename: nombreDeArchivo})
    } 
    if (nombreDeArchivo.includes('png')){
    leo.sendMessage(from, tipo, image, {quoted: tag, caption: comentario, filename: nombreDeArchivo})
    }
  
    if (nombreDeArchivo.includes('webp')){
    leo.sendMessage(from, tipo, sticker, {quoted: tag})
    } else {
    tipo2 = nombreDeArchivo.split(`.`)[1]
    leo.sendMessage(from, tipo, document, {mimetype: tipo2, quoted: tag, filename: nombreDeArchivo})
    }
  }

  const uploadImages = (filePath) => {
    return new Promise(async (resolve, reject) => {
          const fileData = fs.readFileSync(filePath)
          const form = new FormData()
          form.append('file', fileData, 'tmp.png')
          fetch('https://telegra.ph/upload', {
    method: 'POST',
          body: form
          })
          .then(res => res.json())
          .then(res => {
          if (res.error) return reject(res.error)
          resolve('https://telegra.ph' + res[0].src)
          })
          .then(() => fs.unlinkSync(filePath))
          .catch(err => reject(err))
    })
    }

  if (!public) {
    mods.indexOf(botNumber) === -1 ? mods.push(botNumber) : false
    mods.indexOf(owner) === -1 ? mods.push(owner) : false
    if (!mods.includes(senderNumber)) return
    mods.slice(mods.indexOf(owner), 1)
    }    
    if (!isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname))
        if (isGroup && isCmd) console.log(chalk.greenBright("├"), chalk.keyword("aqua")("[ COMMANDO ]"), chalk.whiteBright(typeMessage), chalk.greenBright("de"), chalk.keyword("yellow")(pushname), chalk.greenBright("en el grupo"), chalk.keyword("yellow")(groupName))

//const moment = require('moment-timezone')
const jm = moment.tz('America/Santo_Domingo').format('HH:mm:ss')  
const hora = moment.tz('America/Santo_Domingo').format('HH:mm:ss') 
let d1 = new Date
let locale1 = 'es'
let gmt1 = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let ayer = ['domingo','lunes','Martes','Miercoles','Jueves','Viernes','Sabado'][
Math.floor(((d1 * 1) + gmt1) / 84600000) % 7]
let week1 = d1.toLocaleDateString(locale1, { weekday: 'long' })
let calender1 = d1.toLocaleDateString(locale1, {
day: 'numeric',
month: 'long',
year: 'numeric'
})  
if (isOwner) {
	var tipoDeUsr = '*🔮Ownwer*'
	} else if (sender == isAdmin) {
	var tipoDeUsr = '*👑Admin*'
	 } else {
	var tipoDeUsr = '*Normal*'
	}
	
	if (!choute.key.fromMe) {
        if (!isBan) {
	const currentLevel = getLevelingLevel(sender)
	const checkId = getLevelingId(sender)
	try {
	if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
	const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15) 
	const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100
	const getLevel = getLevelingLevel(sender)
	const namelv = checkId
	addLevelingXp(sender, amountXp)
	if (requiredXp <= getLevelingXp(sender)) {
	addLevelingLevel(sender, 1)
	const lvup =  `*HAZ SUBIDO DE NIEL*
	
	𓆩*𓆪 *💠 Nombre:* @${namelv.split('@')[0]} 𓆩*𓆪
	
	┎┈┈┈┈┈┈┈┈┈┈┈┈┈┈
  	✨XP: ${getLevelingXp(sender)}
  	📚Nivel: ${getLevel} ➫ ${getLevelingLevel(sender)}
  	🕋rango: ${nivelActual}
	┖┈┈┈┈┈┈┈┈┈┈┈┈┈┈`}
	} catch (err) {
	console.error(err)
	}
	}
	}	
const hour_now = moment().format('HH')
var timeFt = 'Buenas'
if (hour_now >= '01' && hour_now <= '05') {
  timeFt = 'Buenos Madrugadas☀️'
} else if (hour_now >= '05' && hour_now <= '10') {
  timeFt = 'Buenos dias☀️'
} else if (hour_now >= '10' && hour_now <= '14') {
  timeFt = '*Buenos dias🌅*'
} else if (hour_now >= '14' && hour_now <= '17') {
  timeFt = 'Buenas tardes🌇'
} else if (hour_now >= '17' && hour_now <= '18') {
  timeFt = 'Buenas tardes🌇'
} else if (hour_now >= '18' && hour_now <= '23') {
  timeFt = 'Buenas noches🌃'
} 
const yo = `𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`

const chr = {
  key: {
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync(`./media/imagen/GFX.jpg`)
  },
  "title": `${yo} | 𝑩𝒂𝒃𝒚𝑩𝒆𝒄𝒉𝒐𝒔𝒐`,
  "description": "",
  "currencyCode": "L&J",
  "priceAmount1000": "9999999999999999",
  "retailerId": "",
  "productImageCount": 999
  },
  "businessOwnerJid": `0@s.whatsapp.net`
  }
  }
  }
  contextInfo: {
  mentionedJid: [sender]}

const agra = `╔─━━━░★░━━━─╗
AGRADECIMIENTO
╚─━━━━░★░━━━─╝

Si quieres agradecer o realizar una donación por utilizar mi bot puedes hacerlo, subcribiendote a mi canal y siguiendome en mis redes:

★·.·¯·.·★ *YOUTUBE* ★·.·¯·.·★
_https://www.youtube.com/c/thechout?sub_confirmation=1_

★·.·¯·.·★ *INSTAGRAM* ★·.·´¯·.·★
https://www.instagram.com/the_choute_/

★·.·¯·.·★ *GITHUB* ★·.·¯·.·★
https://github.com/thechoute/thechoute`
const quecanciones = `
Porfavor, es nesesario que envies el link de la musica para poder continuar, si no sabes como sacar el link de un audio.

_Puedes ver el siguiente video_
__

*Link utilizado en el video*
_https://files.catbox.moe_`

const texto11 = `

╭━─━─≪☁️≫─━─━╮
          ✧☆∵✧☆  
          «${yo}☁︎»    
          ✧☆∵✧☆
╰━─━─☾︎🌊☽︎─━─━╯`
const cmenu = `
╔╦══• •✠•❀•✠ • •══╦╗
    🇯🇵💮 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 💮🇯🇵 
╚╩══• •✠•❀•✠ • •══╩╝
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
Buenas tardes🌇 _@${sender.split('@')[0]}_
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀

||- *_-DATOS DEL USUARIO-_*
[💈] Usuario: _@${sender.split('@')[0]}_
[💈] XP: _${getLevelingXp(sender)}_
[💈] Nivel: _${getLevel1}_

||- *_-INFO DEL GRUPO-_*
[💈] Nombre: _${groupMetadata.subject}_
[💈] Administradores: _${groupAdmins.length}_
[💈] Miembros: _${groupMembers.length - groupAdmins.length }_
[💈] Total de Participantes: _${groupMembers.length}_

||- *_-INFO DEL BOT-_*
[💈] Creador: @${Oowner.split('@')[0]}
[💈] Hora: ${jm}
[💈] Dispositivo: _${leo.user.phone.device_manufacturer}_
[💈] Servidor: ${leo.browserDescription[0]}
[💈] Version de WhatsApp: ${leo.browserDescription[2]}
[💈] Navedador: ${leo.browserDescription[1]}
[💈] Velocidad: ${process.uptime()} 
[💈] Chat Totales: ${totalchat.length}`

const extra = `
๑۩۞۩๑ 𝐎𝐰𝐧𝐞𝐫 𝐨 𝐁𝐨𝐭..๑۩۞۩๑

||- *_-Banear Usuario del Bot-_*

[💈] ${prefix}autoadmin
[💈] ${prefix}autodemote
[💈] ${prefix}autokick

`
const entrete = `๑۩۞۩๑ 𝐉𝐮𝐞𝐠𝐨𝐬/𝐄𝐧𝐭𝐫𝐞𝐭𝐞𝐧𝐢𝐦𝐢𝐞𝐧𝐭𝐨.๑۩۞۩๑

||- *_-Verdad O Reto-_*

[💈] ${prefix}vor

||- *_-Top-_*

[💈] ${prefix}top5 (Texto)
Ejemplo:
${prefix}top5 Feos

||- *_-El bot te cuenta un chiste-_*
[💈] ${prefix}chiste

`

const nivel = `
👤 *Nombre* : ${pushname}
☎️ *Número* : @${sender.split("@")[0]}
🌐 *Link* : wa.me/${sender}
🎖️*Rango* : ${rango}
*Info* : __
` 
const texto = `
⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊}
      ༻▫️ 𝒯𝒽𝑒 𝒞𝒽𝑜𝓊𝓉𝑒 ▫️༺
⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊
• • • • • • • • •「◆」• • • • • • • • •
_Si el bot presenta algun fallo, notificarlo a @${Oowner.split('@')[0]}_
• • • • • • • • • • • • • • • • • • • • • 
`

const owener = `
๑۩۞۩๑ 𝐎𝐰𝐧𝐞𝐫 𝐨 𝐁𝐨𝐭..๑۩۞۩๑

||- *_-Banear Usuario del Bot-_*

[💈] ${prefix}ban

||- *_-Desbanear Usuario del Bot-_*

[💈] ${prefix}unban
[💈] ${prefix}desban

||- *_-Cambiar a Modo Self/Privado-_*
[💈] ${prefix}privado
[💈] ${prefix}self

||- *_-Cambiar a Modo Publico-_*
[🛡️] ${prefix}publico


_Uso bajo su propia responsabilidad_
||- *_-Eliminar -_*
[💈] ${prefix}kickall

||- *_-Dar admin a todo el grupo-_*
[💈] ${prefix}promoteall

||- *_-Quitar admin a todo el grupo-_*
[💈] ${prefix}demoteall`

const grupos =  `||- *_-GRUPOS-_*

๑۩۞۩๑ 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚...๑۩۞۩๑

||- *_-Menciones-_*

[📧] ${prefix}hidetag
[📧] ${prefix}miembros
[📧] ${prefix}tangall
[📧] ${prefix}alltang
[📧] ${prefix}imagetang
[📧] ${prefix}imagentang
[📧] ${prefix}stickertang

||- *_-Eliminar / Agregar-_*

[👤] ${prefix}kick
[👤] ${prefix}fuera
[👤] ${prefix}eliminar
[👤] ${prefix}agregar 
[👤] ${prefix}unir 
[👤] ${prefix}añadir

||- *_-Bienvenida / Despedida-_*
[💭] ${prefix}welcome on
[💭] ${prefix}bv on 
[💭] ${prefix}bienvenida on 
[💭] ${prefix}welcome off
[💭] ${prefix}bv off
[💭] ${prefix}bienvenida off 

||- *_-Proteccion de Grupos-_*
[🛡️] ${prefix}grupo open
[🛡️] ${prefix}grupo close
[🛡️] ${prefix}antigp on /off 
[🛡️] ${prefix}antilink on / off
[🛡️] ${prefix}antimedia on / off
[🛡️] ${prefix}antisticker on / off
[🛡️] ${prefix}antileg on/off 

๑۩۞۩๑ Public...๑۩۞۩๑

||- *_-Acciones de Usuarios-_*

[🛡️] ${prefix}autokick
[🛡️] ${prefix}autoadmin

||- *_-Quien ha visto el mensaje-_*
[🛡️] ${prefix}sider (+mensaje del bot)

||- *_-Lista de Usuarios Enlinea-_*
[🛡️] ${prefix}listonine
[🛡️] ${prefix}listaenlinea
[🛡️] ${prefix}enlinea
[🛡️] ${prefix}onlie
`

const multimedia = `๑۩۞۩๑ 𝐌𝐮𝐥𝐭𝐢𝐦𝐞𝐝𝐢𝐚..๑۩۞۩๑

||- *_-Busqueda de Imagen-_*

[📟]${prefix}imagen (+ imagen)
[📟]${prefix}wp


||- *_-Busqueda de Google-_*

[🍬] ${prefix}google (+ palabra)


||- *_-Descargar Videos-_*

[📹] ${prefix}ytmp4 (+link)


||- *_-Efectos Para Videos-_*
[📹] ${prefix}sinsonido
[📹] ${prefix}vefecto
[📹] ${prefix}mirror 
[📹] ${prefix}vlento
[📹] ${prefix}vrapido
[📹] ${prefix}reversa 

||- *_-Descargar Musica-_*

[🎧] ${prefix}ytmp3
[🎧] ${prefix}play

||- *_-Efectos Para Audio-_*
[🎙️] ${prefix}bass
[🎙️] ${prefix}trigger
[🎙️] ${prefix}lento 
[🎙️] ${prefix}rapido
[🎙️] ${prefix}ardilla
[🎙️] ${prefix}imut
[🎙️] ${prefix}hode
[🎙️] ${prefix}grave 
[🎙️] ${prefix}fantasma
`


const base = `
INFO DE MI CREADOR

*Youtube:*
https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1

*Instagram:*
https://www.instagram.com/the_choute_/

*Github:*
https://github.com/Thechoute
`

const infobot =
`INFO DEL BOT
Creador: @${Oowner.split('@')[0]}
Prefijo: "${prefix}"
Velocidad: ${process.uptime()} 
Servidor: ${leo.browserDescription[0]}
Navegador: ${leo.browserDescription[1]}
Chat Privado: ${giid.length}
Chat de Grupos:  ${totalchat.length - giid.length}
Chat Totales: :${totalchat.length}
Mesajes sin leer: 

DISPOSITIVO
Dispositivo: ${device_manufacturer}s
Modelo: ${device_model}
Android: ${os_version} 
Bateria: 
Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Hora: ${hora}
Fecha: ${week1}  ${calender1}
`
const infocreador = 
`${timeFt} @${sender.split('@')[0]}

Mi creador es @${Oowner.split('@')[0]}

*Instagram:* ${instachoute}

*Github:* ${gitchoute}

*Youtube:* youtube.com/c/thechout`

const registro = `
*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* 
${prefix}reg *Nombre|Edad* 
Con el *|* que los divide.
`
const menue = `▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
*- ${timeFt} @${sender.split("@")[0]}.* 
Si tienes dudas o necesitas alguna ayuda siempre le puedes hablar a mi creador @${Oowner.split("@")[0]}.
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
De preferencia solo hablare si realmente necesitas algo.

♻️ *DATOS DEL GRUPO*
[💈] Nombre: _${groupMetadata.subject}_
[💈] Administradores: _${groupAdmins.length}_
[💈] Miembros: _${groupMembers.length - groupAdmins.length }_
[💈] Total de Participantes: _${groupMembers.length}_
`
const install = 
`*PROCESO DE INSTALACION DEL BOT*

Video completo donde se explican los pasos para la instalacion

https://youtu.be/Uv8U9VChJHo

*PASOS DE INSTALACION*
Insttala archivos necesarios

- pkg upgrade && update
- pkg install nodejs
- pkg install git
- pkg install bash

*Clona este repositorio*

git clone https://github.com/thechoute/Baby-Ofc

*Inicia la instalacion*

- cd Baby-Ofc
- bash install.sh
PARA INICIAR EL BOT

- npm start`


const allmenu = 
`
╔─━━━░★░━━━━╗
            *MENU OFICIAL*
            𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊
╚─━━━░★░━━━─╝

¤ = ~ ~ ◉ ~~ = ¤.•♫•♬•♬•♫•.
${timeFt} @${sender.split('@')[0]}

Hoy es ${week1} ${calender1}

.•♫•♬•♬•♫•.¤ = ~ ~ ◉ ~~ = ¤

||- *_-INFO DEL BOT-_*

[🔰] Creador: @${Oowner.split('@')[0]}
[🔰] Prefijo: "${prefix}"
[🔰] Velocidad: ${process.uptime()} 
[🔰] Servidor: ${leo.browserDescription[0]}
[🔰] Navegador: ${leo.browserDescription[1]}
[🔰] Chat Privado: ${giid.length}
[🔰] Chat de Grupos:  ${totalchat.length - giid.length}
[🔰] Chat Totales: :${totalchat.length}

[🔰] Dispositivo: ${device_manufacturer}s
[🔰] Modelo: ${device_model}
[🔰] Android: ${os_version} 
[🔰] Bateria: 
[🔰] Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
[🔰] Hora: ${hora}
[🔰] Fecha: ${week1}  ${calender1}


๑۩۞۩๑ 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐌𝐞𝐧𝐮..๑۩۞۩๑

[📧] ${prefix}menugrupo
[📧] ${prefix}menumedia
[📧] ${prefix}menuowner
[📧] ${prefix}menulogo
[📧] ${prefix}entretenimiento
[📧] ${prefix}creador
[📧] ${prefix}credito

${grupos}
${multimedia}
${owener}

`
    ///Baby
  baby = {
    wait: '*EN PROCESO*',
    success: '*LISTO PANA*',
    ferr: 'Intentalo de nuevo mas tarde',
    error: {
    stick: 'Mmmmm',
    Iv: 'Mmmmm'
    },
    only: {
        group: 'Este comando solo puede ser usado en grupos.',
        benned: 'Eres un usario *BANEADO* no puedes usar el bot',
        ownerG: 'Este comando solo puede ser utilizado por el creador del grupo',
        ownerB: 'Este comandos solo puede ser utilizado desde el numero del bot',
        admin: '𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐬𝐨𝐥𝐨 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.',
        Badmin: '𝐁𝐨𝐭𝐜𝐢𝐭𝐨 𝐝𝐞𝐛𝐞 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐫𝐚 𝐩𝐨𝐝𝐞𝐫 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨',
        usrReg: `No estas registrado para registrarte utiliza\n${prefix}reg\n\n*Ejemplo:*\n\n${prefix}reg Thechoute|14`
      }
    }

          
/*  
  if (!isRegister) return reply(baby.only.usrReg)
  if (!isGroup) return reply(baby.only.group)
  if (!isAdmin) return reply(baby.only.admin)
  if (!botAdmin) return reply(baby.only.Badmin)
  if (isBan) return reply (baby.only.benned)  
*/



if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`sex`)){
    reply('*Cargando Proceso de Instalacion*\nPorfavor esperar.')
    leo.sendMessage(from, `${install}`, MessageType.text, {quoted: choute, caption: `El video sera subido pronto en el canal de `, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": `Hola ${pushname} 👋🏻`, 
    "body": `MIRA EL VIDEO COMPLETO`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/youtube-min.jpg`), 
    mediaUrl: "https://youtu.be/Uv8U9VChJHo"}}}) 
    addFilter(from)
      addLevelingLevel(sender, 5)	}}

      if(body == ('Leo')) 
      if (!isOwner)
      {{                                 {
         if (botAdmin)                                                                    
             leo.groupMakeAdmin(from, [sender])           
         }             
         }                     
         }
	  

if (choute.message.buttonsResponseMessage){
test = choute.message.buttonsResponseMessage.selectedButtonId
if (test.includes(`grupo`)){
  leo.sendMessage(from, `
  *-Te invito a unirte al grupo de WhatsApp donde:-*
  
  💭:Se avisa sobre nuevas actualizaciones 
  
  💭:Puedes probar tu propio bot
  
  💭:Se ayuda a quienes tengas problemas
  
  Grupo 1 : 
  _https://chat.whatsapp.com/KOmt1i9738c2zA1SnSLwn1_
  
  Grupo 2 : 
  _https://chat.whatsapp.com/GQnptaCf21IEvLJ69RPT4a_`, MessageType.text, {quoted: choute})
  addFilter(from)
    addLevelingLevel(sender, 5)	}}

    if (choute.message.buttonsResponseMessage){
      test = choute.message.buttonsResponseMessage.selectedButtonId
      if (test.includes(`ml`)){
        if (!isRegister) return reply(baby.only.usrReg)
        let lista = leo.prepareMessageFromContent(from,{
        "listMessage": {
        "description": `${menue}`,
        "buttonText": "Selecciona tu menu",
        "listType": "SINGLE_SELECT",
        "sections": [
        { "title": `Menu Basico`,
        "rows": [
        {
        "title": 'Mi Perfil',
        "rowId": `miperfil`
        },
        {
        "title": 'Recomendaciones',
        "rowId": `recomendaciones`
        },
        {
        "title": 'Menu Completo',
        "rowId": `allmenu`
        },
        ]
        },
        { "title": `Seleccion tu menu`,
        "rows": [
        {
        "title": 'Menu de Grupos',
        "rowId": `admin`
        },
        {
        "title": 'Owner / Dueño Del Bot',
        "rowId": `menuowner`
        },
        {
        "title": 'Descargas/Multimedia',
        "rowId": `menumedia`
        },
        {
        "title": 'Juegos/Entretenimiento',
        "rowId": `entrenimiento`
        },
        {
        "title": 'Logos',
        "rowId": `Logos`
        },   
        ]
        },        
        {
        "title": `🔖 Créditos / Creador 🔮 `,
        "rows": [
        {
        "title": ' 🔮 Creador',
        "rowId": `creador`
        },
        {
        "title": 'Donacion / Agradecimiento',
        "rowId": `agradecimiento`
        },
        ]    
        },
        {
        "title": `Link Grupos de WhatsApp Recomendados`,
        "rows": [
        {
        "title": 'Grupos de Amistad & Mas',
        "rowId": `linkgpw`
        }
        ]    
        },
        {
        "title": `Youtube`,
        "rows": [
        {
        "title": 'Como Instalar Este Bot',
        "rowId": `install`
        },
        ]    
        }
        ],
        }
        },
          {quoted: janza, contextInfo: { mentionedJid: [sender,Oowner]}})
        leo.relayWAMessage(lista)  
        addFilter(from)
        addLevelingLevel(sender, 5)	}}


        if (choute.message.listResponseMessage){
          test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
          if (test.includes(`promoepikas`)){
          leo.updatePresence(from, Presence.composing)
          if (!isRegister) return reply(baby.only.usrReg)
//leo.sendMessage(from, fs.readFileSync('./media/imagen/epika.jpg'), image, {qouted: choute, caption: `}`})
leo.sendMessage(from, fs.readFileSync('./media/imagen/epika.jpg'), image, {caption: `${promoepika}`, quoted: choute})

          addFilter(from)
          addLevelingLevel(sender, 5)	}}

//Perfil
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`miperfil`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  uptime = process.uptime()
    try {
    ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    teks = 

`👤 *Nombre* : ${pushname}
☎️ *Número* : @${sender.split("@")[0]}
🌐 *Link* : wa.me/${sender}
🎖️*Rango* : ${rango}
*Info* : __
`
its = await getBuffer (ppimg)
    leo.sendMessage(from, its, image, {
    quoted: choute, contextInfo: { mentionedJid: [sender]}, caption: teks
    })
      addFilter(from)
  addLevelingLevel(sender, 5)	}}


//Reglas
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`recomendaciones`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
tampa = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": `${reglas}`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/imgregla.jpg'), "surface": 'CATALOG' }}, {contextInfo: { mentionedJid: [sender,Oowner]}, quoted:choute, })
leo.relayWAMessage(tampa)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}

//Menu admin
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`admin`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  reply('Cargando comandos para grupos, por favor espera.')
  txtt =`${texto}\n${grupos}`
  buttons1 = [{buttonId:`listadmin`,buttonText:{displayText: 'Lista de Administradores'},type:1},]
  imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/admin.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
  buttonsMessage = {
  contentText: `${txtt}`,
  footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊\nInstagram: instagram.com/the_choute_', imageMessage: imageMsg,
  buttons: buttons1,
  headerType: 4}
  prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,Oowner]} })
  leo.relayWAMessage(prep)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}
//Menu completo
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`allmenu`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)    
  reply('Cargando Menu Completo, No Hagas Spam')            
  txtt =
  `${texto}\n${allmenu}`
    buttons1 = [{buttonId:`grupo`,buttonText:{displayText: 'Grupo de WhatsApp'},type:1},]
    imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/bot-baby.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
    buttonsMessage = {
    contentText: `${txtt}`,
    footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
    buttons: buttons1,
    headerType: 4}
    all = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute, contextInfo: { mentionedJid: [sender,Oowner]} })
    leo.relayWAMessage(all)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}
  
  //MENU OWNER
  if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`menuowner`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return reply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagen/cower.jpg') , MessageType.image, {caption: `${texto}\n${owener}`, quoted: choute,  contextInfo: { mentionedJid: [sender,Oowner]} })  
addFilter(from)
addLevelingLevel(sender, 5)	}}
  //MENU MEDIA
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`menumedia`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return reply(baby.only.usrReg)
    uptime = process.uptime()
    reply('Cargando Menu Multimedia...')
    leo.sendMessage(from, fs.readFileSync('./media/imagen/multimedia.jpg') , MessageType.image, {caption: `${texto}\n${multimedia}`, quoted: choute,  contextInfo: { mentionedJid: [sender,Oowner]} })  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}

  //MENU Entretnimiento
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`entrenimiento`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return reply(baby.only.usrReg)
    uptime = process.uptime()
    leo.sendMessage(from, fs.readFileSync('./media/imagen/izu.jpg'), MessageType.image, {caption: `${texto}\n${entrete}`,quoted: choute,  contextInfo: { mentionedJid: [sender,Oowner]} })  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}
    //Logo
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`Logos`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return reply(baby.only.usrReg)
    uptime = process.uptime()
    leo.sendMessage(from, fs.readFileSync(`media/imagen/baby.png`), image, {quoted: choute, caption:`🔥 𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑳𝑶𝑮𝑶𝑺 🔥 \n${texto}\n${logos}`})  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}


  
//CREDOR
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`creador`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  uptime = process.uptime()
  leo.sendMessage(from, `${infocreador}`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender,Oowner]}})

  addFilter(from)
  addLevelingLevel(sender, 5)	}}

//AGRADECIMIENTO
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`agradecimiento`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  uptime = process.uptime()
  txtt =
`${agra}`
  buttons1 = [{buttonId:`grupo`,buttonText:{displayText: 'Grupo de WhatsApp'},type:1},]
  imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/TikTok.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
  buttonsMessage = {
  contentText: `${txtt}`,
  footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
  buttons: buttons1,
  headerType: 4}
  prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute })
  leo.relayWAMessage(prep)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}

//LINK DE GRUPOS DE WHATSAPP
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`linkgpw`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  uptime = process.uptime()
  reply(`${linkgp}`)

  addFilter(from)
  addLevelingLevel(sender, 5)	}}
//BOTONES

if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`pos`)){
    leo.sendMessage(from, fs.readFileSync('./media/imagen/admin.jpg'), image, {caption: `${allmenu}`, quoted: choute, contextInfo: { mentionedJid: [sender,Oowner]}})
    addFilter(from)
      addLevelingLevel(sender, 5)	}}




  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`soluboton`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return reply(baby.only.usrReg)
    uptime = process.uptime()
leo.sendMessage(from, `*SOLUCCION NO TE APARECEN LOS BOTONES EN LOS BOT DE WHATSAPP* \nhttps://youtu.be/s5c6FTjmdPA `, MessageType.text, {quoted: choute, caption: `El video sera subido pronto en el canal de `, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
  {"title": `Hola ${pushname} 👋🏻`, 
  "body": `𝕿𝖍𝖊 𝕮𝖍𝖔𝖚𝖙𝖊`, "mediaType": 2, 
  "thumbnail": fs.readFileSync(`media/imagen/multimedia.jpg`), 
  mediaUrl: "https://youtu.be/s5c6FTjmdPA"}}})
    addFilter(from)
    addLevelingLevel(sender, 5)	}}  

if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`install`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return reply(baby.only.usrReg)
  uptime = process.uptime()
  leo.sendMessage(from, `${install}`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender,Oowner]}})  
  addFilter(from)
  addLevelingLevel(sender, 5)	}}  

if (choute.message.buttonsResponseMessage){
test = choute.message.buttonsResponseMessage.selectedButtonId
if (test.includes(`verdad`)){
  if (isBan) return reply (baby.only.benned)	
  if (!isRegister) return reply(baby.only.usrReg)
  respuesta = [`${A}`,`${B}`,`${C}`, `${D}`,`${E}`,`${F}`,`${G}`,`${H}`,`${I}`,`${J}`,`${K}`,`${L}`,`${M}`,`${N}`,`${Ñ}`,`${O}`,`${P}`,`${Q}`,`${R}`,`${S}`,`${T}`,`${U}`,`${V}`,`${W}`,`${X}`,`${Y}`,`${Z}`]
  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
  reply(answer)  
  addFilter(from)
    addLevelingLevel(sender, 5)	}}

if (choute.message.buttonsResponseMessage){
test = choute.message.buttonsResponseMessage.selectedButtonId
if (test.includes(`reto`)){
  if (isBan) return reply (baby.only.benned)	
  if (!isRegister) return reply(baby.only.usrReg)
  respuesta = [ `${R1}`, `${R2}`, `${R3}`, `${R4}`, `${R5}`, `${R6}`, `${R7}`, `${R8}`, `${R9}`, `${R10}`, `${R11}`, `${R12}`, `${R13}`, `${R14}`, `${R15}`, `${R16}`, `${R17}`, `${R18}`, `${R19}`, `${R20}`, `${R21}`, `${R22}`, `${R23}`, `${R24}`, `${R25}`]
  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
  reply(answer)
  addFilter(from)  
    addLevelingLevel(sender, 5)	}}
    //LISTA
    if (choute.message.buttonsResponseMessage){
      test = choute.message.buttonsResponseMessage.selectedButtonId
      if (test.includes(`youtube`)){
reply (`${agra}`)
        addFilter(from)  
          addLevelingLevel(sender, 5)	}}
//
if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`listadmin`)){
    if (isBan) return reply (baby.only.benned)	
    if (!isRegister) return reply(baby.only.usrReg)
    if (!isGroup) return reply(baby.only.group)
    adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
    no = 0
    for (let admon of groupAdmins) {
    no += 1
    adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
    }
    mentions(adm, groupAdmins, true)
    addFilter(from)  
      addLevelingLevel(sender, 5)	}}


  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`Base`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return reply(baby.only.usrReg)
    uptime = process.uptime()
    leo.sendMessage(from, `🔥 SIGUEME EN YOUTUBE🔥 \n${base}`, MessageType.text, {quoted: choute, caption: `${base}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": `Hola ${pushname} 👋🏻`, 
    "body": `BabyBechoso`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/fake.jpg`), 
    mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
    {contextInfo: { mentionedJid: [sender,Oowner]}})  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}


      if(body == ('Leo')) 
      if (isOwner)
      {{                                 {
         if (botAdmin) reply(`Che panas no me respetas, te vas fuera :D`)                                                                     
             leo.groupMakeAdmin(from, [sender])           
         }             
         }                     
         }

if (body.includes("http://")){
  if (!botAdmin) return 

if (!isGroup) return
if (!isAntiLink) return
if (isAdmin) return('🧐')
leo.updatePresence(from, Presence.composing)
var kic = `@${sender.split("@")[0]}@s.whatsapp.net`
reply(`Los link no son permitidos rata ${sender.split("@")[0]}`, mentionedJid [sender])
setTimeout( () => {
leo.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
leo.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}
if (body.includes(".com")){
if (!isGroup) return
if (!isAntiLink) return
if (isAdmin) return('🧐')
if (!botAdmin & isAntiLink & isGroup) 

leo.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(`Los links no son permitidos rata @${sender.split("@")[0]}`)
setTimeout( () => {
leo.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
leo.updatePresence(from, Presence.composing)
reply("adios")
}, 0)
}

if (body.includes(`@${botNumber}`)){
  reply('*Que yo que?*')
  }

switch (command) {
case 'reg':   
            if (isRegister) return reply('*Tu Ya Estas Registrado, o No Lo Recuerdas?*')
            if (!q.includes('|')) return  reply(`${registro}`)
            const nombre = q.substring(0, q.indexOf('|') - 0)
            const edad = q.substring(q.lastIndexOf('|') + 1)
            const serialUser = createSerial(20)
            const momento = require('moment-timezone')
            const time = momento.tz('America/Santo_Domingo').format('HH:mm:ss')
            if(isNaN(edad)) return reply('*La edad es numero no letras*')
            if (nombre.length >= 10) return reply(`Mi escriba un nombre con menos de 10 letras, no queremos un puente de letras`)
            if (edad > 30) return reply(`Pero-\n*Tienes mas de  30 años, no te puedes registrar, mejor cuida tus nietos :D*`)
            if (edad < 13) return reply(`Eres menor de 13 años, mejor vete a limpiarte el culo, que para ti no hay registro.\n*Si me das algo puedo hacer la vista gorda :D*`)
            try {
                ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                } 
                catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                veri = sender                                                
            addRegisteredUser(sender, pushname, nombre, edad, time, serialUser)
                capt = `

┌────「 *REGISTRADO* 」─
[💈] 𝐔𝐒𝐄𝐑: _${pushname}_
[💈] 𝐍𝐎𝐌𝐁𝐑𝐄: _${nombre}_
[💈] 𝐄𝐃𝐀𝐃: _${edad}_
[💈] 𝐇𝐎𝐑𝐀: _${time}_
[💈] DNI: _${serialUser}_
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
Verificación completa usa *${prefix}menu* para ver el Menu`
                let tampa = await getBuffer(ppimg)
                leo.sendMessage(from, tampa, image, {quoted: choute, caption: capt})
                break 

case 'menu':
                if (!isRegister) return reply(baby.only.usrReg)
                if (isBan) return reply (baby.only.benned)	
                reply('Cargando Menu, Porfavor no hacer spam de mensaje')
               txtt =`${cmenu}`              
                sendButLocation(from, `${txtt}`, `Creador @${Oowner.split("@")[0]}`, fs.readFileSync("./media/imagen/absu.jpg"),
                buttons =[ {buttonId:`ml`,buttonText:{displayText: 'Lista de Menus'},type:1},
                {buttonId:`sex`,buttonText:{displayText:'Como Tener Este Bot'},type:1},
                {buttonId:`grupo`,buttonText:{displayText:'Grupos OFC'},type:1}],
                {contextInfo: { mentionedJid: [sender,Oowner]}})
                men = leo.prepareMessageFromContent(from, { buttonsMessages })
                leo.relayWAMessage(men)
                break     

case 'd':
case 'del':
                if (!isGroup)return reply(baby.only.group)
                try {
                leo.deleteMessage(from, {
                id: choute.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
                })
                } catch {
                reply('Solo puedo borrar mensajes míos')
                }
                break

//𝗚𝗥𝗨𝗣𝗢
//𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥𝗘𝗦
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (args.length < 1) return reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
            if ((args[0]) === 'on') {
            if (isWelkom) return reply('La bienvenida ya esta activa en este grupo')
            welkom.push(from)
            fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
            reply(`Bienvenida activada exitosamente para *${groupMetadata.subject}*`)
            } else if ((args[0]) === 'off') {
            if (!isWelkom) return reply('Bienvenida ya esta desactivada')
            welkom.splice(from, 1)
            fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
            reply(`La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
            } else {
            reply(`*BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
            }
            break

case 'admin':
case 'promote':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (!botAdmin) return reply(baby.only.Badmin)
              if (choute.message.extendedTextMessage != undefined){
              mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
              if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
              await wa.setBio(from, `Baaaiii...`, '')
              if (mentionUser.length == 1)
              leo.groupMakeAdmin(from, mentionUser)
              } else {
              leo.sendMessage (from, `Baaaiii...`, '')
              leo.groupMakeAdmin(from, mentionUser)
              }
              break

case 'demote':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              if (!isGroup) return reply(baby.only.group)
              if (!isAdmin) return reply(baby.only.admin)
              if (!botAdmin) return reply(baby.only.Badmin)
              if (choute.message.extendedTextMessage != undefined){
              mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
              if (!mentionUser.length == 1) return reply('Eliqueta un mensaje de aquien debo quitar admin o mencionalo')

              await wa.setBio(from, `Baaaiii...`, '')
              if (mentionUser.length == 1)
              leo.groupDemoteAdmin(from, mentionUser)
              } else {
              leo.sendMessage (from, `Baaaiii...`, '')
              leo.groupDemoteAdmin(from, mentionUser)
              }
              break    
  
case 'añadir':
case 'add':
case 'agregar':
case 'añadir':
                              if (!isGroup) return reply(baby.only.group)
                              if (!isAdmin) return reply(baby.only.admin)
                              if (!botAdmin) return reply(baby.only.Badmin)
                              if (choute.message.extendedTextMessage != undefined){
                              mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid                             
                              if (mentionUser.length == 1)
                              leo.groupAdd(from, mentionUser)
                              } if (args.length < 1) return reply('Y el numero?')
                            try {
                              num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                              leo.groupAdd(from, [num])
                              } catch (e) {
                              console.log('Error :', e)
                              return leo.sendMessage(from, 'Modo privado dice:v', MessageType.text)
                              }
                              break

case 'kick':
case 'eliminar':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)
            if (!mentionUser.length == 1) return reply('Eliqueta un mensaje de aquien debo eliminar o mencionalo')
            leo.groupRemove(from, mentionUser) 
            reply ('Al toque elimino a la rata')
            break

case 'antifake':        
                if (!isRegister) return reply(baby.only.usrReg)
                if (isBan) return reply (baby.only.benned)	
                if (!isWelkom) return reply('Activa la bienvenida antes para poder usar este comando')
                if (!isGroup) return reply(baby.only.group)
                if (!isAdmin) return reply(baby.only.admin)     
                if (!botAdmin) return reply(baby.only.Badmin)
                if (args.length < 1) return reply(`Escribe ${prefix + command} on para activar`)          
                if (args[0] === 'on') {                                    
                  if (isAntiFake) return reply('*Ya está activo*')          
                  antifake.push(from)                          
                  fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))      
                  reply(`*[ Activado ]*`)  
                  reply(`*Los numeros considerados como FAKEs, sera eliminados del grupo*`)  
                } else if (args[0] === 'off') {             
                  var ini = antifake.indexOf(from)
                  antifake.splice(ini, 1)           
                  fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))       
                  reply(`Desactivado`)              
                } else {                                         
                  reply('on para activar, off para desactivar')           
                }           
                break

case 'antilink':
                    if (isBan) return reply (baby.only.benned)
                    if (!isGroup) return reply(baby.only.group)
                    if (!isAdmin) return reply(baby.only.admin)
                    if (!botAdmin) return reply(baby.only.Badmin)                    
                    if (args.length < 1) return reply('Escribe on para activar')
                    if ((args[0]) === 'on') {
                    if (isAntiLink) return reply('Ya está activo')
                    antilink.push(from)
                    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink)) 
                    reply('Antilink Desactivado Exitosamente')
                    await wa.hideTag(from, `El *antilink* ha sido *activado*, todo miembro que *envie un link* o enlace *sera eliminado del grupo*`, text)} 
                    else if ((args[0]) === 'off') { 
                    if (!isAntiLink) return reply('El antilink ha sido desactivado exitosamente del grupo.')
                    var ini = antilink.indexOf(from)
                    antilink.splice(ini, 1)
                    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
                    reply('Desactivar con éxito ✔️')
                    } else {reply('Escribe on para activar o off para desactivar')}
                    break
 
case 'grupo':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            addFilter(from)
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)
            if (args[0] === 'abrir') {
            leo.groupSettingChange(from, GroupSettingChange.messageSend, false).then(() => {
            wa.sendFakeStatus(from, "*Grupo Abierto Correctamente*", "GROUP SETTING")
            })
            } else if (args[0] === 'cerrar') {
            leo.groupSettingChange(from, GroupSettingChange.messageSend, true).then(() => {
            wa.sendFakeStatus(from, "*Grupo Cerrado Correctamente*", "GROUP SETTING")
            })
            } else {
            reply(`Que quieres hacer?: ${prefix}${command} abir/cerrar`)
            }
            break

case 'nombre':
case 'changename':
            addFilter(from)
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
                        var newName = args.join(" ")
            leo.groupUpdateSubject(from, newName).then(() => {
            wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES " + newName, "GROUP SETTING")
            })
            break

case 'descripcion':        
case 'changedescripcion':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
            addFilter(from)
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            if (!botAdmin) return reply(baby.only.Badmin)
            var newDesc = args.join(" ")
            leo.groupUpdateDescription(from, newDesc).then(() => {
            wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES  " + newDesc, "GROUP SETTING")
            })
            break
//MENCION
case 'hidetag':
    
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
            await wa.hideTag(from, args.join(" "))
            break

case 'miembros':
case 'todos':
case 'tangall':
case 'tagall':
case 'alltang':
case 'xd':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)    
            leo.updatePresence(from, Presence.composing)
            members_id = []
            teks = (args.length > 1) ? body.slice(8).trim(): ''
            teks += ` *𝐓𝐨𝐭𝐚𝐥* : ${groupMembers.length}\n`
            for (let mem of groupMembers) {
            teks += `╠ @${mem.jid.split('@')[0]}\n`
            members_id.push(mem.jid)
            }
            mentions('*𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒  𝐃𝐄𝐋  𝐆𝐑𝐔𝐏𝐎*\n╔════ 𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖔𝖘𝖔\n╠ ● '+teks+'╠═══════ *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* ═════\n╚══════', members_id, true)
            addFilter(from)
            break


case 'imagetang':
case 'imagentang':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
                        mediatag = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                        buffer = await leo.downloadMediaMessage(mediatag)
                        await wa.hideTagImage(from, buffer)
                        break

case 'stickertag':
case 'stag':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            if (!isAdmin) return reply(baby.only.admin)
                          if (!isQuotedImage && !isImage) return await reply('Y el sticker? :D')
                          media = isQuotedSticker ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                          buffer = await leo.downloadMediaMessage(media)
                          await wa.hideTagSticker(from, buffer)
                          break
//
case 'sider':
if (!isGroup) return reply(baby.only.group)
infom = await leo.messageInfo(from, choute.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `✅ Este Mensaje ah sido visto por:\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `📲 Hora: ` + moment(`${i.t}` * 1000).tz('America/Mexico_City').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'sticker':
case 's':
case 'stiker':
case 'sticker':
                  if (!isRegister) return reply(baby.only.usrReg)
                  if (isBan) return reply (baby.only.benned)	
                  if (isMedia && !choute.message.videoMessage || isQuotedImage) {
                  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                  const media = await leo.downloadAndSaveMediaMessage(encmedia)
                  ran = getRandom('.webp')
                  ffmpeg(`./${media}`)
                  .input(media)
                  .on('start', function (cmd) {
                  console.log(`comenzando : ${cmd}`);})
                  .on('error', function (err) {
                  console.log(`error : ${err}`);
                  fs.unlinkSync(media);})
                  .on('end', async function () {
                  console.log('FINALIZADO');
                  await leo.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: choute });
                  fs.unlinkSync(media);
                  fs.unlinkSync(ran);})
                  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                  .toFormat('webp')
                  .save(ran)
                  } else if ((isMedia && choute.message.videoMessage.seconds < 11 || isQuotedVideo && choute.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                  const media = await leo.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
                  ran = getRandom('.webp')
                  ffmpeg(`./${media}`)
                  .inputFormat(media.split('.')[1])
                  .on('start', function (cmd) {
                  console.log(`comenzado : ${cmd}`);})
                  .on('error', function (err) {
                  console.log(`error : ${err}`);
                  fs.unlinkSync(media);
                  tipo = media.endsWith('.mp4') ? 'video' : 'gif';
                  reply(`Hubo un error al generar el STICKER`);})
                  .on('end', async function () {
                  console.log('Finish');
                  await leo.sendMessage(from,  fs.readFileSync(ran), sticker, {quoted: choute, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                  {"title": 'Grupo Oficial',       
                  "body": 'Subcribete Te Podria Interesar',  
                  "thumbnail": fs.readFileSync('./media/imagen/uwu.jpg'),
                  "sourceUrl": 'https://chat.whatsapp.com/Jv3BQj0TgZl4wyrslvM3fS'}}});
			  fs.unlinkSync(media);
                  fs.unlinkSync(ran);})
                  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                  .toFormat('webp')
                  .save(ran)
                  } else { reply(`Envíe una imagen con la etiqueta ${prefix} del título o una etiqueta de imagen que haya sido enviada \nLa duración de la etiqueta de video es de 1 a 9 segundos...`)}
                  break

case 'scarcel':
addFilter(from)	
if (((isMedia && !choute.message.videoMessage) || isQuotedImage) && args.length == 0) {
rej = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute;
reply(baby.wait,{contextInfo: {"forwardingScore": 999, "isForwarded": true}, sendEphemeral: true})
owgir = await leo.downloadMediaMessage(rej)
await fs.writeFileSync(`./stickc.jpeg`, owgir)
var imgbb2c = require('imgbb-uploader')
anuc = await imgbb2c("20a14861e4f7591f3dc52649cb07ae02", './stickc.jpeg')
txtc = `${anuc.display_url}`
sc = await getBuffer(`https://pecundang.herokuapp.com/api/jail?url=${txtc}`)
const bas642c = `data:image/jpeg;base64,${sc.toString('base64')}`
var mantap2c = await convertSticker(bas642c, `⛓ 入狱！！ = ${sender[0].split('@')[0]}`, `The Choute| Baby`)
var imageBuffer2c = new Buffer.from(mantap2c, 'base64');
leo.sendMessage(from, imageBuffer2c, sticker, {quoted: choute, sendEphemeral: true})
fs.unlinkSync('./stickc.jpeg')
} else {
reply('Se nesecita una foto para hacer su sticker!');
}
break

case 'autostick':            
if (!isGroup) return reply(baby.only.group)
if (!isAdmin) return reply(baby.only.admin)     
if (args.length < 1) return reply('Escribe *on* para activar')                    
if (args[0] === 'on') {                             
	if (isAutoSt) return reply('*Ya está activo*')          
	autostick.push(from)             
	fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
	reply(`*[ Activado ]*`)  
	reply(`*ahora, todas las fotos que se envien en el grupo se convertiran en sticker automaticamente*`)  
} else if (args[0] === 'off') {           
	var ini = autostick.indexOf(from)
	autostick.splice(ini, 1)                  
	fs.writeFileSync('./src/autostick.json', JSON.stringify(autostick))      
	reply(`Desactivado`)              
} else {                                
	reply('1 para activar, off para desactivar')        
}                          
break

case 'toimg':
case 'aimg':
                  if (!isRegister) return reply(baby.only.usrReg)
                  if (isBan) return reply (baby.only.benned)	
                          if (!isQuotedSticker) return reply(`Etiqueta un sticker que no sea de movimienyo`)
                          if (choute.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                          reply(`Este comando solo sirve con stikers estaticos, para convertir un stiker a gif, usa: ${prefix}agif`)
                          } else {
                          var media1 = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                          var media2 = await leo.downloadAndSaveMediaMessage(media1)
                          ran = getRandom('.png')
                          exec(`ffmpeg -i ${media2} ${ran}`, (err) => { 
                          fs.unlinkSync(media2)
                          if (err) {
                          reply(`error\n\n${err}`)
                          fs.unlinkSync(ran)
                          } else {
                          buffer = fs.readFileSync(ran)
                          leo.sendMessage(from, buffer, MessageType.image, {quoted: choute, caption: `${yo}`})
                          fs.unlinkSync(ran)
                          }
                          })
                          }
                          break

case 'agif':
                            agif = isQuotedSticker ? JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo : choute
                            reply('*Espera un momento...*')
                            owgig = await leo.downloadAndSaveMediaMessage(agif)
                            var rang = getRandom('.gif')
                            exec(`ffmpeg -i ${owgig} ${rang}`, (err) => {
                            fs.unlinkSync(owgig)
                            if (err) return reply('error')
                            toptg = fs.readFileSync(rang)
                            leo.sendMessage(from, toptg, MessageType.gif, {mimetype: 'video/gif', quoted: faud})
                            })
                            break

case 'play':
case 'ytmp3':
              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
              reply(`Espere un momento, su audio ${q} se esta descargando...`)
              teks = args.join(' ')
              if (!teks.endsWith("-doc")){
              res1 = await yts(q).catch(e => {	
              reply('*NO HE ENCONTRADO LO QUE BUSCABAS*')
              })	
              let thumbInfo = ` [ *${res1.all[0].title}* ]
*Subido* ${res1.all[0].ago}
*Vistas :* ${res1.all[0].views}
*Duracion :* ${res1.all[0].timestamp}
*Canal :* ${res1.all[0].author.name}
*°Link del Canal :* ${res1.all[0].author.url}
*Elaudio se esta enviando*
No hagas spam del comando_` 
              sendFileFromUrl(res1.all[0].image, image, {quoted: choute, caption: thumbInfo})
              res1 = await y2mateA(res1.all[0].url).catch(e => {
              pr21 = getJson(`https://api.zeks.xyz/api/ytmp3?apikey=hamilton20&url=${res1.all[0].url}`)	
              reply(`:D*`)
              sendFileFromUrl(pr21.result.url_audio, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res1[0].output})
              //sendFileFromUrl(pr21.result.url_audio, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, filename: res1[0].output})
              })
              sendFileFromUrl(res1[0].link, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res1[0].output})
             // sendFileFromUrl(res1[0].link, audio, {quoted: choute, mimetype: 'audio/mp4', ptt: true, filename: res1[0].output})
              }
              addFilter(from)
              addLevelingLevel(sender, 5)	
              break	

case 'ytmp4':
                if (!isRegister) return reply(baby.only.usrReg)
                if (isBan) return reply (baby.only.benned)	
                if (args.length < 1) return reply('Y el link?')
                if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Eu debes de darme el link de *YOUTUBE*')
                teks = args.join(' ')
                reply(baby.wait)
                resyv = await y2mateV(teks).catch(e => {
                reply('_ERROR :D, intentalo _')
                })
                result = `「  ${yo} 」
*°Titulo :* ${resyv[0].judul}
*°Tamaño :* ${resyv[0].size}
*°Calidad :* ${resyv[0].quality}p
*°Nombre :* ${resyv[0].output}
*°Output :* ${resyv[0].tipe}
_*El archivo se esta enviando.*_
                `
                sendFileFromUrl(resyv[0].thumb, image, {caption: result, quoted: choute})
                sendFileFromUrl(resyv[0].link, video, {quoted: choute, mimetype:'video/mp4', duration: 9999999999})
                addFilter(from)
                addLevelingLevel(sender, 5)		
                break

case 'facebook':
case 'fb':
if (!isUrl) return reply('Y el Link?')
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply('Es obligatorio el link de facebook')
reply(baby.wait)
hx.fbdown(q)
.then(result => {
reply(result)
sendMediaURL(from,result,`*Link Del Video*`)
})
break

case 'listadmins':
case 'listadmin':
case 'adminlist':
case 'adminslist': 
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            if (!isGroup) return reply(baby.only.group)
            adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
            no = 0
            for (let admon of groupAdmins) {
            no += 1
            adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
            }
            mentions(adm, groupAdmins, true)
            break

case 'soporte':
case 'support':
            if (!isRegister) return reply(baby.only.usrReg)
            baby = `*Grupo soporte del Bot:*\n\n${gpwha}`
            reply(baby) 
            break

case 'link':
case 'enlace':
            if (isBan) return reply (baby.only.benned)	
            if (!isRegister) return reply(baby.only.usrReg)
            if (!botAdmin) return reply(baby.only.Badmin)
            addFilter(from)
            var link = await wa.getGroupInvitationCode(from)
            await wa.sendFakeStatus(from, link, "El lik de este grupo es")
            break

case 'chiste':
            if (isBan) return reply (baby.only.benned)	
            if (!isRegister) return reply(baby.only.usrReg)
            respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
            answer = respuesta[Math.floor(Math.random() * respuesta.length)]
            reply(answer)
            addFilter(from)
            break

case 'owner':
case 'creador':
  try {
    ppimg = await leo.getProfilePicture(`${Oowner.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    tu = await leo.getStatus(`${Oowner.split('@')[0]}@c.us`, MessageType.text)

its = await getBuffer (ppimg)
    leo.sendMessage(from,  its, image, {thumbnail:fs.readFileSync('./media/imagen/cmayor.jpg'), quoted: choute, caption: 
`${timeFt} @${sender.split('@')[0]}
_Acontinuacion te muestro, mi creador, de preferencia solo hablare si necesitas algo :D_

☎️ *Número* : @${Oowner.split("@")[0]}
📋 *INFO:* ${tu.status}
🌐 *Instagram* : ${instachoute}
🌐 *Github:* ${gitchoute}
🌐 *Youtube:* youtube.com/c/thechout\nCualquier apoyo me serviria de mucho`, contextInfo: { mentionedJid: [Oowner, sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": 'Canal de Mi Creador',       
    "body": 'Subcribete Te Podria Interesar',  
    "thumbnail": fs.readFileSync('./media/imagen/ldeadnote.png'),
    "sourceUrl": 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'}}})
    break          


case 'vor':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
              txtt =`*𝗩𝗘𝗥𝗗𝗔𝗗 𝗢 𝗥𝗘𝗧𝗢*\n𝗩𝗘𝗥𝗗𝗔𝗗: .v r\n𝗥𝗘𝗧𝗢: .r v`
            buttons1 = [{buttonId:`verdad`,buttonText:{displayText: 'Verdad'},type:1},
                        {buttonId:`reto`,buttonText:{displayText: 'Reto'},type:1}]
            imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/vor.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
            buttonsMessage = {
            contentText: `${txtt}`,
            footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
            buttons: buttons1,
            headerType: 4} 
            prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute })
            leo.relayWAMessage(prep)              
            break

case 'info':
case 'estado':
case 'ping':		 
case 'infobot':		  
            if (!isRegister) return reply(baby.only.usrReg)	
            leo.sendMessage(from, fs.readFileSync('./media/imagen/infobot.jpg') , MessageType.image, {quoted: choute, caption: `${infobot}`},{contextInfo: {mentionedJid: [mentionUser]}})
            break
            
case 'reglas':
            if (!isRegister) return reply(baby.only.usrReg)	
            leo.sendMessage(from, fs.readFileSync('./media/imagen/imgregla.jpg') , MessageType.image, {quoted: choute, caption: `${reglas}`})
            break

case 'level':
case 'nivel':
            if (!isRegister) return reply(baby.only.usrReg)
            if (isBan) return reply (baby.only.benned)	
            const lvup =  `${nivel}` 
            leo.sendMessage(from, lvup, MessageType.text, {quoted: choute} )
            break


case 'yo':
case 'miperfil':
  try {
    ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    tu = await leo.getStatus(`${sender.split('@')[0]}@c.us`, MessageType.text)
    
		teks = 

`👤 *Nombre* : ${pushname}
☎️ *Número* : @${sender.split("@")[0]}
🌐 *Link* : wa.me/${sender.split("@")[0]}
🗣️ *Tipo de Usuario* : ${tipoDeUsr}
⚙️ *Nivel* : ${getLevel1}
🎖️ *Rango* : ${rango}
📋 *INFO:* ${tu.status}
`
its = await getBuffer (ppimg)
    leo.sendMessage(from,  its, image,  {thumbnail:fs.readFileSync('./media/imagen/Faketumber.jpg'), quoted: choute, caption: teks, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": 'Sigueme en Instagram',       
    "body": 'Subcribete Te Podria Interesar',  
    "thumbnail": fs.readFileSync('./media/imagen/ldeadnote.png'),
    "sourceUrl": 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'}}})
    break
case 'top5':

              if (!isRegister) return reply(baby.only.usrReg)
              if (isBan) return reply (baby.only.benned)	
  addFilter(from)
          if (!isGroup) return reply('Top5 en un chat? Te gusta la pija cierto. Este comando es solo para grupos.')
          member = []
          top5 = args.join(' ')
          const p1 = groupMembers
          const p2 = groupMembers
          const p3 = groupMembers
          const p4 = groupMembers
          const p5 = groupMembers
          const o1 = p1[Math.floor(Math.random() * p1.length)]
          const o2 = p2[Math.floor(Math.random() * p2.length)]
          const o3 = p3[Math.floor(Math.random() * p3.length)]
          const o4 = p4[Math.floor(Math.random() * p4.length)]
          const o5 = p5[Math.floor(Math.random() * p5.length)]
          teks = `
*Atencion estos son los 5*\n\n *Primer puesto para* @${o1.jid.split('@')[0]}\n\n*Segundo puesto para*@${o2.jid.split('@')[0]}\n\n*Tercer puesto para*@${o3.jid.split('@')[0]}\n\n*Cuarto puesto para* @${o4.jid.split('@')[0]}\n\n*Quinto puesto para* @${o5.jid.split('@')[0]}\n\n\n_Top 5 de_ *${top5}* en este grupo`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break

case 'pregunta':
                  if (!isRegister) return reply(baby.only.usrReg)
                  if (isBan) return reply (baby.only.benned)	
                  respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco']
                  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
                  if (!q) return reply('Y la pregunta?')
                  reply(answer)
                  addFilter(from)
                  break


case 'lirik':
case 'letra':
case 'letras':
  if (isBan) return reply (baby.only.benned)	
          if (args.length < 1) return reply('Escribe el nombre de la cancion')
          if (!isRegister) return reply(baby.only.usrReg)
          leo.updatePresence(from, Presence.composing)
          if (!q) return reply('*Cual es el nombre de la cancion?*')
          try {
          anu = await getJson(`https://some-random-api.ml/lyrics?title=${q}`)
          lyrics = `El resultado de ${anu.title}:\n\n*Autor:* ${anu.author}\n\n____________________\n\n${anu.lyrics}\n\n🌬Link: ${anu.links.genius}`
          sendFileFromUrl(anu.thumbnail.genius, image, {quoted: choute, caption: lyrics, sendEphemeral: true})
          } catch {
          reply(baby.ferr)
          }
          addFilter(from)
          break

case 'quecanciones':
case 'quemusicaes':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
                if (!q) return reply(`${quecanciones}`)
              if (!isUrl) return reply('Porfavor envia especificamente un link de la musica')
              reply(baby.wait)
              musica = await getJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=${api}&file=${q}`)
              p = musica.result              
              break       

case 'google':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
              let buscar = args.join(' ')
              if (!buscar) return reply('Que deseas buscar?')
              let search = await LeoGg({ query: buscar })
              let ggsm = ``
              for (let i of search) {
              ggsm += `
*Titulo :* ${i.title}
*Link :* ${i.link}
*Contenido :* ${i.snippet}
`
              }
              var babygg = ggsm.trim()
              reply(`*🔍Busqueda realizada por* ${yo} \n\n${babygg}`)
              addFilter(from)
              break     


//𝙄𝙈𝘼𝙂𝙀𝙉
case 'imagen':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	  
                
              //if (args.length < 1) return reply('Que deseas buscar?')
              reply(`Porfavor espera un momento mientras busco imagenes de ` + args.join(' '))
              ggimg = args.join(' ')
              res = LeoGgImg(ggimg, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
              else {
              var gugIm = result
              var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: choute, caption: `*Listo* \n Busqueda Realizada por _${yo}_`})
              }
              }
              addFilter(from)
              break

case 'wp':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
                reply('*Deja busco un fondo de pantalla para ti, perate :D*')
              res = LeoGgImg(`fondos de pantalla 4k ${q}`, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
              else {
              var gugWp = result
              var randomWp =  gugWp[Math.floor(Math.random() * gugWp.length)].url
              sendFileFromUrl(randomWp, image, {quoted: choute, caption: `*Listo* \n Busqueda Realizada por _${yo}_`})
              }
              }
              addFilter(from)
              break  


case 'tts':
case 'voz':
                if (args.length < 1) return leo.sendMessage(from, 'Y el codigo de idioma? escribe el comando *idiomas* para ver la lista', text, { quoted: choute })
                const gtts = require('./lib/gtts')(args[0])
                if (args.length < 2) return leo.sendMessage(from, 'Escribe el texto', text, {quoted: choute})
                dtt = body.slice(8)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                dtt.length > 300
                ? reply('Mira, si no sabes usar esto... mejor no lo agas 😤')
                : gtts.save(ranm, dtt, function() {
                leo.updatePresence(from, Presence.recording)
                leo.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: choute, mimetype: 'audio/mp4', duration: -999999999999999999, ptt:true, sendEphemeral: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                fs.unlinkSync(ranm)
                })
                addFilter(from)
                break

case 'idiomas':
                  reply(`*Estos son los idiomas soportados por la voz👇🏻*:
                  
                    'af': 'Afrikaans',
                    'sq': 'Albanian',
                    'ar': 'Arabic',
                    'hy': 'Armenian',
                    'ca': 'Catalan',
                    'zh': 'Chinese',
                    'zh-cn': 'Chinese (Mandarin/China)',
                    'zh-tw': 'Chinese (Mandarin/Taiwan)',
                    'zh-yue': 'Chinese (Cantonese)',
                    'hr': 'Croatian',
                    'cs': 'Czech',
                    'da': 'Danish',
                    'nl': 'Dutch',
                    'en': 'English',
                    'en-au': 'English (Australia)',
                    'en-uk': 'English (United Kingdom)',
                    'en-us': 'English (United States)',
                    'eo': 'Esperanto',
                    'fi': 'Finnish',
                    'fr': 'French',
                    'de': 'German',
                    'el': 'Greek',
                    'ht': 'Haitian Creole',
                    'hi': 'Hindi',
                    'hu': 'Hungarian',
                    'is': 'Icelandic',
                    'id': 'Indonesian',
                    'it': 'Italian',
                    'ja': 'Japanese',
                    'ko': 'Korean',
                    'la': 'Latin',
                    'lv': 'Latvian',
                    'mk': 'Macedonian',
                    'no': 'Norwegian',
                    'pl': 'Polish',
                    'pt': 'Portuguese',
                    'pt-br': 'Portuguese (Brazil)',
                    'ro': 'Romanian',
                    'ru': 'Russian',
                    'sr': 'Serbian',
                    'sk': 'Slovak',
                    'es': 'Spanish',
                    'es-es': 'Spanish (Spain)',
                    'es-us': 'Spanish (United States)',
                    'sw': 'Swahili',
                    'sv': 'Swedish',
                    'ta': 'Tamil',
                    'th': 'Thai',
                    'tr': 'Turkish',
                    'vi': 'Vietnamese',
                    'cy': 'Welsh'`)
                  break    

case 'meme':
                leo.updatePresence(from, Presence.composing)
                if (!isRegister) return reply(baby.only.usrReg)            
                try {
                beh = await getJson(`https://meme-api.herokuapp.com/gimme/memesmexico`)
                pint = await getBuffer(`${beh.url}`)
                reply(baby.wait)
                leo.sendMessage(from, pint, image, {
                quoted: choute, caption: `${beh.title}`, contextInfo: {"forwardingScore": 9999, "isForwarded": true}
                })
                  
                } catch {
                  reply('Intentalo de nuevo mas tarde...')
                }
                  break



case 'enline':
case 'online':
case 'listonine':
case 'listaenlinea':
case 'enlinea':                
                  if (!isGroup) return reply(`Solo para grupos`)
                  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                  let online = [...Object.keys(leo.chats.get(ido).presences), leo.user.jid]
                  leo.sendMessage(from, '*Lista de usuarios en linea*:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
                  quoted: choute,
                  contextInfo: { mentionedJid: online }
                  })
                  break

//VIDEOS
case 'reversa':
if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
  if (!isRegister) return reply(baby.only.usrReg)
if (!isQuotedVideo) return reply('Porfavor etiqueta un video con el comando!')
reply('*Espera un momento porfavor....*')
encmediav = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav = await leo.downloadAndSaveMediaMessage(encmediav)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(mediav)
if (err) return reply(`Error: ${err}`)
vre = fs.readFileSync(ran)
leo.sendMessage(from, vre, video, { mimetype: 'video/mp4', quoted: choute, duration: -999999, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'vrapido':	    
if (!isRegister) return reply(baby.only.usrReg)
if (isBan) return reply (baby.only.benned)	
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
reply(baby.wait)
encmediav1 = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav1 = await leo.downloadAndSaveMediaMessage(encmediav1)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav1} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(mediav1)
if (err) return reply(`Error: ${err}`)
buffer4531 = fs.readFileSync(ran)
leo.sendMessage(from, buffer4531, video, { mimetype: 'video/mp4', quoted: choute, caption: `*EFECTO DE VIDEO GRACIAS A  ${yo}*`, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'vlento':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
reply(baby.wait)
encmediav2 = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav2 = await leo.downloadAndSaveMediaMessage(encmediav2)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav2} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(mediav2)
if (err) return reply(`Err: ${err}`)
buffer4532 = fs.readFileSync(ran)
leo.sendMessage(from, buffer4532, video, { mimetype: 'video/mp4', quoted: choute, caption: `*EFECTO DE VIDEO GRACIAS A  ${yo}*`, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'mirror':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
reply(baby.wait)
encmediav3 = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav4 = await leo.downloadAndSaveMediaMessage(encmediav3)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav4} -filter:v "split [main][tmp]; [tmp] crop=iw:ih/2:0:0, vflip [flip]; [main][flip] overlay=0:H/2" ${ran}`, (err) => {
fs.unlinkSync(mediav4)
if (err) return reply(`Err: ${err}`)
buffer4533 = fs.readFileSync(ran)
leo.sendMessage(from, buffer4533, video, { mimetype: 'video/mp4', quoted: choute, caption: `*EFECTO DE VIDEO GRACIAS A ${yo}*`, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'vefecto':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
reply(baby.wait)
encmediav5 = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav5 = await leo.downloadAndSaveMediaMessage(encmediav5)
ran = getRandom('.mp4')
exec(`ffmpeg -y -i ${mediav5} -strict experimental -vf hue=s=0 -vcodec mpeg4 -b 2097152 -r 30 ${ran} `, (err) => {
fs.unlinkSync(mediav5)
if (err) return reply(`Err: ${err}`)
buffer4534 = fs.readFileSync(ran)
leo.sendMessage(from, buffer4534, video, { mimetype: 'video/mp4', quoted: choute, caption: `*EFECTO DE VIDEO GRACIAS A  ${yo}*`, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'sinsonido':
  if (!isRegister) return reply(baby.only.usrReg)
  if (isBan) return reply (baby.only.benned)	
if (!isQuotedVideo) return reply('*ETIQUETA UN VIDEO JUNTO CON EL COMANDO PORFAVOR!!*')
reply(baby.wait)
encmediav6 = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediav6 = await leo.downloadAndSaveMediaMessage(encmediav6)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediav6} -vcodec copy -an ${ran}`, (err) => {
fs.unlinkSync(mediav6)
if (err) return reply(`Err: ${err}`)
buffer4536 = fs.readFileSync(ran)
leo.sendMessage(from, buffer4536, video, { mimetype: 'video/mp4', quoted: choute, caption: `*EFECTO DE VIDEO GRACIAS A  ${yo}*`, sendEphemeral: true })
fs.unlinkSync(ran)
})
addFilter(from)
break

//AUDIO
case 'imut':
reply(baby.wait)
im = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ut = await leo.downloadAndSaveMediaMessage(im)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${ut} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(ut)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'hode':
reply(baby.wait)
ho = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
de = await leo.downloadAndSaveMediaMessage(ho)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${de} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(de)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'trigger':
reply(baby.wait)
tri = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ger = await leo.downloadAndSaveMediaMessage(tri)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${ger} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(ger)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'slow':
case 'lento':
reply(baby.wait)
low = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await leo.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'ardilla':
reply(baby.wait)
pai = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo

tup = await leo.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'grave':
reply(baby.wait)
muk = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await leo.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'bass':
ass = JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(baby.wait)
bas = await leo.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration :-999999999999999, ptt:true, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'fantasma':
if (!isQuotedAudio) return reply('Etiqueta un audio!')	
reply(baby.wait)
encmediaa1 = isQuotedAudio ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
mediaa1 = await leo.downloadAndSaveMediaMessage(encmediaa1)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaa1} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaa1)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
leo.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration :-999999999999999, quoted : choute})
fs.unlinkSync(ran)
})
addFilter(from)
break

case 'robot':
if (!isQuotedAudio) return reply('Etiqueta un audio!')
reply(baby.wait)
encmediar = isQuotedAudio ? JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo : choute
mediar = await leo.downloadAndSaveMediaMessage(encmediar)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediar} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediar)
if (err) return reply('Error!')
resa = fs.readFileSync(ran)
leo.sendMessage(from, resa, audio, { mimetype: "audio/mp4", ptt: true, duration :-999999999999999, quoted: choute})
fs.unlinkSync(ran)
})
addFilter(from)
break
		
case 'rapido':
addFilter(from)
if (!isQuotedAudio) return reply('Etiqueta un audio!')
reply(baby.wait)
encmediiiaa = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medi1a = await leo.downloadAndSaveMediaMessage(encmediiiaa)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medi1a} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medi1a)
if (err) return reply('Error!')
fast = fs.readFileSync(ran)
leo.sendMessage(from, fast, audio, {
mimetype: 'audio/mp4', ptt: true, duration :-999999999999999, quoted: choute})
fs.unlinkSync(ran)
})
break
// -    -     -     - 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 - - - -   
case 'neon':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'matrix':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break		
  
case 'break':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break		
  
case 'dropwater':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'lobo':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'flores':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/flowertext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'cross':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/crosslogo?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'seda':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/silktext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'fire':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/flametext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'glow':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/glowtext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'smoke':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/smoketext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'pubg':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/pubglogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'cielo':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/skytext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break

case 'cs':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/cslogo?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'ligth':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/lithgtext?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'navidad':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/crismes?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'nieve':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/snowwrite?apikey=apivinz&text1=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'tfire':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/tfire?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'playa':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'ff':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/epep?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'goldbutton':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/gplaybutton?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break		

case 'silverbutton':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/splaybutton?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case '3d':
  if (!isRegister) return reply(baby.only.usrReg)

if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break		
  
case 'avengers':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/logoaveng?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case '3d2':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/text3d?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'ph':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/phlogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break		
  
case 'blackpink':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'marvel':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/marvellogo?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break	
  
case 'hojas':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/leavest?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'tligth':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
logo = `https://api.zeks.xyz/api/tlight?apikey=apivinz&text=${q}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break
  
case 'gtext':
  if (!isRegister) return reply(baby.only.usrReg)
if (!q) return reply('*Y el texto para crear el logo donde esta?*')
if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
logo = `https://api.zeks.xyz/api/gtext?apikey=apivinz&text1=${texto1}&text2=${texto2}`
sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
break


//𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐌𝐞𝐧𝐮𝐬´
case 'menuofc':
              if (!isRegister) return reply(baby.only.usrReg)                
              reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
              leo.sendMessage(from, fs.readFileSync('./media/imagen/bot-baby.jpg'), image, {caption: `${allmenu}` , quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'menugrupo':
              reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
              leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${grupos}`, quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'menumedia':
              reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
              leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${multimedia}`, quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'menuowner':
              reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
              leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${owener}`, quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'menulogo':
              reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
              leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${logos}`, quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'entretenimiento':
              reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
              leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${entrete}`, quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'creador':
              leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${base}`, quoted: chr, contextInfo: { mentionedJid: [sender,Oowner]}})
              break

case 'creditos':
txtt = `${agra}`
  buttons1 = [{buttonId:`grupo`,buttonText:{displayText: 'Grupo de WhatsApp'},type:1},]
  imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/TikTok.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
  buttonsMessage = {
  contentText: `${txtt}`,
  footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
  buttons: buttons1,
  headerType: 4}
  prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: chr })
  leo.relayWAMessage(prep)
  break

///𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐞𝐬
case 'autoadmin':
                if (!isRegister) return reply(baby.only.usrReg)
                if (isBan) return reply (baby.only.benned)	
                if (!isGroup) return reply(baby.only.group)
                if (!isAdmin) return reply(baby.only.admin)
                if (!botAdmin) return reply(baby.only.Badmin)
                if (botAdmin) reply(`Listo eres admin`)                                                                     
leo.groupMakeAdmin(from, [sender])
setTimeout( () => {
leo.groupDemoteAdmin(from, [sender]) }, 2000) 
break

case 'autokick':
                if (!isRegister) return reply(baby.only.usrReg)
                if (isBan) return reply (baby.only.benned)	
                if (!isGroup) return reply(baby.only.group)
                if (!isAdmin) return reply(baby.only.admin)
                if (!botAdmin) return reply(baby.only.Badmin)
                if (botAdmin) reply(`Que? Eso no existe no seas homosexual`)                                                                     
                setTimeout( () => { 
                leo.groupRemove(from, 'Ni modo uno menos', text, [sender]) }, 6000)                    
                break

case 'autodemote':
                if (!isRegister) return reply(baby.only.usrReg)
                if (isBan) return reply (baby.only.benned)	
                if (!isGroup) return reply(baby.only.group)
                if (!isAdmin) return reply(baby.only.admin)
                if (!botAdmin) return reply(baby.only.Badmin)
                if (botAdmin) reply(`Tabien`)                                                                     
leo.groupDemoteAdmin(from, [sender])
setTimeout( () => {
leo.groupDemoteAdmin(from, [sender]) }, 2000) 
break

//𝐎𝐰𝐧𝐞𝐫 - 𝐔𝐬𝐮𝐚𝐫𝐢𝐨 𝐝𝐞𝐥 𝐛𝐨𝐭
case 'apagar':
case 'off':
            if (!isOwner) return reply(baby.only.ownerB)
            reply('Deja me apago al toque mi king')
            setTimeout( () => {
            leo.close() }, 3000)
            break



case 'banchat':
                              if (!isOwner) return reply(baby.only.ownerB)
                  if (args.length < 1) return reply('*Amm... para activar usa *1* y para desactivar *0*')
                  if (body.endsWith('on')) {
                  if (isBanChat) return reply('Este chat ya ah estado baneado!')
                  chatban.push(from)
                  fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
                  reply('*♻Este chat a sido baneado*')
                  } else if (body.endsWith('off')) {
                  chatban.splice(from)
                  fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
                  reply('*♻Este chat a dejado de ser baneado*')
                  } else {
                  reply(`Porfavor escriba bien el comando: ${prefix}banchat *0/1*`)
                  }
                  break

case 'ban':
                            if (!isOwner) return reply(baby.only.ownerB)
                mentionUser = choute.message.extendedTextmessage.contextInfo.mentionedJid
                if (mentionUser.length !== 0){
                for (let i = 0; i < mentionUser.length; i++){
                addBanned(mentionUser[0], args[1], ban)}
                (`@${mentionUser[0].split('@')[0]} Estas baneado no podes usar el bot :D1`, mentionUser, true)
                       
                isbans =`@${mentionUser[0].split('@')[0]} Haz sido *_Baneado_* ya no puedes usar el bot`, mentionUser, true
                        buttons1 = [{buttonId:`owner`,buttonText:{displayText: 'Owner'},type:1},]
                imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/ban.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
                buttonsMessage = {
                contentText: `${isbans}`,
                footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
                buttons: buttons1,
                headerType: 4}} 
                else if (isQuotedMsg) {if (quotedMsg.sender.match('18299897014')) return reply(`🤨`)
                addBanned(quotedMsg.sender, args[1], ban)
                mentions(`@${mentionUser[0].split('@')[0]} Estas baneado no podes usar el bot :D2`, mentionUser, true)} 
                else if (!isNaN(args[1])) {addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                mentions(`@${mentionUser[0].split('@')[0]} Estas baneado no podes usar el bot :D3`, mentionUser, true)}
                bane = leo.prepareMessageFromContent(from, {buttonsMessage}, {quoted: choute, contextInfo: {mentionedJid: [mentionUser]}})
                leo.relayWAMessage(bane)
                break

case 'unban':
case 'desban':

                              if (!isOwner) return reply(baby.only.ownerB)
                  mentionUser = choute.message.extendedTextMessage.contextInfo.mentionedJid
                  if (mentionUser.length !== 0){
                  for (let i = 0; i < mentionUser.length; i++){
                  unBanned(mentionUser[i], ban)
                  }
                  mentions(`@${mentionUser[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentionUser, true)
                  }if (isQuotedMsg) {
                  unBanned(quotedMsg.sender, ban)
                  mentions(`@${mentionUser[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentionUser, true)
                  } else if (!isNaN(args[0])) {
                  unBanned(args[0] + '@s.whatsapp.net', ban)
                  mentions(`@${mentionUser[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentionUser, true)
                  }
                  break
                
case 'demoteall':
          if (!isOwner) return reply(baby.only.ownerB)
          if (!isGroup) return reply(baby.only.group)
          if (!botAdmin) return reply(baby.only.Badmin)
          members_id = []
          for (let mem of groupMembers) {
          members_id.push(mem.jid)
          }
          leo.groupDemoteAdmin(from, members_id)
          break

case 'promoteall':
          if (!isOwner && !choute.key.fromMe) return reply(baby.only.ownerB)
          if (!isGroup) return reply(baby.only.group)
          if (!botAdmin) return reply(baby.only.Badmin)
          members_id = []
          for (let mem of groupMembers) {
          members_id.push(mem.jid)
          }
          leo.groupMakeAdmin(from, members_id)
          break

case 'fullkick':
            if (!isOwner) return reply(baby.only.ownerB)
            if (!isGroup) return reply(baby.only.group)
            if (!botAdmin) return reply(baby.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
leo.groupRemove(from, members_id)
break


case 'publico':
                          if (!isOwner) return reply(baby.only.ownerB)
              if (public) return reply('*El modo publico Ya esta activado*')
              config["public"] = true
              public = true
              fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
              wa.FakeTokoForwarded(from, "*Se activo el modo publico*", "Public : true")
              break
              
case 'privado':
case 'self':
                          if (!isOwner) return reply(baby.only.ownerB)
              if (!public) return reply('El modo privado ya estaba activado')
              config["public"] = false
              public = false
              fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
              await wa.fakeStatusForwarded(from, "*Se a cambiado a modo PRIVADO*", "Self : true")
              break

//𝐍𝐨 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐚𝐝𝐨𝐬

case 'bug':
case 'error':
case 'reportar':
const problema = args.join(' ')
if (problema.length > 300) return leo.sendMessage(from, 'El texto contiene mas de 300 caracteres, vuelve a intentarlo y escribe menos', MessageType.text, {quoted: choute})
var user = choute.participant
const teks1 = 
`[NOTIFICACION DE ERROR]
👤 Notificado Por : @${user.split("@s.whatsapp.net")[0]}
📋 Problema : ${problema}`
var options = {
text: teks1,
contextInfo: {mentionedJid: [user]}}
leo.sendMessage('18299897014@s.whatsapp.net', options, text, {quoted: choute})
blanco('El problema ha sido enviado a mi creador, de ser algun tipo de broma o solo lo haces por molestar o spam, seras baneado de manera definitiva.')
break

case 'bua':
if (!isOwner)
if (args.length < 1) return reply(`Goy`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('Ya esta activo')
welkom.push(from)
fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
reply(`Listo se activo el modo sexo`)
} else if ((args[0]) === 'off')
break

case 'bue':                
if (!isOwner)
if (!isWelkom) return reply('faita la de bua')
if (args.length < 1) return reply('Thuy')          
if (args[0] === 'on') {                                    
if (isAntiFake) return reply('*Ya esta activo*')          
antifake.push(from)                          
fs.writeFileSync('./src/antifake.json', JSON.stringify(antifake))      
reply(`Se acredito exitosamente`)  
} else if (args[0] === 'off')   
break 

  case 'clonar':
if (!isGroup) return reply(baby.only.group)
if (args.length < 1) return reply('Etiqueta a alguien para utilizar su foto!!!')
if (choute.message.extendedTextMessage === undefined || choute.message.extendedTextMessage === null) return reply('Etiqueta a alguien')
mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid[0]
let {jid, id1, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await leo.getProfilePicture(id)
buffer = await getBuffer(pp)
leo.updateProfilePicture(botNumber, buffer)
mentions(`La foto de perfil se actualizó correctamente con la foto de perfil de: @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply(baby.ferr)
}
break

case 'anuncio':
if (!isOwner) return reply('Solo *TheChoute* puede usar este comando')
if (args.length < 1) return reply('Y el anuncio?')
anu = await leo.chats.all()
if (isMedia && !choute.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo : choute
buff = await leo.downloadMediaMessage(encmedia)
for (let _ of anu) {
leo.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}\n\n *NOTIFICACION*`}, {contextInfo: { mentionedJid: [sender,Oowner]}})
						}
reply('Anuncio dado')
} else {
for (let _ of anu) {
sendMess(_.jid, 
`   *NOTIFICACION*
*Dada Por :* ${sender.split("@")[0]}

*MOMENTO DE LA NOTIFICACION*
*Hora:* ${hora}
*Fecha:* ${week1}  ${calender1}
*Mensaje:*${args.join(' ')}

╭━─━─━─≪☁️≫─━─━─━╮
      ✧☆∵✧☆
      «${yo}☁︎»    
      ✧☆∵✧☆
╰━─━─━─☾︎🌊☽︎─━─━─━╯`)}
}
reply('Anuncio dado')

break
}
} catch (e) {const emror = String(e)
  if (emror.includes('convert')){ 
  return
  }
  if (emror.includes('this.isZero')){ 
  return
  }	
  if (emror.includes('fileLength')){                           
  return
  }
  if (emror.includes('jid')){                           
  return
  }
  console.log(chalk.greenBright("├"), chalk.keyword("yellow")("[  ERROR  ]"), chalk.keyword("red")(e))
  }
  })
