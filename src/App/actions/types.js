// Definimos la lista de acciones
const actions = [
    // Usuarios
    "SIGN_USER",
    "ADD_ALBUM",
    "ADD_SONG",
    
    //SERVER
    "ALBUMS",
    "SONGS",

    //PLAYER
    "PLAY_SONG",
  ];
  
  // Las convertimos en un objeto
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });
  
  export default actionTypes;