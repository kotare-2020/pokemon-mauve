
exports.up = function(knex) {
    return knex.schema.table('users', table => {
        table.string('wins')
        table.string('losses')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.table('users', table => {
      table.dropColumn('wins')
      table.dropColumn('losses')
    })
  }
  