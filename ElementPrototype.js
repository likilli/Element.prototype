Element.prototype.before = function(node)
{
	var frag = new DocumentFragment

	for(var node of arguments)
	{
		if (typeof node == "string")
		{
			node =/^<\w+>$/.test(node)
				? this.document.createElement()
				: new Text(node)
		}
		fragm.append(node)
	}
	this.parentNode.insertBefore(frag, this)
}
