
import { BlockType } from 'scratch-vm/src/extension-support/constants';
import FreddyIconURL from './freddyfivebear/icon.png';
import FreddyInsetIconURL from './freddyfivebear/smol.svg';


class FreddyExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }


    getInfo() {
        return {
            id: 'freddyfivebear',
            name: 'Freddy Fivebear',
            color1: '#FF5555',        // main color for the blocks
            color2: '#CC4444',        // secondary color
            color3: '#AA3333',        // tertiary color
            blockIconURI: FreddyIconURL,
            insetIconURI: FreddyInsetIconURL,
            blocks: [
                {
                    opcode: 'newFreddy',
                    blockType: BlockType.COMMAND,
                    text: 'new Freddy',
                    func: 'newFreddy'
                },
                {
                    opcode: 'textFreddy',
                    blockType: BlockType.REPORTER,
                    text: 'text Freddy',
                    func: 'textFreddy'
                }
            ]
        };
    }



    newFreddy() {
        console.log('Freddy appears! 👀');

    }


    textFreddy() {
        const messages = [
            "I'm watching you...",
            "You can’t escape...",
            "He’s coming...",
            "Don’t look behind you..."
        ];

        return messages[Math.floor(Math.random() * messages.length)];
    }
}

export default FreddyExtension;
