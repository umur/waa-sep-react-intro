package edu.miu.lab7service.repository;

import edu.miu.lab7service.entity.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Review, Integer> {

    List<Review> getByProduct_Id(int id);
}
