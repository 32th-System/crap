{
	"codecaves": {
		"wbawc_motionsickness_184": "00 00 38 43"
		"wbawc_motionsickness_main": "f3 0f1005 <codecave:wbawc_motionsickness_184> f3 0f 10 8f 10 06 00 00 f3 0f 5e c8 a1 80 76 4b 00 f3 0f 11 88 48 02 00 00 8b c7 c3"
	},
	"binhacks": {
		"disable_a_write_I_have_no_idea_what_it_is": {
			"addr": "Rx0c0c6",
			"code": "9090909090909090"
		},
		"call_wbawc_motionsickness_main": {
			"addr": "Rx48ca6",
			"code": "e8[codecave:wbawc_motionsickness_main]"
		}
	}
}