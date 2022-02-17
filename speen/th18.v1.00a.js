{
	"codecaves": {
		"th18_anm_rotate": {
			"access": "re",
			"code": "B8 CD CC CC 3D 66 0F 6E C0 F3 0F 10 4B 44 F3 0F 58 C1 F3 0F 11 43 44 5F 5E 5B 33 CC 33 C0 E9 [Rx7B895]"
		}
	},
	"binhacks": {
		"rotate_jmp": {
			"addr": "Rx7B890",
			"code": "e9[codecave:th18_anm_rotate]"
		},
		"force_rot_mode": {
			"addr": "Rx81248",
			"code": "EB 24 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90 90"
		}
	}
}
