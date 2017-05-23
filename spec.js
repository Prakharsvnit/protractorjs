describe('angularjs.org', function() {
browser.waitForAngularEnabled(false);

    beforeEach(function() {       
        browser.get('http://angularjs.org/');    
    });

    it('should click DEVELOP button', function(){   
       element.all( by.css('li .dropdown-toggle')).get(1).click(); 
    });
});