
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Rose', wins: 1, losses: 1},
        {id: 2, name: 'Jayden', wins: 2, losses: 1},
        {id: 3, name: 'Richard', wins: 1, losses: 0},
        {id: 4, name: 'Nick', wins: 1, losses: 2}
      ]);
    });
};
