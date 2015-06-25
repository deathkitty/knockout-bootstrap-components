function kobsTableExampleViewModel(){
    var self = this;
    
    self.tableData = ko.observable();
    
    self.tableLoading = ko.observable(false);
    
    self.getData = function(page, pageSize){
        self.tableLoading(true);
        $.getJSON("../data/table" + page + ".json", function(data){
            self.tableData(data);
            self.tableLoading(false);
        });
    };
}

$(function(){
    ko.applyBindings(new kobsTableExampleViewModel(), document.getElementById("main"));
});