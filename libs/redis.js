/**
 * Created by daniel on 16/5/2.
 */


var config = require('../bin/config.json').redis;
var redis = require('redis');
var client = redis.createClient(config);

module.exports = client;


//client.set('key', 'value', function(err, res) {
//    client.expire('key', 3, function(err, res) {
//        console.log(err);
//    });
//    console.log(err);
//});
//
//client.get('key', function(err, res) {
//    console.log(res)
//});