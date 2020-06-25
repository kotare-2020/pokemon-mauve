
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Rose'},
        {id: 2, name: 'Jayden'},
        {id: 3, name: 'Richard'},
        {id: 4, name: 'Nick'}
      ]);
    });
};
