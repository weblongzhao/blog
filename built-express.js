const execa = require('execa');
const Listr = require('listr');

new Listr([
	  {
		      title: 'install express',
		      task: () => execa('npm', ['install',"--save express"])
		    },{
		title:'install express-generator',
		task:()=>execa("npm",['install','express-generator','-g'])	    
	  },
	  {
		      title: 'built express pro',
		      task: () => execa('express', ['-H','-f'])
		    },
	  {
		      title: 'install express dev',
		      task: () =>
		          execa('npm', ['install'])
		          .catch(() => task.skip())
		    }
]).run();










