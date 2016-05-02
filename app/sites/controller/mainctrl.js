(function(){
  'use strict'

      angular
        .module('testpage')
        .controller('mainctrl', mainctrl);

  function mainctrl($state) {
    var ctrl= this;

    ctrl.state = $state;

    ctrl.pricing = [
      {
        title:'Personal',
        price:'Free',
        content:'Just started using awesome module. Great way to boost the hard designing or prototyping process',
        features:'Per month billed annualy or $250 from month to month',
        button: 'Get it'
      },
      {
        title:'Agency',
        price:'123',
        content:'Also a perfect tool for creative studios and freelancers',
        features:'Per month billed annualy or $250 from month to month',
        button: 'Buy now',
        sign:'$'
      },
      {
        title:'Unlimited',
        price:'232',
        content:'Living in today\'s metropolitan world of cellular phone, mobile computers',
        features:'Per month billed annualy or $250 from month to month',
        button: 'Buy now',
        sign:'$'
      }
    ];



  }
})();