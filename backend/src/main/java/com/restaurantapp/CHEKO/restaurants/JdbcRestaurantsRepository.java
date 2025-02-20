package com.restaurantapp.CHEKO.restaurants;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class JdbcRestaurantsRepository implements RestaurantsRepository {
    
    private final JdbcClient jdbcClient;

    public JdbcRestaurantsRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Restaurants> getAllRestaurants(){
        return jdbcClient.sql("SELECT * FROM restaurants;")
                .query(Restaurants.class)
                .list();
    }
    
    public Optional<Restaurants> getById(Integer id){
        return jdbcClient.sql("SELECT * FROM restaurants WHERE id = :id ;" )
                .param("id", id)
                .query(Restaurants.class)
                .optional();
    }

    public void create(Restaurants restaurant){
        var updated = jdbcClient.sql("INSERT INTO restaurants (id, name, logo, lat, lng)  values(?,?,?,?,?);")
                .params(List.of(restaurant.id(),restaurant.name(),restaurant.logo(),restaurant.lat(),restaurant.lng()))
                .update();

        Assert.state(updated == 1, "Failed to create restaurants " + restaurant.name());
    }

    public void update(Restaurants restaurant, Integer id){
        var updated = jdbcClient.sql("update restaurants set name = ?, logo = ?, lat = ?, lng = ?, where id = ?;")
                .params(List.of(restaurant.name(),restaurant.logo(),restaurant.lat(),restaurant.lng(), id))
                .update();

        Assert.state(updated == 1, "Failed to update restaurants " + restaurant.name());
    }

    public void delete(Integer id){
        var updated = jdbcClient.sql("delete from restaurants where id = :id;")
                .param("id", id)
                .update();

        Assert.state(updated == 1, "Failed to delete restaurants " + id);
    }

    public int count(){
        return jdbcClient.sql("select * from restaurants").query().listOfRows().size();

    }

    public void saveAll(List<Restaurants> restaurants){
        restaurants.stream().forEach(this::create);
    }
}
