{
	"codecaves": {
		"th06_prevent_input_when_window_unfocused": {
			"access": "re",
			"code": "66c785f4feffff0000833d<Rx2c6be0>007407c70424<Rx1e095>c3"
		}
	},
	"binhacks": {
		"init_window_selected_to_1": {
			"addr": "Rx20C52",
			"code": "01"
		},
		"check_window_selected": {
			"addr": "Rx20d99",
			"code": "85d2<nop:11>"
		},
		"call_prevent_input_when_window_unfocused": {
			"addr": "Rx1D834",
			"code": "e8[codecave:th06_prevent_input_when_window_unfocused]<nop:4>"
		}
	}
}