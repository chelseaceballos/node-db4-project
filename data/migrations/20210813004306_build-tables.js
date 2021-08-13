
exports.up = async function (knex) {
    await knex.schema
    .createTable('recipes', table => {
      table.increments()
     
    })
     
    .createTable('ingredients', table => {
        table.increments()
       
    })
    .createTable('steps', table => {
        table.increments()
       
    })
    .createTable('ingredients_steps', table => {
        table.increments()
      
    })
   };
    
   exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('ingredients_steps')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
   };
    
   