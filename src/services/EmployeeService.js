import axios from "axios";

const REST_REST_API_BASE_URL = "http://localhost:8080/api/employees/all";

const REST_REST_API_BASE_URL1 = "http://localhost:8080/api/employees";


export const listEmployee = () => axios.get(REST_REST_API_BASE_URL);

export const createEmployee = (employees) => axios.post(REST_REST_API_BASE_URL1, employees);

export const getEmployee = (employeeId) => axios.get(REST_REST_API_BASE_URL1 + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_REST_API_BASE_URL1 + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) =>axios.delete(REST_REST_API_BASE_URL1 + '/' + employeeId);