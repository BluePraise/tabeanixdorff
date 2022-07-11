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
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"> -->
     <!-- <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script> -->
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
                            <li class="submenu__item"><a href="#">artist's statement</a></li>
                            <li class="submenu__item"><a href="#">bio / CV</a></li>
                        </ul>
                    </li>
                    <li class="main-menu__item">
                        <a href="/">Texture</a>
                    </li>
                    <li class="main-menu__item">
                        <span class="screen-reader-text"><?php _e( 'Searching', 'tabeanixdorff' ); // phpcs:ignore: WordPress.Security.EscapeOutput.UnsafePrintingFunction -- core trusts translations ?></span>
                    </li>
                    <li class="main-menu__item">
                        <a href="/">Sorting Thread</a>
                    </li>
                </ul>     
                </nav>
            </div>

    </header> 
    <main class="main-container">
        <?php if(is_front_page()): ?>
        <div class="form-control">
            <input type="search" id="<?php echo esc_attr( $tabeanixdorff_unique_id ); ?>" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php //echo //get_search_query(); ?>" name="s" />
        </div>     
        <div class="result-container"></div>
        <?php endif; ?>