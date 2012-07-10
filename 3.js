var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./jquery.min.js").toString();

jsdom.env({
   html: 'http://lipki',
   src: [
      jquery
   ],
   done: function(errors, window) {
        var $ = window.$;
        $( '#user_name').val('admin');
        $( '#user_password').val('qwerty');
        
   }
});

