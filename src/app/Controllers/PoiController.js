import * as Yup from 'yup';

import getDistance from '../Lib/getDistance';

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
    const { coordinate_x, coordinate_y, metters } = req.query;

    const positions = await Poi.findAll({
      attributes: ['id', 'name', 'coordinate_x', 'coordinate_y'],
    });

    // const result = positions.map((p) => bd(x, y, p.coordinate_x, p.coordinate_y));
    // verify if distance is agree with the search
    const nearests = function getNearestLocations(location) {
      const distance = getDistance(
        coordinate_x,
        coordinate_y,
        location.coordinate_x,
        location.coordinate_y
      );

      if (distance <= metters) {
        return distance;
      }

      return 0;
    };

    // filter nearests results to find nearests locations
    const nearestsLocations = positions.filter(nearests);

    return res.json(nearestsLocations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      coordinate_x: Yup.number()
        .positive()
        .required(),
      coordinate_y: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }
    const { id, name, coordinate_x, coordinate_y } = await Poi.create(req.body);

    return res.json({
      id,
      name,
      coordinate_x,
      coordinate_y,
    });
  }

  async delete(req, res) {
    const position = await Poi.findByPk(req.params.id);

    return res.json(position);
  }
}

export default new PoiController();
