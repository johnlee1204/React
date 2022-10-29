import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import "./style.css";
import Grid from "./components/Grid";
import DocForm from "./components/DocForm";

export default function App() {
    const [docForm, updateDocForm] = React.useState({
        docFormState: "empty",
        docFormPreviousState: null,
        selectedId:null,
        docFormFields: {
            name: {originalValue:"", value:"", disabled:true},
            age: {originalValue:"", value:"", disabled:true}
        }
    });

    const [rows, setRows] = React.useState([
        { id: 1, name: 'John Lee', age: 22},
        { id: 2, name: 'Chris Lee', age: 22},
        { id: 3, name: 'Hannah Lee', age: 21},
        { id: 4, name: 'Evan Swift', age: 21}
    ]);

    const columns = [
        {field: 'id', headerName: 'ID', width: 150, hide: true},
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'age', headerName: 'Age', width: 150}
    ];

    function docFormCreate() {
        docFormSetState("new");
    }

    function docFormUpdate() {
        for(let i in docForm.docFormFields) {
            docForm.docFormFields[i].originalValue = docForm.docFormFields[i].value;
        }

        if(docForm.docFormState === "new") {
            let newRows = [];
            let ids = [];
            for(let i in rows) {
                ids.push(rows[i].id);
                newRows.push(rows[i]);
            }
            const newId = Math.max(...ids) + 1;
            newRows.push({ id: newId, name: docForm.docFormFields.name.value, age: parseInt(docForm.docFormFields.age.value)});
            docForm.selectedId = newId;
            setRows(newRows);
        } else if(docForm.docFormState === "edit") {
            for(let i in rows) {
                if(rows[i].id === docForm.selectedId) {
                    rows[i].name = docForm.docFormFields.name.value;
                    rows[i].age = docForm.docFormFields.age.value;
                    break;
                }
            }
            setRows(rows);
        }

        docFormSetState("view")
    }

    function docFormCancel() {
        switch(docForm.docFormState) {
            case "new":
                switch(docForm.docFormPreviousState) {
                    case "empty":
                        docFormSetState("empty");
                        break;
                    case "view":
                        for(let i in docForm.docFormFields) {
                            docForm.docFormFields[i].value = docForm.docFormFields[i].originalValue;
                        }
                        docFormSetState("view");
                        break;
                }
                break;
            case "edit":
                for(let i in docForm.docFormFields) {
                    docForm.docFormFields[i].value = docForm.docFormFields[i].originalValue;
                }
                docFormSetState("view");
                break;
        }
    }

    function docFormDelete() {
        const options = {
            title: 'Delete',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let newRows = [];
                        for(let i in rows) {
                            if(rows[i].id === docForm.selectedId) {
                                continue;
                            }
                            newRows.push(rows[i]);
                        }
                        setRows(newRows);
                        docFormSetState("empty")
                    }
                },
                {
                    label: 'No',
                    onClick: () => {}
                }
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            keyCodeForClose: [8, 32],
            overlayClassName: "overlay-custom-class-name"
        };

        confirmAlert(options);
    }

    function docFormSetState(docFormNewState) {
        if(docForm.docFormState === docFormNewState) {
            console.error("Already in state " + docFormNewState);
            return;
        }

        docForm.docFormPreviousState = docForm.docFormState;
        docForm.docFormState = docFormNewState;

        switch(docFormNewState) {
            case "empty":
                document.getElementById("docFormCreateButton").style.display = "inline";
                document.getElementById("docFormUpdateButton").style.display = "none";
                document.getElementById("docFormCancelButton").style.display = "none";
                document.getElementById("docFormDeleteButton").style.display = "none";

                for(let i in docForm.docFormFields) {
                    docForm.docFormFields[i].disabled = true;
                    docForm.docFormFields[i].originalValue = "";
                    docForm.docFormFields[i].value = "";
                }
                break;
            case "view":
                document.getElementById("docFormCreateButton").style.display = "inline";
                document.getElementById("docFormUpdateButton").style.display = "none";
                document.getElementById("docFormCancelButton").style.display = "none";
                document.getElementById("docFormDeleteButton").style.display = "inline";
                break;
            case "edit":
                document.getElementById("docFormCreateButton").style.display = "none";
                document.getElementById("docFormUpdateButton").style.display = "inline";
                document.getElementById("docFormCancelButton").style.display = "inline";
                document.getElementById("docFormDeleteButton").style.display = "none";
                break;
            case "new":
                document.getElementById("docFormCreateButton").style.display = "none";
                document.getElementById("docFormUpdateButton").style.display = "inline";
                document.getElementById("docFormCancelButton").style.display = "inline";
                document.getElementById("docFormDeleteButton").style.display = "none";

                for(let i in docForm.docFormFields) {
                    docForm.docFormFields[i].disabled = false;
                    docForm.docFormFields[i].value = "";
                }
                break;
            default:
                console.error("Invalid State: " + docFormNewState);
        }

        updateDocForm(Object.assign({},docForm));
    }

    function changeField(event) {
        docForm.docFormFields[event.target.id].value = event.target.value;
        let changeDetected = false;
        for(let i in docForm.docFormFields) {
            if(String(docForm.docFormFields[i].originalValue) !== String(docForm.docFormFields[i].value)) {
                changeDetected = true;
                break;
            }
        }
        if(!changeDetected){
            docFormSetState("view");
        } else if(docForm.docFormState === "view") {
            docFormSetState("edit");
        } else {
            updateDocForm(Object.assign({},docForm));
        }
    }

    function gridSelectionChange(event) {
        for(let i in docForm.docFormFields) {
            docForm.docFormFields[i].disabled = false;
            docForm.docFormFields[i].originalValue = event.row[i];
            docForm.docFormFields[i].value = event.row[i];
        }

        docForm.selectedId = event.id;
        if(docForm.docFormState === "view") {
            updateDocForm(Object.assign({},docForm));
        } else {
            docFormSetState("view");
        }
    }

    return (
        <div className="app">
            <Grid
                gridSelectionChange = {gridSelectionChange}
                rows = {rows}
                columns = {columns}
            />
            <DocForm
                docForm = {docForm}
                fieldChange = {changeField}
                docFormCreate = {docFormCreate}
                docFormUpdate = {docFormUpdate}
                docFormCancel = {docFormCancel}
                docFormDelete = {docFormDelete}
            />
        </div>
    );
};

