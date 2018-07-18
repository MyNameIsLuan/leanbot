console.log('Conectando...');
const Discord = require('discord.js');
const client = new Discord.Client();
const preferencias = require('./config.json');
const prefix = preferencias.prefix;
const prefixow = preferencias.prefixow;
const fs = require('fs');
var comandos = new Discord.Collection();

client.login(process.env.SpongeNetwork);


client.on('ready', () =>{
console.log('\n==============================');
console.log('CONECTADO! BOT ONLINE!');
console.log(`O meu prefixo � ${prefix}`);
console.log('==============================');


//let gameloop = require(`./comando_kally/gameloop.js`);
//gameloop.run(client);
  
});

client.on("guildMemberRemove", member =>{
    if(member.guild.id === "467798739407601665"){
        const leave = new Discord.RichEmbed()
        .setAuthor(member.user.tag)
        .setDescription(":outbox_tray: Volte logo!")
        .setThumbnail(member.user.avatarURL)
        .setColor("#36393f")
        .setFooter("Sponge BOT - copyright")
      client.channels.get("468833463861116939").send(leave)

    }
});

client.on("guildMemberAdd", member =>{
    if(member.guild.id === "467798739407601665"){
        const join = new Discord.RichEmbed()
        .setAuthor(member.user.tag)
        .setDescription(":inbox_tray:  bem vindo ao servidor! Esperamos que você se divirta!")
        .setThumbnail(member.user.avatarURL)
        .setColor("#36393f")
        .setFooter("Spoonge BOT - copyright")
      client.channels.get("468833292808880148").send(join)
      
    }
    });
;




client.on("error", e => console.log(e));




client.on('message', message =>{

var autor = message.author;
var msg = message.content.toUpperCase();
var cont = message.content.slice(prefix.lenght).split('');
  
if(message.channel.type === "dm") return;
if(!message.content.startsWith(prefix)) return;
// ban
//if(message.author.id === "244537374258888725" || message.author.id === "244537374258888725") return;
//if(message.author.id === "244537374258888725") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const allargs = args.join(" ");
  
  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
	  
	  
   } catch (err) {
     
     message.channel.send(`:question: **|** ${message.author} comando inexistente ou não foi feito ainda!`).then(msg => msg.delete(5000));
	   return;
   }
  
});
