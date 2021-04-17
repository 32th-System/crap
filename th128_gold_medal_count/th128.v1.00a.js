{
	"codecaves": {
		"protection": "0x40",
		"gold_medals_obtained": "00000000",
		"gold_medals_format_str": "47 6F 6C 64 20 6D 65 64 61 6C 73 3A 20 25 64 00",
		"gold_medal_count": "58 31 D2 85 C9 0F 94 C2 01 15 <codecave:gold_medals_obtained> 6A 17 8D 55 08 FF E0",
		"gold_medal_show": "56 57 83 EC 0C 89 E0 C7 00 00 00 00 00 C7 40 04 00 00 00 00 C7 40 08 00 00 00 00 89 C7 FF 35 <codecave:gold_medals_obtained> 68 <codecave:gold_medals_format_str> 50 8B 35 20 89 4B 00 B8 00 19 40 00 FF D0 83 C4 18 5F 5E C3"
	},
	"binhacks": {
		"gm_count": {
			"addr": "Rx24e3f",
			"code": "e8[codecave:gold_medal_count]"
		},
		"gm_show": {
			"addr": "Rx26ed0",
			"code": "e8[codecave:gold_medal_show]5bc3"
		},
		"gm_reset": {
			"addr": "Rx3af32",
			"code": "c705<codecave:gold_medals_obtained>00000000c3"
		}
	}
}