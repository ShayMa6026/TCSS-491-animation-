class boss {
    constructor(game, x, y) {

        this.game = game;
        this.state = 0; // 0 = idle, 1 = walk, 2 = run, 3 = attack_1, 4 = attack_2, 5=  cast, 6 = jump, 7 = hurt, 8 = dead
        this.facing = 0; // 0 = right, 1 = left
        this.hitCount = 0; // take up to 10 hits
        this.dead = false;

        this.x = 0;
        this.y = 0;

        this.animations = []; // [state][facing]
        this.loadAnimations();
    };

    loadAnimations() {

        let numFacing = 2;
        let numState = 9;
        for (var i = 0; i < numState; i++) {
            this.animations.push([]);
            for (var j = 0; j < numFacing; j++) {
                this.animations[i].push([]);
            }
        }

        this.animations[0][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Idle.png"), 0, 0, 128, 128, 9, 0.15, false, true);
        this.animations[0][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Idle.png"), 0, 0, 128, 128, 9, 0.15, false, true);

        this.animations[1][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Walk.png"), 0, 0, 128, 128, 8, 0.15, false, true);
        this.animations[1][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Walk.png"), 0, 0, 128, 128, 8, 0.15, false, true);

        this.animations[2][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Run.png"), 0, 0, 128, 128, 8, 0.1, false, true);
        this.animations[2][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Run.png"), 0, 0, 128, 128, 8, 0.1, false, true);

        this.animations[3][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Attack_1.png"), 3, 0, 128, 128, 6, 0.15, false, true);
        this.animations[3][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Attack_1.png"), 3, 0, 128, 128, 6, 0.15, false, false);

        this.animations[4][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Attack_2.png"), 0, 0, 128, 128, 6, 0.12, false, true);
        this.animations[4][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Attack_2.png"), 0, 0, 128, 128, 6, 0.12, false, false);

        this.animations[5][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Cast.png"), 0, 0, 128, 128, 6, 0.15, false, true);
        this.animations[5][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Cast.png"), 0, 0, 128, 128, 6, 0.15, false, false);

        this.animations[6][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Jump.png"), 0, 0, 128, 128, 10, 0.15, false, true);
        this.animations[6][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Jump.png"), 0, 0, 128, 128, 10, 0.15, false, false);

        this.animations[7][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Hurt.png"), 0, 0, 128, 128, 2, 0.2, false, true);
        this.animations[7][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Hurt.png"), 0, 0, 128, 128, 2, 0.2, false, false);

        this.animations[8][0] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Dead.png"), 0, 0, 128, 128, 5, 0.3, false, true);
        this.animations[8][1] = new animator(ASSET_MANAGER.getAsset("./Kunoichi/Dead.png"), 0, 0, 128, 128, 5, 0.3, false, false);
    };

    update() {
        //this.x += this.speed * this.game.clockTick;
    };

    draw(ctx) {
        if (this.dead) {

        } else {
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
            this.animations[1][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 100);
            this.animations[2][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 200);
            this.animations[3][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 300);
            this.animations[4][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 400);
            this.animations[5][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 500);
            this.animations[6][this.facing].drawFrame(this.game.clockTick, ctx, this.x, 600);
            this.animations[7][this.facing].drawFrame(this.game.clockTick, ctx, 200, 0);
            this.animations[8][this.facing].drawFrame(this.game.clockTick, ctx, 200, 100);
        }
    };
}