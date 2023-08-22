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
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/slider-vendor.css" type="text/css" media="screen" />
<div class="slider-container">
    <div class="swiper">
        <div class="swiper-wrapper">
        <?php // Loop through rows.
        while( have_rows('images') ) : the_row();
            $image          = get_sub_field('slider_media');
            $image_caption  = get_sub_field('flexslider_caption');
            $checkbox_video = get_sub_field('checkbox_video');

        ?>

        <div class="swiper-slide item">
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
                                <img src="<?php echo $image; ?>">
                                <figcaption class="d-none"><?php echo $image_caption; ?></figcaption>
                            </figure>
                <?php endif; ?>
            </a>
        </div> <!-- !swiper-slide -->
        <?php endwhile; ?>

        </div> <!-- !swiper-wrapper -->
    </div> <!-- !swiper -->
</div> <!-- !slider-container -->
    <div class="custom-navigation"></div>
</div>

<?php // No value.
else : echo 'No images. Yet.'; ?>

<?php endif; ?>

