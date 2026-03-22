<?php
/**
 * Plugin Name: Opinafy - Testimonios Verificados
 * Plugin URI: https://opinafy.com
 * Description: Muestra testimonios verificados de tus clientes con widgets personalizables. Integración sencilla con Opinafy.
 * Version: 1.0.0
 * Author: Opinafy
 * Author URI: https://opinafy.com
 * License: GPL v2 or later
 * Text Domain: opinafy
 */

if (!defined('ABSPATH')) exit;

class Opinafy_Testimonials {
    private $option_name = 'opinafy_project_id';

    public function __construct() {
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('wp_footer', [$this, 'inject_widget_script']);
        add_shortcode('opinafy', [$this, 'shortcode']);
        add_action('widgets_init', [$this, 'register_widget']);
    }

    // Admin menu
    public function add_admin_menu() {
        add_options_page(
            'Opinafy Settings',
            'Opinafy',
            'manage_options',
            'opinafy',
            [$this, 'settings_page']
        );
    }

    // Register settings
    public function register_settings() {
        register_setting('opinafy_settings', $this->option_name);
    }

    // Settings page with nice UI
    public function settings_page() {
        $project_id = get_option($this->option_name, '');
        ?>
        <div class="wrap">
            <h1><img src="https://opinafy.com/logo-opinafy.png" alt="Opinafy" style="height:32px;vertical-align:middle;margin-right:10px;">Opinafy</h1>
            <p>Conecta tu cuenta de Opinafy para mostrar testimonios verificados en tu sitio.</p>

            <form method="post" action="options.php">
                <?php settings_fields('opinafy_settings'); ?>
                <table class="form-table">
                    <tr>
                        <th scope="row"><label for="opinafy_project_id">Project ID</label></th>
                        <td>
                            <input type="text" id="opinafy_project_id" name="<?php echo $this->option_name; ?>"
                                   value="<?php echo esc_attr($project_id); ?>" class="regular-text"
                                   placeholder="ej: a1b2c3d4-e5f6-7890-abcd-ef1234567890">
                            <p class="description">
                                Encuentra tu Project ID en <a href="https://opinafy.com/proyectos" target="_blank">tu panel de Opinafy</a> &rarr;
                                selecciona un proyecto &rarr; Configurar Widget &rarr; Código de integración.
                            </p>
                        </td>
                    </tr>
                </table>
                <?php submit_button('Guardar'); ?>
            </form>

            <hr>
            <h2>Cómo usar</h2>
            <p><strong>Automático:</strong> El widget se mostrará automáticamente si has configurado el Project ID arriba.</p>
            <p><strong>Shortcode:</strong> Usa <code>[opinafy]</code> o <code>[opinafy id="TU_PROJECT_ID"]</code> en cualquier página o post.</p>
            <p><strong>Gutenberg:</strong> Usa el bloque "HTML personalizado" y pega el código de integración de Opinafy.</p>

            <?php if ($project_id): ?>
            <hr>
            <h2>Vista previa</h2>
            <div id="opinafy-widget" data-project="<?php echo esc_attr($project_id); ?>"></div>
            <script src="https://opinafy.com/widget.js" defer></script>
            <?php endif; ?>

            <hr>
            <p>¿No tienes cuenta? <a href="https://opinafy.com/registro" target="_blank">Regístrate gratis en Opinafy</a></p>
        </div>
        <?php
    }

    // Inject widget script in footer if project ID is set
    public function inject_widget_script() {
        $project_id = get_option($this->option_name, '');
        if (empty($project_id)) return;

        echo '<div id="opinafy-widget" data-project="' . esc_attr($project_id) . '"></div>';
        echo '<script src="https://opinafy.com/widget.js" defer></script>';
    }

    // Shortcode [opinafy] or [opinafy id="xxx"]
    public function shortcode($atts) {
        $atts = shortcode_atts([
            'id' => get_option($this->option_name, ''),
        ], $atts);

        if (empty($atts['id'])) return '<!-- Opinafy: No project ID configured -->';

        wp_enqueue_script('opinafy-widget', 'https://opinafy.com/widget.js', [], '1.0', true);

        return '<div class="opinafy-widget" data-project="' . esc_attr($atts['id']) . '"></div>';
    }

    // WordPress widget
    public function register_widget() {
        register_widget('Opinafy_WP_Widget');
    }
}

// WordPress Widget class
class Opinafy_WP_Widget extends WP_Widget {
    public function __construct() {
        parent::__construct('opinafy_widget', 'Opinafy Testimonios', [
            'description' => 'Muestra testimonios verificados de Opinafy',
        ]);
    }

    public function widget($args, $instance) {
        $project_id = !empty($instance['project_id']) ? $instance['project_id'] : get_option('opinafy_project_id', '');
        if (empty($project_id)) return;

        echo $args['before_widget'];
        if (!empty($instance['title'])) {
            echo $args['before_title'] . apply_filters('widget_title', $instance['title']) . $args['after_title'];
        }
        echo '<div class="opinafy-widget" data-project="' . esc_attr($project_id) . '"></div>';
        echo '<script src="https://opinafy.com/widget.js" defer></script>';
        echo $args['after_widget'];
    }

    public function form($instance) {
        $title = !empty($instance['title']) ? $instance['title'] : 'Testimonios';
        $project_id = !empty($instance['project_id']) ? $instance['project_id'] : '';
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>">Título:</label>
            <input class="widefat" type="text" id="<?php echo $this->get_field_id('title'); ?>"
                   name="<?php echo $this->get_field_name('title'); ?>" value="<?php echo esc_attr($title); ?>">
        </p>
        <p>
            <label for="<?php echo $this->get_field_id('project_id'); ?>">Project ID:</label>
            <input class="widefat" type="text" id="<?php echo $this->get_field_id('project_id'); ?>"
                   name="<?php echo $this->get_field_name('project_id'); ?>" value="<?php echo esc_attr($project_id); ?>"
                   placeholder="Dejar vacío para usar el ID global">
        </p>
        <?php
    }

    public function update($new_instance, $old_instance) {
        $instance = [];
        $instance['title'] = sanitize_text_field($new_instance['title']);
        $instance['project_id'] = sanitize_text_field($new_instance['project_id']);
        return $instance;
    }
}

new Opinafy_Testimonials();
