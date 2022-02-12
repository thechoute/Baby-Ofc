const fs = require('fs');

const {from, sender, fromMe } =  fs.readFileSync('./thechoute.js')

const janza = {
    key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
    },
    message: {
    "productMessage": {
    "product": {
    "productImage":{
    "mimetype": "image/jpeg",
    "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
    },
    "title": `𝕿𝖍𝖊𝖈𝖍𝖔𝖚𝖙𝖊|𝕭𝖆𝖇𝖞𝕭𝖊𝖈𝖍𝖍𝖔𝖘𝖔`,
    "description": "",
    "currencyCode": "NIUSES",
    "priceAmount1000": "999999999999999999",
    "retailerId": "",
    "productImageCount": 999
    },
    "businessOwnerJid": `0@s.whatsapp.net`
    }
    }
    }
    contextInfo: {
    mentionedJid: [sender]}


    const janz = {
      key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
      },
      message: {
      "productMessage": {
      "product": {
      "productImage":{
      "mimetype": "image/jpeg",
      "jpegThumbnail": fs.readFileSync(`./media/imagen/fake.jpg`)
      },
      "title": `🔥𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗠𝗘𝗡𝗨𝗦🔥`,
      "description": "",
      "currencyCode": "NIUSES",
      "priceAmount1000": "999999999999999999",
      "retailerId": "",
      "productImageCount": 999
      },
      "businessOwnerJid": `0@s.whatsapp.net`
      }
      }
      }
      contextInfo: {
      mentionedJid: [sender]}

    const menuall = {
      key:
      { fromMe: false,
      participant: `0@s.whatsapp.net`, ...(from ?
      { remoteJid: "status@broadcast" } : {}) },
      message: { "videoMessage": { "caption":"🔥 MENU COMPLETO 🔥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
      }
      contextInfo: {
      mentionedJid: [sender]}

      const qmiembros = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"🔥 𝑴𝑬𝑵𝑼 𝑷𝑨𝑹𝑨 𝑻𝑶𝑫𝑶𝑺 🔥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}
        
      const brillo = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"🔥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐏𝐀𝐑𝐀 𝐀𝐃𝐌𝐈𝐍 🔥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

      const juegosc = {
        key:
        { fromMe: false,
        participant: `0@s.whatsapp.net`, ...(from ?
        { remoteJid: "status@broadcast" } : {}) },
        message: { "videoMessage": { "caption":"🔥 𝙏𝙊𝘿𝙊𝙎 𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 🔥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
        }
        contextInfo: {
        mentionedJid: [sender]}

        const fimg = {
          key:
          { fromMe: false,
          participant: `0@s.whatsapp.net`, ...(from ?
          { remoteJid: "status@broadcast" } : {}) },
          message: { "imageMessage": { "mimetype": "image/jpeg","caption": `𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊`, 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
          }
          contextInfo: {
          mentionedJid: [sender]}

          const cnal = {
            key:
            { fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ?
            { remoteJid: "status@broadcast" } : {}) },
            message: { "videoMessage": { "caption":"🔥𝕿𝖍ٌ𝖊𝕮𝖍𝖔𝖚𝖙𝖊 🔥", 'jpegThumbnail': fs.readFileSync('./media/imagen/fake.jpg')}}
            }
            contextInfo: {
            mentionedJid: [sender]}
            module.exports = {
                janza, menuall, qmiembros, brillo, fimg, cnal, janz
            }