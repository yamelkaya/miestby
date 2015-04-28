var clientConfig = require('../client-config');
var _ = require('lodash');

module.exports = new AppUtils();

function AppUtils(){

}

AppUtils.prototype.generatePageInfo = function(path){
    var menuItems = clientConfig.menuItems;
    var menu = [];

    _.forEach(menuItems,function(item){
       menu.push(_.defaults({},item,{class : item.path == path  ? 'active' : ''}));
    });

    return {

        menu: menu
    }
}

