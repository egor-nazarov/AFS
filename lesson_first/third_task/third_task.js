function fileConverter()
{
    const fs = require("fs");
    let inputFile = "example.txt";
    console.time("Время конвертации файла");
    fs.readFile(inputFile, "utf8", (err, data) => {
       if (err) {
           console.log(err.message);
       } else {
           let trimmedData = data.replace(/\s+/g, ' ');
           fs.writeFile("converted_" + inputFile, trimmedData, 'utf8', (outputErr, outputData) => {
               if (outputErr) {
                   console.log(outputErr);
               } else {
                   return outputData;
               }
           });
       }
    });
    console.timeEnd("Время конвертации файла");
}
fileConverter();