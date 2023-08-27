# wtfbuild

// TODO: Enter credit card information, steal info, order please advise tech bro vest

Read through the `TODO` comments to see what needs to be done to make this work in full.

Currently there are two example commands:

`/example-button` - shows example voting buttons, and logs if someone presses a button in the console

`/about` - basic example "about" command.

`/vests` - ???


## setup

Get a discord bot token and client id and add it to your `.env` file. [See a guide here, or ping Garrett if this is confusing](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)

Run `npm run dev` which will run the deploy-commands file and then run the bot. Deploy commands is necessary to have slash commands work.

## Next steps

- [ ] Make the bot create and save a new poll to a db, maybe find a service for doing this?
- [ ] Update the buttons to whatever you want for the poll, these can be emojis. The id's need updated with your polls id. Make it like `poll-<poll_id>-1` for vote 1 button. Then you can rip the id out of the id to save it to the right poll when clicked.
- [ ] Make the bot post the poll each day.
- [ ] Use the user's role info to save their vote, probably make sure they can only vote once.
- [ ] Give us vests.
