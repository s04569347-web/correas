/* Sin base de datos: los pedidos se envían directo a WhatsApp. Stub para no romper llamadas antiguas. */
const SupabaseCliente={registrarEvento:function(){},guardarPedido:function(){return Promise.resolve({ok:true,omitido:true});},obtenerStockActual:function(){return Promise.resolve(null);}};
