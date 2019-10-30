const mongoconnect=require('mongoose');
mongoconnect.Promise = global.Promise;
mongoconnect.set('useCreateIndex', true)
mongoconnect.connect('mongodb://localhost:27017/myapp',{ useNewUrlParser: true ,useUnifiedTopology: true} );
mongoconnect.connection.on('connected', function(){
    console.log("Mongoose default connection is open");
});

mongoconnect.connection.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+" error");
});

mongoconnect.connection.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
});

process.on('SIGINT', function(){
    mongoconnect.connection.close(function(){
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
    });
});
module.exports={
    mongoconnect:mongoconnect
  };