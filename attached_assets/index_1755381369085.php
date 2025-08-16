<?php include 'header.php'; ?>
<section class="hero">
    <div class="container">
        <div class="hero-content">
            <h1>Preserving Ethiopia's Nutritional Heritage</h1>
            <p>Discover the health secrets of traditional Ethiopian foods and learn how our ancestors nourished both body and soul.</p>
            <div class="hero-btns">
                <a href="/recipes.php" class="btn pulse">Explore Recipes</a>
                <a href="/blog.php" class="btn btn-secondary">Read Our Blog</a>
            </div>
        </div>
    </div>
</section>

<section id="featured-recipes" class="featured-recipes">
    <div class="container">
        <h2 class="section-title">Featured Traditional Recipes</h2>
        <div class="recipe-grid" id="recipeGrid">
            <!-- Sample recipe cards (these can be edited or pulled from DB later) -->
            <div class="recipe-card search-item" data-tags="injera,teff,flatbread,gluten-free,high-fiber,breakfast">
                <div class="recipe-image">
                    <img src="/assets/injera.jpg" alt="Injera">
                </div>
                <div class="recipe-info">
                    <h3>Injera</h3>
                    <p>Traditional fermented flatbread made from teff flour — rich in iron and calcium.</p>
                    <a href="/recipes.php#injera" class="btn">View Recipe</a>
                    <div class="recipe-tags">
                        <span class="tag">Breakfast</span>
                        <span class="tag tag-health">High Fiber</span>
                        <span class="tag">Gluten-Free</span>
                    </div>
                </div>
            </div>

            <div class="recipe-card search-item" data-tags="doro wot,chicken stew,berbere,spicy,main dish,high-protein">
                <div class="recipe-image">
                    <img src="/assets/doro.jpg" alt="Doro Wot">
                </div>
                <div class="recipe-info">
                    <h3>Doro Wot</h3>
                    <p>Spicy chicken stew with berbere spice blend — packed with antioxidants and protein.</p>
                    <a href="/recipes.php#doro-wot" class="btn">View Recipe</a>
                    <div class="recipe-tags">
                        <span class="tag">Main Dish</span>
                        <span class="tag tag-health">High Protein</span>
                        <span class="tag">Spicy</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include 'footer.php'; ?>