<?php

namespace Plugins\CookieBanner;

use \Typemill\Plugin;

class CookieBanner extends Plugin
{
	protected $settings;
	
    public static function getSubscribedEvents()
    {
		return array(
			'onSettingsLoaded'		=> 'onSettingsLoaded',
			'onTwigLoaded' 			=> 'onTwigLoaded'
		);
    }
	
	public function onSettingsLoaded($settings)
	{
		$this->settings = $settings->getData();
	}
	
	public function onTwigLoaded()
	{
		/* add external CSS and JavaScript */
		$this->addCSS('/cookiebanner/public/cookiebanner-assets.css');	

		/* get Twig Instance and add the cookiebanner template-folder to the path */
		$twig 	= $this->getTwig();					
		$loader = $twig->getLoader();
		$loader->addPath(__DIR__ . '/templates');
		/* fetch the template, render it with twig and add it sas inline-javascript */
		$this->addInlineJS($twig->fetch('/cookiebanner.twig', $this->settings));
	}
}