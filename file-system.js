// ФАЙЛОВАЯ СИСТЕМА В NODE.JS, работа с файлами, папками



// импорт модуля node.js для работы с файловой системой

const fs = require('fs');

// метод readFile - метод для получения содержимого файла, метод принимает
// три аргумента: путь к файлу, uft8 - ключ для кодировки(чтобы пришла строка)
// и callback функцию, которая принимает error и data

fs.readFile('./text.txt', 'utf8', (error, data) => {
    let firstValue = data;

    // создание папки методом mkdir('путь', callback)
    console.log('файл прочитан')

    fs.mkdir('./txt-files', () => {

        console.log('создание папки')


        // запись файла
        // метод writeFile - принимает три аргумента : путь к файлу, данные, которые буду записаны,
        // callback функция

        fs.writeFile('./txt-files/writed-text-file.txt', `${firstValue} Но немного обновлённый`, (error, data) => {
            console.log('файл успешно записан!');
        });
    });


});


// можно использовать методы с припиской Sync - делает метод синхронным
// т.e методы будут испольняться по очереди

// методы удаления файлов/папок

// unlink - удалить файл, rmdir - удалить папку

setTimeout(() => {
    console.log('удаление началось...')
    if(fs.existsSync("./text.txt")) {
        fs.unlink('./text.txt', () => {
            console.log('файл удалён text.txt')
        });
    }
}, 4000);

setTimeout(() => {
    if(fs.existsSync("./txt-files/writed-text-file.txt")) {
        fs.unlink('./txt-files/writed-text-file.txt', () => {
            console.log('файл удалён writed-text-file.txt')
        });
    }
    setTimeout(() => {
        if(fs.existsSync("./txt-files")) {
            fs.rmdir('./txt-files', () => {
                console.log('созданная папка удалена')
            });
        }
    }, 10000)
}, 8000);

// fs.rmdir('./examples', (error, data) => {
//     error ? console.log(error) : null
// })

// нельзя удалить если есть содержмое в папке
