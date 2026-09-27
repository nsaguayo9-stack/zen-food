import fs from 'node:fs/promises';
await fs.rm('dist',{recursive:true,force:true}); await fs.cp('public','dist',{recursive:true});
console.log('Sitio generado en dist/');
