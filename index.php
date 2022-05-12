<?php 
	get_header(); 

	if (have_posts()):
  	while (have_posts()) : the_post(); ?>
  		
    	<?php the_content();?>
  	<?php endwhile;
	else:
		echo 'no projects right now';
	endif;
	get_footer();
?>
