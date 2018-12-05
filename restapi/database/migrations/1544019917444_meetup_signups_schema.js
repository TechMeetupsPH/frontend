'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MeetupSignupsSchema extends Schema {
  up () {
    this.create('meetup_signups', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('meetup_signups')
  }
}

module.exports = MeetupSignupsSchema
