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
			// if the post has a category "top-posts" show those first
			$top_posts = get_posts( array('category_name' => 'top-post', 'order', 'ASC') );
			var_dump($top_posts);
			// if there's more than one result
			if (count($top_posts) > 1):
				// loop through all the project posts
				foreach($top_posts as $post):
				if (has_category('top-post', $post->ID)):
					$block = parse_blocks( $post->post_content );
					$hover_text = $block[0]['attrs']['data'];
		?>

			<h2 class="project-line top-menu-line">
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" alt="Project of Tabea Nixdorff: <?php the_title(); ?>"> <?php the_title(); ?>
					<p class="project-detail-meta-info">
						<i><?php echo $hover_text['project_hover_text']; ?></i>
					</p>
				</a>
			</h2>

		<?php endif; endforeach; endif; ?>

		<?php
				// this is filtered by pre-get-posts
				if (have_posts()): while (have_posts()) : the_post();
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
			<?php endwhile;
			else:
				echo '<p>no projects right now</p>'; ?>

			<?php endif; ?>

	</div><!-- .end-of-projects -->


<?php get_footer(); ?>