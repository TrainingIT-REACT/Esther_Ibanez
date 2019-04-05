// Definimos la lista de acciones
const actions = [
    // Todos
    // "ADD_USER_SONG",
    // "ADD_USER_ALBUM",
    // "SERVER_ALBUMS",
    // "SERVER_SONGS",
  
    // Usuarios
    "SIGN_USER"
  ];
  
  // Las convertimos en un objeto
  const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });
  
  export default actionTypes;