import salutationsModel from './salutations.model.js';

export const trouversalutation = async (req, res) => {
  res.json(await salutationsModel.getSalutations());
};

export const getSalutationliste = async (req, res) => {
  const { code_langue } = req.params;
  
  const languesValides = ['fr', 'en', 'es', 'de'];
  if (!languesValides.includes(code_langue)) {
    return res.status(400).json({
      error: 'Code de langue invalide. Langues valides: fr, en, es, de'
    });
  }

  try {
    const salutationsFiltrees = await salutationsModel.getSalutationsByLangue(code_langue);
    
    if (salutationsFiltrees.length === 0) {
      return res.status(404).json({
        error: 'Aucune salutation trouvée pour cette langue'
      });
    }

    res.json(salutationsFiltrees);
  } catch(erreur) {
   
  }
};