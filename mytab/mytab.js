Hooks.once('init', function() {

	game.settings.register('mytab', 'title', {
		name: 'Page-Title',
		hint: 'This will be shown as the tab name (changes on save)',
		scope: 'world',
		config: true,
		default: '[MyTab] My Custom Title',
		type: String,
		onChange: updateTab,
	});
    game.settings.register('mytab', 'pageastitle', {
        name: 'Active Scene as Page-Title ',
        hint: 'If you want to display the active scene in the title of the browser tab choose an option',
        scope: 'world',
        config: true,
        type: String,
		onChange: reload,
		choices: {
			"": "",
			"asTitle": "as title",
			"afterTitle": "after title"
		},
    });
    game.settings.register('mytab', 'icon', {
        name: 'Favicon',
        hint: 'This will be the icon for the tab (changes on save)',
        scope: 'world',
        config: true,
        default: 'https://giffyglyph.com/darkerdungeons/images/icons-chapters/giffyglyph.png',
        type: String,
		onChange: updateTab,
		filePicker: 'image',
    });
	game.settings.register('mytab', 'anvilIcon', {
        name: 'Anvil Icon',
        hint: 'Paste an url to an icon that should replace the anvil in here',
        scope: 'world',
        config: true,
        default: '/icons/fvtt.png',
        type: String,
		onChange: updateAnvil,
		filePicker: 'image',
    });
	game.settings.register('mytab', 'icon', {
        name: 'Favicon',
        hint: 'This will be the icon for the tab (changes on save)',
        scope: 'world',
        config: true,
        default: 'icons/svg/clockwork.svg',
        type: String,
		onChange: updateTab,
	    filePicker: 'image',
    });
	game.settings.register('mytab', 'pausescreenText', {
        name: 'Standard Pause Text',
        hint: 'This will be the text displayed during a pause',
        scope: 'world',
        config: true,
        default: 'Game Paused',
        type: String,
		onChange: reOpen
    });
	game.settings.register('mytab', 'pausescreenIcon', {
        name: 'Pause Icon',
        hint: 'This will be the icon for the Pause screen, put in a link',
        scope: 'world',
        config: true,
        default: 'icons/svg/clockwork.svg',
        type: String,
		onChange: reOpen,
		filePicker: 'image',
    });
	game.settings.register('mytab', 'pausescreenTip', {
        name: 'PST',
        hint: 'Display a tip the first time you load into the game with MyTab enabled',
        scope: 'world',
        config: false,
        default: true,
        type: Boolean,
		onChange: reOpen
    });
	game.settings.register('mytab', 'pausetime', {
        name: 'pausetime',
        hint: 'this is where the pausetime is stored.',
        scope: 'world',
        config: false,
        default: "",
        type: String,
		onChange: updatetime,
    });
	game.settings.register('mytab', 'pausetext', {
        name: 'pausetext',
        hint: 'this is where the pausetext is stored.',
        scope: 'world',
        config: false,
        default: "",
        type: String,
		onChange: reOpen
    });
	game.settings.register('mytab', 'pauseBackgroundClass', {
        name: 'Backgroundoverlay Type',
        hint: 'Adds an overlay to the canvas when the game is paused',
        scope: 'world',
        config: false,
        default: "default",
        type: String,
		choices: {
			"default": "default",
			"stripe": "stripe"
		},
		onChange: reOpen
    });
	game.settings.register('mytab', 'pauseBackgroundStyle', {
        name: 'Pause Background',
        hint: 'Change the background behind the rotating icon',
        scope: 'world',
        config: true,
        default: "default",
        type: String,
		choices: {
			"default": "Default",
			"fullscreen": "Fullscreen",
			"behindstripe": "Behind Stripe",
			"modern": "Modern"
		},
		onChange: reOpen
    });
	game.settings.register('mytab', 'pauseLocation', {
        name: 'Pause Location',
        hint: 'Pause Icon Location on the screen',
        scope: 'world',
        config: true,
        default: "default",
        type: String,
		choices: {
			"default": "Default",
			"center": "Center",
			"top": "Top",
			"bottom": "Bottom",
		},
		onChange: reOpen
    });
	game.settings.register('mytab', 'pauseScale', {
        name: 'Pause Scale',
        hint: 'Pause Icon Location on the screen',
        scope: 'world',
        config: true,
        default: "default",
        type: String,
		choices: {
			"1.0": "Default",
			"1.1": "10% Bigger",
			"1.2": "20% Bigger",
			"1.3": "30% Bigger",
			"1.4": "40% Bigger",
			"1.5": "50% Bigger",
		},
		onChange: reOpen
    });
	game.settings.register('mytab', 'pauseBackgroundImage', {
        name: 'Pause Background Image',
        hint: 'ONLY .WEBP AND .PNG SUPPORTED.  Leave empty if you dont want to use a image, this option doesnt support every style',
        scope: 'world',
        config: true,
        default: "",
        type: String,
		filePicker: 'image',
		onChange: reOpen
	});
	game.settings.register('mytab', 'pickcustomcursor', {
		name: 'Pick a Cursor',
		hint: 'Pick a custom cursor from the dropdown (option appears after reload)',
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
		filePicker: 'image',
		});
	}
    console.log("Initialised myTab");
	updateTab();
	changecursor();
	updateAnvil();
});

