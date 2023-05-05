import login_pom from "../../support/POM/Login_POM/login_pom";
/// <reference types='Cypress' />

describe('Casos de prueba flujo Login', () =>{
    const master_login=new login_pom()

    master_login.page_access()
    master_login.fields()
    master_login.data_fields()
    master_login.correct_access()

    Cypress.on('uncaught;exception', (err, runnable) => {
        return false
    })
}) //Final describe