function buildData(page,  pageSize, items){
    var data = items +
        {
            number: page,
            column1: "data1",
            column2: "data2",
            column3: "data3",
            column4: "data4"
        };
}

function ExampleViewModel(){
    var self = this;
    
    self.tableData = ko.observable({
        "page": 1,
        "pageSize": 50,
        "data": [
            {
                "number": 1,
                "column1": "data1",
                "column2": "data2",
                "column3": "data3",
                "column4": "data4"
            },
            {
                "number": 2,
                "column1": "data1",
                "column2": "data2",
                "column3": "data3",
                "column4": "data4"
            },
            {
                "number": 3,
                "column1": "data1",
                "column2": "data2",
                "column3": "data3",
                "column4": "data4"
            },
            {
                "number": 4,
                "column1": "data1",
                "column2": "data2",
                "column3": "data3",
                "column4": "data4"
            }
        ]});
}

$(function(){
    ko.applyBindings(new ExampleViewModel(), document.getElementById("main"));
});