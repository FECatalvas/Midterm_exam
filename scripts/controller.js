$(document).ready(function () {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    connected = true;
    client.on("connect", function () {
        console.log("Connected")
        $('#btnOff').click(function () {
            client.publish("faye/fan/status", "Turned Off " + moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("off")
        })
        $('#btnOne').click(function () {
            client.publish("faye/fan/status", "Turn to 1 " + moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("on 1")
        })
        $('#btnTwo').click(function () {
            client.publish("faye/fan/status", "Turn to 2 " + moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("on 2")
        })
        $('#btnThree').click(function () {
            client.publish("faye/fan/status", "Turn to 3 " + moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("on 3")
        })
        var topic = "faye/fan/status";
        client.subscribe(topic);
        console.log("subscribe to topic: " + topic)
    })


})