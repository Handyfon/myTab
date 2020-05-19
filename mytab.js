Hooks.once('init', function() {

    game.settings.register('mytab', 'title', {
        name: 'Page-Title',
        hint: 'This will be shown as the tab name',
        scope: 'world',
        config: true,
        default: 'My Title',
        type: String,
    });
    game.settings.register('mytab', 'icon', {
        name: 'Favicon',
        hint: 'this will be the icon for the tab',
        scope: 'world',
        config: true,
        default: 'https://codepad.co/img/icn_logo.png',
        type: String,
    });
    console.log("Initialised myTab");
	document.title = game.settings.get("mytab", "title");
	function changeicon() {
		var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = game.settings.get("mytab", "icon");
		document.getElementsByTagName('head')[0].appendChild(link);
	};
	changeicon();
});

