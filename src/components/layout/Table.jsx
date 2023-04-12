import React, { useState } from "react";

const Row = (props) => {
    const { name,city, address, phone, email,category,serviceTime } = props; // Destructuring Props
    return (<tr>
        <td>{name}</td>
        <td>{city}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{category}</td>
        <td>{serviceTime}</td>
    </tr>)
}

const HeadRow = (props) =>{
    const {headName,headCity,headAddress,headPhone,headEmail,headCategory,headService} = props;
    return(<tr>
        <th>{headName}</th>
        <th>{headCity}</th>
        <th>{headAddress}</th>
        <th>{headPhone}</th>
        <th>{headEmail}</th>
        <th>{headCategory}</th>
        <th>{headService}</th>
    </tr>)
}

const Table = (props) => {
    const { data, headingData } = props;
    // const[rows,setRows]=useState(bloodbank);
    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    {headingData.map(row =>
                        <HeadRow headName={row.name}
                            headCity={row.city}
                            headAddress={row.address}
                            headPhone={row.phone}
                            headEmail={row.email}
                            headCategory={row.category}
                            headService={row.serviceTime}
                        />
                    )}
                    {data.map(row =>
                        <Row name={row.BloodBankName}
                            city={row.City}
                            address={row.Address}
                            phone={row.ContactNo}
                            email={row.Email}
                            category={row.Category}
                            serviceTime={row.ServiceTime}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
