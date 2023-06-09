<?php
/**
 * Template Name: Search Page
 */
/*
 * The template for displaying search results pages.
 * gets all the posts and projects and displays them in a list
 * Displays all posts with category 'hidden' on top of the list
 *
 * @package tabeanixdorff
 */
get_header();
?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/search.css" type="text/css" media="screen" />

	<div class="form-control cursor">
		<input type="search" id="search-posts" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( '', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php echo get_search_query(); ?>" name="s" autofocus />
		<i></i>
	</div>
	<div class="projects">
		<?php get_template_part( 'template-parts/loops/top-projects', NULL, array(
			'page-name' => 'hidden'
		) ); ?>
		<?php get_template_part( 'template-parts/loops/projects', NULL, array(
			'set-data-tag' => false
		) ); ?>
	</div><!-- end of .projects -->


<?php get_footer(); ?>