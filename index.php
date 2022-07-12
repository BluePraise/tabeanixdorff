<?php 
	get_header(); 

	if (have_posts()): ?>
		<div class="projects">
  	<?php while (have_posts()) : the_post(); ?>
  	<?php $posttags = get_the_tags(); ?>
    	<h2 class="project-line"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" alt="Project of Tabea Nixdorff: <?php the_title(); ?>" data-tag="<?php if ($posttags): foreach($posttags as $tag): echo $tag->name . ' '; endforeach; endif;?>"><?php the_title(); ?></a></h2>
    	
  	<?php endwhile;
	else:
		echo 'no projects right now'; ?>
	</div>
	<?php endif;
	get_footer();
?>
