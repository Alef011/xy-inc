import Sequelize from 'sequelize';

import Poi from '../app/Models/Poi';

import databaseConfig from '../config/database';

const models = [Poi];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