Hooks.on('renderApplication', function() {
	if(game.settings.get('mytab', 'pageastitle') == "asTitle"){
		document.title = game.scenes.active.data.name;
	}
	else if(game.settings.get('mytab', 'pageastitle') == "afterTitle"){
		document.title = game.settings.get("mytab", "title") + " | " + game.scenes.active.data.name;
	}
});

function updateTab(){
	document.title = game.settings.get("mytab", "title");
	var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = game.settings.get("mytab", "icon");
	document.getElementsByTagName('head')[0].appendChild(link);
	
};
function updateAnvil(){
	document.getElementById("logo").src = game.settings.get('mytab', 'anvilIcon');
	if(game.settings.get('mytab', 'anvilIcon') != "/icons/fvtt.png");
	{
		document.getElementById("logo").style = "left: 20px";
	}
};

function updatetime(){
		if(game.paused){
			let pausetime = game.settings.get('mytab', 'pausetime');
			document.getElementById("countdown").innerHTML = pausetime;
		}
		if(game.user.isGM){
			if(!game.paused && game.settings.get('mytab', 'pausetext') != ""){
				game.settings.set('mytab', 'pausetext', "");
			}
			if(!game.paused && game.settings.get('mytab', 'pausetime') != ""){
				game.settings.set('mytab', 'pausetime', "");
			}
		}
		if(game.settings.get('mytab', 'pausetime') == ""){
		let countdown = document.getElementById("countdown")
			if(countdown) {
				countdown.innerHTML = "";
			}
		}
};

