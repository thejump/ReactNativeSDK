import { NativeModules, NativeEventEmitter } from 'react-native';

const { RCTZiggeoPlayer } = NativeModules;

export default {
	// ZiggeoRecorder
	setAppToken: function (appToken: string) {
   // global.warn('aaa',NativeModules)
    RCTZiggeoPlayer.setAppToken(appToken);
  	},
  	play: function (videoId: string) {
      RCTZiggeoPlayer.play(videoId);
  	},
	setExtraArgsForPlayer: function (map) {
    RCTZiggeoPlayer.setExtraArgsForPlayer(map);
  	},
  	

 };
