const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_46_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICA2NixcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICA4NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZkdHNkK3dCdE5ZcWZEU0xpelRhTGRtQS9RSUp1cktOZ1E1YlJBZmdrWDQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNaQWxfV096U2lHX2RtMTV4eHBQTEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzg1NGUyZDQtODA5Zi00NDA2LTg5NDYtZTliNzQ2NDEzYTE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTU1LFxuICAgICAgNDcsXG4gICAgICAxMzMsXG4gICAgICAxNCxcbiAgICAgIDYyLFxuICAgICAgMTY1LFxuICAgICAgMTQ1LFxuICAgICAgOTcsXG4gICAgICAyMjIsXG4gICAgICAyMTQsXG4gICAgICAxMjMsXG4gICAgICAxNDUsXG4gICAgICA2MyxcbiAgICAgIDc0LFxuICAgICAgMTEwLFxuICAgICAgMjExLFxuICAgICAgNCxcbiAgICAgIDcwLFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDExOCxcbiAgICAgIDk4LFxuICAgICAgMjQxLFxuICAgICAgMTQ2LFxuICAgICAgMjI5LFxuICAgICAgMTkzLFxuICAgICAgMjMwLFxuICAgICAgMTU4LFxuICAgICAgMTY3LFxuICAgICAgNTQsXG4gICAgICAyMTIsXG4gICAgICAyMzIsXG4gICAgICAxNTEsXG4gICAgICAyMzEsXG4gICAgICAyMDksXG4gICAgICA1NSxcbiAgICAgIDEyMSxcbiAgICAgIDE2OCxcbiAgICAgIDMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZWUjlRN1FYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDEwNzkxNzE4OToyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuC8kuKAoOC8uvCdlprwnZaY8J2WmvCdlo7iuI4g8J2XlPCdl6PwnZen4Ly74oCg4LySXCIsXG4gICAgXCJsaWRcIjogXCI4Mzk3OTg5ODI1MzU0NToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTHV5cU1GRUtpUDNyc0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjEvQ3VFVU11WHdtU0ZiSGZzQkZRdU1uR1pITU5HOG1nWFRhb1cxUG9pVnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMlY0TXBSV1lPQ0ZJaVp2dHlkMU42cUJYQWhyMTR2OVBHRTlXTTgrUnlsY1ArK0VwQU1Uc3RTd25nbTRnTVVRUk9SYnk1L2VFTnEva0VsKzN0ME1MQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0JnQ0s2cGhMdnVmWU1UZ3RJd2Mwc1BETDNzQm1jTDVQcUdycno1TTR3bGNUTHpRdmh6R0g3cTZMVTFrNGhUV0pkd2d2S1BIZWpLdVZIcEhJVFBFaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQxMDc5MTcxODk6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTg4Njc2M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
