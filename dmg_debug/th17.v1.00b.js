{	
	"COMMENT": "I tried to get some DWORD alignment here but it might not work out depending on your patchstack",
	"codecaves": {
		"protection": "0x40",
		"dmg_dbg_data": "00000000 00000000",
		"dmg_dbg_text_pos": "00001042 0000f041 00000000",
		"dmg_dbg_show": "51 57 BF <codecave:dmg_dbg_data> 8B 4F 04 85 C9 74 23 8B 07 99 F7 F9 51 50 FF 37 68<codecave:dmg_dbg_format_str> 68<codecave:dmg_dbg_text_pos> FF 35 78 76 4B 00 B8 B0 82 40 00 FF D0 83 C4 18 5F 59 B8 90 A3 40 00 FF E0",
		"dmg_dbg_format_str": "74 6F 74 61 6C 20 64 6D 67 2E 20 20 3A 20 25 64 0A 61 76 67 2E 20 64 70 66 2E 20 20 20 3A 20 25 64 0A 64 6D 67 2E 20 66 72 61 6D 65 73 20 3A 20 25 64 00"
	},
	"binhacks": {
		"dmg_dbg_jump": {
			"code": "e9[codecave:dmg_dbg_show]",
			"addr": "Rxad50"
		},
		"dmg_dbg_set_boss_rewrite": {
			"code": "74 0C 8B 89 60 57 00 00 89 4C 82 48 EB 08 C7 44 82 48 00 00 00 00 0F 57 C0 66 0F D6 05 <codecave:dmg_dbg_data> 8B E5 5D C2 08 00",
			"addr": "Rx1dd32"
		},
		"dmg_count": {
			"code": "8B 83 90 40 00 00 85 C0 78 13 F3 0F 2C C0 BE <codecave:dmg_dbg_data> 01 06 FF 46 04 90 90 90 90 90",
			"addr": "Rx1fbc3"
		}
	}

}