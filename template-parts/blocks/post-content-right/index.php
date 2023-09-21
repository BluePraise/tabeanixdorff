<?php
if (have_rows('post_blocks_right')) :
    while (have_rows('post_blocks_right')) : the_row();

        $content_editor = get_sub_field('content_editor');
        if ($content_editor): ?>
            <div class="content"><?php echo $content_editor; ?></div>
        <?php endif; ?>

        <?php get_template_part('slider');
    endwhile;
endif;
