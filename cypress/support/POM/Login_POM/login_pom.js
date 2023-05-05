class login_pom{

    page_access(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/login'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo) 
        })
        it('Prueba de flujo 1. Login.', () => {
            cy.log("Acceso a la página de inicio")        
        });
    }

    fields(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/login'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('#username')
            cy.wait(tiempo)
            cy.get('#password')
            cy.wait(tiempo)
        })
        it('Prueba de flujo 1. Login.', () => {
            cy.log("Verificar que los campos de entrada para el nombre de usuario y la contraseña estén disponibles y sean obligatorios.")        
        });
    }

    data_fields(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/login'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('#username').type("Csle456*#.,")
            cy.wait(tiempo)
            cy.get('#password').type("Csle456*#.,")
            cy.wait(tiempo)
        })
        it('Prueba de flujo 1. Login.', () => {
            cy.log("Verificar que los campos de entrada permitan el ingreso de los datos necesarios.")        
        });
    }

    correct_access(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/login'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('#username').type("tomsmith")
            cy.wait(tiempo)
            cy.get('#password').type("SuperSecretPassword!")
            cy.wait(tiempo)
            cy.get('#login > button').type("cypres io {enter}")
            cy.wait(tiempo)
        })
        it('Prueba de flujo 1. Login.', () => {
            cy.log("Ingresar un nombre de usuario y contraseña válidos.")        
        });
    }            
} //Final

export default login_pom;