var jsdom  = require('jsdom');
var fs     = require('fs');
var jquery = fs.readFileSync("./jquery.min.js").toString();

jsdom.env({
   html: 'http://yandex.ru',
   src: [
      jquery
   ],
   done: function(errors, window) {
      var $ = window.$;
      console.log( $('#text').length  );
   }
});
