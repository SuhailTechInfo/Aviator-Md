/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Suhail-Md
 * @author : @SuhailTechInfo <https://github.com/SuhailTechInfo>
 * @description : Suhail-Md, A Multi-functional whatsapp bot.
 **/














 const { lang, ffmpeg,amd ,cmd } = require('../lib')
 const fs = require('fs')
 const { exec } = require('child_process')



 //---------------------------------------------------------------------------
 amd({
         pattern: "bass",
         desc: "adds bass in given sound",
         category: "audio",
         use: '<reply to any audio>',
       //  react:"✅",
    },
    async(Aviator, msg) => {        
        if(!msg.quoted) return await msg.send(lang().audio)
        let mime = msg.quoted.mtype
        let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
        if(/audio/.test(mime)) {
            msg.reply(lang().wait);
            let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted,'audio');
            let ran = msg.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.reply(err);
                let buff = fs.readFileSync(ran);
                msg.reply(buff,{ mimetype: "audio/mpeg" } , "audio")
                fs.unlinkSync(ran);
            });
        }else return await msg.reply(lang().audio);
    })
 //---------------------------------------------------------------------------
 amd({
         pattern: "blown",
         desc: "adds blown in given audio",
         category: "audio",
         use: '<reply to any audio>',
        // react:"✅",
     },
     async(Aviator, msg) => {
        if(!msg.quoted) return await msg.send(lang().audio)
         let mime = msg.quoted.mtype
         let set = "-af acrusher=.1:1:64:0:log";
         if (/audio/.test(mime)) {
             msg.reply(lang().wait);
             let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted);
             let ran = msg.sender.slice(6) + (".mp3");
             exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.reply(err);
                let buff = fs.readFileSync(ran);
                msg.reply(buff,{ mimetype: "audio/mpeg" } , "audio")
                fs.unlinkSync(ran);
            });
        }else return await msg.reply(lang().audio);
    })
 //---------------------------------------------------------------------------
 amd({
         pattern: "deep",
         desc: "adds deep effect in given audio",
         category: "audio",
         use: '<reply to any audio>',
       //  react:"✅",
     },
     async(Aviator, msg) => {
        if(!msg.quoted) return await msg.send(lang().audio)
         let mime = msg.quoted.mtype
         let set = "-af atempo=4/4,asetrate=44500*2/3";
         if (/audio/.test(mime)) {
             msg.reply(lang().wait);
             let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted);
             let ran = msg.sender.slice(6) + (".mp3");
             exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.reply(err);
                let buff = fs.readFileSync(ran);
                msg.reply(buff,{ mimetype: "audio/mpeg" } , "audio")
                fs.unlinkSync(ran);
            });
        }else return await msg.reply(lang().audio);
    })
 //---------------------------------------------------------------------------
 amd({
         pattern: "fast",
         desc: "Adds fast(equilizer) in quoted audio.",
         category: "audio",
         use: '<reply to any audio>',
        // react:"✅",
     },
     async(Aviator, msg) => {
        if(!msg.quoted) return await msg.send(lang().audio)
         let mime = msg.quoted.mtype
         let set = '-filter:a "atempo=1.63,asetrate=44100"';
         if (/audio/.test(mime)) {
             msg.reply(lang().wait);
             let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted);
             let ran = msg.sender.slice(6) + (".mp3");
             exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.reply(err);
                let buff = fs.readFileSync(ran);
                msg.reply(buff,{ mimetype: "audio/mpeg" } , "audio")
                fs.unlinkSync(ran);
            });
        }else return await msg.reply(lang().audio);
    })
 //---------------------------------------------------------------------------
 amd({
         pattern: "reverse",
         desc: "Adds reverse(equilizer) in quoted audio.",
         category: "audio",
         use: '<reply to any audio>',
       //  react:"✅",
     },
     async(Aviator, msg) => {
        if(!msg.quoted) return await msg.send(lang().audio)
         let mime = msg.quoted.mtype
         let set = '-filter_complex "areverse"';
         if (/audio/.test(mime)) {
             msg.reply(lang().wait);
             let media = await Aviator.client.downloadAndSaveMediaMessage(msg.quoted);
             let ran = msg.sender.slice(6) + (".mp3");
             exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.reply(err);
                let buff = fs.readFileSync(ran);
                msg.reply(buff,{ mimetype: "audio/mpeg" } , "audio")
                fs.unlinkSync(ran);
            });
        }else return await msg.reply(lang().audio);
    })