Vue.component('task', {
	template: "<li><slot></slot></li>"
});

new Vue({
	el: "#root"
});


// OR

// new Vue({
// 	el: "#root",

// 	components: {
// 		'task': {
// 			template: "<li><slot></slot></li>"
// 		}
// 	}
// })