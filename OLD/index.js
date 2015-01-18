'use strict';

var GoogleSpreadsheets = require("google-spreadsheets");
GoogleSpreadsheets({
    key: "1r7uEJ4XGnDH5cN3CbuUgAolt0u_2tKv1x_91_k6o1Jo"
}, function(err, spreadsheet) {
  console.log(spreadsheet);
    spreadsheet.worksheets[0].cells({
    }, function(err, tables) {
      console.log(tables.cells);
        // Cells will contain a 2 dimensional array with all cell data in the
        // range requested.
    });
});
