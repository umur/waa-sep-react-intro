package com.bachir.employee.service;

import com.bachir.employee.entity.EmployeeEntity;
import com.bachir.employee.model.Employee;
import com.bachir.employee.repository.EmployeeRepository;
import org.apache.catalina.mbeans.MBeanUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
 private EmployeeRepository employeeRepository;
    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity=new EmployeeEntity();
        BeanUtils.copyProperties(employee,employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> list=employeeRepository.findAll();
       List<Employee> employees= list.stream()
               .map(emp->new Employee(emp.getId(),emp.getFirstName(),emp.getLastName(),
                emp.getEmailId()))
               .collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) {
      EmployeeEntity employee=employeeRepository.findById(id).get();
      employeeRepository.delete(employee);
      return  true;
    }

    @Override
    public Employee getEmployeeById(Long id) {
        EmployeeEntity employeeEntity=employeeRepository.findById(id).get();
        Employee employee=new Employee();
        BeanUtils.copyProperties(employeeEntity,employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        EmployeeEntity employeeEntity=employeeRepository.findById(id).get();

        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setEmailId(employee.getEmailId());
 employeeRepository.save(employeeEntity);

        return employee;
    }
}
