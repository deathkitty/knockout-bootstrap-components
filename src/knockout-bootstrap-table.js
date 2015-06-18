/**
 * Created by johanvdm on 2015/06/18.
 */

$(function(){
    ko.components.register("kobs-table", {
        viewModel: function(params){
            var self = this;

            self.datasource = params.datasource;

            self.pageable = params.pageable ? true : false;

            self.page = ko.computed(function(){
                return self.datasource().page;
            });
            
            self.pageSize = ko.computed(function(){
                return self.datasource().pageSize;
            });
            
            self.total = ko.computed(function(){
                return self.datasource().total;
            });

            self.pages = ko.computed(function(){
                if((self.total() / self.pageSize()) % 1 != 0){
                    return  (self.total() / self.pageSize()) | 0;
                }

                return self.total() / self.pageSize();
            });

            self.nextPage = function(){  
                var callback = params.nextPage;

                console.log(self);
                console.log(self.datasource());
                console.log(self.pages());
                
                if(self.page() < self.pages()){
                    callback(self.page() + 1, self.pageSize());
                }
            };

            self.previousPage = function(){
                var callback = params.previousPage;

                if(self.page() > 1){
                    callback(self.page() - 1, self.pageSize());
                }
            };
        },
        template: kobsTemplates["templates/knockout-bootstrap-table.html"]
    }); 
});