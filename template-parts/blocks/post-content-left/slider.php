<?php if( have_rows('slider_fields') ): ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/slider.css" type="text/css" media="screen" />

    <div class="slides-container grow">

        <?php // Loop through rows.
        while( have_rows('slider_fields') ) : the_row();
            $image          = get_sub_field('slider_media');
            $image_caption  = get_sub_field('slider_caption');
            $checkbox_video = get_sub_field('checkbox_video');
        ?>

        <a class="slide item gallery" href="#" data-caption="<?php echo $image_caption; ?>">
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
                    </figure>
            <?php endif; ?>
        </a>


            <?php endwhile; ?>

    <div class="custom-navigation">
        <div class="js-caption"></div>
        <div class="d-flex nav-utils">
            <div class="nav-item nav-prev"><</div>
            <div class="nav-item nav-next">></div>
            <div class="magnify">✕</div>
        </div>
    </div>

</div><!-- !slides-container -->


<?php endif; ?>

