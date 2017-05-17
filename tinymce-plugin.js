(function() {
  tinymce.create('tinymce.plugins.fsc_plugin', {
    init: function(editor, url) {

      editor.addButton('fsc_button', {
        title: 'Add Character',
        image: url + '/assets/button-special.png',
        cmd: 'fsc_command'
      });

      editor.addCommand('fsc_command', function() {
        editor.windowManager.open({
          title: 'Add Character',
          file: url + '/tinymce-dialog.html',
          width: 500,
          height: 300,
          inline: 1,
          popup_css: '/tinymce-style.css'
        },
        {
          editor: editor
        });
      });
    }
  });

  tinymce.PluginManager.add('fsc_plugin', tinymce.plugins.fsc_plugin);
})();
