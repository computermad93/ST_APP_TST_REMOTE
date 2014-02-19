$(document).ready( function() {
done();
});

function done() {
setTimeout( function() {
updates();
done();
}, 200);
}

function updates() {
$.getJSON("http://192.168.79.128/test/fetch.php", function(data) {
$("#listofswimmers").empty();
$.each(data.result, function(){
$("#listofswimmers").append("Name: "+this['name']+"Age: "+this['age']);
});
});
}