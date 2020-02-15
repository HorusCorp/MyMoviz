var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://Sombra:tendrepromesse69@cluster0-acvh2.mongodb.net/mymovies?retryWrites=true&w=majority',
    options,
    function(err){
        console.log('Connexion base de donnée : ENTREE AUTORISEE')
    }
)

module.exports = mongoose