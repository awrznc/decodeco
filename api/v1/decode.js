import { decodeco } from '../../src/decodeco.js';

module.exports = (req, res) => {
  const { target = '' } = req.query;
  let result = '';
  try {
    result = decodeco(target);
    res.status(200).send(result);
  } catch(error) {
    res.status(500).send('error');
  }
}
