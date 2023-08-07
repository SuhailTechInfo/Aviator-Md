const { proto, delay, getContentType   } = require('@sampandey001/baileys') // } = require('@adiwajshing/baileys') //
const fs = require('fs-extra')
const { unlink } = require ('fs').promises
const axios = require('axios')
const {
  writeExifImg,
  writeExifVid,
writeExifWebp,
  imageToWebp,
  videoToWebp,
} = require("../lib/exif");
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const Config = require('../config')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg')

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)
//const sleep =  (ms) =>{  return new Promise((resolve) =>{ setTimeout (resolve, ms)}) } 
exports.unixTimestampSeconds = unixTimestampSeconds;
exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
} 
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " d, " : " d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = function(seconds) {
    let h = isNaN(seconds) ? '--' : Math.floor(seconds % (3600 * 24) / 3600)
    let m = isNaN(seconds) ? '--' : Math.floor(seconds % 3600 / 60)
    let s = isNaN(seconds) ? '--' : Math.floor(seconds % 60)
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {  return new Promise(resolve => setTimeout(resolve, ms));}

exports.isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}

exports.getTime = (format, date) => {
	if (date) {	return moment(date).locale('id').format(format)	} 
  else {return moment.tz('Asia/Jakarta').locale('id').format(format)}
}

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}



exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}

exports.parseMention = (text = '') => { return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}

exports.GIFBufferToVideoBuffer = async (image) => {
      const filename = `${Math.random().toString(36)}`
      await fs.writeFileSync(`./${filename}.gif`, image)
      child_process.exec( `ffmpeg -i ./${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./${filename}.mp4` ) 
      await sleep(8000)

      var buffer5  =  await  fs.readFileSync(`./${filename}.mp4`)
      Promise.all([unlink(`./${filename}.mp4`), unlink(`./${filename}.gif`)])
      return buffer5
}
/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {store} store 
 */
