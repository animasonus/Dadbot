const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQ1MzIzNzYyODI1NTYwMDY0.Ddo0qQ.fqSDrFCPAtC1S7M_iwwlR7O7nnQ';

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (msg.content === '!joke') {
  	//https://www.buzzfeed.com/mikespohr/75-dad-jokes-that-are-so-bad-theyre-actually-good?utm_term=.odqex5WLZ#.rg90M2gq1
    var jokes = ["What time did the man go to the dentist? Tooth hurt-y.", "You're American when you go into the bathroom, and you're American when you come out, but do you know what you are while you're in there? European.", "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.", "Want to hear a joke about a piece of paper? Never mind... it's tearable.", "If you see a robbery at an Apple Store does that make you an iWitness?", "A ham sandwich walks into a bar and orders a beer. The bartender says, 'Sorry we don’t serve food here.'", "CASHIER: 'Would you like the milk in a bag, sir?' DAD: 'No, just leave it in the carton!'", "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans!","What do you call a factory that sells passable products? A satisfactory.", "How do you make a Kleenex dance? Put a little boogie in it!", "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!", "Why did the invisible man turn down the job offer? He couldn't see himself doing it.", "I used to have a job at a calendar factory but I got the sack because I took a couple of days off.", 'A woman is on trial for beating her husband to death with his guitar collection. Judge says, "First offender?" She says, "No, first a Gibson! Then a Fender!”', "How do you make holy water? You boil the hell out of it.", "I had a dream that I was a muffler last night. I woke up exhausted!", 'How do you tell the difference between a frog and a horny toad? A frog says, "Ribbit, ribbit" and a horny toad says, "Rub it, rub it.”', "5/4 of people admit that they’re bad with fractions.", 'What did the horse say after it tripped? "Help! I’ve fallen and I can’t giddyup!”', "Two guys walk into a bar, the third one ducks.", "What do you call a cow with two legs? Lean beef. If the cow has no legs, then it’s ground beef.", "I’m only familiar with 25 letters in the English language. I don’t know why.", "What's the best part about living in Switzerland? I don't know, but the flag is a big plus.", "Why couldn't the bike standup by itself? It was two tired.", "What do you get when you cross a snowman with a vampire? Frostbite.", "Why can't you hear a pterodactyl go to the bathroom? Because the pee is silent.", "Why wasn't the woman happy with the velcro she bought? It was a total ripoff.", "You heard of that new band 1023MB? They're good but they haven't got a gig yet.", "Why did the crab never share? Because he's shellfish."];
    var joke = jokes[Math.floor(Math.random() * jokes.length)];
    msg.channel.send(joke);
  } else if (msg.content === "!help") {
  	msg.channel.send("Hey there, sport! The list of commands for this bot are: \n\t!joke: Sends a good-natured Dad Joke.")
  }
});

client.login(token);