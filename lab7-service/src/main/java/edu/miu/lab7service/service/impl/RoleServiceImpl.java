package edu.miu.lab7service.service.impl;


import edu.miu.lab7service.repository.RoleRepository;
import edu.miu.lab7service.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import edu.miu.lab7service.entity.Role;

@Service
@RequiredArgsConstructor
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    public Role getByName(String name) {
        return roleRepository.findByRole(name);
    }
}
