const MongoClient = require('mongodb').MongoClient;
const MONGODB_URL = 'mongodb+srv://xmcdk:<>@cluster0.kzlpy.mongodb.net/<dbname>?retryWrites=true&w=majority'

Mongoose.connect(MONGODB_URL, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database...');
    }
    else{
        console.log('Connected to DB');
    }

   

   
});
