/**
 * Created by johanvdm on 2015/06/12.
 */

var kbc = {};

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

})(kbc);

$(function(){
    // Register our url template loader
    ko.components.loaders.unshift(kbc.templateFromUrlLoader);

    ko.components.register("kobs-table", {
        viewModel: function(params){
            var self = this;
            
            self.datasource = params.datasource;// ko.observable();

            self.pageable = params.pageable ? true : false;

            self.page = ko.observable(1);
            self.pageSize = ko.observable(10);
            self.pages = ko.observable(0);

            self.total = ko.observable(0);

            self.nextPage = function(){
                var callback = params.nextPage;

                if(self.page() < self.pages()){
                    callback(self.page(), self.pageSize());
                }
            };

            self.previousPage = function(){
                var callback = params.previousPage;

                if(self.page() > 1){
                    callback(self.page(), self.pageSize());
                }
            };
        },
        template: {fromUrl: "../templates/kobs-table.html"}
    });
});