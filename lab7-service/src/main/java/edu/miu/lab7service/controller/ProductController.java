package edu.miu.lab7service.controller;


import edu.miu.lab7service.annotation.InspectOffense;
import edu.miu.lab7service.entity.Product;
import edu.miu.lab7service.entity.Review;
import edu.miu.lab7service.model.ProductRequest;
import edu.miu.lab7service.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
@CrossOrigin
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public List<Product> getAll() {
        return productService.getAll();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable int id) {
        return productService.getById(id);
    }

    @PostMapping
    public void add(@RequestBody ProductRequest productRequest) {
        productService.add(productRequest);
    }

    @GetMapping("/{id}/reviews")
    public List<Review> getReviews(@PathVariable int id) {
        return productService.getReviews(id);
    }

    @PostMapping("/{id}")
    @InspectOffense
    public void addReviews(@RequestBody Set<Review> reviews, @PathVariable int id) {
        productService.addReviews(reviews, id);
    }
}
