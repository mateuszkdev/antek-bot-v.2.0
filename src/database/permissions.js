module.exports.permissions = (message, snap) => function permissions(permissja){

    switch(permissja){
        case 'admin': if(!message.member.hasPermission("ADMINISTRATOR")) {
            return snap('Brak uprawnien', 'Ta komenda wymaga uprawnien admina: `ADMINISTRATOR`')
        } else {
            return
        }
        case 'moderator': if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MANAGE_MEMBERS")){
            return snap('Brak uprawnien', 'Ta komenda wymaga uprawnien moderator: `MANAGE_MESSAGES` lub `MANAGE_MEMBERS`')
        } else {
            return 
        }
    }

}