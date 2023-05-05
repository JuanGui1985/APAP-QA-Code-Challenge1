import dropdown_pom from "../../support/POM/Dropdown_POM/dropdown_pom";
/// <reference types='Cypress' />

describe('Casos de prueba flujo Dropdown', () => {

    const master_dropdown=new dropdown_pom()

        master_dropdown.page_access()
        master_dropdown.check_list()
        master_dropdown.check_option()

    Cypress.on('uncaught;exception', (err, runnable) => {
        return false
    })
}) //Final describe