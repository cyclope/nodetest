var tobi = require('tobi')
  , browser = tobi.createBrowser( 80, 'lipki'  );

browser.get('/index.php?action=Login&module=Users&login_module=Home&login_action=index', function(res, $){
  var form = $('form#form');
  $('#user_name', form).val( 'admin');
  $('#user_password', form).val( 'qwerty');
  $('form#form').submit(function(){
    browser.get( '/index.php?module=Home&action=index', function( res,$ ){
	var ev = $( 'body' );
	console.log( $(ev).html() );
    });
  });
});
