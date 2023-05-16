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
<div class="form-control">
	<input type="search" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( '', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php echo get_search_query(); ?>" name="s" autofocus />
</div>
<div class="projects">

	<?php
		// get all posts with category project
		$allProjectPosts = get_posts( array('category_name' => 'project', 'order', 'ASC') );
		// if there's more than one result
		if (count($allProjectPosts) > 1):
		// loop through all the project posts
		foreach($allProjectPosts as $post):
		$postTags = get_the_tags();
	?>
    	<h2 class="project-line">
			<a href="<?php the_permalink(); ?>"
				title="<?php the_title(); ?>"
				alt="Project of Tabea Nixdorff: <?php the_title(); ?>"
				data-tag="<?php
				if ($postTags):
					foreach($postTags as $tag):
						echo $tag->name . ' ';
					endforeach;
				endif;?>"
			>
			<?php the_title(); ?>
			<?php parse_ACF_block( 'acf/project' ); ?>
			</a>
		</h2>
  	<?php endforeach; endif; ?>

	<div class="leftover-projects"></div>
</div><!-- .end-of-projects -->



<?php get_footer(); ?>