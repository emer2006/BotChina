let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- Nombre
let pp = './Menu2.jpg'
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `
β’ @${wm.split`@`[0]} β’
------- ${wm} -------
`

//------------ BIO
let teksbio = `
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ π²ππ΄π°π³πΎπ π΄π wa.me/51994156047*
*ββ π΄π» π½ππΌπ΄ππΎ π³π΄ πΌπΈ π²πΎπ»π»π°π±πΎππ°ππΎπ wa.me/51932979932*

βββββββ[ INFORMACIΓN DEL BOT ]βββββββ

β *NOMBRE: CharlieBot*
π *Github:* https://github.com/aleizn
π₯ *Whatsapp* wa.me/51994156047

`
  let teks = ' '
const sections = [
   {
	title: ` OWNER`,
	rows: [
	    {title: "|π°| INFORMACION COMPLETA", rowId: ".owner bio"},
	{title: "|π‘οΈ| ESTADO DEL BOT", rowId: ".estado"},
	{title: "|π¦| MINECRAFT SERVER", rowId: ".mc-server"},
	{title: "|βΉοΈ| SCRIPT", rowId: ".sc"}
	]
    },{
	title: `${htjava} OTROS  βββββββΒ·β’`,
	rows: [
	    {title: "πΉ β’ Donar", rowId: ".donar"},
	{title: "π β’ Grupos", rowId: ".grupos"},
	{title: "π β’ Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: `β mirar la info completa de los creadores`,
  footer: wm,
  title: `${comienzo} *OWNER INFO* ${fin}`,
  buttonText: "seleccione aqui",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, wm, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, pp, "https://wa.me/51994156047 π¬ α΄Κα΄α΄s", null,null, [["Charlie", null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`β?β° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
