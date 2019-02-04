import {BotCommand} from "../models/botCommand.model";

export class CommandsConstant {
  private static playCommand = new BotCommand("Play","Play a song directly from YouTube in your current voice channel","!play Bohemian Rhapsody");
  private static playPauseCommand = new BotCommand("Pause - Resume","Pause or resume a track being played by the bot","!p");
  private static volCommand = new BotCommand("Volume","Modify the volume of the bot","!vol 20");
  private static stopCommand = new BotCommand("Stop","Stop the bot, and empty the playlist","!stop");
  private static loopCommand = new BotCommand("Loop","Enable / Disable the loop on the current track","!loop");
  private static skipCommand = new BotCommand("Skip","Skip the track you're currently listening at. Disconnect the bot if none left in playlist","!skip");
  private static shuffleCommand = new BotCommand("Shuffle","Shuffle the upcoming tracks","!shuffle");
  private static queueCommand = new BotCommand("Queue","Display the upcoming tracks and the loop status","!queue");

  private static greetingsMessageCommand = new BotCommand("Greetings message toggler","Toggle on / off the greetings message from the bot","!greetingsmessage");
  private static helpCommand = new BotCommand("Help","Display an ass kicking help message","!help");
  private static moveCommand = new BotCommand("Move","Move an user to another vocal channel","!move @Minipasglop Main_Channel");
  private static setAutoRoleCommand = new BotCommand("AutoRole configuration","Configure the role the bot set to each newcomer", "!setAutoRole Community");
  private static greetingsChannelCommand = new BotCommand("Greetings message channel","Configure where you want the bot to send greetings message","!greetingschannel welcome_bye");
  private static prefixCommand = new BotCommand("Prefix","Configure the prefix the bot should recognize before a command","!prefix !");

  private static pingCommand = new BotCommand("Ping","Show the bot's ping","!ping");
  private static inviteCommand = new BotCommand("Invite","Displays an invite link for the bot","!invite");
  private static stateCommand = new BotCommand("State","Show the status of everything that can be customized for your server","!state");
  private static youTubeCommand = new BotCommand("YouTube","Find and send a link to a requested video on YouTube","!yt Bohemian Rhapsody");
  private static infoCommand = new BotCommand("Info","Show some info about the bot","!info");

  public static readonly SOUND_COMMANDS=[CommandsConstant.playCommand, CommandsConstant.loopCommand,CommandsConstant.shuffleCommand,CommandsConstant.queueCommand,CommandsConstant.playPauseCommand,CommandsConstant.volCommand,CommandsConstant.stopCommand,CommandsConstant.skipCommand];

  public static readonly SERVER_COMMANDS=[CommandsConstant.prefixCommand,CommandsConstant.helpCommand,CommandsConstant.greetingsChannelCommand,CommandsConstant.greetingsMessageCommand,CommandsConstant.moveCommand,CommandsConstant.setAutoRoleCommand];

  public static readonly MISC_COMMANDS=[CommandsConstant.infoCommand,CommandsConstant.stateCommand,CommandsConstant.youTubeCommand,CommandsConstant.inviteCommand,CommandsConstant.pingCommand];

}
