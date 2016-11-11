module.exports = function(req,res){
  var ip = req.headers['x-forwarded-for'] ||
       req.connection.remoteAddress ||
       req.socket.remoteAddress ||
       req.connection.socket.remoteAddress; // get the IP address
       var os = req.headers['user-agent'].split('(')[1].split(')')[0]; // get the OS info from req.headers object.
       var language = req.headers['accept-language'].split(',')[0]; // get the language info from req.headers object.
       return {
         'ip' : ip,
         'operating-system' : os,
         'language' : language
       }// header information object.
}
