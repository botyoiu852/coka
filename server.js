const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://2020tst.glitch.me/`);/////////////////لازم تحت اسم بروجكت حقك مهم
}, 280000);
 
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const pretty = require("pretty-ms");
const prefix = process.env.PREFIX;
const shuruhatik = process.env.PROJECT_BY_SHURUHATIK;
client.login(process.env.BOT_TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/



client.on('ready', () => {
    console.log(`Iam Ready`);
    console.log(`Guilds: ${client.guilds.size}`);
    console.log(`Users: ${client.users.size}`);
    client.user.setActivity(`Type ${prefix}corona`,{type: 'Playing'}); ///التعديل علي البلاينج
});


client.on('message', message => { 
if(message.content === prefix + 'corona' || message.content === prefix + 'كورونا') {
	var pages = ['http://www.emro.who.int/images/stories/coronavirus/isolate_ar_lar.png?ua=10','http://www.emro.who.int/images/stories/coronavirus/overall_ar_lar.png?ua=1','http://www.emro.who.int/images/stories/coronavirus/foodsafetychoppingboard_ar_lar.png?ua=1','http://www.emro.who.int/images/stories/coronavirus/handwash_ar_lar.png?ua=1','http://www.emro.who.int/images/stories/coronavirus/coronavirus_drugs.png?ua=1']
	var page = 1;

	message.delete();

	var embed = new Discord.RichEmbed()
	.setColor('AQUA')
  .setTitle("كيف تحمي نفسك والآخرين من المرض : الرسوم التوضيحية")
  .setFooter("${prefix}corona [اسم البلد] | لمعرفة احصائيات كورونا ")
	.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png')
	.setImage(pages[page-1])

	message.channel.sendEmbed(embed).then(msg => {////shuruhatik

		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))///shuruhatik
		.then(() => msg.react('➡'))////shuruhatik
		.then(() => msg.react('⏭'))//shuruhatik

		var backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			var forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			var sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			var sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;

			var cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;

		var backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });///shuruhatik
			var forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });///shuruhatik

		var sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			var sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });//shuruhatik

			var cancel = msg.createReactionCollector(cancelFilter, { time: 0 });///shuruhatik

			backwards.on('collect', r => {///shuruhatik
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);///shuruhatik
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;///shuruhatik
				page++;
				embed.setImage(pages[page-1]);//shuruhatik
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {///shuruhatik
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;///shuruhatik
				page = 5; //shuruhatik
				embed.setImage(pages[page-1]);
				embed.setAuthor(`صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);//shuruhatik
				embed.setImage('https://media1.tenor.com/images/3f8b9aec89d8fc5395f3ad3d82f0d697/tenor.gif?itemid=14560182');
				embed.setAuthor(`Menu will close after 7sec`, 'http://www.emro.who.int/images/stories/coronavirus/corona-virus.png');
				msg.edit(embed).then(msg.delete(7500));////shuruhatik
				})
			})
		})
	}
	});


client.on('message', message => {
if  (message.content.toLowerCase().startsWith(prefix + "corona"))  {
  let country = message.content.toLowerCase().split(" ").slice(1).join(" ");
  corona(country, message);
};
});
function corona(country, message) {
const fetch = require("node-fetch");
	message.delete();
fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  .then(async data => {
  data = await data.json();
  let corona = new Discord.RichEmbed().setColor("RANDOM")
    .setThumbnail(data.countryInfo.flag)
    .setTitle(`${shuruhatik} : ${data.country}`)
    .addField("`اصابات`", [`**${data.cases}**`] , true)
    .addField("`اموات`", [`**${data.deaths}**`] , true)
    .addField("`معافي`", [`**${data.recovered}**`] , true)
    .addField("`حالات جديدة`", [`**${data.todayCases}**`] , true)
    .addField("`اموات جديدة`", [`**${data.todayDeaths}**`] , true)
    .addField("`معافي اليوم`", [`**${data.todayRecovered}**`] , true)
    .addField("`قارة`", [`**${data.continent}**`] , true)
    .setFooter(`Requested by :${message.author.username}`, message.author.avatarURL);
  message.channel.send(corona);
});
};
/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/