<?php 
	get_header(); ?>
        
<?php if (have_posts()):
  while (have_posts()) : the_post(); ?>
  	<h1 class="project-detail-title"><?php the_title(); ?></h1>
         
    <?php  the_content();
  endwhile;
else:
endif;
?>
	
<?php get_footer(); ?>