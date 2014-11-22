jQuery(function() {
		var t, e, n;
		return $("#sortable").length > 0 ? (n = $("#sortable").width(), t = $(".table").find("tr")[0].cells.length, e = n / t + "px", $(".table td").css("width", e), $("#sortable").sortable({
			axis: "y",
			items: ".item",
			cursor: "move",
			sort: function(t, e) {
				return e.item.addClass("active-item-shadow")
			},
			stop: function(t, e) {
				return e.item.removeClass("active-item-shadow"), e.item.children("td").effect("highlight", {}, 1e3)
			},
			update: function(t, e) {
				var n, i;
				return n = e.item.data("item-id"), console.log(n), i = e.item.index(), $.ajax({
					type: "POST",
					url: "/things/update_row_order",
					dataType: "json",
					data: {
						thing: {
							thing_id: n,
							row_order_position: i
						}
					}
				})
			}
		})) : void 0
	});
