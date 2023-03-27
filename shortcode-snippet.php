<?php
function snippet_group($atts, $content = null) {
    $default = array(
        'full-image' => '#',
        'snippet-image' => '#'
    );
    // var_dump($default['image']);
    $a = shortcode_atts($default, $atts);
    $content = do_shortcode($content);
    return '<span class="snippet-container">
                <span class="snippet-text">'. $content .' </span>
                <img class="snippet-image" src="'. wp_strip_all_tags($a['snippet-image']) .'" alt="'. $content .'">
            </span>
            <img class="snippet-full-image" src="'. wp_strip_all_tags($a['full-image']) .'" alt="'. $content .'">';
}

add_shortcode('snippet', 'snippet_group');