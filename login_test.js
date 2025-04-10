Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br')
    I.click('Login')
    I.fillField('#user','junynho2011@gmail.com')
    I.fillField('#password', secret('123456'))
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
    I.click('OK')
    I.wait(5)

}).tag('@sucesso')

Scenario('logar apenas com email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')

})

Scenario('logar sem senha e sem email',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')

})
Scenario('logar apenas com senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br')

})