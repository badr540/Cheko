package com.restaurantapp.CHEKO.menu;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;


@RestController 
@RequestMapping("/menus") 
public class MenuController {

   private final JdbcMenuRepository menuRepository;

   MenuController(JdbcMenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    //@GetMapping
    //List<Menu> getAll() {
    //    return menuRepository.getAll();
    //}

    @GetMapping
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

        return menuRepository.getMenuItems(name,lat,lng,size,offset,minPrice,maxPrice,minCalories,maxCalories,category);
    }
    
    @GetMapping("/{id}")
    Menu getById(@PathVariable Integer id) {
        Optional<Menu> menu = menuRepository.getById(id);
        if(menu.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Menu not found.");
        }
        return menu.get();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    void create(@RequestBody Menu menu) {
        menuRepository.create(menu);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@RequestBody Menu menu, @PathVariable Integer id) {
        menuRepository.update(menu,id);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        menuRepository.delete(id);
    }

}