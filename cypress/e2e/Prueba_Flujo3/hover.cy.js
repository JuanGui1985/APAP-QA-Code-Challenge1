import hover_pom from "../../support/POM/Hover_POM/hover_pom";
/// <reference types='Cypress' />

describe('Casos de prueba flujo Hovers', () =>{
    const master_hover=new hover_pom()

    master_hover.page_access()
    master_hover.images()
    master_hover.hover_image1()
    master_hover.hover_option()
    master_hover.hover_urlProfile()

    Cypress.on('uncaught;exception', (err, runnable) => {
        return false
    })
}) //Final describe
