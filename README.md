# Newsletter Templates

Updated versions of email newsletter templates for Crosspoint Church.

## Overview

1. The `original` directory contains the original templates pulled from Shelby Arena.
2. The `new` directory contains updated versions of each template.

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

When iOS detects a phone number, address, or calendar date, it oh-so-helpfully sets those items as links to make it easier to immediately call, map, or add an appointment within other apps. The trouble is the that link colors are the standard ‘internet blue’, or #0000FF. This color can be difficult to read on dark backgrounds, to say nothing of it not matching the style of your email’s design. Thankfully, there’s a workaround.

First, for the phone number. In the `<head>` of your email, add this iOS-specific `<meta>` tag.

**Example:**

```html
<meta name="format-detection" content="telephone=no" />
```

Using that, iOS will no longer auto-detect and style phone numbers (Apple also lists its other tags here). You should, however, provide your own way to call from an email. You can do that by wrapping a phone number in a line and setting the href attribute with a tel value.

**Example:**

```html
<a href="tel: 1-800-555-5555">1-800-555-5555</a>
```

You can now style the link as you see fit. Addresses and dates work a little differently, and the solution is a little hacky, but that’s okay; it’s par for the course in HTML email. In order to override the blue link color, you wrap the links in an inline element like an `<a>`, then you apply your own color.

**Example:**

```html
Visit Email Company at <a href="#" style="color: #000000; text-decoration: none;">123 Atlantic Ave. &bull; Atlanta, GA 30318 USA</a>
```

Be aware that, regardless of the fact that you changed the link colors, the iOS functionality isn’t disabled on any of these items. An errant tap of a date or address will still open up calendar and map applications, so it’s a good idea to make these links a little different than your other standard links, so folks avoid confusion or frustration.