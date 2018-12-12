# ThingComparer

Apples to Oranges: A Thing Comparer

This mobile app compares two things by using data from the Datamuse API (https://www.datamuse.com/api/) to make semi-informed comments.

## Installation

### Dependencies

Apples to Oranges relies on the [Ionic Framework](https://ionicframework.com/).
 Refer to their website for installation instructions and tutorials.
 
 Other dependencies:

To install `pluralize`, run `npm i pluralize` and `npm i @types/pluralize`.

To install `mocha`, run `npm i mocha` and `npm i --save-dev mocha`

### Running the app

#### Browser
To run the app in browser, run `ionic serve` from the project directory

#### Emulator
To run in an emulator, run `ionic cordova emulate [ios|android]`. Refer to 
[Android](https://developer.android.com/studio/run/emulator) 
and [iOS](https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/RunningintheSimulator.html)
for emulator installation instructions.

#### Mobile Device
To run the app on an Android phone, first add the android platform to cordova: `cordova platform add android`
Then connect the mobile device to your computer and run `ionic cordova run android`
