function Dog(weight){
	this.stomach = [];
	this.weight = weight;
}

Dog.prototype.eat = function(cat) {
	this.stomach.push(cat);
};

/*

nhớ lại kiến thức:

git checkout -- ten file
xóa code vừa viết ở trạng thái working directory nhưng phải là file modifiled

git reset HEAD ten file
chuyển 1 file ở trạng thái staging area về working directory

git checkout -b ten-branch
tạo ra 1 branch mới đồng thời chuyển sang branch mới vừa tạo

git branch 
để kiểm tra xem đang ở branch nào

git checkout ten-branch
để chuyển sang một branch cần chuyển

git merge ten-branch
để thêm file, thêm code vào branch master (nhớ là phải chuyển về branch master)

git branch -D ten-branch
xóa brand phụ

*/