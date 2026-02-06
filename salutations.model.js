
const getSalutations = async (id) => {
  const requete = 'SELECT code_langue, langue, message FROM salutations WHERE id = ?';
  const params = [id];

  try {
    const [resultats] = await pool.query(requete, params);
    return resultats[0] ?? null;
  } catch(erreur) {
    console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
    throw erreur;
  }
};

const getSalutationsByLangue = async (code_langue) => {
  const requete = 'SELECT id, code_langue, langue, message FROM salutations WHERE code_langue = ?';
  const params = [code_langue];

  try {
    const [resultats] = await pool.query(requete, params);
    return resultats;
  } catch(erreur) {
    console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
    throw erreur;
  }
};

export default {
  getSalutations,
  getSalutationsByLangue
};