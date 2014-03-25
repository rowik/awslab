var task =  function(request, callback){
    var fName = request.query.fName ? request.query.fName : "lukasz tet";
    var lName = request.query.lName ? request.query.lName : "test 2";
    callback(null, fName + " " + lName);
}

exports.lab = task
