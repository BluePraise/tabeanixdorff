<?php

        // this is filtered by pre-get-posts
		if (have_posts()): while (have_posts()) : the_post();
		$posttags = get_the_tags();
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
  	<?php endwhile;
	else:
		echo '<p>no projects right now</p>'; ?>

	<?php endif; ?>