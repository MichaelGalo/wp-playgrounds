<?php
/**
 * Plugin Name: Disable Admin Bar
 * Description: This is a test for adding a new plugin to wordpress.
 * Author: Michael Galo with assitance from the Jakson youtube channel.
 */

 // Remove the admin bar from the front end
add_filter( 'show_admin_bar', '__return_false' );