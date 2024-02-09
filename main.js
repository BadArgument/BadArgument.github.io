(function(){
	var k = Array.from(document.getElementsByClassName('_g_text'));
	for(let r of k){
		var p = document.createElement('div');
		p.classList += ['textbox wrapper'];
		p.style += r.style;
		var q = document.createElement('div');
		q.classList += ['textbox background'];
		p.appendChild(q);
		var s = document.createElement('div');
		s.classList += ['textbox content']
		s.innerHTML = r.innerHTML;
		q.appendChild(s);
		r.outerHTML = p.outerHTML;
	}
})();
(function(){
	var k = Array.from(document.getElementsByClassName('_g_image'));
	for(let r of k){
		var p = document.createElement('div');
		p.classList += ['imagebox background'];
		p.style += r.style;
		var q = document.createElement('img');
		q.classList += ['imagebox content'];
		q.src = r.src;
		p.appendChild(q);
		var s = document.createElement('p');
		s.classList += ['imagebox text'];
		s.innerHTML = r.alt;
		p.appendChild(s);
		r.outerHTML = p.outerHTML;
	}
})();
