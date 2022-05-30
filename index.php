<?php 
	get_header(); 

	if (have_posts()): ?>
		<div class="projects">
  	<?php while (have_posts()) : the_post(); ?>
  		
    		<?php the_content();?>
    	
  	<?php endwhile;
	else:
		echo 'no projects right now'; ?>
	</div>
	<?php endif;
	get_footer();
?>
