$(function(){
    ko.components.register("kobs-combocheckbox", {
        viewModel: function(params){
            var self = this;

            // Get the values for the combo-box data, selected data, prompt and key names from the parameters or use the
            // default values.
            self.inputIsReadOnly = params.readOnly === false ? false : true;
            self.dataSource     = params.data     || undefined;
            self.listHeight      = params.height   || "300px";
            self.promptString    = params.prompt   || "Please select...";
            self.labelKeyName    = params.labelKey || "label";
            self.valueKeyName    = params.valueKey || "value";
            self.stateKeyName    = params.stateKey || "selected";

            // Define the observable values.
            self.selectedData  = params.selected || ko.observableArray();
            self.filterText    = ko.observable('');
            self.inputHasFocus = ko.observable(false);

            // Calculate computed observables.
            self.displayText = ko.computed(function(){
                if(!self.inputIsReadOnly && self.inputHasFocus()){
                    return self.filterText();
                }
                return self.promptString
            });

            self.filteredItems = ko.computed(function() {
                if(!self.filterText()) {
                    return self.dataSource();
                } else {
                    return ko.utils.arrayFilter(self.dataSource(), function(item) {
                        var textToSearch = item[self.labelKeyName];
                        var regexPattern = new RegExp(self.filterText(),'ig');
                        return textToSearch.match(regexPattern) === null ? false : true;
                    });
                }
            });

            // Define observable subscriptions.
            self.displayText.subscribe(function(newValue) {
                if(self.inputHasFocus() && newValue !== self.promptString){
                    self.filterText(self.displayText());
                }
            });

            // Event handlers.
            self.inputKeyPressEvent = function(data, event){
                self.filterText(event.target.value);
                return true;
            };

            // Prevent the combo-box from closing once an item has been selected.
            self.onDropdownClick = function(data){
                return true;
            };

            // When a list item is clicked, invert the selection status then update the array of selected items.
            self.listItemClicked = function(data, event){
                // If the target of the click event was a check-box, the data needs to be flipped to counter the change
                // to the observable that was brought about by the markup change.
                if ($(event.target).is("input") && event.target.type === "checkbox"){
                    data[self.stateKeyName] = !data[self.stateKeyName];
                }

                // Invert the selection status.
                data[self.stateKeyName] = !data[self.stateKeyName];

                // If the item was checked, add it to the array of selected items.  If it was unchecked, remove it from
                // the aforementioned array.
                if (data[self.stateKeyName]){
                    self.selectedData.push(data);
                }else if(!data[self.stateKeyName]){
                    self.selectedData.remove(data);
                }

                // Refresh the combo-box data.
                self.refresh();

                return true;
            };

            // Refresh the combo-box data to reflect the checked/unchecked state of the checkboxes.  This is done to
            // notify all the observers that a change occurred in the data so that the user interface may be updated.
            self.refresh = function(){
                // Create a temp array with all the elements of the combo-box data in their current state.
                var tempArray = self.dataSource().slice(0);
                // Remove all elements from the combobox array.
                self.dataSource.removeAll();
                // Re-insert all the data into the combobox array.
                for(var index in tempArray){
                    self.dataSource.push(tempArray[index]);
                }
            };
        },
        template: kobsTemplates["templates/knockout-bootstrap-combocheckbox.html"]
    });
});