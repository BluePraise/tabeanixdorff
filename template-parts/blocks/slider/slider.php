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
<div class="slides-container">
    <div class="owl-carousel slides">
        <?php // Loop through rows.
        while( have_rows('images') ) : the_row();
            $image          = get_sub_field('slider_media');
            $image_caption  = get_sub_field('flexslider_caption');
            $checkbox_video = get_sub_field('checkbox_video');

        ?>


        <div class="slide item">
            <a class="gallery" href="">
                <?php if ( $checkbox_video ):
                    foreach($checkbox_video as $checkbox):
                        if( $checkbox === 'Yes'): ?>
                            <video controls>
                                <source src="<?php echo $image; ?>" type="video/mp4">
                            </video>
                <?php
                    endif;
                    endforeach;
                    else: ?>
                            <figure>
                                <img src="<?php echo $image; ?>" >
                                <figcaption><?php echo $image_caption; ?></figcaption>
                            </figure>
                <?php endif; ?>
            </a>
        </div>
        <?php endwhile; ?>

    </div> <!-- !ul.slides -->
    <div class="custom-navigation"></div>
</div>

<?php // No value.
else : echo 'No images. Yet.'; ?>

<?php endif; ?>

