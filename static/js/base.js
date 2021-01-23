
fetch('/api/ticker/')
.then(response => response.json())
.then(result => {
	var data = [];
	for (var i in result) {
		data.push(result[i].company_name_ticker.replace("''", "'"));
	};
	$("#drop-down").autocomplete({
		source: function(req, resp) {
			var res = jQuery.ui.autocomplete.filter(data, req.term);
			resp(res.slice(0, 10));
		},
		delay: 300, // delay in milliseconds between keystroke and when search is performed
		autoFocus: true, // first item will be selected automatically when menu is shown
		minLength: 1, // minimum number of characters user must type before search is performed
		select: function(event, ui) {
			let ticker = ui.item.value.match(/\(([^)]+)\)/)[1];
			let url = generate_url(ticker);
			window.location.href = url
			jQuery(this).val(''); 
			return false;
			// https://metaclass.co/django_url_reversing_in_js_code.html
		}
	})
})