function reload(){
	location.reload();
	
	if(game.settings.get('mytab', 'pageastitle') == "asTitle"){
		document.title = game.scenes.active.data.name;
	}
	else if(game.settings.get('mytab', 'pageastitle') == "afterTitle"){
		document.title = game.settings.get("mytab", "title") + " | " + game.scenes.active.data.name;
	}
}
function changecursor(){
	console.log("Change");
	let cursor = "";
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
		cursor = 'var(--mytab_cursor_custom_url)';
		var url = game.settings.get('mytab', 'customcursorurl');
		document.documentElement.style.setProperty('--mytab_cursor_custom_url', "url("+url+")");
	}
	else if(game.settings.get('mytab', 'pickcustomcursor') != "custom" && game.settings.get('mytab', 'pickcustomcursor') != ""){
		let name = game.settings.get('mytab', 'pickcustomcursor');
		
		switch(name){
			case "greenglass": $('body').css('cursor', 'var(--mytab_cursor_glowing), default'); cursor = 'var(--mytab_cursor_glowing)';break;
			case "brawl": $('body').css('cursor', 'var(--mytab_cursor_brawl), default'); cursor = 'var(--mytab_cursor_brawl)'; break;
			case "infinity": $('body').css('cursor', 'var(--mytab_cursor_infinity), default'); cursor = 'var(--mytab_cursor_infinity)'; break;
			case "pixel-sword": $('body').css('cursor', 'var(--mytab_cursor_pixel-sword), default'); cursor = 'var(--mytab_cursor_pixel-sword)'; break;
			case "poly_red": $('body').css('cursor', 'var(--mytab_cursor_poly_red), default'); cursor = 'var(--mytab_cursor_poly_red)'; break;
			case "poly_blue": $('body').css('cursor', 'var(--mytab_cursor_poly_blue), default'); cursor = 'var(--mytab_cursor_poly_blue)'; break;
			case "poly_green": $('body').css('cursor', 'var(--mytab_cursor_poly_green), default'); cursor = 'var(--mytab_cursor_poly_green)'; break;
			case "stone": $('body').css('cursor', 'var(--mytab_cursor_stone-age), default'); cursor = 'var(--mytab_cursor_stone-age)'; break;
			case "oxychrome": $('body').css('cursor', 'var(--mytab_cursor_oxychrome), default'); cursor = 'var(--mytab_cursor_oxychrome)'; break;
			case "oxybrown": $('body').css('cursor', 'var(--mytab_cursor_oxybrown), default'); cursor = 'var(--mytab_cursor_oxybrown)'; break;
			case "oxyblack": $('body').css('cursor', 'var(--mytab_cursor_oxyblack), default'); cursor = 'var(--mytab_cursor_oxyblack)'; break;
			case "runescape": $('body').css('cursor', 'var(--mytab_cursor_runescape), default'); cursor = 'var(--mytab_cursor_runescape)'; break;
			case "wow": $('body').css('cursor', 'var(--mytab_cursor_wow), default'); cursor = 'var(--mytab_cursor_wow)'; break;
			case "chrome": $('body').css('cursor', 'var(--mytab_cursor_chrome), default'); cursor = 'var(--mytab_cursor_chrome)'; break;
			case "blue-glow": $('body').css('cursor', 'var(--mytab_cursor_blue-glow), default'); cursor = 'var(--mytab_cursor_blue-glow)'; break;
			case "zombie": $('body').css('cursor', 'var(--mytab_cursor_zombie), default'); cursor = 'var(--mytab_cursor_zombie)'; break;
			case "leg": $('body').css('cursor', 'var(--mytab_cursor_leg), default'); cursor = 'var(--mytab_cursor_leg)'; break;
			case "skyrim": $('body').css('cursor', 'var(--mytab_cursor_skyrim), default'); cursor = 'var(--mytab_cursor_skyrim)'; break;
			case "wii": $('body').css('cursor', 'var(--mytab_cursor_wii), default'); cursor = 'var(--mytab_cursor_wii)'; break;
			case "black": $('body').css('cursor', 'var(--mytab_cursor_black), default'); cursor = 'var(--mytab_cursor_black)'; break;
			case "green": $('body').css('cursor', 'var(--mytab_cursor_green), default'); cursor = 'var(--mytab_cursor_green)'; break;
			case "orange": $('body').css('cursor', 'var(--mytab_cursor_orange), default'); cursor = 'var(--mytab_cursor_orange)'; break;
			case "purple": $('body').css('cursor', 'var(--mytab_cursor_purple), default'); cursor = 'var(--mytab_cursor_purple)'; break;
			case "red": $('body').css('cursor', 'var(--mytab_cursor_red), default'); cursor = 'var(--mytab_cursor_red)'; break;
			case "white": $('body').css('cursor', 'var(--mytab_cursor_white), default'); cursor = 'var(--mytab_cursor_white)'; break;
			case "yellow": $('body').css('cursor', 'var(--mytab_cursor_yellow), pointer'); cursor = 'var(--mytab_cursor_yellow)'; break;
			case "": $('body').css('cursor', 'var(--mytab_cursor_), default'); cursor = 'var(--mytab_cursor_)'; break;
			

		}
		console.log("Cursor is this: "+name);
	}
	var css = '.rollable{cursor: var(--mytab_cursor_) !important} .input[type="checkbox" i]{cursor: var(--mytab_cursor_yellow), default !important;} .Label{cursor: var(--mytab_cursor_yellow), default !important;}',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	head.appendChild(style);

	style.type = 'text/css';
	if (style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		style.appendChild(document.createTextNode(css));
	}
	
};
Hooks.on('renderPause', function() {
	Pauserender();
});
function reOpen(){
	Pauserender();
	game.settings.sheet.render(true);
}

