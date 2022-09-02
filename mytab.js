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
		default: 'after title',
		onChange: reload,
		choices: {
			"no": "no",
			"asTitle": "as title",
			"afterTitle": "after title"
		},
    });
    game.settings.register('mytab', 'icon', {
        name: 'Favicon',
        hint: 'This will be the icon for the tab (This will only be displayed in a browser)',
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
	game.settings.register('mytab', 'displayPauseIcon', {
		name: 'Display Button OpenPauseMenu',
		hint: 'Enable this to add the button to the chatbar',
		scope: 'world',
		config: true,
		default: true,
		type: Boolean,
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
	game.settings.register('mytab', 'pauseTextAnim', {
        name: 'Pause Text Animation',
        hint: 'select an animation for the pause text',
        scope: 'world',
        config: true,
        default: "none",
        type: String,
		choices: {
			"none": "none",
			"wave": "wave",
			"letterWave": "letter-wave",
			"shake": "shake",
			"fadein": "fade-in(once)",
			"flip": "flip",
			"flipVertical": "flip-vertical",
			"flipAllVertical": "flip-all-vertical",
			"upsize": "upsize",
			"slideUp": "slide-up(once)",
		},
		onChange: reOpen
    });
	game.settings.register('mytab', 'pauseSFX', {
		name: 'Pause almost over SFX',
		hint: 'This will be played 5 times for the last 5 seconds of the timer, choose somethings small or leave it empty.',
		scope: 'world',
		config: true,
		default: 'sounds/notify.wav',
		type: String,
		filePicker: 'sound',
	});
	game.settings.register('mytab', 'lastPauseScreenText', {
        name: 'Last Pause Screen Text',
        hint: 'This will be loaded in the pause timer menu',
        scope: 'world',
        config: false,
        default: '',
        type: String,
	});
	game.settings.register('mytab', 'lastPauseScreenTime', {
        name: 'Last Pause Screen Time',
        hint: 'This will be loaded in the pause timer menu',
        scope: 'world',
        config: false,
        default: '',
        type: String,
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
	game.settings.register('mytab', 'timePresets', {
        name: 'Time Presets',
        hint: 'each preset will be loaded as a button within the pause timer menu, seperate them with a comma',
        scope: 'world',
        config: true,
		default: '300,600,900',
        type: String,
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
	game.settings.register('mytab', 'i_pausetime', {
        name: 'pausetime',
        hint: 'this is where the pausetime is stored as a second value.',
        scope: 'world',
        config: false,
        default: "0,5,0",
        type: String,
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
        name: 'Pause Theme',
        hint: 'Change the background behind the rotating icon',
        scope: 'world',
        config: true,
        default: "Fullscreen",
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
        default: "Center",
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
        default: "1.2",
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
	game.settings.register('mytab', 'pauseIconAnimation', {
        name: 'Pause Icon Animation',
        hint: 'Pause Icon Location on the screen',
        scope: 'world',
        config: true,
		default: "-webkit-animation-name: frontspin",
        type: String,
		choices: {
			"-webkit-animation-name: none": "No Animation",
			"-webkit-animation-name: frontspin": "Rotation-Right",
			"-webkit-animation-name: backspin;": "Rotation-Left",
			"-webkit-animation-name: breathing;": "Breathing",
			"-webkit-animation-name: scaling;": "Scaling",
			"-webkit-animation-name: heartbeat;": "Heartbeat",
			"-webkit-animation-name: clock;": "Clock",
			"-webkit-animation-name: platform;": "Platform",
			"-webkit-animation-name: fade;": "Fade",
			"-webkit-animation-name: faderotation;": "Fade-Rotation",
		},
		onChange: reOpen
	});
	game.settings.register('mytab', 'pauseIconAnimationSpeed', {
        name: 'Pause Icon Animation Speed',
        hint: 'Speed of the animation',
        scope: 'world',
        config: true,
		default: "-webkit-animation-duration: 4s;",
        type: String,
		choices: {
			"-webkit-animation-duration: 0.5s;": "Very Fast",
			"-webkit-animation-duration: 1s;": "Fast",
			"-webkit-animation-duration: 2s;": "Normal",
			"-webkit-animation-duration: 4s;": "Slow",
			"-webkit-animation-duration: 8s;": "Very Slow",
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
		onChange: changeCursorSettings
	});
	game.settings.register('mytab', 's_pText', {
        name: 's_pText',
        hint: 's_pText',
        scope: 'world',
        config: false,
        default: "MyTab",
        type: String,
    });
	if (game.modules.get('ready-check')?.active === true) {
		game.settings.register('mytab', 'ready-check-integration', {
			name: 'Module - "Ready Check" Integration',
			hint: 'Pushes a ready check when the countdown hits 0',
			scope: 'world',
			config: true,
			default: true,
			type: Boolean,
		});
	}
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
		document.title = game.settings.get("mytab", "title") + " | " + game.scenes.active.name;
	}
});

function changeCursorSettings() {
	reOpen();
	changecursor();
}

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
			
			if(!game.user.isGM && game.settings.get('mytab', 's_pText').length != $(".PauseTextContainer")[0].children.length && game.settings.get('mytab', 'lastPauseScreenText').length != $(".PauseTextContainer")[0].children.length){
				Pauserender();
			}
		}
		if(game.user.isGM){
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

async function reOpen() {
	await Pauserender();
	if(!game.user.isGM) return;
	await game.togglePause(true, true);
	await new Promise(r => setTimeout(r, 250));
	if (!game.settings.sheet.rendered && game.user.isGM)
	await game.settings.sheet.render(true);
}
async function Pauserender (){
	if(!game.ready) return;
	console.log("MyTab | Pause Change Detected");
		let pausescreen = document.getElementById("pause");
		let pscreenText = "";
		if (game.settings.get('mytab', 'i_pausetime') > 0 && game.paused)
			if(game.settings.get('mytab', 's_pText') != "")
				pscreenText = game.settings.get('mytab', 's_pText');
			else
				pscreenText = game.settings.get('mytab', 'lastPauseScreenText');	
		else {
			pscreenText = game.settings.get('mytab', 'pausescreenText');
        }
		let pscreenTSS = game.settings.get('mytab', 'pauseTextAnim');
		let pscreenStyle = "none";
		let pscreenDelay = "none";
		
		switch(pscreenTSS){
			case "wave": 
				pscreenStyle = "wavy 1s infinite"; 
				pscreenDelay="calc(.02s * var(--i))";
				break;
			case "letterWave": 
				pscreenStyle = "wavy 1s infinite"; 
				pscreenDelay="calc(.1s * var(--i))";
				break;
			case "shake": 
				pscreenStyle = "shake 3s infinite"; 
				pscreenDelay="calc(.1s * var(--i))";
				break;
			case "flip": 
				pscreenStyle = "flip 2s infinite"; 
				pscreenDelay="calc(.1s * var(--i))";
				break;
			case "flipVertical": 
				pscreenStyle = "flipX 2s infinite"; 
				pscreenDelay="calc(.1s * var(--i))";
				break;
			case "flipAllVertical": 
				pscreenStyle = "flipX 2s infinite"; 
				break;
			case "upsize": 
				pscreenStyle = "upsize 5s infinite"; 
				pscreenDelay="calc(.1s * var(--i))";
				break;	
			case "slideUp": 
				pscreenStyle = "slide-up 0.9s cubic-bezier(0.65, 0, 0.35, 1) both"; 
				pscreenDelay="calc(.1s * var(--i))";
				break;
			case "fadein": 
				pscreenStyle = "FadeIn 2s"; 
				break;
		}
		
		let pscreenIcon = game.settings.get('mytab', 'pausescreenIcon');
		let backgroundstyle = game.settings.get('mytab', 'pauseBackgroundStyle');
		let backgroundOverlayType = game.settings.get('mytab', 'pauseBackgroundClass');
		let backgroundchange ="";
		let customstyle = "";
		let pauseBackgroundImage = game.settings.get('mytab', 'pauseBackgroundImage');
		let pauseScale = game.settings.get('mytab', 'pauseScale');
		let pauseLocation = game.settings.get('mytab', 'pauseLocation');
		let locationsStyle = "";
		let modernPause = "";
		if (pauseBackgroundImage != "")
			modernPause = "url(" + pauseBackgroundImage + ");";

		let animationstyle = game.settings.get('mytab', 'pauseIconAnimation');
		let animationspeed = game.settings.get('mytab', 'pauseIconAnimationSpeed');
		
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
    background-image: `+modernPause+`;
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
		border: unset;
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
	img#pscreenIcon {
		`+ animationstyle +`;
		`+ animationspeed +`;
		animation-iteration-count: infinite;
	}
	h3#pauseScreenText {
    flex: 0;
	animation: `+ pscreenStyle +`;
	animation-delay: `+ pscreenDelay +`;
	}
	</style>`;
		pausescreen.innerHTML = custompause;
		document.getElementById("pause").classList.add(backgroundstyle);
	
	$('div#pause')[0].getElementsByTagName('div')[1].classList.add("PauseTextContainer")
	
	
	document.getElementsByClassName("PauseTextContainer")[0].innerHTML = '';

	for (var i = 0; i < pscreenText.length; i++) {
		let textI = document.createElement("h3");
		textI.id = "pauseScreenText";
		textI.innerHTML = pscreenText[i];
		if(pscreenText[i] == " "){
			textI.style="margin: 3px;"
			}
		else{
			textI.style="--i:"+[i];
		}
		document.getElementsByClassName("PauseTextContainer")[0].append(textI);
		//document.getElementsByClassName("PauseTextContainer")[0].innerHTML += pscreenText[i];
	}
	if(!game.user.isGM && game.settings.get('mytab', 'i_pausetime') > 0){
		game.togglePause(true,false);
	}
}
	
class Ptimer {
	static addChatControl() {
		if (!game.settings.get('mytab', 'displayPauseIcon')) return;
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
			standardText: [game.settings.get('mytab', 'lastPauseScreenText')],
			standardHours: game.settings.get('mytab', 'lastPauseScreenTime').split(',')[0],
			standardMin: game.settings.get('mytab', 'lastPauseScreenTime').split(',')[1],
			standardSec: game.settings.get('mytab', 'lastPauseScreenTime').split(',')[2]
        };
        templateData.title = "MyTab - Pause Control";
		console.log("TESTDATA");
        const templatePath = "modules/mytab/pauseScreen.html";
        PT.renderMenu(templatePath, templateData);
    }
    static renderMenu(path, data) {
        const dialogOptions = {
            width: 450,
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
	CONFIG.debug.hooks = true

    if (game.user.isGM && document.getElementById("Pause-button") == null) {
        Ptimer.addChatControl();
        console.log("MyTab | PauseTimer GM True");
    }
});

Hooks.on('renderSettings', function() {
	if(game.user.isGM)
	checkforResumePause();
});
var checkedforResume = false;
Hooks.on('renderPause', function() {
	if(globalThis.checkedforResume == false){
		checkforResumePause();
		globalThis.checkedforResume = true;
	}
	Pauserender();
});

async function checkforResumePause() {
	await Pauserender()
	var checkedforResume2 = false
	let playingsonglistindex;
	let pauseText = game.settings.get('mytab', 's_pText');

	if (pauseText == "") {
		if (game.settings.get('mytab', 'i_pausetime') > 0)
			pauseText = game.settings.get('mytab', 'lastPauseScreenText');
		else {
			pauseText = game.settings.get('mytab', 'pausescreenText');
		}
	}
	console.log("MyTab | Checking for Pause");

	var timeleft = game.settings.get('mytab', 'i_pausetime');
	if (timeleft == 0 || timeleft == null) return
	else {
		console.log("MyTab | Found ongoing pause, resuming...");
    }

	let hourText, minText, secText;
	let hourVal, minVal, secVal;
	
	let pscreenText = game.settings.get('mytab', 's_pText');
	for (var i = 0; i < pscreenText.length; i++) {
		let textI = document.createElement("h3");
		textI.id = "pauseScreenText";
		textI.innerHTML = pscreenText[i];
		if(pscreenText[i] == " "){
			textI.style="margin: 3px;"
		}
		else{
			textI.style="--i:"+[i];
		}
		document.getElementsByClassName("PauseTextContainer")[0].append(textI);
		//document.getElementsByClassName("PauseTextContainer")[0].innerHTML += pscreenText[i];
	}
	var pauseTimer = setInterval(async function () {
		if (!game.paused) {
			if(checkedforResume2 == false){
				checkedforResume2 = true;
				await game.togglePause(true,true)
				return;
			}
			console.log("MyTab | Game is no longer paused");
			if (game.user.isGM) ui.notifications.notify("MyTab | Pause timer stopped");
			timeleft = 0;
			if (playingsonglistindex != undefined) {
				let playlistsong = playingsonglistindex - 1;
				game.playlists.find(track => track.data.name === game.playlists._source[playlistsong].name).stopAll()
				playingsonglistindex == null;
			}
			game.settings.set('mytab', 's_pText', "");
			clearInterval(pauseTimer);
		}
		if (timeleft <= 0) {
			game.settings.set('mytab', 'i_pausetime', 0);
			if (document.getElementById("countdown") == null) return;
			document.getElementById("countdown").innerHTML != ""
			clearInterval(pauseTimer);
			game.settings.set('mytab', 's_pText', "");
			if (playingsonglistindex != undefined) {
				let playlistsong = playingsonglistindex - 1;
				game.playlists.find(track => track.data.name === game.playlists._source[playlistsong].name).stopAll()
				playingsonglistindex == null;
			}
			if (game.modules.get('ready-check')?.active === true && game.settings.get('mytab', 'ready-check-integration')) {
				$(".crash-ready-check-sidebar").click()
			}
			return;
		}
		else {
			if (timeleft >= 3600) {//check for Hours
				hourText = "" + Math.floor(timeleft / 3600) + "h | ";
			}
			else {
				hourText = ""
			}
			if (timeleft >= 60) {//check for Minutes
				var minutes = timeleft - (3600 * (Math.floor(timeleft / 3600)));
				var minutes = Math.floor(minutes / 60);
				minText = "" + minutes + "m | ";
			}
			else {
				minText = ""
			}
			if (timeleft <= 5) {
				AudioHelper.play({ src: game.settings.get('mytab', 'pauseSFX'), volume: 1, autoplay: true, loop: false }, true);
			}
			if (timeleft >= 1) {//check for seconds
				var seconds = timeleft - (3600 * (Math.floor(timeleft / 3600)));
				var seconds = timeleft - (60 * (Math.floor(timeleft / 60)));

				secText = "" + seconds + " s";
			}
			let pausetime = "" + hourText + minText + secText;
			game.settings.set('mytab', 'pausetime', pausetime) 
		}
		timeleft -= 1;
		console.log("MyTab | Pause time left: " + timeleft + "s");
		game.settings.set('mytab', 'i_pausetime', timeleft);
	}, 1000);

}