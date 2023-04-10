<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <title>
        <?php wp_title(''); ?><?php if (wp_title('', false)) {
                                    echo ' :';
                                } ?>
        <?php bloginfo('name'); ?>
    </title>

    <link href="//www.google-analytics.com" rel="dns-prefetch" />
    <link href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico" type="image/png" rel="icon" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <?php wp_head(); ?>
    <style>

    </style>
</head>

<body <?php body_class(); ?>>
    <header>


    <span class="dashicons dashicons-menu mobile-menu js-toggle-mobile-menu"></span>

    <?php
        tn_nav();
        // show filters
        echo get_template_part( 'template-parts/filters' );
    ?>


    </header>

    <main class="main-container">
        <?php if(is_front_page()): ?>
        <div class="form-control">
            <input type="search" id="<?php echo esc_attr( $tabeanixdorff_unique_id ); ?>" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php //echo //get_search_query(); ?>" name="s" />
        </div>
        <div class="result-container"></div>
        <?php endif; ?>
