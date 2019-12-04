import Poi from '../Models/Poi';

class PoiController {
  async index(req, res) {
    const poi = await Poi.findAll({
      order: ['id'],
      attributes: ['id', 'name', 'coordinate_x', 'coordinate_y'],
    });

    return res.json(poi);
  }

  async show(req, res) {
    return res.json({ ok: true });
    // SELECT id,
    // (6371 * acos(
    //  cos( radians(-30.053831) )
    //  * cos( radians( lat ) )
    //  * cos( radians( lng ) - radians(-51.191810) )
    //  + sin( radians(-30.053831) )
    //  * sin( radians( lat ) )
    //  )
    // ) AS distancia
    // FROM enderecos
    // HAVING distancia < 25
    // ORDER BY distancia ASC
    // LIMIT 4;

    // const radiusKm = 6371; //raio aproximado do planeta em quilômetros
    // const radiusMi = 3959; //raio aproximado do planeta em milhas

    // converte graus para radianos
    // Math.radians = function (degrees) {
    // return degrees * Math.PI / 180;
    // };

    // calcula a distância entre pontos
    // function calc(lat, lng) {
    // const distance = (radiusKm * Math.acos(
    // Math.cos(Math.radians(-30.053831))
    // * Math.cos(Math.radians(lat))
    // * Math.cos(Math.radians(lng) - Math.radians(-51.191810))
    // + Math.sin(Math.radians(-30.053831))
    // * Math.sin(Math.radians(lat)),
    // ));

    // return distance;
    // }

    // pega a posição atual
    // const myposition = calc(mylat, mylng);
    // pega a posição mais próxima
    // const bestPosition =  calc(lat, lng)

    // verifica se a posição mais próxima é menor que 10
    // if(position < 10){
    // return { all positions}
    // }
  }

  async store(req, res) {
    const { id, name, coordinate_x, coordinate_y } = await Poi.create(req.body);

    return res.json({
      id,
      name,
      coordinate_x,
      coordinate_y,
    });
  }
}

export default new PoiController();
