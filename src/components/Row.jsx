import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({student, student:{Name, Age, Course, Batch}, captureEdit, changeEditState}) => {
    return (
        <>
            <td>{Name}</td>
            <td className='algn' >{Age}</td>
            <td className='algn' >{Course}</td>
            <td className='algn' >{Batch}</td>
            <td className='algn' >
                <Link
                onClick={(e)=>{
                    captureEdit(e, student);
                    changeEditState(student);
                }}>
                    Edit
                </Link>
            </td>
        </>
    );
}

export default TableRow;