const Bean = require('../index.js');
const Soup = require('@stews/soup');


function BeanSub(...args) {
    args.forEach( a => this.content-=a );
}


Bean.newF("sub", BeanSub);
