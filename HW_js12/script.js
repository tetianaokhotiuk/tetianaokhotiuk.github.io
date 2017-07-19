
var myData = {
	name: 'Okhotiuk Tetiana',
	photo: {
		src: '"CSS/tank.jpg"',
		alt: "it's me"
	},
	p: 'Financial analyst',
	title: 'Learning Front-end because of:',
	items: ['interesting','well-paid','Promisingly'],
	phone : {
		title: "Phone number:",
		number: "+380976722475"
	},
	vk: {
		title: 'Vkontakte profile:',
		link: 'https://vk.com',
		text: 'vk.com'
	},
	p2: {
		title: 'feedback:',
		text: 'Can cteate html page if needs'
	}
};

var parent = document.getElementById('myProfile');

var source = document.getElementById('profile').textContent,
template = _.template(source);

parent.innerHTML += template(myData);





