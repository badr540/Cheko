package com.restaurantapp.CHEKO.menuitems;

public record MenuItems(
            int id,
            int restaurantId,
            String name,
            String description,
            double price,
            String image,
            int calories,
            String category,
            Boolean bestSeller

){}

