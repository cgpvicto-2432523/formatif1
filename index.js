// Importer le module express
import express from 'express';
import salutationsRouter from './salutations.route.js';

// Créer une application express
const app = express();
const PORT = 3000;
app.use(express.json());


app.use('/salutations', salutationsRouter);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

