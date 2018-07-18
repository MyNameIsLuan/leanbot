const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const ip = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("IP")
       
       .setDescription("O IP de nossa rede ATUALMENTE é: __jogar.spongenetwork.top__!")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(ip)

}