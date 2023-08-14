/**
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                         █████╗ ██╗   ██╗██╗ █████╗ ████████╗ ██████╗ ██████╗     ███╗   ███╗██████╗                                 // 
//                        ██╔══██╗██║   ██║██║██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗    ████╗ ████║██╔══██╗                                //
//                        ███████║██║   ██║██║███████║   ██║   ██║   ██║██████╔╝    ██╔████╔██║██║  ██║                                //
//                        ██╔══██║╚██╗ ██╔╝██║██╔══██║   ██║   ██║   ██║██╔══██╗    ██║╚██╔╝██║██║  ██║                                //
//                        ██║  ██║ ╚████╔╝ ██║██║  ██║   ██║   ╚██████╔╝██║  ██║    ██║ ╚═╝ ██║██████╔╝                                //
//                        ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                                 //
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


*
   * @project_name : Aviator-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Aviator-Md ,A Multi-functional whatsapp user bot.
   * @version 0.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Started on 5-aug-23.
   * © 2023 Aviator-Md.
* 
   * Introducing Aviator-Md, It is designed to bring a whole new level of excitement to your boring WhatsApp use.
*

**/

const { amd,sck,sck1,hentai, getBuffer ,sendGImages , botpic,lang , getAdmin, tlang, prefix } = require('../lib')
const Config = require('../config')

async function sendGImage(msg , query = 'Hot Girls HD Pics' , caption = Config.caption )
{
  try {     
     let zerogroup = (await sck.findOne({	id: msg.chat,	})) || (await new sck({ id: msg.chat,	}).save());
     if (zerogroup.nsfw === "false") return await msg.reply("NSFW is not active.");
     return await sendGImages(msg ,query, caption = caption , addbody  = "NSFW" )     
 } catch (e) { return console.log(e)  }
}

//==================================================================================
amd({ pattern: "cosplay", desc: "NSFW cosplay.", category: "nsfw",},async(Aviator, msg,text) => {return await sendGImages(msg , text+"Cosplay Porn HD PICS" ,`*----「 Cosplay 」----*`, addbody  = "NSFW")});
//---------------------------------------------------------------------------
amd({pattern: "ecchi",desc: "NSFW ecchi.",category: "nsfw", },async(Aviator, msg , text ) => { return await sendGImages(msg , text+"Ecchi Porn HD PICS" , `*----「 Ecchi 」----*`, addbody  = "NSFW" )});
//---------------------------------------------------------------------------
amd({pattern: "hentai", category: "nsfw",desc: "NSFW hentai." },async(Aviator, msg,text) => { return await sendGImages(msg , text+"Hentai Porn HD PICS" ,`*----「 Hentai 」----*`, addbody  = "NSFW",)});
//-------------------------------------------------------------------------
amd({pattern: "hentaivid",desc: "hentai video.", category: "nsfw",},async(Aviator, msg) => {let h = await hentai(); let thmb =await getBuffer( await botpic() );let buttonMessage = {video: { url: h[0].video_1 },caption: `*_Now I can see your future._* \n${Config.caption}` ,contextInfo: { externalAdReply: {title: lang().title,	body: `NSFW`,thumbnail: thmb,	mediaType: 2,mediaUrl: ``, sourceUrl: `https://wa.me/923184474176?text=_hey,+Suhail+Bro+big+fan+of+Your+work_`,	},},};return await Aviator.client.sendMessage(msg.chat, buttonMessage, {quoted: msg});});        
//---------------------------------------------------------------------------
amd({pattern: "ranal",category: "nsfw",desc: "NSFW ranal."},async(Aviator, msg,text) => {await sendGImages(msg , text+"Anal Porn HD PICS" ,`*----「 Real Anal 」----*`, addbody  = "NSFW",)});
//---------------------------------------------------------------------------
amd({pattern: "rpussy",category: "nsfw",desc: "NSFW rpussy."},async(Aviator, msg,text) => { await sendGImages(msg ,text+ "Pussy Porn HD PICS" ,`*----「 Real PUSSY 」----*`, addbody  = "NSFW")});
//---------------------------------------------------------------------------
amd({pattern: "solo",category: "nsfw",desc: "NSFW solo." },async(Aviator, msg,text) => {await sendGImages(msg ,text+ "Solo Porn HD PICS" , `*----「 Solo 」----*`, addbody  = "NSFW",)});
//---------------------------------------------------------------------------
amd({pattern: "vixen",category: "nsfw",desc: "NSFW vixen."},async(Aviator, msg,text) => { await sendGImages(msg ,text+ "Vixen Porn HD PICS" ,`*----「 Vixen 」----*`, addbody  = "NSFW",)});