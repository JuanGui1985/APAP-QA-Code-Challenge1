import input_pom from "../../support/POM/Inputs/Input_POM";
/// <reference types='Cypress' />

describe('Casos de prueba flujo Inputs', () =>{
    const master_input=new input_pom()

    master_input.page_access()
    master_input.field()
    master_input.pos_number()
    master_input.neg_number()

    Cypress.on('uncaught;exception', (err, runnable) => {
        return false
    })
}) //Final describe
