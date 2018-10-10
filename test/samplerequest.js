'use strict';

// A test PaymentRequest (with a full cert chain) from test.fcash.cash:
var SampleRequest = {};
SampleRequest.fcash = new Buffer(''
  + '0801120b783530392b7368613235361a89250aa40a3082052030820408a0'
  + '03020102020727a49d05046d62300d06092a864886f70d01010b05003081'
  + 'b4310b30090603550406130255533110300e060355040813074172697a6f'
  + '6e61311330110603550407130a53636f74747364616c65311a3018060355'
  + '040a1311476f44616464792e636f6d2c20496e632e312d302b060355040b'
  + '1324687474703a2f2f63657274732e676f64616464792e636f6d2f726570'
  + '6f7369746f72792f313330310603550403132a476f204461646479205365'
  + '6375726520436572746966696361746520417574686f72697479202d2047'
  + '32301e170d3134303432363132333532365a170d31363034323631323335'
  + '32365a303a3121301f060355040b1318446f6d61696e20436f6e74726f6c'
  + '2056616c6964617465643115301306035504030c0c2a2e6269747061792e'
  + '636f6d30820122300d06092a864886f70d01010105000382010f00308201'
  + '0a0282010100e2a5dd4aea959c1d0fb016e6e05bb7011e741cdc61918c61'
  + 'f9625a2f682f485f0e862ea63db61cc9161753127504de800604df36b10f'
  + '46cb17ab6cb99dba8aa45a36adfb901a2fc380c89e234bce18de6639b883'
  + 'e9339801673efaee1f2df77eeb82f7c39c96a2f8ef4572b634c203d9be8f'
  + 'd1e0036d32fb38b6b9b5ecd5a0684345c7e9ffc5d26bc6fd69aa6619f77b'
  + 'adaa4bfb989478fb2f41aa92782e40b34ba9ac4549a4e6fda76b5fc4a581'
  + '853bd0de5fb5a2c6dfdc12cdfadb54e9636a6d1223705924b8be566b81ac'
  + '7921078cf590a146ae397a84908ef4fc83ff5715a44ab59e9258674d9011'
  + '3bb607b8d81eb268e4c6ce849497c76521795b0873950203010001a38201'
  + 'ae308201aa300f0603551d130101ff04053003010100301d0603551d2504'
  + '16301406082b0601050507030106082b06010505070302300e0603551d0f'
  + '0101ff0404030205a030360603551d1f042f302d302ba029a02786256874'
  + '74703a2f2f63726c2e676f64616464792e636f6d2f676469673273312d34'
  + '392e63726c30530603551d20044c304a3048060b6086480186fd6d010717'
  + '013039303706082b06010505070201162b687474703a2f2f636572746966'
  + '6963617465732e676f64616464792e636f6d2f7265706f7369746f72792f'
  + '307606082b06010505070101046a3068302406082b060105050730018618'
  + '687474703a2f2f6f6373702e676f64616464792e636f6d2f304006082b06'
  + '0105050730028634687474703a2f2f6365727469666963617465732e676f'
  + '64616464792e636f6d2f7265706f7369746f72792f67646967322e637274'
  + '301f0603551d2304183016801440c2bd278ecc348330a233d7fb6cb3f0b4'
  + '2c80ce30230603551d11041c301a820c2a2e6269747061792e636f6d820a'
  + '6269747061792e636f6d301d0603551d0e0416041485454e3b4072e2f58e'
  + '377438988b5229387e967a300d06092a864886f70d01010b050003820101'
  + '002d0a7ef97f988905ebbbad4e9ffb690352535211d6792516119838b55f'
  + '24ff9fa4e93b6187b8517cbb0477457d3378078ef66057abe41bcafeb142'
  + 'ec52443a94b88114fa069f725c6198581d97af16352727f4f35e7f2110fa'
  + 'a41a0511bcfdf8e3f4a3a310278c150b10f32a962c81e8f3d5374d9cb56d'
  + '893027ff4fa4e3c3e6384c1f1557ceea6fca9cbc0c110748c08b82d8f0ed'
  + '9a579637ee43a2d8fec3b5b04d1f3c8f1a3e2088da2274b6bc60948bbe74'
  + '4a7f8b942b41f0ae9b4afaeefbb7e0f04a0587b52efb6ebfa2d970b9de56'
  + 'a068575e4bf0cf824618dc17bbeaa2cdd25d65970a9f1a06fc9fffb466a1'
  + '0c9568cd651795bc2c7996975027bdbaba0ad409308204d0308203b8a003'
  + '020102020107300d06092a864886f70d01010b0500308183310b30090603'
  + '550406130255533110300e060355040813074172697a6f6e613113301106'
  + '03550407130a53636f74747364616c65311a3018060355040a1311476f44'
  + '616464792e636f6d2c20496e632e3131302f06035504031328476f204461'
  + '64647920526f6f7420436572746966696361746520417574686f72697479'
  + '202d204732301e170d3131303530333037303030305a170d333130353033'
  + '3037303030305a3081b4310b30090603550406130255533110300e060355'
  + '040813074172697a6f6e61311330110603550407130a53636f7474736461'
  + '6c65311a3018060355040a1311476f44616464792e636f6d2c20496e632e'
  + '312d302b060355040b1324687474703a2f2f63657274732e676f64616464'
  + '792e636f6d2f7265706f7369746f72792f313330310603550403132a476f'
  + '204461646479205365637572652043657274696669636174652041757468'
  + '6f72697479202d20473230820122300d06092a864886f70d010101050003'
  + '82010f003082010a0282010100b9e0cb10d4af76bdd49362eb3064b88108'
  + '6cc304d962178e2fff3e65cf8fce62e63c521cda16454b55ab786b638362'
  + '90ce0f696c99c81a148b4ccc4533ea88dc9ea3af2bfe80619d7957c4cf2e'
  + 'f43f303c5d47fc9a16bcc3379641518e114b54f828bed08cbef030381ef3'
  + 'b026f86647636dde7126478f384753d1461db4e3dc00ea45acbdbc71d9aa'
  + '6f00dbdbcd303a794f5f4c47f81def5bc2c49d603bb1b24391d8a4334eea'
  + 'b3d6274fad258aa5c6f4d5d0a6ae7405645788b54455d42d2a3a3ef8b8bd'
  + 'e9320a029464c4163a50f14aaee77933af0c20077fe8df0439c269026c63'
  + '52fa77c11bc87487c8b993185054354b694ebc3bd3492e1fdcc1d252fb02'
  + '03010001a382011a30820116300f0603551d130101ff040530030101ff30'
  + '0e0603551d0f0101ff040403020106301d0603551d0e0416041440c2bd27'
  + '8ecc348330a233d7fb6cb3f0b42c80ce301f0603551d230418301680143a'
  + '9a8507106728b6eff6bd05416e20c194da0fde303406082b060105050701'
  + '0104283026302406082b060105050730018618687474703a2f2f6f637370'
  + '2e676f64616464792e636f6d2f30350603551d1f042e302c302aa028a026'
  + '8624687474703a2f2f63726c2e676f64616464792e636f6d2f6764726f6f'
  + '742d67322e63726c30460603551d20043f303d303b0604551d2000303330'
  + '3106082b06010505070201162568747470733a2f2f63657274732e676f64'
  + '616464792e636f6d2f7265706f7369746f72792f300d06092a864886f70d'
  + '01010b05000382010100087e6c9310c838b896a9904bffa15f4f04ef6c3e'
  + '9c8806c9508fa673f757311bbebce42fdbf8bad35be0b4e7e679620e0ca2'
  + 'd76a637331b5f5a848a43b082da25d90d7b47c254f115630c4b6449d7b2c'
  + '9de55ee6ef0c61aabfe42a1bee849eb8837dc143ce44a713700d911ff4c8'
  + '13ad8360d9d872a873241eb5ac220eca17896258441bab892501000fcdc4'
  + '1b62db51b4d30f512a9bf4bc73fc76ce36a4cdd9d82ceaae9bf52ab290d1'
  + '4d75188a3f8a4190237d5b4bfea403589b46b2c3606083f87d5041cec2a1'
  + '90c3bbef022fd21554ee4415d90aaea78a33edb12d763626dc04eb9ff761'
  + '1f15dc876fee469628ada1267d0a09a72e04a38dbcf8bc0430010a810930'
  + '82047d30820365a00302010202031be715300d06092a864886f70d01010b'
  + '05003063310b30090603550406130255533121301f060355040a13185468'
  + '6520476f2044616464792047726f75702c20496e632e3131302f06035504'
  + '0b1328476f20446164647920436c61737320322043657274696669636174'
  + '696f6e20417574686f72697479301e170d3134303130313037303030305a'
  + '170d3331303533303037303030305a308183310b30090603550406130255'
  + '533110300e060355040813074172697a6f6e61311330110603550407130a'
  + '53636f74747364616c65311a3018060355040a1311476f44616464792e63'
  + '6f6d2c20496e632e3131302f06035504031328476f20446164647920526f'
  + '6f7420436572746966696361746520417574686f72697479202d20473230'
  + '820122300d06092a864886f70d01010105000382010f003082010a028201'
  + '0100bf716208f1fa5934f71bc918a3f7804958e9228313a6c52043013b84'
  + 'f1e685499f27eaf6841b4ea0b4db7098c73201b1053e074eeef4fa4f2f59'
  + '3022e7ab19566be28007fcf316758039517be5f935b6744ea98d8213e4b6'
  + '3fa90383faa2be8a156a7fde0bc3b6191405caeac3a804943b467c320df3'
  + '006622c88d696d368c1118b7d3b21c60b438fa028cced3dd4607de0a3eeb'
  + '5d7cc87cfbb02b53a4926269512505611a44818c2ca9439623dfac3a819a'
  + '0e29c51ca9e95d1eb69e9e300a39cef18880fb4b5dcc32ec856243253402'
  + '56270191b43b702a3f6eb1e89c88017d9fd4f9db536d609dbf2ce758abb8'
  + '5f46fccec41b033c09eb49315c6946b3e0470203010001a3820117308201'
  + '13300f0603551d130101ff040530030101ff300e0603551d0f0101ff0404'
  + '03020106301d0603551d0e041604143a9a8507106728b6eff6bd05416e20'
  + 'c194da0fde301f0603551d23041830168014d2c4b0d291d44c1171b361cb'
  + '3da1fedda86ad4e3303406082b0601050507010104283026302406082b06'
  + '0105050730018618687474703a2f2f6f6373702e676f64616464792e636f'
  + '6d2f30320603551d1f042b30293027a025a0238621687474703a2f2f6372'
  + '6c2e676f64616464792e636f6d2f6764726f6f742e63726c30460603551d'
  + '20043f303d303b0604551d20003033303106082b06010505070201162568'
  + '747470733a2f2f63657274732e676f64616464792e636f6d2f7265706f73'
  + '69746f72792f300d06092a864886f70d01010b05000382010100590b53bd'
  + '928611a7247bed5b31cf1d1f6c70c5b86ebe4ebbf6be9750e1307fba285c'
  + '6294c2e37e33f7fb427685db951c8c225875090c886567390a1609c5a038'
  + '97a4c523933fb418a601064491e3a76927b45a257f3ab732cddd84ff2a38'
  + '2933a4dd67b285fea188201c5089c8dc2af64203374ce688dfd5af24f2b1'
  + 'c3dfccb5ece0995eb74954203c94180cc71c521849a46de1b3580bc9d8ec'
  + 'd9ae1c328e28700de2fea6179e840fbd5770b35ae91fa08653bbef7cff69'
  + '0be048c3b7930bc80a54c4ac5d1467376ccaa52f310837aa6e6f8cbc9be2'
  + '575d2481af97979c84ad6cac374c66f361911120e4be309f7aa42909b0e1'
  + '345f6477184051df8c30a6af0a840830820400308202e8a0030201020201'
  + '00300d06092a864886f70d01010505003063310b30090603550406130255'
  + '533121301f060355040a131854686520476f2044616464792047726f7570'
  + '2c20496e632e3131302f060355040b1328476f20446164647920436c6173'
  + '7320322043657274696669636174696f6e20417574686f72697479301e17'
  + '0d3034303632393137303632305a170d3334303632393137303632305a30'
  + '63310b30090603550406130255533121301f060355040a13185468652047'
  + '6f2044616464792047726f75702c20496e632e3131302f060355040b1328'
  + '476f20446164647920436c61737320322043657274696669636174696f6e'
  + '20417574686f7269747930820120300d06092a864886f70d010101050003'
  + '82010d00308201080282010100de9dd7ea571849a15bebd75f4886eabedd'
  + 'ffe4ef671cf46568b35771a05e77bbed9b49e970803d561863086fdaf2cc'
  + 'd03f7f0254225410d8b281d4c0753d4b7fc777c33e78ab1a03b5206b2f6a'
  + '2bb1c5887ec4bb1eb0c1d845276faa3758f78726d7d82df6a917b71f7236'
  + '4ea6173f659892db2a6e5da2fe88e00bde7fe58d15e1ebcb3ad5e212a213'
  + '2dd88eaf5f123da0080508b65ca565380445991ea3606074c541a572621b'
  + '62c51f6f5f1a42be025165a8ae23186afc7803a94d7f80c3faab5afca140'
  + 'a4ca1916feb2c8ef5e730dee77bd9af67998bcb10767a2150ddda058c644'
  + '7b0a3e62285fba41075358cf117e3874c5f8ffb569908f8474ea971baf02'
  + '0103a381c03081bd301d0603551d0e04160414d2c4b0d291d44c1171b361'
  + 'cb3da1fedda86ad4e330818d0603551d230481853081828014d2c4b0d291'
  + 'd44c1171b361cb3da1fedda86ad4e3a167a4653063310b30090603550406'
  + '130255533121301f060355040a131854686520476f204461646479204772'
  + '6f75702c20496e632e3131302f060355040b1328476f2044616464792043'
  + '6c61737320322043657274696669636174696f6e20417574686f72697479'
  + '820100300c0603551d13040530030101ff300d06092a864886f70d010105'
  + '05000382010100324bf3b2ca3e91fc12c6a1078c8e77a03306145c901e18'
  + 'f708a63d0a19f98780116e69e4961730ff3491637238eecc1c01a31d9428'
  + 'a431f67ac454d7f6e5315803a2ccce62db944573b5bf45c924b5d58202ad'
  + '2379698db8b64dcecf4cca3323e81c88aa9d8b416e16c920e5899ecd3bda'
  + '70f77e992620145425ab6e7385e69b219d0a6c820ea8f8c20cfa101e6c96'
  + 'ef870dc40f618badee832b95f88e92847239eb20ea83ed83cd976e08bceb'
  + '4e26b6732be4d3f64cfe2671e26111744aff571a870f75482ecf516917a0'
  + '02126195d5d140b2104ceec4ac1043a6a59e0ad595629a0dcf8882c5320c'
  + 'e42b9f45e60d9f289cb1b92a5a57ad370faf1d7fdbbd9f22a1010a047465'
  + '7374122008c0c9e714121976a914176d7c5d60da6f8c82de86671a1fb776'
  + '028538ca88ac18c6f5d89f0520cafcd89f052a395061796d656e74207265'
  + '717565737420666f722042697450617920696e766f69636520434d577075'
  + '46736a676d51325a4c6979476663463157323068747470733a2f2f746573'
  + '742e6269747061792e636f6d2f692f434d57707546736a676d51325a4c69'
  + '794766634631572a80021566366ab78842a514c056ca7ecb76481262cac7'
  + '4cc4c4ccdc82c4980bc3300de67836d61d3e06dc8c90798a7774c21c7ad4'
  + 'fe634b85faa8719d6402411bb720396ae03cbb4e14f06f7894a66b208b99'
  + 'f727fab35d32f4f2148294d24bea1b3f240c159d0fd3ee4a32e5f926bf7c'
  + '05eb7a3f75e01d9af81254cfbb61606467750ea7e0a1536728358e0898d0'
  + '6f57235e4096d2caf647ae58dff645be80c9b3555fa96c81efa07d421977'
  + 'd26214ad4f1ff642a93d0925656aeab454fa0b60fcbb6c1bc570eb6e43e7'
  + '613392f37900748635ae381534bfaa558792bc46028b9efce391423a9c12'
  + '01f76292614b30a14272e837f3813045b035f3d42f4f76f48acd',
  'hex');


