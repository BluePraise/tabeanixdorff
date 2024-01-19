
<ul class="js-filters sub-menu">
	<li class="clear-button"><a class="hide-this clear-active" href="javascript:clear_all()" title="clear all filters"><?php echo "clear all filters"; ?></a></li>
	    <?php
	    $tags = get_tags();
	    if ( $tags ) :
	        foreach ( $tags as $tag ) :
			?>
	            <li><a class="filter__link <?php if ( $tag->count == 0 ) : echo 'inactive'; endif; ?>" href="<?php echo esc_url( get_tag_link( $tag->term_id ) ); ?>" title="<?php echo esc_attr( $tag->name ); ?>"><?php echo esc_html( $tag->name ); ?></a></li>
	        <?php endforeach; ?>
	    <?php endif; ?>
</ul>
