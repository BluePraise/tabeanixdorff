<?php get_header(); ?>
<div class="result-container"></div>
<div class="projects">
	<?php
		// get template part passing an argument to the template part
		get_template_part( 'template-parts/loops/top-posts', null,  array('page-name' => 'page-home') );
		// get template part projects
		get_template_part( 'template-parts/loops/projects', null, array(
			'page-name' => 'page-home',
			'set-data-tag' => true
		));
		?>
	<div class="leftover-projects"></div>
</div><!-- .end-of-projects -->


<?php
	get_footer();
?>
