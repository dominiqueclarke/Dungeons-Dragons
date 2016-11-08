const dungeonCtrl = require("./dungeonCtrl");

module.exports = app => {

    app.route("/api/dungeons")
        .get(dungeonCtrl.getDungeons)
        .post(dungeonCtrl.postDungeon);

    app.route("/api/dungeons/:id")
        .get(dungeonCtrl.getDungeonById);

}
