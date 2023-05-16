
<?php
get_header();
if( isset( $_REQUEST['search'] ) ):
	query_posts( array(
		's' => $_REQUEST[ 'search' ],
		'post_type' => $_REQUEST[ 'post_type' ],
		'paged' => $paged
		)
	);
echo '<div class="search-results">';
echo '<h2>Search Results for: ' . $_REQUEST['search'] . '</h2>';
echo '<ul>';
echo 			'<li><strong>Search Results</strong></li>';
echo 			'<li><strong>Post Type:</strong> ' . $_REQUEST['post_type'] . '</li>';
echo 			'<li><strong>Page:</strong> ' . $paged . '</li>';
echo '</ul>';
echo '</div>';
endif;


get_footer(); ?>