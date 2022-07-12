<div class="js-filters">
	<ul>
	    <?php
	    $tags = get_tags();
	    if ( $tags ) :
	        foreach ( $tags as $tag ) : ?>
	            <li><a class="filter__link" href="<?php echo esc_url( get_tag_link( $tag->term_id ) ); ?>" title="<?php echo esc_attr( $tag->name ); ?>"><?php echo esc_html( $tag->name ); ?></a></li>
	        <?php endforeach; ?>
	    <?php endif; ?>
	</ul>
</div>