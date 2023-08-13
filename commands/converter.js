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
 const axios = require('axios')
 const { sck1, tiny, fancytext,getBuffer, listall,cmd , TelegraPh , Config  , lang} = require('../lib/')
 const fs = require('fs-extra');
 const { exec } = require('child_process')
 const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 
     //---------------------------------------------------------------------------
 cmd({
             pattern: "photo",
             desc: "Makes photo of replied sticker.",
             category: "converter",
             use: '<reply to any gif>',
             filename: __filename
         },
         async(Aviator, msg,) => {
             const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}` }
             if (!msg.quoted) return msg.reply(lang().sticker)
             let mime = msg.quoted.mtype
            if (mime =="imageMessage" || mime =="stickerMessage"){
                let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted);
                let name = await getRandom('.jpg')
                exec(`ffmpeg -i ${media} ${name}`, (err) => {
                    let buffer = fs.readFileSync(media)
                    msg.reply(buffer,{} , "image")
                    fs.unlink(media, (err) => {
                        if (err) { return console.error('File Not Deleted from From TOPHOTO AT : ' , media,'\n while Error : ' , err);  }
                        else return console.log('File deleted successfully in TOPHOTO  at : ' , media);
                    });              
                })
             
            } else return msg.reply(lang().sticker)
         }
     )
 //---------------------------------------------------------------------------
     
  cmd({
              pattern: "vv",
              alias : ['viewonce','retrive'],
              desc: "retrive viewOnce message.",
              category: "misc",
              use: '<query>',
              filename: __filename
          },
          async(Aviator, msg,) => {
 try {
 const quot = msg.msg.contextInfo.quotedMessage.viewOnceMessageV2;
   if(quot)
   {
     if(quot.message.imageMessage){
        console.log("Quot Entered") 
        let cap =quot.message.imageMessage.caption;
        let anu = await Aviator.client.downloadAndSaveMediaMessage(quot.message.imageMessage)
        return Aviator.client.sendMessage(msg.chat,{image:{url : anu},caption : cap })
     }
     if(quot.message.videoMessage){
        let cap =quot.message.videoMessage.caption;
        let anu = await Aviator.client.downloadAndSaveMediaMessage(quot.message.videoMessage)
        return Aviator.client.sendMessage(msg.chat,{video:{url : anu},caption : cap })
     }
      
   }
   //else msg.reply("```This is Not A ViewOnce Message```") 
            
 }  
          
  catch(e) {  console.log("error" , e ) }     
 
            
 if(!msg.quoted) return msg.reply(lang().viewOnce)           
 if(msg.quoted.mtype === "viewOnceMessage")
 { console.log("ViewOnce Entered") 
      if(msg.quoted.message.imageMessage )
     { 
       let cap =msg.quoted.message.imageMessage.caption;
       let anu = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted.message.imageMessage)
       Aviator.client.sendMessage(msg.chat,{image:{url : anu},caption : cap })
     }
     else if(msg.quoted.message.videoMessage )
     {
       let cap =msg.quoted.message.videoMessage.caption;
       let anu = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted.message.videoMessage)
       Aviator.client.sendMessage(msg.chat,{video:{url : anu},caption : cap })
     }
  
 }
 else return msg.reply(lang().viewOnce)
  
 })
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
 cmd({
             pattern: "attp",
             desc: "Makes sticker of given text.",
             category: "sticker",
 filename: __filename,
             use: '<reply to any image/video.>'
         },
         async(Aviator, msg, text) => {
 if(!text) return msg.reply(lang().text)
 let url = `https://raganork-api.onrender.com/api/attp?text=${text}&apikey=with_love_souravkl11`
 let media  = await getBuffer(url)
 
                 let sticker = new Sticker(media, {
                     pack: Config.packname, 
                     author: Config.author, 
                     type: StickerTypes.FULL,
                     categories: ["🤩", "🎉"], 
                     id: "12345", 
                     quality: 100,
                     background: "transparent", 
                 });
                 const buffer = await sticker.toBuffer();
                 return Aviator.client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
 
         }
     )
     //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
 cmd({
             pattern: "sticker",
             alias: ["s"],
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
             filename: __filename,
             use: '<reply to any image/video.>'
         },
         async(Aviator, msg,) => {
  let mime = msg.mtype;
 let media ;
 let pack = Config.packname
 let author = Config.author 
 if (mime =="imageMessage" || mime =="videoMessage") {  media = await msg.download(); }
 else if (msg.quoted){ 
  mime = msg.quoted.mtype; 
  if (mime =="imageMessage" || mime =="videoMessage" || mime =="stickerMessage") {  media = await msg.quoted.download(); }
  else return msg.reply(lang().imageVideo)
 }
 else return msg.reply(lang().imageVideo);
           
 if(mime =="videoMessage")
 {
     let caption = { packname :Config.packname, author:Config.author}
     const { writeExifVid }  = require("../lib/exif.js")
     let buffer = await writeExifVid(media , caption  );   
     return await Aviator.client.sendMessage(   msg.chat ,  { sticker: { url: buffer }, } );
 }
 
 
 
 
 
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.FULL ,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 100, // The quality of the output file
                     background: "transparent",
                 });
                 const buffer = await sticker.toBuffer();
                 return Aviator.client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
             
         }
     )
  //---------------------------------------------------------------------------
 cmd({
             pattern: "circle",
             alias: ["circlestic","circlesticker","cs"],
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
 filename: __filename,
             use: '<reply to any image/video.>'
         },
         async(Aviator, msg,) => {
             if (!msg.quoted) return msg.reply(lang().image);
           //console.log("Quoted Data here : ",msg.quoted);
             let mime = msg.quoted.mtype
             pack = Config.packname
             author = Config.author
            if (mime =="imageMessage" || mime =="stickerMessage") {
                 let media = await msg.quoted.download();
                 //msg.reply("*Processing Your request*");
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.CIRCLE ,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 75, // The quality of the output file
                 });
                 const buffer = await sticker.toBuffer();
                 return Aviator.client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
             }else return msg.reply(lang().image);
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "crop",
             alias: ["cropstic","csticker","cropsticker"],
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
 filename: __filename,
             use: '<reply to any image/video.>'
         },
         async(Aviator, msg,) => {
             if (!msg.quoted) return msg.reply(lang().image);
           //console.log("Quoted Data here : ",msg.quoted);
             let mime = msg.quoted.mtype
             pack = Config.packname
             author = Config.author
             if (mime =="imageMessage"  || mime =="stickerMessage") {
                 let media = await msg.quoted.download();
                 //msg.reply("*Processing Your request*");
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.CROPPED,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 75, // The quality of the output file
                 });
                 const buffer = await sticker.toBuffer();
                 return Aviator.client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
             }else return msg.reply(lang().image);
 
         }
     )
    //---------------------------------------------------------------------------
 cmd({
             pattern: "round",
             alias: ["roundstic","roundsticker"],
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
 filename: __filename,
             use: '<reply to any image/video.>'
         },
         async(Aviator, msg,) => {
             if (!msg.quoted) return msg.reply(lang().image);
           //console.log("Quoted Data here : ",msg.quoted);
             let mime = msg.quoted.mtype
             pack = Config.packname
             author = Config.author
            if (mime =="imageMessage" || mime =="stickerMessage") {
                 let media = await msg.quoted.download();
                 //msg.reply("*Processing Your request*");
                 let sticker = new Sticker(media, {
                     pack: pack, // The pack name
                     author: author, // The author name
                     type: StickerTypes.ROUNDED ,
                     categories: ["🤩", "🎉"], // The sticker category
                     id: "12345", // The sticker id
                     quality: 75, // The quality of the output file
                 });
                 const buffer = await sticker.toBuffer();
                 return Aviator.client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg });
             }else return msg.reply(lang().image);
 
         }
     )
 //---------------------------------------------------------------------------
 
 cmd({
             pattern: "memegen",
             desc: "Write text on quoted image.",
             category: "sticker",
             filename: __filename,
             use: '<text>',
         },
         async(Aviator, msg, text) => {
             if(!text && !msg.quoted) return await msg.reply(lang().imageText)
             if (msg.quoted.mtype != 'imageMessage') return msg.reply(lang().image)
 
           let textt = text.split('|')[0] || '' ;
           let isCheck = text.split('|')[1] || 'sticker'; 
           let tex1 =  textt.split(';')[0] || 'Suhail' ;    
           let tex2 =  textt.split(';')[1] || '_' ;
 
             let mee = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted)
             let bg = await TelegraPh(mee)
             let thmb =await getBuffer(`https://api.memegen.link/images/custom/${tex2}/${tex1}.png?background=${bg}`)
 
           if (isCheck.startsWith('p') || isCheck.startsWith('P')) { await Aviator.client.sendMessage(msg.chat , {image : thmb , caption : Config.caption })  }
           else{
             let sticker = new Sticker(thmb, {
                     pack: Config.packname, 
                     author: Config.author, 
                     type: StickerTypes.FULL,
                     categories: ["🤩", "🎉"], 
                     id: "12345", 
                     quality: 100,
                     background: "transparent", 
                 });
                 const buffer = await sticker.toBuffer();
                 Aviator.client.sendMessage(msg.chat, {sticker: buffer}, {quoted: msg }); 
           }
           
             return await fs.unlinkSync(mee)
 
         }
     )
 
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
 cmd({
             pattern: "quotely",
             desc: "Makes Sticker of quoted text.",
             alias: ["q"],
             category: "sticker",
             use: '<reply to any message.>',
             filename: __filename
         },
         async(Aviator, msg,) => {
             if (!msg.quoted) return msg.reply(lang().textMsg);
             let textt = msg.quoted.text;
             let pfp;
             try { pfp = await Aviator.client.profilePictureUrl(msg.quoted.sender, "image");
             } catch (e) { pfp = THUMB_IMAGE;  }
             let todlinkf = ["#FFFFFF", "#000000"];
             let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
             let username = await sck1.findOne({ id: msg.quoted.sender })
             var tname;
             if (username.name && username.name !== undefined) {
                 tname = username.name
             } else {
                 tname = Aviator.client.getName(msg.quoted.sender)
             }
             let body = {
                 type: "quote",
                 format: "png",
                 backgroundColor: todf,
                 width: 512,
                 height: 512,
                 scale: 3,
                 messages: [{
                     avatar: true,
                     from: {
                         first_name: tname,
                         language_code: "en",
                         name: tname,
                         photo: {   url: pfp,},
                     },
                     text: textt,
                     replyMessage: {},
                 }, ],
             };
             let res = await axios.post("https://bot.lyo.su/quote/generate", body);
             let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
             return msg.reply(img,{packname:Config.packname,author:''},"sticker")
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "fancy",
             desc: "Makes stylish/fancy given text",
             category: "converter",
             use: '56 Secktor',
             react: "✅",
             filename: __filename
         },
         async(Aviator, msg, text) => {
             if (isNaN(text.split(" ")[0]) || !text) {
                 let text = tiny(
                     "Fancy text generator\n\n*_______________________________*\n*Example: .fancy 32 Suhail Md*\n*_______________________________*\n\n"
                 );
                 listall("Aviator").forEach((txt, num) => {
                     text += `${(num += 1)} ${txt}\n`;
                 });
                 return await msg.reply(text);
             }
 
             let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
             msg.reply(fancytextt)
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "tiny",
             desc: "Makes url tiny.",
             category: "converter",
             use: '<url>',
             //react: "✅",
             filename: __filename
         },
         async(Aviator, msg, text) => {
            let url = text.toLowerCase();
             if (!text || !url.startsWith("https")) return msg.reply(lang().tiny_url)
             try {
                 let link = text.split(" ")[0];
                 let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                 msg.reply(`*🛡️Your tiny URL*\n\n${anu.data}`);
             } catch (e) {  console.log(e); }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
         pattern: "toaudio",
         alias:['mp3','tomp3'],
         desc: "changes type to audio.",
         category: "converter",
         use: '<reply to any Video>',
         filename: __filename
     },
    async(Aviator, msg,) => {
         if (!msg.quoted) return msg.reply(lang().video);
         let mime = msg.quoted.mtype
 if (mime =="audioMessage" || mime =="videoMessage")
 {
         let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted);
          const { toAudio } = require('../lib');
          let buffer = fs.readFileSync(media);
         let audio = await toAudio(buffer);
         Aviator.client.sendMessage(msg.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: msg });
      
  
  fs.unlink(media, (err) => {
   if (err) { return console.error('File Not Deleted from From TOAUDIO AT : ' , media,'\n while Error : ' , err);  }
   else return console.log('File deleted successfully in TOAUDIO MP3 at : ' , media);
 });
 
 }
  else return msg.reply (lang().video)
     }
 )
      //---------------------------------------------------------------------------
 cmd({
     pattern: "tomp4",
     alias:['mp4','tovideo','tovid'],
     desc: "changes type to audio.",
     category: "converter",
     use: '<reply to any Video>',
     filename: __filename
 },
 async(Aviator, msg,) => {
     const { webp2mp4File } = require ("../lib")
     if (!msg.quoted) return msg.reply(lang().vidSticker)
     let mime = msg.quoted.mtype
     let mimetype = msg.quoted.mimetype
     if( mime !="videoMessage"  && !/webp/.test(mimetype) ) return await msg.send(lang().vidSticker)
     let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted)
     try {
         if (/webp/.test(mimetype)) {  let webpToMp4 = await webp2mp4File(media);  media =  webpToMp4.result; }
         await Aviator.client.sendMessage(msg.chat, { video: { url: media ,}, caption: Config.caption  },)
         try{ return await fs.unlink(media);}catch(e){ return console.log("Error While Deleting Tomp4 File :  ", e)}
     }catch(e){ return console.log("*Your Request Not Be Proceed due to Error.*  \n*_Error :_* ", e)}
 }
 )