import React, {useEffect, useState} from 'react'
import { deleteEmployee,listEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponents = () => {

    const [employee, setEmployee] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployee().then((response) => {
            setEmployee(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
   
    function addNewEmployee(){
        navigator('/employees')
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='container mx-auto py-4 px-4'>
            <h2 className='text-center' >List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee} >Add Employee</button>
            <table className='table table-striped border-Secondary table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((employee) => (
                            <tr key={employee.id}>
                                <td className='text-center'>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                            style={{marginLeft: '10px'}}
                                        >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponents