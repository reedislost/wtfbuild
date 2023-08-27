import { SlashCommandBuilder } from 'discord.js';


const data = new SlashCommandBuilder()
		.setName('about')
		.setDescription('I can explain my functions!')

async function execute(interaction) {
	let content = `Hello! I'm the LostFR8 Poll Bot! I don't do anything yet! lol`;
    await interaction.reply({ content, ephemeral: true });
	
}

export {
	data,
	execute
}