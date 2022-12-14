import React from 'react'

export const orderColumns = [
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

//temporary data
export const orderRows = [
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