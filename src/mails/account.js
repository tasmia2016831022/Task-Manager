const mailjet = require("node-mailjet");



const SendWelcome = async (email,name)  => {
  let mail = await mailjet.connect(
      process.env.MAILJET_PRIVATE_API, process.env.MAILJET_PUBLIC_API
    );

  const request = await mail.post("send", { version: "v3.1" }).request({
    "Messages":[
      {
        "From": {
          "Email": "tasmia.alamgir@pathao.com",
          "Name": "Tasmia"
        },
        "To": [
          {
            "Email": email,
            "Name": name
          }
        ],
        "Subject": "Greetings from TEST.",
        "TextPart": "My first Mailjet email",
        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
        "CustomID": "AppGettingStartedTest"
      }
    ]
  });
  
  try {
    console.log(request.body);
  } catch (error) {
    console.log({error:error.messages, code: error.statusCode})
  }
};

const SendBye = async (email, name) => {
  let mail = await mailjet.connect(
    process.env.MAILJET_PRIVATE_API, process.env.MAILJET_PUBLIC_API
  );

const request = await mail.post("send", { version: "v3.1" }).request({
  "Messages":[
    {
      "From": {
        "Email": "tasmia.alamgir@pathao.com",
        "Name": "Tasmia"
      },
      "To": [
        {
          "Email": email,
          "Name": name
        }
      ],
      "Subject": "GOODBYE from TEST.",
      "TextPart": "GOODBYE email",
      "HTMLPart": "<h3>Dear , welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
});

try {
  console.log(request.body);
} catch (error) {
  console.log({error:error.messages, code: error.statusCode})
}
}

module.exports = { SendWelcome, SendBye };
