import Phaser from "../../lib/phaser";
import { Logger } from "logger";

class Info extends Phaser.Scene {
  preload() {
    Logger.log("Loading info scene assets");
  }

  create() {
    Logger.log("Creating info scene");

    const button = this.add.sprite(
      0,0,
      "blue-button"
    );
    button.scale = 0.2;
    button.setInteractive().on("pointerdown", () => {
      this.game.scene.stop("info");
      this.game.scene.start("title");
    });
    button.setPosition(
      (this.game.scale.width - button.displayWidth) / 2,
      this.game.scale.height - button.displayHeight
    );

    console.log(button);
  }
}

export default Info;
