var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    image: {type: String, required: true},
    name: {type: String, required: true},
    page_description: {type: String, required: true}
});

module.exports = mongoose.model('Product', schema); 