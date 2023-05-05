class dropdown_pom{

    page_access(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/dropdown'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo) 
        })

        it('Prueba de flujo 4. Dropdown.', () => {
            cy.log("Acceder a la página de dropdown.")        
        });
    }

    check_list(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/dropdown'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('<select id="dropdown">')
            cy.wait(tiempo)
        })

        it('Prueba de flujo 4. Dropdown.', () => {
            cy.log("Verificar que la lista desplegable esté disponible.")        
        });
    }

    check_option(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/dropdown'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('select#dropdown').select('Option 1')
            cy.get('select#dropdown').should('have.value', '1')
            cy.wait(tiempo)
            cy.get('select#dropdown').select('Option 2')
            cy.get('select#dropdown').should('have.value', '2')
            cy.wait(tiempo)
        })

        it('Prueba de flujo 4. Dropdown.', () => {
            cy.log("Seleccionar una opción de la lista desplegable.")        
        });
    }
} // Final de la clase

export default dropdown_pom;