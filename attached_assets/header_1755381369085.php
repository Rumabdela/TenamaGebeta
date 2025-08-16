<?php
// header.php - site header / nav
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Tenamagebeta - Ethiopian Heritage Nutrition</title>
    <link rel="stylesheet" href="/assets/style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
<header>
    <div class="container header-container">
        <div class="logo">
            <img src="/assets/logo.jpg" alt="Tenama Gebeta Logo" class="logo-img">
            <div class="logo-text">
                <h1>Tenamagebeta</h1>
                <p>Ethiopian Heritage Nutrition</p>
            </div>
        </div>

        <button class="mobile-menu-btn" id="menuToggle">
            <i class="fas fa-bars"></i>
        </button>

        <nav id="mainNav">
            <ul>
                <li><a href="/index.php" class="active">Home</a></li>
                <li><a href="/recipes.php">Recipes</a></li>
                <li><a href="/nutritionists.php">Nutritionists</a></li>
                <li><a href="/guidelines.php">Dietary Guidelines</a></li>
                <li><a href="/blog.php">Blog</a></li>
                <li><a href="/contact.php">Contact</a></li>
            </ul>
        </nav>

        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Search recipes, experts, guidelines..." aria-label="Search site content">
            <button id="searchButton"><i class="fas fa-search"></i></button>
        </div>
    </div>
</header>
<main>
