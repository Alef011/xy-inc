import Sequelize, { Model } from 'sequelize';

class Poi extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        coordinate_x: Sequelize.INTEGER,
        coordinate_y: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Poi;
