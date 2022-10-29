import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export default function Grid(props) {
    return (
        <div className="grid">
            <DataGrid onRowClick={props.gridSelectionChange} rows={props.rows} columns={props.columns} />
        </div>
    );
};