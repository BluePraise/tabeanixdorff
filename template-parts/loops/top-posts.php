<?php
/**
* Template part for displaying top posts
* This template part can only be used by passing a variable. It is not meant to be used on its own.
*
**/
		$top_posts = get_posts( array('category_name' => $args['page-name'], 'order', 'ASC') );
		// if there's more than one result
        if (count($top_posts) > 1):
            foreach($top_posts as $post):
                $block = parse_blocks( $post->post_content );
                $hover_text = $block[0]['attrs']['data'];

		        $posttags = get_the_tags();
            ?>

                <h2 class="project-line top-menu-line">
                    <a href="<?php the_permalink(); ?>"
                        <?php if (isset($args['set-data-tag']) && $args['set-data-tag'] == true): ?>
                        data-tag="<?php if ($posttags):
                            foreach($posttags as $tag): echo $tag->name . ' ';
                            endforeach; endif;?>"
                        <?php endif; ?>
                    >
                    <?php the_title(); ?>
                        <p class="project-detail-meta-info">
                            <i><?php echo $hover_text['project_hover_text']; ?></i>
                        </p>
                    </a>
                </h2>
		<?php endforeach; endif;  ?>