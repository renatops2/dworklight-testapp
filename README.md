# dworklight-testapp
This project contains a Worklight Project/App that exercises the dworklight and dcordova modules.

## Status

No official release yet.

## Licensing

This project is distributed by the Dojo Foundation and licensed under the Dojo dual license [BSD/AFLv2 license](http://dojotoolkit.org/license).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).

## Dependencies

This project uses embedded instances of the following projects.
 * dojo
 * dijit
 * dojox/mobile
 * dapp
 * dcordova
 * dworklight

## Installation

Prerequisites:
- [NodeJS](http://nodejs.org/) for NPM install.
	- The magic goo that makes all things true
- [Grunt]() Command Line automation framework
	- `npm install -g grunt-cli`
- [Bower](http://bower.io/) package management
	- `npm install -g bower`

Manual installation procedure:

1. Ensure prereqs are installed
2. Install this project into your Worklight Studio workspace by cloning from github
	- `cd ~/dev/workspace`  (or wherever your workspace is located)
	- `git clone git://github.com/kfbishop/dworklight-testapp.git`
	- `cd dworklight-testapp`
3. Install external required packages
	- `npm install`
4. Put required modules in the right places
	- `grunt bower`

You are now installed.  From here, you can either opt to use Worklight Studio or continue on the command line.

Using Worklight Studio

1. Import the new project into Worklight Studio
	- Select *File > Import > Existing project into Workspace*
	- Select root directory of **~/dev/workspace/dworklight-testapp**
5. Perform a Build and Deploy all
	- Right-click **/apps/DWorklightApp**
	- Select *Run > Build All and Deploy*.
6. Run the App
	- Worklight Simulator:
		- Right-click the **dworklight-testapp**
		- Select **Open Worklight Console**
		- Pick a preview environment (eye icon)
	- Android Emulator
		- Locate the **dworklight-testappDWorklightAppAndroid** project
		- Right-click *Run As > Android App*
		- You may want to alter the Run Configuration to select target on each run.
	- IOS Simulator (Requires OSX and XCode)
		- Right-click **/apps/DWorklightApp/ipad**  (or iphone)
		- Select *Run As > XCode project*
		- Once XCode is running, Click run icon on desired target emulation

Using Command Line

1. Build and Deploy the Worklight App.


## Documentation

See [dcordova](https://github.com/ibm-dojo/dcordova) and [dworklight](https://github.com/ibm-dojo/dworklight) for information on the modules being exercised.


## Credits
* Karl Bishop (IBM CCLA)
