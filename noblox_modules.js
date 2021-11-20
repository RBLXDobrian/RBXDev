const noblox = require("noblox.js");

// Login using your cookie

let thumbnails_body = await noblox.getPlayerThumbnail([2416399685, 234567, 345678], "150x200", "jpeg", false, "Body")
async function getUser(cookie) {
    if (!cookie)
        cookie = process.env.COOKIE_RBLX;
    const currentUser = await noblox.setCookie(cookie)
    console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
    return currentUser

}

async function getFriends(userId) {
    let friends = await noblox.getFriends(userId)
    console.log("friends:", JSON.stringify(friends))
    return friends

}

module.exports.getUser = getUser;

module.exports.getFriends = getFriends;