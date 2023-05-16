<?php get_header(); ?>
<div class="projects">
	<?php
		// these are the two posts that belong to this page
		//13 = <<page_home></page_home></page_home>

		$page_posts = get_posts( array('category_name' => 'page-texture') );
		$hover_text = get_field('hover_text', $post->ID);
		foreach($page_posts as $post):
			$block = parse_blocks( $post->post_content );
			$hover_text = $block[0]['attrs']['data'];
		?>

			<h2 class="project-line top-menu-line">
				<a href="<?php the_permalink(); ?>"><?php echo $hover_text['project_hover_text']; ?></a>
			</h2>
		<?php endforeach; ?>
	<?php
		// this is filtered by pre-get-posts
		if (have_posts()): while (have_posts()) : the_post();
		$posttags = get_the_tags();
	?>
    	<h2 class="project-line">
			<a href="<?php the_permalink(); ?>
				"title="<?php the_title(); ?>"
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
		echo 'no projects right now'; ?>

	<?php endif; ?>
	<div class="leftover-projects"></div>
</div>


<?php
	get_footer();
?>
