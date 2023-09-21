<h1>Slider right</h1>

<?php if( have_rows('slider_fields') ): ?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/slider.css" type="text/css" media="screen" />
<div class="slides-container">
    <div class="owl-carousel slides">
        <?php // Loop through rows.
        while( have_rows('slider_fields') ) : the_row();
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
                                <img src="<?php echo $image; ?>">
                                <figcaption class="d-none"><?php echo $image_caption; ?></figcaption>
                            </figure>
                <?php endif; ?>
            </a>
        </div>
        <?php endwhile; ?>

    </div> <!-- !ul.slides -->
    <div class="custom-navigation"></div>
</div>

<?php // No value.
else : echo 'No slides. Yet.'; ?>

<?php endif; ?>

