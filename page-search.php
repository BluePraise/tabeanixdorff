<?php
/**
 * Template Name: Search Page
 */
/*
 * Generate a unique ID for each form and a string containing an aria-label
 * if one was passed to get_search_form() in the args array.
 */
get_header();
?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/search.css" type="text/css" media="screen" />

	<div class="form-control cursor">
		<input type="search" id="search-posts" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( '', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php echo get_search_query(); ?>" name="s" autofocus />
		<i></i>
	</div>
	<div class="projects">
		<?php
		// get all the posts
			$all_posts = get_posts(array(
				'post_type' => 'post',
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
					data-tag="<?php if ($posttags):
						foreach($posttags as $tag): echo $tag->name . ' ';
						endforeach; endif;?>"
				>
				<?php the_title(); ?>
				<?php parse_ACF_block( 'acf/project' ); ?>
				</a>
			</h2>
	<?php endforeach; endif; ?>
	</div><!-- end of .projects -->


<?php get_footer(); ?>