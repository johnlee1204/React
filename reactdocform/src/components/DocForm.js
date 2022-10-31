import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faFloppyDisk, faXmark, faTrash} from "@fortawesome/free-solid-svg-icons";
import {TextField} from "@mui/material";
export default function DocForm(props) {
    return (
        <div className="docForm">
            <div className="docFormToolbar">
                <button id="docFormCreateButton" onClick={() => props.docFormCreate()}><FontAwesomeIcon icon={faPlus}/> New</button>
                <button id="docFormUpdateButton" onClick={() => props.docFormUpdate()}><FontAwesomeIcon icon={faFloppyDisk}/> Save</button>
                <button id="docFormCancelButton" onClick={() => props.docFormCancel()}><FontAwesomeIcon icon={faXmark}/> Cancel</button>
                <button id="docFormDeleteButton" onClick={() => props.docFormDelete()}><FontAwesomeIcon icon={faTrash}/> Delete</button>
                <span className="docFormState">{props.docForm.docFormState}</span>
            </div>
            <div className="docFormInputs">
                <TextField
                    id="name"
                    className="textField"
                    label="Name"
                    variant="standard"
                    value={props.docForm.docFormFields.name.value}
                    disabled={props.docForm.docFormFields.name.disabled}
                    onChange={(event) => props.fieldChange(event)}
                    style={(((props.docForm.docFormState === "edit" || props.docForm.docFormState === "view") && String(props.docForm.docFormFields.name.value) !== String(props.docForm.docFormFields.name.originalValue)) || (props.docForm.docFormState === "new" && String(props.docForm.docFormFields.name.value) !== "")) ? {background:"#FFFF8F"} : {}}
                ></TextField>
                <TextField
                    id="age"
                    className="textField"
                    label="Age"
                    variant="standard"
                    value={props.docForm.docFormFields.age.value}
                    disabled={props.docForm.docFormFields.age.disabled}
                    onChange={(event) => props.fieldChange(event)}
                    style={(((props.docForm.docFormState === "edit" || props.docForm.docFormState === "view") && String(props.docForm.docFormFields.age.value) !== String(props.docForm.docFormFields.age.originalValue)) || (props.docForm.docFormState === "new" && String(props.docForm.docFormFields.age.value) !== "")) ? {background:"#FFFF8F"} : {}}
                ></TextField>
            </div>
        </div>
    );
};