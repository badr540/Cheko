package com.restaurantapp.CHEKO.restaurants;

import java.util.List;
import java.util.Optional;


public interface RestaurantsRepository{

    List<Restaurants> getAllRestaurants();

    Optional<Restaurants> getById(Integer id);

    void create(Restaurants restaurants);

    void update(Restaurants restaurants, Integer id);

    void delete(Integer id);

    int count();

    void saveAll(List<Restaurants> restaurants);

}
