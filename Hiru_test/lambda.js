exports.handler = function(event, context, callback) {
    console.log("Hello Hello")
    callback(null, {"message": "Successfully executed"});
}