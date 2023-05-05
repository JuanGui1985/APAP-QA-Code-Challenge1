class hover_pom{

    page_access(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/hovers'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo) 
        })

        it('Prueba de flujo 3. Hover.', () => {
            cy.log("Acceder a la página de hovers.")        
        });
    }

    images(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/hovers'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('<h5>name: user1</h5>')
            cy.wait(tiempo)
            cy.get('<h5>name: user2</h5>')
            cy.wait(tiempo)
            cy.get('<h5>name: user3</h5>')
            cy.wait(tiempo)
        })

        it('Prueba de flujo 3. Hover.', () => {
            cy.log("Verificar que las imágenes estén disponibles.")        
        });
    }

    hover_image1(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/hovers'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('.figure').first().trigger('mouseover')
            cy.get('.figcaption').find('div > h5').should('contain', 'name: user1')
            cy.wait(tiempo)
        })

        it('Prueba de flujo 3. Hover.', () => {
            cy.log("Realizar hover sobre la primera imagen.")        
        });
    }

    hover_option(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/hovers'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('.figure').first().trigger('mouseover')
            cy.get('.figcaption').should('contain', 'name: user1')
            cy.wait(tiempo)
        })

        it('Prueba de flujo 3. Hover.', () => {
            cy.log("Verificar que se muestre la opción correspondiente.")        
        });
    }

    hover_urlProfile(){
        let tiempo=1000
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/hovers'),
            cy.title().should('eq','The Internet')
            cy.wait(tiempo)
            cy.get('.figure').first().trigger('mouseover')
            cy.get('.figcaption a').invoke('attr', 'href').then((href) => {
                cy.visit('https://the-internet.herokuapp.com${href}')
                cy.get('<h1>Not Found</h1>').should('eq', '<h1>Not Found</h1>')
            })  
            cy.wait(tiempo)
        })

        it('Prueba de flujo 3. Hover.', () => {
            cy.log("Hacer clic en la opción correspondiente y verificar que se redirija a la página correspondiente.")        
        });
    }
} //Final de la clase

export default hover_pom;