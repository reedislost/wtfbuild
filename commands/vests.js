import { SlashCommandBuilder } from 'discord.js';


const data = new SlashCommandBuilder()
		.setName('vests')
		.setDescription('???')

async function execute(interaction) {
	let content = `Please send give us vests`;
    await interaction.reply({ content });
	
}

export {
	data,
	execute
}