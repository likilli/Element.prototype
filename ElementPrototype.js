Element.prototype.before = function(node)
{
	var frag = new DocumentFragment

	for (var node of arguments)
	{
		if (typeof node == "string")
		{
			node = /^<\w+>$/.test(node)
				? this.ownerDocument.createElement(node.slice(1, -1))
				: new Text(node)
		}

		frag.append(node)
	}

	this.parentNode.insertBefore(frag, this)
}
Element.prototype.remove = function()
{
		if (this.parentNode)
	 	this.parentNode.removeChild(this)
}