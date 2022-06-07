<?php 
	get_header(); 

	if (have_posts()): ?>
		<div class="projects">
  	<?php while (have_posts()) : the_post(); ?>
  		
    	<h2 class="project-line"><a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" alt="Project of Tabea Nixdorff: <?php the_title(); ?>"><?php the_title(); ?></a></h2>
    	
  	<?php endwhile;
	else:
		echo 'no projects right now'; ?>
	</div>
	<?php endif;
	get_footer();
?>
