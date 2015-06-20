'use strict';
/* 
   According to https://github.com/sequelize/sequelize/issues/966, sequelize does not 
   yet handle foreign key constraints after the table has been defined. The recommended
   way to do so as of this writing is to use a raw sequel query to alter the table.
*/

module.exports = {
  up: function (migration, DataTypes) {
      return migration.sequelize.query("ALTER TABLE pkg ALTER COLUMN size TYPE decimal USING size::text::decimal")
	  .then(function(){
	      migration.sequelize.query("ALTER TABLE pkg ADD CONSTRAINT beersize_us_oz_fk FOREIGN KEY (size) REFERENCES beersize(us_oz) MATCH FULL");
      });

  },

  down: function (queryInterface, Sequelize) {
      return migration.changeColumn(
	  'pkg',
	  'size',
	  {
	      type: DataTypes.STRING
	  }
      );
  }
};
