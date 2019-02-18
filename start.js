const mongoose =  require('mongoose');
const app =  require('./app');
require('dotenv').config({ path: 'variables.env'})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true , 
useCreateIndex: true, useFindAndModify: false})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));
mongoose.connection.on('error', (err) => {
console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

require('./models/user');
require('./models/Note');

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`Social network running → PORT ${server.address().port}`);
    
})
