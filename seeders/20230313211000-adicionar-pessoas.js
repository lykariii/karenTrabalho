'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('pessoas', [
      {nome: 'Gabriel', sobrenome: 'Diniz', idade: 16, altura:'169'},
      {nome: 'Isabela ', sobrenome: 'Mendes', idade: 16, altura:'155'},
      {nome: 'Any ', sobrenome: 'Satos', idade: 16, altura:'151'},
      {nome: 'Karen ', sobrenome: 'Decleva', idade: 16, altura:'163'},
      {nome: 'Izabella ', sobrenome: 'Miranda', idade: 17, altura:'158'},
      {nome: 'Isabela ', sobrenome: 'Gualberto', idade: 17, altura:'153'},
      {nome: 'Karina ', sobrenome: 'Decleva', idade: 16, altura:'163'},
      {nome: 'Vitória ', sobrenome: 'Medeiros', idade: 16, altura:'105'},
      {nome: 'Karol ', sobrenome: 'Silva', idade: 16, altura:'109'} 
    ], {});
},


  async down (queryInterface, Sequelize) {
  }
};
