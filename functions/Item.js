module.exports = function(ref,data){
	this.push = function(){
		var newItem = ref.push(data);
		return newItem;
	}
	this.set = function(key){
		var newItem = ref.child(key).set(data);
		return newItem
	}
}
