<?php
	get_header();
	$block = parse_blocks( $post->post_content );
	$hover_text = $block[0]['attrs']['data']['project_hover_text'];
	$categories = get_the_category();
	$year = $block[0]['attrs']['data']['year'];
?>

<?php if (have_posts()):
  while (have_posts()) : the_post(); ?>
  	<div class="article-header">
  		<h1 class="project-detail-title"><a href="javascript:history.go(-1)"><?php the_title(); ?></a></h1>
		<p class="project-detail-meta-info">
			<i><?php echo $hover_text; ?></i>
			<?php if ( ! empty( $categories ) && $categories[0]->name !== 'hidden' ): ?>
				(<?php echo esc_html( $categories[0]->name ); ?>, <?php echo $year ?>)
			<?php endif; ?>
		</p>
	</div>
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