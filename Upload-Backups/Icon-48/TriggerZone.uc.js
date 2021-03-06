(function() {
	TriggerZone = {
		init: function() {
			this.icon = $("appcontent").appendChild($C("hbox", {
				id: "Trigger-Zone",
				class: "toolbar",
				tooltiptext: "觸發區域",
				style: "position: fixed; right: 16px; bottom: 16px; background: -moz-linear-gradient(top, rgb(252, 252, 252) 0%, rgb(245, 245, 245) 33%, rgb(245, 245, 245) 100%); min-width: auto; max-width: 94px; border: 2px solid rgb(144,144,144); border-radius: 5px;",
			}));

			for (let i = 0, Btn; Btn = mBtns[i]; i++) {
				var BtnItem = this.icon.appendChild($C("toolbarbutton", {
					id: Btn.id,
					tooltiptext: Btn.tooltiptext,
					image: Btn.image,
					class: "toolbarbutton-1",
					oncommand: Btn.oncommand,
//					onclick: Btn.onclick,
//					onDOMMouseScroll: Btn.onDOMMouseScroll,
					onmouseover: Btn.onmouseover,
//					style: Btn.style,
				}));
			}

			var css = '\
				#Trigger-Zone {opacity: 0.2!important; -moz-transition: opacity 0.3s ease-out!important;}\
				#Trigger-Zone:hover {opacity: 1!important; -moz-transition: opacity 0.2s ease-in!important;}\
				#Trigger-Zone toolbarbutton:active {margin-top: -1px!important; padding-bottom: 3px!important;}\
				'.replace(/[\r\n\t]/g, '');;
			this.icon.style = addStyle(css);
		}
	};

	var IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAH0lEQVRoge3BAQEAAACCIP+vbkhAAQAAAAAAAAAALwYkMAABjuvAZwAAAABJRU5ErkJggg=="

	var mBtns = [
		{
			tooltiptext: "",
			image: IMG,
		},
		{
			id: "ScrollTop-button",
			tooltiptext: "滾動到頁面頂部",
			image: "data:image/png;base64,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",
			oncommand: "content.scrollTo(0, 0);",
		},
		{
			tooltiptext: "",
			image: IMG,
		},
		{
			id: "PrevPage-button",
			tooltiptext: "上一頁",
			image: "data:image/png;base64,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",
			onmouseover: "nextPage.next();",
			oncommand: "nextPage.next();",
		},
		{
			tooltiptext: "",
			image: IMG,
		},
		{
			id: "NextPage-button",
			tooltiptext: "下一頁",
			image: "data:image/png;base64,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",
			onmouseover: "nextPage.next(true);",
			oncommand: "nextPage.next(true);",
		},
		{
			tooltiptext: "",
			image: IMG,
		},
		{
			id: "ScrollBottom-button",
			tooltiptext: "滾動到頁面底部",
			image: "data:image/png;base64,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",
			oncommand: "content.scrollTo(0, 10000000000);",
		},
		{
			tooltiptext: "",
			image: IMG,
		},
	];
	TriggerZone.init();

	function $(id) document.getElementById(id);
	function $C(name, attr) {
		var el = document.createElement(name);
		if (attr) Object.keys(attr).forEach(function(n) el.setAttribute(n, attr[n]));
		return el;
	}
	function addStyle(css) {
		var pi = document.createProcessingInstruction(
			'xml-stylesheet',
			'type="text/css" href="data:text/css;utf-8,' + encodeURIComponent(css) + '"'
		);
		return document.insertBefore(pi, document.documentElement);
	}
})();
