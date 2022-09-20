package edu.miu.lab7service.repository;

import edu.miu.lab7service.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {

    Role findByRole(String role);

}
