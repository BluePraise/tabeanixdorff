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
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    
    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
    <header>
        <div class="container">
            <nav>
                <ul class="main-menu">
                    <li class="main-menu__item">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Tabea Nixdorff</a>
                        <ul class="submenu">
                            <li class=""><a href="#">artist's statement</a></li>
                            <li><a href="#">bio / CV</a></li>
                        </ul>
                    </li>
                    <li class="main-menu__item">
                        <a href="/">Texture</a>
                    </li>
                    <li class="main-menu__item">
                        <a class="js-search-toggle" href="#">Searching</a>
                       
                    </li>
                    <li class="main-menu__item">
                        <a href="/">Sorting Thread</a>
                    </li>
                </ul>
                
            </div>
                 <div class="search-container">
    <?php get_search_form( 
        array( 'aria_label' => __( '', 'tabeanixdorff' ),
    ));
    ?></div>
        </div>
    </header>
    <main class="container">