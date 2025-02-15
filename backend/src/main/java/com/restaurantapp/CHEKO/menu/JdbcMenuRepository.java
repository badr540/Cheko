package com.restaurantapp.CHEKO.menu;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


//things to add: filtering by category
@Repository
public class JdbcMenuRepository implements MenuRepository {

    private final JdbcClient jdbcClient;

    public JdbcMenuRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    public List<Menu> getAll() {

        return jdbcClient.sql("SELECT * FROM menu;")
                .query(Menu.class)
                .list();
    }

    public List<Menu> getMenuItems(@RequestParam(required = false) String name,
                                   @RequestParam(required = false) Double lat, 
                                   @RequestParam(required = false) Double lng,
                                   @RequestParam(defaultValue = "10") int size,
                                   @RequestParam(defaultValue = "0") int offset,
                                   @RequestParam(defaultValue = "0") Double minPrice,
                                   @RequestParam(required = false) Double maxPrice,
                                   @RequestParam(defaultValue = "0") Integer minCalories,
                                   @RequestParam(required = false) Integer maxCalories,
                                   @RequestParam(required = false) String category) {

        StringBuilder sql = new StringBuilder("SELECT * FROM menu WHERE 1=1 ");
        List<Object> params = new ArrayList<>();
    
        if (name != null) {
            sql.append("AND name ILIKE ? ");
            params.add(name + "%");
        }
        if (lat != null) {
            sql.append("AND lat = ? ");
            params.add(lat);
        }
        if (lng != null) {
            sql.append("AND lng = ? ");
            params.add(lng);
        }
        if (category != null) {
            sql.append("AND category = ? ");
            params.add(category);
        }

        if(minPrice != null){
            sql.append("AND price >= ? ");
            params.add(minPrice);
        }

        if(maxPrice != null){
            sql.append("AND price <= ? ");
            params.add(maxPrice);
        }
        if(minCalories!=null){
            sql.append("AND calorie >= ? ");
            params.add(minCalories);   
        }
        if(maxCalories != null){
            sql.append("AND calorie <= ? ");
            params.add(maxCalories);
        }
    
    
        sql.append("LIMIT ? OFFSET ?");
        params.add(size);
        params.add(offset);
    
        Object[] paramArray = params.toArray(new Object[0]);
        
        System.out.println(sql.toString());
        System.out.println(paramArray.toString());
        
        return jdbcClient.sql(sql.toString() +";")
                        .params(paramArray) 
                        .query(Menu.class)
                        .list();
    }


    public Optional<Menu> getById(Integer id) {
        return jdbcClient.sql("SELECT * FROM menu WHERE id = :id ;" )
                .param("id", id)
                .query(Menu.class)
                .optional();
    }

    public void create(Menu menu) {
        var updated = jdbcClient.sql("INSERT INTO Menu(id,name,description,price,image,calorie,category,lat,lng) values(?,?,?,?,?,?,?,?,?);")
                .params(List.of(menu.id(),menu.name(),menu.description(),menu.price(),menu.image(),menu.calorie(),menu.category(),menu.lat(), menu.lng()))
                .update();

        Assert.state(updated == 1, "Failed to create menu " + menu.name());
    }

    public void update(Menu menu, Integer id) {
        var updated = jdbcClient.sql("update menu set name = ?, description = ?, price = ?, image = ?, calorie = ?, category = ?, lat = ?, lng = ? where id = ?;")
                .params(List.of(menu.name(),menu.description(),menu.price(),menu.image(),menu.lat(), menu.lng(), id))
                .update();

        Assert.state(updated == 1, "Failed to update menu " + menu.name());
    }

    public void delete(Integer id) {
        var updated = jdbcClient.sql("delete from menu where id = :id;")
                .param("id", id)
                .update();

        Assert.state(updated == 1, "Failed to delete menu " + id);
    }

    public int count() {
        return jdbcClient.sql("select * from menu").query().listOfRows().size();
    }

    public void saveAll(List<Menu> menus) {
        menus.stream().forEach(this::create);
    }

}
