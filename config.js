const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.port = 5000  ;
global.devs = ["923184474176"];
global.sudo = process.env.SUDO || "923184474176"; 
global.owner  = process.env.OWNER_NUMBER || '923184474176';
global.timezone  = process.env.TIME_ZONE || 'Asia/Karachi';
global.location  =  process.env.LOCATION || 'Lahore Pakistan';
global.blockJids = process.env.BLOCK_JID || '120363023983262391@g.us';
global.allowJids = process.env.ALLOW_JID || '120363022922797633@g.us';
global.THUMB_IMAGE = process.env.BOT_PIC || 'https://i.imgur.com/NpA3ZsJ.jpeg';
global.url  =  process.env.YOUR_SITE_URL || 'https://youtube.com/c/SuhailTechInfo'; 
global.github  = process.env.YOUR_GITHUB || 'https://github.com/SuhailTechInfo/Aviator-Md';
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority";

module.exports = {

  menu : process.env.MENU  || '',          /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  LANG : process.env.THEME || 'SUHAIL',

  HANDLERS: process.env.PREFIX || ',',
  BRANCH :  process.env.BRANCH || 'main',
  WORKTYPE:process.env.WORKTYPE|| 'public',
  VERSION: process.env.VERSION || 'v.0.0.1',
  botname:process.env.BOT_NAME || 'Aviator-Md', 
  caption: process.env.CAPTION || '*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ Aviator²²¹-ᴍᴅ•*',

  sessionId: process.env.SESSION_ID || '',      //======[Put Your Session Id Here]======\\
  warncount: process.env.WARN_COUNT || '3',
  disablepm: process.env.DISABLE_PM || 'true',
  MsgsInLog:process.env.MSGS_IN_LOG || 'false',
  ownername: process.env.OWNER_NAME || 'Suhail',
  packname :  process.env.PACK_NAME || 'Aviator-Md' ,
  author :  process.env.PACK_AUTHER || 'Wa Bot Creator',

  autoreaction: process.env.AUTO_REACTION || 'false',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  readmessage :  process.env.READ_MESSAGE || 'false',
  read_status:process.env.AUTO_READ_STATUS|| 'false',
  save_status:process.env.AUTO_SAVE_STATUS|| 'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'xxx,sex',
  REMOVE_BG_KEY:process.env.REMOVE_BG_KEY || 'Nh4iTxEH5k3vmHugFqoYktGM',
  antilink :  process.env.ANTILINK_VALUES || 'https://,chat.whatsapp.com',

  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilinkaction : process.env.ANTILINK_ACTION || 'remove',
  OPENAI_API_KEY :  process.env.OPENAI_API_KEY || undefined,
  HEROKU_API_KEY :  process.env.HEROKU_API_KEY || undefined,
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || undefined,

};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})