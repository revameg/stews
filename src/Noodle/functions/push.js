const Noodle = require('../index.js');
const Soup = require('@stews/soup');


function NoodlePush(entry, value=null) {
	let stuff = Soup.from(this.content);
		stuff.push(value);
		return this.content = stuff.join("");
}


Noodle.newF("push", NoodlePush);
Noodle.newF("push_back", NoodlePush);
