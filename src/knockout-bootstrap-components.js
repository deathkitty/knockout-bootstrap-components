/**
 * Created by johanvdm on 2015/06/12.
 */

var kobs = {};

(function(_root){

    _root.templateFromUrlLoader = {
        loadTemplate :function(name, templateConfig, callback){
            if (templateConfig.fromUrl) {
                // Uses jQuery's ajax facility to load the markup from a file
                var fullUrl = templateConfig.fromUrl;
                $.get(fullUrl, function (markupString) {
                    // We need an array of DOM nodes, not a string.
                    // We can use the default loader to convert to the
                    // required format.
                    ko.components.defaultLoader.loadTemplate(name, markupString, callback);
                });
            } else {
                // Unrecognized config format. Let another loader handle it.
                callback(null);
            }
        }
    };

    _root.isFunction = function(func) {
        var getType = {};
        return func && getType.toString.call(func) === '[object Function]';
    };
    
    _root.isArray = function(array){
        if( Object.prototype.toString.call( array ) === '[object Array]' ) {
            return true;
        }
        
        return false;
    };
    
    _root.guid = function() {
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    };
    
    _root.escapeHTML = function(str){
        return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
    };
    
})(kobs);

$(function(){
    // Register our url template loader
    ko.components.loaders.unshift(kobs.templateFromUrlLoader);
});