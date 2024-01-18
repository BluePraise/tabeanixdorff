<?php
/**
 * Template Name: Texture Page
 */
/*
 * Generate a unique ID for each form and a string containing an aria-label
 * if one was passed to get_search_form() in the args array.
 */
get_header();
?>
<div class="projects">
	<?php
		get_template_part( 'template-parts/loops/top-posts', NULL,  array('page-name' => 'page-texture') );
		get_template_part( 'template-parts/loops/projects', NULL, array(
			'page-name' => 'page-texture',
			'set-data-tag' => true
		) ); ?>
		<div class="leftover-projects"></div>
</div>
<?php get_footer(); ?>
