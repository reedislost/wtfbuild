import * as dotenv from 'dotenv'
dotenv.config()
import * as fs from 'fs';
import * as path from 'node:path';

import { Client, Events, Collection, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildMessages] });
const token = process.env.DISCORD_TOKEN
const debugEnabled = process.env.DEBUG


let servers = {};

if (debugEnabled == "true") {
  console.log("Debug mode enabled");
  client.on('debug', console.log);
}

client.commands = new Collection();

const cooldowns = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = await import(`./commands/${file}`);
  if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ./commands/${file} is missing a required "data" or "execute" property.`);
	}
}

client.once(Events.ClientReady, c => {
  console.log(`Welcome to LostFR8 Poll Bot ${client.user.tag}!`);

  // TODO - Check for certain day of the month to post a new poll? Or maybe post a poll every week? etc etc
  // You will need the channel id to post in, then you can do something like (i.e. if channel id is 965796285548474418!):
  // const channel = client.channels.cache.get('965796285548474418');
  // channel.send('Hello World!'); <-- replace this with the code found in the example-button.js file

  client.user.setActivity(`<activity for the bot shows here>`);
});

client.on(Events.InteractionCreate, async interaction => {
	// Handles slash commands
	if (interaction.isChatInputCommand()) {
		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}
	
		try {
			if (interaction.isRepliable()) await command.execute(interaction);
		} catch (error) {
			console.error(error);
		}
	}	

	if (interaction.isButton()) {
		console.log(`User ${interaction.user.tag} clicked button ${interaction.customId} in channel ${interaction.channelId}!\nTheir roles are: ${interaction.member.roles.cache.map(role => role.name).join(', ')}`);

		// TODO - use the button id, and user's roles, to record this user's vote into some db
		
		interaction.reply({ content: "Thanks for voting!", ephemeral: true });
	}
});


client.login(token);