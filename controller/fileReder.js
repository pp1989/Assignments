const axios = require('axios');
const fs = require('fs')
const http = require('http')
// const stream = require('stream')

module.exports = {

    //Exercise-1 

    fileReaderMethod: async (req, res) => {
        try {
        const file = fs.createWriteStream("book.txt");
        http.get("http://norvig.com/big.txt", response => {
            var stream = response.pipe(file);

            stream.on("finish", function () {
                console.log("done");
                requireFile().then(result => res.status(200).send({ result })).catch(err => {
                    console.log('some error occured');
                    res.status(400).send({ err: 'Found Error' })
                })
            });

        });

        const requireFile = async () => {
            const temp = {}
            const data = fs.readFileSync('./data1.txt', 'utf-8');
            const wordsCount = data.split(" ").length
            const count10Words = data.split(" ", 10)
            console.log({ temp })
            console.log(JSON.parse(JSON.stringify(temp)))
            count10Words.forEach(element => {
                (temp[element] = element)
            });

            const len = data.length;
            return ({ wordsCount, count10Words, "JSON": JSON.parse(JSON.stringify(temp)) });
        };
    } catch (error) {
       res.status(400).send({message:"unable to procced your request"})     
    }

    },

    // Exercise-2
    getUser: async (req, res) => {
        try {
            const json = fetch("https://randomuser.me/api");
            json.then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data.results);
                const finalResult = data.results.map((ele, index) => {
                    return ({
                        Name: ele.name.title + " " + ele.name.first + " " + ele.name.last,
                        DOB: new Date(ele.dob.date).getFullYear() + "-" + new Date(ele.dob.date).getMonth() + "-" + new Date(ele.dob.date).getDate(),
                        Email: ele.email
                    })
                })
                res.status(200).send({ finalResult, message: "successful" })
            });
        } catch (error) {
            res.status(400).send({ error })
        }
    }
}
