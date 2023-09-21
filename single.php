<?php
	get_header(); ?>

<?php if (have_posts()):
  while (have_posts()) : the_post(); ?>
  	<h1 class="project-detail-title"><?php the_title(); ?></h1>
    <article>
      <?php the_content(); ?>
      <div class="d-flex cols-2">
        <div class="col-1">
          <?php get_template_part('template-parts/blocks/post-content-left/index'); ?>
        </div>
        <div class="col-2">
          <?php get_template_part('template-parts/blocks/post-content-right/index'); ?>
        </div>
      </div>
    </article>
    <?php endwhile;
else:
endif;
?>
<?php get_footer(); ?>