async function userGet(db, userId){
    return db.get('SELECT * FROM user WHERE id = ?', userId)
}

module.exports = {userGet}