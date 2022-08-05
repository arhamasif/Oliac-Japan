import React from 'react'
import './datatableorder.scss'
import { DataGrid } from '@mui/x-data-grid';
import {orderColumns, orderRows} from "../datatableorder.js";
import { Link } from 'react-router-dom';

const Datatableorder = () => {
  const actionColumn = [{ 
    field:"action", 
    headerName: "Action",
    width: 200,
    renderCell:()=>{
      return(
      <div className='cellAction'>
        <Link to='/users/test' style={{textDecoration:'none'}}> 
        <div className="viewButton">View</div></Link>
        <div className="editButton">Edit</div>
        <div className="deleteButton">Delete</div>
      </div>
      )
  }
}]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
            Order PANEL
          <Link to='/orders/new' style={{textDecoration:'none'}} className="link">  
          Add New
          </Link>
        </div>
        <DataGrid
        className='datagrid'
            rows={orderRows}
            columns={orderColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[5]}
            checkboxSelection
      />
    </div>
  );
};

export default Datatableorder;