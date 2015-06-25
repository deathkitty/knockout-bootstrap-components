/**
 * Created by johanvdm on 2015/06/18.
 */

$(function(){
    ko.components.register("kobs-table", {
        viewModel: function(params){
            var self = this;
            
            self.loading = params.loading || ko.observable(false);

            self.datasource = ko.pureComputed({
                read: function(){
                    if(ko.isObservable(params.datasource)){
                        return params.datasource();
                    }
                    
                    return params.datasource;
                },
                write: function(value){
                    self.total(value.total);
                    return value;
                }
            });
            
            self.dataCallback = params.dataFunction;
            
            self.pageMode = ko.observable(params.pageMode);

            /* Page size settings */
            self.pageSize = ko.observable(params.pageSize || 10);
            self.pageSizes = ko.observableArray(params.pageSizes || [10, 20, 50]);
            self.page = ko.observable(params.page || 1);
            
            self.total = ko.computed(function(){
                if(self.datasource()) {
                    return self.datasource().total;
                }
                
                return 0;
            });
            
            self.pages = ko.computed(function(){
                if((self.total() / self.pageSize()) % 1 != 0){
                    return  Math.ceil(self.total() / self.pageSize());
                }

                return self.total() / self.pageSize();
            });
            
            /* A computed for showing a list of pages depending on how many pages there are */
            self.showPages = ko.observableArray();
            self.page.subscribe(function(newValue) {
                var pageArr = [];
                
                if(self.pages() < 7){
                    for(var i = 1; i <= self.pages(); i++){
                        pageArr.push(i);
                    }
                }
                
                self.showPages(pageArr);
            });
            
            self.refresh = function(){
                if(self.dataCallback){
                    self.dataCallback(self.page(), self.pageSize());
                }
                
            };
            
            self.nextPage = function(){
                if(self.page() < self.pages()){
                    self.page(self.page() + 1);
                    self.refresh();
                }
            };
            
            self.hasNextPage = ko.computed(function(){
                return self.page() < self.pages();
            });

            self.previousPage = function(){
                if(self.page() > 1){
                    self.page(self.page() - 1);
                    self.refresh();
                }
            };
            
            self.hasPreviousPage = ko.computed(function(){
                return self.page() > 1;
            });
            
            self.selectPageSize = function(data){
                self.pageSize(data);
                
                self.refresh();
            };

            /* Functions go here */
            self.initialize = function(){
                //if(ko.isObservable(params.datasource)){
                //    self.datasource = params.datasource;
                //}else if(kobs.isArray(params.datasource)){
                //    for(var index in params.datasource){
                //        self.datasource.push(params.datasource[index]);
                //    }
                //}

                
                self.refresh();
            }();
        },
        template: kobsTemplates["templates/knockout-bootstrap-table.html"]
    }); 
});