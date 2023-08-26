import { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } from 'discord.js';


const data = new SlashCommandBuilder()
		.setName('example-button')
		.setDescription('Example of a button working!')

async function execute(interaction) {
	const target = interaction.options.getUser('target');
	const reason = interaction.options.getString('reason') ?? 'No reason provided';

	let comps = [
		new ButtonBuilder()
			.setCustomId('vote-1')	// TODO - make this some kind of unique key based on the poll being asked
			.setLabel('1')
			.setStyle(ButtonStyle.Danger),
		new ButtonBuilder()
			.setCustomId('vote-2')
			.setLabel('2')
			.setStyle(ButtonStyle.Secondary),
		new ButtonBuilder()
			.setCustomId('vote-3')
			.setLabel('3')
			.setStyle(ButtonStyle.Secondary),
		new ButtonBuilder()
			.setCustomId('vote-4')
			.setLabel('4')
			.setStyle(ButtonStyle.Secondary),
		new ButtonBuilder()
			.setCustomId('vote-5')
			.setLabel('5')
			.setStyle(ButtonStyle.Success),

	];

	const row = new ActionRowBuilder()
		.addComponents(comps);

	await interaction.reply({
		content: `How do you feel about some question that I'm asking right now?`,
		components: [row],
	});
	
}

export {
	data,
	execute
}