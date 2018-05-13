var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
	colorize: true
});
logger.level = 'debug';

// initialize Dadbot
var dadbot = new Discord.Client({
	token: auth.token,
	autorun: true
});
dadbot.on('ready', function (evt) {
	logger.info('Connected');
	logger.info('Logged in as: ');
	logger.info(dadbot.username + ' - (' + dadbot.id + ')');
});
dadbot.on('message', function (user, userID, channelID, message, evt) {
	/* if (message.substring(0, 3) == "I'm" || "Im " || "i'm" || "im ") {
		var joke = message.substring(3).split('');

		dadbot.sendMessage({
			to: channelID,
			message: "Hi, ${joke}, I'm Dad!"
		});

	}*/
	if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                dadbot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            case 'joke':
            	/* https://www.buzzfeed.com/mikespohr/75-dad-jokes-that-are-so-bad-theyre-actually-good?utm_term=.wvnVdX1yA#.mdenoBv9d */
           		var jokes = ["What time did the man go to the dentist? Tooth hurt-y.", "You're American when you go into the bathroom, and you're American when you come out, but do you know what you are while you're in there? European.", "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.", "Want to hear a joke about a piece of paper? Never mind... it's tearable.", "If you see a robbery at an Apple Store does that make you an iWitness?", "A ham sandwich walks into a bar and orders a beer. The bartender says, 'Sorry we don’t serve food here.'", "CASHIER: 'Would you like the milk in a bag, sir?' DAD: 'No, just leave it in the carton!'", "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!"];
           		var joke = jokes[Math.floor(Math.random() * jokes.length)];

           		dadbot.sendMessage({
           			to: channelID,
           			message: joke
           		});
            break;
            // Just add any case commands if you want to..
         }
     }
});