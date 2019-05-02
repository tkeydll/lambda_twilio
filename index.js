const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const telFrom = process.env.TWILIO_TEL_FROM;
const callTo = process.env.TWILIO_CALL_TO;
const voiceXml = process.env.VOICE_XML;

const client = require('twilio')(accountSid, authToken);

exports.handler = (event, context, callback) => {
    console.log(event);

    let clickType = event.deviceEvent.buttonClicked.clickType;
    console.log(`ClickType: ${clickType}`);
    console.log(`Using message template ${voiceXml}`);
    console.log(`Callig to ${callTo}...`);

    client.calls.create({
            url: voiceXml,
            to: callTo,
            from: telFrom,
        },
        (err, call) => {
            console.log(call);
        }
    );

    callback(null, 'Success.');
};