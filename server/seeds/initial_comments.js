exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, comment: 'this is a comment'},
        {id: 2, comment: 'and so is this'}
      ]);
    });
};