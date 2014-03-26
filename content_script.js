walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node,node.next);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.replace(/egendary\b/g, "egen...waitforit...DARY");
    var array = ["general ","major ","private ","General ","Major ","Private "]
	for (i=0;i<array.length;i++)
	{
		var a = array[i]
		var b = a.length
		var ind = v.indexOf(a);
		while (ind>=0)
		{
			p = ind+b;
			if (v.charAt(p).search(/\w/g)==0)
			{
				while ((v.charAt(p).search(/\w/g)==0)&&(p<v.length))
				{
				  p = p+1;
				}
				v = v.substr(0,p) + " *SALUTES*" + v.substr(p);
			}
			ind = v.indexOf(a, ind+b);
		}
	}
	
	textNode.nodeValue = v;
}