// Livenet, with root cert missing
SampleRequest.fcash3 = new Buffer([
8,1,18,11,120,53,48,57,43,115,104,97,50,53,54,26,145,33,10,179,14,48,130,7,47,48,130,6,23,160,3,2,1,2,2,9,0,132,145,79,189,177,108,195,183,48,13,6,9,42,134,72,134,247,13,1,1,11,5,0,48,129,180,49,11,48,9,6,3,85,4,6,19,2,85,83,49,16,48,14,6,3,85,4,8,19,7,65,114,105,122,111,110,97,49,19,48,17,6,3,85,4,7,19,10,83,99,111,116,116,115,100,97,108,101,49,26,48,24,6,3,85,4,10,19,17,71,111,68,97,100,100,121,46,99,111,109,44,32,73,110,99,46,49,45,48,43,6,3,85,4,11,19,36,104,116,116,112,58,47,47,99,101,114,116,115,46,103,111,100,97,100,100,121,46,99,111,109,47,114,101,112,111,115,105,116,111,114,121,47,49,51,48,49,6,3,85,4,3,19,42,71,111,32,68,97,100,100,121,32,83,101,99,117,114,101,32,67,101,114,116,105,102,105,99,97,116,101,32,65,117,116,104,111,114,105,116,121,32,45,32,71,50,48,30,23,13,49,55,48,51,50,51,49,56,50,50,48,48,90,23,13,49,57,48,52,50,53,49,57,49,49,48,48,90,48,129,190,49,19,48,17,6,11,43,6,1,4,1,130,55,60,2,1,3,19,2,85,83,49,25,48,23,6,11,43,6,1,4,1,130,55,60,2,1,2,19,8,68,101,108,97,119,97,114,101,49,29,48,27,6,3,85,4,15,19,20,80,114,105,118,97,116,101,32,79,114,103,97,110,105,122,97,116,105,111,110,49,16,48,14,6,3,85,4,5,19,7,53,49,54,51,57,54,54,49,11,48,9,6,3,85,4,6,19,2,85,83,49,16,48,14,6,3,85,4,8,19,7,71,101,111,114,103,105,97,49,16,48,14,6,3,85,4,7,19,7,65,116,108,97,110,116,97,49,21,48,19,6,3,85,4,10,19,12,66,105,116,80,97,121,44,32,73,110,99,46,49,19,48,17,6,3,85,4,3,19,10,98,105,116,112,97,121,46,99,111,109,48,130,1,34,48,13,6,9,42,134,72,134,247,13,1,1,1,5,0,3,130,1,15,0,48,130,1,10,2,130,1,1,0,228,32,37,54,154,128,60,27,68,35,74,39,157,18,59,97,14,193,23,132,82,252,124,87,242,87,100,146,225,18,49,102,190,213,238,193,29,18,168,184,36,144,79,119,170,97,102,206,110,17,21,56,32,65,33,6,155,94,207,248,31,209,171,39,177,185,71,92,73,215,104,14,245,244,6,245,122,24,113,183,115,146,167,181,196,55,15,80,75,161,117,97,127,120,254,36,201,237,118,21,75,70,170,103,124,246,70,58,32,41,9,113,27,52,206,236,190,14,231,185,118,108,253,112,24,136,107,103,229,24,241,172,57,163,113,81,82,214,46,89,84,127,52,212,64,237,61,250,1,169,42,66,237,11,34,28,9,49,68,237,99,248,108,35,0,184,207,25,43,117,146,151,50,175,99,196,21,38,228,253,105,115,95,0,98,198,28,45,188,181,111,100,57,255,155,190,98,80,125,165,39,82,193,217,159,36,175,187,58,107,92,152,152,157,33,150,251,107,217,204,131,165,171,33,240,96,233,85,231,244,90,1,201,239,231,130,241,92,212,138,184,36,214,39,45,178,183,28,137,136,208,32,113,232,5,223,2,3,1,0,1,163,130,3,54,48,130,3,50,48,12,6,3,85,29,19,1,1,255,4,2,48,0,48,29,6,3,85,29,37,4,22,48,20,6,8,43,6,1,5,5,7,3,1,6,8,43,6,1,5,5,7,3,2,48,14,6,3,85,29,15,1,1,255,4,4,3,2,5,160,48,53,6,3,85,29,31,4,46,48,44,48,42,160,40,160,38,134,36,104,116,116,112,58,47,47,99,114,108,46,103,111,100,97,100,100,121,46,99,111,109,47,103,100,105,103,50,115,51,45,55,46,99,114,108,48,92,6,3,85,29,32,4,85,48,83,48,72,6,11,96,134,72,1,134,253,109,1,7,23,3,48,57,48,55,6,8,43,6,1,5,5,7,2,1,22,43,104,116,116,112,58,47,47,99,101,114,116,105,102,105,99,97,116,101,115,46,103,111,100,97,100,100,121,46,99,111,109,47,114,101,112,111,115,105,116,111,114,121,47,48,7,6,5,103,129,12,1,1,48,118,6,8,43,6,1,5,5,7,1,1,4,106,48,104,48,36,6,8,43,6,1,5,5,7,48,1,134,24,104,116,116,112,58,47,47,111,99,115,112,46,103,111,100,97,100,100,121,46,99,111,109,47,48,64,6,8,43,6,1,5,5,7,48,2,134,52,104,116,116,112,58,47,47,99,101,114,116,105,102,105,99,97,116,101,115,46,103,111,100,97,100,100,121,46,99,111,109,47,114,101,112,111,115,105,116,111,114,121,47,103,100,105,103,50,46,99,114,116,48,31,6,3,85,29,35,4,24,48,22,128,20,64,194,189,39,142,204,52,131,48,162,51,215,251,108,179,240,180,44,128,206,48,37,6,3,85,29,17,4,30,48,28,130,10,98,105,116,112,97,121,46,99,111,109,130,14,119,119,119,46,98,105,116,112,97,121,46,99,111,109,48,29,6,3,85,29,14,4,22,4,20,165,105,138,112,218,161,64,93,188,221,26,2,233,93,184,165,26,170,221,127,48,130,1,125,6,10,43,6,1,4,1,214,121,2,4,2,4,130,1,109,4,130,1,105,1,103,0,118,0,86,20,6,154,47,215,194,236,211,245,225,189,68,178,62,199,70,118,185,188,153,17,92,192,239,148,152,85,214,137,208,221,0,0,1,90,252,104,175,199,0,0,4,3,0,71,48,69,2,33,0,235,151,195,31,196,176,22,241,181,150,113,177,184,185,126,129,244,193,62,243,11,183,85,160,220,123,250,104,239,131,22,21,2,32,121,107,28,254,2,126,232,38,149,125,242,22,115,6,156,58,112,223,33,221,134,139,248,252,197,33,187,102,96,100,109,86,0,117,0,238,75,189,183,117,206,96,186,225,66,105,31,171,225,158,102,163,15,126,95,176,114,216,131,0,196,123,137,122,168,253,203,0,0,1,90,252,104,180,42,0,0,4,3,0,70,48,68,2,32,18,70,1,35,114,116,214,52,45,28,249,10,80,72,78,252,87,139,79,8,151,183,192,123,193,49,238,27,132,95,130,132,2,32,118,114,255,79,171,189,66,175,212,250,248,91,33,148,81,223,15,136,235,107,60,66,75,214,242,105,6,200,240,214,11,84,0,118,0,164,185,9,144,180,24,88,20,135,187,19,162,204,103,112,10,60,53,152,4,249,27,223,184,227,119,205,14,200,13,220,16,0,0,1,90,252,104,180,224,0,0,4,3,0,71,48,69,2,33,0,185,8,32,27,186,160,33,80,70,30,105,97,216,179,117,162,48,101,220,103,88,178,35,86,135,143,42,176,134,78,137,26,2,32,104,75,86,208,190,225,209,65,241,125,209,80,170,181,60,118,232,73,241,247,26,87,186,102,5,95,78,120,83,254,48,225,48,13,6,9,42,134,72,134,247,13,1,1,11,5,0,3,130,1,1,0,32,16,146,183,128,136,147,128,107,160,143,171,254,235,215,108,218,18,150,13,84,146,29,185,15,222,34,109,9,111,117,80,151,130,47,78,76,91,192,255,76,183,160,211,251,171,0,254,18,99,198,0,27,80,110,210,207,158,116,141,5,138,212,2,116,145,0,9,141,135,108,25,5,170,131,79,186,255,163,96,170,100,167,84,63,209,27,221,92,179,44,11,122,185,49,171,17,202,109,182,58,187,180,137,228,107,23,91,174,126,204,145,77,174,162,179,137,139,245,205,152,2,34,161,176,203,155,250,194,184,214,144,91,99,136,29,204,216,67,32,227,193,171,115,37,146,226,109,120,156,215,115,220,128,231,128,57,129,190,179,225,99,196,90,158,58,54,89,213,221,176,52,62,248,141,241,86,207,229,64,186,155,182,99,169,243,14,218,126,23,158,107,139,106,95,14,168,135,67,84,63,52,14,80,238,84,140,158,26,72,54,67,104,144,250,21,215,198,36,84,113,128,73,252,39,36,26,174,132,250,214,138,204,43,123,38,140,33,53,6,176,203,74,45,111,217,84,65,191,157,240,177,115,145,142,199,10,212,9,48,130,4,208,48,130,3,184,160,3,2,1,2,2,1,7,48,13,6,9,42,134,72,134,247,13,1,1,11,5,0,48,129,131,49,11,48,9,6,3,85,4,6,19,2,85,83,49,16,48,14,6,3,85,4,8,19,7,65,114,105,122,111,110,97,49,19,48,17,6,3,85,4,7,19,10,83,99,111,116,116,115,100,97,108,101,49,26,48,24,6,3,85,4,10,19,17,71,111,68,97,100,100,121,46,99,111,109,44,32,73,110,99,46,49,49,48,47,6,3,85,4,3,19,40,71,111,32,68,97,100,100,121,32,82,111,111,116,32,67,101,114,116,105,102,105,99,97,116,101,32,65,117,116,104,111,114,105,116,121,32,45,32,71,50,48,30,23,13,49,49,48,53,48,51,48,55,48,48,48,48,90,23,13,51,49,48,53,48,51,48,55,48,48,48,48,90,48,129,180,49,11,48,9,6,3,85,4,6,19,2,85,83,49,16,48,14,6,3,85,4,8,19,7,65,114,105,122,111,110,97,49,19,48,17,6,3,85,4,7,19,10,83,99,111,116,116,115,100,97,108,101,49,26,48,24,6,3,85,4,10,19,17,71,111,68,97,100,100,121,46,99,111,109,44,32,73,110,99,46,49,45,48,43,6,3,85,4,11,19,36,104,116,116,112,58,47,47,99,101,114,116,115,46,103,111,100,97,100,100,121,46,99,111,109,47,114,101,112,111,115,105,116,111,114,121,47,49,51,48,49,6,3,85,4,3,19,42,71,111,32,68,97,100,100,121,32,83,101,99,117,114,101,32,67,101,114,116,105,102,105,99,97,116,101,32,65,117,116,104,111,114,105,116,121,32,45,32,71,50,48,130,1,34,48,13,6,9,42,134,72,134,247,13,1,1,1,5,0,3,130,1,15,0,48,130,1,10,2,130,1,1,0,185,224,203,16,212,175,118,189,212,147,98,235,48,100,184,129,8,108,195,4,217,98,23,142,47,255,62,101,207,143,206,98,230,60,82,28,218,22,69,75,85,171,120,107,99,131,98,144,206,15,105,108,153,200,26,20,139,76,204,69,51,234,136,220,158,163,175,43,254,128,97,157,121,87,196,207,46,244,63,48,60,93,71,252,154,22,188,195,55,150,65,81,142,17,75,84,248,40,190,208,140,190,240,48,56,30,243,176,38,248,102,71,99,109,222,113,38,71,143,56,71,83,209,70,29,180,227,220,0,234,69,172,189,188,113,217,170,111,0,219,219,205,48,58,121,79,95,76,71,248,29,239,91,194,196,157,96,59,177,178,67,145,216,164,51,78,234,179,214,39,79,173,37,138,165,198,244,213,208,166,174,116,5,100,87,136,181,68,85,212,45,42,58,62,248,184,189,233,50,10,2,148,100,196,22,58,80,241,74,174,231,121,51,175,12,32,7,127,232,223,4,57,194,105,2,108,99,82,250,119,193,27,200,116,135,200,185,147,24,80,84,53,75,105,78,188,59,211,73,46,31,220,193,210,82,251,2,3,1,0,1,163,130,1,26,48,130,1,22,48,15,6,3,85,29,19,1,1,255,4,5,48,3,1,1,255,48,14,6,3,85,29,15,1,1,255,4,4,3,2,1,6,48,29,6,3,85,29,14,4,22,4,20,64,194,189,39,142,204,52,131,48,162,51,215,251,108,179,240,180,44,128,206,48,31,6,3,85,29,35,4,24,48,22,128,20,58,154,133,7,16,103,40,182,239,246,189,5,65,110,32,193,148,218,15,222,48,52,6,8,43,6,1,5,5,7,1,1,4,40,48,38,48,36,6,8,43,6,1,5,5,7,48,1,134,24,104,116,116,112,58,47,47,111,99,115,112,46,103,111,100,97,100,100,121,46,99,111,109,47,48,53,6,3,85,29,31,4,46,48,44,48,42,160,40,160,38,134,36,104,116,116,112,58,47,47,99,114,108,46,103,111,100,97,100,100,121,46,99,111,109,47,103,100,114,111,111,116,45,103,50,46,99,114,108,48,70,6,3,85,29,32,4,63,48,61,48,59,6,4,85,29,32,0,48,51,48,49,6,8,43,6,1,5,5,7,2,1,22,37,104,116,116,112,115,58,47,47,99,101,114,116,115,46,103,111,100,97,100,100,121,46,99,111,109,47,114,101,112,111,115,105,116,111,114,121,47,48,13,6,9,42,134,72,134,247,13,1,1,11,5,0,3,130,1,1,0,8,126,108,147,16,200,56,184,150,169,144,75,255,161,95,79,4,239,108,62,156,136,6,201,80,143,166,115,247,87,49,27,190,188,228,47,219,248,186,211,91,224,180,231,230,121,98,14,12,162,215,106,99,115,49,181,245,168,72,164,59,8,45,162,93,144,215,180,124,37,79,17,86,48,196,182,68,157,123,44,157,229,94,230,239,12,97,170,191,228,42,27,238,132,158,184,131,125,193,67,206,68,167,19,112,13,145,31,244,200,19,173,131,96,217,216,114,168,115,36,30,181,172,34,14,202,23,137,98,88,68,27,171,137,37,1,0,15,205,196,27,98,219,81,180,211,15,81,42,155,244,188,115,252,118,206,54,164,205,217,216,44,234,174,155,245,42,178,144,209,77,117,24,138,63,138,65,144,35,125,91,75,254,164,3,88,155,70,178,195,96,96,131,248,125,80,65,206,194,161,144,195,187,239,2,47,210,21,84,238,68,21,217,10,174,167,138,51,237,177,45,118,54,38,220,4,235,159,247,97,31,21,220,135,111,238,70,150,40,173,161,38,125,10,9,167,46,4,163,141,188,248,188,4,48,1,10,129,9,48,130,4,125,48,130,3,101,160,3,2,1,2,2,3,27,231,21,48,13,6,9,42,134,72,134,247,13,1,1,11,5,0,48,99,49,11,48,9,6,3,85,4,6,19,2,85,83,49,33,48,31,6,3,85,4,10,19,24,84,104,101,32,71,111,32,68,97,100,100,121,32,71,114,111,117,112,44,32,73,110,99,46,49,49,48,47,6,3,85,4,11,19,40,71,111,32,68,97,100,100,121,32,67,108,97,115,115,32,50,32,67,101,114,116,105,102,105,99,97,116,105,111,110,32,65,117,116,104,111,114,105,116,121,48,30,23,13,49,52,48,49,48,49,48,55,48,48,48,48,90,23,13,51,49,48,53,51,48,48,55,48,48,48,48,90,48,129,131,49,11,48,9,6,3,85,4,6,19,2,85,83,49,16,48,14,6,3,85,4,8,19,7,65,114,105,122,111,110,97,49,19,48,17,6,3,85,4,7,19,10,83,99,111,116,116,115,100,97,108,101,49,26,48,24,6,3,85,4,10,19,17,71,111,68,97,100,100,121,46,99,111,109,44,32,73,110,99,46,49,49,48,47,6,3,85,4,3,19,40,71,111,32,68,97,100,100,121,32,82,111,111,116,32,67,101,114,116,105,102,105,99,97,116,101,32,65,117,116,104,111,114,105,116,121,32,45,32,71,50,48,130,1,34,48,13,6,9,42,134,72,134,247,13,1,1,1,5,0,3,130,1,15,0,48,130,1,10,2,130,1,1,0,191,113,98,8,241,250,89,52,247,27,201,24,163,247,128,73,88,233,34,131,19,166,197,32,67,1,59,132,241,230,133,73,159,39,234,246,132,27,78,160,180,219,112,152,199,50,1,177,5,62,7,78,238,244,250,79,47,89,48,34,231,171,25,86,107,226,128,7,252,243,22,117,128,57,81,123,229,249,53,182,116,78,169,141,130,19,228,182,63,169,3,131,250,162,190,138,21,106,127,222,11,195,182,25,20,5,202,234,195,168,4,148,59,70,124,50,13,243,0,102,34,200,141,105,109,54,140,17,24,183,211,178,28,96,180,56,250,2,140,206,211,221,70,7,222,10,62,235,93,124,200,124,251,176,43,83,164,146,98,105,81,37,5,97,26,68,129,140,44,169,67,150,35,223,172,58,129,154,14,41,197,28,169,233,93,30,182,158,158,48,10,57,206,241,136,128,251,75,93,204,50,236,133,98,67,37,52,2,86,39,1,145,180,59,112,42,63,110,177,232,156,136,1,125,159,212,249,219,83,109,96,157,191,44,231,88,171,184,95,70,252,206,196,27,3,60,9,235,73,49,92,105,70,179,224,71,2,3,1,0,1,163,130,1,23,48,130,1,19,48,15,6,3,85,29,19,1,1,255,4,5,48,3,1,1,255,48,14,6,3,85,29,15,1,1,255,4,4,3,2,1,6,48,29,6,3,85,29,14,4,22,4,20,58,154,133,7,16,103,40,182,239,246,189,5,65,110,32,193,148,218,15,222,48,31,6,3,85,29,35,4,24,48,22,128,20,210,196,176,210,145,212,76,17,113,179,97,203,61,161,254,221,168,106,212,227,48,52,6,8,43,6,1,5,5,7,1,1,4,40,48,38,48,36,6,8,43,6,1,5,5,7,48,1,134,24,104,116,116,112,58,47,47,111,99,115,112,46,103,111,100,97,100,100,121,46,99,111,109,47,48,50,6,3,85,29,31,4,43,48,41,48,39,160,37,160,35,134,33,104,116,116,112,58,47,47,99,114,108,46,103,111,100,97,100,100,121,46,99,111,109,47,103,100,114,111,111,116,46,99,114,108,48,70,6,3,85,29,32,4,63,48,61,48,59,6,4,85,29,32,0,48,51,48,49,6,8,43,6,1,5,5,7,2,1,22,37,104,116,116,112,115,58,47,47,99,101,114,116,115,46,103,111,100,97,100,100,121,46,99,111,109,47,114,101,112,111,115,105,116,111,114,121,47,48,13,6,9,42,134,72,134,247,13,1,1,11,5,0,3,130,1,1,0,89,11,83,189,146,134,17,167,36,123,237,91,49,207,29,31,108,112,197,184,110,190,78,187,246,190,151,80,225,48,127,186,40,92,98,148,194,227,126,51,247,251,66,118,133,219,149,28,140,34,88,117,9,12,136,101,103,57,10,22,9,197,160,56,151,164,197,35,147,63,180,24,166,1,6,68,145,227,167,105,39,180,90,37,127,58,183,50,205,221,132,255,42,56,41,51,164,221,103,178,133,254,161,136,32,28,80,137,200,220,42,246,66,3,55,76,230,136,223,213,175,36,242,177,195,223,204,181,236,224,153,94,183,73,84,32,60,148,24,12,199,28,82,24,73,164,109,225,179,88,11,201,216,236,217,174,28,50,142,40,112,13,226,254,166,23,158,132,15,189,87,112,179,90,233,31,160,134,83,187,239,124,255,105,11,224,72,195,183,147,11,200,10,84,196,172,93,20,103,55,108,202,165,47,49,8,55,170,110,111,140,188,155,226,87,93,36,129,175,151,151,156,132,173,108,172,55,76,102,243,97,145,17,32,228,190,48,159,122,164,41,9,176,225,52,95,100,119,24,64,81,223,140,48,166,175,34,254,1,10,4,109,97,105,110,18,31,8,176,176,62,18,25,118,169,20,200,224,211,190,19,131,14,226,117,67,159,166,136,94,214,203,1,126,58,155,136,172,24,139,149,194,207,5,32,143,156,194,207,5,42,78,80,97,121,109,101,110,116,32,114,101,113,117,101,115,116,32,102,111,114,32,66,105,116,80,97,121,32,105,110,118,111,105,99,101,32,52,97,75,84,119,90,101,109,102,104,100,109,115,66,90,65,84,85,107,99,97,81,32,102,111,114,32,109,101,114,99,104,97,110,116,32,66,105,116,71,105,118,101,50,43,104,116,116,112,115,58,47,47,98,105,116,112,97,121,46,99,111,109,47,105,47,52,97,75,84,119,90,101,109,102,104,100,109,115,66,90,65,84,85,107,99,97,81,58,76,123,34,105,110,118,111,105,99,101,73,100,34,58,34,52,97,75,84,119,90,101,109,102,104,100,109,115,66,90,65,84,85,107,99,97,81,34,44,34,109,101,114,99,104,97,110,116,73,100,34,58,34,84,120,90,53,82,121,67,104,109,90,119,50,105,115,75,106,74,87,71,104,66,99,34,125,42,128,2,179,191,103,84,171,141,78,161,213,37,249,234,51,232,101,125,137,192,199,131,226,240,220,137,249,250,62,201,248,74,209,55,71,11,14,65,112,221,179,102,108,152,81,206,132,14,177,138,241,155,216,23,230,193,208,139,113,122,191,124,122,19,128,214,110,124,162,177,174,17,70,100,26,17,21,167,122,23,151,89,175,5,100,156,220,127,6,159,28,194,146,218,158,49,253,111,74,234,84,4,87,22,234,95,184,238,71,5,33,233,133,252,3,233,42,42,162,37,152,29,248,148,43,32,170,17,144,53,74,234,172,15,168,167,103,105,190,155,167,31,124,227,44,162,202,182,247,240,23,78,232,208,248,237,74,156,13,238,163,161,62,138,61,20,59,127,150,70,181,36,108,87,49,129,109,220,249,82,36,114,238,193,59,9,35,177,2,249,214,53,86,125,158,169,110,116,252,81,60,227,167,24,212,97,19,195,225,146,95,142,212,175,118,117,15,91,198,154,222,124,191,107,104,92,59,173,146,246,180,145,86,249,117,121,119,155,94,131,224,228,213,85,123,162,108,221,131,8,108,93,208,13,157,191,172,81
]);


