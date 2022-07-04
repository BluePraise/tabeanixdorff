<?php

/**
 * Slider Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */
global $post;

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


// Check rows exists.

if( have_rows('images') ): ?>

    <div class="flex-container">
        <div class="flexslider">
            <ul class="slides">
                <?php // Loop through rows.
                while( have_rows('images') ) : the_row(); 
                    
                    $image          = get_sub_field('flexslider_image'); 
                    $image_caption  = get_sub_field('flexslider_caption'); 
                ?>
                <script>
                   // dynamically load captions and pass it on to jQuery 
                   var $caption = '<?php echo($image_caption); ?>';
                </script>

            	<li class="slide item">
                    <a class="gallery" href="<?php echo $image; ?>" data-caption="<?= $image_caption; ?>">
                        <figure>
                            <img class="slide-image" src="<?php echo $image; ?>" />
                        </figure>
                    </a>
                </li>
                <?php endwhile; ?>
            
            </ul> <!-- !ul.slides -->
        </div>
        <div class="custom-navigation">
          <a href="#" class="flex-prev"><</a>
          <div class="custom-controls-container"></div>
          <a href="#" class="flex-next">></a>
        </div>
    <!-- <a href="#" class="close">×</a> -->
    </div> <!-- .flex-container -->

<?php // No value.
else : echo 'No images. Yet.'; ?>

<?php endif; ?>


<?php
// To do
// 1. figure out why hovertext//caption isn't showing in modal
// 2. styling van de popup 
    // A. caption text tonen
    // B. kleine slider verbergen

 ?>