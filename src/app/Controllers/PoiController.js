// import HaversineGeolocation from 'haversine-geolocation';

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
