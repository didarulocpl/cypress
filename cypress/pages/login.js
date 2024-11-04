class Login{
 LoginHeader='header>div>div>a'
 LoginBody='div[class="signup-body"]'
 UserName='input[id="username"]'
 Password='input[name="password"]'
 LoginButton='input[name="login"]'

 ClickHeaderLogin(){
    cy.get(this.LoginHeader).contains('Login').click()
 }

 ClickBodyLogin(){
    cy.get(this.LoginBody).click()
 }

 SetUserName(username){
    cy.get(this.UserName).type(username)
 }

 SetPassword(password){
    cy.get(this.Password).type(password)
 }

 ClickLogin(){
    cy.get('input[name="login"]').click()
 }
      
    
}

module.exports = new Login()