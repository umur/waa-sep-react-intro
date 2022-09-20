package edu.miu.lab7service.repository;

import edu.miu.lab7service.entity.RequestLimiter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestLimiterRepository extends CrudRepository<RequestLimiter, Integer> {

    RequestLimiter findFirstByOrderByCreatedAtDesc();
}
