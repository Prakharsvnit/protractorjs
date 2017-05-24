describe('angularjs.org', function() {
browser.waitForAngularEnabled(false);
         
        browser.get('http://angularjs.org/');   

    it('should click DEVELOP and then API Reference button', function(){   
     
     var developButton = element.all( by.css('li .dropdown-toggle')).get(1);
     developButton.click();

     var api = element(by.xpath('//*[@id="navbar-main"]/div/div/ul/li[2]/ul/li[2]/a'));
     api.click();

     var box = element(by.css('.search-query')).clear().sendKeys("Filter");
     box.clear().sendKeys("Filter");

     browser.debugger();
     
     var filter = element(by.css('.search-results-container')).all(by.css('[ng-click="hideResults()"]')).get(0);
     filter.click();

    });
});
