# dworklight-testapp
This project contains a Worklight Project/App that exercises the dworklight and dcordova modules.

## Status

No official release yet.

## Licensing

This project is distributed by the Dojo Foundation and licensed under the Dojo dual license [BSD/AFLv2 license](http://dojotoolkit.org/license).
All contributions require a [Dojo Foundation CLA](http://dojofoundation.org/about/claForm).

## Dependencies

This project requires the following other projects to run. All are included with this project.
 * dojo
 * dijit
 * dojox/mobile
 * dapp
 * dcordova
 * dworklight

## Installation

Manual installation procedure:
1. Install this project into your Worklight Studio workspace by cloning from github
	- cd ~/dev/workspace
	- git clone git://github.com/kfbishop/dworklight-testapp.git
2. Update submodule dependencies from git
	- cd dworklight-testapp
	- git submodule init
	- git submodule update
4. Import the new project into Worklight Studio
	- File > Import > Existing project into Workspace
	- Select root directory of ~/dev/workspace/dworklight-testapp
5. Perform a Build and Deploy all
6. Install onto desired device and run.

You may wish to occasionally run the following commands to ensure you have the latest commits of the dependent modules.
1. From the project root:
	- `git submodule update`
2. From each of the following submodule dirs (dapp,dcordova,dworklight) under: `apps/DworklightApp/common/lib`
	- `git merge origin/master`


## Documentation

See [dcordova](https://github.com/ibm-dojo/dcordova) and [dworklight](https://github.com/ibm-dojo/dworklight) for information on the modules being exercised.


## Credits
* Karl Bishop (IBM CCLA)
