class FreddyFivebearExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'freddyfivebear',
            name: 'Freddy Fivebear',
            color1: '#FF5722',
            color2: '#E64A19',
            color3: '#D84315',
            blocks: [
                {
                    opcode: 'newFreddy',
                    blockType: 'command',
                    text: 'new Freddy'
                },
                {
                    opcode: 'textFreddy',
                    blockType: 'reporter',
                    text: 'text Freddy'
                }
            ]
        };
    }

    newFreddy() {
        console.log('Freddy Fivebear has entered the stage! 👀');

    }

    textFreddy() {
        const messages = [
            "I'm watching you...",
            "Dinner time!",
            "Five more nights...",
            "Behind you..."
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }
}

// Required: export the class
export default FreddyFivebearExtension;
