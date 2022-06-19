<?php

/**
 * Slider Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'slider-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'slider';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.

// Check rows exists.
if( have_rows('images') ): ?>
<div class="flex-container">
    <div class="flexslider">
    <ul class="slides">
        <?php // Loop through rows.
        while( have_rows('images') ) : the_row(); 

            // Load sub field value.
            $sub_value = get_sub_field('flexslider_image'); 
            //var_dump($sub_value);
        ?>
    	<li><figure><img src="<?php echo $sub_value; ?>" /></figure></li>
        <?php endwhile; ?>
    </ul>
   </div> <!-- !.flexslider -->
    <div class="custom-navigation">
        <a href="#" class="flex-prev"><</a>
        <div class="custom-controls-container"></div>
        <a href="#" class="flex-next">></a>
    </div>
</div>
<?php // No value.
else : echo 'No images. Yet.'; ?>

<?php endif; ?>


