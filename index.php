<?php
// Redirect from old domain to new domain
if ($_SERVER['HTTP_HOST'] === 'stream-deck-button-designer.addy.codes') {
	header('Location: https://button-designer.addy.codes' . $_SERVER['REQUEST_URI'], true, 301);
	exit;
}
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<title>Button Designer/Key Maker — Stream Deck-compatible (unofficial)</title>

	<meta name="author" content="Addy Codes">
	<meta name="description" content="Unofficial, community-made button/icon designer for Stream Deck-compatible keys. Create custom icons with Material Symbols, emojis, or your own images.">

	<meta property="og:title" content="Button Designer/Key Maker — Stream Deck-compatible (unofficial)">
	<meta property="og:description" content="Unofficial, community-made button/icon designer for Stream Deck-compatible keys. Create custom icons with Material Symbols, emojis, or your own images.">
	<meta property="og:image" content="/card.png">
	<meta property="og:site_name" content="Addy Codes">
	
	<meta name="twitter:title" content="Button Designer/Key Maker — Stream Deck-compatible (unofficial)">
	<meta name="twitter:description" content="Unofficial, community-made button/icon designer for Stream Deck-compatible keys. Create custom icons with Material Symbols, emojis, or your own images.">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image:alt" content="Button Designer/Key Creator — Stream Deck-compatible (unofficial)">
	<meta name="twitter:site" content="@addy_codes">
	<meta name="twitter:creator" content="@addy_codes">
	<meta name="twitter:image" content="https://button-designer.addy.codes/card.png">

	<!-- PWA -->
	<link rel="manifest" href="/manifest.json">
	<meta name="theme-color" content="#894bb8">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta name="apple-mobile-web-app-title" content="Button Designer">
	<link rel="apple-touch-icon" href="/button.png">

	<link href="css/style.css?v=<?= filemtime(__DIR__ . '/css/style.css') ?>" rel="stylesheet">
	
	<link rel="stylesheet" href="css/vendor/choices.min.css">
	<script src="js/vendor/choices.min.js"></script>
	
	<!-- Material Symbols -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" crossorigin="anonymous" />
	
	<!-- Google Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Bebas+Neue&family=Lobster&family=Montserrat:wght@400;700&family=Pacifico&family=Permanent+Marker&family=Righteous&family=Roboto:wght@400;700&family=Sue+Ellen+Francisco&family=VT323&family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&family=Playfair+Display:wght@400;700&family=Raleway:wght@400;600;700&family=Source+Code+Pro:wght@400;600&family=Nunito:wght@400;600;700&family=Quicksand:wght@400;500;600;700&family=Comfortaa:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Orbitron:wght@400;600;700&family=Press+Start+2P&family=Rubik:wght@400;500;600;700&family=Lato:wght@400;700&family=Open+Sans:wght@400;600;700&family=Fira+Code:wght@400;600&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet" crossorigin="anonymous">
	
	<!-- GIF parsing and export -->
	<script src="/js/omggif.js"></script>
	<script src="/js/vendor/gif.min.js"></script>
	
	<!-- Matomo -->
    <script>
        var _paq = _paq || [];
        _paq.push(["trackPageView"]), _paq.push(["enableLinkTracking"]),
        function() {
            _paq.push(["setTrackerUrl", "//reporting.adgr.dev/zefstyg.php"]);
            _paq.push(["setSiteId", "19"]);
            _paq.push(['disableAlwaysUseSendBeacon', 'true']);
            var a = document, r = a.createElement("script"), s = a.getElementsByTagName("script")[0];
            r.async = !0, r.defer = !0, r.src = "//reporting.adgr.dev/pywhvsr.php", s.parentNode.insertBefore(r, s)
        }();
    </script>
    <noscript><img src="//reporting.adgr.dev/zefstyg.php?vbf=19&nmi=1" /></noscript>
	<!-- End Matomo Code -->
</head>
<body>
	<header>
		<div class="wrapper">
			<h1><strong>Key/Button Designer</strong> — Stream Deck-compatible (unofficial)</h1>
			<nav>
				<a href="https://addy.codes/" title="Addy Codes homepage"><span class="material-symbols-outlined">home</span></a>
				<a href="https://toolkit.addy.codes/" title="Addy Codes toolkit"><span class="material-symbols-outlined">handyman</span></a>
				<a href="https://twitter.com/addy_codes" title="Addy Codes on X"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
				<a href="https://twitch.tv/addycodes" title="Addy Codes on Twitch"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg></a>
				<a href="https://github.com/adamgreenough/button-designer" title="Button Designer on GitHub"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
			</nav>
		</div>
	</header>
	
	<div id="announcementBanner" class="announcement-banner">
		<div class="banner-content">