exports.smsg = (conn, msg, store) => {
    if (!msg) return msg
    let M = proto.WebMessageInfo
    if (msg.key) {
        msg.id = msg.key.id
        msg.isBot = msg.id.startsWith('BAE') && msg.id.length === 16
	      msg.isBaileys = msg.id.startsWith('BAE') && msg.id.length === 16
        msg.chat = msg.key.remoteJid
        msg.fromMe = msg.key.fromMe
        msg.isGroup = msg.chat.endsWith('@g.us')
        msg.sender = conn.decodeJid(msg.fromMe && conn.user.id || msg.participant || msg.key.participant || msg.chat || '')
        if (msg.isGroup) msg.participant = conn.decodeJid(msg.key.participant) || ''
    }
    if (msg.message) {
        msg.mtype = getContentType(msg.message)
        msg.msg = (msg.mtype == 'viewOnceMessage' ? msg.message[msg.mtype].message[getContentType(msg.message[msg.mtype].message)] : msg.message[msg.mtype])
        try{
	        msg.body = (msg.mtype === 'conversation') ? msg.message.conversation : (msg.mtype == 'imageMessage') ? msg.message.imageMessage.caption : (msg.mtype == 'videoMessage') ? msg.message.videoMessage.caption : (msg.mtype == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (msg.mtype == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (msg.mtype == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (msg.mtype == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (msg.mtype === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : '';
	      } catch {	msg.body = false }
	      let quoted = msg.quoted = msg.msg.contextInfo ? msg.msg.contextInfo.quotedMessage : null
        msg.mentionedJid = msg.msg.contextInfo ? msg.msg.contextInfo.mentionedJid : []
        if (msg.quoted) {
          let type = getContentType(quoted)
			    msg.quoted = msg.quoted[type]
          if (['productMessage'].includes(type)) {
				    type = getContentType(msg.quoted)
				    msg.quoted = msg.quoted[type]
			    }
          if (typeof msg.quoted === 'string') msg.quoted = { text: msg.quoted	}
          if(quoted.viewOnceMessageV2){console.log("Quoted is Vv Message ")}
          else{
		    
		    
            msg.quoted.mtype = type
            msg.quoted.id = msg.msg.contextInfo.stanzaId
			      msg.quoted.chat = msg.msg.contextInfo.remoteJid || msg.chat
            msg.quoted.isBot = msg.quoted.id ? msg.quoted.id.startsWith('BAES') && msg.quoted.id.length === 16 : false
	          msg.quoted.isBaileys = msg.quoted.id ? msg.quoted.id.startsWith('BAE5') && msg.quoted.id.length === 16 : false
			      msg.quoted.sender = conn.decodeJid(msg.msg.contextInfo.participant)
			      msg.quoted.fromMe = msg.quoted.sender === (conn.user && conn.user.id)
            msg.quoted.text = msg.quoted.text || msg.quoted.caption || msg.quoted.conversation || msg.quoted.contentText || msg.quoted.selectedDisplayText || msg.quoted.title || ''
			      msg.quoted.mentionedJid = msg.msg.contextInfo ? msg.msg.contextInfo.mentionedJid : []
            msg.getQuotedObj = msg.getQuotedMessage = async () => {
			        if (!msg.quoted.id) return false
			        let q = await store.loadMessage(msg.chat, msg.quoted.id, conn)
 			        return exports.smsg(conn, q, store)
            }
            let vM = msg.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: msg.quoted.chat,
                    fromMe: msg.quoted.fromMe,
                    id: msg.quoted.id
                },
                message: quoted,
                ...(msg.isGroup ? { participant: msg.quoted.sender } : {})
            })
            /**
             * 
             * @returns 
             */
             let { chat, fromMe, id } = msg.quoted;
             const key = {
				      remoteJid: msg.chat,
				      fromMe: false,
				      id: msg.quoted.id,
				      participant: msg.quoted.sender
			      }
            msg.quoted.delete = async() => await conn.sendMessage(msg.chat, { delete: key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            msg.forwardMessage = (jid,Message = vM , forceForward = true, options = {}) => conn.copyNForward(jid, Message, forceForward,{contextInfo: {isForwarded: false}}, options)

            /**
              *
              * @returns
            */
            msg.quoted.download = () => conn.downloadMediaMessage(msg.quoted)
	  }
        }
    }
    if (msg.msg.url) msg.download = () => conn.downloadMediaMessage(msg.msg)
    msg.text = msg.msg.text || msg.msg.caption || msg.message.conversation || msg.msg.contentText || msg.msg.selectedDisplayText || msg.msg.title || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/

       /**
	* Copy this message
	*/
	msg.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
  msg.sendMessage = (jid = msg.chat, options = {} , quoted = {quoted:''}) => conn.sendMessage(jid, options,quoted)
	msg.copyNForward = (jid = msg.chat, forceForward = false, options = {}) => conn.copyNForward(jid, msg, forceForward, options)
	msg.sticker = (stik, id = msg.chat, option = { mentions: [msg.sender] }) => conn.sendMessage(id, { sticker: stik, contextInfo: { mentionedJid: option.mentions } }, { quoted: msg })
	msg.replyimg = (img, teks, id = msg.chat, option = { mentions: [msg.sender] }) => conn.sendMessage(id, { image: img, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: msg })
  msg.imgurl = (img, teks, id = msg.chat, option = { mentions: [msg.sender] }) => conn.sendMessage(id, { image: {url: img }, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: msg })
  msg.send =  async (content,opt = { packname: "Suhail-Md" }, type = "text")  => {
    const _0x1e5ea0=_0x2b13;(function(_0x5a9e16,_0x184376){const _0x5e0bea=_0x2b13,_0x2cf6ca=_0x5a9e16();while(!![]){try{const _0x2402d8=parseInt(_0x5e0bea(0x7e))/0x1+parseInt(_0x5e0bea(0x8d))/0x2+parseInt(_0x5e0bea(0x87))/0x3+-parseInt(_0x5e0bea(0x7d))/0x4*(parseInt(_0x5e0bea(0x7a))/0x5)+-parseInt(_0x5e0bea(0x8a))/0x6+-parseInt(_0x5e0bea(0x8c))/0x7*(-parseInt(_0x5e0bea(0x80))/0x8)+parseInt(_0x5e0bea(0x7f))/0x9;if(_0x2402d8===_0x184376)break;else _0x2cf6ca['push'](_0x2cf6ca['shift']());}catch(_0x2007c7){_0x2cf6ca['push'](_0x2cf6ca['shift']());}}}(_0x3bfd,0xd94ed));function _0x3bfd(){const _0x380b6d=['video','image','image/webp','4351839RQJmIw','getFile','chat','10450296Ehwfbd','isBuffer','1632701XIBGnv','844418CyBcMp','1784855kiccCP','message','sticker','8cJYZXl','181002oBktnp','9528156HIPVSf','8QwtYsW','split','text','sendMessage'];_0x3bfd=function(){return _0x380b6d;};return _0x3bfd();}function _0x2b13(_0x7a617f,_0x33b875){const _0x3bfd96=_0x3bfd();return _0x2b13=function(_0x2b1373,_0x412816){_0x2b1373=_0x2b1373-0x7a;let _0x13f5f3=_0x3bfd96[_0x2b1373];return _0x13f5f3;},_0x2b13(_0x7a617f,_0x33b875);}switch(type['toLowerCase']()){case _0x1e5ea0(0x82):{return await conn[_0x1e5ea0(0x83)](msg[_0x1e5ea0(0x89)],{'text':content,...opt});}break;case'image':{if(Buffer[_0x1e5ea0(0x8b)](content))return await conn[_0x1e5ea0(0x83)](msg[_0x1e5ea0(0x89)],{'image':content,...opt});else{if(isUrl(content))return conn[_0x1e5ea0(0x83)](msg[_0x1e5ea0(0x89)],{'image':{'url':content},...opt});}}break;case _0x1e5ea0(0x84):{if(Buffer['isBuffer'](content))return await conn['sendMessage'](msg[_0x1e5ea0(0x89)],{'video':content,...opt});else{if(isUrl(content))return await conn[_0x1e5ea0(0x83)](msg[_0x1e5ea0(0x89)],{'video':{'url':content},...opt});}}case'audio':{if(Buffer['isBuffer'](content))return await conn[_0x1e5ea0(0x83)](msg[_0x1e5ea0(0x89)],{'audio':content,...opt});else{if(isUrl(content))return await conn['sendMessage'](msg[_0x1e5ea0(0x89)],{'audio':{'url':content},...opt});}}break;case'template':let optional=await generateWAMessage(msg[_0x1e5ea0(0x89)],content,opt),message={'viewOnceMessage':{'message':{...optional[_0x1e5ea0(0x7b)]}}};await conn['relayMessage'](msg[_0x1e5ea0(0x89)],message,{'messageId':optional['key']['id']});break;case _0x1e5ea0(0x7c):{let {data,mime}=await conn[_0x1e5ea0(0x88)](content);if(mime==_0x1e5ea0(0x86)){let buff=await writeExifWebp(data,opt);await conn[_0x1e5ea0(0x83)](msg[_0x1e5ea0(0x89)],{'sticker':{'url':buff},...opt});}else{mime=await mime[_0x1e5ea0(0x81)]('/')[0x0];if(mime===_0x1e5ea0(0x84))await conn['sendImageAsSticker'](msg['chat'],content,opt);else mime===_0x1e5ea0(0x85)&&await conn['sendImageAsSticker'](msg['chat'],content,opt);}}break;}
  }
  //------------------------------------------------------------------------------------
  
  msg.reply = async (content,opt = { packname: "Secktor", author: "SamPandey001" }, type = "text")  => {
      switch (type.toLowerCase()) {
        case "text":{
          return await conn.sendMessage( msg.chat, {  text: content }, { quoted:msg });
                     }
        break;
      case "image": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage(msg.chat, { image: content, ...opt },  { quoted:msg  } );
          } else if (isUrl(content)) {
            return conn.sendMessage( msg.chat, { image: { url: content }, ...opt },{ quoted:msg}  );
          }
        }
        break;
      case "video": {
        if (Buffer.isBuffer(content)) {
          return await conn.sendMessage(msg.chat,  { video: content, ...opt },  { quoted:msg }   );
        } else if (isUrl(content)) {
          return await conn.sendMessage( msg.chat,  { video: { url: content }, ...opt },  { quoted:msg }  );
        }
      }
      case "audio": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage( msg.chat, { audio: content, ...opt }, { ...opt } );
          } else if (isUrl(content)) {
            return await conn.sendMessage( msg.chat, { audio: { url: content }, ...opt }, { quoted:msg });
          }
        }
        break;
      case "template":
        let optional = await generateWAMessage(msg.chat, content, opt);
        let message = { viewOnceMessage: { message: { ...optional.message,},   },};
        await conn.relayMessage(msg.chat, message, { messageId: optional.key.id,});
        break;
      case "sticker":{
	  let { data, mime } = await conn.getFile(content);
          if (mime == "image/webp") {
          let buff = await writeExifWebp(data, opt);
            await conn.sendMessage(msg.chat, { sticker: { url: buff }, ...opt }, opt );
          } else {
            mime = await mime.split("/")[0];
            if (mime === "video") {
              await conn.sendImageAsSticker(msg.chat, content, opt);
            } else if (mime === "image") {
              await conn.sendImageAsSticker(msg.chat, content, opt);
            }
          }
        }
        break;
    }
  }
	msg.senddoc = (doc,type, id = msg.chat, option = { mentions: [msg.sender], filename: Config.ownername, mimetype: type,
	externalAdRepl: {
							title: Config.ownername,
							body: ' ',
							thumbnailUrl: ``,
							thumbnail: log0,
							mediaType: 1,
							mediaUrl: '',
							sourceUrl: gurl,
						} }) => conn.sendMessage(id, { document: doc, mimetype: option.mimetype, fileName: option.filename, contextInfo: {
	  externalAdReply: option.externalAdRepl,
	  mentionedJid: option.mentions } }, { quoted: msg })
	
  	msg.sendcontact = (name, info, number) => {
		var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + info + ';\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'
		conn.sendMessage(msg.chat, { contacts: { displayName: name, contacts: [{ vcard }] } }, { quoted: msg })
	}
	msg.react = (emoji) => conn.sendMessage(msg.chat, { react: { text: emoji, key: msg.key } })

    return msg
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})