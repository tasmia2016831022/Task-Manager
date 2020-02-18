const mailjet = require ('node-mailjet')
.connect('c9ca3741bf6c1e5e9151c90316ccf74e', '517ed93b2eddab79fb7f1709168956b4')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "tasmia.alamgir@pathao.com",
        "Name": "Tasmia"
      },
      "To": [
        {
          "Email": "tasmia22@student.sust.edu",
          "Name": "Tasmia"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })
