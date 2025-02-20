package com.restaurantapp.CHEKO.menuitems;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@RestController 
@RequestMapping("/menu-items") 
public class MenuItemsController {

   private final JdbcMenuItemsRepository menuRepository;

   MenuItemsController(JdbcMenuItemsRepository menuRepository) {
        this.menuRepository = menuRepository;
    }


    @GetMapping
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
                                    @RequestParam(required = false) Boolean bestSeller){

        return menuRepository.getMenuItems(restaurantId,name,size,offset,minPrice,maxPrice,minCalories,maxCalories,categories,bestSeller);
    }
    
    @GetMapping("/{id}")
    MenuItems getById(@PathVariable Integer id) {
        Optional<MenuItems> menu = menuRepository.getById(id);
        if(menu.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Menu items not found.");
        }
        return menu.get();
    }

    @GetMapping("/min-max")
    String getMinMaxValues() {
        return menuRepository.getMinMaxValues();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    void create(@RequestBody MenuItems menu) {
        menuRepository.create(menu);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody MenuItems menu, @PathVariable Integer id) {
        menuRepository.update(menu,id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        menuRepository.delete(id);
    }


}