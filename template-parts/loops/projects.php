<?php

        // this is filtered by pre-get-posts
		// 1. If a page-name variable is set, get those posts else get all the posts
		// 2. if the parameter set-data-tag is true (default), add the tags to the data-tag attribute
		if(isset($args['page-name'])):
			$project_posts = get_posts(array(
					'post_type' => 'post',
					'category__not_in' => array(get_cat_ID('hidden')),
					'posts_per_page'   => -1,
				)
		);
		else:
			$project_posts = get_posts(array(
					'post_type' => 'post',
					'posts_per_page'   => -1,
				)
			);
		endif;


		if (count($project_posts) > 1):
		foreach($project_posts as $post):
		$posttags = get_the_tags();

	?>
    	<h2 class="project-line">
			<a href="<?php the_permalink(); ?>"
				title="<?php the_title(); ?>"
				alt="Project of Tabea Nixdorff: <?php the_title(); ?>"
				<?php if (isset($args['set-data-tag']) && $args['set-data-tag'] == true): ?>
				data-tag="<?php if ($posttags):
					foreach($posttags as $tag): echo $tag->name . ' ';
					endforeach; endif;?>"
				<?php endif; ?>
			>
			<?php the_title(); ?>
			<?php parse_ACF_block( 'acf/project' ); ?>
			</a>
		</h2>

	<?php endforeach; endif; ?>