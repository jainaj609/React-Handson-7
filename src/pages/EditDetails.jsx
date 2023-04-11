import React from 'react';

const EditDetails = ({ editForm, handlestudentUpdate, handleChange, handleCancel }) => {
    let {Name, Age, Course, Batch} = editForm

    return (
        <>
            <div className='box'>
                <div className='header'>
                    <input type="text" name="Name" className='editFields shadow-sm' value={Name} onChange={handleChange} />
                    <input type="text" name="Age" className='editFields shadow-sm' value={Age} onChange={handleChange} />
                    <input type="text" name="Course" className='editFields shadow-sm' value={Course} onChange={handleChange} />
                    <input type="text" name="Batch" className='editFields shadow-sm' value={Batch} onChange={handleChange} />
                </div>
            </div>
            <div className='box2'>
                <button className='butn2' onClick={handleCancel} style={{backgroundColor:'grey'}}>Cancel</button>
                <button className='butn2' onClick={handlestudentUpdate}>Update</button>
            </div>
        </>
    );
}

export default EditDetails;