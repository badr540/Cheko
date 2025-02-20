package com.restaurantapp.CHEKO.restaurants;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController 
@RequestMapping("/restaurants") 
public class RestaurantsController {

       private final JdbcRestaurantsRepository resturantRepository;

       RestaurantsController(JdbcRestaurantsRepository resturantRepository) {
        this.resturantRepository = resturantRepository;
    }


    @GetMapping
    public List<Restaurants> getAllRestaurants(){

        return resturantRepository.getAllRestaurants();
    }
    
    @GetMapping("/{id}")
    Restaurants getById(@PathVariable Integer id) {
        Optional<Restaurants> restaurant = resturantRepository.getById(id);
        if(restaurant.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "restaurant not found.");
        }
        return restaurant.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    void create(@RequestBody Restaurants restaurant) {
        resturantRepository.create(restaurant);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody Restaurants restaurant, @PathVariable Integer id) {
        resturantRepository.update(restaurant,id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        resturantRepository.delete(id);
    }
    
}
