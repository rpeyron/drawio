/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// Overrides of global vars need to be pre-loaded
window.EXPORT_URL = 'REPLACE_WITH_YOUR_IMAGE_SERVER';
window.PLANT_URL = 'REPLACE_WITH_YOUR_PLANTUML_SERVER';
window.DRAWIO_BASE_URL = null; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAW_MATH_URL = 'math';
window.DRAWIO_CONFIG = null; // Replace with your custom draw.io configurations. For more details, https://www.diagrams.net/doc/faq/configure-diagram-editor
window.DRAWIO_CONFIG = {"plugins": [
  "./plugins/asyncapi-plugin.webpack.js",
  "./plugins/editorjs-plugin.webpack.js",
  "./plugins/markdown-plugin.webpack.js",
  "./plugins/quill-plugin.webpack.js",
  "./plugins/swagger-plugin.webpack.js",
  "./plugins/tinyeditor-plugin.webpack.js",
  "./plugins/tiptap-plugin.webpack.js",
]} 
urlParams['splash'] = '0';
urlParams['sync'] = 'manual';

