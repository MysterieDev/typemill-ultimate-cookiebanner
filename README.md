# Your Cookiebanner Solution for the Typemill CMS

Welcome to the ultimate-cookiebanner Plugin.

With this Plugin, you get a markdown based solution for a up to date cookiebanner integrated into the typemill CM-System.

You can whitelist certain pages to not require consent in order to view them with query parameters. You can also control the version of the cookiebanner, to redisplay the latest cookie settings.

The Banner is based on PHP and SolidJS. SolidJS is a blazing fast solution for little reactive Applications.

Questions? Problems? Feel free to open an Issue!

**DISCLAIMER:** there is **NO** legal warranty, neither technical, nor regarding the law, for the implementation of the Plugin on your typemill installation!

## Support

Do you want to support the plugin and the ongoing development of it? The best way is with a donation towards the maintenance of this plugin.
[Here is the link to my Ko-Fi site](https://ko-fi.com/slezakit/?hidefeed=true&widget=true&embed=true).


## Installation

Just download the plugin and put it in Typemills Plugin folder, then go into the plugins admin area and activate it!

You have to fill out some settings like your texts, headlines and introduction to your cookie-listing to take the full power of the plugin.

IE is not supported with this plugin due to template literal strings.

## Usage

### adding Storage Elements

storage elements are provided in three categories

- required
- functional
- marketing

The cookies are represented in the browser as

- cbReq TRUE/FALSE as string
- cbFun TRUE/FALSE as string
- cbMar TRUE/FALSE as string

The first category will always be set as consented, as it is a required category. Check yourself, if your cookie fills the regulations!

The second and third category are non-essential. Functional is normally used for statistics collection regarding how users act on your site.

Marketing Elements are self explainatory with the word "marketing". They have the purpose of giving you more power to do marketing by using tools specialized in it.

**Adding a Storage element** in the Typemill admin area is very easy. just use the markdown table implementation pattern:
name|host|persistence
Example below:
test|/|1 --> Cookie test on root host with 1 day persistence
test|/|0 --> Sessioncookie test on root host
test|/|-1 --> Sessionstorage element test on root host
test|/|-2 --> Localstorage element test on root host
### automation

The cookiebanner automatically detects which category is filled out and will thereby only display the buttons and the tables that are worthy to display

- only functional button will only be displayed if there are functional storage elements
- tables will only be displayed if there is at least one cookie

### Banner Callbacks

#### Consent Callback
In the admin area you can set a callback that fires on every site, returns the consents and also displays if the cookiebanner was shown on this site

#### OptOut Callback
In the admin area you can set a callback that fires if the site loads with the **queryParam ?cboptout=true**



#### always up to date data-privacy site

the app will search for a container with the id

#cbReqTable table and explainer for required storage elementsies
#cbFunTable table and explainer for functional storage elements
#cbMarTable table and explainer for marketing storage elements

these can be set in typemill as follows:

- go into raw-mode
- inser a figure using this syntax:

1. ![]{#cbReqTable}
2. ![]{#cbFunTable}
3. ![]{#cbMarTable}

- This will create three figures - each one of these is for one category. They follow the same automation rules!

On these figures, the plugin will install the ui for the corresponding cookie category. Be noticed that this is a solution as a pseudo shortcode. Typemill in its current version will generate a figure element with the corresponding id, and we completely replace that element with our listing.

### Reset the consent / Update the consent

The setting consent version in the admin area represents your consent version for your current cookie settings.
If you change marketing storage elements, you have to redisplay the cookiebanner for users. By setting the consent version to something else, or just incrementing it, the cookiebanner will be displayed again.

This works by checking the cbSet cookie value in the browser. If there is a diff, we delete our consent cookies and ask again.

### Add Sites that can be displayed without cookiebanner

In some cases, you want to give the user one page and its content, even if the cookiebanenr is not consented. For example the imprint or the data privacy. You can add links into the introduction texts and put the parameter:  
www.test.de **?nocb=true**  
This will _deactivate_ the cookiebanner from blocking your site as a whitelisted case!

