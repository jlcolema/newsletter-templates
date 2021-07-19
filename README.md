# Newsletter Templates

Updated versions of email newsletter templates for [Crosspoint Church](https://crosspoint.church).

## Overview

1. The `original` directory contains the [original templates](dist/html/templates/original/) pulled from Shelby Arena.
2. The `new` directory contains [new versions of each template](dist/html/templates/new/).

## Notes

### HTML Structure

This can be used to quickly jump to sections within the HTML structure.

For example, search `id="main"` to jump to the main content section.

```html
<body>
	<table id="body">
		<table id="email">
			<table id="header">
			<table id="main">
			<table id="footer">
			<table id="legal">
```

### Format Detection

**macOS / iOS: Phone Number, Address, and Date Link Colors**

When iOS detects a phone number, address, or calendar date, it oh-so-helpfully sets those items as links to make it easier to immediately call, map, or add an appointment within other apps. The trouble is the that link colors are the standard ‘internet blue’, or `#0000FF`. This color can be difficult to read on dark backgrounds, to say nothing of it not matching the style of your email’s design. Thankfully, there’s a workaround.

First, for the phone number. In the `<head>` of your email, add this iOS-specific `<meta>` tag.

**Example:**

```html
<meta name="format-detection" content="telephone=no" />
```

Using that, iOS will no longer auto-detect and style phone numbers. You should, however, provide your own way to call from an email. You can do that by wrapping a phone number in a line and setting the `href` attribute with a `tel` value.

**Example:**

```html
<a href="tel: 1-850-678-4411">1-850-678-4411</a>
```

You can now style the link as you see fit. Addresses and dates work a little differently, and the solution is a little hacky, but that’s okay; it’s par for the course in HTML email. In order to override the blue link color, you wrap the links in an inline element like an `<a>`, then you apply your own color.

**Example:**

```html
Visit Crosspoint Church at <a href="#" style="color: #000000; text-decoration: none;">214 Partin Drive South, Niceville, FL 32578</a>
```

Be aware that, regardless of the fact that you changed the link colors, the iOS functionality isn’t disabled on any of these items. An errant tap of a date or address will still open up calendar and map applications, so it’s a good idea to make these links a little different than your other standard links, so folks avoid confusion or frustration.

### Web Fonts

While web fonts may be common in modern site design, in the world of HTML email, they’re experimental at best. If you want to work on the ragged edge of email technology, however, you do have a few options. A (really) small number of email clients support the use of web fonts provided through services like [Google Web Fonts](https://fonts.google.com).

1. Outlook 2000
2. iOS Mail
3. Apple Mail
4. Android (default client, not Gmail)
5. Thunderbird

So long as the client itself supports the use of `<link>`, `@import`, or `@font-face`, your choice of web font can be served with those methods and not with JavaScript, there’s a pretty good chance web fonts will show up just fine. The actual use of web fonts is pretty straightforward, using standard HTML and CSS syntaxes. If you prefer the HTML approach, `<link>` is your best option.

**Example:**

```html
<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" media="screen" />
```

After the import is complete, regardless of the method you choose, you can set the font family value as you normally would.

**Example:**

```css
font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
```