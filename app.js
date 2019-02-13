const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === "/api/add-vote") {
        res.writeHead(200, { 'Content-Type': 'Access-Control-Allow-Headers' });
        fs.readFile('vote-data.json', 'utf8', (err, data) => {
            if (err) throw err
            else {
                let votes = JSON.parse(data);
                votes.foo1 += 1;
                data = JSON.stringify(votes);
                fs.writeFile('vote-data.json', data, (err) => {
                    if (err) throw err
                    else {
                        console.log("Respond", data);
                        res.end(data)
                    };
                })
            }
        })
    }
}
);

server.listen(3000);
