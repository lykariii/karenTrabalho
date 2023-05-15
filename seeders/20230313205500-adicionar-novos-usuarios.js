'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('usuarios', [
        {nome: 'Gabriel'},
        {nome: 'Mendes'},
        {nome: 'Any'},
        {nome: 'Karen'},
        {nome: 'Mamacita'},
        {nome: 'Isabel'},
        {nome: 'Karina'},
        {nome: 'Toria'}
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
