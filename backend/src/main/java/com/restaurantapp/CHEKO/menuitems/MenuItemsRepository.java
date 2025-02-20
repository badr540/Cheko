package com.restaurantapp.CHEKO.menuitems;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestParam;

public interface MenuItemsRepository{


    List<MenuItems> getMenuItems(
        @RequestParam(required = false) Integer restaurantId,
        @RequestParam(required = false) String name,
        @RequestParam(required = false) Integer size,
        @RequestParam(required = false) Integer offset,
        @RequestParam(required = false) Double minPrice,
        @RequestParam(required = false) Double maxPrice,
        @RequestParam(required = false) Integer minCalories,
        @RequestParam(required = false) Integer maxCalories,
        @RequestParam(required = false) List<String>  categories,
        @RequestParam(required = false) Boolean bestSeller);

    Optional<MenuItems> getById(Integer id);

    void create(MenuItems menuItem);

    void update(MenuItems menuItem, Integer id);

    void delete(Integer id);

    int count();

    void saveAll(List<MenuItems> menuItems);

}
