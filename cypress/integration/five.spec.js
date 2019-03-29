describe ('Sixth Tests', () => {
  context ('No Todos', () => {
    it ('Adds a new todo', () => {
      cy.visit ('/');
      cy.get ('.new').type ('sametime').type ('{enter}');
    });
  });
});