var cnt=1;
		function add(a){
			var div=document.createElement("div");
			var addTextBox=document.createElement("input");
			var addButton=document.createElement("button");
			var remButton=document.createElement("button");
			var t = a.parentNode;

			div.setAttribute("id","mydiv"+cnt);
			addButton.setAttribute("onclick","add(this)");
			remButton.setAttribute("onclick","del(this)");
			addButton.innerHTML="+";
			remButton.innerHTML="-";
			div.appendChild(addTextBox);
			div.appendChild(addButton);
			div.appendChild(remButton);
			t.appendChild(div);
			cnt++;
		}	

		function del(a){
			var t= a.parentNode;
			t.removeChild(t.childNodes[0]);  
			t.removeChild(t.childNodes[1]);  
			t.removeChild(t.childNodes[0]);
		}