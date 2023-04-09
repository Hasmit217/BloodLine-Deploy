import React, { useState } from "react";

const Row = (props) => {
    const { name, address, phone, email } = props; // Destructuring Props
    return (<tr>
        <td>{name}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>{email}</td>
    </tr>)
}

const HeadRow = (props) =>{
    const {headName,headAddress,headPhone,headEmail} = props;
    return(<tr>
        <th>{headName}</th>
        <th>{headAddress}</th>
        <th>{headPhone}</th>
        <th>{headEmail}</th>
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
                            headAddress={row.address}
                            headPhone={row.phone}
                            headEmail={row.email}
                        />
                    )}
                    {data.map(row =>
                        <Row name={row.name}
                            address={row.address}
                            phone={row.phone}
                            email={row.email}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
