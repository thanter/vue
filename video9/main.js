Vue.component('my-message', {
	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    <p>{{ title }}</p>
		    <button class="delete" @click="{ isVisible = false }"></button>
		  </div>
		  <div class="message-body">
		    {{ body }}
		  </div>
		</article>
	`,

	props: ['title', 'body'],

	data() {
		return {
			isVisible: true
		}
	}
});


new Vue({
	el: "#root"
});