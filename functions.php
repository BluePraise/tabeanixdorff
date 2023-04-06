<?php
function theme_features() {
    add_theme_support(
        'title-tag',
        'search-form'
    );
}


function tn_dequeue_style() {
    if(!is_admin()) {
        wp_dequeue_style('dashicons-css');
        wp_deregister_style('dashicons-css');
        wp_dequeue_style('wp-block-library-theme');
	    wp_deregister_style('wp-block-library-theme');
        wp_dequeue_style('wp-block-library');
	    wp_deregister_style('wp-block-library');
    }
}
add_action('wp_enqueue_scripts', 'tn_dequeue_style', 10);

function tn_acf_init_block_types() {

    // Check function exists.
    if( function_exists('acf_register_block_type') ) {

        // register project block.
        acf_register_block_type(array(
            'name'              => 'project',
            'title'             => __('Portfolio Project'),
            'description'       => __('A custom portfolio entry.'),
            'render_template'   => get_template_directory() . '/template-parts/blocks/projects.php',
            'category'          => 'formatting',
            'icon'              => 'admin-comments',
            'is_preview'        => true,
            'keywords'          => array( 'portfolio', 'quote' ),
            'post_types'        => array('post')
        ));

        // register gallery block.
        acf_register_block_type(array(
            'name'              => 'imageslider',
            'title'             => __('Image Slider'),
            'description'       => __('A custom image slider.'),
            'render_template'   => get_template_directory() . '/template-parts/blocks/slider/slider.php',
            'enqueue_style'     => get_template_directory_uri() . '/template-parts/blocks/slider/slider.css',
            'enqueue_script'    => get_template_directory_uri() . '/template-parts/blocks/slider/slider.js', array('tn_slider'), '', true,
            'category'          => 'formatting',
            'icon'              => 'dashicons-images-alt2',
            'is_preview'        => true,
            'keywords'          => array( 'image', 'slider' ),
            'post_types'        => array('post', 'page')
        ));
    }
}
add_action('acf/init', 'tn_acf_init_block_types', 10);

add_theme_support( 'post-thumbnails' );

// add_action( 'wp_head', 'check_jquery' );
// add_action( 'admin_head', 'check_jquery' );
function check_jquery() {

    global $wp_scripts;

    foreach ( $wp_scripts->registered as $wp_script ) {
        $handles[] = $wp_script->handle;
    }

    if(  in_array( 'jquery', $handles ) ) :
        echo 'jquery has been loaded';
    else :
        echo 'jquery has been removed';
    endif;
}


