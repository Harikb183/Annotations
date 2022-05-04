sap.ui.define([],
function (){
    "use strict";
    return {
        onCreatePress: function(oEvent) {
            alert('Create button is pressed');
        },
        onEditPress: function(oEvent) {
            alert('Edit button is pressed');
        },
        onDeletePress: function(oEvent) {
            alert('Delete button is pressed');
        }
    };
});
