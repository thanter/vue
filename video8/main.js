Vue.component('task', {
	template: "<li><slot></slot></li>"
});


Vue.component('task-list', {
	template: `
		<div>
			<ul>
				<task v-for="task in tasks" v-text="task.description"></task>
			</ul>
		</div>
	`,

	data() {
		return {
			tasks: [
				{description: "Buy milk", completed: true},
				{description: "Learn vuejs", completed: false},
				{description: "Learn js", completed: false},
				{description: "Whatever else", completed: true},
			]
		};
	}
});




new Vue({
	el: "#root"
});