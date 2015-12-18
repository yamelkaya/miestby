var clientConfig = require('../client-config');
var _ = require('lodash');

module.exports = new AppUtils();

function AppUtils(){

}

AppUtils.prototype.generatePageInfo = function(path){
    var menuItems = clientConfig.menuItems;
    var menu = [];
    var selected = null;

    _.forEach(menuItems,function(item){
       var i = _.defaults({},item);
       if ((item.path == path && (item.path== "/" || item.path=="")) || (item.path != "/" && item.path!="" && path.indexOf(item.path)!= -1)){
           i.class = 'active';
           selected = i;
       }
       menu.push(i);
    });

    return {
        menu: menu,
        selectedMenuItem : selected
    }
}

