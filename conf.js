exports.config = {
  framework: 'jasmine',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
   onPrepare: function () {    
        browser.driver.manage().window().setSize(1680, 900);        
	}
}