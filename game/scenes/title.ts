import Phaser from "../../lib/phaser";
import { Logger } from "logger";

class Title extends Phaser.Scene {
  // overriden
  preload() {
    this.load.image("blue-button", "assets/images/blue-button.png");
  }

  // overriden
  create() {
    Logger.log("Creating title scene");

    const button = this.add.sprite(0, 0, "blue-button");
    button.scale = 0.2;
    button.setInteractive().on("pointerdown", () => {
      this.game.scene.stop("title");
      this.game.scene.start("info");
    });
    button.setPosition(
      (this.game.scale.width - button.displayWidth) / 2,
      (this.game.scale.height - button.displayHeight) / 2
    );
  }
}

export default Title;
