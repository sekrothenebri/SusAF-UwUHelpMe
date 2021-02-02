// const \\
const { Client, MessageEmbed } = require('discord.js');
const config = require('./config');
const commands = require('./help');
require('sequelize');
require('sqlite3')
const Sequelize = require('sequelize');
// require(''); \\
require('./server');
// Database.Sequelize \\
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
// Database.Tags \\
const Tags = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
});

// bot \\
let bot = new Client({
  presence: {
    status: 'online',
    activity: {
      name: `${config.prefix}help`,
      type: 'LISTENING'
    }
  }
});

// <database> var pointBalSchema = import('./models/points')
// <database> var pointBalSchema = require('./models/points')

bot.on('ready', () => 
   console.log(`Logged in as ${bot.user.tag}.`));
   Tags.sync();


bot.on('message', async message => {
  // Check for command
  if (message.content.startsWith(config.prefix)) {
    let args = message.content.slice(config.prefix.length).split(' ');
    let command = args.shift().toLowerCase();

    switch (command) {

      case 'imposter':
        var user1 = message.mentions.users.first();
          message.channel.send(`${user1} was the imposter.`)
          break;

/*      case 'setup':
        
        var user = message.author.id
       // if (dataActive != "Yes") {
        message.channel.send("Your data is being created... Please wait.")
      const tag = await Tags.create({
		  name: 'Omega',
		  value: 1,
		  username: message.author.id,
	});
         
        message.channel.send(`Your data was created! +1 Omega Point. NEW BAL::${tag.name}::${tag.value}`);
        break;
     //   }
       // else {
    //      message.channel.send("Huh? Your account is already setup. Use %data to see your data.")
        //break;
      //  }

      case 'data':
        var user = message.author.id

        //console.log(dataActive)
        /* const tag = await Tags.findOne({ where: { name: tagName } });
       if (tag) {
	// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
          tag.increment('name')
        	tag.increment('value');
        	return message.channel.send(tag.get('description'));
        }
return message.reply(`Could not find tag: ${tagName}`);

          message.channel.send(`Hello, <@${user}>. The stored data is:`)
          message.channel.send(`Points:: ${dataPoints}`)
          break;
      
       // }
        //else {
        //  message.channel.send("Error: You have not run !setup yet.")
        //  message.channel.send(`${dataActive}`)
        //  break;
        //}
        */

      case 'flatearth':
      message.channel.send('No you fricking idiot! Why are there members across the globe!?')
      break;
      var itvw = yes
      // var msgPing = message.mention.username
      case 'dev-test^reply^':
        var itvw = 'yes its wroking bot'
      message.reply(`is this working?${itvw}`)
      break;
      case 'dev-test^logonconsole^':
        message.reply('You just sent a item to the log. Please check the log.')
        console.log('${msg.author.username} has used a dev command "logonconsole"')
        console.log('A message was sent to the log.')

        break;
      case 'install-Slash':
      message.reply('Installing...')
      message.reply('Installed. (0 slash command has been installed.)')
      break;
        case 'ping':

        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
        console.log("'ping' was used.")
        break;
      case '':
        message.channel.send('Uhh... The command is?')
        break;
       case 'kill':
        message.delete({ timeout: 5})
   .then(msg => console.log(`Deleted message from ${msg.author.username}`))
.catch(console.error);
   var user = message.mentions.users.first();
        console.log('Someone was killed!')
          message.channel.send(`<@${user.id}> was killed! Use %report to report the body!`)
        break;
      case 'report':
        console.log('A body was reported!')
        message.reply('You reported a body! Who is the imposter? (CMDS: %vote - Vote someone)') 
        break;
        
      //Custom CMDS.
      // GBA's CUSTOM CMDS
      case'meat-shield':
      var authorMsg = message.author.username
        var user = message.mentions.users.first();
        console.log(`<@${authorMsg.id}> has claimed ${user} as their meat shield. ${user}, please use %shield-meat <user> to confirm this.`)
        message.channel.send(`${user} is now your meat shield, ${authorMsg} `)
        break;
      case'shield-meat':
        var authorMsg = message.author.username
        var user = message.mentions.users.first();
        console.log(`${authorMsg} is now ${user}'s meat shield`)
        message.channel.send(`${authorMsg} is now the meat shield for ${user}`)
        break;
      // killVar
        
      
      /* case 'kill':
        message.delete({ timeout: 5})
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
        var user = message.mentions.users.first();
          console.log('Someone was killed!')
          message.channel.send(`<@${user.id}> was killed! Use %report to report the body!`)
          let killed = 0
          typeof killed
          killed + 1
                   // var killed = Math.Add()
          console.log(`${killed}`)
        break;
        */
      // Custom CMDS
      case 'say':
      case 'repeat':
        if (args.length > 0) {
         console.log(`'say/repeat was used (success) (${message.author.username}) '`),
          message.delete({ timeout: 5})
          message.channel.send(args.join(' '));
        }
        else {
          message.reply('You did not send a message to repeat, cancelling command.')
          console.log("'say/repeat' was used. (Failure.)")
        }
        break;
        case 'vote':
          var user = message.mentions.users.first();
          message.delete()
          message.reply(`You have voted ${user}`)
          break;

      case 'test':
        message.channel.send('testingComplete')
        console.log('Bot was tested: GOOD')
        break;
      case '383078513583849474':
        message.channel.send('Mom of Two da best')
        break;
      case '437490209194508289':
        message.channel.send('GBAdvanced3000 da best')
        break;
      case '733905617042931792':
        message.channel.send('Mr XD da best, and he is meh frien')
        break;
      case 'pleh-dev':
        message.channel.send('Hecking heck, you found me secret command channel! ::')
        message.channel.send('<userId> -- Only few exist in this list, and will give a special message.')
        message.channel.send('<END LIST>')
        break;


      /* Unless you know what you're doing, don't change this command. */
      case 'help':
        let embed =  new MessageEmbed()
          .setTitle('HELP MENU')
          .setColor('GREEN')
          .setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
          .setThumbnail(bot.user.displayAvatarURL());
        if (!args[0])
          embed
            .setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\` :: ${commands[command].description}`).join('\n'));
        else {
          if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
            let command = Object.keys(commands).includes(args[0].toLowerCase())? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
            embed
              .setTitle(`COMMAND - ${command}`)

            if (commands[command].aliases)
              embed.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
            embed
              .addField('DESCRIPTION', commands[command].description)
              .addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
          } else {
            embed
              .setColor('RED')
              .setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
          }
        }
        message.channel.send(embed);
        break;
    }
  }
});
// bot login \\
bot.login(config.token);