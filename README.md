# Newsletter Templates

Updated versions of email newsletter templates for [Crosspoint Church](https://crosspoint.church).

## Overview

1. The `original` directory contains the [original templates](dist/html/templates/original/) pulled from Shelby Arena.
2. The `new` directory contains [new versions of each template](dist/html/templates/new/).

## Notes

*Many of the notes mentioned below are credited to [Mailchimp](https://mailchimp.com) and their [Email Design Reference](https://templates.mailchimp.com).*

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

### Tables Within Tables

For finer control of your HTML, try nesting `<table>` elements when building emails. At its simplest, an email should be at least two tables deep.

There's a good reason; you must provide a table to serve as a redundant `<body>` element, as some email clients strip out the element when they render the email.

### HTML Attributes

While much of the styling standards-based HTML is done via CSS, there are time where styling via HTML attributes works better for email. Because some major email clients are running on antiquated rendering engines, they tend to better understand attributes.

The attributes below, `border`, `cellpadding`, `cellspacing`, `width`, `align`, and `valign` are supported in all email clients, making them ideal for setting up some baseline styling before you get into CSS.

**Example:**

```html
<table id="body" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
```

### Code Responsively

Just because you're forced to write code better suited for the web of 1998 doesn't mean it's all bad. As archaic as using tables to build an email may be, new techniques like responsive web design are finding their way into HTML email. As you code, strive to make every email reponsive; you can do this by setting only one fixed width in the email.

By adding other tables, `header`, `body`, `footer`, and `legal` and setting their widths to 100%, you only need to manipulate the `email` table. These independent tables make it simpler to create an email that works well on small displays.

#### Not Too Wide

Current best practies dictate that emails should be around 600px in width, and we've found that 800px is a workable upper limit. The second table - `<table id="email">`, in this case, is where you can set that width.

Many email clients now feature 'preview' windows where the email is rendered without the need for the user to truly 'open' it. Unfortunately, those preview windows tend to be quite small. This 600-800 pixel range is one that tends to fit nicely within these tiny windows.

**Example:**

```html
<table id="email" border="0" cellpadding="20" cellspacing="0" width="600">
```