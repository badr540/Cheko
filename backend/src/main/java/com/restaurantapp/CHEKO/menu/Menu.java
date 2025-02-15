package com.restaurantapp.CHEKO.menu;


public record Menu(int id,
            String name,
            String description,
            double price,
            String image,
            int calorie,
            String category,
            double lat,
            double lng
){}

