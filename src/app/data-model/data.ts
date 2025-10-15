export const data = {
    type: 'http-polling',
    header: {
        type: 'header',
        title: 'Hitting Http End Point On An Interval',
    },
    buttons: {
        type: 'buttons',
        buttons: [
            {
                type: 'button',
                ariaLabel: 'start http request',
                label: 'Start Polling',
            },
            {
                type: 'button',
                ariaLabel: 'stop http request',
                label: 'Stop Polling',
            },
        ],
    },
    radioButtons: {
        type: 'radio-buttons',
        buttonsType: 'radio',
        groupName: 'type',
        buttons: [
            {
                type: 'radio-button',
                label: 'Cats',
                value: 'cats',
                id: 'cats-check-box',
                checked: true,
            },
            {
                type: 'radio-button',
                label: 'Meats',
                value: 'meats',
                id: 'meats-check-box',
            },
        ],
    },
    richTexts: {
        type: 'rich-texts',
        texts: [
            {
                type: 'rich-text',
                text: 'Select Cats or Meats and start polling! The Cats option will request random <a href="https://plackitten.com">place kitten</a> images, and the meats option will request random blocks of <a href="https://baconipsum.com/json-api/">bacon-ipsum</a>',
            },
            {
                type: 'rich-text',
                text: 'Polling Status: <span id="polling-status"> Stopped </span>',
            },
        ],
    },
};
