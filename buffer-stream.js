// БУФФЕР И ПОТОКИ В Node.js

// Типы потоков:

// Readable - читающий
// Writable - пишущий
// Duplex - дупклисный: когда происходит чтение и запись
// Transform - преобразующий, аналогичен дупклискному, но позволяет изменять читемые или записываемые данные



const fs = require('fs');
const zlib = require('zlib');

// читаемый поток

const readStream = fs.createReadStream('./docs/text.txt');

// пишущий поток

const writeStream = fs.createWriteStream('./docs/new-text.txt');

// преобразущий

const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//     writeStream.write('----------')
//     writeStream.write(chunk);
//     writeStream.write('----------')
// });


// readStream.pipe(writeStream); простой аналог передачи данных через пишущий поток


const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
}

readStream
    .on('error', handleError)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', handleError)