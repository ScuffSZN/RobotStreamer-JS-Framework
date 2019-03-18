# RobotStreamer-JS-Framework
---
Client side framework for [RobotStreamer](http://robotstreamer.com).

|          Function         | What it does.                                                                                                                                                        |
|:-------------------------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  `getOnline([robot_id])`  | Returns online status, robot id, and camera id.                                                                                                                      |
| `getControls([robot_id])` | Returns websocket server for receiving controls from robot viewer controllers.                                                                                       |
| `getServers([camera_id])` | Returns audio/video server for receiving websockets video feed from robotstreamer. You will need to get the camera id that is returned from `getOnline([robot_id])`. |
|  `getVideo([camera_id])`  | Returns video websocket server for receiving mpeg video feed from robotstreamer. You will need to get the camera id that is returned from `getOnline([robot_id])`.   |
|  `getAudio([camera_id])`  | Returns video websocket server for receiving mpeg audio feed from robotstreamer. You will need to get the camera id that is returned from `getOnline([robot_id])`.   |
