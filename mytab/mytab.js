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
	game.settings.register('mytab', 'anvilIcon', {
        name: 'Anvil Icon',
        hint: 'Paste an url to an icon that should replace the anvil in here',
        scope: 'world',
        config: true,
        default: '/icons/fvtt.png',
        type: String,
		onChange: updateAnvil,
    });
	game.settings.register('mytab', 'icon', {
        name: 'Favicon',
        hint: 'This will be the icon for the tab (changes on save)',
        scope: 'world',
        config: true,
        default: 'icons/svg/clockwork.svg',
        type: String,
		onChange: updateTab,
    });
	game.settings.register('mytab', 'pausescreenText', {
        name: 'Standard Pause Text',
        hint: 'This will be the text displayed during a pause',
        scope: 'world',
        config: true,
        default: 'My Text',
        type: String,
		onChange: updateTab,
    });
	game.settings.register('mytab', 'pausescreenIcon', {
        name: 'Pause Icon',
        hint: 'This will be the icon for the Pause screen, put in a link',
        scope: 'world',
        config: true,
        default: 'icons/svg/clockwork.svg',
        type: String,
		onChange: updateTab,
    });
	game.settings.register('mytab', 'pausescreenTip', {
        name: 'PST',
        hint: 'Display a tip the first time you load into the game with MyTab enabled',
        scope: 'world',
        config: false,
        default: true,
        type: Boolean,
		onChange: updateTab,
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
		onChange: updatetime,
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
    });
	game.settings.register('mytab', 'pauseBackgroundStyle', {
        name: 'Pause Background',
        hint: 'Change the background behind the rotating icon',
        scope: 'world',
        config: true,
        default: "default",
        type: String,
		choices: {
			"default": "default",
			"fullscreen": "fullscreen",
			"behindstripe": "Behind Stripe"
		},
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
Hooks.on('renderPause', function() {
	Pauserender();
});

function Pauserender (){
	console.log("MyTab | Pause Detected");
	if(game.paused){
		let pausescreen = document.getElementById("pause");
		let pscreenText = game.settings.get('mytab', 'pausescreenText');
		let pscreenIcon = game.settings.get('mytab', 'pausescreenIcon');
		let backgroundstyle = game.settings.get('mytab', 'pauseBackgroundStyle');
		let backgroundOverlayType = game.settings.get('mytab', 'pauseBackgroundClass');
		let backgroundchange ="";
		

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
	<div style="width: 100vw;height: 10px;top: 89vh;position: fixed;text-align-last: center;filter: drop-shadow(2px 4px 2px black);font-size: large;"class="pausetimer" id="countdown"></div>
	</div>
	<style>
	#pause.paused.fullscreen {
    background: #000000c7;
    height: 100%;
    top: 1px;
	z-index: 10;
	}
	#pause.paused.behindstripe {
    z-index: 10;
	}
	#pause.paused {
    z-index: 11;
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
