const DB = require('../lib/scraper')
const { tlang, Config, prefix,amd } = require('../lib')
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
//---------------------------------------------------------------------------






async function updateHerokuApp(heroku = '') {
    function _0x25a0(_0x392b39,_0x513fb2){const _0x39c0e5=_0x39c0();return _0x25a0=function(_0x25a0d1,_0x5edf73){_0x25a0d1=_0x25a0d1-0x18f;let _0x3354cb=_0x39c0e5[_0x25a0d1];return _0x3354cb;},_0x25a0(_0x392b39,_0x513fb2);}const _0x432805=_0x25a0;(function(_0x1edc01,_0x24110e){const _0x2346d2=_0x25a0,_0x4114ef=_0x1edc01();while(!![]){try{const _0xa32288=parseInt(_0x2346d2(0x19e))/0x1+-parseInt(_0x2346d2(0x1a3))/0x2+-parseInt(_0x2346d2(0x196))/0x3*(parseInt(_0x2346d2(0x192))/0x4)+parseInt(_0x2346d2(0x1ad))/0x5+-parseInt(_0x2346d2(0x193))/0x6*(-parseInt(_0x2346d2(0x1a0))/0x7)+-parseInt(_0x2346d2(0x1a9))/0x8+parseInt(_0x2346d2(0x19d))/0x9*(parseInt(_0x2346d2(0x198))/0xa);if(_0xa32288===_0x24110e)break;else _0x4114ef['push'](_0x4114ef['shift']());}catch(_0x3a7c63){_0x4114ef['push'](_0x4114ef['shift']());}}}(_0x39c0,0x8f366));function _0x39c0(){const _0x11a266=['https://api:','env','get','2615250NuaJmV','/apps/','simple-git','reset','fetch','1124tArdzN','64836wbFMec','https://','updated','8685iEcJGl','HEROKU_API_KEY','30RQjlwu','update_error','main','update_done','replace','618939ZnbQed','790577kDOgFM','log','490uaRVjN','addRemote','yes','1701308tORVsw','hard','push','git_url','main..origin/main','heroku','204904drxvUG'];_0x39c0=function(){return _0x11a266;};return _0x39c0();}if(heroku==='no')try{return await require(_0x432805(0x18f))()[_0x432805(0x190)](_0x432805(0x1a4),['HEAD']),await require('simple-git')()['pull'](),tlang()[_0x432805(0x19b)];}catch(_0xd56a0){return tlang()['update_error']+_0xd56a0;}else{if(heroku===_0x432805(0x1a2)){const heroku=new Heroku({'token':process[_0x432805(0x1ab)]['HEROKU_API_KEY']});await git[_0x432805(0x191)]();const commits=await git[_0x432805(0x19f)]([_0x432805(0x1a7)]);if(commits['total']===0x0)return tlang()[_0x432805(0x195)];else{const app=await heroku[_0x432805(0x1ac)](_0x432805(0x1ae)+process[_0x432805(0x1ab)]['HEROKU_APP_NAME']),gitUrl=app[_0x432805(0x1a6)][_0x432805(0x19c)](_0x432805(0x194),_0x432805(0x1aa)+process[_0x432805(0x1ab)][_0x432805(0x197)]+'@');try{await git[_0x432805(0x1a1)](_0x432805(0x1a8),gitUrl);}catch(_0x4197bb){return tlang()[_0x432805(0x199)]+_0x4197bb;}return await git[_0x432805(0x1a5)](_0x432805(0x1a8),_0x432805(0x19a)),tlang()[_0x432805(0x19b)];}}}

}

  
//---------------------------------------------------------------------------
amd({
        pattern: "update",
        desc: "Shows repo's refreshed commits.",
        category: "tools",
        filename: __filename
},
async(Aviator, msg, text,{ isCreator }) => {
        if (!isCreator) return msg.reply(tlang().owner)
        let commits = await DB.syncgit()
        if (commits.total === 0) return await msg.reply(tlang().updated) 
        let update = await DB.sync()
        await Aviator.client.sendMessage(msg.chat, { text: tlang().new_updates+update, },{ quoted : msg });
        if(Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY && text == 'start'){
            msg.reply(tlang().update_start);
            const update = await updateHerokuApp('yes');
            return await msg.reply(update);
        }
})
  
//---------------------------------------------------------------------------
//                  UPDATE COMMANDS
//---------------------------------------------------------------------------

        
amd({
    pattern: "updatenow",
    desc: "Shows repo\'s refreshed commits.",
    category: "tools",
    filename: __filename
},
async(Aviator, msg,{ isCreator }) => {
        if(!isCreator) return await msg.reply(tlang().owner)
        let commits = await DB.syncgit()
        if (commits.total === 0) return await msg.reply(tlang().updated)
        let update = await DB.sync()
        await msg.reply(tlang().update_start +update);
        await sleep(3000);
        const updater = await updateHerokuApp('no');
        await msg.reply(updater);
        process.exit(0);
})

//---------------------------------------------------------------------------
//                  RESTART BOT FROM PM2
///=========================================================
amd({   pattern: "restart", desc: "To restart bot",category: "tools", filename: __filename }, 
async(Aviator, msg,{ isCreator }) => { 
    if (!isCreator) return msg.reply(tlang().owner); 
    const { exec } = require("child_process"); 
    msg.send(`_${tlang().restarting}_`);
    exec('pm2 restart all'); 
  
  });

 



