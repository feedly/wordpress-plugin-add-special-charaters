<?php
/**
 * Plugin Name: Feedly Add Special Characters
 * Description: Add a sepcial characters on the article
 * Version: 1.0.0
 * Author: Clement Osternaud | Front-End developer at Feedly
 * Author URI: http://feedly.com
 * License: GPL2
 */

define('FSC_ROOT_PATH', plugin_dir_path(__FILE__));
define('FSC_ROOT_URL', plugin_dir_url(__FILE__));
define('FSC_PLUGIN_FILE', FSC_ROOT_PATH . 'feedly-add-special.php');

add_shortcode('fsc-dumb-shortcode', 'fsc_dumb_shortcode_func');

////////////////////////////////
/// Hook into TinyMCE Editor ///
////////////////////////////////
add_filter('mce_buttons', 'fsc_register_tinymce_button');
function fsc_register_tinymce_button($button_array) {
  global $current_screen;
  $type = $current_screen->post_type;
  if (is_admin() && ($type == 'post' || $type == 'page')) {
    array_push($button_array, 'fsc_button');
  }
  return $button_array;
}

add_filter('mce_external_plugins', 'fsc_register_tinymce_plugin');
function fsc_register_tinymce_plugin($plugin_array) {
  global $current_screen;
  $type = $current_screen->post_type;
  if (is_admin() && ($type == 'post' || $type == 'page')) {
    $plugin_array['fsc_plugin'] = FSC_ROOT_URL . 'tinymce-plugin.js';
  }
  return $plugin_array;
}
