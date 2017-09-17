class Item {
	constructor(data) {
		this.data = data;
	}
	push(ref) {
		return ref.push(this.data);
	}
}

export default Item
