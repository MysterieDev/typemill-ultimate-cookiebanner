# Your Cookiebanner Solution for the Typemill CMS

**DISCLAIMER:** As the author of the plugin, i tried to be considerate about the regulations and laws regarding data privacy.  
Even though, this banner is definitely suitable for the current standard, there is **NO** legal warranty, neither technical, nor regarding the law, for the implementation of the Plugin on your typemill installation!

## Support

Do you want to support the plugin and the ongoing development of it? The best way is with a donation towards the maintenance.
[Here is the link to my Ko-Fi site](https://ko-fi.com/slezakit/?hidefeed=true&widget=true&embed=true).

Welcome to the ultimate-cookiebanner Plugin. The one stop for a user-respecting Cookie-Banner Listing!

## Installation

Just download the plugin and put it in Typemills Plugin folder, then go into the plugins admin area and activate it!

You have to fill out some settings like your texts, headlines and introduction to your cookie-listing to take the full power of the plugin

## Usage

### adding Cookies

Cookies are provided in three categories

- required
- functional
- marketing

The cookies are represented in the browser as

- cbReq TRUE/FALSE as string
- cbFun TRUE/FALSE as string
- cbMar TRUE/FALSE as string

The first category will always be set as consented, as it is a required category. Check yourself, if your cookie fills the regulations!

The second and third category are non-essential. Functional is normally used for statistics collection regarding how users act on your site.

Marketing Cookies are self explainatory with the word "marketing". They have the purpose of giving you more power to do marketing by using tools specialized in it.

**Adding a Cookie** in the Typemill admin area is very easy. just use the markdown table implementation pattern:
name|host|persistence

### automation

The cookiebanner automatically detects which category is filled out and will thereby only display the buttons and the tables that are worthy to display

- only functional button will only be displayed if there are functional cookies
- tables will only be displayed if there is at least one cookie

#### always up to date data-privacy site

the app will search for a container with the id

#cbReqTable table and explainer for required cookies
#cbFunTable table and explainer for functional cookies
#cbMarTable table and explainer for marketing cookies

these can be set in typemill as follows:

- go into raw-mode
- inser a figure using this syntax:

1. ![]{#cbReqTable}
2. ![]{#cbFunTable}
3. ![]{#cbMarTable}

- This will create three figures - each one of these is for one category. They follow the same automation rules!

On these figures, the plugin will install the ui for the corresponding cookie category

### Reset the consent / Update the consent

The setting consent version in the admin area represents your consent version for your current cookie settings.
If you change marketing cookies, you have to redisplay the cookiebanner for users. By setting the consent version to something else, or just incrementing it, the cookiebanner will be displayed again.

This works by checking the cbSet cookie value in the browser. If there is a diff, we delete our consent cookies and ask again.

### Add Sites that can be displayed without cookiebanner

In some cases, you want to give the user one page and its content, even if the cookiebanenr is not consented. For example the imprint or the data privacy. You can add links into the introduction texts and put the parameter:  
www.test.de **?nocb=true**  
This will _deactivate_ the cookiebanner from blocking your site as a whitelisted case!
