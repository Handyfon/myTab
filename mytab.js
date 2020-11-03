Hooks.once('init', function() {

    game.settings.register('mytab', 'title', {
        name: 'Page-Title',
        hint: 'This will be shown as the tab name (changes on save)',
        scope: 'world',
        config: true,
        default: 'My Title',
        type: String,
		onChange: updateTab,
    });
    game.settings.register('mytab', 'icon', {
        name: 'Favicon',
        hint: 'This will be the icon for the tab (changes on save)',
        scope: 'world',
        config: true,
        default: 'https://giffyglyph.com/darkerdungeons/images/icons-chapters/giffyglyph.png',
        type: String,
		onChange: updateTab,
    });
	game.settings.register('mytab', 'pickcustomcursor', {
		name: 'Pick a Cursor',
		hint: 'Pick a custom cursor from the dropdown',
		scope: 'world',
		config: true,
		default: false,
		type: String,
		choices: {
			"0": "",
			"custom": "custom..",
			"black": "black",
			"blue-glow": "blue-glow",
			"brawl": "brawl",
			"chrome": "chrome",
			"green": "green",
			"greenglass": "greenglass",
			"infinity": "infinity",
			"leg": "leg",
			"orange": "orange",
			"oxyblack": "oxyblack",
			"oxyblue": "oxyblue",
			"oxybrown": "oxybrown",
			"oxychrome": "oxychrome",
			"pixel-sword": "pixel-sword",
			"poly_blue": "poly_blue",
			"poly_green": "poly_green",
			"poly_red": "poly_red",
			"purple": "purple",
			"red": "red",
			"runescape": "runescape",
			"skyrim": "skyrim",
			"stone": "stone",
			"white": "white",
			"wii": "wii",
			"wow": "wow",
			"yellow": "yellow",
			"zombie": "zombie"
		},
		onChange:changecursor
	});
	if(game.settings.get('mytab', 'pickcustomcursor') == "custom"){
		game.settings.register('mytab', 'customcursorurl', {
        name: 'Custom Cursor URL',
        hint: 'Put in the url that points to a .png or .cur file. Maximum size is 256x256px, recommended is 32x32px',
        scope: 'world',
        config: true,
        default: "https://pngriver.com/wp-content/uploads/2017/12/download-mouse-Cursor-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-Cursor-Arrow-PNG-File.png",
        type: String,
		});
	}

    console.log("Initialised myTab");
	updateTab();
	changecursor();
	
	
});
function updateTab(){
	document.title = game.settings.get("mytab", "title");
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = game.settings.get("mytab", "icon");
	document.getElementsByTagName('head')[0].appendChild(link);
	
};

function changecursor(){
	console.log("Change");
	if(game.settings.get('mytab', 'pickcustomcursor') == "custom"){
		game.settings.register('mytab', 'customcursorurl', {
			name: 'Custom Cursor URL',
			hint: 'Put in the url pointing to your cursor.',
			scope: 'world',
			config: true,
			default: "https://pngriver.com/wp-content/uploads/2017/12/download-mouse-Cursor-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-Cursor-Arrow-PNG-File.png",
			type: String,
		});
		$('body').css('cursor', 'var(--mytab_cursor_custom_url), default'); 
		var url = game.settings.get('mytab', 'customcursorurl');
		document.documentElement.style.setProperty('--mytab_cursor_custom_url', "url("+url+")");
	}
	else if(game.settings.get('mytab', 'pickcustomcursor') != "custom" && game.settings.get('mytab', 'pickcustomcursor') != ""){
		let name = game.settings.get('mytab', 'pickcustomcursor');
		
		switch(name){
			case "greenglass": $('body').css('cursor', 'var(--mytab_cursor_glowing), default'); break;
			case "brawl": $('body').css('cursor', 'var(--mytab_cursor_brawl), default'); break;
			case "infinity": $('body').css('cursor', 'var(--mytab_cursor_infinity), default'); break;
			case "pixel-sword": $('body').css('cursor', 'var(--mytab_cursor_pixel-sword), default'); break;
			case "poly_red": $('body').css('cursor', 'var(--mytab_cursor_poly_red), default'); break;
			case "poly_blue": $('body').css('cursor', 'var(--mytab_cursor_poly_blue), default'); break;
			case "poly_green": $('body').css('cursor', 'var(--mytab_cursor_poly_green), default'); break;
			case "stone": $('body').css('cursor', 'var(--mytab_cursor_stone-age), pointer'); break;
			case "oxychrome": $('body').css('cursor', 'var(--mytab_cursor_oxychrome), pointer'); break;
			case "oxybrown": $('body').css('cursor', 'var(--mytab_cursor_oxybrown), pointer'); break;
			case "oxyblack": $('body').css('cursor', 'var(--mytab_cursor_oxyblack), pointer'); break;
			case "runescape": $('body').css('cursor', 'var(--mytab_cursor_runescape), pointer'); break;
			case "wow": $('body').css('cursor', 'var(--mytab_cursor_wow), pointer'); break;
			case "chrome": $('body').css('cursor', 'var(--mytab_cursor_chrome), pointer'); break;
			case "blue-glow": $('body').css('cursor', 'var(--mytab_cursor_blue-glow), pointer'); break;
			case "zombie": $('body').css('cursor', 'var(--mytab_cursor_zombie), pointer'); break;
			case "leg": $('body').css('cursor', 'var(--mytab_cursor_leg), pointer'); break;
			case "skyrim": $('body').css('cursor', 'var(--mytab_cursor_skyrim), pointer'); break;
			case "wii": $('body').css('cursor', 'var(--mytab_cursor_wii), pointer'); break;
			case "black": $('body').css('cursor', 'var(--mytab_cursor_black), pointer'); break;
			case "green": $('body').css('cursor', 'var(--mytab_cursor_green), pointer'); break;
			case "orange": $('body').css('cursor', 'var(--mytab_cursor_orange), pointer'); break;
			case "purple": $('body').css('cursor', 'var(--mytab_cursor_purple), pointer'); break;
			case "red": $('body').css('cursor', 'var(--mytab_cursor_red), pointer'); break;
			case "white": $('body').css('cursor', 'var(--mytab_cursor_white), pointer'); break;
			case "yellow": $('body').css('cursor', 'var(--mytab_cursor_yellow), pointer'); break;
			case "": $('body').css('cursor', 'var(--mytab_cursor_), pointer'); break;
			

		}
		console.log("Cursor is this: "+name);
	}
	
};
