function kobsCCBExampleViewModel(){
    var self = this;

    self.testData = ko.observableArray([
        {label:"Test 001", value:"test_001", selected:true},
        {label:"Test 002", value:"test_002", selected:false},
        {label:"Test 003", value:"test_003", selected:false},
        {label:"Test 004", value:"test_004", selected:false},
        {label:"Test 005", value:"test_005", selected:false},
        {label:"Test 006", value:"test_006", selected:false},
        {label:"Test 007", value:"test_007", selected:false},
        {label:"Test 008", value:"test_008", selected:false},
        {label:"Test 009", value:"test_009", selected:false},
        {label:"Test 010", value:"test_010", selected:false},
        {label:"Test 011", value:"test_011", selected:false},
        {label:"Test 012", value:"test_012", selected:false},
        {label:"Test 013", value:"test_013", selected:false},
        {label:"Test 014", value:"test_014", selected:false},
        {label:"Test 015", value:"test_015", selected:false},
        {label:"Test 016", value:"test_016", selected:false},
        {label:"Test 017", value:"test_017", selected:false},
        {label:"Test 018", value:"test_018", selected:false},
        {label:"Test 019", value:"test_019", selected:false},
        {label:"Test 020", value:"test_020", selected:false}
    ]);

    self.selectedItems = ko.observableArray();
}

$(function(){
    ko.applyBindings(new kobsCCBExampleViewModel(), document.getElementById("main"));
});