<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 *
 * @var  array  	$attributes  The block attributes.
 * @var  string 	$content 	 The block default content.
 * @var  WP_Block  	$block    	 The block instance.
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<ul>
		<li>Energy: <?php echo esc_html( $attributes['rpr_recipe_calorific_value'] ); ?></li>
		<li>Fat: <?php echo esc_html( $attributes['rpr_recipe_fat'] ); ?></li>
		<li>Carbohydrates: <?php echo esc_html( $attributes['rpr_recipe_carbohydrate'] ); ?></li>
	</ul>
</div>
