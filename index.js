
var redisClient = require('redis')
	.createClient('6379', '192.168.178.37', {});

redisClient.on('connect', function () {
    console.info('successful connection to redis server');
});

var kue = require('kue');
queue = kue.createQueue({
	redis: {
		createClientFactory: function() {
			return redisClient;
		}
	}
});
