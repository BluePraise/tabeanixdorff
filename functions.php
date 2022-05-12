<?php 

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
?>
