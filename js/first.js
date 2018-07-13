	var tb = (function(){
		
		var tbody = document.querySelector('.tbody');
		var mb = document.querySelector('.mb');
		var qr = document.getElementById('queren');
		var qx = document.getElementById('cancal');
		return{
			init(){
				this.events();
				this.getData();
			},
			events(){
				tbody.onclick = function(e){
					e = e || window.event;
					target = e.target || e.srcElement;
					if(target.nodeName == 'BUTTON'){
						
						mb.style.display = 'block';
						qr.onclick = function(){
							
						}
						qx.onclick = function(){
							mb.style.display = 'none';
						}
					}
				}
			},
			getData(){
				var xhr = new XMLHttpRequest();
				xhr.open('get','json/mod.json',true);
				xhr.send(null);
				xhr.onreadystatechange = function(json){
					
					if(xhr.readyState == 4){
						var data = JSON.parse(xhr.responseText);
						var frag = document.createDocumentFragment();
						for(var i=0;i<data.length;i++){
							var _tr = document.createElement('tr');
							for(var j in data[i]){
								var _td = document.createElement('td');
								_td.innerHTML = data[i][j];
								_tr.appendChild(_td);
							}
							del = document.createElement('button');
							del.className = 'delbtn';
							del.innerHTML = '删除';
							_tr.appendChild(del);
							frag.appendChild(_tr);
						}
						tbody.appendChild(frag);
					}
					
				}
				
			}
		}
	})();
	tb.init();