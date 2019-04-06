import * as PIXI from 'pixi.js';

import * as testMap from './resources/maps/test.json';
import { buildMapContainer } from './build-map-container';

//Create a Pixi Application
let app = new PIXI.Application({width: 1024, height: 768});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.loader
  .add('resources/images/tile.png')
  .load(start);

function start() {
  app.stage.addChild(buildMapContainer(testMap));
}