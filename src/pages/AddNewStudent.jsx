import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StudentAdded } from '../features/StudentSlice';

const AddNewStudent = () => {
    const data = useSelector((state)=> state.student);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Course, setCourse] = useState('');
    const [Batch, setBatch] = useState('');

    const cancelAddStudent = () => {
        navigate('/Students');
    }

    const submitNewStudent = () => {
        if(Name && Age && Course && Batch){
            dispatch(StudentAdded({
                "id": data.length,
                "Name": Name,
                "Age": Age,
                "Course": Course,
                "Batch": Batch,
                "Change": "Edit"
            }))
            navigate('/Students');
        }
    }

    return (
        <>
            <div className='box'>
                <div className='header'>
                    <input type="text" name="Name" className='editFields shadow-sm' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="Age" className='editFields shadow-sm' placeholder='Age' value={Age} onChange={(e) => setAge(e.target.value)} />
                    <input type="text" name="Course" className='editFields shadow-sm' placeholder='Course' value={Course} onChange={(e) => setCourse(e.target.value)} />
                    <input type="text" name="Batch" className='editFields shadow-sm' placeholder='Batch' value={Batch} onChange={(e) => setBatch(e.target.value)} />
                </div>
            </div>
            <div className='box2'>
                <button className='butn2' onClick={cancelAddStudent} style={{backgroundColor:'grey'}}>Cancel</button>
                <button className='butn2' onClick={submitNewStudent}>Submit</button>
            </div>
        </>
    );
}

export default AddNewStudent;