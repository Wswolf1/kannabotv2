let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Naylaa tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(naylaon)$/i

handler.admin = true

export default handler
