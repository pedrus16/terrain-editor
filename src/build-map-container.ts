import * as PIXI from 'pixi.js';

import { Map } from './map.interface';

export function buildMapContainer(map: Map): PIXI.Container {
  const container = new PIXI.Container();

  const tile = new PIXI.Sprite(PIXI.loader.resources['resources/images/tile.png'].texture);
  for (let i = 0; i < map.width * map.height; i++) {
    container.addChild(tile);
  }

  return container;
}