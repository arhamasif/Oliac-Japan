import React from 'react'
import './datatabledelivery.scss'
import { DataGrid } from '@mui/x-data-grid';
import {deliveryColumns, deliveryRows} from "../demo.js";
import { Link } from 'react-router-dom';

const Datatabledelivery = () => {
  const actionColumn = [{ 
    field:"action", 
    headerName: "Action",
    width: 200,
    renderCell:()=>{
      return(
      <div className='cellAction'>
        <Link to='/users/test' style={{textDecoration:'none'}}> 
        <div className="viewButton">View</div></Link>
        <div className="deleteButton">Delete</div>
      </div>
      )
  }
}]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Delivery PANEL
        </div>
        <DataGrid
        className='datagrid'
            rows={deliveryRows}
            columns={deliveryColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
            checkboxSelection
      />
    </div>
  );
};

export default Datatabledelivery;