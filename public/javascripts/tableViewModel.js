/**
 * Created by johanvdm on 2015/06/24.
 */

function tableViewModel(){
    var self = this;

    self.tableData = ko.observable();

    self.datasourceExampleData = ko.observable({
        data: [
            {name: "Buck", surname: "Gardner", username: ""},
            {name: "Jaslyn", surname: "Potter", username: ""},
            {name: "Lyndsay", surname: "Gage", username: ""},
            {name: "Arleen", surname: "Stacy", username: ""},
            {name: "Titus", surname: "Acker", username: ""}
        ]
    });
    
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
    ko.applyBindings(new tableViewModel(), document.getElementsByClassName("main")[0]);

    $('#sidenav').affix({
        offset: {
            top: $('#sidenav').offset().top
        }
    });

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});