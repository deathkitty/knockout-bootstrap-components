$(function(){
    ko.components.register("kobs-combocheckbox", {
        viewModel: function(params){
            var self = this;

            // Get the values for the combo-box data, selected data, prompt and key names from the parameters or use the
            // default values.
            self.comboboxData = params.data || undefined;
            self.selectedData = params.selectedData || undefined;

            // Refresh the combo-box data to reflect the checked/unchecked state of the checkboxes.  This is done to
            // notify all the observers that a change occurred in the data so that the user interface may be updated.
            self.refresh = function(){
                // Create a temp array with all the elements of the combo-box data in their current state.
                var tempArray = self.comboboxData().slice(0);
                // Remove all elements from the combobox array.
                self.comboboxData.removeAll();
                // Re-insert all the data into the combobox array.
                for(var index in tempArray){
                    self.comboboxData.push(tempArray[index]);
                }
            };

            // Prevent the combo-box from closing once an item has been selected.
            self.onDropdownClick = function(data){
                return true;
            };

            // When a list item is clicked, invert the selection status then update the array of selected items.
            self.listItemClicked = function(data){
                // Invert the selection status.
                data.selected = !data.selected;

                // If the item was checked, add it to the array of selected items.  If it was unchecked, remove it from
                // the aforementioned array.
                if (data.selected){
                    self.selectedData.push(data);
                }else if(!data.selected){
                    self.selectedData.remove(data);
                }

                // Refresh the combo-box data.
                self.refresh();
                return true;
            };
        },
        template: kobsTemplates["templates/knockout-bootstrap-combocheckbox.html"]
    });
});