async function userGet (db, userId) {
  try {
    const res = await db.get('SELECT * FROM user1 WHERE id = ?', userId)
    return res
  } catch (err) {
    return err.message
  }
}

module.exports = { userGet }
