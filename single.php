<?php
	get_header(); ?>

<?php if (have_posts()):
  while (have_posts()) : the_post(); ?>
  	<h1 class="project-detail-title"><a href="javascript:history.go(-1)"><?php the_title(); ?></a></h1>
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

<div class="projects single-post-list">
	<?php
		// get template part passing an argument to the template part
		get_template_part( 'template-parts/loops/top-posts',
		null,
		array('page-name' => 'page-home',
		'set-data-tag' => true ));

		// get template part projects
		get_template_part( 'template-parts/loops/projects', null, array(
			'page-name' => 'page-home',
			'set-data-tag' => true
		));
		?>

</div><!-- .end-of-projects -->
<div class="leftover-projects"></div>

<?php get_footer(); ?>