function tn_styles_scripts() {
	wp_register_style( 'tn_style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script("jquery");
	wp_register_script( 'tn_script', get_template_directory_uri() . '/assets/js/script.js', array(), '1.0.0', true);
    wp_register_script( 'tn_slider', get_template_directory_uri() . '/assets/js/owlslider/owlslider.js', array('jquery'), '1.0.0', true);

    wp_enqueue_style('tn_style');

    wp_enqueue_script('tn_slider');
    wp_enqueue_script('tn_script');

     wp_localize_script('tn_script', 'settings', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}

add_action( 'wp_enqueue_scripts', 'tn_styles_scripts' );

 // Navigation
function tn_nav() {
    wp_nav_menu(
    array(
        'theme_location'  => 'header-menu',
        'menu'            => '',
        'container'       => 'nav',
        'container_class' => '',
        'container_id'    => '',
        'menu_class'      => 'menu',
        'menu_id'         => '',
        'echo'            => true,
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'items_wrap'      => '<ul class="main-menu">%3$s</ul>',
        'depth'           => 0,
        'walker' => new WPDocs_Walker_Nav_Menu()
        )
    );
}

function register_tn_menu() {
    register_nav_menus( array( // Using array to specify more menus if needed
        'header-menu'  => esc_html( 'Header Menu', 'tn' ), // Main Navigation
        'extra-menu'   => esc_html( 'Extra Menu', 'tn' ) //
    ) );
}
add_action('init', 'register_tn_menu');

/**
 * Custom walker class.
 */
class WPDocs_Walker_Nav_Menu extends Walker_Nav_Menu {

    /**
     * Starts the list before the elements are added.
     *
     * Adds classes to the unordered list sub-menus.
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param int    $depth  Depth of menu item. Used for padding.
     * @param array  $args   An array of arguments. @see wp_nav_menu()
     */
    function start_lvl( &$output, $depth = 0, $args = array() ) {
        // Depth-dependent classes.
        $indent = ( $depth > 0  ? str_repeat( "\t", $depth ) : '' ); // code indent
        $display_depth = ( $depth + 1); // because it counts the first submenu as 0
        $classes = array(
            'sub-menu',
            ( $display_depth % 2  ? 'menu-odd' : 'menu-even' ),
            ( $display_depth >=2 ? 'sub-sub-menu' : '' ),
            'menu-depth-' . $display_depth
        );
        $class_names = implode( ' ', $classes );

        // Build HTML for output.
        $output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
    }

    /**
     * Start the element output.
     *
     * Adds main/sub-classes to the list items and links.
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param object $item   Menu item data object.
     * @param int    $depth  Depth of menu item. Used for padding.
     * @param array  $args   An array of arguments. @see wp_nav_menu()
     * @param int    $id     Current item ID.
     */
    function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        global $wp_query;
        $indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' ); // code indent

        // Depth-dependent classes.
        $depth_classes = array(
            ( $depth == 0 ? 'main-menu__item' : 'sub-menu__item' ),
            ( $depth >=2 ? 'sub-sub-menu-item' : '' ),
            ( $depth % 2 ? 'menu-item-odd' : 'menu-item-even' ),
            'menu-item-depth-' . $depth
        );
        $depth_class_names = esc_attr( implode( ' ', $depth_classes ) );

        // Passed classes.
        $classes = empty( $item->classes ) ? array() : (array) $item->classes;
        $class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );

        // Build HTML.
        $output .= $indent . '<li id="nav-menu-item-'. $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';

        // Link attributes.
        $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
        $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
        $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
        $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
        $attributes .= ' class="menu-link ' . ( $depth > 0 ? 'sub-menu-link' : 'main-menu-link' ) . '"';

        // Build HTML output and pass through the proper filter.
        $item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
            $args->before,
            $attributes,
            $args->link_before,
            apply_filters( 'the_title', $item->title, $item->ID ),
            $args->link_after,
            $args->after
        );
        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}

function tn_unique_id( $prefix = '' ) {
	static $id_counter = 0;
	if ( function_exists( 'wp_unique_id' ) ) {
		return wp_unique_id( $prefix );
	}
	return $prefix . (string) ++$id_counter;
}
// Add images sizes.
function custom_theme_setup() {
    add_image_size( 'sliver-size', 100 , 50, true );
}
add_action( 'after_setup_theme', 'custom_theme_setup' );

// Make custom sizes selectable from WordPress admin.
function custom_image_sizes( $size_names ) {
    $new_sizes = array(
        'sliver-size' => __( 'Sliver Size' ),
    );
    return array_merge( $size_names, $new_sizes );
}
add_filter( 'image_size_names_choose', 'custom_image_sizes' );


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

add_action('wp_ajax_search-posts', 'search_posts' );
add_action('wp_ajax_nopriv_search-posts', 'search_posts' );

function search_posts() {
    global $wpdb;

    $search_string = sanitize_text_field(filter_input(INPUT_POST, 'search'));

    $posts = $wpdb->get_results( $wpdb->prepare("SELECT post_title, id FROM $wpdb->posts WHERE post_type = 'post' AND post_title LIKE '%s'", '%'. $wpdb->esc_like( $search_string ) .'%') );
    foreach ($posts as $post) {
        $post->url = get_permalink($post->id);
    }
    wp_send_json_success(json_encode($posts));
}


// inspired by: https://www.billerickson.net/access-gutenberg-block-data/
function parse_ACF_block( $blockname ) {
    global $post;
    $blocks = parse_blocks( $post->post_content );

    foreach( $blocks as $block ) {

        if( $blockname === $block['blockName'] ) {
            echo render_block( $block );
        break;
        }
    }
}

include('shortcode-snippet.php');