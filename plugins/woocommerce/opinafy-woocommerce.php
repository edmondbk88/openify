<?php
/**
 * Plugin Name: Opinafy for WooCommerce
 * Plugin URI: https://opinafy.com
 * Description: Display Opinafy testimonials on WooCommerce product pages automatically.
 * Version: 1.0.0
 * Author: Opinafy
 * Author URI: https://opinafy.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Requires Plugins: opinafy-testimonials
 * Requires at least: 5.8
 * Tested up to: 6.4
 * Requires PHP: 7.4
 * Text Domain: opinafy-woocommerce
 */

if (!defined('ABSPATH')) exit;

// Check if WooCommerce is active
if (!in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
    return;
}

// Adds widget after product description
add_action('woocommerce_after_single_product_summary', function() {
    $product_id = get_the_ID();

    // Check for product-specific project ID first
    $project_id = get_post_meta($product_id, '_opinafy_project_id', true);

    // Fall back to global project ID
    if (empty($project_id)) {
        $project_id = get_option('opinafy_project_id', '');
    }

    if (empty($project_id)) return;

    echo '<div class="opinafy-woocommerce-widget" style="margin-top: 2rem;">';
    echo '<div class="opinafy-widget" data-project="' . esc_attr($project_id) . '"></div>';
    echo '<script src="https://opinafy.com/widget.js" defer></script>';
    echo '</div>';
}, 25);

// Add product-specific project ID meta box
add_action('add_meta_boxes', function() {
    add_meta_box(
        'opinafy_product_settings',
        'Opinafy Testimonials',
        function($post) {
            $project_id = get_post_meta($post->ID, '_opinafy_project_id', true);
            wp_nonce_field('opinafy_product_meta', 'opinafy_product_nonce');
            echo '<p>';
            echo '<label for="opinafy_project_id"><strong>Project ID (optional):</strong></label><br>';
            echo '<input type="text" id="opinafy_project_id" name="_opinafy_project_id" value="' . esc_attr($project_id) . '" class="widefat" />';
            echo '<br><span class="description">Leave empty to use the global Opinafy Project ID from Settings &gt; Opinafy.</span>';
            echo '</p>';
        },
        'product',
        'side',
        'default'
    );
});

// Save product-specific project ID
add_action('save_post_product', function($post_id) {
    if (!isset($_POST['opinafy_product_nonce']) || !wp_verify_nonce($_POST['opinafy_product_nonce'], 'opinafy_product_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    if (isset($_POST['_opinafy_project_id'])) {
        update_post_meta($post_id, '_opinafy_project_id', sanitize_text_field($_POST['_opinafy_project_id']));
    }
});

// Add WooCommerce-specific settings tab
add_filter('woocommerce_settings_tabs_array', function($tabs) {
    $tabs['opinafy'] = 'Opinafy';
    return $tabs;
}, 50);

add_action('woocommerce_settings_tabs_opinafy', function() {
    woocommerce_admin_fields([
        [
            'title' => 'Opinafy Settings',
            'type'  => 'title',
            'desc'  => 'Configure Opinafy testimonials for your WooCommerce store.',
            'id'    => 'opinafy_woo_settings',
        ],
        [
            'title'    => 'Display on product pages',
            'desc'     => 'Automatically show testimonials on all product pages',
            'id'       => 'opinafy_woo_auto_display',
            'default'  => 'yes',
            'type'     => 'checkbox',
        ],
        [
            'type' => 'sectionend',
            'id'   => 'opinafy_woo_settings',
        ],
    ]);
});

add_action('woocommerce_update_options_opinafy', function() {
    woocommerce_update_options([
        [
            'id'   => 'opinafy_woo_auto_display',
            'type' => 'checkbox',
        ],
    ]);
});
