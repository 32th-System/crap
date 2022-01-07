{
	"codecaves": {
		"score_uncap_th18_stage_transition_fix": {
			"access": "re",
			"code": "56 8B 71 20 FF 74 24 08 E8 [Rx17A60] 89 71 20 5E C2 04 00"
		}
	},
	"binhacks": {
		"new_cap": {
			"addr": [ "Rx2a665", "Rx2a7fd", "Rx30eab", "Rx4476b", "Rx44ad9", "Rx44c00", "Rx462eb", "Rx463b1", "Rx4656e", "Rx46ac6", "Rx46d09", "Rx5f2c4" ]
		},
		"new_cap+1": {
			"addr": [ "Rx19e70", "Rx2a659", "Rx2a80f", "Rx30eb6", "Rx4477a", "Rx44ade", "Rx44c05", "Rx46302", "Rx463a1", "Rx46578", "Rx46ad7", "Rx46d1a", "Rx5f2cf", "Rx97937", "Rx98515", "Rxa4248", "Rxaee78" ]
		},
		"stage_transition_fix": {
			"addr": [ "Rx179c2", "Rx63040" ],
			"code": "e8 [codecave:score_uncap_th18_stage_transition_fix]"
		}
	}
}