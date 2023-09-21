<?php

if (have_rows('post_blocks_left')) :
    echo('<div class="post-block">POST BLOCK LEFT 1</div>');
        while (have_rows('post_blocks_left')) : the_row();

        $content_editor = get_sub_field('content_editor');
        if ($content_editor): ?>
            <div class="content"><?php echo $content_editor; ?></div>
        <?php endif; ?>

        <?php get_template_part('template-parts/blocks/post-content-left/slider');

    endwhile;
endif;