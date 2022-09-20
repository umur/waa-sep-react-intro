package edu.miu.lab7service.service;


import edu.miu.lab7service.entity.Product;
import edu.miu.lab7service.entity.Review;
import edu.miu.lab7service.model.ProductRequest;

import java.util.List;
import java.util.Set;

public interface ProductService {

    List<Product> getAll();

    Product getById(int id);

    void add(ProductRequest productRequest);

    List<Review> getReviews(int id);

    void addReviews(Set<Review> reviews, int id);
}
