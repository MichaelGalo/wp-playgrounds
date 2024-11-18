<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'n/r4Jw?QgXn<bRJS8=fJ 7.WDcF12bTx0}`NWDNu/J)K$d}x%3J~+&=~q_P%N$0W' );
define( 'SECURE_AUTH_KEY',   'yNhhif_(>h8!bmYz1Wx ~<J0-+m/<Fh5U9I`~Lc{XnI^`XuGDq(<V+8gK6GTnR3L' );
define( 'LOGGED_IN_KEY',     'AsRBxfw=piZf`ZfXkD/:mH&37c~q}J.DGlKGrf}$,U$=bd~Ep*76sW4~8+o+1W~B' );
define( 'NONCE_KEY',         ']@6KB,lt|t!.C@Oas$AdNDc@uj<m/&[C]fgz!wud9yj0B=z(` 1`*0{eyVb^0~rS' );
define( 'AUTH_SALT',         'CwF=[RXlgv}..9n%hdrtPz(9KmC%*il^:SrVyBO1./r^rtVG,3I?z+rpRs`urbK)' );
define( 'SECURE_AUTH_SALT',  'Jv~Po?KVKWCWqUN~m;@cw5uggC]b#}O&j+?+3sQA;@D4v X_)fz$}hG# 7HtTVv_' );
define( 'LOGGED_IN_SALT',    '7G,<aU~r|BbpR8UqE^m,:xRhbQp}ra&T4l;6V454V+l3x_,JZ9wEC#2|lL/ID! P' );
define( 'NONCE_SALT',        'ZE _M[6lG1gr2wrNU{BHh(Q%<HL_`EOsgYs]hYUiO1~O}EsoVUldVnH^v~r0w_+o' );
define( 'WP_CACHE_KEY_SALT', '7U.r`XtJ~A<:7zP x0X}+`*T&/z:d${uX=]js6%}ZP7_1!sfl{|IFBh,Ff5QGT3)' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
