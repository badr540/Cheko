package com.restaurantapp.CHEKO.menu;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestParam;

public interface MenuRepository{


    List<Menu> getMenuItems(@RequestParam(required = false) String name,
                            @RequestParam(required = false) Double lat, 
                            @RequestParam(required = false) Double lng,
                            @RequestParam(defaultValue = "10") int size,
                            @RequestParam(defaultValue = "0") int offset,
                            @RequestParam(defaultValue = "0") Double minPrice,
                            @RequestParam(required = false) Double maxPrice,
                            @RequestParam(defaultValue = "0") Integer minCalories,
                            @RequestParam(required = false) Integer maxCalories,
                            @RequestParam(required = false) String category);

    Optional<Menu> getById(Integer id);

    void create(Menu menu);

    void update(Menu menu, Integer id);

    void delete(Integer id);

    int count();

    void saveAll(List<Menu> menus);

}