function Pauserender (){
	console.log("MyTab | Pause Detected");
	if(game.paused){
		let pausescreen = document.getElementById("pause");
		let pscreenText = game.settings.get('mytab', 'pausescreenText');
		let pscreenIcon = game.settings.get('mytab', 'pausescreenIcon');
		let backgroundstyle = game.settings.get('mytab', 'pauseBackgroundStyle');
		let backgroundOverlayType = game.settings.get('mytab', 'pauseBackgroundClass');
		let backgroundchange ="";
		let customstyle = "";
		let pauseBackgroundImage = game.settings.get('mytab', 'pauseBackgroundImage');
		let pauseScale = game.settings.get('mytab', 'pauseScale');
		let pauseLocation = game.settings.get('mytab', 'pauseLocation');
		let locationsStyle =  "";
		
		if(pauseLocation != "default!"){
			if(pauseLocation == "center")
			locationsStyle = "top: calc(50% - 50px)";
			else if(pauseLocation == "top")
			locationsStyle = "top: 20%";
		    else if(pauseLocation == "bottom")
			locationsStyle = "bottom: 20%";
		}
		
		
		if(pauseBackgroundImage !=""){
			customstyle = "background-image: url("+pauseBackgroundImage+");background-size: cover;background-position: center;";
		}
		if(pauseBackgroundImage !=""){
			customstyle = "background-image: url("+pauseBackgroundImage+");background-size: cover;background-position: center;";
		}

		if(backgroundOverlayType == "stripe"){
			backgroundchange = "cover";
		}
		else{
			backgroundchange = "inherit";
		}
		if(game.settings.get('mytab', 'pausetext') != ""){
			pscreenText = game.settings.get('mytab', 'pausetext');
		}
		
		let custompause = `<div id="pause" class="paused">
			<div id="pausescreenIconDIV"><img id="pscreenIcon" style="z-index: 15;" src="${pscreenIcon}"></div>
	<div style="width: 100vw;height: 10px;top: 89vh;">
	<h3 id="pauseScreenText">${pscreenText}</h3></div>
	<div style="width: 100vw;height: 10px;bottom: 20px;z-index: 15;position: absolute;text-align-last: center;filter: drop-shadow(2px 4px 2px black);font-size: large;"class="pausetimer" id="countdown"></div>
	</div>
	<style>
	#pause.paused{transform: scale(`+pauseScale+`);`+ locationsStyle +`}
	#pause.paused.fullscreen {
    background: #000000c7;
    height: 100%;
    top: 1px;
	z-index: 10;
	`+customstyle+`
	}
	#pause.paused.behindstripe {
		-webkit-mask-image: linear-gradient(#ffffff00, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff00);
		-webkit-mask-size: 100% 100%;
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: left top, left bottom;
		z-index: 10;
		height: 200px;
		background: #00000082;
		`+customstyle+`
	}
	#pause.paused {
    z-index: 11;
	}
	#pause.paused.behindstripe #pause.paused {
    background-image: none;
	}	
	#pause.paused.fullscreen #pause.paused {
    background-image: none;
	}
	#pause.paused.modern #pause.paused {
    background-image: none;
	}
	#pause.paused.modern {
    z-index: 10;
    background: #000000a3;
    width: 200px;
    height: 150px;
    left: calc(50% - 100px);
    bottom: 8% !important;
    border-radius: 19px;
	}
	#pause.modern #pauseScreenText {
    width: 200px;
	}
	#pause h3 {
		margin: 0;
		font-size: 2em;
		width: 46%;
		font-weight: normal;
		line-height: 100px;
		text-align: center;
		bottom: 10% !important;
		z-index: 61;
		color: #EEE;
		filter: sepia(1);
		text-shadow: none;
		bottom: 10% !important;
		width: 100vw;
		left: 0;
	}
	#pause img {
		position: absolute;
		bottom: -15% !important;
		height: 128px;
		border: none;
		top: unset;
	}		
	#pause {
    color: white;
	}
	</style>`;
		pausescreen.innerHTML = custompause;
		document.getElementById("pause").classList.add(backgroundstyle);
	}
	updatetime();
}
	
class Ptimer {
    static addChatControl() {
        const chatControlLeft = document.getElementsByClassName("chat-control-icon")[0];
        let tableNode = document.getElementById("mytab-pause-button");

        if (chatControlLeft && !tableNode) {
            const chatControlLeftNode = chatControlLeft.firstElementChild;
            const number = 4;
            tableNode = document.createElement("label");
            tableNode.innerHTML = `<i id="Pause-button" class="fas fa-stopwatch mytab-pause-button" style="text-shadow: 0 0 1px black;"></i>`;
            tableNode.onclick = Ptimer.initializePausecontrol;
            chatControlLeft.insertBefore(tableNode, chatControlLeftNode);
        }
    }
    static initializePausecontrol() {
        if (this.pt === undefined) {
            this.pt = new PT();
        }
        this.pt.openDialog();
    }
}

class PT extends Application {
    constructor(options = {}) {
        super(options);
    }
    openDialog() {
        //LOAD TEMPLATE DATA
        let $dialog = $('.PT-window');
        if ($dialog.length > 0) {
            $dialog.remove();
            return;
        }
        const templateData = {
            data: []
        };
        templateData.title = "MyTab - Pause Control";
		
        const templatePath = "modules/mytab/pauseScreen.html";
        PT.renderMenu(templatePath, templateData);
    }
    static renderMenu(path, data) {
        const dialogOptions = {
            width: 350,
            top: 300,
            left: 700,
            classes: ['Pause-window resizable'],
            id: ['pauseTimer']
        };
		dialogOptions.resizable = true;
        renderTemplate(path, data).then(dlg => {
            new Dialog({
                title: game.i18n.localize('MyTab - Pause Timer Menu'),
                content: dlg,
                buttons: {}
            }, dialogOptions).render(true);
        });
    }
}
Hooks.on('canvasReady', function() {
    if (game.user.isGM && document.getElementById("Pause-button") == null) {
        Ptimer.addChatControl();
        console.log("MyTab | PauseTimer GM True");
    }
	Pauserender();
});