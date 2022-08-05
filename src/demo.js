import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

function customCheckbox(theme) {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: `1px solid ${
        theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
      }`,
      borderRadius: 2,
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#1890ff',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
  ...customCheckbox(theme),
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function AntDesignGrid() {
    const deliveryColumns = [
        { field: "id", headerName: "ID", width: 70},
        {
            field:'customer',
            headerName: "Customer", 
            width: 200, 
        },
        {
            field:"car",
            headerName:"Car", 
            width:200, 
            renderCell: (params) => {
                return (
                    <div className="cellwithImg">
                        <img className="cellImg" src={params.row.img} alt='avatar' />
                        {params.row.car}
                    </div>
                )
            }
        },
        {
            field:"registration" , headerName:"Registration No." ,width:170,
        },
        {
            field:"status" , headerName:"Status" ,width:170,
            renderCell: (params) => {
                return(
                    <div className={`cellWithStatus ${params.row.status}`}>
                        {params.row.status}
                    </div>
                )
            }
        },
        {
            field:"date" , 
            headerName:"Date" ,
            width:170,
        },
        
    ]
  
    const deliveryRows = [
    {
        id: 101,
        car: "Honda City",
        registration: "BHZ-631",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/6425/original/Honda_City_Front.jpg",
        customer: "Mani",
        date: "1 March",
        amount: 5500,
        status: "Active",
    },
    {
        id: 102,
        car: "Suzuki Swift",
        registration: "ABZ-631",
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        customer: "Shamikh",
        date: "4 March",
        amount: 8500,
        status: "Passive",
    },
    {
        id: 103,
        car: "Toyota Mark X",
        registration: "AXZ-631",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/2876/original/Toyota_Mark_X_1st_Gen_(2004-2009).jpg",
        customer: "Arham",
        date: "11 March",
        amount: 15500,
        status: "Active",
    },
    {
        id: 104,
        car: "Honda Vezel",
        registration: "BG-1840",
        img: "https://i.pinimg.com/564x/9a/ce/d0/9aced0492e60a274e23ffd3e70cc9557.jpg",
        customer: "Abdullah Ali",
        date: "17 March",
        amount: 18000,
        status: "Passive",
    },
    {
        id: 105,
        car: "Suzuki Cultus",
        registration: "BEH-252",
        img: "http://www.suzukirawal.com/media/620x485/cultus/big1.jpg",
        customer: "Ibrahim Sidd",
        date: "21 March",
        amount: 9500,
        status: "Active",
    },
    {
        id: 106,
        car: "Toyota Vitz",
        registration: "BGH-262",
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        customer: "Hammad",
        date: "21 March",
        amount: 10500,
        status: "Active",
    },
    {
        id: 107,
        car: "Toyota GLI",
        registration: "BML-420",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        customer: "Faraz",
        date: "25 March",
        amount: 21000,
        status: "Pending",
    },
    {
        id: 108,
        car: "Toyota Vitz",
        registration: "BVE-321",
        img: "https://www.solutionguider.com/wp-content/uploads/2022/02/Toyota-Vitz-F-1.3-2022-Price-in-Pakistan.jpg",
        customer: "Baloch",
        date: "26 March",
        amount: 10500,
        status: "Passive",
    },
    {
        id: 109,
        car: "Suzuki Swift",
        registration: "BHY-222",
        img: "https://www.india.com/wp-content/uploads/2016/12/2017-Suzuki-Swift-white-front-three-quarters-1.jpg",
        customer: "Daniyal",
        date: "28 March",
        amount: 18500,
        status: "Pending",
    },
    {
        id: 110,
        car: "Toyota GLI",
        registration: "BHY-232",
        img: "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg",
        customer: "Asfar",
        date: "30 March",
        amount: 21000,
        status: "Active",
    }
];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        checkboxSelection
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
        {...data}
      />
    </div>
  );
}
