var getVideo = (id) => {
        return new Promise(resolve => {
            var j = {};
            fetch(`http://api.robotstreamer.com:8080//v1/get_endpoint/enduser_jsmpeg_video_broadcast/${id}`)
                .then((res) => res.json())
                .then(function (json) {
                    j = json.host + ":" + json.port;
                    resolve(j);
                })
        });
    },
    getAudio = (id) => {
        return new Promise(resolve => {
            var j = {};
            fetch(`http://api.robotstreamer.com:8080//v1/get_endpoint/enduser_jsmpeg_audio_broadcast/${id}`)
                .then((res) => res.json())
                .then(function (json) {
                    j = json.host + ":" + json.port;
                    resolve(j);
                })
        });
    },
    getServers = (id) => {
        return Promise.all([getVideo(id), getAudio(id)])
    },
    getRobotControls = (id) => {
        return new Promise(resolve => {
            var j = {};
            fetch(`http://api.robotstreamer.com:8080//v1/get_endpoint/rscontrol_robot/${id}`)
                .then((res) => res.json())
                .then(function (json) {
                    j = json.host + ":" + json.port;
                    resolve(j);
                })
        });
    },
    getOnline = (id) => {
        return new Promise(resolve => {

            var j = {};
            if (!isNaN(id)) {
                fetch(`http://api.robotstreamer.com:8080/v1/get_robot/${id}`)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (json) {
                        if (json.length != 0) {
                            j.error = 0;
                            if (json[0].status == "online")
                                j.online = true
                            else
                                j.online = false

                            j.camera_id = json[0].camera_id;
                            j.robot_id = json[0].robot_id;
                            j.viewers = json[0].viewers;
                            j.name = json[0].robot_name;
                            j.owner_id = json[0].owner_id
                            j.controls = json[0].panels;
                            resolve(j);
                        } else {
                            j.error = 1;
                            resolve(j);
                        }
                    })
                    .catch(function (error) {
                        j.error = 4;
                        resolve(j);
                    });
            } else {
                j.error = 2;
                resolve(j);
            }
        });
    },
    getRobotIndex = () => {
        return new Promise(resolve => {
            var j = {};
            fetch(`http://api.robotstreamer.com:8080/v1/get_all_robots`)
                .then(function (res) {
                    return res.json();
                })
                .then(function (json) {
                    if (json.length != 0) {
                        j.error = 0;
                        j.robots = json;
                        resolve(j);
                    } else {
                        j.error = 1;
                        resolve(j);
                    }
                })
                .catch(function (error) {
                    j.error = 4;
                    resolve(j);
                });
        });
    },
    getTTSPrice = (id) => {
        return new Promise(resolve => {
            var j = {};
            fetch(`http://api.robotstreamer.com:8080/v1/get_tts_price/${id}`)
                .then(function (res) {
                    return res.json();
                })
                .then(function (json) {
                    if (json.length != 0) {
                        j.error = 0;
                        j.price = json.tts_price;
                        resolve(j);
                    } else {
                        j.error = 1;
                        resolve(j);
                    }
                })
                .catch(function (error) {
                    j.error = 4;
                    resolve(j);
                });
        });
    },
    login = (uspw) => {
        return new Promise(resolve => {
            var j = {},
                //data = {},
                options = {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, cors, *same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    headers: {
                        "Content-Type": "application/json",
                        // "Content-Type": "application/x-www-form-urlencoded",
                    },
                    redirect: "follow", // manual, *follow, error
                    referrer: "no-referrer", // no-referrer, *client
                    body: JSON.stringify(uspw), // body data type must match "Content-Type" header
                }
            fetch(`http://api.robotstreamer.com:8080/v1/login`,options)
                .then(res => res.json())
                .then(function (json) {
                    if (json.length != 0) {
                        j.error = 0;
                        j.data = json;
                        resolve(j);
                    } else {
                        j.error = 1;
                        resolve(j);
                    }
                })
                .catch(function (error) {
                    j.error = 4;
                    resolve(j);
                });
        });
    },
    getUserSettings = (uspw) => {
        return new Promise(resolve => {
            var j = {},
                //data = {},
                options = {
                    method: "POST", // *GET, POST, PUT, DELETE, etc.
                    mode: "cors", // no-cors, cors, *same-origin
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    headers: {
                        "Content-Type": "application/json",
                        // "Content-Type": "application/x-www-form-urlencoded",
                    },
                    redirect: "follow", // manual, *follow, error
                    referrer: "no-referrer", // no-referrer, *client
                    body: JSON.stringify(uspw), // body data type must match "Content-Type" header
                }
            fetch(`http://api.robotstreamer.com:8080/v1/get_user_settings`,options)
                .then(res => res.json())
                .then(function (json) {
                    if (json.length != 0 && json.message != "Internal Server Error") {
                        j.error = 0;
                        j.data = json;
                        resolve(j);
                    } else {
                        j.error = 4;
                        resolve(j);
                    }
                })
                .catch(function (error) {
                    j.error = 4;
                    resolve(j);
                });
        });
    }