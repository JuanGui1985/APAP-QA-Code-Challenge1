class input_pom{

    page_access(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/inputs'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo) 
        })

        it('Prueba de flujo 2. Input.', () => {
            cy.log("Acceso a la página de inicio")        
        });
    }

    field(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/inputs'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('#content')
            cy.wait(tiempo)
        })

        it('Prueba de flujo 2. Input.', () => {
            cy.log("Verificar que el campo de entrada para el número esté disponible.")        
        });
    }

    pos_number(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/inputs'),
            cy.title().should('eq', 'The Internet')
            cy.wait(tiempo)
            cy.get('input[type=number]').type(Math.floor(Math.random() * 1000000000))
            cy.wait(tiempo)
        })

        it('Prueba de flujo 2. Input.', () => {
            cy.log("Ingresar un número positivo válido.")        
        });
    }

    neg_number(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/inputs'),
            cy.title().should('eq', 'The Internet')
            cy.wait(tiempo)
            cy.get('input[type=number]').type(getRandomNegativeNumber(-1000000000, 0))
            cy.wait(tiempo)

            function getRandomNegativeNumber(min, max) {
                const randomNumber = Math.floor(Math.random() * (max - min +1) + min)
                return randomNumber <= 0 ? randomNumber : -randomNumber
            }
        })

        it('Prueba de flujo 2. Input.', () => {
            cy.log("Ingresar un número negativo válido.")        
        });
    }
} //Final

export default input_pom; 