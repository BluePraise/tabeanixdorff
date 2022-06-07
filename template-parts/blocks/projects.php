<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'project-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'project';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

// Load values and assign defaults.

$hover_text = get_field('project_hover_text') ?: 'Your correction line here...'; 
$year = get_field('project_year') ?: 'The year of a project'; 
$categories = get_the_category();
 

if (is_single()) : ?>
    <?php //var_dump(get_the_category()); ?>
    <p class="project-detail-meta-info"><i><?= $hover_text; ?></i> (<?php if ( ! empty( $categories ) ): echo esc_html( $categories[0]->name ); endif; ?>, 2016)</p>
<?php endif; ?>
    

