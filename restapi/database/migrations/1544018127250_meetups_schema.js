'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetupsSchema extends Schema {
  up () {
    this.create('meetups', (table) => {
      table.increments()
      table.string('title').unique();
      table.string('summary_image_url')->nullable();
      table.text('detail');
      table.datetime('start_date').defaultTo(knex.fn.now());
      table->dateTime('end_date').defaultTo(knex.fn.now());
      table.string('address');
      table.decimal('latitude');
      table.decimal('longitude');
      table->string('city');
      table.timestamps()
    })
  }

  down () {
    this.drop('meetups')
  }
}

module.exports = MeetupsSchema
