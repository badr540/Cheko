package com.restaurantapp.CHEKO.menuitems;

import org.json.JSONObject;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


//things to add: filtering by category
@Repository
public class JdbcMenuItemsRepository {

    private final JdbcClient jdbcClient;

    public JdbcMenuItemsRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    //public List<MenuItems> getAll() {
    //    return jdbcClient.sql("SELECT * FROM menuItems;")
    //            .query(MenuItems.class)
    //            .list();
    //}

    public List<MenuItems> getMenuItems(
                                   @RequestParam(required = false) Integer restaurantId,
                                   @RequestParam(required = false) String name,
                                   @RequestParam(required = false) Integer size,
                                   @RequestParam(required = false) Integer offset,
                                   @RequestParam(required = false) Double minPrice,
                                   @RequestParam(required = false) Double maxPrice,
                                   @RequestParam(required = false) Integer minCalories,
                                   @RequestParam(required = false) Integer maxCalories,
                                   @RequestParam(required = false) List<String>  categories,
                                   @RequestParam(required = false) Boolean bestSeller) {

        StringBuilder sql = new StringBuilder("SELECT * FROM menu_items WHERE 1=1 ");
        List<Object> params = new ArrayList<>();
        
        if(restaurantId != null){
            sql.append("AND restaurant_id = ? ");
            params.add(restaurantId);
        }

        if (name != null) {
            sql.append("AND name ILIKE '%' || ? || '%' ");
            params.add(name + "%");
            sql.append("OR description ILIKE '%' || ? || '%' ");
            params.add(name + "%");
        }

        if (categories != null) {
            sql.append("AND category IN (");
            for (int i = 0; i < categories.size(); i++) {
                sql.append("?");
                if (i < categories.size() - 1) {
                    sql.append(", ");
                }
            }
            sql.append(")");
            params.addAll(categories);
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
            sql.append("AND calories >= ? ");
            params.add(minCalories);   
        }
        if(maxCalories != null){
            sql.append("AND calories <= ? ");
            params.add(maxCalories);
        }
        if(bestSeller != null){
            sql.append("AND best_seller = ? ");
            params.add(bestSeller);
        }
        if(size != null){
            sql.append("LIMIT ?");
            params.add(size);
        }
        if(offset != null){
            sql.append("OFFSET ?");
            params.add(offset);
        }

        if (name != null) {
            sql.append("AND name ILIKE '%' || ? || '%' ");
            params.add(name + "%");
            sql.append("OR description ILIKE '%' || ? || '%' ");
            params.add(name + "%");
        }

        
        Object[] paramArray = params.toArray(new Object[0]);

        
        return jdbcClient.sql(sql.toString() +";")
                        .params(paramArray) 
                        .query(MenuItems.class)
                        .list();
    }


    public Optional<MenuItems> getById(Integer id) {
        return jdbcClient.sql("SELECT * FROM menu_items WHERE id = :id ;" )
                .param("id", id)
                .query(MenuItems.class)
                .optional();
    }

    public void create(MenuItems menuItem) {
        var updated = jdbcClient.sql("INSERT INTO menu_items (id, restaurant_id, name, description, price, image, calories, category, best_seller) values(?,?,?,?,?,?,?,?,?);")
                .params(List.of(menuItem.id(),menuItem.restaurantId(),menuItem.name(),menuItem.description(),menuItem.price(),menuItem.image(),menuItem.calories(),menuItem.category(),menuItem.bestSeller()))
                .update();

        Assert.state(updated == 1, "Failed to create menu_item " + menuItem.name());
    }

    public void update(MenuItems menuItem, Integer id) {
        var updated = jdbcClient.sql("update menu_items set restaurant_id = ?, name = ?, description = ?, price = ?, image = ?, calories = ?, category = ?, best_seller = ? where id = ?;")
                .params(List.of(menuItem.restaurantId(), menuItem.name(),menuItem.description(),menuItem.price(),menuItem.image(),menuItem.calories(),menuItem.category(), menuItem.bestSeller(), id))
                .update();

        Assert.state(updated == 1, "Failed to update menu_items " + menuItem.name());
    }

    public void delete(Integer id) {
        var updated = jdbcClient.sql("delete from menu_items where id = :id;")
                .param("id", id)
                .update();

        Assert.state(updated == 1, "Failed to delete menu_items " + id);
    }

    public int count() {
        return jdbcClient.sql("select * from menu_items").query().listOfRows().size();
    }

    public void saveAll(List<MenuItems> menuItems) {
        menuItems.stream().forEach(this::create);
    }

    public String getMinMaxValues() {
        return jdbcClient.sql(
                "SELECT " +
                "MIN(price) AS min_price, MAX(price) AS max_price, " +
                "MIN(calories) AS min_calories, MAX(calories) AS max_calories " +
                "FROM menu_items")
            .query((rs, rowNum) -> {
                JSONObject json = new JSONObject();
                json.put("minPrice", rs.getDouble("min_price"));
                json.put("maxPrice", rs.getDouble("max_price"));
                json.put("minCalories", rs.getInt("min_calories"));
                json.put("maxCalories", rs.getInt("max_calories"));
                return json;
            })
            .single().toString();
    }
    

}
