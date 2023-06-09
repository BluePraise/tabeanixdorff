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
		// get template part projects
		// get all the posts, except the ones with category name "hidden"

			$all_posts = get_posts(array(
					'post_type' => 'post',
					'category__not_in' => array(get_cat_ID('hidden')),
					'posts_per_page'   => -1,
				)
		);

		if (count($all_posts) > 1):
			foreach($all_posts as $post):
		?>
			<h2 class="project-line">
				<a href="<?php the_permalink(); ?>"
					title="<?php the_title(); ?>"
					alt="Project of Tabea Nixdorff: <?php the_title(); ?>"
				>
				<?php the_title(); ?>
				<?php parse_ACF_block( 'acf/project' ); ?>
				</a>
			</h2>
	<?php endforeach; endif;
	get_footer();
?>
