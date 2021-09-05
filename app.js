const app = Vue.createApp({
	// data, functions
	// template: "<h2>I am the template</h2>",
	data() {
		return {
			title: "The Last Empires",
			author: "Brandon Sanders",
			age: 45,
			showBooks: false,
			x: 0,
			y: 0,
			styleObject: {
				background: `rgb(0,0,0)`,
			},
			books: [
				{
					id: 1,
					isFav: true,
					title: "book one",
					author: "author one",
					img: "https://source.unsplash.com/random",
				},
				{
					id: 2,
					isFav: true,
					title: "book two",
					author: "author two",
					img: "https://source.unsplash.com/random",
				},
				{
					id: 3,
					isFav: false,
					title: "book three",
					author: "author three",
					img: "https://source.unsplash.com/random",
				},
			],
			url: "http://www.thenetninja.co.uk",
		};
	},
	methods: {
		changeTitle() {
			console.log("click");
			this.title = "New Book Title";
		},
		changeTitles(title) {
			this.title = title;
		},
		toggle() {
			this.showBooks = !this.showBooks;
		},
		handleEvent(e, value) {
			if (e.type === "dblclick") {
				console.log("double click");
			}
			if (e.type === "mouseleave") {
				console.log("mouse leave");
			}
			if (e.type === "mouseover") {
				console.log("mouse enter");
			}
			if (value) {
				console.log("value", value);
			}
		},
		handleMousemove(e) {
			this.x = e.offsetX;
			this.y = e.offsetY;
			this.styleObject.background = `rgba(${this.x / 4},${this.x},${this.y})`;
			console.log("x: ", this.x);
			console.log("y", this.y);
			console.log("style", this.styleObject);
		},
		toggleFav(id) {
			const editedArray = this.books.map((book) => {
				if (book.id === id) {
					return {
						...book,
						isFav: !book.isFav,
					};
				}
				return book;
			});
			this.books = editedArray;
		},
        toggleFav2(book){
            book.isFav = !book.isFav
        },
	},
    computed:{
        filteredBooks(){
            return this.books.filter(book=> book.isFav === true)
        }
    }
});

app.mount("#app");
