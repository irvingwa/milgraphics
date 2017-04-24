// Tactical graphics in APP6-B
module.exportS = function tacticalPoints(sidc, std2525) {
  //sidc['G---------'] = [];//2.X
  //sidc['G-T-------'] = [];//2.X.1
  //sidc['G-T-G-----'] = [];//2.X.1.1
  //sidc['G-T-GB----'] = [];//2.X.1.1.1
  //sidc['G-T-GH----'] = [];//2.X.1.1.2
  //sidc['G-T-GY----'] = [];//2.X.1.1.3
  //sidc['G-T-GC----'] = [];//2.X.1.1.4
  //sidc['G-T-GX----'] = [];//2.X.1.1.5
  //sidc['G-T-GJ----'] = [];//2.X.1.1.6
  //sidc['G-T-GK----'] = [];//2.X.1.1.7
  //sidc['G-T-GKF---'] = [];//2.X.1.1.7.1
  //sidc['G-T-GL----'] = [];//2.X.1.1.8
  //sidc['G-T-GLT---'] = [];//2.X.1.1.8.1
  //sidc['G-T-GT----'] = [];//2.X.1.1.10
  sidc["G-T-GF----"] = ms.geometryConverter["FIX"]; //2.X.1.1.11
  //sidc['G-T-GA----'] = [];//2.X.1.1.12
  //sidc['G-T-GAS---'] = [];//2.X.1.1.12.1
  //sidc['G-T-GE----'] = [];//2.X.1.1.14
  //sidc['G-T-GO----'] = [];//2.X.1.1.16
  //sidc['G-T-GP----'] = [];//2.X.1.1.17
  //sidc['G-T-GR----'] = [];//2.X.1.1.18
  //sidc['G-T-GQ----'] = [];//2.X.1.1.19
  //sidc['G-T-GM----'] = [];//2.X.1.1.20
  //sidc['G-T-GS----'] = [];//2.X.1.1.21
  //sidc['G-T-GSS---'] = [];//2.X.1.1.21.1
  //sidc['G-T-GSG---'] = [];//2.X.1.1.21.2
  //sidc['G-T-GSC---'] = [];//2.X.1.1.21.3
  //sidc['G-T-GZ----'] = [];//2.X.1.1.22
  //sidc['G-T-GW----'] = [];//2.X.1.1.23
  //sidc['G-T-GWP---'] = [];//2.X.1.1.23.1
  //sidc['G-C-------'] = [];//2.X.2
  //sidc['G-C-M-----'] = [];//2.X.2.1
  //sidc['G-C-MG----'] = [];//2.X.2.1.1
  //sidc['G-C-MGP---'] = [];//2.X.2.1.1.1
  //sidc['G-C-MGPF--'] = [];//2.X.2.1.1.1.1
  //sidc['G-C-MGL---'] = [];//2.X.2.1.1.2
  //sidc['G-C-MGLB--'] = [];//2.X.2.1.1.2.1
  //sidc['G-C-MGLBG-'] = [];//2.X.2.1.1.2.1.1
  //sidc['G-C-MGLBGF'] = [];//2.X.2.1.1.2.1.1.1
  //sidc['G-C-MGLBGO'] = [];//2.X.2.1.1.2.1.1.2
  //sidc['G-C-MGLBGK'] = [];//2.X.2.1.1.2.1.1.3
  //sidc['G-C-MGLBGS'] = [];//2.X.2.1.1.2.1.1.4
  //sidc['G-C-MGLBL-'] = [];//2.X.2.1.1.2.1.2
  //sidc['G-C-MGLBF-'] = [];//2.X.2.1.1.2.1.3
  //sidc['G-C-MGLBR-'] = [];//2.X.2.1.1.2.1.4
  //sidc['G-C-MGLF--'] = [];//2.X.2.1.1.2.2
  //sidc['G-C-MGLL--'] = [];//2.X.2.1.1.2.3
  //sidc['G-C-MGLP--'] = [];//2.X.2.1.1.2.4
  //sidc['G-C-MGLE--'] = [];//2.X.2.1.1.2.5
  //sidc['G-C-MGLEE-'] = [];//2.X.2.1.1.2.5.1
  //sidc['G-C-MGLEA-'] = [];//2.X.2.1.1.2.5.2
  //sidc['G-C-MGLET-'] = [];//2.X.2.1.1.2.5.3
  //sidc['G-C-MGLEO-'] = [];//2.X.2.1.1.2.5.4
  //sidc['G-C-MGA---'] = [];//2.X.2.1.1.3
  //sidc['G-C-MGAU--'] = [];//2.X.2.1.1.3.1
  //sidc['G-C-MGAUA-'] = [];//2.X.2.1.1.3.1.1
  //sidc['G-C-MGAUAF'] = [];//2.X.2.1.1.3.1.1.1
  //sidc['G-C-MGAUAP'] = [];//2.X.2.1.1.3.1.1.2
  //sidc['G-C-MGAUAE'] = [];//2.X.2.1.1.3.1.1.3
  //sidc['G-C-MGAUAS'] = [];//2.X.2.1.1.3.1.1.4
  //sidc['G-C-MGAUB-'] = [];//2.X.2.1.1.3.1.2
  //sidc['G-C-MGAUBO'] = [];//2.X.2.1.1.3.1.2.1
  //sidc['G-C-MGAUBM'] = [];//2.X.2.1.1.3.1.2.2
  //sidc['G-C-MGAUBR'] = [];//2.X.2.1.1.3.1.2.3
  //sidc['G-C-MGAS--'] = [];//2.X.2.1.1.3.2
  //sidc['G-C-MGASD-'] = [];//2.X.2.1.1.3.2.1
  //sidc['G-C-MGASE-'] = [];//2.X.2.1.1.3.2.2
  //sidc['G-C-MGASL-'] = [];//2.X.2.1.1.3.2.3
  //sidc['G-C-MGASP-'] = [];//2.X.2.1.1.3.2.4
  //sidc['G-C-MGASS-'] = [];//2.X.2.1.1.3.2.5
  //sidc['G-C-MGASM-'] = [];//2.X.2.1.1.3.2.6
  //sidc['G-C-MGASG-'] = [];//2.X.2.1.1.3.2.7
  //sidc['G-C-MGASF-'] = [];//2.X.2.1.1.3.2.8
  //sidc['G-C-MGAST-'] = [];//2.X.2.1.1.3.2.9
  //sidc['G-C-MA----'] = [];//2.X.2.1.2
  //sidc['G-C-MAA---'] = [];//2.X.2.1.2.1
  //sidc['G-C-MAL---'] = [];//2.X.2.1.2.2
  //sidc['G-C-MALC--'] = [];//2.X.2.1.2.2.1
  //sidc['G-C-MALM--'] = [];//2.X.2.1.2.2.2
  //sidc['G-C-MALS--'] = [];//2.X.2.1.2.2.3
  //sidc['G-C-MALU--'] = [];//2.X.2.1.2.2.4
  //sidc['G-C-MALL--'] = [];//2.X.2.1.2.2.5
  //sidc['G-C-MALIN-'] = [];//2.X.2.1.2.2.6
  //sidc['G-C-MALIF-'] = [];//2.X.2.1.2.2.7
  //sidc['G-C-MAV---'] = [];//2.X.2.1.2.3
  //sidc['G-C-MAVR--'] = [];//2.X.2.1.2.3.1
  //sidc['G-C-MAVF--'] = [];//2.X.2.1.2.3.2
  //sidc['G-C-MAVH--'] = [];//2.X.2.1.2.3.3
  //sidc['G-C-MAVM--'] = [];//2.X.2.1.2.3.4
  //sidc['G-C-MAVML-'] = [];//2.X.2.1.2.3.4.1
  //sidc['G-C-MAVMH-'] = [];//2.X.2.1.2.3.4.2
  //sidc['G-C-MAVW--'] = [];//2.X.2.1.2.3.5
  //sidc['G-C-MD----'] = [];//2.X.2.1.3
  //sidc['G-C-MDD---'] = [];//2.X.2.1.3.1
  //sidc['G-C-MDA---'] = [];//2.X.2.1.3.2
  //sidc['G-C-MDF---'] = [];//2.X.2.1.3.3
  //sidc['G-C-MDM---'] = [];//2.X.2.1.3.4
  //sidc['G-C-MDY---'] = [];//2.X.2.1.3.5
  //sidc['G-C-MM----'] = [];//2.X.2.1.4
  //sidc['G-C-MMP---'] = [];//2.X.2.1.4.1
  //sidc['G-C-MMPB--'] = [];//2.X.2.1.4.1.2
  //sidc['G-C-MMPBO-'] = [];//2.X.2.1.4.1.2.1
  //sidc['G-C-MMPBP-'] = [];//2.X.2.1.4.1.2.2
  //sidc['G-C-MMPBL-'] = [];//2.X.2.1.4.1.2.3
  //sidc['G-C-*'] = [];//2.X.2.1.4.1.3
  //sidc['G-C-MMPSF-'] = [];//2.X.2.1.4.1.3.1
  //sidc['G-C-MMPSE-'] = [];//2.X.2.1.4.1.3.2
  //sidc['G-C-MMD---'] = [];//2.X.2.1.4.2
  //sidc['G-C-MMDF--'] = [];//2.X.2.1.4.2.1
  //sidc['G-C-MMDFA-'] = [];//2.X.2.1.4.2.1.1
  //sidc['G-C-MMDFP-'] = [];//2.X.2.1.4.2.1.2
  //sidc['G-C-MMDP--'] = [];//2.X.2.1.4.2.2
  //sidc['G-C-MMA---'] = [];//2.X.2.1.4.3
  //sidc['G-C-MMAE--'] = [];//2.X.2.1.4.3.1
  //sidc['G-C-MO----'] = [];//2.X.2.1.5
  //sidc['G-C-MOP---'] = [];//2.X.2.1.5.1
  //sidc['G-C-MOL---'] = [];//2.X.2.1.5.2
  //sidc['G-C-MOLA--'] = [];//2.X.2.1.5.2.1
  //sidc['G-C-MOLAF-'] = [];//2.X.2.1.5.2.1.1
  //sidc['G-C-MOLAA-'] = [];//2.X.2.1.5.2.1.2
  //sidc['G-C-MOLAH-'] = [];//2.X.2.1.5.2.1.3
  //sidc['G-C-MOLAS-'] = [];//2.X.2.1.5.2.1.4
  //sidc['G-C-MOLAM-'] = [];//2.X.2.1.5.2.1.5
  //sidc['G-C-MOLAO-'] = [];//2.X.2.1.5.2.1.6
  //sidc['G-C-MOLAE-'] = [];//2.X.2.1.5.2.1.7
  //sidc['G-C-MOLAT-'] = [];//2.X.2.1.5.2.1.8
  //sidc['G-C-MOLD--'] = [];//2.X.2.1.5.2.2
  //sidc['G-C-MOLDF-'] = [];//2.X.2.1.5.2.2.1
  //sidc['G-C-MOLDY-'] = [];//2.X.2.1.5.2.2.2
  //sidc['G-C-MOLDE-'] = [];//2.X.2.1.5.2.2.3
  //sidc['G-C-MOLDT-'] = [];//2.X.2.1.5.2.2.4
  //sidc['G-C-MOLDG-'] = [];//2.X.2.1.5.2.2.5
  //sidc['G-C-MOLDR-'] = [];//2.X.2.1.5.2.2.6
  //sidc['G-C-MOLDS-'] = [];//2.X.2.1.5.2.2.7
  //sidc['G-C-MOLDM-'] = [];//2.X.2.1.5.2.2.8
  //sidc['G-C-MOLDO-'] = [];//2.X.2.1.5.2.2.9
  //sidc['G-C-MOLF--'] = [];//2.X.2.1.5.2.3
  //sidc['G-C-MOLI--'] = [];//2.X.2.1.5.2.4
  //sidc['G-C-MOLL--'] = [];//2.X.2.1.5.2.5
  //sidc['G-C-MOLT--'] = [];//2.X.2.1.5.2.6
  //sidc['G-C-MOLC--'] = [];//2.X.2.1.5.2.7
  //sidc['G-C-MOLP--'] = [];//2.X.2.1.5.2.8
  //sidc['G-C-MOLR--'] = [];//2.X.2.1.5.2.9
  //sidc['G-C-MOO---'] = [];//2.X.2.1.5.3
  //sidc['G-C-MOOA--'] = [];//2.X.2.1.5.3.1
  //sidc['G-C-MOOT--'] = [];//2.X.2.1.5.3.2
  //sidc['G-C-MOOTF-'] = [];//2.X.2.1.5.3.2.1
  //sidc['G-C-MOOTC-'] = [];//2.X.2.1.5.3.2.2
  //sidc['G-C-MOOTP-'] = [];//2.X.2.1.5.3.2.3
  //sidc['G-C-MOOP--'] = [];//2.X.2.1.5.3.3
  //sidc['G-C-MOOS--'] = [];//2.X.2.1.5.3.4
  //sidc['G-C-MOOJ--'] = [];//2.X.2.1.5.3.5
  //sidc['G-C-MOOX--'] = [];//2.X.2.1.5.3.6
  //sidc['G-C-MOOR--'] = [];//2.X.2.1.5.3.7
  //sidc['G-C-MS----'] = [];//2.X.2.1.6
  //sidc['G-C-MSG---'] = [];//2.X.2.1.6.1
  //sidc['G-C-MSGE--'] = [];//2.X.2.1.6.1.1
  //sidc['G-C-MSGEF-'] = [];//2.X.2.1.6.1.1.1
  //sidc['G-C-MSGEY-'] = [];//2.X.2.1.6.1.1.2
  sidc["G-C-MSGA--"] = ms.geometryConverter["AMBUSH"]; //2.X.2.1.6.1.2
  //sidc['G-C-MSL---'] = [];//2.X.2.1.6.2
  //sidc['G-C-MSLA--'] = [];//2.X.2.1.6.2.1
  //sidc['G-C-MSLB--'] = [];//2.X.2.1.6.2.2
  //sidc['G-C-MSLH--'] = [];//2.X.2.1.6.2.3
  //sidc['G-C-MSLR--'] = [];//2.X.2.1.6.2.4
  //sidc['G-C-MSA---'] = [];//2.X.2.1.6.3
  //sidc['G-C-MSAO--'] = [];//2.X.2.1.6.3.1
  sidc["G-C-MSAN--"] = ms.geometryConverter["NAMED AREA OF INTEREST"]; //2.X.2.1.6.3.2
  sidc["G-C-MSAT--"] = ms.geometryConverter["TARGETED AREA OF INTEREST"]; //2.X.2.1.6.3.3
  //sidc['G-C-B-----'] = [];//2.X.2.2
  //sidc['G-C-BO----'] = [];//2.X.2.2.1
  //sidc['G-C-BOG---'] = [];//2.X.2.2.1.1
  //sidc['G-C-BOGB--'] = [];//2.X.2.2.1.1.1
  //sidc['G-C-BOGL--'] = [];//2.X.2.2.1.1.2
  //sidc['G-C-BOGZ--'] = [];//2.X.2.2.1.1.3
  //sidc['G-C-BOA---'] = [];//2.X.2.2.1.2
  //sidc['G-C-BOAT--'] = [];//2.X.2.2.1.3
  //sidc['G-C-BOATO-'] = [];//2.X.2.2.1.3.1
  //sidc['G-C-BOATM-'] = [];//2.X.2.2.1.3.2
  //sidc['G-C-BOATW-'] = [];//2.X.2.2.1.3.4
  //sidc['G-C-BOAM--'] = [];//2.X.2.2.1.5
  //sidc['G-C-BOAMW-'] = [];//2.X.2.2.1.5.7
  //sidc['G-C-BOAI--'] = [];//2.X.2.2.1.6
  //sidc['G-C-BOAIL-'] = [];//2.X.2.2.1.6.3
  //sidc['G-C-BOAIG-'] = [];//2.X.2.2.1.6.4
  //sidc['G-C-BOAIM-'] = [];//2.X.2.2.1.6.9
  //sidc['G-C-BOAV--'] = [];//2.X.2.2.1.7
  //sidc['G-C-BOAE--'] = [];//2.X.2.2.1.8
  //sidc['G-C-BOAEB-'] = [];//2.X.2.2.1.8.1
  //sidc['G-C-BOAEF-'] = [];//2.X.2.2.1.8.2
  //sidc['G-C-BOAET-'] = [];//2.X.2.2.1.8.3
  //sidc['G-C-BOAED-'] = [];//2.X.2.2.1.8.4
  //sidc['G-C-BOAF--'] = [];//2.X.2.2.1.9
  //sidc['G-C-BOAFR-'] = [];//2.X.2.2.1.9.1
  //sidc['G-C-BOAU--'] = [];//2.X.2.2.1.10
  //sidc['G-C-BOAR--'] = [];//2.X.2.2.1.11
  //sidc['G-C-BOARP-'] = [];//2.X.2.2.1.11.1
  //sidc['G-C-BOARE-'] = [];//2.X.2.2.1.11.2
  //sidc['G-C-BOARS-'] = [];//2.X.2.2.1.11.3
  //sidc['G-C-BOARC-'] = [];//2.X.2.2.1.11.4
  //sidc['G-C-BOAP--'] = [];//2.X.2.2.1.12
  //sidc['G-C-BOAW--'] = [];//2.X.2.2.1.13
  //sidc['G-C-BOAWU-'] = [];//2.X.2.2.1.13.1
  //sidc['G-C-BOAWS-'] = [];//2.X.2.2.1.13.2
  //sidc['G-C-BOAWD-'] = [];//2.X.2.2.1.13.3
  //sidc['G-C-BOAWA-'] = [];//2.X.2.2.1.13.4
  //sidc['G-C-BOAWL-'] = [];//2.X.2.2.1.13.5
  //sidc['G-C-BOAWH-'] = [];//2.X.2.2.1.13.6
  //sidc['G-C-BOAWC-'] = [];//2.X.2.2.1.13.7
  //sidc['G-C-BOAWB-'] = [];//2.X.2.2.1.13.8
  //sidc['G-C-BOAWR-'] = [];//2.X.2.2.1.13.9
  //sidc['G-C-BY----'] = [];//2.X.2.2.2
  //sidc['G-C-BYO---'] = [];//2.X.2.2.2.1
  //sidc['G-C-BYOE--'] = [];//2.X.2.2.2.1.1
  //sidc['G-C-BYOD--'] = [];//2.X.2.2.2.1.2
  //sidc['G-C-BYOI--'] = [];//2.X.2.2.2.1.3
  //sidc['G-C-BYC---'] = [];//2.X.2.2.2.2
  //sidc['G-C-BYCA--'] = [];//2.X.2.2.2.2.1
  //sidc['G-C-BYCB--'] = [];//2.X.2.2.2.2.2
  //sidc['G-C-BYCF--'] = [];//2.X.2.2.2.2.3
  //sidc['G-C-BYCE--'] = [];//2.X.2.2.2.2.4
  //sidc['G-C-BYCD--'] = [];//2.X.2.2.2.2.5
  //sidc['G-C-BYCL--'] = [];//2.X.2.2.2.2.6
  //sidc['G-C-BYCR--'] = [];//2.X.2.2.2.2.7
  //sidc['G-C-BS----'] = [];//2.X.2.2.3
  //sidc['G-C-BSL---'] = [];//2.X.2.2.3.3
  //sidc['G-C-BSW---'] = [];//2.X.2.2.3.4
  //sidc['G-C-BSP---'] = [];//2.X.2.2.3.5
  //sidc['G-C-BW----'] = [];//2.X.2.2.4
  //sidc['G-C-BWM---'] = [];//2.X.2.2.4.1
  //sidc['G-C-BWA---'] = [];//2.X.2.2.4.7
  //sidc['G-C-BWC---'] = [];//2.X.2.2.4.8
  //sidc['G-C-BWH---'] = [];//2.X.2.2.4.9
  //sidc['G-C-BWK---'] = [];//2.X.2.2.4.10
  //sidc['G-C-BWD---'] = [];//2.X.2.2.4.11
  //sidc['G-C-BWR---'] = [];//2.X.2.2.4.12
  //sidc['G-C-F-----'] = [];//2.X.2.3
  //sidc['G-C-FS----'] = [];//2.X.2.3.1
  //sidc['G-C-FST---'] = [];//2.X.2.3.1.1
  //sidc['G-C-FSTC--'] = [];//2.X.2.3.1.1.2
  //sidc['G-C-FL----'] = [];//2.X.2.3.2
  //sidc['G-C-FLC---'] = [];//2.X.2.3.2.1
  //sidc['G-C-FLF---'] = [];//2.X.2.3.2.2
  //sidc['G-C-FLT---'] = [];//2.X.2.3.2.3
  //sidc['G-C-FLTP--'] = [];//2.X.2.3.2.3.1
  //sidc['G-C-FLK---'] = [];//2.X.2.3.2.4
  //sidc['G-C-FLKP--'] = [];//2.X.2.3.2.4.1
  //sidc['G-C-FLKS--'] = [];//2.X.2.3.2.4.2
  //sidc['G-C-FLKT--'] = [];//2.X.2.3.2.4.3
  //sidc['G-C-FLN---'] = [];//2.X.2.3.2.5
  //sidc['G-C-FLR---'] = [];//2.X.2.3.2.6
  //sidc['G-C-FA----'] = [];//2.X.2.3.3
  sidc["G-C-FAS---"] = ms.geometryConverter["FIRE SUPPORT AREA"]; //2.X.2.3.3.1
  sidc["G-C-FAC---"] = ms.geometryConverter["AIRSPACE COORDINATION AREA"]; //2.X.2.3.3.2
  //sidc['G-C-FAT---'] = [];//2.X.2.3.3.3
  //sidc['G-C-FAR---'] = [];//2.X.2.3.3.4
  //sidc['G-C-FARS--'] = [];//2.X.2.3.3.4.1
  //sidc['G-C-FARU--'] = [];//2.X.2.3.3.4.2
  //sidc['G-C-FAB---'] = [];//2.X.2.3.3.5
  sidc["G-C-FAI---"] = ms.geometryConverter["FREE FIRE AREA"]; //2.X.2.3.3.6
  //sidc['G-C-FAZ---'] = [];//2.X.2.3.3.7
  //sidc['G-C-FAZT--'] = [];//2.X.2.3.3.7.1
  //sidc['G-C-FAZU--'] = [];//2.X.2.3.3.7.2
  //sidc['G-C-FAN---'] = [];//2.X.2.3.3.8
  //sidc['G-C-FAD---'] = [];//2.X.2.3.3.10
  //sidc['G-C-FAP---'] = [];//2.X.2.3.3.11
  //sidc['G-C-FATA--'] = [];//2.X.2.3.3.12
  //sidc['*-*-*'] = [];//G
  //sidc['G-C-SP----'] = [];//2.X.2.4.1
  //sidc['G-C-SPQ---'] = [];//2.X.2.4.1.14
  //sidc['G-C-SPM---'] = [];//2.X.2.4.1.15
  //sidc['G-C-SL----'] = [];//2.X.2.4.2
  //sidc['G-C-SLC---'] = [];//2.X.2.4.2.1
  //sidc['G-C-SLCM--'] = [];//2.X.2.4.2.1.1
  //sidc['G-C-SLCH--'] = [];//2.X.2.4.2.1.2
  //sidc['G-C-SLR---'] = [];//2.X.2.4.2.2
  //sidc['G-C-SLRM--'] = [];//2.X.2.4.2.2.1
  //sidc['G-C-SLRA--'] = [];//2.X.2.4.2.2.2
  //sidc['G-C-SLRO--'] = [];//2.X.2.4.2.2.3
  //sidc['G-C-SLRT--'] = [];//2.X.2.4.2.2.4
  //sidc['G-C-SLRW--'] = [];//2.X.2.4.2.2.5
  //sidc['G-C-SA----'] = [];//2.X.2.4.3
  //sidc['G-C-SAD---'] = [];//2.X.2.4.3.1
  //sidc['G-C-SAP---'] = [];//2.X.2.4.3.2
  //sidc['G-C-SAR---'] = [];//2.X.2.4.3.3
  //sidc['G-C-SAH---'] = [];//2.X.2.4.3.4
  //sidc['G-C-SAT---'] = [];//2.X.2.4.3.5
  //sidc['G-C-SATB--'] = [];//2.X.2.4.3.5.1
  //sidc['G-C-SATD--'] = [];//2.X.2.4.3.5.2
  //sidc['G-C-SATR--'] = [];//2.X.2.4.3.5.3
  //sidc['G-C-SARR--'] = [];//2.X.2.4.3.6
  //sidc['G-C-O-----'] = [];//2.X.2.5
  //sidc['G-C-OXE---'] = [];//2.X.2.5.1.1
  //sidc['G-C-OXU---'] = [];//2.X.2.5.1.2
  //sidc['G-C-OXW---'] = [];//2.X.2.5.1.3
  //sidc['G-C-OXST--'] = [];//2.X.2.5.1.8
  //sidc['G-C-OXA---'] = [];//2.X.2.5.1.10
  //sidc['G-C-OL----'] = [];//2.X.2.5.3
  //sidc['*-*-*'] = [];//G
  //sidc['*-*-*'] = [];//G
  //sidc['*-*-*'] = [];//G
  //sidc['*-*-*'] = [];//G
  //sidc['G-O-------'] = [];//2.X.3
  //sidc['G-O-V-----'] = [];//2.X.3.1
  //sidc['G-O-L-----'] = [];//2.X.3.2
  //sidc['G-O-P-----'] = [];//2.X.3.3
  //sidc['G-O-PJ----'] = [];//2.X.3.3.13
  //sidc['G-O-I-----'] = [];//2.X.3.4
};
