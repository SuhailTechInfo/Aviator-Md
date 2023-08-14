const Config = require('../config')
let { fancytext,sendGImages, lang, tiny, runtime, formatp, botpic, prefix, sck1, amd, } = require("../lib");
const axios = require('axios');
const fetch = require('node-fetch');
const { Anime, Manga } = require("@shineiichijo/marika");
const {  fetchJson, getBuffer} = require('../lib/')





function _0x66c9(){const _0x1a13b0=['180876sASNuQ','\x0a*More\x20on✨:*\x20','6727332SVJrLe','json','https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/','animenews','loli','92lZPBcw','url','284074pMLOCx','nsfw','1584yDJrEx','megumin','get','https://newsapi.org/v2/everything?q=','Naruto','chat','1stTlCm','36822432KaWLdQ','name','9ZMbwwc','floor','\x0a*Created\x20On☘️:*\x20','source','title','\x0a\x0a*Content🧩:*\x20','client','content','split','urlToImage','result','map','https://nekos.life/api/v2/img/fox_girl','random','&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8','\x0a*Author📌:*\x20','5ZLZZOU','Demonslayer',',Here\x20we\x20go😊!!!!*','12020232IYHQHj','sendMessage','\x0a*Source♦️:*\x20','12280jQBmSq','demon','https://api.waifu.pics/nsfw/','https://waifu.pics/api/sfw/shinobu','articles','log','https://api.waifu.pics/sfw/','naruto','6705370jQlxQC','waifu'];_0x66c9=function(){return _0x1a13b0;};return _0x66c9();}function _0x5573(_0x4cd905,_0x172957){const _0x66c9e6=_0x66c9();return _0x5573=function(_0x55730a,_0x5e078a){_0x55730a=_0x55730a-0x1b2;let _0x1d1be8=_0x66c9e6[_0x55730a];return _0x1d1be8;},_0x5573(_0x4cd905,_0x172957);}(function(_0x44340f,_0x83951b){const _0x3daa58=_0x5573,_0x411944=_0x44340f();while(!![]){try{const _0x3c1640=-parseInt(_0x3daa58(0x1e4))/0x1*(parseInt(_0x3daa58(0x1dc))/0x2)+parseInt(_0x3daa58(0x1d3))/0x3*(-parseInt(_0x3daa58(0x1da))/0x4)+parseInt(_0x3daa58(0x1c3))/0x5*(-parseInt(_0x3daa58(0x1d5))/0x6)+-parseInt(_0x3daa58(0x1d1))/0x7+parseInt(_0x3daa58(0x1c6))/0x8*(parseInt(_0x3daa58(0x1b3))/0x9)+parseInt(_0x3daa58(0x1c9))/0xa*(-parseInt(_0x3daa58(0x1de))/0xb)+parseInt(_0x3daa58(0x1e5))/0xc;if(_0x3c1640===_0x83951b)break;else _0x411944['push'](_0x411944['shift']());}catch(_0x3609cc){_0x411944['push'](_0x411944['shift']());}}}(_0x66c9,0xbffac));async function sendAnime(_0xa7796f,_0x475c65,_0x150336,_0x305333=''){const _0x5b0d71=_0x5573;let _0x5b0914='*'+_0x150336+_0x5b0d71(0x1c5);if(_0x150336===_0x5b0d71(0x1d2)||_0x150336==='neko'||_0x150336===_0x5b0d71(0x1df)){let _0x4ea51b=_0x305333['split']('|')[0x0]||'',_0xc32d2d=_0x305333[_0x5b0d71(0x1bb)]('|')[0x1]||'1';_0x5b0914=_0x305333[_0x5b0d71(0x1bb)]('|')[0x1]?'':'\x20*'+_0x150336+_0x5b0d71(0x1c5);let _0x251b1f=_0x4ea51b==_0x5b0d71(0x1dd)?_0x5b0d71(0x1cb)+(_0x150336===_0x5b0d71(0x1df)?'trap':_0x5b0d71(0x1d2)):_0x5b0d71(0x1cf)+_0x150336;for(let _0x2b3d0d=0x0;_0x2b3d0d<_0xc32d2d;_0x2b3d0d++){let _0x2948e4=await(await fetch(_0x251b1f))[_0x5b0d71(0x1d6)]();return await _0xa7796f['client'][_0x5b0d71(0x1c7)](_0x475c65['chat'],{'image':{'url':_0x2948e4[_0x5b0d71(0x1db)]},'caption':_0x5b0914});}}else{if(_0x150336==='loli'||_0x150336==='foxgirl'){let _0x2d7c8=_0x150336===_0x5b0d71(0x1d9)?_0x5b0d71(0x1cc):_0x5b0d71(0x1bf),_0x1a5898=await axios[_0x5b0d71(0x1e0)](_0x2d7c8);return await _0xa7796f[_0x5b0d71(0x1b9)][_0x5b0d71(0x1c7)](_0x475c65[_0x5b0d71(0x1e3)],{'image':{'url':_0x1a5898['data'][_0x5b0d71(0x1db)]},'caption':_0x5b0914});}else{if(_0x150336===_0x5b0d71(0x1ca)||_0x150336===_0x5b0d71(0x1d0)){let _0x2413ae=_0x5b0d71(0x1d7)+(_0x150336===_0x5b0d71(0x1ca)?_0x5b0d71(0x1c4):_0x5b0d71(0x1e2))+'/video.json';const _0x5bd715=await fetchJson(_0x2413ae);return _0x2413ae=_0x5bd715[_0x5b0d71(0x1bd)][Math[_0x5b0d71(0x1b4)](Math[_0x5b0d71(0x1c0)]()*_0x5bd715[_0x5b0d71(0x1bd)]['length'])][_0x5b0d71(0x1db)],await _0xa7796f['client'][_0x5b0d71(0x1c7)](_0x475c65['chat'],{'video':{'url':_0x2413ae},'caption':_0x5b0914});}else{if(_0x150336===_0x5b0d71(0x1d8)){let _0x1257ad=await axios[_0x5b0d71(0x1e0)](_0x5b0d71(0x1e1)+_0x305333+_0x5b0d71(0x1c1)),_0x2dd247=_0x1257ad['data'][_0x5b0d71(0x1cd)];_0x2dd247[_0x5b0d71(0x1be)](async(_0x5d274a,_0x4faed0)=>{const _0x59d45e=_0x5b0d71;try{_0xa7796f[_0x59d45e(0x1b9)][_0x59d45e(0x1c7)](_0x475c65[_0x59d45e(0x1e3)],{'image':{'url':_0x5d274a[_0x59d45e(0x1bc)]},'caption':'*Title🔰:*\x20'+_0x5d274a[_0x59d45e(0x1b7)]+_0x59d45e(0x1b8)+_0x5d274a[_0x59d45e(0x1ba)]+_0x59d45e(0x1c2)+_0x5d274a['author']+_0x59d45e(0x1c8)+_0x5d274a[_0x59d45e(0x1b6)][_0x59d45e(0x1b2)]+_0x59d45e(0x1b5)+_0x5d274a['publishedAt']+_0x59d45e(0x1d4)+_0x5d274a[_0x59d45e(0x1db)]+'\x0a\x0a'+Config['caption']+'*'},{'quoted':_0x475c65});}catch(_0x4c338a){console[_0x59d45e(0x1ce)](_0x4c338a);}});return;}}}}}



