# Zen Food — catálogo web

Sitio estático preparado para GitHub y Vercel. La carta se lee en cada visita desde el CSV publicado de Google Sheets; también se vuelve a cargar al regresar a la pestaña y cada tres minutos mientras esté abierta.

## Publicación

1. Sube **todo este proyecto** a un repositorio de GitHub.
2. En Vercel importa el repositorio. Framework preset: `Other`. Build command: `npm run build`. Output directory: `dist`.
3. No hay variables de entorno obligatorias. `npm run dev` sirve la vista local en `http://localhost:4173`.

## Carta

La URL está en `public/app.js` (`SHEET_URL`). Columnas: `id,categoria,nombre,descripcion,opciones,precio,stock,foto,revision`. El precio se interpreta como pesos chilenos, con o sin símbolo y separador de miles. `stock = no`, `agotado`, `sin stock`, `0` o `false` impide añadir al carrito. La columna `foto` acepta una URL pública `https://`; sin URL o con enlace roto se presenta una tarjeta solo de texto, sin marco vacío. El archivo `public/catalogo-respaldo.csv` solo aparece con un aviso si falla la actualización del Sheet.

Los agregados figuran como productos independientes porque la planilla actual no vincula cada agregado a un plato ni indica reglas de compatibilidad. La columna `opciones` admite las selecciones mostradas en la carta y un campo de texto para otros casos. El pedido conserva la elección y la envía por WhatsApp. El total es estimado y no incluye despacho.

Las tres fotografías recibidas se usan solo en portada y secciones generales. No se asignan a productos específicos. Todos los archivos visuales y el logo están dentro de `public/assets/`, sin dependencias de rutas externas de Lovable.

La primera versión utiliza el precio de $15.000 de la ficha de la promo de cuatro completos. La imagen del menú original decía $12.000; se puede corregir en el Sheet. La bebida de la promo de dos completos se describe genéricamente como 350 ml porque la ficha dice Coca-Cola en el título y Fanta en el texto.