<span class="banner-text"><strong>🆕 Feb 2026:</strong> Templates &amp; Presets with shareable links <span class="sep">|</span> Animated GIF backgrounds <span class="sep">|</span> 650+ Material icons <span class="sep">|</span> Text effects <span class="sep">|</span> HD export 🎉</span>
			<span class="banner-text"><strong>🆕 Feb 2026:</strong> Templates &amp; Presets with shareable links <span class="sep">|</span> Animated GIF backgrounds <span class="sep">|</span> 650+ Material icons <span class="sep">|</span> Text effects <span class="sep">|</span> HD export 🎉</span>
		</div>
		<button class="banner-dismiss" onclick="dismissBanner()" title="Dismiss"><span class="material-symbols-outlined">close</span></button>
	</div>

	<!-- PWA Install Prompt -->
	<div id="pwaInstallPrompt" class="pwa-install-prompt hidden">
		<div class="pwa-install-content">
			<img src="/button.png" alt="Button Designer" class="pwa-icon">
			<div class="pwa-text">
				<strong>Install Button Designer</strong>
				<span>Add to your home screen for quick access and app-like experience</span>
			</div>
		</div>
		<div class="pwa-actions">
			<button id="pwaInstallBtn" class="pwa-install-btn">Install</button>
			<button id="pwaDismissBtn" class="pwa-dismiss-btn" title="Dismiss"><span class="material-symbols-outlined">close</span></button>
		</div>
	</div>
	
	<main>
		<section id="controls">
			<div class="controls-tabs">
			
			<!-- TEMPLATES SECTION -->
			<details id="templatesSection" open>
				<summary><span class="material-symbols-outlined">dashboard_customize</span> Templates</summary>
				<div class="control-group templates-panel">
					<!-- Template notification banner -->
					<div id="templateNotification" class="template-notification">
						<span class="material-symbols-outlined">info</span>
						<span id="templateNotificationText"></span>
						<button class="notification-dismiss" onclick="dismissTemplateNotification()">
							<span class="material-symbols-outlined">close</span>
						</button>
					</div>
					
					<!-- Save current design -->
					<div class="template-save-section">
						<button id="saveTemplateBtn" class="btn-save-template" onclick="openSaveTemplateModal()">
							<span class="material-symbols-outlined">bookmark_add</span>
							Save Current Design
						</button>
						<button id="copyPermalinkBtn" class="btn-permalink" onclick="copyPermalink()" title="Copy shareable link to clipboard">
							<span class="material-symbols-outlined">link</span>
						</button>
					</div>
					
					<!-- User saved templates -->
					<details class="sub-details" id="userTemplatesSection">
						<summary style="display:flex;align-items:center;gap:.5rem">
							<span class="material-symbols-outlined">folder_special</span>
							<span>My Saved Templates</span>
							<span id="userTemplateCount" class="template-count">0</span>
						</summary>
						<div class="sub-control-group">
							<div class="storage-warning">
								<span class="material-symbols-outlined">warning</span>
									<span>Templates are stored in your browser's local storage. They may be lost if you clear site data. Use the <strong>link button</strong> to create a bookmarkable, shareable URL.</span>
							</div>
								<div class="templates-section">
									<div class="templates-section-inner">
										<div id="userTemplatesGrid" class="templates-grid">
											<div class="no-templates">No saved templates yet. Save your current design above!</div>
										</div>
									</div>
							</div>
						</div>
					</details>
					
					<!-- Default templates -->
					<details class="sub-details" open>
						<summary>
							<span class="material-symbols-outlined">auto_awesome</span>
							Starter Templates
						</summary>
						<div class="sub-control-group">
								<div class="templates-section">
									<div class="templates-section-inner">
										<div id="defaultTemplatesGrid" class="templates-grid">
											<!-- Default templates will be rendered here by JS -->
										</div>
									</div>
							</div>
						</div>
					</details>
				</div>
			</details>
			
			<!-- TEXT SECTION -->
			<details>
				<summary><span class="material-symbols-outlined">text_fields</span> Text</summary>
				<div class="control-group">
					<div class="control-row">
						<label for="textTextControl">
							<span class="material-symbols-outlined">edit</span>
							Button Text
						</label>
						<input id="textTextControl" type="text" oninput="controlTextText()" value="My Button" placeholder="Enter button text...">
					</div>
					
					<div class="control-row">
						<label for="textFontControl">
							<span class="material-symbols-outlined">font_download</span>
							Font Family
						</label>
						<select id="textFontControl" search-choices onchange="controlTextFont()">
							<optgroup label="System Fonts">
								<option value="Arial">Arial</option>
								<option value="Verdana">Verdana</option>
								<option value="Tahoma">Tahoma</option>
								<option value="Trebuchet MS">Trebuchet MS</option>
								<option value="Courier New">Courier New</option>
								<option value="Georgia">Georgia</option>
								<option value="Impact">Impact</option>
							</optgroup>
							<optgroup label="GitHub Fonts">
								<option value="Hubot Sans" selected>Hubot Sans</option>
								<option value="Mona Sans">Mona Sans</option>
							</optgroup>
							<optgroup label="Display & Decorative">
								<option value="Bangers">Bangers</option>
								<option value="Bebas Neue">Bebas Neue</option>
								<option value="Lobster">Lobster</option>
								<option value="Pacifico">Pacifico</option>
								<option value="Permanent Marker">Permanent Marker</option>
								<option value="Righteous">Righteous</option>
								<option value="Press Start 2P">Press Start 2P</option>
								<option value="Orbitron">Orbitron</option>
								<option value="Playfair Display">Playfair Display</option>
							</optgroup>
							<optgroup label="Sans-Serif">
								<option value="Roboto">Roboto</option>
								<option value="Poppins">Poppins</option>
								<option value="Inter">Inter</option>
								<option value="Montserrat">Montserrat</option>
								<option value="Raleway">Raleway</option>
								<option value="Nunito">Nunito</option>
								<option value="Quicksand">Quicksand</option>
								<option value="Comfortaa">Comfortaa</option>
								<option value="Rubik">Rubik</option>
								<option value="Lato">Lato</option>
								<option value="Open Sans">Open Sans</option>
								<option value="Oswald">Oswald</option>
							</optgroup>
							<optgroup label="Monospace">
								<option value="VT323">VT323</option>
								<option value="Space Mono">Space Mono</option>
								<option value="Source Code Pro">Source Code Pro</option>
								<option value="Fira Code">Fira Code</option>
								<option value="JetBrains Mono">JetBrains Mono</option>
							</optgroup>
							<optgroup label="Handwritten">
								<option value="Sue Ellen Francisco">Sue Ellen Francisco</option>
							</optgroup>
						</select>
					</div>
					
					<div class="control-row-inline">
						<div class="control-col">
							<label for="textSizeControl">
								<span class="material-symbols-outlined">format_size</span>
								Size
							</label>
							<select id="textSizeControl" default-choices onchange="controlTextSize()">
								<option value="18px">XS</option>
								<option value="24px">S</option>
								<option value="32px" selected>M</option>
								<option value="44px">L</option>
								<option value="56px">XL</option>
								<option value="72px">XXL</option>
							</select>
						</div>
						<div class="control-col">
							<label for="textColourControl">
								<span class="material-symbols-outlined">palette</span>
								Colour
							</label>
							<input id="textColourControl" type="color" value="#ffffff" oninput="controlTextColour()">
						</div>
					</div>
					
					<!-- Advanced Text Options -->
					<details class="sub-details">
						<summary><span class="material-symbols-outlined">tune</span> Advanced Options</summary>
						<div class="sub-control-group">
							<div class="control-row">
								<label for="textTrackingControl">
									<span class="material-symbols-outlined">format_letter_spacing</span>
									Letter Spacing
								</label>
								<input type="range" id="textTrackingControl" min="-5" max="20" value="0" oninput="controlTextTracking()">
								<span class="range-value" id="trackingValue">0px</span>
							</div>
							
							<div class="control-row">
								<label for="textLineHeightControl">
									<span class="material-symbols-outlined">format_line_spacing</span>
									Line Height
								</label>
								<input type="range" id="textLineHeightControl" min="0.7" max="2" step="0.1" value="0.9" oninput="controlTextLineHeight()">
								<span class="range-value" id="lineHeightValue">0.9</span>
							</div>
							
							<div class="control-row">
								<label for="textWeightControl">
									<span class="material-symbols-outlined">format_bold</span>
									Font Weight
								</label>
								<select id="textWeightControl" default-choices onchange="controlTextWeight()">
									<option value="400">Normal</option>
									<option value="500">Medium</option>
									<option value="600">Semi-Bold</option>
									<option value="700" selected>Bold</option>
									<option value="800">Extra Bold</option>
								</select>
							</div>
							
							<div class="control-row">
								<label for="textTransformControl">
									<span class="material-symbols-outlined">text_format</span>
									Text Transform
								</label>
								<select id="textTransformControl" default-choices onchange="controlTextTransform()">
									<option value="none" selected>None</option>
									<option value="uppercase">UPPERCASE</option>
									<option value="lowercase">lowercase</option>
									<option value="capitalize">Capitalize</option>
								</select>
							</div>
							
							<div class="control-row">
								<label for="textShadowControl">
									<span class="material-symbols-outlined">blur_on</span>
									Text Shadow
								</label>
								<select id="textShadowControl" default-choices onchange="controlTextShadow()">
									<option value="none">None</option>
									<option value="shadow" selected>Drop Shadow</option>
									<option value="glow">Glow</option>
									<option value="outline">Outline</option>
								</select>
							</div>
						</div>
					</details>
				</div>
			</details>
			
			<!-- ICON SECTION -->
			<details>
				<summary><span class="material-symbols-outlined">category</span> Icon</summary>
				<div class="control-group">
					<div class="control-row">
						<label for="iconTypeControl">
							<span class="material-symbols-outlined">apps</span>
							Icon Type
						</label>
						<select id="iconTypeControl" default-choices onchange="controlIconType()">
							<option value="none">No Icon</option>
							<option value="md" selected>Material Symbols</option>
							<option value="char">Emoji/Character</option>
							<option value="upload">Upload Image/GIF</option>
							<option value="url">External Image URL</option>
						</select>
					</div>
					
					<div class="charIconOptions">
						<div class="control-row">
							<label for="iconTextControl">
								<span class="material-symbols-outlined">emoji_emotions</span>
								Icon Character
							</label>
							<input id="iconTextControl" type="text" oninput="controlIconType()" value="😄" maxlength="2">
						</div>
					</div>
					
					<div class="charIconOptions uploadIconOptions mdIconOptions">
						<div class="control-row-inline">
							<div class="control-col">
								<label for="iconSizeControl">
									<span class="material-symbols-outlined">aspect_ratio</span>
									Size
								</label>
								<select id="iconSizeControl" default-choices onchange="controlIconType()">
									<option value="50px">XS</option>
									<option value="80px">S</option>
									<option value="110px">M</option>
									<option value="140px" selected>L</option>
									<option value="180px">XL</option>
								</select>
							</div>
							<div class="control-col">
								<label for="iconPositionControl">
									<span class="material-symbols-outlined">layers</span>
									Position
								</label>
								<select id="iconPositionControl" default-choices onchange="controlIconType()">
									<option value="inline" selected>Inline</option>
									<option value="behind">Behind</option>
								</select>
							</div>
						</div>
					</div>
					
					<div class="charIconOptions mdIconOptions icon-colour-row">
						<div class="control-row">
							<label for="iconColourControl">
								<span class="material-symbols-outlined">palette</span>
								Icon Colour
							</label>
							<input id="iconColourControl" type="color" value="#b57edc" oninput="controlIconType()">
						</div>
					</div>
					
					<div class="uploadIconOptions">
						<div class="control-row">
							<label for="iconUploadControl">
								<span class="material-symbols-outlined">upload_file</span>
								Upload Icon
							</label>
							<input type="file" id="iconUploadControl" accept="image/png,image/jpeg,image/svg+xml,image/gif,image/webp" onchange="controlIconType()">
							<span class="input-hint">Supports: PNG, JPEG, SVG, GIF (inc. animated), WebP</span>
							<span class="input-hint privacy-hint"><span class="material-symbols-outlined">lock</span> Your images stay private — processed in your browser, never uploaded</span>
						</div>
						<a href="https://toolkit.addy.codes/tag/icons/" target="_blank" class="helper-link">
							<span class="material-symbols-outlined">open_in_new</span>
							Discover more icons on my Toolkit!
						</a>
					</div>
					
					<div class="urlIconOptions">
						<div class="control-row">
							<label for="iconUrlControl">
								<span class="material-symbols-outlined">link</span>
								Image URL
							</label>
							<input type="url" id="iconUrlControl" oninput="controlIconType()" placeholder="https://example.com/icon.png">
							<span class="input-hint">Enter a direct link to an image (PNG, JPEG, GIF, WebP)</span>
						</div>
					</div>
					
					<!-- Icon Effects -->
					<div class="charIconOptions uploadIconOptions mdIconOptions">
						<details class="sub-details">
							<summary><span class="material-symbols-outlined">tune</span> Icon Effects</summary>
							<div class="sub-control-group">
								<div class="control-row">
									<label for="iconShadowControl">
										<span class="material-symbols-outlined">blur_on</span>
										Effect
									</label>
									<select id="iconShadowControl" default-choices onchange="controlIconEffects()">
										<option value="none" selected>None</option>
										<option value="shadow">Shadow</option>
										<option value="glow">Glow</option>
									</select>
								</div>
								<div class="control-row">
									<label for="iconOpacityControl">
										<span class="material-symbols-outlined">opacity</span>
										Opacity
									</label>
									<input type="range" id="iconOpacityControl" min="0.1" max="1" step="0.1" value="1" oninput="controlIconEffects()">
									<span class="range-value" id="iconOpacityValue">100%</span>
								</div>
								<div class="control-row">
									<label for="iconRotationControl">
										<span class="material-symbols-outlined">rotate_right</span>
										Rotation
									</label>
									<select id="iconRotationControl" default-choices onchange="controlIconEffects()">
										<option value="0" selected>0°</option>
										<option value="45">45°</option>
										<option value="90">90°</option>
										<option value="180">180°</option>
										<option value="270">270°</option>
										<option value="-45">-45°</option>
									</select>
								</div>
								<div class="control-row">
									<label for="iconFlipControl">
										<span class="material-symbols-outlined">flip</span>
										Flip
									</label>
									<select id="iconFlipControl" default-choices onchange="controlIconEffects()">
										<option value="none" selected>None</option>
										<option value="horizontal">Horizontal</option>
										<option value="vertical">Vertical</option>
										<option value="both">Both</option>
									</select>
								</div>
							</div>
						</details>
					</div>
				</div>
				
				<!-- Material Icons Picker -->
				<div id="iconPicker-md" class="mdIconOptions icon-picker">
					<div class="icon-search-container">
						<span class="material-symbols-outlined search-icon">search</span>
						<input type="search" id="iconSearchInput" placeholder="Search 650+ Material icons..." oninput="iconSearch(this)">
					</div>
					<div class="icon-categories">
						<button class="category-btn active" data-category="all">All</button>
						<button class="category-btn" data-category="action">Action</button>
						<button class="category-btn" data-category="alert">Alert</button>
						<button class="category-btn" data-category="av">AV</button>
						<button class="category-btn" data-category="communication">Chat</button>
						<button class="category-btn" data-category="content">Content</button>
						<button class="category-btn" data-category="device">Device</button>
						<button class="category-btn" data-category="file">File</button>
						<button class="category-btn" data-category="hardware">Hardware</button>
						<button class="category-btn" data-category="home">Home</button>
						<button class="category-btn" data-category="image">Image</button>
						<button class="category-btn" data-category="maps">Maps</button>
						<button class="category-btn" data-category="navigation">Nav</button>
						<button class="category-btn" data-category="notification">Notify</button>
						<button class="category-btn" data-category="social">Social</button>
						<button class="category-btn" data-category="toggle">Toggle</button>
					</div>
					<div class="icon-grid-wrapper">
						<div class="icon-grid" id="iconGrid">
							<div class="icon-loading">Loading icons...</div>
						</div>
					</div>
					<p class="icon-attribution">
						Icons from <a href="https://fonts.google.com/icons" target="_blank" rel="noopener">Google Material Symbols</a> (<a href="https://github.com/google/material-design-icons/blob/master/LICENSE" target="_blank" rel="noopener">Apache 2.0 License</a>)
					</p>
				</div>
			</details>
			
			<!-- BACKGROUND SECTION -->
			<details>
				<summary><span class="material-symbols-outlined">format_paint</span> Background</summary>
				<div class="control-group">
					<div class="control-row">
						<label for="backgroundStyleControl">
							<span class="material-symbols-outlined">style</span>
							Background Style
						</label>
						<select id="backgroundStyleControl" default-choices onchange="controlBackgroundStyle()">
							<option value="solid" selected>Solid Colour</option>
							<option value="gradient">Gradient</option>
							<option value="image">Upload Image/GIF</option>

						</select>
					</div>
					
					<div id="backgroundSolidOptions">
						<div class="control-row">
							<label for="backgroundColourControl">
								<span class="material-symbols-outlined">palette</span>
								Background Colour
							</label>
							<input id="backgroundColourControl" type="color" value="#894bb8" oninput="controlBackgroundStyle()">
						</div>
					</div>
					
					<div id="backgroundGradientOptions">
						<div class="control-row">
							<label for="backgroundGradientControl">
								<span class="material-symbols-outlined">gradient</span>
								Gradient Style
							</label>
							<select id="backgroundGradientControl" default-choices onchange="controlBackgroundStyle()">
								<option value="horizontal" selected>Horizontal</option>
								<option value="vertical">Vertical</option>
								<option value="radial">Radial</option>
								<option value="diagonal">Diagonal</option>
							</select>
						</div>
						
						<div class="control-row-inline">
							<div class="control-col">
								<label for="backgroundColour1Control">
									<span class="material-symbols-outlined">palette</span>
									Colour 1
								</label>
								<input id="backgroundColour1Control" type="color" value="#894bb8" oninput="controlBackgroundStyle()">
							</div>
							<div class="control-col">
								<label for="backgroundColour2Control">
									<span class="material-symbols-outlined">palette</span>
									Colour 2
								</label>
								<input id="backgroundColour2Control" type="color" value="#000000" oninput="controlBackgroundStyle()">
							</div>
						</div>
					</div>
					
					<div id="backgroundImageOptions">
						<div class="control-row">
							<label for="backgroundImageControl">
								<span class="material-symbols-outlined">image</span>
								Select Image
							</label>
							<input type="file" id="backgroundImageControl" accept="image/png,image/jpeg,image/svg+xml,image/gif,image/webp" onchange="controlBackgroundStyle()">
							<span class="input-hint">Supports: PNG, JPEG, SVG, GIF, WebP</span>
							<span class="input-hint privacy-hint"><span class="material-symbols-outlined">lock</span> Your images stay private — processed in your browser, never uploaded</span>
						</div>
					</div>
					
					<div id="backgroundOverlayOptions" style="margin-top: 1rem;">
						<div class="control-row">
							<label for="backgroundOverlayControl">
								<span class="material-symbols-outlined">tonality</span>
								Dark Overlay
								<span class="range-value" id="backgroundOverlayValue">0%</span>
							</label>
							<input type="range" id="backgroundOverlayControl" min="0" max="0.8" step="0.05" value="0" oninput="controlBackgroundOverlay()">
							<span class="input-hint">Darken the background to improve text readability</span>
						</div>
					</div>
				</div>
			</details>
			
			<!-- BORDER SECTION -->
			<details>
				<summary><span class="material-symbols-outlined">crop_square</span> Border</summary>
				<div class="control-group">
					<div class="control-row-inline">
						<div class="control-col">
							<label for="borderWidthControl">
								<span class="material-symbols-outlined">line_weight</span>
								Width
							</label>
							<select id="borderWidthControl" default-choices onchange="controlBorderWidth()">
								<option value="0px" selected>None</option>
								<option value="3px">Thin</option>
								<option value="6px">Medium</option>
								<option value="10px">Thick</option>
								<option value="16px">Extra Thick</option>
							</select>
						</div>
						<div class="control-col">
							<label for="borderColourControl">
								<span class="material-symbols-outlined">palette</span>
								Colour
							</label>
							<input id="borderColourControl" type="color" value="#ffffff" oninput="controlBorderColour()">
						</div>
					</div>
					
					<div class="control-row">
						<label for="borderRadiusControl">
							<span class="material-symbols-outlined">rounded_corner</span>
							Corner Radius
						</label>
						<select id="borderRadiusControl" default-choices onchange="controlBorderRadius()">
							<option value="15%" selected>Default (15%)</option>
							<option value="0">Square (0px)</option>
							<option value="5%">Slight (5%)</option>
							<option value="25%">More Rounded (25%)</option>
							<option value="50%">Circle (50%)</option>
						</select>
					</div>
				</div>
			</details>
			
			<!-- EXTRAS SECTION -->
			<details>
				<summary><span class="material-symbols-outlined">auto_awesome</span> Extras</summary>
				<div class="control-group">
					<div class="control-row">
						<label for="overlayControl">
							<span class="material-symbols-outlined">layers</span>
							Overlay Effect
						</label>
						<select id="overlayControl" default-choices onchange="controlOverlay()">
							<option value="none.png" selected>None</option>
							<optgroup label="Gloss & Highlights">
								<option value="gloss-over.png">Gloss</option>
								<option value="gloss-diagonal.png">Gloss (Diagonal)</option>
								<option value="jelly.png">Jelly</option>
								<option value="spotlight.png">Spotlight</option>
								<option value="corner-glow.png">Corner Glow</option>
							</optgroup>
							<optgroup label="Shadows & Depth">
								<option value="vignette.png">Vignette</option>
								<option value="inner-shadow.png">Inner Shadow</option>
								<option value="disabled.png">Disabled / Dimmed</option>
							</optgroup>
							<optgroup label="Textures">
								<option value="noise.png">Film Grain</option>
								<option value="scanlines.png">Scanlines</option>
								<option value="halftone.png">Halftone</option>
							</optgroup>
						</select>
					</div>
					
					<div class="control-row">
						<label for="badgeControl">
							<span class="material-symbols-outlined">circle</span>
							Status Badge
						</label>
						<select id="badgeControl" default-choices onchange="controlBadge()">
							<option value="none" selected>None</option>
							<option value="red">🔴 Red (Live/Recording)</option>
							<option value="green">🟢 Green (Active/On)</option>
							<option value="orange">🟠 Orange (Warning)</option>
							<option value="blue">🔵 Blue (Info)</option>
							<option value="purple">🟣 Purple</option>
							<option value="white">⚪ White</option>
						</select>
					</div>
					
					<div id="badgePositionRow" class="control-row" style="display: none;">
						<label for="badgePositionControl">
							<span class="material-symbols-outlined">drag_indicator</span>
							Badge Position
						</label>
						<select id="badgePositionControl" default-choices onchange="controlBadge()">
							<option value="top-right" selected>Top Right</option>
							<option value="top-left">Top Left</option>
							<option value="bottom-right">Bottom Right</option>
							<option value="bottom-left">Bottom Left</option>
						</select>
					</div>
				</div>
			</details>
			
			</div>
			
			<div class="download-section">
				<div class="export-size-row">
					<label for="exportSizeControl">
						<span class="material-symbols-outlined">aspect_ratio</span>
						Export Size
					</label>
					<select id="exportSizeControl" default-choices>
						<option value="144" selected>144×144px</option>
						<option value="288">288×288px (HD)</option>
					</select>
				</div>
				<button id="download" class="btn-primary">
					<span class="material-symbols-outlined">download</span>
					Download Button
				</button>
				<div id="gifExportNote" class="gif-note" style="display: none;">
					<span class="material-symbols-outlined">gif_box</span>
					Animated GIF detected — will export as animated GIF
				</div>
				<a class="tip-jar" href="https://ko-fi.com/addycodes" target="_blank" rel="noopener noreferrer">
					<span class="material-symbols-outlined">volunteer_activism</span>
					Tip Jar (Ko-fi)
				</a>
			</div>
		</section>
		
		<section id="preview">
			<div class="preview-dots"></div>
			<div id="preview-button-container">
				<div id="preview-button">
					<div id="buttonBackground"></div>
					<div id="backgroundDarkOverlay"></div>
					<div id="buttonIcon">
						<div id="buttonIconInner"></div>
					</div>
					<div id="textPreview">My Button</div>
					<img id="buttonOverlay" src="assets/overlays/none.png">
					<div id="buttonBadge" class="status-badge" style="display: none;"></div>
				</div>
			</div>
			<div class="preview-actions">
				<button id="previewPermalinkBtn" class="preview-action-btn" onclick="copyPermalink()">
					<span class="material-symbols-outlined">link</span>
					<span class="tooltip">Copy shareable link</span>
				</button>
				<button id="resetButton" class="preview-action-btn" onclick="resetToDefaults()">
					<span class="material-symbols-outlined">restart_alt</span>
					<span class="tooltip">Reset to defaults</span>
				</button>
			</div>
		</section>
	</main>
	
	<article>
		<h2>Button Designer — Stream Deck-compatible key icon creator</h2>
		<p>Use this free online tool to design consistent, personalised icons for Stream Deck-compatible keys. Pick from thousands of icons, add text, and customise colours, backgrounds, and overlays to match your style.</p>
		<h3>Recommended icon dimensions (Stream Deck-compatible)</h3>
		<ul>
			<li>Icons should be at least 72×72px (we export at 144×144px by default, or 288×288px for HD)</li>
			<li>Can be PNG, JPEG, GIF or WebP</li>
			<li>Larger icons will automatically be resized down</li>
		</ul>
		<p>Icons you create here are ready to import into the Stream Deck software right away.</p>
		<h3>How to assign custom icons in Stream Deck</h3>
		<img src="guide.png" alt="Screenshot showing how to add a custom icon in Stream Deck">
		<p>When you've <a href="https://help.elgato.com/hc/en-us/articles/360028241291-Elgato-Stream-Deck-Quick-Start-Guide" target="_blank">created a key on your Stream Deck</a> and downloaded your custom key from this creator, select the key you would like to customise the icon for and then you can either:</p>
		<ul>
			<li>Drag and drop your custom icon on to the icon preview in the icons property pane</li>
			<li>Click the small arrow in the top right of the icon preview in the icons property pane, click "set from file" and then select your downloaded icon</li>
		</ul>
		<h3>Can I save my design for later?</h3>
		<p><strong>Yes!</strong> Use the <strong>Templates</strong> panel to save your designs. You have two options:</p>
		<ul>
			<li><strong>Save to browser storage:</strong> Click "Save Current Design" to save templates locally. These are stored in your browser's local storage — convenient but may be lost if you clear site data or switch devices.</li>
			<li><strong>Create a shareable link:</strong> Click the <strong>link icon</strong> next to the save button to copy a bookmarkable URL containing your entire design. Bookmark this link or share it with others!</li>
		</ul>
		<p><strong>Note about custom images:</strong> If your design uses an uploaded image (background or icon), the image itself cannot be stored in templates or URLs. The template will save with a placeholder, and you'll need to re-upload the image when loading the template. This is due to browser security restrictions and URL length limits.</p>
		<h3>Privacy & Security</h3>
		<p><strong>100% client-side processing:</strong> Your images are never uploaded to any server. All image processing, compositing, and exporting happens entirely in your browser using JavaScript. Your designs stay completely private on your device.</p>
		<p>The only data stored is your design settings in your browser's local storage — this never leaves your device. We use privacy-friendly analytics (Matomo) to count page views, but no personal data or images are ever collected or transmitted.</p>		<h3>App Information</h3>
		<p><strong>Unofficial / independent:</strong> This is a community-made tool for creating button icons that are Stream Deck-compatible. It is not affiliated with, endorsed by, sponsored by, or otherwise approved by Corsair, <a href="https://www.elgato.com/uk/en/s/welcome-to-stream-deck" target="_blank" rel="noopener noreferrer">Elgato</a>, or the Stream Deck brand.</p>
		<p>“Stream Deck” and “Elgato” are trademarks of their respective owners. They are used here only to describe compatibility and the intended use of the tool.</p>
		<p>This website does not include or redistribute any Elgato software or proprietary assets — it simply helps you generate image files you can import into the Stream Deck software.</p>
		<p><strong>No warranty:</strong> This tool is provided “as is” and “as available”, without warranties of any kind (express or implied), including but not limited to merchantability, fitness for a particular purpose, and non-infringement. You use it at your own risk. To the maximum extent permitted by law, the author is not liable for any claim, damages, or other liability arising from your use of the tool.</p>
		<p>Lovingly made by <a href="https://addy.codes">Addy Codes</a> using icons from <a href="https://fonts.google.com/icons">Google Material Symbols</a> (<a href="https://github.com/google/material-design-icons/blob/master/LICENSE" target="_blank" rel="noopener">Apache 2.0 License</a>).</p>
		<p>If you've found this helpful, please consider <a href="https://ko-fi.com/addycodes" target="_blank" rel="noopener noreferrer">supporting me on Ko-fi</a> to fund more caffeine-fuelled development. To <a href="https://github.com/adamgreenough/button-designer">report a bug or request a feature</a>, please visit the <a href="https://github.com/adamgreenough/button-designer">GitHub code repository</a>.</p>
	</article>

	<!-- PWA Footer Install Banner -->
	<div id="pwaFooterBanner" class="pwa-footer-banner hidden">
		<div class="pwa-footer-content">
			<span class="material-symbols-outlined">install_desktop</span>
			<span>Install <strong>Button Designer</strong> as an app for quick access</span>
		</div>
		<button id="pwaFooterInstallBtn" class="pwa-footer-install-btn">Install App</button>
	</div>
	
	<!-- Save Template Modal -->
	<div id="saveTemplateModal" class="modal-overlay hidden">
		<div class="modal-content">
			<div class="modal-header">
				<h3><span class="material-symbols-outlined">bookmark_add</span> Save Template</h3>
				<button class="modal-close" onclick="closeSaveTemplateModal()">
					<span class="material-symbols-outlined">close</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="control-row">
					<label for="templateNameInput">
						<span class="material-symbols-outlined">label</span>
						Template Name
					</label>
					<input type="text" id="templateNameInput" placeholder="e.g., My Gaming Button" maxlength="50">
				</div>
				<div id="customImageWarning" class="custom-image-warning hidden">
					<span class="material-symbols-outlined">image_not_supported</span>
					<div>
						<strong>Custom image detected</strong>
						<p>Your design uses an uploaded image. The template will save with a transparent placeholder. You'll need to re-upload the image when loading this template.</p>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn-secondary" onclick="closeSaveTemplateModal()">Cancel</button>
				<button class="btn-primary-modal" onclick="saveTemplate()">
					<span class="material-symbols-outlined">save</span>
					Save Template
				</button>
			</div>
		</div>
	</div>
	
	<script src="/js/vendor/html-to-image.min.js"></script>
	<script src="js/script.js?v=<?= filemtime(__DIR__ . '/js/script.js') ?>"></script>
	<script>init();</script>
	
	<!-- PWA Service Worker & Install Prompt -->
	<script>
		// Register Service Worker
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('/sw.js')
				.then(reg => console.log('Service Worker registered'))
				.catch(err => console.log('Service Worker registration failed:', err));
		}

		// Check if running as PWA (standalone mode)
		const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
		                     window.navigator.standalone || 
		                     document.referrer.includes('android-app://');

		// Track PWA launch in Matomo
		if (isStandalone) {
			if (typeof _paq !== 'undefined') {
				_paq.push(['trackEvent', 'PWA', 'Booted', 'App opened in standalone mode']);
			}
			console.log('Running as PWA');
		}

		// PWA Install Prompt
		let deferredPrompt;
		const pwaPrompt = document.getElementById('pwaInstallPrompt');
		const pwaInstallBtn = document.getElementById('pwaInstallBtn');
		const pwaDismissBtn = document.getElementById('pwaDismissBtn');
		const pwaFooterBanner = document.getElementById('pwaFooterBanner');
		const pwaFooterInstallBtn = document.getElementById('pwaFooterInstallBtn');

		// Hide PWA prompts if already running as PWA
		if (isStandalone) {
			pwaPrompt?.classList.add('hidden');
			pwaFooterBanner?.classList.add('hidden');
		}

		// Check if user previously dismissed the prompt
		const pwaDismissed = localStorage.getItem('pwa-prompt-dismissed');

		window.addEventListener('beforeinstallprompt', (e) => {
			e.preventDefault();
			deferredPrompt = e;
			
			// Don't show prompts if already in standalone mode
			if (isStandalone) return;
			
			// Always show footer banner when installable
			pwaFooterBanner.classList.remove('hidden');
			
			// Show floating prompt after a delay if not dismissed
			if (!pwaDismissed) {
				setTimeout(() => {
					pwaPrompt.classList.remove('hidden');
				}, 10000);
			}
		});

		async function handlePwaInstall() {
			if (!deferredPrompt) return;
			
			deferredPrompt.prompt();
			const { outcome } = await deferredPrompt.userChoice;
			
			if (outcome === 'accepted') {
				console.log('PWA installed');
				// Track PWA install in Matomo
				if (typeof _paq !== 'undefined') {
					_paq.push(['trackEvent', 'PWA', 'Installed', 'User accepted install prompt']);
				}
			}
			
			deferredPrompt = null;
			pwaPrompt.classList.add('hidden');
			pwaFooterBanner.classList.add('hidden');
		}

		pwaInstallBtn?.addEventListener('click', handlePwaInstall);
		pwaFooterInstallBtn?.addEventListener('click', handlePwaInstall);

		pwaDismissBtn?.addEventListener('click', () => {
			pwaPrompt.classList.add('hidden');
			localStorage.setItem('pwa-prompt-dismissed', 'true');
		});

		// Hide prompt if app is already installed
		window.addEventListener('appinstalled', () => {
			pwaPrompt.classList.add('hidden');
			pwaFooterBanner.classList.add('hidden');
			deferredPrompt = null;
			// Track PWA install in Matomo
			if (typeof _paq !== 'undefined') {
				_paq.push(['trackEvent', 'PWA', 'Installed', 'App installed successfully']);
			}
		});
	</script>
	
</body>
</html>
