<?php
	get_header();
	if (have_posts()):
  while (have_posts()) : the_post();
    the_content(); ?>
    <div class="d-flex cols-2">
        <div class="col-1">
          <?php get_template_part('template-parts/blocks/post-content-left/index'); ?>
        </div>
        <div class="col-2">
          <?php get_template_part('template-parts/blocks/post-content-right/index'); ?>
        </div>
      </div>
  <?php endwhile;
else:
endif;
?>

<?php get_footer(); ?>