
exports.up = function(knex) {
  return knex.schema("users", table => {
    table.increments()
    table.text("username", 128)
        .unique()
    table.text("password", 128)
    table.text("department", 128)
    
    
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
};
