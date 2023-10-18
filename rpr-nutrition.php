<?php
/**
 * Plugin Name:       RPPR Nutrition
 * Plugin URI:        https://wzymedia.com
 * Description:       The  recipe nutrition block
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            w33zy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rpr-nutrition
 *
 * @package           rpr-nutrition
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function rpr_nutrition_rpr_nutrition_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'rpr_nutrition_rpr_nutrition_block_init' );
