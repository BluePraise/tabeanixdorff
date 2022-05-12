<?php 
function theme_features() {
    add_theme_support(
        'title-tag'
    );
}
function tn_dequeue_style() {
    if(!is_admin()) {
        wp_dequeue_style('dashicons-css');
        wp_deregister_style('dashicons-css');
        wp_dequeue_style('wp-block-library-theme');
	    wp_deregister_style('wp-block-library-theme');
        wp_dequeue_style('storefront-gutenberg-blocks');
	    wp_deregister_style('storefront-gutenberg-blocks');
        wp_dequeue_style('wp-block-library');
	    wp_deregister_style('wp-block-library');
    }
}
add_action('wp_enqueue_scripts', 'tn_dequeue_style', 999);

add_action('acf/init', 'my_acf_init_block_types');

function my_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register a project block.
        acf_register_block_type(array(
            'name'              => 'project',
            'title'             => __('Portfolio Project'),
            'description'       => __('A custom portfolio entry.'),
            'render_template'   => 'template-parts/blocks/projects.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'keywords'          => array( 'portfolio', 'quote' ),
            'post_types'		=> array('post', 'page')
        ));
    }
}
add_theme_support( 'post-thumbnails' );

function tn_styles_scripts() {
	wp_register_style( 'tn_style', get_template_directory_uri() . '/style.css');
	wp_enqueue_style('tn_style');
}

add_action( 'wp_enqueue_scripts', 'tn_styles_scripts' );

 // Navigation
function tn_nav() {
    wp_nav_menu(
    array(
        'theme_location'  => 'header-menu',
        'menu'            => '',
        'container'       => 'nav',
        'container_class' => 'masthead',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul class="reset-list-style">%3$s</ul>',
        'depth'           => 0,
        'walker'          => '',
        )
    );
}

function register_gogo_menu() {
    register_nav_menus( array( // Using array to specify more menus if needed
        'header-menu'  => esc_html( 'Header Menu', 'tn' ), // Main Navigation
        'extra-menu'   => esc_html( 'Extra Menu', 'tn' ) //
    ) );
}

function wpb_remove_version() {
    return '';
}
add_filter('the_generator', 'wpb_remove_version');

// allow svg upload
function my_myme_types($mime_types){
    $mime_types['svg'] = 'image/svg+xml'; //Adding svg extension
    return $mime_types;
}
add_filter('upload_mimes', 'my_myme_types');

// Remove Actions
remove_action( 'wp_head', 'feed_links_extra', 3 ); // Display the links to the extra feeds such as category feeds
remove_action( 'wp_head', 'feed_links', 2 ); // Display the links to the general feeds: Post and Comment Feed
remove_action( 'wp_head', 'rsd_link' ); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action( 'wp_head', 'wlwmanifest_link' ); // Display the link to the Windows Live Writer manifest file.
remove_action( 'wp_head', 'wp_generator' ); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action( 'wp_head', 'rel_canonical' );
remove_action( 'wp_head', 'wp_shortlink_wp_head', 10, 0 );