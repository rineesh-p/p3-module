/// <reference path="../phaser/types/phaser.d.ts" />

import { Logger } from "./logger";
import * as Phaser from 'phaser';

Logger.log ("Initializing..");

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
    var graphics = this.add.graphics();
Logger.log ("Creating..");
    graphics.fillStyle(0xffffff);

    //  Draw random stars

    for (var i = 0; i < 60; i++)
    {
        graphics.fillRect(Phaser.Math.Between(32, 736), Phaser.Math.Between(260, 580), 2, 2);
    }

    graphics.lineStyle(2, 0x0000ea);

    //  ST
    graphics.beginPath();
}