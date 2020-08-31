const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log('Base de datos ONLINE');

    } catch (error) {
        console.log(error);
        // Detiene la ejecución de la aplicación
        throw new Error('Error al iniciar la BD');
    }

}

module.exports = {
    dbConnection
}