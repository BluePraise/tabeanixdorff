<?php 
	get_header(); ?>

        <div class="search-form">
            <input type="search" id="search-posts" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php //echo //get_search_query(); ?>" name="s" />
            <div class="search-results"></div>
        </div>
        
<?php if (have_posts()):
  while (have_posts()) : the_post(); ?>
  	<h1 class="project-detail-title"><?php the_title(); ?></h1>
  <?php  the_content();
  endwhile;
else:
endif;
?>
	
<?php get_footer(); ?>