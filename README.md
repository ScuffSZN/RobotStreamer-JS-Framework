# RobotStreamer-JS-Framework
---
Client side framework for [RobotStreamer](http://robotstreamer.com).


## Framework Functions and What They Do


|                                  Function                                  | What it does.                                                                                                                                                        |
|:--------------------------------------------------------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                              `getRobotIndex()`                             | Returns list of everyone on the site along with their robots It includes robot online status, viewer count, nsfw streamer, robot id, camera id, and user id.         |
|                           `getOnline([robot_id])`                          | Returns online status, robot id, and camera id.                                                                                                                      |
|                          `getTTSPrice([robot_id])`                         | Returns the current TTS price in fun bits.                                                                                                                           |
|                       `getRobotControls([robot_id])`                       | Returns websocket server for receiving controls sent from viewers on client side.                                                                                    |
|                          `getServers([camera_id])`                         | Returns audio/video server for receiving websockets video feed from robotstreamer. You will need to get the camera id that is returned from `getOnline([robot_id])`. |
|                           `getVideo([camera_id])`                          | Returns video websocket server for receiving mpeg video feed from robotstreamer. You will need to get the camera id that is returned from `getOnline([robot_id])`.   |
|                           `getAudio([camera_id])`                          | Returns video websocket server for receiving mpeg audio feed from robotstreamer. You will need to get the camera id that is returned from `getOnline([robot_id])`.   |
| `login({"password": "Account Password", "user_name": "Account Username"})` | Returns token, user_id, and user_name. You will need this for other functions such as `getUserSettings()` however it doesn't seem to be working right now.           |
|          `{token": "User Token", "user_name": "Account Username"}`         | Returns user settings. Currently doesn't work. If you want to try and figure out what I did and help, that would be great. Always returns 500 server error.          |

## Error Codes and What They Mean

| Error Code 	| Error Meaning                                         	|
|:----------:	|-------------------------------------------------------	|
|     `0`    	| Robot exists and is online.                           	|
|     `1`    	| No streamer found.                                    	|
|     `2`    	| Invalid ID, must be a number.                         	|
|     `3`    	| Streamer is offline.                                  	|
|     `4`    	| Connection has been interrupted, trying to reconnect. 	|
