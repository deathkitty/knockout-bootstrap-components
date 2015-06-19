$(function(){
    ko.components.register("kobs-combocheckbox", {
        viewModel: function(params){
            var self = this;

            // When the page loads, hide the combo box's menu.
            self.show = ko.observable(false);

            self.testData = ko.observableArray([
                {label:"Test 001", value:"test_001"},
                {label:"Test 002", value:"test_002"},
                {label:"Test 003", value:"test_003"},
                {label:"Test 004", value:"test_004"},
                {label:"Test 005", value:"test_005"},
                {label:"Test 006", value:"test_006"},
                {label:"Test 007", value:"test_007"},
                {label:"Test 008", value:"test_008"},
                {label:"Test 009", value:"test_009"},
                {label:"Test 010", value:"test_010"},
                {label:"Test 011", value:"test_011"},
                {label:"Test 012", value:"test_012"},
                {label:"Test 013", value:"test_013"},
                {label:"Test 014", value:"test_014"},
                {label:"Test 015", value:"test_015"},
                {label:"Test 016", value:"test_016"},
                {label:"Test 017", value:"test_017"},
                {label:"Test 018", value:"test_018"},
                {label:"Test 019", value:"test_019"},
                {label:"Test 020", value:"test_020"}
            ]);

            // When the Select button is clicked, show/hide the menu.
            self.toggleMenu = function(){
                self.show(!self.show());
            };

            // When a menu item is clicked, toggle the check box.
            self.itemClicked = function(data, e){
                var item = $(e.target.childNodes[0]) || undefined;
                if (item){
                    item.prop('checked', !item.prop('checked'));
                }
            };
        },
        template: kobsTemplates["templates/knockout-bootstrap-combocheckbox.html"]
    });
});






/*

$(document).ready(function(){
    // When the page loads, hide the combo box's menu.
    $('.cbox>ul').hide();

    // When the Select button is clicked, show/hide the menu.
    $('.cbox>p').click(function(){
        $('.cbox>ul').toggle();
    });

    // When a menu item is clicked, toggle the check box.
    $('.cbox>ul>li').click(function(e){

    });

    // Add an event listener to the document.  When clicking outside of the combo box container, hide the menu.
    $(document).click(function (e){
        var comboBox = $('.cbox');
        var menu = $('.cbox>ul');

        if(!$(e.target).is(comboBox) && comboBox.has(e.target).length === 0){
            menu.hide();
        }
    });
});

    */