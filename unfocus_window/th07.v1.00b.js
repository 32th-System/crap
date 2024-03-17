{
	"codecaves": {
		"th07_prevent_input_when_window_unfocused": {
			"access": "re",
			"code": "66c785fcfeffff0000833d<Rx175c2c>007407c70424<Rx312b1>c3"
		}	
	},
	"binhacks": {
		"check_window_selected": {
			"addr": "Rx344f9",
			"code": "85d2<nop:11>"
		},
		"call_prevent_input_when_window_unfocused": {
			"addr": "Rx30b59",
			"code": "e8[codecave:th07_prevent_input_when_window_unfocused]<nop:4>"
		},	
	}
}