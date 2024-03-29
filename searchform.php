<?php
/**
 * The searchform.php template.
 */

/*
 * Generate a unique ID for each form and a string containing an aria-label
 * if one was passed to get_search_form() in the args array.
 */
$tn_unique_id = tn_unique_id( 'search-form-' );

$tabeanixdorff_aria_label = ! empty( $args['aria_label'] ) ? 'aria-label="' . esc_attr( $args['aria_label'] ) . '"' : '';
// Backward compatibility, in case a child theme template uses a `label` argument.
if ( empty( $tabeanixdorff_aria_label ) && ! empty( $args['label'] ) ) {
	$tabeanixdorff_aria_label = 'aria-label="' . esc_attr( $args['label'] ) . '"';
}
?>

<div class="form-control">
	<span class="screen-reader-text"><?php _e( 'Searching', 'tabeanixdorff' ); // phpcs:ignore: WordPress.Security.EscapeOutput.UnsafePrintingFunction -- core trusts translations ?></span>
	<input type="search" id="<?php echo esc_attr( $tabeanixdorff_unique_id ); ?>" class="search-field js-search-field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', 'tabeanixdorff' ); ?>" value="<?php //echo //get_search_query(); ?>" name="s" />
</div>	