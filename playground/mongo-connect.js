const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('could not connect to MongoDB');
    }
    console.log('Yeah we were able to connect!!');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'my first todo from nodejs',
        completed: false
    }, (err, result)=> {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();


});
