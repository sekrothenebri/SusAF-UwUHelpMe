case 'imposter':
        var user1 = message.mentions.users.first();
          message.channel.send(`${user1} was the imposter.`)
          break;
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
      case 'ping':

        let msg = await message.reply('Pinging...');
        await msg.edit(`PONG! Message round-trip took ${Date.now() - msg.createdTimestamp}ms.`)
        print("'ping' was used.")
        break;
      case '':
        message.channel.send('Uhh... The command is?')
        break;
      // case 'kill':
      //  message.delete({ timeout: 5})
  // .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  //.catch(console.error);
    //    var user = message.mentions.users.first();
      //    console.log('Someone was killed!')
        //  message.channel.send(`<@${user.id}> was killed! Use %report to report the body!`)
        break;
      case 'report':
        console.log('A body was reported!')
        message.reply('You reported a body! Who is the imposter? (CMDS: %vote - Vote someone)') 
        
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
        
      
      case 'kill':
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
        print('Bot was tested: GOOD')
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
