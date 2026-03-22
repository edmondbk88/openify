<?php
if (!defined('_PS_VERSION_')) exit;

class Opinafy extends Module {
    public function __construct() {
        $this->name = 'opinafy';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'Opinafy';
        $this->need_instance = 0;
        $this->bootstrap = true;
        parent::__construct();
        $this->displayName = $this->l('Opinafy - Testimonios Verificados');
        $this->description = $this->l('Muestra testimonios verificados de tus clientes con widgets personalizables.');
    }

    public function install() {
        return parent::install()
            && $this->registerHook('displayFooter')
            && Configuration::updateValue('OPINAFY_PROJECT_ID', '');
    }

    public function uninstall() {
        return parent::uninstall() && Configuration::deleteByName('OPINAFY_PROJECT_ID');
    }

    public function getContent() {
        $output = '';
        if (Tools::isSubmit('submitOpinafySettings')) {
            Configuration::updateValue('OPINAFY_PROJECT_ID', Tools::getValue('OPINAFY_PROJECT_ID'));
            $output .= $this->displayConfirmation($this->l('Settings updated'));
        }
        return $output . $this->renderForm();
    }

    public function renderForm() {
        $fields_form = [
            'form' => [
                'legend' => ['title' => $this->l('Opinafy Settings')],
                'input' => [
                    ['type' => 'text', 'label' => $this->l('Project ID'), 'name' => 'OPINAFY_PROJECT_ID',
                     'desc' => $this->l('Find your Project ID in your Opinafy dashboard'), 'required' => true],
                ],
                'submit' => ['title' => $this->l('Save')],
            ],
        ];
        $helper = new HelperForm();
        $helper->submit_action = 'submitOpinafySettings';
        $helper->fields_value = ['OPINAFY_PROJECT_ID' => Configuration::get('OPINAFY_PROJECT_ID')];
        return $helper->generateForm([$fields_form]);
    }

    public function hookDisplayFooter() {
        $projectId = Configuration::get('OPINAFY_PROJECT_ID');
        if (empty($projectId)) return '';
        return '<div id="opinafy-widget" data-project="' . htmlspecialchars($projectId) . '"></div>'
             . '<script src="https://opinafy.com/widget.js" defer></script>';
    }
}
