"use strict";
var fs = require('fs');
var exec = require('child_process').exec;

exports.read = function(subaddr, callback){
        var dev = 0;
        var addr = 0x24
        fs.access("/dev/i2c-" + dev, fs.F_OK, (error) => {
                if(error){throw error;}
        });
    
    var params = dev + ' ' + addr + ' ' + subaddr; 
    var child = exec('/usr/sbin/i2cget -y -f ' + params, (error, stdout, stderr) => {
        if(error){throw error;}
        
        callback(stdout);        
    });
}; 