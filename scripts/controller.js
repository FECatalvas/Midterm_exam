$(document).ready(function () {
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
    connected = true;
    client.on("connect", function () {
        console.log("Connected")
        $('button').click(function () {
            var id = $(this).attr('id')
            $('#status').innerHTML = id;              
        })
        $('#btnOff').click(function () {
            client.publish("faye/fan/status", "Turned Off "+ moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("off")
            console.log("TOPIC: faye/fan/status", "\nPAYLOAD: Turned Off "+ moment()
                .format(
                    'MMMM Do YYYY, h:mm:ss a'))
        })
        $('#btnOne').click(function () {
            client.publish("faye/fan/status", "Turn to 1 "+ moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("1")
            console.log("TOPIC: faye/fan/status", "\nPAYLOAD: Turn to 1 " + moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
        })
        $('#btnTwo').click(function () {
            client.publish("faye/fan/status", "Turn to 2 "+ moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("2")
            console.log("TOPIC: faye/fan/status", "\nPAYLOAD: Turn to 2 "+ moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
        })
        $('#btnThree').click(function () {
            client.publish("faye/fan/status", "Turn to 3 "+ moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
            $('#status').text("3")
            console.log("TOPIC: faye/fan/status", "\nPAYLOAD: Turn to 3 "+ moment().format(
                'MMMM Do YYYY, h:mm:ss a'))
        })
        var topic = "faye/fan/status";
        client.subscribe(topic);
        console.log("subscribe to topic: " + topic)
    })


})