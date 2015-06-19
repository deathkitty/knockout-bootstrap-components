function kobsTableExampleViewModel(){
    var self = this;
    
    self.tableData = ko.observable();
    
    self.getData = function(page, pageSize){
        $.getJSON("../data/table" + page + ".json", function(data){
            self.tableData(data);
        });
    };
    
    self.next = function(page, pageSize){
        self.getData(page, pageSize);
    };

    self.previous = function(page, pageSize){
        self.getData(page, pageSize);
    };
    
    self.getData(1, 10);
}

$(function(){
    ko.applyBindings(new kobsTableExampleViewModel(), document.getElementById("main"));
});