//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
amd({pattern: "waifu",desc: "To get Waifu Random Pics",category: "Anime Pics",filename: __filename },async(Aviator, msg, text , {cmdName}) => { return await sendAnime(Aviator,msg ,cmdName , text);});
//-----------------------------------------------------------------------
amd({pattern: "neko", category: "Anime Pics",desc: "Sends a Neko Image in chat",filename: __filename },async(Aviator, msg, text , {cmdName}) => { return await sendAnime(Aviator,msg ,cmdName , text);});
//-----------------------------------------------------------------------
amd({ pattern: "megumin",desc: "To get Waifu Random Pics",category: "Anime Pics",filename: __filename },async(Aviator, msg, text , {cmdName}) => { return await sendAnime(Aviator,msg ,cmdName , text);});
//-----------------------------------------------------------------------
amd({ pattern: "loli",category: "Anime Pics",filename: __filename,desc: "Sends image of loli."},async(Aviator, msg) => {  return await sendAnime(Aviator,msg ,'loli',);});
//-----------------------------------------------------------------------
amd({pattern: "foxgirl",category: "Anime Pics",desc: "Sends image of Fox Girl Anime.", filename: __filename},async(Aviator, msg) => {  return await sendAnime(Aviator,msg ,'loli',); });
//-----------------------------------------------------------------------
amd({pattern: "demon",alias : ["ds"],desc: "To get Naruto Random Videos",category: "Anime Pics",filename: __filename},async(Aviator, msg) => {  return await sendAnime(Aviator,msg ,'demon',); });
//------------------------------------------------------------------------
amd({pattern: "naruto",desc: "To get Naruto Random Videos",category: "Anime Pics",filename: __filename},async(Aviator, msg) => {  return await sendAnime(Aviator,msg ,'naruto',); });
//-------------------------------------------------------------------------
amd({pattern: "pokepic",category: "Anime Pics",filename: __filename,desc: "Sends image of pokemon."},async(Aviator, msg, text) => { return await sendGImages(msg ,text+"Pokemon Pics only HD ", `*---「 Poke Pic 」---*`, text );});
//-------------------------------------------------------------------------
amd({pattern: "animepic",category: "Anime Pics",filename: __filename,desc: "Anime images"},async(Aviator, msg, text) => { return await sendGImages(msg ,text+"Anime Pics HD", `*-----「 Anime Image 」-----*`, text );});
//-----------------------------------------------------------------------
amd({ pattern: "animewall",category: "Anime Pics",desc: "Anime Wallpaper Random",filename: __filename},async(Aviator, msg, text) => {return await sendGImages(msg ,text+"anime wallpaper for desktop full hd", `*---「 Anime Wallpaper 」---*` , text );});
//-----------------------------------------------------------------------
let qq = ["Anime News Today","New Anime","Uocoming Anime News","New Anime Info","Whats news in Anime","Anime Series","Manga News today","Anime New News","Anime News today",];
amd({ pattern: "animenews",category: "Anime Pics", desc: "Sends Anime News in chat",filename: __filename},async(Aviator,msg,text,{cmdName}) => {let q1=qq[Math.floor(Math.random()*qq.length)]+text;return await sendAnime(Aviator,msg,cmdName, q1);});
//---------------------------------------------------------------------------
amd({pattern: "pokemon", category: "Anime Pics",filename: __filename, desc: "Sends info of pokemon in current chat."},async(Aviator, msg, text) => { if(!text) return msg.send("*Uhh Please Give Me Poki Name/num*");try { let { data: data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);if (!data.name) return msg.reply(`❌ Could not found any pokemon with that name`); let poinfo = `*•Name: ${data.name}*\n*•Pokedex ID: ${data.id}*\n*•Height: ${data.height}*\n*•Weight: ${data.weight}*\n*•Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n*•Base Experience: ${data.base_experience}*\n*•Type: ${data.types[0].type.name}*\n*•Base Stat: ${data.stats[0].base_stat}*\n*•Attack: ${data.stats[1].base_stat}*\n*•Defense: ${data.stats[2].base_stat}*\n*•Special Attack: ${data.stats[3].base_stat}*\n*•Special Defense:${data.stats[4].base_stat}*\n*•Speed: ${data.stats[5].base_stat}*\n`; return await Aviator.client.sendMessage(msg.chat, { image: { url: data.sprites.front_default }, caption: poinfo }, { quoted: msg }); } catch (err) {  msg.reply("Ahh,Couldn't found any pokemon.") }})
//---------------------------------------------------------------------------




