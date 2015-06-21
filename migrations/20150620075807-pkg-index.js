'use strict';

module.exports = {
  up: function (migration, Sequelize) {
      return migration.sequelize.query("CREATE INDEX pkg_qty_container_size_idx ON pkg (qty, container, size);");
  },

  down: function (queryInterface, Sequelize) {
      return migration.sequelize.query("DROP INDEX pkg_qty_container_size_idx");
  }
};
