/// <reference path="crud.d.ts" />
import * as CRUD from "./crud"
import { RowID, RowElement } from "./interface"

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);

const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(newRowID);
// Delete row id 125
