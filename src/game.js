var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default:'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var platforms
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', '/assets/sky.png');
    this.load.image('plarform', '/assets/platform.png');
    this.load.image('star', '/assets/star.png');
    this.load.image('bomb', '/assets/bomb.png');
    this.load.spritesheet('dude', '/assets/dude.png', 
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(400, 300, 'sky');
    platforms = this.physics.add.staticGroup();
    
    platforms.create(400,568,'plarform').setScale(2).refreshBody();
    platforms.create(600,400,'plarform')
    platforms.create(50,250,'plarform')
    platforms.create(750,220,'plarform')
}
function update ()
{
}
