(function() {
	const attribute_or = function(o,a,v) { return (o.attributes[a] || {value : v}).value; };	
	const method__grid_init = function(t,s) {
		t.style.gridTemplateColumns = attribute_or(s,'columns','');
		t.style.gridTemplateRows = attribute_or(s,'rows','');
		t.style.gridGap = attribute_or(s,'gap','');
		t.style.justifyItems = attribute_or(s,'align-x','');
		t.style.alignItems = attribute_or(s,'align-y','');
	};

	const methods = {
anchor : function() {
	for(const anc of Array.from(document.querySelectorAll('rs-anchor'))) {
		const ancref = attribute_or(anc,'ref',null);
		const ancsel = attribute_or(anc,'global','');
		const ancmul = attribute_or(anc,'multiple',null);
		if(ancref != null)
			anc.appendChild(document.getElementById(ancref));
		else
		{
			if(ancmul == 'grid') {
				anc.style.display = 'grid';
				method__grid_init(anc,anc);
				Array.from(document.querySelectorAll(ancsel)).map((node,_) => anc.appendChild(node));
			} else if(ancmul != null)
				Array.from(document.querySelectorAll(ancsel)).map((node,_) => anc.appendChild(node));
			else
				anc.appendChild(document.querySelector(ancsel));
		}
	}
},

grid : function() {
	for(const grid of Array.from(document.querySelectorAll('rs-grid')))
		method__grid_init(grid,grid);
},

button : function() {
	for(const btn of Array.from(document.querySelectorAll('rs-button'))) {
		const types = attribute_or(btn,'type','').split(' ');
		const content = btn.innerHTML;
		btn.innerHTML = "";
		const node1 = document.createElement('p');
		node1.classList.add('admonition-title');
		node1.innerHTML = content;
		const node2 = document.createElement('div');
		node2.classList.add('admonition');
		for(const type of types)
			node2.classList.add(type);
		node2.classList.add('rs-button')
		node2.appendChild(node1);
		for(const k of btn.getAttributeNames())
			if(k != 'type' && k != 'style')
				node2.setAttribute(k,btn.attributes[k].value);
		btn.style.display = 'grid';
		btn.appendChild(node2);
	}
},

schedule_list : function() {
	const week_by = function(todate) {
		return Math.floor((new Date() - new Date(todate)) / 7 / 86400 / 1000);
	};
	const parse_time = function(timestring) {
		return new Date(`01-01 ${timestring}`) - new Date('01-01 00:00');
	};
	const date_after = function(startdate,week,day,time) {
		const otime = new Date(startdate).getTime();
		return new Date(otime + (week * 7 + day) * 86400000 + time);
	};
	const course_begin_time = function(cnt) {
		return ["08:00","08:50","09:50","10:40","11:30","14:00","14:50","15:50","16:40","17:30","19:00","19:50","20:40"][cnt - 1];
	};
	const course_end_time = function(cnt) {
		return ["08:45","09:35","10:35","11:25","12:15","14:45","15:35","16:35","17:25","18:15","19:45","20:35","21:25"][cnt - 1];
	};
	const text_node = function(tag,text) {
		let node = document.createElement(tag);
		node.innerText = text;
		return node;
	};
	const wrap_node = function(type,head,body,open = true) {
		let node = document.createElement('details');
		node.classList.add(type);
		let snode = document.createElement('summary');
		snode.appendChild(head);
		node.appendChild(snode);
		node.appendChild(body);
		if(open)
			node.setAttribute('open',0);
		return node;
	};
	const large_center_div = function(body) {
		let node = document.createElement('div');
		node.style.cssText = 'text-align:center;font-size:large';
		node.innerHTML = body;
		return node;
	}
	let latest_node = null;
	for(const sch_list of Array.from(document.querySelectorAll('rs-schedule'))) {
		const semester = attribute_or(sch_list,'name','');
		const startDate = `${attribute_or(sch_list,'startDate','')} 00:00`;
		const week_delta = parseInt((new URLSearchParams(window.location.href.split('?')[1])).get('week') || '0');
		console.log(week_delta);
		const week_count = week_by(startDate) + 1 + week_delta;
		let in_week_courses = [];
		for(const course of Array.from(sch_list.querySelectorAll('rs-course'))) {
			const name = attribute_or(course,"name","");
			const place = attribute_or(course,"place","");
			for(const duration of Array.from(course.querySelectorAll('rs-duration'))) {
				const weekBegin = parseInt(attribute_or(duration,"weekBegin","1"));
				const weekEnd = parseInt(attribute_or(duration,"weekEnd","16"));
				const weekStep = parseInt(attribute_or(duration,"weekStep","1"));
				const day = parseInt(attribute_or(duration,"day","1"));
				const classBegin = parseInt(attribute_or(duration,"classBegin","1"));
				const classEnd = parseInt(attribute_or(duration,"classEnd","13"));
				if(week_count < weekBegin || week_count > weekEnd)
					continue;
				if((week_count - weekBegin) % weekStep != 0)
					continue;
				in_week_courses.push({
					name : name,
					place : place,
					day : day,
					classBegin : classBegin,
					classEnd : classEnd
				});
			}
		}
		in_week_courses.sort(function(x,y) {
			return (x.day - y.day) * 20 + (x.classBegin - y.classBegin);
		});
		sch_list.appendChild(text_node('h2',`${semester} 第${week_count}周`));
		for(const course of in_week_courses) {
			if(new Date() > date_after(startDate,week_count - 1,course.day - 1,parse_time(course_end_time(course.classEnd)))) {
				const node = wrap_node('success',large_center_div(`${course.name}<br/><code>${course.place}</code>`),
					large_center_div(`<strong>${date_after(startDate,week_count - 1,course.day - 1,0).toLocaleDateString()} 周${["日","一","二","三","四","五","六"][course.day]} ${course.classBegin}~${course.classEnd}课</strong>`),
					false);
				sch_list.appendChild(node);
				latest_node = node;
			} else if(new Date() >= date_after(startDate,week_count - 1,course.day - 1,parse_time(course_begin_time(course.classEnd)))) {
				const node = wrap_node('danger',large_center_div(`${course.name}<br/><code>${course.place}</code>`),
					large_center_div(`<strong>${date_after(startDate,week_count - 1,course.day - 1,0).toLocaleDateString()} 周${["日","一","二","三","四","五","六"][course.day]} ${course.classBegin}~${course.classEnd}课</strong>`),
					true);
				sch_list.appendChild(node);
				latest_node = node;
			} else if(new Date() >= date_after(startDate,week_count - 1,course.day - 1,parse_time(course_begin_time(course.classEnd)) - 2400000)) {
				const node = wrap_node('warning',large_center_div(`${course.name}<br/><code>${course.place}</code>`),
					large_center_div(`<strong>${date_after(startDate,week_count - 1,course.day - 1,0).toLocaleDateString()} 周${["日","一","二","三","四","五","六"][course.day]} ${course.classBegin}~${course.classEnd}课</strong>`),
					true);
				sch_list.appendChild(node);
			} else {
				const node = wrap_node('abstract',large_center_div(`${course.name}<br/><code>${course.place}</code>`),
					large_center_div(`<strong>${date_after(startDate,week_count - 1,course.day - 1,0).toLocaleDateString()} 周${["日","一","二","三","四","五","六"][course.day]} ${course.classBegin}~${course.classEnd}课</strong>`),
					true);
				sch_list.appendChild(node);
			}
		}
	}
	window.scrollTo({
		top : (latest_node || {offsetTop : 0}).offsetTop,
		left : 0,
		behavior : "smooth"
	});
},
	};

	const node = document.querySelector('rs-settings');
	if(node != null) {
		const en = attribute_or(node,'enable',null);
		const dis = attribute_or(node,'disable','');
		console.log(en,dis);
		if(en != null) {
			const enlist = en.split(',').map((i,_) => i.trim());
			for(const k of Object.keys(methods))
				if(enlist.includes(k))
					methods[k]();
		} else {
			const dislist = dis.split(',').map((i,_) => i.trim());
			for(const k of Object.keys(methods))
				if(!dislist.includes(k))
					methods[k]();
		}
	} else
		for(const fn of Object.values(methods))
			fn();
})();
