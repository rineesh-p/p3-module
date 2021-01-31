import Phaser from "../lib/phaser";
import Title from "./scenes/title";
import Info from "./scenes/info";

export class Game {
  private game: Phaser.Game;
  
  public start() {
    const game = new Phaser.Game({
      width: 1080,
      height: 768,
      type: Phaser.AUTO,
      parent: "game-container",
    });

    game.scene.add("title", Title, true);
    game.scene.add("info", Info);

    this.game = game;
  }
}
