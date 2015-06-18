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

})(kobs);

$(function(){
    // Register our url template loader
    ko.components.loaders.unshift(kobs.templateFromUrlLoader);
});