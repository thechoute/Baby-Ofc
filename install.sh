#!/usr/bin/bash
echo -e '\e[1;32m
▀█▀ █▀▀▄ █▀▀ ▀▀█▀▀ █▀▀█ █── █▀▀█ █▀▀▄ █▀▀▄ █▀▀█ 　 ░█▀▄▀█ █▀▀█ █▀▀▄ █──█ █── █▀▀█ █▀▀ 
░█─ █──█ ▀▀█ ──█── █▄▄█ █── █▄▄█ █──█ █──█ █──█ 　 ░█░█░█ █──█ █──█ █──█ █── █──█ ▀▀█ 
▄█▄ ▀──▀ ▀▀▀ ──▀── ▀──▀ ▀▀▀ ▀──▀ ▀──▀ ▀▀▀─ ▀▀▀▀ 　 ░█──░█ ▀▀▀▀ ▀▀▀─ ─▀▀▀ ▀▀▀ ▀▀▀▀ ▀▀▀ 
░█▄─░█ █▀▀ █▀▀ █▀▀ █▀▀ █▀▀█ █▀▀█ ─▀─ █▀▀█ █▀▀ 
░█░█░█ █▀▀ █── █▀▀ ▀▀█ █▄▄█ █▄▄▀ ▀█▀ █──█ ▀▀█ 
░█──▀█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀──▀ ▀─▀▀ ▀▀▀ ▀▀▀▀ ▀▀▀'

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install mc
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
apt-get install nmap
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm i qrcode

echo -e '\e[1;32m
Descarga Completada al 100%
Creador: Thechoute
Numero: +18299897014
Instagram: the_choute_
Youtube: https://www.youtube.com/c/thechout

Escribe node thechoute para iniciar el bot
En caso que el bot presente algun problema, comunicate con el creador su numero esta mas arriba
'
