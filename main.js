const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Kunoichi/Idle.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Walk.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Run.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Attack_1.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Attack_2.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Cast.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Jump.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Hurt.png");
ASSET_MANAGER.queueDownload("./Kunoichi/Dead.png");

ASSET_MANAGER.downloadAll(() => {

	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new boss(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