SampleRequest.coinbase = new Buffer(''
+ "120b783530392b7368613235361abe150afe0b308205fa308204e2a00302"
+ "01020210090b35ca5c5bf1b98b3d8f9f4a7755d6300d06092a864886f70d"
+ "01010b05003075310b300906035504061302555331153013060355040a13"
+ "0c446967694365727420496e6331193017060355040b13107777772e6469"
+ "6769636572742e636f6d313430320603550403132b446967694365727420"
+ "5348413220457874656e6465642056616c69646174696f6e205365727665"
+ "72204341301e170d3134303530393030303030305a170d31363035313331"
+ "32303030305a30820105311d301b060355040f0c1450726976617465204f"
+ "7267616e697a6174696f6e31133011060b2b0601040182373c0201031302"
+ "555331193017060b2b0601040182373c020102130844656c617761726531"
+ "10300e0603550405130735313534333137310f300d06035504090c062332"
+ "33303038311730150603550409130e353438204d61726b65742053742e31"
+ "0e300c060355041113053934313034310b30090603550406130255533113"
+ "30110603550408130a43616c69666f726e6961311630140603550407130d"
+ "53616e204672616e636973636f31173015060355040a130e436f696e6261"
+ "73652c20496e632e311530130603550403130c636f696e626173652e636f"
+ "6d30820122300d06092a864886f70d01010105000382010f003082010a02"
+ "82010100b45e3ff380667aa14d5a12fc2fc983fc6618b55499933c3bde15"
+ "c01d838846b4caf9848e7c40e5fa7c67ef9b5b1efe26ee5571c5fa2eff75"
+ "9052454701ad8931557d697b139e5d19abb3e439675f31db7f2ef1a5d97d"
+ "b07c1f6966266380eb4fcfa8e1471a6ecc2fbebf3e67b3eaa84d0fbe063e"
+ "60380dcdb7a20203d29a94059ef7f20d472cc25783ab2a1db6a394ecc07b"
+ "4024974100bcfd470f59ef3b572365213209609fad229994b4923c1df3a1"
+ "8c41e3e7bc1f192ba6e7e5c32ae155107e21903eff7bce9fc594b49d9f6a"
+ "e7901fa191fcbae8a2cf09c3bfc24377d717b6010080c5681a7dbc6e1d52"
+ "987b7ebbe95e7af4202da436e67a88472aacedc90203010001a38201f230"
+ "8201ee301f0603551d230418301680143dd350a5d6a0adeef34a600a65d3"
+ "21d4f8f8d60f301d0603551d0e041604146d33b9743a61b7499423d1a89d"
+ "085d0148680bba30290603551d1104223020820c636f696e626173652e63"
+ "6f6d82107777772e636f696e626173652e636f6d300e0603551d0f0101ff"
+ "0404030205a0301d0603551d250416301406082b0601050507030106082b"
+ "0601050507030230750603551d1f046e306c3034a032a030862e68747470"
+ "3a2f2f63726c332e64696769636572742e636f6d2f736861322d65762d73"
+ "65727665722d67312e63726c3034a032a030862e687474703a2f2f63726c"
+ "342e64696769636572742e636f6d2f736861322d65762d7365727665722d"
+ "67312e63726c30420603551d20043b3039303706096086480186fd6c0201"
+ "302a302806082b06010505070201161c68747470733a2f2f7777772e6469"
+ "6769636572742e636f6d2f43505330818806082b06010505070101047c30"
+ "7a302406082b060105050730018618687474703a2f2f6f6373702e646967"
+ "69636572742e636f6d305206082b060105050730028646687474703a2f2f"
+ "636163657274732e64696769636572742e636f6d2f446967694365727453"
+ "484132457874656e64656456616c69646174696f6e53657276657243412e"
+ "637274300c0603551d130101ff04023000300d06092a864886f70d01010b"
+ "05000382010100aadfcf94050ed938e3114a640af3d9b04276da00f5215d"
+ "7148f9f16d4cac0c77bd5349ec2f47299d03c900f70146752da72829290a"
+ "c50a77992f01537ab2689392ce0bfeb7efa49f4c4fe4e1e43ca1fcfb1626"
+ "ce554da4f6e7fa34a597e401f215c43afd0ba777ad587eb0afacd71f7a6a"
+ "f7752814f7ab4c202ed76d33defd1289d541803fed01ac80a3cacfdaae29"
+ "279e5de14d460475f4baf27eab693379d39120e7477bf3ec719664c7b6cb"
+ "5e557556e5bbddd9c9d1ebc9f835e9da5b3dbb72fe8d94ac05eab3c47998"
+ "7520ade3a1d275e1e2fe725698d2f7cb1390a9d40ea6cbf21a73bddccd1a"
+ "d61aa249ce8e2885a3730b7d53bd075f55099d2960f3cc0aba09308204b6"
+ "3082039ea00302010202100c79a944b08c11952092615fe26b1d83300d06"
+ "092a864886f70d01010b0500306c310b3009060355040613025553311530"
+ "13060355040a130c446967694365727420496e6331193017060355040b13"
+ "107777772e64696769636572742e636f6d312b3029060355040313224469"
+ "6769436572742048696768204173737572616e636520455620526f6f7420"
+ "4341301e170d3133313032323132303030305a170d323831303232313230"
+ "3030305a3075310b300906035504061302555331153013060355040a130c"
+ "446967694365727420496e6331193017060355040b13107777772e646967"
+ "69636572742e636f6d313430320603550403132b44696769436572742053"
+ "48413220457874656e6465642056616c69646174696f6e20536572766572"
+ "20434130820122300d06092a864886f70d01010105000382010f00308201"
+ "0a0282010100d753a40451f899a616484b6727aa9349d039ed0cb0b00087"
+ "f1672886858c8e63dabcb14038e2d3f5eca50518b83d3ec5991732ec188c"
+ "faf10ca6642185cb071034b052882b1f689bd2b18f12b0b3d2e7881f1fef"
+ "387754535f80793f2e1aaaa81e4b2b0dabb763b935b77d14bc594bdf514a"
+ "d2a1e20ce29082876aaeead764d69855e8fdaf1a506c54bc11f2fd4af29d"
+ "bb7f0ef4d5be8e16891255d8c07134eef6dc2decc48725868dd821e4b04d"
+ "0c89dc392617ddf6d79485d80421709d6f6fff5cba19e145cb5657287e1c"
+ "0d4157aab7b827bbb1e4fa2aef2123751aad2d9b86358c9c77b573add894"
+ "2de4f30c9deec14e627e17c0719e2cdef1f9102819330203010001a38201"
+ "493082014530120603551d130101ff040830060101ff020100300e060355"
+ "1d0f0101ff040403020186301d0603551d250416301406082b0601050507"
+ "030106082b06010505070302303406082b06010505070101042830263024"
+ "06082b060105050730018618687474703a2f2f6f6373702e646967696365"
+ "72742e636f6d304b0603551d1f044430423040a03ea03c863a687474703a"
+ "2f2f63726c342e64696769636572742e636f6d2f44696769436572744869"
+ "67684173737572616e63654556526f6f7443412e63726c303d0603551d20"
+ "0436303430320604551d2000302a302806082b06010505070201161c6874"
+ "7470733a2f2f7777772e64696769636572742e636f6d2f435053301d0603"
+ "551d0e041604143dd350a5d6a0adeef34a600a65d321d4f8f8d60f301f06"
+ "03551d23041830168014b13ec36903f8bf4701d498261a0802ef63642bc3"
+ "300d06092a864886f70d01010b050003820101009db6d09086e18602edc5"
+ "a0f0341c74c18d76cc860aa8f04a8a42d63fc8a94dad7c08ade6b650b8a2"
+ "1a4d8807b12921dce7dac63c21e0e3114970ac7a1d01a4ca113a57ab7d57"
+ "2a4074fdd31d851850df574775a17d55202e473750728c7f821bd2628f2d"
+ "035adac3c8a1ce2c52a20063eb73ba71c84927239764859e380ead63683c"
+ "ba52815879a32c0cdfde6deb31f2baa07c6cf12cd4e1bd77843703ce32b5"
+ "c89a811a4a924e3b469a85fe83a2f99e8ca3cc0d5eb33dcf04788f14147b"
+ "329cc700a65cc4b5a1558d5a5668a42270aa3c8171d99da8453bf4e5f6a2"
+ "51ddc77b62e86f0c74ebb8daf8bf870d795091909b183b915927f1352813"
+ "ab267ed5f77a22b801121f08d8e51a121976a914f5fa7bb3c2245e646925"
+ "4c074c062af292ce008c88ac189295e7af0520f49be7af052a315061796d"
+ "656e74207265717565737420666f7220436f696e62617365206f72646572"
+ "20636f64653a205738375858335753323468747470733a2f2f7777772e63"
+ "6f696e626173652e636f6d2f72702f353566396361373033643564383030"
+ "3038633030303166343a2062623739623666323331306533323162643362"
+ "316439323965646265623335382a8002b45d9b5d48d566d577ec4973b4b5"
+ "7a4930f173be6545d9fc367f9b55f90a669504085db971107a09c25d1e30"
+ "dcaf54ce86f177685751feebd5c66c40d7d9daad08129fe10450518d48e4"
+ "9ae4e03a8c4939010f9f222de60b9e5df210e066115cbc2ad92f51fcdc35"
+ "eaa3ee2430687ff46053e460b6f93deede2ee09a8841eec11b6f5d1bbcf2"
+ "6708e5c12d427959569d9af629f8940736ac3941f78eafb2c2e400dfcc76"
+ "e729d13c4a9d0ec834515cf7287188589e5e0e505a7a7daab1fa8ac4f674"
+ "5a0eae2daa61d73a7e3fc56ca94457e2aa164a959b05bb91b797828cb7c4"
+ "d8b05395840a40ef51a0a0f93d13dce15e5f5f9ede08b3510701a1cac6a9"
+ "9c06"
  ,'hex');


module.exports = SampleRequest;