amd({
    pattern: "manga",
    category: "Anime Pics",
    filename: __filename,
    desc: "Sends info about asked manga."
},
async(Aviator, msg, text) => {
    if (!text) return msg.reply(`Which Manga do you want to Search? \n _Please give me a name._`);
    const { Manga } = require("@shineiichijo/marika");
    const manga = new Manga();
    let srh = await manga.searchManga(text);
    let mang = `*🎀Title: ${srh.data[0].title}*\n`;
    mang += `*📈Status: ${srh.data[0].status}*\n`;
    mang += `*🌸Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `*🎗Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `*🧧Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {  mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`; }
    mang += `*✨Published on: ${srh.data[0].published.from}*\n`;
    mang += `*🌟Score: ${srh.data[0].scored}*\n`;
    mang += `*🎐Popularity: ${srh.data[0].popularity}*\n`;
    mang += `*🎏Favorites: ${srh.data[0].favorites}*\n`;
    mang += `*✍Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
        mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null) mang += `*🎆Background:* ${srh.data[0].background}`;
    mang += `*❄️Description:* ${srh.data[0].synopsis}`;
    Aviator.client.sendMessage(msg.chat, {  image: {  url: srh.data[0].images.jpg.large_image_url,  }, caption: mang, }, {  quoted: msg,  });

}
)
//----------------------------------------------------------------------------
amd({
    pattern: "anime",
    category: "Anime Pics",
    desc: "Searches Info about Anime and Provides result."
},
async(Aviator, msg, text) => {
    if (!text) return msg.reply(`Which Anime do you want to search?\n _Please give me a name._`);
    const client = new Anime();
    let anime = await client.searchAnime(text);
    let result = anime.data[0];
    //console.log(result);
    let details = `🎀Title: ${result.title}\n`;
    details += `🎋Format: ${result.type}\n`;
    details += `*📈Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥Total episodes: ${result.episodes}\n`;
    details += `🎈Duration: ${result.duration}\n`;
    details += `🧧Genres:\n`;
    for (let i = 0; i < result.genres.length; i++) {  details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`; }
    details += `✨Based on: ${result.source.toUpperCase()}\n`;
    details += `📍Studio:\n`;
    for (let i = 0; i < result.studios.length; i++) { details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;}
    details += `🎴Producers:\n`;
    for (let i = 0; i < result.producers.length; i++) {   details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`; }
    details += `💫Premiered on: ${result.aired.from}\n`;
    details += `🎗Ended on: ${result.aired.to}\n`;
    details += `🎐Popularity: ${result.popularity}\n`;
    details += `🎏Favorites: ${result.favorites}\n`;
    details += `🎇Rating: ${result.rating}\n`;
    details += `🏅Rank: ${result.rank}\n\n`;
    if (result.trailer.url !== null)
        details += `♦Trailer: ${result.trailer.url}\n\n`;
    details += `🌐URL: ${result.url}\n\n`;
    if (result.background !== null)
        details += `🎆Background: ${result.background}*\n\n`;
    details += `❄Description: ${result.synopsis}`;

 Aviator.client.sendMessage( msg.chat, { image: {  url: result.images.jpg.large_image_url, }, caption: details, }, { quoted: msg,});
}
   )
//---------------------------------------------------------------------------


