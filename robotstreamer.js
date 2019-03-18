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
    getControls = (id) => {
        return new Promise(resolve => {
            var j = {};
            fetch(`http://api.robotstreamer.com:8080//v1/get_endpoint/rscontrol_robot/${id}`)
                .then((res) => res.json())
                .then(function (json) {
                    j = json.host+":"+json.port;
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

                            j.camera_id = json[0].camera_id
                            j.robot_id = json[0].robot_id
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
    }
