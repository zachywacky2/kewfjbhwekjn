"use strict";
const urlParams = new URLSearchParams(location.search)
window.canvas = document.getElementById("overlay")
window.ctx = canvas.getContext("2d")
window.canvas2 = document.createElement("canvas")
window.ctx2 = canvas2.getContext("2d")
window.savebox = document.getElementById("savebox")
window.boxCenterTop = document.getElementById("boxcentertop")
window.uploadWorld = document.getElementById("uploadWorld")
window.saveDirections = document.getElementById("savedirections")
window.message = document.getElementById("message")
window.worlds = document.getElementById("worlds")
window.servers = document.getElementById("servers")
window.marketplace = document.getElementById("marketplace")
window.quota = document.getElementById("quota")
window.messages = document.getElementById("messages")
window.messageHolder = document.getElementById("messagesHolder")
window.messageInput = document.getElementById("messageInput")
window.url = document.querySelector("#editworld #url")
window.editworld = document.getElementById("editworld")
var hoverbox = document.getElementById("onhover")
window.help = document.getElementById("help")
window.onscreenControls={
w:document.getElementById("controlW"),
a:document.getElementById("controlA"),
s:document.getElementById("controlS"),
d:document.getElementById("controlD"),
" ":document.getElementById("controlSpace"),
"shift":document.getElementById("controlShift"),
}
window.onscreenControl_Element = document.getElementById("onscreenControls")
canvas.width  = window.innerWidth
canvas.height = window.innerHeight
canvas2.width  = window.innerWidth
canvas2.height = window.innerHeight
ctx.imageSmoothingEnabled = false
window.loadProg = document.getElementById("loadProgress")
window.loader = document.getElementById("loader")
window.loadBar = document.querySelector("#loadBar div")
window.themeColor = document.getElementById("themeColor")
let touchScreen = "ontouchstart" in document
if(!touchScreen) onscreenControl_Element.style.display = "none"
function MineCraft() {
// cache Math object
const { Math, performance, Date } = window;
const { cos, sin, round, floor, ceil, min, max, abs, sqrt, atan, atan2 } = Math;
const rand = function(a,b){
if(arguments.length === 2){
return (Math.random()*(b-a))+a
}else if(arguments.length === 1){
return Math.random()*a
}else return Math.random()
}
Math.PI2 = Math.PI / 2
Math.PId = Math.PI * 2
// Shh don't tell anyone I'm override native objects
String.prototype.hashCode = function() {
var hash = 0, i, chr;
if (this.length === 0) return hash;
for (i = 0; i < this.length; i++) {
chr   = this.charCodeAt(i);
hash  = ((hash << 5) - hash) + chr;
hash |= 0; // Convert to 32bit integer
}
return hash;
}
var fileReader = new FileReader();
uploadWorld.onchange = function(){
var file = uploadWorld.files.item(0)
if(!file) return
fileReader.onload = function(){
var res = fileReader.result
try{
JSON.parse(res)
}catch(e){
alert("Invalid JSON\n"+e)
}
boxCenterTop.value = "JSON"+res
}
fileReader.onerror = function(e){
alert("Error loading file\n"+e)
}
fileReader.readAsText(file)
}
let setPixel, getPixels;
let spawnEggOverlay, spawnEgg
function textureUpdated(){
spawnEggOverlay = getPixels("0g0gj000í8WéŞZĊóWĎĂHĶ;Z÷-ZåŎYĞłHĲ$YĖĢZðoHņéZĦŢZŊ÷WĪcWĒĒYÚĞZâľH0000000000000000000000000000000004w04000000õï0cÝ00001h90k000000lw00000000000Ľ000000Bë3Ä00004(-00000004Ę0f0010000023ÆmĠë00000Ø8nEë00000001g000000iù00000000000000")
spawnEgg = getPixels("0g0gg000éŞZÚĞZņéZĲ$YŒĖYŚĶWŊ÷WłÚYŖĦZŞņHŎĆHÒþHËâZĮsHÎðW00000000000000000001w0000003T0000000U0000000Ô20001ë6ÿQw001åđĘ4w00jĘ5ë4R000ĘûIQ{000ãÀIQd001î0400001ŋ0400000yQQŗ00000wf00000000000")
}
function lerp(t, a, b) {
return a + t * (b - a);
}
function mix(r,g,b,r2,g2,b2,amount){
r = lerp(r,r2,amount)
g = lerp(g,g2,amount)
b = lerp(b,b2,amount)
return [r,g,b]
}
var grassColor = {r:71/255,g:206/255,b:49/255}
var foliageColor = {r:26/255,g:191/255,b:0}
var leafColor = {r:72/255,g:181/255,b:24/255}
const semiTransTextures = []
window.semiTransTextures = semiTransTextures
const textures = {
grassTop: n => {
/*for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
const d = Math.random() * 0.25 + 0.65;
const r = 0x54 * d;
const g = 0xa0 * d;
const b = 0x48 * d;
setPixel(n, x, y, r, g, b);
}
}*/
const pix = getPixels("0g0glþÇHĪcWJPWðoH÷-ZéŞZĆåZóEYĎĂHÞĮWĊóWĂÖYí8WĒĒYĖĢZâľHĞłHĢŒYåŎYĚĲWĦŢZ0QMùČ(eOĉA1k5ęÙ#ÀwùÔÁaOĄR1Ăňĥùäĵ1$Ċ#82t5ÃsĮ-ŕôĿðüŋÈŋð0boeİsëFùx(ŌoŇňw4wĳÞl33ðĩEĕRŇľMĭăÆxIĬ3wR%ĔoXĹ{õÇëðSícùĩs4rðĈc[0òFüďIoâIß-÷ÃySÐÌyĕìÀĂĝtĖÂîFĜ2E0+Āřoeá$2BaĸIō");
const c = grassColor
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, (pix[i] / 255) * c.r * 255, (pix[i + 1] / 255) * c.g * 255, (pix[i + 2] / 255) * c.b * 255, pix[i + 3]);
}
},
grassSide: n => {
/*const pix = getPixels("0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
const { random } = Math;
for (let x = 0; x < 16; ++x) {
const m = random() * 4 + 1;
for (let y = 0; y < m; ++y) {
const d = random() * 0.25 + 0.65;
const r = 0x54 * d;
const g = 0xa0 * d;
const b = 0x48 * d;
setPixel(n, x, y, r, g, b);
}
}*/
let pix = getPixels("0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
pix = getPixels("0g0gdĒĒYJPWþÇH÷-ZĆåZĚĲWí8W000óEYðoHĖĢZâľHéŞZ1z12A4ÄR31Å6Â138DÇ7n4!çDGGnGĮ,GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
const c = grassColor
for (let i = 0; i < pix.length; i += 4) {
if (pix[i+3]>0) {
setPixel(n, i >> 2 & 15, i >> 6, (pix[i] / 255) * c.r * 255, (pix[i + 1] / 255) * c.g * 255, (pix[i + 2] / 255) * c.b * 255, pix[i + 3]);
}
}
},
leaves: n => {
const { floor, random } = Math;
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
const r = 0;
const g = floor(random() * 30 + 100);
const b = floor(random() * 30);
const a = random() < 0.35
? 0x0
: 0xff;
setPixel(n, x, y, r, g, b, a);
}
}
},
/*oakPlanks: n => {
for (let y = 0; y < 16; ++y) {
const a = 3 === (y & 3)
? 0.7
: 1.0;
for (let x = 0; x < 16; ++x) {
// these conditions are weird; can some comments be added here?
const mid = x === 8 && (y & 7) > 3 && a === 1
? 0.85
: 1;
const rit = x === 15 && (y & 7) < 3 && a === 1
? 0.85
: 1;
const r = (Math.random() * 0.1 + 0.9) * a * mid * rit;
setPixel(n, x, y, 190 * r, 154 * r, 96 * r);
}
}
},*/
oakPlanks: "0g0g7ĢVZĖ*HĩãWýĻWĆkZéîHÒRZ4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
hitbox: "0g0g100W",
/*n => {
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
setPixel(n, x, y, 0, 0, 0, 0xff)
}
}
},*/
crack10: "0g0g3000?kHĲ$ù444S9Æ4SiČÆùB9ĈgÈ@kkĈQoÖ0UBíÁđp0ĎiÎ04KSQ]gÀĀùlčgg×^BBëýa6À×À4ĈSČ",
crack9: "0g0g3000?kHĲ$ù04001Æ4SiČÆùB9Ĉgq@kkwQgÖ0UBí1đp06iÎ04SRQ]gÀĀùlčgg×^wBëý06À×À8ĈSČ",
crack8: "0g0g3000?kHĲ$ù00000À000ČÀ059Ĉga@kk0QoÖ0UBí1đp06iÎ04KRS8ùÀë0lč0g×^0Bël0aS×S0ëëë",
crack7: "0g0g3000?kHĲ$ù00000g000AÀ009Ĉ00@gk0QgÕ0UBë1đp062Ï04SS08ùS00lë00×S00ëü000E00000",
crack6: "0g0g3000?kHĲ$ù0000000004À009Ĉ006gk0QgÕ0UBë1đq062K080S00gS00lë00×S00ëù000w00000",
crack5: "0g0g3000?kHĲ$ù0000000000S001ë006gg04gK0UBë1đq022K000S000S00lë00!S000ë000000000",
crack4: "0g0g3000?kHĲ$ù0000000000000100060004gS0kBë0Fo002K000S000S005ë00a00000000000000",
crack3: "0g0g3000?kHĲ$ù000000000000000004000400045009q002K000S000S001ë00200000000000000",
crack2: "0g0g3000?kHĲ$ù000000000000000000000400040009g002K000S000ë000000000000000000000",
crack1: "0g0g3000?kHĲ$ù0000000000000000000000000000010002S000ë0000000000000000000000000",
none: "0g0g1000",
/*n => {
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
setPixel(n, x, y, 0, 0, 0, 0)
}
}
},*/
dirt: "0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ",
stone: "0g0g4÷-ZéŞZâľHÖĎY0ÖĢVÇýÅōÜēđVÀ?5×þĎSB?VØĠü8!VėĢÈý1k5ÄÁÀk1ŀėā×VTV4×@ÿŕ6þčĐÖVV0VÈTÒ",
logSide: "0g0g6âÐH{řHúīW-ĉYËyYāŋY50ķcyX6ħœcy4eSœ4i4{SQgNkQSīĘSÀSXTęgÀëïwT0ÀìXy1Tg5ķyh?g0ķwhko0x3gko4x3Ĉ/8Č5jĘ(wĈX1Àg0SĈj4iëSĊh42X",
logTop: "0g0g9ËyY{řHâÐHĢVZĖ*HĩãWéîHýĻWĆkZ1210x0g0jO))U>OM3ÓGñIIGÀ3ÒÃO)O,(4àQQQQ-Sjî[äñá,T4á@QQá[(4î[]XX-S4î[]áá,Skî[QQX[T4à[ãäX-S4îQQQQ,Sjî)OO*,T3ññGGGG(3OQ)?QO(1010x0i0",
bedrock: "0g0g5ÎðW(ĪWVVHþÇHwíW4JĀ|iów(Ī%IÁ(ĀPÒAķ{5j]J^ïJ^A+1FyúMyÎÙwĿTĘĳPkú(üRdĊÂdðłQĩóxiÆ1ùŀïĞ9òyÀÚ0ŃQùòcJ^c*hCkr1iòTĜ^(ĀĿERÀ",
glass: "0g0g5ĺĖYē|Yí80æģHôcZ0000019AJPAú9wJPAû94JPAû8ČJPAû9AJPAü9AJPAû9AJPAü9AJPAü9AJPAü9AJPAü9AJPAüFAJPAk9AJPwüFAJPAúCpAJP9",
cobblestone: "0g0g6ÚĞZÎðWĎĂHÁ?WĞłHóoY5C^óăl!ÈŋÄě?!ĈVĐmÕCíÕĈļ_KĿöCAđì_TãĬ?UļÕA!cĜbTęh|6wdþĹÆMÁSĜîÁĊó_wmüĈi$QģBmwÏĐr?MÈVmíÕ^ó8ĜlP)úT4ĿĐ",
mossyCobble: "0g0gbÎŋWÁàYĎĂHÇĜWæ*HßlWÎðWóoYĞłHÚĞZÁ?W1yMj?6äBiñÞ)ÀÞÔÿÏßúÀ3úhåÓåMàågÀhđÎnÐÓâV3ì?ßþďwÝ,DgDåMnåiGhnúV1ÿÔúkÀgÝÀ+đjÃ0āG(j1å0MhpûgÂÞjj4ÁÎßDj?ú?5þGÿ47ÞÀÿåhåâååpGþn1nÓûhmÔíÝ",
stoneBricks: "0g0g7óEYĆÖZÇÒYéŞZåľYÖĞYÎðW4JPAù2$(0dĞĩxðłÙ8Ł&(sÎĮyNįĪß.ÈiğAõ^ŉĞłÚĞł×ŀ%JÉÚĞAJR4JPë0Łxë3dðŉ&8rK,!MĭĿÚĠŉi(ŋJĲÏdįŃĞł×ĞłÚłÚJ_ÚĞ",
mossyStoneBricks: "0g0gcóEYĆÖZÎŋWßlWæ*HÁàYéŞZÇĜWÇÒYåľYÖĞYÎðW1z)>xQ3?m7>R6ÓÏDgÔNNÓ(ãEmþÝ.KÖÖäpFþCÏ+ĂÕ9ßÖāzDãýĂGđďyGāÔģïģIïVÉģQMh81hjQw06ÕgK036KÓĀmùùCK6ÏĐpÖÓÝÓÓJĀ3@6āāđyĀ4ÖþÖĒGFÕÿåđĂĝVÉIïVģV",
bricks: "0g0g9ęXZāUWòĞHĬčWĊnZö>ZéjHÝŚWĒÆZ0iO(0k(0hUÒhhUÎhÔäGVÔáâÓy]RyA]RyO0gk(0giÎhlÑÒVVÑÒmÓäGÒÄáRyA]Qyy]0kO(gkO0hUÁhhÑÁhÓáÓVÓäÒVA]Ryy]Ryg0gi(0gkÎhhUÁhhÑãÓÓäãÓÓäRyy]QyAI",
lapisOre: "0g0ge÷-ZéŞZâľHÖĎYËâZpÉZxÕYloZgłZĊóWhqZ?ĥZ×ÍHgŀZ1gixzyg0h)>w1jQiiÄÅ)Rwñh19aDĘhùyxiAR1Q2hgj?ĉjÕzwx]Ĥğ1Ĥ0h!ġā4Opw1bİ1/?GkRpúM/Éğ/OMOĊzôħ#Îhéĸgā1cęiādOçěĀĘ0iĤÁĤòFúixÉåpúyxhh9úhhh0",
redstoneOre: "0g0geJ-ZéŞZâľHÖĎYÖâZügHįgHţ0WŤâZīgHü0WťEYĦPWśÞZ00ixzyhhhxxhhjNiiOzQyxhhhi*VOyiyxCÄäĂiRhgwÿğħhÚwxhcĳ2ighA>zyhAQh%ï1g5ÒÕĹlĸh01įĥĨMxyOx$ĳyhj)Qhh0giBĽļTmķN0gôħyg2wixc1hh00hhhyg1ih",
emeraldOre: "0g0gc÷-ZéŞZâľHÖĎYÁčWłťYnãW1ňY*ÐZ>įHuÏYnkH00ixzyhhhQg01QNikÄyhAÄhhhÔhT0Ô2yxh4ìg02hgg9ĂRzzwx-ýæìxkTA]ÿēXy?Î?ÎĢ0yhmßmÝ0h1Q(1(xgjpĀNyhhh1åÅĉgiyQiçæĚN0kÄiEĈ2wixÔ1(1g0hh0yg0ih",
diamondOre: "0g0ga÷-ZéŞZâľHÒþHv|HGąWyÇY÷ģWľZHĊóW1gixzyg0hx(01iOxiOSjNzÄh01Ý*Ô1Ýyxhz(Þx2hgi-Ãiïzwy8U@Þ@hh3(åGO7gā*[1zïxh2nÞMB@Ô9úMxR(G3Nyhhg02*K1i3M2ÆU@20âÐxþ[ÝhiD01gÞyxhhhwhhh0",
goldOre: "0g0ga÷-ZâľHéŞZÖĎYąĩWËâZőÝZZĜYĊóWZŢH00hijhyyyiRzyz*xxO3UMlURw2*@TB@TizUÔ>0ÓíwzÔåÎjIgiwðã]hyyhOoÕíhmR3@8]0yNxxÔíë2VÃ2(I1OlQÐMyO(2)Óÿ>xQÎAoÔäì4Ôÿ8i@ìgxðÝyyI0Kywíhw2xy",
ironOre: "0g0g9÷-ZéŞZâľHÖĎYâüZòļHĖ,HŁġWŊaY1hixzyy0hzMg1?UiiÄÂjylÎhlÔ1zOxiyw0z*ÄÒOxghÄGñÎBKxg0ÔÝig1yjN01zMh0*ÐNkÄRig@ÔÝgÔ01M0ä3x0iyhh0ghkÀgiNÄ2?ÔãÂ5Ïgi6äK1gUxhg01hh0hyh0ih",
coalOre: "0g0ga÷-ZéŞZâľHÖĎYËâZAJH-ŚH)ĺH$ĚZPzZ00ixzyhhhxxQTj)iiOAÄáxñhkyoÔĀÁiyBßy]VRyhg1x02A>wwiRyiÕÑhAAÄXh@ú02lÖäiiyigAñRw1kTM2Qiiy?ÐhQAhxQyykÇâÀ4þÂO2@UyAâRxiyhähTh0hyx2g1ih",
coalBlock: "0g0g5sÞZkÁHc(Z4gHEĊY0ü_ÑĎĸAĊăÒ)SFĞòÚĚP|ċ1AĚÃÚg9FĚă$J^ÚĞòÕiûÖiPÑüĸy2ÃÒCI4üłÚkTF(ÉEĊ^ÚJú5NúFĜ]ÚüX5g9ÚĊxÙíÃÚgÃÕJăQJòQüł",
ironBlock: "0g0gbĺ;ZĪcWŚĶWŖĦZŒĖYŎĆHĢŒYĚĲWņéZŊ÷WľËH1g0001hgiyyO)VVÁlVVVVVVÄäIIIāĂĒďiyyzOVVÄlVVVVVVÄäIIāāĒĒďizOOVVVÄlVVVVVVÄäIIIòāĒďiyyzO*VÄlVVVVVVÄäIIòāĂĒďiyzO*VVÄlVVVVVVÄhhhmÎÓÓÓ",
goldBlock: "0g0g9ŞNHšřWĹÃWZŠWZŢZZĜZZÐZZXYĵNH00h01hg23QVO*ÄÐN4ÓàVKh7N4Ô*ÅK0GÂlâVã0ÔãÂlVÅK6VKo3VGãÒÄ1o3ÅGÓGK18lGãÔãK0ÏlGÓGÓÓ7ÏmãÒÄÓÓÅ8gÓVK65Ä8gÒÄ1gGKÏhGKh6Ó0ßgg1gÓ0ÔÆyíEIyIyI",
diamondBlock: "0g0g9_ĦHW÷HncHľZHZZZćťYÔŅWàŖWeŒZ00h01hg23QVO*ÄÐN4ÓàVKh7N4Ô*ÅK0GÂlâVã0ÔãÂlVÅK6VKo3VGãÒÄ1o3ÅGÓGK18lGãÔãK0ÏlGÓGÓÓ7ÏmãÒÄÓÓÅ8gÓVK65Ä8gÒÄ1gGKÏhGKh6Ó0ßgg1gÓ0ÔÆyíEIyIyI",
redstoneBlock: "0g0g5ŋëYĤëYČKYÝ(WüÀW0000004íÂQí]4XĂPyI4ċzßCI0đs}Q05@łÚĘI5ĐłÚİ8a@łÚĠù9ołÚİ859q÷]I5]łdīë4đsÛ]į5BAJAù0īköyI4ù9]J]000000",
lapisBlock: "0g0gdB×YxPZ*āWMIYtFHxEYsŐWt8HoĿHoĿYt7ZFÆZkĮW100gzkkkljÁÄâÓâÆ5MnVâåÒæ7ÁVÒÁãÔæ5ÞÅGÒrãÈbVVGÔĝÄä5ĝââåÔÅ×7ÅÔGğþÔĂDÔããÅãýÈDÓÞÄãÓþÆ7ÖÒlÔÅÖÆnâāÔÓlãä5ãÇþÖâÅÙlÅÓÓþÔGÆ@ÅGÓãÓâÊoIIñõāĳĳ",
emeraldBlock: "0g0g6nkHqěHîŁZ>įHnãWuÏY0000019AĂÖ]ń800w0Ëc)ûJ@Ë8w00mV8wJÚoÒcwăúĀ?c(ĂúĀ?8(ŋ4gÒc(ŋCgÒcħĄim?gĩPAþ?cB01ĠÒgJPAJËg]4ù8ļ+łÚĞłÖ",
tntTop: "0g0g7ĿęYŐ1Y÷-ZĘÂHVVHùęWgTZ4ë]4ë]FNûFNû!ÂĎĸËýÛĮĕÜÓŔ4œ]4Ň]FNěó;û!]ĞŀÇýÛľ+Ĺ[ĕ4òĞłc]!{ĞĹ;û!ÃþĸÖlÛŀĔøÄŔ4ħÝĿį]!NċMOjFÂýFÂýÛĽŔÛĽŔ",
tntSides: "0g0gaŐ1YĿęYĘÂHùęWZZZĶ;ZņÚY)ļHoÐZĦĲW0i0i0i0ihzhzhzhzhzhzhzhzhzhzhzhzhzhzhzhz?ÓVÓÒÄÓÑ@GðâÆÔäUÖÆVGÅÄãÓ?ÔÓãGVïþ@ÆÄâÆVðUāāāāāāāāyOyOyOyOhzhzhzhzhzhzhzhzhzhzhzhzyzyzyzyz",
tntBottom: "0g0g4ĘÂHĿęY÷-ZùęWkkkkØØØØØØØØZZZZkkkkØØØØØØØØZZZZkkkkØØØØØØØØZZZZkkkkØØØØØØØØZZZZ",
acaciaLogSide: "0g0g6ÖïYÇQYåĭYÁAWÇUZ÷nH50ķcyX6ħœcy4eSœ4i4{SQgNkQSīĘSÀSXTęgÀëïwT0ÀìXy1Tg5ķyh?g0ķwhko0x3gko4x3Ĉ/8Č5jĘ(wĈX1Àg0SĈj4iëSĊh42X",
acaciaLogTop: "0g0gbÖïYVQYÁ)HPjZġîHĕàWĨěZöNYāRYĉÃW?3Y1xizNj1g4Q??ÒUQTAGIĀāāIÏkãÑQ?Q]>čXVVVVPÂ)üÆòĀï]Á*ïÅVVïÆTBüÆÇýýPÀ5üÆÇïï]À5üÆVVýÆÁlXÆñòýPÂBüVVVV]Â)ü?QQ@]Ã)ĀĀIIII>ČQV?ÄVQTgNxg0iz(",
acaciaPlanks: "0g0g7ġîHĕàWĨěZāRYĉÃWöNYòiY4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂTAX40cùĪzSāAAā4ŁğãļłĞSA4PkiA9cë0PNgÐ0İAĽŔÉGËĞ",
birchLogSide: "0g0g8ŚĦYņ|HłÙZZZZĦšZÎâH)ĹYŖĵY0Č0Q4ëQ0rÎiÀÚJî04rÚ_ĝTĞĺSFÛđĘĔĝwòTBãĘ4]ÚìĻ?+łÖvĩÎwņŔğłÙjZÚëù]+Ŀ1iĿTĞĪÚŝĩB0ùfŜ&ķ6ĿQēĞŁČăÏļ%9Àł5wù",
birchLogTop: "0g0gaZZZŒĖHĂÆWÁ)Hľ8HıľYľEZĎÄHĖGHĢďH1xizNj1g4Q??ÒUQTAGIĀāāIÏkãÑQ?Q]>BXVVVVPÂ)üÆòĀï]Á*ïÅVVïÆTBüÆÇýýPÀ5üÆÇïï]À5üÆVVýÆÁlXÆñòýPÂBüVVVV]Â)ü?QQ@]Ã)ĀĀIIII>AQV?ÄVQTgNxg0iz(",
birchPlanks: "0g0g7ľ8HıľYľEZĖGHĢďHĎÄHĆCW4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
darkOakLogSide: "0g0g6;ĨZ(úW]ňZEìW(úHÇiY50ķcyX6ħœcy4eSœ4i4{SQgNkQSīĘSÀSXTęgÀëïwT0ÀìXy1Tg5ķyh?g0ķwhko0x3gko4x3Ĉ/8Č5jĘ(wĈX1Àg0SĈj4iëSĊh42X",
darkOakLogTop: "0g0gb;ĨZ)ĉYAÞWsKZ{ĨY]ęHÀňY(ÝZ-úW;ĉW(úH1xizNj1g4Q??ÒUQTAGIĀāāIÏkãÑQ?Q]>čXVVVVPÂ)üÆòĀï]Á*ïÅVVïÆTBüÆÇýýPÀ5üÆÇïï]À5üÆVVýÆÁlXÆñòýPÂBüVVVV]Â)ü?QQ@]Ã)ĀĀIIII>ČQV?ÄVQTgNxg0iz(",
darkOakPlanks: "0g0g7{ĨY]ęHÀňY-úW;ĉW(ÝZEKZ4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
jungleLogSide: "0g0g9ÇhYÖNWéßHÀŘHSĸW;ĨWVMYâJHÎÏW1y3OOhg004S404VQQ@ä?US4xh0hy33O(Sh04Q6ñK03OÕÑ??Vh10OO02x??V1g>O(0iwQÁy00QOñðQO)Väë0hhgÕñ4?U>(>UhQ0xh6KQQjÕÓ3)Q010Q?ÀhTg01g>O00OO",
jungleLogTop: "0g0g9éßHÎÏWSĸW;ĨWĢmHđŌHĦ+YýČHąīY1xiOyi1g4Q??ÒUQTAGGñIIGÏkãÑQ?Q[>BáVVVV]Â)XÅäñâ[Á*âÅVVâÅTBXÅÆïï]À5XÅÆââ[À5XÅVVïÅÁláÅGäï]Â*XVVVV[Ã)X?QQ@[ÃAññGGGGRAQV?ÄVQTgzxg0izw",
junglePlanks: "0g0g7ĢmHđŌHĦ+YýČHąīYåÃHÖiZ4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
spruceLogSide: "0g0g6-úW(ÝY{ĨH$ÀY$ÝYUňZ50ķcyX6ħœcy4eSœ4i4{SQgNkQSīĘSÀSXTęgÀëïwT0ÀìXy1Tg5ķyh?g0ķwhko0x3gko4x3Ĉ/8Č5jĘ(wĈX1Àg0SĈj4iëSĊh42X",
spruceLogTop: "0g0g8UňZQĩWÇiHìîYåÐHòûYÎyZÞRZ4wSQ20%ğsĚ+ŀd%ĦZŤĐdÈłÞğĀj.AJ[ŇLġğŢ[ĉj]ČûPĀjġĎĺĮŇjġĎĺ[ĈOġČûİĉj.ĚņĮŇjġAJ[ĈLğrÚľĉfŖĞłÚĀdġsþ@Ŀ40SQ2ë",
sprucePlanks: "0g0g7ìîYåÐHòûYÎyZÞRZÇiHUňZ4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
sand: "0g0g6ŎăYł/WŊØWľpHĹŏYŖĔY4Ċĸ?ĊĂÑĚŁõr8@+9AĚŀFNĺPĊİÓþóEþ^$üúÒNÇKğÇÛiĲ$þ_%ĚbÒiĄÖüÇ5JÉ(ĚÃ(ĊıBoıÙüÇPĞÇÒĎôlmı?laEĊÇEĒú?oò?kó$üÁ",
gravel: "0g0g8ÒÒYó7Zþ-ZÞĎYþÇHìŞZĚóWĚĢZ5,$âł#þģ_ĔÂ{ĝíİþĀĳĜĺÊĞ/ÚÓŋńĝôdlĈİÿİØ$#èßgŔùĿÒčģÎðÅÖ$ÇńčY#üŁĴáįÆĚěKĞj<Ùł#ĔłÙ..$BôFĒŁŌ(ĹÉĐþcGDÚ)ľË",
blackConcrete: "0g0g48wZ8MW4wZ8xWmeşŞÑØĪĳ9ŠóşĶøŞ;îŃÓyÀĈĶÃĞX^æĆşŒĔ<~Ŕ<ĢL4ĲţŘŇěøÌĩĶõ;ŞkŇěĚċŇŖĝĜř,ŉĩ",
blackWool: "0g0gfcMWcTH8MWgÁYoÎZcMHkÎZ8wZkÁY8xWAJYgTH4wZsßWwíH1w)5ÑßIFIĒQģ9Éĩr|ģŔô|Qő]ì|ę<bńìĕô8QGÆÂQDDd717rýbĒQOĠ^ØĒ]hĒ@ń5|ÕńQBĽ1ÉÇ:yÉĜGĠ8ĒĜĒńQĕ@ĻĠîEwIhQ0ÆGĠhGŅD)XĒò@őĻôç|ģŁŔôĿXČVXgùĿ1ŅęÚ0|",
blueConcrete: "0g0g3$ġW$ĠZ$İWlÀ?ÑT?QA]0@VUUh?Čkkw55kUÒoTlV0UhhgÑ0VUR0gÁ?QghX54UVS4Á0UýÁlÀUükÄ",
blueWool: "0g0gj$İH(ŀH$İW)ŀY-šW(İH)őW$ġW)ŐZ)ŀZ<:W-šH(ŀY$ĠZ.aH<aY-őW<qY.aY0Q1ùčMeAwR^kčúõ0óĭI$ÉĀ,ġczĉ8ĐI]]ō4Û#sŋï}>aJgŎ!ayg[hıŉĄ1FĩĨkcÂþTöIÈõĬEI8UĊpĵ1]ŊxĵA4Åoĉ#axĘR#oěąI!kĉĨ^àI?-ðßĿXcPhÀëXù1^îąI8}G;[ph5F2ìĊďhc-ŇōdıèJĮx4ÂıUSwhÊë5ĸK{ŇlÛ",
brownConcrete: "0g0g3ÊňZKřWKňZqÖlÄÄÄĂþÏĉVÄÈTÈÏĂĎĒÄÒÒýÑāāÈÒVÒlÄVJāúÒþïĂýÓóÇāIĀĒāýÖþVāÖĎþIÄđĂÁVč",
brownWool: "0g0giÒ2WÖ2HÑřWÞiHåNZÖ2WâyYKřWÞyYÞiYìÃWéNZÚiHKňZéRZì>WåyYÚ2H0QxùĉMeAw[PüčúõhĩĭI$ÉĀĮġczĉ7Đð]]ō4Û#sŋï}OaJgŎa2yg[hıŉĄ1FĩĪXÁÂþTöIÈõĬEI8UĊpĵg]ŊpĵA4noĉb2ÞĘRbyěąðFüĎT^àI?-ðßĿîcPh{KXùhRÐĆC8}G;[ph5EĮìĆďhc:wōMıçĹĮwīÂĩkSy.Êì5ĶK{ňlÛ",
cyanConcrete: "0g0g3lĿYlŏYlĿH1IÀpE?SmkÀw6PÁB?S4k299úkÄRPÒÎwĊ?A2ÑIĀ8püUiSÒgý95Eòak?ý?1RÀFÀKSÒù",
cyanWool: "0g0gelşYm8ZmFWmPHlşZm.WlŏYmÖZmÇHmoZlĿYmÇYmÖYm.H10zTÃKy6BGîā6pĎpôāĲF:ńĮ*x:ú#PģxçÇROÓimO6Ó_@1@pÎ1GîyJñÇGNhG*ģ1:Vģ<ÎĝTpmF6poÓý?GąGģOç*ĠJÂ24Vh<4lÓlhÓĤÓz%GÄļĮěFÖłāğĳFĚÃäh%gÑĚ1ĤúÉ4ô",
grayConcrete: "0g0g2)ŊZ-ŊZ00000000090000000000000000S100gg",
grayWool: "0g0gd-śW<4HTAZTkYTAY)ŊZ<kY-ŊZ?*W?AZ?)Z.4W-ŚZ00i0)ÀÓ7jIüh71Å1ĂhóÎ^QI>g!rq1ĒgòM1yV6cy5âa5051À1IyhmĀMI@0I>đ0!OđQÝûb15hc1pVj3IkIĂQó>đmM10ObA03VjĘVĀĬiÑI*>IüÎÁ^hĐIhĎNò0ÑĘÝþbĐg.0Ă",
greenConcrete: "0g0g2PÏHPßHh;ĒÉÙŐßÆðM!ľĈÇylĖ|aŗÈëÀļĸŚđøcKæÙ",
greenWool: "0g0gh|íWÁúZÁĉYÇĸH|úZVĨYÇĨYPßWVęYÓhYÁĉZPÏHËňHËŘHÇňHPßH|ßW0S1c4F÷4w7TÂúā^1įčĄ!rkĎMaOcÓČĬS@Ĭ4{2Āī5&!ëìõŖy91õ7.ħħ;13ĩċù1^@M9]q^ČČį8Âûl÷16ĩý÷M÷[k1yIÞEgyí,ą]1ÂýpFàcÑĘĬKĻíI80gëXÓ08ÃĄB8ÌGNfgķÑČďMÈÿpaæõĬFòÐgĎwċ]įQow-së5öÀ^Ň0Ù",
lightBlueConcrete: "0g0g3C$Yy$HysHiVUS1kklk?ÀgVKk4ÂlVTVlÁhS5UhhlxTTÁkVÁ9ÁhVgFSÀ1ì5Ò5VÎkh??TlV4VlSl",
lightBlueWool: "0g0gq&ÙZNąW!ÊZ/ĴY@ťW&éW&öW=ŔZRŤZC;Y!ÙZC{Y~uH[eW+ĕHy$H!{Y+ĥH_eH/ńYRŔZRťWNąHC$YNöW=ńZ0Q1ùĎ/iĉö_pĿĭĉĵ2ĳŎħMÙąm^ÛQđ@M7oØDÆß#čxïJ;^NV,ħĳyhPí_yŃ1%ĩŌĀmÐ9Á÷zØeōMj8ÆīuÂ1ēzĆÂ?xòsĞĪõęĠRĪĔĻčŀFĿįĸõüùðP7ûÊOö>ÁàùĿü1ÝáĎĮĘÂā(Åp7@(ŒĉĿİwÛ{ÖEĭ{ÑðŐcŜÐ|òĹħÇÒ(È{I~wlĚ",
lightGrayConcrete: "0g0g2éŞHéŞWàĝGşąŁÊļņZÍŕYŜGHņ<Ŏŉ:|ĞćŠĞľŢŤÔŤŝ",
lightGrayWool: "0g0giðnYðnZí7Y÷-HþÇWJ]YþÆZéŞHí7HĆåHĂÖWóEWéŞWó-H÷-YJÆZóDZĂÖH0QxùxF÷xõ]pÂýpØi2Ğw#ÂþĻđĲNĆśČĬo{čħ×aĻĉï!!ĩNoŎ8ĩyg[TĩĈĄ19ĩĜ4_^]ÎöÐÂ^ĜČĵ8Âûl^g{Ċþ!Oķlk(aĩìĔRaĽċąÒ9ÂþĥFU{ÑĐĬóþNõ>g^ÀħøgRÃąÒë}âA[p6śČĐåÂýoØ:ÌčĝP{@ĝcĎ^ín=2SUňTPÆ^ĉ5^",
limeConcrete: "0g0g3ÌĉYÏĉYÌúY402ë00ë88ùEwg1204000ëëëAwëw2A0ó2Ĉì4A14gh00020wEë01g00oĈìS081Ĉ820",
limeWool: "0g0ggÓęY×ĨYÏęYÛĸYç1YÓĨYãŘYÏĉYßňYÛňYßŘYñNH×ĸYÌĉYH1YHhZ1w)VÓßIyĂģ@ĳ2ÊĹj}ĪťõÛÓŢ×úÛĨ=ÊŕúĜċÇ@éÆÂQDDÌË1ËsB1ģ@O-_ÙģÕhģÓŋ5Û×śÓB@ÁÊÂ;yÊkľįÈģ+ģ~ÓĦÓśįċFBIh@5Èéqhľ~%)ðģĊÓŢ@õĺÛOŒZĄŏĎĜVðgB]1ŖMÑ5}",
magentaConcrete: "0g0g4ĐİZĐıWĐġZČġZ5ÒSüVÁPTÀUÆVÇ@Ŀì2Î^áÇĮSKÊ@ņ3Äĸ45Ä@9ÎVoRtÞä4VVx}ĕãÁxQâ11Àhïxl50Îĸ",
magentaWool: "0g0gsĘőHĜšYĔŁHĘŁHġbWĬ:YĘőYĨ#HĨ#YĐıWĥrWĔŁWĥbWĨrHļöWĬ:ZĠšZĜšZĐİZġaZİ{WĸÙYĥrHĬ#Yİ_ZĜőYĔıWĴÊH0QNkĭ/iBE_ÐÊŎĊhqĴp$Oéz/Ĺĸ?góġdKÜ]Xü)F@5ĿÙĳĩńFıõyüPÈ|>A1N>toÞàćßi×çø7.m8ÊŋuĀpė>ĞĀRnĄsĨĳ|ĊSRĳyśĎdOÊŐĉĵĬgñÁ7ċŉĎù{hĂķXĐpĚĻĎ%8ÂĄUPxUñ.ĢTőœxÁ{ĸPĵ÷ĖŀaFğàĴăwzÇęÎðýĀ~ìāś",
orangeConcrete: "0g0g2ňëWńëWRgguhKoCįù124Sw0x8QùĜ2Áę1ÄSSSo40",
orangeWool: "0g0gmŐĈHŔĘYŌùHŌĈHŘĨWŠŘYŐĈYŜňHŜňYňëWŘĸWŌùWšRYš1ZŔħZŔĘZšiWšNHŘĸHŠŘZŜĸHšyH0QNkĭ/iBE_xĿĭĉĶqĳśI&Ùu]ĩ~QgðM7w_7ĤùOĉ25ö:õRýFNõyüPi|3A1NRŜĀÜÐCÂhıØeōMi8Æīudpô3ĆdR4ÓĄĶOĳĚ-ROĆĻčĻMĿĩxõÙgðT7îÌċùQhđSĤĐpõáčŎäÂþīPxUð(ŒTĿĭĉ~Ph7icö]ŏEŌÐ{ÖxŊÇăxĦcÝ}ĸāĘ",
pinkConcrete: "0g0g3ļĀZļāWĸĀZ5QSÀ14gkgk01gQ1À0gQ4000ghÀS0?0]9kgk41Q42T4g01hÁ105k4S4hS00gggQÁS",
pinkWool: "0g0gvŌŀYŔšWňİHř!YŝçYŌŐZŐŐZŝÉWŝØHŀđWňİYŝ/ZńġHř/YŝĳYŝôZřqHŕaHļāWŝĄWŝĤHŝ^ZŝĳHŝçHŕaWŝăZŀāWŐŠZŝôYŝĔWŝ_W0Q1ùĎ/ičĕ{ÖŃŎĊh3dp((èŉ/}ęQķô.7ÕÜ-Ňà$D+ïŀ;aĹË/ŁĳĩhPÏ_Nŏ1&îmooàġÞ÷bçø7.l8Êŋuå1ėOćġRpĤĄĠŃ{Ĩħ{Ń(ŤCuFŃňĉĵĶÀñ|7Œŉěö|ÁéŇŇI1ãáď7ħáĄĸĂpmñ-œTœœĉÞķĸ-eÛčr9ĔŞàĴĢċ0ÎàÀÏãë~ùlŚ",
purpleConcrete: "0g0g4ÑòZÑåZKåYÑåYlm100ĸþTNVQgp5820Áĕ0S2RV1Àlhgìg4pĽjŏk0ÆT)S?lüUìlĻRS1ý0TTp0T]Q4T1",
purpleWool: "0g0gmÙóWÝĂHÕóWáĂYëģWÙĂWèĒZÑòZäĒYÕòZýcZXģWáĂHÑåZXĲHIĲYäĒZèĢZõłZXģHÙĂHIĲH0Q1ù5MeAwPTüčúì2^mČzÉí,Ģ1zċpEðS]ŇXÛ3sŋ5Ã(ħígŎĊaJg[PħŇs11ĩjü1ÂþTõÕÈõĬEù8UĊpĺ1]ŊpĺAÃPĀ1Ĉ^ÞĘPċ2ěąð1üĉĬ^ăI?-ðßĩîc]gcKXú0EÐĄC8}åĥDphlEĮòČđú1-ŉňöıéÀĮwīÂĲ]Qw]D05Ĺo|(1Û",
redConcrete: "0g0g1õíW",
redWool: "0g0gdüíWĀJWùíWĄJWĐĊWČĊWĈJWĠĹZĐĊHõíWĔĚHĔĊHĀíW1w)0VwÓ2*GïM21JjójĒÎÈVďVM^h/3ĒMçÃ3QFĭ2Q2ya919hw1GQO+ñÃGÄhGVē0^VēV$ĝ1Ĩ2OyĪoJ+5G*GĢVæVĐmÃ30Óh?0ĬylhJĢF)ÒGÂVďĝÎûÈOďĒOĎUäcÒgwĞ1ĒMÉ0ó",
whiteConcrete: "0g0g3ĶËHĺËHĶ|H4?541S4k40ggh50g?À0Àk1wA0l4g04U0kQ?À4l00U01hÁ0044Àl0hÁ1QÀkTg4Á5h",
whiteWool: "0g0gnłêWŊĆHľéZłéZŒĖYŞņHł÷Wņ÷WŚĶWŚņHĺÚYŒĦZľÚYŖĶWZZZŢŖYŎĆYĺËHľÚZŎĖYŖĦZĺËYŞŖY0QNkĮRU*ĔÙÉÊŎĎ1reoįOçĪ,=ì_Ĺÿ.%Æ^ŗXø)uŜïĶÙĳĚýV/Ķyü×J÷ŚU1*RmsÎàĔÂiØçú7.)8ÊŋĉŖpıś*Ŗ^ÑGĈĨ-}ĩSÂ;2šĒdOÊŐčĵçĹÿ<EçĩĞùØpĂķXđp÷ļE%8×ďĢVxÄÿ.Ĕ^sŎčÎĔĹŠĴŕàÿ7ĕčàĵæAzÎćTïŕĀÀŘāŖ",
yellowConcrete: "0g0g4řĨHřęHřĨYŕęHlV01zs@S1àÁá?ħń4S9551ÿOÄúKV14ÁVÁN[lÃÆśÁllħħĬĨRļŗh(0oUVUV{Á{0SľQh",
yellowWool: "0g0gjŝňZŝŘZŝĸYŝňYŢiHZ>WŢyYŢNZřĨHřĸYZÐZŞ2WŢ2WZÃHZÃYŢyHZNZZ>HŝřW0QNk0MķygPxüĊąØqSĜA$#ÄĮ*Œ:}GEōwKļXö2ŁĹ5ÁO0RĨ890yü]^0ķw122ĜëßÂô2hX!õĝEŖ8Uċāęowĺpę.ĹoĀ1aħJ$RaŋUxÓ1üĎt^ô}â)ōÖÄ>gQgcKXďo2Ñy@8ÀIĠ]x]âEİ.ĄĐĄô>eĽMĒàIĞùķÁSnĄz]yŘïĖK|hëĕ",
bookshelf: "0g0gtĚ*WĆkZāĻWéîZ$ìW)ĉHAÞWMÕZF,YSĨYùTWĒKYòŗYMóWáħHĤÁHãMWĞłHóEYi+YĵþZKĈHËħZdčWĦÓWVĈYPAY;ŚZÖÃW0RxcRgRgIw18RüXx^ÐĈë1ÂýFF^ĿþĈĈiĄŎđFXÑĎĊÏċŃŎđČíĿĎĊá3ńÅġĘĚŇōĆK2Ēý.m#wŋuňgMóÂĀ0Mõ020XgõygRh8K1^ÐmŀFcÂĀë3ĻÄĊmÂÃÙČĈkÒãĊmÃİb}ŊċļãċÉàļb@U3ńãćÉ!ćb}ŇaąīuĽŊýÙń06M^Ã06Mõ00",
netherBricks: "0g0g7oMW;ßHQJYwTH(ÎZEÁY-ÎZ000000BmÂQþòþÎČJKÑĂÅBĚÅA0+ħ0+ħÒAãÑĄ}7PAbPAæP%æ_čÙ03Ù03ŀčĂŀĕĆùÖ2ùÖ6ęŐuýİudĘłdĘłĲÔJ_ÓþJTČăTAJĸAJTA",
redNetherBricks: "0g0g7$0WÕTHÝÁY)0WQgH-gHUMW000000BmÂQþòþÎČJKÑĂÅBĚÅA0+ħ0+ħÒAãÑĄ}7PAbPAæP%æ_čÙ03Ù03ŀčĂŀĕĆùÖ2ùÖ6ęŐuýİudĘłdĘłĲÔJ_ÓþJTČăTAJĸAJTA",
netherQuartzOre: "0g0gcÀÁHUíWÀÎYÑĊYÝĪWSÁHĕĭYľ#YĞĀZï4WŒąZÚÑW12NQOÃ)MjMBzQ5Ow>>l@äwN)ü)^GÑT3zPQďÑûQAM4@ôPÔØO>3QĜĢäĘ)ÑT5CðĜ>!òN)óKOQæÑzPďR))ĐĚk,ôÂ@QĜÂN@Ě5×SRi3>A-ä4-(k)P@ímòSzQûxÒ))Oy)R)lzQO",
netherrack: "0g0g7ÀÁHUíWÀÎYÑĊYÝĪWSÁHï4W4CČÛğp%ýÃIÄķ÷ORÒ6ĄĸĭõßgĺĂ)ōĵ?phú+úĎŊe#sö7)XUŊ2)ŝÖĭùÛ@s}ÕőÞį2MįőĂ?×Ö@ïÁóóe*o][oMİĈ]ġĈ}{ĸVĮrPįĄ*.r",
netherWartBlock: "0g0g6Æ0WÕgWä0WĤĪWüÎYĔíW5waPī8PEķQëúEJJTwĊ5A8h4ĒlA2EJúh#0PwÀxAìP)2QyhFRiS0úPwiTAòògí5w]Č4ú92aQX?^2ù]ki?2íSAíP4í]FR])X]B2",
quartzBlockBottom: "0g0g3ŖĖHŖąZŒöY05Èë?ÈĐ1ÄĒù5Ēč0ÄčÈþĒÄĒÈđV0ĒV01VU1×À0þù05006Ē05ĒĈ0ÇÒ0Vč05ĎÀ1ÄS01Ē",
quartzBlockSide: "0g0g6ŚĦZŖĖHŖąZŒöYŊéWņÙY0000005AăÚJ{9+łÕJV%ĞĹAČý%AăÖ+Ń9+łPĞŃ9yPÚĜý4J^PAý4Čł]J|9+òAJV4JPB+Ń4JÂÚĞĴ4üĂ|y|9CĹAJV%)òAČüJłAJ_Ú",
quartzBlockTop: "0g0g6ŚĦZŖĖHŖąZŒöYŊéWņÙY0000005AăÚJ{9+łÕJV%ĞĹAČý%AăÖ+Ń9+łPĞŃ9yPÚĜý4J^PAý4Čł]J|9+òAJV4JPB+Ń4JÂÚĞĴ4üĂ|y|9CĹAJV%)òAČüJłAJ_Ú",
quartzPillar: "0g0g4ŊéWŖĖHŚĦZŒöYh&Ņtiu&%uŕĹň&ňŉŕŕ%xŅň%%&ňŕňyĹŉŉŉŅyŕ%uŕuńŕŅhĹňŅĹiňĹŉŉňuyŕ%&%Ŕtŕtĸ",
quartzPillarTop: "0g0g5ŊéWņÙYŒöYŖĖHŚĦZ54Ăó6ÁP4ù90úFDs÷)JÎ.rJ@ë1ħJP8ĩóQŋúđi^*i^FjòĝkíF2^?k×D4×?i2CĹ^QłúđkTħJP8ħ1.AJ@îPDAJ)úF0J90J8ęk|yò",
chiseledQuartzBlock: "0g0g6ņÙYŖĖHŖąZŒöYŊéWŚĦZ4Ja]+]5BrÙi]9,A0iÀdĞķ4üüd9wJ0Ń9_PFĘĿi2Ñ1Ę0ĜJÎxA|AČĨÀJPi@ëùā4kíPB.{4ìwJ0]Xû]mJ]òDw0iÀd*%AAù4û9CCĿ",
chiseledQuartzBlockTop: "0g0g5ņÙYŖĖHŚĦZŊéWŖąZ4ĊĻMJĈhĘ4ë6ŇgB1ìEŇgD2ì-zg+Tí0biiR÷RK002öĘ0(ĊÂJiJJPAJPA00põ039kÈöpz8,2ö+wÑ@RëĚwÝRìík8hĞ1ìĘgiRĻúJĈ",
chiseledStoneBricks: "0g0g7ĆÖZóEYÖĞYéŞZÇÒYÎðWåľY00]0ëRdĜłÖ+Ń&ŀAĞļü!090óáe2ŅÚĒÊe7JŀőÊ!nČïĒ)&cČìŏk!nČñE)aÿIBĐ)eðĲLEáeõĚİ!ÊdÉÑJÈáA2S0Jś:;ěç$üÂPAJPA",
smoothStone: "0g0g7éŞZâľH÷-ZĒĒYĊóWĚĲWĆåZ42ÂByg&,ÚĕŐqOÖsJ+ŀmĿłĞğy|İsãłp*ĞłÛÖĈ|łÒĕĭŀÃÖČĺPÕmĢŊÚĭő%ĞŊĞģÕ&.+úįŉdğÚĝģ×Â[ÙßÚqlįłĕĠĿN:Øãġx5wiSJg",
soulSand: "0g0g6ÇjYSĩH)ĊW]ĹZÖQHåïW4A3{č4ëhÕBCyÁĪFcĊňMItöþĩTįĴõĞ]dIUdħpÖ(KÙq3ÚC3ÏÈRc+İKPRì(qyĬoÖIħ}No{RĈÑwĺRĬwÒðĂëİÐAĞĀĐ^T$4Ĭö-pTÿd",
glowstone: "0g0g8ŢÔHĵlHïRYÚiWZZZZĴYòċYÞNH5+T%^ÄĈYĸäŁb?ŋćŢĘÌĶgÃŗãŝèĲ_mćĐÕÈ2wĕKŔùb~ŋ>rĜÍä$āĉÓĦÂñīČĒe+ÿĘFùÂÑDŚÜDïĳĦğşnœ5őjĩÈŗ#ò_ĭíćÜyćŃlŏÍĞť",
andesite: "0g0g6éŞZâľHĆåZóEZÖĎYĒđY4ĎĨò61aĘĹĕĩ2BĜõwAħ]ĩŁV+peČ0ÚĘ^Úðj6Rĺc!ìóĎłTěd|ðŁÙüÃÖëēÒ+ë4ĻłÙ({*CħïĚ!S+rÖ)ĀÙgŀđĞłVĚSÚĩiÎëő$m3c)Ā",
diorite: "0g0g6óEYĎóWĦţWŒĖYĶ;ZåŎY4üİPĀă)yR×,gÎ+E?ĠóÒĜbÕX_{oî|iŀö+Ň]ČıÖoŀhĠFM2óöĞTQĻÉúpbĉĚjKĐŇNxRò+lÚóAA(Ã&njÝü^wĐìÞīĸX6įöĊcÒ+ŇNgÉ",
granite: "0g0gaĞÖWąčYúïWéUH{ĹZĞDHđĽHË3HıÆWŊaZ1xMihTÁmiãoMjMjNnhiCMûnlnihÅmÏNhNjzGwÎyjh+ÏjÞygMMmÐhjÓÏOjh1A,ÓMylxjÓÐNhMÓCM+ÐljmÓ2ÞMEh,+ÓnÎj>h+RRNMhMzhFiÓMDNÓxhoÓzãiÓgMÓh2yMMh+",
polishedAndesite: "0g0g9ĎāZĞıZó.ZðEHéşWÞľWÖğWÇâYóPW11hhh1gijQ>OÃ)Ñ,jOO)SIO[3Õ8Q)Oî,jO*NîQQ,k>)Q*OQ@jOX-Iy)Åk>QQÄUO+jEÃO-ë8ñj>)>)>N,j-ëXQIO,mOOOIOIÅjIí)QÑ(ñjOQQOíQ,kQ]îO)>,ðGGGGÓGG",
polishedDiorite: "0g0g8Ŏ÷HłÚYĢœWĲ$YĒĢYåşWÎþWó-Y0i00J25+_5@VAkòKEĆ$ġz%)ýxįĀ!)Ĭ5ČįiC}cùTÛyĆ92Ī$ďmMĚÉQ-ą$þû%ČdB]ôÕĚ}cIł1üądíĻdjm9þĀ!(þtCİÖþąŞÉãĽŔÛ",
polishedGranite: "0g0g9ıÆWĞÖWĞDHđĽHąčYúïWéUHË3H{ĹZ00gwy2zz4VQU)QV?kk>)QÑR[4QÑVUOV@4QQ>VQQÄCUVQQÁU@5>)ÂQQQÅ4QQ@U>)@B@ÒQOQVBAQ?U?UQ@lQQQQAV@4TVQÑQ@Å4OQQ>)V[BU?ÏQU>+AQUQVQT[ÔGIGäGGI",
portal: "0g0guS7YU8YQ7Z-6Z-6Y(6W)6H(4Z(5Y;7H(5H(4H(4Y)4W)6YS7H(5Z{8H-7WÀ8Y(5W]8WÆ8Z(4WÊ9W;7WKpHÀ8H)3ZKpW0QNkĪxķ4đÙg0B)ĖèwýtaT0âþNa[.tĎÇĐĚðĜRo:eŒčmÆIŒÇÆĚQØPÊgÁĐëŋěģpđćÃĝPkĎ*ęyNĳÒygķjõĚïtwÒÀśFċÆNøòÃq$œÎI4üû*gtĸĐ!sgÂðNmIĵ8M$zĜĹ|ĈĬ6&âĊčĂħáŗðĊđĴÕG×ĎÞĕq$Ęí-Ûì5?TJlFp_kĸI",
obsidian: "0g0g540Y00WgMZ-ýHAàZ4Jg&1s4yìÕ8ķBĠQòl8&B28ùìMAPAë8Pië1ħ9]EŃ6g]5)óAJňBīüëĀJIüASĈëSg20ücE4RdīJdĊJö4ķú0a]0K(4w9g]SĊkQ00",
redstoneDust: "0g0g4ù0=00=Ĳ$ĦI0=1UlS5UlÀlÀ1UÄĈ2čÄĈ2čÄ00čU00B1Á?01h40ÁÁ?5U1)BÄ00BÄë0čmë!Č5ÀlÀ1UlS",
redstoneDustOn: "0g0g500=ş0=Ĳ$ĦĿ0=Ġ0=001w00001w00009Aë00AôÑČë0AòAČë0yPXČë0iłõJëAûzúJPAþňùĩP0þÑðiS0mĲÒJë0yÇXJë0APAüë0APFAë009w00001w00",
bufferMiddle:"0g0g5ŢŖĦ8wĦÝwĦIwĦĘwĦ001w00001w00001w00001w00001w00001w000JPAJS0kĄöi00iûÕù002ÂÕë000ÃQë000_Ñ00009A00001w00001w00001w00",
bufferTop:"0g0g8ŢŖĦ8wĦëwĦùwĦĈwĦĿwĦĘwĦħwĦ001w00001w00001w00009A0000^Që002ÂÕù00iüÚiSAýBúČP0üĝęAP0iďòiS02Č]ù002ÂQë000^A00009w00001w00001w00",
soup:"0g0gaŗwĦİ[=İ{ĦŒĎĦŢŖĦŚħĦØĎĦıč=ÃBĦŢħĦ0000gw003(00000000000w2000020000300S00w00(00000033050000060000wÝ300000w006800À000000000000À5200036ÀùÂ00030804000000000w000000000",
soup2:"0g0gyş0=ÃyĤÁó;İ{Ħě!ĤÃ!;KĴĤwċ;íðĤÐz;ęóĤÐ%ĤÐ!Ĥıč=y3;Ï|;ı|;İ[=!QĤđíĤēyĤÏ@;Þö;ęîĤő8Ĥş52ß|;Ě@;ŢĬĤEAĤşweĢëĤšŖĦß1Ĥ00RcSîkKïsìĪ0wëARPAÎĩwìĪEę@(ħ4AÏRw3[gÎ÷(>4;2RS(7AÏ_$wQQÑ9TAJgÐbAû4p(üPÃ[Aúb$ĘðoĘû|Ã[gĩPoĝôoKë|Ã[oÎðÊĬXAÒcÎ+7ÆĊðÊÏQkĩ{ÁÃ>EĈÿ(ÏĲ(Ï{0+[$ĞíoK_oT2g0oVÄĲ-ÎðgT4kMŃVĽXhÁJPÅí0+oUTùkïv<wĈ1ìŃX(Ilļ7ÁDËÎìŃ",
soup3:"0g0gsķ>ó000Æ}ĘFAcÆ}óFħ;Ģw)ĢB)ÈŕĘFw;ÀĴþĢ!ĜFA(E>óÆ}÷ÃÛþĚB6ĠKEĢ%ðFîóĢ$)ÃÚþFČAĢwEE36ĸħ;ĢB6Ňŕð0QMXQg^zox8QxĄx!ixF^o@hòKTùĭĘ!hĽhìįàXC0ì0Xxù!çŇíí!]īŐcPÐíĚĳj^Äzõ?ČŊ,Ĕ1æÂß8àĐĿĘĔx_õ*8ÒÒRpĂĽÈSA8{ßņÑJ62Èŀì>tĔ*4+äuòĚğpÓÇĜ%ħßĭ*npÌüĀÝĩÆāĽ%oŁíĉbr6ĭÒãp@ăTqagï(ãăÌØœw",
soup4:"0g0gaßë;ßħ;İL;ML;00;łë;I0;ŗ0;ıÓ;řĈ;000000000g0yh0hg0gwhw00(0g0000(004T21gO005Á06hj30VÁ063h00VÀ0ãÝ300VÀgGÝ000VVgGÝ100lVÀ10h0801g9ùg00000āāg0hìë0āā0g80h09ù0h0ë100000",
randomSoup:function(n) {
let r = 0, g = 0, b = 0
for (let x = 0; x < 16; x++) {
for (let y = 0; y < 16; y++) {
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
setPixel(n, x, y, r, g, b)
}
}
},
redStain:"0g0ggş0;ş0)ş0$ş0Cş0uş0mş0cş08ş02ş0aş0kş0qş0wş0Aş0Eş0g1z?ÔòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ1z?ŞòēĴŉ",
invis:"0g0g20003Ŗë0000(0=0>ëëëìĤć;YņŤKşëŞŇZëťÿĶň60",
"poision potion":"0g0g4000ĉħ;00;ŗf;0000000001S009K008w00bŇ00bŇ00L-00Yĵ00Yĵ00Yť00Lş00aĈ0000000000000",
darkLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 0;
g = Math.floor(Math.random() * 10 + 100);
b = Math.floor(Math.random() * 10);
if (Math.random() < 0.35) {
a = 0;
} else {
a = 255;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
redBerryLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 0;
g = Math.floor(Math.random() * 30 + 100);
b = Math.floor(Math.random() * 30);
if (Math.random() < 0.35) {
a = 0;
} else {
a = 255;
}
if (Math.random() < 0.10) {
r = 255;
g = 50;
b = 0;
} else {
r = 0;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
blueBerryLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 0;
g = Math.floor(Math.random() * 30 + 100);
b = Math.floor(Math.random() * 30);
if (Math.random() < 0.35) {
a = 0;
} else {
a = 255;
}
if (Math.random() < 0.10) {
r = 0;
g = 0;
b = 255;
} else {
b = Math.floor(Math.random() * 30);
}
setPixel(n, x, y, r, g, b, a);
}
}
},
autumnLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 250;
g = Math.floor(Math.random() * 80 + 100);
b = Math.floor(Math.random() * 30);
if (Math.random() < 0.30) {
a = 0;
} else {
a = 255;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
pinkLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 255;
g = 205;
b = 226;
if (Math.random() < 0.30) {
a = 0;
} else {
a = 255;
}
if (Math.random() < 0.30) {
r = 255;
g = 185;
b = 196;
} else {
r = 255;
g = 225;
b = 236;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
flowerOftheValley: "0g0g8000H5YÏĩZZZZŒĖYÂRYłÚY+0Y0000000000000000000000000ië0001ħE0001ň?0000750À02Ôø2Ĉ02K5ňw0007śĈ0007ŌÝ0007Ēë0007Åë0007ţ00007000",
poppy: "0g0gd000ĠgYK0Hõ0WķgY-0WQ0Wù0HśgZhħWhëWmgWhĘW00000000000000000000000000000000000000000000h000000iMS00004?ÔÝ00008XG000000PĈ0000000Ę0000000Ę0000000Ę000009ĘĘģ00000ùİ0000009đ000",
dandelion: "0g0g7000ĶÀWŚŇWĞŗWJSWewW5ëW00000000000000000000000000000000000000000000000000À|00009À0000ûùë0005Ĉ00005ľ0001ĕĿ0000*ħ00005ħ00",
blueOrchid: "0g0gj000q|HtķZOWY!ZZ!YY=(Hu|Hq|W=wY=(Y!YZpķYmgWCYYtķYmwWiwWqgW0000000000000000000w000000008K002k5w03sĈ000Ĉ5E0Jë0000FR0ihĔ000iĘ0gq2ë000[003įÀ000000042ë00000002ë000000004Q000000000A000000000i000000000q000000000X0000000000000",
pinkTulip: "0g0gc000ŚÍWőťYŅĕZ@NWÄJZMķZÄíZRhZ*ŗZ}ÏWÂRZ0000000000000000000gg000000xw000000N(0000003000004À6400000ä55S0000ñ55ù0000Ăbăù0000üüÇ00000bUġ000009ïù000000ăù0000009000000000000",
orangeTulip: "0g0gg000ŌħZňňZļĉWńĸYĴÝYňĨZĸKZÄĊZ%ķY@NW}RY+0YÂíY}ÏWRxY0000000000000000000gw000000)(000000ÄÀ0000007000000ë9a00000ĐbbĈ0000Ĵc8ħ0000ĵĔĲħ0000Ķıóħ0000bšĤ000008şħ000008Ţħ000000c000000000000",
redTulip: "0g0gd000ĻĈWĻķZīĈWķħYħùWÂÏZÈîHÏĺH=MHÌěHÈĊZ^ÂH0000000000000000000gw000000)(000000ÂÀ000000300000067800000Ô98K0000Āÿaù0000Āÿăù00006ðĄ000009ãĮ000000Āį000000ÿį0000009000000000000",
whiteTulip: "0g0gd000ŚĶWŒĖYņéZĺ|WRxYFħHÂíH^NH}ßH%ŇH/1H^ÁY0000000000000000000gg000000xw000000N(000000400000056070000Å80ý0000ďa9Ģ0000ĐĐcĈ0000čâēĈ0000aïĠ000000ďğ000000ĐĘ000000a000000000000",
azureBluet: "0g0g7000łêHŚİZŎėWÄÂZ@iH<ĸY00000000000000000000000000000000000000100000Ăw0000Òd000CbÝë00-MU000dEìĈ000ļíg000ĳù00004Ĉ00004000",
cornFlower: "0g0gb000ßWW?ĖYÏeYF;HSġY%ĊHöĤWÄ)ZÈâW<ŊH000000000000000000000000000000000011z00000xiNw00003QÂS000006Ý0000008ë0000000K00000ë0ë0000080ù00000aëù000000Đù0000006ù0000000K000",
purpleFlower: "0g0g8000ĄfZ{nYĽ~ZĝLY6wW1ëWÇ3W000000000000000000000000000000001w0000aÞë000łE0000cPë000tħ0000700000<000006Ĉ00000Ĥ00007ħ00000ħ00",
oxeyeDaisy: "0g0gb000ŞņHņéZŖĦZŒĂZĺxYÂRZÄJZMķZ@NW*ŗZ000000000000000000010000001xx000003?R00000hVÁg00002?>000001xx0000001K0000007ë00000060000008Ö0000000ò80000007ë0000006ë000000a0000",
allium: "0g0gg000ĥņYġćYıWYĥYYŅŖYĝÜYĭvYĽėYŊfYÓĜHôCWÛĻZH5Y×ĪZÌûZ0000000000000000000ig000003AÂ00000llCÝ0000ÓïDK00009iÁ000000×l000000b0000000c0000000a0000000c0000000d0000000b0000000e0000000f0000",
lilacTop: "0g0gj000ĽdHŅÍWĝēWąòZġēHąóWÂÏYÄĚYĉóW@RW^NWdŗWĹdW^RW9ŗWŉÍWÂĚHÂĚY0000000000000000000002w0000(ë006hë004hë000xù00ĩ(00002k01ð000000t0^ë0000001ÙÀ00000000ŏ0cM)03Qg083ć1ë002O07Ki00000ÔČ1À06X0004Ē(o0hc000003wiŚ00006ë0(où0000ĸ00úħ000",
lilacBottom: "0g0gl000ĝēWĽdHdŗWÂÏYġēH9ŗWĉóWÄĚY^NWąóWŅÍWÂĚY^RWŉÍH@RWąòZĹdWŉÍW@NWhŗW00h43w0h8000Ãs8]kBë0003öXr{Ĉ000000}äe0000000(E00000000gÀ0h&w001]0ä6ĈI0002ĀĈSĶ0000XgtŚw0000kÄĉë8Ā000002jöE00000008s402Eë000004åŇlī00000doĵ00000000Ĉ000000000Ĉ0000",
peonyTop: "0g0gq000ōĶWŖvZŉøHŒvZtÎZŉÍHŞćZŉ~Wp1ZxìZl1ZōĶHxÏWcĨHŉÍWŅ~WgĸYpiWtìZp2WxíWgĨYgĨHŖLZőĶH0000000000000000000000000000000000000000000000200000x800Qg0002(ùSFXÞI004hą9ÂĳwX002x(İÃÊŞë0013.!ÙÑ9Ĝ0002Ğ%ČÉÈ003VÉ^ŐôÐg000EŀģcáÖÇü0006(ÏıUÁ(0000I[*ŌÞ800006fáċw00",
peonyBottom: "0g0gv000tÎZxíWgĸYxÏWp2WgĸHŉÍWŖvZl1ZxìZpiWōĶHőĶYp1ZgĨHőĶHōĶWŉÍHtÎYŉøHŞćZtìZxÎZcĨHŉ~WxJWtìYŢćZŖLZŅ~W000IÑEĳÝ00084AÒÂĳÝ0004m*Īzħ00002ÀX>{hg000BMüøíFg000fDcÛýÀôg00ĪØĔÑīĚĮ0006<dÐÉĪK0000ğĤîÆīp0015Ĝà5wıwë00sıyTrĔMĔ000IĲÒĮgŇ00000;øŔ;000000$Ñ{o0000000Ørë0000000Ðo0000",
roseBushTop: "0g0go000ĤßWħíHħßHœĚYĀÎWáÝWŤ3ZpiWBĩH@RWp2WxÎZÝÝWĄÎWħßW^RWœĊYxĩHĤßHMxZBĚHxÏW$ŘY000000000000001g00000000ÑF00000000ĮwS00004g16(0h001aSìw0cRù00]Ý1_K0ß400qŇ1Ŋ0mōë000ù4ïoiĘ000p00Řù1000004Ę6Æ0ýë0000$0î04Ĕ00001Ù]00%w09(ëbÆ04ë01aÂqù0#0000C>íķĠi000",
roseBushBottom: "0g0gx000áÝWpiWBĩHxÎZp2WtÎZMxYliWħßHĤßHœĚY^RWĀÎWáKWŤ3Z@RWÝÝWĤßWÄĚYħßWœĊHœĊYÂĚYBĚHœĚHĄÎWÝKWl2WħíHxÏWxÁZ@NW001803g1@0000000À3sN9EĘ0000k(5(Â_)Ċħ035c15cÃø$ěS00ck35cUeQķ01wggUĪlO5000EĚĴ{UkÁ1>TQë)ļÄËíÇ<ĊgÀřĴAěłTà_]ĞÿÀĜÈQý]ÎOö%ČcÞďS0g0kīe4x3lŇ0004lXĳcÃ3k00000kOvkħĬc0000ccÀĳkT>N00000(MQkĨQK00003KM{kĨ>c(0",
witherRose: "0g0ga000{ŊW00Ww0W8ħWh0W4ĈW4ķW4ĘW8ķW00000000000000000000000000000000000000000001i000000ii(00000yNw000002y0000000w0000000?K00000Ò@V00005ÄÝ5000050S0000000ë0000007ò000",
TallGrass: function(n){
var pix = getPixels("0g0g7000ĊóWĢłYí8WâľHJPWÚĞZ00000000000002110S00R1200gícX042ì4wg18TÕgë10ÕĐ(ë1T{âSSwķXwīwyùK&íx$jKĔó?ĉŀÒõľØĝġËÝĭŏesňæĩłėsŘåŊĄ")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
warpedDoorTop: "0g0gcyŀZCĂZ/8WtVWFĭHCÖH/-Z%âWËÓY]ŜWt4WgŊH0gg11102iyNy4>ÂAg4)TQ>?gÔÞVnRzà,í[Å[R>yzJAk>y>ÓÐÏwNzÓ>ÓÑw4+ÔÓzÏwÑ[+ÑÏzÞ7nQ+Ñy>ná4y+ÏS3á?2yNAlSQU2Ó+K[à1>ÏÓ+KGO,àßÓNxáĈÓċíÏN?QĞAğ",
warpedDoorBottom: "0g0gb]ŜW/8WyŀZCĂZtVWFĭHCÖH%âWgŊH/-ZËÓY1z?ÔV]IáJVÓGhU?kBV[nāUÇüBhTnāUÇÿxā?ÅāUÁnMāTnhUylMlPÿhßVMýOPÿVAá[NlBnÅ)VllGBVGÑÁlďVRBãQß,5VQ>ÑáBàúh[áâU,V.hTllÐâk.āTlmUÁkU??Q?ááQ",
spruceDoorTop: "0g0gcāīWìàHÇiHUňZåÐHÖ>W{ĨHÒNY)ĺH;ŚZÖĎYÚĞZ120w20w2hjTM>TAÄ1RhMÂTAÄ1Rl,ÂUB@òĊĂFĊĂFĎğÂâ,Ââ,Ä5jÁxjÁAã5jUBjÁMã5jQDÃ?MÄ4>?DÂ[)ÄkÃQBàn)@1ßk*àlB@1ÂlxßkDm1RlMÂkD@TiÅMih,ÄòċĂ.ĊĂ.Ď",
spruceDoorBottom: "0g0ghÚĞZÒNYÖ>WÇiHĊóW÷-Z{ĨHìàHUňZāīWåÐHĆåZåŎYðoH)ĺH;ŚZÖĎY0Q(IÎgĩRX@-÷îò1/8kkō]ü*91-Ľá(ō]÷MF2-ĩĽ4ō]÷OĐ×Àīks@]÷Ođ7gĻAs@/XïsÔikÞI@/XìsÔaeČ8CPīëĄ×a4kECÁīëIÏ8ĩkECàŇñħÜív4=60Q(ò1i2xX@^÷OĄÎgĻÞĄō^÷Oą1-ĻÞą@/üOą2-ĻČs@(Rëï18ĩk4C",
oakDoorTop: "0g0gbĢVZĎ4ZýĻWÒRZÀřH000íFHĞ*WéîHÚĞZÖğY1g0100g2iyyyyyyz2>ON>ONz2*VÁ*VÁAÏ*VÅ*VÅEJ*VÁ*VÁziìGhìGhz2>ON>ONA2*VÁ*VÁEi*VÅ*VÅz2*VÁ*VÁz2ìGhìGhA2hiIhiIE2>ON>ONziNyxNC×zÕ-Iì-ó]X",
oakDoorBottom: "0g0g9ÖğYýĻWÒRZéîHĞ*WÀřHĎ4ZĢVZíFH1xj)xlUjÎ+Q@+Q@iÎÓhOhjMiÞÂyxÂyClÞxhmxhmjÞxh)xh)iÞxj)xj)iÞ+Q@+Q@*ÎÓÎOmÎOOÞÂyxNyCiìxhmxhmi1xh)xh)lÎxj)xj)jÎ+Q@+Q@NàMÓjMÓjNBVVVVVVV",
jungleDoorTop: "0g0geĩ@YĹÿYÖiZýČHĕŜYĢmWĉīYåÃH000)ĺHÚĞZÖĎYPAY(ĪW0hh0hhg23?ÃVV*UÏmVÔ,àãV[lU,äíz?ÅýÃä-îñ*Åč,IoìIâÅkÅIoìIâÅj[IÆëIáN7G1Àl1ßyg0ÓGGÓ036V>II)UR6V,Æë)ÄÂ4VÔS5)UÅlÒÔQQ)V[lâ[)?çĴ[ý*>VVé)R",
jungleDoorBottom: "0g0gaÚĞZĢmWĕŜYýČHÖiZĹÿYĉīYĩ@YåÃH)ĺH1hzhh>h)Âizhh>hÑßyÐyy@hAßyEOOíhEãxEGGMhoàhAxCNCoàhÑxmízEÃhÑhiðCEÃh)miîhAûx-zi>hÑ6ÓÐEh@ÓÑÆQîÓiOXXàh-MiNh-ÞÎAMm@moÄ+ÑÓÐðÐÕÆIQ]IXQI",
ironDoorTop: "0g0gcłÚYĺ|WĶ$YĊóWĚĲW000|)ZŎĆHí8WĦŢZT4WĎĂH1g0100g2iyyyyyyz2)QR)QRz2?VÁ?VÁzÏ?VÅ?VÅzí?VÁ?VÁziúGhúGhz2)QR)QRz2?VÁ?VÁzi?VÅ?VÅz2?VÁ?VÁz2úGhúGhz2hiāhiāz2)QR)QRziRyxR!IzÖPāúPĂ.ă",
ironDoorBottom: "0g0ga$ĚZĶ$YĚĲWĦŢZŎĆHĊóWĺ|WłÚYĎĂHT4W1xj)xiAlÎ+Q@+Q@lÎÓhOhjMlÞÂyxÂyClÞxhmxhmlÞxh)xh)lÞxj)xj)lÞ+Q@+Q@*ÎÓÎOmÎO-ÞÂyxNyClúxhmxhmo1xh)xh)lÎxj)xj)lÎ+Q@+Q@-àMÓjMÓjÆBIIIIIII",
darkOakDoorTop: "0g0gfÇ2Z)ìWÀĸY]ĨH;ĉWSĉWEKZÎ2H)ĺHÚĞZÞyH(ëZZùWĵÀWčķW000000012zOyyyO)2ÄÓÏBÓÓ)3ÑQàCQ[)îÑUàC?[)JÑVàC?ÅA2ÒVàCVÅ)2Ò*ċ+ÃÈA2ÐOč+O/A2ÐOč+O/)3ÐNĊ+O!)3ÐyĊ+N!)3ĚyĊ:y!)3Ěyċ:y!A3ğæà#GďAîNOyy;ŅA",
darkOakDoorBottom: "0g0gcÚĞZ]ĨHÀĸYĵÀW;ĉWÇ2ZSĉWEKZÎ2HÞyH)ĺH(ëZ1yyyyjhAÁÔGÞCGGAÁáQìDQ]AÁáÑìD@]AÁáÓìD@ÕkÂãÓìnÓÕkÂãmúnÎÖkÁÞhúnhpkÁÞhJnhpAÁÞiJnhFAĉÞyJDiFk1ĚyJ#yFkÁĚyú#yFkÂĠòìrIĀkÁhhhyihk#ģģģģģģĜ",
crimsonDoorTop: "0g0gaèŌHĕDWú6WÕĻYÊīWXŜYÖÓW]ûHÀśHQîW1ixhyihzzO>OO)O)g*S(()3UgÀSVÀUV3ÑQQQQQQ[íyÂyyyyzwV0VV5VUgV0VV*VUg0>5À(3OjOQOQQQQ7GGGGGGGAQáQQ[Q[j)àO>[O[gOà3O)O,À0S0(ßwáÒ0S00J3ü",
crimsonDoorBottom: "0g0gaÀśHXŜYÊīWèŌHÕĻYQîWú6W]ûHĕDWÖÓW1hzjM?VyÎÎxÐh,ONÎÓCÎÎ,OÏÓÓCÓÓnÓÔÂyyyyyyDðÓmÓÓÓÓÐìhOhhMhkÎhOhhThkhOAMj>)QAQyQyyyyÿGGGGGGG4QáAQDARîQzQORQNìOx+hNMihÎxÓmiÎÏNRßQRDDD",
birchDoorTop: "0g0geľEZł^Wľ8HĎÄHĢďHĆCWŞĴZŖĕZŊ×ZQęHÆŘZŖąHZŅHZŕH1hhhhhhgiw02y02zi?VVOO)ziÄÓãÔÓÕzJÄÓãÔÓÕzĊÉģğçģĠ3gÄĲĳĳĤÎ3gÊĲĭÙĤĨ3g:ģÔãģĠ3g;ĮÔãèį3g;ľĮèéį3g:ğģģçĠ3i+ØĭÙĞÕ3i+ØĭÙĞÎBg,ØĭÙĞÞýù,ØĭÙĞÞč",
birchDoorBottom: "0g0geÆŘZľEZĎÄHŖĕZŖąHZŅHł^WıľYĆCWŊ×ZŞĴZĢďHľ8HQęH1z)VV>+äÎAQQQQPoÎBĒU?ĒÇoÎBOČ^OÇoÎġāāÓāāäÙènÞÞnnįÔÞGÞènèiÔĨèÞĳnĳiÔhÞĨnĮsiÙhĨhnĳhiĸsĨĨnÞhi1sÞÞĨÞsoÎnÞèÞèsįÙnĳGÞGnįÔĳsèèGĮääIIIIIIí",
acaciaDoorTop: "0g0geİĻZĬīYìyYęÐYĕàHġàYąàZÙňZýÐH000)ĺHÚĞZÁ?WÞĮW1h000hhijQ?U?UQ@3GEGEGE@3åúåúåúRċFúFúåúRěFúòúFúÂÃòúòúòúÂÃòùFùòùÂ3FùFùFùÂ3òùFùFù[5òùòùòù[lòùòùòùÅ5FùòùòùÂ5FùòùFùÅkòùòùòùÂČM0M0MĔĹ",
acaciaDoorBottom: "0g0gcÚĞZĕàHÙňZìyYýÐHVVHġàY000ĬīYİĻZ)ĺHęÐY1y)y)y)ÃÓDäDäDÞ>ÓDäDäDãjð,ä,ä,äjþ[ä[ä[äÏú,å,å[åÏú[å,å[åÏþ[å,å[åÏþ[å[å[åÐð[å[å,åÐĉ[å[å,åk1,å,å,åkÎ[å[å[åjÓĠāĠāĠājðÓhmÓhhj)yyOOOQ>",
crimsonDoor: "0g0g7000QîWXŜYÊīWÖÓWĕDWÀśH0000000000000kĂPČ00kĂPČ00_ÚĞŁ00ÑJPA00młÚĞ00kĂPČ00QĂ^Ļ00ÑĂ]ü00kĂPČ00kĂPČ00_ÚĞŁ00ÑJPA00młÚĞ00iPAJ0",
warpedDoor: "0g0g9000%âW/-ZFĭHCĂZyŀZËÓY]ŜWgŊH000000000000000001y)zy(001BÂzy(006ÂÂzAS007yÂByS001BNÃU(004RN>y(006yN>Q(007y)zI(001V)zy(004yÂzU(006yNByS007QNÃy(004y?zAS001hhhhg0",
acaciaDoor: "0g0g5000ìzWęüW$ÎWĒĒY0000000000000kJPA00kí8A00)í8A00kí8A00kí8A00kí8A00kJ^Q00kí8A00kí8A00kí8A00)í8A00kí8A00kí8A00iPAJ0",
jungleDoor: "0g0g4000ĉļHĚ5ZÎjH000000001ĒĒë1đqë3ĉië1ĉië1ĒĒë1Đaë1ĒĒë1Ēėë1ĒĒë1ĒĒë3ĒĒë1ĒĒë1ĒĒë1VVS",
birchDoor: "0g0g8000Ă@HľEZľFYŢŅWłÚYòŊHĖBW0000000000000kĹPA00lBĚA00ÒÚĞČ00l$þA00l$þA00lÚĞČ00l$þá00l$þá00lÚĞČ00lBĚA00ÑJPA00kJPA00kJPA00iPAJ0",
darkOakDoor: "0g0g5000AKYÀĸYQęHZÒY0000000000000kJPA00kł|Ĝ00Qł|Ĝ00kł|Ĝ00kł|Ĝ00kł|Ĝ00kJ^Q00kł|Ĝ00kł|Ĝ00kł|Ĝ00Qł|Ĝ00kł|Ĝ00kJPA00iPAJ0",
ironDoor: "0g0g5000þÇHĶ;Z|)ZĪcW0000000000000kJPA00k0S400)0S400kJPA00k0S400k0S400kJPA00lAÂQ00lAÂQ00kJPA00*AÂQ00lAÂQ00kJPA00iPAJ0",
spruceDoor: "0g0g6000ÎiYåÐH(ĪWÁ?W÷-Z0000000000000kJPA00kJPA00.AJ]00kJPA00kJPA00kJPA00pAJÆ00kJPU00kJPA00kJPA00.AJ]00kJPA00kJPA00iPAJ0",
oakDoor: "0g0g5000ÖÃWĆkZwKYĚVH0000000000000kJPA00k0S400)0S400kJPA00k0S400k0S400kJPĜ00lAÂQ00lAÂQ00kJPA00*AÂQ00lAÂQ00kJPA00iPAJ0",
torch: "0g0gd000ZKWť(WZŠHZZZąŜWÚÃHýĻHViZSĹW;ĨZ-ęY)ĉH0000000000000000000000000000000000000000000000000001w0000003S0000005K0000007ë0000005ù0000005ë0000007ë0000006Ĉ0000005Ę0000006ħ000",
soulTorch: "0g0gd000OĖZ2ĂZçŖZZZZąŜWÚÃHýĻHViZSĹW;ĨZ-ęY)ĉH0000000000000000000000000000000000000000000000000001w0000003S0000005K0000007ë0000005ù0000005ë0000007ë0000006Ĉ0000005Ę0000006ħ000",
lantern: "0g0gc000<5W?+HöRZëŘZwċYĬìZřQHŢCHZŤHZşZTBZ1yg000003Q(002h0iyx00150@GÑ00150,Ià005l0-Ăî00000-đî00150[Iá005l0iyx00000hģh00000ryę002h0Ěy#00150Ěy#00000ryę00000hģh0000000000000",
soulLantern: "0g0gb000<5W?+HwċY2ÇYD%WvcHÜYWŞŖZĮZZTBZ1yg000002hw002h0iyx00130kVT00130CGÏ003j0Dòß00000DĀß00130mGÎ003j0iyx00000hĒh00000qyĉ002h0Ċy!00130Ċy!00000qyĉ00000hĒh0000000000000",
beaconGlass: "0g0g5ĺĖYē|Yí80æģHôcZ0000019AJPAú9wJPAû94JPAû8ČJPAû9AJPAü9AJPAû9AJPAü9AJPAü9AJPAü9AJPAü9AJPAüFAJPAk9AJPwüFAJPAúCpAJP9",
beaconObsidian: "0g0g540Y00WgMZ-ýHAàZ4Jg&1s4yìÕ8ķBĠQòl8&B28ùìMAPAë8Pië1ħ9]EŃ6g]5)óAJňBīüëĀJIüASĈëSg20ücE4RdīJdĊJö4ķú0a]0K(4w9g]SĊkQ00",
beacon: "0g0gaZZZ!ŒW#$WĶYW_ÊZÜöZćĵZĮZZľZZŖZZ000000001hhyyyhj1iyARyxj1yQ?QQyj2AQVVQRz2A?ÔãURz1AÄäñÒRz1QÅòĀâUz2?ÅòĀâQj2AÄäñÒRz2A?ÔãURz2AQVVQRj1yQQUQyj1yyARyyj1hhyyhhjOOOOOOOO",
cactusTop: "0g0g9000.ÎYTJWĆþZÁřHÈNYÓÐWĢŠHTúZ000000001yxyNixg2QRQQQQg2?NVÒBUw2?ÑÅÒ@Uw1AÄÒÒáQg2*ÒÄÓVUw2@Ñ@ÓÓÑw2@Ô@ÒÓUw2?ÓÓÔU)w1QÄÒÓUQg2?ÑVÓ?Uw2?U*VB)w1QRkQXQg1ixyyixg00000000",
cactusSide: "0g0g9000.ÎYÈNYÓÐWPĩWÁřHTJWĢŠHĆþZ1zAÃNi*g6ÂÅÂNjNÝäÂÁVN>Ng1yxÂNí*K1z+Ã*lBg1OxÃ*lyÝÞOÁÅ*lNg1OxÃBiNg1zÄÂVj*K1ÃCÃVj*K6ÃEzBjBñ6ÂxzBjVgäÂxzNÐBg1ÃÁz*ÐBg1ÃxÂNßBg1zMVyl*g",
cactusBottom: "0g0g700091WdìYĲ,Wĺ[Y÷īYĊŝH0000005AòFA]9ĞŋÚġ8a:ãŁĽķaÓŋúĢķ5Ľŋúģg9ĽŅĕĥ89Ŏ)þ<86Ö)Ă{į6Ötĵ{ķaÔAöĤķ9ĽŊÚĤķ9ĥãŁĿķ5ĞŋJP84ČóPA]000000",
glassPaneSide: "0g0g4000ZZZĪņZěËY01ë001ħ001ë002ë002S001ħ002ħ002ħ001ħ002ħ001ë001ħ001ë001ë001ħ001ħ0",
glassPaneTop: "0g0g4000ZZZĪņZěËY0000000000000000000000000000VÇĎýšŖŤĖ0000000000000000000000000000",
ladder: "0g0g7000ýĻWÀřHéîHĞ*WÒRZ-ęZ0Ĉ002ëeOcJoŇlļÚĞďÕ1K005ë0Ĉ002ëiOA(ĀŇlļÚĞďÕ1K005ë0Ĉ002ëiOAJoĿlļÚĞďÕ1K005ë0Ĉ002ëiOcJoŇlļÚĞďÕ1K005ë",
vine: function(n){
var pix = getPixels("0g0g5000ÏOZÈjHíĝZÛÑY0kŉÀoĿil04loÛy01īëÝĈ0dĩë0Ĉ09oSgü1E8ÂÂphëRëwoĿímħ05o0oħ02ë2lw08ë0Ĉ01RĈdĈ0ÂlwekaeAwgkügČ01i10ċ8EF0")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
Water: function(n){
var pix = getPixels("0g0g8Īc%ĖĢŔĎĂÚĺ|%Ķ;ŔľËÚZZŔŢŖĕ4üúAùŌPyPBAJBAJA0ÂFy1A2P]JJ?AP]ĊTAiJ4JPAþŗÞJTAJSŀñĀwë_PAJPAÂFAÂQíPPAJPAúPAJPkJFAPA2óPAúzÕawÿşAiP")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]/255
setPixel(n, i >> 2 & 15, i >> 6, bright*10, bright*30, bright*255, pix[i + 3]);
}
},
Lava: "0g0gpŀĉYĸSZĸSYńŉWőîZňŉWįŇHňřHŀĉHŅ2HőîYļSZŉNZZďHŕīYįŗHŚ*ZĳŇHńĉHĳŗYįŇYŉNYŚBZōNZńĉY0QNgĉ(Rg03-0jĈÎ8ĹgtP^SgĀx8elęĖ]2ĘĤ30Rg.ĵ0Rgï$o0gEœ2ĩgöõ8iÝë30S0gë88ùëŇ0SkĢ7(SEXx3Agąë9õgĳTÐ85X6*mŎ4zÒÊ0ĀĭMìÔ8w826UM(RëĤx8Ri.Ó8@joEâĩ00Ĩ8igĀ4îJħXĺ8S6K$Fĭ@0C8íãAw",
craftingTableTop: "0g0g9oÀZcwHSëZÝŉWĦÓWąÐWĕċZUŉH]ĉY1gzOON10kRÄÓÓÒATkCÓÓÓÓÏT2ÔñGIIãwBÔÄãÕÓãÂ+ÔÓïÔÄãÐ+ÔäGñäãÐ+ÔÓãÔÓãÐ+ÔÓãÔÓãÐ+ÕIäñäãÐ+ÕÄðÆÓãÐBÔÄðÕÄãÂ2ÔäGGGãwkCÓÓÓÓÏT4RÄÓÓÒAS0gzOON1g",
craftingTableSide: "0g0ghoÀZĖ*HĢVZĩãW-ìHÝŉW]ĉYýĻWĆkZAìWéîHÒRZSëZEÝYłÚYĞłHg(Y0QMùĎM]MõS0íjĈðM2h900XwIF^ggIS2üàđK2þčĕS0ķMõÓ(ĭwï00XīM4wRx8S22ķĜAwXgĉ02ĻďFK2ĻčtS0ĭŇĠÓ(ĭMõS0QŘ;Ay2ëĉ00íkx4wRkwS2ĻàđÝí÷č%K24MI@(ĭìIK0QAwAwXh4w2gh54wíXx02üĝĐŇ2þčĕK",
craftingTableFront: "0g0ghoÀZĖ*HĢVZĩãW-ìHÝŉW]ĉYýĻWĆkZéîHÒRZSëZEÝYĞłHZZZłÚYg(Y0QMùĎM]MõS0íjĈðM2h900XwIAyggIS2ÂàčS2Uĝĕw0ķMõÓ(ĭħę00XĜ54wRĭ(S22ħXAwXĽĝ02JĪčS2JŎĥw0ĭħXÓ(ĭŎĤS0ÌŞIAy2ñĥ00ĂŞx4wRn;S2JàčÀí}üĥS24MI@(ĭìĠK0QAwAwXh4w2gh54wíXx02ÂčAŇ2UýFS",
crimsonNyliumTop: "0g0gbï4Wè0WÑíWÝĚZüTWĔÎYÑJHä0WÝĪWħĚZĤĚZ0iO?ÎBÅ>Tj0Qk)QVEgûì?M?[NÎìh>3[Q8mUÎëùM/ìkzTBá30koSâU(oxìî4Uč.NkSì[[Åî3Îhko(@okÆTò38mi]híS-hÑkÅXkVQá(ì?NhTë>08QToC]kù)äÎ(Míh(?Rk",
crimsonNyliumSide: "0g0glüTWĔÎYä0WĤĚZè0WÕ0WħĚZÆ0WÀ(ZUÎYUÞZÑJH;(ZáĪWÑíWÝĚZáĚZ{ÁHÝĪWï4W{(Z0Sg8z00g4Îw2M0zoSMX5F4202FQÎgďxįÂkX.S>üŎTıàĄď/a>ą8RgáAŎÂeàĉFRÄ@*&^÷ïBĶí^äĢiFÑŊJ}áÊŞ@BxŅŞlĹ:ć,ġñàŃşÀď{sŞġñüņ8ęúá~D?côń@?M>ČÃİįõÀľ<į{sŞĴŏõÂŎĴŏôĆŠĢFôsŞ<ĵõÊŞĬķ_yŎĥĵ",
warpedNyliumTop: "0g0gfÄlWdïY<*HTčWdşHaäHdşY?čWe8Y?ĝWaĿY6äHaĿHTĝWeĿH0iO?xBÁÔìj0ÓmãQVFgďÞØÞ?TNxÞhñ3ìÑ7iĠxÝĈMèÞoDì#m30onKlUÝtxÞà6UŒæßoKÞìÎÁà3xhmn(Ïnmğìè33iiñhßK,hEoÁäoÉÓo(M_ßhìÝñ07Ñìnyñmħ+nx(MßhÝÒÏm",
warpedNyliumSide: "0g0gndşHaäHe8Y<*HeĿHdşYdïYaĿH$ŊW<*YdïZÀ(ZEŊWUÎYÑíW;(ZáĪWÝĚZáĚZ{ÁH{TWï4W{(Z0ShcA00g4ìpRTIAwSR4Ď(ĭxI>MðÞõį^6ÎĀÖRX)F8ÈkXx]ÏĻüxØÈĽĬĝc×ķð%ĕÉÊÿĨĖØÆĞĝĸûUİĢÂÂČōC}áńD}ó_BnFĹÐċÆġŏáąp%{ÙąoġœýÐFĥŚâpD|ÜĄËÔĴěÉČĎPĲĄľ7?ĲÙąEĽ#ĄŁŏĽ#ăċqĢÚăńn?ĵĄńoĴĹØōŏĬĵ",
warpedStemTop: "0g0gkSÏZSčZdïY]îWe8YQýY6äHQčZ+]Z+oH+oWNåW+-ZpVWFáZxĭH]îHSýZNòWQýZ02xõïMħ(gwagXBaÈJXM1yqľ.ŕçŅŞ.Ñ2qĝęõÏĀī.0íÊĬF^ÂüĎ<(2uĬ.ĶçĄČ.w/Êč*!ÂÊč.hNĆĬ.LæĆĎ<@!ÌĬ.LßÊČ.ByĆĬ.F^Ćč.QqÊĬ.ĴàŅĎ<zqÌĬF^ÂüĎ.ziuðFcÐoĜ.yauŎġĵàĄŎ.12gXč9UJüM002xõï)Ĩ0gw",
warpedStemSide: "0g0gpSÏZSčZeÅW]îHdïYa6H9ĞYUċZ]îW66HQýYaÔWSÏYQýZ9ĎYSčYaÅWdïZdōH;ĝZSàW;ĬZi+ZdōWSčH02xõìES(ow02ÀcìE@(ùw9IgõC(e0XĨg6Së1(}N4č8ĵi4Îw@ÝĀĉ1ĵi4Ŋ92(4Ĩ9eÝùÔ-]gĀz(ĵëù8.ĩR58(0g4ì0ĭi0ŎaSÎĈAwSR4ŊÂĹmsŇ9q?cÙ]@0õŎ18n01(ķSĘÔÁ24đóauKù3Oħ(Ĩō0Êg?ĈaUìđx0BMëüĕėëow",
crimsonStemTop: "0g0ghSÏZÀSHè0WüTW{SHĔÎYIŜYëļHXŜYèļHùŝWÆĜWÕīYüŝWý6WÊĜWÆěZ02w0ÑES0cw9õÐt9Â}ÐwĨq05ĕôÐoĬĕċ1ëōĉ8RÀî$ħ1ĽXčF^Âü(Ň1ĀXĥÙÏĽü$Ň9ĽüëŐPĽüĔĨ!ÆXĥ$ÏÆüMBxĿXĕ$ÇĽü$ŋqÆXĔŎ/Æüĕz1ĽXĕŇçoü(Ň1ĿXčF^Âü$ŇioÑB8Rgĺ%y9ā6%ØÈĽĝĔĨ1õîą7_÷àwħ02w0ÑES0cw",
crimsonStemSide: "0g0gjSÏZÀSHĘíW]îHè0Wü(ZIgHUċZ]îW{SHĜíWĀ(Zä0Wù(ZUSHSÏYĐíWùMWÀSY02xõìES(ow02ÀcìE@(ùw9IgõC(e0XĨg6Së1(}N4č8ĵi4Îw@ÝĀĉ1ĵi4Ŋ92(4Ĩ9eÝùÔ-]gĀz(ĵ(ù3.ĩR58(0g4ì0ĭi0Ŏ9SÎĈAwSR4Ŋ^þgsŇ9iQõKE@0õŎ18j01(ĭħëÔP25Č98ĩKù3(S(IC0{ghw9ÂMčÎ0qňëøázwow",
warpedWartBlock: "0g0g7dşHhĞYhðHaäHeĿHe8YdşY02I0w10ÿ24Č1A208UoQ0ó{!wÀ0ýwJ1{8Ĺ04×E0h0{ù5ÂđwNë9A104ë809KlÀQ4^ñyFSyöAĄU1Ċ!pgĐ4yg50g0wg17g1SÃ10ķ",
shroomlight: "0g0ghŀSWĜĈWŌķWļ(WťzHŌħWťĞZZæWťjHŀ(WZEWZoWťjWZłHťğWZóWťĮW0Sxùï0RÐą38óÂõĭwJċāQ18ÐFÓ(įîFÓP]ÐĄőM{ÓoīgĳãāQpþěMĬP{Śp3NŁĺĀïp6*FĪNŁĺoïxÌŘüČq÷Ðlīz÷ĜsőxUĊcĭxUÓtĎÁ]MħīFaïEĭÁsÐkčxaĊý^M^àĥĪxÌě-Čq{ãĀĊqþÔl^ëŃÑgĈFcRý@waÂü1F@ÂČđ8SAëx",
polishedBlackstoneBricks: "0g0g6(ěH|BH;ŋHkMWAìZsTY4ĊÁEüî8wÂi0j8ČĈúEûT42T9Ð]0g0_Ðì#0þ_3ú8AþI3ĝģÉÛłÚEüûęiÁ14j8AÂìkûëüùSwċ]A2T8z?8wgPØ]_$þĲ#2_ÚÛŁłÛģÉ",
gildedBlackstone: "0g0gaAìZ(ěHkMW;ŋHQKWŁSZégZsTYZĜY|BH1g0whjkTiÄRwhjMTBÝ7xlîgßKhh1jÕG7ÞjO3.ùÅ4OûgÞ00Ô4jM04h0SGÝ04Î7h7ÞG1ijnÄS1hnDgáÞg401ÒG1ûMmÞj,ëG.ûlhOMÀGGjKOā06004SOúG4DGxng7G201T0",
chiseledPolishedBlackstone: "0g0g6|BH;ŋHAìZ(ěHkMWsTY0g002RcĚÉÚþĳeŁĒP!teë00Xd6íPBü|B6ÉÚüt6Ę00Ģd5hSk)d5MT)ĢtdNPAĜË56ĹPĂd5i_BĢt&ČýÄŁtÙ0S0ít|ĚİÚĞŁ^ēAJĬV",
blackstone: "0g0g6AìZ(ěHkMW;ŋHsTY|BH4ëgAěxF]ùAĞÎÂ1h%ĚySJT%ŀ4XĞĪãò4ÛĚx094%ù4A8Aë0úgúxùiôM]1AĬ8ói20gČ6Ğ^XğgúŁĳBĞKJRŇÛķ401gÛā2ÂQ{wP20gS",
blackstoneTop: "0g0g5AìZ(ěH;ŋHsTYkMW5yÆEëÑòirKñaIĈa%ĚìKI^TČÀ2]iik_0xpJR>ÎyõÎįrÒk_]8İ0ĉ2AĀa2+2QòrÂ2I]-ĨQiJiNíÀč1e4ùÎyoÛ2IÑĈTQSSxĚTP]õ",
netheriteBlock: "0g0ga;ĪW(ĊYAÞZPkYÇVY|AZ-ŊYT4W|4W$ĊY1000010ijQQQQ?QÂ4Ð*VàIOÂ4àIV*ÆãÂ4,ïïVÃÝN4àä*?VÝM4GàVUO+N4,ÒVV,+Â4*VÃ*àãM4V?GàG+MlVïGGÓ0Â4ÆÆ+ÔÓ9ÂlÐOãÔKāÂlKÓKāāùÁlO*V*VVNiyxiyhyy",
basaltSide: "0g0g5|AZoûW-ŋYËâZ(ĪZ50ĪÙ(wðSĪÙ(iN0łÙ(ëA6łc-ëQ(ĩ1waÂ+icxaJ)ķÙxgùQëÎĨ2ë(ĀÚĩëë6rÚĠăù6rdírù+rTĚs0+2ìXkëQgëwĹì6ăgAħ46rÎXo",
basaltTop: "0g0g7ËâZâľH|AZ)ĻWóEY;śZoûW0üÉA636mĹKÈŁč+ëeĪÀ{qì{ĀqĭhSÙJ&ħìØ5ìSĿdĀ0Ģý%ŋĐ4Ĥđ1Č5DÙįĞĈ?ġJħSKocëÈ0ĄĨwëO4ăTPëŝī(×~Ó6ĴëeÑĘ]Kwe(wS",
polishedBasaltSide: "0g0g6(ĪZ-ŋY|AZâľHËâZoûW5.júF8č-ĺ÷B9č-Ŋ÷*99+łöġ95@ŊöĠúB]ŊöĠú5QłòįI1AłÖįIĉ)ŊÞĎIĉ)ŊÚĭöĊ-ŊÚįï6]ŊÚĠïa-ĺÛ)I!-ĺÛ-ù!-ĺ÷-ù!.j÷Ph",
polishedBasaltTop: "0g0g7(ĪZ;śZâľH|AZ)ĻWËâZóEY5Cŋ^ĠįańØĽďÇ#$ýİÒÚâ/ŔÚĞû+ĥĞPCŀ.ËËĖĎĕ*ĤřİēĝÉ;ŚĒĎĕĞĜŜÖŎû#*ÂPŒĚâ*ËÛōĕĝ)JÉÓúÖÄńâğû,ÑŜÈĻúFÒÂÈĒđ6ēÈ^ĢI",
chain: "0g0g4000AěZP@H<lW1g00ĥÝ00ī000Ìŗ003g001g00ĥÝ00ī000Q000Íŗ003g001g00ĥÝ00ī000Ìŗ003g00",
warpedTrapdoor: "0g0g7%âWtVW/-Z/8W+åWFĭH0004J9wùPFĭĊJQķ$60hìÇ8Ô+aœpFØmĲÚo&ŔÓĸŒgNńþĽÓúiËþŁKā!ÚuŁKp!ŏĖŁ×ŇeŌãĴŔx$ÓŝĵŔÎE×ŕĶ;gEaŌĚÀwaQŋJPo4J14ù1",
warpedPlanks: "0g0g7/8WFĭH/-ZtVW%âWt4WgŊH4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
warpedFungus: "0g0gc000iÕHŤùWmĿHťþYlşHlïYŏŗZ<*YQîW]ûHUěZ0000000000000000000000000000000000000000000000000000000001zON>g005jONxÀ006VDlVK006ÓGIÓK00009ù000000aù000000bĈ000000aĘ000000bĈ000",
magma: "0g0gaSÁHİ(HÑĊYÀÎYŝiWŌúWÝĪWščYšáHŜŘH1z3Aw2ÁzÓ(0Bz6TNGÄyÁNÕNUÄ)liUìzxÃxÁzyÒwNg2@(3N@zw+íÐ06ìUiÏXVzAihTlmxÂÁzBzÂwNki(ANR(3Bw2í6Xz0Bz2RjÏÂ(ANÐÂTNÃyÆUìxxV]XÓzÄN*iC@(Nkw5z3Bw2kÐÓ(0Òz2VNÅãCQNBNVÄ)oðlUÐxjxkÐyÕK+g2Ä(3+RÐwN>z02VTÂz?UÐxÄXQ?iÕðlzÒzÄw+?Â(ANi(3Òw2R2Áz0xz2Ä>yÂ(ÎNÐiÆN>Cïl?xÕTl]ÏzðNMÂym(+oK5z3Aw2TzC(0Ez2ìNÅãyTNENVÄ-lRUTzB>FhzyBwNë2Ä(3NÂzw+RÐ06TlÂzÁlzÕðUÁViBi]ÐAzÂwNlÄ(BNð(3xw2Â6ïÐ0Bz6@Ãy@(ÑNÏð?NÃCÆXÆÒxÁhÆÓÐ@N*RyÂ(Nlw",
crimsonFungus: "0g0gg000īĺYČJYťþYŤùWüÎYÝgYÀÎWħĈH]0WÀÎY]ĹZÇjYÝĪWï4WåïW00000000000000000000000000000000000hz000003TyÀ00004T>À00006VQK0007xiÔäK009ãÓGÓù000ÿåÿå00000aĘ000000cķ000000eŗ000000fŇ000000eķ000",
warpedRoots: "0g0g5000mĿHiÕHlşHlïY000000001E00001E00002Ýië0ü0ëiħ0þ8K,01ĠhT800SĂ14S0ĈĪÎëë0M0Îëù0(ħTíë0Ęķ@4010o8601ëŇÙ601Ĩ0ß800T4í80",
twistingVines: "0g0g5000lşHiÕHmĿHlïY000000000A00001Q00002Ò(0003Ûy0003×0000j×0000j^0006ôQ000kÉ(0001i(0001hw0000Çë0006ŀë0006Ļë0008Ļë00",
twistingVinesPlant: "0g0g5000lïYiÕHlşHmĿH02ûw0000ÂxS000ÈòĎ000aúë000aÁ0000bP(0001Ö(0001Pù0004{ù000sõë00QAÙë01ďAÑ0000ċA0006ûw0004āw0002ŀw00",
netherSprouts: "0g0g4000mĿHiÕHlşH0000000000000000000000000000000000000000000001008TwS8ÎyS-ĚO];ěOõ",
crimsonRoots: "0g0g5000ÑiHĔTZÀiYùjH00000000000000000000000000Sw00048wë00)Ĉwg00ïgëí00IÃí100RüwĩëXCIï(IwxoT0gëSwR0Ňg@9ëĮo28Ĳ5īħ1IĪc-0",
weepingVines: "0g0g4000ÕgWä0WÆ0W0Õn00ŏn00Ń600;a00(r000)000c0000000000000000000000000000000000000",
weepingVinesPlant: "0g0g8000ÕgWä0WÆ0WīĺYŤùWČJYüÎY02I1g004Ā1pSj)ë1ŤĈÿ)ħ1Ğ01Ĝ00J00Č00ü00ďČ0BĈ0DĖëiħ06Ŀ04S00ù0Në00úmyS00P1J009O8ù00PY9Õ000Ŀ9ç002À5(0",
spruceTrapdoor: "0g0g9ÒNYìàHåÐHÇiHUňZÖ>W)ĺH;ŚZÖĎY1zhTÃxNÀ1zlSÃÂ*w5ky(UBTÀÔîä,îä,ð0Ã5SÃ5SÀ5kÂ*kÁT05ky(UBTÀ2AB(ÃwRÀ2Uy*4gRw13i?4l*w1ÃlM3i(g1jÀTjhSÀÔXä[îä[ð1ÃlM3i(g1zhTÃxNÀ1zlSÃÂ*w",
oakTrapdoor: "0g0g7]řWÎRYòīWąŋYÞàW000Ě*W000000FČł|CāgiÐKûg$łà@łúEłà@łúEłà@łā6ÔăÃÙI%+ĺ|Ğŀ%ĜûÖĎúEiÐSûp$łàÓłā8ÉÉ@ŁķEłà@łā&<ăÁŔúFĞĺ|Ğĸ000000",
jungleTrapdoor: "0g0gbÞ>HÖiZąīYĢmHĚ5ZýČH000ĩ@Y(ĪWPAYÖĎY0h0100g02O>)>O>xjQRUBRUMi>@CÏÑ)x2)Ó@ÔÓ>w2+ÓãÑÓÐw2@ÓCÏÓÑw3,,,ààà(5RÂUB?áÀ2RÓCÏÓ)w2QÓãÑÓQw2QC@ÑÏQwi)QARQ>xi)G)QGOw2AEāđíRw0g0gh01g",
ironTrapdoor: "0g0g8ĚĲWĢŒYĪcWĺ;ZľËH00WņéZŎĆH4üJPi]%ĞŃöĞŀ$ČċÒBp%ÉÐ×łp|ÉÐ×łq|Éà×łĂ|İĤ÷ÜŁÁĞŋúĞŉÁĞŋúĞŉ{ČČïBq|ÉÐ×łq%ÉÐ×łq%Éà×łā%ĴŢÛ|ŀ%ĞŃöĞŀ4JJPi]",
darkOakTrapdoor: "0g0g8]ĨHÀĸYSĉWEKZ(ëZ;ĉWÞyHÎ2H0JTw009ĞňFĞŇełÞełÝeë(eëMg0Þg0ÞgiÞ(iÞjŤġOŤĠ4íPwJ80JT0iS9Ğň9ĞňełÝ&łÞeëM&ëMg0Þ(0ÞgiÞ(iÝjŤĠOŤĠ0iSAù0",
crimsonTrapdoor: "0g0g7ÊīW]ûHXŜYèŌHú6WÕĻY0004J9wùPFĭĊJQķ$a0mìÇ8ÚĞłÙpEìTAëÆ%FA^Qķ(ëPyëÁgÚĞłÙpEÚĞłÙpEJ8Ĝ2KdđAÞČň$ëEAiÎEÚĞłÙgEa5ĜÀwaQŋJPo4J14ù1",
birchTrapdoor: "0g0geĆCWĎÄHľ8HľEZł^WŖĕZŞĴZŖąHZŅHŊ×ZĢďHQęHÆŘZÖyW1h01h1hg2OOyOOyxj000000Mj?ÓÄÔÓÀMj@ÕäïðKMiÿVGâGÝM2þðãñÕKM3@IÆñIKx3þðÆÔÕKwjýÅGVGÀMjþðÆïÕK(jþÕäñðK(3ýÐQāþÀw3PüyyČSx2OyĤłyO(0hg01hg1",
acaciaTrapdoor: "0g0gaòiYāRYĕàWġċYöNY000İīWÁ?WÞĮW)ĺH000000001izOOONw4QN4>wQ(1VÏ5ÄwV(1VÏ5ÄwV(1VÏ5ÄwV(1VÏ5ÄwV(1VÏ5ÄwV(1VÏ?ÄAV(1VÏ?ÄAV(1VÏ?ÄAV(1VÏ?ÄAV(1VÏ?ÄAV(2zÐy+NzK1+,IIàÐg009GGù00",
bedplanks: "0g0g7ĢVZĖ*HĩãWýĻWĆkZéîHÒRZ4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
bedbottom: "0g0g4ĔĊWĜĩYĈJWĤŊWhVĉťgEnťllZŤ7ZŜáïVVUïVÀkĉVV7xVÄ7]VUñħlVfĸ1VvşVU<ãlSüWZÂëïSgÂĐV5!",
bedtop: "0g0gdłéZŖĦZĮ|WĪcWZZZĒĲWÕTWùíWXÎYĈJWĤŊWĜĩYĔĊW0h0yy0h01zOOOONghN1hhgzhh(kQQT3hgMQQQQj10MQQQQj02N1hhgzwVVVVVVVVÓÓÓÓÓÓÓÓGGGäIIåÿāāGGGåĒāĢĒēāāāÿGĢĒĒĒġGGGIGGIIIIIĳāāĳİāĄĳĳĳģĤĳāĲē",
bedlegs: "0g0g7ZZZÖÃWĆkZāĻWĚ*WéîZĦÓW0iÃK000iÎK000iÃK00&@ÉPĘ0ėÓØPķ0&@PAù0000000000000000000000000000000000000000000000000000000000000",
bedbottomsides: "0g0gbùíWXÎYĈJWÕTWāĻWĚ*WĦÓWÖÃWéîZĆkZZZZ100yyyw1hhhg000hg0hhhhhhOOOOOOOOQUÄU?ÄÓUGGGGGGäPg2yyyw1hhg1hhhhghhg00000OOOOOOOO?ÓÒU?Ò?QüñGGGGGGĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒ",
bedtopsides: "0g0ghłéZŖĦZĒĲWÕTWùíWĈJWĜĩYáÁYĮ|WXÎYāĻWĚ*WĦÓWĆkZéîZÖÃWZZZ02gX2paÃsčS2gì2paÂĄČRgXx2q]RąFgXx8RoĭMõÐÂĿĭ%×ÂĿĝ%^×ĄŞĥŖçŅŞĥŖF}Rúzg2gX0FeRčzi0gX8xeRgîigXx8oĭMõÐgXx8RÂþčę×ÂĽĭM×çŅŞĥŖçŅŞġ|Xx8RgXx8RgXx8RgXx8RgXx8RgXx8RgXx8RgXx8Rg",
bedfrontback: "0g0gfXÎYùíWĈJWÕTWÙTWĚ*WāĻWĦÓWéîZÖÃWłéZŖĦZĮ|WĒĲWZZZ01hiyyx000hhhh0000000000O)OOOOOOÄÒVÓÄVÄÒãIāāāāIÔĒģģģģģģĒıĒģģģģĒĔĳıĒĒĒĒĔĳńńńńńńńńÄÒVÓÄVÄÒãIāāāāIÔŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕŕ",
bedIcon: "0g0gb000ÞĮWÝ0WĦŢZŖĦZĄíWõ(Zë0W;ĨYÖ>WĊkZ0000000000001h000002zQg0002BÂ)T002CÓVzQg0CÒÓÒÂ)g2ÒÄÓÓÔxë2ÒÓÓÔyFë2CÓÔyyòë8yÔyyI8ë9íyyI00008yI000000Đ0000000Ā0000000I0000000000000",
respawnAnchorTop1: "0g0glUŞZ$ČWE7YwÐWë&HsÂWKqY00WA4HA4YA4W(5Z)6W$5Y{7H(6WE5WA3ZA4Z;6YA3Y0Q00S0010w8ĭ(XzoĩicÎ0ıÂüčF^ÂüÏhóàĄŎ.ĵàüw0ıàĄŎ.ĵàüw0ıàĄŏPĵàüw0^àą_Ð}àüí0^àĉFàŇàüK0ıàĒ!üCàüKg^àĆ)ČeàüK0ıàĄŏúĵàüw0^àĄŎ.ĵàüw0^àĄŎ.ĵàüĩgıÂüčF^ÂüK8ĭTXzo@gõÎ0SK000ë08w",
respawnAnchorTop2: "0g0grUŞZ$ČWE7YwÐWë&HsÂWKqY00WA3ZA3HA4ZA4WE3WA4HA4Y$5H$5Y(5Z)6W(6W{7HE5W]7W;6Y-6HA3Y$5W0Q00S0010w8ĭ(XzoĩicÎ0ıÂüčF^ÂüÏhóàĄŎ.ĵàüw0ıàą9^÷àüw0ıàĕöàŇàüw0^áMÞüCŚüí0^âĝĵČŒÐüK0ıâĕbVÜîüKg^âčpĴâOüK0ıàĕöÃ×àüw0^àąĴĖ÷àüw0^àĄŎ.ĵàüĩgıÂüčF^ÂüK8ĭTXzo@gõÎ0SK000ë08w",
respawnAnchorTop3: "0g0gvUŞZ$ČWE7YwÐWë&HsÂWKqY00W-6HA4WA4H;6Y)6WA3ZA3HA4Z$5H(6WE3WA4Y$5YS6ZE5W(5Z{7H]7W(5YA3Y$5WS6YQ7W0Q00S0010w8ĭ(XzoĩicÎ0ıÂüčF^ÂüÏhóàą9Â÷àüw0ıâęĖàŇŊüw0ıäĎ^ĄFÃüw0_Óİ,Òz7kí0_ÑĒàīÚąkK0ıĜčđéþòüKg_UġģńġrüK0ıêĎ^æĕÃüw0^âĽ×ğ;Īüw0^àąãğ÷àüĩgıÂüčF^ÂüK8ĭTXzo@gõÎ0SK000ë08w",
respawnAnchorTop: "0g0gvUŞZ$ČWE7YwÐWë&HsÂWKqYA3HA4ZS6Z-6HA4WA4HA3Y$5HQ7W;6Y)6WA3Z$5W(6WE3WA4Y$5YE5W(5Z{7H]7W(5YS6Y$6Y0Q00S0010w8ĭ(XzoĩicÎ0ıÂüčF^ÂüÏhóáB_ÐqŎüw0ıI@[/såüw0ıĂ&ĔěĖākw0_òVåöŏŊüí0_ïĚĽļMĦkK0Ĳ5Ė_@wēkKg^ýĆ|ÛD{üK0ıĵĖĔ>(Ăkw0^ĿCĳīņpkw0^ĬĎoĪţěüĩgıÂüčF^ÂüK8ĭTXzo@gõÎ0SK000ë08w",
respawnAnchorTopOff: "0g0g8UŞZ$ČWE7YwÐWë&HsÂWKqY40Y50g048%Ě_ÙĀŀełÚĞłÈÈZZZZ]eZZZZ]eZZZZ]6ZZZZÏ6ZZZZÆeZZZZÆ@ZZZZÆeZZZZ]6ZZZZ]6ZZZZß}łÚĞłÆ%ĭ_ÒJŀ4K080I",
respawnAnchorSide3: "0g0ghUŞZ]ōWE7YKqY$ČWwÐWsÂWŢÔHĵlHZZZZĴY40Y00WgMZAàZ-ýHë&H0Sw018ĩ0õwxQggĭMI14ČFRgĀĭMõgXč9RikĮTóSXĉ8^RüŐÂaÂkx9mÂāØ/cÂĔìÈĽěo#S{ÒĕØ92lĀì9cĘXìÐaSĀw0]i*ĕjQRoXxcR)RÕXÁ)ĭMĂĭò÷ÐÄCòÚÉŅōĜÏÉŅĽSÏàŇĞöēàĂĠ%öj[8MĲÐþ+ĕĲÆŁĨęô×Ŀ+%ĖÕþĝòØ",
respawnAnchorSide1: "0g0gfUŞZ]ōWE7YKqY$ČWwÐWsÂWŢÔH40YZZZ00WgMZAàZ-ýHë&H1201jgjg?x4ÓÓSxUVhmÓÓÎhVlh?ÔðUhÁhUVåIV?hkïÄIIÒÆTIIÓoìÓIIkhðTkÕhTĒUmg1T_ģ#A@QQÑ_yĚB#ÓÓĢĚĔēíĚôöŃģNöłĖNĴŏěĠĳĠŏē#=őįĔîĠįîĢ/ĐĠċĐĤĚIíI",
respawnAnchorBottom: "0g0g840Y00WE7YgMZ-ýHAàZKqYë&H4üoNìÒ4NúõØoC^?ĕŞ]Âğàfúú*)Ğţë(ÜŉħqÀhŃ:y6Ą^5ĭťQŊFCVńēqł~nŜÐ(řÖÛ20ÿö$DîiÄĹiNăě6ĀĝõbÜAÕ)ÓEpü]KŉtÕ0ë",
respawnAnchorSide4: "0g0ghUŞZ]ōWE7YKqY$ČWwÐWsÂWŢÔHĵlHZZZZĴY40Y00WgMZAàZ-ýHë&H0Sw018ĩ0õwxQggĭMI14ČFRgĀĭMõgXč9RikĮTóSXĉ8^RüŐÂaÂkx9mÂāa/cÂĔìÈĽěoES{ÒĕØ92lĀì9cĘXìÐaSĀw0]i*ĕjQRoXxcR)RÕXÁ)ĭMĂĭò÷ÐÄCòÚÉŅōĜÏÉŅĽSÏàŇĞöēàĂĠ%öj[8MĲÐþ+ĕĲÆŁĨęô×Ŀ+%ĖÕþĝòØ",
respawnAnchorSide2: "0g0ghUŞZ]ōWE7YKqY$ČWwÐWsÂWŢÔHĵlHZZZZĴY40Y00WgMZAàZ-ýHë&H0Sw018ĩ0õwxQggĭMI14ČFRgĀĭMõgXč9RikĮTóSXĉ8^RüŐÂaÂkx9mÂāØÈĳÂĔìÈĽěo#Æ{ÒĕØ92lĀì9cĘXìÐaSĀw0]i*ĕjQRoXxcR)RÕXÁ)ĭMĂĭò÷ÐÄCòÚÉŅōĜÏÉŅĽSÏàŇĞöēàĂĠ%öj[8MĲÐþ+ĕĲÆŁĨęô×Ŀ+%ĖÕþĝòØ",
respawnAnchorSide0: "0g0gdUŞZ]ōWE7YKqY$ČWwÐWsÂW40Y00WgMZAàZ-ýHë&H1201jgjg?x4ÓÓSxUVhmÓÓÎhVlh?ÔãUhÁhUVGGV?hkâÄGGÒÅTGGÓnÞÓGGkhãTkÔhTIUmg1TPāFA@QQÑPyJBFÓÓĀJóòßJåçĢāNçġõNēĮûÿĒÿĮòF;įďóàÿďàĀ-ñÿîñĂJGßG",
flintAndSteel: "0g0gc000?kHĢŒYĆåZ(ĪWÞĮWkÁHVVHEĊY4gHéŞZĒĒY0000000000h0000001yg00000i)U00000iSQ00000jg000000jg000000lgk06000?M)0ÔK004ÃS6Xù000Q0Ñæò00006XĠÖ00006æðÕù0006áÕ[ù0000ĀÖā000009ù00",
oakSapling: "0g0g9000RNZÄěZtúYhTWéîYÞRZÆŘZ{ĨH000000000000010000020O0000Si0?Ñ000ÓMQÄG00xzK@ÔN002mÅ6Kxw000Óð02w003@x4(007ÔNi+ä00j+ãÆÔîg1h7CÕä1g002jÎw0g001EÏg000007Õw000007ä000",
cryingObsidian: "0g0g840Y00WE7YgMZ-ýHAàZKqYë&H4üoNìÒ4NúõØoC^?ĕŞ]Âğàfúú*)Ğţë(ÜŉħqÀhŃ:y6Ą^5ĭťQŊFCVńēqł~nŜÐ(řÖÛ20ÿö$DîiÄĹiNăě6ĀĝõbÜAÕ)ÓEpü]KŉtÕ0ë",
netherGoldOre: "0g0gcÀÁHUíWÀÎYÑĊYÝĪWSÁHę1HšĚYï4WZĜYZŢHĬúZ12NQOÃ)MjMBzR5Ow>>Ó2MÝN)X.ďk)ă3z][û]îQAM4MĜIQ:O>3RU)>!üXT5z>ç_àIN)NCOQ()zPċÂ))S2k)àÂ]QCÂ+ANbA(Ôi3>A/J4)(k)]Pçj]SzQîxC))Oy)R)lzQO",
potDirt: "0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ",
flowerPot: "0g0g6000ìzYòOYå3HáŚWÑŉZ00000000000000000000000000000000Âßë000ë20000ë20000ë20000ë1ë000òÒë000āMë000ô÷ë000òßë000ôNë000ĄJë0",
acaciaSapling: "0g0g7000ãMZÒŘHêÏWéÞWöęZÖ(Y000w00041Ñ000CĨìĈ01NŃòĻ00#|÷Äë05Îæķ007bÂk00iŁĸĜë02ĕJĈ001Ñġ0001bĀù00ięÇ0002ĊŁ0000Bă0000BĀ0000)Ŀ00",
birchSapling: "0g0g7000ÇŚWÛàYĖŝWĲÈHÁĹZŊçY000w00002S00001Ñë000Iýw000úöy004ąĹù004cĴĹ000aĔĊ000ÂöCë02ýáĢë03ÃŁÀS0Aōŀw004iķw000a@ë0003)00003Õ00",
blueOrchidPot: "0g0g8000LWZ!ZZCėHu|H^NYÄĊZlŗH00000000000000000000000000a00000ĺë0ħ00ŌK6ù00C0b0000ĈK00-0î001ďQÖë00S(Q0000&ë00007Ĉ00000Ĥ00000Ň00",
crimsonRootsPot: "0g0g7000èiħùjSÑiHùjHĔTZÀiY0000000000000ë00000g000004ħÏ(00aoÏë00bKKÀ001Eìë008ŕí0007ÙÎħ00dÆ÷Ň001(Ċë000wĊ0000rìë009ĆfS009ðoK0",
darkOakSapling: "0g0g9000RNZtúYhTWÄěZ{ĨHÆŘZÞRZéîY0000000000000000000001w003xg0M3000kzkzi00MBÂR+>003ÃxzÁ(0002ONCÒ000j+y*Â003(ÓÐV)g003iÓÃ0000kDÔÀ0000*äGK00000äãÀ00000ÕÔÅ00006ÔÒÓ00",
jungleSapling: "0g0g9000+2W%ęYFwZ$ħY(ķY-ŗZwùHoÝH00000000001w(000002jR(00004*Ti0000xQ>T00003m)300000Äz00002)Ïk(0000hMMw0000wCÃQ000005Ñx00000NÐ300000>Î000002mR(00000CÃ000003[X(00",
spruceSapling: "0g0g7000wĹWgwW%yZ.ÐY$ÝYÀĸY00000000100000aw0000që0001t$0002ĵQë001đßë001ÉNg008ŀ&0006ÊAë001Ñĭ(00buęħ00m}Ě8000ŀBĘ000dwë0002S00",
warpedRootsPot: "0g0g5000mĿHiÕHlşHlïY000000001E00001E00002Ýië0ü0ëiħ0þ8K,01ĠhS800Sq1)00EĪÎë0010Îë000ħTë000ķ@0000o80000ŇÙ00010ß00014í00",
smoothBasalt: "0g0g6|AZ-ŋYËâZ(ĪZÖĎYoûW5yS02Âx0]]ĞS5íĩTm2SĚi^Âi0íÂúĹù$mR}Ě0ÙN0&ü9ČXI%XûwA14Aï1AûÙČ9E4ìÒùì4BgÙXù%]ÉwČùwnØE4ëSģÇ]Aí]íĿSwÂ",
crackedNetherBricks: "0g0g8oMW;ßHQJYwTHEÁY(ÎZ-ÎZ8gH000000BmÂXþđĚňĐĽŇ?Ġ[ÕĞĮÕ0+ħ0+ħÒzśÔs}7ÁÚałAæņÑæİAÙ00c03ŀŜîŘĖuĜb[ĿÎ@ýŖÌĝŢÌdĘłdĘłĴÔJĽÄťĖĸĕþĨļĝĨÙJÁĕ",
polishedBlackstone: "0g0g6|BH;ŋH(ěHkMWAìZsTY0ë840^5ih]ĊûEiJIíV1iúFkÒ0ĐĊEĐĊ82^IíÂBiúFkÏx2U4ĬB0XÑB?bBk9ÂAö4iÏüĀ{8ĊúÀđU5AóM^ý8ăiFq|EĐČþČUÂP$JP$",
chiseledNetherBricks: "0g0g7QJY(ÎZ;ßH-ÎZEÁYoMWwTH0229238EpAĐýgĠòAĐd{łÚĞŁd,UĂ?ĕĕQķjPcąQĹóBsdcĻÂScĴ:VĚÉ#Úcķh]õdQĹŝŀĂdQķòSaĴ:ØĞĞłĝTĤħ0ctQĂİ%ĂËçØĞłØĝ",
oakLogSW: "0g0g6ËyYâÐHúīW-ĉY{řHāŋY02PAJ]AČJ|ħPQāw4JÂJRPPÂÑ^M8i,xAJJ]JPÛ090gAAăÁAŁòw1a?ğsÄJS0üÂÚĮ1A0PAJJAüõw0PĝyÂUjzÝûAúĠPXįPAČëAăÂ",
acaciaLogSW: "0g0g6ÇUZÖïYåĭYÁAWÇQY÷nH02PAJ]AČJ|ħPQāw4JÂJRPPÂÑ^M8i,xAJJ]JPÛ090gAAăÁAŁòw1a?ğsÄJS0üÂÚĮ1A0PAJJAüõw0PĝyÂUjzÝûAúĠPXįPAČëAăÂ",
birchLogSW: "0g0g8ŚĦYZZZĦšZ)ĹYłÙZÎâHņ|HŖĵY0üĻw@ŏgıŇ(óœĀpHŗüĻĂh7zpKoj6zH$gjcCvĔħ8cAjðX_9ŋh84ľìţg94:ę;IP2:M;ĀÎîUxoùKîF1ĀùBħĨ4ëo$oúÄ6cĄgāÙC{Ŀ",
darkOakLogSW: "0g0g6(úH;ĨZ]ňZEìW(úWÇiY02PAJ]AČJ|ħPQāw4JÂJRPPÂÑ^M8i,xAJJ]JPÛ090gAAăÁAŁòw1a?ğsÄJS0üÂÚĮ1A0PAJJAüõw0PĝyÂUjzÝûAúĠPXįPAČëAăÂ",
jungleLogSW: "0g0g9ÇhYSĸWÖNW;ĨWâJHÀŘHéßHVMYÎÏW1w3w3Ri51ÒàÒ3íg53l>Ò1ìg5z5ì55àgBx5à5Ò51wwg11ÒxÞgÀlhÀxwÞwÀ(nÂMB5wÁ+oÂnBB5Àm7Àoxw*Àí5341D*1R53Õ3ÔhÎÝBzÒ38gKgw1Bì7iwi0z1ìl20igx1Si0",
spruceLogSW: "0g0g6$ÝY-úW{ĨH$ÀY(ÝYUňZ02PAJ]AČJ|ħPQāw4JÂJRPPÂÑ^M8i,xAJJ]JPÛ090gAAăÁAŁòw1a?ğsÄJS0üÂÚĮ1A0PAJJAüõw0PĝyÂUjzÝûAúĠPXįPAČëAăÂ",
crimsonStemSW: "0g0g8QîWÀÎWüÁH]ûHUěZI(Zä0WĘJH0ĊÉõj]Cč_úëÁĠĂÖ5îĴ4ŉeĿĻÆÙ-ĵ:gŀe@ÞKŉaAjõÔÙÅ^ŃÑoîPCJŊ-]ħĿñoĭ@eÚíã&MĘKąòci>ŏŉÐ)öPD.A1+×2ñObþį0řdČĒS",
warpedStemSW: "0g0g8QîWQĝZi6H]ûHUěZhĞYlïYmÄZ0ĊÉõj]Cč_úëÁĠĂÖ5îĴ4ŉeĿĻÆÙ-ĵ:gŀe@ÞKŉaAjõÔÙÅ^ŃÑoîPCJŊ-]ħĿñoĭ@eÚíã&MĘKąòci>ŏŉÐ)öPD.A1+×2ñObþį0řdČĒS",
basaltSideSW: "0g0g5|AZ-ŋYËâZ(ĪZoûW42T9+SÑ989yR0ùłA0ù0(0÷R9Py_Õw]022PA2PwùP0oP0i]mĩPyS9yi1w]PwÂPAhw080wò9AÂc4ûSAħ%ëĿ008úįł1Ę4eRÉÚĘĿ",
polishedBasaltSideSW: "0g0g6(ĪZ-ŋYoûW|AZËâZâľH4JS9w1AþİA2łJ@łÚĞŃöİAĞ[AÛłÑßÉÙßÉÚĞŀAþłÉþłÚJPBĞłÑĞłÚĞłÚÛÇ%J@łþłÚĞłÙJÉrÛPAĞŀzĞĲÚÚĞłÛPAAĚ]0mł90SP0P",
crimsonPlanks: "0g0g7èŌHÕĻYXŜY]ûHÊīWQîW;ßZ4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
deadBush: "0g0g5000ÀřHýJYÒRZęŊH0000g00401ù0040Îë006ëQë000ķÑg000ŉw000JqÕ0]0mĩõ)S00Èï(000b]ë0001]0002ħ{ë000ÉÙ0000pÙ+0001Òù0001A00",
chainIcon: "0g0g4000AěZP@H<lW000004S006S0030009ħ00cS004S006S0030001000dħ00cS004S006ħ003000000",
lanternIcon: "0g0ga000<lWP@Hò>Wì2WĨíWřQYŢCHZŤHZşY000000000000g0000001w0000002g00000010000000ix000000)>000001yyg00004ÄÒS00003Ôã(00003äÿ(00003åñ(00004ÔãS00001yyg000000000000000000",
soulLanternIcon: "0g0g8000<lWP@H2ÇY#$ZGĶHZZZĶZZ000000000w00001S00002w0000100000aQ0000hE0000Â]ë000Êõë000čę0000ĖŜ0000ėļ0000ÒĘë000Â]ë0000000000000",
coal: "0g0ga000sÞZ$ĚZ(ĪWAJH)ĺH-śHAßHgTHsÂW0000000000000000001hg00000iOx00001?ÐQg0001UNNT0001G?Ò)g00kAáVA-00iÐRy[]00kyAQDGë0kQáDPPë0páGGååë08āáÿåĀ000òāĀIë0008Ië00000000000",
stick: "0g0g8000?kS]ĸHEÝYòJHÖMZþÇS)ĺS00000000000]00002Ā0000lo0000Đħ0005Ä0000!(0001Vë000aõ0000VK0000ċ00005ÌŇ000EŝŇ001@W0001Ę0000000000",
emerald: "0g0gb0001SWłťY>įHnãWėţZ2ĊZ0ĘW2ÂYîŁZ1ňY0000000000000000000hh000001z)g0000iÃ+[0001BÃ+ÑÝ001U?ÄðÝ001U?þĎÝ001U?þĎÝ001UPþČÝ001UP/XÝ000móĐÿ00001ÕČÝ00000GG0000000000000000000",
lapisLazuli: "0g0g8000oşZ4þWt^YÈeW*èWãÌYh8Y000000000000001AĈ000bJĜ000Ùļŝë03ÒøĢë03ċėĿë03CêĿë0qŌŝī00ńvęĜ00ŠçĝĈ01Íœĕ001:q]000Aù000000000000000",
diamond: "0g0gb000hĮYZZZľZH_ĥYċŕYzrHlâWqĒHuPYLöY0000000000000000000hh000001yzg0000iQÃÔ0001AV*@Ý001AzzQÝ00iRQVðñ00i>?Vþñ00iCVUĀñ00jQIIÓÿ007]ÓÓðÝ007ĐÓÓïÝ000åQVÔ00007GGÝ0000000000",
goldIngot: "0g0g9000ęúWŢUYZļZáĈWZťWŅÁWőĨHZZZ000000000000000000000h000001hyg000hjOOM01hzOOONSlOOOOOV)iÃOO*V+Ai*OVÃãÓAiNï,ÓÓßAnN,ÓÓßAS1ß,ÓGQS00nDáQ00001kS00000000000000000000",
ironIngot: "0g0g9000ËâZĒĒYÞĮWłÚYZZZ)ĺHí8WÇÒY000000000000000000000h000001hy(000hiQQz01hAQQQR(lQQQQQV>iUQQ?V>CiBQVUà,CiyV[OOyCny[OOyãK1ß[OGÓK00nDðÓ00001mK00000000000000000000",
copperIngot: "0g0g9000ąiYĨÐHò2YŌŜHąOWťÕWÙĹWŢbH000000000000000000000h000001hy(000hkBÂ>01hARVAR(mAQBÂQÓ>kÑRy@ÓBÅkCQÓÑyÃÅkÂðBÂBODkVÏVyÃÅÝ1BÒÂBGÝ00l?DG00001nÝ00000000000000000000",
rawIron: "0g0g9000VOYŁġWZèYŒ#WZŅZ-ĹYĖ,HòļH000000000hhg00001z)xh0001**)Nhg0kVÃÃÃ)x0kAVO>RRgÑGRGIßßgÏñDGìoGgÏIDähhoKÔIìhjUGKÔäìhQ>Dð6äIÓáRìm0ÓÓ0ÔGìm00006GhK00000ÓÓ000000000",
rawGold: "0g0g8000ęúWŉSHŞjWZŀZŢĊZZZZÚhY000000000000009AJ002ÃßČS0kŒĝĜI0ĴËĕĽş7Ú+JĜĠ7ÖAĕ)ä6ıŒÖyätÅÉP:vt!Ł&ĳľ3Ĝú%Čø3ĎòŐĜ~0áøtiä0fş3Zħ000000",
rawCopper: "0g0gh000FUHIřH},Y.ĽWýěZŐŌWťÕWİàH}ŐYZbHÙĹWñõHĲŕZčyHÎÑWAŊH0000000000000000000000gX00Qx8002Ngx9{àĈS0ÂúČîF÷ċāK0ÆĽBB!gÑ9KhaúùïÝXŋ$0hĳNùĖgĄŎ$0hĵÑlegĄBĕKÇ÷îxĩj÷î.Ĳ2ĳX-}hĻÑ.ŗ4uň-RÇ÷G;ù46[òØÈgňgù0x8$02ķxR0000000x8000000000000",
copperOre: "0g0ge÷-ZéŞZâľHÖĎY.ĽWËâZňīZĨüHĊóWí5Yř6Y.čYÈÆW}ŐY00g1zyhxhxyhhjNhiQ*ÃOCÝyh2U?(gìxyBPÔùhyhg.ãĐ2BÃwxh8ëzÇýxzBÃxrĴĮM0)ýM0Ĥþßsńİgi4I1w{ëlMgìih8j,Ãh1yiy)þďzzM0PëP]1)ĹgI18ëh0ghiighhg1",
netherWart: "0g0g7000ÀÎW]0WëßWīĺYČJYÝgY0000000000000üë0005ıķ000+łq0ÙS+ÈŁ3.]}ŁřpłpbÅI6ÉÈ1ÄS5ŀß1+@įŁķ5+ěĕ+À-Ĥöå+ë-ĤûĬ;ë5Ùíį$ë9Ïíįyë9iíEyë",
wheat: "0g0g7000ŅōHĵĬYĎVWâĹZójHÇĈZ0080008ëh0005ëa0g0d0zëĈ0e(q|g81Ď3Õ+À1È20ÆõĉĽak(Ŀ?ļÃkÀķÖ7Ð8Ęgĝñ3dĈgĝó2mĈoĉ8!k-qëõ#S@#Ĩ)CÕEEĨĳCo;(",
lodestoneSide: "0g0g8ĒĲYĊĂZ÷-ZéŞZ-ŊZPBWÖĎYâľH42óPk]5İÚľ×İ%ŕŢZ;ŀ+ŎŋúŤÎ,ťďÞďŉâ*rŕ+ĒåPĻøįĒGĵŋú-ŒåĽĔĝ#őåłĴčŁěåûÁ!JēçC×ÆŝĚåĜĖŀ%ĚKÑòB;^PÙŝł;ÃÖiÁPiÂ",
lodestoneTop: "0g0g5ĒĲYĊĂZéŞZÖĎY÷-Z40]0i09CĺPĞù8080ëh8jc(ĩp$oĉóiÀ8įJÁ]pc?iPEÀc]JPyÀEQJP]oEĀJÁyocİk^]pEoÏÀĩÀcjAðio8090ëg9+ŁÚ)ù0iPwg0",
anvilTop: "0g0g6000T4WPAY;ŚZ-ŊYÁ?W000000000000000000BmŀBĞŋ!ĊĕFA_^üĒ^ĒôĒĂđÄĒòĞē×ĝÉ_ÄŁĕĜłÁVÈĕĐļÁVÈVĐċÁFkıĝiòBįłöĞ{000000000000000000",
anvil: "0g0g6;ŚZT4WPAYÇÒYÁ?W-ŊY0üăÛQS5]łJ]I1BAúĝg4đAÚįò9kČJ?wĈČUòy55y1PiÚ4ČòPEï0üò!PgĈČú6QSĈiSFy0Ĉù9]ë5ĞìTw1ÚĈJ%0iSĜiS0úÚĞëP0ÉÚ",
slime: "0g0g5à6%ÏĻĕçC%ç+ĕÈČ%0Č90kĀdĞħS0z|21AwR$oÀ00Tcį0ySS8iS}g08g0]0S8î000À8ò001g0ëg2igwg04ùìx000įìS)44ĩĀÂi9w4ĀÝXJÚĞĿd0900S",
soulSoil: "0g0g5ÇjY]ĹZ;ĚH)ĊWÖQH4Č^ÖgABNj|24FĘjÕû8PwÉQù1|ùİA2aÖ0]0ë^]20ùiÃwù8ëüúF1wAČP]91Fwag]9]íJJ2óSmķgiJ0Ďõëüŀ1+Qìmĸ5)KXĎòFĊ4",
blueIce: "0g0g5×HYÛøZãėZ÷ŖZēLZ4ČI9ĭò0ü]2)P0J^x)TwíăSĚ1A5qSĊaQmŊSgJSCŁK6ĹwĞĹA5qx+JBgŊBCÂBwÁ5kÂxgh0kÁ0i94íT0ČIAüI5AùAĎķ9AĂB+ù|Cĸ",
packedIce: "0g0g6êćHðYYJŖZċfZYÍZĲHZ0ČŁQCĿ5Eİ]ĞSF@aÑù0Pùrwù9Pgh1yJ?A]9AŁBy^PCİ0JŁF+I4ĎùBĭSFAIaĚ0Ö)SÁ0T|Ċ2Õë^Úg9Q2JÙùPFiJÑJ^|kĄAüJÙČŒ",
ice: "0g0g6ðYŖJŖŖYÍŖċfŖ÷ĶŖĲHŖ0iāC@ŀ0þİNmKgJPùě0CiÑðp4Njc0P9ùûw2iÉgā8ùþİ2]PXĜĳii]úĎ]XJSeĚSAĚ0$J4%Ā1Ñû1Ùù4Aā9ĔħxAįPÓ09ÑįËw2ÃC]ĺ",
calcite: "0g0g6ŚņHŖĦHłÚHĲ$HZZZĚĲW5móÙSòFDÂßiúF:È(iÁFŁŁw0Â|Ľò0gĂ×ĜÂSJŔùČĂBlÈwüŁFCĸF]bRAS]úbÕF1ÕJjQùÂQüÁ4ùûAČAïyăÕĎKF:ÈÂ6SPŁĹëüT|+ķ",
loomTop: "0g0gdıÿWìîHĞāZĒÆZĚ*W(úYÁ2HĺbHÖÃWĎ4YïĞHĦ?YýŞW1xxxMxxw?*BBB**)@++CCCC)@C+C+++A@CCCCCCA?BâBBãBá]EEääääAPååååååá@ãã++ããá@CããCCCA@++++++)?ččččččČĘbĘb000b@Ď+ĭ+ĭ+Č?ÒÒÒÒÒÒÑ0SĜģĘ0SĘ",
loomSide: "0g0g9ıÿWĦ?YÚ3HUĩYï)WöUHĎ4YìîHĭðH0010hhg0iyyyyyywi)QQQQ>xkUQQVQ?xkQQQRyzMjyRQQQQxkQQQQQQxmÓÓÓÓÓÓÞo01101ë1iyyyyyyxkQVVUQ?xiyyRQQyxi)QQQQ>xiVVVQVUxg0ì0101ìGGGGGGGG",
loomFront: "0g0gfıÿWĞāZĒÆZĎ4YĚ*WĂ7HÁ2HïĞHÖÃWĭðHUĩYÚ3HĦ?Y(úYìîH11112210NNNNNMNOMNNNNNNONRRRRRR>*??????>*??????>*ÒÒÒÒÒÒÐ,ññññññî(9ù099ā3.ēģģģģĢĪ){{ĳĳīī><ńńńńńńĺ<ÓÓÓÓÓÓĺ<÷ŕŕŕŕŏĺ)0ā0ù0İ>ŕŕŕŕŕŕŕŕ",
loomBottom: "0g0g4Á2H(úYÖÃWìîH0000lVVÆg008g008lVVÀg008g008lVVÀg008g008lVVÀg008g008lVVÀWZZţ0000",
jukeboxTop: "0g0g7EĊW)ĚYÆĹWÆřYå>YýáWoÁH0ù9Aí09įłÛ@ķeÉÐßłp&İoePÇ&İoĵPÎeİuĵPÎeİuĵPÎNİuĵPÇNİuĵPÇNİuĵPÇ&İuĵPK&İuePK&İoePÎ&ÉÐßłp9įłJ+ķ0iPAí0",
jukeboxSide: "0g0g6EĊWÆřYå>YýáWSĉYÆĹW0000005+ûÚĎI9ĮsÞĬge:#ĚģodĮÊâĬÆaıœĖıĀdľtÁļga:#Ěģ85[Uâ?ÆaıœĖıùdVtÁļga#!Ěē88ĬUV?g6]Čó]I4JPAJ]000000",
noteBlock: "0g0g6EĊWÆřYå>YýáWSĉYÆĹW0000005+ûÚĎI9ĮsÞĬge:#ĚģodĮÊâĬÆaıœĖıĀdľtÁļga:#Ěģ85[Uâ?ÆaıœĖıùdVtÁļga#!Ěē88ĬUV?g6]Čó]I4JPAJ]000000",
furnaceFront: "0g0gdÁ)Z;ŊYÖĎYâľHËÒYJPWðoHwíWgTWĒĒYĚĲWĮsHĆåZ00g0hgh02zNNOzzSk*+zÒÒN(2ÓnGGÞÐw3ÎIIIIjTjEIGGIïT3EìhhoïSjÇĂĒĒđýMjÐANRNNwbēģģģģģù9āđÓÓĂĂĨcý[IIáÇħ5ÀIIII3ħ3ÆIGGIõÀl-GGGGîĨihg001hx",
furnaceSide: "0g0gcÁ)Z;ŊYËÒYÖĎYâľHðoHJPWĮsHĚĲWĒĒYĆåZéŞZ00g0hgh02O>UO)Ow2@ÏNV>VS3VÄz@V*À2?UA*ÒAMizNÄÃ?(13Ó>VÒOQwkVÐVRÒVTjQNACVU(7ñGGGGGùaāòIIIĐĉqđāāāāāKmĒĒĂāāĂKb××ĒđĎĎĘ3)>QQQO(00g0hh00",
furnaceTop: "0g0g7Á)Z;ŊYËÒYÖĎYðoHâľHJPW020AíS9DB|ĿķaŔ×Ă.Ef|ýł[ÕmÖÃģÒÇ%+čÛīìaÔ+ĸFo,ÕŝĵÚđ:ÚÙàÚKrÚr÷İ0nÚÓŁ)ā!ıŝł[ĐMCĔłÇwnBÃĞġEaģE|ďÆ020Aù0",
blastFurnaceFront: "0g0ggĮsHĒĢY÷-ZÖĎYâľH;śWPAY|)ZÇÒYÞōZóoYÒðWĆåZgTWĞłHéŞZ1y)))>1ylÐãVÓÒlÐCòÓGäñCòPĂÄÓVGPĂ*ÅôIñÓVÃ?ÓÕñÄÔGá@æĒĒQQ,á,æ001h+Ð*UĨĸĸŃ*Ã&cMĸĸŃ÷ŉN;MŃŃŃõĪN]Ącc9óĪNĎāāāāÏċóĎÓÕIIóşøėQQQQZşIIIIIIII",
blastFurnaceSide: "0g0gfĮsHĒĢY÷-ZÖĎYâľH;śWPAY|)ZÇÒYÞōZóoYÒðWĞłHĆåZéŞZ1y)>Q>1ylÐãVÓÒlÐCòÓGäñCòPĂÄÓVGPĂ*ÅôIñÓVÃ*ÓÕñÓÔäî@äñÔÔIIá[IãGÄÔGÑ*ÓVVVÓÒÃ$ĳĳĳĳĳĳĩ/Ĺń%yĒĊz/!ĹĊ!!&z/ő!!őĒőŊ÷ĖőőĖĖ}]Xŕ}Qŕ}Q]IIIIIIII",
blastFurnaceTop: "0g0g6ÖĎYâľHÇÒYPAY|)Z;śW4ëJP0PxĭŔĕįħdīċĞĠŀ+,ÚÛPxeAŒòEŏÁłÚĝģÕÁ[ÊPB!|ĽŉÂ+ŁÄĽŒĞľÈ}_zúBy|īČöİqi@ŔĖğ×+ĞłĕEŐ%Ĭs^/ŀxįŒÞŁĨ4giPyó",
smokerBottom: "0g0g8ÒRZÁ)Z;ŊY-ęZËÒYÖĎYðoHâľH0üPPkëcĲğþţÆDŔţłËò,ÚďłØŠWÚŌŢÖőÄÉ,ğŐaOØĞŁ|đÍÚãľÚĢÉÚťģÚŘ:ÚĕľŔòWÚŝłÇ!ÃŖãłØġÈ_=łéęDPŌZńò0ņġþıÆKüPPyS",
smokerFront: "0g0gjýĻWÒRZ;ŊYéîHÀřH-ęZÇÒYÖĎYâľHPAYĮsHAJHoÎYóoYĒĢYéŞZwÎH)ĊHÁ)Z0Qx8RgXx80pagõÎwĭSüì0^SXïx2ikA0càĄŎ.ĵáoÎ8Ĺč%õÐoěĄ0w{čMõÐoĭĈzo{ďMõÐoĞĈìoiďĕØÈĽĜ)AxqĻ*ĴàĄōĜX9x8J(XP8S3ow(īÞIĪgħÎ8ıÂgČF]Rüì0^(üÎEĩÀüÐ0ŉiQAIPigz8ňoĩMXÐ8ħAxÒF^ÂüčF]ï",
smokerSide: "0g0gcýĻWÒRZ;ŊYéîHÀřH-ęZËÒYÖĎYðoHâľHÁ)ZJPW1yyyyyy0)ÁjM>)lT1Uh?Qh?k0ÔGÔGGãMjäðĀIñÿ0TĀþåIðājMGÕÿåðÖT(ÿIIðÕðkQāåāåāāQkVQUVQV3(ÃlMÃllMjÁ?kÁ?QT1ēĞĞģğĢO3ĐôÔăIæjjĐòÖäĠ×k?ĒĒĒĒĒĒ?",
smokerTop: "0g0gaÒRZÁ)Z;ŊY-ęZËÒYÖĎYðoHâľHAJHoÎY0hxhyxy03kÄÔ?ÅÎ(hâÅâVVÓhlVÓ[ÓÓÅÞnÄiIIx[ÂB?EIIíQikÄIāāIÒÁDÄIāāIÒßCÄIāāIÒÎmÄIāāIÒhnÄEIIíQÂAãiIIxVÞCQUãÓÔÒÎhÑ[?GâVh0lãÞ?UÁ((hxhyyh0",
chiseledSandstone: "0g0g7ŖĔYŎăYŊØWł^WľpHĹŏYĭğW00SAíP|ğzÚĞŃþÉÚĞŒĞ009AJ}d,ěç,u%ğàG,C|Cþİ+ō%+ŝŀğCPĜĚÇďCþłÚĞŔĞAJPAüÄ%ōŝÚŔþ~_ÒĚčĎVUļ}ğÌ|CłúĠōĞłÚĢŔĞ",
cutSandstone: "0g0g7ŖĔYŎăYŊØWł^WľpHĹŏYĭğW00TAJ^|İAÛ+ŋJłÚģÚĞ00ÎAJÄ9)łò[t9ĭłÚğm%ĜłúĞĽ|įûÞ)ōMĞĺÚĞŅN+łÛ@ō&*r},CòĜăö+ĽFČłÚĞŅ|ĞłÛ]ļ^UĹÛÄýľÚĕłÚĞ",
sandstoneTop: "0g0g5ľpHŊØWņÈHŎăYł/W5yĹ^yU?AP(ī{CiôPSúÕüú?iĊAý1Aûi]JxïāiÀĊUEüĊìyòÀīUÀAÇúyČEyPÀJUCRĳEJòEĊK?ióMj4B@ÑCiÂAČ^PĀòQüòTo^]Ě^",
sandstone: "0g0g7ŖĔYŎăYŊØWł^WľpHĭğWĹŏY00TAJ^|İAÛ+ŋĞńĕģÉÚ,yPīąÞåĮePğăÔÑĝ|*_ÚŔÚĴĴØÚĂòĺyâĵŋłÇ)ĴĽĭĲĝĭŁÖRŅDAŅÚńÞÝőĖĶiŒöğÏÆčôÛ$ĳåFÞÈłăÜÙ÷įŐ+",
sandstoneBottom: "0g0g6ĭğWľpHŊØWĹŏYł^WŎăY5DqJÅi!@0J(úß)ûc8bìđcãĽĬ÷oØ^]ŋýĜĀÁQ$J+0ßm4JÀĕÒēÆÝ*A|?EKp$2pyòrzĝčzJ6tðĘîÞł4N]a}ČœùďFöyt{0ŋúĞē×ĚÆ",
tallGrassTop: function(n){
var pix = getPixels("0g0g6000í8WĖĒZþPHÞľWÒĎH4000000í01000ð010S1íħ1í00wħcð00wħc600(ë8400(X8400wX8)w0wëI#S0wĀÕC0cCĀ{E02CÀ{E00Cg{(00QgÏ(844gÏwS")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
tallGrassBottom: function(n){
var pix = getPixels("0g0g6000í8WþPHĖĒZÞľWÒĎH0XgÏ)S12gK(ë14oSwħ86oxSķ4mgx0ŇQklT0Ĉ]odKëĈõSdáùĈeĨ|ãgŏaĉBÄwŔĎĘÒÂĢŌNĢčCĢčÄĒ×ðĒVÄr!ĎûV)ĲFĚĪ|þÉ$ĚĲB")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
apple: "0g0gb000áĈWèķZUùYĄTHĜTZťÇZŃÂHţßYŤãYUwZ00000000000010000000z0000000g000004TMg0004ÄÃ[Ág00?òÓÖïh00?IIIäÁ00?ääGäæ00lÅâÅÆæ00lVVâÆÈ001VâVâĈ001?VGUĈ000ČU?^0000ahqĈ0000000000",
diamondPickaxe: "0g0ga00WcŚHOĔY#qZCİY]ĸHÖMZ8JWòJHEÝY0000000000000000000hhg00001zQMÄ0000nGQò000000Ã[000005Ö>Ý0000ÆùáÝ0005Ö0áÝ000Æù0àÝ005Ö00ßÝ00Æù007005Ö000000Æù000000ā00000000000000",
goldenPickaxe: "0g0ga00WìÞHZŞHŒĝHőĨH]ĸHÖMZ;ĘZòJHEÝY0000000000000000000hhg00001zQMÄ0000nGQò000000Ã[000005Ö>Ý0000ÆùáÝ0005Ö0áÝ000Æù0àÝ005Ö00ßÝ00Æù007005Ö000000Æù000000ā00000000000000",
ironPickaxe: "0g0ga000?kHZZZłÚYĪcW]ĸHÖMZoÎYòJHEÝY0000000000000000000hhg00001zQMÄ0000nGQò000000Ã[000005Ö>Ý0000ÆùáÝ0005Ö0áÝ000Æù0àÝ005Ö00ßÝ00Æù007005Ö000000Æù000000ā00000000000000",
stonePickaxe: "0g0ga000PAYĂÖYóEYéŞZ]ĸHÖMZoÎYòJHEÝY0000000000000000000hhg00001zQMÄ0000nGQò000000Ã[000005Ö>Ý0000ÆùáÝ0005Ö0áÝ000Æù0àÝ005Ö00ßÝ00Æù007005Ö000000Æù000000ā00000000000000",
woodenPickaxe: "0g0g800W)ĉWòJHâÏWÖTZ]ĸHwKYEÝY000000000000009Aë000Ãúă000eŁ?ħ0002ġë000mäŗ000ēö(005Ąd(00!Ňcŗ01Ô0cĘ0aĠ01ë0Çħ0002Ė00003ŗ0000000000",
flint: "0g0g8000wíW;ŚZ$ĚZc(ZVVHéŞZĒĒY000000000000000Aë0001{ħ000a^ħ000ÈğÆ002ļĦĐ00kýŐn00ĎŕPÿ00Ğř{ûK0ĞĂÑýĈ2kłBĕ00@łÖÆ008_PS001AJ00000000",
mossBlock: "0g0g6PßHÛ3WTÂZÁĊZÒĪWßRZ50Æhëń!nE}2ASī4Îþl|ĒÑÙNK9ĸEërzÞđw6x4$72ùÆĀQ)ciā?c(ňJ9$0ľ4kĘīÓħcíQ$ÙFwĊ1oöĀFgO4Òĸc0Ĩ{hċr÷ĀÑëbzã@x",
caveVinesPlantLit: "0g0ge000ÁĪWPíH{ĨHßRZÇ1WTÁZÞTZTÂZčJWÛ3WŞðYőzW-ĪW00ih)SÂÏ00hjiQÀy0507hAS02òùÅaĉS0Căī?0ĒĈ0yĄQxÀ0(004Rh(2î004qgdCFù0aĒ1lyăİ00(iDâĄİ00MxlQÇù001h1A?00039úiQ002ïăİqk00CwhİaĒ00yÁyù0Æw",
caveVinesPlant: "0g0gb000ÁĪWPíH{ĨHßRZÇ1WTÁZÞTZTÂZÛ3W-ĪW00ih)SÂÏ00hjiQÀy0507hAS02ñ0Å9úS0CB4?0āù0y3QxÀ0(004Rh(2î004pgaCD009ā1ly7000(iDâ7000MxlQÅ0001h1A?00030MiQ002ï0Ýpk00CwhÝ9ā00yÁyÀ0Æw",
caveVinesLit: "0g0gd000ÁĪWPíH{ĨHßRZTÂZÇ1WTÁZčJWŞðYőzWÛ3WÞTZ00ih)SÂ006hjiQDw0]ĂðhARw4oĒðbęS04ĘI$0ģĚ004{cÂ3y00Q#cDz004Rģ68ìS04kělòēk04_KlóĐĜ000Kę]ñw00bÁ4ÀÏß004É5ÁÉy004Ĝ2ÉU0000S0AĜ0000000S00",
caveVines: "0g0ga000ÁĪWPíH{ĨHßRZTÂZÇ1WTÁZÛ3WÞTZ00ih)SÂ006hjiQDw0?*ChARw4oÏÄ8ìS04ëùF0Ií004P9Â3y00QE9Dz004RI62xS04kîlë8k04]KlS6X000KìSÿw008Á4ÀÏß004Æ5ÁÆy004X2ÆU0000S0AX0000000S00",
sporeBlossomBase: "0g0g5000Û3WßRZðċZÁĊZ0000000Ĉh02ù0ĞbÒ6ķ0Nċ]ĜįdČŀ@mëdkıME]5ěhJyĿ1ČÑïüĀ0Ċİò)ë0Ġŀ?ĚS0+óÀüÀ1ċhúĎù5üiÝ+0dNbK2ëdù904ë000000",
sporeBlossom: "0g0ga000ń×YŜēZťsZĥP0ĝ.WýnHèĽWĽAWŕŝY0000000000000000000000000001g000000ix000001zNg0000jOOM0004ÃNz*S00RjyyMA06OxyyiOK7NNxizzÝ7jylÁyMÝ7ÒxVViÄÝ0GVÔãVG007ãäñÔÝ000ÔòĀã00",
hangingRoots: "0g0g7åÃY000ĢlZýĜYúUWĕŝHĢÆY4gÃ4mIyyÊAO{AŊzwċÎNŔeÝőÞ(Ą}ĭÏÞAı{ĻĹÖCĺÙ-ı|CûPĿă9AûeČĺ9AJ|AĩPAJPČJPAJPAJPAJPAJPAJPAJPAJPAJPAJPAJP",
rootedDirt: "0g0g9ĢlZýĜYåÃYÆřYĕŝHĢÆYúUWÚĞZðoH1i(TBNwwAÂx>wUÓ>2Q4Á2BzÑn5>ÒhBwiikÁCjDTNzhÁ+NzywÂyRwR0x?C0ÁykhRkiÑBzxkyNxÏCNimSxxÀ2ÎRzkRiAgÒ@iMzzihUAyR0AyylzÐBhl(zA0xAÁiTiíTyhÃ",
floweringAzaleaPlant: "0g0gbPßHÛ3WÁĊZßRZÒĪWTÂZ000QħZ{ňHÇhZÖRH1iMw)w2zi)kgS0gQwMNNk2(jyzx)jA)(zAAz>T323z>xxMwA2(z>TyigÁ2?M>Bi)2NiÃjÀ))ÏM,2Nß34ÎzDÑ[áÄÓÓ5ÔäGÓÓÓÓÓÓòðIÓÓÓÓÓ×ĀðÓÓÓÓÓ×ĎÓÓÓÓÓÓÖĎÓÓÓ",
floweringAzaleaTop: "0g0g9ÁĊZßRZÒĪWÛ3WġõZĸŕWą]YVTHPßH1gziiii01zNMM(jOzAÄilgNzh*ázkNO(w6@1(MiNjzjO2yMzwMNwwx?Îhjji2OÅRBji0zhÑÎkMh22zj2NjMzzxNMxy?ÎxM(z3iÅ>zjÃhNzÑÎONR3OM31MzNE0xxxxN0í",
floweringAzaleaSide: "0g0gbPßHÛ3WÁĊZßRZÒĪWġõZĸŕWą]YVTHTÂZ0001iMw)BÔziÄágK6ïQwÕÂNU7ÅjyâÞ)jA)(zAAz>T323C>BÔMwA2*z@ïymgú2P,ÅFl)ĊNiûjĂ))ĊM/ĊNĒċaĒz!ĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒĒ",
azaleaPlant: "0g0gbPßHÛ3WÁĊZßRZÒĪWTÂZ000QħZ{ňHÇhZÖRH1iMw)w2zi)kgS0gQwMNNk2(jyzx)jA)(zAAz>T323z>xxMwA2(z>TyigÁ2?M>Bi)2NiÃjÀ))ÏM,2Nß34ÎzDÑ[áÄÓÓ5ÔäGÓÓÓÓÓÓòðIÓÓÓÓÓ×ĀðÓÓÓÓÓ×ĎÓÓÓÓÓÓÖĎÓÓÓ",
azaleaTop: "0g0g5ÁĊZßRZÒĪWÛ3WPßH4XıEĊë5+āÒíł|wb$ðûB2ÈFĎĿSmĀÎJĂ%2À9CÃTþùSüİAĚı1NĂ{Ěë{üPBüĩ9yĩÕĜÃ|mā?wÇ?þjcĎaÕíİÖ(ìÕCîÚùĨÒ+ü1kÁ?Ĉy",
azaleaSide: "0g0g7PßHÛ3WÁĊZßRZÒĪWTÂZ0004ĎÀÞ0ûFĪ8ë2ATþĂ(CbP)Ê%[o|?j÷gĩd-ĸ?ük9XŊïyIČFÇöÂĄİĊē&ŎsİÿĚØÙĭŀ*ĞłÚĞłÚĞłÚĞłÚĞłÚĞłÚĞłÚĞłÚĞłÚĞłÚĞłÚĞ",
pottedFloweringAzaleaBushPlant: "0g0ge000ÒĪWÁĊZßRZÛ3WPßHġõZĸŕWą]YTÂZVTH{ňHÖRHÇhZ000000000000000000000000000000000000000001xzjkÀ003jAA)w005zmäyS002p,ĎFS002RĀÕý(004(ÂNĚÀ003w1ręù000bĤħ000000ĥħ000000bķ000000bĘ000",
pottedFloweringAzaleaBushSide: "0g0gb000ÁĊZÛ3WßRZÒĪWġõZĸŕWą]YVTHTÂZPßH000000000000000000000000000000000000000000i)zk0000lÔ>R0000@ïiN0000nÅRÁ0000PN>å0000xûzĂ0000(ĉM10000g4S400000000000000000000000000",
pottedFloweringAzaleaBushTop: "0g0g9000ßRZÛ3WÒĪWÁĊZġõZĸŕWą]YVTH0000000000000000000000000000000000hzjz0000zAÄÞ0000h)ÕÃ0000z)âÞ0000ijQN0000jÑNh0000NÃ>O0000MNNM0000000000000000000000000000000000",
pottedAzaleaBushPlant: "0g0ga000ÒĪWÁĊZßRZÛ3WPßHTÂZ{ňHÖRHÇhZ000000000000000000000000000000000000000001xzjkÀ003jAA)w005zjkyS002m)jCS002RÐ>Ò(004(ÂNßÀ003w1nÞK0007äë000000åë0000007ù0000007Ý000",
pottedAzaleaBushSide: "0g0g7000ÁĊZÛ3WßRZÒĪWTÂZPßH00000000000000000000000000000002Ą{ħ003b÷w008ıFĈ002ŊIù009Èõķ004Ø}Ň006MÑg0024ëS0000000000000000000",
pottedAzaleaBushTop: "0g0g5000ßRZÛ3WÒĪWÁĊZ00000000000000000000000002Ã%(004ĻÁg002ÊöĘ004ŃÝù002ôúĈ002ŋÕù006ċöĘ006ÈÖù0000000000000000000000000",
//spacer0: "0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ",
sunflowerFront: "0g0g7000ŝŉHZĜZZÃYřßHĸŚWĥĊW00000000000000000000000000aQ0000ĂÚ0002ĳïù004čĸw004ōęĈ002ĳïù000ĂÚë000bÑ00000000000000000000000000",
sunflowerBack: "0g0g6000BíHlŗHÂÏZ^NYÄĊZ000000000000000000000000009A0000ÃIë002čęg002ŔÛg003#÷g002ċęg000UIë0009A00000000000000000000000000",
sunflowerBottom: "0g0g6000ÄĊZÂÏZ^NYlŗHBíH001{0000qS00002K00002ÎĘ0002ÂĘ0003ÄS0001Ý0000qw00002{0006Īë0007ÑK0009#K0001zü00004ù00004Ĉ00005Ĉ00",
sunflowerTop: "0g0g6000BíHlŗH^NYÂÏZÄĊZ000000000000000000000000000000000000001w00002w00003S00004K00004Ò0006Ī]0006ÂK0000ôK0000jS00002Ĉ00",
waterBucket: "0g0ge000)ĺHåŎYĂÖYx;Z%ÚW?ĦY*éYÈfWłÚYĒĒYÞĮWþÇHZZZ00000000001hhg0001izOMg00i?ÔâUx00kÕðäãT00hkãÔTh00pĉhhrĨ00pāĂĔģĨ00pąĂĔģĉ00qąĂĔģĉ00rąĂĔģĨ001āĂĔĤg001đĂĳĤg000qĂĲĨ00001hhg0000000000",
lavaBucket: "0g0gd000)ĺHŉOZąŞYĞ,YĴiYŎ?ZĒĒYèřZþÇHłÚYÞĮWZZZ00000000001hhg0001i)?Ág00jÄÏCBT00lCCÏÏÁ00nïCÄÒú00qäIï#ú00qĒďåÉÞ00qĔďåģÞ00nĔďåÉÞ00rĔďåģú001Ēďåġg001æďāġg000nďăú00001hhg0000000000",
bucket: "0g0g9000)ĺHÞĮWþÇHĒĒYËâZVVHłÚYZZZ00000000001hhg0001iO)Tg00iBVyzx00lÓÒyyÁ00hmÒÂxh00nThhiM00nGá>yM00näá>yT00käá>yT00iäá>yM001Gá>zg001[áOzg000káNM00001hhg0000000000",
cowSpawnEgg: function(n){
var pix = spawnEgg
var pix2 = spawnEggOverlay
for (let i = 0; i < pix.length; i += 4) {
var r = 58, g = 47, b = 34
pix[i] *= r / 255
pix[i+1] *= g / 255
pix[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
for (i = 0; i < pix2.length; i += 4) {
if(pix2[i+3]){
var r = 200, g = 200, b = 200
pix2[i] *= r / 255
pix2[i+1] *= g / 255
pix2[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix2[i], pix2[i + 1], pix2[i + 2], 255);
}
}
},
sugarCaneIcon: "0g0g7000ÿĻHHOHF(ZÏíY@1Z.ìY0000000000000005(000j?ë000č*4S01!MĊĀ00hāoħ01cĹĞ009CPŏë2ŀáÂĭħ1ŁŉöĘ00ÅÒK000,Ø00001Æ00000ħ000000000",
sugarCane: "0g0g8000ŎĥYÿ6HēÔHíčY×kHûěWG2Y50Ňe0ŇiëŇe0ÀeKŇeÞEeÝōe0Ňe0Åe0Ňe1E50Ňe0Ňiëōe0Ňe0ŎĬ0Ňe0ŇřëŇe0ÀeeÀĵ1Ee1Eŕ0Ňe0Ňe0Ňe0Ň5eŇe0ŇiëŇe0Ňe0Ň",
diamondSword: "0g0gc00WcŚHďZW8JW#qZOĔYlïHuDH]ĸHÖMZòJHEÝY0000001h000000iz000001Az00000iR(00001AÃ00000i?(00h01UÃ000mgl?(0001àÅÃ00001GÒ(00000mj000008ûh(0000óĘOj000hă00O000m(000000O(000000",
goldenSword: "0g0gc000ìÞHZZZ;ĘZŒĝHZŞHŅÁWőĨH]ĸHÖMZòJHEÝY0000001h000000iz000001Az00000iR(00001AÃ00000i?(00h01UÃ000mgl?(0001àÅÃ00001GÒ(00000mj000008ûh(0000óĘOj000hă00O000m(000000O(000000",
ironSword: "0g0gc000?kHZZZoÎYĦŢZłÚYÖĎYþÇH]ĸHÖMZòJHEÝY0000001h000000iz000001Az00000iR(00001AÃ00000i?(00h01UÃ000mgl?(0001àÅÃ00001GÒ(00000mj000008ûh(0000óĘOj000hă00O000m(000000O(000000",
stoneSword: "0g0gb000PAYþ]ZĚıZwíWåľHÇÒY]ĸHÖMZòJHEÝY0000001h000000i)000001zA00000iNS00001zA00000iNS00h01ÃA000mgl*S0001UÂU00001VÒS00000mk000007XhS0000åĈQk000hó00Q000mS000000QS000000",
woodenSword: "0g0gb000)ĉWâÏWïJHwKYÇ1YQĸH]ĸHÖMZòJHEÝY0000001h000000i)000001zA00000iNS00001zA00000iNS00h01ÃA000mgl*S0001UÂU00001VÒS00000mk000007XhS0000åĈQk000hó00Q000mS000000QS000000",
floweringAzaleaLeaves: "0g0g8ÁĊZ000.NHÛ3WßRZġõZĸŕWą]Y50Ň5A>Ñčw5Ġ_Q09öń^õ@hùÒóùįúSËİAëó]ārìiÊùyrÿßQúČ4ÇÄoi4ëuşzhĠÉKSÑÑįÉÑČo=ŗbE41lÄi%ĭĸuŝie-ĹA4ŀ0]^AČĿ",
azaleaLeaves: "0g0g5ÁĊZ000.NHÛ3WßRZ50Ň5y>Ñčw5Ġ_Q0iöįóõ@hù0óùįPwn9AëP]ārìkĄùyrëiXúČ4Qĭoi4ë1]zhĠÉKSÑÑįÉÑČoAĘbE41e@h%ĭĸi@ie-ĹA4ŀ0]^AČĿ",
pigSpawnEgg: function(n){
var pix = spawnEgg
var pix2 = spawnEggOverlay
for (let i = 0; i < pix.length; i += 4) {
var r = 255, g = 170, b = 170
pix[i] *= r / 255
pix[i+1] *= g / 255
pix[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
for (i = 0; i < pix2.length; i += 4) {
if(pix2[i+3]){
var r = 255, g = 100, b = 100
pix2[i] *= r / 255
pix2[i+1] *= g / 255
pix2[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix2[i], pix2[i + 1], pix2[i + 2], 255);
}
}
},
crackedDeepslateBricks: "0g0g8ÇÒYÚĞZP)ZT4W-ĺH$ĚZAJHoÎY4ĊPAñ&wS0S0ŕw8ùJ8Ņ%5A9@Ć(;ĺPĥuaÔuĶÔĖJÖ$ĂİĎğçYťńŜA>nÀJì1(ōX0ă×IĆw40lxCRĜħVĜ&ýóëĂ+ōe5ÃĂİCJPAģÉãŁłÚ",
crackedDeepslateTiles: "0g0g6$ĚZAJHT4W-ĺHÇÒYP)Z4ù9wJ19ā$únÀKpÚ]AĿÑr×ĉAĀ0ùĹÒĞŀAJ1AgPJıĀ%íĿĝUŀc2oÄĎĨdĘTwg0w2PdîÑę^û$jÂ]AĿw2J|þħAù10ù9ÕAĀÑNûT+ħxĘă",
deepslateRedstoneOre: "0g0ggåŎYÒþHÁ?W;śW$ěH{ĺH-ĚZügHįgHţ0WŤâZīgHü0WťEYïÒYśÞZ1yyOhizyzQOOxyOzh1lÄQ>)ONlÅGÎ0hi>EäĂĤghz0xġŀňxøň1i&ŕyOŕNlÄOghV>yÍďÐwnñóř,ťyxy/ņŊuŉNz)>ŕ0hCVKzzN1iÔşŞi-řhO=ĕhz>QO0hŕ)(ixg0iiAwhyh",
deepslateEmeraldOre: "0g0gcåŎYÒþHÁ?W;śW$ěHłťYnãW1ňY*ÐZ>įHuÏYnkH1yyOhizyzQOOxQOzkÄiAQÄ)ONÔ3OxÔ1i>0kíh0hz0zPĂhxyx1oýæíOQNj]ÿēìz?Ï*ÐĢ0ii+Ý+Ý0xA>(1g2NzPĀM0hzg0åÅĊ1iOQhçæĚhO)ÄhEĈ4O0hÔ4(2xg0i0Awhyh",
deepslateDiamondOre: "0g0gcåŎYÒþHÁ?W;śW$ěHM4Wv|HGąWm.WÓEZľZHÎŎH1yyOhizyzQÃOxyOzh1ÏBU>äûNiû,ò0āi>yO.úghz0x!ßhďĚx1ĂãÕĚÕüNiÇăăVă>yDØOVďiON:ĜyDÕô)>iiÏzġýÂ0hzg0BÅí1i*ÀhæãÕęOğòhEÖăO0pû):Jxg0iiAwhyh",
deepslateCopperOre: "0g0gdåŎYÒþHÁ?W;śW$ěH.ĽWňīZĨüHí5Yř6Y.čYÈÆW}ŐY1yyOhizyzQOOxA>zkV3QO@ÝONgBÃx01i>yÆÔìghz0Eãùh)>x1i03z]XNi)>gqĤğyz?îwiēðÝ:ĳĠ1y*03iÉ0z)Sygh0g7zzN1iOBðÿONhOÆRÆÀ>?Ī0hz(1iw00iiAwhyh",
deepslateLapisOre: "0g0gdåŎYÒþHÁ?W;śW$ěHpÉZxÕYloZgłZhqZ?ĥZ×ÍHgŀZ1yyOhizyz>QOxy>zhÄÅA)>ñ3N1p7Ĉg0i>y((1hhz0z*úhÕyx1-ēďyē1Npĉ00h0jy!ĚOFlGkN(0ypÈďp>giJwóĘ!Khèħ1w1rĉi(chæĊoĈO)ēÁēëw30hÈÝw2xg0ig2(hyh",
deepslateIronOre: "0g0gaåŎYÒþHÁ?W;śW$ěHâüZòļHĖ,HŁġWŊaY1yyOhizyzQOOxÄÒzhÔÐQ>6ÝO+ä2zxg1i>0O+Ôãhz0xÔIĀÝCÞ1i0äë3QNiOO01z>yzCàwlÔÃNOÅäìyä4>igò3)0y0hz00zBÏ1iOÔ1ÄäñÎ+á0hDòÝ30Òz)M01gh0iAxhyh",
deepslateGoldOre: "0g0g9åŎYÒþHÁ?W;śW$ěHąJWőÝZZĜYZŢH1yyNhizyzQÀzxy)>h12?Q>?ÃNiAÄÁ0ÄÂ>y*ÔÁgÓ30xÔäÎx0x1i6ãÂOQNiO(K1zCÀzÄzÀii(1OÔ21yQM>i0hz)VÏ0hQ(3BÓñÁkVKlgÔÝ1*ÔñgzÄ1O0mÝ)(0yK0g2Awhy1",
deepslateCoalOre: "0g0g9åŎYÒþHÁ?W;śW$ěH8wYEĊYsÞZPzZ1yyOhizyzQOQTyOzh1iÄÑ>ãONiDÓñÀhi?ÏMnV0hz0hyT0ARx1iQ>yÔÑNiOÄáhCëyzBÕÔig2NOTã0yN)>ii0z)>?Kh)QhzQM1iÆÒÁiðÂhOmÀ1zÒ4O0g3ÔM0xg0iiAwhyh",
deepslateBricks: "0g0g7ÇÒYÚĞZT4WAJHP)Z-ĺH$ĚZ4JPAùjw00ë0ēw1w08û!8ùi5j)!ĊúFÃiļÂóčàĞłÚğÉēŀĥăçÓŅA2>4JP20ēw10i1jw40iS#y8ëýE#h10ĞČēaIĊĞłØĞłÚłÚăÜÚĞ",
deepslateTiles: "0g0g6$ĚZAJHT4W-ĺHÇÒYP)Z0ù90J1Pā$JVÀÙpÚPAĿKp×đAĀ0qJÚĞŀAù1wgPJĲ×%ðĿĝUăc0oĒČădĘ1wg0w2PdîÑĚ^û$3ÂPAĿw2J|ĞħAù10ù9ÖAùÚíûP+ĿÙ2ă",
deepslateTop: "0g0g5ÒþHÇÒYPBWâľH;śW5yS1čgiAôdħňQñi^6ŋúhxw0ňÝEóúgëÝ0P]Ċ3ÂRú!QòdIJ0,1xĠaA78düÂQĐú1Č>Igr@S3ú2ĪIýA]JüÀðsxñhQ0ŃA,0AđyBiÂ",
polishedDeepslate: "0g0g7ÚĞZÇÒY$ĚZP)ZT4W-ĺHAJH00S42a4ÿ#AþŁ4ġjÑJÈhğAĝUĖcþİAĚÏlFzCBmNÆŃöĞŉBĭPCiÏe@ŀ&JŁl#AđÇmhJPýJŅii_úJŁaıĒĞ]JAJŋÑJÈcJĹÙJ}FÑĞĲÒĞ",
chiseledDeepslate: "0g0g6AJH-ĺHT4WP)Z$ĚZÇÒY000000FĞŁÚĞùB+JÚČIJ]Â]İAë0Â]ë4ë19C04ãĽS0ģØXû02i{5+S2+IòĝAùĞUhĞÑùďg1ĜąĕĜĈ4ĎĹÚĊĿBCŁFoķipx(ĀK000000",
cobbledDeepslate: "0g0g6PAZ)ĺYÖĎY;śHåŎYÇÒY0ĎqùÀĕcķĳTðĐAĞ^cěÉÏ#?5JĲúÀbÑăwV0įę9#U+^íĜ3cþÈĈq1úM?cmŀÄĘ%ÎJÚSmoeī5ĉJ_Û0SĔ+U÷ë>ÒóŌSiŀÑ]ļknSčı]Ùły",
deepslate: "0g0g5åŎYÒþHÁ?W;śW$ěH5AăAČĹ}@ł?CĺAiüJ,rÕČłQ2^öCŁAíÃ1kĊBkú4črPġqFĞįB-Ĺ|+ķEĎŁÛQúPďzEĎûß)ëBN0|+ìFĜ9FĞòÚįò}.r0üŃKČ]0ĊüSüò",
tuff: "0g0g5ËâWÖĞZ|QHð7YĊòH4Jjw2ħÑùrFib%JÆ]0ÉÞĚ0QùS%Ě0%üaBĈbÙXİxmĲÑCĩÑ+İ0í3wy]ÚĚb16Sß(S$mĲùČgõþrFwbÚùùAùÉcXÉõíŀ82ŋÎ2SSmĩPgŀ",
amethystCluster: "0g0g8000ĵøWZ&HĚWWöĔZZŤHåØHÒpZ00000000100000aK0000^X0002^ùë002ĕÝë00cŀĺ000dpĺë0]ìĉłëÂFhěłíúNûśäjÎN%ŝê>x6ÐĦćt80ŔğĆÚ00|ŞOŏ00ÜţWţ0",
largeAmethystBud: "0g0g8000Z&HĵøWZŤHĚWWöĔZåØHÒpZ000000000000000000000000000000000000000w00001E00009Þ0000lÉë01Ĉ%ÉXħ1)*ĆĎë1ÐêĦĄë2ŔLĦÚS0ËŖÅő00ÜŤÍţ0",
mediumAmethystBud: "0g0g6000ĵøWZ&HÒpZåØHöĔZ000000000000000000000000000000000000000000000000000000000w00001Q000y1Qk00kÊ(Ċ00pÐĚĩ00ÄŒJ/00@ŃĕĠ0",
smallAmethystBud: "0g0g5000öĔZĚWWåØHÒpZ000000000000000000000000000000000000000000000000000000000000000000000w00001{0004Ą%w00kŋÞĎ00>zNo0",
buddingAmethyst: "0g0g9ÒpZåØHöĔZı~WZ&HčŖWÊŐYÆŐHQďZ1igjQÂ1CiB1xBÓiÝ273Á5ÏÝg1wá(1BëhiMä0NäñÎBR7ï[ñ>0)?ÁääÞ(2iÀ5-w>gw1ÀhÅ8M2Àhj7IÕßÂNh)äX*ñ*wiÀñzi2Þg5MáM5)7Á1iO0ÎjÞNgiÀgjlglK1xh)xÎ+",
amethystShard: "0g0g8000Ú/YZ&HUŏYĚWWZŤHĵøWöĔZ0000000000000004JS000FAħ001òÊħ00aJŕħ00ßĀťħ03NŃŝ00p*;Ę00ZĻ<ë01ć;$001ĞèK001ĚŢ0000,į00002S000000000",
amethystBlock: "0g0g7ÒpZåØHöĔZı~WZ&HčŖWÊŐY5ibJĈÄ!ĈÁÅÏù8ëđna]5dI4ÄòFĄ0EkMÄy9ĕjëßÈ]Eg2!ëÖQĊg6ïÈwgĐAĒÀĿċÈBÄ÷5UÀ!ľÀ!ĢIlİÖ0ŃF5DëīùÈwĒ8$íŌħkPÞsÌ",
snow: "0g0g3ŞZZZZZŚZZlTlSVÂýhV!þVÂđÈlÈìÕVah]ÁkBhÆÁĉ?×UüïF^iĉĉqÄðS?ÂókVa0VUE4ÈmĈlÕ10VĈ",
powderSnow: "0g0g3ŞZZZZZŖŖYlTlSVÂVhVCþVÂÖÈlÇìÑV6h]ÁkBhÆÁĉ?×UüïpPiĉĉqÄ@S?ÂòkVagVUo4ÈmĈlÑ14VĈ",
snowGrass: n => {
const pix = getPixels("0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
const { random } = Math;
for (let x = 0; x < 16; ++x) {
const m = random() * 4 + 1;
for (let y = 0; y < m; ++y) {
const d = random() * 0.1 + 0.9;
const r = 0xff * d;
const g = 0xff * d;
const b = 0xff * d;
setPixel(n, x, y, r, g, b);
}
}
},
snowball: "0g0g7000ė$YĺĶWŒŖYæĂHZZZĪÚY000000000000009A0002ÃÕħ00kőĕo00nËĖĐ00ĝÚâO00ēÚĝĕ00ďËÖŌ00œŒėz00lěÉÕ00>Ğŀo009aĭS000Aù00000000000000",
powderSnowBucket: "0g0gb000àdWZZZņņHYĶW)ĺHŚZZłÚYĒĒYÞĮWþÇH000hh000001y)g0005iC>TÀ00Á@)NM?00UiÏ)kl00VÁO>?V00ÅïVUÇč00ÅGäXûč00Åßäóāï00ÆßäXāï00Çßäóāč005GäóĂÀ005ñäĒĂÀ000Æäđč00005VVÀ0000000000",
bread: "0g0g8000ÒxHöúZĉŉHĦyH;ĘZ{ňWV1H0000000004J0001FĜS00aJ@Đ00Ð^]Đ03Aö@Đ0pAúīÕ0ĎüJBĐ0İqúzS5Pzòq05İA]ķ05ġy@ë0t+J)00sČúĈ003iâ0000ØÕ000",
dirtPathSide: n => {
const pix = getPixels("0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
const { random } = Math;
for (let x = 0; x < 16; ++x) {
const m = random() * 3 + 2;
for (let y = 0; y < m; ++y) {
const d = random() * 0.25 + 0.65;
const r = 223 * d;
const g = 195 * d;
const b = 117 * d;
setPixel(n, x, y, r, g, b);
}
}
},//"0g0gA000ÆřYĢ?WĚ)ZĎ4YĎ)YĞQZĖAZĦVWĢVWĊ4HÚĞZĖ)ZĦâWĢâWĭýHĞ?WĖVHåÃYĢVYĚÑZĞ)ZĒAYĎkHĩýZĢïYýśWĢâYâÑHĭĎWĩÒYýĜYĢlZĖkWĢÒYðoH0000000000004gì0M5oÝX8í^4ęĪcċd4ňí<4TP*l;ĝÿKmTÒĎĨÞDÌPśćínĹ^wÉ%DĨPwÍéDĨ4kJ5AJí4J^)Jí4ĈìDĹéAĈìŞĹPŗÍéAćéśJéDĹ5DņPAìPDĨPwTPAJ^8iéDĹí4Ĉèow5ŞŊPśJéşièğņ]nĹ5wÍPŞŇPAJPAĈìDĹPīćéwK5EvéśììwÂ68iéAćéśĈéśċPŞĹPŞĹ4",
dirtPathTop: "0g0g4Ă4WúĻWïċYĒ)Y55ÇİlĻ9êÍlñÄÖÊÔÁ?bÎB>ĮÄ9V?ĚÉkÖâĄoQĨ|_5ĈV3lUéQTĬ?ÞÀèUâæÂì?ĨPQUĻVl",
farmlandMoist: "0g0g6UĘZ;ëY)KHÙŘHVVHÚĞZ0ĊS0ĊrKw>0k3cy0ÙkoÙĊ>KiÉKī]Ùk>1kScĊÉÙX8ĈĈ>Kk34ypÙy0ÑĊrcy>KĊrKüÆKü32gÉÙk>KĊrKl0Ùy3cySckoÙyocüSKĊĿ",
farmland: "0g0g6ýĜYåÃYÆřYĢlZVVHÚĞZ0ĊS0ĊrKw>0k3cy0ÙkoÙĊ>KiÉKī]Ùk>1kScĊÉKk8ĈĈ>Kk34ypÙy0ÑĊrcy>KĊrKüÆKü32gÉÙk>KĊrKl0Ùy3cySckoÙyocüSKĊĿ",
boneBlockSide: "0g0g4ņÙHŎöWŒąHŊèY6×Ďè6×ĒÝ+ĒĒÝ+ĒĒÝ*ĒĒè*ĒĒè*ĒđèŝĒđèŝ×đè+×Ďè+×ĎÊ*×ĒÀ*ĒđÀ*ĒđÀ6×čÊ6×čè",
boneBlockTop: "0g0g6ĲqHĶ!ZņÙWŊõYŒąWĩšW5,AJ+ïFĞòF+ķ|ċSĜüŁÚhÕ2JăÙłÚĈaÉóôÕĜ0UI1ÚĞĸUXb?ĞŁcX1ÚĞócóôÕĞł{Ië%ĞłUÙù0ĜÀÉÚj?Ğíă|Ċ|2üŁ9ĞòF+ĸĉ,AJ+I",
boneBlockSW: "0g0g4ņÙHŊèYŎöWŒąH01S05VVÀĒĒĒĒšYőZėĒZšZZZZZZZZZZZZZZZZZZZZėŒZťĒťėZĒĒĒĒ×čVVÀlV10000",
glowBerries: "0g0gg000ÓRZÁŉW{ĨHFÁZ%JYĪiZÇ1WÞTZĥúHřUHŞ5ZŞðYļĨYúhY.ĪW000000000000iw000001)Ä000003áRK0000äáQK0007ëëQm009āùë4Ä00Ăģđ85Ä09ĔĴŁŏ5Ř09ĔĕăŎ0Ř09ĒāăŐùŗ09ĕāĔŒĖ000őĕĵĂĖ000eŕŐĒŅ000000ŕŇ0000000000",
hayBlockSide: "0g0g9òĩWĦċWþ1ZıĺWĒRHčyZčRYú2WXĸZ1x3xxTx>xxzxAxT42T1A244QÄãÓGäãÓãAA4AAA42xTx34AA4T>xzT>AxT>>x>T>>>>>>>>>>>z>>T>>x3xAARx1TGÓÅÄÅãÓã2w022A2240A44y24A4x1xA434x3x3>zz",
hayBlockTop: "0g0g5ĦúWýŘWĖ(YòĨWĵħY5yĸBA^Î2JÕĊRPQiÀwĺÕñ8FĐā$ùÃ{ĊhÎĊĄ9ċqP8T@4ÁSĜòÀČıM11?o2?iĿÀyiFĎó(ČûÎčaÎ5aÀ)Ã{ùĨÖČĉEX9BkRRAì8þóÕĊÆ",
hayBlockSW: "0g0g9òĩWþ1Zú2WĒRHčyZıĺWĦċWčRYXĸZ10wOOhSgOMBVÓÐÞÓg1ÞjOMzhÐ0ãVVÐãÓ1gTOMgÝgÄ(zVÄÐãVg0TOh1xhÓMàVÒÃzÓ10>OO1whÄMxÒÄOì+MhxOOhwjÃjãVÒOàÓg0ÝOMgÝMÃhãVÃOàÓg0zjM0z3VMãÒÄMà*",
wheatIcon: "0g0g7000öĺZV>YéċWĎVWĵĬYŅōH0000ë0000}2000gÝĘ100j)Į800pĎoS00xĭĂ^00BķĹÀ00ōüŀq01&Ĺþù06ĞïČ00)ĻÖm09ĿJSAëeıù0006+ë0005Cë000840000",
diamondShovel: "0g0ga00WcŚH8JWOĔYCİY#qZ]ĸHòJHEÝYÖMZ0000000000000000000001i000000j)w00001*>w0000jUÃw00006?N00000Ôîw00006ä200000Öë000006ä000000Öë00000Óä000000Ôë0000008ë0000000000000",
goldenShovel: "0g0ga000ìÞH;ĘZZŞHőĨHŒĝH]ĸHòJHEÝYÖMZ0000000000000000000001i000000j)w00001*>w0000jUÃw00006?N00000Ôîw00006ä200000Öë000006ä000000Öë00000Óä000000Ôë0000008ë0000000000000",
woodenShovel: "0g0ga000)ĉWwKYïJHÖTZâÏW]ĸHòJHEÝYÖMZ0000000000000000000001i000000j)w00001*>w0000jUÃw00006?N00000Ôîw00006ä200000Öë000006ä000000Öë00000Óä000000Ôë0000008ë0000000000000",
ironShovel: "0g0ga000?kHoÎYZZZĪcWłÚY]ĸHòJHEÝYÖMZ0000000000000000000001i000000j)w00001*>w0000jUÃw00006?N00000Ôîw00006ä200000Öë000006ä000000Öë00000Óä000000Ôë0000008ë0000000000000",
stoneShovel: "0g0ga000PAYoÎYĂÖYéŞZóEY]ĸHòJHEÝYÖMZ0000000000000000000001i000000j)w00001*>w0000jUÃw00006?N00000Ôîw00006ä200000Öë000006ä000000Öë00000Óä000000Ôë0000008ë0000000000000",
diamondAxe: "0g0gb00WcŚHOĔYCİY#qZ]ĸHÖMZ8JWuDHEÝYòJH0000000000001g000000ix000001zT00000iO*K0000ß>îù00007â-,00000Äû,00005đ7Ý0000Äù000005Ö000000Èù000005Ö000000Èù000000ā00000000000000",
goldenAxe: "0g0gb000ìÞHZŞHőĨHŒĝH]ĸHÖMZ;ĘZŅÁWEÝYòJH0000000000001g000000ix000001zT00000iO*K0000ß>îù00007â-,00000Äû,00005đ7Ý0000Äù000005Ö000000Èù000005Ö000000Èù000000ā00000000000000",
ironAxe: "0g0gb000?kHZZZĪcWłÚY]ĸHÖMZoÎYþÇHEÝYòJH0000000000001g000000ix000001zT00000iO*K0000ß>îù00007â-,00000Äû,00005đ7Ý0000Äù000005Ö000000Èù000005Ö000000Èù000000ā00000000000000",
stoneAxe: "0g0gb000PAYĂÖYéŞZóEY]ĸHÖMZoÎYÚĞZEÝYòJH0000000000001g000000ix000001zT00000iO*K0000ß>îù00007â-,00000Äû,00005đ7Ý0000Äù000005Ö000000Èù000005Ö000000Èù000000ā00000000000000",
woodenAxe: "0g0gb000)ĉWïJHÖTZâÏW]ĸHÖMZwKYÇ1YEÝYòJH0000000000001g000000ix000001zT00000iO*K0000ß>îù00007â-,00000Äû,00005đ7Ý0000Äù000005Ö000000Èù000005Ö000000Èù000000ā00000000000000",
strippedDarkOakLogSW: "0g0g7|2ZÇzWÎOWÒ>WÚÃHÎzWÖ>H000000BAPAČRQJôßEòÛ]ĂBy{]ÿxBğAÛiÉ}ŃúÞAśJÙ{ÂQJĹQüBPlĒĎJÂCûÛłAQđxAČûDAJ^@JJÏÂÚİsQûzÝJJBy^QČJ009w00",
strippedSpruceLogSW: "0g0g9ÒÃWÎRZÞÐHåÐHìîYéàHïîYéàYÚÐW101hh01hwyyyw3Q(N2NyO0OyV(0)@Ò+?Ð0OQVO>Ñ+QÐyw2yOÑ>ON0NVV0)Q>)@Ñ)O>,ÓÑGNy03Q00O0N3Ohnà*(3(00OÑQVÃÑVÐVÃ03Ó+>03-3Q(2yxIyI001h1g0ghg",
strippedJungleLogSW: "0g0g7Ė5HýśHĆkZĞlYĢ+WĦ@HĂ4Y4ĎŌDRTÙĬ%FĳTáİ4Vĳ3áĠīVĜri-3ÂÑŊ+8ċûwze6Øöĉ8$8Ðâ?8E?yĘ*a!*bĐ-ó]Ğyò)ā@-qúQĸ!oŀÖħřFhhŀĮî1Ęõ?ŎîdhdDgT",
strippedAcaciaLogSW: "0g0gqąÐYĉÐYąÐHýÐHčÐYāÐHđÐYđàYęàZęàYĝàZĕàZĕàYġîZęÐYĬXWĥîZĝîZđÐZĕîZġàZĨXWĉàYčàZĉÐHčÐH0Q1õëp{18>-ĩßgXygígŐÂĿĪą898ĝĝÕàĄŞĞhÊÏľĥeàĆŝĩMõÒ.ĵÛčEXÁĵâØ8oĭõŎoĭ&çŇĿĭMMíIĭMàĄÏhĵ(Ö[.ĵčsŏĭCçņ8.ĵàĐŊÂüçŁĺĥŗîċoĹüõÏñ.ķàĄŊĢMRĳX*ĐRnØÆcÖcÓĝ8TÿØxdp4:ŃĀx9àoĭoīx8Ðr6;I>",
strippedBirchLogSW: "0g0gnĚÓWĢďHĞãHĞðYĢðYĦþZıľYĭĮHĩďWĭğWĵşWĺoHĭľZĭğHĵŎZĺ8HĹşWıĮHıĮYĵľZĺ8WĭĮYĩğW0Q0cx8X(õ08RRkĮ/6(čFaJigwyüJgðÂRlęò^Âgú^:ÊğĦgX2üīĭûÈďĥőßüŊčFáłEīĭMJğđ@âEŊp^_ÄğđıÂõüąĵàJĝĥ^ÞJÿ.ĵÂĄŎ.COĄŎoİ:ąoīĭMĄJh×Â{ÒF@PĄqĕŖÐĄÐoĭiÂùú×(RĈïFgXg4+x$_BwoX(8>gQy4A",
strippedOakLogSW: "0g0gmúĻHúĻWāśHĊ4YāŋHĖ*WĞ?YĩãWĚ*HĚ?YĖBWĢVYĎAZĚ?HĦâZĦãWĩðHĦÒZĞ?HĖ*HĆ4HāśW0Rx4200M80p6Ãcċx6RcÐ/6)č!!ĽÂüē.JüęIT^MöØÈĽĞĝĶ.ŃÂĠŎÈĽĝĕÛ;wáwč/ŃâĕF^ÂÿĄŎ.ĽŊĆgáÄĝĕĮÈĽĚýØ.ńlĕÔ.ŇÂĕ(;wàąĲ._DĤŎßĽüČŎÈĽÂġĬ!ŇäR7ÆĮ*āF^}G%Ø;ĭ.ĔŎÐCÞö8ĄįPõÙĄŎ.Ĵbx6/ÄċĐĩkcÕ",
strippedDarkOakLogTop: "0g0g9)ĉZ(ĉY{ĨY]ęHÀňY(ÝZ-úW;ĉW-ęZ0g0hg1002yzz>NyxiVÓãGGÓS2URyzyCx3ÏOOOOD(iß+ÔãÐC(3Ð*OOÐ+x3ß+,ààD-3ß+,ÐÐC-3ß+OOà+(3Ï+ÒÔàD(îßOOOOC(íßzyyACMiããÓÓÓÓxiyOz)Oywëg0g00hg",
strippedSpruceLogTop: "0g0g9QŉWSĸZQňZìîYåÐHòûYÇiHÎyZÞRZ0g0hg10yzO))U>O(jÓGñIIGÀ3ÒÃO)O,M4àQQQQ-Sjî[äñá,Ská@QQá[Mkî[[áX-S4î[[áá,S4î[QQX[S4à[ãäX-SkîQQQQ,Sjî)OO*,TjññGGGGM3OQ)?QO(0g0g00hi",
strippedJungleLogTop: "0g0g9ýśHĆ4ZĊlWĆkZĢmHđŌHĦ+YýČHąīY0iN0002x4Q??ÒUQTkGGñIIGK4ãÑQ?Q[RláVVVV]ÃkXÅäñâ[ÁBâÅVVâÅRlXÅÆïï]Á5XÅÆââ[ÀlXÅVVïÅÁláÅGäï]Á5XVVVV[ÀAX?QQ@[ÁkññGGGGTkQV?ÄVQRhx0ihhg0",
strippedAcaciaLogTop: "0g0g8āàYúÃHġîHĕàWĨěZöNYāRYĉÃW0ë9wg09AĺöČù!ńĦZŤĈaįJ|BúfCłÚĝĿ#ďğŢ*ĀL,ÉÜ,úLďćŖĝĿfďćĶ*ĀfďăÜğĀfDĝņĝĿLĎłÚĝĀ#ČĹP?ā#ŖĞłÚú9CĺÞĜù0ë802]",
strippedBirchLogTop: "0g0g8Ď*HĚÓWľ8HıľYľEZĎÄHĖGHĢďH4J84J]FAĺöČúańĦZŤĈ!įJ|BúLCłÚĝŀ#ďğŢ*āf,ÉÜ,úfďćŖĝŀfďćĶ*āLďăÜğāfDĝņĝĿLĎłÚĝābČĹP?ābŖĞłÚú9CĺÞĜùAíPAëP",
strippedOakLogTop: "0g0g9éûYòīWïĜWĢVZĖ*HĩãWéîHýĻWĆkZ1gw0yxh23O))U>O(3ÓGñIIGÁ3ÒÃO)O,(4àQQQQ-Szî[äñá,T4á@QQá[M4î[]XX-T4î[]áá,S4î[QQX[Rkà[ãäX-R4îQQQQ,R3î)OO*,S3ññGGGG(3OQ)?QOM0g000000",
strippedDarkOakLog: "0g0g7|2ZÎOWÇzWÚÃHÒ>WÖ>HÎzW5+ă&m]1CÁ$Ā]8ĎÁ$þ]5đÖĀĭI4āē-ĞI9āăŀ-ù9črMoķaAËĸpaalpĸja9[FBJĹ8þĉÒüķ5-òÞüù5)ôÑĂI5)Ĳ%ÄI9>r|Cù8ĪxQĎÀ",
strippedSpruceLog: "0g0g9ÎRZÒÃWÞÐHéàHìîYåÐHïîYéàYÚÐW1z?)yVÎh5AÒ*BjÒg4ÄÂ)xjUgkVR+ÁÃkgljÂCâ)lìhmÁUâUhë1ÄMkTUÆx2UNlÎã*x2ARBÎâ*ì2BRUÎ5Më2xVUá1Á0iÁÄUU1ÎxixkUVÁ*wilk?TÁ)w1zÄTÁÁ@wiÃÒÎÁlÒh",
strippedJungleLog: "0g0g7ýśHĞlYĖ5HĆkZĢ+WĂ4YĦ@H0JÂÙ6]Pp00ĢJ1yČöûÕmĞûÞĜ^JqŃAİEČā_PĚ|fÖeöĮS1ğxŁ>ÆŁRPÒĘCāB)íiħNkħúzs&PcÙįJßiJXù809yÀ]Ĳ7ÖòÚðĸQüg1Ęi",
strippedAcaciaLog: "0g0gqýÐHęàYęàZęÐYđÐYĝîZġàZĕàYġîZąÐHđàYĕàZĕîZąÐYčÐYĬXWĉàYĥîZčÐHčàZđÐZĨXWāÐHĉÐYĉÐHĝàZ0QMùċxõÃĈë^þCgċFõÄIò_ùŝgĖFõ-8ò_þŝQĖFaĐSJÕþð?4oı-RKwĄÈÄzpó*ĕħĘĄÂļŊ(ĭMhĮ3ĖĚöŊ(ŉM9ħØXÂõÒoŊhb0àïiõčoŅ)9ħ3üIĀčoŅ)yÖ3üś8čsUMyÖ×÷ŞIĊ)Àxg9|ĵ,āÿOķÂhFĠmMāXģŅVġħ×ĚMĀČzŅÁw0",
strippedBirchLog: "0g0gnĚÓWĭğWıľYĵşWĢðYĵŎZĢďHĞðYıĮHĺ8HĭĮHĺoHĩğWĞãHĩďWĹşWĭğHĭľZĦþZĭĮYıĮYĺ8WĵľZ0QM4>oXx440]M4ÒoQM4C-]Q4ÐPÀMoCMIKđFÇÀMpX.ĩKýØÇÀxcöÖĭjc#9^yāöØðnõÀEıiĀðNInüTEĻ-IöNënõ>FR)öñ(önČ>FQĜĔĴ;òkč2ÁQ?ùĴ18Ĝč29^PĀ01cÒ÷ï8^j4ĮÖíÏĩlg^ÂïĕMðoRļoóx5ĕ1õ*ÀčpQwĝď",
strippedOakLog: "0g0gmúĻHĊ4YĢVYĩãWĖ*WĚ*HĦâZĩðHāśHĚ?YĖ*HāŋHĦãWĦÒZúĻWĎAZāśWĖBWĚ?HĞ?YĆ4HĞ?H0QxùÐoðMk?0]xùÓhðÞkĉS]jkÏgĹÞ5TRįilígĹà5?aįidyÕĹMö}0Q>tyMīÞđ}2īTą%pīAĥT2įÁöCoĳQĥÀSÏÄpDhĭQöň1iŚ9Di@Ñõ(ÝÂŠ8>wĀÖI(QĹā8>xoTFUT2ú8Óh!?5ÎÝRú8ĩhįwïÎßĲM8>gįwđ_0@M8Ðgĭxd_",
mushroomStem: "0g0g4ĺ;HĮbHĶrZĩšZ0K00òë0íBĈ08đÄEFďļĎčHZËHŗĥHÖëFãí00Ĉ0čĈE2×ĐĒŇŝþćŁŤŜZŤļZVÍčÔļVS9Ľ2",
mushroomBlockInside: "0g0g5ĭďHĦãZĵğYĒ@HĽĿW0ČëF0g1C480ĂI0J9yüÞ4ÂT42SkĊÕ8h9)AT)i0wiTwóÂ0I80íÕByd4ë]CëÂwķ90Č0Aù^]J]Ĝh0Ĉh9üyT0kòw2öCëcA0ë4iJAU",
brownMushroomBlock: "0g0g4ýĝWýĬWöčWąŌYoÁhlwTÇËlÎR?5?ÀVlļUmxVÃk5VlÒ?áúP?ÄhÁV@À?lAQýjS8?ý5qÁX5ÄÁRlĹTÂÊVÀ",
redMushroomBlock: "0g0g6ħĊHĤíWįĊYĳĚYťŢZťÖY4ùù4XùA2iSkëw+JPA11ıĩPAì1ĿħBwi]+18iR]ëJSðħ5AJ4.Ç9Aëw:oF0JP6ħ]ëiPAi1A3K4JP0sĔiiSitõA90ù>ÎAëA0900ù",
brownMushroom: "0g0g8000ĵÔYúĝHÞUWÖOYÒUY{ŚWĞÅZ000000000000000000000000000000000000000000000000009E0000PFë004^P(008Ąöħ0005ħ00007Ĉ00001Ň00001Ň00",
redMushroom: "0g0gb000ă<WţĊYŇTWþĢZīßHĐTYĶnZĒðHŖĔYľ^Z000000000000000000000000000000000000000000000000000000000000000000000000000iy000003yz(0000OyO>0000?OVÓ000007ë0000009Ý0000009Ĉ000",
myceliumSide: "0g0ggåğWÖãWÇÒWÖþYÞðWìĎYEÞWòĮW-ĉZÇ2Z]ĹWåÃYýĜYÆřYĢlZâÑH0iO?xBÁ>Tj0Qk)QÓzgàM?-?úNxMh^îTQ3đÈì+ÝMÕìq!ÎBmIòþjSpĀ.ĢõĀûaÆĕ/ĠĔįĤ{öìēģØĳłtłôģŕõĳĦăœŅŒĳrĲĤĵĤ$ĲŃĥĥĲĳŒģģģŕĤģŢĳĥŔĦĳĲŅĥĥģĥģĳĲœĲsĳģĳĥ",
myceliumTop: "0g0g7åğWÖãWÇÒWÖþYÞðWìĎYòĮW0ĎŌ?ÈÐXĘAMİ%{õŀýāÎÖmPõ-ÑcēhÐ6ÌÑīňUħħ(ĠdęíĸÒę$ļōõìĀÎčĘĸAĩĿIě#ïŇĪEĐİ×6İÀıÊNŀcÎāÈCmz0.x%EĳĨĩĸÎþòÏÆõ",
//the wheat texture is up there
wheatSeeds: "0g0g70003ìW×ĪY%0Z?ĩHĖĪYÚĩH00000000000000000000000000S0g000ë02000ħ04ë020À6ħ02EÙ000Eo0000+0wÊ0002ë+0003K00000000000000000000",
wheatStage6: "0g0g700WŅōHĆKYĵĬYéċWÇĈZöĺZ00000000a00010j00090Bù00902ÀS02A3Ċ(02ħ20më1aı0)gĊóăkMùÚÆ!dĐĜöÆ2hTgĝ9>iÁĘý9Tgw(íĐz{!+ìŁyĜE&ĉa%kÈE",
wheatStage5: "0g0ga00WPĸWawH2ęYöĺZnNZĆKY5ĈHÇĈZhĸZ0000000000010000000h0000000h00000g01y0001(04g0000Ãw600000N0403000(6Ó05O0OwÞÓ83w0Jgë@3N1gìSI68y1nIKI48ā7wñKëðÔ1ÝÝÝÎÝð[4ÝÝÝSÝá74ÝG",
wheatStage4: "0g0ga00WPĸW2ęYnNZawH5ĈHhĸZöĺZĆKYÇĈZ0000000000000000000000000000000000010000000i00000003A0000w02S0000Nw200000A2A00S0ySÄT03w04SÀn4AwÀÄKÀ85A5ÀÀgV85@5ÀāÝā8pÄÀùùÝùÿ96ùù",
wheatStage3: "0g0g800W2ęYnNZawH5ĈHhĸZPĸWÇĈZ000000000000000000000000000000000000000000001000002A000(1K001g_000ÒĀr0(05I%0mweI6hĘwíò7hĨwJòDgPw",
wheatStage2: "0g0g600WawHnNZ2ęYhĸZ5ĈH000000000000000000000000000000000000000000000000000000000w00002K000ëÇK001ùp0004ëc0ë06ó40NEĊôQkÁÕ",
wheatStage1: "0g0g400WawH2ęY5ĈH00000000000000000000000000000000000000000000010002S0g5009730cĪ3c",
wheatStage0: "0g0g500WawH2ęY5ĈHhĸZ000000000000000000000000000000000000000000000000000000000000000000000000000000008000002w(02030S0",
lightGrayGlazedTerracotta: "0g0gjĂÖYĶ|WVĎZÎĮHmåZmóWÁVYĪsYmĒY?*WãoHľÚY|VHJPWÇğWÇďWËĮHmPWmÖY0Qh4Ñx@30A8@hĄxSħ4ëxoĻĝE7ÆS6008ÄĘXŇ1ĩ6pFoĻĽĄ#-2g008RĘ1ďÆ@gë38Rl4ő8RĈXÒàĭč4xoRâ54ßaRĐŒ:RgsEp]RgÎÆÈjëzgĮ8J>9ħÝëň8R8QúÂĂ0ëa00gSXÁĩ5Ĕx8S0ĠXoÄčĐÏ0R0IčoÄ(õx020IÐoRwIw",
lightBlueGlazedTerracotta: "0g0geyrZ)ŐY/ĴY}ŔZÄŤZ$ĠZŢZZy$HxŢHEĠHłŖYNĥYĲĶYŎZY1iO>lRÔ,ähzNýzÕzG5kNÇOĐGGÝûĝÁNĎÓ7GăÁĭÙä2wGýÈÓĮDGN7ÁĭÙGNG)EtÓįGRDiNĭ×7ßONVyÓďGzOOÇiÙ7ß)OyâúħGANOyÓĔrNĭÓīyäæVě$ÓÙRyãÇiNĭÓīßãâýy$ÓÙ",
magentaGlazedTerracotta: "0g0gaĬ:ZńĕYİÙWİ{WŝŃYřăZĘıYĐİZĄġHļõZ1xM?Uy1111AÄÒR111xUÔã?111BÅëDÑR12?G22Ô?9BÅK3O6áÂVð0zO0ä?ÅIãÐ+äGXVQVÐ6UQQ1xBàDR11114Ý,P11114à8Px1114Ý6R1x114GÓÇ1x115QQÂ1111MMM.11",
yellowGlazedTerracotta: "0g0geZÐZřĨHZġZZĲHŕĈZĕŜWčĻZřĹHāĜHřĘZZĳHZâZZĢYĚ5H1yOxw2?Óix[yiyQðyiyixh1ĀDy2x!OgāMwbĉīiMĘxyĢďĉhyryiĒæĩÞßÝixGĔiD>hxzyxÁy^Ä2inzliĒÕ2jÞiMÕÕÓyiDkzIÅÞP1yÞ>ÚhĽŀgi$ĒÑ?ÁÕh1nÄXńTÓìĘ1ÓÎÑt",
purpleGlazedTerracotta: "0g0gaIĲYõłZĉÌW$ěWÑåZüŃY(ĺYKåYÆäZÊåW1zOy(4O(0iN2(S>0x0wzSO04NÁxz6+5[Oy2)6KÆGNgwCSVñGxyN2Ð.ágyO>xy,TTOS4N2,ïù06KNy-ìS4OKÐO(ëSS+0ÿüU4S)09[ISQ4O5[ëh4åÅ(Uá8Q[hU5Pá0lh[á",
orangeGlazedTerracotta: "0g0ggš1ZmåZšûHšĜHŢZZvsHqŒYmóWšċZmĒYŀÝWŘùWňëWZăZlĿYmĢZ0gzyk?VK0Ý8íĂģĤÓnßzDèĤıĭ0xnåĲ0bĬwxĳbħ1cVy,ēcĘ0cÁíD0{ĳ0ĭhIåĲĻcĳ5hhèĔĴSy6Á_Ĳ0ĳQëŕÒ{ħ0cöwŕŌÊħgcw5uŌÉĈ0ħ1lÁōÉĲĳmÍhVyVĤŘŕÒŘix5ÁuŕōVÂh",
whiteGlazedTerracotta: "0g0gdZÐZŢZZy$H/ĴYŞņWZâHZâZ?ńWĺËH^ŔZÂŔZŢĵHŚĵH01g01zAg5ÎhhhßTÎ6hKUhEmÎhhmVoAÑ1hÑhh[ì1ÎÎÄhoyT1k1KhyJhÎR1?o!,hoz1hRODhy.hoDDáiDàyyìhhDTàNìhhiáhíÞm0ÎyTkíhÑhoDhR/g0ÎR,äóă1hkz.ĊFħ",
greenGlazedTerracotta: "0g0ghÒŚWĺËHPÏH÷ýYßÏHãíHĲ<W|íHVĊY?ÂWËŘHæĊHÓxHÏ1HĶ|WÛÂWPÏW02h8xgĭRĀz0ĩÐĈxiU?ĘÎ8{OõCÀĂVđð9ðč-AÐUÅĝ>gùď4ÔÂI@ĝ>^6Ňõŉ/įĉ9E8Rhò^PkzĤČ8{>òR_QßkXiUĭĄRiJĚ<2o÷ļgóÀXRwŊqüĊ%[]ùRò>xmÂĐŉå]ÅčċxaŜs?x8ŚĨ>OkĽòŋy518ō8ĿĎ8XTĻļsÎo{MIXgĭMĀz",
brownGlazedTerracotta: "0g0gfìÃWĵ[ZčĻZïÃWlĿYlşZýČHđŌWĖ5HmpHöÐH?*WKňZÖ2WĹÕH100zg?lQg6äziQhU00Gwx4úl60wwĉbPh7ycã1%ĜV7Ýĳß2głQyGDíaqĒc3(ÏDKińch!06Kxńħ2hiĈ0ĉ$ĳQ0xh!ĊrýU_ħĊhyŐVhüĤĔĹuŋĤÁp_ĔĴġÊī?hQ0ĳ?Ĥ?QTUĴcQīÉ",
blackGlazedTerracotta: "0g0gj$ěW$ěHĀíWõíWEċW00WAJYAJZIÞZQTW4gHgTWoÎYsßWU(Z(ĺY-śW<4H)ŊZ0Q(gÐEcÂüď0īA4ÕEaúx!gXëgðÆaClboðßoÐPı)ĘØ(÷Sìîq^úö$18ggœoĭč%íoICtÔ#mĸĈ|SĵM$îoXĻ.ĕFÄúöÏ3Xĸĝĕx0ÑòîÝķĽĝĕNıÂöîiqľĦhÈ@Ađđ_ÉF*ĕÆıĨEÏ>ÒCĥŘEĿÁE}ØKľıÂÏ@,$ÚØKŀRÂM^ĝd%ØÑĿ^i",
pinkGlazedTerracotta: "0g0g7ĢŁZĞıYŝŃYř!YŀİYļĀZŝÉW4AĻĞĝ!xFÃPAčF_iÇĔĻ^Æþ|čJÂīě~AûãAăÇÓļPĔă_,ýòCĆPAýęÓĚĴĤąę+þÚŋJP;JPB#ÚBăåFÏÚČŅP_iPĜJ}Æùò+Č^īëę+ĕòČS",
limeGlazedTerracotta: "0g0gcîhZZġZēĎHÌĉYÈìHřĨHZĳHŕĈZñNWôÏWHMYřĹH1zOOO)?KlSyyyy[hA>8IEwDÒ(O-ĀIwDÒN3OIò0?nN8O[Ý4ÁUN8XÁnQÁÀNëý×ĉÉlSNwôqĒhU2N0IÄĒVS2NyI?lQ02RëX?lQò0Qy?ÁU0y4ÅçÁÒSòy_mÓlU0I4ę1ÅĜ0yw?K",
grayGlazedTerracotta: "0g0gd?*W)ŊZĂÖYĆåZÇğW(ĺYÁÒZÒľYþÇHÎĮHP?H<4HTAZ1iMQÄ[0hhíP?Äÿ0hjC1hgāĈ0yK1Ę04Ă0xcčÊ5ÀQPh6ÎÁlVīákPû(ęlcĭQü>yìmĨhTg[xwqĉĠhh4EzVÁígTk[yÁrM4Ýl4üKĳðQQ5ÀPĔ6(S4QVRzîMc7SÁyĝħh0Q1j#s1g",
cyanGlazedTerracotta: "0g0gjlĿYmåZ?*WĺËHĶ|WqŒYhďYmĒYmĢZ-śW)ŊZqĒYĲ<WlŠWmóWlŏZlįW(ĺY<4H02xcîEXÐt6^íĞ(Ògõ6ąįÂílĘĊhë6ĠxàëgĔR(u0;g8UČX@^J0068UĐXxUU7ëĩ.ĻČāĨJüķoRKħľčÂbë38?ÐqĽĬ^ÝRÎ8ċKëý?^{íhlîgălF^ÂÊlĘÙhëčCPÂëgĕí(0čpŇÂõ0ïÏ00üìĈÂĆK4x0038{Ðín!%Õ0Î9XÎĩgčS",
blueGlazedTerracotta: "0g0g6$ĠZ?ńWwáWwÐYy$H<qY5wĹP(ëxwĹP(ùëCrÚĘiÝ/ÑùĽ0ÑpS2ĩiáķÖČb2Óî|+úK)ÃÒ)ŁFĎîÒ+Á]SĨ|üíÂPĿdüqiÚ!?wĜë0*K46Ĺ]6Ĵ+ër96đĎ>T16āÖĢ]",
redGlazedTerracotta: "0g0gaõíWIÞZĀíWĘĚHĴAHĐĊHĸVWĠĚHİ3Yĵ[Z10g0z)?O0ggg0+[Ã(5O*wCÑà(3àà(6ÓQ(6QQëkÑ@0CQQS0iQ2XO,R1g4->VOãîÂ2)>Æî)Ô*wäQ)?)>OíOX@?)[OQ*-Q*á>,@ûÃOÃð>ÃÖāOà-Õ>@āPþQQ])Pû)āÑQñ)āO",
lightGrayTerracotta: "0g0gdïĎWòĞHòĞWïčZïĎHïĞWìĎWòĎWìčZòĎHöĞHöĞWïýZ000i2wO(0hk05i006000wÀ2Ýy03700001iEO0h00gw0002w1yÀ0907ywg0y2w00yiÃ005yxgw00000Vh001ċ2h000000xyyw0000r0005ÂÁ00ë0x5c(00y0205Âl50O0",
lightBlueTerracotta: "0g0gaÞĠYÚĐYÞĐYâĠZÚĠYâĠYÞĠZÞĐHÚĐHâįY1hw(?0hg0O+00(g140hg000002hl00003(1ixO00(0w000030013x052K10gÀ000K1100VÃ(01h1000O01j,0O01g0g0Ã050w02g*1w000612ìwû07gx004w000(02x0",
magentaTerracotta: "0g0giýÄZúÄYýÓZāGWāÓZāãZýÄYāÔWýÔWýÓYúÄZýãZú@YąGWąÓZýGWöÄYý@Y0Rg8Ñ9^KXC06OĈ@]ówë1iXKXCwXx$PhQKXAg0x8ĭh]T(C0@M0@EXz8RgXx85wXz44(Syù@gcigAwëx8Rh4g400IÂcÏgëgX1iS18Ð(XgöĎgóM81840ISxQxkí004Āwrõj8RgXÁ;ĨMĈj8čgïgëĨ0Xw4īgXx8ĊgXÐ42",
yellowTerracotta: "0g0gfĢiWĢ2WĢiHĦyHĞ2WĦiHĢiYĢyHĩyHĢ2HĦyYĢ1ZĩyYĩiHĚ1Z1hiO3MQT0OÄ10OS1A1khÂyD0zxQlw0y1z*AThI0xNÂg2yyy3Ãyhýh2OÁÀhVjN2yVÃáhh2OOĊÂhhhwhyî0xoôyO01g1gyOÂzNh01hĴkgyyzz1hňgOy#Sh2B1lyyBNyxk2",
purpleTerracotta: "0g0gmâlHÞlHâlYåBYÞ5WâlZâBHÚlHÞlWåBHâlWålHâ5WéBYâBYålYåBZÞ5HéBZéBHÚlWå*Y0Rg8Ð8ĭ2gë06Mü01ð(ë11ħ4h0]c0oa(ħ2g#0000a0ĭûgõ0Èķ00o600000Ð03]Ń04f0S1öwo0kČFo000ÐoŃSw03ðM÷0o0X41003pċ00IĝĒ1ð(01I00ë0oĭÐcK0000wüħg001õOc80Eg2ċ1ëĩ010cùw900ÐcÛ3ë6g0",
orangeTerracotta: "0g0gjĉRHąRHĉÂHčÏYčÂYąRWĉÂYāRHčÂHĉÏHčRHčRYđÏYčÏZđÂHĉÏYāRWčÏHĉNW0Rg8Ñ8į2üĈ08Now0ðwë11ĩ0XwSXwARh40ü!00w00h8ìkč8@(0SwX0ë004x84SX04b0SywT(0kwEw008RM4ÀXx0IígKg2gXx02h8Ñ00göïgðS8180gëSwīxwë8S00xØëgI2gXT;10wg2A0ìyë104w480Xx8ígX2ü2",
whiteTerracotta: "0g0gfĹıWĵĢWĹĢWĽŁHĹŁWĵıWĽŁWĵġZĹıHĹİZĽıWĹġZĹŁHĽőWĵİZ1hw)ÄSGÝ0O-04Ñg150GÝSS49Q2Gq00096Ñ[çxO00KSw004S6QS1ax0@RS1QkK00QQ[704ÓÐ(S7Þ100QO07j:4Ð01g0g0ÓQ@Sw02g+1w04Q{72ÞwĽ4bÝx0QeA04QÑ42ğ0",
greenTerracotta: "0g0g9PRY|ÂZ|RY|ÂYPÂY|RZPRHÁÂY|RH001h1g002hh03h2w0000OO3OMN02w4ywMj(00hw(jg2yyOO1Mg0Bw3h(i0O3i2zhhg001hhii000w0Ohy01mOhzw2w2(hjMi0220n03zOMTw2KyhA80w0Owz3)ThTN0z",
brownTerracotta: "0g0g7{ĩH{ĩW{ĹH]ĩWÀĹH{ĹWÀĩH4ùJFmŀ5]òFCPcJİPwĕPmį0w9ÁAŀCShò201AXP2@AAúQüóS0JPNP9AĈSJP4üĊwjx^xPAigÁAùAiPùěRPAòBJk8m91y^9AĊPiı",
blackTerracotta: "0g0g6AÁWAÎWAÀZwÁWwÀZEÎW0094Xù0ù00ü0c4ùwëR4Aë00i4úi0ù0wX0001A00S2Rw2Tw09AĈë0J]wA002PSw^0ù0000Aë]00ë)A04ùÂa490Ag00ú00]0Aë",
pinkTerracotta: "0g0ghĉ)Zą)Zĉ*Wč?WąAYĉQZąAZā)Zĉ?Wč)ZĉAYĉAZđ?Wč*WčQZđ?Hā)Y0Rg8Ð8ĭ2gë06MI01@O011ħ3oħoùww0Sħ3gF000000ĭ)góÆÆħ00o600000X03oķ04d0S1öħo0hõzo000ÐoķSo026MõKo0Ð41004xî00ÐMói6(01(00ëSoĭXcKÆ000wç0K00h^Nõ60wg0Ð1SĊ010gŇ430XÂõÕ205g2",
limeTerracotta: "0g0ghÒĺHÒĺWÖĺHÚŊYÚŊHÖŊHÎĪWÒĪWÚĺYÖĺYÎĺHÖĺWÚĺHÒĪHÖŊYÎĺWÖĪW0Rg8Ï9ajoň06)A18óÃë12ëjĀňg00k_hQjo$0000xhaxoŎÕ@M0TwX0IS04x84hQ0Xc8SyITg2h8Bw008RgXKs00IÂcKg0àX10S00Û8ëàõÔ0IM01-40I0x4xkSÕ00Xwr2Ýë20XÀ-D8ÌgIČ0130x04w4y0008í0XjĄ0",
grayTerracotta: "0g0g6-ĊH-ĊW-ĚH;ĚH;ĊH)ĊW4ùiFiP5-9xyPkJP00ò8i]009d1PBĘ1K2000382QA4ì4ùaS009iP1AĀ0JP4ùqwiŀ1ĈPAi0{0ùAiPÝJS0wòCJj0i902]00o0i]",
cyanTerracotta: "0g0gjVÒYVâZÇâZÁVHVãWVâYVÒZÁÒYÇâYÁVYÇÒYÇÒZÇãWÇïZËâZVÒHÇðWÁÒHVVH0004R0X1õ004xg01Qw00Mħ0s0gRj95gí3Ča00À008Xxc004w0wgQK0002x42gíK0b00ì8Sg0182g004Rgíù000Qx9ëg0000000ïĊ0c09Ķ8Xwk00000CgXx8S00000îë0k18RwĜ00y01Ċ0|xë01Xw02(RgIT8R001",
blueTerracotta: "0g0g9]ŌY]ŜZ{ŜZ]ŜY]ŌZ{ŌY{ŌZQŌY|5Z001y2w000yx03x00S000xhTOig050300iyg00y0gxk000hh2xk0603ygg0y2w01hig001yywg00000hy0S2why30000kyhiw0000y031hih00Ý0í1S004h02Thhxhg01",
redTerracotta: "0g0geõřZõŉZùŚWú3WIŉYý3WüŚWùŚHùřZIŉZõŚWý3HõŉYùŉY1hiO3MQh0*Ô18Og191ph!Ē3Izìāo0001ïNAhhVëìÆwoë0íE5zwhmh8Oìwhyj(08yz.hh2OOĘwhhh0hĒÃ81lÊĊÃë1gìoĈ*yz(h01hĞhg8Đî31hTo*0dSh0E1iaĈ2Â2ìha",
terracotta: "0g0g5āáHýáWýÑWąáWāXH4J0{i]ePpNQ18üP47o0+XõJ]JiPBİzA0P82P0]QJ@aAiPPi0ßEłßTA42]wiK2Px@]0|íħúęy4Čò0J_i]ŀBgŋ1JPe@]Aýz0iS",
ancientDebrisTop: "0g0g7SÞHéïYþnZÒkW]ĚW(ÎWÊĹZ0ČôíõęčbÕÒAàEĚČ2ķûıĸi&.2ěS5ĈĢ×ĢnÈ(qĒġöÀ6Ăìgļ|aĐXìVsCĒKx2%0×ĈUħÂÔ]čVŁ40ÈÒÅÙı?<÷EìÚĈ]ļoüúÙÀðdÓÉïkT",
ancientDebrisSide: "0g0g7ÊĹZÒkW]ĚWSÞH(ÎWéïYþnZ4ĎüQíĨArēSùI0×|w0ëSù0ctđS4î÷Ĺ0Ï#ĞÝ0g}Â|ļwí}iPCAJ|ùTzÚĕęë9kJPÝŃ0SJ]Þrę]ùPÚëdÕiSŁĈ0I2&,U2ò09AXXÅÙò",
yellowStainedGlassPaneSide: "0g0g5000Ŏû.łÐ.ľÂŠņà.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
yellowStainedGlass: "0g0g3ŎûEŎûpŎûC0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
whiteStainedGlassPaneSide: "0g0g5000ZZŠŞņåŖĦŠŢŖġ001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
whiteStainedGlass: "0g0g3ZZŏZZŀZZō0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
redStainedGlassPaneSide: "0g0g5000ĀĪ.ùĪ.õĚŠüĪ.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
redStainedGlass: "0g0g3ĀĪ,ĀĪwĀĪ#0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
purpleStainedGlassPaneSide: "0g0g5000èŢ.äšġáőåèšŠ001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
purpleStainedGlass: "0g0g3èŢEèŢpèŢC0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
pinkStainedGlassPaneSide: "0g0g5000ŘšåŌŐŠňŀġŐš.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
pinkStainedGlass: "0g0g3ŘšÕŘšÇŘšÓ0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
orangeStainedGlassPaneSide: "0g0g5000ļŚ.ĴŊ.İĹŠĸŚ.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
orangeStainedGlass: "0g0g3ŀŚEŀŚpŀŚC0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
magentaStainedGlassPaneSide: "0g0g5000ę<åđ$Ščsġĕ%.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
magentaStainedGlass: "0g0g3ę<Đę<āę<Ď0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
limeStainedGlassPaneSide: "0g0g5000Hxġç1ġãŘåHhġ001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
limeStainedGlass: "0g0g3HMĐHMāHMĎ0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
lightGrayStainedGlassPaneSide: "0g0g5000ĂÖġJP.÷-ŠþÇå001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
lightGrayStainedGlass: "0g0g3ĂÖĐĂÖāĂÖĎ0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
lightBlueStainedGlassPaneSide: "0g0g5000ÓÚåÏ{ŠÌ;ġÏË.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
lightBlueStainedGlass: "0g0g3ÓÚĐÓÚāÓÚĎ0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
greenStainedGlassPaneSide: "0g0g5000ÒŚ.ÎŊ.ËĹŠÎŚ.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
greenStainedGlass: "0g0g3ÒŚEÒŚpÒŚC0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
grayStainedGlassPaneSide: "0g0g4000|)ŠPAġ?kå01ë001ħ001ë002ë002S001ħ002ħ002ħ001ħ002ħ001ë001ħ001ë001ë001ħ001ë0",
grayStainedGlass: "0g0g3|)ŏ|)ŀ|)ō0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
cyanStainedGlassPaneSide: "0g0g5000|ŠġPŐ.?ĿŠPŠå001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
cyanStainedGlass: "0g0g3|ŠĐ|Šā|ŠĎ0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
brownStainedGlassPaneSide: "0g0g4000ÒO.Îz.ËiŠ01ë001ħ001ë002ë002S001ħ002ħ002ħ001ħ002ħ001ë001ħ001ë001ë001ħ001ë0",
brownStainedGlass: "0g0g3ÒOEÒOpÒOC0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
blueStainedGlassPaneSide: "0g0g5000M:.M!ġ%qåM!Š001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001ë00",
blueStainedGlass: "0g0g3M:%M:pM:z0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
blackStainedGlassPaneSide: "0g0g3000oÎġkÁå01S001ë001S001S001S001ë001ë001ë001ë001ë001S001ë001S001S001ë001S0",
blackStainedGlass: "0g0g3oÎĐoÎāoÎĎ0000lVVUlýVUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÑlVVülVVU0000",
lightGrayStainedGlassPaneTop: "0g0g5000ĂÖġJP.þÇå÷-Š000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
lightBlueStainedGlassPaneTop: "0g0g5000ÓÚåÏ{ŠÏË.Ì;ġ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
magentaStainedGlassPaneTop: "0g0g5000ę<åđ$Šĕ%.čsġ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
yellowStainedGlassPaneTop: "0g0g5000Ŏû.łÐ.ņà.ľÂŠ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
purpleStainedGlassPaneTop: "0g0g5000èŢ.äšġèšŠáőå000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
orangeStainedGlassPaneTop: "0g0g5000ļŚ.ĴŊ.ĸŚ.İĹŠ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
whiteStainedGlassPaneTop: "0g0g5000ZZŠŞņåŢŖġŖĦŠ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
greenStainedGlassPaneTop: "0g0g5000ÒŚ.ÎŊ.ÎŚ.ËĹŠ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
brownStainedGlassPaneTop: "0g0g4000ÒO.Îz.ËiŠ0000000000000000000000000000VÇĎýĢŖŤĖ0000000000000000000000000000",
blackStainedGlassPaneTop: "0g0g3000oÎġkÁå0000000000000000000000000000VVVVÒĂđÇ0000000000000000000000000000",
pinkStainedGlassPaneTop: "0g0g5000ŘšåŌŐŠŐš.ňŀġ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
limeStainedGlassPaneTop: "0g0g5000Hxġç1ġHhġãŘå000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
grayStainedGlassPaneTop: "0g0g4000|)ŠPAġ?kå0000000000000000000000000000VÇĎýĢŖŤĖ0000000000000000000000000000",
cyanStainedGlassPaneTop: "0g0g5000|ŠġPŐ.PŠå?ĿŠ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
blueStainedGlassPaneTop: "0g0g5000M:.M!ġM!Š%qå000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
redStainedGlassPaneTop: "0g0g5000ĀĪ.ùĪ.üĪ.õĚŠ000000000000000000000000000000000000000000AJÁ]ČPÞEČJkĊ000000000000000000000000000000000000000000",
cobweb: "0g0g4Į<W000ZZZŎĖYlVýUÒÃęÇÊïþÒÅÄlļUĀGÒÁãËËËrÔÁ=őļü?ÿė-Á}?ÿÇãÇąÅÔ^ÁUĺlĬÇÚÃĝÒÃĬÇlÇVU",
strippedCrimsonStemSW: "0g0g7IŌYäĜYèļWëŌWëŌYüŝWĉmY0i10yĀ?(ĂB+4ĕw3K-ŇĈÉzJS02Ň%Ğĭ%i]5ģÄłĊķ00bÚĜÉãĜ0%06ħĞķ5ğ+6ģÉÕĕôÚĈ0%0,ØÐËĝ9(02Ł0ĕC%úĻăÙþüÚĞĿBA^E6ô",
strippedWarpedStemSW: "0g0g7/ÖH&nYNEHN-Z+ÆZ@òZ=ĒH0i10yĀ?(ĂB+4ĕw3K-ŇĈÉzJS02Ň%Ğĭ%i]5ģÄłĊķ00bÚĜÉãĜ0%06ħĞķ5ğ+6ģÉÕĕôÚĈ0%0,ØÐËĝ9(02Ł0ĕC%úĻăÙþüÚĞĿBA^E6ô",
strippedWarpedStem: "0g0g7/ÖH+ÆZ@òZN-Z=ĒH&nYNEH44ĹTwĪKXĹ9SńĨëķ8TĆĔðķ8?ăĴJë]AĀol0ÀQĿkl2À0ÌlüíP(ËġĜXh(÷ck41wĝog2Îw*ĈwRÚ(ŅėEÂc,Ėr4ÀhöĖlëR9õńpwi90ą",
strippedWarpedStemTop: "0g0g9N-Z/ÖH+ÆZ/-Z/8W+åWtVW%âWFĭH1gw0yxh23O))U>O(3ÓGñIIGÁ3ÒÃO)O,(4àQQQQ-Szî[äñá,T4á@QQá[M4î[]XX-T4î[]áá,S4î[QQX[Rkà[ãäX-R4îQQQQ,R3î)OO*,S3ññGGGG(3OQ)?QOM0g000000",
strippedCrimsonStem: "0g0g7IŌYëŌYüŝWëŌWĉmYäĜYèļW44ĹTwĪKXĹ9SńĨëķ8TĆĔðķ8?ăĴJë]AĀol0ÀQĿkl2À0ÌlüíP(ËġĜXh(÷ck41wĝog2Îw*ĈwRÚ(ŅėEÂc,Ėr4ÀhöĖlëR9õńpwi90ą",
strippedCrimsonStemTop: "0g0g8ëŌWIŌYüŝWXŜYèŌH]ûHÊīWÕĻY4X0PiRdğsÂ+ĿeńĦZŤúeČłÞğĀj.AJ[Ň~ġğŢ[ĉjPÑûPājġďŚĮňjġďĺ[ĈjġČûİĊO.ĝņĮŉjġAJ[ĊfğrÚďĈfŖĞłÚĀdġsó@ŀ0ë0000",
copperBlock: "0g0g8ŉ6ZļŌYİļHĨČZčÑWęXHā>YúzW0g]02Ą9+ú4þŕ8UIAęÛeŋT?ģėdy^|İÍ9iÂÛÕŖ8íûà[Ü4kăĂ,Å0ČœĸĢÿ5DÙöĜ÷9:ÒÚČ@9łØâyecÇÉđhÅmőŔ]ăćjÅ×QüŅ/ÚŞJÚŝ",
crackedPolishedBlackstoneBricks: "0g0g6(ěH|BHkMW;ŋHwÁZAìZ4ĊÇ$þĩcSÉm0qcāEĜ[qÞírKB2Äëtâ+2ĜbÕiô!ĚVEĚÇyúFi^Eügw!ìĹÇlĨ×ĖĞÆĉĀ!|þħÙ-2A,rañiÒIÈĒŁ!Ù4węPyĚ?AP]J^Fi",
crackedStoneBricks: "0g0g7ÎðWéŞZĆÖZåľYóEYÇÒYÖĞY5CJFFBīùÑÝĪdQ6{-ù|Ï!PA0ń?ĀpÒíŜöĞĵïĨËçÙŝĶ<?2ķ%Ĉ00P8ĬNīJCÏâõOcùħËÎįTAĂE@i9AŌBQĀpÜRËõġÉŀōĴç<Û00%Ĝ00",
diamondHoe: "0g0ga00WcŚHOĔY#qZ8JWCİY]ĸHÖMZòJHEÝY000000000001h000000iOg000004?MÔ000004Vò000000ÐU000006åS00000Õù000006å000000Õù000006å000000Õù000006å000000Õù000000ā00000000000000",
goldenHoe: "0g0ga00WìÞHZŞHŒĝH;ĘZőĨH]ĸHÖMZòJHEÝY000000000001h000000iOg000004?MÔ000004Vò000000ÐU000006áS00000Õù000006å000000Õù000006å000000Õù000006å000000Õù000000ā00000000000000",
ironHoe: "0g0g9000?kHZZZłÚYoÎYĪcW]ĸHÖMZòJH000000000001h000000iOg000004?MÔ000004VX000000ÐU000006áS00000ÕS000006á000000ÕS000006á000000ÕS000006á000000ÕS000000Q00000000000000",
stoneHoe: "0g0g900WPAYĂÖYóEYoÎYéŞZ]ĸHÖMZòJH000000000001h000000iOg000004?MÔ000004VX000000ÐU000006áS00000ÕS000006á000000ÕS000006á000000ÕS000006á000000ÕS000000Q00000000000000",
woodenHoe: "0g0g800W)ĉWòJHâÏWwKYÖTZ]ĸHÖMZ000000001A0000aÙë0004ýąħ000iļ00003:0000rį0000ı00006ŗ0000Në0001Ĥ0000cĈ0000Ü00003E00002S0000000000",
podzolSide: function(n){
var overlay = getPixels("0g0gA{ĸZQĨZÒ1ZQęYÖhZÒhZ]ęZâxZSĸZÎxZVÎW{ňZ000UŘZéÁZÎ1ZUĸZÀŘZ|ÁW{ŘZ]ňYÖxZÇ1ZÆňZQęZòÂWÚxZÁÁWUňZÀňZQĨYÞhZQŘYËxZÊŘZÆřY0gîgÀĭcÞįwJI$îd-ś0SK0sĜÂ|>VVKSËðÈ$JjÙ,tMÔí(zl$üĻMŚcN8{âðcwĪcêzc(ĪcNOc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Īc(Ī0")
var pix = getPixels("0g0g7ĢlZýĜYåÃYÆřYðoHÚĞZâÑH4Č9PČg?ČÐSĈÉ9(J9Cĩ)yķBkaEðÂ%UÈ{üÉÖ)ù9Eù84Á]2Â$üòFkÃQČĂ?ČŁPwh?0ìKNÏFihČĎÃ{ĊRPAë?$ò{)9FXĺ1kòEiĊByÃ")
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
for (let i = 0; i < overlay.length; i += 4) {
if(overlay[i+3]){
setPixel(n, i >> 2 & 15, i >> 6, overlay[i], overlay[i + 1], overlay[i + 2], overlay[i + 3]);
}
}
},//"0g0gA{ĸZQĨZÒ1ZQęYÖhZÒhZ]ęZâxZQŘYÎxZVÎWSĸZ{ňZQĨYUŘZÎ1ZUĸZÀŘZ|ÁW{ŘZ]ňYÖxZÇ1ZÆňZQęZÚxZÁÁWUňZÀňZåÃYÞhZËxZÆřYÚĞZÊŘZâÑH0gîgÀĭcÞĪwJô(O}cěķ11ë0àhP*eVVì1ã3Îû9%+îÚħĭÆķą8(V(üĻcnî5ķĨxŗĨÞðwcĿËæDËë(>5ķĨí8tã7ËáMîpľËc,ËcKĭáMîpķĨá(ËáMîo(>5ľ>60ĨcnËcgĨcnËcn>5ĿtcgĨâľKâķĨìľKìľËâķĭcÔ>5ķĨáMîpķĭco3oMĈcgĨc,>5ľ>4(>pķĨX(>5Ŀ35Ŀtë(ËcgĨcÔËâľËáMîpķĨâĿńcgĨã0ĭìķĭcgĨcnKcÔKã0ĭcÔ>5ľ>4(>5ķĭcgĨá(ńcgĨâķĨcnK",
podzolTop: "0g0g6ÖhYÀŘYÁMW]ĨYòÏWĕJW4Ċ_KmpAĩăwĘįwëô4ČÖA48hĘÐÏiįĈíĿÝĞTë6įcëi1ùPA2ò5ĚPxù]Ùþ0c(ĨxīIù4į4iòymŀ0ĎÀBĞĬëĊÇ%ĚÏ&o9++ìÑaÉïĚÁwĞ]",
rawIronBlock: "0g0g7öļHéîZŁġWĖ,HŒ#WÒ>HZèY4ĎĪÁ+dõ08ÖëĜPùÕ0ñzyJĻáþķ6ġĊRüă)*j4EûČXĿlČĿÖðĨ*Ğ8ÁC1ČbÖ×+]ó)F1Ęcĸ+İ+ùsPð1RĹq|ëÂÕq_Ù<y$)ĀwEĀ0įúBĎŀ",
rawGoldBlock: "0g0g6ŢĊZıMZĕĚHŕúYŞjWZŀZ0ČÆÑġrĉüŏÚnoĊOÚõČ?öāÕhüüõďwXēÇByÑB^rÑÆõF1zyŀhPþň(RÂNĚı]ĩÁþĭÂ?iòK]ıßkÊ$@ÁùRÑÒĚxyĞċEģÑðNÂQŁ4FiúFħ3",
rawCopperBlock: "0g0ghąÃZġČZđĽWæÓYĂ+YÞüHïOYļŌYőnWšđHęXH|ÐZéĬHÈÆWąċZ}ŐY.ĽW020ëypaÐĈĎ(00p9h{kčaÁÄÃoŏSõċïT1^ĨüĨ-SKEwEÂðõ62í3001ķãk69ķÝoĭ8S30ĭ/iDcĈ(0Ðox0QňõïMÄÐ58-a+kĈÁþÀxES0ÒFÒ8aĘ578c2ĥċÀcÃoĖ1ëÆ+c00jëÐ!ĩßħĒÇRXĈēÈħÝX6Æ}XsĲÖ{jýÝFĩîXķäıÐ&g",
barrier: "0g0g4000Ĥ0WŇ0WĘ0W00001ĒĒSaĒĒĘqS2ĔF0aÙE0F$E0Č$E2ù$EaS$EF0$EČ0$!ù0ĔqS2ĔeĒĒĘ3ZZħ0000",
netheriteSword: "0g0ge000]ČWïŏHwTWÞÿWÁkZËVZ(JH{ŚZ$íWKĺWÞkW-ŊYkxH0000001h000000iz000001Az00000iÂ(00001?>00000mÄ(00h01Åî000mglä(0001Tñî00001Qä(00000mÃ000009ċñ(0000ă(Oà000hĪ00O000n(000000ĺ(000000",
netheriteShovel: "0g0gc000]ČWïŏHwTWËVZÞÿW{ŚZ$íWÞkWKĺW-ŊYT4W0000000000000000000001h000000iy(00001A?(0000l@?(00007ÑÃ00000ä*(00007î300000å(000007ċ000000æ(00000Gě000000ä(0000003(0000000000000",
netheritePickaxe: "0g0gc000]ČWïŏHÞÿWËVZ$íWwTW{ŚZÞkWKĺW-ŊYT4W0000000000000000000hhg00001yzTl0000mÓáð000000Å@000005þáK0000ÆKÐK0005þ0ÏK000ÆK0ÏK005Ď00ÏK00ÉK006005Ď000000ÆK000000Ó00000000000000",
netheriteHoe: "0g0gd000]ċZïŏHoÁHÞÿW(JH$íWKĺWËVZÞkW{ŚZT4W-ŊY000000000001h000000iyg000003)BÔ000003Xû000000Õċ000006à(00000Ö(000006à000000Ö(000006ě000000Ù(000006ě000000Ö(000000O00000000000000",
netheriteAxe: "0g0gd000]ČWïŏH{ŚZÞÿWËVZKĺWwTW(JH$íWÞkWT4W-ŊY0000000000001g000000ix000001zM00000kO*K0000áOÃÝ00007â-,00000þà,00009ď7Ý0000þÝ000009ğ000000ĄÝ000009ğ000000ĂÝ000000G00000000000000",
netheriteScrap: "0g0g8000SÞHþnZÒkWÊĹZéïY]ĉZASY0000000004ë0001Fg000^}Â00jØß/S0ĢłÚğĠu@ŋÚŖħ3Āŋçŗ00HuZÛ00ĴZĸĴħ6PAÚŕ00ğzÜÝ00ołņë00f,Ň0001ş000000000",
netheriteIngot: "0g0gb000AÞZ|4W(ĊYPkY|AZÇVYÞĮW-ŊYgTW;ĪW000000000000000000000h000001hy(000hk?Âz01hQÄÓÒU(myÂVÓÓG>iãÒVDG>òqďÓGáċ/òoIG^OOIòqI]OOĐđù3Đ^OĒāù00/ó.ā00003.ù00000000000000000000",
itemFrameWood: "0g0g7ľ8HıľYľEZĖGHĢďHĎÄHĆCW4AJ9Aî0ÿ80ùAw2cJi3ãğãğËĖaAüP2KwoÐXë1ùí_0jAŁľãŁŁŕ92ÂPAX40cùĪzSāAAā4ŁğãļłĞÀA4PQiA9cëgPNgÐ0İAĽŔÉGËĞ",
itemFrame: "0g0gbEJW(ĚY)ĩZAíWÞ2YåiYìyYýNYčÃWĕàW)ĚY1iyyxhhjkQQQ?U?TmVVÑ[ãÔÎBÔãÓÓÒÄÁAUÄäñÄÄÎBÓÕIāþÒTCãåĀIñÓÏCÓIIIIÓÂCÄĀòāòÔÏkVäIIIÒRlÓÕāāþÓÂlÒÓäIãÄÂlâV?VUGÏlÔâU[ÒVTkQ@ÑÓ?ÓÁ1qhhyyyg",
stonecutterTop: "0g0gaýĪHåÏYâľH÷-ZìûYÖxHÖĎYéŞZËâZÁ?W0iOOOOx04ÄDGGãÒSlÄyCyDBÁCyàGOGCÏ,ßyßàONàOGGGßCCz,àOzNyGàNÕIIIIðàOÖāāāāþà,,GO,àOO,DyÓDDßz,Gà,GGOàCÏàßDãÏÏlÄDßyGBÁ4ÂGGGGÒS0iOOOOx0",
stonecutterSide: "0g0g8000Ò2HÆŉH{ĨZÖĎYâľHéŞZ÷-Z000000000000000000000000000000000000000000FĲ%ŁŁÃ?ÜğZÙóÑĜòEĎ^ÕĚŁPĎÁ{İAJ]āEĴŜģÆÇFłğZőĹÒHŝłÛı?Ŕĕņœô",
stonecutterSaw: "0g0g700WłÚYZZZĒĒYŒĖYí8WÞĮW00000000000000000000000000000000000000000000000000000000ÃPë00mò?y00Ċ^MAħ1JÁòyë5oõPiI8ü_EüÆcĊÛĻĊÀ",
stonecutterBottom: "0g0g5Á?WâľHí8WóoYÚĞZ0000005AŁPiK9iÃPĞùdĜăÚĞĿikJÚČ]9AăÚĜĀdĎŁPoÀdĜòFCĿ4ĎłÚAĀ9+łÚĞĿ9Ğú(ČùgüăÚĞķdAăPĜ]dĞłÖ)ùdiJQĀK000000",
brewingStandBase: "0g0g6ÖâZÞþHâĞZìŞZ÷8WĆ-Z0000iS0ĎI4J05īÈ]Čë604]ČI6ùk?Aì5ķēFįİ5:È&úh0üòU0ĀxyÁV0Àx:Ç}ĊįxĻÐFĿìyĈ4QČPy0cPiò1(ċPkì0kĸ4J00J0000",
brewingStand: "0g0gp000;ŚZ|)Z(ĪWÎðWłOZĽīZsÞZÊĚWëřZÇÒYúzZĥÃWđiHĵĢHüĸHĽĺYZZZĘÎYľņYĹ3WŃĺHē÷HõwYİíY00g00000ë000h0000wë000Mg?(Ixë002ÞõAw@OX006ë8Î8ī4c000ùEÒEĻ4ë0080gÒEį5ë03kķgÒ(į5ë03ĆŇgÝEį5004Ò(gáëį200ąÚEùÝĈį000ĝØÕĐáëĻ000ĝŌåIäĈī0005ĕK0kħ00000000oĈ00000000oħ0000",
cakeTop: "0g0g8000ŞĔYZńYZZZķíZŘĬYŏĺHĘîW0000004ČłÚČ]5+łÚĭI9ģòPĞķ9ĥjÚ+ķdüłÚŝĿdþĻòĜĿeCŌĸĜĿdĎōąNĿdĜĻŐċĿdĞò|ĊĿ9ĿłÚüĿ9ŕÃ×Ğķ5+İ|ĞI4ČłÚĜI000000",
cakeSide: "0g0ga000ŞĔYZńYZZZŊ_Yö2HčyHèňZġÎZĬíH00000000000000000000000000000000000000000000000000000000000000001zOOOONg1zOOOONg1iONzOxg4lÏmÏlÎS7ÕðòĀñÓÝ7ÆāāþāïÝ7ÕÇĀāĀðÝ7âVVVVÅÝ",
cakeBottom: "0g0g5000èňZö2HčyHÕĹW0000004ČĹFA]5AJPCI9yÎPkÀ9üP(Jù9j9AĀù8J^BiĀ9oPAĩù9J{Aüù9yPBkI5B9Aĩù9i^(JĀ9yPFkù5kĂPAI4ČJFČ]000000",
cartographyTableTop: "0g0grQęH{ĨYÆĸY-úW;ĉWĮsHĒĢYĆåZĦðWïěHEKZ]ĉYĤûWÞōZŢēZZZW-ìHÖĎY(ÝZ)ńY1ĈW1ÀW;ZY$ģW×ÂZVŉHêěH02gIR8XgXz8SMù18S0XX8aÃsw04XxzqóĞ*^igŎġa8ĳįs>>Ćŝ<w8yãīî>ùŞġx8SgXz>ŅŞĥxÂČđ^Â>ķŞ<N1800R>Ńśġz8RgX4>ĄŎ.züČđ]T>ĄŋAQą#ØİÂiÂúP^ĥMăEzgë(4xąěĔĐ3wRgùëĝĕ^įAgígXxĕÚ×]ÐsčBP^",
cartographyTableSide3: "0g0g8ÆĸYÚiWEKZ{ĨYQęH;ĉW-úW(ÝZ4ùP4ùP}Uń|õŃ|ĜtŘŅŊ|Ĝs}cŊŕĜsŕõŚŕĦsŕeŏĵ)wŕXŇľÛŏŢÒoĩ÷ŒĵYrňõŊĵWoŔĳŊĵ)wŔœŒŘĦz|ĵŊŘīrŕĦŒļīr}ĜŒĴĻ#ÍŜZÍŜZ",
cartographyTableSide2: "0g0gnÚiWÆĸY-úW)ńY;ZYĒñW1ÀW1ĈWQęH{ĨYEKZ;ĉW(ÝZ$ģW1ŇWáĈWZļZŅÁWïěHĹĭYŢēZÎ1ZĦðW00g0104NkĮRÂwč!ÈÆĹāĭ^iĬčcÈQ+Āī^iwĉ!RÆĸĜî]Jwĕ$RÆ+öČaĹħĉ$RÆďĩ!aiĈĕ$a0g01aÀĉ8^gXĉ9Ï^ÀC^àą!wĔyaÀıŁĽĂAħČ$a2ĉÄĝýĒČB$^2ĲÂ×ĝCĨB$^RİĊóĂEīB!^RİÈ×ýĎīĕ$^ĩwXx8ÂAĕ!ÐoĎMõÐoĎMó",
cartographyTableSide1: "0g0gk1ÀW;ZY)ńY$ģW-úWÚiWÆĸY1ŇWĺoYĒñW(ÝZ{ĨYEKZ;ĉWQęH1ĈWŚĂWáĈWZļZŅÁW0RxùĎF^ÏüĎ/ihFÙ×ĽĭġÙåŇëúı×ĳĬĕÙ8gùúÙßĳĬĕÙgRhđ×ßĳĬĝ×ÑÒ+F×ßĳčĝ×F^Ïý×OõĬġÑNŃĩgõx8ĩhČÈŃ@ĝĕØÈ>)īNŃčĔĭMIċ$ıOõĩýÓMĂĮ%×ÉõċlÓNįĊ%×Èĳď%ØÉĂď%ÙÈĳĊgXxqčĝ×É{>oĭMþ?ĝÙÂüĬF^ÂüĬF{",
smithingTableTop: "0g0g7PBZT5WÁÄZ-ŋH)ĺZAJZ$ĪH0J2S0i4þłAĞ^dİrãįİ6PAý]ĿÓÖ)Ĭİa6ÔĞûÖoerĞłPoe>ĞĺR]&ÚĞł×_NÚĞŀŔbNPãłÖ8ĚRĞł|8NÚĜăP8dģĜĹ]Ŀ?ěÉúĞĿ]41wĹS",
smithingTableSide: "0g0gh-ŋH)ĺZAJZ$ĪHT5WoÎZgTWSÞH]ÞYýáWÊJWÒÿYPBZÀìZ$ÁWwûWåzH02xXÐoħTõKoīyõ?oĭMcÏgXÁI>gXx8RMõÏüĎMóÐoĭF÷àĄŎ.ĵàĄĬhùXB7.ĵáwĩhüĞMX×üïEĊpÊĩ(õàĄŎ-ĊpÀ,ĤÐRgàĄĪhÀŎTĵ/gXwħhÈčB^ÂkčEħpĄŎBĵàĄŎ-Ĉp}àč8RgàĈĊ1ÀX.7.ĵXwċ1UĎđ^ÂĂļEĈFÊŎ.ĵàĄŎ-č",
smithingTableFront: "0g0gf-ŋH)ĺZAJZ$ĪHT5WoÎZgTWSÞH]ÞYÊJWPBZÀìZ$ÁWåzHýáW0iMOO4O(OyÃBOOzNyBNzyyyyÓÓVÓÓÓVÓÄGäIIñGÒCIXñGIIÂBĂĢā^ĂPÂ+ııĳĔĳĔÂ*áéG]I[ÃBöêIóæIÀBĆąāüüāÀ*ĵıĳĳĔĳÀ*IIIG[äÂ5ñäIIGäÃ5āāāăġāÀVĳĳĳĳĳĳV",
smithingTableBottom: "0g0g5oÎZ]ÞYSÞH$ÁWÀìZ0JúFyë1ĎŁÚĜħ$İxNRÇ$ČJPBq!AJPBp}AJPAÁ}AJPBq{ČJPBq$ČJPAÁ!AJPAÁ!AJPBq&AJPBp}AJPBh{āxCRÁ1ČłÖČħ1iÂBië",
enderPearl: "0g0gb000cĺW+ÕYCnHhâW0JWøŅWL:W9)W4ŊWpōY00000000000000000001h000001izh0000izQOÀ001zÔIQ*001CåāI?00i,ýVĀXÀ0Â]ýVĀ)À0Ã]ýVĀAÀ05-òāñB005)IIã?000È]NAÀ0005UQV000005V00000000000",
netherWartIcon: "0g0g8000ĤśYČûWČû0ÊÁYÊÁë{TH{TS00000000000000000000000000ÃÂë000ûăë001NýC002ČŃı00dxÂÛ000ĜJë001,Âë000iłë000CŇ00000000000000000000",
flowerPotIcon: "0g0gg000(ÁW)ÁW-ÎW-ÎHÝŉYå3WåjHÕĩWUìH{úZÀìHāýHòQWčĝZÀÞH0000000000000000000iz00000>Äâ>0004ÄIIâS009ĐIIóĘ009ıĒĒĕĘ009ÙœĴĽĘ000ĞÓÓØ0000ĥĳńØ00009ĵĴĘ0000bŃĽĘ00000Ţģ000000000000000000000000000",
cake: "0g0gh000ľ!ZŞĄHZŕWZZZĘîWķíZŘĬYŏĺHÙĨYýxY;ÝYö2HčRWġßHĬíHĕÏW0000000000000Xx8Rg0002hcÐoĭwX00QRkðM8R8w8IÂcĮTIÂgT8įTùE(]NwÎ8IQcT8ĭRcT8ðNgXxgTIT]ðMõÐgīx8F^XMõÐgXx5#_qxõÏgðCę#^ĄōòĖØ4ĭĝ#2UŞ<ĶáwĽęK0iÿ<ŖàŁĬĔ0005ĕØÈĽĘ000000000000",
furnaceFrontOn: "0g0giÁ)Z;ŊYÖĎYâľHËÒYJPWðoHwíWgTWĒĒYĚĲWĮsHĆåZť(WĨÞYZKWZŠHZZZ000ë08R0X00XMIÏoīMcë96ÁĀ>M{ÁIK0õKĄŎ.ĵjcS0ĳkx8Rgëõì8īXwŎ.ķXkì0īX4x8RXkë8ıüđ^ÂüüüÎ8ĳMgÏwðxIS2ĻĝĕØÈĽĝĕw2ÂýAĭMJČđì3iÂt8ReĹčë1^6ĉĴØĆŗdë0ıñĥĘçŇĻ(Ĉ9@ŎĨŘèKŞdì8íĽĭhÙuľXT",
goldNugget: "0g0g8000éSZŢ@YŢōYÚgYZZZőĨHŅÁW000000000000000000000000009w0000ÃÀ0000Éã0000ÉĢ0000ÚŅ0000ať0000aŗ00001ë00000000000000000000000000",
ironNugget: "0g0gc000-ś0ÇãYß-ħģ%YłêHŚĶWĊĲZ-śWÇãëß-ZY%Y000000000000000000000000000000000001g000000yMh00002?yzg000BÓÅäù000CVæĐ0000#QIë00008I00000000000000000000000000000000000000000000",
redstone: "0g0g8000ÊgWÝ0WĐ(Wţ0WSgW$0W)gH000000000000000000001w0000aÑ0000ÊG0002ŊÂŇ00mŃáŃ00ĐļóYë0ĜŊÄăë3ÅqĖņë0×ļ+ţ00dĥYK000+Ŀ00000000000000",
pumpkinTop: "0g0g8ĬęHđìWŉxZŉüYĉÀYŉĈWĞgWKķH0gëw211yJFyI9AjdĈg0)ÂEmò9l0ëXg9đGùyĀPĉĖŉgĀ8İŜĘ4ìxx=Ņ]Àdo7ŗ4J{ČwíyÀ8ASxQ85ĊJF2IxwĿPyú9mĸ9Ěhwgh101",
pumpkinSide: "0g0g6ĬęHĉÀYđìWŉxZŉüYèŗZ0g1S4TÚùĿ%íŀßlzNRx&zA&SK%íł%ĞÆ%íł%ĞÉ%Ěł%ĞÉ%Ěł%ĘÉ%Ěł%ĘÉ%ĚłĕĚr%íĿĕĚł%óĿĕĚłxóħĕóħxķ0Ĉa1ČÂ9Ĉq?ČĹPČŁ|",
carvedPumpkin: "0g0g8ĬĸHĉKYčìWŉTZŉüY$0WQSWèŗZ0g1S4TÚùĿ%íŀirQyĚx&#Ĕ+ķK%ńě,×Æ%ńě,ÙÉ%ńĘ,Úă%ĴĀOÚċ%Ġīe[r%ĺ>ĈÃÉ&łâĢńÉ&ŔĞłÚěxń+rÎĘxĽŚ%ŕŀŋÝ9wĆ[ŋř9ŋť~",
jackOLantern: "0g0gaĬĸHčìWĉKYŉTZŉüYZ6HZïHZšWĽċHèŗZ0102g0i2O(3(j(jN4SV43Ã3RzSÄU5V(Sz*ÓÐ5ÓÀ(z*Ôà5GKOz*ÔÝlGÕOz)G(kÔã>zO>43Q)Oz**3À5*OzVVâÅVÒOzÄÔGGGÓÐw*ÐÔ7Ó6ëw)Oîz-ûNJ90ywyJ9JFwyJFJF",
pumpkinSeeds: "0g0g4000ĲÈYĲoZıĭZ00000000000000000g000o0S0$0K0SoĘ0ĈÙ010001ëTK2Ĩíħ02ħ0000000000000",
melonSeeds: "0g0g4000ÎÃHEëYsÀH0000000000K000Ę00ķ000ŇKS00ĘK00ÀĘ0QĈ01į002ħTë02Īħ0000000000000000",
shears: "0g0g9000ÙĹYĒĒYľËHÞĮWò3HčOZÊęZT4W00000000000000000000iOw00001>N20000lzwz0001ÏN2O000máwzN000mÝ2N[001Ô04xÝ001Å0hn0002xhVÝ000w4VG0000S8G000008ë000000000000000000000",
melonSide: "0g0g5ÛRWĎęZ*ňZÂ1ZMĉZ5NaQmI5yaÑkS5Ċ8ÑkS5Ě1Kþ8xĘTÙþį%ĞTÙðį%ĞTÙðįxĘTKðį5Ċ1Ñkį5y1QkI5RbQ385ĩıXObÒRıïěbÓRĳïěbÓRĳïî86ycQ38",
melonTop: "0g0g5ÛRWĎęZÂ1ZMĨZ%ÞY5N1ÑmI0ČTQATwkT?2aÑ0ìÎùj{ë8{XĂACaSA90üĺòĈS]2ph0JÖwxÀijwisI0P4ðħ{Xëx(a8múÖgô5í^QX>?A1wĈRwČë5y2wkI",
melonSlice: "0g0gd000ðyWÇúYĤĩWĭ[YĊÏWĔÀYäKZĽŀYħřZÆKZ?(ZİĬZ000000000000000000000i0000003?w00000O)Â00003Ô-Â0000.+Õi0003OċÕr000+ÓO-r003ÐċÓįr00OãOÐïĘ01>OOįÂĘ0bUIIì#000ĝVh#Ę000bģģĘ00000000000",
glowstoneDust: "0g0g8000éyWőČZťŜZŢÇZĝīWÆňZöÂZ000000000000000000001w0000aÑ0000ÊG0002ŊÂŇ00mŃáŃ00ĐļóĶë0ĜŊÄăë3Å!Ēņë0×ļ+Ĕ00dĥYK000+Ŀ00000000000000",
redstoneLamp: "0g0g8(ÎWQęYÊĨHïNYĉîHĕċYúÐWúÂZ0000004CķaU81<ādĦë5ĶgbĞįaÈíň@ķrĻ=ĄDÕ9ĉŊĴïg0ïrÜĈS07ăĽŗ0hhŊÿíķpĩmÕmĿdōRSğĀbĭį5ģķ1Èĸpšë4lĀ9Ċ8000000",
redstoneLampOn: "0g0g6-ìHQĸHýċWōÑYŞØHřŞH0000004Cķ9Ĝ81.Çeĭë5įķ9įįa@íÎ.geĜtĔDÆ9ĈŋýXķ0ïÑþĘS06œĝķ0dgąĖíķeĚjánÆe@RKġo9įį5įķ1.Áeĭë4kĿ9Ċ8000000",
quartz: "0g0ga000ĚòWŒąZŞņWòŎWņÊHŎéHľ#YĞĀZÚâY00001h000000ix001h01y)001ySizU001y)j+á001OÔmÒXh00@ÕlÔ@M004ÞVÕ[Ñ01kìVÆÿù01xTâäĀhg4N]âòìÓg4àAGò[,S9Gåäòñò00ÿòĀòIù009ù9ùā0000000000",
endStone: "0g0g6ņĂHľÖHŖłHĭşYĶoYŞŒZ4XI}iĉAEÂùíg9n8?wRÝĊňa^üXĻTÁûÉ(!IÀħĉxoV]XIPİaĉnhČĠTÏNR]Rjïo]&wÁA2RÑüĐ9ħhB4Ï}gSS#zwíýòÂŀwAb(yT5ħĄ",
endPortalFrameTop: "0g0gaTĭHăpWB3YĞğY%ÑZĪ8HŎĂZŖĲY0SZ4ÎH000000001yxN?iyg25(?K3ÀS2,Ð0Q+àS2+4RRAÐS2ÅEIIëâS1Å]āāüâg4Å]āāùâS2ÅEāāùâS1Å]āāùâg4ÅEāāùâS2+SS04ÐS2,Ð4Q+àS25(@À3ÀS1QTU>kQg00000000",
endPortalFrameSide: "0g0ge000TĭH%ÑZăpWoĺZgěHĒlZĢďHĭşYĶoYľÖHŖłHņĂHŞŒZ000000000000000000000000hhhhhhhhz?VVVVUNAÄGGGGÒRBäIāāIñR?PēĴıāĉUâUyyyhiÅñVVVVVVäĒĐñGGäóĒĲģĳĒĒĴıĒĢāēıĔłĤĴŀāõĤĲĀēĤĢIĒĥńđòĒģĒıİóŁĔĔ",
eyeOfEnder: "0g0gc0000ßWoĺYFVWÂ6Y.üYğ_H.ÐZ×ÿWăpWoĉWíŎW00izNx0000hyyh0000hhhh0000hhhh0000izNx0000y?Uy0000zÑäN0000*ĂēÃ0000*ĢēÃ0000zñäN0000y?Uy0000izNx0000000000000000000000000000000000",
enderEye: "0g0gd000MðHtzH}8HÓÔZĲŤZğýYô5YßĜYÿ@YÄQWgěWoĉW00000000000000000001y000001jOy0000jQQTw002)ÄäQi002?Ö!X_00x@JĩĐTĘ0xIßĩĐTĘ0x]ĊĩäìĘ02)ñFî_002j]Đ-r000ęOOTĘ000bęhģ00000bģ00000000000",
chiseledRedSandstone: "0g0g7ŀŊWĸĹYİĚHĨĊWęìZĕÁWą(Y00TAJ^|İAÛ+ŋJłÚģÚĞ00ÎAJÄ9*ãļ[tmľăåłÄ.ŌěŀŎþÉËûGÚÓMğĞĝĞŅÿØÛJŒãAJãČüÄ&]Ćö]Ľ|Đŝĕıō|ĢńÚĭŅÂÅsJ]ōľÚĕğÚã",
cutRedSandstone: "0g0g7ŀŊWĸĹYİĚHĨĊWęìZĕÁWą(Y00TAJ^|İAÛ+ŋJłÚģÚĞ00ÎAJÄ9)łò[t9ĭłÚğm%ĜłúĞĽ|įûÞ)ōMĞĺÚĞŅN+łÛ@ō&*r},CòĜăö+ĽFČłÚĞŅ|ĞłÛ]ļ^UĹÛÄýľÚĕłÚĞ",
redSandstoneTop: "0g0g5čTWġJWęìZİĚHĕÎZ5yĹ^yU?AP(ī{CiôPSúÕüú?iĊAý1Aûi]JxïāiÀĊUEüĊìyòÀīUÀAÇúyČEyPÀJUCRĳEJòEĊK?ióMj4B@ÑCiÂAČ^PĀòQüòTo^]Ě^",
redSandstoneBottom: "0g0g6ą(YęìZİĚHĕÁWĨĊWĸĹY5DqJÅi!@0J(úß)ûc8bìđcãĽĬ÷oØ^]ŋýĜĀÁQ$J+0ßm4JÀĕÒēÆÝ*A|?EKp$2pyòrzĝčzJ6tðĘîÞł4N]a}ČœùďFöyt{0ŋúĞē×ĚÆ",
redSandstone: "0g0g7ŀŊWĸĹYİĚHĨĊWęìZą(YĕÁW00TAJ^|İAÛ+ŋĞńĕģÉÚ,yPīąÞåĮePğăÔÑĝ|*_ÚŔÚĴĴØÚĂòĺyâĵŋłÇ)ĴĽĭĲĝĭŁÖRŅDAŅÚńÞÝőĖĶiŒöğÏÆčôÛ$ĳåFÞÈłăÜÙ÷įŐ+",
redSand: "0g0g6ĸĹYĥJWİĚHęìZĕÁWŀŊW4Ċĸ?ĊĂÑĚŁõr8@+9AĚŀFNĺPĊİÓþóEþ^$üúÒNÇKğÇÛiĲ$þ_%ĚbÒiĄÖüÇ5JÉ(ĚÃ(ĊıBoıÙüÇPĞÇÒĎôlmı?laEĊÇEĒú?oò?kó$üÁ",
purpurPillarTop: "0g0g7ĭĔHĢÉYĕőZĚrWąġZčıWúāW4ù^4ĘPNiý+ĨĉMnÚÖ>h%ġAJÏPdRPÒħüFRJPKüF@J^ŉĔÄÏJĒŌA9RJÄŇü+ŉĒÄŇüFÔVĞŉĔ!ÚĞłÒA0(b0ùPNnÛFÁĉMiĔãĺFAăAĚRP",
purpurPillar: "0g0g7ĭĔHĕőZĚrWúāWĢÉYčıWąġZ5MBiÁ_9(ýòKÃ9-ôIŇûò<ěł-û8ęBiKôaĠýòKô6ĠôIŇ_Xĥěł-Ã5MB2Kû9-ýòKû9-ôIŇÃò<ěł.Ã9MBiÎÃ8ĠýòKÃ8ĠôIŇ_Xĥěł-_",
purpurBlock: "0g0g7ĭĔHĢÉYúāWĚrWąġZĕőZčıW42a4ù2%ĞŃ%ĞŁ*ğÊ&ĞőlľÙmĢőlłßmģß+ŔĚ,ÉĚ:ÚĜ:ÚĚÂ?iÁPi0íR4ë^%Ğő%ĞŁeĞŁ%ğÈnÅÙ*ľĒ:ÉĔ*łĚ:ØĜmŒĚ:ÚĚ+ŔĚPAJPAJ",
purpurPillarSW: "0g0g7ĢÉYĭĔHĕőZĚrWčıWúāWąġZ4ùP4ùP|ĞŁPĞŁP+łÂCłĞłÚĞłÚħs1ħs9ĴõĿĴõĿİõĀİõĀĞ_ÑĞ_Ñħs1ħs1ĴõŀĴõĿİõĀİõĀģØĞģØĜ4ùP4ùPP]ăPĞĻPĞłÖCŁĞłÚĞłÚ",
seaLantern: "0g0g[ÂDZÂnY}nYÈ-W}nHÄ-WÄDZÌ-WÄDYãĢWJŢWóőZěÊZē$WĲöYĪÚHė{Yě{YğÊZÿbHãġZÂDYÂnHĮöHľöZĺąZłĆWľĆWľąZĶöZĶöY}7HJŢHĮéHņĖWņĖHŊĖHĺöY^7Wė$WņĕZŊĕZĺöZ^nYŎĦHŊĦWŊĦHė;HłĕZė;Y^7HÄEWŊĖWĮéYÂEWĲöZĪËWģÙZłĖHûbHĲéY÷ŢWĮöYĺĆWPŞHðŁYěÊYæıWPŞW@7H?ŞW04g(ë02a08Kwîîgg]ĉÐ6÷uSòyÒaX$AÁà6|r+Ýňĺĩó4=ì9ĺÕúČ]úpČċïCcĄİĜ×kĐÀčRz^ò#6SŉB!Ä$Èę^ýĮní8ĥí?#m$]ęÏüðĿĚÓ-ŉ*bm)ÕúÏïĭŁĞańí?#Å)ÕęÏļĭŃ02ŋŉ*bmA]ęÏXÓľëeĄőBaÄ$ÆęRüðPCaĤÞČ^UEÂč>[[nĚ4ŔĪĪ]JA]úq*]ÌĚ=ÁőnĮes+ÞŠĨŏ4ħ44ċĠ(ÎxsŋòAgħ11iyKõĊĚÑa(09ë2",
prismarine: "0g0g5ÌāH@DHć;WæőZ=6Y5({ÕIăgiú|Āoí)Ĩc?8^m0wĎAÙRSïĘ^KmAwkāëębÓ)ĳiiÈ}6R5Cj0új9íĿ5F0$8SFíň(Qį$2ûÓCĳÑīħ2(zPþ00þ4{NcúĐ1X1i",
darkPrismarine: "0g0g6<ĝZ/6YMQW*UYAŚH.ïW4Ĉa4Ĉ^xĩsxĩsd^ŃdwĻÂAJÂByKĊĩ0Ċ×CħÙčıcdĨÊdSőÂBiÂBy4Ĉ^ĈĈ^yĩsCĩsdħĻĈxÊÁByÁByĈĈ^4ĈRxĩ$xĩsdSŃeħĻÂByÂBy",
prismarineBricks: "0g0g8ÛőZÿ;HîrZ@DHÈĢHR6YÂÕWÏāY4J]QJî(0BwSz(86wå5g~ōST<2x<S9:y1Bĩ8jÂ1őĊPĪuTùÿĶŢÊ{SiZ3;ÏA2Ñ3ÌÐ4jŉ<ÍŋDûÐŌjŊWťÃŊiÒZJÒBăŀWłņŚÛĽŔâģÉ",
prismarineCrystals: "0g0g6000ßāYğÙYņĕZPýZûrH000000000000000000009w0000ÃQù008ăÚĐ001j^Ŀ000PNS002ĂXJ00kłðĎS0Ďńý+Ň0Ļœđ#02ÉÑJ]02P0000000000000000",
prismarineShard: "0g0ga000ÂÕWûaZR6Zď{WÄÕY%ïWêıHMčYMýH000000000000000001g0000001xg00000MQ?À00006QATg0006ßQÞâÀ000ÏykR?ë00ÔDAQå0006ßyQp0006iDDë0000ÔyÞë0000ÎÞp000008hù000000ā00000000000",
darkOakLeaves: function(n){
var pix = getPixels("0g0g5ÞğW000ĞŒHĂÖYéŎZ0Ċŀ×yUÑùzFĊĂBĚŃ?iJ!0ÃSJÁ|NÈAmİPiĈ0ìpÙXĺ%þŉëkú2yċ{ëă%)sQù4ÒAj%ùÉIĈ2Ý2^ÕĞ9öþİQ8ôÕĐ1wĝq?)İÙüĸÒA]hJô")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
spruceLeaves: function(n){
var pix = getPixels("0g0g6óEY000|)ZĂÖYVVHT4W4wÉwĚ>õíŀĊþŊÓóÇc4bA(_÷(Ç&-ĩcĸ_AĚį$ð9)þÕčĮp8i>4þPwĚŊõĹ_Ċþ_AwÇciÖ$íİ÷NgÓóÉ$þTÑ(|4ě?&-ĩ$Jo)Ěįčľs8mÕ")
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i]*(97/255), pix[i+1]*(153/255), pix[i+2]*(97/255), pix[i + 3]);
}
},
jungleLeaves: function(n){
var pix = getPixels("0g0gb000ÞğWóoHĂÖYĞŒHĒyWņ5ZĩßHĦÏHŖæHŊDW0i2j4)TiOi2NOQ2xRO0Ow00AAO0y02*4>(yi0BÓz(3Mw05ÓS0Qz0yw)A0RÅ3MwA)2]ĂQz04Qx?Ď>>0wSyBÓNS2jOR40Oj2hAQ033N02>)0N000wQ)0M(0Qz4Swxz3>>w")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
floweringJungleLeaves: function(n){
var pix = getPixels("0g0gb000ÞğWóoHĂÖYĞŒHĒyWņ5ZĩßHĦÏHŖæHŊDW0i2j4)TiOi2NOQ2xRO0Ow00AAO0y02*4>(yi0BÓz(3Mw05ÓS0Qz0yw)A0RÅ3MwA)2]ĂQz04Qx?Ď>>0wSyBÓNS2jOR40Oj2hAQ033N02>)0N000wQ)0M(0Qz4Swxz3>>w")
for (let i = 0; i < pix.length; i += 4) {
if(abs(pix[i+2] - pix[i+1]) < 10){
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}else{
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i+1], pix[i+2], pix[i + 3])
}
}
},
acaciaLeaves: function(n){
var pix = getPixels("0g0g6óoH000ĞłHÚĎYĆåZðoH5yPÑĊŋÑQ>CEK$ûwAķÇ5Ī1]þıXA^ëĚyAIQBûUNiÏõXP(k^SīÀëĬc4ĊUõóPwA]BĚÂÎSÇ(mQ|JİóJİ$ĭRNwÊBwÏAER@6ÁXü]XJs")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
birchLeaves: function(n){
var pix = getPixels("0g0g5óoH000ÞğWĂÖYĞŒH4ĈP]kÂFXóxJRAARAČ^cùÆB@ò8@òQNÁEX^{iûBjp0ĊSF2ħBXPA2Á@N^8ü]]ĘRÑČb4XùBh9%üÁxy^xyû$kÂÒiÊEĭIXĞPÑĘ9EXI")
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i]*(128/255), pix[i+1]*(167/255), pix[i+2]*(85/255), pix[i + 3]);
}
},
oakLeaves: function(n){
var pix = getPixels("0g0g5ÖþY000ĢŢYĂÖYâľH0ĊŀùNUÑùz&NĂCRŃ?JJ&0ÃSJÁÞĩÈAðİÛiĈ0úpùXĺNmŉëkú2Nċ{ëăMĭÊQù4ÒĞÃ%ùÉIĚ^À2^ÕĭPöþİQ8óÕĐ1wĝq?)İùüĸÒA]2iô")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
spyglass: "0g0ge000Ņ>YĥĊYtþHNPW×ŢZĉÁWŞðWZZZèŚYđâYÀĈYUĊH(ÁW0000000000000iw000001)Â00000Ô?ïw0006n)Vg000ÎÞà>g000ÿñnÞ0009ďÞyĘ000Ăđi#0000ıĄĴĘ000bÚĳķ0000ĚCń0000bJØ00000dāķ000000ń00000000000000",
noodles: "0g0g5000ĆzYŊ-HZđHĽŝY0000004y1xĚ0Bn9úāiMpb]oüEob{mĈEoaõkĈEoaõk8Epaöü8!Oaìü9!3qìīĉFRŉMĩĉ5SÏMIĉ5@ÑR4ò1@Ñ@4c1gÐ?Č{002S2S",
egg: "0g0g7000âčWĚÿZņ.YŚĄH÷5YVOY000000000000000000009A0000ÃÕë002ċÛù003zÚK00lrÚÊ00młÚ$00młÚ$00młÖ$00kłPÊ00dÂ^Ň001Ğł00000000000000",
orange: "0g0gk00WåķHT0WļŗZęĈY$ĘWřTWÁSWĝĈYéwHťÎHZ×ZZPHťļZZÈWŅhWťĬWÀĘWĬķZąÝY0000000000000008ë00000000800000000ÑEë000001õĮ/iù0000OF^RùXë000*%öÂüXë006ÔMĒÂüśA006ĐM^ÂõśQ006čF^ÂõśQ008čF^ÁćAQ001,đ@OŋIë001)xŖèùIë0008ĉ8Rhg00000@MõÏ0000000000000",
ramen: "0g0gi00W*hYAęW$ňHł4YŖăWŎĆHĨ(WĮsHZħWğúZyīZ;ĈYsÀW-ùHÞ(ZÀŇY(ëY000000000000000000000000xg0000000c>g00000004Î8000000RIzMë00008Âkŏ^{čë00oRùďRkĝ)00oŎkï.ĽŎ)00oş.ĵàą8)001nĥŖçņ6ë0006Ğfèqķ000001ĕØS000000000000000000000000000000000",
bowl: "0g0g8000;ĈYÀŇYÞ(ZSħYsÀW-ùH(ëY00000000000000000000000000000000PAë00iăÖi00đy^?S0ŔAJÚS0ĝĞłBS0ãłÚĒ00bÃ×ķ000%Ĝ00000000000000000000",
mushroomStew: "0g0gb000;ĈYĥŌZĵ+ZĵÔYsÀWQħZÞ(ZÀŇY-ùH(ëY0000000000000000000000000000000000000000001hhg0001iOyxg00jQQ>OB00mÏOOCÒ00nðÓÓÕý00aGGGòÀ000VñäV00000VV000000000000000000000000000",
largeFernTop: function(n){
var pix = getPixels("0g0g5000ÞľWÇâYþPHĖĒZ0000000000000000000000000k00000ĞS0y00yķ0ĞS04ÇaA00yĉMw00Ġ_(Ĉ09ċc!N010ÐÝĈ002õEù00nbðN00ĚČÝĎS0Ċ>ÑJS")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
largeFernBottom: function(n){
var pix = getPixels("0g0g6ZZħéŞZ÷EZĎóHÖĞYÁVW0ČĸÕĜS5oÉÁĩĈgí]Úp82Uı^mĻlEăÞěy!S^}ÂĈgĺ1ã2S0ČįQkķ0>p]ĞS00û%i02Ĳb]oK9AňÖ+J0ÇÇPĐK00ÈÙĈ000jQë0002(00")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
fern: function(n){
var pix = getPixels("0g0g8ZZħÖĞY000ÇÒYĎóH÷EZéŞZþPH00100200sK0200tK0200kS020dćÑ0200{L02dgğį02ÓīUQ)ĩáŐÜĜııÖîśĮûÈ0dLĘŋŁ04Ñĸ0201ğĀ0200)ħ0200nS0200cw02")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
"water0": "0g0g8Īc%ĖĢŔĎĂÚĺ|%Ķ;ŔľËÚZZŔŢŖĕ4üúAùŌPyPBAJBAJA0ÂFy1A2P]JJ?AP]ĊTAiJ4JPAþŗÞJTAJSŀñĀwë_PAJPAÂFAÂQíPPAJPAúPAJPkJFAPA2óPAúzÕawÿşAiP",
"water1": "0g0g8ĢŒĕĖĢŔĎĂÚĪc%ĺ|%Ķ;ŔľËÚZZŔ4üúAÿ&PyPBAJBAJBĞPFyŀBĚP]JJ?AÇPAÇBüJAJPAā:þiÇAĊÉťWÐAĞ{PAJPAÂFAÂQJPPAJPAúPAJPAJFAPBĚóPAJLšı$āŢBJÇ",
"water2": "0g0g8ĺ|%ĖĢŔĎĂÚZZŔľËÚĪc%ĢŒĕĶ;Ŕ4üúAJsPyP?AJBAJCŁPFzÖAĹP]JÂ?AÖPAÖCüJAJòAĂtfiÞAĊÚKÅĬAķ]PAJPAÁPAÂ]JPPAJPAJPAJPAJFAPCĹòPAJ)W^)ùń+JÖ",
"water3": "0g0g8ĺ|%Īc%ĖĢŔĎĂÚZZŔľËÚĢŒĕĶ;Ŕ5CŁFAÒÖĜûÚĞłÖCă]ĊJ|ĜóPkJÚAăÖĞóÚĞóPCłPCĹF$x(ČíP)ò4ÖĨ]ùùÚĞłÖĎĂÚĞłÚAJÚĞłÚĞłÚĞłÚĞł|ĞĹ]üJÚĞłQ÷ÃPxxQČó",
"water4": "0g0g7ĺ|%Īc%ĖĢŔĎĂÚĶ;ŔľËÚZZŔ5CŁFAÒÖĜÃÚĞłÖCă]ĊJ|ĜJPkJÚAăÚĞóÚĞóPCłPCĹByM-ČíP)ò4d2]ëÀÚĞłÖĎJÚĞŁÚAJÚĞłÚĞłÖĞŁÚĞł|ĞĹ]üJÚĞł]IÃPw1QČó",
"water5": "0g0g8ĺ|%Īc%ĖĢŔĎĂÚĶ;ŔľËÚZZŔĢŒĕ5CŁBAÒÖĜÃÚĞłPCăÕJJ|ĜJPAJÚAłÚĞóÚĞóPAłPCĹByMwČíPĞìAö2]õ~ÚĞłÖČJÚĞŁÚČûÚĞłÚĞłPĎĂ|ĞłFĞĹ]üĂÚĞł]IÃPy1AA^",
"water6": "0g0g8ĺ|%Īc%ĖĢŔĎĂÚĶ;ŔľËÚĢŒĕZZŔ5+ĸBAÒÖĊÃÚĞłPCăÕùJ|ĞJPAJÚAłÚĜßÚĞóP)łPCĹB$.wČíPĞìAćı]÷Á|ĞłÖAÂÚĞŁÚĜûÚĞłÚĞłPĎĂ|ĞłFĞŁ]üĂÚĞł]ŏÃPyPwA^",
"water7": "0g0g8ĺ|%Īc%ĖĢŔĎĂÚĶ;ŔľËÚĢŒĕZZŔ5+ĸBAÒÖĊÃÚĞłP)ăÕùJ|ĞĹÖAJÚČłÚĜRÖĞó|ĜłPCĹB$.BAR|ĞìAćı]÷P|ĞłÖAÁÚĞłÚĞûÚĞłÚĞłPĎJ|ĞłFĞŁ]üJÚĞł?ÕÃPyPwA^",
"water8": "0g0g6ĺ|%Īc%ĖĢŔĎĂÚĶ;ŔZZŔ5+ĸBAÑÖĊÃÚĞł?AăÕùJFĞłÚAJ|ČłÚĜRÖĞó|ĜłPAĹBwFFAT|ĞìEĂa]ŁPPĞłÖAÁÚĞłÚĞûÚĞłÚĞłPCJ|ĞłFĞŁ]ČJÚĞł?oÃPAP+JÂ",
"water9": "0g0g7ĺ|%Īc%ĖĢŔĎĂÚĢŒĕĶ;ŔZZŔ5)ĸgČÚÖyjÚĞłAČăÕĄúFĞłÚČJ|ČłÚČòÖĞó|ĞłPAĹBwMPAT|ĞìFg^]œPPĞłÖAÁÚĞłÚĜûÚĞłÚĞłPCJ|ĞłFĞĹQČJÚĞł?qÃPAPriÂ",
"water10": "0g0g6ĺ|%Īc%ĖĢŔĎĂÚZZŔĶ;Ŕ5)ķ0ĊÒÖwjÚĞłAČăÕĀÁFĞłÚČJ|ĎłÚČòÚĞó|ĞłPAĹ?xxPAP|ĞìFiÂ]IPPĞłÖA]ÚĞłÚĜJÚĞłÖĞłBCJ|ĞłFĞĹPAJÚĞł?qÃPAPiiÂ",
"water11": "0g0g7ĺ|%ĖĢŔĎĂÚĪc%ĢŒĕZZŔĶ;Ŕ4ĊIÞþŕ]ùaPAJÎJÂQ/ĲÒAJPiPFkJ]JÇPAÎFAJAĚP$úØAJłBA>ÑþPBóĿÒAJQJĿPAJPyÇPAJ?AJÙČPBAJÒAòAJPPAJ%ĢıAJłn+İ",
"water12": "0g0g7ĺ|%Īc%ĖĢŔĎĂÚZZŔĢŒĕĶ;Ŕ5)ùAĊÑÚwbÚĞł(AăÕÆÁF+łÚČJ|ĎĺÚAóÚĜó|ĞłPkJ?wxPAPPĞìFyJPgSFĞłÖA]|ĞłÚĜóÚĞłÖĞłB+JPĞŁPĞĹPAJÚĞłQĀÃPAÁûiÂ",
"water13": "0g0g7ĺ|%Īc%ĖĢŔZZŔĎĂÚĢŒĕĶ;Ŕ5AùAĊÉúCaòPAckČI689PAJAúÂPkúAJJQóÂPAPkJ?wp^AJ^]đFyJPgS!PAúA]ÂPAJQóJPAóPAB]òPPy^PiPAJúPAAþUPAÁç2Â",
"water14": "0g0g6ĺ|%Īc%ĖĢŔĎĂÚZZŔĶ;Ŕ5AùwĊSÚEaÖ+łNkłÕa89+łÚČú|ĞĹÚAJ|Ĝó|ĞłPAJ?y1PĜJPĞòFyJPiSFĞłÚA]|ĞłÚĜJÚĞłÖĞłB+òP+ŁPĞĹPAJÚ+ŁAĀÃPAúþíÂ",
"water15": "0g0g8ĺ|%Īc%ĖĢŔĢŒĕĎĂÚZZŔĶ;ŔľËÚ5AùwĊ_úqaòPAmýAId]čPAJAPJPiúAJÂQóÂPAPAJ?y1^QJP]òFyJPySCPAúAIÂPAJQJJPAóPAB]òPFy^PiPAJúPyAùüPAúğíÂ",
"water16": "0g0g8Īc%ĖĢŔĺ|%ĎĂÚZZŔĶ;ŔĢŒĕľËÚ0J^900ÑI1ÙĞłÂ2łÒ#2ëĞłÚJ0ÚĞİÙJ_%ĚT%ĞłAJPwùëBĞPAĞSQJPAJy0ĞłÙJR%ĞłÚĚPÚĞłÒĞł0ĞßAþŀ%ĞİAJPÙĞŀ04_AJ]ûĈP",
"water17": "0g0g8Īc%ĖĢŔZZŔĺ|%ĎĂÚĶ;ŔĢŒĕľËÚ0i^dëSXX1JPAÖ3Aï/ěÆİAJi0JP9ùJ{NRPCPxAJP0ù1C]PAį]ÑJPAJr0İAùù]NPAJRPJPAJPAwįÉ4āxJPxAJPùİx0ë{AJ]_ĘP",
"water18": "0g0g7Īc%ĖĢŔZZŔĺ|%ĎĂÚĶ;ŔľËÚ0i^Öë]X61JPAÖ2Ñï/ăĔPAùë3JP9ùJ{CRPCPxAJP0ù1C]PAį]ÑJPAJr0İAùù]JPAJ]PJPAJPAwįÈ0ā9JPxAJ{ùİx0ù{AJ]_(P",
"water19": "0g0g7Īc%ĖĢŔZZŔĺ|%ĎĂÚĶ;ŔľËÚ0i^Öë]X61JPAÖíÑï!ĀĔPAùë3J]PXJ{CRPCPxAJT0ù1C]PXį]ÑJÑùJr0İAùù]JPAJPAJPAJPAAįÈ0p9JPxAJ{ùİ94J{AJ]_NP",
"water20": "0g0g8Īc%ĖĢŔZZŔĺ|%ĎĂÚĶ;ŔĢŒĕľËÚ0iRÖë]X01JPA9íÑï!ĀĔpAùõ3J]PXù{CRPCPxAJT0ùħ6]Pùİ8ÑJÑùJÆ0İAùJPJPAJPAJPAJPAAĩÈKp9JPxXJ{ùİ94J{ùJ]_Ě{",
"water21": "0g0g8ĖĢŔĪc%ZZŔĺ|%ĎĂÚĶ;ŔĢŒĕľËÚ40aÖJ1ëJ]JPA$ëAíĒòĔPAùs_JP0ë242P02PA009Ñ2ŀ2]4JP0w0Aù094PAù00JPAJPAJPAJPA0]qÑò4JPAë04ùP0w04ù01_Ę4",
"water22": "0g0g7Īc%ĖĢŔZZŔĺ|%ĎĂÚĶ;ŔľËÚ4JRÚëSXg1JPA0iÑðĒëSİAùë0J>cXù{ð]PCPxAJSKùĿAįPJP94JÑùJSwİAùJPJPAJPAJPAJPAC]È4ācJPAXJ{ùİ94J{ùJ]_N{",
"water23": "0g0g6Īc%ĖĢŔZZŔĺ|%ĎĂÚĶ;Ŕ4JRÙ0>Xg1JPA0JÑCĒħSİAùë0JjcùùPðP9CPxAùSKùĿwįPJ]P42P(ù]wİAùJPJPAJPAJPAJPcJ]R4ācNPAXJ{ùİ94ù{ùJ]^Ě{",
"water24": "0g0g6Īc%ĖĢŔĺ|%ĎĂÚZZŔĶ;Ŕ4JRSgRÑg1ÚĞłwJÉC^ìSĞłÙë]ÙJłÙJPÒĞİ%ĞİAùÀSùù0ĞPÚĞP409AëPwĞłÚJPÚĞłÚĞłÚĞłÚĞİ%ĞQ4þĲ%ĞłÑíPÙĞŀ4ù_ÙJ]Jí_",
"water25": "0g0g7Īc%ĖĢŔĎĂÚĺ|%ĢŒĕZZŔĶ;Ŕ4Č>0JÐQg2PAJwüÂ@Ń9XČJ]ùPPiJPi^PAòFAúEJÆKùŀ0ČPPAPA09EëPAČJPiÁPAJPAJPAJPAòPA|4üóFAJQí^]ČúAùÂPi]G2^",
"water26": "0g0g6Īc%ĖĢŔĢŒĕĺ|%ZZŔĎĂÚ4JR0JsČg9ĞłÚwJÖy-94łÚČùPĜûÚĞJPĞłPCłPAùoKùŇcJTĞŁP06ĨAë]AłÚĞJPĞłÚĞł|ĞłÚĞłPĞŁ_4ă|+łÚČ0PĜłÖAþ|ČJ0ß2P",
"water27": "0g0g5Īc%ĖĢŔĎĂÚĺ|%ZZŔ4ü]0JsQg9PAJAüÁC-94ČPQëP]JÂPi^PAòAüòAJoKùŇcJTBAT06ĨAë]AČJPkPPAJPkóPAJPAòPA_AüJFAúQ2P]ČúAð^Aù0Û2P",
"water28": "0g0g5Īc%ĖĢŔĎĂÚĺ|%ZZŔ4üP4JsQJP?AJAüÁC-9AĊPAëP]JÂPi^PAPAüòAJ0KùŇgiTBAT071Aë]EČJPkÁPAJPióPkJPAòPA]AüJFAúA2P]ČúA8^AùĿÚíP",
"water29": "0g0g7Īc%ĖĢŔĎĂÚZZŔĶ;Ŕĺ|%ĢŒĕ4üò4JsQJP?AJAČÂCóPAĊPAëP]JÂ?y^]ČPAüòAJS0úÆĔiTBASĈaĨAù]PAJPAÁPAJ]J^PAJPAòPAIAüJFAòA2P]ČúDÄaAúÕ2íP",
"water30": "0g0g6Īc%ĖĢŔĎĂÚZZŔĶ;Ŕĺ|%4üúAJsQĊPBAJAČJCëPFy9AíP]JJ?y^]ČTAkúAJT0ăÆĔiTBASĜaŐAù]PAJPAÂPAJ]JPPAJPAúPAòEüJFAòA2^PAJyĽawùĿ0iP",
"water31": "0g0g6Īc%ĖĢŔĎĂÚĺ|%Ķ;ŔZZŔ4üúAùŋPyPBAJBAJA0ÂFy1A2P]JJ?y^]ČTAiJAJP0þŏÞJTBySĜ7ÆAù]PAJPAJFAJ]JPPAJPAúPAú]üJFAPA2^PAúyĿawúÕAiP",
"netherPortal0": "0g0gO]bĖÕ{ŚÝË)Ñ;ĚK$ĚQbÚÀrŖ;aŒëöĞ-aF;aĒUs(ąe-XĕĞIĥĞáÚ)-aÖ-aĒSb${bŖäéâSaœäÚâÙ{Ś)aEÆs(Ñ;Śąu-Ê$Þ-aEXąĞèéâüŕ-K;Ě)9ŎÀs(IĕĞÆ$ÞÙÊŚĀť-ëąĞ{bĖÆsÞ-aŒùńŞèöâùĴŞ;aœč=å;b$ÀbŖ0gîgÀ3oÞ8oJô(ķĵ<4@]úë]4ĲÀj1V2ĶÆĘľPXĩ{*ĮTûĂ86ÉcßÊ?,ËdŇķPApèMķUÁīík9S4yoķùèM÷9kS2,lSġBÝUĄ{Þ[ÊPì?gp9MÒ{1Ë8ŐĲtgQüÁĐéÂëõŜĩÝÂĭlÆûæQŐÊPĴP1ÂĐAēĒbbeĲ?B.b$ő5s3í9Ňt{łċ03Đ^AĺÒyÃÂTÜkÅ(Ãhĺ|1Ì9DÂIę1ÊĤü5(íĬ4ę",
"netherPortal1": "0g0g.SaœÆsÞÕ{ŚÙ{ŚÕ;ŚÀs(]bĖÀbŖ-aĒÝË)QbÚ;aŒÆ$Þĉu-èéâõĴŞÑ;Ě;aĒÀrŖ{bŖ{bĖK$ĚUs(ùĴŞäÚâĉ&å-aFáÚ)ÙÊŚÆs(äéâSb$;aœXąĞÊ$ÞÑ;ŚIĕĞ-aÖ-aE)aEëöâSbÚáË))9ŎK;Ě;b$Āť-IĥĞ-aŒëöĞ-9ďèöâüŕ-XĕĞüńŞQbĖëąâ0gîgÁísëòEĚĳ)ŇĶTi6oXûx?ÄËðP%čăÙÔr%ďÌtĘćìÆÏöŜÑ÷9?%FôòĝÒ%pÃAĩDFŠ{ĈĭúxÏh|ŏĂAĬÿAòðqEħwoRCúŉEĚódÅĒ&ğÏBAĔ}ľŁRŒý!Ŀă5řėĈĤ6{#M(ÒþEĤJïğıÇØě&Ěó8ÿŌ~]Ïôo^wÚRÆŚóĝ<ăÜÂôpöUEÚÞĎÁýâŠ@ÚęôŃ5ĜňiiéĊøcđ^ĀÞQÛBăõÓİ%Ċô",
"netherPortal2": "0g0g;;aœUs(K;ĚÝË)Às(]bĖÑ;Ě-aÖÊ$ÞQbÚ-aĒ;aŒÙ{ŚùńŞąe-äéâ{bŖëöĞèéâĉu-äÚâSbÚõĥŞëąâ)9ŎÆ$ÞùĴŞSb$K$ĚèöâÆs(-9ŏ-aFÆsÞÕ{Ś-aŒ-aESaœXĕĞáÚ)ÀbŖ{bĖ;aĒüńŞÕ;ŚXąĞõĴŞÀrŖüŕ-ëąĞIĕĞIĥĞ;b$áË)ëöâüŔŞ)aEQbĖ)9ĎÑ;Ś0gRcT@kß3AĊĳ)M÷;ęķkĈ?t36?AĻUĉmclĻ%ðÈ4ŚrÚĮRåÀËwĚĭBŉóg,vAĠxòŏŋCÁĩĀìŋ$ìı6ã[cÂd(ĚĐČŗŌđaŃM4$üĊ?ā?ď&4$;ù@ÙĊıÓłāÙĠÏhģĴÀĉİRwĽdĜ4Tġ4Âãİks%CQ4dRPçsėç$ĬsÄîåKĬĹjĎľxÉT%X&ŝďAĉsÑĂùNé!ÙĜ,]ĦgÛ}Ó(ĦôEúÇPī3œËąýřP",
"netherPortal3": "0g0gM;aŒÀrŖUs(Æ$ÞèéâSb$SaœÑ;ĚÊ$Þ]bĖáÚ)ùĴŞK$ĚĀť-Õ;Ś-aĒ-aEQbÚäÚâÝË)ĕêĢäéâ;aĒÆsÞXĕĞÆs(-aÖIĕĞXąĞ;aœÀs(èöâ{bŖÑ;Ś-aŒëöâÙ{Ś;b$SbÚ)aEIĥĞ)9ŎëąâÕ{ŚIĥŞëöĞÀbŖ)9ĎüŔŞ0gîgw3kÎįAÁ^$ĨĴ-ś2Q26Süóh*l?ÒĿVýV1Ĉă(ĻĸQXľÑřsÑ0cQ(täĮølĎíMúÈBċĪè*ĂkÝ0ílĽ(ùĴðCîæ)Ĭ0B{EJApČÌêj^pďČïm[?Č?dĞĮålīAřÉuU5ANduFĆÊÇŇV.S@a4@JÇêN?äĊì6Ēuþ6ŒCOĈA+$^ķú9,u0þjĠşasÀ&x.~pĊÊèU9mŢóĔa?0Á{ħá}ÒoŋÈJK",
"netherPortal4": "0g0g+-aÖÀrŖ]bĖUs(õĴŞÊ$Þ;aĒ{bŖ;aŒK;ĚÀbŖQbÚÀs(Ñ;ĚIĕĞÆsÞK$Ěąe-Õ{Ś-aĒ{bĖSb$)9Ŏäéâèöâč=åáÚ)IĥĞÝË)Æ$ÞĀť-Õ;ŚùĴŞ-aESbÚÆs()aEüŕ-ëöâáË)QbĖüŔŞèéâ-aFÙ{ŚXąĞSaœäÚâüńŞIĥŞëąâ-9ŏ-9ďÙÊŚ0gîgÁñoí^$àd-śhP)ĻVÀįÆĝľÎãÈ%ÁÉÞľćwÔKkŋñsĭøsKÅSĚtÁĸôM0ĺ&i3cßĺ8Ñĳ*Ļį$Ŀô5ĿįRA4)95NÄôUåùĄÞPUa5ÚĒ×&ěnèzÙxNĲöô?áĠĿÀÐ4Þ*ôĠzQÖÁídÀ7Ħĩ#Iĳo$1ĴĝßĨlēĨtģńIģ×9ôaE:Þıŗĩö7b0!ùsîqÕB{T5S&?%ÕõĩzRĝcI_węîäăùÁ>Ąql1",
"netherPortal5": "0g0g,-aÖ]bĖSb$K$ĚüńŞÙ{Ś;aĒÀrŖ;aŒÆs(Às(Us(ÝË)XąĞÀbŖÆsÞõĴŞ-aEÕ{Ś-9ďèöâáÚ)áË)üŔŞQbÚÑ;Ě{bŖ-aŒ-aĒč=åÆ$ÞÊ$Þ-aFSaœ;aœÑ;ŚIĥĞëöĞäéâ-9ŏÕ;ŚëąĞIĕĞëöâ;b$ąe-SbÚ{bĖäÚâQbĖ)9ŎëąâK;ĚõĥŞ)aE0gîgÁñwí^8iĳ)ŊķkX^4kí{ĝlÆVļFíöÒĉ5ÚĩËd5Ì.ďćÕ1Ĭsm3Fŝq;ßÉÏ0b5Ďx46ĶcŉsåŗĀ5ĊįægľÓCŊêP^ÎđJkÞ{yßĐČĨ!Ï6õdXõxĭqEīï;hĬ6ãēcëxÏħŔlĚeÑD7căëpóčĦãćÁÁĮéEĨ5Á[ÕåØ4Ä_äč|JğćéœL1ëŀBôŋĔs_$ŗÁģwàĀëLK0áFëx8í3ĻÀñ×ŠlbÏĆ",
"netherPortal6": "0g0g*-aĒQbÚ-aÖUs(XąĞÝË)]bĖ-aEÀrŖÊ$ÞèöâäéâIĥĞÕ{ŚSb$Às(Ñ;ĚSaœ)9Ŏ{bŖĀť-XĕĞK$ĚÆsÞÀbŖIĕĞ;b$;aŒĕÛåùĴŞÆ$ÞÆs(-aF;aĒK;ĚëąâSbÚĉu-áÚ)Ñ;Ś{bĖëąĞÙ{ŚõĴŞÕ;Ś-9ŏáË)QbĖäÚâëöĞ;aœ-aŒüŔŞ0gîgÀðs0Ĩoí^$i{)Ňø4XhP*bSļÄÊÓlÆŝPÖěÊTĺÌSN3oDŅKìùÇÞûcÎë63î-KÁoÝ8cjĉCxðcÔłêlŊ=@ĬÈÇûcÒöIŠďX!F!Ēı4wŐĘj|2ĸIyČg)hĖ×ĻĬÇĠL4ŊŌāęĭęjûBōJ8Î5ow?ĂĈŅäXe75ĆåŠô55ÿđÐÞĂÏ×w*ìĜnĊÊÎýčOŅ{OJÛ0×ēA÷-xćĈÙĨK88ĹĪðÙÏİQzķ",
"netherPortal7": "0g0g,-aÖ;aŒ-aĒÀs(XąĞÝË)QbÚ;b$Us(K$ĚÙ{ŚäéâÀrŖëöâÑ;ĚSb$Æs({bŖÆsÞ;aĒč=åXĕĞÕ;ŚëöĞÆ$ÞüńŞÊ$ÞđÌåüŕ-Õ{Ś]bĖ-aEÀbŖäÚâ{bĖSbÚ-aŒSaœąe-IĕĞÑ;ŚĀť-èéâQbĖáÚ);aœ-9ŏ-aFèöâÙÊŚ-9ďK;Ě)9Ŏ)aEáË)0gîgÀ60ß1oú^$jd-ŗù?yÃ0ĬlBÒĵP25MðÈ;ÏăÇĮÈ-ĮI5şw?ċ5XĀĀQŘċN]ĳ÷AĆQ3Īq4@-ŏòóÀĭc0ĲwÕĽãÕÀxiPá.İ44ďió?QDĒ/ĚĬ02gåÏmđnĔĝś^Knĭ4mlkŢð-ÔõìŊŖèÎÄIk^ĨÏeTkðrmĀĉD_;ŊaEíĘXÂ}xŋuįÓJĴi4gīõpŊŖÿQ}.Ňhü3w?ŇØ(tÆÄħ~;ÕÈ;śã",
"netherPortal8": "0g0gO-aĒ-aFÀrŖIĥŞÝË);aŒ-9ŏQbÚUs(Saœ]bĖK$ĚÕ{Ś{bŖáÚ)Ñ;Ě;aĒÆ$Þąe-äéâÆsÞQbĖÙ{ŚõĥŞèéâK;Ě)aEÆs(Sb$ëąĞÀbŖÀs(SbÚÑ;ŚĕÛĢùĴŞIĥĞäÚâÕ;ŚĀť-Ê$Þ-aÖèöâ-aEXąĞ)9ŎëąâëöâIĕĞXĕĞ{bĖ00RcS5oß9Eę4(Ã};á2tj50Aû$Śf$í4FQįUïÿÎAÇgyó1ĎĩÞjĲáŞõEÂò)ÁįkGĴs1ĩsĊĈKĮĉ82ï)lmê1ĽizøÀAÁ(ĐĶ16ŋþÖī*ĪÃÀČŏČnĶtŞĐĐìĽmĚh!6Ąë0Ĕ-ÁögàÍUď%ČàōÙÃÛ-ĝoQďĄkıxhjBuñĳhĚŖgśÝ%ī^Čßí<[ėīòĐÝàÚCĤĐ;æĮk27ExÊÀÈłõňÊkàįsGĺ",
"netherPortal9": "0g0gM-aÖ;aĒ)9Ŏ{bŖIĕĞK$Ě-aĒ)aESbÚ-aEÙ{ŚÝË)Us(Ñ;ĚÑ;ŚÀrŖSaœÆsÞÊ$ÞÕ{Ś;aŒõĴŞäÚâÀs(áÚ)QbÚëöâÆ$ÞĀť-ùĴŞÀbŖSb$Õ;ŚõĥŞÆs(äéâ]bĖèéâč=åXąĞ{bĖK;ĚëöĞ;b$-9ŏèöâëąĞ-aFIĥĞ0gîgÁësëİwĊôk3d-śhdAĻoĬÄÊĹľKĺĲÒãøËĚĄ%ĺ^g*uÀûņÑċKïEċÑÔĪËŞîoì{ù9AÁýŉüċzÊ7ŀèÐŉúùŊ!Ð^&Pn+FŇomŃKňblûŁMþdoüĀèİ5âDłÀĂFdŜpÑ3!đRÑ!>ŉÓĞ[ęü?^SĿ$ÄŔËùŀé!dĠĪÆê@^ýCıëÁV?ûvB9A{UÔÎĞyÀmÜùÓ~]*AxQÇyP3P0øħĜ1BJøĊ>B",
"netherPortal10": "0g0g*;aŒSaœ-9ŏ{bĖáÚ)K$Ě-aĒ)9ŎSb$QbÚèöâõĴŞUs(-aÖ]bĖÆ$Þ{bŖÀrŖÑ;Ěüŕ-ÝË)Ê$ÞÆs(äéâÕ;ŚÙ{ŚõĥŞëąĞëöĞ-aF;aĒÕ{ŚSbÚÆsÞëöâ-aE)aEäÚâüŔŞK;ĚÀs(QbĖIĕĞąe-ëąâÙÊŚ-9ď;b$XĕĞÀbŖÑ;ŚĀť-èéâ0gîgÀ6sí@cĊī(ĺõ;řÀQQIpAĻSŜÄËîïAĭc?ÄÈËęÊÖ1÷âĺĆBŜlÚúÅ-Ee(1ÁáýiQÑcä1ÎòxÅ/Ne2>hBÐnþÖīÂóÎ(ıď03ŒgÅikĩÙ-ŌĹ)ÒăäJfāyÎ0æcAŇgwAÚèăòèMÄĤîċõûhé3üÁ6ÝĈÐë1jü$ÊU0ŏNĔĩ?ÓmOĆŚìoù8ÎüáiíJá×0Bŉ}MKwAjį4šeÀ0÷hù6õŌP.8×",
"netherPortal11": "0g0g*;aŒ-9ŏQbÚáÚ)K$Ě-aĒ-aF)9Ŏ]bĖ-aÖXąĞëąĞ{bŖÀrŖÑ;ĚÙ{ŚÊ$ÞõĴŞÆs(Us(áË)ÝË)Æ$ÞÕ;Ś{bĖäÚâèöâäéâÆsÞIĥĞ;aĒSbÚëöâ-aESb$Às(Ñ;ŚXĕĞëöĞÀbŖ-aŒĕÌå;b$;aœÕ{Ś)9Ď)aESaœIĕĞK;ĚùńŞèéâQbĖ00RcT@sy98ĊĪ8ûc)Ňõ)Ř094~xAĳÁÃÄ0ĬĿÇýÈÚÿtáĮIAÃSéĠmF3ıaoċÝĬĳ49fÇŋdlŚŃüŌÓ(äďklöòī3ĂÁfcëjPCþĈzđh*}<Nl8òù2Ča0!īãħdäÆĳwEĀyĺlU#í;ìilŉxX0IhÐ>ĚMBÆÂLky$ħR3ĦēœQ]ĄÆõßSÿįmxRĴüĂ=;Ĺkû×w2LĹ-õaz0līĴ!ŘRhÀxĠzR)T(",
"netherPortal12": "0g0g+]bĖ;aĒ)9ŎSb$Ñ;ĚÙ{Ś;aŒ-aÖ{bŖQbÚ-aEùńŞëöâSaœ-aFSbÚUs(ÀrŖÀbŖáÚ)ÙÊŚÊ$ÞùĴŞÕ;ŚÆsÞëöĞXĕĞÆ$ÞèéâÕ{ŚÝË)K;ĚIĕĞõĴŞèöâõĥŞK$ĚüńŞÆs(äÚâXąĞQbĖĀť-{bĖ-aŒ;b$ąu-č=å;aœüŕ-äéâÀs(-aĒ)9Ď0gîgÁñ8í^wě5)ŉ~SShP*61Vÿpë8ÒČSpm0ÚĮÌlŝwX1İsN1eEľ÷[ĈQĈļUXħEÎÌÙ*]8ÑľXÅÒQyÑsáødŘÌåāďĊúJ0Iroú!VğÑã^Ņo9ĸ4ŘÎĘŘķ%ňëeıĴĜëoĔŉÆUíòäñÆsÑ7-(9JScù7ĖKĉî4O?þRÑAjÃĥcgÏğÞùhëĞĘ@ć$ńh5Ď#@60J62S91$śpÞhëÚ8hŗĩĻ06TVÎ",
"netherPortal13": "0g0g-]bĖ;aĒ-aÖSaœÀrŖÑ;Ě-aESbÚ)9Ŏ{bĖĀť-XĕĞÕ{Ś-aĒ-9ŏQbÚÀbŖUs(äéâSb$Æs(Ê$ÞK;ĚèöâIĥĞK$ĚÆsÞ{bŖëąĞąe-)aEèéâüŕ-ùńŞÆ$ÞëöâëöĞ;aŒ-aFäÚâõĴŞÝË)ùĴŞ-9ďÕ;ŚÀs(Ù{ŚáÚ)áË)üńŞ;b$;aœQbĖXąĞ-aŒüŔŞ0gîgÀĭ8TįAĊĳ)ŊĶ;īhhxÃÁUþ<kİPàĺ41jVð?lĎŃář7äřR|şlðEŋÙŐ{Mkëā.ĹgŜÉäŠĳĊĀő2Ĝœ)łÒ=ŋïĦþĀâ0ë|rī13tg5Uď0q)aÚübęıÀV&ŗ[7MB5kÁ;wh×ĸûĎŀŔĀi~40ĶĢßÛQŚtÀÖ[eÇÖãzŉ0ķÂĐÇÉ1:óIŀác3ÒČģÏÒąU:ØSÁĚR2ň0<l|aŋþŃ9~?úįxĘ7ÆıË",
"netherPortal14": "0g0g,ÀrŖSaœ;aŒSb$Us(Æs(QbÚ-9ŏ-aE)9ŎĀť-ëöĞÊ$Þ;aĒ-aĒ]bĖÝË)K$Ě{bŖëöâÙ{ŚÕ{ŚèöâüŔŞ;b$-aÖÀs(Æ$ÞXąĞ;aœ-aFXĕĞĉ&-ùńŞIĕĞõĥŞ-9ďÑ;Ěäéâč=å)aESbÚäÚâIĥĞK;ĚđÌåáÚ)-aŒÆsÞ{bĖąu-õĴŞĉu-Õ;Śüŕ-0gîgÁñwSİgĊĳ)ŊĴp4SP)~lll)Ð>ÇÞĀÒċĿSĜÂ?ěĺÞyËäÎñdşcè[xpŇU?ĠĂAÕċkŜ@ùŜćÌÇď=óUsCíeĒùT4ôĔřÖc?i1ģx1wfT1ă-Š~čFÚ8y5ÈŎRcÓė9s(hûħjj@ýlĂsŋ@-ŢĨRÎÀ]rĊÛëð8wùËĞM<ŊýįĪø;FàÙàÂcřeÀĔ4ĩËrxüÈÖęĐ9ÁÂ;īP.QłXŗð<jŅwÎîĽŋ+",
"netherPortal15": "0g0gOÀs(;aŒ-aĒSaœQbÚÀrŖ-aE-aÖ{bŖëöâùńŞÆ$Þ-9ŏ]bĖ;aĒÙ{ŚUs(áÚ){bĖÕ{ŚÑ;ĚK$ĚK;Ěüŕ-Sb$ÝË)õĴŞÆsÞIĕĞèéâ)9ŎõĥŞXĕĞ)aEÊ$ÞÀbŖèöâXąĞÆs(áË)üŔŞĀť-IĥĞäéâëöĞĉ&åSbÚ-aFÑ;ŚëąâÕ;Ś0gîgÁ6c0[wJô(j}gŚĴTiĹ|?Ä8Tī?ß2sð1ÒĎĬU>Êáñì8ĺ@hľĬë7Å2jË&Cċ9òBÛÖīåówč^ĄSãj8Sxiģj<ěÙÞ7X43īÛzİKĸoÓ3?sUdk4ÚcÞJâùî4S25>ļkàÂā0|T]bsBdĠìĨ?įŉ)kÅRŗ]KxĻËÃögxĻĒxĿgâ^Ùxë1ĠRQč]xÈVĤlCĨR75)ħlÏňt;ÄêØXKÄx(STÂÊČ",
"netherPortal16": "0g0g+Æ$Þ{bĖQbÚSb$Us(QbĖ-aÖ;aœÊ$Þ;aŒ-aĒXĕĞáÚ))9Ŏ)aEäÚâÕ{Ś]bĖÝË){bŖÑ;ĚK$ĚÆsÞ-aFSbÚùńŞÀrŖč=åSaœIĕĞèöâ-aEõĴŞüńŞÀbŖXąĞĀť-;aĒëąĞëöâëöĞèéâÀs(Õ;ŚÙ{ŚáË)K;Ěüŕ-Æs(Ñ;ŚùĴŞĉ&åäéâąe-0gîcT@sí^0ě1)(÷8śh?AĺÁVXE*Ŀ%üĭpĊ[PĘshkńåjPEQņKįj<-xòśÐT9yüzŊwñú.pďĈ6Ñ×ÄuEU@ßĀ]ÁČÐ&ďĪBÏh0īĆBgĿ(Ĝŉ*Ďñ}ĝxÏÁû^ĩód)ıCĺi×ÀĀ@Ňúx_ħèýÝ@ďİĮy4eUđÖÞúQĊJĴRíÖŠÙĸÁĀBçzwċúħïŌÂ5ú?]įAâØ10|ýbq5!ÿAĭØĻëRdgÿ!ĊP^Ŝb",
"netherPortal17": "0g0g/Ù{Ś{bĖ]bĖSb$-aŒ-aĒQbÚÊ$Þ-aÖÀrŖÝË)Às(-9ď-aE;aŒäÚâèöâäéâ{bŖÆs(èéâK$ĚÀbŖIĥĞáÚ)č&åÆsÞSbÚëąĞ)9Ŏ)aEõĴŞÕ{ŚëöĞëöâùńŞIĕĞüńŞùĴŞXąĞ;aĒÆ$ÞõĥŞ-9ŏUs(ÙÊŚĉu-Ñ;Śüŕ-Õ;ŚÑ;ĚK;ĚIĥŞ-aFáË);b$QbĖĀť-0gîgw?oß5AĊô(Mö-ś2BkûÁVíkÐe?Ýökx}ÎJ?Õ+ıÞÔ>.)ĆdñĩìEÏ]Áċ0Šj-ÓBu9ðkADÎĐňCìùwwËd5ļČKĉđ!Ī.yĩuiĈ-z÷!KðáK@ĚĽ&cóĭëċöpĊį.kLs(ï8Ýí4c9äŏM9z]!@ĂcÊďČÂ9AÁàĹĮð_ÃĈŀď}ĈõøĘňÙ2Ĩ?!/GŊoļ-œU0Ċń-ČÙęmI.}Kăl>-lIyı8?èĈ",
"netherPortal18": "0g0g/ÝË){bŖ]bĖQbÚ-aÖÆ$Þ;aĒÕ{Ś;aŒÀs(áÚ)SbÚ-9ŏ)9ŎäéâÊ$ÞK$ĚSb$-aF-aE-aĒĉu-ÆsÞÙ{ŚÕ;Ś{bĖëąĞÑ;ŚÀrŖùńŞèöâXąĞSaœëöĞIĕĞèéâõĴŞĀť-ÀbŖëöâUs(IĥŞ;b$XĕĞ)aEÑ;Ě-aŒQbĖüŔŞK;ĚÆs(ÙÊŚIĥĞõĥŞùĴŞč=åüńŞ;aœ0gîgh@cÞIAĊô(wöwŊô8Ĉ~.0íhkúEĈö{lkFÂ@ÆíľKAĪd6U?ãìÚĪó5gńTŎĽë-ÏÆ8ĩhİBÌÖıĉg÷gwĳdŁPĈóëEj!|ùĈ=A5gM8ËĈŇ)wúkâŒÒ#3ĝģX99Ĕëa[=ŗüxa3ĥGĽÂ1ĮĈû432RÀõÉÇTsBMfćAĭÝ?E0ýkĠQ0ĈìEË4IĴďbeńmë:Í3ÊXwďìÉÏUwĕıŉĻpgDkŌý83ÒĮ",
"netherPortal19": "0g0g,áÚ)ÆsÞÆs(]bĖ-aĒQbĖUs(;aŒK$ĚSaœSb$ÝË)Õ{Ś-aEÀs(Ù{ŚáË){bĖÑ;ŚÆ$ÞèöâÑ;ĚSbÚ)aEÊ$Þ{bŖäéâüŔŞK;ĚÀbŖ-aÖIĕĞXąĞäÚâëöâÀrŖëöĞèéâ-9ďQbÚõĴŞĀť-;aĒüńŞ)9ŎëąĞ-aFXĕĞÕ;ŚÙÊŚ;b$-9ŏõĥŞĉ&åĉu-0gîgÁñcí^oěa)ŇĴsś3?yûÁVòAâıKĞ|)M7ÖěX-ĹýÝÎaE7ÌdďĪ{-fcOĈÄoð@(qßP>tÿŌ=-_{ĊĈgÓÓĆó@-Pļ$nĒæ.ĮÄĚpĐďX&FĮĘNó<ř%÷ĉDpÂÓĄĞÛušSUk|D0>EĭċièÚUÎ4yęîhŌVÑĉįÑľIÕj[{Rí|M&åŊĀ/æĀÕißy24siĭ@ÝENJOgĴ6qř7EŤ_èŝúÌÞXu*Į3Ðļ",
"netherPortal20": "0g0g*IĕĞÆs(Ñ;Ś{bŖ-aESb$Õ{ŚQbÚÊ$Þ;aĒÆ$ÞÆsÞK$Ě-aFÀrŖ)9Ŏèéâ]bĖÑ;Ě;b$Õ;ŚüńŞ;aŒ-9ď-9ŏ{bĖäÚâèöâ-aÖáÚ)Às(ÝË)ÀbŖäéâëöâUs(K;ĚëąĞëöĞXąĞõĥŞùĴŞSbÚQbĖÙ{Ś-aĒSaœüŕ-)aEĀť-õĴŞùńŞXĕĞ0gîgÁñwÏ[Eě7)jøkÑh5AĻUęÄkVĮ(īÆÇû?ÖěĄQĻÂPlï?ľþ.Túc,ĳåŏxw8Iõđg6ÄútŐë4Gņ$MŎÇAQ@ó}dÎ^ê,9hőïpÃ#)àİĚÐĄ<lĕ^ÖvöÏÛäX~dśÊđbņùČÝlB3ÆñĵsGŖé$saù[+Ĺz/Ōõ5Òóoìm4ăî-hsĝįįEáįĆīĸNĪ%ĜīċQGŘHzsÇCı!KÄ?ţņéńehÕĽQ;%RJì",
"netherPortal21": "0g0gOIĕĞÙ{ŚÕ;Ś{bĖ-aF;aŒK$ĚÀs(Ê$ÞÆs({bŖÕ{ŚÆsÞQbÚ;aĒK;Ě]bĖ-aĒ-aŒèöâSb$-aÖ-9ŏSbÚÆ$Þ)9ŎáÚ)-9ďUs(XąĞäéâèéâäÚâÀrŖÑ;ŚÀbŖXĕĞëöĞùńŞ-aEüŕ-ÝË)ùĴŞĉ&åÑ;Ěąe-áË)č=åüńŞIĥĞõĴŞ0gîgÁñwú^$àd-śh]kĻcúT0ï?ÀVÿBíāl1dÕ0łËÒsMî^tĉĴEÏĻEĎòKîjpĽIAħĆBşxTñńEķÆßiĈmBm÷[^TÁ@wÞUÇ1}þÎö?Pĸ9ċQ?4ÁêðoïàÅTħīRJX*őôÕEVlĈÐkĢÊ)ĽēäĜ?Ę1ĬUÆÎÞ51xÃÀÝýVwŌsðhÁ.iñXč$ĜĜdßŉýĆiŃÞıÜ6ŘïÀÙsOmkSpđęĔùĄŇöSč?ěyg",
"netherPortal22": "0g0g*èéâÕ;Ś]bĖ)aESb$Ñ;ĚK$Ě;aŒÊ$Þ{bŖQbÚÕ{ŚÀs(;aĒäéâSbÚĀť-Æs(-aE-aĒUs(Æ$Þ{bĖ-aFáÚ);aœ-9ďÀrŖXąĞQbĖ;b$ÆsÞäÚâõĴŞXĕĞèöâÀbŖ-aÖÙ{Ś)9ŎSaœÝË)õĥŞIĕĞąe-đÌå-aŒüńŞąu-Ñ;ŚëöâùĴŞëąĞ0g2cTRoÎįwJXsědEÃXAċĵTkû8ČĩÁVîEBıKĘîÒĊăEíÉpĬtÀïRäSÉèÐwÂmhwìïêEĳÀÎKERk?ÇoFíÒNKaãÞĳÙúŅ|Ð[Î2E)ĈĺyýnüwīĎčhwRøtRÂCĞŌFĲoČŉÒuù9sÎíÆù%2úĮÁîjüãĩ9R_kßíBŘľqíÉhTĹ}ŉ^?SïĤĘíÙÒncûclÂŗ&ĨX#sõyl^ÙÊĿĀőüĄßĳÁĜóL?R",
"netherPortal23": "0g0gLXąĞäéâõĴŞÀs(-aE;aŒÕ{ŚÆ$ÞÙ{ŚÑ;Ě]bĖK$Ě;aĒäÚâÀrŖQbÚÊ$ÞSbÚSb$ÝË)ùĴŞÆs()aE-aÖ{bĖ-aFQbĖ)9Ŏ{bŖèöâÆsÞUs(áÚ)ëąĞK;ĚáË)-9ŏ-aĒüŕ-ąe-üŔŞIĥĞĀť-XĕĞÕ;ŚùńŞSaœ0gîgÁñwJò$Ċõkĺï<2h-śûÁVÿEŜĶ;+p?čĶSûłkRĄ]ĝ^Bľ÷%ŘĹlDĄR2İs1ýoğĮæj>t1ŉ<kaèÿĭÏOĬ.OÂ@TÊéřJüĎĹ+ÔĳËBŌu2ÿËĨi}ÞņAďiýĮnê65eaj|ĸŋl/ÍËŌÊcĜőĖzĬèñõÒyøèàIpiĂEÞÒ$ŞalĪĳüĪĹFÅ6ĐñņFŎBËða&ĩÚyĉóEù÷Sĺ÷uwwèa}ÆÂŃ%Ő~{hŕ",
"netherPortal24": "0g0gOèöâäéâõĴŞÆ$Þ-aÖ;aŒÙÊŚÑ;ĚáË)Us(QbÚK;ĚSb$ëöâÀs(SbÚÀrŖÙ{Ś;aĒXĕĞ)9ŎSaœ]bĖ-aFÕ;ŚK$Ě{bŖ-aEÆs(Ê$ÞÆsÞXąĞèéâÑ;ŚëöĞáÚ)ÝË)-9ďüŕ-;b$Āť-IĕĞÀbŖĉu-č=åÕ{ŚäÚâ{bĖ-aĒüŔŞëąĞ0gîgÁñwJô$Ĩ{EĺøF4{-Uú|5lÆċıEśn-čıÎþÿVĚþlĮÌ%ŜĆcýõgĮmÓ8[ÈxŃöüsÝm3?Ĺ[lÄĂdnÁC5õRPcÄÂóEŊõhÒ56ÓXUĉ5TlXąčļöřÄú2^ÊĎÿeOï/7ŀÏëīlqP]ÿ!dŀ#ĚNó×Ļ4gĭïS+ĖöÓþą2ăÓŞaPčĘ]ĭďTkbĭ@PÇ7kÙJĂúmÞ$FgÖŃĆæĽîá.bĤr3gÇuáúÀã+Ę",
"netherPortal25": "0g0gNèéâëöĞĉ&åÆsÞ;aĒSaœÝË)Ù{ŚÆs({bĖäéâÕ;Ś;aŒSb$]bĖùĴŞÆ$ÞQbÚÕ{Ś-aĒ-aFUs(ÀrŖ-aÖK$ĚõĴŞÀs(K;Ě)aEèöâÊ$ÞäÚâ{bŖXąĞ)9Ŏ-aEIĕĞ-9ŏáÚ)SbÚëąĞÑ;Śč=åüŔŞ-aŒXĕĞùńŞëąâÑ;Ě;aœ0gîgÁñsí^$Īd-śhAX÷.OiEŌ5UŋÄMl{wŌĵKŋÅh>õ|1ýFþăoŊ?ÝĹÁÎľĀÇŝý4áVëÒ>tCĂModVŗļ×j÷ÎñïNzÁ(*}kŏĴ6>čMkĸÕ*Å.ÕïāûďĀ)hüľõÄ?ĈwæoĎĎī{ġ3öUKČÞēĐĐw-*ÿõāœAãatÑh*ÃÃå7úÊĀcMkÃÕÓoĝAJ.lċõŋÁáÏŋ^ŋĆÖÉŁÉ5[pňĿí×ĀÍkĀĨċÈ>5Ã",
"netherPortal26": "0g0g)ëöĞXĕĞąe-K$Ě;aĒ-aĒK;ĚáÚ)èéâUs(ÀrŖXąĞÊ$ÞQbÚùńŞÑ;Ś{bŖ]bĖÑ;ĚSb$Ù{Śèöâ-aE;aŒÀs(ÀbŖ;b$ÆsÞQbĖÆs(äéâÆ$ÞëąĞ-aÖSaœÕ;ŚõĴŞÝË)õĥŞëöâäÚâ{bĖ-aF)9Ŏ-9ŏIĕĞ-aŒáË)Õ{ŚüŔŞSbÚÙÊŚ0gîgÁñwJô(Td(ŊķFkûEÁUUļÿd4ÆÊ@ÈÚhgFīĬkQÃlľću2ÌÀĺ|ïkŉ÷SņS)É4śĸ@Ä3ĀÑÀï)ÅNàaêXPéŝĺËÑÃËŞķóĂúüáØ*4Ĵ+JÙ?rjþĻÛÀŜjï,ÃMŊÆãÇ>üz4|Ę^XČÆĦÊMb7ıİŝĽloï@ñĶÁðĴđ2ÎM$dĕn|{üÎQěĪă5i|+4đ1ÀVÃ%ħc3AúĿ!)ÝýĞņıåvháěÁIòBěÎ",
"netherPortal27": "0g0gMÕ;Śëąâĉ&-K$ĚSb$SaœÙ{Śäéâ]bĖÆs(IĕĞÊ$Þ-aĒüŔŞÆ$ÞUs(ÀrŖ{bĖ-aFÑ;ĚÝË)QbÚ-aÖÀs(;aœSbÚ;aŒIĥĞÆsÞÕ{Ś)9ŎK;Ěĉu-ąe-;b${bŖäÚâÀbŖ)aEáÚ);aĒ-9ďÑ;ŚđÌåXąĞXĕĞ-aEëąĞüńŞ0gîgÁñsí^$Ī4cĹĵ;X4?xjÁVXdßĪÎÏļ-ìe<üQÕQcM+ŃtQaâĎIåVÄê7]V*_XÕXx]Ķ+?Òāĉc-ĈBãäĵáśÏÖÑEĉ1ùUòýĄ6ÂõìzhÃĳöUýÀÏcąMļčĒId?ÊđĬfeğQUģeĈŝù4K%ëáĵhVĽĉĨmõďÃĄğŁÇÂŁd*yāGļV2u@áĪEMńUĪĽMrIĘďkeÞü;ëĵ<5ÔĦOŃ×èjÑUĮÀşĲ.5Û",
"netherPortal28": "0g0g+Ñ;ĚäÚâùĴŞK$Ě;aŒSb$Æ$ÞÝË)Õ;Ś]bĖXĕĞÀs(-aÖ;aĒąu-Ù{ŚUs({bŖQbÚ-aEÕ{Ś-aĒÀbŖQbĖüŕ-ëąâÀrŖXąĞ-aŒùńŞÊ$ÞÆsÞĉu-äéâ-aF)aEč=åáÚ){bĖÆs(èöâÑ;ŚK;ĚSaœIĕĞõĴŞëöĞõĥŞĀť-áË))9ŎëöâIĥĞëąĞ0gîgÁñwúó$Ī?sŊħSUÂ?Mk0û9<20hUmtáS]QJgÂĳ{60ÑŝăÀļÂ{ÅcpļilŋćíhsANS8ÞiIÃÐêTĹüi]1AJ)RQ(ĘÁAĀòs4ċāĊÔhCõ×ÒÂÀNÐXæqI^ÈSíő=âqcŇ9ĖçgMx9ĞŋLħl0hCõkęzRŇ[ü.ÂIùĹ;èÊįýgAMß?ęĭ=ĄĮgĽē*AİĹŉŘÕ(ŜèùŎSĜčķüďgrüāDĉýiĪÕúÃ",
"netherPortal29": "0g0g*K;ĚÝË)õĥŞÆ$ÞQbĖSb$Õ{Ś]bĖÑ;ŚXąĞÀs(-9ŏ-aĒQbÚäéâĉu-ÆsÞ;aĒ)aEK$Ě;aŒ-aŒ-aE{bŖÙ{ŚÀbŖÀrŖUs(-aFÑ;ĚÆs(IĥĞèöâùĴŞüŔŞÊ$Þüŕ-;b$Āť-áÚ)Saœ)9ŎëöĞäÚâXĕĞSbÚùńŞ-aÖ)9ĎÕ;Śąe-èéâëöâ0gîgÀĨoß9Eěd-ŗ@Tj[*xÃEVd50>VÑgoâĿtm^ÁĎĸÞĺŅ40ņëĪ7$Ãcãm5*úÉòïctOÐúļd&VseÏdonďáÃ?l?ŏČ.ĪÙâĂRMÖR,ùÁlĸõáÅdŌFĒģnčma÷+ð4Čnem7ĝþ3Àĺ7JßĈĢã6lRútĺÜËŠĺKÕdÇáī}äkčĈ>só(ÓıĺĬĤòÄŘĻÀÉĮı6ńØsÍīVŅÊààķær(g@ÛĻŚđōðt>{",
"netherPortal30": "0g0g,Ê$ÞÙ{ŚXĕĞÑ;Ě]bĖSb$Æs(äÚâSaœëöâ{bŖ-aE-aĒĀť-Õ{Ś;aŒQbÚ-aÖSbÚK;Ě;b$èéâëöĞÝË)Us(èöâ{bĖK$ĚÀrŖùńŞüŔŞáÚ);aœÀs()9Ŏ;aĒ)aEĉu-Õ;ŚõĴŞáË)ÆsÞąe--9ŏäéâÀbŖQbĖõĥŞÆ$ÞëąâëąĞIĕĞIĥĞ-aFXąĞ0gîgÁñcëİEě48ĺíośalkûF54U5ÿMmeÒĎĵ<nokĈĳ(7ÉÊÓuê4Îò8ŋ2ÇühįĭĆX{hìÖĐk{ĕ4_ĎGķ5Gm4Ŝ4;Sz@ăF0>%oT{Ďþħ;Ş4ÛŏĿpX#ÌŚÈ$ŝħ1íĔUĉoÏÝŗhïħlAÊ)D1īNÅ<iõKňÑiÝăÜFįóŊĀĂĳÀ${łČib!ē6dĥmnÂùgËQćTFhõ)/1sEś+UÁQ[7ĺČTĔęĎœgśb",
"netherPortal31": "0g0g*{bŖäéâèéâÕ{ŚUs(]bĖäÚâÆ$Þ;aŒ-aE-aÖĀť-ëöâÕ;ŚèöâÊ$Þ-aĒSb$)aEÆsÞÀrŖëąâÙ{ŚIĕĞ-aFÝË)ëöĞÑ;ĚSbÚÀs(K;ĚõĴŞK$ĚáÚ);aĒ{bĖQbÚāe-ùĴŞÆs(ëąĞ-aŒSaœùńŞ;b$üŕ-Ñ;Ś-9ŏĉu-IĥĞüńŞIĥŞ)9Ŏ0gîgÁ6sëĩgJë$Ī}<4??AÃlhUVÒĽFìŀÕ6łÝďÃÞňıTğŇXTvÓCz!]òíÃıQXXËJgù2øāþyS8óĄĝIÒŌlXX5wQķEa4ìıÃhqIëŝĶĐĈzeRkgR9ÆıŎF6ĮìTÈÒk?;įÌõÄīĚRąĜÔ[ġŎĨx9AtÏL30ûfsúA8ÃìÝĔĤÈ&ëpaû$ŇáèT[TUÂ_ŋāŠ0ùÃĲ4XS2F#ĈX0Ħ3ĽcÁc.@ĪĐďg",
"lava0": "0g0g*ńĨZļÀZńęYőîZōÐHńřWįŇHĴgYĸSZŀúHńŉWļìWļÞWŉ2HŀęYĸÁWŉyYŉ2YōÃHŉiYňřHįŗHĸwYļÎWĸ(ZńřHŉNZŢďWŕĻYŀĉYĴwYĴ0YńĸZńęZŕīYŕīHĸÀZōOWŀìHŉiZőČWőüWŕŋZŕĻZĸ(YŉyZįķHőĜHīķHŚ*YōÐYőîYōàY0gRcTToß1Ay^EJĳ)ŉI;Č1MkûÀĹTxVÿK6]5ĎŃÁķÆåŚwïÔĿCDz0ëÆÏ>ÒÑāĀAOÈáî8ù9Ã(İıxĹ^BGP-^0èőÃÆňË%âĨÓĒĴuĪIoí11ď]Îm÷tŞįxVõĝAòäíĽqŌĄĥð5ÖēħęÎĘVŚMĥïĈwĩĳ~#&tñąMVĔ(mnĴħÍKĩIoÏ9ĥ*ńCÒ[(üįKàEĒĉÈMÎýÆî9ĜùÈEÆ)|ķ[éKUPlİ",
"lava1": "0g0g(ŀęYļÀZĸSZŀĉYōÃHŉNZńĸZĴ0Yĸ(ZŀúHńĨZńŉWńęYŀìHļÞWļÎWŉiYńřWŉ2HįŗHĸwYĸÀZŉ2YŞÓHőüWńęZĸ(YļìWőČWőîZŉyZőîYńřHŀĉHō>WōàYōÐHňřHńĹWŕīHĴgYįŇHįķHĴwYŕśZőûZőĜHŕīY0gîgÁìsëìAĈb(û}$Mø;Ĝ1<hÂ%wĵ9*eUĩį5ÒĿ$Oìwàŀ1TŁÚĮt0zĩwyŅ$ĺĂBśÀAzĩ8,ù-şa8N^)iÉðEısāBÕNò-gRĂGwĉSĨswídÏRa43ĈÞĨ=ë÷^x9ÀjUĎĒŃÝwðSÅ0ÕóF{àœĝča4Ś÷^wû8qİ<+íAŗøhħÕ;úíĎùSÞÐ>)ŋŏ-āR×îńĢŜï.^ÃÕzöPĘùEÎXüùÕĉĈ_ògP",
"lava2": "0g0g#ŀĉYĸSZŀúHŉNZŉ2YńĨZļÀZĴgYļìWńŉWŀìHļÞWńęYļìHńřHňřHńĸZŉiYĸÀZĴ0YĸwYļÎWĸ(YńřWŚ5WōÃHĴwYįŗHőîYĸ(ZńĹWŀęYŉyZōNZőČWōàYō>WįŇHőûZőĜHōÐHōÐYŉ2H0gRcT@sÎðwúP0Ĉôkzb)Ŋĭp4PkŘRP*aUĨÄ5ãpk2ôP*S1ĎĻ%Įp0iĨâľúkĝUFĩÅ8hþáx4UÑv4yv$il!6?{ĐÀÆDıUgËmEŅtSôÕKT8Ją4ûĩt)ļEhýA.aÆÏüþÁŃĀÒ?ËpëánÃ|Mďĉ?vUÒ_ÊMĂ%V2pĘV8Ę@eùÈ81TÚęïÝŗ0%ÄĮ$yTÁMđßE3VđÃáiıAĘ×0U3SwÈÖĸïëúí",
"lava3": "0g0gCŀúHĸSZĸ(Zŉ2YńŉWŀĉYļÀZĸ(YļÞWļÎWńřWŀìHļìWńęYňřHŉ2HńĨZĴ0YĸwYŀęYŕīYŉyZńĸZĴwYįŗHōÃHō>WŉiYōàYŉNZōÐHőČWŕŋZŕĻYĴgYįŇHőîYőîZ0gëcT@sí@wRX$ħ8)ę]4Ŋì4ĺķkň5pkIB)Ĺ95lkÀ0pimlãnBþă0Ð18ÐŁEúÿMīg0gÂ4ľÉ(mħ425wi@lŎķQðö808ogñ!8~òÝb4ùRM278,Ãòk]kJ9*ľ{Êji÷)āùJ5Tġ08ÏÂ?gÑâáïwÎòÇĚ10īõpë{{ìðÚķ[|3RÎìþäQjwÓy(5ìËgÇ×Äąpãh4jcSKX1*î{ĘÅsxöÚ1ï",
"lava4": "0g0gyļìWĸ(YĸwYļÞWńŉWńęYŀúHļÀZĸSZļÎWňřHŉ2YŀĉYńĨZĴ0YŀìHŀęYĴgYőîYįŗHŉNZŉiYĸ(ZŉyZńĸZōÐYőĜHőüWńřWŉ2HįŇHĴwYō>WōÐH0gîgÁñwKĮAĊīcMî(Mëcĉ8wĨcoĊösŇë<1ú94XoÑcdiÀpkĸt?QoàĮÆìnKßhdücoßhwĬ_dÎfwÎĭAhįp@|-ßĳÆ07wgRÎĎī?jĭcNmAĩRxĮ@QŋS)K9pV38àĩåŎľÑOĭMĽ@ÆMñQŇK%ŗð;ß7lĪĪkKîxMĭ)N[Þķ]g>m|MŃëľgsXĸ;Î]èŌüÄoÅxkĸwë3(ë|0Ó4oN2ÆìĳF2c",
"lava5": "0g0gxļÞWĸwYĴwYļÎWńęYŀúHŀìHŀĉYĸSZļÀZŉ2YŉNZńŉWļìWŉ2HńĸZĸ(Zĸ(YńĨZńřWŉiYĴ0YĴgYŀęYįŗHōÐYňřHőûZōÃHŉyZįŇHō>WőîY0gîgÁîcÝ8AĊĳwM|oM?kŊķQUï1*cdÀ?kÞþ8Âľ)UX*Ï?pÓlxQĮ)úPTk÷gXm1úĬoümQÓ÷AlħwÂ0Akh)ĊīUXïw2]wgíËğiÇK7kĹhAÂ2wĪ5ÇVðMÞP*[SQúTåŌĂÝĸ@lďdSļħÇÀ÷MK|kX9sŘ?(ÀPxÀľ(ķ8PwP-ňÁÎí}á?4xmmoÁķÇUUMştxÓmwúël0Å0UJ02hwëĬ(Â7",
"lava6": "0g0gvļÀZĴwYĴgYŀúHļÞWļÎWļìWńĨZĸSZŉiYō>WńŉWĸ(YŀĉYŀęYŉ2Yĸ(ZńřWŉNZŉ2HĴ0YĸwYńęYńĸZŀìHįŗHōÐHįŇHňřHŉyZőüW0Q1ùïMĳëB_KqÏ0öàĶ0āĭ4ÒNÂċěPTpÓwľÞIowě]@ĭx@Ä5ēØ3RŏÑħ#SJŘSĘ4dëS×yĖÛċ6Q1cKXxŐ&gìÓňlìwAtīl4)ĕĈ3ĹÆkâŅīâdČAU]dÐĕ4çaČ×!1ġĞçĒIÀñō8ðõBJ@ĳŋđçVÕ7yoĮ1À;ÜèĀby0(RU%1eĻlg0bîňe",
"lava7": "0g0gwĸSZĴgYļÞWļÀZļÎWŀúHńŉWŀìHŉyZōÐYńřWŀĉYļìWńęYńĸZŉiYĸ(YōÃHĴ0YĸwYňřHįŗHńĨZĴwYŀęYĸ(ZŉNZŉ2HįŇHŉ2YōÐHőĜH0R10ÑF÷0x!8mĨëöàł0ùČ2ĊŘ^ØNĮFcĈpÖ?X2wØÇĿĈoþ]4Ğ<ĪxīŇKŖÀî6ĳñùmŇ0>w+Ĳù](2ŞĀÒzőĬĠTØkGĠōhŇČcĖËÚċïu(9àŎAĥlċpĜSnĠXČÂıÐĭÛ6lĎļĉĀ]@åĿ3Iy÷ø/ĻĂÁéÖðĉF~āUCÓťş6ÅoıTŃBİ$Çõpwį$8d",
"lava8": "0g0gyĸ(ZĴgYĴ0Yĸ(YĸSZĴwYļÞWŀĉYŉ2HŀúHŉNZőîZńřWįŗHŀęYļìWļÀZńĸZňřHŉiYĸwYŀìHńŉWōÐYō>WńęYļÎWōÃHŉ2YįŇHŉyZńĨZōÐHŕīY0gîgÁ6síQ0Ċĳ)3øc)hPMĻ8?QÁÒĿ;lp]Þd8T10üĺ-ggSj|4ãìgÎĭcxñogöTęüp0|8NÁÀļ5gù>0z|ÀJ[8B0g0í4zRÖĩ~kwm(ü18(RSþX4x[ÙČÀ4ĩgSŘĻâĺ@äGīdkķgãh0zÀoB4è(QÕśÃìKĻkzįEJQÕ0V%ęü8xĀèJņ4zTAúî8ķćhÕÃÀgüÖ2À0gðk[ĭ8S4p6ùB0v",
"lava9": "0g0gAĸwYĴ0YįŗHĴwYĸ(YļÞWńęYŉyZŀúHĸSZō>WőČWńřWįŇHļìWĴgYńŉWŉiYŀĉYőîZōÃHŀìHńĨZŉNZĸ(ZļÀZļÎWňřHŀęYőîYŉ2YōÐHőûZőĜHōàYŕŋZ0gîcx5oß90Ċĳ)T÷;NÀQáî4TQ<4ĻUŗmQëd8(|cïľÆŗoAj|<ÄdAÁïgC]ÑgíB@ìlù|4ŘÄ;wìBÀ~0j|;ÄI4wîÑ>R;wíB6È0gr?C~8ŗTÑðo4gsâQp96İÒÅ0)ķā?ī4<ÔòBĮłAj~AwoÆ0ÆÒČaëĨf;ihEíoAg]ðx>4hUÝŏÄ;wøwðQ8wÂ;Õĸ;gQlJpcgÇ5ïò*ð9.Ďòwúm",
"lava10": "0g0gyĴgYĴ0YįŗYĸ(ZĸÀZļìHńřWļÞWŅ2WōÐWŀęYįŇHĴwYŀĨYńňZĸSZŀĉYŉRZŉyYļÎWŀĉHįŗHĸwYŅiHŀúHļúHŀĸZŉRYŅyHńĸZŉNYŉÂZōàWőċY0gë00īkÎīcí^$ĨQ40Ĵ-ÎĪ0Īĳ54Â{jk-à240VMMðkgcÆgý5O2cTQ(gĺ;gídÞcg(S4ho0wìÇ(m0lR4Śŀ0gëcħT4wíÇSīc0dÕÝħ8gTd(c407Úī39>>gÞħ8g>áÂõ4Ã><ñódK0Æ5õÑ0ÄhNIèķĨ4kńx)ĳcgÃìŊħ4hsÒ-p4wìt(ĳ4g?0ÆË4g{g)Ī(ħf5Ò38(Ī{ŗĪsŚp",
"lava11": "0g0guĴgYĴ0YįŗYĸwYĸÀZļÎWļìHńĸZļÞWńňZŉRYŀúHįŗHŀĨYŀĸZĸ(ZļúHŅyHŅ2HĴwYĸSZńřWŀĉYŀĉHŀęYŅiHŉNYŅ2WŉRZōîH0Q0cïMķíč_KcSõöÞķTìŇczy5ŒßCgX$åÊŋ4jo4ħùÎxgS5ŌĈQxĻĜzħ(4ô0XhùkĀÆg=þä4nĳj8XFāŏ#ĨèlŇgSnüj80õĽ3k(řx0g0ŝă0aMRÏ,ĉF.öŇS2NĊİĺĆ04ĕđP/0BUĆ04ăìäëIxFu0ë82/ķXOċįŞĤf3ŕŘ=øzŅşiÓ",
"lava12": "0g0gpĴgYĴ0YĴwYĸSZļÎWļÞWŀĨYļúHŀĸZŅ2HļìHįŗHĸ(ZńřWŀúHĸwYįŗYĸÀZŀęYńĸZŀĉHŀĉYŅiHŅyHōÂZ0RwcXFóßĉ!Æa(ĘIMóÄ1ë1Èĸì÷MÌgX(õÒy42ä30ĬŇA_g5ŘIÎ7ĳČz5h6&4whdŋkwg(ÓôŇnòœc30lï$Sæhë806Q23ħ@ĳėìÕįüë8ëıĆS9tiāDò]ŘNwEwĩĒð^y00ýQÏEIMěÆ02%áÛÀXxAÌ08?1Þw42ryŘúœ3E(ĭ$ôo/g?",
"lava13": "0g0gnĴgYĴ0YĴwYļÎWļÞWŀęYŀúHńĸZįŗHĸ(ZŀĉYļúHĸÀZĸwYŀĨYĸSZįŗYļìHńňZŀĸZńřWŀĉHŉNY0Rwcîx]ÃkŋS8ùČñÁ]Ğ1Ĉ1sáìŒÁq0XxrcÓ42Õ30ĥĕz8ŗ4{KÎ1/MqÈ@ïō4whBAÙw0*řyKmòLc30dCÁ0]ęw844Ĥy2S.üíìmŝQKaQû$Ĉbyĩ^Xqþù(KoKĀĻıĉĿ01ôàŅC)$ûJ01ûOE(XxÐī0BČ1%À42_ÂChF3őħĘÖÏÈĩùQ",
"lava14": "0g0gmĴgYĴ0YĸwYĴwYļÞWļìHŀĉHńĸZŀĨYŀęYļÎWįŗYĸ(ZĸSZļúHŀúHŀĉYĸÀZŅ2WńřWńňZŅ2H0RxùČxIáp!Æ8ħĝĮåò50K2Ĉì2&åo(4xz]@X2Kĩgęõ$Uķ0ÚIÄhĨŗÃoÄ1ĎoÄgMėiĽ0aN$Rh÷!aĩg?ùT@R*î841(z3[o<SÈóļ/wbQĩġwb]ďĵóÁķħgëIÄĪxĵTĻ02AOo*(%Q4MíE)ÁgXxô61ĝXp!Ň03KĿ*<Ĕs|gĐöô5kg×",
"lava15": "0g0goĴgYĴ0YĸwYĴwYļìHŀúHļÞWļúHŅ2WńňZĸÀZįŗYŀĉHŀĸZĸSZŀęYĸ(ZļÎWŀĉYŀĨYŅyHńřWŅ2HńĸZ0RxùĎMĳXùóÆ{(đòxcĺ003õŘìQxĈw5Î)zh$2ëħgóe#üŇ0gIÄguÃ(ĉE2coÄgd~iĽ(dUÑRg2CaĩgħÃē6čSR841ħw2ðĊpħÉõŏýT2ĈztŇckÖÈő*JŇoëëÄŎĜĭýĳ0dÁA4OS(.6MìĳÏā0XxÝë1Ē6kÂK03ë43|ÀióĈoĵá6ĎĄa",
"lava16": "0g0gpĴgYĴ0Yĸ(ZĴwYŀĉHŀęYļÞWŉyYŅ2HļÎWįŗYĸÀZŀĨYńřWļìHŀúHļúHĸwYĸSZŀĉYńĸZŉRYŅyHŅiHńňZ0RxùĎMõápyÀ{0ĕöMõľ4x0Jŗ1&MXwFTXÅwEhkSgõ_Ąþw02]Ugpö)Ñİ0QIUg1)iýg1âÎíg0ĭaíg÷)ě7x@M84MĬSq[AČTÀJĜJT2?lħĈ8ŋÓtí*ÛĘ<ňIVC)İãc0eÂ)@O]M^S-÷}ĂĴgXxgħoĎ@óÆK0Ðg07ÁMiÌùqiüSĄgb",
"lava17": "0g0gvĴgYĴ0Yĸ(ZĴwYŀĨYļÞWļÎWŉÂZŉyYĸÀZĸwYįŗYŀĸZńřWŅiHŀúHļìHŀĉYĸSZŀĉHįŗHōÂZńňZļúHŉRZŀęYńĸZŉRYōàWŅ2HŅ2W0RxùïM^áA^Æ{0āöMóŎXx0Ĭ0ëčMQw%KIīĈĔagëgë@AČwc!(mgp÷!JĻëÃÀÄgëĕl2w1*ęRg2naĩlì|ĬðBdR84(2ëp@AįÎÆĹûQT1ÂđWwÆkËÜzñ(Kōx2ŏąáĚ%Ĉ0ER(0NČzkëMe?óÂ0X#g2hlBiÌK0ÐÀ0nşĒhĆKTřiëÓī2",
"lava18": "0g0gvĴgYĴ0Yĸ(ZĸwYńĸZńňZļìHļÎWļÞWōàHŉÂZĸSZńřWĸÀZŉNYŀęYįŗYĴwYįŗHŀĨYŉRYŅ2HŀĉHŅyHŅ2WļúHŀĉYōàWŀúHōÂZōûY0RxùĎ.ķý$08}gĉõØÀŎð10SI18×mĠı0Ā08]3gë0ë]wXwīM-wg$ĜQ~ÃëÄgKgïnkíEïđĭ>02Łc2pR*Ņy02y8m(2SqyMīxëqĻ;Î2rhÞňëSÓãħŎĞÝĵÎcAĽÊŊØ.oõSÕ3sĄw0ħMdÔç@gXgoRhwŏjÀķ0ÞoRtËhi-Ýà|kSæĳ2",
"lava19": "0g0gyĴgYĴ0Yĸ(ZĸwYńřWļúHļÎWĸÀZļÞWōûYōàHįŗHįŗYŅ2WĸSZōÂZŀĨYĴwYŀĸZįŇHļìHōÐWŉNYŀĉHŉRYōûHŅyHŀęYŀúHŅ2HōàWőīWńňZŉRZ0gRcT5oß9ENĨ4Ĩì4î|-ŉfSiĨ0Ī6$28-îñQě0]0{{Ę38AS4gügwí4(Sw314Mlxhþo0ľ8j14Ĭo8Ę}QhŀÖÝ{46ķ4ħT|)ÈÒČT(kR41Ī0kħdQÁ4jc(gñx4TQÁú1ĭĨ(Ę?âň{Ëř]64ì(ĚĮâìë8?ĸQwì8gÁÝKS$g>8O÷ÙÝ{4gcQj1.TI8ňĩ00ĸQj1Rlh-ñ8?á79g]Öwh",
"seaLantern0": "0g0g_ÂDYÂnYÈ,ZÂnHÂDZÈDZÄDZÌEWÈ-WÄDY}nHßĢW÷šZðőZěÊYē$WĮéYĪÚHė;HěÊZûbHãġZ÷ŢWĮéHĺöZľĆWľąZĶöYJŢW}7HĶöZņĖWņĖHŊĖHłĆWĲöYPŞWė$WņĕZņąYĺöYğÊZė{YŎĖHŎĦHŊĖWŊĕZē;H^7HĮöYŊĦWÄEWŊĦHYËWņĕY^7WłąZłĖWłĖHJŢHĪËWĮÚHßġZ÷őZľöZĺąZYÚWPŞHãđZíıHðŁYė{HãĢWÂnZ}nY048wÎ01ag8KK>IiEÆĨċñùy]úNïSó6Uęà6cĂNÕĸěÔaî/ÝġŊ[ķxRXšzÕĵAcüĨČ9ûC{ā.Ś!kągĐĸśİýĔÈęNÑ6òt6]ĸśĲmxRęÏŋ6ÿĘcīĸśĲgĕÈïJÑCôXÓõĹkĲÀĎÈĸJŋCĂX2ČĸśĲmĉRęÏá6P0eüŘśİþ$ÈęĚÑ67,ÓPrñFûCÊāMŞ@ò(2ŔňàDķĉ=ëš3f_A/ŠŠmCöS*29Đ}ıĪ/6zĠęñnwĎ/JĹ01JúzÞ|Ŀ>ÛâwgöĪ^",
"seaLantern1": "0g0g^ÂDZÂnY}nHÈ,ZÂnHÂDY}7HÈDZÄDY}nYÌ-WãĢW÷ŢWðőYěÊZė$WĮéYĪÚWė;HěÊYûbHßđZĪéHĺöYĺöZľąZľöZĶöYþŢWãġZĮéHĶöZņąYņĕYłĆWĲöYJŢWPŞWÄDZē$WĺąZņĕZŊĕZğÊYÈ-WľąYłąYŎĦHŊĖHě;YŊĖWŊĦHÂnZŎĖHÄEWłąZĪËWģÙZ^7HņąHłĖHĪÊZĲéYłĆHĪÚHĮöYPŞHJŢHíıYðıHė{YğÊZė{H^7W04g(ìSðekwëí?3ggÆĨċñùy]úNïSX8$ÎÏōcĂ)ÑİěÔeí4(ŘŚEgwRì2zÕĹB{ąTüaV!Âč^3@ļðÆP×Ō^ÿĘKĨačĭP98īıý$ÿėÓĥæČ6PBÕSı5#Ŀ!RļíüafCÙöĢl|ÆxRĨæü6Ê1ÕŌĢ5{qĘKĥíČ6P1kĄš5!ÆLKĨÂýĭ7/{PpýıùđÂđÃğðP/2MŒŊ#ùwÊìàŚg6Bc%A8C{āNÑĨJzeĩckÊ-úÐgxuRĜíĩĎ{ý!ÀÂËB^p#QĹS2",
"seaLantern2": "0g0gUÄDZÂnHÂnYÈ,ZÂDZÈDZãĢWJšZðőZěÊYė$WĮéYĪÚWė{Yė;Hě{YûbHãġZ}nHÂ7H÷šZĮéHĺöZľöHľąYľöYłöYłąHĶöYĺöYþŢWßđZJŢWĮöYĶöZņĖWłąZņąZņĕZľąHĲöYPŞWŊĖHŊĖWğÊY^7WÈ-Wē;HľöWŎĖHłąYē;W}7HŊĦHņĕYņąYÈEWĲöZYËWģÙZŎĦHÌ-Wē$WĺöHŊĕZľąZě;H}nYĪËWĲéYņĆWĪÚHãĢH÷ŒW÷ŢWPŞH}7YÂDYJŢHðŁHíıYğÊZě{H^7H04g(x21ag80wRî08(Þ2?bo)Ýř4TiCoĉÂĬĳoNÕŀĪďøìAìaz8ĹB@öNàĒgF0EęX×ýēÄĕÈO7m%Êĥí*×ļ!UĬÈĜÙāĜ2.JĝÚÆĞÙĬÂÑÓ@ĕ0%J*×ł!UńÈĜÓaëÝŌJV×ă!UŀĒĜÓt44ŔJ*×ýNÛŘÂĜĎníæŠš*×Ņ;UđÈĜčīĕ0.>AĒļēÄĕÊ4ĘÎ%ðíAÃaĸčõöÈ]MıFÖy{G$õoÑįĤořIĲā))Őś7ýn@ùü1ì00č^J_ÖđĎP]0óT>",
"seaLantern3": "0g0g|ÂDZÂnY}nHÈ-WÂ7HÂDY}nYÄDZÂnHÄDYÈDZãĢWJőZðőZğÊYě;WĲéHĮÚWě{HěÊYûbHÂ7W÷ŢWĮéYľöYľąZĶöHĺąZJŢWĮöYĶöYņĆWņĖWŊĖWĺöYĮéHPŝZ^7HÈ,Zğ{YľąYņĕYņąYņĕZě;H}7Hğ{HŊĦHľöZě{Y^7WŎĦHŊĖHÄEWĲöHģÙZłąZÌ-Wě$WğÊZė;Hė;WJŢHĪËWłĆWĪÚHPŞHĪÚWĲöY÷ŒWãġZðŁYĮéWģÙYæĢWPŞWÂnZ04g(ìRðe0Sùë?aiwÆĨċñùy]úNíħí!$ęà6{āNÑİċÔ5IgÀŐŊDķwRì1ü]ĵAe<hüEÀĉRïa3CñB{ąTśEÀđUïÈĜCÄ%2ġTś#ļwRčak$oĚeSı4!ùxÓĸ^k6]7×Ŀı5×ùLÕïÂk6]ë2ńĪQEUĉ=đak6[ëßŏřkEÀĒUïÈkctčeŗĸüEÀĉRĕÈĜ6ÌĚ2ŠŠ3EÀĈRì43(_RÈ$Ĝ-ð{ĠNKıIM?ĩÈ6OŏŊ7+úBàěJë93%zBĔĉ_þaÊħřĪĕ",
"seaLantern4": "0g0g^ÂDZÂnY}nYÈ,ZÂnHÈDZÄDZ}nHÌ-WÄDYãġZ÷őZóőZěÊYė$WĮéHĪÚWė;Hě{YJŢHãđZãĢW÷ŢWĺöZľąZĶöYJŢWĲöYłĆWņĆWņĖWPŞWē$WĶöZľöYŊĕZņąYľöZğÊY^7HÈ-Wė{YľąYņąZņĕYŊĖHŊĖWłąZē;Hě;HŎĦHė;YĮéYŊĦHĪËWÂDYģÙZņĕZłąHņąHĺöYğÊZņĖHłĖWĪÚHÂ7H÷ŒWĮöYPŞH}7HðŁY^7WPŝZÄnY04g(ë0ìa08Kìī3igÀęî[fwQòyÒ0XeUĘřōco(KĨûCï78Õŀà7eą/áŘîCĴvcìazĮúČ]öpŋĎÃDÀčÁĬØm%ÊúyŊôĿ72ĬåŌôn%ÑĝÏOĭpďcĸåĻôÄĕÈĝ×Īĭq6cÚÁŋôÈĖÈĜřĪĭr,cňÁľ&þĖÈġŁOĭ8ìg-İĮEńĕÊŔqOėuďcQŁŚôĄĔÆŌqŎĭ8ď2ÖĘŚfĵĖ;äŐĪgbvíÄk8Óco(ÎňðĭïQó0Á-ĸòfuŜ]ĺRăìcèŠşęŊć=uQùĮħí",
"prismarine0": "0g0g5ÌāH@DHă#ZæŁYR6Y5({ÕIăgiú|Āoí)Ĩc?8^m0wĎAÙRSïĘ^KmAwkāëębÓ)ĳiiÈ}6R5Cj0új9íĿ5F0$8SFíň(Qį$2ûÓCĳÑīħ2(zPþ00þ4{NcúĐ1X1i",
"prismarine1": "0g0g5ÌĀZ&lHă#ZæŀHBŋY5({ÕIăgiú|Āoí)Ĩc?8^m0wĎAÙRSïĘ^KmAwkāëębÓ)ĳiiÈ}6R5Cj0új9íĿ5F0$8SFíň(Qį$2ûÓCĳÑīħ2(zPþ00þ4{NcúĐ1X1i",
"prismarine2": "0g0g5ÌqHÖİHă#ZæĲHÇĀY5({ÕIăgiú|Āoí)Ĩc?8^m0wĎAÙRSïĘ^KmAwkāëębÓ)ĳiiÈ}6R5Cj0új9íĿ5F0$8SFíň(Qį$2ûÓCĳÑīħ2(zPþ00þ4{NcúĐ1X1i",
"prismarine3": "0g0g5ÌæH}qWă#ZæŁY?ŐH5({ÕIăgiú|Āoí)Ĩc?8^m0wĎAÙRSïĘ^KmAwkāëębÓ)ĳiiÈ}6R5Cj0új9íĿ5F0$8SFíň(Qį$2ûÓCĳÑīħ2(zPþ00þ4{NcúĐ1X1i",
"stonecutterSaw0": "0g0g7000łÚYZZZĒĒYŒĖYí8WÞĮW00000000000000000000000000000000000000000000000000000000ÃPë00mò?y00Ċ^MAħ1JÁòyë5oõPiI8ü_EüÆcĊÛĻĊÀ",
"stonecutterSaw1": "0g0g7000ĒĒYZZZłÚYŒĖYí8WÞĮW00000000000000000000000000000000000000000000000000000000ÂFë00)ă|m00ĎŁÖAħ1,jP@Sd+Ą^+Ā5ĜŀÞĜķ9ĎŕļĎį",
"stonecutterSaw2": "0g0g7000łÚYĒĒYZZZŒĖYí8WÞĮW00000000000000000000000000000000000000000000000000000000ÃÕë00CİÒĜ00Ě_%ĞS1JÇÚĩħ9JĲÛiķcþ^(þÆcĚÛĻĚÆ",
fire: "0g0g=000ĝgWę0WġwWġSWĝwWĥÀWĨëWĬĈWġ(WĥKWĴħHĴķHİĈWĬùWİĘWĸŗHĽwYĽ(ZĨKWĨÝWĴŇHŁÁWōĚHŅÞYĬëWĹ0YŁSZŉĚHŉĊWŉúZŚÄZZŕZŖkYŁTWİĘHŅÎHőŊWőŊHŞāZŚÄHŞäWŖ*HŞāHŒ4WĹgYōŊWĽwZZŕWZZZŅìYŒ3ZŚÔWőŚYŚÄYŢĳZŖAZĽgYĥSWŢĳYZńYōĩY0000000000000000000000000000000000000000gS0024g00000M18gR0000000ÁñwKS00000İEěc(ķS00003ö<4ÂSķħ0000Ċe|>VÇãfE001þö<ğtåşxòÒ00ĀŋåİÓĆó×ĖĲS0ģþĥēŗĮsČāÒ01>÷h{ŘĮ||ÀãS1h2Á|ęĮsÉAg00ţÞSÓęņpäĮuæ3sçUÿ;wċĥĬìħ",
"fire0": "0g0g=000ĝgWę0WġwWġSWĝwWĥÀWĨëWĬĈWġ(WĥKWĴħHĴķHİĈWĬùWİĘWĸŗHĽwYĽ(ZĨKWĨÝWĴŇHŁÁWōĚHŅÞYĬëWĹ0YŁSZŉĚHŉĊWŉúZŚÄZZŕZŖkYŁTWİĘHŅÎHőŊWőŊHŞāZŚÄHŞäWŖ*HŞāHŒ4WĹgYōŊWĽwZZŕWZZZŅìYŒ3ZŚÔWőŚYŚÄYŢĳZŖAZĽgYĥSWŢĳYZńYōĩY0000000000000000000000000000000000000000gS0024g00000M18gR0000000ÁñwKS00000İEěc(ķS00003ö<4ÂSķħ0000Ċe|>VÇãfE001þö<ğtåşxòÒ00ĀŋåİÓĆó×ĖĲS0ģþĥēŗĮsČāÒ01>÷h{ŘĮ||ÀãS1h2Á|ęĮsÉAg00ţÞSÓęņpäĮuæ3sçUÿ;wċĥĬìħ",
"fire1": "0g0g/000ę0WĝgWġwWĥSWĥKWĝwWġ(WĨëWĬùWĨKWĥÀWĨÝWİĘWĴķHĴŇHĬëWĹ0YŁSZŁTWōŊWŖ*YŉúZĸŗHĹgYŁ(ZŁÁWŅìYŖkYőŚYŖkHōĺWŒ4WŉìYĽgYŚÔWZZZZZHŁÎWŉĚHŖAZġSWŚ@WİĘHŢģYōĩYōĹZŞIZŚÄYĴħHŖ*HĬĈWĽ(ZŉĊWŅÞHİħHİĈWZZW0000000000000000000000000000000000000000gë0000000000gīkK000000TsíPAĈ000002ĳ(ĺø)ħS0000ÏïgĜd?A^o000>{wśJ|?ÄÊňë0AoÒĎĽÞľćíjS0ðĊÊśÐJÇJÈyħ0Ě8sđŋJïòEĉ00ķħČĐAJPhog00óČĔĝœĚ_ÛJċS2Š(īãĚ)ĳĽĥċ03<*ŁPAŃĆAú&Ñ",
"fire2": "0g0g.000ę0WĝgWĝwWġSWĥÀWĥKWġ(WĥSWĨÝWĬùWĬĈWĨëWĬëWİħHĴŇHİĈWĸŗHĹ0YŅÞHŉĊWĽwZĽ(ZŁSZŉĚHŅìYŉúZĽwYĨKWĴķHİĘHőŚHZZZŚÔWŁ(ZĽgYŁTWġwWŅÎHŢĲZōŊWŁÁWŢĒWŖAZŚÔHŞāWŢĒHŚ@WōĩYŞāZőŊHŒ4WŁÎWŞāHŞGZŢĢZŅÎW00000000000000000000000000000000000000000Rcg00000004T@kÝ000000ñwJô(S000001ĮsÞö-ś70000y?kěĸP*l$ù001}<BÿÁ@pÖğ00QË.ŊņíoċùŠS0MðsÇĈĆó|kÀë0KëcÄwíaą8000Äē)>œĞōāĥď03cßRUĘ-JŐĴÁS0ĿśÌ8w.ĩĈì×Ŝq6ãŅœĽŉ8ráľT",
"fire3": "0g0g/000ĝgWĝwWġ(WġwWę0Wĝ0WġSWĥKWĨKWĥÀWĬëWĬùWĬĈWİĘWİħHĽgYĽ(ZĴķHĨëWĴŇHĹ0YŁTWŁÁWĽwZĴħHŅìYŚÔYőŊHĹgYĸŗHİĈWĽwYZńHŚ@HŉúZĨÝWĥSWĘŗWŅÎHZZZŞāHőŚZŖkYŚÄYŚÄHŅÞYŉĉZŢĳWŞGYZŕHŖ*HŒ3ZŁSZŒ4HŖAZZZWŅÞH0000000000000000000000000000000000000000gîgÀ00000068ß9Eg000001T4xį$ĩ500000īgû}<4ÂwS000ĺ)ŜlÇâĸÎùë0j|(ĪŁÚĮÌVŘS0ÁĮ8äxó,Ñü(00FëkåŏĊĂök000ADE)ēĚŀĸöÀë1qĖ$Aď<OwĥŇħ0ñĈÅaE/UŘİÄď6ïŃĵĴ*Ìów;ĮħbÑğĊóEċê.Ĉħ0",
"fire4": "0g0gM000ę0WĝgWġ(WĝwWĥÀWĨKWĨÝWĬùWİħHĴķHĨëWĥSWĬëWİĈWĸŗHĹ0YĹgYĴŇHĥKWĽ(ZōĹZŅìYĴħHġwWŖBWőŊWŁÁWĽwYŞIYZZZŖkYİĘWōĩYŒ4WőŚYĽgYĬĈWŅÞHŁSZġSWZŔZŖkHőŚZŢĒHŚÔYŞäWōĺWŅÎH00000000000000000000000000000T4000000000wĪg000000000h3kÁ000000T4MñwJôg0000{oĺò<4ÂEÝ004ĭoßkVÑòÊÝ001o8)āÖĚïcw00000[tåŜñ00008ic]xó*fJÀ00āĄ{FÑëàÂĆ0S2íÂ!DđwMýÒAw2đCðĝUÁŒgëĚħ1ÏĊåŎĆæēÉäĘ0æŉLåŎĆÓ.ĆĂcd",
"fire5": "0g0g*000ę0WĝgWĝwWġ(WĥSWĥÀWĨëWĬëWġSWĨÝWİĘWİħHİĈWĴŇHŁÎWĽwZĬùWŉĊWŅìYĽgYŒ3ZŞIZŉĚHĽwYĥKWŅÞYōĩYĸŗHĹ0YĴķHĬĈWŞāHŖkYŁÁWŉúZŅÎHŞIYőŚYĹgYōĹZZZZōŊWőŚZĽ(ZŞäWőŊHōĚHZŕYŖ*WŅÞHZZHŢĒY00000000000000000000000000000R40000000000Rc(00000000x5oß9000003gÏI$ĪdwS000İAÂ÷<2ĸQÀ000R4zÂ|>Pcg00000zýÇã600006]8kÈÚDb$K00ďÌAi÷)Ċô-Ý00A_éĐxEMĊõěQ2DüúEĻãÇ÷èĉë2àEĎĂÖĎĒœĝù0ĎŋÜĩĂÖĭţđòníď/ÓĂĂÏĄÐĜÎōS",
"fire6": "0g0gM000ę0WĝgWġ(WĥSWĝ0WĝwWġSWĥÀWĨÝWĬëWĨKWİĈWĹ0YĴķHĥKWĽ(ZĨëWġwWĘŗWŉìYőŚYŁÁWŅÞHİħHİĘWĬùWĬĈWōĹZŅìYĸŗHĽwZĴħHĹgYĴŇHōĩYZZZŉúZōĚHŞāWŢĢZŖkHŞòWŞGYŉĊWŅÎHŖkYŞIZŁTW00000000000000000000000000000040000000000RcT2000000kÎįAĊôgg0002oÎc)ŉô;K00000iÀSŋÂ4000001OkVÐî00001ñ02ÀËÓ9$w01C^82pÕěıÙS002ĸAľt;wŅéi026ĵïÒĊ/*ŀQëħ1ûtJPAJÇ|ĀS0ąãčĊPAčļČèJSJĒœßP%äIĖïĘħĦ.Aûct5oąÑĎS",
"fire7": "0g0g%000ę0WĝgWġwWĥSWĥÀWġ(WĘŗWĝwWĨÝWİĘWĬùWġSWĴŇHĬĈWĽwZŅÞYĹ0YĸŗHĽ(ZĹgYĥKWĨëWĨKWŁSZĽgYĴķHĴħHİħHĬëWZZZŞGYŁÁWŅÎHŚÔHőŊHZŕYZńWŖkHōŊWŉĊWŁTWĽwYŚÔYŚÄZ0000000000000000000000000000004wë0000000gîgÁ@800000si9Eę{o0000001|)ňR00000002~Tiĩ00000101Â|Rīc0005Qs1þAÃ5Êw0035gĎp(iaÕÀë1âĲÚmÊ.)ËUKS1âĀåŎĆê6q;ë0ïlĈòŎĆ÷3ŋ]ÀħþÖŇĉŎĉ)ÄĐ)ùëĊñĆæüĺ8ÂĒ%VSFĒŅå(Io3t&ĮŅ",
"fire8": "0g0gO000ę0WĝgWĝwWġSWĨÝWĥKWġ(WĬùWĬĈWĥSWĴķHĽgYİħHİĘHĸŗHĨKWĥÀWġwWĬëWĴħHİĘWĸŗYZZZZZYōŊWĹgYİĈWĽwYŖkHŢńWŉĊWŖkYōĚHŅÞHŅìYŢĳHŁÁWŁTWĹ0YŅÞYŢĒYŢģHŁSZĴŇHŚÄYĽ(ZōĩYŒ4WŁÎWZńY0000000000000000000000000000018(Ĩ00000000QkÎĪ40000000įAÁħ00000002ô(ĸë00000001ĵ;Ĝ340000ĩ00úoQñs0000îcÂĴ]0?{(00Mĭ{Ĺįl?@gw00áÄËïľÒċİ)g0ÚUsââŅèĪŇ)Ý0ïşĄöåBÁlÓ)Ĉ0ĆóÅĒğf8R$kSħ?_ÅÌŇí80ĭlŢŗËŜÞGAU}(ì@ŊĨ",
"fire9": "0g0gO000ę0WĝgWġ(WĥÀWĨKWġSWĝwWĬùWİħHĨëWĬëWİĘWĘŗWĨÝWĥSWİĘHŖBWŚ?ZŞäWŖ*YŅÎHĴķHġwWĥKWĸŇHōĩYŞIYŢģYŚÄZĴŇHĴħHŅìYĸŗHĽ(ZĽgYŁÁWŞGZŚÄYĹ0YŁSZZZZĽwZĬĈWŖAZĽwYĹgYŁTWőŚHŉĊWŞāW0000000000000000000g0000000002c(ë00000000QkKë00000001įAĈħ00000000ô(ìì000000003oÝí400001)Nĵ803;g000îgĚ5;Ŋîsķ000ķ?AĻVÐe-00ËîŀÖğtVŎŇ$g0ðEŅJÇĊ(RDwÝ0yXđĂđİ8ÞØgÝ08ĲFĎķì40ðiĿĖ×ŚlĨ>ĵigSpŌëĊ;ËÈ3ĪİÃĎĬÞd",
"fire10": "0g0gL000ĝgWę0WĝwWġ(WĥÀWĨëWĨKWĥSWġSWġwWĥKWŅìYŉĊWōĹZŉĉZĹ0YĬùWĨÝWİĘWŅÞHŖkHŚ?ZőŊHĽwZĴķHİħHİĘHĽwYŒ3ZőŚYĽgYĸŗHZZZĴŇHĬĈWőŊWŁÁWōĩYĬëWİĈWŁTWĴħHŉúZŚÄYōŊWĽ(Z0000000000000000004w0000000003gg000000000ïoÀë000000005oÝS000000001cg00000000y9001400002EÂİcú180000@(ĺøTkòA000NûÁVÿÎ)Àk00tþăÞľćQüăsw0i3ĉå8ċ8iÂgw01pxï0S003hĎñí4ŌĂÎ9!Ý0!XS}!Óđĩ>ā2ŒÝM04ľāè_xĜĉăĢmS",
"fire11": "0g0gL000ę0WĝgWġwWĥSWĝwWĥÀWġ(WĘŗWĹ0YĽ(ZŁTWĽwYİĘWĥKWġSWĝ0WĬëWŉĊWōĹZŅìYĴŇHĨKWĨëWĬùWĸŗHŉúZĨÝWŅÞHZZZİħHŢĒYİĈWŁSZŁÁWİĘHĴķHĽwZŅÞYőŊHĬĈWZŕZŖBWŖAZŖkHŚÔYŚÔW000000000000000001800000000003gÀ0000000003oÝ000000000840000000000í0000000004Áĩ4wS000004AĊĳ)ŊĬ80004hMAĻVlös005áÆÒCāÙÞÿ;000ľtÖÅă4hQ8001ĞćâÀë0019ĝìÆĿxÂxR4ŗ09ĝëgĹÏ÷SĩüĺİäwS0đöùåń]àĀBŁ0č,×ĖaœãľËãrą",
"fire12": "0g0gM000ę0WĝgWĘŗWĝwWİĈWĴķHĴŇHİħHĨÝWġ(WĥÀWŁÁWŅÎHĽ(ZİĘWġSWĨKWĥKWŁTWĽgYŚÔWŁSZĬĈWŖ*HŢģWĬùWĽwYĹ0YĨëWİĘHŅìYZZZġwWZŕWŉĚHōĩYōĹZŒ3ZőŚZŢĒWĽwZōĺWŖkYĸŗHŞIZŒ4WZZHŖ*Y0000000000000000018(0000000001gw000000000000000000000000000000000S000000002kÎįAĈë00000boĪ};Ĝh40012Ĺx)į]Rô8000ýlÆïĲ00Q0000ěoÑëS0000ĉ04þăMħë0g012ë5ĹsËÝìåhqAg00ÓŁÊďŇNkhqASöşAéđÓíäwĊĂē2ĲKĢŞÑî4łM-w",
"fire13": "0g0g%000ę0WĥÀWĨëWĬùWĨÝWġ(WġwWĸŗHĹgYĴŇHĝgWĝwWġSWĹ0YĴħHŉĊWĬĈWōĩYŒ4WĥSWĽgYİħHĬëWĨKWĴķHĽwYZZZōŊWĽwZŚ@HŁÁWŅìYōĹZŉúZŚÔHŢĒWŅÎWŖkYōĚHŖBWŁ(ZĽ(ZŞāYŖAZ0000000000000000004000000000000000000000000000000000000000000008M5og0000007gí^kÏĮ0000jdgŊX)iĳ0000ĺķxh|0010000ÐJ{SS0000g01T]Uŗ00000ĘS1TmÊÀSKKRo000@?kĭă-ěd?ĨëFľćU-xÛEŋ{ŐÈ1āăĆïŎÛóVĒþł1üćÈ6ŒĚĭłÚĞł",
"fire14": "0g0gL000ĝwWġSWĥSWġ(Wę0WĥKWİĘWİħHĬùWĝgWĨÝWĨëWĽwYĥÀWĴħHŁÁWŅìYĴŇHĨKWĴķHŢģYĽ(ZŉĊWĹ0YŉúZŚÄYŉĚHőŊHŉìYĸŗHŞGYŅÎHĬëWZZZőŚYĽgYĽwZŚÓZŞIZŁ(ZŉĉZŢĲZŢģWŢĳHŞäWŒ3Z0000000000000000000000000000000000000000000000000004wīk00000005oß9cĈ500000aoíb4050000ċdsěì0000000ÃķQĘ00000000hø]ù00000000hò{(04Àak000ŉ}cčlwÁT|ÎS.?Ŀx*āÖÓŃâ[ô0âņìĀÇó.oÏ]Ċ0ĀBy8Ď÷-ĊóEĊCFŏuĀĒæğÙĞEĖ",
"fire15": "0g0g(000ę0WĝgWġ(WĨÝWĨëWĥKWĝwWĬëWĬùWĥÀWĥSWİĘHĹ0YĽgYġSWĬĈWİĘWōĩYĘŗWĽwYĸŇHŁSZōĚHĴŇHĽwZŁÁWōĹZŁÎWZZZŉĊWĸŗHĴķHŚÄZőŊWĽ(ZŖkHŞIZŢĒYŒ4WŅìYŞGZŖAZŞäWŉúZŞòWőŊHŅÞH0000000000000000000000000000000000000000gì000000000cT@s00000000cí^40000002ĳkĈĨ00000002d-Ĉ000000003ķQK000000000ĭ$Ý00000000yîsiik0jdg00ïcgĝÄËðÈÀJR0Äă.úÊâŎŇìşÏ0Òv@,ÑËFËãÔÓ<ŀĴCñÖêĒBĕľÙãľËãŎËã0īâĽŖ",
"fire16": "0g0g)000ę0Wġ(WġSWġwWĝgWĥÀWĝwWĨÝWİĘWİħHĨëWĽgYĥSWİĈWĸŗHŁSZĬĈWĴŇHĨKWŁÁWĴķHĽwYZńYŁÎWİĘHŉĊWĹ0YZZZōĩYŅìYőŚZŢģYŚ@WŢĒHŉúZĴħHŖAZŉĚHŅÎHŖ*YŚÄYĽ(ZŖ*ZōĺWĬëWZZHŞGZZŔZőŊWĬùWőŊH0000000000000000000000000000000000000004wī000000000kÎñ00000001]oxħ00000001òEw000000001į$w000000001>gg000000001541õc004K00ĹI)àøTiJFMë0ÐĻVUĽËíò.þă0BV?ğtåŎŇßnt6Eŋ%[B=ÖŏčĮ!ßğsßĮsÞÃÚġĮ~-ĮÊßŞ(ĮBßĴĮs",
"fire17": "0g0gL000ę0WĝgWĝwWġ(WĨÝWĥÀWĬĈWĥSWİĘWĴķHĥKWĬëWĸŗHĬùWĴŇHŒ4HĽgYĨëWİħHŖAZŅÞHŁSZŅìYŖkHŢĳYōŊWZZZĽwYōĚHĽwZĨKWōĩYŁÁWőŊHŖkYŢģWōĺWŢģHŚÔHŞāZŉĊWĹgYōĹZZńZŞäWZŕH0000000000000000000000000000gì0000000000M1000000004cwS00000000Ĭkw000000000@ow000000000280000000000S00ñ8000w00x]8hPEę{kSë0N|-ĨøTjõkī?0hĮP*lÇÒĿÒĎŃ1ľ÷éōŇ!lĊöĞıJÇăÚĽłÚM÷Ćó}êĒłÛãœĔŊJĕġā1ĚýĝĞŕ-ōłÚðł",
"fire18": "0g0g+000ę0WĘŗWġ(WġSWĝwWġwWĝgWĨÝWĬëWĬĈWĥÀWİĘWŅÞHĴħHĨKWİĈWĥKWĬùWŅìYĽwYĹ0YĽwZŒ4WŅÞYŖBWĹgYĴķHĸŗHŚ?ZİħHŉúZōĹZZZZZZYŚ@WŞIYőŚYŖ*YōĩYŢĳHŢĢZŉĚHŉĉZŚÄYĴŇHŁÁWŖAZŖkHŉìYŅÎHZŕWİĘHĽ(Z0000000000000000000000000000gS000000001800000000003g00000000005o0000000000100000000000000400000000Į018A(īcg00ya$Ęĳ)ŊĲ$Ĝ703į?AĻVVûËðÂ1Ďį%Į|åĎćíoòèĿňï.xXĩĹþÐ_pİŏðÕÖĐü]Ėr!2rÛĦoÑ]ĀÎñ8Î0ţÎģ$łÄoÎć|]",
"fire19": "0g0g;000ĝgWę0Wġ(WġSWĥÀWġwWĝwWĨÝWĹ0YĬëWĥSWĨKWĴķHĴħHİħHĽgYŅÎHĽwYŅìYĬùWİĘWŉĊWĽwZĬĈWĴŇHŁTWŚÔHŖ*YōĹZZZZŢĳHŁÁWŖkHŚ@WĨëWŉúZōŊWĽ(ZŞäWŢĒYŒ4WőŊHĸŗHŒ4HōĺWŢĲZŖBWŞäHőŚYŞāYŁSZŅÎWŚÓZĸŗYōĩZĹgYŞGYŉĚHİĘH00000000000000000000000000000000000000140000000000280000000000000000000000000200000000ë00>gwí80000ĬoÝ]Aĉ3sMS00Ĳcĩ|-ŚÀ?AĪ1RôdVÿKĽÈ|ğ4*7Ìê8ÌòRŊJÇì0ŀDĊÿă{ì5?őē2ĪÓĞŎėÀõuçsđ0ÆuĶ||ŀŎĆŃŅ3ňŕÎŒĝ5úŎąúíu",
"fire20": "0g0g*000ę0WĝgWĝwWĘŗWĥSWĬĈWĥÀWġ(WİĘWĬùWİħHĸŗHĴħHġSWĬëWĽ(ZĴŇHĨëWĹ0YŁ(ZōŊWŉĊWŅÎHZZZŒ4WĹgYōĚHĨÝWŁTWŅìYİĈWŖAZŚ?ZōĩYŢĳYŖkHĥKWĽwZĽgYŉúZŚÄYōĹZĨKWōĺWZŕZŞIZőŚYĴķHŚÄHōĩHŁSZŉĚH00000000000000000000000000000000000000000000000000000000000000000000000000000180000000>4S5oÝì4gë00î8í@EĊô(ĺ00ňĪ8śh]ÏÃÁVìkĝĿÒčĀÚĩsâŊ01ŜŇðEŋãÀĬāñĄ1ßŎĊþ!=ģoĞEk0òŕāłŗ?ðoÜ4RFòrËŞ7ËðlášőfnĉÎð&Îõðc$ś",
"fire21": "0g0g*000ĝgWĥÀWĝwWę0WĨKWĥKWĨÝWĬĈWĨëWĬùWĴķHİħHĸŗHŅÎHĽwYĹ0YŖ*YŅÞHŁTWŚ?ZġwWŁ(ZĽwZōĩYōĹZŅÞYŖ*HōĚHĹgYĥSWġ(WŚÄZĴŇHİĈWŁÎWőŚYŚÔHŅìYŁÁWZZZŚÄHŉĊWōĺWŉúZZńWİĘHĽ(ZĽgYōŊWŖAZŉĉZŢģH0000000000000000000000000000000000000000000000000000000000000000000000000000018(00000040h?oÎñwJë00īgyį8ß{)Ŋħ0áh]ĜĻ{BRTÐ00âĿÒĎŃâŇÍ+5Ī2oö÷PÓsFŏĎ×Ċ0-ØTçcNó%Ęģëêñe;ĉÌĦópħÝöhüęĊóNĊõįcj|0krĊóp&m{Ûö4",
"fire22": "0g0gM000ĝwWġ(WġwWġSWĥÀWĬëWĨÝWİĘWĹ0YİĘHŅìYĬùWĸŗHŉúZĝgWİħHĥSWĴŇHŅÎHŅÞHĽ(ZōĚHĴķHĴħHĽwYőŊHŁ(ZĥKWŚÔWōĹZŁSZę0WİĈWŁÁWŁTWĬĈWŚ@WZZZŚÄZŅÎWŖAZŢĒHŉĊWŞāWōĩYŞIZōŊWŚÄH00000000000000000000000000000000000000000000000000000000000000000040000000000í8wīkSë0000Mñ8T@wJë0ybAĪ})zīSĸë1kûÁVûÊw1FÒħ0ĨĀÑōăÝzËåŞĸ28Ï]ĀŋJÇďĈċ02Āā]ÞQCđē]ÀĄ2ñĲĚÖĕĂŌA=970śėĂÖĕPAň/þëNÓēĂÖĘþÖĎĂÐ0",
"fire23": "0g0g)000ę0WĝgWĥSWġSWĝwWġwWĥÀWĨÝWİĈWĨKWĸŗHİĘWĽwYĬĈWĬùWĽgYŁTWĬëWŁ(ZŅìYĸŗYŉĊWŁÎWĹ0YĴŇHĴķHĨëWŢĢZőŊHĽwZĥKWġ(WŖAZŢĒYŅÞHİħHĹgYŒ3ZZZZŞIZŅÎHŖkYŁÁWĘŗWİĘHŉúZőŚYŢģWŖkHŞđZŞIY00000000000000000000000000000000000000000000000000000000000000000T8gR8w00000gī8ÁñwJë0iôAċd-À?;Ĩħ0Ãg)ĜÀ-w1POħ0Nò%llcÂÄËðS02oMĎiÚÔtäŉë1ãpMŘw×oċù(ì1òÃĂæFĊĒĶaĮĩ0rÛĆåĽÖČiTQSiçĖĆåőĦèDĆãħĭèďĆåŎĆåŎĆèŀ",
"fire24": "0g0gM000ĝgWę0WĝwWġSWĨKWġwWĬùWĥKWġ(WĨÝWİĘHĴħHĴķHİĘWĸŗHĥÀWĥSWĨëWĹ0YĽwYİħHĽgYĽ(ZőŚYŅìYĬĈWĬëWŉĚWŖAZŁSZŉìYZZZōĺWőŊHōĚHŁTWŢĒYŢģHŅÞHŚÄZŅÎHZŕYŉĉZŖ*HŢŃZŁÎWŚÄHŉĊW00000000000000000000000000000000000000000000000000000000000000000T00îgÀħ01ñwJôkw1wĈħ02õ)ŊĴEw0SĻ00kÂ%*lAxÄ|Áħ04}sŊ?xãp<x00ĹŁÚhîÖĮÌÕùë0Ŋ~ê8Äó*i81ë01ŋþÕDMÃ?VOS2ñđíĐxĖbwíĸSĢbŇí8wí8wí65y8wí8wí8mùŃw",
"fire25": "0g0gM000ĘŗWĝgWġwWġSWĝwWġ(WĨÝWĬëWĬùWĨëWİĈWĥÀWİħHĴķHİĘWĨKWŅÎHĽwYĥKWŁTWŉĊWĹ0YĬĈWĽwZŖkYŁÁWĸŗHę0WŚ?ZŞIHŁ(ZĥSWŅìYĽ(ZZZZŞāWŉúZŢģWōĚHŢĳWŖ*ZőŚYŞIYZńYŁSZĴŇHŅÞYĽgY0000000000000000000000000000000000000000000000000000000018(0004kxño00oS0018AĊİg00oëë01{wĺI81ø;î001[Sí{oŋÂ*(ë11Į{Kít?Äsw015ĶÎþ÷?ĎķÝ7004mÒľć;ĚŇsęħ2mŉ÷]Ō×Öŏ÷ú0//ē÷-Ŋ÷-Ŋ÷-Ri-ŊĚ-Ŋ÷-ŉĞŒŒ÷-ŊĦ-Ŋ÷*^ĨĀĬ",
"fire26": "0g0gM000ę0WĝgWġ(WĥÀWĥSWĨKWĝwWĥKWĬëWĬùWĨÝWĸŗHĴķHġSWŁSZĨëWŅÞHĴŇHĹ0YĹgYİħHĴħHŉĉZōĹZőŊHİĘWŚÄZŖBWŞāHŁÁWĽgYőŚYŖAZZZZōĚHŖ*YŉúZŒ4WŢĢZŢģZŢĳYZŔZŢĒWŁ(ZĽ(ZŉĊWōĩYŢĳW00000000000000000000000000000000000000000000000000100î4004w000XgÁXs008À000>wJI40@$Tħ00?kìîsûdAŇ00à÷cwTgĪĴgg00Mù*kó|?Q00001ÄËðÃEJĪ-ëħ1CûÚĮÌê7ĉóMħqPÓĆEĊó!FĒDħaEĊĖEĊóEĔĝ#hóEĊĢEĊó#İ^ōĨ^EĊĩEĊóEĕóEó",
"fire27": "0g0g,000ę0WĝgWĝwWġ(WġwWĥÀWĥKWġSWĥSWĬùWİĈWĸŇHĸŗHİĘWĴħHĽ(ZŅÎHŅÞHİħHĨÝWĨKWĴķHōĹZōĩZŒ3ZĽgYŁÎWĹ0YŉúZZZZŁSZŅìYŚ?ZŚÄHŚÄZŞGZŞIHŚÔWŢĒHZŕZĽwYİĘHŞäWŉĊWōĩYĬëWŁTWōĚHŢĢZZŕHŖkYŚÄYZŕYŞIZ000000000000000000000000000000000000000001000000002cM50000w0002gÎī005g(0003cR24Jóow000î8g0kěag000h6EĹñ-řX00000ıTkûÁÁí8(01?mËðÈÇğtåŗSa7ńïŎĆåŏċJUħ2ÔďāŎĆåőgčÐ×ĕŎĆęŎĆåŒÛ/ţ0|ŎĆĬŎĆåŎùåŎðrDĆç,ĜçÅĆåŎĞ",
"fire28": "0g0g:000ę0WĝgWġwWġ(Wĝ0WĝwWĥÀWĨÝWĬĈWĨKWĬùWĥKWĴŇHĹ0YĥSWĘŗWŁÎWŅÞHŅìYĴķHĸŗHİĘHĽwZŚ@WĸŗYŁSZōĺWZZZőŊHőŚYŒ4WōĹZŖ*YŖkYŞIZĽwYİħHİĘWġSWŉúZŉĊWŉĚHĬëWĽ(ZŞIHŞāHĽgYZZWZńHŚÄHZŔZŢĳZZŕWŁÁWōĚHŢĒWŅÎHŢģW00000000000000000000000000000000000000000T0000000008M2000kg00004xë0xĮg000000004í^80000ðsęīwĚð00000{)ŊôsŘg0000OĲ?AĻBVÿKķ01ýÈÚĮsÞĮÌéĹ027xòĮsÞįŋ/ÇďĉĮsčĮsÞıē$Œ0%ĮsĞŎsÞĮLĩ,6i,sÞœßĶ[*ÞĮvą|ğňĴŠàĔßÞįŖ",
"fire29": "0g0g,000ę0WĘŗWĝgWĝwWġ(WĨKWĥÀWġSWĬùWİħHİĘWĥKWĹ0YĽwYĬĈWĨÝWĨëWĴħHŅìYĬëWĸŗHŅÞYZńWZZZŞāHŉìYŉúZŅÎHŁÁWŖ*HōĹZŢĳYŖBWĴŇHŞäHŢĳZĴķHŚ?ZŖ*YZŕYŞāYŖAZőŚZŞGZōĚHZZHŞāZŞòWZńYŞIZŞäWİĘHZŔZŅÞH0000000000000000000000000000000000000000gS0000000000wS00ī4000000000Áï000001gÞ1kß1000005AĊĳkSħ000016)ŊøSśÂ|S00JļÇãoÎüŁÚĩ01ľćê6oÎI|Iś0Ä-Ņ}@oÎðĸSđSN+AĂæoÎóVĒģ06ŀ&Ï-ŎĎŝ(Įsû6ÅÚöXŚÐ;ĆĬõÏã+dÃ[âĳĹãĲmo",
"fire30": "0g0g+000ĝ0Wġ(WĝgWġwWĝwWĥÀWĨÝWę0WġSWİĘWĴķHĥKWĥSWĨëWĸŗHĽwZŖBWŢģWőŊHĽ(ZŁ(ZĸŇHōĹZŅÎHŚÄZZZZŖ*YōĩZĴŇHİĘHŚÓZĬëWŅìYőŚZőŚHŢĒHŉĊWŚÔHŢĲZŚÄYŞIZĹgYŞäWőŚYŒ4WŚÔWĬùWŁÁWĴħHĽwYZŕWŖkHŞāH0000000000000000000000000000000000000000000000000000000gî0000000(0cTS000003oÞĩcë0000009EĚĮAĪ};ù00úıTkJP)kUř01ÑnÎþĂÖğtäŉSt5ĿÎŝĂPCĮq3ëalĿó.iPCôðpS1åĂĆUÂPČúĊþĒ1őŁĚģÂÖCŔčēóT+ēĦĻĂÖĤ%×ĂÈuáŘ~$ŁPt(Ěþĝ",
"fire31": "0g0gB000ĝwWę0Wġ(WĬëWŁSZġSWĴķHĴŇHĽwYōĩYŅÞHŁ(ZŒ3ZŖ*HŚÓZĥÀWĨÝWŉĊWőŚZŢĳWZZZĽgYőŊHōĺWİĈWĽ(ZŁÁWŖAZŖkYőŚYĬĈWĹ0YōĩZŚ?ZĽwZĸŗH0000000000000000000000000000000000000000000004000000wë00T0000000wĩ0gT0000008TQ4(@00000ĩgÁīsÁĨ000029kì^EĊĮ4000O8gJö-ŊĲt001iÂ|z~<?~ÇÒë1jj]ĝļVVe;ōp0+ăÚ+üVV~UŞp?ľăhşlVVx;ŊĀq8ċÛ]ýVVcXŊ÷íBÏèâVV>üVVm",
"soulLantern0": "0g0gb000<lWP@HAěZ2ÇY#$ZzcHÜYWŞŖZĮZZTBZ1yg000002hw002h0iyx00130kVT00130CGÏ003j0Dòß00000DĀß00130mGÎ003j0iyx00000hĒh00000qyĉ002h0Ċy!00130Ċy!00000qyĉ00000hĒh0000000000000",
"soulLantern1": "0g0ga000<lWP@HAěZ2ÇY#$ZçņYZZZłZZTBZ1yg000002hw002h0iyx00130kVT00130BÓÂ003j0CäÏ00000CñÏ00130lÓÁ003j0iyx00000hāh00000pyú002h0JyF00130JyF00000pyú00000hāh0000000000000",
"soulLantern2": "0g0ga000<lWP@HAěZ2ÇY#$ZGĶHZŖYłŖYTBZ1yg000002hw002h0iyx00130kVT00130BÓÂ003j0CäÏ00000CñÏ00130lÓÁ003j0iyx00000hāh00000pyú002h0JyF00130JyF00000pyú00000hāh0000000000000",
"lantern0": "0g0gc000<lWP@Hò>Wì2WAěZĨíWřQYŢCHZŤHZşYTBZ1yg000003Q(002h0iyx00150@GÑ00150,Ià005l0-Ăî00000-đî00150[Iá005l0iyx00000hģh00000ryę002h0Ěy#00150Ěy#00000ryę00000hģh0000000000000",
"lantern1": "0g0gd000<lWP@Hò>Wì2WAěZĥÞZŕ4HŞmWZŤHŢŎZŕkHTBZ1yg000003Q(002h0iyx00150@GÑ00150,Ià005l0-Ăî00000-đî00150_IĜ005l0iyx00000hĳh00000syĨ002h0ĩy$00150ĩy$00000syĨ00000hĳh0000000000000",
"lantern2": "0g0gc000<lWP@Hò>Wì2WAěZġÞZŕ4HŚ5YZŤHŢŎZTBZ1yg000003Q(002h0iyx00150@GÑ00150,Ià005l0-Ăî00000-đî00150[Iá005l0iyx00000hģh00000ryę002h0Ěy#00150Ěy#00000ryę00000hģh0000000000000",
"magma0": "0g0g9SÁHİ(HÑĊYÀÎYŝiWŌúWÝĪWščYšáH1z3Aw2ÁzÓ(0Bz6TNGÄyÁNÕNUÄ)liUìzxÃxÁzyÒwNg2@(3N@zw+íÐ06ìUiÏXVzAihTlmxÂÁzBzÂwNki(ANR(3Bw2í6Xz0Bz2RjÏÂ(ANÐÂTNÃyÆUìxxV]XÓzÄN*iC@(Nkw",
"magma1": "0g0g9SÁHŌúWÑĊYÀÎYİ(HŝiWÝĪWščYšáH1z3xw2?ÐÓ(0Îz2hNnãCVNxNhm*]ðTlÐA>A?ÐyÕK+S2m(3+ÂÐwNÃz02hUizÁlÐAmïVÁRÕðTzÎzmw+Ái(BNR(3Îw2Â2kz0Az2mÃyi(ÑNÐRoNÃCìTÁAÕUTÆÏzðN)iy@(+]K",
"magma2": "0g0gaSÁHŌúWÑĊYÀÎYŝiWİ(HÝĪWšáHščYŜŘH1z3Aw2?zC(0Dz2âNoðy?NDNhm,ÁRk?zx>FVzyxwNÝ2m(3Nizw+RÐ06?ÁizlÁzÔãklhÂxÂ[ÐAziwNÁm(xNã(3Bw2i6ÞÐ0xz6@jy@(ÑNÏãTNjCnánÎBlVnÓÐ@NMRyi(NÁw",
"crimsonStem0": "0g0g8QîWÀÎWĘJH]ûHä0WüÁHI(ZUěZ0ĎňČMI0ķňčě8/iĵĪíÞTĩ1ĮĠÚLĀÇïŚđvĀç(ĘÞOŚvōjôĶě3ţįÉħgÎdĀW)ÓĳX]ç!úş(ĩĿčíZis1Ĵĩv(óT$Ŋ3īN÷7h8)ĞÖ2þw!úI",
"crimsonStem1": "0g0g8QîWÀÎWI(Z]ûHä0WüÁHUěZĘJH0ĎňČ(I0ħňčě]Niĳ>2åTĩ1[-ÚLoÇïŉúroà(ĘÁWÐuĭjbėO3ĿįÉĈgÎdü+E@ĳXAà!hĘ(ĹĿïíŝhu1öĊuEóT$ĺ3ČO{7ú8)ĞÁ2þw=ú8",
"crimsonStem2": "0g0g8QîWÀÎWI(Z]ûHä0WüÁHĘJHUěZ0ĎňXM]0ħňïěINiĳîíÖìĩ1ñĠ×LĀÇïŚhvĀçEĘÎOřćōJôøě>ţŃÉëgÖdĂW(@ĵČ!çNhş)ĊĿïíZ9k1öĹvEIT$ĺ3XOc6ú8(ĞÎ1mwNh8",
"crimsonStem3": "0g0g8QîWÀÎWä0W]ûHI(ZUěZüÁHĘJH0ĎĸQ(I0ĈĸïĚIFiĳííÁTĊ1ĭĜÂ&üÇĬĹúmĀØ;ĘÁ!ĺąďiô}ěĪĜīÉSgÞdü%ECĵXAØFhÕ(ĊĿ?íŔ9k1|ŉtEXT$ĩîQNó6gIEĞÁ1mgFgI",
"crimsonStem4": "0g0g8QîWÀÎWI(Z]ûHä0WüÁHĘJHUěZ0ĎňČM]0ĈňčĚI!JĴĪíÁìŉ1ďĠÑLĂÇ?ŚxvĂçEĘÎOŚÍōjbøĚîţįÉSgÎdĀWE@ĳX]ç*hş(ĩĿĬíZio1ĕĩv(XT$Ī3XO|6h8(ĞÞ2mw!h]",
"crimsonStemSW0": "0g0g8QîWÀÎWI(ZüÁHĘJH]ûHä0WUěZ0Ď^QoS6ĺoģķëÕŁħZŢòBKÁĤĄÊĈJEDÏ?rbŐĿúÚīÍĵnķã2ťMĦJòBgÝţŋăõŔöŎi9Ñs?-ņŏ+îęĭš%kĜãīs]@h]EĊß$ìHč+ò5iLĜþS",
"crimsonStemSW1": "0g0g8QîWÀÎWä0WüÁHI(Z]ûHĘJHUěZ0Č_ÑoS6ĺwģķëäŁëZšòBħÁĤüUĈJEBy?9bŐ]úÚQÍınķÂ2ťhĦJòBùÀţđrĳīöŌi9Ño?Eņŏ+íň@š%kĤÑQk]?ú]EĩÊ(ìHĎ[ò5iLĜþS",
"crimsonStemSW2": "0g0g8QîWÀÎWä0W]ûHUěZI(ZüÁHĘJH0Č^QkS5Ěù×(ëĠĞëJ@òDKÁÝüVKJoBy>97pĻùłQ.ee(Â1į.ÞJòBgÝùČJ]łôðJ9Qq>-ġo%îÖĬĭrcĒãŋk]?gį)ĊêEëŋÒËò5isÙĂS",
"crimsonStemSW3": "0g0g8QîWÀÎWä0W]ûHUěZI(ZüÁHĘJH0Č^QkS5Ěù×(ëUĞëJ@òCŇÁÝüÂKJoCĊ>97pşùłQ.ee(Â1įMÞûPBgÕùŔ×]č_ñJ9Qk>-ġo%íúčĭrcČÂQk]?gįEĊÂEëŋÒAò5isÙüS",
"crimsonStemSW4": "0g0g8QîWÀÎWüÁHĘJHI(Zä0W]ûHUěZ0Ď{ČqS7ÏĈľň0ĜŔ0ZţòCķÖŃþÑħJ(By@möŘIúĞČÜĴrŇÚ3êFņiòCùÕţīĹüł}ōi9Čq@)Ŗŗ:3Öďè+oıÚČq]?hI)ĹÏ$ìYĭł95i,ĿĂS",
"warpedStem0": "0g0g8QîWQĝZmÄZ]ûHlïYi6HhĞYUěZ0ĎňČMI0ķňčě8/iĵĪíÞTĩ1ĮĠÚLĀÇïŚđvĀç(ĘÞOŚvōjôĶě3ţįÉħgÎdĀW)ÓĳX]ç!úş(ĩĿčíZis1Ĵĩv(óT$Ŋ3īN÷7h8)ĞÖ2þw!úI",
"warpedStem1": "0g0g8QîWQĝZhĞY]ûHlïYi6HUěZmÄZ0ĎňČ(I0ħňčě]Niĳ>2åTĩ1[-ÚLoÇïŉúroà(ĘÁWÐuĭjbėO3ĿįÉĈgÎdü+E@ĳXAà!hĘ(ĹĿïíŝhu1öĊuEóT$ĺ3ČO{7ú8)ĞÁ2þw=ú8",
"warpedStem2": "0g0g8QîWQĝZhĞY]ûHlïYi6HmÄZUěZ0ĎňXM]0ħňïěINiĳîíÖìĩ1ñĠ×LĀÇïŚhvĀçEĘÎOřćōJôøě>ţŃÉëgÖdĂW(@ĵČ!çNhş)ĊĿïíZ9k1öĹvEIT$ĺ3XOc6ú8(ĞÎ1mwNh8",
"warpedStem3": "0g0g8QîWQĝZlïY]ûHhĞYUěZi6HmÄZ0ĎĸQ(I0ĈĸïĚIFiĳííÁTĊ1ĭĜÂ&üÇĬĹúmĀØ;ĘÁ!ĺąďiô}ěĪĜīÉSgÞdü%ECĵXAØFhÕ(ĊĿ?íŔ9k1|ŉtEXT$ĩîQNó6gIEĞÁ1mgFgI",
"warpedStem4": "0g0g8QîWQĝZhĞY]ûHlïYi6HmÄZUěZ0ĎňČM]0ĈňčĚI!JĴĪíÁìŉ1ďĠÑLĂÇ?ŚxvĂçEĘÎOŚÍōjbøĚîţįÉSgÎdĀWE@ĳX]ç*hş(ĩĿĬíZio1ĕĩv(XT$Ī3XO|6h8(ĞÞ2mw!h]",
"warpedStemSW0": "0g0g8QîWQĝZhĞYi6HmÄZ]ûHlïYUěZ0Ď^QoS6ĺoģķëÕŁħZŢòBKÁĤĄÊĈJEDÏ?rbŐĿúÚīÍĵnķã2ťMĦJòBgÝţŋăõŔöŎi9Ñs?-ņŏ+îęĭš%kĜãīs]@h]EĊß$ìHč+ò5iLĜþS",
"warpedStemSW1": "0g0g8QîWQĝZlïYi6HhĞY]ûHmÄZUěZ0Č_ÑoS6ĺwģķëäŁëZšòBħÁĤüUĈJEBy?9bŐ]úÚQÍınķÂ2ťhĦJòBùÀţđrĳīöŌi9Ño?Eņŏ+íň@š%kĤÑQk]?ú]EĩÊ(ìHĎ[ò5iLĜþS",
"warpedStemSW2": "0g0g8QîWQĝZlïY]ûHUěZhĞYi6HmÄZ0Č^QkS5Ěù×(ëĠĞëJ@òDKÁÝüVKJoBy>97pĻùłQ.ee(Â1į.ÞJòBgÝùČJ]łôðJ9Qq>-ġo%îÖĬĭrcĒãŋk]?gį)ĊêEëŋÒËò5isÙĂS",
"warpedStemSW3": "0g0g8QîWQĝZlïY]ûHUěZhĞYi6HmÄZ0Č^QkS5Ěù×(ëUĞëJ@òCŇÁÝüÂKJoCĊ>97pşùłQ.ee(Â1įMÞûPBgÕùŔ×]č_ñJ9Qk>-ġo%íúčĭrcČÂQk]?gįEĊÂEëŋÒAò5isÙüS",
"warpedStemSW4": "0g0g8QîWQĝZi6HmÄZhĞYlïY]ûHUěZ0Ď{ČqS7ÏĈľň0ĜŔ0ZţòCķÖŃþÑħJ(By@möŘIúĞČÜĴrŇÚ3êFņiòCùÕţīĹüł}ōi9Čq@)Ŗŗ:3Öďè+oıÚČq]?hI)ĹÏ$ìYĭł95i,ĿĂS",
endRod: "0g0gcŞõZÞþH000ZZZŞĔZĚĢYŞĵHó7ZZŅHZņHZĴHZĤZ00hyyz2yQ0ÁyywNyÑnÞyyyyyIâÅyyyyyîâÅyyyyyOâÅyyyyyOâÅyyyyyOhhyyyyyûyyyyyyyIyyyyyyyIyyyyyyyóyyyyyyyĜyyyyyyyĜyyyyyyy0yyyyyyyyyyyyyyy",
endRod2: "0g0gc000ŞõZZZZÞþHó7ZĚĢYŞĔZZŅHZĴHŞĵHZņHZĤZ000000000000000000000000i0000000x00000000000000000000000000000000000000000000000O)Q>0000*?VÃ0000h?VÃ0000h)Q>0000mÔyyDäÓgmÿßyďGģg",
//pretty: "0g0g40001blc009d4hc009efw01ulak1c3300022112200033333022111122033303332112211233300033312222133300022333222233322022113330033311222112233333322112112220333302221111222033330222112112233333322112221133300333112202233322223332200033312222133300033321122112333033302211112203333300222112200033",
//pigFace: "0g0gr000006w14172ew1hejb3s1heul881luzbw81lvx4oo1o2w1dk1qb44541qbfcoo1sj0ws81sjc3qw1sjc5bs1sjndvc1sjnfg81sjynzs1sjypko1sk9y481skl9tk1ur8we01urk6ig1urvf201urvgmw1urvi7s1us6p6g1us6qrc1ustb081x2x0xkaa669999ddddbbddaa669999ddddbbdd7766ccii99kknnnn7766ccii99kknnnn88cceeeeddddeenn88cceeeeddddeenn00qqbbbbjjjjqq0000qqbbbbjjjjqq0099ddhhppppppggdd99ddhhppppppggddcccc11ddff11llllcccc11ddff11llll999922335544oomm999922335544oommbbbbddeellffffnnbbbbddeellffffnn",
/*
steveFace: "0g0gw08wkrnc0b4hipk0b4sr940dcpjw80fkxji00hs7rw80hsj0fs0hsuak80m9axh40sxbw8o0sxbxtk0xdgohk0zloo3c0zlopo811ta86w11twpa0141thx416a1hiw16acrnc16ao3co18i9h4o1aqhlh41aqsvlk1ar45q01cypmns1cz0ws81cz0yd41czc5bs1f78we01f78xyw1hfh0qg1x2x0xk221111110000111122111111000011111111113377441111111111337744111111rrttuuttttll3311rrttuuttttll33mmppmmnnjjttiiiimmppmmnnjjttiiiippvv88oott88vvmmppvv88oott88vvmmhhooqqaaaasskkcchhooqqaaaasskkccgggg66eeee66ffddgggg66eeee66ffdd999966556666ddbb999966556666ddbb",
steveHeadTop: "0g0g406ocs1k08w9j3s08wkrnc0b4hipk3333223333222200333322333322221133223333332222223322333333222222333333223322222233333322332222222233332233333333223333223333333333333322223333333333332222333333333322223333333333332222333333333322333333113333332233332200333333333322222233333333222222223333",
lexiFace: "0g0g6009pbso06oo3qw1urv2ew1utfnco1wxln201x2x0xk3333333333333333333333333333333333332222222233333333222222223333331111222211113333111122221111333355002222005533335500222200553333550022220055333355002222005533332222222222223333222222222222333322224444222233332222444422223333332222222233333333222222223333",
lexiTop: "0g0g11utfnco0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
sarahFace: "0g0g6009ehh406o1hx406oo3qw1wugttk1x1114o1x2x0xk1111111111111111111111111111111111114411111111111111441111111111111122441111111111112244111111111155004444111111115500444411111111550044444411111155004444441111114444444444441111444444444444111144443333444411114444333344441111444444444444111144444444444411",
sarahTop: "0g0g106o1hx40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
sallyFace: "0g0g6000006w006lb0806oo3qw1sgim7s1wzrth41x2x0xk0000000000000000000000000000000000004444444400000000444444440000000022444422000000002244442200000000114444110000000011444411000000551144441155000055114444115500004444444444440000444444444444000044443333444400004444333344440000444444444444000044444444444400",
sallyTop: "0g0g1000006w0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
face: "0g0g60077lrs0fkme480ohifp41unspvc1x1114o1x2x0xk1111111111111111111111111111111111114444444411111111444444441111112222444422221111222244442222111155004444005511115500444400551111550044440055111155004444005511114444444444441111444444444444111144443333444411114444333344441111444444444444111144444444444411",
faceTop: "0g0g10fkme480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
//*/
cowSide:"0g0g400000000qoh7n40qoh7nc1uuozqw0000000000000000000000000000000000000000000000000000000000000000001111111111100011111111331111112233222333322322223332233332332222333222332233222233322222223322222222233322332222222222222222220220000000002200022000000000220002200000000022000220000000002200",
cow: "0g0g20xd56go1uuozqw0000000000000000000100000001110000111000100111100011100000001111000110000000111100000001100001110010000111000000001100111100000000010011100110000000011100011000100001110000000011000000000001101100110000000100110011100011000010001111000110000000011100011100",
error:function(n){
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
let p = false
if(x>=8){
if(y>=8){
p=true
}
}else{
if(y<8){
p=true
}
}
if(p){
setPixel(n, x, y, 0, 0, 0);
}else{
setPixel(n, x, y, 255, 0, 255);
}
}
}
}//"0g0g2000006w1ulbvg81111111100000000111111110000000011111111000000001111111100000000111111110000000011111111000000001111111100000000111111110000000000000000111111110000000011111111000000001111111100000000111111110000000011111111000000001111111100000000111111110000000011111111",
}
window.textures = textures
var tickSpeed = 1000/20
const animated = {
Water:{
time:2,
arr:(function(){var a=[]; for(var i=0; i<32; i++)a.push("water"+i); return a})(),
tint:[10,30,255]
},
portal:{
time:1,
arr:(function(){var a=[]; for(var i=0; i<32; i++)a.push("netherPortal"+i); return a})()
},
Lava:{
time:2,
arr: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1].map(v => "lava"+v),
},
prismarine:{
time:300,
arr:[0,1,0,2,0,3,0,1,2,1,3,1,0,2,1,2,3,2,0,3,1,3].map(v => "prismarine"+v),
interpolate:true
},
seaLantern:{
time:5,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("seaLantern"+i); return a})(),
},
stonecutterSaw:{
time:1,
arr:["stonecutterSaw0","stonecutterSaw1","stonecutterSaw2"]
},
fire:{
time:1,
arr:(function(){var a=[]; for(var i=0; i<32; i++)a.push("fire"+i); return a})(),
},
lantern:{
time:8,
arr:["lantern0","lantern1","lantern2"]
},
soulLantern:{
time:8,
arr:["soulLantern0","soulLantern1","soulLantern2"]
},
magma:{
time:8,
arr:["magma0","magma1","magma2"],
interpolate:true
},
warpedStemSide:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("warpedStem"+i); return a})(),
interpolate:true
},
warpedStemSW:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("warpedStemSW"+i); return a})(),
interpolate:true
},
crimsonStemSide:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("crimsonStem"+i); return a})(),
interpolate:true
},
crimsonStemSW:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("crimsonStemSW"+i); return a})(),
interpolate:true
},
}
for(var a in animated){
animated[a].time *= tickSpeed
}
window.animated = animated
const blockData = [
{
name: "air",
id: 0,
textures: [],
transparent: true,
shadow: false,
},
{
name: "grass",
Name: "Grass Block",
textures: [ "dirt", "grassTop", "grassSide" ],
breakTime: 0.9,
drop:"dirt",
type:"ground",
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{ name: "dirt", Name:"Dirt", breakTime:0.75, type:"ground",
digSound: ["block.gravel.dig1", "block.gravel.dig2", "block.gravel.dig3", "block.gravel.dig4"],
stepSound: ["block.gravel.step1", "block.gravel.step2","block.gravel.step3","block.gravel.step4"]
},
{ name: "stone", Name:"Stone", drop:"cobblestone", type:"rock1", breakTime:7.5, stoneSound:true},
{ name: "bedrock", Name:"Bedrock", breakTime:Infinity, stoneSound:true},
{ name: "sand", Name:"Sand", breakTime:0.75,
onupdate: function(x,y,z,b){
fall(x,y,z,b)
},
digSound: ["block.sand.dig1", "block.sand.dig2", "block.sand.dig3", "block.sand.dig4"],
stepSound: ["block.sand.step1", "block.sand.step2","block.sand.step3","block.sand.step4","block.sand.step5"]},
{ name: "gravel", Name:"Gravel", breakTime:0.9, type:"ground",
onupdate: function(x,y,z){
fall(x,y,z,blockIds.gravel)
},
drop: function(){
if(round(random(10)) === 1) return "flint"
else return "gravel"
},
digSound: ["block.gravel.dig1", "block.gravel.dig2", "block.gravel.dig3", "block.gravel.dig4"],
stepSound: ["block.gravel.step1", "block.gravel.step2","block.gravel.step3","block.gravel.step4"]},
{
name: "leaves",
Name: "Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "oakSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "glass",
Name:"Glass",
transparent: true,
shadow: false,
breakTime: 0.45,
type: "glass",
glassSound: true
},
{ name: "cobblestone", Name:"Cobblestone", breakTime:10, type:"rock1", stoneSound:true},
{ name: "mossyCobble", Name:"Mossy Cobblestone", breakTime:10, type:"rock1", stoneSound:true},
{ name: "stoneBricks", Name:"Stone Bricks", breakTime:7.5, type:"rock1", stoneSound:true},
{ name: "mossyStoneBricks", Name:"Mossy Stone Bricks", breakTime:7.5, type:"rock1", stoneSound:true},
{ name: "bricks", Name:"Bricks", breakTime:10, type:"rock1", stoneSound:true},
{ name: "coalOre", Name:"Coal Ore", breakTime:15, type:"rock1", drop:"coal", stoneSound:true, experience:0.1},
{ name: "ironOre", Name:"Iron Ore", breakTime:15, type:"rock2", drop:"rawIron", stoneSound:true},
{ name: "goldOre", Name:"Gold Ore", breakTime:15, type:"rock3", drop:"rawGold", stoneSound:true},
{ name: "diamondOre", Name:"Diamond Ore", breakTime:15, type:"rock3", drop:"diamond", stoneSound:true, experience:1},
{ name: "redstoneOre", Name:"Redstone Ore", breakTime:15, type:"rock3", stoneSound:true, drop:"redstoneDust", dropAmount:[4,5], experience:0.3},
{ name: "lapisOre", Name:"Lapis Lazuli Ore", breakTime:15, type:"rock2", drop:"lapisLazuli", stoneSound:true, experience:0.5},
{ name: "emeraldOre", Name:"Emerald Ore", breakTime:15, type:"rock3", drop:"emerald", stoneSound:true, experience:1.5},
{ name: "coalBlock", Name:"Block of Coal", breakTime:25, type:"rock1", stoneSound:true},
{ name: "ironBlock", Name:"Block of Iron", breakTime:25, type:"metal2", stoneSound:true},
{ name: "goldBlock", Name:"Block of Gold", breakTime:15, type:"metal3", stoneSound:true},
{ name: "diamondBlock", Name:"Block of Diamond", breakTime:25, type:"metal3", stoneSound:true},
{ name: "redstoneBlock", Name:"Block of Redstone", breakTime:25, type:"metal1", stoneSound:true},
{ name: "lapisBlock", Name:"Block of Lapis Lazuli", breakTime:15, type:"metal2", stoneSound:true},
{ name: "emeraldBlock", Name:"Block of Emerald", breakTime:25, type:"metal3", stoneSound:true},
{ name: "oakPlanks", Name:"Oak Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "oakLog",
Name:"Oak Log",
textures: [ "logTop", "logSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "acaciaPlanks", Name:"Acacia Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "acaciaLog",
Name:"Acacia Log",
textures: [ "acaciaLogTop", "acaciaLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "birchPlanks", Name:"Birch Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "birchLog",
Name:"Birch Log",
textures: [ "birchLogTop", "birchLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "darkOakPlanks", Name:"Dark Oak Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "darkOakLog",
Name:"Dark Oak Log",
textures: [ "darkOakLogTop", "darkOakLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "junglePlanks", Name:"Jungle Planks", type:"wood", breakTime:3,woodSound:true},
{
name: "jungleLog",
Name:"Jungle Log",
textures: [ "jungleLogTop", "jungleLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "sprucePlanks", Name:"Spruce Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "spruceLog",
Name:"Spruce Log",
textures: [ "spruceLogTop", "spruceLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "whiteWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "orangeWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "magentaWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "lightBlueWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "yellowWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "limeWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "pinkWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "grayWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "lightGrayWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "cyanWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "purpleWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "blueWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "brownWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "greenWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "redWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "blackWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "whiteConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "orangeConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "magentaConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "lightBlueConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "yellowConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "limeConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "pinkConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "grayConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "lightGrayConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "cyanConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "purpleConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "blueConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "brownConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "greenConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "redConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "blackConcrete", breakTime:9, type:"rock1", stoneSound:true},
{
name: "bookshelf",
Name:"Bookshelf",
textures: [ "oakPlanks", "bookshelf" ],
stoneSound: true,
type:"wood", 
},
{ name: "netherrack",
Name:"Netherrack",
digSound: ["block.netherrack.dig1", "block.netherrack.dig2", "block.netherrack.dig3", "block.netherrack.dig4", "block.netherrack.dig5", "block.netherrack.dig6"],
stepSound: ["block.netherrack.step1", "block.netherrack.step2","block.netherrack.step3","block.netherrack.step4","block.netherrack.step5","block.netherrack.step6"]},
{ name: "soulSand",
Name:"Soul Sand",
speedFactor: 0.5,
digSound: ["block.soul_sand.dig1", "block.soul_sand.dig2", "block.soul_sand.dig3", "block.soul_sand.dig4", "block.soul_sand.dig5", "block.soul_sand.dig6","block.soul_sand.step7","block.soul_sand.step8","block.soul_sand.step9"],
stepSound: ["block.soul_sand.step1", "block.soul_sand.step2","block.soul_sand.step3","block.soul_sand.step4","block.soul_sand.step5","block.soul_sand.step6"]},
{
name: "glowstone",
Name:"Glowstone",
lightLevel: 15,
glassSound: true
},
{ name: "netherBricks",
Name:"Nether Bricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "redNetherBricks",
Name:"Red Nether Bricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "netherQuartzOre", 
Name:"Nether Quartz Ore",
digSound: ["block.nether_ore.dig1", "block.nether_ore.dig2", "block.nether_ore.dig3", "block.nether_ore.dig4"],
stepSound: ["block.nether_ore.step1", "block.nether_ore.step2","block.nether_ore.step3","block.nether_ore.step4","block.nether_ore.step5"]},
{
name: "quartzBlock",
name:"Block of Quartz",
textures: ["quartzBlockBottom", "quartzBlockTop", "quartzBlockSide"],
stoneSound: true
},
{
name: "quartzPillar",
Name:"Pillar",
textures: ["quartzPillarTop", "quartzPillar"],
stoneSound: true
},
{
name: "chiseledQuartzBlock",
Name:"Chiseled Quartz Block",
textures: ["chiseledQuartzBlock", "chiseledQuartzBlockTop"],
stoneSound: true
},
{ name: "chiseledStoneBricks", Name:"Chiseled Stone Bricks", stoneSound:true},
{ name: "smoothStone", Name:"Smooth Stone (it doesn't really look like stone)", stoneSound:true},
{ name: "andesite", Name:"Andesite", stoneSound:true},
{ name: "polishedAndesite", Name:"Polished Andesite", stoneSound:true},
{ name: "diorite", Name:"Diorite", stoneSound:true},
{ name: "polishedDiorite", Name:"Polished Diorite", stoneSound:true},
{ name: "granite", Name:"Granite", stoneSound:true},
{ name: "polishedGranite", Name:"Polished Granite", stoneSound:true},
{
name: "tnt",
Name:"Trinitrotoluene",
textures: ["tntBottom", "tntTop", "tntSides"],
//onupdate: function(x,y,z){
//  explode(x,y,z,5)
//}, flint and steel explodes it
explode: function(x,y,z){
world.setBlock(x,y,z,0)
world.addEntity(new PrimedTNT(x,y,z))
playSound("entity.tnt.fuse", 0, posSound(x,y,z))
},
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "portal",
solid:false,
shadow: false,
portal: true,
transparent:true,
lightLevel: 11,
ontouch: function(){
portalEffect += 2
if(portalEffect >= 100){
portalEffect = 0
//releasePointer()
if(world.type === "nether"){
world = dimensions.overworld
//world.loadSave(world.getSaveString())
//changeScene("loading")
}else{
world = dimensions.nether
//world.loadSave(world.getSaveString())
//changeScene("netherLoading")
}
playSound("block.portal.travel")
if(multiplayer) send({type:"playSound", data:"block.portal.travel", x:p.x,y:p.y,z:p.z})
}
},
glassSound: true
},
{ name: "obsidian", Name:"Obsidian", stoneSound:true},
{
name:"redstoneDust",
flatIcon:true,
iconTexture:"redstone",
/*onupdate: function(x,y,z){
var neigbors = [
world.getBlock(x+1,y,z),
world.getBlock(x-1,y,z),
world.getBlock(x,y,z+1),
world.getBlock(x,y,z-1),
world.getBlock(x,y+1,z),
world.getBlock(x,y-1,z)
];
if(neigbors.includes(blockIds.redstoneBlock) || neigbors.includes(blockIds.redstoneDustOn)){
world.setBlock(x,y,z, blockIds.redstoneDustOn, false, true)
}
}*/
},
{
name:"redstoneDustOn",
hidden: true,
/*onupdate: function(x,y,z){
var checked = []
function touchingSource(x,y,z, t){
t = t || 0;
t ++;
var neighbors = [
[x+1,y,z],
[x-1,y,z],
[x,y,z+1],
[x,y,z-1],
[x,y+1,z],
[x,y-1,z]
];
for(var i=0; i<neighbors.length; i++){
var value = neighbors[i];
var block = world.getBlock(value[0], value[1], value[2])
if(block === blockIds.redstoneBlock){
return true;
}
if(t<10){
if( !(checked.includes[value]) && (block === blockIds.redstoneDust || block === blockIds.buffer) && touchingSource(value[0], value[1], value[2], t)){
checked.push(value);
return true
};
}
}
return false;
}
if(!touchingSource(x,y,z)){
world.setBlock(x,y,z, blockIds.redstoneDust);
}
//world.setBlock(x,y,z, blockIds.redstoneDust);
}*/
},
{
name: "buffer",
textures: ["bufferTop", "bufferMiddle"],
onupdate: function(x,y,z){
setTimeout(() => {
var isOn = world.getBlock(x,y+1,z);
isOn = isOn === blockIds.redstoneDustOn || isOn === blockIds.redstoneBlock;
if(isOn && world.getBlock(x,y-1,z) === blockIds.redstoneDust ){
setTimeout(function(){world.setBlock(x,y-1,z, blockIds.redstoneDustOn)}, 500);
}
}, 10)
}
},
{ name: "soup"},
{ name: "soup2"},
{
name: "soup3",
transparent:true,
},
{ name: "soup4"},
{ name: "randomSoup"},
{
name: "redStain",
transparent: true,
},
{
name:"poision potion",
transparent:true,
crossShape:true,
},
{
name: "light",
textures: "none",
transparent:true,
lightLevel: 15,
solid: false,
icon: "glass",
shadow: false
},
{
name: "autumnLeaves",
transparent: true,
},
{
name: "darkLeaves",
transparent: true,
},
{
name: "redBerryLeaves",
transparent: true,
},
{
name: "blueBerryLeaves",
transparent: true,
},
{
name: "pinkLeaves",
transparent: true,
},
{ name: "flowerOftheValley",
Name:"Flower of The Valley",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "poppy",
Name:"Poppy",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "dandelion",
Name:"Dandelion",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "blueOrchid",
Name:"Blue Orchid",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{ name: "pinkTulip",
Name:"Pink Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "orangeTulip",
Name:"Orange Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "redTulip",
Name:"Red Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "whiteTulip",
Name:"White Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "azureBluet",
Name:"Azure Bluet",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "cornFlower",
Name:"Cornflower",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "purpleFlower",
Name:"Purple Flower (i don't think this exsists in minecraft)",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "allium",
Name:"Allium",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "oxeyeDaisy",
Name:"Oxeye Daisy",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "lilac",
Name:"Lilac",
solid: false,
transparent: true,
shadow: false,
textures: "lilacTop",
tallcrossShape: true,
},
{ name: "roseBush",
Name:"Rose Bush",
solid: false,
transparent: true,
shadow: false,
textures: "roseBushTop",
tallcrossShape: true,
},
{ name: "peony",
Name:"Peony",
solid: false,
transparent: true,
shadow: false,
textures: "peonyTop",
tallcrossShape: true,
},
{ name: "witherRose",
Name:"Wither Rose",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
ontouch: () => {witherEffect = 120; witherDamage = 1; witherTime = 2000}
},
{ name: "TallGrass",
Name:"Grass",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
drop: "wheatSeeds",
dropAmount:[0,1],
dropSelfWhenSheared:true,
shearDropAmount:1
},
{ 
name: "oakDoor",
Name:"Oak Door",
transparent: true,
shadow: false,
textures: "oakDoorBottom",
door:true,
woodSound:true
},
{
name: "spruceDoor",
Name:"Spruce Door",
transparent: true,
shadow: false,
textures:"spruceDoorBottom",
door:true,
woodSound:true
},
{
name: "ironDoor",
Name:"Iron Door",
transparent: true,
shadow: false,
textures:"ironDoorBottom",
door:true,
woodSound:true
},
{
name: "darkOakDoor",
Name:"Dark Oak Door",
transparent: true,
shadow: false,
textures:"darkOakDoorBottom",
door:true,
woodSound:true
},
{
name: "birchDoor",
Name:"Birch Door",
transparent: true,
shadow: false,
textures:"birchDoorBottom",
door:true,
woodSound:true
},
{
name: "jungleDoor",
Name:"Jungle Door",
transparent: true,
shadow: false,
textures:"jungleDoorBottom",
door:true,
woodSound:true
},
{
name: "acaciaDoor",
Name:"Acacia Door",
transparent: true,
shadow: false,
textures:"acaciaDoorBottom",
door:true,
woodSound:true
},
{
name: "warpedDoor",
Name:"Warped Door",
transparent: true,
shadow: false,
textures:"warpedDoorBottom",
door:true,
woodSound:true
},
{
name: "crimsonDoor",
Name:"Crimson Door",
transparent: true,
shadow: false,
textures:"crimsonDoorBottom",
door:true,
woodSound:true
},
{
name: "torch",
Name:"Torch",
transparent: true,
shadow: false,
torch: true,
lightLevel: 13,
woodSound:true,
solid:false,
drop:"torch"
},
{
name: "soulTorch",
Name:"Soul Torch",
transparent: true,
shadow: false,
torch: true,
lightLevel: 10,
woodSound:true
},
{
name: "lantern",
Name:"Lantern",
transparent: true,
shadow: false,
lightLevel: 13,
iconTexture: "lanternIcon",
lantern: true,
digSound: ["block.lantern.dig1", "block.lantern.dig2", "block.lantern.dig3", "block.lantern.dig4", "block.lantern.dig5", "block.lantern.dig6"],
placeSound: ["block.lantern.place1", "block.lantern.place2","block.lantern.place3","block.lantern.place4","block.lantern.place5","block.lantern.place6"]
},
{
name: "soulLantern",
Name:"Soul Lantern",
transparent: true,
shadow: false,
lightLevel: 10,
iconTexture:"soulLanternIcon",
lantern: true,
digSound: ["block.lantern.dig1", "block.lantern.dig2", "block.lantern.dig3", "block.lantern.dig4", "block.lantern.dig5", "block.lantern.dig6"],
placeSound: ["block.lantern.place1", "block.lantern.place2","block.lantern.place3","block.lantern.place4","block.lantern.place5","block.lantern.place6"]
},
{
name: "beacon",
Name:"Beacon",
transparent: true,
shadow: false,
beacon: true,
lightLevel: 15,
glassSound: true
},
{
name: "cactus",
Name:"Cactus",
textures: ["cactusBottom", "cactusTop", "cactusSide"],
transparent: true,
cactus: true,
damage: 1,
potCross: true
},
{
name: "glassPane",
Name:"Glass Pane",
transparent: true,
shadow: false,
breakTime: 60,
pane:true,
textures: ["glassPaneTop","glassPaneTop","glass","glass","glassPaneSide","glassPaneSide"],
glassSound: true
},
{ name: "ladder",
Name:"Ladder",
transparent: true,
shadow: false,
wallFlat: true,ladder:true
},
{ name: "vine",
Name:"Vine",
transparent: true,
shadow: false,
wallFlat: true,ladder:true,
noDrop:true,
dropSelfWhenSheared:true,
shearBreakTime:0.35
},
{
name: "Water",
transparent: true,
liquid: true,
solid:false,
shadow: false, //to hide faces
semiTrans: true
},
{
name: "Lava",
transparent: true,
liquid: true,
solid:false,
lightLevel:15,
damage:4,
burnPlayer:true,
dieMessage: () => username+" tried to swim in lava.",
shadow: false
},
{
name: "craftingTable",
Name:"Crafting Table",
textures: ["oakPlanks","craftingTableTop","craftingTableFront","craftingTableSide"],
onclick: () => {changeScene("crafting"); releasePointer()},
woodSound: true
},
{
name: "crimsonNylium",
textures: ["netherrack", "crimsonNyliumTop", "crimsonNyliumSide"],
nyliumSound: true
},
{
name: "warpedNylium",
textures: ["netherrack", "warpedNyliumTop", "warpedNyliumSide"],
nyliumSound: true
},
{
name: "crimsonStem",
textures: ["crimsonStemTop", "crimsonStemSide"],
stemSound: true
},
{
name: "warpedStem",
textures: ["warpedStemTop", "warpedStemSide"],
stemSound: true
},
{ name: "netherWartBlock",
digSound: ["block.netherwart.dig1", "block.netherwart.dig2", "block.netherwart.dig3", "block.netherwart.dig4", "block.netherwart.dig5", "block.netherwart.dig6"],
stepSound: ["block.netherwart.step1", "block.netherwart.step2","block.netherwart.step3","block.netherwart.step4","block.netherwart.step5"]},
{ name: "warpedWartBlock",
digSound: ["block.netherwart.dig1", "block.netherwart.dig2", "block.netherwart.dig3", "block.netherwart.dig4", "block.netherwart.dig5", "block.netherwart.dig6"],
stepSound: ["block.netherwart.step1", "block.netherwart.step2","block.netherwart.step3","block.netherwart.step4","block.netherwart.step5"]},
{ name: "shroomlight", lightLevel:15,
digSound: ["block.shroomlight.dig1", "block.shroomlight.dig2", "block.shroomlight.dig3", "block.shroomlight.dig4", "block.shroomlight.dig5"],
stepSound: ["block.shroomlight.step1", "block.shroomlight.step2","block.shroomlight.step3","block.shroomlight.step4","block.shroomlight.step5","block.shroomlight.step6"]},
{ 
name: "warpedFungus",
solid: false,
shadow: false,
transparent: true,
crossShape: true,
potCross: true,
digSound: ["block.fungus.dig1", "block.fungus.dig2", "block.fungus.dig3", "block.fungus.dig4", "block.fungus.dig5", "block.fungus.dig6"]
},
{
name: "blackstone",
textures: ["blackstoneTop", "blackstone" ],
stoneSound: true
},
{ name: "gildedBlackstone", stoneSound: true},
{ name: "polishedBlackstoneBricks", stoneSound: true},
{ name: "chiseledPolishedBlackstone", stoneSound: true},
{
name: "netheriteBlock",
type:"rock4",
breakTime:250,
digSound: ["block.netherite.dig1", "block.netherite.dig2", "block.netherite.dig3", "block.netherite.dig4"],
stepSound: ["block.netherite.step1", "block.netherite.step2","block.netherite.step3","block.netherite.step4","block.netherite.step5","block.netherite.step6"]
},
{
name: "basalt",
textures: [ "basaltTop", "basaltSide" ],
basaltSound: true
},
{
name: "polishedBasalt",
textures: [ "polishedBasaltTop", "polishedBasaltSide" ],
basaltSound: true
},
{ name: "chain", transparent:true, shadow:false, chain:true, iconTexture:"chainIcon",
digSound: ["block.chain.dig1", "block.chain.dig2", "block.chain.dig3", "block.chain.dig4"],
stepSound: ["block.chain.step1", "block.chain.step2","block.chain.step3","block.chain.step4","block.chain.step5","block.chain.step6"]},
{ name: "warpedPlanks", woodSound:true},
{ 
name: "warpedTrapdoor",
transparent: true,
shadow: false,
trapdoor: true,
woodSound:true
},
{ name: "magma", Name:"Magma Block", lightLevel:15},
{
name: "crimsonFungus",
solid: false,
shadow: false,
transparent: true,
crossShape: true,
potCross: true,
digSound: ["block.fungus.dig1", "block.fungus.dig2", "block.fungus.dig3", "block.fungus.dig4", "block.fungus.dig5", "block.fungus.dig6"]
},
{ 
name: "warpedRoots",
transparent: true,
solid: false,
shadow: false,
crossShape: true,
rootSound: true
},
{ 
name: "crimsonRoots",
transparent: true,
solid: false,
shadow: false,
crossShape: true,
rootSound: true
},
{ 
name: "twistingVines",
transparent: true,
solid: false,
shadow: false,
transparent: true,
crossShape: true
},
{ 
name: "twistingVinesPlant",
transparent: true,
solid: false,
shadow: false,
transparent: true,
crossShape: true
},
{ 
name: "weepingVines",
transparent: true,
solid: false,
shadow: false,
crossShape: true
},
{ 
name: "weepingVinesPlant",
transparent: true,
solid: false,
shadow: false,
crossShape: true
},
{ 
name: "netherSprouts",
solid: false,
shadow: false,
transparent: true,
crossShape: true,
digSound: ["block.nether_sprouts.dig1", "block.nether_sprouts.dig2", "block.nether_sprouts.dig3", "block.nether_sprouts.dig4"],
stepSound: ["block.nether_sprouts.step1", "block.nether_sprouts.step2","block.nether_sprouts.step3","block.nether_sprouts.step4","block.nether_sprouts.step5"]
},
{ name: "stoneButton", textures:"stone", button:true, transparent: true },
{ 
name: "RespawnAnchorOff",
textures: ["respawnAnchorBottom", "respawnAnchorTopOff", "respawnAnchorSide0"],
onupdate: (x,y,z) => {if(world.type !== "nether"){explode(x,y,z,2)}}
},
{ 
name: "RespawnAnchor1",
textures: ["respawnAnchorBottom", "respawnAnchorTop1", "respawnAnchorSide1"],
//hidden: true
},
{ 
name: "RespawnAnchor2",
textures: ["respawnAnchorBottom", "respawnAnchorTop2", "respawnAnchorSide2"],
//hidden: true
},
{ 
name: "RespawnAnchor3",
textures: ["respawnAnchorBottom", "respawnAnchorTop3", "respawnAnchorSide3"],
//hidden: true
},
{ 
name: "RespawnAnchor",
textures: ["respawnAnchorBottom", "respawnAnchorTop", "respawnAnchorSide4"],
//hidden: true
},
{
name:"redBed",
Name:"Red Bed",
textures: "bedbottom",
iconTexture: "bedIcon",
flatIcon: true,
onclick: (x,y,z) => {
if(world.type !== ""){explode(x,y,z,5); return}
world.spawnPoint.x=x
world.spawnPoint.y=y
world.spawnPoint.z=z
Messages.add("You can't sleep in beds yet")
Messages.add("Respawn point set")
},
transparent: true,
bed: true,
bounciness: 0.6
},
{
name: "flintAndSteel",
Name:"Flint & Steel",
textures: "flintAndSteel",
item: true,
onuse: (x,y,z, block, replaceItem, useDurability) => {
if(block === blockIds.tnt){
blockData[blockIds.tnt].explode(x,y,z)
}else{
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.fire)
useDurability(1)
}
},
durability:64,
stackSize:1
},
{
name: "barrier",
Name:"That Invisible Block with a 🚫 Icon",
textures: "none",
iconTexture: "barrier",
flatIcon:true,
transparent:true
},
{
name: "oakSapling",
Name:"Oak Sapling",
crossShape: true,
potCross: true,
transparent: true,
solid: false,
shadow:false,
grow: function(wx,wy,wz){
let i=wx, j=wy, k=wz
var ground = wy//this.chunk.tops[i * 16 + k]
var top = ground + floor(4.5 + (Math.random()*2.5) )
var rand = floor(Math.random()*4096)
let tree = blockIds.oakLog
let leaf = blockIds.oakLeaves
let groundBlock = blockIds.dirt
//Center
for (let j = ground + 1; j <= top; j++) {
world.setBlock(i, j, k, tree)
}
world.setBlock(i, top + 1, k, leaf)
world.setBlock(i, ground, k, groundBlock)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.setBlock(wx + 1, top + 1, wz, leaf)
world.setBlock(wx, top + 1, wz - 1, leaf)
world.setBlock(wx, top + 1, wz + 1, leaf)
world.setBlock(wx - 1, top + 1, wz, leaf)
}
},
{ 
name: "crimsonTrapdoor",
Name:"Crimson Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "oakTrapdoor",
Name:"Oak Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "spruceTrapdoor",
Name:"Spruce Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "darkOakTrapdoor",
Name:"Dark Oak Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "birchTrapdoor",
Name:"Birck Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "jungleTrapdoor",
Name:"Jungle Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "acaciaTrapdoor",
Name:"Acaica Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "ironTrapdoor",
Name:"Iron Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "cryingObsidian",
Name:"Obsidian: 😢",
shadow: false,
lightLevel: 10
},
{ name: "netherGoldOre",
Name:"Nether Gold Ore",
digSound: ["block.nether_ore.dig1", "block.nether_ore.dig2", "block.nether_ore.dig3", "block.nether_ore.dig4"],
stepSound: ["block.nether_ore.step1", "block.nether_ore.step2","block.nether_ore.step3","block.nether_ore.step4","block.nether_ore.step5"]},
{
name: "flowerPot",
Name:"Flower Pot",
transparent: true,
shadow: false,
pot: true,
iconTexture:"flowerPotIcon",
flatIcon:true
},
{
name: "acaciaSapling",
Name:"Acacia Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "birchSapling",
Name:"Birch Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true,
grow:function(wx,wy,wz){
let i=wx, j=wy, k=wz
var ground = wy//this.chunk.tops[i * 16 + k]
var top = ground + floor(4.5 + (Math.random()*2.5) )
var rand = floor(Math.random()*4096)
let tree = blockIds.birchLog
let leaf = blockIds.birchLeaves
let groundBlock = blockIds.dirt
//Center
for (let j = ground + 1; j <= top; j++) {
world.setBlock(i, j, k, tree)
}
world.setBlock(i, top + 1, k, leaf)
world.setBlock(i, ground, k, groundBlock)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.setBlock(wx + 1, top + 1, wz, leaf)
world.setBlock(wx, top + 1, wz - 1, leaf)
world.setBlock(wx, top + 1, wz + 1, leaf)
world.setBlock(wx - 1, top + 1, wz, leaf)
}
},
{
name: "darkOakSapling",
Name:"Dark Oak Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "jungleSapling",
Name:"Jungle Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "spruceSapling",
Name:"Spruce Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "blueOrchidPot",
transparent: true,
shadow: false,
solid: false,
potCross: true
},
{
name: "warpedRootsPot",
transparent: true,
shadow: false,
solid: false,
potCross: true
},
{
name: "crimsonRootsPot",
transparent: true,
shadow: false,
solid: false,
potCross: true
},
{ name: "whiteCarpet", textures: "whiteWool", carpet: true, clothSound:true},
{ name: "orangeCarpet", textures: "orangeWool", carpet: true, clothSound:true},
{ name: "magentaCarpet", textures: "magentaWool", carpet: true, clothSound:true},
{ name: "lightBlueCarpet", textures: "lightBlueWool", carpet: true, clothSound:true},
{ name: "yellowCarpet", textures: "yellowWool", carpet: true, clothSound:true},
{ name: "limeCarpet", textures: "limeWool", carpet: true, clothSound:true},
{ name: "pinkCarpet", textures: "pinkWool", carpet: true, clothSound:true},
{ name: "grayCarpet", textures: "grayWool", carpet: true, clothSound:true},
{ name: "lightGrayCarpet", textures: "lightGrayWool", carpet: true, clothSound:true},
{ name: "cyanCarpet", textures: "cyanWool", carpet: true, clothSound:true},
{ name: "purpleCarpet", textures: "purpleWool", carpet: true, clothSound:true},
{ name: "blueCarpet", textures: "blueWool", carpet: true, clothSound:true},
{ name: "brownCarpet", textures: "brownWool", carpet: true, clothSound:true},
{ name: "greenCarpet", textures: "greenWool", carpet: true, clothSound:true},
{ name: "redCarpet", textures: "redWool", carpet: true, clothSound:true},
{ name: "blackCarpet", textures: "blackWool", carpet: true, clothSound:true},
{ name: "polishedBlackstone", stoneSound:true},
{ name: "chiseledNetherBricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "crackedNetherBricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "smoothBasalt", basaltSound: true},
{
name: "oakLogSW",
textures: ["logSide","logSide","logTop","oakLogSW"],
rotate: true, woodSound:true
},
{
name: "acaciaLogSW",
textures: ["acaciaLogSide","acaciaLogSide","acaciaLogTop","acaciaLogSW"],
rotate: true, woodSound:true
},
{
name: "birchLogSW",
textures: ["birchLogSide","birchLogSide","birchLogTop","birchLogSW"],
rotate: true, woodSound:true
},
{
name: "darkOakLogSW",
textures: ["darkOakLogSide","darkOakLogSide","darkOakLogTop","darkOakLogSW"],
rotate: true, woodSound:true
},
{
name: "jungleLogSW",
textures: ["jungleLogSide","jungleLogSide","jungleLogTop","jungleLogSW"],
rotate: true, woodSound:true
},
{
name: "spruceLogSW",
textures: ["spruceLogSide","spruceLogSide","spruceLogTop","spruceLogSW"],
rotate: true, woodSound:true
},
{
name: "crimsonStemSW",
textures: ["crimsonStemSide","crimsonStemSide","crimsonStemTop","crimsonStemSW"],
rotate: true, stemSound:true
},
{
name: "warpedStemSW",
textures: ["warpedStemSide","warpedStemSide","warpedStemTop","warpedStemSW"],
rotate: true, stemSound:true
},
{
name: "basaltSW",
textures: ["basaltSide","basaltSide","basaltTop","basaltSideSW"],
rotate: true, basaltSound:true
},
{
name: "polishedBasaltSW",
textures: ["polishedBasaltSide","polishedBasaltSide","polishedBasaltTop","polishedBasaltSideSW"],
rotate: true, basaltSound: true
},
{ name:"crimsonPlanks",woodSound:true },
{
name:"deadBush",
Name:"Dead Bush",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
drop: "stick",
dropAmount: [0,2],
dropSelfWhenSheared:true,
shearDropAmount:1
},
{ name:"stick", Name:"Stick", item:true },
{ name:"coal", Name:"Coal", item:true },
{ name:"ironIngot", Name:"Iron Ingot", item:true },
{ name:"copperIngot", Name:"Copper Ingot", item:true },
{ name:"goldIngot", Name:"Gold Ingot", item:true },
{ name:"diamond", Name:"Diamond", item:true },
{ name:"lapisLazuli", Name:"Lapis Lazuli", item:true },
{ name:"emerald", Name:"Emerald", item:true },
{ name:"copperOre", Name:"Copper Ore", breakTime:15, drop:"rawCopper", type:"rock2", stoneSound:true },
{ name:"rawIron", Name:"Raw Iron", item:true },
{ name:"rawCopper", Name:"Raw Copper", item:true },
{ name:"rawGold", Name:"Raw Gold", item:true },
{
name: "netherWart",
Name:"Nether Wart",
transparent: true,
shadow: false,
solid: false,
crop: true,
flatIcon:true,
iconTexture:"netherWartIcon"
},
{
name: "wheat",
Name:"Wheat",
transparent: true,
shadow: false,
solid: false,
crop: true,
flatIcon:true,
iconTexture:"wheatIcon",
drop:["wheat","wheatSeeds"]
},
{
name: "lodestone",
Name:"Lodestone",
textures: ["lodestoneTop", "lodestoneSide"]
},
{
name: "anvil",
Name:"Anvil",
transparent: true,
anvil: true,
digSound: "block.anvil.land",
stepSound: ["block.stone.step1", "block.stone.step2","block.stone.step3","block.stone.step4","block.stone.step5","block.stone.step6"],
onupdate: function(x,y,z,b){
fall(x,y,z,b)
},
},
{ name: "slime",
Name:"Slime",
transparent: true,
shadow: false,
bounciness: 0.8,
speedFactor: 0.5
},
{ 
name:"soulSoil",
Name:"Soul Soil",
speedFactor: 0.5,
},
{ name:"blueIce", Name:"Blue Ice", slide:0.9, glassSound: true},
{ name:"ice", Name:"Ice", transparent:true, shadow:false, slide:0.9, glassSound: true},
{ name:"packedIce", Name:"Packed Ice", slide:0.9, glassSound: true},
{ name:"calcite", Name:"Calcite" },
{
name:"furnace",
Name:"Furnace",
textures: ["furnaceTop","furnaceTop","furnaceSide","furnaceFront","furnaceSide","furnaceSide"],
rotate: true,
onclick: (x,y,z) => {
furnaceData.x = x
furnaceData.y = y
furnaceData.z = z
changeScene("furnace")
releasePointer()
},
stoneSound:true
},
{
name:"blastFurnace",
Name:"Blast Furnace",
textures: ["blastFurnaceTop","blastFurnaceTop","blastFurnaceSide","blastFurnaceFront","blastFurnaceSide","blastFurnaceSide"],
rotate: true
},
{
name:"smoker",
Name:"Smoker",
textures: ["smokerBottom","smokerTop","smokerSide","smokerFront","smokerSide","smokerSide"],
rotate: true
},
{
name:"noteBlock",
Name:"Note Block"
},
{
name:"jukebox",
Name:"Jukebox",
textures: ["jukeboxTop","jukeboxSide"]
},
{
name:"loom",
Name:"Loom",
textures: ["loomBottom","loomTop","loomFront","loomSide","loomSide","loomSide"],
rotate: true
},
{
name:"sandstone",
Name:"Sandstone",
textures: ["sandstoneBottom", "sandstoneTop", "sandstone"]
},
{ name:"chiseledSandstone",
Name:"Chiseled Sandstone",
textures: ["sandstoneBottom", "sandstoneTop","chiseledSandstone"]
},
{ name:"cutSandstone",
Name:"Cut Sandstone",
textures: ["sandstoneBottom", "sandstoneTop","cutSandstone"]
},
{ name:"smoothSandstone", Name:"Smooth Sandstone", textures:"sandstoneTop" },
{ name: "DoubleTallGrass",
Name:"Tall Grass",
solid: false,
transparent: true,
shadow: false,
textures: "tallGrassTop",
tallcrossShape: true,
},
{
name:"apple",
Name:"Apple",
edible: true,
eatWhenFull: false,
food: 4,
saturation: 2.4
},
{
name:"woodenPickaxe",
Name:"Wooden Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 2,
durability: 59,
attackDamage: 2
},
{
name:"stonePickaxe",
Name:"Stone Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 4,
durability: 131,
attackDamage: 2
},
{
name:"ironPickaxe",
Name:"Iron Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 6,
durability: 250,
attackDamage: 3
},
{
name:"goldenPickaxe",
Name:"Golden Pickax",
item: true,
pickaxe: true,
mineSpeed: 12,
durability: 32,
attackDamage: 4
},
{
name:"diamondPickaxe",
Name:"Diamond Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 8,
durability: 1561,
attackDamage: 5
},
{ name:"flint", Name:"Flint", item:true },
{
name:"mossBlock",
breakTime:0.15,
type: "plant2"
},
{
name:"mossCarpet",
textures: "mossBlock",
breakTime:0.15,
carpet: true
},
{
name: "caveVines",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{
name: "caveVinesPlant",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{
name: "caveVinesLit",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
lightLevel: 14
},
{
name: "caveVinesPlantLit",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
lightLevel: 14
},
{
name:"sporeBlossom",
Name:"Spore Blossom",
sporeBlossom: true,
shadow:false,
transparent: true
},
{
name: "rootedDirt",
},
{
name: "hangingRoots",
solid: false,
transparent: true,
shadow: false,
crossShape: true
},
{
name:"azalea",
Name:"Azalea",
textures: ["azaleaTop", "azaleaSide"],
potTex:["pottedAzaleaBushTop","pottedAzaleaBushSide"],
azalea: true,
transparent: true,
potCross:true
},
{
name:"floweringAzalea",
Name:"Flowering Azalea",
textures: ["floweringAzaleaTop","floweringAzaleaSide"],
potTex:["pottedFloweringAzaleaBushTop","pottedFloweringAzaleaBushSide"],
azalea: true,
transparent: true,
potCross:true
},
{
name:"sunflower",
Name:"Sunflower",
textures:["sunflowerBack","sunflowerFront","sunflowerTop"],
sunflower: true,
transparent:true,
shadow:false,
iconTexture: "sunflowerFront"
},
{
name: "bucket",
Name:"Bucket",
item: true,
onuse: (x,y,z, block, replaceItem) => {
if(blockData[block].name === "Water"){
replaceItem(blockIds.waterBucket)
world.setBlock(x,y,z,0)
}
if(blockData[block].name === "Lava"){
replaceItem(blockIds.lavaBucket)
world.setBlock(x,y,z,0)
}
if(block === blockIds.powderSnow){
replaceItem(blockIds.powderSnowBucket)
world.setBlock(x,y,z,0)
}
},
stackSize: 1,
allHitbox: true
},
{
name: "waterBucket",
Name:"Water Bucket",
item: true,
onuse: (x,y,z, block, replaceItem) => {
if(survival)replaceItem(blockIds.bucket)
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.Water)
},
stackSize: 1
},
{
name: "lavaBucket",
Name:"Lava Bucket",
item: true,
onuse: (x,y,z, block, replaceItem) => {
if(survival)replaceItem(blockIds.bucket)
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.Lava)
},
stackSize: 1
},
{
name: "cowSpawnEgg",
item: true,
onuse: (x,y,z, block, replaceItem) => {
world.addEntity(new Cow(p2.x,p2.y,p2.z))
}
},
{
name:"sugarCane",
Name:"Sugarcane",
iconTexture: "sugarCaneIcon",
crossShape: true,
solid: false,
transparent: true,
shadow: false,
},
{
name:"woodenSword",
Name:"Wooden Swords aren't even sharp!",
item: true,
sword: true,
durability: 59,
attackDamage: 4
},
{
name:"stoneSword",
Name:"Stone Sword",
item: true,
sword: true,
durability: 131,
attackDamage: 5
},
{
name:"ironSword",
Name:"Iron Sword",
item: true,
sword: true,
durability: 250,
attackDamage: 6
},
{
name:"goldenSword",
Name:"Golden Sword",
item: true,
sword: true,
durability: 32,
attackDamage: 4
},
{
name:"diamondSword",
Name:"Diamond Sword",
item: true,
sword: true,
durability: 1561,
attackDamage: 7
},
{ name:"azaleaLeaves",
transparent: true,
breakTime: 0,
type:"plant2",
drop: function(){
if(rand() > 0.05){
let r = floor(rand(2))
if(r === 0) return "azalea"
else return "floweringAzalea"
}
},
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{ name:"floweringAzaleaLeaves",
transparent: true,
breakTime: 0,
type:"plant2",
drop: function(){
if(rand() > 0.05){
let r = floor(rand(2))
if(r === 0) return "azalea"
else return "floweringAzalea"
}
},
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "pigSpawnEgg",
item: true,
onuse: (x,y,z, block, replaceItem) => {
world.addEntity(new Pig(p2.x,p2.y,p2.z))
}
},
{name:"tuff",Name:"Tuff",breakTime:1.5},
{name:"deepslate", Name:"Deepslate", textures:["deepslateTop","deepslate"],breakTime:3,deepslateSound:true},
{name:"cobbledDeepslate", Name:"Cobbled Deepslate",deepslateSound:true},
{name:"chiseledDeepslate", Name:"Chiseled Deepslate",breakTime:3.5,deepslateSound:true},
{name:"polishedDeepslate",Name:"Polished Deepslate",breakTime:3.5,deepslateSound:true},
{name:"deepslateTiles",Name:"Deepslate Tiles",breakTime:3.5,deepslateSound:true},
{name:"deepslateBricks",Name:"Deepslate Bricks",breakTime:3.5,deepslateBricksSound:true},
{name:"crackedDeepslateTiles",Name:"Cracked Deepslate Tiles",deepslateSound:true},
{name:"crackedDeepslateBricks",Name:"Cracked Deepslate Bricks",deepslateBricksSound:true},
{name:"deepslateCoalOre",Name:"Deepslate Coal Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateIronOre",Name:"Deepslate Iron Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateCopperOre",Name:"Deepslate Copper Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateGoldOre",Name:"Deepslate Gold Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateDiamondOre",Name:"Deepslate Diamond Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateRedstoneOre",Name:"Deepslate Redstone Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateEmeraldOre",Name:"Deepslate Emerald Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateLapisOre",Name:"Deepslate Lapis Lazuli Ore",breakTime:22.5,deepslateSound:true},
{name:"amethystBlock",Name:"Amethyst Block", amethystSound: true},
{name:"amethystShard",Name:"Amythest Shard",item:true},
{name:"buddingAmethyst",Name:"Budding Amethyst", amethystSound: true},
{name:"smallAmethystBud",Name:"Small Amethyst Bud",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true
},
{name:"mediumAmethystBud",Name:"Medium Amethyst Bud",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true
},
{name:"largeAmethystBud",Name:"Large Amethyst Bud",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true
},
{name:"amethystCluster",Name:"Amethyst Cluster",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true,
drop: "amethystShard"
},
{
name:"snowBlock",
Name:"Block of Snow",
textures:"snow",
breakTime: 1,
drop:"snowball",
dropAmount: 4
},
{
name:"snow",
Name:"Snow Layer",
layers: true,
transparent:true,
drop:"snowball",
breakTime: 0.5,
onupdate: function(x,y,z,b){
fall(x,y,z,b)
},
},
{
name:"powderSnow",
Name:"Powder Snow",
solid:false,
powder: true,
breakTime: 0.4,
drop:"air",
transparent:true
},
{
name:"snowball",
Name:"Snowball",
item: true,
/*onuse:function(){
var pd = p.direction
world.addEntity(new Snowball(p.x+pd.x,p.y+pd.y,p.z+pd.z, pd.x, pd.y, pd.z))
},
minusOnUse:true,
useAnywhere:true*/
},
{
name:"powderSnowBucket",
Name:"Powder Snow Bucket",
item:true,
onuse: (x,y,z, block, replaceItem) => {
if(survival)replaceItem(blockIds.bucket)
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.powderSnow)
},
stackSize: 1
},
{
name:"bread",
Name:"Bread",
edible: true,
eatWhenFull: false,
food: 6,
saturation: 11
},
{
name:"boneBlock",
textures:["boneBlockTop","boneBlockSide"]
},
{
name:"farmland",
Name:"Farmland",
textures:["dirt","farmland","dirt"],
_1PixLower: true
},
{
name:"glowBerries",
Name:"Glow Berries",
edible: true,
eatWhenFull: false,
food: 2,
saturation: 0.4
},
{
name:"hayBlock",
Name:"Hay Bale",
textures:["hayBlockTop","hayBlockSide"],
type:"plant2"
},
{
name:"hayBlockSW",
textures: ["hayBlockSide","hayBlockSide","hayBlockTop","hayBlockSW"],
rotate: true,
},
{
name:"woodenShovel",
Name:"Wooden Shovel",
item: true,
shovel: true,
durability: 59,
mineSpeed:2,
attackDamage: 2
},
{
name:"stoneShovel",
Name:"Stone Shovel",
item: true,
shovel: true,
durability: 131,
mineSpeed:3.6,
attackDamage: 4
},
{
name:"ironShovel",
Name:"Iron Shovel",
item: true,
shovel: true,
durability: 250,
mineSpeed:6,
attackDamage: 4
},
{
name:"goldenShovel",
Name:"Golden Shovel",
item: true,
shovel: true,
durability: 32,
mineSpeed:12,
attackDamage: 2
},
{
name:"diamondShovel",
Name:"Diamond Shovel",
item: true,
shovel: true,
durability: 1561,
mineSpeed:8,
attackDamage: 5
},
{
name:"woodenAxe",
Name:"Wooden Axe",
item: true,
axe: true,
durability: 59,
mineSpeed:2,
attackDamage: 7,
attackSpeed:0.8
},
{
name:"stoneAxe",
Name:"Stone Axe",
item: true,
axe: true,
durability: 131,
mineSpeed:4,
attackDamage: 9,
attackSpeed:0.8
},
{
name:"ironAxe",
Name:"Iron Axe",
item: true,
axe: true,
durability: 250,
mineSpeed:6,
attackDamage: 9,
attackSpeed:0.9
},
{
name:"goldenAxe",
Name:"Golden Axe",
item: true,
axe: true,
durability: 32,
mineSpeed:12,
attackDamage: 7,
attackSpeed:1
},
{
name:"diamondAxe",
Name:"Diamond Axe",
item: true,
axe: true,
durability: 1561,
mineSpeed:8,
attackDamage: 9,
attackSpeed:1
},
{
name: "strippedOakLog",
textures: ["strippedOakLogTop", "strippedOakLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedOakLogSW",
textures: ["strippedOakLog", "strippedOakLog", "strippedOakLogTop","strippedOakLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedBirchLog",
textures: ["strippedBirchLogTop", "strippedBirchLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedBirchLogSW",
textures: ["strippedBirchLog", "strippedBirchLog", "strippedBirchLogTop","strippedBirchLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedAcaciaLog",
textures: ["strippedAcaciaLogTop", "strippedAcaciaLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedAcaciaLogSW",
textures: ["strippedAcaciaLog", "strippedAcaciaLog", "strippedAcaciaLogTop","strippedAcaciaLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedJungleLog",
textures: ["strippedJungleLogTop", "strippedJungleLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedJungleLogSW",
textures: ["strippedJungleLog", "strippedJungleLog", "strippedJungleLogTop","strippedJungleLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedSpruceLog",
textures: ["strippedSpruceLogTop", "strippedSpruceLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedSpruceLogSW",
textures: ["strippedSpruceLog", "strippedSpruceLog", "strippedSpruceLogTop","strippedSpruceLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedDarkOakLog",
textures: ["strippedDarkOakLogTop", "strippedDarkOakLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedDarkOakLogSW",
textures: ["strippedDarkOakLog", "strippedDarkOakLog", "strippedDarkOakLogTop","strippedDarkOakLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name:"boneBlockSW",
textures:["boneBlockSide","boneBlockSide","boneBlockTop","boneBlockSW"],
rotate:true
},
{
name:"redMushroom",
Name:"Red Mushroom",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{
name:"brownMushroom",
Name:"Brown Mushroom",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{
name:"mushroomStem",
mushroomBlock:true
},
{
name:"redMushroomBlock",
mushroomBlock:true
},
{
name:"brownMushroomBlock",
mushroomBlock:true
},
{
name:"mycelium",
Name:"Mycelium",
textures:["dirt","myceliumTop","myceliumSide"],
type:"ground"
},
{
name:"terracotta",
Name:"Terracotta"
},
{
name:"redTerracotta",
Name:"Terracotta with watermelon juice"
},
{
name:"blueTerracotta",
Name:"Terracotta with blueberry juice"
},
{
name:"cyanTerracotta",
Name:"Terracotta with cyan colored fruit punch"
},
{
name:"grayTerracotta",
Name:"Dusty Terracotta"
},
{
name:"limeTerracotta",
Name:"Terracotta with leaf juice"
},
{
name:"pinkTerracotta",
Name:"Terracotta with fruit punch"
},
{
name:"blackTerracotta",
Name:"Terracotta painted black"
},
{
name:"brownTerracotta",
Name:"Dirty Terracotta"
},
{
name:"greenTerracotta",
Name:"Terracotta with some other leaf juice"
},
{
name:"whiteTerracotta",
Name:"Terracotta with flour"
},
{
name:"orangeTerracotta",
Name:"Orange Terracotta"
},
{
name:"purpleTerracotta",
Name:"Purple Terracotta"
},
{
name:"yellowTerracotta",
Name:"Terracotta with lemon juice"
},
{
name:"magentaTerracotta",
Name:"Magenta Terracotta"
},
{
name:"lightBlueTerracotta",
Name:"Light Blue Terracotta"
},
{
name:"lightGrayTerracotta",
Name:"Light Gray Terracotta"
},
{
name:"redGlazedTerracotta",
rotate:true,
Name:"Watermelon Swirl"
},
{
name:"blueGlazedTerracotta",
rotate:true,
Name:"Blue Fan"
},
{
name:"cyanGlazedTerracotta",
rotate:true,
Name:"Creeper in the skies"
},
{
name:"grayGlazedTerracotta",
rotate:true,
Name:"Bunch of Dust"
},
{
name:"limeGlazedTerracotta",
rotate:true,
Name:"Overlapping lilies"
},
{
name:"pinkGlazedTerracotta",
rotate:true,
Name:"Pink turtle shell"
},
{
name:"blackGlazedTerracotta",
rotate:true,
Name:"Red monster"
},
{
name:"brownGlazedTerracotta",
rotate:true,
Name:"Mudslide in the ocean"
},
{
name:"greenGlazedTerracotta",
rotate:true,
Name:"Camouflaged monster"
},
{
name:"whiteGlazedTerracotta",
rotate:true,
Name:"Sun & clouds"
},
{
name:"orangeGlazedTerracotta",
rotate:true,
Name:"Flower Monster"
},
{
name:"purpleGlazedTerracotta",
rotate:true,
Name:"Sword & pickaxe monster"
},
{
name:"yellowGlazedTerracotta",
rotate:true,
Name:"Some kind of bug"
},
{
name:"magentaGlazedTerracotta",
rotate:true,
Name:"Arrow"
},
{
name:"lightBlueGlazedTerracotta",
rotate:true,
Name:"Monster sticking out tongue and eyes facing opposite direction"
},
{
name:"lightGrayGlazedTerracotta",
rotate:true,
Name:"Monster with blue eyes and mouth"
},
{
name:"ancientDebris",
Name:"Ancient Debris",
textures:["ancientDebrisTop","ancientDebrisSide"]
},
{
name:"wheatSeeds",
Name:"Seeds",
item:true,
useAs:function(x,y,z,block,face){
if(!block) return
if(face === "top" && blockData[block].name === "farmland") return "wheat"
}
},
{
name:"yellowStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"whiteStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"redStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"purpleStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"pinkStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"orangeStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"magentaStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"limeStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"lightGrayStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"lightBlueStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"greenStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"grayStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"cyanStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"brownStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"blueStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"blackStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name: "yellowStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["yellowStainedGlassPaneTop","yellowStainedGlassPaneTop","yellowStainedGlass","yellowStainedGlass","yellowStainedGlassPaneSide","yellowStainedGlassPaneSide"],
glassSound: true
},
{
name: "whiteStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["whiteStainedGlassPaneTop","whiteStainedGlassPaneTop","whiteStainedGlass","whiteStainedGlass","whiteStainedGlassPaneSide","whiteStainedGlassPaneSide"],
glassSound: true
},
{
name: "redStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["redStainedGlassPaneTop","redStainedGlassPaneTop","redStainedGlass","redStainedGlass","redStainedGlassPaneSide","redStainedGlassPaneSide"],
glassSound: true
},
{
name: "purpleStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["purpleStainedGlassPaneTop","purpleStainedGlassPaneTop","purpleStainedGlass","purpleStainedGlass","purpleStainedGlassPaneSide","purpleStainedGlassPaneSide"],
glassSound: true
},
{
name: "pinkStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["pinkStainedGlassPaneTop","pinkStainedGlassPaneTop","pinkStainedGlass","pinkStainedGlass","pinkStainedGlassPaneSide","pinkStainedGlassPaneSide"],
glassSound: true
},
{
name: "orangeStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["orangeStainedGlassPaneTop","orangeStainedGlassPaneTop","orangeStainedGlass","orangeStainedGlass","orangeStainedGlassPaneSide","orangeStainedGlassPaneSide"],
glassSound: true
},
{
name: "magentaStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["magentaStainedGlassPaneTop","magentaStainedGlassPaneTop","magentaStainedGlass","magentaStainedGlass","magentaStainedGlassPaneSide","magentaStainedGlassPaneSide"],
glassSound: true
},
{
name: "limeStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["limeStainedGlassPaneTop","limeStainedGlassPaneTop","limeStainedGlass","limeStainedGlass","limeStainedGlassPaneSide","limeStainedGlassPaneSide"],
glassSound: true
},
{
name: "lightGrayStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["lightGrayStainedGlassPaneTop","lightGrayStainedGlassPaneTop","lightGrayStainedGlass","lightGrayStainedGlass","lightGrayStainedGlassPaneSide","lightGrayStainedGlassPaneSide"],
glassSound: true
},
{
name: "lightBlueStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["lightBlueStainedGlassPaneTop","lightBlueStainedGlassPaneTop","lightBlueStainedGlass","lightBlueStainedGlass","lightBlueStainedGlassPaneSide","lightBlueStainedGlassPaneSide"],
glassSound: true
},
{
name: "greenStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["greenStainedGlassPaneTop","greenStainedGlassPaneTop","greenStainedGlass","greenStainedGlass","greenStainedGlassPaneSide","greenStainedGlassPaneSide"],
glassSound: true
},
{
name: "grayStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["grayStainedGlassPaneTop","grayStainedGlassPaneTop","grayStainedGlass","grayStainedGlass","grayStainedGlassPaneSide","grayStainedGlassPaneSide"],
glassSound: true
},
{
name: "cyanStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["cyanStainedGlassPaneTop","cyanStainedGlassPaneTop","cyanStainedGlass","cyanStainedGlass","cyanStainedGlassPaneSide","cyanStainedGlassPaneSide"],
glassSound: true
},
{
name: "brownStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["brownStainedGlassPaneTop","brownStainedGlassPaneTop","brownStainedGlass","brownStainedGlass","brownStainedGlassPaneSide","brownStainedGlassPaneSide"],
glassSound: true
},
{
name: "blueStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["blueStainedGlassPaneTop","blueStainedGlassPaneTop","blueStainedGlass","blueStainedGlass","blueStainedGlassPaneSide","blueStainedGlassPaneSide"],
glassSound: true
},
{
name: "blackStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["blackStainedGlassPaneTop","blackStainedGlassPaneTop","blackStainedGlass","blackStainedGlass","blackStainedGlassPaneSide","blackStainedGlassPaneSide"],
glassSound: true
},
{
name: "cobweb",
Name:"Cobweb",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
breakTime:20,
noDrop:true,
dropSelfWhenSheared:true,
shearBreakTime:0.4
},
{
name: "strippedCrimsonStem",
textures: ["strippedCrimsonStemTop", "strippedCrimsonStem"],
breakTime:2,
stemSound:true
},
{
name: "strippedCrimsonStemSW",
textures: ["strippedCrimsonStem", "strippedCrimsonStem", "strippedCrimsonStemTop","strippedCrimsonStemSW"],
breakTime:2,
stemSound:true,
rotate:true
},
{
name: "strippedWarpedStem",
textures: ["strippedWarpedStemTop", "strippedWarpedStem"],
breakTime:2,
stemSound:true
},
{
name: "strippedWarpedStemSW",
textures: ["strippedWarpedStem", "strippedWarpedStem", "strippedWarpedStemTop","strippedWarpedStemSW"],
breakTime:2,
stemSound:true,
rotate:true
},
{
name: "oakPressurePlate",
textures: "oakPlanks",
carpet: true
},
{
name: "birchPressurePlate",
textures: "birchPlanks",
carpet: true
},
{
name: "sprucePressurePlate",
textures: "sprucePlanks",
carpet: true
},
{
name: "junglePressurePlate",
textures: "junglePlanks",
carpet: true
},
{
name: "acaciaPressurePlate",
textures: "acaciaPlanks",
carpet: true
},
{
name:"darkOakPressurePlate",
textures: "darkOakPlanks",
carpet: true
},
{
name: "warpedPressurePlate",
textures: "warpedPlanks",
carpet: true
},
{
name: "crimsonPressurePlate",
textures: "crimsonPlanks",
carpet: true
},
{
name: "stonePressurePlate",
textures: "stone",
carpet: true
},
{
name: "polishedBlackstonePressurePlate",
textures: "polishedBlackstone",
carpet: true
},
{
name: "lightWeightedPressurePlate",
textures: "goldBlock",
carpet: true
},
{
name: "heavyWeightedPressurePlate",
textures: "ironBlock",
carpet: true
},
{
name:"oakButton",
textures:"oakPlanks",
button:true,
transparent: true
},
{
name:"birchButton",
textures:"birchPlanks",
button:true,
transparent: true
},
{
name:"acaciaButton",
textures:"acaciaPlanks",
button:true,
transparent: true
},
{
name:"darkOakButton",
textures:"darkOakPlanks",
button:true,
transparent: true
},
{
name:"jungleButton",
textures:"junglePlanks",
button:true,
transparent: true
},
{
name:"spruceButton",
textures:"sprucePlanks",
button:true,
transparent: true
},
{
name:"warpedButton",
textures:"warpedPlanks",
button:true,
transparent: true
},
{
name:"crimsonButton",
textures:"crimsonPlanks",
button:true,
transparent: true
},
{
name:"polishedBlackstoneButton",
textures:"polishedBlackstone",
button:true,
transparent:true
},
{
name:"copperBlock",
Name:"Block of Copper"
},
{
name:"crackedPolishedBlackstoneBricks",
Name:"Cracked Polished Blackstone Bricks"
},
{
name:"crackedStoneBricks",
Name:"Cracked Stone Bricks"
},
{
name:"woodenHoe",
Name:"Wooden Hoe",
item: true,
hoe: true,
durability: 59,
mineSpeed:2,
attackDamage: 1,
attackSpeed:1
},
{
name:"stoneHoe",
Name:"Stone Hoe",
item: true,
hoe: true,
durability: 131,
mineSpeed:4,
attackDamage: 1,
attackSpeed:2
},
{
name:"ironHoe",
Name:"Iron Hoe",
item: true,
hoe: true,
durability: 250,
mineSpeed:6,
attackDamage: 1,
attackSpeed:3
},
{
name:"goldenHoe",
Name:"Golden Hoe",
item: true,
hoe: true,
durability: 32,
mineSpeed:12,
attackDamage: 1,
attackSpeed:1
},
{
name:"diamondHoe",
Name:"Diamond Hoe",
item: true,
hoe: true,
durability: 1561,
mineSpeed:8,
attackDamage: 1,
attackSpeed:4
},
{
name:"podzol",
Name:"Podzol",
textures:["dirt","podzolTop","podzolSide"]
},
{
name:"rawIronBlock",
Name:"Block of Raw Iron",
type:"rock2",
breakTime:25
},
{
name:"rawGoldBlock",
Name:"Block of Raw Gold",
type:"rock3",
breakTime:25
},
{
name:"rawCopperBlock",
Name:"Block of Raw Copper",
type:"rock2",
breakTime:25
},
{
name:"netheriteScrap",
Name:"Netherite Scrap",
item:true
},
{
name:"netheriteIngot",
Name:"Netherite Ingot",
item:true
},
{
name:"netheritePickaxe",
Name:"Netherite Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 9,
durability: 2031,
attackDamage: 6
},
{
name:"netheriteSword",
Name:"Netherite Sword",
item: true,
sword: true,
durability: 2031,
attackDamage: 8
},
{
name:"netheriteAxe",
Name:"Netherite Axe",
item: true,
axe: true,
durability: 2031,
mineSpeed:9,
attackDamage: 10,
attackSpeed:1
},
{
name:"netheriteShovel",
Name:"Netherite Shovel",
item: true,
shovel: true,
durability: 2031,
mineSpeed:9,
attackDamage: 6
},
{
name:"netheriteHoe",
Name:"Nethrite Hoe",
item: true,
hoe: true,
durability: 2031,
mineSpeed:9,
attackDamage: 1,
attackSpeed:4
},
{
name:"cartographyTable",
Name:"Cartograpgy Table",
textures: ["cartographyTableSide3","cartographyTableTop","cartographyTableSide3","cartographyTableSide1","cartographyTableSide2","cartographyTableSide3"],
rotate:true
},
{
name:"cake",
Name:"Cake",
textures:["cakeBottom","cakeTop","cakeSide"],
cake:true,
transparent:true,
flatIcon:true,
iconTexture:"cake"
},
{
name:"smithingTable",
Name:"Smithing Table",
textures:["smithingTableBottom","smithingTableTop","smithingTableFront","smithingTableSide"],
},
{
name:"stonecutter",
Name:"Stonecutter",
textures:["stonecutterBottom","stonecutterTop","stonecutterSide"],
transparent:true,
stonecutter:true
},
{
name:"itemFrame",
Name:"Item Frame",
transparent:true,
itemFrame:true
},
{
name:"enderPearl",
Name:"Ender Pearl",
item:true,
onuse:function(){
world.addEntity(new EnderPearl(p.x,p.y,p.z, p.direction.x, p.direction.y, p.direction.z))
},
minusOnUse:true,
useAnywhere:true
},
{
name:"ironNugget",
Name:"Iron Nugget",
item:true
},
{
name:"goldNugget",
Name:"Gold Nugget",
item:true
},
{
name:"pumpkin",
Name:"Pumpkin",
textures:["pumpkinSide","pumpkinTop","pumpkinSide"]
},
{
name:"carvedPumpkin",
Name:"Carved Pumpkin",
textures:["pumpkinSide","pumpkinTop","pumpkinSide","carvedPumpkin","pumpkinSide","pumpkinSide"],
rotate:true
},
{
name:"jackOLantern",
Name:"Jack o'Lantern",
textures:["pumpkinSide","pumpkinTop","pumpkinSide","jackOLantern","pumpkinSide","pumpkinSide"],
lightLevel:15,
rotate:true
},
{
name:"shears",
Name:"Shears",
item:true,
shears:true
},
{
name:"pumpkinSeeds",
Name:"Pumpkin Seeds",
item:true
},
{
name:"melonSeeds",
Name:"Watermelon Seeds",
item:true
},
{
name:"melon",
Name:"Watermelon",
textures:["melonSide","melonTop","melonSide"],
breakTime:1.5,
drop:"melonSlice",
dropAmount:[3,7]
},
{
name:"melonSlice",
Name:"Slice of Watermelon",
item:true,
edible: true,
food: 2,
saturation: 1.2
},
{
name:"redstoneLamp",
Name:"Redstone Lamp",
},
{
name:"glowstoneDust",
item:true
},
{
name:"quartz",
Name:"Quartz",
item:true
},
{
name: "endPortalFrame", 
Name:"End Portal Frame",
textures: ["endStone", "endPortalFrameTop", "endPortalFrameSide"]
},
{
name: "eyeOfEnder",
Name:"Eye of Ender",
item:true,
iconTexture:"enderEye",
shadow: false,
canPlace:function(block){
return block === blockIds.endPortalFrame
},
placeSound:["block.end_portal.eyeplace1","block.end_portal.eyeplace2","block.end_portal.eyeplace3"],
eyeOfEnder: true
},
{
name:"endStone",
Name:"Endstone",
},
{
name:"redSand",
Name:"Red Sand",
breakTime:0.75,
onupdate: function(x,y,z,block){
fall(x,y,z,block)
},
digSound: ["block.sand.dig1", "block.sand.dig2", "block.sand.dig3", "block.sand.dig4"],
stepSound: ["block.sand.step1", "block.sand.step2","block.sand.step3","block.sand.step4","block.sand.step5"]
},
{
name:"redSandstone",
Name:"Red Sandstone",
textures: ["redSandstoneBottom", "redSandstoneTop", "redSandstone"]
},
{ name:"chiseledRedSandstone",
Name:"Chiseled Red Sandstone",
textures: ["redSandstoneBottom", "redSandstoneTop","chiseledRedSandstone"]
},
{ name:"cutRedSandstone",
Name:"Cut Red Sandstone",
textures: ["redSandstoneBottom", "redSandstoneTop","cutRedSandstone"]
},
{ name:"smoothredSandstone", Name:"Smooth Red Sandstone", textures:"redSandstoneTop" },
{
name:"purpurBlock",
Name:"Purpur Block",
},
{
name:"purpurPillar",
Name:"Purpur Pillar",
textures:["purpurPillarTop","purpurPillar"]
},
{
name:"purpurPillarSW",
textures:["purpurPillar","purpurPillar","purpurPillarTop","purpurPillarSW"],
rotate:true
},
{
name:"prismarine",
Name:"Prismarine"
},
{
name:"prismarineBricks",
Name:"Prismarine Bricks"
},
{
name:"darkPrismarine",
Name:"Dark Prismarine",
},
{
name:"prismarineCrystals",
Name:"Prismarine Crystals",
item:true
},
{
name:"prismarineShard",
Name:"Prismarine Shard",
item:true
},
{
name:"seaLantern",
Name:"Sea Lantern",
lightLevel:15,
breakTime:0.45
},
{
name:"oakLeaves",
Name: "Oak Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "oakSapling"
else{
return rand() > 0.8 ? "orange" : "apple"
}
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "acaciaLeaves",
Name:"Acacia Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "acaciaSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "birchLeaves",
Name:"Birch Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "birchSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "darkOakLeaves",
Name:"Dark Oak Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "darkOakSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "jungleLeaves",
Name:"Jungle Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "jungleSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "spruceLeaves",
Name:"Spruce Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "spruceSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name:"spyglass",
Name:"Spyglass",
item:true,
spyglass:true
},
{
name:"egg",
Name:"Egg",
item:true
},
{
name:"noodles",
Name:"Noodles",
item:true
},
{
name:"bowl",
Name:"Bowl",
item:true
},
{
name:"mushroomStew",
Name:"Mushroom Stew",
edible: true,
eatWhenFull: false,
food: 6,
saturation: 7.2
},
{
name:"ramen",
Name:"Ramen! Yum!",
edible: true,
eatWhenFull: true,
food: 8,
saturation: 10
},
{
name:"orange",
Name:"Orange",
edible: true,
eatWhenFull: false,
food: 4,
saturation: 2.4
},
{
name:"fern",
Name:"Fern",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{
name: "largeFarn",
Name:"Large Fern",
solid: false,
transparent: true,
shadow: false,
textures: "largeFernTop",
tallcrossShape: true,
},
{
name:"fire",
fire:true,
damage:1,
burnPlayer:true,
transparent:true,
shadow:false,
solid:false,
lightLevel:15
},
{
name: "endRod",
Name:"End Rod",
transparent: true,
shadow: false,
lightLevel: 15
},
{
name: "oakWood",
Name:"Oak Wood",
textures: "logSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "acaciaWood",
Name:"Acacia Wood",
textures: "acaciaLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "birchWood",
Name:"Birch Wood",
textures: "birchLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "darkOakWood",
Name:"Dark Oak Wood",
textures: "darkOakLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "jungleWood",
Name:"Jungle Wood",
textures: "jungleLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "spruceWood",
Name:"Spruce Wood",
textures: "spruceLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "crimsonHyphae",
textures: "crimsonStemSide",
stemSound: true
},
{
name: "warpedHyphae",
textures: "warpedStemSide",
stemSound: true
},
{
name: "strippedOakWood",
Name:"Stripped Oak Wood",
textures: "strippedOakLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedAcaciaWood",
Name:"Stripped Acacia Wood",
textures: "strippedAcaciaLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedBirchWood",
Name:"Stripped Birch Wood",
textures: "strippedBirchLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedDarkOakWood",
Name:"Stripped Dark Oak Wood",
textures: "strippedDarkOakLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedJungleWood",
Name:"Stripped Jungle Wood",
textures: "strippedJungleLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedSpruceWood",
Name:"Stripped Spruce Wood",
textures: "strippedSpruceLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedCrimsonHyphae",
textures: "strippedCrimsonStem",
stemSound: true
},
{
name: "strippedWarpedHyphae",
textures: "strippedWarpedStem",
stemSound: true
},
/*
{ name: "pigFace" },
{ 
name: "steveFace",
textures: ["steveHeadTop", "steveFace"]
},
{ name: "sarahFace",
textures: ["sarahTop", "sarahFace"]
},
{
name: "lexiFace",
textures: ["lexiTop","lexiFace"]
},
{
name: "sallyFace",
textures: ["sallyTop","sallyFace"]
},
{
name: "face",
textures: ["faceTop","face"]
},//*/
];
window.BLOCK_COUNT = blockData.length;
window.console.log(BLOCK_COUNT,"blocks")
var texNum=0;for(var t in textures) texNum ++
window.console.log(texNum,"textures")
window.emptyFunc = function(){}
var stoneDigSound = ["block.stone.dig1", "block.stone.dig2", "block.stone.dig3", "block.stone.dig4"],
stoneStepSound = ["block.stone.step1", "block.stone.step2","block.stone.step3","block.stone.step4","block.stone.step5","block.stone.step6"],
woodDigSound = ["block.wood.dig1", "block.wood.dig2", "block.wood.dig3", "block.wood.dig4"],
woodStepSound = ["block.wood.step1", "block.wood.step2","block.wood.step3","block.wood.step4","block.wood.step5","block.wood.step6"],
clothDigSound = ["block.cloth.dig1", "block.cloth.dig2", "block.cloth.dig3", "block.cloth.dig4"],
clothStepSound = ["block.cloth.step1", "block.cloth.step2","block.cloth.step3","block.cloth.step4"],
glassDigSound = ["block.glass.dig1", "block.glass.dig2", "block.glass.dig3"],
nyliumDigSound = ["block.nylium.dig1", "block.nylium.dig2", "block.nylium.dig3", "block.nylium.dig4", "block.nylium.dig5", "block.nylium.dig6"],
nyliumStepSound = ["block.nylium.step1", "block.nylium.step2","block.nylium.step3","block.nylium.step4","block.nylium.step5","block.nylium.step6"],
stemDigSound = ["block.stem.dig1", "block.stem.dig2", "block.stem.dig3", "block.stem.dig4", "block.stem.dig5", "block.stem.dig6"],
stemStepSound = ["block.stem.step1", "block.stem.step2","block.stem.step3","block.stem.step4","block.stem.step5","block.stem.step6"],
basaltDigSound = ["block.basalt.dig1", "block.basalt.dig2", "block.basalt.dig3", "block.basalt.dig4", "block.basalt.dig5"],
basaltStepSound = ["block.basalt.step1", "block.basalt.step2","block.basalt.step3","block.basalt.step4","block.basalt.step5","block.basalt.step6"],
rootDigSound = ["block.roots.dig1", "block.roots.dig2", "block.roots.dig3", "block.roots.dig4", "block.roots.dig5", "block.roots.dig6"],
rootStepSound = ["block.roots.step1", "block.roots.step2","block.roots.step3","block.roots.step4","block.roots.step5","block.roots.step6"],
amethystPlaceSound = ["block.amethyst.place1","block.amethyst.place2","block.amethyst.place3","block.amethyst.place4"],
amethystDigSound = ["block.amethyst.dig1","block.amethyst.dig2","block.amethyst.dig3","block.amethyst.dig4"],
amethystStepSound = (function(){var arr=[]; for(var i=0; i<14; i++){arr.push("block.amethyst.step"+(i+1))};return arr})(),
amethystClusterPlaceSound = ["block.amethyst_cluster.place1", "block.amethyst_cluster.place2", "block.amethyst_cluster.place3", "block.amethyst_cluster.place4"],
amethystClusterDigSound = ["block.amethyst_cluster.dig1", "block.amethyst_cluster.dig2", "block.amethyst_cluster.dig3", "block.amethyst_cluster.dig4"],
deepslatePlaceSound = ["block.deepslate.place1","block.deepslate.place2","block.deepslate.place3","block.deepslate.place4","block.deepslate.place5","block.deepslate.place6"],
deepslateStepSound = ["block.deepslate.step1","block.deepslate.step2","block.deepslate.step3","block.deepslate.step4","block.deepslate.step5","block.deepslate.step6"],
deepslateDigSound = ["block.deepslate.dig1","block.deepslate.dig2","block.deepslate.dig3","block.deepslate.dig4"],
deepslateBricksPlaceSound = [1,2,3,4,5,6].map(v => "block.deepslate_bricks.place"+v),
deepslateBricksStepSound = [1,2,3,4,5].map(v => "block.deepslate_bricks.step"+v)
// Set defaults on blockData
for (let i = 1; i < BLOCK_COUNT; ++i) {
const data = blockData[i];
data.id = i;
if ( !("textures" in data) ) {
data.textures = new Array(6).fill(data.name);
} else if (typeof data.textures === "string") {
data.textures = new Array(6).fill(data.textures);
} else {
const { textures } = data;
if (textures.length === 3) {
textures[3] = textures[2];
textures[4] = textures[2];
textures[5] = textures[2];
} else if (textures.length === 2) {
// Top and bottom are the first texture, sides are the second.
textures[2] = textures[1];
textures[3] = textures[2];
textures[4] = textures[2];
textures[5] = textures[2];
textures[1] = textures[0];
}else if(textures.length === 4){
textures[4] = textures[5] = textures[3]
textures[3] = textures[2]
}
}
for(let t = 0; t<data.textures.length; t++){
if(!textures[data.textures[t]]){
window.console.log("Missing texture for "+data.textures[t])
data.textures[t] = "error"
}
}
data.transparent = data.transparent || false
data.shadow = data.shadow !== undefined ? data.shadow	: true
data.lightLevel = data.lightLevel || 0
data.onupdate = data.onupdate || emptyFunc
if(data.solid === undefined)data.solid = true
data.breakTime = data.breakTime ? data.breakTime*1000 : 0.05*1000 //time for breaking
if(data.dropAmount === undefined) data.dropAmount = 1
if(data.item || data.edible || data.crossShape || data.tallcrossShape || data.sideCross || data.ladder || data.torch || data.door || data.lantern || data.chain || data.sunflower || data.pane || data.fire) data.flatIcon = true
if(data.door) data.iconTexture = data.name
if(data.liquid) data.noHitbox = true
if(!data.stackSize)data.stackSize = 64
if(data.pickaxe){
data.stackSize = 1
data.attackTime = 20/1.2
}
if(data.sword){
data.stackSize = 1
data.attackTime = 20/1.6
}
if(data.shovel){
data.stackSize = 1
data.attackTime = 20/1
}
if(data.axe){
data.stackSize = 1
}
if(data.attackSpeed) data.attackTime = 20/data.attackSpeed
if(data.stoneSound){
data.digSound = stoneDigSound
data.stepSound = stoneStepSound
}
if(data.woodSound){
data.digSound = woodDigSound
data.stepSound = woodStepSound
}
if(data.clothSound){
data.digSound = clothDigSound
data.stepSound = clothStepSound
}
if(data.glassSound){
data.digSound = glassDigSound
data.placeSound = stoneDigSound
}
if(data.nyliumSound){
data.digSound = nyliumDigSound
data.stepSound = nyliumStepSound
}
if(data.stemSound){
data.digSound = stemDigSound
data.stepSound = stemStepSound
}
if(data.basaltSound){
data.digSound = basaltDigSound
data.stepSound = basaltStepSound
}
if(data.rootSound){
data.digSound = rootDigSound
data.stepSound = rootStepSound
}
if(data.amethystSound){
data.placeSound = amethystPlaceSound
data.digSound = amethystDigSound
data.stepSound = amethystStepSound
}
if(data.amethystClusterSound){
data.placeSound = amethystClusterPlaceSound
data.digSound = amethystClusterDigSound
}
if(data.deepslateSound){
data.placeSound = deepslatePlaceSound
data.digSound = deepslateDigSound
data.stepSound = deepslateStepSound
}
if(data.deepslateBricksSound){
data.placeSound = deepslateBricksPlaceSound
data.stepSound = deepslateBricksStepSound
}
}
let textureIds = {}
let idx = -1
for(var i in textures){
idx ++
textureIds[i] = idx
}
window.textureIds = textureIds
// survival inventory
let invItems = [1];
let invLength = 13*9;
for(let i=0; i<invLength; i++){
if(!invItems[i]){
invItems.push({id:0,amount:64})
}
}
//add something to inventory
function newInvItem(id){
//look for empty slot
for(let i=0; i<inventory.hotbar.length; i++){
if(!inventory.hotbar[i].id){
inventory.hotbar[i] = {id:id, amount:1, animation:1.5}
return true
}
if(inventory.hotbar[i].id === id && inventory.hotbar[i].amount < blockData[inventory.hotbar[i].id].stackSize){
inventory.hotbar[i].amount ++;
inventory.hotbar[i].animation = 1.5
return true
}
}
for(let i=0; i<invLength; i++){
if(!(invItems[i] && invItems[i].id)){
invItems[i] = {id:id, amount:1}
return true
}
if(invItems[i].id === id && invItems[i].amount < blockData[invItems[i].id].stackSize){
invItems[i].amount ++;
return true
}
}
return false
}
const crafts = {
"oakLog": {name:"oakPlanks", amount:4, shapeless: true},
"acaciaLog": {name:"acaciaPlanks", amount:4, shapeless: true},
"birchLog": {name:"birchPlanks", amount:4, shapeless: true},
"darkOakLog": {name:"darkOakPlanks", amount:4, shapeless: true},
"jungleLog": {name:"junglePlanks", amount:4, shapeless: true},
"spruceLog": {name:"sprucePlanks", amount:4, shapeless: true},
"oakPlanks,air,air,oakPlanks": {name:"stick", amount:4, shaped:true},
"acaciaPlanks,air,air,acaciaPlanks": {name:"stick", amount:4, shaped:true},
"birchPlanks,air,air,birchPlanks": {name:"stick", amount:4, shaped:true},
"darkOakPlanks,air,air,darkOakPlanks": {name:"stick", amount:4, shaped:true},
"junglePlanks,air,air,junglePlanks": {name:"stick", amount:4, shaped:true},
"sprucePlanks,air,air,sprucePlanks": {name:"stick", amount:4, shaped:true},
"oakPlanks,oakPlanks,air,oakPlanks,oakPlanks,air,oakPlanks,oakPlanks":{name:"oakDoor", amount:3},
"acaciaPlanks,acaciaPlanks,air,acaciaPlanks,acaciaPlanks,air,acaciaPlanks,acaciaPlanks":{name:"acaciaDoor", amount:3},
"birchPlanks,birchPlanks,air,birchPlanks,birchPlanks,air,birchPlanks,birchPlanks":{name:"birchDoor", amount:3},
"darkOakPlanks,darkOakPlanks,air,darkOakPlanks,darkOakPlanks,air,darkOakPlanks,darkOakPlanks":{name:"darkOakDoor", amount:3},
"junglePlanks,junglePlanks,air,junglePlanks,junglePlanks,air,junglePlanks,junglePlanks":{name:"jungleDoor", amount:3},
"sprucePlanks,sprucePlanks,air,sprucePlanks,sprucePlanks,air,sprucePlanks,sprucePlanks":{name:"spruceDoor", amount:3},
"warpedPlanks,warpedPlanks,air,warpedPlanks,warpedPlanks,air,warpedPlanks,warpedPlanks":{name:"warpedDoor", amount:3},
"crimsonPlanks,crimsonPlanks,air,crimsonPlanks,crimsonPlanks,air,crimsonPlanks,crimsonPlanks,air":{name:"crimsonDoor",amount:3},
"ironIngot,ironIngot,air,ironIngot,ironIngot,air,ironIngot,ironIngot,air":{name:"ironDoor",amount:3},
"oakPlanks,oakPlanks,oakPlanks,oakPlanks,oakPlanks,oakPlanks":{name:"oakTrapdoor", amount:2},
"birchPlanks,birchPlanks,birchPlanks,birchPlanks,birchPlanks,birchPlanks":{name:"birchTrapdoor", amount:2},
"darkOakPlanks,darkOakPlanks,darkOakPlanks,darkOakPlanks,darkOakPlanks,darkOakPlanks":{name:"darkOakTrapdoor", amount:2},
"junglePlanks,junglePlanks,junglePlanks,junglePlanks,junglePlanks,junglePlanks":{name:"jungleTrapdoor", amount:2},
"sprucePlanks,sprucePlanks,sprucePlanks,sprucePlanks,sprucePlanks,sprucePlanks":{name:"spruceTrapdoor", amount:2},
"acaciaPlanks,acaciaPlanks,acaciaPlanks,acaciaPlanks,acaciaPlanks,acaciaPlanks":{name:"acaciaTrapdoor", amount:2},
"warpedPlanks,warpedPlanks,warpedPlanks,warpedPlanks,warpedPlanks,warpedPlanks":{name:"warpedTrapdoor", amount:2},
"crimsonPlanks,crimsonPlanks,crimsonPlanks,crimsonPlanks,crimsonPlanks,crimsonPlanks":{name:"crimsonTrapdoor", amount:2},
"ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot":{name:"ironTrapdoor", amount:2},
"redWool,redWool,redWool,oakPlanks,oakPlanks,oakPlanks":{name:"redBed", amount:3},
"oakPlanks,oakPlanks,air,oakPlanks,oakPlanks":{name:"craftingTable"},
"birchPlanks,birchPlanks,air,birchPlanks,birchPlanks":{name:"craftingTable"},
"darkOakPlanks,darkOakPlanks,air,darkOakPlanks,darkOakPlanks":{name:"craftingTable"},
"acaciaPlanks,acaciaPlanks,air,acaciaPlanks,acaciaPlanks":{name:"craftingTable"},
"sprucePlanks,sprucePlanks,air,sprucePlanks,sprucePlanks":{name:"craftingTable"},
"junglePlanks,junglePlanks,air,junglePlanks,junglePlanks":{name:"craftingTable"},
"warpedPlanks,warpedPlanks,air,warpedPlanks,warpedPlanks":{name:"craftingTable"},
"crimsonPlanks,crimsonPlanks,air,crimsonPlanks,crimsonPlanks":{name:"craftingTable"},
"coal,air,air,stick":{name:"torch",amount:4},
"coal,coal,coal,coal,coal,coal,coal,coal,coal":{name:"coalBlock"},
"ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot":{name:"ironBlock"},
"goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot":{name:"goldBlock"},
"diamond,diamond,diamond,diamond,diamond,diamond,diamond,diamond,diamond":{name:"diamondBlock"},
"lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli":{name:"lapisBlock"},
"emerald,emerald,emerald,emerald,emerald,emerald,emerald,emerald,emerald":{name:"emeraldBlock"},
"oakPlanks,oakPlanks,oakPlanks,air,stick,air,air,stick":{name:"woodenPickaxe"},
"cobblestone,cobblestone,cobblestone,air,stick,air,air,stick":{name:"stonePickaxe"},
"ironIngot,ironIngot,ironIngot,air,stick,air,air,stick":{name:"ironPickaxe"},
"goldIngot,goldIngot,goldIngot,air,stick,air,air,stick":{name:"goldenPickaxe"},
"diamond,diamond,diamond,air,stick,air,air,stick":{name:"diamondPickaxe"},
"ironIngot,air,air,air,flint": {name:"flintAndSteel"},
"air,oakPlanks,air,air,oakPlanks,air,air,stick": {name:"woodenSword"},
"air,cobblestone,air,air,cobblestone,air,air,stick": {name:"stoneSword"},
"air,ironIngot,air,air,ironIngot,air,air,stick": {name:"ironSword"},
"air,goldIngot,air,air,goldIngot,air,air,stick": {name:"goldenSword"},
"air,diamond,air,air,diamond,air,air,stick": {name:"diamondSword"},
"air,air,air,snowBlock,snowBlock,snowBlock": {name:"snow", amount:6},
"snowball,snowball,air,snowball,snowball": {name:"snowBlock"},
"ironIngot,air,ironIngot,air,ironIngot":{name:"bucket"},
"cobblestone,cobblestone,cobblestone,cobblestone,air,cobblestone,cobblestone,cobblestone,cobblestone":{name:"furnace"},
"wheat,wheat,wheat":{name:"bread"},
"oakPlanks,air,air,stick,air,air,stick":{name:"woodenShovel"},
"cobblestone,air,air,stick,air,air,stick":{name:"stoneShovel"},
"ironIngot,air,air,stick,air,air,stick":{name:"ironShovel"},
"goldIngot,air,air,stick,air,air,stick":{name:"goldenShovel"},
"diamond,air,air,stick,air,air,stick":{name:"diamondShovel"},
"oakPlanks,oakPlanks,air,oakPlanks,stick,air,air,stick":{name:"woodenAxe"},
"cobblestone,cobblestone,air,cobblestone,stick,air,air,stick":{name:"stoneAxe"},
"ironIngot,ironIngot,air,ironIngot,stick,air,air,stick":{name:"ironAxe"},
"goldIngot,goldIngot,air,goldIngot,stick,air,air,stick":{name:"goldenAxe"},
"diamond,diamond,air,diamond,stick,air,air,stick":{name:"diamondAxe"},
"birchPlanks,birchPlanks":{name:"birchPressurePlate",shapeless:true},
"oakPlanks,oakPlanks":{name:"oakPressurePlate",shapeless:true},
"junglePlanks,junglePlanks":{name:"junglePressurePlate",shapeless:true},
"sprucePlanks,sprucePlanks":{name:"sprucePressurePlate",shapeless:true},
"darkOakPlanks,darkOakPlanks":{name:"darkOakPressurePlate",shapeless:true},
"acaciaPlanks,acaciaPlanks":{name:"acaciaPressurePlate",shapeless:true},
"warpedPlanks,warpedPlanks":{name:"warpedPressurePlate",shapeless:true},
"crimsonPlanks,crimsonPlanks":{name:"crimsonPressurePlate",shapeless:true},
"stone,stone":{name:"stonePressurePlate",shapeless:true},
"polishedBlackstone,polishedBlackstone":{name:"polishedBlackstone",shapeless:true},
"goldIngot,goldIngot":{name:"lightWeightedPressurePlate",shapeless:true},
"ironIngot,ironIngot":{name:"heavyWeightedPressurePlate",shapeless:true},
"strippedOakLog": {name:"oakPlanks", amount:4, shapeless: true},
"strippedAcaciaLog": {name:"acaciaPlanks", amount:4, shapeless: true},
"strippedBirchLog": {name:"birchPlanks", amount:4, shapeless: true},
"strippedDarkOakLog": {name:"darkOakPlanks", amount:4, shapeless: true},
"strippedJungleLog": {name:"junglePlanks", amount:4, shapeless: true},
"strippedSpruceLog": {name:"sprucePlanks", amount:4, shapeless: true},
"warpedStem": {name:"warpedPlanks", amount:4, shapeless: true},
"crimsonStem":{name:"crimsonPlanks", amount:4, shapeless: true},
"strippedWarpedStem": {name:"warpedPlanks", amount:4, shapeless: true},
"strippedCrimsonStem":{name:"crimsonPlanks", amount:4, shapeless: true},
"warpedPlanks,air,air,warpedPlanks": {name:"stick", amount:4},
"crimsonPlanks,air,air,crimsonPlanks": {name:"stick", amount:4},
"stone":{name:"stoneButton", shapeless: true},
"oakPlanks":{name:"oakButton", shapeless: true},
"birchPlanks":{name:"birchButton", shapeless: true},
"darkOakPlanks":{name:"darkOakButton", shapeless: true},
"acaciaPlanks":{name:"acaciaButton", shapeless: true},
"sprucePlanks":{name:"spruceButton", shapeless: true},
"junglePlanks":{name:"jungleButton", shapeless: true},
"warpedPlanks":{name:"warpedButton", shapeless: true},
"crimsonPlanks":{name:"crimsonButton", shapeless: true},
"polishedBlackstone":{name:"polishedBlackstoneButton", shapeless:true},
"ironBlock": {name:"ironIngot",amount:9,shapeless:true},
"goldBlock": {name:"goldIngot",amount:9,shapeless:true},
"coalBlock": {name:"coal",amount:9,shapeless:true},
"emeraldBlock": {name:"emerald",amount:9,shapeless:true},
"diamondBlock": {name:"diamond",amount:9,shapeless:true},
"copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot":{name:"copperBlock"},
"copperBlock": {name:"copperIngot",amount:9,shapeless:true},
"oakPlanks,oakPlanks,air,air,stick,air,air,stick":{name:"woodenHoe"},
"cobblestone,cobblestone,air,air,stick,air,air,stick":{name:"stoneHoe"},
"ironIngot,ironIngot,air,air,stick,air,air,stick":{name:"ironHoe"},
"goldIngot,goldIngot,air,air,stick,air,air,stick":{name:"goldenHoe"},
"diamond,diamond,air,air,stick,air,air,stick":{name:"diamondHoe"},
"rawIron,rawIron,rawIron,rawIron,rawIron,rawIron,rawIron,rawIron,rawIron":{name:"rawIronBlock"},
"rawGold,rawGold,rawGold,rawGold,rawGold,rawGold,rawGold,rawGold,rawGold":{name:"rawGoldBlock"},
"rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper":{name:"rawCopperBlock"},
"rawIronBlock":{name:"rawIron",amount:9,shapeless:true},
"rawGoldBlock":{name:"rawGold",amount:9,shapeless:true},
"rawCopperBlock":{name:"rawCopper",amount:9,shapeless:true},
"netheriteScrap,netheriteScrap,netheriteScrap,netheriteScrap,goldIngot,goldIngot,goldIngot,goldIngot":{name:"netheriteIngot"},
"netheriteIngot,netheriteIngot,netheriteIngot,air,stick,air,air,stick":{name:"netheritePickaxe"},
"netheriteIngot,air,air,netheriteIngot,air,air,stick":{name:"netheriteSword"},
"netheriteIngot,air,air,stick,air,air,stick":{name:"netheriteShovel"},
"netheriteIngot,netheriteIngot,air,netheriteIngot,stick,air,air,stick":{name:"netheriteAxe"},
"netheriteIngot,netheriteIngot,air,air,stick,air,air,stick":{name:"netheriteHoe"},
"netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot":{name:"netheriteBlock"},
"netheriteBlock":{name:"netheriteIngot",amount:9},
"wheat,wheat,wheat,wheat,wheat,wheat,wheat,wheat,wheat":{name:"hayBlock"},
"hayBlock":{name:"wheat",amount:9,shapeless:true},
"ironIngot":{name:"ironNugget",amount:9,shapeless:true},
"goldIngot":{name:"goldNugget",amount:9,shapeless:true},
"ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget":{name:"ironIngot"},
"goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget":{name:"goldIngot"},
"ironNugget,ironNugget,ironNugget,ironNugget,torch,ironNugget,ironNugget,ironNugget,ironNugget":{name:"lantern"},
"stick,air,stick,stick,stick,stick,stick,air,stick":{name:"ladder",amount:3},
"ironNugget,air,air,ironIngot,air,air,ironNugget":{name:"chain"},
"stone,stone,air,stone,stone":{name:"stoneBricks",amount:4},
"stoneBricks,vine":{name:"mossyStoneBricks",shapeless:true},
"cobblestone,vine":{name:"mossyCobble",shapeless:true},
"chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks,netheriteIngot,chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks":{name:"lodestone"},
"oakPlanks,oakPlanks,oakPlanks,oakPlanks,redstoneDust,oakPlanks,oakPlanks,oakPlanks,oakPlanks":{name:"noteBlock"},
"oakPlanks,oakPlanks,oakPlanks,oakPlanks,diamond,oakPlanks,oakPlanks,oakPlanks,oakPlanks":{name:"jukebox"},
"ironIngot,ironIngot,ironIngot,ironIngot,furnace,ironIngot,smoothStone,smoothStone,smoothStone":{name:"blastFurnace"},
"air,oakLog,air,oakLog,furnace,oakLog,air,oakLog":{name:"smoker"},
"carvedPumpkin,torch":{name:"jackOLantern",shapeless:true},
"air,ironIngot,air,ironIngot":{name:"shears"},
"melonSlice":{name:"melonSeeds",shapeless:true},
"melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice":{name:"melon"},
"redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust":{name:"redstoneBlock"},
"air,redstoneDust,air,redstoneDust,glowstone,redstoneDust,air,redstoneDust":{name:"redstoneLamp"},
"glowstoneDust,glowstoneDust,air,glowstoneDust,glowstoneDust":{name:"glowstone"},
"cobblestone,quartz,air,quartz,cobblestone":{name:"diorite",amount:2,shaped:true},
"diorite,diorite,air,diorite,diorite":{name:"polishedDiorite",amount:4,shaped:true},
"cobblestone,diorite":{name:"andesite",amount:2,shapeless:true},
"andesite,andesite,air,andesite,andesite":{name:"polishedAndesite",amount:4,shaped:true},
"diorite,quartz":{name:"granite",shapeless:true},
"granite,granite,air,granite,granite":{name:"polishedGranite",amount:4,shaped:true},
"amethystShard,air,air,copperIngot,air,air,copperIngot":{name:"spyglass",shaped:true},
"oakPlanks,air,oakPlanks,air,oakPlanks":{name:"bowl",amount:4,shaped:true},
"redMushroom,brownMushroom,bowl":{name:"mushroomStew",shapeless:true},
"egg,noodles,wheatSeeds,bowl":{name:"ramen",shapeless:true},
"wheat,egg,wheat":{name:"noodles",shaped:true},
}
var breakTypes = {
plant: "axe",
wood: "axe",
metal1: "pickaxe",
metal2: ["stonePickaxe","ironPickaxe","diamondPickaxe","netheritePickaxe"],
metal3: ["ironPickaxe","diamondPickaxe","netheritePickaxe"],
metal4: ["diamondPickaxe","netheritePickaxe"],
rock1: "pickaxe",
rock2: ["stonePickaxe","ironPickaxe","diamondPickaxe","netheritePickaxe"],
rock3: ["ironPickaxe","diamondPickaxe","netheritePickaxe"],
rock4: ["diamondPickaxe","netheritePickaxe"],
ground: "shovel",
plant2: "hoe"
}
var handBreakable = [
"plant","wood","plant2","ground"
]
var allPickaxes = ["woodenPickaxe","stonePickaxe","ironPickaxe","diamondPickaxe","netheritePickaxe","goldenPickaxe"]
var allShovels = ["woodenShovel","stoneShovel","ironShovel","diamondShovel","netheriteShovel","goldenShovel"]
for(var b in breakTypes){
var t = breakTypes[b]
if(t === "pickaxe"){
breakTypes[b] = allPickaxes
}
if(t === "shovel"){
breakTypes[b] = allShovels
}
}
var smelts = {
rawIron: {name:"ironIngot", time:200, xp:0.7},
rawCopper: {name:"copperIngot", time:200, xp:0.7},
rawGold: {name:"goldIngot", time:200, xp:1},
sand: {name:"glass",time:200,xp:0.1, furnace:true},//furnace propertie means it can only be smelted in furnace
cobblestone: {name:"stone",time:200,xp:0.1, furnace:true},
stone: {name:"smoothStone", time:200, xp:0.1, furnace:true},
stoneBricks: {name:"crackedStoneBricks",time:200,xp:0.1, furnace:true}
}
var smeltFuel = { //time is in seconds
oakLog: {time:15},
coal: {time:80},
oakPlanks: {time:15},
stick: {time:5},
}
var achievementTypes = {
"Taking Inventory":{
score: 10,
description:"Open your inventory"
},
"Getting Wood":{
score:10,
description:"Punch a tree until a block of wood pops out."
},
"Benchmaking":{
score:10,
description:"Craft a Crafting Table with four blocks of wooden planks."
},
"Time to Mine!":{
score:10,
description:"Use planks and sticks to make a pickaxe."
},
"Getting an Upgrade":{
score:15,
description:"Construct a better pickaxe."
},
"Bake Bread":{
score:15,
description:"Turn wheat into bread."
},
"Time to Strike!":{
score:10,
description:"Use planks and sticks to make a sword."
},
"DIAMONDS!":{
score:20,
description:"Acquire diamonds with your iron tools."
},
"Diamonds to you!":{ //how is this possible to code???
score:15,
description:"Throw diamonds at another player."
},
"Time to Farm!":{
score:10,
description:"Make a Hoe."
}
}
for(var a in achievementTypes){
achievementTypes[a].name = a
}
var achievments = []
function achievment(name){
var a = achievementTypes[name]
if(!a) return console.log("No such achievment: "+name)
if(achievments.includes(name)) return
if(cheats) return
achievments.push(name)
sideMessage("Achievment made: "+a.name, a.description)
if(multiplayer) send({type:"achievment",data:a.name})
}
// implementation of xxHash
const {
seedHash,
hash
} = (() => {
// closure around mutable `seed`; updated via calls to `seedHash`
let seed = Math.random() * 2100000000 | 0;
const PRIME32_2 = 1883677709;
const PRIME32_3 = 2034071983;
const PRIME32_4 = 668265263;
const PRIME32_5 = 374761393;
const seedHash = s => {
seed = s | 0;
}
const { imul } = Math;
const hash = (x, y) => {
let h32 = 0;
h32 = seed + PRIME32_5 | 0;
h32 += 8;
h32 += imul(x, PRIME32_3);
h32 = imul(h32 << 17 | h32 >> 32 - 17, PRIME32_4);
h32 += imul(y, PRIME32_3);
h32 = imul(h32 << 17 | h32 >> 32 - 17, PRIME32_4);
h32 ^= h32 >> 15;
h32 *= PRIME32_2;
h32 ^= h32 >> 13;
h32 *= PRIME32_3;
h32 ^= h32 >> 16;
return h32 / 2147483647;
};
return {
seedHash,
hash
};
})();
const win = window.parent;
const doc = document;
const { console } = win;
win.world = undefined;
let worldSeed;
win.dimensions = null
function setSeed(seed){
worldSeed = seed
seedHash(worldSeed)
caveNoise = openSimplexNoise(worldSeed)
noiseProfile.noiseSeed(worldSeed)
}
class Marsaglia {
// from http://www.math.uni-bielefeld.de/~sillke/ALGORITHMS/random/marsaglia-c
nextInt() {
const { z, w } = this;
this.z = 36969 * (z & 65535) + (z >>> 16) & 0xFFFFFFFF;
this.w = 18000 * (w & 65535) + (w >>> 16) & 0xFFFFFFFF;
return ((this.z & 0xFFFF) << 16 | this.w & 0xFFFF) & 0xFFFFFFFF;
}
nextDouble() {
const i = this.nextInt() / 4294967296;
const is_less_than_zero = (i < 0) | 0; // cast to 1 or 0
return is_less_than_zero + i;
}
constructor(i1, i2) { // better param names
this.z = (i1 | 0) || 362436069;
this.w = i2 || hash(521288629, this.z) * 2147483647 | 0;
}
}
// The noise and random functions are copied from the processing.js source code; these others are polyfills made by me to avoid needing to remove all the pjs draw calls
const {
randomSeed,
random
} = (() => {
// closure around mut `currentRandom`
let currentRandom = null;
const randomSeed = seed => {
currentRandom = new Marsaglia(seed);
};
const random = (min, max) => {
if (!max) {
if (min) {
max = min;
min = 0;
} else {
min = 0;
max = 1;
}
}
return currentRandom.nextDouble() * (max - min) + min;
};
return {
randomSeed,
random
};
})();
class PerlinNoise {
// http://www.noisemachine.com/talk1/17b.html
// http://mrl.nyu.edu/~perlin/noise/
static grad3d(i, x, y, z) {
const h = i & 15; // convert into 12 gradient directions
const u = h < 8
? x
: y;
const v = h < 4
? y
: h === 12 || h === 14
? x
: z;
return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}
static grad2d(i, x, y) {
const v = (i & 1) === 0
? x
: y;
return (i & 2) === 0
? -v
: v;
}
static grad1d(i, x) {
return (i & 1) === 0
? -x
: x;
}
static lerp(t, a, b) {
return a + t * (b - a);
}
// end of statics
// permutation
perm = new Uint8Array(0x200);
// prototype functions:
noise3d(x, y, z) {
const { floor } = Math;
const X = floor(x) & 0xff;
const Y = floor(y) & 0xff;
const Z = floor(z) & 0xff;
x -= floor(x);
y -= floor(y);
z -= floor(z);
const fx = (3 - 2 * x) * x * x;
const fy = (3 - 2 * y) * y * y;
const fz = (3 - 2 * z) * z * z;
const { perm } = this;
const p0 = perm[X] + Y;
const p00 = perm[p0] + Z;
const p01 = perm[p0 + 1] + Z;
const p1 = perm[X + 1] + Y;
const p10 = perm[p1] + Z;
const p11 = perm[p1 + 1] + Z;
const { lerp, grad3d } = PerlinNoise;
return lerp(
fz,
lerp(
fy,
lerp(
fx,
grad3d(perm[p00], x, y, z),
grad3d(perm[p10], x - 1, y, z)
),
lerp(
fx,
grad3d(perm[p01], x, y - 1, z),
grad3d(perm[p11],x - 1, y - 1, z)
)
),
lerp(
fy,
lerp(
fx,
grad3d(perm[p00 + 1], x, y, z - 1),
grad3d(perm[p10 + 1], x - 1, y, z - 1)
),
lerp(
fx,
grad3d(perm[p01 + 1], x, y - 1, z - 1),
grad3d(perm[p11 + 1], x - 1, y - 1, z - 1)
)
)
);
}
noise2d(x, y) {
const { floor } = Math;
const X = floor(x) & 0xff;
const Y = floor(y) & 0xff;
x -= floor(x);
y -= floor(y);
const { perm } = this;
const fx = (3 - 2 * x) * x * x;
const fy = (3 - 2 * y) * y * y;
const p0 = perm[X] + Y;
const p1 = perm[X + 1] + Y;
const { lerp, grad2d } = PerlinNoise;
return lerp(
fy,
lerp(
fx,
grad2d(
perm[p0],
x,
y
),
grad2d(
perm[p1],
x - 1,
y
)
),
lerp(
fx,
grad2d(
perm[p0 + 1],
x,
y - 1
),
grad2d(
perm[p1 + 1],
x - 1,
y - 1
)
)
);
}
noise1d(x) {
const { floor } = Math;
const X = floor(x) & 0xff;
x -= floor(x);
const fx = (3 - 2 * x) * x * x;
const { lerp, grad1d } = PerlinNoise;
return lerp(
fx,
grad1d(perm[X], x),
grad1d(perm[X + 1], x - 1)
);
}
constructor(seed) {
if (seed === undefined) {
throw new TypeError("A value for `seed` parameter was not provided to `PerlinNoise`");
}
const rnd = new Marsaglia(seed);
// generate permutation
const { perm } = this;
// fill 0x0..0x100
for (let i = 0; i < 0x100; ++i) {
perm[i] = i;
}
for (let i = 0; i < 0x100; ++i) {
const j = rnd.nextInt() & 0xFF;
const t = perm[j];
perm[j] = perm[i];
perm[i] = t;
}
// copy to avoid taking mod in perm[0]
// copies from first half of array, into the second half
perm.copyWithin(0x100, 0x0, 0x100);
}
}
const noiseProfile = {
generator: undefined,
octaves: 4,
fallout: 0.5,
seed: undefined,
noiseSeed(seed) {
this.seed = seed;
this.generator = new PerlinNoise(noiseProfile.seed);
},
noise(x, y, z) {
const { generator, octaves, fallout } = (this || noiseProfile);
let effect = 1,
k = 1,
sum = 0;
for (let i = 0; i < octaves; ++i) {
effect *= fallout;
const k = 1 << i;
let temp;
switch (arguments.length) {
case 1: {
temp = generator.noise1d(k * x);
break;
} case 2: {
temp = generator.noise2d(k * x, k * y);
break;
} case 3: {
temp = generator.noise3d(k * x, k * y, k * z);
break;
}
}
sum += effect * (1 + temp) / 2;
}
return sum;
}
};
const noise = noiseProfile.noise
let caveNoise;
// Copied and modified from https://github.com/blindman67/SimplexNoiseJS
function openSimplexNoise(clientSeed) {
const SQ4 = 2
const toNums = function(s) { return s.split(",").map(function(s) { return new Uint8Array(s.split("").map(function(v) { return Number(v) })) }) }
const decode = function(m, r, s) { return new Int8Array(s.split("").map(function(v) { return parseInt(v, r) + m })) }
const toNumsB32 = function(s) { return s.split(",").map(function(s) { return parseInt(s, 32) }) }
const NORM_3D = 1.0 / 206.0
const SQUISH_3D = 1 / 3
const STRETCH_3D = -1 / 6
var base3D = toNums("0000110010101001,2110210120113111,110010101001211021012011")
const gradients3D = decode(-11, 23, "0ff7mf7fmmfffmfffm07f70f77mm7ff0ff7m0f77m77f0mf7fm7ff0077707770m77f07f70")
var lookupPairs3D = function() { return new Uint16Array(toNumsB32("0,2,1,1,2,2,5,1,6,0,7,0,10,2,12,2,41,1,45,1,50,5,51,5,g6,0,g7,0,h2,4,h6,4,k5,3,k7,3,l0,5,l1,5,l2,4,l5,3,l6,4,l7,3,l8,d,l9,d,la,c,ld,e,le,c,lf,e,m8,k,ma,i,p9,l,pd,n,q8,k,q9,l,15e,j,15f,m,16a,i,16e,j,19d,n,19f,m,1a8,f,1a9,h,1aa,f,1ad,h,1ae,g,1af,g,1ag,b,1ah,a,1ai,b,1al,a,1am,9,1an,9,1bg,b,1bi,b,1eh,a,1el,a,1fg,8,1fh,8,1qm,9,1qn,9,1ri,7,1rm,7,1ul,6,1un,6,1vg,8,1vh,8,1vi,7,1vl,6,1vm,7,1vn,6")) }
var p3D = decode(-1, 5, "112011210110211120110121102132212220132122202131222022243214231243124213241324123222113311221213131221123113311112202311112022311112220342223113342223311342223131322023113322023311320223113320223131322203311322203131")
const setOf = function(count) { var a = [],i = 0; while (i < count) { a.push(i++) } return a }
const doFor = function(count, cb) { var i = 0; while (i < count && cb(i++) !== true) {} }
function shuffleSeed(seed,count){
seed = seed * 1664525 + 1013904223 | 0
count -= 1
return count > 0 ? shuffleSeed(seed, count) : seed
}
const types = {
_3D : {
base : base3D,
squish : SQUISH_3D,
dimensions : 3,
pD : p3D,
lookup : lookupPairs3D,
}
}
function createContribution(type, baseSet, index) {
var i = 0
const multiplier = baseSet[index ++]
const c = { next : undefined }
while(i < type.dimensions) {
const axis = ("xyzw")[i]
c[axis + "sb"] = baseSet[index + i]
c["d" + axis] = - baseSet[index + i++] - multiplier * type.squish
}
return c
}
function createLookupPairs(lookupArray, contributions){
var i
const a = lookupArray()
const res = new Map()
for (i = 0; i < a.length; i += 2) { res.set(a[i], contributions[a[i + 1]]); }
return res
}
function createContributionArray(type) {
const conts = []
const d = type.dimensions
const baseStep = d * d
var k, i = 0
while (i < type.pD.length) {
const baseSet = type.base[type.pD[i]]
let previous, current
k = 0
do {
current = createContribution(type, baseSet, k)
if (!previous) { conts[i / baseStep] = current; }
else { previous.next = current; }
previous = current
k += d + 1
} while(k < baseSet.length)
current.next = createContribution(type, type.pD, i + 1)
if (d >= 3) { current.next.next = createContribution(type, type.pD, i + d + 2) }
if (d === 4) { current.next.next.next = createContribution(type, type.pD, i + 11) }
i += baseStep
}
const result = [conts, createLookupPairs(type.lookup, conts)]
type.base = undefined
type.lookup = undefined
return result
}
let temp = createContributionArray(types._3D)
const contributions3D = temp[0], lookup3D = temp[1]
const perm = new Uint8Array(256)
const perm3D = new Uint8Array(256)
const source = new Uint8Array(setOf(256))
var seed = shuffleSeed(clientSeed, 3)
doFor(256, function(i) {
i = 255 - i
seed = shuffleSeed(seed, 1)
var r = (seed + 31) % (i + 1)
r += r < 0 ? i + 1 : 0
perm[i] = source[r]
perm3D[i] = (perm[i] % 24) * 3
source[r] = source[i]
})
base3D = undefined
lookupPairs3D = undefined
p3D = undefined
return function(x, y, z) {
const pD = perm3D
const p = perm
const g = gradients3D
const stretchOffset = (x + y + z) * STRETCH_3D
const xs = x + stretchOffset, ys = y + stretchOffset, zs = z + stretchOffset
const xsb = floor(xs), ysb = floor(ys), zsb = floor(zs)
const squishOffset	= (xsb + ysb + zsb) * SQUISH_3D
const dx0 = x - (xsb + squishOffset), dy0 = y - (ysb + squishOffset), dz0 = z - (zsb + squishOffset)
const xins = xs - xsb, yins = ys - ysb, zins = zs - zsb
const inSum = xins + yins + zins
var c = lookup3D.get(
(yins - zins + 1) |
((xins - yins + 1) << 1) |
((xins - zins + 1) << 2) |
(inSum << 3) |
((inSum + zins) << 5) |
((inSum + yins) << 7) |
((inSum + xins) << 9)
)
var i, value = 0
while (c !== undefined) {
const dx = dx0 + c.dx, dy = dy0 + c.dy, dz = dz0 + c.dz
let attn = 2 - dx * dx - dy * dy - dz * dz
if (attn > 0) {
i = pD[(((p[(xsb + c.xsb) & 0xFF] + (ysb + c.ysb)) & 0xFF) + (zsb + c.zsb)) & 0xFF]
attn *= attn
value += attn * attn * (g[i++] * dx + g[i++] * dy + g[i] * dz)
}
c = c.next
}
return value * NORM_3D + 0.5
}
}
//copied from https://gist.github.com/bzdgn/d722c961f45d97ea8efc6cef3aa39e76
function nodeRotationX(node, theta) {
var cosTheta = Math.cos(theta);
var sinTheta = Math.sin(theta);
var y = node.y;
var z = node.z;
node.y = y * cosTheta - z * sinTheta;
node.z = y * sinTheta + z * cosTheta;
}
function nodeRotationY(node, theta) {
var cosTheta = Math.cos(theta);
var sinTheta = Math.sin(theta);
var x = node.x;
var z = node.z;
node.x = x * cosTheta - z * sinTheta;
node.z = x * sinTheta + z * cosTheta;
}
var node = {x:0, y:0, z:0}
function getRotation(rotX, rotY){
//node.x = -sin(rotY) * cos(rotX)
//node.y = sin(rotX)
//node.z = cos(rotY) * cos(rotX)
node.x = 0;node.y=0;node.z=1
nodeRotationX(node,rotX+Math.PI)
node.z = -node.z
nodeRotationY(node,rotY)
return node
}
win.getRotation = getRotation
class PVector {
constructor(x, y, z) {
this.x = x
this.y = y
this.z = z
}
set(x, y, z) {
if (y === undefined) {
this.x = x.x
this.y = x.y
this.z = x.z
} else {
this.x = x
this.y = y
this.z = z
}
}
normalize() {
let mag = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
this.x /= mag
this.y /= mag
this.z /= mag
}
add(v) {
this.x += v.x
this.y += v.y
this.z += v.z
}
mult(m) {
this.x *= m
this.y *= m
this.z *= m
}
crossProduct(x,y,z,vector) {
vector.x = this.y * z - this.z * y
vector.y = this.z * x - this.x * z
vector.z = this.x * y - this.y * x
return vector
}
product(x,y,z,vector) {
vector.x = this.x * x
vector.y = this.y * y
vector.z = this.z * z
return vector
}
}
let fill = function(r, g, b, a) {
if (g === undefined) {
g = r
b = r
}
a = a || a === 0 ? a : 100
ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ", "+a+"%)"
}
let stroke = function(r, g, b) {
if (g === undefined) {
g = r
b = r
}
ctx.strokeStyle = "rgb(" + r + ", " + g + ", " + b + ")"
}
let line = function(x1, y1, x2, y2) {
ctx.moveTo(x1, y1)
ctx.lineTo(x2, y2)
}
let ellipse = function(x,y,w,h){
if(ctx.ellipse){
ctx.ellipse(x,y,w,h,0, 0,Math.PI*2)
}
}
function text(txt, x, y, h) {
h = h || 0
let lines = txt.split("\n")
for (let i = 0; i < lines.length; i++) {
if(lines[i].includes("§")){
let middle = ctx.measureText(lines[i].replace(/§./g, "")).width
let m2 = middle / 2
let codes = lines[i].split("§")
ctx.fillText(codes[0], x-m2, y + h * i)
let tx = ctx.measureText(codes[0]).width
for(var j=1; j<codes.length; j++){
let str = codes[j]
ctx.fillStyle = colors[str.substring(0,1)]
str = str.substring(1)
ctx.fillText(str, x+tx-m2, y+h*i)
tx += ctx.measureText(str).width
}
}else{
ctx.fillText(lines[i], x, y + h * i)
}
}
}
function textSize(size) {
ctx.font = size + 'px mojangles' // mojangles
}
let strokeWeight = function(num) {
ctx.lineWidth = num
}
function map(v, min, max, min2, max2){
return min2 + (max2 - min2) * ((v - min) / (max - min));
}
function dist2(x,y,x2,y2){
let xDist = x - x2
let yDist = y - y2
return sqrt((xDist*xDist)+(yDist*yDist))
}
function dist3(x,y,z,x2,y2,z2){
let xDist = x - x2
let yDist = y - y2
let zDist = z - z2
return sqrt((xDist*xDist)+(yDist*yDist)+(zDist*zDist))
}
win.dist2 = dist2; win.dist3 = dist3
const ARROW = "arrow"
const HAND = "pointer"
let cursor = function(type) {
canvas.style.cursor = type
}
randomSeed(Math.random() * 10000000 | 0)
async function createDatabase() {
return await new Promise(async (resolve, reject) => {
let request = window.indexedDB.open("Minecraft", 1)
request.onupgradeneeded = function(event) {
let DB = event.target.result
// Worlds will contain and ID containing the timestamp at which the world was created, a "saved" timestamp,
// and a "data" string that's identical to the copy/paste save string
let store = DB.createObjectStore("worlds", { keyPath: "id" })
store.createIndex("id", "id", { unique: true })
store.createIndex("data", "data", { unique: false })
}
request.onsuccess = function(e) {
resolve(request.result)
}
request.onerror = function(e) {
console.error(e)
reject(e)
}
})
}
async function loadFromDB(id) {
return await new Promise(async (resolve, reject) => {
let db = await createDatabase()
let trans = db.transaction("worlds", "readwrite")
let store = trans.objectStore("worlds")
let req = id ? store.get(id) : store.getAll()
req.onsuccess = function(e) {
resolve(req.result)
db.close()
}
req.onerror = function(e) { 
resolve(null)
db.close()
}
})
}
async function saveToDB(id, data) {
return new Promise(async (resolve, reject) => {
let db = await createDatabase()
let trans = db.transaction("worlds", "readwrite")
let store = trans.objectStore("worlds")
let req = store.put({ id: id, data: data })
req.onsuccess = function() {
resolve(req.result)
}
req.onerror = function(e) {
reject(e)
}
})
}
async function deleteFromDB(id) {
return new Promise(async (resolve, reject) => {
let db = await createDatabase()
let trans = db.transaction("worlds", "readwrite")
let store = trans.objectStore("worlds")
let req = store.delete(id)
req.onsuccess = function() {
resolve(req.result)
}
req.onerror = function(e) {
reject(e)
}
})
}
function save(getObj) {
world = dimensions.overworld
var obj = {
id: world.id,
edited: Date.now(),
name: world.name,
version: world.version || version,
code: world.getSaveString(),
nether: world.getNetherSaveString(),
inv: world.getInv(),
surviv: world.getSurvivStr(),
ent: world.getEntities(),
mod: world.mod,
thumbnail: genWorldImage(),
achievments:achievments,
playersInv: playersInv
}
if(!getObj){
saveToDB(world.id, obj).then(() => world.edited = Date.now()).catch(e => console.error(e))
}else{
return obj
}
}
win.save = save
function getSaveJSON(){
var obj = save(true)
delete obj.thumbnail
return JSON.stringify(obj)
}
let thumbCnv = document.createElement("canvas")
thumbCnv.width = thumbCnv.height = 70
let thumbCtx = thumbCnv.getContext("2d")
win.genWorldImage = function(){
var midx = gl.canvas.width / 2, midy = gl.canvas.height / 2
var size = min(gl.canvas.width, gl.canvas.height), s2 = size / 2
thumbCtx.drawImage(gl.canvas, midx - s2, midy - s2, size,size, 0,0,70,70)
return thumbCnv.toDataURL("image/png")
}
win.thumbCnv = thumbCnv, win.thumbCtx = thumbCtx
// Expose these functions to the global scope for debugging
win.saveToDB = saveToDB
win.loadFromDB = loadFromDB
win.createDatabase = createDatabase
win.deleteFromDB = deleteFromDB
//globals
//{
let version = "Alpha 1.0.4"
doc.title = "Minecraft "+version
let normReach = 5
let bigReach = 40
let reach = normReach // Max distance player can place or break blocks
let sky = [/*0.33, 0.54, 0.72, <originl sky>*/  0.6, 0.8, 0.9] // 0 to 1 RGB color scale
function changeSky(type){
if(type === "nether"){
sky = [0,0,0]
}else{
sky = [0.6, 0.8, 0.9]
}
}
let soundOn = true
let superflat = false
let trees = true
let caves = true
let survival = false;
let cheats = false
let dieMessage = ""
let touchMoveLimit = 500 //(touch screen only) miliseconds before it decides you want to break a block
let blockIds = {}
blockData.forEach(block => blockIds[block.name] = block.id)
blockData.forEach(block => {
if(block.rotate && block.name.includes("SW")){
var unSw = block.name.replace("SW",'')
if(blockIds[unSw]){
block.drop = unSw
var obj = blockData[blockIds[unSw]]
block.breakTime = obj.breakTime
block.type = obj.type
}
}
})
win.blockData = blockData
win.blockIds = blockIds
//fill the crafts that have less than 9 items. Ex: "thing" => "thing,air,air..."
let arr, arr2 = new Array(9)
for(let i in crafts){
arr = i.split(",")
for(let j = 0; j<9; j++){
if(arr[j]){
arr[j] = blockIds[arr[j]]
}else{
arr.push(0)
}
}
crafts[i].id = blockIds[crafts[i].name]
if(crafts[i].amount === undefined) crafts[i].amount = 1
crafts[arr.join(",")] = crafts[i]
//shaped recipes
if(crafts[i].shaped){
var craft2 = Object.assign({},crafts[i])
craft2.hidden = true
var xSpace = 3, ySpace = 3
//find how much empty space there is
for(var x=2; x>=0; x--){
var a = arr[x]
var b = arr[x+3]
var c = arr[x+6]
if(a||b||c){
xSpace = x
break
}
}
for(var y=2; y>=0; y--){
var a = arr[y*3]
var b = arr[(y*3)+1]
var c = arr[(y*3)+2]
if(a||b||c){
ySpace = y
break
}
}
var offsetX = -1, offsetY = -1
for(var x = xSpace; x<3; x++){
offsetX ++
for(var y = ySpace; y<3; y++){
offsetY ++
if(x === xSpace && y === ySpace) continue
arr2.fill(0)
for(var x2 = 0; x2<3; x2++){
for(var y2 = 0; y2<3; y2++){
var b = arr[x2+(y2*3)]
if(b){
var bx = x2 + offsetX
var by = y2 + offsetY
arr2[bx+(by*3)] = b
}
}
}
crafts[arr2.join(",")] = craft2
}
offsetY = -1
}
}
delete crafts[i]
}
win.crafts = crafts
function shapelessCraft(craft) {
let arr2 = craft;
arr2.sort(function(a, b) {
return a - b;
});
let arr = [];
for(let i in crafts) {
if(!crafts[i].shapeless) continue;
arr = i.split(",");
arr.sort(function(a, b) {
return a - b;
});
let comp = arr.map(num => Number(num));
if(arrayValues(comp,arr2)) {
return i;
}
}
}
for(i in smelts){
smelts[i].id = blockIds[smelts[i].name]
smelts[blockIds[i]] = smelts[i]
delete smelts[i]
}
for(i in smeltFuel){
smeltFuel[i].operations = smeltFuel[i].time / 10
smeltFuel[i].ops = smeltFuel[i].operations / smeltFuel[i].time //operations per seconds
smeltFuel[blockIds[i]] = smeltFuel[i]
delete smeltFuel[i]
}
win.smelts = smelts; win.smeltFuel = smeltFuel
let currentFov
// Configurable and savable settings
let settings = {
renderDistance: 4,
fov: 70, // Field of view in degrees
mouseSense: 100 // Mouse sensitivity as a percentage of the default
}
let locked = true
let generatedChunks
let mouseX, mouseY, mouseDown
let width = window.innerWidth
let height = window.innerHeight
class Skybox{ //from https://www.khanacademy.org/computer-programming/skybox/5709195676041216 with syntax modifications
constructor(){
this.vertexData = new Float32Array([
//bottom vertices
-1.0, -1.0, -1.0,
1.0, -1.0, -1.0,
1.0, -1.0,  1.0,
-1.0, -1.0,  1.0,
// top vertices
-1.0,  1.0, -1.0,
1.0,  1.0, -1.0,
1.0,  1.0,  1.0,
-1.0,  1.0,  1.0
]);
this.faceData = new Uint8Array([
//-y
1, 0, 3,
1, 3, 2,
//+y
5, 7, 4,
5, 6, 7,
//+x
1, 2, 5,
2, 6, 5,
//-x
0, 4, 3,
3, 4, 7,
//-z
0, 1, 5,
0, 5, 4,
//+z
3, 7, 6,
3, 6, 2
]);
gl.enableVertexAttribArray(glCache.skyboxVertex);
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
this.buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
gl.bufferData(gl.ARRAY_BUFFER, this.vertexData, gl.DYNAMIC_DRAW);
this.indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.faceData, gl.DYNAMIC_DRAW);
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
render() {
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.vertexAttribPointer(glCache.skyboxVertex, 3, gl.FLOAT, false, 4 * 3, 0);
gl.uniformMatrix4fv(glCache.skyboxView, false, p.transformation.elements)
gl.drawElements(gl.TRIANGLES, this.faceData.length, gl.UNSIGNED_BYTE, 0);
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
let skybox
let colors = {
0: "#000",
1: "#00a",
2: "#0a0",
3: "#0aa",
4: "#a00",
5: "#a0a",
6: "#fa0",
7: "#aaa",
8: "#555",
9: "#55f",
a: "#5f5",
b: "#5ff",
c: "#f55",
d: "#f5f",
e: "#ff5",
f: "#fff",
g: "#DDD605",//minecoin gold
}
if (height === 400) alert("Canvas is too small. Click the \"Settings\" button to the left of the \"Vote Up\" button under the editor and change the height to 600.")
let generator = {
height: 80, // Height of the hills
smooth: 0.01, // Smoothness of the terrain
extra: 30, // Extra height added to the world.
caveSize: 0.00, // Redefined right above where it's used
biomeSmooth: 0.007, // Smoothness of biomes
}
let maxHeight = 255
let blockOutlines = false
let blockFill = true
let updateHUD = true
var explodeVaos = [], experienceOrbVaos = [], genericVaos = []
let images = {
attackIndicatorCrosshair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAHBAMAAAC8U9OhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAD///86OzzS0tbX2erq7PI6OzxbSkmCbWxtWVfX2er////q7PL///+PAAbaAAAABnRSTlMAAAAAAABupgeRAAAAAWJLR0QN9rRh9QAAAAd0SU1FB+UICBISCBYUzEAAAAABb3JOVAHPoneaAAAASklEQVQI12NgYGOAAHYwyQilGRjSoKCzcxUYQOnVMAmFzs4zu4HABEobMKAZxeIAMwoNMAoKigouAWIsEoJRqxwFA7HpCFkClAAAVfMfb4rLipMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMDhUMTg6MTc6MTgrMDA6MDB6HTijAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTA4VDE4OjE3OjE4KzAwOjAwC0CAHwAAAABJRU5ErkJggg==",
deadHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAT0lEQVQoU62OwQ3AMAwCz1N4//E8RSqjuiVRn/ULocMQvLduGYBr2uhbmSlRVbgGQqkx7esjO/QvtG3yyq6aTeNv2wYQdYwV6MAXpOozfAGB1SIH1uYKrgAAAABJRU5ErkJggg==",
heart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAXElEQVQoU3XQQRKAIAiF4Z97ua8j19572UCSTytWjHwCgzGi9dQAzfEHj/YrwOJXgFqhFGl8pw4GepUXdADbBzqBvXeKnVaYwE0uPkEFuZcOio4+QqY8J5igAi9cnpgXB7uKmTQAAAAASUVORK5CYII=",
halfHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAY0lEQVQoU4WOwQ3AMAgDzS50i/zbkTtAxmCXVLiBoKhS+YDMYSxYNeYoAOoMF7xGVVWVopl5E14R6B1ojctjQgEuqPz9hG4A5w/ETBUMp5opPBJ0KAAmL1/S8XrF3O0Qwf34AVFaJQc+FQukAAAAAElFTkSuQmCC",
whiteHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAARUlEQVQoU61QQQ4AIAiK/z+aBsuNbN7ykKQEJtYJkhQEgMSu6VBRzQn7VRFKNbP7/0h9jscqZ+m2efePcg21ghS4SJP1BvDiR/68vCmnAAAAAElFTkSuQmCC",
witherHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAAAAAAA7ExPLy8srKysvDw8nJycdHR0qDg4gICA5HBxHHBz///8BX2maAAAAAXRSTlMAQObYZgAAAAFiS0dEDIGzUWMAAAAHdElNRQfkCBcNAScIdsCqAAAAAW9yTlQBz6J3mgAAADpJREFUCNdjYBBkFGBgYFQSUmRgEDJRcRJgEHVxcxdgkJjmMkuAgbHTcyEDA4PEbKAaBsaNDCAAZAIArksGwN+RpQkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMjNUMTM6MDE6MzkrMDA6MDAs2fv0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTIzVDEzOjAxOjM5KzAwOjAwXYRDSAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5Gf/zMgAAABV0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA51JEX7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk4MTg3Njk53UrJaAAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTA3NzIwNzAyOTQ0NjEzMTIwMzcf2rzMAAAAAElFTkSuQmCC",
witherHalfHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAlElEQVQoU2NkQID/UCYjAwMDMpsBJAAC/y24ucGME1+/MoiLi4PZL1++BFGMYF0gBVMOHmSIjo5mEHzyhOE+Dw/cfJBCsCJtNjaGP4qKcIkPHz5gKlJlY2P4KiLCwMHBwcDKysqATRHYTTCFvLy8cEXIboIZDVf49+9fuKPBLkcKArCJrqKiDLtfv0aRQ1cEVoiuGQBusjgHiQpSWAAAAABJRU5ErkJggg==",
freezeHeart:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAKVJREFUKFNjZECA/1AmIwMDAzKbASTAwMjE/N9r5zWwmq2u6gzeu2/C2SBpsC6QYKy1KsPio7cZzLTFGU5dfckQZ6PGsOjILbAmuCKQVpACDUF+hhvvP4IVwkwGK1r5/T9YIlGMnyFz/y2wKSA+SEM4JyPETWCH7v/E0Kj+D6xw/quPDPU3mRgYHPnAToYpQlGIrACsCikI4AphJsDk0BVBFKJpBgBbYkAHTYvoqAAAAABJRU5ErkJggg==",
freezeHalfHeart:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAJxJREFUKFNjZECA/1AmIwMDAzKbASTAwMjE/N9r5zWwmq2u6gwaGhpg9o0bN8DSYF3eu28yxFqrMiw+epvBTFucYbmTBdx8kEK4IpAoSIGGID9DvaEmpqKV3/8z3Hj/kSFRjJ8hc/8thru5/hiKQAL/GfZ/YmhU/wdW6KYDMQnZTTBdcIUgN8EUgF2OFARwExkc+VDk0BVBFKJpBgBAXzsHeDkERgAAAABJRU5ErkJggg==",
bubble: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAAAlP/R6/9WuP////8DieLBAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQflBhwAOQFmUYA6AAAAAW9yTlQBz6J3mgAAAC9JREFUCNdjYGAUZAACISUBBgZGBQZFIJPZgEUASDKASAYQCRR3BKoRcQGqAasHADZEAh1qmnpBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA2LTI4VDAwOjU1OjAxKzAwOjAwEE5qGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNi0yOFQwMDo1NTowMSswMDowMGET0qcAAAAASUVORK5CYII=",
bubblePop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEUAAAAAlP8AAAD///8Mq+G/AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQflBhwBAwbcXqHXAAAAAW9yTlQBz6J3mgAAACVJREFUCNdjYHBgYHBwZGCY0MbAoMDBAAYOjA4MLUwNDBIsYDEAStwDy/jv20gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYtMjhUMDE6MDM6MDYrMDA6MDB0NlEVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTI4VDAxOjAzOjA2KzAwOjAwBWvpqQAAAABJRU5ErkJggg==",
drumstickBG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5AgXESYlKYFJ9wAAAAFvck5UAc+id5oAAAA8SURBVAjXZc2xDcAwDAPBk6bR/tN4G6VQ4MTwV8SDBIHWNoEurMmIEX4yv0GZeYrlJLml/dnV5zdeeXU9xdgUJaD0S9kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMjNUMTc6Mzg6MzcrMDA6MDDZqKf0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTIzVDE3OjM4OjM3KzAwOjAwqPUfSAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5Gf/zMgAAABV0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA51JEX7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk4MjA0MzE3ULE6DQAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTIwMTgzMjY0MzU0MzI0OTcxOTF/QUjUAAAAAElFTkSuQmCC",
drumstick: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAAAAAAADUKiqyGBjfsY+4hFidbUNhPBt7US3i1ar/99z///9NiP3lAAAAAXRSTlMAQObYZgAAAAFiS0dECx/XxMAAAAAHdElNRQfkCBcRJiawiBhNAAAAAW9yTlQBz6J3mgAAAC5JREFUCNdjYBBkAAJGZQEgKeQUCCSFVVOBHMaKNJCQeAeIZBScCKIYpMCkIAMAcDQEJB3YgfcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMjNUMTc6Mzg6MzgrMDA6MDAv4NcdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTIzVDE3OjM4OjM4KzAwOjAwXr1voQAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5Gf/zMgAAABV0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA51JEX7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk4MjA0MzE4wA4nnAAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTMzODIyODY4OTM1NDEwNTg2ODQQPSTjAAAAAElFTkSuQmCC",
halfDrumstick: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAjUlEQVQoU2NkQID/UCYjkhiYCRP4r6GhwdD98iWD7/v3yOJwRWAFB+fWMbxJqGe49+YNhkKQSWBFILChIJjhb+8qhicJRgzu1SvhJmJYB5J5HWPAkDR5P4YikADYREvBNwzS4qIMLRuuY1UEVgjz2eNraxhktUJQfIfua7CG/9/vMjByKsODAKsiWLgBAAIkLghjp1NyAAAAAElFTkSuQmCC",
experienceBar:[
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAKCAMAAAAuJlQ4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAJEAw2QzwuOjMpNS8UHxkgKyUgLCUZJB4oMy0IHBEWLRoiPSItSylDaSRjkECLylmIxleGxFdglzRajTE4XhpSgSxMdylxpEh4rk1yp0trm0UsSRVGbSV9tFCPzlx4rkxYijBQfiwzVRhLdShFbCVchTt6sU5TgixHbiVrnEV3rUxVhi5XiC81VhdxpUl9tVB2qkxOeSpNeSouSxV0p0p7s1B1qkt3rExTgy0yUxdZizCJx1iEwFVTgSxbkDGBvFNtnUVUhC4gOg0gOA10qkhllT9eijtOeioaPipMdilpmENIcSdzp0pvoUlTfy96sU95r05TgS1ypUiHxFd9tU9Why92qUtvoEZNeClqmUR2qktKdCiHw1aP0V1Ugy1IcCZJcidsnUZ8tFB5sE6IxlhTgi2NwGS09X6f2nGTyWh6pleOwmVeiT2Rx2ea0myEtF14o1VxmlBpmESY0GuCsFuLvmKLvmOKvGJmlEIvTxZnlUKGt112oVOf2nCo5neLyVluoEeVzGmu7nqj3nOPw2SRxmaCvVQzVRlolkOBsFuWzWplkUCDs1yArlqVy2l3olQWNSRq",
"mkWIuWCRxWdfiz5/rVmCslxmk0Gp5nab1W2Ds12NwmOXzmqDslwuTBWUy2l8qViz832QxGaLvWOCsVxjjz9jjj+LvWKJvGGCsV2MvmOIuWF+rFhHbyZvokhOeytlkkFfiT1RfyxzpkpPfCtUgyxSfyxzqEtWiC9fiT5Ugi1ijUB1qUxdjzVelDN5sE1zp0mKyVlwo0hPfStypkn///82xGcQAAAAAXRSTlMAQObYZgAAAAFiS0dExvoCes0AAAAHdElNRQflCgkTMix8LVIBAAAAAW9yTlQBz6J3mgAAAqxJREFUOMvVU2dXE0EU3VBlN8xiBAecQUWTWTVEoqBA7Bp1zcauKLGCPYBZFwgoYgdlKQp2sfeKYi/Y9X85s2QTjp/hA+/TPfe+d+edOfdxnGUYFsdZ4uITWMXHJQ4ySkoaMmsLZ0lIHsEqOSFxkFFKypBZW4brbw/TbHO8IFhpCbR4hgSelUkZIpN4s4+pDKVa2YBgjvJRMerGG9OpVmtkgtEGKUTfiODoI0LsEQP2c9QkNbYN1ejWAIhpI222UekZo2Fmlm0MAgCD7LHjbONRzoSJdgdBNglNmowBIFOckpTrmgphnnsaQtPzC7Khe8bMwiJXsQfOmj3HKTnnujzF82zz0woX2Bcu8gK4eMlSQqC8zCcTpIjE58B+gNzu5StW+pjhqtUiyadozdp1adL6Euix+xVpw0YRlHoACLg3ETFnM/ZDZcvWvMycbXh7WfkO585du2We48mevfuCFRWVBFftD1WqBzS1GpNgTa0arqs/eKjhcG2NplUwrjEUCoaPHD2WcfzEyVNN4XDz6TMtQV3TdFUlONBaqTKs",
"4LZ2nZpoWkcBbg+dPUe5OtTZdZ6Kmt5RhdsuNKsUqhcxuaQ3NWr65RZ85eq1uu5uXc/zlF+/wRpvoltt6u07Wn1IIxi13r13X1UfPMSPHj95qj97/oLQtXvSXxKisD9+VdIrNiAkl2JZJq8bkGL8e1ZRF0L5FL15S1XFT9E7RMRCyeXAENI+hdC+0vdIpC6QqrJCCAlA4PV+gNT5o1MGnWUyERXDsPhTL5VRD8AOGVHAOEc2+UyUauDH9i8i6ev7+g16cr//+Cn9+m33Y/DnL6LmbBlAxC5EER/NdiS0kdgZcaKB4gdmkTdRZCLSaJImN+AEzEQL/S5CNPvW/46FhdeAlBPMw4gFPnYEgtHP/QMLi7iU40xIawAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0wOVQxOTo1MDowOCswMDowMPuKPhEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMDlUMTk6NTA6MDgrMDA6MDCK14atAAAAAElFTkSuQmCC"
//splitting it because it is too long
].join(""),
generic: "https://16f81.codesandbox.io/images/generic.png",
explode: "https://16f81.codesandbox.io/images/explode.png",
experienceOrb:"https://16f81.codesandbox.io/images/experience_orb.png",
freezeEffect: "https://16f81.codesandbox.io/images/freeze_effect.png",
spyglassScope:"https://16f81.codesandbox.io/images/spyglass_scope.png",
minecraft: "https://16f81.codesandbox.io/images/minecraft.png",
panorama: "https://server.nathaniel2006.repl.co/panorama",
}
let crossOriginImages = ["generic","explode","experienceOrb","panorama"]
for(var i in images){
var url = images[i]
images[i] = new Image()
images[i].src = url
images[i].onload = () => loadDone()
images[i].onerror = err => {loadDone(); console.log(err)}
if(crossOriginImages.includes(i)){
images[i].crossOrigin = ""
}
}
win.images = images
let audioCtx
let CUBE,SLAB,STAIR,CROSS,TALLCROSS,DOOR,TORCH,LANTERN,LANTERNHANG,BEACON,
CACTUS,PANE,PORTAL,WALLFLAT,TRAPDOOR,TRAPDOOROPEN,FENCE,WALLPOST,WALL,
WALLU,//wall withe exteion under another wall
FENCQ,//fence (one extension)
BUTTON,CHAIN,POT,POTCROSS,CARPET,LAYER1,LAYER2,LAYER3,LAYER4,LAYER5,LAYER6,LAYER7,LAYER8,
FLIP,NORTH,SOUTH,EAST,WEST,ROTATION// Mask for the direction bits
let isCube
var prevConstVersion = null
var curConst = 0
function nextConst(rotate, flip){
var n = 1
if(rotate) n = 4
if(flip) n = 8
var p=curConst
curConst += n*500
return p
}
function verMoreThan(a,b){
a = a.split(".")
b = b.split(".")
if(a[0] > b[0]) return true
if(a[1] > b[1] && a[0] === b[0]) return true
if(a[2] > b[2] && a[1] === b[1]) return true
}
function constVersion(v){
if(v === prevConstVersion) return
prevConstVersion = v
isCube = 0xff
var verNum = v.replace(/Alpha /, '')//.replace(/(?<=\..*)\./g, '') //second regex removes the periods after the first
if(verMoreThan(verNum, "1.0.3") || verNum==="1.0.3"){
CUBE = 0
LAYER2 = SLAB = 0x100<<5 // 9th bit
LAYER3 = STAIR = 0x200<<5 // 10th bit
LAYER4 = CROSS = 0x300<<5
LAYER5 = TALLCROSS = 0x700<<5
LAYER6 = LANTERN = 0x900<<5
LAYER7 = LANTERNHANG=0x1100<<5
BEACON = 0x1300<<5
CACTUS = 0x1400<<5
POT = 0x1500<<5
POTCROSS = 0x1700<<5
LAYER1 = TORCH = 0x1800<<5
CHAIN = 0x1900<<5
LAYER8 = DOOR = 0x2100<<5
PORTAL = 0x2200<<5
WALLFLAT = 0x2300<<5
PANE = 0x4400<<5
TRAPDOOR = 0x2800<<5
TRAPDOOROPEN=0x4000<<5
FENCE = 0x6000<<5
WALLPOST = 0x6200<<5
WALL = 0x6400<<5
WALLU = 0x6600<<5 //wall withe exteion under another wall
FENCQ = 0x4100<<5 //fence (one extension)
BUTTON = 0x4200<<5
CARPET    = 0x4300<<5
FLIP      = 0x400 // 11th bit
NORTH = 0 // 12th and 13th bits for the 4 directions
SOUTH = 0x800
EAST = 0x1000
WEST = 0x1800
ROTATION = 0x1800 // Mask for the direction bits
isCube = BLOCK_COUNT
}else if(verNum >= 1){
CUBE = 0
LAYER2 = SLAB = 0x100 // 9th bit
LAYER3 = STAIR = 0x200 // 10th bit
LAYER4 = CROSS = 0x300
FLIP = 0x400 // 11th bit
LAYER5 = TALLCROSS = 0x700
LAYER6 = LANTERN = 0x900
LAYER7 = LANTERNHANG=0x1100
BEACON = 0x1300
CACTUS = 0x1400
POT = 0x1500
POTCROSS = 0x1700
LAYER1 = TORCH = 0x1800
CHAIN = 0x1900
LAYER8 = DOOR = 0x2100
PORTAL = 0x2200
WALLFLAT = 0x2300
PANE = 0x4400
TRAPDOOR = 0x2800
TRAPDOOROPEN=0x4000
FENCE = 0x6000
WALLPOST = 0x6200
WALL = 0x6400
WALLU = 0x6600 //wall withe exteion under another wall
FENCQ = 0x4100 //fence (one extension)
BUTTON = 0x4200
CARPET    = 0x4300
FLIP      = 0x400 // 11th bit
NORTH = 0 // 12th and 13th bits for the 4 directions
SOUTH = 0x800
EAST = 0x1000
WEST = 0x1800
ROTATION = 0x1800 // Mask for the direction bits
}else{
CUBE      = 0
LAYER2 = SLAB      = 0x100 // 9th bit
LAYER3 = STAIR     = 0x200 // 10th bit
LAYER4 = CROSS     = 0x2000
LAYER5 = TALLCROSS = 0x2200
LAYER8 = DOOR      = 0x2400
LAYER1 = TORCH     = 0x2600
LAYER6 = LANTERN   = 0x2800
LAYER7 = LANTERNHANG=0x3000
BEACON    = 0x4200
CACTUS    = 0x4400
PANE      = 0x4600
PORTAL    = 0x5000
WALLFLAT  = 0x4800
TRAPDOOR  = 0x5200
TRAPDOOROPEN=0x5400
FENCE     = 0x6000
WALLPOST  = 0x6200
WALL      = 0x6400
WALLU     = 0x6600 //wall withe exteion under another wall
FENCQ     = 0x6800 //fence (one extension)
BUTTON    = 0x7000
CHAIN     = 0x7200
POT       = 0x8000
POTCROSS  = 0x8200
CARPET    = 0x8400
FLIP      = 0x400 // 11th bit
NORTH     = 0 // 12th and 13th bits for the 4 directions
SOUTH     = 0x800
EAST      = 0x1000
WEST      = 0x1800
ROTATION  = 0x1800 // Mask for the direction bits
}
initBlockData()
genIcons()
}
let blockMode   = CUBE
win.changeBlockMode = m => blockMode = m
let tex
let textureAtlas
let textureMap
let dirtBuffer, netherBuffer
let dirtTexture, netherTexture, explodeTexture, panoramaTexture, experienceOrbTexture, genericTexture
let textureCoords
let texCoordsBuffers
let mainbg, dirtbg, netherbg // Background images
let bigArray = win.bigArray || new Float32Array(600000)
win.bigArray = bigArray
// Callback functions for all the screens; will define them further down the page
let drawScreens = {
"main menu": () => {},
"options": () => {},
"play": () => {},
"pause": () => {},
"creation menu": () => {},
"inventory": () => {},
"multiplayer menu": () => {},
"comingsoon menu": () => {},
"loadsave menu": () => {},
"marketplace": () => {},
}
let html = {
pause: {
enter: [window.message],
exit: [window.savebox, window.saveDirections, window.message]
},
"loadsave menu": {
enter: [window.worlds, window.boxCenterTop, window.uploadWorld, window.quota],
exit: [window.worlds, window.boxCenterTop, window.uploadWorld, window.quota],
onenter: () => {
window.boxCenterTop.placeholder = "Enter Save String (Optional)"
if (navigator && navigator.storage && navigator.storage.estimate) {
navigator.storage.estimate().then(data => {
window.quota.innerText = `${data.usage.toLocaleString()} / ${data.quota.toLocaleString()} bytes (${(100 * data.usage / data.quota).toLocaleString(undefined, { maximumSignificantDigits: 2 })}%) of your quota used`
}).catch(console.error)
}
window.boxCenterTop.onmousedown = e => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
selectedWorld = 0
Button.draw()
}
},
onexit: () => {
window.boxCenterTop.onmousedown = null
}
},
"multiplayer menu": {
enter: [window.servers],
exit: [window.servers],
onenter: initServersMenu
},
"creation menu": {
enter: [window.boxCenterTop],
exit: [window.boxCenterTop],
onenter: () => {
window.boxCenterTop.placeholder = "Enter World Name"
window.boxCenterTop.value = ""
}
},
loading: {
onenter: () => {
startLoad()
constVersion(world.version || version)
},
onexit: () => {
if(multiplayer){
send({
"type":"joined",
username: username
})
}
Messages.add("<span style='color:lime;'>Press / to open chat. "+(cheats ? "Type /? for help with commands." : "")+"</span>")
}
},
netherLoading: {
onenter: startLoad
},
editworld: {
enter: [window.boxCenterTop, window.editworld],
exit: [window.boxCenterTop, window.editworld],
onenter: () => {
var w = worlds[selectedWorld]
window.boxCenterTop.placeholder = "Enter World Name"
window.boxCenterTop.value = w.name
window.url.value = w.thumbnail
}
},
marketplace: {
enter: [window.marketplace],
exit: [window.marketplace]
},
play: {
enter: [window.messageHolder, window.onscreenControl_Element],
exit: [window.messageHolder, window.onscreenControl_Element],
onexit: () => Messages.clear()
},
help:{
enter: [window.help],
exit: [window.help]
}
}
let screen = "main menu"
let previousScreen = screen
function changeScene(newScene) {
if (screen === "options") {
saveToDB("settings", settings).catch(e => console.error(e))
}
if (html[screen] && html[screen].exit) {
for (let element of html[screen].exit) {
element.classList.add("hidden")
}
}
if (html[newScene] && html[newScene].enter) {
for (let element of html[newScene].enter) {
element.classList.remove("hidden")
}
}
if (html[newScene] && html[newScene].onenter) {
html[newScene].onenter()
}
if (html[screen] && html[screen].onexit) {
html[screen].onexit()
}
previousScreen = screen
screen = newScene
mouseDown = false
drawScreens[screen]()
Button.draw()
Slider.draw()
if(newScene === "main menu" || newScene === "play" || newScene === "paused" || newScene === "inventory" || newScene === "options"){
themeColor.content = "#fff"
}else{
themeColor.content = "#110"
}
}
win.changeScene = changeScene
win.getScene = () => screen
let hitBox = {}
win.hitBox = hitBox
win.entHitbox = {}
let holding = 0
let crack = {
0: "crack1",
1: "crack2",
2: "crack3",
3: "crack4",
4: "crack5",
5: "crack6",
6: "crack7",
7: "crack8",
8: "crack9",
9: "crack10",
10: "crack10",
length: 10,
idx: 0, // block will break if idx is 4
tex: "crack1",
shape: null,
pos: [0,0,0],
prevPos: [-1,-1,-1],
breakStart: 0,
delayBetween:60*3/10,
delayDone:0,
entity: null, //define later
soundTimer: 0
}
win.crack = crack
let entityFire
let fireBlock
{
//command system
var copiedBlocks = [];
var prevPos;
function fill(x,y,z,x2,y2,z2, blockID){
if(x>x2){var px=x; x=x2; x2=px}
if(y>y2){var py=y; y=y2; y2=py}
if(z>z2){var pz=z; z=z2; z2=pz}
for(var X=x; x2>=X; X++){
for(var Y=y; y2>=Y; Y++){
for(var Z=z; z2>=Z; Z++){
world.setBlock(X,Y,Z,blockID)
}
}
}
}
function copy(x,y,z,x2,y2,z2){
if(x>x2){var px=x; x=x2; x2=px}
if(y>y2){var py=y; y=y2; y2=py}
if(z>z2){var pz=z; z=z2; z2=pz}
copiedBlocks = [];
for(var X=x; x2>=X; X++){
var xRow = [];
for(var Y=y; y2>=Y; Y++){
var yRow = []
for(var Z=z; z2>=Z; Z++){
yRow.push(world.getBlock(X,Y,Z));
}
xRow.push(yRow);
}
copiedBlocks.push(xRow);
}
}
function paste(x,y,z){
for(var X = 0; X<copiedBlocks.length; X++){
var xRow = copiedBlocks[X];
for(var Y=0; Y<xRow.length; Y++){
var yRow = xRow[Y];
for(var Z=0; Z<yRow.length; Z++){
var block = yRow[Z];
world.setBlock(X+x,Y+y,Z+z,block)
}
}
}
}
function replaceBlocks(x,y,z,x2,y2,z2, replace, into){
if(x>x2){var px=x; x=x2; x2=px}
if(y>y2){var py=y; y=y2; y2=py}
if(z>z2){var pz=z; z=z2; z2=pz}
for(var X=x; x2>=X; X++){
for(var Y=y; y2>=Y; Y++){
for(var Z=z; z2>=Z; Z++){
if(world.getBlock(X,Y,Z) === replace){
world.setBlock(X,Y,Z,into)
}
}
}
}
}
function fromPlayer(){
prevPos = [p2.x, p2.y, p2.z]
}
function fillToPlayer(id){
//fills at player feet
fill(prevPos[0], prevPos[1]-1, prevPos[2], p2.x, p2.y-1, p2.z, id)
}
function copyToPlayer(){
copy(prevPos[0], prevPos[1]-1, prevPos[2], p2.x, p2.y-1, p2.z);
}
function pasteAtPlayer(){
paste(p2.x,p2.y-1,p2.z)
}
function hcyl(bottom, height, radius, id) {
let radsq = radius * radius
let innerRadsq = (radius - 1.2) * (radius - 1.2)
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq && d >= innerRadsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function cyl(bottom, height, radius, id) {
let radsq = radius * radius
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function sphereoid(w, h, d, id, X,Y,Z) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
let w3 = (w - 1.5) * (w - 1.5)
let h3 = (h - 1.5) * (h - 1.5)
let d3 = (d - 1.5) * (d - 1.5)
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
let n2 = x * x / w3 + y * y / h3 + z * z / d3
if (n < 1 && n2 >= 1) {
world.setBlock(X + x, Y + y, Z + z, id)
}
}
}
}
}
var cmds = [
{
name: "showAll",
info: "Shows all messages.",
func: () => Messages.showAll(),
noCheats: true
},
{
name: "clear",
info: "Clears shown messages",
func: () => Messages.clear(),
noCheats: true
},
{
name: "fromPlayer",
info: "Sets position 1 to player",
func: () => fromPlayer()
},
{
name: "fillToPlayer",
args: ["block_name"],
info: "Fills from position 1 to player position",
func: split => {
let id = blockIds[split[1]]
if(!split[1]) id = 0
fillToPlayer(id)
}
},
{
name: "copyToPlayer",
info: "Copys blocks from position 1 to player position",
func: () => copyToPlayer()
},
{
name: "pasteAtPlayer",
info: "Pastes copied blocks at the player's position",
func: () => pasteAtPlayer()
},
{
name: "sphereoid",
args: ["width", "height", "depth", "block_name", "x", "y", "z"],
func: split => {
let id = blockIds[split[4]]
if(!split[4]) id = 0
let x = split[5] ? parseInt(split[5]) : p2.x,
y = split[6] ? parseInt(split[6]) : p2.y,
z = split[7] ? parseInt(split[7]) : p2.z
sphereoid(split[1], split[2], split[3], id, x,y,z)
}
},
{
name: "replaceToPlayer",
args: ["replace_what", "with_what"],
func: split => {
let replace = blockIds[split[1]]
if(!split[1]) replace = 0
let into = blockIds[split[2]]
if(!split[2]) into = 0
replaceBlocks(prevPos[0], prevPos[1]-1, prevPos[2], p2.x, p2.y-1, p2.z, replace, into)
}
},
{
name: "give",
args: ["target", "block_name", "amount"],
info: "Gives the target the the specified amount of specified blocks",
func: split => {
let id = blockIds[split[2]]
var amount = split[3] || 1
if(split[1] === "@s"){
if(id){
for(var i=0; i<amount; i++){
newInvItem(id)
}
}
}else if(split[1] === "@a"){
for(var i in players){
var p = players[i]
for(var a=0; a<amount; a++){
world.addEntity(new Item(p.x,p.y,p.z,0,0,0,id))
}
}
}else if(hasPlayer(split[1])){
var p = getPlayerByUsername(split[1])
for(var a=0; a<amount; a++){
world.addEntity(new Item(p.x,p.y,p.z,0,0,0,id))
}
}else{
Messages.add("Can't select with selector "+split[1])
}
}
},
{
name: "kill",
args: ["selector","message"],
info: "Kills someone. Selectors: @s, your username, someone's uername, @a, @e",
func: split => {
split[1] = split[1] || "@s"
if(split[1] === "@s" || split[1] === username){
dieMessage = split[2] || (username+" killed themself with the kill command. Why would you do that???")
die()
}else if(split[1] === "@a" || hasPlayer(split[1])){
send({type:"kill", message:split[2] || "", data:split[1]})
}else if(split[1] === "@e"){
var killed = []
for(var i=world.entities.length-1; i>=0; i--){
killed.push(world.entities[i].type || "Entity")
world.deleteEntity(0,false,i)
}
Messages.add("Killed: "+killed.join(", "))
}else{
Messages.add("Can't select with selector "+split[1])
}
}
},
{
name: "ban",
args: ["username"],
info: "Bans a player. They cannot rejoin the world. Only bans them until multiplayer turns off",
func: split => {
if(win.ban){
ban(split[1])
}else{
Messages.add("Error: can't ban.")
}
},
noCheats:true
},
{
name: "unban",
args: ["username"],
info: "Unbans a player.",
func: split => {
if(win.unban){
unban(split[1])
}else{
Messages.add("Error: can't ban.")
}
},
noCheats:true
},
{
name: "time",
args: ["mode","n"],
info: "mode can be: set, add, subtract. n is the time to set to. 1000 is a day. n an also be: day, night",
func: split => {
var time
if(split[2] === "day") time = -20
else if(split[2] === "night") time = 480
else time = parseInt(split[2]) || 0
time = time * Math.PId / 1000
if(split[1] === "set"){
worldTime = time
}else if(split[1] === "add"){
worldTime += time
}else if(split[1] === "subtract"){
worldTime -= time
}else{
Messages.add("No such mode: "+split[1])
}
}
},
{
name:"gameMode",
args: ["mode"],
info: "mode can be: creative, survival, spectator",
func: split => {
let m = split[1]
p.spectator = false
if(m === "creative") survival = false
else if(m === "survival") survival = true
else if(m === "spectator") p.spectator = p.flying = true
else Messages.add("Game mode doesn't exsist: "+m)
}
},
{
name:"tp",
args: ["to_who"],
info: "Teleport to someone. \"to_who\" should be a username.",
func: split => {
if(hasPlayer(split[1])){
var player = getPlayerByUsername(split[1])
p.x = player.x
p.y = player.y
p.z = player.z
}else{
Messages.add("Player doesn't exsist: "+split[1])
}
}
},
{
name:"online",
args:[],
noCheats: true,
info: "Lists people that are playing on this world.",
func: split => {
if(!multiplayer){
return Messages.add("You are not in a multiplayer world.")
}
send({type:"fetchUsers"})
}
},
{
name:"playSound",
args:["sound", "volume"],
info:"Plays a sound. Sound can be any sound, for example: click, block.grass.dig1, entity.generic.explode1. Volume is a number from 0 to 1.",
func: split => {
if(!split[1]) return
if(playSound(split[1], 0, parseFloat(split[2]))){
if(multiplayer) send({type:"playSound", data:split[1], volume:parseFloat(split[2])})
}else{
Messages.add("That sound doesn't exsist.")
}
}
},
{
name:"sendEval",
args:["selector","data"],
info:"Send javascript to players. Only works if your'e the host. Selector can be: username, @p. If selector isn't specified, it sends it to all players except you.",
func: split => {
if(!multiplayer) return
split.splice(0,1)
var to = split.splice(0,1)[0]
if(to === "@p") to = ""
send({type:"eval",data:split.join(" ")}, to || undefined)
}
},
]
win.cmds = cmds
cmds.forEach(cmd => {
//Now you really need cheats to get commands!
Object.defineProperty(cmd, 'noCheats', {
value: cmd.noCheats || false,
writable: false
})
})
function getCmd(name){
for(var i=0; i<cmds.length; i++){
if(cmds[i].name === name){
return cmds[i]
}
}
}
function runCmd(str){
str = str.replace("/", '')
let split = str.split(" ")
let name = split[0]
if(name === "?"){
if(split[1]){
var cmd = getCmd(split[1])
if(cmd){
var str = "<b>/"+split[1]+"</b><br>"
str += "Syntax: /"+cmd.name+" "
if(cmd.args) str += cmd.args.join(" ")
str += "<br>"
if(cmd.info) str += "Description: "+cmd.info
Messages.add(str)
}else Messages.add("There is no information for /"+split[1])
}else{
if(cheats){
var str = "List of commands:<br>"
str += "Use <span style='color:lime;'>/? command_name</span> to get information about a command<br>"
cmds.forEach(r => {
str += "<span style='color:lightblue;'>/"+r.name+"</span> "
if(r.args) str += r.args.join(" ")
str += "<br>"
})
Messages.add(str)
}else{
var str = "List of available commands:<br>"
str += "Use <span style='color:lime;'>/? command_name</span> to get information about a command<br>"
cmds.forEach(r => {
if(!r.noCheats) return
str += "<span style='color:lightblue;'>/"+r.name+"</span> "
if(r.args) str += r.args.join(" ")
str += "<br>"
})
Messages.add(str)
}
}
}else{
var cmd = getCmd(name)
if(cmd){
if(!cheats && !cmd.noCheats){
Messages.add("§cThat command requires cheats")
return
}
cmd.func(split)
}else Messages.add("§cError: no such command called §f"+name)
}
}
win.runCmd = runCmd
}
let Messages = {
array: [],
all: [],
update:function(){
if(this.array.length === 0){
messages.innerHTML = ""
}else messages.innerHTML = this.array.join("<br>")
},
showAll: function(){
if(this.all.length === 0){
messages.innerHTML = ""
}else messages.innerHTML = this.all.join("<br>")
},
clear: function(){this.array = [];this.update()},
add: function(msg){
msg = this.format(msg)
this.array.push(msg)
this.all.push(msg)
if(this.array.length > 5){
this.array.shift()
}
this.update()
},
write: function(msg, from){
this.add((from || username)+": "+msg)
if(!from && multiplayer){
send({type:"message", data:msg, username:username})
}
},
showInput(){
messageInput.classList.remove("hidden")
messageInput.focus()
messageInput.onkeypress = (e) => {
if(e.key !== "Enter") return
if(messageInput.value[0] === "/"){
Messages.add(messageInput.value)
runCmd(messageInput.value)
}else{
Messages.write(messageInput.value)
}
messageInput.classList.add("hidden")
messageInput.value = ""
canvas.focus()
}
},
format(str){
if(str.includes("§")){
var arr = str.split("§")
var res = arr[0]
var spans = 0
for(var i=1; i<arr.length; i++){
var s = arr[i]
var col = colors[s.substring(0,1)]
s = s.substring(1)
res += "<span style='color:"+col+";'>"+s
spans ++
}
for(i=0; i<spans;i++) res += "</span>"
return res
}else return str
}
}
window.Messages = Messages
let title = ""
let subtitle = ""
let titleOpacity = 0
let titleColor = "black"
function showTitle(aTitle, aSubtitle, color){
title = aTitle
subtitle = aSubtitle
titleOpacity = 140
titleColor = color || "white"
}
win.showTitle = showTitle
let sideMessageTime = 0,
sideMessageTitle, sideMessageContent
function sideMessage(title, content){
sideMessageTime = 600
sideMessageTitle = title
sideMessageContent = content
}
win.sideMessage = sideMessage
function die(){
if(survival){
for(var i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i].id){
for(var j=0; j<inventory.hotbar[i].amount; j++)world.addEntity(new Item(p.x,p.y,p.z,0,0,0,inventory.hotbar[i].id,true))
inventory.hotbar[i] = 0
}
}
for(var i=0; i<invLength; i++){
if(invItems[i] && invItems[i].id){
for(var j=0; j<invItems[i].amount; j++)world.addEntity(new Item(p.x,p.y,p.z,0,0,0,invItems[i].id, true))
invItems[i].id = 0
}
}
world.addEntity(new ExperienceOrb(p.x,p.y,p.z,p.XP))
}
changeScene("dead")
releasePointer()
p3.y = 0
if(multiplayer) send({type:"die", id:achexUsername, message:dieMessage})
}
function damage(amount, why, nosound,type){
p.health -= amount
harmEffect = 40
if(!nosound){
switch(type){
case "drown":
drownHurtSound()
break
case "freeze":
freezeHurtSound()
break
default:
hitSound()
}
}
dieMessage = why
updateHUD = true
if(multiplayer) send({type:"harmEffect", id:achexUsername})
}
win.damage = damage
function XP(amount){
p.lastXP = performance.now()
p.XP += amount
if(p.XP >= p.nextLevel){
p.level += Math.floor(p.XP / p.nextLevel)
p.XP = p.XP % p.nextLevel
playSound("experience.levelup")
setLevel()
}else{
playSound("experience.orb")
}
updateHUD = true
}
function setLevel(){
if(p.level <= 15){
p.nextLevel = 2*p.level+7
}else if(p.level <= 30){
p.nextLevel = 5*p.level-38
}else{
p.nextLevel = 9*p.level-158
}
}
let Key = {}
let modelView = win.modelView || new Float32Array(16)
win.modelView = modelView
let glCache
let worlds, selectedWorld = 0
let freezeFrame = 0
let p
let vec1 = new PVector(), vec2 = new PVector(), vec3 = new PVector(), vec4 = new PVector()
let move = {
x: 0,
y: 0,
z: 0,
ang: Math.sqrt(0.5),
}
let p2 = {
x: 0,
y: 0,
z: 0,
}
let p3 = { //precise positions for multiplayer
x: 0,
y: 0,
z: 0,
survival: false,
username: ""
}
let controlMap = {}
function setControl(name, key, shift = false, ctrl = false, alt = false){
controlMap[name] = {
key,
shift,
ctrl,
alt,
get pressed() {
return Boolean(Key[this.key]
&& (!this.shift || Key.ShiftLeft || Key.ShiftRight)
&& (!this.ctrl || Key.ControlLeft || Key.ControlRight)
&& (!this.alt || Key.AltLeft || Key.AltRight))
},
// Check to see if all of an event's data matches this key map
event(e) {
return Boolean(e.key === this.key
&& (!this.shift || e.shiftKey)
&& (!this.ctrl || e.ctrlKey)
&& (!this.alt || e.altKey))
}
}
}
setControl("jump", " ")
setControl("forward", "w")
setControl("left", "a")
setControl("backward", "s")
setControl("right", "d")
setControl("sprint", "q")
setControl("inventory", "e")
setControl("chat", "/")
setControl("pause", "p")
setControl("hyperBuilder", "h")
setControl("superBreaker", "b")
setControl("spectator", "l")
setControl("zoom", "z")
setControl("cycleBlockShapes", "enter")
setControl("sneak", "shift")
setControl("dropItem", "backspace")
setControl("break", "leftMouse")
setControl("place", "rightMouse")
setControl("pick", "middleMouse")
setControl("thirdPerson", "o")
let place
let liquid = false
let powder = false
let inWater = 0 //head is in liquid
let tick = false
let standingOn = 0 //block id you are standing on
let lastTick = 0
let lastLiquid = false
let attackCooldown = 0, attackCooldownStart = 0, attackCooldownTime = 0 //for swords
let harmEffect = 0
//let healTime = 5000 // miliseconds between each heal
let healEffect = 0 // health bar outline flash white
let lastHeal = 0
let lastBlockHarm = 0
let lastLoseOxygen = 0
let lastGetOxygen = 0
let witherEffect = 0
let witherDamage = 0
let witherTime = 0
let freezeEffect = 0
let lastFreezeHealth = 0
let loseHealthEffect = 0
let portalEffect = 0
win.lastStepSound = 0
let eatSoundTimer = 0
let inventory = {
hotbar: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
main: [],
hotbarSlot: 0,
showName:0,
size: 40 * min(width, height) / 600,
ts:(40 * min(width, height) / 600) / 16,
holding: 0,
space: invItems,
crafting: [0,0,0,0,0,0,0,0,0],
craftingStr: "",
craftingRes: 0, //block id
spreaded: [],
spreadPlace: "", //inventory, crafting, etc
spreadStart: -1,
spreading: false,
furnaceData: {
x:0,y:0,z:0,
data:null
}
}
inventory.craftingStr = inventory.crafting.join(",")
let furnaceData = inventory.furnaceData
win.inventory = inventory
//}
for(var i=0; i<9; i++){
inventory.hotbar[i] = {id:inventory.hotbar[i],amount:64}
}
for(var i=0; i<9; i++){
inventory.crafting[i] = {id:inventory.crafting[i],amount:64}
}
function setHotbar(arr){
inventory.hotbar = arr
for(var i=0; i<9; i++){
inventory.hotbar[i] = {id:inventory.hotbar[i],amount:64}
}
}
function play() {
canvas.onblur()
p.lastBreak = Date.now()
updateHUD = true
use3d()
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
getPointer()
fill(255, 255, 255)
textSize(10)
changeScene("play")
}
let gl
let glExtensions
function getPointer() {
if(touchScreen) return
if (canvas.requestPointerLock) {
canvas.requestPointerLock()
}
}
function releasePointer() {
if (doc.exitPointerLock) {
doc.exitPointerLock()
}
}
let Block = {
top: 0x4,
bottom: 0x8,
north: 0x20,
south: 0x10,
east: 0x2,
west: 0x1,
}
let Sides = {
top: 0,
bottom: 1,
north: 2,
south: 3,
east: 4,
west: 5,
}
// GLSL Shader code (written in script tags at the top of the file)
let vertexShaderSrc3D
let fragmentShaderSrc3D
let vertexShaderSrc2D
let fragmentShaderSrc2D
let vertexShaderSrcPanorama
let fragmentShaderSrcPanorama
let skyboxVertex
let skyboxFragment
let vertexShaderSrcEntity
let fragmentShaderSrcEntity
let vertexShaderSrcParticle
let fragmentShaderSrcParticle
function updateGLSL(){
vertexShaderSrc3D = document.getElementById("blockVertexShader").text
fragmentShaderSrc3D = document.getElementById("blockFragmentShader").text
vertexShaderSrc2D = document.getElementById("2dVertexShader").text
fragmentShaderSrc2D = document.getElementById("2dFragmentShader").text
skyboxVertex = document.getElementById("skyboxVertexShader").text
skyboxFragment = document.getElementById("skyboxFragmentShader").text
vertexShaderSrcEntity = document.getElementById("entityVertexShader").text
fragmentShaderSrcEntity = document.getElementById("entityFragmentShader").text
vertexShaderSrcParticle = document.getElementById("particleVertexShader").text
fragmentShaderSrcParticle = document.getElementById("particleFragmentShader").text
}
updateGLSL()
win.updateGLSL = updateGLSL
function createProgramObject(curContext, vetexShaderSource, fragmentShaderSource) {
let vertexShaderObject = curContext.createShader(curContext.VERTEX_SHADER)
curContext.shaderSource(vertexShaderObject, vetexShaderSource)
curContext.compileShader(vertexShaderObject)
if (!curContext.getShaderParameter(vertexShaderObject, curContext.COMPILE_STATUS)) {
throw curContext.getShaderInfoLog(vertexShaderObject)
}
let fragmentShaderObject = curContext.createShader(curContext.FRAGMENT_SHADER)
curContext.shaderSource(fragmentShaderObject, fragmentShaderSource)
curContext.compileShader(fragmentShaderObject)
if (!curContext.getShaderParameter(fragmentShaderObject, curContext.COMPILE_STATUS)) {
throw curContext.getShaderInfoLog(fragmentShaderObject)
}
let programObject = curContext.createProgram()
curContext.attachShader(programObject, vertexShaderObject)
curContext.attachShader(programObject, fragmentShaderObject)
curContext.linkProgram(programObject)
if (!curContext.getProgramParameter(programObject, curContext.LINK_STATUS)) {
throw "Error linking shaders."
}
return programObject
}
let program3D, program2D, skyboxProgram, programEntity, programParticle
function objectify(x, y, z, width, height, textureX, textureY, texXFlip,texYFlip,rotateTex) {
return {
x: x,
y: y,
z: z,
w: width,
h: height,
tx: textureX,
ty: textureY,
txf: texXFlip,
rt:rotateTex
}
}
function customFace(x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4, tx,ty,tw,th){
tw = tw || 16
th = th || 16
return {
x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4, tx,ty,tw,th,
custom:true
}
}
function generateItemShape(){
var arr = []
var bottom = [],
top = [],
east = [],
west = []
var i
for(i=0; i<16; i++){
bottom.push(objectify(0,i,7.5,16,1,0,(16-i)-1))
top.push(objectify(0,i+1,8.5,16,1,0,16-i-1))
east.push(objectify(i+1,16,7.5,1,16,(16-i)-1,0))
west.push(objectify(i,16,8.5,1,16,(16-i)-1,0))
}
return [bottom,top,
[objectify(16, 16, 8.5, 16, 16, 0, 0, true)],[objectify( 0, 16,  7.5, 16, 16, 0, 0)],
east,west]
}
function layerShape(h){
return [
[objectify(0,0,0,16,16,0,0)],
[objectify(0,h,16,16,16,0,0)],
[objectify(16, h, 16, 16, h, 0, 16-h)],
[objectify( 0, h,  0, 16, h, 0, 16-h)],
[objectify(16, h,  0, 16, h, 0, 16-h)],
[objectify( 0, h, 16, 16, h, 0, 16-h)]
]
}
let shapes = {
/*
[
[(-x, -z), (+x, -z), (+x, +z), (-x, +z)], // minX = 0,  minZ = 2,  maxX = 6, maxZ = 8
[(-x, +z), (+x, +z), (+x, -z), (-x, -z)], // minX = 9,  minZ = 10, maxX = 3, maxZ = 4
[(+x, +y), (-x, +y), (-x, -y), (+x, -y)], // minX = 6,  minY = 7,  maxX = 0, maxY = 1
[(-x, +y), (+x, +y), (+x, -y), (-x, -y)], // minX = 9,  minY = 10, maxX = 3, maxY = 4
[(+y, -z), (+y, +z), (-y, +z), (-y, -z)], // minY = 10, minZ = 11, maxY = 4, maxZ = 5
[(+y, +z), (+y, -z), (-y, -z), (-y, +z)]  // minY = 7,  minZ = 8,  maxY = 1, maxZ = 2
]
*/
cube: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
rotate: {
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
_1PixLower:{
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 15, 16, 16, 16, 0, 0)], //top
[objectify(16, 15, 16, 16, 15, 0, 1)], //north
[objectify( 0, 15,  0, 16, 15, 0, 1)], //south
[objectify(16, 15,  0, 16, 15, 0, 1)], //east
[objectify( 0, 15, 16, 16, 15, 0, 1)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
slab: {
verts: [
[objectify( 0, 0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 8, 16, 16, 16, 0, 0)], //top
[objectify(16, 8, 16, 16, 8, 0, 0)], //north
[objectify( 0, 8,  0, 16, 8, 0, 0)], //south
[objectify(16, 8,  0, 16, 8, 0, 0)], //east
[objectify( 0, 8, 16, 16, 8, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 1,
south: 1,
east: 1,
west: 1
},
texVerts: [],
buffer: null,
size: 6,
varients: [],
flip: true,
rotate: false
},
stair: {
verts: [
[objectify( 0, 0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 8,  8, 16, 8, 0, 8), objectify( 0, 16,  16, 16, 8, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 8,  0, 16, 8, 0, 0), objectify( 0, 16,  8, 16, 8, 0, 0)], //south
[objectify(16, 8, 0, 8, 8, 8, 0), objectify(16, 16, 8, 8, 16, 0, 0)], //east
[objectify( 0, 8, 8, 8, 8, 0, 0), objectify( 0, 16, 16, 8, 16, 8, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 3,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 10,
varients: [],
flip: true,
rotate: true
},
cross: {
verts: [
[], //bottom
[], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, 0,0)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, 0,0)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, 0,0)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube"
},
sideCross: {
verts: [
[], //bottom
[], //top
[customFace(2,2,16, 14,14,16, 14,14,0, 2,2,0, 0,16,16,-16)], //north
[customFace(14,2,16, 2,14,16, 2,14,0, 14,2,0, 0,16,16,-16)], //south
[customFace(14,14,16, 2,2,16, 2,2,0, 14,14,0, 0,16,16,-16)], //east
[customFace(2,14,16, 14,2,16, 14,2,0, 2,14,0, 0,16,16,-16)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube",
rotate: true,
hitbox: "cube"
},
bottomCross: {
verts: [
[], //bottom
[], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, 0,16,16,-16)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, 0,16,16,-16)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, 0,16,16,-16)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, 0,16,16,-16)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube"
},
tallCross: {
verts: [
[], //bottom
[], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, 16,0),customFace(2,32,2, 14,32,14, 14,16,14, 2,16,2, 0,0)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, 16,0),customFace(14,32,2, 2,32,14, 2,16,14, 14,16,2, 0,0)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, 16,0),customFace(14,32,14, 2,32,2, 2,16,2, 14,16,14, 0,0)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, 16,0),customFace(2,32,14, 14,32,2, 14,16,2, 2,16,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
door: {
verts: [
[objectify( 0,  0,  0, 16, 3, 0, 0)], //bottom
[objectify( 0, 16, 3, 16, 3, 0, 0),objectify( 0, 32, 3, 16, 3, -16, 0)], //top
[objectify(16, 16, 3, 16, 16, 0, 0),objectify(16, 32, 3, 16, 16, -16, 0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0),objectify( 0, 32,  0, 16, 16, -16, 0)], //south
[objectify(16, 16,  0, 3, 16, 0, 0),objectify(16, 32,  0, 3, 16, -16, 0)], //east
[objectify( 0, 16, 3, 3, 16, 0, 0),objectify( 0, 32, 3, 3, 16, -16, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
torch: {
verts: [
[objectify( 7,  0,  7, 2, 2, 7, 14)], //bottom
[objectify( 7, 10, 9, 2, 2, 7, 6)], //top
[objectify(9, 10, 9, 2, 10, 7, 6)], //north
[objectify( 7, 10,  7, 2, 10, 7, 6)], //south
[objectify(9, 10,  7, 2, 10, 7, 6)], //east
[objectify( 7, 10, 9, 2, 10, 7, 6)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
wallTorch: {
verts: [
[customFace(9,4,17, 7,4,17, 7,3,15, 9,3,15, 7,14,2,2)],
[customFace(9,13,11, 7,13,11, 7,14,13, 9,14,13, 7,6,2,2)],
[customFace(9,14,13, 7,14,13, 7,4,17, 9,4,17, 7,6,2,10)], //north
[customFace(7,13,11, 9,13,11, 9,3,15, 7,3,15, 7,6,2,10)], //south
[customFace(9,13,11, 9,14,13, 9,4,17, 9,3,15, 7,6,2,10)], //east
[customFace(7,14,13, 7,13,11, 7,3,15, 7,4,17, 7,6,2,10)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
lantern: {
verts: [
[objectify(5,  0, 5, 6, 6, 0, 9)], //bottom
[objectify(6, 9, 10, 4, 4, 1, 10),objectify(5, 7, 11, 6, 6, 0, 9)], //top
[objectify(10, 9, 10, 4, 2, 1, 0),objectify(11, 7, 11, 6, 7, 0, 2),objectify(9.5, 11, 8, 3, 2, 11, 10)], //north
[objectify(6, 9, 6, 4, 2, 1, 0),objectify(5, 7, 5, 6, 7, 0, 2),objectify(6.5, 11, 8, 3, 2, 11, 10)], //south
[objectify(10, 9, 6, 4, 2, 1, 0),objectify(11, 7, 5, 6, 7, 0, 2)], //east
[objectify(6, 9, 10, 4, 2, 1, 0),objectify(5, 7, 11, 6, 7, 0, 2)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
lanternHang: {
verts: [
[objectify(5,  0, 5, 6, 6, 0, 9)], //bottom
[objectify(6, 9, 10, 4, 4, 1, 10),objectify(5, 7, 11, 6, 6, 0, 9)], //top
[objectify(10, 9, 10, 4, 2, 1, 0),objectify(11, 7, 11, 6, 7, 0, 2),objectify(9.5, 11, 8, 3, 2, 11, 10),objectify(9.5, 16, 8, 3, 3, 11, 2)], //north
[objectify(6, 9, 6, 4, 2, 1, 0),objectify(5, 7, 5, 6, 7, 0, 2),objectify(6.5, 11, 8, 3, 2, 11, 10),objectify(6.5, 16, 8, 3, 3, 11, 2)], //south
[objectify(10, 9, 6, 4, 2, 1, 0),objectify(11, 7, 5, 6, 7, 0, 2),objectify(8, 14, 6.5, 3, 4, 11, 1)], //east
[objectify(6, 9, 10, 4, 2, 1, 0),objectify(5, 7, 11, 6, 7, 0, 2),objectify(8, 14, 9.5, 3, 4, 11, 1)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
beacon: {
verts: [
[objectify( 0, 0,  0, 16, 16, 16, -96),objectify( 2, 0.001, 2, 12, 12, -32, 0)], //bottom
[objectify( 3, 13, 13, 10, 10, 3, 3),objectify( 0,  16,  16, 16, 16, -32, 0),objectify( 2, 3, 14, 12, 12, -16, 3)], //top
[objectify(13, 13, 13, 10, 10, 3, 3),objectify( 16, 16,  16, 16, 16, -32, 0),objectify(14, 3, 14, 12, 3,  -16, 3)], //north
[objectify( 3, 13,  3, 10, 10, 3, 3),objectify( 0,  16,  0,  16, 16, -32, 0),objectify(2,  3, 2,  12, 3,  -16, 3)], //south
[objectify(13, 13,  3, 10, 10, 3, 3),objectify( 16, 16,  0,  16, 16, -32, 0),objectify(14, 3, 2,  12, 3,  -16, 3)], //east
[objectify( 3, 13, 13, 10, 10, 3, 3),objectify( 0,  16,  16, 16, 16, -32, 0),objectify(2,  3, 14, 12, 3,  -16, 3)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
cactus: {
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 15, 16, 16, 0, 0)], //north
[objectify( 0, 16,  1, 16, 16, 0, 0)], //south
[objectify(15, 16,  0, 16, 16, 0, 0)], //east
[objectify( 1, 16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube"
},
pane: {
verts: [
[objectify( 0,  0,  7, 16, 2, 0, 7)], //bottom
[objectify( 0, 16, 9, 16, 2, 0, 7)], //top
[objectify(16, 16, 9, 16, 16, 0, 0)], //north
[objectify( 0, 16,  7, 16, 16, 0, 0)], //south
[objectify(16, 16, 7, 2, 16, 7, 0)], //east
[objectify(0, 16, 9, 2, 16, 7, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
portal: {
verts: [
[objectify(0, 0, 7, 16, 2, 0, 0)],
[objectify(0, 16, 9, 16, 2, 0, 0)],
[objectify(16, 16, 9, 16, 16, 0, 0)],
[objectify(0, 16, 7, 16, 16, 0, 0)],
[objectify(16, 16, 7, 2, 16, 0, 0)],
[objectify(0, 16, 9, 2, 16, 0, 0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
trapdoor: {
verts: [
[objectify(0, 0, 0, 16, 16, 0, 0)], //bottom
[objectify(0, 3, 16, 16, 16, 0, 0)], //top
[objectify(16, 3, 16, 16, 3, 0, 0)], //north
[objectify(0, 3, 0, 16, 3, 0, 0)], //south
[objectify(16, 3, 0, 16, 3, 0, 0)], //east
[objectify(0, 3, 16, 16, 3, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true,
flip: true
},
trapdoorOpen: {
verts: [
[objectify(0, 0, 13, 16, 3, 0, 0)], //bottom
[objectify(0, 16, 16, 16, 3, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify(0, 16, 13, 16, 16, 0, 0)], //south
[objectify(16, 16, 13, 3, 16, 0, 0)], //east
[objectify(0, 16, 16, 3, 16, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
wallFlat: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(0, 0, 0, 0, 0, 0, 0)], //bottom
[objectify(0, 16, 16, 0, 0, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify(0, 16,  15, 16, 16, 0, 0)], //south
[objectify(0, 0,  0, 0, 0, 0, 0)], //east
[objectify(0, 0, 16, 0, 0, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
fence: {
verts: [
[objectify(6, 0, 6, 4, 4, 0, 1)], //bottom
[objectify(6, 16, 10, 4, 4, 0, 1)], //top
[objectify(10, 16, 10, 4, 16, 6, 0)], //north
[objectify(6, 16, 6, 4, 16, 6, 0)], //south
[objectify(10, 16, 6, 4, 16, 6, 0)], //east
[objectify(6, 16, 10, 4, 16, 6, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
wallpost: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(4, 0, 4, 8, 8, 4, 4)], //bottom
[objectify(4, 16, 12, 8, 8, 4, 4)], //top
[objectify(12, 16, 12, 8, 16, 4, 0)], //north
[objectify(4, 16, 4, 8, 16, 4, 0)], //south
[objectify(12, 16, 4, 8, 16, 4, 0)], //east
[objectify(4, 16, 12, 8, 16, 4, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
wall: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(4, 0, 4, 8, 8, 4, 4),objectify(5, 0, 12, 6, 4, 5, 10)], //bottom
[objectify(4, 16, 12, 8, 8, 4, 4),objectify(5, 16, 16, 6, 4, 5, 10)], //top
[objectify(12, 16, 12, 8, 16, 4, 0),objectify(11, 16, 16, 6, 16, 5, 0)], //north
[objectify(4, 16, 4, 8, 16, 4, 0)], //south
[objectify(12, 16, 4, 8, 16, 4, 0),objectify(11, 16, 12, 4, 16, 12, 0)], //east
[objectify(4, 16, 12, 8, 16, 4, 0),objectify(5, 16, 16, 4, 16, 12, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
wallu: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(4, 0, 4, 8, 8, 4, 4),objectify(5, 0, 12, 6, 4, 5, 10)], //bottom
[objectify(4, 16, 12, 8, 8, 4, 4),objectify(5, 13, 16, 6, 4, 5, 10)], //top
[objectify(12, 16, 12, 8, 16, 4, 0),objectify(11, 13, 16, 6, 13, 5, 3)], //north
[objectify(4, 16, 4, 8, 16, 4, 0)], //south
[objectify(12, 16, 4, 8, 16, 4, 0),objectify(11, 13, 12, 4, 13, 12, 3)], //east
[objectify(4, 16, 12, 8, 16, 4, 0),objectify(5, 13, 16, 4, 13, 12, 3)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
fencq: {
verts: [
[objectify(6, 0, 6, 4, 4, 0, 1),objectify(10, 12, 7, 6, 2, 0, 2),objectify(10, 6, 7, 6, 2, 0, 2)], //bottom
[objectify(6, 16, 10, 4, 4, 0, 1),objectify(10, 15, 9, 6, 2, 0, 2),objectify(10, 9, 9, 6, 2, 0, 2)], //top
[objectify(10, 16, 10, 4, 16, 6, 0),objectify(16, 15, 9, 6, 3, 6, 0),objectify(16, 9, 9, 6, 3, 6, 0)], //north
[objectify(6, 16, 6, 4, 16, 6, 0),objectify(10, 15, 7, 6, 3, 6, 0),objectify(10, 9, 7, 6, 3, 6, 0)], //south
[objectify(10, 16, 6, 4, 16, 6, 0)], //east
[objectify(6, 16, 10, 4, 16, 6, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate: true
},
fench: {
verts:[
[objectify(6,0,6,4,4,0,1),objectify(10,12,7,6,2,0,2),objectify(10,6,7,6,2,0,2),objectify(0,12,7,6,2,0,0),objectify(0,6,7,6,2,0,0)],
[objectify(6,16,10,4,4,0,1),objectify(10,15,9,6,2,0,2),objectify(10,9,9,6,2,0,2),objectify(0,15,9,6,2,0,0),objectify(0,9,9,6,2,0,0)],
[objectify(10,16,10,4,16,6,0),objectify(16,15,9,6,3,6,0),objectify(16,9,9,6,3,6,0),objectify(6,15,9,6,3,0,0),objectify(6,9,9,6,3,0,0)],
[objectify(6,16,6,4,16,6,0),objectify(10,15,7,6,3,6,0),objectify(10,9,7,6,3,6,0),objectify(0,15,7,6,3,0,0),objectify(0,9,7,6,3,0,0)],
[objectify(10,16,6,4,16,6,0)],
[objectify(6,16,10,4,16,6,0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate: true
},
button: {
verts: [
[objectify(5, 6, 14, 6, 2, 5, 6)], //bottom
[objectify(5, 10, 16, 6, 2, 5, 6)], //top
[objectify(11, 10, 16, 6, 4, 5, 6)], //north
[objectify(5, 10, 14, 6, 4, 5, 6)], //south
[objectify(11, 10, 14, 2, 4, 5, 6)], //east
[objectify(5, 10, 16, 2, 4, 5, 6)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 6,
varients: [],
flip: true,
rotate: true
},
chain: {
verts: [
[objectify(8, 0, 8, 0.5, 0.5, 0, 0)], //bottom
[objectify(8, 16, 8, 0.5, 0.5, 0, 0)], //top
[objectify(9.5, 16, 8, 3, 16, 3, 0)], //north
[objectify(6.5, 16, 8, 3, 16, 3, 0)], //south
[objectify(8, 16, 6.5, 3, 16, 0, 0)], //east
[objectify(8, 16, 9.5, 3, 16, 0, 0)] //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
pot: {
verts: [
[objectify(5, 0, 5, 6, 6, 5, 10)], //bottom
[objectify(5, 6, 11, 6, 6, 5, 5), objectify(6, 4, 10, 4, 4, -16, 0)], //top
[objectify(11, 6, 11, 6, 6, 5, 10), objectify(11, 6, 6, 6, 6, 5, 10)], //north
[objectify(5, 6, 5, 6, 6, 5, 10), objectify(5, 6, 10, 6, 6, 5, 10)], //south
[objectify(11, 6, 5, 6, 6, 5, 10), objectify(6, 6, 5, 6, 6, 5, 10)], //east
[objectify(5, 6, 11, 6, 6, 5, 10), objectify(10, 6, 11, 6, 6, 5, 10)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
potCross: {
verts: [
[], //bottom
[], //top
[customFace(2,4,2, 14,4,14, 14,-12,14, 2,-12,2, 0,0)], //north
[customFace(14,4,2, 2,4,14, 2,-12,14, 14,-12,2, 0,0)], //south
[customFace(14,4,14, 2,4,2, 2,-12,2, 14,-12,14, 0,0)], //east
[customFace(2,4,14, 14,4,2, 14,-12,2, 2,-12,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
carpet: {
verts: [
[objectify( 0, 0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 1, 16, 16, 16, 0, 0)], //top
[objectify(16, 1, 16, 16, 1, 0, 0)], //north
[objectify( 0, 1,  0, 16, 1, 0, 0)], //south
[objectify(16, 1,  0, 16, 1, 0, 0)], //east
[objectify( 0, 1, 16, 16, 1, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 1,
south: 1,
east: 1,
west: 1
},
texVerts: [],
buffer: null,
size: 6,
varients: []
},
bed: {
verts: [
[objectify( 0, 3,  0, 16, 16, -16, 0),objectify( 0, 3,  16, 16, 16, -16, 0),
objectify(0, 0, 0, 3,3,  38,0),
objectify(13, 0, 29, 3,3,38,0),
objectify(0, 0, 29, 3,3, 38,0),
objectify(13, 0, 0, 3,3, 38,0)], //bottom
[objectify( 0, 9, 32, 16, 16, 16, 0),objectify( 0, 9, 16, 16, 16, 0, 0)], //top
[objectify(16, 9, 32, 16, 6, 80, 6),
objectify(3, 3, 3, 3,3,  38,3),
objectify(16, 3, 32, 3,3,32,3),
objectify(3, 3, 32, 3,3, 35,3),
objectify(16, 3, 3, 3,3, 41,3)], //north
[objectify( 0, 9,  0, 16, 6, 80, 0),
objectify(0, 3, 0, 3,3,  32,3),
objectify(13, 3, 29, 3,3,38,3),
objectify(0, 3, 29, 3,3, 41,3),
objectify(13, 3, 0, 3,3, 35,3)], //south
[objectify( 16, 9,  0, 16, 6, 48, 0),objectify( 16, 9,  16, 16, 6, 64, 0),
objectify(3, 3, 0, 3,3,  41,3),
objectify(16, 3, 29, 3,3,35,3),
objectify(3, 3, 29, 3,3, 38,3),
objectify(16, 3, 0, 3,3, 32,3)], //east
[objectify( 0, 9, 32, 16, 6, 64, 6),objectify( 0, 9, 16, 16, 6, 48, 6),
objectify(0, 3, 3, 3,3,  35,3),
objectify(13, 3, 32, 3,3,41,3),
objectify(0, 3, 32, 3,3, 32,3),
objectify(13, 3, 3, 3,3, 38,3)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
buffer: null,
size: 6,
varients: [],
rotate: true
},
cactusPot: {
verts: [
[], //bottom
[objectify( 6, 1, 10, 4,  4, 6, 6)], //top
[objectify(10, 1, 10, 4, 11, 6, 0)], //north
[objectify( 6, 1,  6, 4, 11, 6, 0)], //south
[objectify(10, 1,  6, 4, 11, 6, 0)], //east
[objectify( 6, 1, 10, 4, 11, 6, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
crop: {
verts: [
[objectify(0,0,0,0,0,0,0)],
[objectify(0,0,0,0,0,0,0)],
[objectify(16,16,4,16,16,0,0),objectify(16,16,12,16,16,0,0)],
[objectify(0,16,12,16,16,0,0),objectify(0,16,4,16,16,0,0)],
[objectify(4,16,0,16,16,0,0),objectify(12,16,0,16,16,0,0)],
[objectify(12,16,16,16,16,0,0),objectify(4,16,16,16,16,0,0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 6,
varients: []
},
anvil: {
verts: [
[objectify(2,0,2,12,12,0,0),objectify(0,10,3,16,10,0,0)],
[objectify(2,4,14,12,12,0,0),objectify(3,5,12,10,8,0,0),objectify(0,16,13,16,10,-16,3)],
[objectify(14,4,14,12,4,0,0),objectify(16,16,13,16,6,0,0),objectify(13,5,12,10,1,0,0),objectify(12,10,11,8,5,0,0)],
[objectify(2,4,2,12,4,0,0),objectify(0,16,3,16,6,0,0),objectify(3,5,4,10,1,0,0),objectify(4,10,5,8,5,0,0)],
[objectify(14,4,2,12,4,0,0),objectify(16,16,3,10,6,0,0),objectify(13,5,4,8,1,0,0),objectify(12,10,5,6,5,0,0)],
[objectify(2,4,14,12,4,0,0),objectify(0,16,13,10,6,0,0),objectify(3,5,12,8,1,0,0),objectify(4,10,11,6,5,0,0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 21,
varients: [],
rotate: true
},
liquidSurface: {
verts: [
[objectify( 0,    0,  0, 16,   16, 0, 0), objectify( 0, 14.5, 0, 16, 16, 0, 0)], //bottom
[objectify( 0, 14.5, 16, 16,   16, 0, 0)], //top
[objectify(16, 14.5, 16, 16, 14.5, 0, 0)], //north
[objectify( 0, 14.5,  0, 16, 14.5, 0, 0)], //south
[objectify(16, 14.5,  0, 16, 14.5, 0, 0)], //east
[objectify( 0, 14.5, 16, 16, 14.5, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
sporeBlossom: {
verts: [
[objectify( 1, 15.9, 1, 14, 14, -15, 1)], //bottom
[objectify( 1, 15.9, 15, 14, 14, -15, 1)], //top
[customFace(0,15.9,8, 16,15.9,8, 16,11.1,-8, 0,11.1,-8, 16,16,-16,-16), customFace(16,15.9,8, 0,15.9,8, 0,11.1,-8, 16,11.1,-8, 16,16,-16,-16)],
[customFace(0,15.9,8, 16,15.9,8, 16,11.1,24, 0,11.1,24, 16,16,-16,-16), customFace(16,15.9,8, 0,15.9,8, 0,11.1,24, 16,11.1,24, 16,16,-16,-16)], //southobjectify( 0, 16,  0, 16, 16, 0, 0)
[customFace(8,15.9,0, 8,15.9,16, -8,11.1,16, -8,11.1,0, 16,16,-16,-16), customFace(8,15.9,16, 8,15.9,0, -8,11.1,0, -8,11.1,16, 16,16,-16,-16)],
[customFace(8,15.9,0, 8,15.9,16, 24,11.1,16, 24,11.1,0, 16,16,-16,-16), customFace(8,15.9,16, 8,15.9,0, 24,11.1,0, 24,11.1,16, 16,16,-16,-16)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
},
azalea: {
verts: [
[objectify( 0,  8,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0),customFace(0,16,0, 16,16,16, 16,0,16, 0,0,0, -32,0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0),customFace(16,16,0, 0,16,16, 0,0,16, 16,0,0, -32,0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0),customFace(16,16,16, 0,16,0, 0,0,0, 16,0,16, -32,0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0),customFace(0,16,16, 16,16,0, 16,0,0, 0,0,16, -32,0)]  //west
],
cull: {
top: 3,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
azaleaPot: {
verts: [
[objectify( 4,  -7,  4, 8, 8, 4, 4)], //bottom
[objectify( 4, -1, 12, 8, 8, 4, 4)], //top
[objectify(12, -1, 12, 8, 11, 4, 5),customFace(4,-1,4, 12,-1,12, 12,-12,12, 4,-12,4, -12,5,8,11)], //north
[objectify( 4, -1,  4, 8, 11, 4, 5),customFace(12,-1,4, 4,-1,12, 4,-12,12, 12,-12,4, -12,5,8,11)], //south
[objectify(12, -1,  4, 8, 11, 4, 5),customFace(12,-1,12, 4,-1,4, 4,-12,4, 12,-12,12, -12,5,8,11)], //east
[objectify( 4, -1, 12, 8, 11, 4, 5),customFace(4,-1,12, 12,-1,4, 12,-12,4, 4,-12,12, -12,5,8,11)]  //west
],
cull: {
top: 3,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
sunflower: {
verts: [
[customFace(0,34,7, 16,34,7, 16,18,11, 0,18,11, 0,0)], //bottom
[customFace(16,34,7, 0,34,7, 0,18,11, 16,18,11, 0,0)], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, -16,0),customFace(2,32,2, 14,32,14, 14,16,14, 2,16,2, 0,0)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, -16,0),customFace(14,32,2, 2,32,14, 2,16,14, 14,16,2, 0,0)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, -16,0),customFace(14,32,14, 2,32,2, 2,16,2, 14,16,14, 0,0)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, -16,0),customFace(2,32,14, 14,32,2, 14,16,2, 2,16,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
cake:{
verts: [
[objectify(1,0,1,14,14,1,1)],
[objectify(1,8,15,14,14,1,1)],
[objectify(15,8,15,14,8,1,8)],
[objectify(1,8,1,14,8,1,8)],
[objectify(15,8,1,14,8,1,8)],
[objectify(1,8,15,14,8,1,8)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
stonecutter:{
verts:[
[objectify(0,0,0,16,16,0,0)],
[objectify(0,9,16,16,16,0,0)],
[objectify(16,9,16,16,9,0,7),objectify(16,16,8,16,7,16,9)],
[objectify(0,9,0,16,9,0,7),objectify(0,16,8,16,7,16,9)],
[objectify(16,9,0,16,9,0,7)],
[objectify(0,9,16,16,9,0,7)]
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
}
},
itemFrame:{
verts: [
[objectify(2,2,15,12,1,-16,0),objectify(3,13,15,10,1,-16,0)],
[objectify(2,14,16,12,1,-16,0),objectify(3,3,16,10,1,-16,0)],
[objectify(14,14,16,12,12,-16,0)],
[objectify(3,13,15.5,10,10,3,3),objectify(2,14,15,11,1,-14,2),objectify(13,14,15,1,11,-3,2),objectify(3,3,15,11,1,-13,13),objectify(2,13,15,1,11,-14,3)],
[objectify(14,14,15,1,12,-16,0),objectify(3,13,15,1,10,-16,0)],
[objectify(2,14,16,1,12,-16,0),objectify(13,13,16,1,10,-16,0)]
],
cull: {
top: 0,
bottom: 0,
north: 3,
south: 0,
east: 0,
west: 0
},
rotate:true
},
endPortalFrame:{
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 13, 16, 16, 16, 0, 0)], //top
[objectify(16, 13, 16, 16, 13, 0, 3)], //north
[objectify( 0, 13,  0, 16, 13, 0, 3)], //south
[objectify(16, 13,  0, 16, 13, 0, 3)], //east
[objectify( 0, 13, 16, 16, 13, 0, 3)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate:true
},
eyeOfEnder: {
verts: [
[objectify( 4,  -3, 4, 8, 8, 4, 4)], //bottom
[objectify( 4, 0, 12, 8, 8, 4, 4)], //top
[objectify( 12, 0, 12, 8, 3, 4, 0)], //north
[objectify( 4, 0, 4, 8, 3, 4, 0)], //south
[objectify( 12, 0, 4, 8, 3, 4, 0)], //east
[objectify( 4, 0, 12, 8, 3, 4, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate: true
},
fire: {
verts: [
[], //bottom
[], //top
[objectify(16, 16, 16, 16, 16, 0, 0), customFace(0,16,16, 16,16,16, 16,0,0, 0,0,0, 0,0), customFace(16,16,16, 0,16,16, 0,0,0, 16,0,0, 0,0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0), customFace(16,16,0, 0,16,0, 0,0,16, 16,0,16, 0,0), customFace(0,16,0, 16,16,0, 16,0,16, 0,0,16, 0,0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0), customFace(16,16,0, 16,16,16, 0,0,16, 0,0,0, 0,0), customFace(16,16,16, 16,16,0, 0,0,0, 0,0,16, 0,0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0), customFace(0,16,0, 0,16,16, 16,0,16, 16,0,0, 0,0), customFace(0,16,16, 0,16,0, 16,0,0, 16,0,16, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
hitbox:"cube"
},
endRod: {
verts: [
[objectify( 6, 0,  6, 4, 4, 2, 4)], //bottom
[objectify( 7, 16, 9, 2, 2, 2, 0),objectify(6, 1,  10, 4, 4, 2, 4)], //top
[objectify(9, 16, 9, 2, 15, 0, 0),objectify(10, 1, 10, 4, 1, 2, 2)], //north
[objectify(7, 16, 7, 2, 15, 0, 0),objectify(6, 1,  6, 4, 1, 2, 2)], //south
[objectify(9, 16, 7, 2, 15, 0, 0),objectify(10, 1, 6, 4, 1, 2, 2)], //east
[objectify(7, 16, 9, 2, 15, 0, 0),objectify(6, 1, 10, 4, 1, 2, 2)]  //west
],
cull: {
top: 0,
bottom: 1,
north: 0,
south: 0,
east: 0,
west: 0
},
flip: true,
},
endRodSW: {
verts: [
[objectify(7, 7, 0, 2, 15, 0, 0),objectify(6, 6,  15, 4, 1, 2, 4)], //bottom
[objectify(7, 9, 15, 2, 15, 0, 0),objectify(6, 10, 16, 4, 1, 2, 4)], //top
[objectify(10, 10, 16, 4, 4, 2, 4)], //north
[objectify( 7, 9, 0, 2, 2, 2, 0),objectify(6, 10,  15, 4, 4, 2, 2)], //south
[objectify(9, 9, 0, 15, 2, 16, 14),objectify(10, 10, 15, 1, 4, 2, 2)], //east
[objectify(7, 9, 15, 15, 2, 16, 14),objectify(6, 10, 16, 1, 4, 2, 2)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 1,
south: 0,
east: 0,
west: 0
},
rotate: true,
},
playerHand: {
verts: [
[objectify( 6,  6,  6, 4,  4, 0, 0)], //bottom
[objectify( 6, 18, 10, 4,  4, 0, 0)], //top
[objectify(10, 18, 10, 4, 12, 0, 0)], //north
[objectify( 6, 18,  6, 4, 12, 0, 0)], //south
[objectify(10, 18,  6, 4, 12, 0, 0)], //east
[objectify( 6, 18, 10, 4, 12, 0, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
item: {
verts: generateItemShape(),
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null
},
cube2: {
verts: [
[objectify(0,0,0,16,16,0,0),objectify(8,4,8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0)],
[objectify(16,16,16,16,16,0,0),objectify(24,20,24,16,16,0,0)],
[objectify(0,16,0,16,16,0,0),objectify(8,20,8,16,16,0,0)],
[objectify(16,16,0,16,16,0,0),objectify(24,20,8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0)]
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
},
cube3: {
verts: [
[objectify(0,0,0,16,16,0,0),objectify(8,4,8,16,16,0,0),objectify(-8,8,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0)],
[objectify(16,16,16,16,16,0,0),objectify(24,20,24,16,16,0,0),objectify(8,24,8,16,16,0,0)],
[objectify(0,16,0,16,16,0,0),objectify(8,20,8,16,16,0,0),objectify(-8,24,-8,16,16,0,0)],
[objectify(16,16,0,16,16,0,0),objectify(24,20,8,16,16,0,0),objectify(8,24,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0)]
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
},
cube4: {
verts: [
[objectify(0,0,0,16,16,0,0),objectify(8,4,8,16,16,0,0),objectify(-8,8,-8,16,16,0,0),objectify(8,-4,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0),objectify(8,12,8,16,16,0,0)],
[objectify(16,16,16,16,16,0,0),objectify(24,20,24,16,16,0,0),objectify(8,24,8,16,16,0,0),objectify(24,12,8,16,16,0,0)],
[objectify(0,16,0,16,16,0,0),objectify(8,20,8,16,16,0,0),objectify(-8,24,-8,16,16,0,0),objectify(8,12,-8,16,16,0,0)],
[objectify(16,16,0,16,16,0,0),objectify(24,20,8,16,16,0,0),objectify(8,24,-8,16,16,0,0),objectify(24,12,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0),objectify(8,12,8,16,16,0,0)]
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
}
},
entityFire: {
verts: [
[], //bottom
[], //top
[customFace(0,16,0, 16,16,16, 16,0,16, 0,0,0, 0,0), objectify(16, 16,  8, 16, 16, 0, 0)], //north
[customFace(16,16,0, 0,16,16, 0,0,16, 16,0,0, 0,0), objectify(0,  16,  8, 16, 16, 0, 0)], //south
[customFace(16,16,16, 0,16,0, 0,0,0, 16,0,16, 0,0), objectify(8,  16,  0, 16, 16, 0, 0)], //east
[customFace(0,16,16, 16,16,0, 16,0,0, 0,0,16, 0,0), objectify(8,  16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
},
cow: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify( 0,  0,  0, 16, 16, 0, 0), objectify(16,  8,  4,  8,  8,  0,  0)], //bottom
[objectify( 0, 12, 16, 16, 16, 0, 0), objectify(16, 16, 12,  8,  8,  0,  0)], //top
[objectify(16, 12, 16, 16, 12, 0, 4), objectify(24, 16, 12,  8,  8, 16,  0)], //north
[objectify( 0, 12,  0, 16, 12, 0, 4), objectify(16, 16,  4,  8,  8, 16,  0)], //south
[objectify(16, 12,  0, 16, 12, 0, 4), objectify(24, 16,  4,  8,  8, 16,  0)], //east
[objectify( 0, 12, 16, 16, 12, 0, 4), objectify(16, 16, 12,  8,  8, 16,  0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 12,
},
blockParticle: {
verts: [
[], //bottom
[], //top
[objectify( 16, 16, 8, 16, 16, 0, 0)], //north
[objectify(  0, 16, 8, 16, 16, 0, 0)], //south
[], //east
[]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
}
},
panorama:{
verts: //*
(function(){
var arr = [[],[],[],[],[],[]]
var data = arr[2]
var rt = Math.PId/360
var s = (sin(-rt)+1)*8, c = (cos(-rt)+1)*8
var w = -rt/Math.PId*16
for(var deg=0; deg<Math.PId; deg+=rt){
var s2 = (sin(deg)+1)*8, c2 = (cos(deg)+1)*8
var a = deg / Math.PId
data.push(customFace(s,16,c, s2,16,c2, s2,0,c2, s,0,c, a*16,0,w,16))
s = s2, c = c2
}
return arr
})()/*/[
[objectify( 0,  0,  0, 16, 16, 6, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 4, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 16,  0, 16, 16, 2, 0)], //south
[objectify(16, 16,  0, 16, 16, 8, 0)], //east
[objectify( 0, 16, 16, 16, 16, 10, 0)]  //west
]//*/
,
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
}
win.shapes = shapes
for(var shape = 0; shape < 8; shape ++){
shapes["layer"+(shape+1)] = {
verts: layerShape((shape+1)*2),
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
}
}
}
//automatically set size
for(var shape in shapes){
shape = shapes[shape]
let v = shape.verts
let s = v[0].length + v[1].length + v[2].length + v[3].length + v[4].length + v[5].length
shape.size = s
shape.texVerts = []
shape.varients = []
shape.buffer = null
if(typeof shape.hitbox === "string"){
shape.hitbox = shapes[shape.hitbox]
}
}
function compareArr(arr, out) {
let minX = 1000
let maxX = -1000
let minY = 1000
let maxY = -1000
let minZ = 1000
let maxZ = -1000
let num = 0
for (let i = 0; i < arr.length; i += 3) {
num = arr[i]
minX = minX > num ? num : minX
maxX = maxX < num ? num : maxX
num = arr[i + 1]
minY = minY > num ? num : minY
maxY = maxY < num ? num : maxY
num = arr[i + 2]
minZ = minZ > num ? num : minZ
maxZ = maxZ < num ? num : maxZ
}
out[0] = minX
out[1] = minY
out[2] = minZ
out[3] = maxX
out[4] = maxY
out[5] = maxZ
return out
}
function arrayValues(a1,a2){
if(a1.length !== a2.length) return false
let minLen = a1.length
for(var i=0; i<minLen; i++){
if(a1[i] !== a2[i]){
return false
}
}
return true
}
function initShapes() {
function mapCoords(rect, face) {
if(rect.custom) return mapCustomCoords(rect)
let x = rect.x
let y = rect.y
let z = rect.z
let w = rect.w
let h = rect.h
let tx = rect.tx
let ty = rect.ty
let tex = [tx+w,ty, tx,ty, tx,ty+h, tx+w,ty+h]
if(rect.txf){
tex[0] = tx
tex[2] = tx+w
tex[4] = tx+w
tex[6] = tx
}
if(rect.rt){//doesn't work
tex.push(...tex.splice(0,2))
}
let pos = null
switch(face) {
case 0: // Bottom
pos = [x,y,z, x+w,y,z, x+w,y,z+h, x,y,z+h]
break
case 1: // Top
pos = [x,y,z, x+w,y,z, x+w,y,z-h, x,y,z-h]
break
case 2: // North
pos = [x,y,z, x-w,y,z, x-w,y-h,z, x,y-h,z]
break
case 3: // South
pos = [x,y,z, x+w,y,z, x+w,y-h,z, x,y-h,z]
break
case 4: // East
pos = [x,y,z, x,y,z+w, x,y-h,z+w, x,y-h,z]
break
case 5: // West
pos = [x,y,z, x,y,z-w, x,y-h,z-w, x,y-h,z]
break
}
pos = pos.map(c => c / 16 - 0.5)
let minmax = compareArr(pos, [])
pos.max = minmax.splice(3, 3)
pos.min = minmax
tex = tex.map(c => c / 16 / 16)
return {
pos: pos,
tex: tex
}
}
function mapCustomCoords(coords){
let {x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4, tx,ty,tw,th} = coords
let tex = [tx+tw,ty, tx,ty, tx,ty+th, tx+tw,ty+th]
let pos = [x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4]
pos = pos.map(c => c / 16 - 0.5)
let minmax = compareArr(pos, [])
pos.max = minmax.splice(3, 3)
pos.min = minmax
tex = tex.map(c => c / 16 / 16)
return {pos,tex}
}
// 90 degree clockwise rotation; returns a new shape object
function rotate(shape, bit) {
let verts = shape.verts
let texVerts = shape.texVerts
let cull = shape.cull
let pos = []
tex = []
for (let i = 0; i < verts.length; i++) {
let side = verts[i]
pos[i] = []
tex[i] = []
for (let j = 0; j < side.length; j++) {
let face = side[j]
let c = []
pos[i][j] = c
for (let k = 0; k < face.length; k += 3) {
c[k] = face[k + 2]
c[k + 1] = face[k + 1]
c[k + 2] = -face[k]
}
tex[i][j] = texVerts[i][j].slice() // Copy texture verts exactly
if (i === 0) {
// Bottom
c.push(...c.splice(0, 3))
tex[i][j].push(...tex[i][j].splice(0, 2))
}
if (i === 1) {
// Top
c.unshift(...c.splice(-3, 3))
tex[i][j].unshift(...tex[i][j].splice(-2, 2))
}
let minmax = compareArr(c, [])
c.max = minmax.splice(3, 3)
c.min = minmax
}
}
let temp = tex[2] // North
tex[2] = tex[5] // North = West
tex[5] = tex[3] // West = South
tex[3] = tex[4] // South = East
tex[4] = temp // East = North
temp = pos[2] // North
pos[2] = pos[5] // North = West
pos[5] = pos[3] // West = South
pos[3] = pos[4] // South = East
pos[4] = temp // East = North
let cull2 = {
top: cull.top,
bottom: cull.bottom,
north: cull.west,
west: cull.south,
south: cull.east,
east: cull.north
}
let buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos.flat(2)), gl.STATIC_DRAW)
return {
verts: pos,
texVerts: tex,
cull: cull2,
rotate: true,
flip: shape.flip,
buffer: buffer,
size: shape.size,
varients: shape.varients,
bit: bit,
rotated: true,
rotateTimes: (shape.rotateTimes || 0) + 1
}
}
// Reflect over the y plane; returns a new shape object
function flip(shape, bit) {
let verts = shape.verts
let texVerts = shape.texVerts
let cull = shape.cull
let pos = []
tex = []
for (let i = 0; i < verts.length; i++) {
let side = verts[i]
pos[i] = []
tex[i] = []
for (let j = 0; j < side.length; j++) {
let face = side[j].slice().reverse()
let c = []
pos[i][j] = c
for (let k = 0; k < face.length; k += 3) {
c[k] = face[k + 2]
c[k + 1] = -face[k + 1]
c[k + 2] = face[k]
}
let minmax = compareArr(c, [])
c.max = minmax.splice(3, 3)
c.min = minmax
tex[i][j] = texVerts[i][j].slice() // Copy texture verts exactly
}
}
let temp = pos[0] // Bottom
pos[0] = pos[1] // Bottom = Top
pos[1] = temp // Top = Bottom
temp = tex[0] // Bottom
tex[0] = tex[1] // Bottom = Top
tex[1] = temp // Top = Bottom
let cull2 = {
top: cull.bottom,
bottom: cull.top,
north: (cull.north & 1) << 1 | (cull.north & 2) >> 1,
west: (cull.west & 1) << 1 | (cull.west & 2) >> 1,
south: (cull.south & 1) << 1 | (cull.south & 2) >> 1,
east: (cull.east & 1) << 1 | (cull.east & 2) >> 1
}
let buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos.flat(2)), gl.STATIC_DRAW)
return {
verts: pos,
texVerts: tex,
cull: cull2,
rotate: shape.rotate,
flip: shape.flip,
buffer: buffer,
size: shape.size,
varients: shape.varients,
bit: bit
}
}
for (let shape in shapes) {
let obj = shapes[shape]
let verts = obj.verts
// Populate the vertex coordinates
for (let i = 0; i < verts.length; i++) {
let side = verts[i]
let texArr = []
obj.texVerts.push(texArr)
for (let j = 0; j < side.length; j++) {
let face = side[j]
let mapped = mapCoords(face, i)
side[j] = mapped.pos
texArr.push(mapped.tex)
}
}
if (obj.rotate) {
let v = obj.varients
let east = rotate(obj, 4<<10)
let south = rotate(east, 2<<10)
let west = rotate(south, 6<<10)
v[0] = obj
v[2] = south
v[4] = east
v[6] = west
}
if (obj.flip) {
let v = obj.varients
v[1] = flip(obj,1<<10)
if (obj.rotate) {
v[3] = flip(v[2], 3<<10)
v[5] = flip(v[4], 5<<10)
v[7] = flip(v[6], 7<<10)
}
}
obj.buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, obj.buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts.flat(2)), gl.STATIC_DRAW)
}
function makeBlock(tex,shape,Block){
Block.textures = tex
Block.shape = shape
Block.shadow = true
Block.transparent = false
Block.solid = true
}
function rotTex(tex,n){
tex = tex.slice()
if(n){
for(var i=0; i<n; i++){
let temp = tex[2] // North
tex[2] = tex[5] // North = West
tex[5] = tex[3] // West = South
tex[3] = tex[4] // South = East
tex[4] = temp // East = North
}
}else{
let temp = tex[2] // North
tex[2] = tex[5] // North = West
tex[5] = tex[3] // West = South
tex[3] = tex[4] // South = East
tex[4] = temp // East = North
}
return tex
}
win.initBlockData = function(){
for (let i = 0; i < BLOCK_COUNT; i++) {
let baseBlock = blockData[i]
for(var t=0; t<baseBlock.textures.length; t++){
if(semiTransTextures.includes(baseBlock.textures[t])){
baseBlock.semiTrans = true
break
}
}
let slabBlock = Object.create(baseBlock)
let stairBlock = Object.create(baseBlock)
let crossBlock = Object.create(baseBlock)
let tallcrossBlock = Object.create(baseBlock)
let doorBlock = Object.create(baseBlock)
let torchBlock = Object.create(baseBlock)
let lanternBlock = Object.create(baseBlock)
let lanternHangBlock = Object.create(baseBlock)
let beaconBlock = Object.create(baseBlock)
let cactusBlock = Object.create(baseBlock)
let paneBlock = Object.create(baseBlock)
let portalBlock = Object.create(baseBlock)
let trapdoorBlock = Object.create(baseBlock)
let openTrapdoor = Object.create(baseBlock)
let wallFlatBlock = Object.create(baseBlock)
let fenceBlock = Object.create(baseBlock)
let wallPostBlock = Object.create(baseBlock)
let wallBlock = Object.create(baseBlock)
let walluBlock = Object.create(baseBlock)
let fencqBlock = Object.create(baseBlock)
let buttonBlock = Object.create(baseBlock)
let chainBlock = Object.create(baseBlock)
let potBlock = Object.create(baseBlock)
let potCrossBlock = Object.create(baseBlock)
let carpetBlock = Object.create(baseBlock)
baseBlock.shape = shapes.cube
slabBlock.shape = shapes.slab
slabBlock.transparent = true
stairBlock.shape = shapes.stair
stairBlock.transparent = true
crossBlock.shape = shapes.cross
tallcrossBlock.shape = shapes.tallCross
doorBlock.shape = shapes.door
doorBlock.solid = false
torchBlock.shape = shapes.torch
lanternBlock.shape = shapes.lantern
lanternHangBlock.shape = shapes.lanternHang
beaconBlock.shape = shapes.beacon
cactusBlock.shape = shapes.cactus
paneBlock.shape = shapes.pane
portalBlock.shape = shapes.portal
wallFlatBlock.shape = shapes.wallFlat
trapdoorBlock.shape = shapes.trapdoor
openTrapdoor.shape = shapes.trapdoorOpen
fenceBlock.shape = shapes.fence
fenceBlock.transparent = true
wallPostBlock.shape = shapes.wallpost
wallPostBlock.transparent = true
wallBlock.shape = shapes.wall
walluBlock.shape = shapes.wallu
fencqBlock.shape = shapes.fencq
buttonBlock.shape = shapes.button
chainBlock.shape = shapes.chain
potBlock.shape = shapes.pot
potCrossBlock.shape = shapes.potCross
carpetBlock.shape = shapes.carpet
carpetBlock.shadow = false
carpetBlock.transparent = true
if(baseBlock.bed) baseBlock.shape = shapes.bed
if(baseBlock.rotate) baseBlock.shape = shapes.rotate
if(baseBlock.cactus) potCrossBlock.shape = shapes.cactusPot
if(baseBlock.crop) baseBlock.shape = shapes.crop
if(baseBlock.anvil) baseBlock.shape = shapes.anvil
if(baseBlock.liquid) slabBlock.shape = shapes.liquidSurface
if(baseBlock._1PixLower){baseBlock.shape = shapes._1PixLower; baseBlock.transparent = true}
if(baseBlock.item) baseBlock.shape = shapes.item
if(baseBlock.torch) slabBlock.shape = shapes.wallTorch
if(baseBlock.sporeBlossom) baseBlock.shape = shapes.sporeBlossom
if(baseBlock.azalea){
baseBlock.shape = shapes.azalea
potCrossBlock.shape = shapes.azaleaPot
var t = baseBlock.potTex
potCrossBlock.textures = [t[0],t[0],t[1],t[1],t[1],t[1]]
}
if(baseBlock.sunflower) baseBlock.shape = shapes.sunflower
if(baseBlock.sideCross){baseBlock.shape = shapes.sideCross; slabBlock.shape = shapes.bottomCross}
if(baseBlock.layers){
torchBlock.shape = shapes.layer1
torchBlock.solid = true
torchBlock.shadow = false
torchBlock.dropAmount = 1
slabBlock.shape = shapes.layer2
slabBlock.solid = true
slabBlock.shadow = false
slabBlock.dropAmount = 2
stairBlock.shape = shapes.layer3
stairBlock.solid = true
stairBlock.shadow = false
stairBlock.dropAmount = 3
crossBlock.shape = shapes.layer4
crossBlock.solid = true
crossBlock.shadow = false
crossBlock.dropAmount = 4
tallcrossBlock.shape = shapes.layer5
tallcrossBlock.solid = true
tallcrossBlock.shadow = false
tallcrossBlock.dropAmount = 5
lanternBlock.shape = shapes.layer6
lanternBlock.solid = true
lanternBlock.shadow = false
lanternBlock.dropAmount = 6
lanternHangBlock.shape = shapes.layer7
lanternHangBlock.solid = true
lanternHangBlock.shadow = false
lanternHangBlock.dropAmount = 7
doorBlock.shape = shapes.layer8
doorBlock.solid = true
doorBlock.shadow = false
doorBlock.dropAmount = 8
}
if(baseBlock.name === "grass"){
crossBlock.shape = shapes.cube
crossBlock.textures = ["dirt","grassTop","snowGrass","snowGrass","snowGrass","snowGrass"]
crossBlock.solid = true
crossBlock.transparent = false
crossBlock.shadow = true
tallcrossBlock.shape = shapes._1PixLower
tallcrossBlock.textures = ["dirt","dirtPathTop","dirtPathSide","dirtPathSide","dirtPathSide","dirtPathSide"]
tallcrossBlock.solid = true
tallcrossBlock.transparent = true
tallcrossBlock.shadow = true
}
if(baseBlock.name === "farmland"){
slabBlock.textures = []
copyArr(baseBlock.textures, slabBlock.textures)
slabBlock.textures[1] = "farmlandMoist"
slabBlock.shape = shapes._1PixLower
}
if(baseBlock.mushroomBlock){
var cap = baseBlock.name
var pore = "mushroomBlockInside"
makeBlock(new Array(6).fill(pore), shapes.cube, slabBlock)
makeBlock([pore,cap,pore,pore,pore,pore], shapes.cube, stairBlock)
makeBlock([cap,pore,pore,pore,pore,pore], shapes.cube, crossBlock)
makeBlock([cap,cap,pore,pore,pore,pore], shapes.cube, tallcrossBlock)
makeBlock([pore,pore,cap,pore,pore,pore], shapes.rotate, doorBlock)
makeBlock([pore,cap,cap,pore,pore,pore], shapes.rotate, paneBlock)
makeBlock([cap,pore,cap,pore,pore,pore], shapes.rotate, portalBlock)
makeBlock([cap,cap,cap,pore,pore,pore], shapes.rotate, wallFlatBlock)
}
if(baseBlock.cake) baseBlock.shape = shapes.cake
if(baseBlock.stonecutter) baseBlock.shape = shapes.stonecutter
if(baseBlock.itemFrame) baseBlock.shape = shapes.itemFrame
if(baseBlock.name === "redstoneLamp"){
makeBlock(new Array(6).fill("redstoneLampOn"), shapes.cube, slabBlock)
slabBlock.lightLevel = 15
}
if(baseBlock.name === "endPortalFrame"){
baseBlock.shape = shapes.endPortalFrame
}
if(baseBlock.eyeOfEnder){
slabBlock.shape = shapes.eyeOfEnder
}
if(baseBlock.name === "furnace"){
var arr = baseBlock.textures.slice()
arr[3] = "furnaceFrontOn"
makeBlock(arr, shapes.rotate, slabBlock)
slabBlock.textures = arr
}
if(baseBlock.name === "jungleLeaves"){
makeBlock(new Array(6).fill("floweringJungleLeaves"), shapes.cube, slabBlock)
slabBlock.transparent = true
}
if(baseBlock.fire){
baseBlock.shape = shapes.fire
slabBlock.shape = shapes.cube
}
if(baseBlock.name === "endRod"){
baseBlock.shape = shapes.endRod
slabBlock.shape = shapes.endRodSW
}
blockData[i | SLAB] = slabBlock
blockData[i | STAIR] = stairBlock
blockData[i | CROSS] = crossBlock
blockData[i | TALLCROSS] = tallcrossBlock
blockData[i | DOOR] = doorBlock
blockData[i | TORCH] = torchBlock
blockData[i | LANTERN] = lanternBlock
blockData[i | LANTERNHANG] = lanternHangBlock
if(baseBlock.beacon) blockData[i | BEACON] = beaconBlock
if(baseBlock.cactus) blockData[i | CACTUS] = cactusBlock
blockData[i | PANE] = paneBlock
blockData[i | PORTAL] = portalBlock
blockData[i | WALLFLAT] = wallFlatBlock
blockData[i | TRAPDOOR] = trapdoorBlock
blockData[i | TRAPDOOROPEN] = openTrapdoor
blockData[i | FENCE] = fenceBlock
blockData[i | WALLPOST] = wallPostBlock
blockData[i | WALL] = wallBlock
blockData[i | WALLU] = walluBlock
blockData[i | FENCQ] = fencqBlock
if(baseBlock.button) blockData[i | BUTTON] = buttonBlock
if(baseBlock.chain) blockData[i | CHAIN] = chainBlock
if(baseBlock.pot) blockData[i | POT] = potBlock
blockData[i | POTCROSS] = potCrossBlock
if(baseBlock.carpet) blockData[i | CARPET] = carpetBlock
let v
if(baseBlock.shape.rotate || baseBlock.shape.flip){
let t = baseBlock.textures
v = baseBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
if(v[j].rotated) block.textures = rotTex(t, v[j].rotateTimes) //rotate textures around
blockData[i | v[j].bit] = block
}
}
}
v = slabBlock.shape.varients
for (let j = 0; j < v.length; j++) {
let t = slabBlock.textures
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
if(v[j].rotated) block.textures = rotTex(t, v[j].rotateTimes) //rotate textures around
blockData[i | SLAB | v[j].bit] = block
}
}
v = stairBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | STAIR | v[j].bit] = block
}
}
v = doorBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.solid = false
blockData[i | DOOR | v[j].bit] = block
}
}
v = paneBlock.shape.varients
for (let j = 0; j < v.length; j++) {
let t = baseBlock.textures
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
if(v[j].rotated) block.textures = rotTex(t, v[j].rotateTimes) //rotate textures around
blockData[i | PANE | v[j].bit] = block
}
}
v = portalBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | PORTAL | v[j].bit] = block
}
}
v = wallFlatBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | WALLFLAT | v[j].bit] = block
}
}
v = trapdoorBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | TRAPDOOR | v[j].bit] = block
}
}
v = openTrapdoor.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | TRAPDOOROPEN | v[j].bit] = block
}
}
v = wallBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | WALL | v[j].bit] = block
}
}
v = walluBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | WALLU | v[j].bit] = block
}
}
v = fencqBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | FENCQ | v[j].bit] = block
}
}
v = buttonBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j] && blockData[i].button) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | BUTTON | v[j].bit] = block
}
}
}
}
}
let indexOrder;
(function() {
let arr = []
for (let i = 0; i < 100000; i++) {
arr.push(0 + i * 4, 1 + i * 4, 2 + i * 4, 0 + i * 4, 2 + i * 4, 3 + i * 4)
}
indexOrder = new Uint32Array(arr)
})()
let hexagonVerts
let slabIconVerts
let stairIconVerts
let _2dIconVerts
let fenceIconVerts
let wallPostIconVerts
let walluIconVerts
let wallIconVerts
let fencqIconVerts
let buttonIconVerts
let carpetIconVerts
let trapdoorIconVerts
let azaleaIconVerts
let cactusIconVerts
let snowIconVerts
let blockIcons
let blockIconError
{
let side = Math.sqrt(3) / 2
let s = side
let q = s / 2
let p = s / 16
hexagonVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
slabIconVerts = new Float32Array([
0, 0.5, 1, side, 0, 1, 0, -0.5, 1, -side, 0, 1,
0, -0.5, 1, side, 0, 1, side, -0.5, 1, 0, -1, 1,
-side, 0, 1, 0, -0.5, 1, 0, -1, 1, -side, -0.5, 1,
])
stairIconVerts = [
-s,0.5,0,0,1,         0,1,1,0,1,         q,0.75,1,0.5,1,    -q,0.25,0,0.5,1,    // top of the top step
-q,-0.25,0,0,1,       q,0.25,1,0,1,      s,0,1,0.5,1,        0,-0.5,0,0.5,1,    // top of the bottom step
-q,0.25,0,0,0.6,      q,0.75,1,0,0.6,    q,0.25,1,0.5,0.6,  -q,-0.25,0,0.5,0.6, // front of the top step
0,-0.5,0,0,0.6,       s,0,1,0,0.6,       s,-0.5,1,0.5,0.6,   0,-1,0,0.5,0.6,    // front of the bottom step
-s,0.5,0,0,0.8,      -q,0.25,0.5,0,0.8, -q,-0.75,0.5,1,0.8, -s,-0.5,0,1,0.8,    // side of the top step
-q,-0.25,0.5,0.5,0.8, 0,-0.5,1,0.5,0.8,  0,-1,1,1,0.8,      -q,-0.75,0.5,1,0.8, // side of the bottom step
]
_2dIconVerts = [
//-1,-1,0,0,1,          1,-1,1,0,1,        1,1,1,1,1          -1,1,0,1,1 //x, y, tx, ty, useless
1,1,1,0,1,         1,-1,1,1,1,         -1,-1,0,1,1,    -1,1,0,0,1
]
fenceIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
wallPostIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
wallIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
walluIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
fencqIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
buttonIconVerts = new Float32Array([
0, 0.5, 1, side, 0, 1, 0, -0.5, 1, -side, 0, 1,
0, -0.5, 1, side, 0, 1, side, -0.5, 1, 0, -1, 1,
-side, 0, 1, 0, -0.5, 1, 0, -1, 1, -side, -0.5, 1,
])
carpetIconVerts = new Float32Array([
0, 1-(p*17), 1, side, 0.5-(p*17), 1, 0, -(p*17), 1, -side, 0.5-(p*17), 1,
0, -(p*17), 1, side, 0.5-(p*17), 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5-(p*17), 1, 0, -(p*17), 1, 0, -1, 1, -side, -0.5, 1,
])
trapdoorIconVerts = new Float32Array([
0, 1-(p*15), 1, side, 0.5-(p*15), 1, 0, -(p*15), 1, -side, 0.5-(p*15), 1,
0, -(p*15), 1, side, 0.5-(p*15), 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5-(p*15), 1, 0, -(p*15), 1, 0, -1, 1, -side, -0.5, 1,
])
snowIconVerts = new Float32Array([
0, 1-(p*16), 1, side, 0.5-(p*16), 1, 0, -(p*16), 1, -side, 0.5-(p*16), 1,
0, -(p*16), 1, side, 0.5-(p*16), 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5-(p*15), 1, 0, -(p*16), 1, 0, -1, 1, -side, -0.5, 1,
])
cactusIconVerts = new Float32Array([
0, 1-p, 1, side, 0.5-p, 1, 0, -p, 1, -side, 0.5-p, 1,
-p, 0, 1, side-p, 0.5, 1, side-p, -0.5, 1, -p, -1, 1,
-side+p, 0.5, 1, p, 0, 1, p, -1, 1, -side+p, -0.5, 1,
])
}
function genIcons() {
blockIcons = [null]
blockIcons.lengths = []
let texOrder = [ 1, 4, 3 ]
let shadows = [ 1, 0.4, 0.7 ]
let scale = 0.16 / height * inventory.size
let prevTexture
let data = []
for (let j = 11; j >= 0; j--) {
data.push(-hexagonVerts[j * 3 + 0] * scale)
data.push(hexagonVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(textureCoords[textureMap.error][(j * 2 + 0) % 8])
data.push(textureCoords[textureMap.error][(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
let buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIconError = buffer
blockIconError.length = 6 * 3
for (let i = 1; i < BLOCK_COUNT; i++) {
let data = []
let v, buffer
let block = blockData[i]
win.b = block.name
if(block.icon){
block = blockData[blockIds[block.icon]]
}
if(block.iconTexture){
prevTexture = block.textures
block.textures = new Array(6).fill(block.iconTexture)
}
if(block.flatIcon){
v = _2dIconVerts
for (let j = 3; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[2]]]
let tx = tex[0]
let ty = tex[1]
data.push(-v[j * 5 + 0] * scale)
data.push(v[j * 5 + 1] * scale)
data.push(0.1666666)
data.push(tx + v[j * 5 + 2] / 16)
data.push(ty + v[j * 5 + 3] / 16)
data.push(1)
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6
blockIcons[i | CROSS] = buffer
blockIcons.lengths[i | CROSS] = 6
blockIcons[i | TALLCROSS] = buffer
blockIcons.lengths[i | TALLCROSS] = 6
blockIcons[i | WALLFLAT] = buffer
blockIcons.lengths[i | WALLFLAT] = 6
blockIcons[i | TORCH] = buffer
blockIcons.lengths[i | TORCH] = 6
blockIcons[i | PANE] = buffer
blockIcons.lengths[i | PANE] = 6
}else if(block.carpet){
v = carpetIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | CARPET] = buffer
blockIcons.lengths[i | CARPET] = 6 * 3
}else if(block.trapdoor){
v = trapdoorIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | TRAPDOOR] = buffer
blockIcons.lengths[i | TRAPDOOR] = 6 * 3
blockIcons[i | TRAPDOOROPEN] = buffer
blockIcons.lengths[i | TRAPDOOROPEN] = 6 * 3
}else if(block.layers){
v = snowIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | LAYER1] = buffer
blockIcons.lengths[i | LAYER1] = 6 * 3
blockIcons[i | LAYER2] = buffer
blockIcons.lengths[i | LAYER2] = 6 * 3
blockIcons[i | LAYER3] = buffer
blockIcons.lengths[i | LAYER3] = 6 * 3
blockIcons[i | LAYER4] = buffer
blockIcons.lengths[i | LAYER4] = 6 * 3
blockIcons[i | LAYER5] = buffer
blockIcons.lengths[i | LAYER5] = 6 * 3
blockIcons[i | LAYER6] = buffer
blockIcons.lengths[i | LAYER6] = 6 * 3
blockIcons[i | LAYER7] = buffer
blockIcons.lengths[i | LAYER7] = 6 * 3
blockIcons[i | LAYER8] = buffer
blockIcons.lengths[i | LAYER8] = 6 * 3
}else if(block.cactus){
v = cactusIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | CACTUS] = buffer
blockIcons.lengths[i | CACTUS] = 6 * 3
}else{
for (let j = 11; j >= 0; j--) {
data.push(-hexagonVerts[j * 3 + 0] * scale)
data.push(hexagonVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]][(j * 2 + 0) % 8])
data.push(textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]][(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
}
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-slabIconVerts[j * 3 + 0] * scale)
data.push(slabIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | SLAB] = buffer
blockIcons.lengths[i | SLAB] = 6 * 3
data = []
v = stairIconVerts
for (let j = 23; j >= 0; j--) {
let num = floor(j / 8)
let tex = textureCoords[textureMap[block.textures[texOrder[num]]]]
let tx = tex[0]
let ty = tex[1]
data.push(-v[j * 5 + 0] * scale)
data.push(v[j * 5 + 1] * scale)
data.push(0.1666666)
data.push(tx + v[j * 5 + 2] / 16)
data.push(ty + v[j * 5 + 3] / 16)
data.push(shadows[num])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | STAIR] = buffer
blockIcons.lengths[i | STAIR] = 6 * 6
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-fenceIconVerts[j * 3 + 0] * scale)
data.push(fenceIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | FENCE] = buffer
blockIcons.lengths[i | FENCE] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-wallPostIconVerts[j * 3 + 0] * scale)
data.push(wallPostIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | WALLPOST] = buffer
blockIcons.lengths[i | WALLPOST] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-wallIconVerts[j * 3 + 0] * scale)
data.push(wallIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | WALL] = buffer
blockIcons.lengths[i | WALL] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-walluIconVerts[j * 3 + 0] * scale)
data.push(walluIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | WALLU] = buffer
blockIcons.lengths[i | WALLU] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-fencqIconVerts[j * 3 + 0] * scale)
data.push(fencqIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | FENCQ] = buffer
blockIcons.lengths[i | FENCQ] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-buttonIconVerts[j * 3 + 0] * scale)
data.push(buttonIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | BUTTON] = buffer
blockIcons.lengths[i | BUTTON] = 6 * 1
if(block.iconTexture){
block.textures = prevTexture
}
}
}
function uniformMatrix(cacheId, programObj, vrName, transpose, matrix) {
let vrLocation = glCache[cacheId]
if(vrLocation === undefined) {
vrLocation = gl.getUniformLocation(programObj, vrName)
glCache[cacheId] = vrLocation
}
gl.uniformMatrix4fv(vrLocation, transpose, matrix)
}
function vertexAttribPointer(cacheId, programObj, vrName, size, VBO) {
let vrLocation = glCache[cacheId]
if(vrLocation === undefined) {
vrLocation = gl.getAttribLocation(programObj, vrName)
glCache[cacheId] = vrLocation
}
if (vrLocation !== -1) {
gl.enableVertexAttribArray(vrLocation)
gl.bindBuffer(gl.ARRAY_BUFFER, VBO)
gl.vertexAttribPointer(vrLocation, size, gl.FLOAT, false, 0, 0)
}
}
//panorama buffer
let panoramaVertBuffer
let panoramaTexBuffer
let panoramaSize
//Generate buffers for every block face and store them
let sideEdgeBuffers
let indexBuffer
function cross(v1, v2, result) {
let x = v1.x,
y = v1.y,
z = v1.z,
x2 = v2.x,
y2 = v2.y,
z2 = v2.z
result.x = y * z2 - y2 * z
result.y = z * x2 - z2 * x
result.z = x * y2 - x2 * y
}
let matrix = new Float32Array(16); // A temperary matrix that may store random data.
let projection = new Float32Array(16)
let defaultModelView = new Float32Array([ -10,0,0,0,0,10,0,0,0,0,-10,0,0,0,0,1 ])
class Matrix {
constructor(arr) {
this.elements = new Float32Array(arr || 16)
}
translate(x, y, z) {
let a = this.elements
a[3] += a[0] * x + a[1] * y + a[2] * z
a[7] += a[4] * x + a[5] * y + a[6] * z
a[11] += a[8] * x + a[9] * y + a[10] * z
a[15] += a[12] * x + a[13] * y + a[14] * z
}
rotX(angle) {
let elems = this.elements
let c = cos(angle)
let s = sin(angle)
let t = elems[1]
elems[1] = t * c + elems[2] * s
elems[2] = t * -s + elems[2] * c
t = elems[5]
elems[5] = t * c + elems[6] * s
elems[6] = t * -s + elems[6] * c
t = elems[9]
elems[9] = t * c + elems[10] * s
elems[10] = t * -s + elems[10] * c
t = elems[13]
elems[13] = t * c + elems[14] * s
elems[14] = t * -s + elems[14] * c
}
rotY(angle) {
let c = cos(angle)
let s = sin(angle)
let elems = this.elements
let t = elems[0]
elems[0] = t * c + elems[2] * -s
elems[2] = t * s + elems[2] * c
t = elems[4]
elems[4] = t * c + elems[6] * -s
elems[6] = t * s + elems[6] * c
t = elems[8]
elems[8] = t * c + elems[10] * -s
elems[10] = t * s + elems[10] * c
t = elems[12]
elems[12] = t * c + elems[14] * -s
elems[14] = t * s + elems[14] * c
}
rotZ(angle) {
let c = cos(angle)
let s = sin(angle)
let elems = this.elements
let t = elems[0]
elems[0] = t * c + elems[1] * s
elems[1] = t * -s + elems[1] * c
t = elems[4]
elems[4] = t * c + elems[5] * s
elems[5] = t * -s + elems[5] * c
t = elems[8]
elems[8] = t * c + elems[9] * s
elems[9] = t * -s + elems[9] * c
t = elems[12]
elems[12] = t * c + elems[13] * s
elems[13] = t * -s + elems[13] * c
}
scale(x, y, z) {
let a = this.elements
a[0] *= x;
a[1] *= y;
a[2] *= z;
a[4] *= x;
a[5] *= y;
a[6] *= z;
a[8] *= x;
a[9] *= y;
a[10] *= z;
a[12] *= x;
a[13] *= y;
a[14] *= z;
}
unscale(x,y,z){
let a = this.elements
a[0] /= x;
a[1] /= y;
a[2] /= z;
a[4] /= x;
a[5] /= y;
a[6] /= z;
a[8] /= x;
a[9] /= y;
a[10] /= z;
a[12] /= x;
a[13] /= y;
a[14] /= z;
}
identity() {
let a = this.elements
a[0] = 1
a[1] = 0
a[2] = 0
a[3] = 0
a[4] = 0
a[5] = 1
a[6] = 0
a[7] = 0
a[8] = 0
a[9] = 0
a[10] = 1
a[11] = 0
a[12] = 0
a[13] = 0
a[14] = 0
a[15] = 1
}
// somebody optimize this
// you just have to expand it
mult(b) {
const a = this.elements.slice()
const out = this.elements
let e = 0
for (let row = 0; row < 4; row++) {
for (let col = 0; col < 4; col++) {
out[e++] = a[row * 4 + 0] * b[col + 0] + a[row * 4 + 1] * b[col + 4] + a[row * 4 + 2] * b[col + 8] + a[row * 4 + 3] * b[col + 12];
}
}
}
// same here
postMult(a) {
const b = this.elements.slice()
const out = this.elements
let e = 0
for (let row = 0; row < 4; row++) {
for (let col = 0; col < 4; col++) {
out[e++] = a[row * 4 + 0] * b[col + 0] + a[row * 4 + 1] * b[col + 4] + a[row * 4 + 2] * b[col + 8] + a[row * 4 + 3] * b[col + 12];
}
}
}
transpose() {
let matrix = this.elements
let temp = matrix[4]
matrix[4] = matrix[1]
matrix[1] = temp
temp = matrix[8]
matrix[8] = matrix[2]
matrix[2] = temp
temp = matrix[6]
matrix[6] = matrix[9]
matrix[9] = temp
temp = matrix[3]
matrix[3] = matrix[12]
matrix[12] = temp
temp = matrix[7]
matrix[7] = matrix[13]
matrix[13] = temp
temp = matrix[11]
matrix[11] = matrix[14]
matrix[14] = temp
}
copyArray(from) {
let to = this.elements
for (let i = 0; i < from.length; i++) {
to[i] = from[i]
}
}
copyMatrix(from) {
let to = this.elements
from = from.elements
for (let i = 0; i < from.length; i++) {
to[i] = from[i]
}
}
}
class Plane {
constructor(nx, ny, nz) {
this.set(nx, ny, nz)
}
set(nx, ny, nz) {
// Pre-computed chunk offsets to reduce branching during culling
this.dx = nx > 0 ? 16 : 0
this.dy = ny > 0
this.dz = nz > 0 ? 16 : 0
// Normal vector for the plane
this.nx = nx
this.ny = ny
this.nz = nz
}
}
let defaultTransformation = new Matrix([ -10,0,0,0,0,10,0,0,0,0,-10,0,0,0,0,1 ])
class Camera {
constructor() {
this.x = 0
this.y = 0
this.z = 0
this.rx = 0; // Pitch
this.ry = 0; // Yaw
this.rz = 0
this.currentFov = 0
this.defaultFov = settings.fov
this.targetFov = settings.fov
this.step = 0
this.lastStep = 0
this.projection = new Float32Array(5)
this.transformation = new Matrix()
this.direction = { x: 1, y: 0, z: 0 }; // Normalized direction vector
this.frustum = [] // The 5 planes of the viewing frustum (there's no far plane)
for (let i = 0; i < 5; i++) {
this.frustum.push(new Plane(1, 0, 0))
}
}
FOV(fov, time) {
if (fov === this.currentFov) return
if (!fov) {
let now = Date.now()
fov = this.currentFov + this.step * (now - this.lastStep)
this.lastStep = now
if (Math.sign(this.targetFov - this.currentFov) !== Math.sign(this.targetFov - fov)) {
fov = this.targetFov
}
}
else if (time) {
this.targetFov = fov
this.step = (fov - this.currentFov) / time
this.lastStep = Date.now()
return
} else {
this.targetFov = fov
}
const tang = Math.tan(fov * Math.PI / 360)
const scale = 1 / tang
const near = 1
const far = 1000000
this.currentFov = fov; // Store the state of the projection matrix
this.nearH = near * tang; // This is needed for frustum culling
this.projection[0] = scale / width * height
this.projection[1] = scale
this.projection[2] = -far / (far - near)
this.projection[3] = -1
this.projection[4] = -far * near / (far - near)
}
transform() {
this.transformation.copyMatrix(defaultTransformation)
this.transformation.rotZ(this.rz)
this.transformation.rotX(this.rx)
this.transformation.rotY(this.ry)
this.transformation.translate(-this.x, -this.y, -this.z)
}
resetMatrix() {
this.transformation.copyMatrix(defaultTransformation)
}
getMatrix() {
let proj = this.projection
let view = this.transformation.elements
matrix[0]  = proj[0] * view[0]
matrix[1]  = proj[1] * view[4]
matrix[2]  = proj[2] * view[8] + proj[3] * view[12]
matrix[3]  = proj[4] * view[8]
matrix[4]  = proj[0] * view[1]
matrix[5]  = proj[1] * view[5]
matrix[6]  = proj[2] * view[9] + proj[3] * view[13]
matrix[7]  = proj[4] * view[9]
matrix[8]  = proj[0] * view[2]
matrix[9]  = proj[1] * view[6]
matrix[10] = proj[2] * view[10] + proj[3] * view[14]
matrix[11] = proj[4] * view[10]
matrix[12] = proj[0] * view[3]
matrix[13] = proj[1] * view[7]
matrix[14] = proj[2] * view[11] + proj[3] * view[15]
matrix[15] = proj[4] * view[11]
return matrix
}
setDirection() {
if (this.targetFov !== this.currentFov) {
this.FOV()
}
this.direction.x = -sin(this.ry) * cos(this.rx)
this.direction.y = sin(this.rx)
this.direction.z = cos(this.ry) * cos(this.rx)
this.computeFrustum()
}
computeFrustum() {
let X = vec1
let dir = this.direction
X.x = dir.z
X.y = 0
X.z = -dir.x
X.normalize()
let Y = vec2
Y.set(dir)
Y.mult(-1)
cross(Y, X, Y)
//Near plane
this.frustum[0].set(dir.x, dir.y, dir.z)
let aux = vec3
aux.set(Y)
aux.mult(this.nearH)
aux.add(dir)
aux.normalize()
cross(aux, X, aux)
this.frustum[1].set(aux.x, aux.y, aux.z)
aux.set(Y)
aux.mult(-this.nearH)
aux.add(dir)
aux.normalize()
cross(X, aux, aux)
this.frustum[2].set(aux.x, aux.y, aux.z)
aux.set(X)
aux.mult(-this.nearH * width / height)
aux.add(dir)
aux.normalize()
cross(aux, Y, aux)
this.frustum[3].set(aux.x, aux.y, aux.z)
aux.set(X)
aux.mult(this.nearH * width / height)
aux.add(dir)
aux.normalize()
cross(Y, aux, aux)
this.frustum[4].set(aux.x, aux.y, aux.z)
}
canSee(x, y, z, maxY) {
x -= 0.5
y -= 0.5
z -= 0.5
maxY += 0.5
let px = 0, py = 0, pz = 0, plane = null
let cx = p.x, cy = p.y, cz = p.z
for (let i = 0; i < 5; i++) {
plane = this.frustum[i]
px = x + plane.dx
py = plane.dy ? maxY : y
pz = z + plane.dz
if ((px - cx) * plane.nx + (py - cy) * plane.ny + (pz - cz) * plane.nz < 0) {
return false
}
}
return true
}
}
function trans(matrix, x, y, z) {
let a = matrix
a[3] += a[0] * x + a[1] * y + a[2] * z
a[7] += a[4] * x + a[5] * y + a[6] * z
a[11] += a[8] * x + a[9] * y + a[10] * z
a[15] += a[12] * x + a[13] * y + a[14] * z
}
function rotX(matrix, angle) {
// This function is basically multiplying 2 4x4 matrices together,
// but 1 of them has a bunch of 0's and 1's in it,
// so I removed all terms that multiplied by 0, and just left off the 1's.
// mat2 = [1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1]
let elems = matrix
let c = cos(angle)
let s = sin(angle)
let t = elems[1]
elems[1] = t * c + elems[2] * s
elems[2] = t * -s + elems[2] * c
t = elems[5]
elems[5] = t * c + elems[6] * s
elems[6] = t * -s + elems[6] * c
t = elems[9]
elems[9] = t * c + elems[10] * s
elems[10] = t * -s + elems[10] * c
t = elems[13]
elems[13] = t * c + elems[14] * s
elems[14] = t * -s + elems[14] * c
}
function rotY(matrix, angle) {
//source = c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1
let c = cos(angle)
let s = sin(angle)
let elems = matrix
let t = elems[0]
elems[0] = t * c + elems[2] * -s
elems[2] = t * s + elems[2] * c
t = elems[4]
elems[4] = t * c + elems[6] * -s
elems[6] = t * s + elems[6] * c
t = elems[8]
elems[8] = t * c + elems[10] * -s
elems[10] = t * s + elems[10] * c
t = elems[12]
elems[12] = t * c + elems[14] * -s
elems[14] = t * s + elems[14] * c
}
function scale(a,x,y,z){
a[0] *= x;
a[1] *= y;
a[2] *= z;
a[4] *= x;
a[5] *= y;
a[6] *= z;
a[8] *= x;
a[9] *= y;
a[10] *= z;
a[12] *= x;
a[13] *= y;
a[14] *= z;
}
function transpose(matrix) {
let temp = matrix[4]
matrix[4] = matrix[1]
matrix[1] = temp
temp = matrix[8]
matrix[8] = matrix[2]
matrix[2] = temp
temp = matrix[6]
matrix[6] = matrix[9]
matrix[9] = temp
temp = matrix[3]
matrix[3] = matrix[12]
matrix[12] = temp
temp = matrix[7]
matrix[7] = matrix[13]
matrix[13] = temp
temp = matrix[11]
matrix[11] = matrix[14]
matrix[14] = temp
}
function matMult() {
//Multiply the projection matrix by the view matrix; this is optimized specifically for these matrices by removing terms that are always 0.
let proj = projection
let view = modelView
matrix[0] = proj[0] * view[0]
matrix[1] = proj[0] * view[1]
matrix[2] = proj[0] * view[2]
matrix[3] = proj[0] * view[3]
matrix[4] = proj[5] * view[4]
matrix[5] = proj[5] * view[5]
matrix[6] = proj[5] * view[6]
matrix[7] = proj[5] * view[7]
matrix[8] = proj[10] * view[8] + proj[11] * view[12]
matrix[9] = proj[10] * view[9] + proj[11] * view[13]
matrix[10] = proj[10] * view[10] + proj[11] * view[14]
matrix[11] = proj[10] * view[11] + proj[11] * view[15]
matrix[12] = proj[14] * view[8]
matrix[13] = proj[14] * view[9]
matrix[14] = proj[14] * view[10]
matrix[15] = proj[14] * view[11]
}
function copyArr(a, b) {
for (let i = 0; i < a.length; i++) {
b[i] = a[i]
}
}
function FOV(fov) {
let tang = Math.tan(fov * 0.5 * Math.PI / 180)
let scale = 1 / tang
let near = 1
let far = 1000000
currentFov = fov
projection[0] = scale / width * height
projection[5] = scale
projection[10] = -far / (far - near)
projection[11] = -1
projection[14] = -far * near / (far - near)
}
function initModelView(camera, x, y, z, rx, ry, sx, sy) {
if (camera) {
camera.transform()
uniformMatrix("view3d", program3D, "uView", false, camera.getMatrix())
} else {
copyArr(defaultModelView, modelView)
rotX(modelView, rx)
rotY(modelView, ry)
trans(modelView, -x, -y, -z)
if(sy){
scale(modelView,sx,sy,1)
}else{
scale(modelView, sx,sx,1)
}
matMult()
transpose(matrix)
uniformMatrix("view3d", program3D, "uView", false, matrix)
}
}
win.initModelView = initModelView
function timeString(millis) {
if (millis > 300000000000 || !millis) {
return "never"
}
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const YEAR = DAY * 365
if (millis < MINUTE) {
return "just now"
}
let years = floor(millis / YEAR)
millis -= years * YEAR
let days = floor(millis / DAY)
millis -= days * DAY
let hours = floor(millis / HOUR)
millis -= hours * HOUR
let minutes = floor(millis / MINUTE)
if (years) {
return `${years} year${years > 1 ? "s" : ""} and ${days} day${day !== 1 ? "s" : ""} ago`
}
if (days) {
return `${days} day${days > 1 ? "s" : ""} and ${hours} hour${hours !== 1 ? "s" : ""} ago`
}
if (hours) {
return `${hours} hour${hours > 1 ? "s" : ""} and ${minutes} minute${minutes !== 1 ? "s" : ""} ago`
}
return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
}
function roundBits(number) {
return ((number * 1000000 + 0.5) | 0) / 1000000
}
function rayTrace(x, y, z, shape) {
let cf, cd = 1e9; //Closest face and distance
let m; //Absolute distance to intersection point
let ix, iy, iz; //Intersection coords
let minX, minY, minZ, maxX, maxY, maxZ, min, max; //Bounds of face coordinates
let east = p.direction.x < 0
let top = p.direction.y < 0
let north = p.direction.z < 0
let verts = shape.verts
let faces = verts[0]
//Top and bottom faces
if (top) {
faces = verts[1]
}
if (p.direction.y) {
for (let face of faces) {
min = face.min
minX = min[0]
minZ = min[2]
max = face.max
maxX = max[0]
maxZ = max[2]
m = (y + face[1] - p.y) / p.direction.y
ix = m * p.direction.x + p.x
iz = m * p.direction.z + p.z
if (m > 0 && m < cd && ix >= x + minX && ix <= x + maxX && iz >= z + minZ && iz <= z + maxZ) {
cd = m; //Ray crosses bottom face
cf = top ? "top" : "bottom"
}
}
}
//West and East faces
if (east) {
faces = verts[4]
} else {
faces = verts[5]
}
if (p.direction.x) {
for (let face of faces) {
min = face.min
minY = min[1]
minZ = min[2]
max = face.max
maxY = max[1]
maxZ = max[2]
m = (x + face[0] - p.x) / p.direction.x
iy = m * p.direction.y + p.y
iz = m * p.direction.z + p.z
if (m > 0 && m < cd && iy >= y + minY && iy <= y + maxY && iz >= z + minZ && iz <= z + maxZ) {
cd = m
cf = east ? "east" : "west"
}
}
}
//South and North faces
if (north) {
faces = verts[2]
} else {
faces = verts[3]
}
if (p.direction.z) {
for (let face of faces) {
min = face.min
minX = min[0]
minY = min[1]
max = face.max
maxX = max[0]
maxY = max[1]
m = (z + face[2] - p.z) / p.direction.z
ix = m * p.direction.x + p.x
iy = m * p.direction.y + p.y
if (m > 0 && m < cd && ix >= x + minX && ix <= x + maxX && iy >= y + minY && iy <= y + maxY) {
cd = m
cf = north ? "north" : "south"
}
}
}
return [ cd, cf ]
}
let entPlayerCollided
let collidedWithMe
function entityRayTrace(x,y,z,returnIt){
entPlayerCollided = false
for(var i=0; i<world.entities.length; i++){
var ent = world.entities[i]
var ex = ent.x, ey = ent.y, ez = ent.z
var w2=ent.width/2, h2=ent.height/2, d2=ent.depth/2
if(x>ex-w2 && x<ex+w2 && y>ey-h2 && y<ey+h2 && z>ez-d2 && z<ez+d2){
if(returnIt) return ent
else return entHitbox.ent = ent
}
}
if(multiplayer){
for(var i in players){
var ent = players[i]
var ex = ent.x, ey = ent.y, ez = ent.z
var w2=ent.width/2, h2=ent.height/2, d2=ent.depth/2
if(x>ex-w2 && x<ex+w2 && y>ey-h2 && y<ey+h2 && z>ez-d2 && z<ez+d2){
if(returnIt){
entPlayerCollided = true
return ent
}else{
entHitbox.player = true
return entHitbox.ent = ent
}
}
}
}
var px = p.x, py = p.y, pz = p.z
var w2 = p.w/2, th = p.topH, bh = p.bottomH
if(x>px-p.w && x<px+p.w && y>py-bh && y<py+th && z>pz-w2 && z<pz+w2){
collidedWithMe = true
}
}
function runRayTrace(x, y, z) {
let block = world.getBlock(x, y, z)
if (block && !(blockData[block].noHitbox && !(holding && blockData[holding].allHitbox))) {
let shape = blockData[block].shape
if(shape.hitbox) shape = shape.hitbox
let rt = rayTrace(x, y, z, shape)
if (rt[1] && rt[0] < hitBox.closest) {
hitBox.closest = rt[0]
hitBox.face = rt[1]
hitBox.pos = [ x, y, z ]
hitBox.shape = shape
crack.pos = [x, y, z]
crack.shape = shape
}
}
}
function lookingAt() {
// Checks blocks in front of the player to see which one they're looking at
hitBox.pos = null
hitBox.closest = 1e9
entHitbox.ent = null
entHitbox.player = false
if (p.spectator) {
return
}
let blockState = world.getBlock(p2.x, p2.y, p2.z)
if (blockState && !(blockData[blockState].noHitbox && !(holding && blockData[holding].allHitbox))) {
hitBox.pos = [ p2.x, p2.y, p2.z ]
hitBox.closest = 0
hitBox.shape = blockData[blockState].shape
if(hitBox.shape.hitbox) hitBox.shape = hitBox.shape.hitbox
crack.pos = [p2.x, p2.y, p2.z]
crack.shape = blockData[blockState].shape
return
}
let pd = p.direction
// Target block
let tx = round(pd.x * reach + p.x)
let ty = round(pd.y * reach + p.y)
let tz = round(pd.z * reach + p.z)
let minX = p2.x
let maxX = 0
let minY = p2.y
let maxY = 0
let minZ = p2.z
let maxZ = 0
for (let i = 0; i < reach + 1; i++) {
if (i > reach) {
i = reach
}
maxX = round(p.x + pd.x * i)
maxY = round(p.y + pd.y * i)
maxZ = round(p.z + pd.z * i)
if (maxX === minX && maxY === minY && maxZ === minZ) {
continue
}
if (minX !== maxX) {
if (minY !== maxY) {
if (minZ !== maxZ) {
runRayTrace(maxX, maxY, maxZ)
}
runRayTrace(maxX, maxY, minZ)
}
if (minZ !== maxZ) {
runRayTrace(maxX, minY, maxZ)
}
runRayTrace(maxX, minY, minZ)
}
if (minY !== maxY) {
if (minZ !== maxZ) {
runRayTrace(minX, maxY, maxZ)
}
runRayTrace(minX, maxY, minZ)
}
if (minZ !== maxZ) {
runRayTrace(minX, minY, maxZ)
}
if (hitBox.pos) {
return; //The ray has collided; it can't possibly find a closer collision now
}
var ex=maxX, ey=maxY, ez=maxZ
for(var e=0; e<1; e+=0.1){
ex += pd.x*0.1, ey += pd.y*0.1, ez += pd.z*0.1
entityRayTrace(ex,ey,ez)
if(entHitbox.ent){
hitBox.pos = null
return
}
}
minZ = maxZ
minY = maxY
minX = maxX
}
}
function calcThirdPerson(){
return 4
}
let inBox = function(x, y, z, w, h, d) {
let iy = y - h/2 - p.topH
let ih = h + p.bottomH + p.topH
let ix = x - w/2 - p.w
let iw = w + p.w*2
let iz = z - d/2 - p.w
let id = d + p.w*2
return p.x > ix && p.y > iy && p.z > iz && p.x < ix + iw && p.y < iy + ih && p.z < iz + id
}
let onBox = function(x, y, z, w, h, d) {
let iy = roundBits(y - h/2 - p.topH)
let ih = roundBits(h + p.bottomH + p.topH)
let ix = roundBits(x - w/2 - p.w)
let iw = roundBits(w + p.w*2)
let iz = roundBits(z - d/2 - p.w)
let id = roundBits(d + p.w*2)
return p.x > ix && p.y > iy && p.z > iz && p.x < ix + iw && p.y <= iy + ih && p.z < iz + id
}
let takeDamage
function collided(x, y, z, vx, vy, vz, block) {
if(p.spectator) {
return false
}
let shape = blockData[block].shape
if(shape.hitbox) shape = shape.hitbox
let verts = shape.verts
let blockObj = blockData[block]
let px = roundBits(p.x - p.w - x)
let py = roundBits(p.y - p.bottomH - y)
let pz = roundBits(p.z - p.w - z)
let pxx = roundBits(p.x + p.w - x)
let pyy = roundBits(p.y + p.topH - y)
let pzz = roundBits(p.z + p.w - z)
let minX, minY, minZ, maxX, maxY, maxZ, min, max
//Top and bottom faces
let faces = verts[0]
if (vy <= 0) {
faces = verts[1]
}
if (!vx && !vz) {
for (let face of faces) {
min = face.min
minX = min[0]
minZ = min[2]
max = face.max
maxX = max[0]
maxZ = max[2]
if (face[1] > py && face[1] < pyy && minX < pxx && maxX > px && minZ < pzz && maxZ > pz) {
if (vy <= 0) {
p.onGround = true
p.y = round((face[1] + y + p.bottomH) * 10000) / 10000
return false
} else {
//if(blockObj.damage > takeDamage){
//takeDamage = blockObj.damage
//}
return true
}
}
}
return false
}
//West and East faces
if (vx < 0) {
faces = verts[4]
} else if (vx > 0) {
faces = verts[5]
}
if (vx) {
let col = false
for (let face of faces) {
min = face.min
minZ = min[2]
minY = min[1]
max = face.max
maxZ = max[2]
maxY = max[1]
if (face[0] > px && face[0] < pxx && minY < pyy && maxY > py && minZ < pzz && maxZ > pz) {
if (maxY - py > 0.5) {
p.canStepX = false
}
col = true
//if(blockObj.damage > takeDamage){
//takeDamage = blockObj.damage
//}
}
}
return col
}
//South and North faces
if (vz < 0) {
faces = verts[2]
} else if (vz > 0) {
faces = verts[3]
}
if (vz) {
let col = false
for (let face of faces) {
min = face.min
minX = min[0]
minY = min[1]
max = face.max
maxX = max[0]
maxY = max[1]
if (face[2] > pz && face[2] < pzz && minY < pyy && maxY > py && minX < pxx && maxX > px) {
if (maxY - py > 0.5) {
p.canStepZ = false
}
col = true
//if(blockObj.damage > takeDamage){
//takeDamage = blockObj.damage
//}
}
}
return col
}
}
let contacts = {
array: [],
size: 0,
add: function(x, y, z, block) {
if (this.size === this.array.length) {
this.array.push([ x, y, z, block ])
} else {
this.array[this.size][0] = x
this.array[this.size][1] = y
this.array[this.size][2] = z
this.array[this.size][3] = block
}
this.size++
},
clear: function() {
this.size = 0
},
}
let blocks = []
let resolveContactsAndUpdatePosition = function(now) {
let pminX = p2.x - 1
let pmaxX = p2.x + 1
let pminY = p2.y - 2
let pmaxY = p2.y + 1
let pminZ = p2.z - 1
let pmaxZ = p2.z + 1
let block = null
let vel = p.velocity
let blocksSize = 0
for (let x = pminX; x <= pmaxX; x++) {
for (let y = pminY; y <= pmaxY; y++) {
for (let z = pminZ; z <= pmaxZ; z++) {
let block = world.getBlock(x, y, z)
if (block && blockData[block].solid && !blockData[block].liquid) {
contacts.add(x, y, z, block)
}
if (block) {
if(blocks[blocksSize]){
blocks[blocksSize][0] = x
blocks[blocksSize][1] = y
blocks[blocksSize][2] = z
blocks[blocksSize][3] = block
}else{
blocks.push([x,y,z,block])
}
blocksSize ++
}
}
}
}
let dt = (performance.now() - p.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
p.previousX = p.x
p.previousY = p.y
p.previousZ = p.z
var ontouch
var x
var y
var z
var damageBlock
takeDamage = 0
liquid = false
powder = false
//collisions for ontouch
for (let i = 0; i < blocksSize; i++) {
block = blocks[i]
x = block[0]
y = block[1]
z = block[2]
if(block[0] === p2.x && block[2] === p2.z && blockData[block[3]].ontouch){
ontouch = blockData[block[3]].ontouch
}
if(blockData[block[3]].liquid) {
liquid = true
}
if(!blockData[block[3]].solid && blockData[block[3]].powder){
powder = true
}
let d = blockData[block[3]].damage
if(d && d>takeDamage/* && collided(x,y,z,0,0,0,block[3])*/) {
takeDamage = d
damageBlock = blockData[block[3]]
}
}
//Check collisions in the Y direction
p.onGround = false
p.canStepX = false
p.canStepZ = false
p.y += vel.y * dt
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (collided(block[0], block[1], block[2], 0, vel.y, 0, block[3])) {
p.y = p.previousY
vel.y = 0
break
}
}
if (p.y === p.previousY && !p.flying) {
p.canStepX = true
p.canStepZ = true
}
var sneakLock = false, sneakSafe = false
if (p.sneaking) {
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (onBox(block[0], block[1], block[2], 1, 1, 1)) {
sneakLock = true
break
}
}
}
//Check collisions in the X direction
p.x += vel.x * dt
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (collided(block[0], block[1], block[2], vel.x, 0, 0, block[3])) {
if (p.canStepX && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
p.x = p.previousX
vel.x = 0
break
}
if (sneakLock && onBox(block[0], block[1], block[2], 1, 1, 1)) {
sneakSafe = true
}
}
if (sneakLock && !sneakSafe) {
p.x = p.previousX
vel.x = 0
}
sneakSafe = false
//Check collisions in the Z direction
p.z += vel.z * dt
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (collided(block[0], block[1], block[2], 0, 0, vel.z, block[3])) {
if (p.canStepZ && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
p.z = p.previousZ
vel.z = 0
break
}
if (sneakLock && onBox(block[0], block[1], block[2], 1, 1, 1)) {
sneakSafe = true
}
}
if (sneakLock && !sneakSafe) {
p.z = p.previousZ
vel.z = 0
}
//Minimun height: -40
if(!survival && p.y <= -40){
p.y = -40
p.onGround = true
}
if (!p.flying) {
if (liquid){
//p.jumpSpeed = 0.135;
p.gravityStength = -0.01;
if (controlMap.jump.pressed){
p.velocity.y += 0.025
}
if (controlMap.sneak.pressed){
p.velocity.y -= 0.025
}
p.velocity.y *= 0.9
}else{
p.gravityStength = -0.032
}
if(powder){
p.velocity.y *= 0.5
if(controlMap.jump.pressed) p.velocity.y += 0.025
}
let drag = liquid ? 0.7 : (p.onGround ? 0.5 : 0.85)
if(blockData[standingOn].slide) drag = blockData[standingOn].slide
p.velocity.z += (p.velocity.z * drag - p.velocity.z) * dt
p.velocity.x += (p.velocity.x * drag - p.velocity.x) * dt
} else {
let drag = 0.9
p.velocity.z += (p.velocity.z * drag - p.velocity.z) * dt
p.velocity.x += (p.velocity.x * drag - p.velocity.x) * dt
p.velocity.y += (p.velocity.y * 0.8 - p.velocity.y) * dt
if (p.onGround && !p.spectator) {
p.flying = false
}
}
p.lastUpdate = performance.now()
contacts.clear()
lookingAt()
if(takeDamage > 0 && now - lastBlockHarm > 500 && survival){
lastBlockHarm = now
dieMessage = damageBlock.dieMessage ? damageBlock.dieMessage() : (username+" died because of "+damageBlock.name+". You should avoid it next time.")
damage(takeDamage, dieMessage)
}
if(damageBlock && damageBlock.burnPlayer){
p.burnStart = now
p.burnTimer += 0.1
}
if(ontouch){
ontouch(x, y, z)
}
}
let runGravity = function() {
if (p.flying) {
return
}
let dt = (performance.now() - p.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
if(p.onGround) {
let fall = p.lastY - p.y
p.lastY = p.y
var block = standingOn
if(fall > 3 && survival && !liquid) {
damage(Math.floor(fall-3), username+" fell from a high place. You fell "+Math.round(fall)+" blocks.", true)//Math.floor( (p.velocity.y * p.velocity.y * 8));
if(fall > 6){
playSound("damage.bigfall")
}else playSound("damage.smallfall")
}
if(p.velocity.y < -0.1 && block){
blockParticles(block, p.x,p.y-2,p.z,10)
blockSound(block, "step", p.x,p.y,p.z, 1)
}
if(blockData[block].bounciness && p.velocity.y < -0.2){
p.velocity.y *= -blockData[block].bounciness
}else{
if(controlMap.jump.pressed) {
p.velocity.y = p.jumpSpeed
p.onGround = false
if(survival){
p.foodExhaustion += p.sprinting ? 0.2 : 0.05
}
} else {
p.velocity.y = 0
}
}
} else {
p.velocity.y += p.gravityStength * dt
if(p.velocity.y < -p.maxYVelocity) {
p.velocity.y = -p.maxYVelocity
}
}
if(liquid !== lastLiquid){
lastLiquid = liquid
if(liquid){
playSound("liquid.splash")
}else{
//playSound("liquid.exit")
}
}
}
let defineWorld = function() {
let tickStart = performance.now()
world.tick()
analytics.totalTickTime += performance.now() - tickStart
let renderStart = performance.now()
p2.x = round(p.x)
p2.y = round(p.y)
p2.z = round(p.z)
p3.x = p.x
p3.y = p.y
p3.z = p.z
p3.ry = p.ry
p3.survival = survival
p3.username = username || ""
p3.time = worldTime
p3.harmEffect = harmEffect
p3.crackPos = crack.pos
p3.crack = crack.idx
p3.burning = p.burning
let prevX
let prevY
let prevZ
let prevRotX
let prevRotY
if(p.thirdPerson){
prevX = p.x
prevY = p.y
prevZ = p.z
prevRotX = p.rx
prevRotY = p.ry
/*p.rx += Math.PI
p.ry += Math.PI*/ //third person back, not front
var d = calcThirdPerson()
p.x -= p.direction.x*d
p.y -= p.direction.y*d
p.z -= p.direction.z*d
}
updateTextures()
world.render()
if(p.thirdPerson){
p.x = prevX
p.y = prevY
p.z = prevZ
p.rx = prevRotX
p.ry = prevRotY
}
analytics.totalRenderTime += performance.now() - renderStart
}
let renderPlayer = function(){
if(p.thirdPerson){
p.character.render()
}else{
//p.hand.render()
}
}
let updtPlayer = function(){
p.character.x = p.x
p.character.y = p.y-1
p.character.z = p.z
p.character.yaw = -p.ry
p.character.burning = p.burning
p.character.update()
//p.hand.update()
}
let controls = function() {
move.x = 0
move.z = 0
let dt = (performance.now() - p.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
if(controlMap.forward.pressed) move.z += p.speed
if(controlMap.backward.pressed) move.z -= p.speed
if(controlMap.left.pressed) move.x += p.speed
if(controlMap.right.pressed) move.x -= p.speed
if (p.flying) {
if(controlMap.jump.pressed) p.velocity.y += 0.06 * dt
if(controlMap.sneak.pressed) p.velocity.y -= 0.06 * dt
}
if(Key.arrowleft) p.ry -= 0.1 * dt
if(Key.arrowright) p.ry += 0.1 * dt
if(Key.arrowup) p.rx += 0.1 * dt
if(Key.arrowdown) p.rx -= 0.1 * dt
if (!p.sprinting && controlMap.sprint.pressed && !p.sneaking && controlMap.forward.pressed) {
p.FOV(settings.fov + 10, 250)
p.sprinting = true
}
if(p.sprinting && p.food > 6) {
move.x *= p.sprintSpeed
move.z *= p.sprintSpeed
if(survival)p.foodExhaustion += (p.speed * p.sprintSpeed)*0.1
}
if(p.flying) {
move.x *= p.flySpeed
move.z *= p.flySpeed
}
if (!move.x && !move.z) {
if (p.sprinting) {
p.FOV(settings.fov, 100)
}
p.sprinting = false
} else if(abs(move.x) > 0 && abs(move.z) > 0) {
move.x *= move.ang
move.z *= move.ang
}
//Update the velocity, rather than the position.
let co = cos(p.ry)
let si = sin(p.ry)
let speedFactor = blockData[standingOn].speedFactor
let friction = liquid ? 0.4 : (p.onGround ? 1 : 0.3)
if(speedFactor){
friction *= speedFactor
}
p.velocity.x += (co * move.x - si * move.z) * friction * dt
p.velocity.z += (si * move.x + co * move.z) * friction * dt
const TAU = Math.PI * 2
const PI1_2 = Math.PI / 2
while(p.ry > TAU) p.ry -= TAU
while(p.ry < 0)   p.ry += TAU
if(p.rx > PI1_2)  p.rx = PI1_2
if(p.rx < -PI1_2) p.rx = -PI1_2
p.setDirection()
}
function box2(sides, tex, shape) {
if (blockFill && !shape) {
let i = 0
for (let side in Block) {
if (sides & Block[side]) {
vertexAttribPointer("aVertex", program3D, "aVertex", 3, sideEdgeBuffers[Sides[side]])
vertexAttribPointer("aTexture", program3D, "aTexture", 2, texCoordsBuffers[textureMap[tex[i]]])
gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0)
}
i++
}
}else if(shape){
for (let i = 0; i < shape.size; i++) {
vertexAttribPointer("aVertex", program3D, "aVertex", 3, shape.buffer)
vertexAttribPointer("aTexture", program3D, "aTexture", 2, texCoordsBuffers[textureMap[tex[i]]])
gl.drawArrays(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0) //doesn't work
}
}
if (blockOutlines) {
vertexAttribPointer("aVertex", program3D, "aVertex", 3, hitBox.shape.buffer)
vertexAttribPointer("aTexture", program3D, "aTexture", 2, texCoordsBuffers[textureMap.hitbox])
for (let i = 0; i < hitBox.shape.size; i++) {
gl.drawArrays(gl.LINE_LOOP, i * 4, 4)
}
}
}
function block2(x, y, z, t, camera) {
if (camera) {
camera.transformation.translate(x, y, z)
uniformMatrix("view3d", program3D, "uView", false, camera.getMatrix())
} else {
//copyArr(modelView, matrix)
trans(modelView, x, y, z)
matMult()
trans(modelView, -x, -y, -z)
transpose(matrix)
uniformMatrix("view3d", program3D, "uView", false, matrix)
}
box2(0xff, blockData[t].textures)
}
function changeWorldBlock(t, drop) {
let pos = hitBox.pos
if(pos && pos[1] >= 0 && pos[1] < maxHeight) {
let shape = t && blockData[t].shape
if (t && shape.rotate) {
let pi = Math.PI / 4
if (p.ry <= pi) {} // North; default
else if (p.ry < 3 * pi) {
t |= WEST
} else if (p.ry < 5 * pi) {
t |= SOUTH
} else if (p.ry < 7 * pi) {
t |= EAST
}
}
if (t && shape.flip && hitBox.face !== "top" && (hitBox.face === "bottom" || (p.direction.y * hitBox.closest + p.y) % 1 < 0.5)) {
t |= FLIP
}
var prevBlock = world.getBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2])
world.setBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], t)
if(drop){
let block = prevBlock
let theDrop = blockData[prevBlock].drop
let amount = blockData[prevBlock].dropAmount
var canDrop = handBreakable.includes(blockData[prevBlock].type)
if(holding && breakTypes[blockData[prevBlock].type] && breakTypes[blockData[prevBlock].type].includes(blockData[holding].name)) canDrop = true
if(!blockData[prevBlock].type) canDrop = true
if(canDrop){
if(amount.length === 2){
amount = round(rand(amount[0], amount[1]))
}
if(holding && blockData[holding].shears && blockData[prevBlock].dropSelfWhenSheared){
if(blockData[prevBlock].shearDropAmount){
amount = blockData[prevBlock].shearDropAmount
}
}else{
if(typeof theDrop === "function"){
block = blockIds[theDrop()]
}else if(Array.isArray(theDrop)){
block = theDrop
}else if(theDrop) block = blockIds[theDrop]
else if(blockData[prevBlock].noDrop) block = 0
}
if(block && pos){
if(Array.isArray(block)){//drop multiple items
for(var b=0; b<block.length; b++){
var bId = blockIds[block[b]]
for(var i=0; i<amount; i++){
world.addEntity(new Item(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], 0, 0, 0, bId, true))
}
}
}else{
for(var i=0; i<amount; i++){
world.addEntity(new Item(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], 0, 0, 0, block, true))
}
}
}
}
}
if (t) {
p.lastPlace = Date.now()
} else {
p.lastBreak = Date.now()
if(!prevBlock) return
blockParticles(prevBlock,hitBox.pos[0],hitBox.pos[1],hitBox.pos[2],30)
blockSound(prevBlock, "dig", hitBox.pos[0], hitBox.pos[1], hitBox.pos[2])
if(blockData[prevBlock].experience) world.addEntity(new ExperienceOrb(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], blockData[prevBlock].experience))
var breakType = blockData[prevBlock].type
if(survival && holding && blockData[holding].pickaxe) {
inventory.hotbar[inventory.hotbarSlot].durability --
updateHUD = true
}
if(survival && holding && blockData[holding].sword) {
inventory.hotbar[inventory.hotbarSlot].durability -= 2
updateHUD = true
}
if(survival && holding && blockData[holding].shovel) {
inventory.hotbar[inventory.hotbarSlot].durability -= 1
updateHUD = true
}
if(survival && holding && blockData[holding].axe) {
inventory.hotbar[inventory.hotbarSlot].durability -= 1
updateHUD = true
}
if(survival && holding && blockData[holding].hoe && breakType !== "plant2") {
inventory.hotbar[inventory.hotbarSlot].durability -= 1
updateHUD = true
}
}
}
}
function replaceItem(id){
inventory.hotbar[inventory.hotbarSlot] && (inventory.hotbar[inventory.hotbarSlot].id = id)
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
function getPosition(){
let pos = hitBox.pos, x = pos[0], y = pos[1], z = pos[2]
let side = false
switch(hitBox.face) {
case "top":
y += 1
break
case "bottom":
y -= 1
break
case "south":
z -= 1
side = true
break
case "north":
z += 1
side = true
break
case "west":
x -= 1
side = true
break
case "east":
x += 1
side = true
break
}
pos[0] = x
pos[1] = y
pos[2] = z
return pos
}
function useDurability(d){
if(survival && inventory.hotbar[inventory.hotbarSlot]){
inventory.hotbar[inventory.hotbarSlot].durability -= d
updateHUD = true
}
}
function newWorldBlock() {
let pos = hitBox.pos,x,y,z, face = hitBox.face
if(pos) x = pos[0], y = pos[1], z = pos[2]
let cblock = pos ? world.getBlock(x, y, z) : 0
var pholding = holding
if(holding && blockData[holding].useAs){
var useAs = blockData[holding].useAs
if(typeof useAs === "function"){
useAs = useAs(x,y,z,cblock,face)
if(blockIds[useAs]){
holding = blockIds[useAs]
}
}else{
holding = blockIds[useAs]
}
}
if(cblock){
if(hitBox.pos){
let onclick = blockData[cblock].onclick
if(onclick && !Key.shift){
if(!onclick(x, y, z)){p.lastPlace = Date.now(); return} //if it doesn't return true
}
}
if(holding && blockData[holding].shovel){
if(cblock === blockIds.grass || cblock === blockIds.dirt || cblock === blockIds.rootedDirt || cblock === blockIds.mycelium || cblock === blockIds.podzol){
world.setBlock(x,y,z,blockIds.grass | TALLCROSS)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
return p.lastPlace = Date.now()
}
}
if(holding && cblock && blockData[holding].axe){
var name = blockData[cblock].name
name = name[0].toUpperCase() + name.substring(1)
name = "stripped"+name
if(blockIds[name]){
world.setBlock(x,y,z,blockIds[name])
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
return p.lastPlace = Date.now()
}
}
if(holding && cblock && blockData[holding].hoe){
if((blockData[cblock].name === "grass" || cblock === blockIds.dirt) && !world.getBlock(x,y+1,z)){
world.setBlock(x,y,z,blockIds.farmland)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
return p.lastPlace = Date.now()
}
if(cblock === blockIds.rootedDirt){
world.setBlock(x,y,z,blockIds.dirt)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
world.addEntity(new Item(x, y+0.5, z, 0, 0, 0, blockIds.hangingRoots, true))
return p.lastPlace = Date.now()
}
}
if(holding && cblock && blockData[holding].shears){
if(cblock === blockIds.pumpkin){
world.setBlock(x,y,z,blockIds.carvedPumpkin)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
for(var n=0; n<4; n++)world.addEntity(new Item(x, y+0.5, z, 0, 0, 0, blockIds.pumpkinSeeds, true))
return p.lastPlace = Date.now()
}
}
}
if(blockData[holding]){
if(blockData[holding].useAnywhere ? true : hitBox.pos){
let onuse = blockData[holding].onuse
if(onuse){ //items like flint and steel can't be placed but lights stuff
if(survival && blockData[holding].minusOnUse){inventory.hotbar[inventory.hotbarSlot].amount --; updateHUD = true}
if(!onuse(x,y,z, cblock, replaceItem, useDurability)){p.lastPlace = Date.now(); return}
}
}
}
var item = holding && blockData[holding].item
if(item && blockData[holding].canPlace && blockData[holding].canPlace(cblock)){
item = false
}
if(!hitBox.pos || !holding || item || blockData[holding].edible) {
return
}
let side = false
switch(hitBox.face) {
case "top":
y += 1
break
case "bottom":
y -= 1
break
case "south":
z -= 1
side = true
break
case "north":
z += 1
side = true
break
case "west":
x -= 1
side = true
break
case "east":
x += 1
side = true
break
}
var hitboxBlock = world.getBlock(x, y, z)
var blocking = blockData[holding].solid && inBox(x, y, z, 1, 1, 1)
var canPlace = (!hitboxBlock) || (blockData[hitboxBlock].liquid)
if (!blocking && canPlace) {
var block = holding
var prevBlockMode = blockMode;
var under = world.getBlock(x,y-1,z)
var onPot = !side && blockData[under] && blockData[under].pot
if(blockData[holding].potCross && onPot){
blockMode = POTCROSS
}else if(blockData[holding].crossShape){
if(onPot && blockIds[blockData[holding].name+"Pot"]){
block = blockIds[blockData[holding].name+"Pot"]
blockMode = POTCROSS
}else{
blockMode = CROSS
}
}
if(blockData[holding].sideCross){
if(side){
blockMode = CUBE
}else if(hitBox.face === "bottom"){
blockMode = SLAB
}else blockMode = CROSS
}
if(blockData[holding].tallcrossShape){
blockMode = TALLCROSS
}
if(blockData[holding].door){
blockMode = DOOR
}
if(blockData[holding].torch){
blockMode = TORCH
if(side) blockMode = SLAB
}
if(blockData[holding].lantern){
if(world.getBlock(x,y+1,z)){
blockMode = LANTERNHANG
}else{
blockMode = LANTERN
}
}
if(blockData[holding].beacon){
blockMode = BEACON
}
if(blockData[holding].cactus && blockMode !== POTCROSS){
blockMode = CACTUS
}
if(blockData[holding].pane){
blockMode = PANE
}
if(blockData[holding].portal){
blockMode = PORTAL
}
if(blockData[holding].wallFlat){
blockMode = WALLFLAT
}
if(blockData[holding].trapdoor){
if(side){
blockMode = TRAPDOOROPEN
}else{
blockMode = TRAPDOOR
}
}
if(blockData[holding].chain){
blockMode = CHAIN
}
if(blockData[holding].button){
blockMode = BUTTON
}
if(blockData[holding].pot){
blockMode = POT
}
if(blockData[holding].carpet){
blockMode = CARPET
}
if(blockData[cblock].name === "endPortalFrame" && blockData[holding].eyeOfEnder){
blockMode = SLAB
}
if(blockData[holding].name === "endRod"){
if(side){
blockMode = SLAB
}else{
blockMode = CUBE
}
}
if(side && blockIds[blockData[block].name+"SW"]){
block = blockIds[blockData[block].name+"SW"]
}
if(blockData[holding].layers){
var b = world.getBlock(pos[0],pos[1],pos[2])
let layer = 0
if((b & LAYER1) === LAYER1) layer = 1
if((b & LAYER2) === LAYER2) layer = 2
if((b & LAYER3) === LAYER3) layer = 3
if((b & LAYER4) === LAYER4) layer = 4
if((b & LAYER5) === LAYER5) layer = 5
if((b & LAYER6) === LAYER6) layer = 6
if((b & LAYER7) === LAYER7) layer = 7
if((b & LAYER8) === LAYER8) layer = 8
if(((b & blockIds.snow) === blockIds.snow) && layer > 0 && layer < 8){
x = pos[0], y = pos[1], z = pos[2]
layer ++
switch(layer){
case 2:
blockMode = LAYER2
break
case 3:
blockMode = LAYER3
break
case 4:
blockMode = LAYER4
break
case 5:
blockMode = LAYER5
break
case 6:
blockMode = LAYER6
break
case 7:
blockMode = LAYER7
break
case 8:
blockMode = LAYER8
break
}
}else{
blockMode = LAYER1
}
}
pos[0] = x
pos[1] = y
pos[2] = z
changeWorldBlock(block < isCube ? (block | blockMode) : block)
blockMode = prevBlockMode;
if(survival && inventory.hotbar[inventory.hotbarSlot]){
inventory.hotbar[inventory.hotbarSlot].amount --;
updateHUD = true
}
//play sound
blockSound(block, "place", x,y,z)
}
holding = pholding
}
function entClick(){
let ent = entHitbox.ent
if(!ent) return
var block = blockData[holding || 0]
var holdObj = inventory.hotbar[inventory.hotbarSlot]
var atime = block.attackTime
var time = (Date.now() - p.lastBreak) / 1000 * 20
var attackDamage = (block && block.attackDamage) || 0
var damage, critical
if(attackDamage){
damage = atime ? (0.2 + ((time + 0.5) / atime) ** 2 * 0.8) : 1
if(p.velocity.y < 0 && !p.onGround && !liquid && !p.flying && !p.sprinting && damage > 0.848) critical = true
damage = max(min(damage, 1), 0.2) * attackDamage
if(critical) damage *= 1.5
}else damage = 1
if(entHitbox.player){
var pd = p.direction
send({type:"hit", username:username, damage:damage, velx:pd.x/2, velz:pd.z/2}, ent.id)
}else{
if(ent.onhit){
ent.onhit(damage)
var pd = p.direction
ent.velx += pd.x / 2
ent.velz += pd.z / 2
}
}
if(block.pickaxe){
holdObj.durability -= 2
}
if(block.sword){
holdObj.durability --
}
if(block.shovel){
holdObj.durability -= 2
}
if(block.axe){
holdObj.durability -= 2
}
if(block.pickaxe || block.sword || block.shovel || block.axe){
attackCooldownStart = Date.now()
attackCooldownTime = atime
}
console.log(damage)
p.foodExhaustion += 0.1
p.lastBreak = Date.now()
}
function cracks(){
var now = Date.now()
var block = hitBox.pos ? world.getBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2]) : 0
var touchBreak = pTouch.touching && pTouch.canDig && Date.now() - pTouch.touchStart > touchMoveLimit
var breaking = ((controlMap.break.pressed && !Key.control) || touchBreak) && block && (crack.delayDone >= crack.delayBetween)
if(!arrayValues(crack.prevPos, crack.pos)){
crack.prevPos = crack.pos
crack.soundTimer = 0
crack.delayDone = 0
crack.breakStart = now
}
if(breaking){
var breakTime = blockData[block].breakTime
var breakType = blockData[block].type
if(holding && blockData[holding].shears && blockData[block].shearBreakTime){
breakTime = blockData[block].shearBreakTime
}
if(holding && (blockData[holding].pickaxe || (blockData[holding].shovel && breakType === "ground") || (blockData[holding].axe && breakType === "wood") || (blockData[holding].hoe && breakType === "plant2"))){
breakTime /= blockData[holding].mineSpeed
}
let prog = map(now, crack.breakStart,crack.breakStart+breakTime, 0,1)
crack.idx = floor(prog * crack.length)
crack.tex = crack[crack.idx]
pTouch.digProg = prog
crack.soundTimer ++
if(crack.soundTimer > 15){
crack.soundTimer -= 15
blockSound(block, "breaking", hitBox.pos[0], hitBox.pos[1], hitBox.pos[2])
}
if(crack.idx >= crack.length){
changeWorldBlock(0, true)
p.foodExhaustion += 0.005
}
}else{
crack.idx = -1
crack.delayDone ++
crack.breakStart = now
pTouch.digProg = 0
}
if(!controlMap.break.pressed){
crack.delayDone = 0
}
}
// Save the coords for a small sphere used to carve out caves
let sphere;
{
let blocks = []
let radius = 3.5
let radsq = radius * radius
for (let i = -radius; i <= radius; i++) {
for (let j = -radius; j <= radius; j++) {
for (let k = -radius; k <= radius; k++) {
if (i*i + j*j + k*k < radsq) {
blocks.push(i|0, j|0, k|0)
}
}
}
}
sphere = new Int8Array(blocks)
}
function isCave(x, y, z) {
// Generate a 3D rigid multifractal noise shell.
// Then generate another one with different coordinates.
// Overlay them on top of each other, and the overlapping parts should form a cave-like structure.
// This is extremely slow, and requires generating 2 noise values for every single block in the world.
// TODO: replace with a crawler system of some sort, that will never rely on a head position in un-generated chunks.
let smooth = 0.02
let caveSize = 0.0055
let cave1 = abs(0.5 - caveNoise(x * smooth, y * smooth, z * smooth)) < caveSize
let cave2 = abs(0.5 - caveNoise(y * smooth, z * smooth, x * smooth)) < caveSize
return (cave1 && cave2)
}
function carveSphere(x, y, z) {
if (y > 3) {
for (let i = 0; i < sphere.length; i += 3) {
world.setBlock(x + sphere[i], y + sphere[i + 1], z + sphere[i + 2], blockIds.air, true)
}
}
}
let renderedChunks = 0
function getBlock(x, y, z, blocks) {
return blocks[((x >> 4) + 1) * 9 + ((y >> 4) + 1) * 3 + (z >> 4) + 1][((x & 15) << 8) + ((y & 15) << 4) + (z & 15)]
}
/**
* Returns a 1 if the face is exposed and should be drawn, or a 0 if the face is hidden
* 
* @param {number} x - The X coordinate of the block that may be covering a face
* @param {number} y - The Y coordinate of the block that may be covering a face
* @param {number} z - The Z coordinate of the block that may be covering a face
* @param {Collection} blocks - Some collection of blocks that can return the block at (x, y, z)
* @param {number} type - The blockstate of the block that's being considered for face culling
* @param {function} func - The function that can be called to return a block from the blocks collection
*/
function hideFace(x, y, z, blocks, type, func, sourceDir, dir, section) {
let block = func.call(world, x, y, z, blocks)
if (!block) {
return 1
}
let data = blockData[block]
let sourceData = blockData[type]
let sourceRange = 3
let hiderRange = 3
if (func !== getBlock || screen === "loading") {
// getBlock is only used during the optimize phase of worldGen
sourceRange = sourceData.shape.cull[sourceDir]
hiderRange = data.shape.cull[dir]
}
if ((sourceRange & hiderRange) !== sourceRange || sourceRange === 0 || block !== type && data.transparent || data.transparent && data.shadow) {
return 1
}
return 0
}
let getShadows = {
shade: [ 1, 0.85, 0.7, 0.6, 0.3 ],
ret: [],
blocks: [],
top: function(x, y, z, block) { // Actually the bottom... How did these get flipped?
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x, y-1, z-1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y-1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y-1, z, block)].shadow
blocks[4] = blockData[getBlock(x, y-1, z, block)].shadow
blocks[5] = blockData[getBlock(x+1, y-1, z, block)].shadow
blocks[6] = blockData[getBlock(x-1, y-1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x, y-1, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y-1, z+1, block)].shadow
ret[0] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.75
ret[1] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.75
ret[2] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.75
ret[3] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.75
return ret
},
bottom: function(x, y, z, block) { // Actually the top
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y+1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x, y+1, z-1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y+1, z, block)].shadow
blocks[4] = blockData[getBlock(x, y+1, z, block)].shadow
blocks[5] = blockData[getBlock(x+1, y+1, z, block)].shadow
blocks[6] = blockData[getBlock(x-1, y+1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x, y+1, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]
ret[2] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]
ret[3] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]
return ret
},
north: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z+1, block)].shadow
blocks[1] = blockData[getBlock(x, y-1, z+1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y-1, z+1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y, z+1, block)].shadow
blocks[4] = blockData[getBlock(x, y, z+1, block)].shadow
blocks[5] = blockData[getBlock(x+1, y, z+1, block)].shadow
blocks[6] = blockData[getBlock(x-1, y+1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x, y+1, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.95
ret[1] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.95
ret[2] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.95
ret[3] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.95
return ret
},
south: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x-1, y, z-1, block)].shadow
blocks[2] = blockData[getBlock(x-1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x, y-1, z-1, block)].shadow
blocks[4] = blockData[getBlock(x, y, z-1, block)].shadow
blocks[5] = blockData[getBlock(x, y+1, z-1, block)].shadow
blocks[6] = blockData[getBlock(x+1, y-1, z-1, block)].shadow
blocks[7] = blockData[getBlock(x+1, y, z-1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z-1, block)].shadow
ret[0] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.95
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.95
ret[2] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.95
ret[3] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.95
return ret
},
east: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x+1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x+1, y, z-1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x+1, y-1, z, block)].shadow
blocks[4] = blockData[getBlock(x+1, y, z, block)].shadow
blocks[5] = blockData[getBlock(x+1, y+1, z, block)].shadow
blocks[6] = blockData[getBlock(x+1, y-1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x+1, y, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.8
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.8
ret[2] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.8
ret[3] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.8
return ret
},
west: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x-1, y, z-1, block)].shadow
blocks[2] = blockData[getBlock(x-1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y-1, z, block)].shadow
blocks[4] = blockData[getBlock(x-1, y, z, block)].shadow
blocks[5] = blockData[getBlock(x-1, y+1, z, block)].shadow
blocks[6] = blockData[getBlock(x-1, y-1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x-1, y, z+1, block)].shadow
blocks[8] = blockData[getBlock(x-1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[7] + blocks[8] + blocks[4] + blocks[5]]*0.8
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[2] + blocks[1]]*0.8
ret[2] = this.shade[blocks[4] + blocks[3] + blocks[1] + blocks[0]]*0.8
ret[3] = this.shade[blocks[6] + blocks[7] + blocks[3] + blocks[4]]*0.8
return ret
},
}
function average(l, a, b, c, d) {
a = l[a]
b = l[b]
c = l[c]
d = l[d]
let count = 1
let zero = 0
let total = a
if (b && abs(a-b) <= 2) {
total += b
count++
} else zero++
if (c && abs(a-c) <= 2) {
total += c
count++
} else zero++
if (d && abs(a-d) <= 2) {
total += d
count++
} else zero++
let mx = max(a, b, c, d)
if (mx > 2) {
return total / (count * 15)
}
if (mx > 1) {
return zero ? total / (count * 15 + 15) : total / (count * 15)
}
return (total) / 60
}
let getLight = {
blocks: [],
top: function(x, y, z, block, ret, blockLight = 0, bright) { // Actually the bottom... How did these get flipped?
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
if(bright){
ret[0] = ret[1] = ret[2] = ret[3] = 1
}else{
ret[0] = average(blocks, 4, 0, 1, 3)
ret[1] = average(blocks, 4, 1, 2, 5)
ret[2] = average(blocks, 4, 5, 7, 8)
ret[3] = average(blocks, 4, 3, 6, 7)
}
// debugger
return ret
},
bottom: function(x, y, z, block, ret, blockLight = 0) { // Actually the top
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 3, 6, 7)
ret[1] = average(blocks, 4, 5, 7, 8)
ret[2] = average(blocks, 4, 1, 2, 5)
ret[3] = average(blocks, 4, 0, 1, 3)
return ret
},
north: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 5, 7, 8)
ret[1] = average(blocks, 4, 3, 6, 7)
ret[2] = average(blocks, 4, 0, 1, 3)
ret[3] = average(blocks, 4, 1, 2, 5)
return ret
},
south: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x-1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x-1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x+1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x+1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 1, 2, 5)
ret[1] = average(blocks, 4, 5, 7, 8)
ret[2] = average(blocks, 4, 3, 6, 7)
ret[3] = average(blocks, 4, 0, 1, 3)
return ret
},
east: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x+1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x+1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x+1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x+1, y, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x+1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x+1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 1, 2, 5)
ret[1] = average(blocks, 4, 5, 7, 8)
ret[2] = average(blocks, 4, 3, 6, 7)
ret[3] = average(blocks, 4, 0, 1, 3)
return ret
},
west: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x-1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x-1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x-1, y, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x-1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x-1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x-1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 5, 7, 8)
ret[1] = average(blocks, 4, 1, 2, 5)
ret[2] = average(blocks, 4, 0, 1, 3)
ret[3] = average(blocks, 4, 3, 6, 7)
return ret
},
}
/*
function interpolateShadows(shadows, x, y) {
let sx = (shadows[1] - shadows[0]) * x + shadows[0]
let sx2 = (shadows[3] - shadows[2]) * x + shadows[2]
return (sx2 - sx) * y + sx
}
*/
class Generator {
constructor() {
this.seedSet = false;
this.seed = 0;
this.size = 600;
this.diagonalNeighbors = true; //true if the corners are also adjacent
this.grid = [];
this.vertex = [];
this.river = [];
this.precip = [];
this.biome = [];
this.biomeBlend = [];
this.highestPoint = [0,0];
this.updates = [];
this.stage = 0;
this.changes = 0;
this.rivers = 0;
this.h = 0;
this.X = 0;
}
GetVertex(x, y) {
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 0;}
return this.vertex[x+y*this.size];
}
GetHeight(x, y) {
x = (x+this.size/2)*0.5; y = (y+this.size/2)*0.5;
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 5;}
return Math.round(
(this.GetVertex(Math.floor(x), Math.floor(y))+
this.GetVertex(Math.floor(x+0.5), Math.floor(y))+
this.GetVertex(Math.floor(x), Math.floor(y+0.5))+
this.GetVertex(Math.floor(x+0.5), Math.floor(y+0.5)))*0.5+5);
};
GetWater(x, y) {
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 1;}
if (this.GetBiome(x,y) === -15099421 || this.GetBiome(x,y) === -16479791) {return 1}
return Math.sqrt(this.river[x+y*this.size]);
}
GetWaterDepth(x, y) {
x = (x+this.size/2)*0.5; y = (y+this.size/2)*0.5;
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 1;}
var w = 0;
for (let x2 = 0; x2 < 1; x2+=0.5) {
for (let y2 = 0; y2 < 1; y2+=0.5) {
w += this.GetWater(Math.floor(x+x2),Math.floor(y+y2));
}
}
w = w/4.0;
if (w > 0.25) {
return 1;
}   else {
return 0;
}
}
GetBiome(x, y) {
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return -16479791;}
return this.biome[x+y*this.size];
}
GetBiomeType(x, y) {
x = (x+this.size/2)*0.5; y = (y+this.size/2)*0.5;
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 1;}
return this.GetBiome(Math.floor(x),Math.floor(y));
}
GetNeighbors(x, y) {
var n = [];
if (x > 0) {
n.push({x:x-1, y:y});
if (this.diagonalNeighbors) {
if (y > 0) {
n.push({x:x-1, y:y-1});
}
if (y < this.size-1) {
n.push({x:x-1, y:y+1});
}}
}
if (x < this.size-1) {
n.push({x:x+1, y:y});
if (this.diagonalNeighbors) {
if (y > 0) {
n.push({x:x+1, y:y-1});
}
if (y < this.size-1) {
n.push({x:x+1, y:y+1});
}
}
}
if (y > 0) {
n.push({x:x, y:y-1});
}
if (y < this.size-1) {
n.push({x:x, y:y+1});
}
return n;
}
GetDown(x, y) {
var n = this.GetNeighbors(x, y);
var l = this.size;
var ld = [];
for (var i in n) {
if (this.vertex[n[i].x + n[i].y*this.size] <= l) {
if (this.vertex[n[i].x + n[i].y*this.size] === l) {
ld.push(n[i]);
}
l = this.vertex[n[i].x + n[i].y*this.size];
ld = [n[i]];
}
}
if (l <= this.vertex[x + y*this.size]) {
return ld[Math.floor(random(ld.length))];
}
return undefined;
}
SetSeed(seed) {
this.seed = seed;
this.seedSet = true;
randomSeed(hash(seed, 2123155232) * 210000000)
}
Generate(start) {
var end = start+16;
var nS = 0.021;
function sq(n) {return n*n}
function color(r, g, b, a) {
a = (a === undefined ? 255 : a);
g = (g === undefined ? r : g);
b = (b === undefined ? g : b);
if (a > 127) {a = -256+a;}
return b+g*256+r*65536+a*16777216;
}
if (this.stage === 0) { //landmass
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
this.grid[x +y*this.size] = 0;
this.vertex[x + y*this.size] = -1;
this.precip[x + y*this.size] = -1;
this.river[x + y*this.size] = 0;
var d = this.size/2-Math.sqrt(sq(x-this.size/2)+sq(y-this.size/2));
var islandMask = Math.sqrt(sq(this.size/2)-sq(d-this.size/2))*2/this.size;
var v = noise(x*nS, y*nS, this.seed);
if (v*islandMask > 0.3) {
this.grid[x+y*this.size] = 1;
}
}
this.X++;
}
if (this.X === this.size) {
this.updates.push({type:"ocean", x:0, y:0});
}
}   else if (this.stage === 1) {    //Oceans
while (this.updates.length > 0 && win.performance.now() < end) {
var u = this.updates.shift();
if (this.grid[u.x+u.y*this.size] === 0) {
this.grid[u.x+u.y*this.size] = 2;
var n = this.GetNeighbors(u.x, u.y);
for (var i = 0; i < n.length; i++) {
if (this.grid[n[i].x+n[i].y*this.size] === 0) {
this.updates.push({type:"ocean",x:n[i].x,y:n[i].y});
}
}
}
}
if (this.updates.length === 0) {
this.X = this.size;
}
}   else if (this.stage === 2) {    //altitude
if (this.h === -1) {this.h = 0;}
var doingLake = false;
var I = 0;
while (win.performance.now() < end && this.updates.length > 0 && I < this.updates.length) {
if (this.updates[I].type === "lake") {
var u = this.updates.splice(I, 1)[0];
if (this.grid[u.x + u.y*this.size] === 0 && this.vertex[u.x+u.y*this.size] === -1) {
this.vertex[u.x + u.y*this.size] = u.a;
var n = this.GetNeighbors(u.x, u.y);
for (var i in n) {
if (this.grid[n[i].x+n[i].y*this.size] === 0 && this.vertex[n[i].x + n[i].y*this.size] === -1) {
this.updates.push({type:"lake",x:n[i].x,y:n[i].y,a:u.a});
}
}
}
I--;
}
I++;
}
while (this.X < this.size && win.performance.now() < end && !doingLake) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
if (this.vertex[x+y*this.size] === -1) {
if (this.grid[x+y*this.size] === 2) {
this.vertex[x+y*this.size] = this.h;
this.changes++;
}   else if (this.h > 0) {
var n = this.GetNeighbors(x, y);
var l = this.size;
var ld;
for (var i in n) {
var v = this.vertex[n[i].x + n[i].y*this.size];
if (v < l && v !== -1) {
l = v;
ld = n[i];
}
}
if (l !== this.size && l <= this.h) {
if (this.grid[x+y*this.size] === 0) {
this.updates.push({type:"river",x:ld.x,y:ld.y});
this.updates.push({type:"lake",x:x,y:y,a:l});
}   else {
this.vertex[x+y*this.size] = l+1+(random() > 0.5 ? 1 : 0);
}
this.changes++;
}
}
}
}
this.X++;
}
if (this.X === this.size && this.h < this.size/3) {
if (this.changes === 0) {
this.h++;
}
this.X = 0;
this.changes = 0;
}
}   else if (this.stage === 3) {    //altitude readjustment
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
this.vertex[x+y*this.size] = (Math.pow(20, this.vertex[x+y*this.size]/this.size*3)-1)/(20-1)*this.size/3;
if (this.vertex[x+y*this.size] > this.vertex[this.highestPoint[0]+this.highestPoint[1]*this.size]) {
this.highestPoint[0] = x;
this.highestPoint[1] = y;
}
}
this.X++;
}
}   else if (this.stage === 4) {    //rivers
if (this.rivers === 0) {
var x, y;
for (var i = 0; i < 200 && this.rivers < 100; i++) {
x = Math.floor(random(this.size));
y = Math.floor(random(this.size));
if (this.grid[x+y*this.size] === 1) {
this.updates.push({type:"river",x:x,y:y});
this.rivers++;
}
}
}   else {
if (this.updates.length === 0) {
this.X = this.size;
}
}
while(this.updates.length > 0 && win.performance.now() < end) {
var u = this.updates[0];
if (this.grid[u.x+u.y*this.size] === 1) {
this.river[u.x+u.y*this.size]++;
var d = this.GetDown(u.x, u.y);
if (d === undefined) {
this.updates.shift();
}   else {
this.updates[0].x = d.x; this.updates[0].y = d.y;
}
}   else {
this.updates.shift();
}
}
}   else if (this.stage === 5) {    //precipitation
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
if (this.precip[x + y*this.size] === -1) {
if (this.h === -1) {
if (this.grid[x + y*this.size] === 2) {
this.precip[x + y*this.size] = 5;
this.changes++;
}
}   else {
if (this.h <= 8) {
if (this.grid[x + y*this.size] === 0 || this.river[x+y*this.size] > 0) {
this.precip[x + y*this.size] = 8;
this.changes++;
}
}
var n = this.GetNeighbors(x, y);
var h = -1;
for (var i in n) {
if (this.precip[n[i].x + n[i].y*this.size] > h) {
h = this.precip[n[i].x + n[i].y*this.size];
}
}
if (h > -1 && h >= this.h) {
this.precip[x+y*this.size] = Math.max(h - (random() < 0.5 ? 0.66 : 0.33), 0);
this.changes++;
}
}
}
}
this.X++;
}
if (this.X === this.size) {
this.X = 0;
if (this.h === -1) {
this.h = 10;
}   else {
if (this.changes === 0) {
this.h--;
}
this.changes = 0;
if (this.h < 0) {
this.X = this.size;
}
}
}
}   else if (this.stage === 6) {    //readjust precipitation
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
this.precip[x+y*this.size] = Math.floor(this.precip[x+y*this.size]/10*6);
}
this.X++;
}
}   else if (this.stage === 7) {    //temperature
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
}
this.X++;
}
}   else if (this.stage === 8) {    //biomes
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
var c;
var h = Math.floor(this.vertex[x+y*this.size]/this.size*6*5);
switch (this.grid[x+y*this.size]) {
case 0: if (h > 2) {
c = color(157, 194, 201);
}   else {
c = color(25, 153, 227);
}   break;
case 1: if (this.river[x+y*this.size] > 0) {
if (h > 2) {
c = color(157, 194, 201);
}   else {
c = color(25, 153, 227);
}
}   else {
switch (h) {
case 0: switch (this.precip[x+y*this.size]) {
case 5: case 4: c = color(10, 133, 72); break;
case 3: case 2: c = color(10, 133, 23); break;
case 1: c = color(179, 232, 35); break;
case 0: c = color(209, 166, 58); break;
} break;
case 1: switch (this.precip[x+y*this.size]) {
case 5: c = color(14, 156, 85); break;
case 4: case 3: c = color(72, 133, 10); break;
case 2: case 1: c = color(179, 232, 35); break;
case 0: c = color(207, 195, 58); break;
} break;
case 2: switch (this.precip[x+y*this.size]) {
case 5: case 4: c = color(121, 191, 95); break;
case 3: case 2: c = color(155, 161, 135); break;
case 1: case 0: c = color(207, 195, 58); break;
} break;
case 3: case 4: switch (this.precip[x+y*this.size]) {
case 5: case 4: case 3: c = color(255); break;
case 2: c = color(149, 189, 94); break;
case 1: c = color(180); break;
case 0: c = color(128);
} break;
}
}
break;
case 2: c = color(4, 137, 209); break;
}
this.biome[x+y*this.size] = c;
}
this.X++;
}
}   else if (this.stage === 9) {    //add lava
let ph = this.vertex[this.highestPoint[0] + this.highestPoint[1]*this.size]-5;
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
if (this.vertex[x + y*this.size] > ph) {
this.vertex[x + y*this.size] = ph-2;
this.biome[x + y*this.size] = -65536;
}
}
this.X++;
}
}
if (this.X === this.size) {
console.log(this.stage)
this.X = 0;
this.h = -1;
this.stage++;
}
}
}
class Section {
constructor(x, y, z, size, chunk) {
this.x = x
this.y = y
this.z = z
this.size = size
this.arraySize = size * size * size
this.blocks = new Int32Array(this.arraySize)
this.light = new Uint8Array(this.arraySize)
this.tags = new Array(this.arraySize) //tags are like nbt in minecraft
this.renderData = []
this.renderLength = 0
this.faces = 0
this.hasVisibleBlocks = false
this.chunk = chunk
this.edited = false
this.caves = !caves
this.pallete = [0]
this.palleteMap = {"0": 0}
this.palleteSize = 0
}
getBlock(x, y, z) {
let s = this.size
return this.blocks[x * s * s + y * s + z]
}
setBlock(x, y, z, blockId) {
let s = this.size
this.blocks[x * s * s + y * s + z] = blockId
}
deleteBlock(x, y, z) {
let s = this.size
this.blocks[x * s * s + y * s + z] = 0
}
optimize() {
let visible = false
let pos = 0
let xx = this.x
let yy = this.y
let zz = this.z
let blockState = 0
let palleteIndex = 0
let index = 0
let s = this.size
let blocks = this.blocks
this.hasVisibleBlocks = false
this.renderLength = 0
let localBlocks = world.getAdjacentSubchunks(xx, yy, zz)
//Check all the blocks in the subchunk to see if they're visible.
for (let i = 0; i < s; i++) {
for (let j = 0; j < s; j++) {
for (let k = 0; k < s; k++, index++) {
blockState = blocks[index]
if (this.palleteMap[blockState] === undefined) {
this.palleteMap[blockState] = this.pallete.length
palleteIndex = this.pallete.length
this.pallete.push(blockState)
} else {
palleteIndex = this.palleteMap[blockState]
}
visible = blockState && (hideFace(i-1, j, k, localBlocks, blockState, getBlock, "west", "east")
| hideFace(i+1, j, k, localBlocks, blockState, getBlock, "east", "west",this) << 1
| hideFace(i, j-1, k, localBlocks, blockState, getBlock, "bottom", "top",this) << 2
| hideFace(i, j+1, k, localBlocks, blockState, getBlock, "top", "bottom",this) << 3
| hideFace(i, j, k-1, localBlocks, blockState, getBlock, "south", "north",this) << 4
| hideFace(i, j, k+1, localBlocks, blockState, getBlock, "north", "south",this) << 5)
if (visible) {
pos = (i | j << 4 | k << 8) << 19
this.renderData[this.renderLength++] = 1 << 31 | pos | visible << 13 | palleteIndex
this.hasVisibleBlocks = true
}
}
}
}
}
updateBlock(x, y, z, world, leaveMe) {
if (!world.meshQueue.includes(this.chunk)) {
world.meshQueue.push(this.chunk)
}
let i = x
let j = y
let k = z
let s = this.size
x += this.x
y += this.y
z += this.z
let blockState = this.blocks[i * s * s + j * s + k]
let visible = blockState && (hideFace(x-1, y, z, 0, blockState, world.getBlock, "west", "east")
| hideFace(x+1, y, z, 0, blockState, world.getBlock, "east", "west") << 1
| hideFace(x, y-1, z, 0, blockState, world.getBlock, "bottom", "top") << 2
| hideFace(x, y+1, z, 0, blockState, world.getBlock, "top", "bottom") << 3
| hideFace(x, y, z-1, 0, blockState, world.getBlock, "south", "north") << 4
| hideFace(x, y, z+1, 0, blockState, world.getBlock, "north", "south") << 5)
let pos = (i | j << 4 | k << 8) << 19
let index = -1
// Find index of current block in this.renderData
for (let i = 0; i < this.renderLength; i++) {
if ((this.renderData[i] & 0x7ff80000) === pos) {
index = i
break
}
}
// Update pallete
if (this.palleteMap[blockState] === undefined) {
this.palleteMap[blockState] = this.pallete.length
this.pallete.push(blockState)
}
if (index < 0 && !visible) {
// Wasn't visible before, isn't visible after.
return
}
if (!visible) {
// Was visible before, isn't visible after.
this.renderData.splice(index, 1)
this.renderLength--
this.hasVisibleBlocks = !!this.renderLength
return
}
if (visible && index < 0) {
// Wasn't visible before, is visible after.
index = this.renderLength++
this.hasVisibleBlocks = true
}
this.renderData[index] = 1 << 31 | pos | visible << 13 | this.palleteMap[blockState]
var block = world.getBlock(x,y,z)
if(!leaveMe && blockData[block]) blockData[block].onupdate(x,y,z,block);
}
genMesh(barray, index) {
if (!this.renderLength) {
return index
}
let length = this.renderLength
let rData = this.renderData
let x = 0, y = 0, z = 0, loc = 0, data = 0,
sides = 0, tex = null, x2 = 0, y2 = 0, z2 = 0,
verts = null, texVerts = null, texShapeVerts = null,
tx = 0, ty = 0
let wx = this.x, wy = this.y, wz = this.z
let blocks = world.getAdjacentSubchunks(wx, wy, wz)
let lightChunks = world.getAdjacentSubchunks(wx, wy, wz, true)
let block = null
let shadows = null, slights = [0, 0, 0, 0], blights = [0, 0, 0, 0]
let blockSides = Object.keys(Block)
let side = ""
let shapeVerts = null
let shapeTexVerts = null
let pallete = this.pallete
// let intShad = interpolateShadows
for (let i = 0; i < length; i++) {
data = rData[i]
block = blockData[pallete[data & 0x1fff]]
tex = block.textures
sides = data >> 13 & 0x3f
loc = data >> 19 & 0xfff
x = loc & 15
y = loc >> 4 & 15
z = loc >> 8 & 15
x2 = x + this.x
y2 = y + this.y
z2 = z + this.z
shapeVerts = block.shape.verts
shapeTexVerts = block.shape.texVerts
let texNum = 0
for (let n = 0; n < 6; n++) {
side = blockSides[n]
if (sides & Block[side]) {
shadows = getShadows[side](x, y, z, blocks)
slights = getLight[side](x, y, z, lightChunks, slights, 0)
blights = getLight[side](x, y, z, lightChunks, blights, 1) //top is actually bottom
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
verts = directionalFaces[facei]
texVerts = textureCoords[textureMap[tex[texNum]]]
tx = texVerts[0]
ty = texVerts[1]
texShapeVerts = shapeTexVerts[n][facei]
barray[index] = verts[0] + x2
barray[index+1] = verts[1] + y2
barray[index+2] = verts[2] + z2
barray[index+3] = tx + texShapeVerts[0]
barray[index+4] = ty + texShapeVerts[1]
barray[index+5] = shadows[0]
barray[index+6] = slights[0]
barray[index+7] = blights[0]
barray[index+8] = verts[3] + x2
barray[index+9] = verts[4] + y2
barray[index+10] = verts[5] + z2
barray[index+11] = tx + texShapeVerts[2]
barray[index+12] = ty + texShapeVerts[3]
barray[index+13] = shadows[1]
barray[index+14] = slights[1]
barray[index+15] = blights[1]
barray[index+16] = verts[6] + x2
barray[index+17] = verts[7] + y2
barray[index+18] = verts[8] + z2
barray[index+19] = tx + texShapeVerts[4]
barray[index+20] = ty + texShapeVerts[5]
barray[index+21] = shadows[2]
barray[index+22] = slights[2]
barray[index+23] = blights[2]
barray[index+24] = verts[9] + x2
barray[index+25] = verts[10] + y2
barray[index+26] = verts[11] + z2
barray[index+27] = tx + texShapeVerts[6]
barray[index+28] = ty + texShapeVerts[7]
barray[index+29] = shadows[3]
barray[index+30] = slights[3]
barray[index+31] = blights[3]
index += 32
}
}
texNum++
}
}
return index
}
carveCaves() {
let wx = this.x + 16, wz = this.z + 16, wy = this.y + 16
for (let x = this.x, xx = 0; x < wx; x++, xx++) {
for (let z = this.z, zz = 0; z < wz; z++, zz++) {
wy = this.chunk.tops[zz * 16 + xx]
for (let y = this.y; y < wy; y++) {
if (isCave(x, y, z)) {
carveSphere(x, y, z)
}
}
}
}
this.caves = true
}
tick() {
for (let i = 0; i < 3; i++) {
let rnd = Math.random() * this.blocks.length | 0
if ((this.blocks[rnd]) === blockIds.grass) {
// Spread grass
let x = (rnd >> 8) + this.x
let y = (rnd >> 4 & 15) + this.y
let z = (rnd & 15) + this.z
if (!blockData[world.getBlock(x, y + 1, z)].transparent) {
world.setBlock(x, y, z, blockIds.dirt, false)
return
}
let rnd2 = Math.random() * 27 | 0
let x2 = rnd2 % 3 - 1
rnd2 = (rnd2 - x2 - 1) / 3
let y2 = rnd2 % 3 - 1
rnd2 = (rnd2 - y2 - 1) / 3
z += rnd2 - 1
x += x2
y += y2
if (world.getBlock(x, y, z) === blockIds.dirt && world.getBlock(x, y + 1, z) === blockIds.air) {
world.setBlock(x, y, z, blockIds.grass, false)
}
} else if (this.blocks[rnd] === (blockIds.oakSapling | CROSS)){
let i = (rnd >> 8) + this.x
let j = (rnd >> 4 & 15) + this.y
let k = (rnd & 15) + this.z
blockData[blockIds.oakSapling].grow(i,j,k)
}else if (this.blocks[rnd] === (blockIds.birchSapling | CROSS)){
let i = (rnd >> 8) + this.x
let j = (rnd >> 4 & 15) + this.y
let k = (rnd & 15) + this.z
blockData[blockIds.birchSapling].grow(i,j,k)
}
}
}
getLight(x, y, z, block = 0) {
let s = this.size
let i = x * s * s + y * s + z
return (this.light[i] & 15 << (block * 4)) >> (block * 4)
}
setLight(x, y, z, level, block = 0) {
let s = this.size
let i = x * s * s + y * s + z
this.light[i] = level << (block * 4) | (this.light[i] & 15 << (!block * 4))
}
getTags(x, y, z){
let s = this.size
return this.tags[x * s * s + y * s + z]
}
getTagByName(x, y, z, n){
var t = this.getTags(x,y,z)
return t && t[n]
}
setTags(x,y,z, data){
let s = this.size
this.tags[x * s * s + y * s + z] = data
}
setTagByName(x, y, z, n, data){
let s = this.size
var i = x * s * s + y * s + z
var t = this.tags[i]
if(!t){
t = this.tags[i] = {}
}
t[n] = data
}
}
let emptySection = new Section(0, 0, 0, 16)
let fullSection = new Section(0, 0, 0, 16)
fullSection.blocks.fill(blockIds.bedrock)
emptySection.light.fill(15)
class Chunk {
constructor(x, z, type, world) {
this.x = x
this.z = z
this.maxY = 0
this.minY = 255
this.sections = []
this.cleanSections = []
this.tops = new Uint8Array(16 * 16) // Store the heighest block at every (x,z) coordinate
this.ceils = new Uint8Array(16 * 16) //for nether
this.optimized = false
this.generated = false; // Terrain
this.populated = superflat === true // Trees and ores
this.lit = false
this.lazy = false
this.edited = false
this.loaded = false
this.type = type || world.type
// vao for this chunk
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
this.caves = !caves
this.doubleRender = false
this.world = world
}
getBlock(x, y, z) {
let s = y >> 4
return this.sections.length > s ? this.sections[s].getBlock(x, y & 15, z) : 0
}
setBlock(x, y, z, blockID, user) {
if (!this.sections[y >> 4]) {
do {
this.sections.push(new Section(this.x, this.sections.length * 16, this.z, 16, this))
} while (!this.sections[y >> 4])
}
if (user && !this.sections[y >> 4].edited) {
this.cleanSections[y >> 4] = this.sections[y >> 4].blocks.slice()
this.sections[y >> 4].edited = true
this.edited = true
}
if (blockData[blockID].semiTrans) {
this.doubleRender = true
if (!this.world.doubleRenderChunks.includes(this)) {
this.world.doubleRenderChunks.push(this)
}
}
this.sections[y >> 4].setBlock(x, y & 15, z, blockID)
}
getTags(x, y, z){
let s = y >> 4
return this.sections.length > s ? this.sections[s].getTags(x, y & 15, z) : null
}
getTagByName(x,y,z,n){
let s = y >> 4
return this.sections.length > s ? this.sections[s].getTagByName(x, y & 15, z,n) : null
}
setTags(x,y,z,data){
let s = y >> 4
if(this.sections.length > s) this.sections[s].setTags(x, y & 15, z, data)
}
setTagByName(x,y,z,n,data){
let s = y >> 4
if(this.sections.length > s) this.sections[s].setTagByName(x, y & 15, z,n,data)
}
fillLight() {
let max = this.sections.length * 16 - 1
let blockSpread = []
// Set virtical columns of light to level 15
for (let x = 0; x < 16; x++) {
for (let z = 0; z < 16; z++) {
let stop = false
for (let y = max; y >= 0; y--) {
let data = blockData[this.getBlock(x, y, z)]
if (data.lightLevel) {
if (!blockSpread[data.lightLevel]) blockSpread[data.lightLevel] = []
blockSpread[data.lightLevel].push(x + this.x, y, z + this.z)
this.setLight(x, y, z, data.lightLevel, 1)
}
if (!stop && !data.transparent) {
this.tops[z * 16 + x] = y
stop = true
} else if (!stop) {
this.setLight(x, y, z, 15, 0)
}
}
}
}
// Spread the light to places where the virtical columns stopped earlier, plus chunk borders
let spread = []
for (let x = 0; x < 16; x++) {
for (let z = 0; z < 16; z++) {
for (let y = this.tops[z * 16 + x] + 1; y <= max; y++) {
if (x === 15 || this.tops[z * 16 + x + 1] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
if (x === 0 || this.tops[z * 16 + x - 1] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
if (z === 15 || this.tops[(z + 1) * 16 + x] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
if (z === 0 || this.tops[(z - 1) * 16 + x] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
break
}
}
}
this.spreadLight(spread, 14)
for (let i = blockSpread.length - 1; i > 0; i--) {
let blocks = blockSpread[i]
if (blocks && blocks.length) {
this.spreadLight(blocks, i - 1, false, 1)
}
}
this.lit = true
}
setLight(x, y, z, level, blockLight) {
if(this.sections[y >> 4]) this.sections[y >> 4].setLight(x, y & 15, z, level, blockLight)
}
getLight(x, y, z, blockLight = 0) {
if (y >= this.sections.length * 16) return 15
if(!this.sections[y >> 4]) return 0
return this.sections[y >> 4].getLight(x, y & 15, z, blockLight)
}
trySpread(x, y, z, level, spread, blockLight, update = false) {
if(y < 0) return
if (world.getLight(x, y, z, blockLight) < level) {
if (blockData[world.getBlock(x, y, z)].transparent) {
world.setLight(x, y, z, level, blockLight)
spread.push(x, y, z)
}
}
if (update && (x < this.x || x > this.x + 15 || z < this.z || z > this.z + 15)) {
let chunk = world.getChunk(x, z)
if (chunk.buffer && !world.meshQueue.includes(chunk)) {
world.meshQueue.push(chunk)
}
}
}
spreadLight(blocks, level, update = false, blockLight = 0) {
let spread = []
let x = 0, y = 0, z = 0
for (let i = 0; i < blocks.length; i += 3) {
x = blocks[i]
y = blocks[i+1]
z = blocks[i+2]
if(y < 0) continue
this.trySpread(x - 1, y, z, level, spread, blockLight, update)
this.trySpread(x + 1, y, z, level, spread, blockLight, update)
this.trySpread(x, y - 1, z, level, spread, blockLight, update)
this.trySpread(x, y + 1, z, level, spread, blockLight, update)
this.trySpread(x, y, z - 1, level, spread, blockLight, update)
this.trySpread(x, y, z + 1, level, spread, blockLight, update)
}
if (level > 1 && spread.length) {
this.spreadLight(spread, level - 1, update, blockLight)
}
}
tryUnSpread(x, y, z, level, spread, respread, blockLight) {
if(y < 0) return
let light = world.getLight(x, y, z, blockLight)
let trans = blockData[world.getBlock(x, y, z)].transparent
if (light === level) {
if (trans) {
world.setLight(x, y, z, 0, blockLight)
spread.push(x, y, z)
}
} else if (light > level) {
respread[light].push(x, y, z)
}
if (x < this.x || x > this.x + 15 || z < this.z || z > this.z + 15) {
let chunk = world.getChunk(x, z)
if (chunk.buffer && !world.meshQueue.includes(chunk)) {
world.meshQueue.push(chunk)
}
}
}
unSpreadLight(blocks, level, respread, blockLight) {
let spread = []
let x = 0, y = 0, z = 0
for (let i = 0; i < blocks.length; i += 3) {
x = blocks[i]
y = blocks[i+1]
z = blocks[i+2]
if(y < 0) continue
this.tryUnSpread(x - 1, y, z, level, spread, respread, blockLight)
this.tryUnSpread(x + 1, y, z, level, spread, respread, blockLight)
this.tryUnSpread(x, y - 1, z, level, spread, respread, blockLight)
this.tryUnSpread(x, y + 1, z, level, spread, respread, blockLight)
this.tryUnSpread(x, y, z - 1, level, spread, respread, blockLight)
this.tryUnSpread(x, y, z + 1, level, spread, respread, blockLight)
}
if (level > 1 && spread.length) {
this.unSpreadLight(spread, level - 1, respread, blockLight)
}
}
reSpreadLight(respread, blockLight) {
for (let i = respread.length - 1; i > 1; i--) {
let blocks = respread[i]
let level = i - 1
let spread = respread[level]
for (let j = 0; j < blocks.length; j += 3) {
let x = blocks[j]
let y = blocks[j+1]
let z = blocks[j+2]
this.trySpread(x - 1, y, z, level, spread, blockLight)
this.trySpread(x + 1, y, z, level, spread, blockLight)
this.trySpread(x, y - 1, z, level, spread, blockLight)
this.trySpread(x, y + 1, z, level, spread, blockLight)
this.trySpread(x, y, z - 1, level, spread, blockLight)
this.trySpread(x, y, z + 1, level, spread, blockLight)
}
}
}
optimize() {
for (let i = 0; i < this.sections.length; i++) {
this.sections[i].optimize()
}
if (!world.meshQueue.includes(this)) {
world.meshQueue.push(this)
}
this.optimized = true
}
render() {
if (!this.buffer) {
return
}
if (p.canSee(this.x, this.minY, this.z, this.maxY)) {
renderedChunks++
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
updateBlock(x, y, z, world, lazy, leaveMe) {
if (this.buffer) {
this.lazy = lazy
if ((this.sections.length > y >> 4) && this.sections[y >> 4]) {
this.sections[y >> 4].updateBlock(x, y & 15, z, world, leaveMe)
}
}
}
deleteBlock(x, y, z, user) {
if (!this.sections[y >> 4]) {
return
}
if (user && !this.sections[y >> 4].edited) {
this.cleanSections[y >> 4] = this.sections[y >> 4].blocks.slice()
this.sections[y >> 4].edited = true
this.edited = true
}
this.sections[y >> 4].deleteBlock(x, y & 15, z)
this.minY = y < this.minY ? y : this.minY
this.maxY = y > this.maxY ? y : this.maxY
}
carveCaves() {
for (let i = 0; i < this.sections.length; i++) {
if (!this.sections[i].caves) {
this.sections[i].carveCaves()
if (i + 1 >= this.sections.length) {
this.caves = true
}
return
}
}
}
populate() {
var flowers = [blockIds.flowerOftheValley, blockIds.poppy, blockIds.dandelion, 
blockIds.blueOrchid, blockIds.pinkTulip, blockIds.orangeTulip, blockIds.redTulip, blockIds.whiteTulip,
blockIds.azureBluet, blockIds.cornFlower, blockIds.purpleFlower, blockIds.witherRose,
blockIds.allium, blockIds.oxeyeDaisy,
blockIds.lilac, blockIds.roseBush, blockIds.peony,
blockIds.TallGrass, blockIds.DoubleTallGrass]
randomSeed(hash(this.x, this.z) * 210000000)
let wx = 0, wz = 0, ground = 0, top = 0, rand = 0, place = false, topsi = 0, tall = 0
let trueX = this.x, trueY = this.y, trueZ = this.z
let smoothness = generator.smooth, hilliness = generator.height
let biomeSmooth = generator.biomeSmooth;
let biome = 0
let type = world.type
for (let i = 0; i < 16; i++) {
for (let k = 0; k < 16; k++) {
wx = this.x + i
wz = this.z + k
ground = this.tops[k * 16 + i]
biome = superflat ? 0 : noiseProfile.noise((trueX + i) * biomeSmooth, (trueZ + k) * biomeSmooth)
var b
if(superflat){b = "field"}else b = getBiome(biome)
let nb = getNetherBiome(biome)
if (trees && random() < 0.07 && type === "" && b === "field" && world.getBlock(i, ground, k) === blockIds.grass) {
top = ground + floor(4.5 + random(2.5))
rand = floor(random(4096))
let tree = random() < 0.6 ? blockIds.oakLog : ++top && blockIds.birchLog
let leaf = tree === blockIds.oakLog ? blockIds.oakLeaves : blockIds.birchLeaves
let groundBlock = blockIds.dirt
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, groundBlock)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.spawnBlock(wx + 1, top + 1, wz, leaf)
world.spawnBlock(wx, top + 1, wz - 1, leaf)
world.spawnBlock(wx, top + 1, wz + 1, leaf)
world.spawnBlock(wx - 1, top + 1, wz, leaf)
}
if(b === "snowyField" && trees && random() < 0.07 && type === "" && world.getBlock(i, ground, k)){
top = ground + floor(4.5 + random(2.5))
rand = floor(random(4096))
let tree = random() < 0.6 ? blockIds.oakLog : ++top && blockIds.birchLog
let leaf = tree === blockIds.oakLog ? blockIds.oakLeaves : blockIds.birchLeaves
let groundBlock = blockIds.dirt
let snow = blockIds.snow
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, groundBlock)
this.setBlock(i, top + 2, k, snow | LAYER2)
//Top leaves
world.spawnBlock(wx + 1, top + 1, wz, leaf)
world.spawnBlock(wx, top + 1, wz - 1, leaf)
world.spawnBlock(wx, top + 1, wz + 1, leaf)
world.spawnBlock(wx - 1, top + 1, wz, leaf)
world.spawnBlock(wx + 1, top + 2, wz, snow | LAYER1)
world.spawnBlock(wx, top + 2, wz - 1, snow | LAYER1)
world.spawnBlock(wx, top + 2, wz + 1, snow | LAYER1)
world.spawnBlock(wx - 1, top + 2, wz, snow | LAYER1)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top, wz + z, leaf)
if(rand & 2) world.spawnBlock(wx + x, top + 1, wz + z, snow | LAYER2)
else world.spawnBlock(wx + x, top + 1, wz + z, snow | LAYER1)
}
} else {
world.spawnBlock(wx + x, top, wz + z, leaf)
world.spawnBlock(wx + x, top + 1, wz + z, snow | LAYER1)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
if(rand & 2) world.spawnBlock(wx + x, top, wz + z, snow | LAYER2)
else world.spawnBlock(wx + x, top, wz + z, snow | LAYER1)
}
} else {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
world.spawnBlock(wx + x, top, wz + z, snow | LAYER1)
}
}
}
}
//get rid of snow underneath
/*for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if(x || z){
var g = world.getTop(wx,wz)
if(g) world.setBlock(wx+i, g+1, wz+k, 0)
}
}
}*/
//
}
// Cactus
if (random() < 0.01 && this.getBlock(i, ground, k) && b === "desert" && ground > 60 && this.type !== "nether") {
top = ground + Math.floor(2.5 + random(1.5));
rand = Math.floor(random(4096));
let tree = blockIds.cactus | CACTUS;
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree);
}
this.setBlock(i, ground, k, blockIds.sand);
}
if (random() < 0.006 && this.getBlock(i, ground, k) && b === "desert" && ground > 60 && this.type !== "nether") {
let tree = blockIds.deadBush | CROSS;
this.setBlock(i,ground+1,k, tree);
this.setBlock(i, ground, k, blockIds.sand);
}
// Jungle trees
if(trees && random() < 0.01 && type === "" && (b === "jungle" || b === "giantJungle") && world.getBlock(i, ground, k)){
tall = floor(5 + random(5)) //5 to 10
top = ground + tall
let tree = blockIds.jungleLog
let leaf = blockIds.jungleLeaves
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, blockIds.dirt)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.spawnBlock(wx + 1, top + 1, wz, leaf)
world.spawnBlock(wx, top + 1, wz - 1, leaf)
world.spawnBlock(wx, top + 1, wz + 1, leaf)
world.spawnBlock(wx - 1, top + 1, wz, leaf)
}//end jungle trees
//Giant jungle trees
if(trees && random() < 0.01 && type === "" && b === "giantJungle" && world.getBlock(i, ground, k)){
tall = floor(10 + random(20)) //10 to 30
top = ground + tall
let tree = blockIds.jungleLog
let leaf = blockIds.jungleLeaves
//Center
for (let j = ground + 1; j < top; j++) {
this.setBlock(i, j, k, tree)
world.spawnBlock(wx + 1, j, wz, tree)
world.spawnBlock(wx, j, wz + 1, tree)
world.spawnBlock(wx+1, j, wz+1, tree)
}
this.setBlock(i, ground, k, blockIds.dirt)
world.setBlock(wx + 1, ground, wz, blockIds.dirt)
world.setBlock(wx, ground, wz + 1, blockIds.dirt)
world.setBlock(wx+1, ground, wz+1, blockIds.dirt)
//Messy part
//leaves
let w2 = 5 * 5
let d2 = 5 * 5
let h2 = 5 * 5
for(var x=-4.5; x<4.5; x++){
for(var y=2; y<4.5; y++){
for(var z=-4.5; z<4.5; z++){
let n = x * x / w2 + y * y / h2 + z * z / d2
if (n < 1) {
world.spawnBlock(wx + x+1, top-4+y, wz + z+1, leaf)
}
}
}
}
//the diagonal branches
w2 = 3 * 3
d2 = 3 * 3
h2 = 3 * 3
for(y=ground+5; y<top; y += Math.floor(random(10))){
let side = Math.floor(random(4))
let mx=0,mz=0
switch(side){
case 0:
mx=1
break
case 1:
mx=-1
break
case 2:
mz=1
break
case 3:
mz=-1
break
}
let x = mx === 1?2:mx, z = mz === 1?2:mz
var rnd = Math.floor(random(4))+2
//branch
for(var by=0; by<rnd; by++){
world.setBlock(wx+x, y+by, wz+z, tree)
x += mx
z += mz
}
x -= mx
z -= mz
by -= 1
//leaves
for(var lx=-3; lx<3; lx++){
for(var ly=1; ly<3; ly++){
for(var lz=-3; lz<3; lz++){
let n = lx * lx / w2 + ly * ly / h2 + lz * lz / d2
if (n < 1) {
world.spawnBlock(wx+x + lx, y+by+ly, wz+z + lz, leaf)
}
}
}
}
// m = move; l = leaf
}
}//end giant jungle trees; jungle bushes
if(trees && random() < 0.007 && type === "" && (b === "jungle" || b === "giantJungle") && world.getBlock(i, ground, k)){
let w2 = 3 * 3
let d2 = 3 * 3
let h2 = 3 * 3
for(var x=-3; x<3; x++){
for(var y=1; y<3; y++){
for(var z=-3; z<3; z++){
let n = x * x / w2 + y * y / h2 + z * z / d2
if (n < 1) {
world.spawnBlock(wx+x, ground+y, wz+z, blockIds.jungleLeaves)
}
}
}
}
this.setBlock(i, ground+1, k, blockIds.jungleLog)
}
if (random() < 0.005 && type === "nether" && ground > 79 && nb !== 0){
tall = floor(4.5 + random(2.5))
if(floor(random(12)) === 1) tall *= 2
top = ground + tall
rand = floor(random(4096))
let tree
let leaf
let groundBlock = blockIds.netherrack
if(this.type === "nether"){
if(nb === 1){
tree = blockIds.warpedStem
leaf = blockIds.warpedWartBlock
}else if(nb === 2){
tree = blockIds.crimsonStem
leaf = blockIds.netherWartBlock
}
}
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, groundBlock)
//Shroomlight
for(var l=0; l<3; l++) world.spawnBlock(wx + random(-2, 2), top + random(-1,1), wz + random(-2,2), blockIds.shroomlight)
//Top leaves
for(var x=-1; x<2; x++){
for(var z=-1; z<2; z++){
place = (x&1) && (z&1) ? rand & 1 : true
rand >>>= 1
if(place){
world.spawnBlock(wx + x, top + 1, wz + z, leaf)
}
}
}
//layer 2 leaves
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = (x===2 || x===-2) && (z===2 || z==-2) ? rand & 1 : true
rand >>>= 1
if(place){
world.spawnBlock(wx + x, top, wz + z, leaf)
}
}
}
rand = floor(random(4096))
//layer 1 leaves
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = x===2 || x===-2 || z===2 || z==-2 ? !(rand & 1) : false
rand >>>= 1
if(place){
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
rand = floor(random(40964096))
//drooping leaves
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = x===2 || x===-2 || z===2 || z==-2
rand >>>= 1
if(place){
var h = rand & 4 && rand & 8 ? rand & 3 : 0
if(h){
world.spawnBlock(wx + x, top - 1, wz + z, leaf) //to make sure removed ones are put back
for(var y=0; y<h; y++){
world.spawnBlock(wx + x, top - 2 - y, wz + z, leaf)
}
}
}
}
}
if(nb === 2){
rand = floor(random(40964096))
//vines
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = x===2 || x===-2 || z===2 || z==-2
rand >>>= 1
if(place){
var h = (rand & 4 && rand & 8) ? (rand & (tall-2)) - 1 : 0
if(h){
world.spawnBlock(wx + x, top - 1, wz + z, leaf) //to make sure removed ones are put back
for(var y=0; y<h; y++){
world.spawnBlock(wx + x, top - 2 - y, wz + z, blockIds.weepingVinesPlant)
}
world.spawnBlock(wx + x, top - 2 - h, wz + z, blockIds.weepingVines)
}
}
}
}
}
}
//flowers and vines
if (random() < 0.05 && this.getBlock(i, ground, k) === blockIds.grass) {
var flower = flowers[Math.round(random(flowers.length-1))]
world.spawnBlock(wx, ground+1, wz, flower);
}
var block = this.getBlock(i, ground, k)
if(random() < 0.05){
if(block === blockIds.crimsonNylium){
world.spawnBlock(wx, ground+1, wz, blockIds.crimsonRoots);
}else if(block === blockIds.warpedNylium){
world.spawnBlock(wx, ground+1, wz, blockIds.warpedRoots);
}
}
//lava rivers
if(random() < 0.005 && world.getBlock(i,ground,k) && this.type==="nether"){
let it = 0
let x=wx, y=ground, z=wz
let dir=floor(random(0,8))
for(; it<100; it++){
let xp,zp
switch(dir){
case 0:
x+=1
zp=true
break
case 1:
x+=1
z+=1
break
case 2:
z+=1
xp=true
break
case 3:
x-=1
z+=1
break
case 4:
x-=1
zp=true
break
case 5:
x-=1
z-=1
break
case 6:
z-=1
xp=true
break
case 7:
x+=1
z-=1
break
}
if(random() < 0.08){
dir += round(random(-1,1))
}
let prev = world.getBlock(x,y,z)
world.setBlock(x,y,z,blockIds.Lava)
if(xp){
world.setBlock(x+1,y,z,blockIds.Lava)
}
if(zp){
world.setBlock(x,y,z+1,blockIds.Lava)
}
if(!prev && y>1){
y--
prev = world.getBlock(x,y,z)
world.setBlock(x,y,z,blockIds.Lava)
while(!prev && y>1){
y--
prev = world.getBlock(x,y,z)
world.setBlock(x,y,z,blockIds.Lava)
}
}
if(world.getBlock(x,y-1,z) === blockIds.Lava) break
}
}
if(this.type === "nether"){
let l
if(random() < 0.005){
let r = random(12345123451234512345)*3
let x=wx, y=this.ceils[k * 16 + i], z=wz
let ri=floor(random(5,15))
for(l=0; l<ri; l++){
x += r&1 - 1; r >>>= 1
y += r&3 - 2; r >>>= 1
z += r&1 - 1; r >>>= 1
world.spawnBlock(x,y,z, blockIds.glowstone)
}
}
for(l=0; l<16; l++){
let x = random(0, 16)
let y = random(10, 177)
let z = random(0, 16)
if(world.getBlock(wx+x,y,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y+1,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y-1,wz+z) === blockIds.netherrack){
world.setBlock(wx+x,y,wz+z, blockIds.netherQuartzOre)
}
}
for(l=0; l<10; l++){
let x = random(0, 16)
let y = random(10, 177)
let z = random(0, 16)
if(world.getBlock(wx+x,y,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y+1,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y-1,wz+z) === blockIds.netherrack){
world.setBlock(wx+x,y,wz+z, blockIds.netherGoldOre)
}
}
}else{
// Blocks of each per chunk in Minecraft
// Coal: 185.5
// Iron: 111.5
// Gold: 10.4
// Redstone: 29.1
// Diamond: 3.7
// Lapis: 4.1
//there is also copper
ground -= 4
if (random() < 3.7 / 256) {
let y = random() * 16 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.diamondOre)
}
}
if (random() < 111.5 / 256) {
let y = random() * 64 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.ironOre)
}
}
if (random() < 51 / 256) {
let y = random() * 64 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.copperOre)
}
}
if (random() < 185.5 / 256) {
let y = random() * ground | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.coalOre)
}
}
if (random() < 10.4 / 256) {
let y = random() * 32 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.goldOre)
}
}
if (random() < 29.1 / 256) {
let y = random() * 16 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.redstoneOre)
}
}
if (random() < 4.1 / 256) {
let y = random() * 32 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.lapisOre)
}
}
}
}
}
this.populated = true
}
genMesh() {
let start = performance.now()
let barray = bigArray
let index = 0
for (let i = 0; i < this.sections.length; i++) {
index = this.sections[i].genMesh(barray, index)
}
let arrayDone = performance.now()
if (!this.buffer) {
this.buffer = gl.createBuffer()
}
let data = barray.slice(0, index)
let maxY = 0
let minY = 255
let y = 0
for (let i = 1; i < data.length; i += 6) {
y = data[i]
maxY = max(maxY, y)
minY = min(minY, y)
}
this.maxY = maxY
this.minY = minY
this.faces = data.length / 32
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW)
gl.enableVertexAttribArray(glCache.aVertex)
gl.enableVertexAttribArray(glCache.aTexture)
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttribPointer(glCache.aVertex, 3, gl.FLOAT, false, 32, 0)
gl.vertexAttribPointer(glCache.aTexture, 2, gl.FLOAT, false, 32, 12)
gl.vertexAttribPointer(glCache.aShadow, 1, gl.FLOAT, false, 32, 20)
gl.vertexAttribPointer(glCache.aSkylight, 1, gl.FLOAT, false, 32, 24)
gl.vertexAttribPointer(glCache.aBlocklight, 1, gl.FLOAT, false, 32, 28)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.lazy = false
}
tick() {
if (this.edited) {
for (let i = 0; i < this.sections.length; i++) {
if (this.sections[i].edited) {
this.sections[i].tick()
}
}
}
}
load() {
let chunkX = this.x >> 4
let chunkZ = this.z >> 4
let load = null
for (let i = 0; i < world.loadFrom.length; i++) {
load = world.loadFrom[i]
if (load.x === chunkX && load.z === chunkZ) {
let y = load.y * 16
for (let j in load.blocks) {
if(blockData[load.blocks[j]]){ // if a block doesn't exsist, they won't be generated
world.setBlock((j >> 8 & 15) + this.x, (j >> 4 & 15) + y, (j & 15) + this.z, load.blocks[j])
}
}
world.loadFrom.splice(i--, 1)
}
}
this.loaded = true
}
}
class Contacts {
constructor() {
this.array = []
this.size = 0
}
add(x, y, z, block) {
if (this.size === this.array.length) {
this.array.push([ x, y, z, block ])
} else {
this.array[this.size][0] = x
this.array[this.size][1] = y
this.array[this.size][2] = z
this.array[this.size][3] = block
}
this.size++
}
clear() {
this.size = 0
}
}
class Entity {
constructor(x, y, z, pitch, yaw, velx, vely, velz, width, height, depth, vertices, texture, faces, despawns, vao) {
this.x = x
this.y = y
this.z = z
this.previousX = x
this.previousY = y
this.previousZ = z
this.canStepX = true
this.canStepY = true
this.pitch = pitch
this.yaw = yaw
this.velx = velx
this.vely = vely
this.velz = velz
this.width = width
this.height = height
this.depth = depth
this.offsetY = 0
this.hidden = false
this.harmEffect = 0
this.contacts = new Contacts()
this.lastUpdate = performance.now()
this.onGround = false
this.hasCollided = false
this.gravityStength = -0.032
this.standingOn = 0
this.despawns = despawns
this.spawn = this.lastUpdate
this.canDespawn = false
this.dieEffect = 0
this.burning = false
this.parts = {}
this.faces = faces
if(vao){
this.vao = vao
}else{
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
addPart(name,size,vao,x,y,z,w,h,d,rx,ry){
this.parts[name] = {
size,vao,
x,y,z,w,h,d,rx,ry //all of these are relative to entity position
}
}
renderPart(part, matrix){
matrix.translate(part.x, part.y, part.z)
matrix.rotX(part.rx)
matrix.rotY(part.ry)
matrix.scale(part.w, part.h, part.d)
gl.uniformMatrix4fv(glCache.uViewEntity, false, matrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(part.vao)
gl.drawElements(gl.TRIANGLES, 6 * part.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
matrix.unscale(part.w, part.h, part.d)
matrix.rotY(-part.ry)
matrix.rotX(-part.rx)
matrix.translate(-part.x, -part.y, -part.z)
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.standingOn = world.getBlock(this.x, round(this.y-this.height-1), this.z)
if (this.liquid){
this.gravityStength = -0.01
this.vely *= 0.9
}else{
this.gravityStength = -0.02
}
this.vely += this.gravityStength * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
let drag = this.liquid ? 0.7 : (this.onGround ? 0.5 : 0.85)
if(blockData[this.standingOn].slide) drag = blockData[this.standingOn].slide
this.velz += (this.velz * 0.9 - this.velz) * dt
this.velx += (this.velx * 0.9 - this.velx) * dt
// this.vely += (this.vely * 0.9 - this.vely) * dt
}
collided(x, y, z, vx, vy, vz, block) {
let verts = blockData[block].shape.verts
let px = roundBits(this.x - this.width / 2 - x)
let py = roundBits(this.y - this.height / 2 - y)
let pz = roundBits(this.z - this.depth / 2 - z)
let pxx = roundBits(this.x + this.width / 2 - x)
let pyy = roundBits(this.y + this.height / 2 - y)
let pzz = roundBits(this.z + this.depth / 2 - z)
let minX, minY, minZ, maxX, maxY, maxZ, min, max
//Top and bottom faces
let faces = verts[0]
if (vy <= 0) {
faces = verts[1]
}
if (!vx && !vz) {
for (let face of faces) {
min = face.min
minX = min[0]
minZ = min[2]
max = face.max
maxX = max[0]
maxZ = max[2]
if (face[1] > py && face[1] < pyy && minX < pxx && maxX > px && minZ < pzz && maxZ > pz) {
if (vy <= 0) {
this.onGround = true
this.y = round((face[1] + y + this.height / 2) * 10000) / 10000
this.vely = 0
return false
} else {
return true
}
}
}
return false
}
//West and East faces
if (vx < 0) {
faces = verts[4]
} else if (vx > 0) {
faces = verts[5]
}
if (vx) {
let col = false
for (let face of faces) {
min = face.min
minZ = min[2]
minY = min[1]
max = face.max
maxZ = max[2]
maxY = max[1]
if (face[0] > px && face[0] < pxx && minY < pyy && maxY > py && minZ < pzz && maxZ > pz) {
if (maxY - py > 0.5) {
this.canStepX = false
}
col = true
}
}
return col
}
//South and North faces
if (vz < 0) {
faces = verts[2]
} else if (vz > 0) {
faces = verts[3]
}
if (vz) {
let col = false
for (let face of faces) {
min = face.min
minX = min[0]
minY = min[1]
max = face.max
maxX = max[0]
maxY = max[1]
if (face[2] > pz && face[2] < pzz && minY < pyy && maxY > py && minX < pxx && maxX > px) {
if (maxY - py > 0.5) {
this.canStepZ = false
}
col = true
}
}
return col
}
}
move(now) {
let pminX = floor(this.x - this.width / 2)
let pmaxX = ceil(this.x + this.width / 2)
let pminY = floor(this.y - this.height / 2)
let pmaxY = ceil(this.y + this.height / 2)
let pminZ = floor(this.z - this.depth / 2)
let pmaxZ = ceil(this.z + this.depth / 2)
let block = null
this.liquid = false
for (let x = pminX; x <= pmaxX; x++) {
for (let y = pminY; y <= pmaxY; y++) {
for (let z = pminZ; z <= pmaxZ; z++) {
let block = world.getBlock(x, y, z)
if (block && blockData[block].solid && !blockData[block].liquid) {
this.contacts.add(x, y, z, block)
}
if(x === round(this.x) && z === round(this.z) && blockData[block].liquid){
this.liquid = true
}
}
}
}
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.previousX = this.x
this.previousY = this.y
this.previousZ = this.z
this.canStepX = false
this.canStepY = false
this.onGround = false
this.hasCollided = false
//Check collisions in the Y direction
this.y += this.vely * dt
for (let i = 0; i < this.contacts.size; i++) {
block = this.contacts.array[i]
if (this.collided(block[0], block[1], block[2], 0, this.vely, 0, block[3])) {
this.y = this.previousY
this.vely = 0
this.hasCollided = true
break
}
}
if (this.y === this.previousY) {
this.canStepX = true
this.canStepZ = true
}
//Check collisions in the X direction
this.x += this.velx * dt
for (let i = 0; i < this.contacts.size; i++) {
block = this.contacts.array[i]
if (this.collided(block[0], block[1], block[2], this.velx, 0, 0, block[3])) {
if (this.canStepX && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
this.x = this.previousX
this.velx = 0
this.hasCollided = true
break
}
}
//Check collisions in the Z direction
this.z += this.velz * dt
for (let i = 0; i < this.contacts.size; i++) {
block = this.contacts.array[i]
if (this.collided(block[0], block[1], block[2], 0, 0, this.velz, block[3])) {
if (this.canStepZ && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
this.z = this.previousZ
this.velz = 0
this.hasCollided = true
break
}
}
if(this.onGround){
this.hasCollided = true
}
this.lastUpdate = now
this.contacts.clear()
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
}
render() {
if(this.hidden) return
const offsetY = this.offsetY
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y + offsetY, this.z)
modelMatrix.rotZ(this.dieEffect)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, lightLevel)
gl.uniform1f(glCache.harmEffectEntity, this.harmEffect || this.dieEffect)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
for(var part in this.parts){
this.renderPart(this.parts[part], modelViewProjectionMatrix)
}
gl.uniform1f(glCache.harmEffectEntity, 0)
if(this.burning){
entityFire.render(this)
}
}
}
class Item extends Entity {
constructor(x, y, z, velx, vely, velz, blockID, autoSetVel, amount) {
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, velx, vely, velz, 0.25, 0.25, 0.25, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.block = blockID
this.type = "Item"
//this.amount = amount || 1
if(autoSetVel){
this.velx = (Math.random()-0.5) * 0.2
this.vely = Math.random() * 0.2
this.velz = (Math.random()-0.5) * 0.2
}
}
update() {
if(this.amount <= 0){
return this.canDespawn = true
}
let now = performance.now()
this.yaw += 0.01;
if(this.yaw > Math.PI*2){
this.yaw -= Math.PI*2
}
this.updateVelocity(now)
this.move(now)
let xDist = this.x - p.x
let yDist = this.y - p.y
let zDist = this.z - p.z
let pickup = xDist > -1 && xDist < 1 && yDist > -1.5 && yDist < 1 && zDist > -1 && zDist < 1
if(pickup){
var dist = dist3(this.x, this.y, this.z, p.x, p.y, p.z)
var dist2 = dist3(this.x, this.y, this.z, p.x, p.y-1, p.z)
pickup = ((1 >= dist) && (dist >= -1)) || ((1 >= dist2) && (dist2 >= -1))
}
/*if(multiplayer ? host : true){
let d = 3/4
var updateShape
for(var i=0; i<world.entities.length; i++){
var e = world.entities[i]
if(e.type === "Item" && e !== this){
xDist = this.x - e.x
yDist = this.y - e.y
zDist = this.z - e.z
let stack = xDist > -d && xDist < d && yDist > -d && yDist < d && zDist > -d && zDist < d
if(stack){
this.amount += e.amount
e.amount = 0
updateShape = true
}
}
}
if(updateShape) this.updateShape()
}*/
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(pickup){
/*var a = this.amount
for(var i=0; i<a; i++){
if(newInvItem(this.block)) this.amount --
else break
}
if(this.amount === 0){
this.canDespawn = true
updateHUD = true
playSound("entity.item.pickup")
}else this.updateShape()*/
if(newInvItem(this.block)){
this.canDespawn = true
if(this.block === blockIds.oakLog || this.block === blockIds.birchLog || this.block === blockIds.jungleLog){
achievment("Getting Wood")
}
if(this.block === blockIds.diamond){
achievment("DIAMONDS!")
}
updateHUD = true
playSound("entity.item.pickup")
if(multiplayer) send({type:"playSound", data:"entity.item.pickup", x:this.x,y:this.y,z:this.z})
}
}
this.offsetY = -0.1 * cos((performance.now() - this.spawn) * 0.0015) + 0.15
}
updateShape(){
if(blockData[this.block].shape !== shapes.cube) return
var shape
if(this.amount === 1){
shape = "cube"
}else if(this.amount < 4){
shape = "cube"+this.amount
}else{
shape = "cube4"
}
const block = blockData[this.block]
const tex = block.textures
shape = shapes[shape]
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
var vertices = new Float32Array(shapeVerts.flat(Infinity))
texture = new Float32Array(texture),
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.faces = size
}
}
win.Item = Item
class BlockEntity extends Entity{
constructor(blockID, x,y,z, solidOnGround, cacheBlocks){
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, 0, 0, 0, 0.996, 0.996, 0.996, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.block = blockID
this.type = "BlockEntity"
this.solidOnGround = solidOnGround
this.cacheBlocks = cacheBlocks
this.cached = {}
if(cacheBlocks){
this.cached[blockID] = this.vao
}
}
changeBlock(blockID){
if(this.cached[blockID]){
this.vao = this.cached[blockID]
return
}
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
var vertices = new Float32Array(shapeVerts.flat(Infinity)),
faces = size
texture = new Float32Array(texture),
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
if(this.cacheBlocks){
this.cached[blockID] = this.vao
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(this.onGround && this.solidOnGround){
var x = round(this.x), y = round(this.y), z = round(this.z)
var b = world.getBlock(x, y-1, z)
if(blockData[b] && blockData[b].shape === shapes.cube){
world.setBlock(x,y,z, this.block)
blockSound(this.block, "land", x,y,z)
}else{
// non cube block breaks falling blocks
world.addEntity(new Item(x,y,z, 0,0,0, this.block))
}
this.canDespawn = true
}
}
}
win.BlockEntity = BlockEntity
class FireBlock extends BlockEntity{
constructor(){
super(blockIds.fire | SLAB, 0,0,0)
this.width = 1
this.height = 0.5
this.depth = 1
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotY(-this.yaw)
modelMatrix.rotX(-this.pitch)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, 1)
gl.uniform1f(glCache.harmEffectEntity, 0)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1f(glCache.harmEffectEntity, 0)
}
}
class PrimedTNT extends BlockEntity{
constructor(x,y,z){
super(blockIds.tnt, x,y,z)
this.type = "PrimedTNT"
this.velx = (Math.random() * 0.1) - 0.05
this.vely = Math.random() * 0.1
this.velz = (Math.random() * 0.1) - 0.05
this.prevTex = blockIds.tnt
this.tex = this.prevTex
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
var i = Math.floor((now - this.spawn) / 250)
if(i%2){
this.tex = blockIds.tnt
}else{
this.tex = blockIds.whiteConcrete
}
if(this.prevTex !== this.tex){
this.changeBlock(this.tex)
this.prevTex = this.tex
}
if(i >= 16){
this.canDespawn = true
var x = round(this.x), y = round(this.y), z = round(this.z)
explode(x,y,z,4, blockData[world.getBlock(x,y,z)].liquid)
}
}
}
class EnderPearl extends BlockEntity{
constructor(x,y,z,velx,vely,velz){
super(blockIds.enderPearl, x,y,z)
this.type = "EnderPearl"
this.velx = velx
this.vely = vely
this.velz = velz
this.from = achexUsername
this.gravityStrength = -0.05
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.vely += this.gravityStength * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
var fromMe = this.from === achexUsername
if (fromMe && now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(fromMe && this.hasCollided){
p.x = this.x
p.y = this.y
p.z = this.z
this.canDespawn = true
}
}
}
class Snowball extends BlockEntity{
constructor(x,y,z,velx,vely,velz){
super(blockIds.enderPearl, x,y,z)
this.type = "Snowball"
this.velx = velx
this.vely = vely
this.velz = velz
this.from = achexUsername
this.gravityStrength = -0.05
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.vely += this.gravityStength * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
var fromMe = this.from === achexUsername
if (fromMe && now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(fromMe){
var collided = entityRayTrace(this.x,this.y,this.z,true)
if(collided){
if(entPlayerCollided){
var pd = p.direction
send({type:"hit", username:username, damage:damage, velx:pd.x/2, velz:pd.z/2}, ent.id)
}else{
if(collided.onhit) collided.onhit(0)
}
this.canDespawn = true
}else if(collidedWithMe && survival){
damage(1, username+" got killed by their own snowball")
}
}
}
}
class ExperienceOrb extends Entity{
//experienceOrb
constructor(x,y,z,value){
var i
if(!value || value <= 2){
i = 0
}else if(value <= 6){
i = 1
}else if(value <= 16){
i = 2
}else if(value <= 36){
i = 3
}else if(value <= 72){
i = 4
}else if(value <= 148){
i = 5
}else if(value <= 306){
i = 6
}else if(value <= 616){
i = 7
}else if(value <= 1236){
i = 8
}else if(value <= 2476){
i = 9
}else if(value <= 32767){
i = 10
}
super(x, y, z, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, null, null, experienceOrbVaos.size, 300000, experienceOrbVaos[i])
this.type = "ExperienceOrb"
this.value = value
this.tint = {r:1,g:1,b:1}
}
update(){
let now = performance.now()
var dist = dist3(this.x,this.y,this.z,p.x,p.y-p.bottomH,p.z)
if(dist < 7.25 && dist > -7.25){
//var speed = (7.25 - dist) / 10
var x = this.x - p.x; this.velx = (x-(Math.sign(x)*7.25)) / 150//; this.velx = -this.velx
if(this.onGround) {var y = this.y - (p.y-p.bottomH); this.vely = (y-(Math.sign(y)*7.25)) / 40/*; this.vely = -this.vely*/}
var z = this.z - p.z; this.velz = (z-(Math.sign(z)*7.25)) / 150//; this.velx = -this.velx
}
if(dist < 0.5 && dist > -0.5){
if(now - p.lastXP >= 10000){
XP(this.value)
this.canDespawn = true
}
}
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.facePlayer()
this.tint.r = min(max(abs((now-this.spawn) % 1000 - 500) / 500, 0), 1)
this.tint.g = 1
this.tint.b = 0
}
facePlayer(){
//var magnitude = dist3(this.x,this.y,this.z,p.x,p.y,p.z)
this.yaw = atan2(p.z - this.z, p.x-this.x)
var adjacent = dist2(this.x,this.z,p.x,p.z)
this.pitch = atan2(p.y - this.y, adjacent)
/*var r = this.rotationMatrix
r.identity()
var e = r.elements
var up = vec4
up.x = 0
up.y = 1
up.z = 0
e[12] = this.x
e[13] = this.y
e[14] = this.z
var z = vec1
z.x = this.x - p.x
z.y = this.y - p.y
z.z = this.z - p.z
z.normalize()
var x = up.crossProduct(z.x,z.y,z.z, vec2)
x.normalize()
var y = z.crossProduct(x.x,x.y,x.z, vec3)
y.normalize()
e[0] = x.x
e[1] = x.y
e[2] = x.z
e[4] = y.x
e[5] = y.y
e[6] = y.z
e[8] = z.x
e[9] = z.y
e[10] = z.z*/
/*/less code, more computing
var dx = p.x-this.x;
var dy = p.y-this.y;
var dz = p.z-this.z;
var rxy = Math.sqrt( Math.pow(dx,2) + Math.pow(dy,2) );
var lambda = Math.atan(dy/dx);
var phi = Math.atan(dz/rxy)
if (dx < 0) phi = phi + Math.PI;
if (dz < 0) lambda = -1 * lambda;
this.pitch = rxy
this.yaw = lambda*/
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.rotX(this.dieEffect)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.uniform1i(glCache.uSamplerEntity, 5)
gl.uniform1f(glCache.uLightLevelEntity, lightLevel)
gl.uniform1f(glCache.harmEffectEntity, 0)
gl.uniform1i(glCache.isTextureAtlasEntity,0)
gl.uniform3f(glCache.tintEntity, this.tint.r,this.tint.g,this.tint.b)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1i(glCache.isTextureAtlasEntity,1)
gl.uniform3f(glCache.tintEntity, 1,1,1)
}
}
win.ExperienceOrb = ExperienceOrb
class crackEntity extends Entity{
constructor(tex, x,y,z){
const shape = shapes.cube
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
}
super(x, y, z, 0, 0, 0, 0, 0, 1.01, 1.01, 1.01, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Infinity)
this.cached = {}
}
cacheTexture(tex){
const shape = shapes.cube
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
}
var vertices = new Float32Array(shapeVerts.flat(Infinity)),
faces = size
texture = new Float32Array(texture)
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.cached[tex] = this.vao
}
changeTexture(tex){
this.vao = this.cached[tex]
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const skysLight = world.getLight(x, y+1, z, 0) * (skyLight / 15)
const lightLevel = min(skysLight * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, lightLevel)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
class EntityFire extends Entity{
constructor(){
const shape = shapes.entityFire
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap["fire"]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
}
super(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Infinity)
}
render(ent){ //for burning entities
if(!ent) return
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(ent.x, ent.y+ent.offsetY+(ent.height*0.25), ent.z)
//modelMatrix.rotX(0)
modelMatrix.rotY(ent.yaw)
modelMatrix.scale(ent.width*1.5, ent.height*1.5, ent.depth*1.5) //taller than the entity
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, 1)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
//character is seen in 3rd person mode
class Character extends Entity{
constructor(blockID){
const block = blockData[blockID & 255]
const tex = block.textures
const shape = shapes.cube
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(0, 0, 0, 0, 0, 0, 0, 0, 0.6, 1.7, 0.6, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Infinity)
this.cached = {}
this.cached[blockID] = this.vao
this.die = false
//this.addPart("thing",this.faces,this.vao,1,0,0,1,1,1,0,0)
}
update(){
this.offsetY = -0.1 * cos((performance.now() - this.spawn) * 0.0015) + 0.15
if(this.harmEffect > 0){
this.harmEffect --
}
if(this.die){
this.dieEffect += 0.06
if(this.dieEffect > Math.PI2){
this.y = 0
this.die = false
this.dieEffect = 0
}
}
}
changeBlock(blockID){
if(this.cached[blockID])return this.vao = this.cached[blockID]
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
var vertices = new Float32Array(shapeVerts.flat(Infinity)),
faces = size
texture = new Float32Array(texture),
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.cached[blockID] = this.vao
}
}
window.Player = Character
//world.entities.push(new Cow(p2.x, p2.y, p2.z))
class Mob extends Entity{
constructor(){
super(...arguments)
this.moveTime = 0
this.spinTime = 0
this.spin = 0
this.dirx = 0
this.dirz = 0
this.health = 0
this.lastY = this.y
}
AI(now){
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
if(this.moveTime > 0){
this.moveTime --
this.velx += this.dirx / 100
this.velz += this.dirz / 100
}else if(this.spinTime > 0){
this.spinTime --
this.yaw += this.spin
if(this.yaw > Math.PI*2){
this.yaw -= Math.PI*2
}
if(this.yaw < 0){
this.yaw += Math.PI*2
}
}else if(Math.random()>0.8){
if(Math.random() > 0.5){
this.spinTime = Math.random()*60
this.spin = (Math.random()>0.5 ? 0.05 : -0.05)
}else{
this.moveTime = Math.random()*60
this.dirx = Math.cos(this.yaw)
this.dirz = -Math.sin(this.yaw)
}
}
if(this.moveTime > 0 && Math.random() > 0.5){
var b = world.getBlock(round(this.x+this.dirx), this.y, round(this.z+this.dirz))
if(this.onGround && blockData[b].solid && !blockData[b].liquid){
this.vely = 0.3
}
if(blockData[b].liquid){
this.vely += 0.05
}
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
//health and death & stuff
if(this.onGround){
let fall = this.lastY - this.y
this.lastY = this.y
if(fall > 3){
let damage = Math.floor(fall-3)
this.health -= damage
this.harmEffect = 40
}
}
if(this.harmEffect > 0){
this.harmEffect --
}
if(this.health <= 0){
this.health = -1
this.dieEffect += 0.06
if(this.dieEffect > Math.PI2){
this.canDespawn = true
poof(this.x,this.y,this.z)
}
}
this.AI(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
}
onhit(damage){
this.health -= damage
this.harmEffect = 40
}
}
class Cow extends Mob{
constructor(x,y,z){
const tex = ["cow","cow","cowSide","cowSide","cowSide","cowSide"]
const shape = shapes.cow
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < blockSides.length; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, 0, 0, 0, 1, 1, 1, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.type = "Cow"
this.health = 10
}
}
class Pig extends Mob{
constructor(x,y,z){
const tex = new Array(6).fill("pinkWool")
const shape = shapes.cow
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < blockSides.length; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, 0, 0, 0, .9, .9, .9, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.type = "Pig"
this.health = 10
}
}
class Particle extends Entity{
constructor() {
super(...arguments)
this.rotationMatrix = new Matrix() //for pointing at camera
}
facePlayer(){
//var magnitude = dist3(this.x,this.y,this.z,p.x,p.y,p.z)
this.yaw = atan2(p.z - this.z, p.x-this.x)
var adjacent = dist2(this.x,this.z,p.x,p.z)
this.pitch = atan2(p.y - this.y, adjacent)
/*var r = this.rotationMatrix
r.identity()
var e = r.elements
var up = vec4
up.x = 0
up.y = 1
up.z = 0
e[12] = this.x
e[13] = this.y
e[14] = this.z
var z = vec1
z.x = this.x - p.x
z.y = this.y - p.y
z.z = this.z - p.z
z.normalize()
var x = up.crossProduct(z.x,z.y,z.z, vec2)
x.normalize()
var y = z.crossProduct(x.x,x.y,x.z, vec3)
y.normalize()
e[0] = x.x
e[1] = x.y
e[2] = x.z
e[4] = y.x
e[5] = y.y
e[6] = y.z
e[8] = z.x
e[9] = z.y
e[10] = z.z*/
/*/less code, more computing
var dx = p.x-this.x;
var dy = p.y-this.y;
var dz = p.z-this.z;
var rxy = Math.sqrt( Math.pow(dx,2) + Math.pow(dy,2) );
var lambda = Math.atan(dy/dx);
var phi = Math.atan(dz/rxy)
if (dx < 0) phi = phi + Math.PI;
if (dz < 0) lambda = -1 * lambda;
this.pitch = rxy
this.yaw = lambda*/
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.vely += -0.02 * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
let drag = this.onGround ? 0 : 0.9
this.velz += (this.velz * drag - this.velz) * dt
this.velx += (this.velx * drag - this.velx) * dt
// this.vely += (this.vely * 0.9 - this.vely) * dt
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.facePlayer()
}
render() {
const offsetY = this.offsetY
const modelMatrix = new Matrix();
modelMatrix.identity()
//var modelMatrix = this.rotationMatrix
modelMatrix.translate(this.x, this.y + offsetY, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerParticle, 0)
gl.uniform1f(glCache.uLightLevelParticle, lightLevel)
gl.uniformMatrix4fv(glCache.uViewParticle, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
class BlockParticle extends Particle{
constructor(tex, x,y,z){
let s=4/16
let bs = 3/16 //particle size
let p=1/(16+4)
let offX = random(p), offY = random(p)
let velx = (Math.random()-0.5) * 0.3,
vely = Math.random() * 0.2,
velz = (Math.random()-0.5) * 0.3
const shape = shapes.blockParticle
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex]]
let tx = texVerts[0] + offX
let ty = texVerts[1] + offY
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + (texShapeVerts[0]*s)
texture[index + 1] = ty + (texShapeVerts[1]*s)
texture[index + 2] = tx + (texShapeVerts[2]*s)
texture[index + 3] = ty + (texShapeVerts[3]*s)
texture[index + 4] = tx + (texShapeVerts[4]*s)
texture[index + 5] = ty + (texShapeVerts[5]*s)
texture[index + 6] = tx + (texShapeVerts[6]*s)
texture[index + 7] = ty + (texShapeVerts[7]*s)
index += 8
}
}
super(x, y, z, 0, 0, velx, vely, velz, bs, bs, bs, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Math.random()*3000)
}
}
win.BlockParticle = BlockParticle
class GenericParticle extends Particle{
constructor(x,y,z){
super(x, y, z, rand(-0.04, 0.04), 0, rand(-0.04, 0.04), 0, 0, 0.5, 0.5, 0.5, null, null, explodeVaos.size, rand(500, 2000), genericVaos[floor(rand(8))])
this.brightness = rand(0.8, 1)
this.speed = rand(0.01, 0.05)
}
update(){
this.vely = this.speed
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.facePlayer()
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0) * this.brightness
gl.bindTexture(gl.TEXTURE_2D, genericTexture)
gl.uniform1i(glCache.uSamplerParticle, 6) //explode texture
gl.uniform1f(glCache.uLightLevelParticle, lightLevel)
gl.uniformMatrix4fv(glCache.uViewParticle, false, modelViewProjectionMatrix.elements)
gl.uniform1i(glCache.isTextureAtlasParticle, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1i(glCache.isTextureAtlasParticle, 1)
}
}
win.GenericParticle = GenericParticle
function poof(x,y,z){
for(var i=0; i<20; i++){
world.particles.push(new GenericParticle(x,y,z))
}
}
win.poof = poof
class ExplodeParticle extends Particle{
constructor(x,y,z){
var vao = explodeVaos[8]
var frameTime = 25
super(x, y, z, 0, 0, 0, 0, 0, 2, 2, 2, null, null, explodeVaos.size, explodeVaos.length*frameTime, vao)
this.index = 0
this.brightness = (Math.random()/2)+0.5
this.frameTime = frameTime
}
update(){
let now = performance.now()
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.index = Math.floor((now - this.spawn) / this.frameTime)
this.vao = explodeVaos[this.index]
this.facePlayer()
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0) * this.brightness
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.uniform1i(glCache.uSamplerParticle, 3) //explode texture
gl.uniform1f(glCache.uLightLevelParticle, lightLevel)
gl.uniformMatrix4fv(glCache.uViewParticle, false, modelViewProjectionMatrix.elements)
gl.uniform1i(glCache.isTextureAtlasParticle, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1i(glCache.isTextureAtlasParticle, 1)
}
}
win.ExplodeParticle = ExplodeParticle
function initParticles(){
win.explodeVaos = explodeVaos
let shape = shapes.blockParticle
explodeVaos.size = shape.size
let shapeVerts = shape.verts
for(let y=0; y<4; y++){
for(let x=0; x<4; x++){
var texSize = 1/4
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let tx = x / 4
let ty = y / 4
texture[index    ] = tx + texSize
texture[index + 1] = ty
texture[index + 2] = tx
texture[index + 3] = ty
texture[index + 4] = tx
texture[index + 5] = ty + texSize
texture[index + 6] = tx + texSize
texture[index + 7] = ty + texSize
index += 8
}
}
var vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapeVerts.flat(Infinity)), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexParticle, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureParticle, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexParticle)
gl.enableVertexAttribArray(glCache.aTextureParticle)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
explodeVaos.push(vao)
}
}
//xp
shape = shapes.blockParticle
experienceOrbVaos.size = shape.size
shapeVerts = shape.verts
for(let y=0; y<4; y++){
for(let x=0; x<4; x++){
var texSize = 1/4
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let tx = x / 4
let ty = y / 4
texture[index    ] = tx + texSize
texture[index + 1] = ty
texture[index + 2] = tx
texture[index + 3] = ty
texture[index + 4] = tx
texture[index + 5] = ty + texSize
texture[index + 6] = tx + texSize
texture[index + 7] = ty + texSize
index += 8
}
}
var vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapeVerts.flat(Infinity)), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexParticle, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureParticle, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexParticle)
gl.enableVertexAttribArray(glCache.aTextureParticle)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
experienceOrbVaos.push(vao)
}
}
//generic particle
shape = shapes.blockParticle
genericVaos.size = shape.size
shapeVerts = shape.verts
for(let y=0; y<3; y++){
for(let x=0; x<3; x++){
var texSize = 1/3
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let tx = x / 3
let ty = y / 3
texture[index    ] = tx + texSize
texture[index + 1] = ty
texture[index + 2] = tx
texture[index + 3] = ty
texture[index + 4] = tx
texture[index + 5] = ty + texSize
texture[index + 6] = tx + texSize
texture[index + 7] = ty + texSize
index += 8
}
}
var vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapeVerts.flat(Infinity)), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexParticle, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureParticle, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexParticle)
gl.enableVertexAttribArray(glCache.aTextureParticle)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
genericVaos.push(vao)
}
}
}
let analytics = {
totalTickTime: 0,
worstFrameTime: 0,
totalRenderTime: 0,
totalFrameTime: 0,
lastUpdate: 0,
frames: 1,
displayedTickTime: "0",
displayedRenderTime: "0",
displayedFrameTime: "0",
displayedwFrameTime: 0,
fps: 0,
}
function chunkDist(c) {
let dx = p.x - c.x
let dz = p.z - c.z
if (dx > 16) {
dx -= 16
} else if (dx > 0) {
dx = 0
}
if (dz > 16) {
dz -= 16
} else if (dz > 0) {
dz = 0
}
return Math.sqrt(dx * dx + dz * dz)
}
function sortChunks(c1, c2) { //Sort the list of chunks based on distance from the player
let dx1 = p.x - c1.x - 8
let dy1 = p.z - c1.z - 8
let dx2 = p.x - c2.x - 8
let dy2 = p.z - c2.z - 8
return dx1 * dx1 + dy1 * dy1 - (dx2 * dx2 + dy2 * dy2)
}
function fillReqs(x, z) {
// Chunks must all be loaded first.
var done = true
for (let i = x - 3; i <= x + 3; i++) {
for (let j = z - 3; j <= z + 3; j++) {
let chunk = world.loaded[(i + world.offsetX) * world.lwidth + j + world.offsetZ]
if (!chunk.generated) {
world.generateQueue.push(chunk)
done = false
}
if (!chunk.populated && i >= x - 2 && i <= x + 2 && j >= z - 2 && j <= z + 2) {
world.populateQueue.push(chunk)
done = false
}
if (world.loadFrom.length && !chunk.loaded && i >= x - 1 && i <= x + 1 && j >= z - 1 && j <= z + 1) {
world.loadQueue.push(chunk)
done = false
} else if (!world.loadFrom.length && !chunk.loaded) {
chunk.loaded = true
}
if (!chunk.lit && i >= x - 1 && i <= x + 1 && j >= z - 1 && j <= z + 1) {
world.lightingQueue.push(chunk)
done = false
}
}
}
return done
}
function maxDist(x, z, x2, z2) {
let ax = abs(x2 - x)
let az = abs(z2 - z)
return max(ax, az)
}
function renderFilter(chunk) {
return maxDist(chunk.x >> 4, chunk.z >> 4, p.cx, p.cz) <= settings.renderDistance
}
function debug(message) {
let ellapsed = performance.now() - debug.start
if (ellapsed > 30) {
console.log(message, ellapsed.toFixed(2), "milliseconds")
}
}
function login(){
return new Promise((resolve, reject) => {
var w = width / 2
var h = height / 2
var x = w - (w/2)
var y = h - (h/2)
var w = open("https://www.nathaniel2006.repl.co/website/login.html", "login","resizable=no,width="+w+",height="+h+",top="+y+",left="+x)
function onmsg(event){
if (event.source !== w) return;
if (event.data.startsWith("logged:")){
w.close()
window.removeEventListener("message", onmsg);
resolve(event.data.replace("logged:",''))
}else if(event.data === "canceled"){
w.close()
window.removeEventListener("message", onmsg);
reject()
}
}
window.addEventListener("message", onmsg);
})
}
var achexUsername = "player"+Date.now()
win.username = ""
async function loggedIn(){
var logged = false;
await fetch("https://server.nathaniel2006.repl.co/getuser", {credentials:"include"}).then(r => r.text()).then(r => logged=r)
if(logged){
username = logged
return logged
}else{
if(confirm("Your not logged in. Head over to www.nathaniel2006.repl.co/login.html to login.\n\nPress OK to login,")){
var logged
await login().then(r => logged=r).catch(r => logged=r)
if(logged){
username = logged
return logged
}
}
return false
changeScene("main menu")
}
}
async function getWorlds(pingCallback){
if(!navigator.onLine) return "offline"
var logged = await loggedIn()
if(!logged){
return "notLoggedIn"
}
var worlds
await fetch("https://server.nathaniel2006.repl.co/worlds").then(r => r.json()).then(r => worlds=r)
if(pingCallback){
fetch("https://server.nathaniel2006.repl.co/worldsPing").then(r => r.json()).then(pingCallback)
}
return worlds
}
var multiplayer = null
var players = {}
win.playersInv = {}
function hasPlayer(username){
for(var i in players){
if(players[i].username === username) return true
}
}
function getPlayerByUsername(username){
for(var i in players){
if(players[i].username === username) return players[i]
}
}
/*const hub = "Minecraft"
function sendHub(obj){
let str = JSON.stringify({
"toH": hub,
"msg": JSON.stringify(obj)
})
multiplayer.send(str)
return str
}
function sendUser(user, obj){
let str = JSON.stringify({
"to": user,
"msg": JSON.stringify(obj)
})
multiplayer.send(str)
return str
}*/
function send(msg, to){
msg.FROM = achexUsername
msg.USER = username
if(to) msg.TO = to
multiplayer.send(JSON.stringify(msg))
}
var host
function initMultiplayer(target){
if(multiplayer) return
var ban = []
host = false
if(!target){
target = world.id || 0
host = true
}
players = {} //empty
multiplayer = new WebSocket("wss://server.nathaniel2006.repl.co/ws?target="+target)
multiplayer.onopen = e => {
/*multiplayer.send(JSON.stringify({
"auth": achexUsername,
"passwd":"none"
}))
multiplayer.send(JSON.stringify({
"joinHub":hub,
"passwd":"none"
}))*/
send({
"type":"connect",
username: username,
id: achexUsername
})
if(host){
send({
"type":"init",
name: world.name
})
}
send({
"type":"getSave"
})
var invStuff = {}
multiplayer.pos = setInterval(() => {
if(world){
invStuff.invItems = invItems
invStuff.hotbar = inventory.hotbar
invStuff.x = p.x
invStuff.y = p.y
invStuff.z = p.z
invStuff.survivStr = world.getSurvivStr()
send({type:"pos", data:p3, host:host, dimension: world.type, inv:invStuff})
if(host){
send({type:"entityPosAll", data: world.getEntities()})
}
}
}, 500)
}
multiplayer.onmessage = msg => {
let packet = JSON.parse(msg.data)
var author = packet.FROM //should be the id
var data = packet//.msg ? JSON.parse(packet.msg) : {}
if(data.type === "ping"){
send({
type:"pong",
data:Date.now()
})
}else if(data.type === "getSave" && host){
if(ban.includes(data.USER)){
send({
type: "ban",
data: data.USER
}, author)
}else{
send({
type:"loadSave",
data:world.getSaveString(),
nether:world.getNetherSaveString(),
mod: world.mod,
id: world.id || Date.now(),
time: worldTime,
dimension: world.type || "overworld",
cheats:cheats,
inv: playersInv[data.USER]
}, author)
}
}else if(data.type === "loadSave"){
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
world.id = data.id
if (data.data) {
try {
world.loadSave(data.data)
}catch(e) {
alert("Unable to load save code")
return
}
}
if (data.nether) {
let world = dimensions.nether
try {
world.loadSave(data.nether)
}catch(e) {
alert("Unable to load nether save code")
return
}
}
world.mod = data.mod
if(data.mod){
try{
var mod = Object.constructor("return "+data.mod)()
mod()
}catch(e){console.log("error loading mod: "+e)}
}
if(survival){
setHotbar([0,0,0,0,0,0,0,0,0])
}
world = dimensions[data.dimension || "overworld"]
worldTime = data.time
cheats = data.cheats
if(data.inv){
invItems = data.inv.invItems
inventory.hotbar = data.inv.hotbar
if(data.inv.x){
p.x = data.inv.x
p.y = data.inv.y
p.z = data.inv.z
}
if(data.survivStr) world.loadSurvivStr(data.survivStr)
}
changeScene("loading")
}else if(data.type === "pos"){
var pos = data.data
if(!players[author]){
players[author] = new Player(abs( (pos.username || "").hashCode()) % 80 + 1)
}
let thisplayer = players[author]
thisplayer.x = pos.x
thisplayer.y = pos.y - 1
thisplayer.z = pos.z
thisplayer.yaw = pos.ry
thisplayer.dimension = data.dimension
thisplayer.id = author
thisplayer.survival = pos.survival
thisplayer.harmEffect = pos.harmEffect
if(thisplayer.username !== pos.username){
thisplayer.username = pos.username
thisplayer.changeBlock(abs((pos.username || "").hashCode()) % 80 + 1)
}
thisplayer.crackPos = pos.crackPos
thisplayer.crack = pos.crack //crack number
thisplayer.burning = pos.burning
if(data.host){
worldTime = pos.time
}
playersInv[data.USER] = data.inv
}else if(data.type === "dc"){
delete players[data.data]
}else if(data.type === "setBlock"){
let pos = data.data
let world = dimensions[pos.dimension]
let prevBlock = world.getBlock(pos.x, pos.y, pos.z)
world.setBlock(pos.x, pos.y, pos.z, pos.block, false, false, true)
}else if(data.type === "entityPos"){
let world = getWorld(data.dimension)
world.posEntity(data, true)
}else if(data.type === "entityPosAll"){
var arr = data.data
//if(arr.length !== world.entities.length) world.entities = []
for(var i=0; i<arr.length; i++){
let world = getWorld(arr[i].dimension)
world.posEntity(arr[i], true)
}
}else if(data.type === "entityDelete"){
world.deleteEntity(data.id, true)
}else if(data.type === "achievment"){
Messages.add(data.USER+" earned the achievment: "+data.data)
}else if(data.type === "hit"){
if(survival){
damage(data.data || 1, data.username+" killed "+username)
p.velocity.x += data.velx
p.velocity.z += data.velz
}
}else if(data.type === "harmEffect"){
players[data.id].harmEffect = 40
}else if(data.type === "kill"){
dieMessage = data.data
die()
}else if(data.type === "die"){
var ent = players[data.id]
ent.die = true
poof(ent.x, ent.y, ent.z)
Messages.add(data.message)
}else if(data.type === "message"){
if(data.fromServer){
Messages.add(data.data)
}else{
Messages.write(data.data, data.username)
}
}else if(data.type === "playSound"){
var volume = 1
if((data.x || data.x === 0)){
volume = posSound(data.x,data.y,data.z)
}
if(data.volume) volume *= data.volume
playSound(data.data, 0, volume)
}else if(data.type === "eval"){
try{
eval(data.data)
}catch(e){
console.error(e)
}
}else if(data.type === "error"){
alert(data.data)
}
}
multiplayer.onclose = () => {
alert("Multiplayer connection lost!")
clearInterval(multiplayer.pos)
multiplayer = null
}
multiplayer.onerror = e => {
console.log("Multiplayer error!", e)
multiplayer.close()
}
win.ban = username => {
if(!host) return alert("Only the host can ban")
send({
type: "ban",
data: username
})
if(!ban.includes(username)) ban.push(username)
}
win.unban = username => {
if(!host) return alert("Only the host can unban")
if(ban.includes(username)) {
var i = ban.indexOf(username)
if(i === -1) return
ban.splice(i,1)
}
}
}
function getNetherBiome(biome) {
if(biome > 0.4 && biome < 0.5){
return 1
}else if(biome > 0.4){
return 2
}
return 0
}
function getBiome(biome){
if(biome > 0.6){
return "snowyField"
}else if(biome > 0.5){
return "desert"
}else if(biome > 0.4){
return "field"
}else if(biome > 0.36){
return "jungle"
}else if(biome > 0.3){
return "giantJungle"
}else{
return "oakForest"
}
}
function getDimension(){
if(world.type === ""){
return "overworld"
}else return world.type
}
function getWorld(d){
if(!d){
d = "overworld"
}
return dimensions[d]
}
win.getWorld = getWorld
let skyLight = 0
let worldTime = 0 //current in-game time
let fogDist = 16
class World {
constructor(type) {
generatedChunks = 0
fogDist = 16
p.y = superflat ? 6 : (round(noiseProfile.noise(8 * generator.smooth, 8 * generator.smooth) * generator.height) + 2 + generator.extra)
this.type = type || ""
this.spawnPoint = {
x: 0,
y: p.y,
z: 0
}
//Initialize the world's arrays
this.chunks = []
this.loaded = []
this.sortedChunks = []
this.doubleRenderChunks = []
this.offsetX = 0
this.offsetZ = 0
this.lwidth = 0
this.chunkGenQueue = []
this.populateQueue = []
this.generateQueue = []
this.lightingQueue = []
this.loadQueue = []
this.meshQueue = []
this.loadFrom = []
this.entities = []
this.particles = []
this.lastChunk = ","
this.edited = false
this.saveStr = null
}
genChunk(chunk) {
let x = chunk.x >> 4
let z = chunk.z >> 4
let trueX = chunk.x
let trueZ = chunk.z
if (chunk.generated) {
return false
}
let hide = !loadString
let smoothness = generator.smooth
let hilliness = generator.height
let biomeSmooth = generator.biomeSmooth
//{ for the nether terrain
const biomeSize = 1//0.001 // smaller = bigger
const flatness = 40 // bigger = flatter
const overhang = 3 // bigger = more overhang; flatter = less overhang
const bottom = 4 // Minimum height of the ground
const hillSize = 0.006 // smaller = bigger; 0.005 to 0.01 seems the be a reasonable range
//}
let gen = 0, floatGen = 0
for (let i = 0; i < 16; i++) {
for (let k = 0; k < 16; k++) {
floatGen = noiseProfile.noise((trueX + i) * smoothness, (trueZ + k) * smoothness) * hilliness + generator.extra
gen = superflat === "island" && this.type === "" ? win.islandGenerator.GetHeight(x*16+i, z*16+k) : (superflat ? 4 : Math.round(floatGen))
if(this.type === "nether" && superflat){
gen = Math.round(floatGen)
}
chunk.tops[k * 16 + i] = gen
if(this.type === "nether"){
let biome = noiseProfile.noise((trueX + i) * biomeSmooth, (trueZ + k) * biomeSmooth)
let b = getNetherBiome(biome)
let block = blockIds.netherrack
if(b === 1){
block = blockIds.warpedNylium
}else if(b === 2){
block = blockIds.crimsonNylium
}
const smo = noise((trueX + i) * biomeSize, (trueZ + k) * biomeSize) * flatness + 40
let top = 0
let solid = true
for (let j = 1; j < 128; j++) {
if (noise((trueX + i)/smo, overhang*j/smo, (trueZ + k)/smo) - (j - bottom) * hillSize > 0) {
chunk.setBlock(i, j, k, blockIds.netherrack)
top = j
solid = true
} else if (solid) {
chunk.setBlock(i, j - 1, k, block)
/*if (chunk.getBlock(i, j - 2, k)) chunk.setBlock(i, j - 2, k, block)
if (chunk.getBlock(i, j - 3, k)) chunk.setBlock(i, j - 3, k, block)
if (chunk.getBlock(i, j - 4, k)) chunk.setBlock(i, j - 4, k, block)*/
solid = false
} else if(j < 80){
chunk.setBlock(i, j-1, k, blockIds.Lava)
if(chunk.getBlock(i, j - 2, k) === block) chunk.setBlock(i, j-2, k, blockIds.netherrack)
}
}
chunk.tops[k * 16 + i] = top
chunk.setBlock(i, 0, k, blockIds.bedrock)
block = blockIds.netherrack
for(let j=1; j<gen; j++){
chunk.setBlock(i, maxHeight - 50 - j, k, block)
}
chunk.setBlock(i,maxHeight-50,k, blockIds.bedrock)
chunk.ceils[k * 16 + i] = maxHeight - 50 - gen
}else if (superflat === "island") {
if (win.islandGenerator.GetWaterDepth(x*16+i, z*16+k) > 0) {
chunk.setBlock(i, gen, k, blockIds.Water);
chunk.setBlock(i, gen - 1, k, blockIds.Water)
chunk.setBlock(i, gen - 2, k, blockIds.dirt)
chunk.setBlock(i, gen - 3, k, blockIds.dirt)
}   else {
let biomeHere =win.islandGenerator.GetBiomeType(x*16+i, z*16+k);
if (biomeHere === -3161286) {
chunk.setBlock(i, gen, k, blockIds.sand)
chunk.setBlock(i, gen - 1, k, blockIds.sand)
chunk.setBlock(i, gen - 2, k, blockIds.sand)
chunk.setBlock(i, gen - 3, k, blockIds.sand)
}   else if (biomeHere === -1) {
chunk.setBlock(i, gen, k, blockIds.whiteConcrete)
chunk.setBlock(i, gen - 1, k, blockIds.whiteConcrete)
chunk.setBlock(i, gen - 2, k, blockIds.stone)
chunk.setBlock(i, gen - 3, k, blockIds.stone)
}   else if (biomeHere === -4934476 || biomeHere === -8355712 || biomeHere === -6963874) {
chunk.setBlock(i, gen, k, blockIds.stone)
chunk.setBlock(i, gen - 1, k, blockIds.stone)
chunk.setBlock(i, gen - 2, k, blockIds.stone)
chunk.setBlock(i, gen - 3, k, blockIds.stone)
} else if (biomeHere === -65536) {
chunk.setBlock(i, gen, k, blockIds.Lava)
chunk.setBlock(i, gen - 1, k, blockIds.stone)
chunk.setBlock(i, gen - 2, k, blockIds.stone)
chunk.setBlock(i, gen - 3, k, blockIds.stone)
} else {
chunk.setBlock(i, gen, k, blockIds.grass)
chunk.setBlock(i, gen - 1, k, blockIds.dirt)
chunk.setBlock(i, gen - 2, k, blockIds.dirt)
chunk.setBlock(i, gen - 3, k, blockIds.dirt)
}
}
} else if(superflat){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.grass);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
}else{
let biome = noiseProfile.noise((trueX + i) * biomeSmooth, (trueZ + k) * biomeSmooth);
var b = getBiome(biome)
if(b === "desert"){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.sand);
chunk.setBlock(i, gen - 1, k, blockIds.sand);
chunk.setBlock(i, gen - 2, k, blockIds.sandstone);
chunk.setBlock(i, gen - 3, k, blockIds.sandstone);
if(gen<60) {
gen = 59;
chunk.setBlock(i, gen+1, k, blockIds.Water | SLAB);
chunk.setBlock(i, gen, k, blockIds.Water);
chunk.setBlock(i, gen - 1, k, blockIds.Water);
chunk.setBlock(i, gen - 2, k, blockIds.gravel);
chunk.setBlock(i, gen - 3, k, blockIds.gravel);
}
if(gen>120){
chunk.setBlock(i, gen, k, blockIds.stone);
}
if(gen>140){
chunk.setBlock(i, gen, k, blockIds.sand);
}
}
if(b === "field" || b === "oakForest"){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.grass);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
if(gen<60) {
gen = 59;
chunk.setBlock(i, gen+1, k, blockIds.Water | SLAB);
chunk.setBlock(i, gen, k, blockIds.Water);
chunk.setBlock(i, gen - 1, k, blockIds.Water);
chunk.setBlock(i, gen - 2, k, blockIds.gravel);
chunk.setBlock(i, gen - 3, k, blockIds.gravel);
}
}
if(b === "snowyField"){
chunk.tops[k * 16 + i] = gen;
if(gen >= 60){
var h = ceil(((floatGen + 0.5) % 1) * 8)
switch(h){//really smooth terrain!
case 1:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER1)
break
case 2:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER2)
break
case 3:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER3)
break
case 4:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER4)
break
case 5:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER5)
break
case 6:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER6)
break
case 7:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER7)
break
case 8:
chunk.setBlock(i, gen + 1, k, blockIds.snowBlock)
break
}
chunk.setBlock(i, gen, k, blockIds.grass | CROSS);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
}
if(gen<60) {
gen = 59;
chunk.setBlock(i, gen+1, k, blockIds.ice);
chunk.setBlock(i, gen, k, blockIds.ice);
chunk.setBlock(i, gen - 1, k, blockIds.Water);
chunk.setBlock(i, gen - 2, k, blockIds.gravel);
chunk.setBlock(i, gen - 3, k, blockIds.gravel);
}
}
if(b === "jungle" || b === "giantJungle"){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.mossBlock);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
if(gen<60) {
chunk.setBlock(i, 60, k, blockIds.Water | SLAB);
for(var y=59; y>=gen; y--){
chunk.setBlock(i, y, k, blockIds.Water);
}
chunk.setBlock(i, gen, k, blockIds.gravel);
chunk.setBlock(i, gen - 1, k, blockIds.gravel);
}
}
}
if(this.type !== "nether"){
for (let j = 1; j < gen - 3; j++) {
chunk.setBlock(i, j, k, blockIds.stone)
}
chunk.setBlock(i, 0, k, blockIds.bedrock)
}
}
}
chunk.generated = true
}
getAdjacentSubchunks(x, y, z, lights) {
let minChunkX = x - 16 >> 4
let maxChunkX = x + 16 >> 4
let minChunkY = y - 16 >> 4
let maxChunkY = y + 16 >> 4
let minChunkZ = z - 16 >> 4
let maxChunkZ = z + 16 >> 4
let section = null
let ret = []
for (x = minChunkX; x <= maxChunkX; x++) {
for (let y = minChunkY; y <= maxChunkY; y++) {
for (z = minChunkZ; z <= maxChunkZ; z++) {
if (y < 0) {
ret.push(lights ? emptySection.light : emptySection.blocks)
} else if (this.chunks[x] && this.chunks[x][z]) {
section = this.chunks[x][z].sections[y] || emptySection
ret.push(lights ? section.light : section.blocks)
} else {
ret.push(lights ? emptySection.light : emptySection.blocks)
}
}
}
}
return ret
}
updateBlock(x, y, z, lazy, leaveMe) {
let chunk = this.chunks[x >> 4] && this.chunks[x >> 4][z >> 4]
if (chunk && chunk.buffer) {
chunk.updateBlock(x & 15, y, z & 15, this, lazy, leaveMe)
}
}
getChunk(x, z) {
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
return this.loaded[X * this.lwidth + Z]
}
getWorldBlock(x, y, z) {
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return blockIds.air
}
return this.chunks[x >> 4][z >> 4].getBlock(x & 15, y, z & 15)
}
getBlock(x, y, z) {
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (y > maxHeight) {
return blockIds.air
} else if (y < 0) {
return blockIds.air
} else if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.getWorldBlock(x, y, z)
}
return this.loaded[X * this.lwidth + Z].getBlock(x & 15, y, z & 15)
}
setBlock(x, y, z, blockID, lazy, leaveSelf, remote, keepTags) {
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
if(y < 0) return
let chunk = this.chunks[x >> 4][z >> 4]
let xm = x & 15
let zm = z & 15
if (blockID) {
chunk.setBlock(xm, y, zm, blockID, !lazy)
let data = blockData[blockID]
if (!lazy && chunk.buffer && (!data.transparent || data.lightLevel) && screen !== "loading") {
this.updateLight(x, y, z, true, data.lightLevel)
}
} else {
let data = blockData[chunk.getBlock(xm, y, zm)]
chunk.deleteBlock(xm, y, zm, !lazy)
if (!lazy && chunk.buffer && (!data.transparent || data.lightLevel) && screen !== "loading") {
this.updateLight(x, y, z, false, data.lightLevel)
}
}
if(!keepTags)chunk.setTags(xm, y, zm, null)
if (lazy) {
return
}
if(multiplayer && !remote){
send({type:"setBlock", data:{x:x, y:y, z:z, block:blockID, dimension:getDimension()}})
}
//Update the 6 adjacent blocks and 1 changed block
if (xm && xm !== 15 && zm && zm !== 15) {
chunk.updateBlock(xm - 1, y, zm, this, lazy)
chunk.updateBlock(xm + 1, y, zm, this, lazy)
chunk.updateBlock(xm, y - 1, zm, this, lazy)
chunk.updateBlock(xm, y + 1, zm, this, lazy)
chunk.updateBlock(xm, y, zm - 1, this, lazy)
chunk.updateBlock(xm, y, zm + 1, this, lazy)
}
else {
this.updateBlock(x - 1, y, z, lazy)
this.updateBlock(x + 1, y, z, lazy)
this.updateBlock(x, y - 1, z, lazy)
this.updateBlock(x, y + 1, z, lazy)
this.updateBlock(x, y, z - 1, lazy)
this.updateBlock(x, y, z + 1, lazy)
}
chunk.updateBlock(xm, y, zm, this, lazy, leaveSelf)
// Update the corner chunks so shadows in adjacent chunks update correctly
if (xm | zm === 0) { this.updateBlock(x - 1, y, z - 1, lazy); }
if (xm === 15 && zm === 0) { this.updateBlock(x + 1, y, z - 1, lazy); }
if (xm === 0 && zm === 15) { this.updateBlock(x - 1, y, z + 1, lazy); }
if (xm & zm === 15) { this.updateBlock(x + 1, y, z + 1, lazy); }
this.edited = true
}
getWorldTags(x, y, z) {
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
return this.chunks[x >> 4][z >> 4].getTags(x & 15, y, z & 15)
}
getTags(x,y,z){
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (y > maxHeight) {
return
} else if (y < 0) {
return
} else if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.getWorldTags(x, y, z)
}
return this.loaded[X * this.lwidth + Z].getTags(x & 15, y, z & 15)
}
getTagByName(x,y,z,n){
var t = this.getTags(x,y,z)
return t && t[n]
}
setTags(x,y,z,data){
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
if(y < 0) return
let chunk = this.chunks[x >> 4][z >> 4]
let xm = x & 15
let zm = z & 15
chunk.setTags(xm, y, zm, data)
}
setTagByName(x,y,z,n,data){
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
if(y < 0) return
let chunk = this.chunks[x >> 4][z >> 4]
let xm = x & 15
let zm = z & 15
chunk.setTagByName(xm, y, zm, n,data)
}
getLight(x, y, z, blockLight = 0) {
if(y < 0) return 0
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.chunks[x >> 4][z >> 4].getLight(x & 15, y, z & 15, blockLight)
}
return this.loaded[X * this.lwidth + Z].getLight(x & 15, y, z & 15, blockLight)
}
setLight(x, y, z, level, block) {
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
return this.loaded[X * this.lwidth + Z].setLight(x & 15, y, z & 15, level, block)
}
updateLight(x, y, z, place, blockLight = 0) {
let chunk = this.getChunk(x, z)
let cx = x & 15
let cz = z & 15
let center = chunk.getLight(cx, y, cz, 0)
let blight = chunk.getLight(cx, y, cz, 1)
let up = this.getLight(x, y+1, z)
let down = this.getLight(x, y-1, z)
let north = this.getLight(x, y, z+1)
let south = this.getLight(x, y, z-1)
let east = this.getLight(x+1, y, z)
let west = this.getLight(x-1, y, z)
let spread = []
if (!place) { // Block was removed; increase light levels
if ((up & 15) === 15) {
for (let i = y; i > 0; i--) {
if (blockData[chunk.getBlock(cx, i, cz)].transparent) {
chunk.setLight(cx, i, cz, 15)
spread.push(x, i, z)
} else {
break
}
}
chunk.spreadLight(spread, 14, true)
} else {
center = max(up, down, north, south, east, west)
if (center > 0) center -= 1
this.setLight(x, y, z, center)
if (center > 1) {
spread.push(x, y, z)
chunk.spreadLight(spread, center - 1, true)
}
}
// Block light levels
if (!blockLight || blockLight < blight) {
spread.length = 0
up = this.getLight(x, y+1, z, 1)
down = this.getLight(x, y-1, z, 1)
north = this.getLight(x, y, z+1, 1)
south = this.getLight(x, y, z-1, 1)
east = this.getLight(x+1, y, z, 1)
west = this.getLight(x-1, y, z, 1)
blight = max(up, down, north, south, east, west)
if (blight > 0) blight -= 1
this.setLight(x, y, z, blight, 1)
if (blight > 1) {
spread.push(x, y, z)
chunk.spreadLight(spread, blight - 1, true, 1)
}
}
}
else if (place && (center !== 0 || blight !== 0)) { // Block was placed; decrease light levels
let respread = []
for (let i = 0; i <= center + 1; i++) respread[i] = []
chunk.setLight(cx, y, cz, 0, 0)
chunk.setLight(cx, y, cz, 0, 1)
spread.push(x, y, z)
// Sky light
if (center === 15) {
for (let i = y-1; i > 0; i--) {
if (blockData[chunk.getBlock(cx, i, cz)].transparent) {
chunk.setLight(cx, i, cz, 0)
spread.push(x, i, z)
} else {
break
}
}
}
chunk.unSpreadLight(spread, center - 1, respread)
chunk.reSpreadLight(respread)
// Block light
if (blight) {
respread.length = 0
for (let i = 0; i <= 15/*blight + 1*/; i++) respread[i] = []
spread.length = 0
spread.push(x, y, z)
chunk.unSpreadLight(spread, blight - 1, respread, 1)
chunk.reSpreadLight(respread, 1)
}
}
if (place && blockLight) { // Light block was placed
this.setLight(x, y, z, blockLight, 1)
spread.length = 0
spread.push(x, y, z)
chunk.spreadLight(spread, blockLight - 1, true, 1)
} else if (!place && blockLight) { // Light block was removed
this.setLight(x, y, z, 0, 1)
spread.push(x, y, z)
let respread = []
for (let i = 0; i <= 15/*blockLight + 1*/; i++) respread[i] = []
chunk.unSpreadLight(spread, blockLight - 1, respread, 1)
chunk.reSpreadLight(respread, 1)
}
}
spawnBlock(x, y, z, blockID) {
//Sets a block anywhere without causing block updates around it. Only to be used in world gen.
if(blockData[blockID].crossShape) blockID |= CROSS
if(blockData[blockID].tallcrossShape) blockID |= TALLCROSS
if(blockData[blockID].cactus) blockID |= CACTUS
let chunkX = x >> 4
let chunkZ = z >> 4
if (!this.chunks[chunkX]) {
this.chunks[chunkX] = []
}
let chunk = this.chunks[chunkX][chunkZ]
if (!chunk) {
chunk = new Chunk(chunkX * 16, chunkZ * 16,this.type, this)
this.chunks[chunkX][chunkZ] = chunk
}
if (chunk.buffer) {
//Only used if spawning a block post-gen
this.setBlock(x, y, z, blockID, true)
} else if (!chunk.getBlock(x & 15, y, z & 15)) {
chunk.setBlock(x & 15, y, z & 15, blockID)
}
}
getEntity(id){
for(var i=0; i<this.entities.length; i++){
if(this.entities[i].id === id){
return i
}
}
}
getEntPos(ent){
return {x:ent.x, y:ent.y, z:ent.z, yaw:ent.yaw, pitch:ent.pitch, block:ent.block, velx:ent.velx, vely:ent.vely, velz:ent.velz, amount:ent.amount, solidOnGround:ent.solidOnGround,harmEffect:ent.harmEffect, health:ent.health, from:ent.from, spawn:ent.spawn, value:ent.value, burning:ent.burning}
}
addEntity(ent, remote){
if(!ent.id)ent.id = Date.now()
if(multiplayer && !remote){
//host controls entities
send({type:"entityPos", id:ent.id, entType:ent.type, pos:this.getEntPos(ent), dimension:this.type})
this.entities.push(ent)
}else{
this.entities.push(ent)
}
}
deleteEntity(id, remote, i){
i = (i || i===0) ? i : this.getEntity(id)
if(!(i || i===0)) return
var ent = this.entities[i]
if(multiplayer && !remote){
send({type:"entityDelete", id:ent.id})
}
this.entities.splice(i, 1)
}
posEntity(d, m){ //for multiplayer.onmessage only
let p = d.pos
var i = this.getEntity(d.id)
var ent
if(i || i===0){
ent = this.entities[i]
}else{
switch(d.entType){
case "Item":
ent = new Item(0, 0, 0, 0, 0, 0, p.block, false, p.amount)
break
case "BlockEntity":
ent = new BlockEntity(p.block, 0,0,0, p.solidOnGround)
break
case "PrimedTNT":
ent = new PrimedTNT(0,0,0)
break
case "EnderPearl":
ent = new EnderPearl(0,0,0,0,0,0)
break
case "Snowball":
ent = new Snowball(0,0,0,0,0,0)
break
case "ExperienceOrb":
ent = new ExperienceOrb(0,0,0,p.value)
break
case "Cow":
ent = new Cow(0,0,0)
break
case "Pig":
ent = new Pig(0,0,0)
break
default:
break
}
if(!ent) return
ent.id = d.id
this.addEntity(ent, true)
}
if(!ent) return
ent.x = p.x
ent.y = p.y
ent.z = p.z
ent.yaw = p.yaw
ent.pitch = p.pitch
ent.velx = p.velx
ent.vely = p.vely
ent.velz = p.velz
ent.harmEffect = p.harmEffect
ent.health = p.health
ent.from = p.from
if(!m)ent.spawn = p.spawn
ent.burning = p.burning
}
getEntities(){
if(this.entities.length === 0) return this.entities //its an empty array, so no problems
return this.entities.map(ent => {
return {
id:ent.id,
entType:ent.type,
pos: this.getEntPos(ent),
dimension:this.type
}
})
}
tick() {
let tickStart = performance.now()
let maxChunkX = (p.x >> 4) + settings.renderDistance
let maxChunkZ = (p.z >> 4) + settings.renderDistance
let chunk = maxChunkX + "," + maxChunkZ
if (chunk !== this.lastChunk) {
this.lastChunk = chunk
this.loadChunks()
this.chunkGenQueue.sort(sortChunks)
}
worldTime += 0.0005
if (controlMap.break.pressed && !Key.control && p.lastBreak < Date.now() - 250 && screen === "play" && !survival && !entHitbox.ent) { // survival breaking isn't instant
changeWorldBlock(0)
}
if ((controlMap.place.pressed || Key.leftMouse && Key.control) && p.lastPlace < Date.now() - 250 && !p.autoBuild) {
newWorldBlock()
}
if (controlMap.break.pressed && p.autoBreak && !Key.control) {
changeWorldBlock(0)
}
if ((controlMap.place.pressed || Key.leftMouse && Key.control) && p.autoBuild) {
newWorldBlock()
}
for (let i = 0; i < this.sortedChunks.length; i++) {
this.sortedChunks[i].tick()
}
for (let i = this.entities.length - 1; i >= 0; i--) {
const entity = this.entities[i]
entity.update()
if (entity.canDespawn || (entity.y <= -64)) {
this.deleteEntity(0, false, i)
}
}
for (let i = this.particles.length - 1; i >= 0; i--) {
const particle = this.particles[i]
particle.update()
if (particle.canDespawn || (particle.y <= -64)) {
this.particles.splice(i,1)
}
}
updtPlayer()
if(multiplayer){
for(let i in players){
players[i].update()
}
}
do {
let doneWork = false
debug.start = performance.now()
if (this.meshQueue.length) {
// Update all chunk meshes.
let len = this.meshQueue.length - 1
do {
this.meshQueue.pop().genMesh()
} while(this.meshQueue.length)
doneWork = true
debug("Meshes")
}
if (this.generateQueue.length && !doneWork) {
let chunk = this.generateQueue.pop()
this.genChunk(chunk)
doneWork = true
}
if (this.populateQueue.length && !doneWork) {
let chunk = this.populateQueue[this.populateQueue.length - 1]
if (!chunk.caves) {
chunk.carveCaves()
debug("Carve caves")
} else if (!chunk.populated) {
chunk.populate()
this.populateQueue.pop()
}
doneWork = true
}
if (this.loadQueue.length && !doneWork) {
this.loadQueue.pop().load()
doneWork = true
if (!this.loadQueue.length) {
return
}
}
if (this.lightingQueue.length && !doneWork) {
this.lightingQueue.pop().fillLight()
doneWork = true
}
if (this.chunkGenQueue.length && !doneWork) {
let chunk = this.chunkGenQueue[0]
if (!fillReqs(chunk.x >> 4, chunk.z >> 4)) {}
else if (!chunk.optimized) {
chunk.optimize(this)
debug("Optimize")
} else if (!chunk.buffer) {
chunk.genMesh()
debug("Initial mesh")
} else {
this.chunkGenQueue.shift()
generatedChunks++
}
doneWork = true
}
if (!doneWork) {
break
}
} while(performance.now() - tickStart < 5)
}
render() {
gl.useProgram(program3D);
initModelView(p)
if(this.type === "nether"){
skyLight = 0
if(inWater === 1) gl.clearColor(0,0,255,1)
else if(inWater === 2) gl.clearColor(255,0,0,1)
else gl.clearColor(0, 0, 0, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
}else{
skyLight = min(max(abs(worldTime % (Math.PId*1.2) - Math.PI) / Math.PI - 0.04, 0.1), 1)
if(inWater === 1) gl.clearColor(0,0,255,1)
else if(inWater === 2) gl.clearColor(255,0,0,1)
else gl.clearColor(sky[0] * skyLight, sky[1] * skyLight, sky[2] * skyLight, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
//skybox render
if(inWater === 0){
/*gl.useProgram(skyboxProgram);
gl.uniform1f(glCache.skyboxTime, worldTime);
gl.depthFunc(gl.ALWAYS);
gl.disable(gl.CULL_FACE);
skybox.render();
gl.depthFunc(gl.LESS);
gl.enable(gl.CULL_FACE)*/
}
}
gl.useProgram(program3D);
renderedChunks = 0
let dist = (settings.renderDistance) * 16
if (this.chunkGenQueue.length) {
this.chunkGenQueue.sort(sortChunks)
let chunk = this.chunkGenQueue[0]
dist = min(dist, chunkDist(chunk))
}
if (dist !== fogDist) {
if (fogDist < dist - 0.1) fogDist += (dist - fogDist) / 120
else if (fogDist > dist + 0.1) fogDist += (dist - fogDist) / 30
else fogDist = dist
}
gl.uniform3f(glCache.uPos, p.x, p.y, p.z)
gl.uniform1f(glCache.uDist, fogDist)
// this is interesting because uTime is not actually based on time
// if you are going to change this to use actual time change line 4487 as well
// since it depends on it
gl.uniform1f(glCache.uTime, skyLight)
if(inWater) gl.uniform3f(glCache.skyColor, 0, 0, 255)
else gl.uniform3f(glCache.skyColor, sky[0], sky[1], sky[2])
gl.uniform1i(glCache.inWater, inWater)
let c = this.sortedChunks
for (let chunk of c) {
chunk.render()
}
if (this.doubleRenderChunks.length) {
gl.depthMask(false)
gl.uniform1i(glCache.uTrans, 1)
for (let chunk of this.doubleRenderChunks) {
chunk.render()
}
gl.uniform1i(glCache.uTrans, 0)
gl.depthMask(true)
}
gl.uniform3f(glCache.uPos, 0, 0, 0)
gl.uniform1i(glCache.inWater, 0)
gl.useProgram(programEntity)
for (let i = this.entities.length - 1; i >= 0; i--) {
const entity = this.entities[i]
entity.render()
}
if(multiplayer){
for(let i in players){
let player = players[i]
if(player.dimension === world.type){
player.render()
if(player.crack > -1 && player.survival){
let pos = player.crackPos
crack.entity.x = pos[0]
crack.entity.y = pos[1]
crack.entity.z = pos[2]
crack.entity.changeTexture(crack[player.crack])
crack.entity.render()
}
}
}
}
renderPlayer()
if(crack.idx > -1 && survival){
crack.entity.x = crack.pos[0]
crack.entity.y = crack.pos[1]
crack.entity.z = crack.pos[2]
crack.entity.changeTexture(crack.tex)
crack.entity.render()
}
if(p.burning && !p.thirdPerson){
fireBlock.x = p.x
fireBlock.y = p.y
fireBlock.z = p.z
fireBlock.pitch = p.rx
fireBlock.yaw = p.ry
gl.disable(gl.CULL_FACE)
fireBlock.render()
gl.enable(gl.CULL_FACE)
}
gl.useProgram(programParticle)
for (let i = this.particles.length - 1; i >= 0; i--) {
const particle = this.particles[i]
particle.render()
}
gl.useProgram(program3D)
if(hitBox.pos) {
blockOutlines = true
blockFill = false
block2(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], 0, p)
blockOutlines = false
blockFill = true
}
//clear alpha so transparent things aren't white
gl.clearColor(1, 1, 1, 1);
gl.colorMask(false, false, false, true);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.colorMask(true, true, true, true);
}
loadChunks() {
let renderDistance = settings.renderDistance + 3
let cx = p.x >> 4
let cz = p.z >> 4
p.cx = cx
p.cz = cz
let minChunkX = cx - renderDistance
let maxChunkX = cx + renderDistance
let minChunkZ = cz - renderDistance
let maxChunkZ = cz + renderDistance
this.offsetX = -minChunkX
this.offsetZ = -minChunkZ
this.lwidth = renderDistance * 2 + 1
this.chunkGenQueue.length = 0
this.lightingQueue.length = 0
this.populateQueue.length = 0
this.generateQueue.length = 0
if (this.loaded.length > this.lwidth * this.lwidth) {
this.loaded.length = this.lwidth * this.lwidth
}
let i = 0
for (let x = minChunkX; x <= maxChunkX; x++) {
for (let z = minChunkZ; z <= maxChunkZ; z++) {
let chunk
if (!this.chunks[x]) {
this.chunks[x] = []
}
if (!this.chunks[x][z]) {
chunk = new Chunk(x * 16, z * 16,this.type,this)
if (maxDist(cx, cz, x, z) <= settings.renderDistance) {
this.chunkGenQueue.push(chunk)
}
this.chunks[x][z] = chunk
}
chunk = this.chunks[x][z]
if (!chunk.buffer && !this.chunkGenQueue.includes(chunk) && maxDist(cx, cz, x, z) <= settings.renderDistance) {
this.chunkGenQueue.push(chunk)
}
this.loaded[i++] = chunk
}
}
this.sortedChunks.length = 0
this.doubleRenderChunks.length = 0
for (let chunk of this.loaded) {
if (renderFilter(chunk)) {
this.sortedChunks.push(chunk)
}
if (chunk.doubleRender) {
this.doubleRenderChunks.push(chunk)
}
}
this.sortedChunks = this.loaded.filter(renderFilter)
this.sortedChunks.sort(sortChunks)
}
getTop(x,z){
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.chunks[x >> 4][z >> 4].tops[(z&15) * 16 + (x&15)]
}
}
getThisSaveString(){
let world = this
let edited = []
for (let x in this.chunks) {
for (let z in this.chunks[x]) {
let chunk = this.chunks[x][z]
if (chunk.edited) {
for (let y = 0; y < chunk.sections.length; y++) {
if (chunk.sections[y].edited) {
edited.push([ chunk.sections[y], chunk.cleanSections[y] ])
}
}
}
}
}
let pallete = {}
for (let chunks of edited) {
let changes = false
chunks[0].blocks.forEach((id, i) => {
if (id !== chunks[1][i]) {
pallete[id] = true
changes = true
}
})
if (!changes) {
chunks[0].edited = false
}
}
let blocks = Object.keys(pallete).map(n => Number(n))
pallete = {}
blocks.forEach((block, index) => pallete[block] = index)
let rnd = round
let options = p.flying | (superflat==="island" ? 2 : superflat) << 1 | p.spectator << 3 | caves << 4 | trees << 5 | survival << 6
let str = world.name + ";" + worldSeed.toString(36) + ";"
+ rnd(p.x).toString(36) + "," + rnd(p.y).toString(36) + "," + rnd(p.z).toString(36) + ","
+ (p.rx * 100 | 0).toString(36) + "," + (p.ry * 100 | 0).toString(36) + "," + options.toString(36) + ";"
+ (this.version || version) + ";"
+ blocks.map(b => b.toString(36)).join(",") + ";"
for (let i = 0; i < edited.length; i++) {
if (!edited[i][0].edited) {
continue
}
let real = edited[i][0]
let blocks = real.blocks
let original = edited[i][1]
str += (real.x / 16).toString(36) + "," + (real.y / 16).toString(36) + "," + (real.z / 16).toString(36) + ","
for (let j = 0; j < original.length; j++) {
if (blocks[j] !== original[j]) {
str += (pallete[blocks[j]] << 12 | j).toString(36) + ","
}
}
str = str.substr(0, str.length - 1); //Remove trailing comma
str += ";"
}
if (str.match(/;$/)) str = str.substr(0, str.length - 1)
return str
}
getSaveString() {
let world = this
if(this.type !== "") world = dimensions.overworld //save overworld
if(!world.edited && world.saveStr) return world.saveStr
return world.getThisSaveString()
}
getNetherSaveString(){
let world = this
if(this.type !== "nether") world = dimensions.nether //save nether
if(!world.edited && world.saveStr) return world.saveStr
return world.getThisSaveString()
}
getInv(){
let str = ""
let arr = []
for(let i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i]){
arr.push(inventory.hotbar[i].id)
arr.push(inventory.hotbar[i].amount)
}else{
arr.push(0)
arr.push(0)
}
}
str += arr.join(",") + "|"
arr = []
for(i=0; i<invItems.length; i++){
if(invItems[i]){
arr.push(invItems[i].id)
arr.push(invItems[i].amount)
}else{
arr.push(0)
arr.push(0)
}
}
str += arr.join(",") + "|"
arr = []
for(let i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i]){
arr.push(inventory.hotbar[i].durability || 0)
}else{
arr.push(0)
}
}
str += arr.join(",") + "|"
arr = []
for(i=0; i<invItems.length; i++){
if(invItems[i]){
arr.push(invItems[i].durability || 0)
}else{
arr.push(0)
}
}
return str
}
getSurvivStr(){
//survival stuff like player health
let str = ""
str += p.health + ","
str += witherEffect + ","
str += witherTime + ","
str += witherDamage + ","
str += world.spawnPoint.x + "," + world.spawnPoint.y + "," + world.spawnPoint.z + ","
str += p.food + "," + p.foodSaturation + "," + p.foodExhaustion + ","
str += p.oxygen + ","
str += worldTime + ","
str += (cheats ? "1" : "0")+","
str += freezeEffect+","
str += p.XP+","+p.level
return str
}
loadSave(str) {
this.saveStr = str
let data = str.split(";")
if (!str.includes("Alpha")) {
return this.loadOldSave(str)
}
this.name = data.shift()
setSeed(parseInt(data.shift(), 36))
let playerData = data.shift().split(",")
if(this.type === ""){
p.x = parseInt(playerData[0], 36)
p.y = parseInt(playerData[1], 36)
p.z = parseInt(playerData[2], 36)
p.rx = parseInt(playerData[3], 36) / 100
p.ry = parseInt(playerData[4], 36) / 100
}
let options = parseInt(playerData[5], 36)
let v = data[0].replace("Alpha ","")
if(this.type === ""){
let extra = verMoreThan(v, "1.0.3") || v === "1.0.3"
p.flying = options & 1
p.spectator = options >> 2 & 1
superflat = options >> 1 & 3
if(superflat === 0){superflat = false}
if(superflat === 1){superflat = true}
if(superflat === 2){superflat = "island"}
caves = options >> (3+extra) & 1
trees = options >> (4+extra) & 1
survival = (options >> (5+extra) & 1) ? true : false
}
let version = data.shift()
this.version = version
// if (version.split(" ")[1].split(".").join("") < 70) {
// 	alert("This save code is for an older version. 0.7.0 or later is needed")
// }
let pallete = data.shift().split(",").map(n => parseInt(n, 36))
this.loadFrom = []
for (let i = 0; data.length; i++) {
let blocks = data.shift().split(",")
this.loadFrom.push({
x: parseInt(blocks.shift(), 36),
y: parseInt(blocks.shift(), 36),
z: parseInt(blocks.shift(), 36),
blocks: [],
})
for (let j = 0; j < blocks.length; j++) {
let block = parseInt(blocks[j], 36)
let index = block & 0xffffff
let pid = block >> 12
this.loadFrom[i].blocks[index] = pallete[pid]
}
}
}
loadInv(str){
let arr = str.split("|")
let inv = arr[1].split(",")
let hotb = arr[0].split(",")
let len = inventory.hotbar.length
inventory.hotbar = []
for(let i=0; i<len*2; i+=2){
if(hotb[i]){
inventory.hotbar.push({
id: parseInt(hotb[i]),
amount: parseInt(hotb[i+1])
})
}else inventory.hotbar.push(0)
}
invItems = []
for(let i=0; i<inv.length; i+=2){
invItems.push({
id: parseInt(inv[i]),
amount: parseInt(inv[i+1])
})
}
try{
inv = arr[3].split(",")
hotb = arr[2].split(",")
for(let i=0; i<len*2; i++){
hotb[i] = parseInt(hotb[i]) || 0
if(hotb[i]){
inventory.hotbar[i].durability = hotb[i]
}
}
for(let i=0; i<inv.length; i++){
inv[i] = parseInt(inv[i]) || 0
if(inv[i]){
invItems[i].durability = inv[i]
}
}
}catch{}
}
loadSurvivStr(str){
let arr = str.split(",")
p.health = parseInt(arr[0])
witherEffect = parseInt(arr[1])
witherTime = parseInt(arr[2])
witherDamage = parseInt(arr[3])
world.spawnPoint.x = parseInt(arr[4]) || 0
world.spawnPoint.y = parseInt(arr[5]) || 0
world.spawnPoint.z = parseInt(arr[6]) || 0
p.food = parseInt(arr[7]); if(isNaN(p.food)) p.food = 20
p.foodSaturation = parseFloat(arr[8]) || 0, p.foodExhaustion = parseFloat(arr[9]) || 0
p.oxygen = parseInt(arr[10]); if(!p.oxygen) p.oxygen = 20
worldTime = parseFloat(arr[11]) || 0
cheats = arr[12] ? arr[12] === "1" : !survival
freezeEffect = parseInt(arr[13])
p.XP = parseFloat(arr[14]) || 0
p.level = parseInt(arr[15]) || 0; setLevel()
}
loadOldSave(str) {
let data = str.split(";");
setSeed(parseInt(data.shift(), 36))
this.id = Date.now()
this.name = "Old World " + (Math.random() * 1000 | 0)
let playerData = data.shift().split(",");
p.x = parseInt(playerData[0], 36);
p.y = parseInt(playerData[1], 36);
p.z = parseInt(playerData[2], 36);
p.rx = parseInt(playerData[3], 36) / 100;
p.ry = parseInt(playerData[4], 36) / 100;
let editCount = parseInt(data.shift(), 36);
this.loadFrom = [];
let coords = data.shift().split(",").map(function(n) {
return parseInt(n, 36);
});
for (let j = 0; j < coords.length; j += 3) {
this.loadFrom.push({
x: coords[j],
y: coords[j + 1],
z: coords[j + 2],
blocks: [],
})
}
for (let i = 0; data.length > 0; i++) {
let blocks = data.shift().split(",");
for (let j = 0; j < blocks.length; j++) {
let block = parseInt(blocks[j], 36);
let index = block >> 8;
let id = block & 0x7f | (block & 0x80) << 1;
this.loadFrom[i].blocks[index] = id;
}
}
}
}
win.World = World
// Mouse sensitivity variable, used for the settings buttons and in the "mmoved" function
let mouseS = 300
class Slider {
constructor(x, y, w, h, scenes, label, min, max, settingName, callback) {
this.x = x
this.y = y
this.h = h
this.w = Math.max(w, 350)
this.name = settingName
this.scenes = Array.isArray(scenes) ? scenes : [scenes]
this.label = label
this.min = min
this.max = max
this.sliding = false
this.callback = callback
}
draw() {
if (!this.scenes.includes(screen)) {
return
}
let current = (settings[this.name] - this.min) / (this.max - this.min)
// Outline
ctx.beginPath()
strokeWeight(2)
stroke(0)
fill(85)
ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h)
ctx.stroke()
ctx.fill()
// Slider bar
let value = round(settings[this.name])
ctx.beginPath()
fill(130)
let x = this.x - (this.w - 10) / 2 + (this.w - 10) * current - 5
ctx.fillRect(x, this.y - this.h / 2, 10, this.h)
//Label
fill(255, 255, 255)
textSize(13)
ctx.textAlign = 'center'
text(`${this.label}: ${value}`, this.x, this.y + this.h / 8)
}
click() {
if (!mouseDown || !this.scenes.includes(screen)) {
return false
}
if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
let current = (mouseX - this.x + this.w / 2) / this.w
if (current < 0) current = 0
if (current > 1) current = 1
this.sliding = true
settings[this.name] = current * (this.max - this.min) + this.min
this.callback(current * (this.max - this.min) + this.min)
this.draw()
}
}
drag() {
if (!this.sliding || !this.scenes.includes(screen)) {
return false
}
let current = (mouseX - this.x + this.w / 2) / this.w
if (current < 0) current = 0
if (current > 1) current = 1
settings[this.name] = current * (this.max - this.min) + this.min
this.callback(current * (this.max - this.min) + this.min)
}
release() {
this.sliding = false
}
static draw() {
for (let slider of Slider.all) {
slider.draw()
}
}
static click() {
for (let slider of Slider.all) {
slider.click()
}
}
static release() {
for (let slider of Slider.all) {
slider.release()
}
}
static drag() {
if (mouseDown) {
for (let slider of Slider.all) {
slider.drag()
}
}
}
static add(x, y, w, h, scenes, label, min, max, defaut, callback) {
Slider.all.push(new Slider(x, y, w, h, scenes, label, min, max, defaut, callback))
}
}
Slider.all = []
class Button {
constructor(x, y, w, h, labels, scenes, callback, disabled, hoverText) {
this.x = x
this.y = y
this.h = h
this.w = w
this.index = 0
this.disabled = disabled || (() => false)
this.hoverText = !hoverText || typeof hoverText === "string" ? (() => hoverText) : hoverText
this.scenes = Array.isArray(scenes) ? scenes : [scenes]
this.labels = Array.isArray(labels) ? labels : [labels]
this.callback = callback
}
mouseIsOver() {
return mouseX >= this.x - this.w / 2 && mouseX <= this.x + this.w / 2 && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2
}
draw() {
if (!this.scenes.includes(screen)) {
return
}
let hovering = this.mouseIsOver()
let disabled = this.disabled()
let hoverText = this.hoverText()
// Outline
ctx.beginPath()
strokeWeight(6)
stroke(80)
if (disabled) {
fill(60)
stroke(20)
} else {
if (hovering) {
cursor(HAND)
fill(100, 120, 200)
stroke(100,80,160)
}else{
fill(120)
}
}
ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h)
ctx.stroke()
ctx.fill()
ctx.beginPath()
stroke(200)
if (hovering && !disabled)stroke(200, 200, 255);
if(disabled)stroke(130);
strokeWeight(3.5)
if(disabled){
ctx.moveTo(this.x + (this.w / 2) + 2, this.y - this.h / 2-2)
ctx.lineTo(this.x + (this.w / 2) + 2, this.y + (this.h / 2)+1)
ctx.lineTo(this.x - this.w / 2 - 1, this.y + (this.h / 2)+1)
}else{
ctx.moveTo(this.x - this.w / 2 - 2, this.y + (this.h / 2)-2)
ctx.lineTo(this.x - this.w / 2 - 2, this.y - this.h / 2-2)
ctx.lineTo(this.x + (this.w / 2)+1, this.y - this.h / 2-2)
}
ctx.stroke()
stroke(0)
strokeWeight(1)
ctx.strokeRect(this.x-this.w/2-4, this.y-this.h/2-4, this.w+8, this.h+8)
//Label
textSize(13)
ctx.textAlign = 'center'
fill(0)
text(this.labels[this.index], this.x +2, this.y + this.h / 8 +2)
disabled ? fill(255) : (hovering ? fill(255,255,0) : fill(255) )
text(this.labels[this.index], this.x, this.y + this.h / 8)
if (hovering && hoverText) {
hoverbox.innerText = hoverText
hoverbox.classList.remove("hidden")
if (mouseY < height / 2) {
hoverbox.style.bottom = ""
hoverbox.style.top = mouseY + 10 + "px"
} else {
hoverbox.style.top = ""
hoverbox.style.bottom = height - mouseY + 10 + "px"
}
if (mouseX < width / 2) {
hoverbox.style.right = ""
hoverbox.style.left = mouseX + 10 + "px"
} else {
hoverbox.style.left = ""
hoverbox.style.right = width - mouseX + 10 + "px"
}
}
}
click() {
if (this.disabled() || !mouseDown || !this.scenes.includes(screen)) {
return false
}
if (this.mouseIsOver()) {
this.index = (this.index + 1) % this.labels.length
this.callback(this.labels[this.index])
return true
}
}
static draw() {
hoverbox.classList.add("hidden")
for (let button of Button.all) {
button.draw()
}
}
static click() {
for (let button of Button.all) {
if (button.click()) {
Button.draw()
playSound("click")
break
}
}
}
static add(x, y, w, h, labels, scenes, callback, disabled, hoverText) {
Button.all.push(new Button(x, y, w, h, labels, scenes, callback, disabled, hoverText))
}
}
Button.all = []
var initEverything
function initButtons() {
Button.all = []
Slider.all = []
const nothing = () => false
const always = () => true
// Main menu buttons
Button.add(width / 2, height / 2 - 40, 400, 40, "Singleplayer", "main menu", r => changeScene("loadsave menu"))
Button.add(width / 2, height / 2 + 15, 400, 40, "Multiplayer", "main menu", r => {
changeScene("multiplayer menu")
}, null, "If you want multiplayer, just wait.")
Button.add(width / 2, height / 2 + 70, 400, 40, "Marketplace", "main menu", r => changeScene("marketplace"))
Button.add(width / 2 - 105, height / 2 + 160, 190, 40, "Options", "main menu", r => changeScene("options"))
Button.add(width / 2 + 105, height / 2 + 160, 190, 40, "Quit", "main menu", r => {
if(window.opener !== null || window.history.length === 1){
close()
}else{
location.href = "https://www.nathaniel2006.repl.co"
}
})
Button.add(width / 2 - 235, height / 2 + 160, 40, 40, "?", "main menu", r => changeScene("help"))
// Creation menu buttons
Button.add(width / 2, 135, 300, 40, ["World Type: Normal", "World Type: Superflat", "World Type: Island"], "creation menu", r => {superflat = r === "World Type: Superflat"; if(r==="World Type: Island")superflat="island"})
Button.add(width / 2, 185, 300, 40, ["Trees: On", "Trees: Off"], "creation menu", r => trees = r === "Trees: On", function() {
if (superflat === true) {
this.index = 1
trees = false
}
return superflat === true
})
Button.add(width / 2, 235, 300, 40, ["Caves: On", "Caves: Off"], "creation menu", r => caves = r === "Caves: On", function() {
if (superflat === true) {
this.index = 1
caves = false
}
return superflat === true
})
Button.add(width / 2, 285, 300, 40, ["Game Mode: Creative", "Game Mode: Survival"], "creation menu", r => survival = r === "Game Mode: Survival")
Button.add(width / 2, 335, 300, 40, "Difficulty: Peaceful", "creation menu", nothing, always, "Coming soon\n\nPlease stop asking for mobs. Adding them will take a very long time. I know a lot of people want them, so just be patient.")
Button.add(width / 2, height - 90, 300, 40, "Create New World", "creation menu", r => {
if(boxCenterTop.value.startsWith("JSON")){
alert("That name is not allowed")
return
}
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
world.id = Date.now()
let name = boxCenterTop.value || "World"
let number = ""
while(true) {
let match = false
for (let id in worlds) {
if (worlds[id].name === name + number) {
match = true
break
}
}
if (match) {
number = number ? number + 1 : 1
} else {
name = name + number
break
}
}
world.name = name.replace(/;/g, "\u037e")
world.loadChunks()
world.chunkGenQueue.sort(sortChunks)
cheats = !survival
if(survival) setHotbar([0,0,0,0,0,0,0,0,0])
changeScene("loading")
})
Button.add(width / 2, height - 40, 300, 40, "Cancel", "creation menu", r => changeScene(previousScreen))
// Loadsave menu buttons
const selected = () => !selectedWorld || !worlds[selectedWorld]
let w4 = min(width / 4 - 10, 220)
let x4 = w4 / 2 + 5
let w2 = min(width / 2 - 10, 450)
let x2 = w2 / 2 + 5
let mid = width / 2
Button.add(mid - 3 * x4, height - 30, w4, 40, "Edit", "loadsave menu", r => changeScene("editworld"), () => (selected() || !worlds[selectedWorld].edited))
Button.add(mid - x4, height - 30, w4, 40, "Delete", "loadsave menu", r => {
if (worlds[selectedWorld] && confirm(`Are you sure you want to delete ${worlds[selectedWorld].name}?`)) {
deleteFromDB(selectedWorld)
window.worlds.removeChild(document.getElementById(selectedWorld))
delete worlds[selectedWorld]
selectedWorld = 0
}
}, () => (selected() || !worlds[selectedWorld].edited), "Delete the world forever.")
Button.add(mid + x4, height - 30, w4, 40, "Export", "loadsave menu", r => {
boxCenterTop.value = worlds[selectedWorld].code
}, selected, "Export the save code into the text box above for copy/paste.")
Button.add(mid + 3 * x4, height - 30, w4, 40, "Cancel", "loadsave menu", r => changeScene("main menu"))
Button.add(mid - x2, height - 75, w2, 40, "Play Selected World", "loadsave menu", r => {
var ver
if(worlds[selectedWorld]){
ver = worlds[selectedWorld].version.replace("Alpha ","")
}else{
ver = boxCenterTop.value.split(";")[3].replace("Aplha ","")
}
if(!verMoreThan(ver, "1.0.2")){
changeScene("broken world")
return
}
playSelectedWorld()
}, () => !(!selectedWorld && boxCenterTop.value) && !worlds[selectedWorld])
Button.add(mid + x2, height - 75, w2, 40, "Create New World", "loadsave menu", r => changeScene("creation menu"))
//broken world buttons
Button.add(mid, height / 2 + 50, w2, 40, "Cancel", "broken world", r => {changeScene("loadsave menu")})
Button.add(mid, height / 2 + 105, w2, 40, "Load anyways", "broken world", r => {
try{
playSelectedWorld()
}catch(e){
alert(e)
}
}, always)
// Edit world menu
Button.add(mid, height / 2, w2, 40, "Save", "editworld", r => {
let w = worlds[selectedWorld]
w.name = boxCenterTop.value.replace(/;/g, "\u037e")
let split = w.code.split(";")
split[0] = w.name
w.code = split.join(";")
w.thumbnail = window.url.value
saveToDB(w.id, w).then(success => {
initWorldsMenu()
changeScene("loadsave menu")
}).catch(e => console.error(e))
})
Button.add(mid, height / 2 + 50, w2, 40, "Back", "editworld", r => changeScene(previousScreen))
// Multiplayer buttons
Button.add(mid + 3 * x4, height - 30, w4, 40, "Cancel", "multiplayer menu", r => changeScene("main menu"))
Button.add(mid - x2, height - 75, w2, 40, "Play Selected World", "multiplayer menu", async() => {
changeScene("multiplayer connecting")
initMultiplayer(servers[selectedWorld].id)
multiplayer.addEventListener("close", function(){
changeScene("multiplayer menu")
})
}, () => !servers[selectedWorld])
//multiplayer connecting buttons
Button.add(mid, height / 2 + 40, w2, 40, "Cancel", "multiplayer connecting", r => {multiplayer.close();changeScene("multiplayer menu")})
//play buttons
if(touchScreen){
Button.add(mid-14, 14, 20,20, "/", "play", Messages.showInput)
Button.add(mid+14, 14, 20,20, "❚❚", "play", r => changeScene("pause"))
}
// Pause buttons
Button.add(width / 2, 175, 300, 40, "Resume", "pause", play)
Button.add(width / 2, 225, 300, 40, "Options", "pause", r => changeScene("options"))
Button.add(width / 2, 275, 300, 40, "Save", "pause", () => save(), nothing, () => `Save the world to your computer/browser. Doesn't work in incognito.\n\nLast saved ${timeString(Date.now() - world.edited)}.`)
Button.add(width / 2, 325, 300, 40, "Get Save Code", "pause", r => {
savebox.classList.remove("hidden")
saveDirections.classList.remove("hidden")
savebox.value = world.getSaveString()
})
Button.add(width / 2, 375, 300, 40, "Exit Without Saving", "pause", r => {
savebox.value = world.getSaveString()
initWorldsMenu()
if(multiplayer) multiplayer.close()
changeScene("main menu")
})
Button.add(width / 2, 425, 300, 40, "Enable Multiplayer", "pause", async r => {
var logged
await loggedIn().then(r => logged = r)
if(logged){
initMultiplayer()
}
}, () => multiplayer)
Button.add(width / 2, 475, 300, 40, "Get Invite Link", "pause", r => {
savebox.classList.remove("hidden")
savebox.value = "https://minekhan.nathaniel2006.repl.co/?target="+world.id
}, () => !multiplayer, () => "Invite someone to this world if it is multiplayer.")
Button.add(width / 2, 525, 300, 40, "Download This World", "pause", r => {
var a = document.createElement("a")
a.href = "data:text/plain,"+getSaveJSON()
a.download = world.name+".mcs"
a.click()
}, nothing)
// You Died buttons
Button.add(width / 2, 225, 300, 40, "Respawn", "dead", r => {
respawn()
updateHUD = true
play()
})
// Options buttons
Button.add(width / 2, 430, width / 3, 40, ["Reach distance: "+normReach, "Reach distance: "+bigReach], "options", r => {
if(r === "Reach distance: "+normReach){
reach = normReach
}else reach = bigReach
})
Button.add(width / 2, 500, width / 3, 40, ["Sound: On", "Sound: Off"], "options", r => soundOn = r === "Sound: On")
Button.add(width / 2, 570/*640*/, width / 3, 40, "Back", "options", r => changeScene(previousScreen))
//Help buttons
Button.add(60, 30, 80, 30, "Back", "help", r => changeScene(previousScreen))
// Marketplace buttons
Button.add(60, 40, 80, 30, "Back", "marketplace", r => changeScene(previousScreen))
Button.add(mid - x2, height - 75, w2, 40, "Download", "marketplace", saveFromMarketplace, () => !marketplace[selectedWorld])
// Comingsoon menu buttons
Button.add(width / 2, 395, width / 3, 40, "Back", "comingsoon menu", r => changeScene(previousScreen))
// Settings Sliders
Slider.add(width/2, 245, width / 3, 40, "options", "Render Distance", 1, 32, "renderDistance", val => settings.renderDistance = round(val))
Slider.add(width/2, 305, width / 3, 40, "options", "FOV", 30, 110, "fov", val => {
p.FOV(val)
if (world) {
p.setDirection()
world.render()
}
})
Slider.add(width/2, 365, width / 3, 40, "options", "Mouse Sensitivity", 30, 400, "mouseSense", val => settings.mouseSense = val)
}
let texturePixels
let textureSize = 256
let textureH = 1024
function initTextures() {
let scale = 1 / (textureSize/16)
let scaleH = 1 / (textureSize/16)
texturePixels = new Uint8Array(textureSize * textureH * 4)
textureMap = {}
textureCoords = []
setPixel = function(textureNum, x, y, r, g, b, a) {
let texX = textureNum & 15
let texY = textureNum >> 4
let offset = (texY * 16 + y) * 1024 + texX * 64 + x * 4
texturePixels[offset] = r
texturePixels[offset + 1] = g
texturePixels[offset + 2] = b
texturePixels[offset + 3] = a !== undefined ? a : 255
}
/*getPixels = function(str) {
// var w = parseInt(str.substr(0, 2), 36)
// var h = parseInt(str.substr(2, 2), 36)
var colors = []
var pixels = []
var dCount = 0
for (;str[4 + dCount] === "0"; dCount++) {}
var ccount = parseInt(str.substr(4+dCount, dCount+1), 36)
for (var i = 0; i < ccount; i++) {
var num = parseInt(str.substr(5 + 2*dCount + i * 7, 7), 36)
colors.push([ num >>> 24 & 255, num >>> 16 & 255, num >>> 8 & 255, num & 255 ])
}
for (let i = 5 + 2*dCount + ccount * 7; i < str.length; i++) {
let num = parseInt(str[i], 36)
pixels.push(colors[num][0], colors[num][1], colors[num][2], colors[num][3])
}
return pixels
};*/
const base256CharSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEF!#$%&L(MNO)*+,-./:;<=WSTR>Q?@[]P^_{|}~ÀÁÂÃUVÄÅÆÇÈÉÊËÌÍKÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãGäåæçèéêHëìíîXïðñIòóôõö÷øùúJûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦYħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťZ'
const base256DecodeMap = new Map()
for (let i = 0; i < 256; i++) base256DecodeMap.set(base256CharSet[i], i)
function decodeByte(str) {
let num = 0
for (let char of str) {
num <<= 8
num += base256DecodeMap.get(char)
}
return num
}
getPixels = function(str, r = 255, g = 255, b = 255) {
const width = decodeByte(str.substr(0, 2))
const height = decodeByte(str.substr(2, 2))
const colorCount = decodeByte(str.substr(4, 1))
const colors = []
const pixels = new Uint8ClampedArray(width * height * 4)
let pixi = 0
for (let i = 0; i < colorCount; i++) {
const num = decodeByte(str.substr(5 + i * 3, 3))
let alpha = (num & 63) << 2
let blue  = (num >>> 6 & 63) << 2
let green = (num >>> 12 & 63) << 2
let red   = (num >>> 18 & 63) << 2
if (alpha >= 240) alpha = 255 // Make sure we didn't accidentally make the texture transparent
if (red === blue && red === green) {
red = red / 252 * r | 0
green = green / 252 * g | 0
blue = blue / 252 * b | 0
}
colors.push([ red, green, blue, alpha ])
}
// Special case for a texture filled with 1 pixel color
if (colorCount === 1) {
while (pixi < pixels.length) {
pixels[pixi + 0] = colors[0][0]
pixels[pixi + 1] = colors[0][1]
pixels[pixi + 2] = colors[0][2]
pixels[pixi + 3] = colors[0][3]
pixi += 4
}
return pixels
}
let bytes = []
for (let i = 5 + colorCount * 3; i < str.length; i++) { // Load the bit-packed index array
const byte = decodeByte(str[i])
bytes.push(byte)
}
const bits = Math.ceil(Math.log2(colorCount))
const bitMask = (1 << bits) - 1
let filledBits = 8
let byte = bytes.shift()
while (bytes.length || filledBits) {
let num = 0
if (filledBits >= bits) { // The entire number is inside the byte
num = byte >> (filledBits - bits) & bitMask
if (filledBits === bits && bytes.length) {
byte = bytes.shift()
filledBits = 8
}
else filledBits -= bits
}
else {
num = byte << (bits - filledBits) & bitMask // Only part of the number is in the byte
byte = bytes.shift() // Load in the next byte
num |= byte >> (8 - bits + filledBits) // Apply the rest of the number from this byte
filledBits += 8 - bits
}
pixels[pixi + 0] = colors[num][0]
pixels[pixi + 1] = colors[num][1]
pixels[pixi + 2] = colors[num][2]
pixels[pixi + 3] = colors[num][3]
pixi += 4
}
return pixels
}
semiTransTextures.splice(0,semiTransTextures.length)
textureUpdated()
{
//get amount of textures
var t = 0
for(var i in textures) t++
t = Math.ceil(t / 16) * 16
// Specify the texture coords for each index
const s = scale, sh = scaleH
for (let i = 0; i < t; i++) {
let texX = i & 15
let texY = i >> 4
let offsetX = texX * s
let offsetY = texY * sh
textureCoords.push(new Float32Array([ offsetX, offsetY, offsetX + s, offsetY, offsetX + s, offsetY + sh, offsetX, offsetY + sh ]))
}
// Set all of the textures into 1 big tiled texture
let n = 0
for (let i in textures) {
if (typeof textures[i] === "function") {
textures[i](n)
} else if (typeof textures[i] === "string") {
let pix = getPixels(textures[i])
let semiTrans
for (let j = 0; j < pix.length; j += 4) {
setPixel(n, j >> 2 & 15, j >> 6, pix[j], pix[j+1], pix[j+2], pix[j+3])
let a = pix[j+3]
if(a !== 0 && a !== 255){
semiTrans = true
}
}
if(semiTrans)semiTransTextures.push(i)
}
textureMap[i] = n
n++
}
for(var t in animated){
var a = animated[t].arr
var trans
for(var ti = 0; ti<a.length; ti++){
if(semiTransTextures.includes(a[ti])){//if this animated texture has transparent frames
trans = true
}
}
if(trans) semiTransTextures.push(t)
}
//Set the hitbox texture to 1 pixel
let arr = new Float32Array(192)
for (let i = 0; i < 192; i += 2) {
arr[i] = textureCoords[textureMap.hitbox][0] + 0.01
arr[i + 1] = textureCoords[textureMap.hitbox][1] + 0.01
}
textureCoords[textureMap.hitbox] = arr
}
// Big texture with everything in it
textureAtlas = gl.createTexture()
gl.activeTexture(gl.TEXTURE0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureSize, textureH, 0, gl.RGBA, gl.UNSIGNED_BYTE, texturePixels)
gl.generateMipmap(gl.TEXTURE_2D)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
gl.uniform1i(glCache.uSampler, 0)
// Dirt texture for the background
let dirtPixels = new Uint8Array(getPixels(textures.dirt))
dirtTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE1)
gl.bindTexture(gl.TEXTURE_2D, dirtTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, dirtPixels)
gl.generateMipmap(gl.TEXTURE_2D)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
// Netherrack texture for the background
let netherPixels = new Uint8Array(getPixels(textures.netherrack))
netherTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE2)
gl.bindTexture(gl.TEXTURE_2D, netherTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, netherPixels)
gl.generateMipmap(gl.TEXTURE_2D)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
let explodePixels = new Uint8Array([255,0,0,1])
explodeTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE3)
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, explodePixels)
images.explode.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE3)
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.explode)
gl.generateMipmap(gl.TEXTURE_2D);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
})
let experienceOrbPixels = new Uint8Array([255,0,0,1])
experienceOrbTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE5)
gl.bindTexture(gl.TEXTURE_2D, experienceOrbTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, experienceOrbPixels)
images.experienceOrb.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE5)
gl.bindTexture(gl.TEXTURE_2D, experienceOrbTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.experienceOrb)
gl.generateMipmap(gl.TEXTURE_2D);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
})
let panoramaPixels = new Uint8Array([255,0,0,1])
panoramaTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE4)
gl.bindTexture(gl.TEXTURE_2D, panoramaTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, panoramaPixels)
images.panorama.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE4)
gl.bindTexture(gl.TEXTURE_2D, panoramaTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.panorama)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
mainBGW = images.panorama.width
})
let genericPixels = new Uint8Array([255,0,0,1])
genericTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE6)
gl.bindTexture(gl.TEXTURE_2D, genericTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, genericPixels)
images.generic.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE6)
gl.bindTexture(gl.TEXTURE_2D, genericTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.generic)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
})
genIcons()
}
function lerp(t,a,b) {
return a + t * (b - a)
}
function updateTextures() {
var now = performance.now()
for(var i in animated){
var t = animated[i]
var fi = Math.floor((now / t.time) % t.arr.length)
var fi2 = (fi+1) % t.arr.length
var lerpAmount = (now / t.time) % 1
var frame = t.arr[fi]
var frame2 = t.arr[fi2]
var pos = textureCoords[textureMap[frame]]
var pos2 = textureCoords[textureMap[frame2]]
var idx = textureMap[i]
var r=1,g=1,b=1,a=1
if(t.tint){
r = t.tint[0]/255
g = t.tint[1]/255
b = t.tint[2]/255
a = t.tint[3]/255
if(isNaN(a)) a = 1
}
for(var x=0; x<16; x++){
for(var y=0; y<16; y++){
var texX = pos[0]*16, texY = pos[1]*16
var texX2 = pos2[0]*16, texY2 = pos2[1]*16
var offset = (texY * 16 + y) * 1024 + texX * 64 + x * 4
var offset2 = (texY2 * 16 + y) * 1024 + texX2 * 64 + x * 4
var pixr = texturePixels[offset]*r
var pixg = texturePixels[offset+1]*g
var pixb = texturePixels[offset+2]*b
var pixa = texturePixels[offset+3]*a
if(t.interpolate){
pixr = lerp(lerpAmount, pixr, texturePixels[offset2]*r)
pixg = lerp(lerpAmount, pixg, texturePixels[offset2+1]*g)
pixb = lerp(lerpAmount, pixb, texturePixels[offset2+2]*b)
pixa = lerp(lerpAmount, pixa, texturePixels[offset2+3]*a)
}
setPixel(idx, x,y, pixr,pixg,pixb,pixa)
}
}
}
gl.activeTexture(gl.TEXTURE0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureSize, textureH, 0, gl.RGBA, gl.UNSIGNED_BYTE, texturePixels);
}
function drawIcon(x, y, id, obj) {
id = id < isCube ? (id | blockMode) : id
let X =  x / (3 * height) - 0.1666 * width / height
let Y = y / (3 * height) - 0.1666
let scale = 1
if(obj && obj.animation){
scale = obj.animation
}
let semiTrans
if(blockData[id].semiTrans) semiTrans = true
initModelView(null, X, Y, 0, 0, 0, scale)
let buffer = blockIcons[id]
let length = blockIcons.lengths[id]
if(!blockIcons[id]){
buffer = blockIconError
length = blockIconError.length
}
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.vertexAttribPointer(glCache.aVertex, 3, gl.FLOAT, false, 24, 0)
gl.vertexAttribPointer(glCache.aTexture, 2, gl.FLOAT, false, 24, 12)
gl.vertexAttribPointer(glCache.aShadow, 1, gl.FLOAT, false, 24, 20)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttrib1f(glCache.aSkylight, 1.0)
gl.vertexAttrib1f(glCache.aBlocklight, 1.0)
gl.drawElements(gl.TRIANGLES, length, gl.UNSIGNED_INT, 0)
if(semiTrans){
gl.uniform1i(glCache.uTrans, 1)
gl.drawElements(gl.TRIANGLES, length, gl.UNSIGNED_INT, 0)
gl.uniform1i(glCache.uTrans, 0)
}
if(!obj) return
let s = inventory.size
let s2 = s/2
let ts = inventory.ts
if(obj.durability){
let percent = obj.durability / blockData[id].durability
if(percent !== 1){
let ww = (s-(ts*2))
let w = ww*percent
let color = percent > 0.6666 ? "#af5" : (percent > 0.3333 ? "#fa0" : "#f55")
let dx = x-s2+ts
let dy = y+s2-(ts*3)
let prevFill = ctx2.fillStyle
ctx2.fillStyle = "#333"
ctx2.fillRect(dx,dy,ww,ts*2)
ctx2.fillStyle = color
ctx2.fillRect(dx,dy,w,ts)
ctx2.fillStyle = prevFill
}
}
}
function hotbar() {
FOV(90)
let s = inventory.size
let s2 = s/2
ctx2.fillStyle = "white"
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
for(let i = 0; i < inventory.hotbar.length; i ++) {
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
if(inventory.hotbar[i].id) {
drawIcon(x, y, inventory.hotbar[i].id, inventory.hotbar[i])
if(survival && inventory.hotbar[i].amount>1) ctx2.fillText(inventory.hotbar[i].amount, x+(s/2), y+(s/2))
}
}
if(touchScreen && screen === "play"){
i++
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
ctx.fillStyle = "#0a0"
ctx.fillRect(x-s2, y-s2, s,s)
ctx.textAlign = "center"
var prev = ctx.textBaseline
ctx.textBaseline = "middle";
ctx.fillStyle = "white"
ctx.fillText("...",x,y)
ctx.textBaseline = prev;
}
}
function hud() {
if (p.spectator) {
return
}
//{ why does hotbar dissapear???
gl.useProgram(program3D)
gl.uniform1i(glCache.uSampler, 0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
//}
hotbar()
let s = inventory.size
let s2 = s / 2
let x = width / 2 + 0.5
let y = height / 2 + 0.5
let maxX = width / 2 - inventory.hotbar.length / 2 * s + 9.5 * s + 25
textSize(10)
// Spyglass image
if(p.usingSpyglass){
var w2 = width / 2
var h2 = height / 2
var t = p.spyglassTimer > 250 ? 250 : p.spyglassTimer
var size = min(width, height)
size = map(t,0,250, size/2,size)
var size2 = size / 2
ctx.fillStyle = "black"
ctx.fillRect(0,0,width,height)
ctx.clearRect(w2 - size2, h2 - size2, size, size)
ctx.drawImage(images.spyglassScope, w2 - size2, h2 - size2, size, size)
}
// Crosshair
if (!p.spectator) {
ctx.lineWidth = 1
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.moveTo(x - 10, y)
ctx.lineTo(x + 10, y)
ctx.moveTo(x, y - 10)
ctx.lineTo(x, y + 10)
ctx.stroke()
}
//Attack indicator
if(attackCooldown > 0){
var c = attackCooldown * 16
ctx.drawImage(images.attackIndicatorCrosshair, 0,0,16,4, x-16,y+10,32,8)
ctx.drawImage(images.attackIndicatorCrosshair, 16,0,c,4, x-16,y+10,c*2,8)
}
//Hotbar
x = width / 2 - 9 / 2 * s + 0.5 + 25
y = height - s * 1.5 + 0.5
ctx.strokeStyle = "black"
ctx.lineWidth = 2
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(x + s * 9, y)
ctx.moveTo(x, y + s)
ctx.lineTo(x + s * 9, y + s)
for(let i = 0; i <= 9; i++) {
ctx.moveTo(x + i * s, y)
ctx.lineTo(x + i * s, y + s)
}
ctx.stroke()
ctx.strokeStyle = "white"
ctx.lineWidth = 2
ctx.beginPath()
ctx.strokeRect(width / 2 - 9 / 2 * s + inventory.hotbarSlot * s + 25, height - s * 1.5, s, s)
if(survival){
var iw = 18
var pw = 2 //pixel width
var pw2 = pw/2
var iw2 = iw/2
var dw = iw2 - pw2
var iy = y-iw-4-12
var ih = iw+2
//Health bar
var outline = (healEffect < 40 && healEffect > 30) || (healEffect < 20 && healEffect > 10)
if((loseHealthEffect < 60 && loseHealthEffect > 50) || (loseHealthEffect < 40 && loseHealthEffect > 30) || (loseHealthEffect < 20 && loseHealthEffect > 10)) outline = true
var heartNum = Math.floor(p.health)
let wither = witherEffect > 0
let i
for(i=0; i<heartNum; i+=2){
var heartX = (i * dw) + x;
var offY = p.health < 5 ? (round(Math.random())*2)-1 : 0
if(heartNum === i+1){
ctx.drawImage(images[wither ? "witherHalfHeart": (freezeEffect === 140 ? "freezeHalfHeart" : "halfHeart")], heartX, iy+offY, iw, iw);
}else{
ctx.drawImage(images[wither ? "witherHeart" : (freezeEffect === 140 ? "freezeHeart" : "heart")], heartX, iy+offY, iw, iw);
}
if(outline){
ctx.drawImage(images.whiteHeart, heartX, iy, iw, iw);
}
}
for(; i<20; i+=2){
var heartX = (i * dw) + x;
var offY = p.health < 5 ? (round(Math.random())*2)-1 : 0
ctx.drawImage(images.deadHeart, heartX, iy+offY, iw, iw);
if(outline){
ctx.drawImage(images.whiteHeart, heartX, iy+offY, iw, iw);
}
}
//Hunger bar
for(i=0; i<p.food; i+=2){
var offY = (p.foodJitter === 0)? round(Math.random())*2 : 0
var X = maxX - ((i+4) * iw2)
if(p.food === i+1){
ctx.drawImage(images.halfDrumstick, X, iy+offY, iw, iw);
}else{
ctx.drawImage(images.drumstick, X, iy+offY, iw, iw);
}
}
for(; i<20; i+=2){
var offY = (p.foodJitter === 0)? round(Math.random())*2 : 0
var X = maxX - ((i+4) * iw2)
ctx.drawImage(images.drumstickBG, X, iy+offY, iw, iw);
}
//Oxygen bar
if(p.oxygen !== 20){
for(i=0; i<p.oxygen; i+=2){
var bubbleX = (maxX - (iw*11)) + (i * iw2)
if(p.oxygen === i+1){
ctx.drawImage(images.bubblePop, bubbleX, iy-ih, iw, iw);
}else{
ctx.drawImage(images.bubble, bubbleX, iy-ih, iw, iw);
}
}
}
var xpBar = p.XP / p.nextLevel
var level = p.level
ctx.drawImage(images.experienceBar, 0,0,182,5, x,iy+ih,s*9,10)
ctx.drawImage(images.experienceBar, 0,5,182*xpBar,5, x,iy+ih,s*9*xpBar,10)
ctx.font = "18px mojangles"
ctx.textAlign = "center"
var barX = x+s*4.5
ctx.strokeStyle = "black"
ctx.lineWidth = 4
ctx.strokeText(level, barX, iy+ih)
ctx.fillStyle = colors.a
ctx.fillText(level, barX, iy+ih)
ctx.textAlign = "left"
}
if(freezeEffect > 0){
var opacity = freezeEffect / 140
ctx.globalAlpha = opacity
ctx.drawImage(images.freezeEffect,0,0,width,height)
ctx.globalAlpha = 1
}
if(inventory.showName > 0){
ctx.globalAlpha = inventory.showName > 1 ? 1 : inventory.showName
var Y = y - (s*1.5)
ctx.font = "18px mojangles"
var slot = inventory.hotbar[inventory.hotbarSlot]
var name = slot && slot.id && (blockData[slot.id].Name || blockData[slot.id].name)
if(name){
var w = ctx.measureText(name).width + 20
var X = (width / 2) - (w/2)
fill(0)
ctx.fillRect(X,Y,w,s)
fill(255)
ctx.textBaseline = "Middle"
ctx.fillText(name, X+10,Y+s2)
ctx.textBaseline = "Alphabetic"
}
ctx.globalAlpha = 1
}
ctx.fillStyle = "white"
ctx.font = "10px mojangles"
let str = "Average Frame Time: " + analytics.displayedFrameTime + "ms\n"
+ "Worst Frame Time: " + analytics.displayedwFrameTime + "ms\n"
+ "Render Time: " + analytics.displayedRenderTime + "ms\n"
+ "Tick Time: " + analytics.displayedTickTime + "ms\n"
+ "Rendered Chunks: " + renderedChunks.toLocaleString() + " / " + world.loaded.length + "\n"
+ "Generated Chunks: " + generatedChunks.toLocaleString() + "\n"
+ "FPS: " + analytics.fps//*temp*/ + "   atk-cdn_"+attackCooldown+",start_"+attackCooldownStart+",time_"+attackCooldownTime
if (p.autoBreak) {
text("Super breaker enabled", 5, height - 89, 12)
}
if (p.autoBuild) {
text("Hyper builder enabled", 5, height - 101, 12)
}
if (multiplayer) {
let closest = Infinity
let cname = "Yourself"
for (let name in players) {
let pos = players[name]
if(pos.dimension === world.type){
let distance = sqrt((pos.x - p2.x)*(pos.x - p2.x) + (pos.y+1 - p2.y)*(pos.y+1 - p2.y) + (pos.z - p2.z)*(pos.z - p2.z))
if (distance < closest) {
closest = distance
cname = pos.username
}
}
}
if(cname === "Yourself") closest = 0
var info = round(closest)+" blocks away"
if(closest === 0) info = "Right here"
text(`Closest player: ${cname} (${info})`, 5, height - 113, 12)
}
ctx.textAlign = 'right'
text(p2.x + ", " + p2.y + ", " + p2.z, width - 10, 15, 0)
ctx.textAlign = 'left'
text(str, 5, height - 77, 12)
}
function updateCraftingGrid(){
let arr = inventory.crafting.map(v => v?v.id:0)
let recipe = inventory.craftingStr = arr.join(",")
if(crafts[recipe]){
inventory.craftingRes = crafts[recipe]
}else{
var shapeless = shapelessCraft(arr)
if(shapeless){
inventory.craftingRes = crafts[shapeless]
}else{
inventory.craftingRes = 0
}
}
}
window.invScroll = 0;
let draggingInvBar = false
let invHeight = 0
var barW = 20
var invBarOffset = 0
var barH = 0
function drawInv(nodraw) {
let x = 0
let y = 0
let s = inventory.size
let s2 = s / 2
let perRow = 13
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
gl.useProgram(program3D)
gl.uniform1i(glCache.uSampler, 0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
ctx.fillStyle = "rgb(127, 127, 127)"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx2.clearRect(0, 0, canvas.width, canvas.height)
FOV(90)
let count = 1;
if(survival){
count = invLength
}else{
for (let i = 1; i < BLOCK_COUNT; i++) {
if(!blockData[i].hidden)count ++;
}
}
invHeight = (Math.ceil(count / perRow) * s)
let invWinH = s * 9;
// Scrollbar
if(survival){invScroll = 0}else{
barH = height * (invWinH/invHeight);
if(draggingInvBar){
invScroll = map(mouseY-invBarOffset, (barH/2), height-(barH/2), 0, invHeight);
if(invScroll > invHeight) invScroll = invHeight
if(invScroll < 0) invScroll = 0
}
var barYCent = map(invScroll, 0, invHeight, (barH/2), height-(barH/2));
var barTop = barYCent - (barH/2);
fill(100)
ctx.fillRect(width-barW-2, 0, barW+2, height)
fill(200)
ctx.fillRect(width-barW, barTop, barW-2, barH)
}
// Draw the grid
ctx.translate(0, -(invScroll % s))
ctx.lineWidth = 1
ctx.strokeStyle = "black"
ctx.beginPath()
for (y = 0; y < 10; y++) {
ctx.moveTo(50.5 - s2, 50.5 - s2 + y * s)
ctx.lineTo(50.5 - s2 + s * perRow, 50.5 - s2 + y * s)
}
y--
for (x = 0; x < perRow + 1; x++) {
ctx.moveTo(50.5 - s2 + s * x, 50.5 - s2)
ctx.lineTo(50.5 - s2 + s * x, 50.5 - s2 + y * s)
}
ctx.translate(0, invScroll % s)
// Hotbar
x = width / 2 - inventory.hotbar.length / 2 * s + 0.5 + 25
y = height - s * 1.5 + 0.5
ctx.moveTo(x, y)
ctx.lineTo(x + s * 9, y)
ctx.moveTo(x, y + s)
ctx.lineTo(x + s * 9, y + s)
for(let i = 0; i <= inventory.hotbar.length; i ++) {
ctx.moveTo(x + i * s, y)
ctx.lineTo(x + i * s, y + s)
}
ctx.stroke()
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
x += s * overHot
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.strokeRect(x, y, s, s)
}
//Box highlight in inv
let overInv = Math.round(((mouseY + invScroll) - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if (overInv >= 0 && overInv < count - (survival?0:1) && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2) {
x = overInv % perRow * s + 50 - s2
y = (overInv / perRow | 0) * s + 50 - s2
y -= invScroll
if(mouseY < s*9.5){
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.strokeRect(x, y, s, s)
}
}
if (inventory.holding && inventory.holding.id) {
drawIcon(mouseX, mouseY, inventory.holding.id, inventory.holding)
if(survival){
ctx2.fillStyle = "white"
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillText(inventory.holding.amount, mouseX+s2, mouseY+s2)
}
}
if(survival){
ctx2.fillStyle = "white"
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
for (let i = 0; i < invLength; i++) {
if(invItems[i] && invItems[i].id){
x = (i) % perRow * s + 50
y = ((i) / perRow | 0) * s + 50
drawIcon(x, y - invScroll, invItems[i].id, invItems[i])
if(inventory.spreaded.length && inventory.spreaded.includes(i)){
ctx.fillStyle = "rgb(180,180,180)"
ctx.fillRect(x+1-s2,y+1-s2,s-2,s-2)
}else ctx2.fillText(invItems[i].amount, x+s2, y+s2)
}
}
}else{
let invIdx = 0;
for (let i = 1; i < BLOCK_COUNT; i++) {
invIdx ++;
if(blockData[i].hidden){
while(blockData[i] && blockData[i].hidden) i++
if(!blockData[i]) break
}
x = (invIdx - 1) % perRow * s + 50
y = ((invIdx - 1) / perRow | 0) * s + 50
y -= invScroll
if(y < s*9.5 && y > 0){
drawIcon(x, y, i)
}
}
}
if(screen === "inventory"){
let offX = width - s*4
let offY = s*2
//draw grid
ctx.lineWidth = 1
ctx.strokeStyle = "black"
ctx.beginPath()
let y = s*2+offY
let x
for(x=0; x<3; x++){
ctx.moveTo(x*s+offX, offY)
ctx.lineTo(x*s+offX, y)
}
x = s*2+offX
for(y=0; y<3; y++){
ctx.moveTo(offX, y*s+offY)
ctx.lineTo(x, y*s+offY)
}
ctx.stroke()
//icons
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
for(y=0; y<2; y++){
for(x=0; x<2; x++){
let idx = (y*3) + x
if(inventory.crafting[idx] && inventory.crafting[idx].id){
let X = x*s+offX, Y = y*s+offY
drawIcon(X+s2,Y+s2, inventory.crafting[idx].id, inventory.crafting[idx])
ctx2.fillText(inventory.crafting[idx].amount, X+s, Y+s)
}
}
}
x = Math.floor((mouseX - offX) / s)
y = Math.floor((mouseY - offY) / s)
let over = (y * 3) + x
if(!(x >= 0 && x < 2 && y >= 0 && y < 2)){
over = -1
}else if(over > -1 && over < 9){
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.strokeRect(x*s+offX, y*s+offY, s,s)
}
x = offX + (s/2)
y = offY + (s*3)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(inventory.craftingRes && inventory.craftingRes.id){
drawIcon(x+s2, y+s2, inventory.craftingRes.id, inventory.craftingRes)
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
ctx2.fillText(inventory.craftingRes.amount, x+s, y+s)
}
ctx.drawImage(gl.canvas,0,0)
if(inventory.craftingRes && inventory.craftingRes.id){
let name = blockData[inventory.craftingRes.id].Name || blockData[inventory.craftingRes.id].name
if(name !== "" && over){
ctx.textAlign = "left"
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
}
hotbar()
//hud()
ctx.drawImage(gl.canvas, 0, 0)
// show block name on hover
if (overInv >= 0 && overInv < count - (survival?0:1) && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2) {
x = overInv % perRow
y = (overInv / perRow | 0)
var wrongidx = x+(y*perRow)+1;
var idx=1;
if(survival){
idx = wrongidx - 1
}else{
for(var i=1; i<wrongidx; i++){
idx++;
if(blockData[i+1] && blockData[i+1].hidden){
/*let i2 = idx
while(blockData[i2] && blockData[i2].hidden){
i2++
idx++
}*/
idx++
}
}
}
let name;
if(survival){
let id = invItems[idx] ? invItems[idx].id : 0
name = id ? blockData[id].Name || blockData[id].name : "";
}else{
name = blockData[idx] ? blockData[idx].Name || blockData[idx].name : "";
}
if((name !== "") && mouseY<s*9.5){
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
//show name on hover for hotbar
x = width / 2 - inventory.hotbar.length / 2 * s + 0.5 + 25
y = height - s * 1.5 + 0.5
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
let slot = inventory.hotbar[overHot]
let name = slot && slot.id && (blockData[slot.id].Name || blockData[slot.id].name)
name = name || ""
if(name !== ""){
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
if(!nodraw)ctx.drawImage(canvas2, 0,0)
}
function clickInv(dontRedraw,mouse) {
let s = inventory.size
let s2 = s / 2
let perRow = 13
let over = Math.round((mouseY + invScroll - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if(!survival){
var idx = 0;
for(var i=1; i<over+1; i++){
if(!blockData[i]) break;
idx ++;
if(blockData[i+1] && blockData[i+1].hidden)idx++;
}
over = idx;
}
let count = survival ? invLength : BLOCK_COUNT - 1
//for crafting
let offX = width - s*4
let offY = s * 2
let craftResX = offX+(s/2)
let craftResY = offY+(s*3)
let x = width / 2 - 9 / 2 * s + 25
let y = height - s * 1.5
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
let temp = inventory.hotbar[overHot]
inventory.hotbar[overHot] = inventory.holding
inventory.holding = temp
} else if (over >= 0 && over < count && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2 && mouseY < s*9.5) {
if(survival){
if(!invItems[over]) invItems[over] = {id:0,amount:0}
if(mouse === 2 && inventory.holding.amount > 1){
let holding = inventory.holding
let slot = invItems[over]
if(holding.id){
var canSplit = holding.id === slot.id && slot.amount < blockData[slot.id].stackSize
if(!slot.id){
canSplit = true
slot.id = holding.id
slot.amount = 0
}
if(canSplit){
slot.amount ++
holding.amount --
if(holding.amount <= 0) holding.id = 0
}
}
}else{
if(invItems[over] && invItems[over].id){
let temp = inventory.holding
if(temp.id === invItems[over].id && temp.amount < blockData[temp.id].stackSize && invItems[over].amount < blockData[invItems[over].id].stackSize){ //stacking together
let stackSize = blockData[invItems[over].id].stackSize
while(temp.amount > 0){
temp.amount--
invItems[over].amount ++
if(invItems[over].amount >= blockData[invItems[over].id].stackSize) break
}
if(temp.amount <= 0){
temp.id = 0
}
}else{
inventory.holding = invItems[over]
if(temp && temp.id){
invItems[over] = temp
}else invItems[over] = {id:0,amount:0}
}
}else if(inventory.holding){
invItems[over] = inventory.holding
inventory.holding = 0
inventory.spreadStart = over
inventory.spreadPlace = "invSpace"
}
}
}else{
inventory.holding = {id:over + 1, amount:blockData[over+1].stackSize}
}
} else if(screen === "inventory" && mouseX>offX && mouseX<offX+(s*2) && mouseY>offY && mouseY<offY+(s*2)){
//inv crafting grid
let X = Math.floor((mouseX - offX) / s)
let Y = Math.floor((mouseY - offY) / s)
let idx = (Y*3)+X
if(mouse === 2 && inventory.holding.amount > 1){
if(!inventory.crafting[idx]) inventory.crafting[idx] = {id:0,amount:0}
let holding = inventory.holding
let slot = inventory.crafting[idx]
if(holding.id){
var canSplit = holding.id === slot.id && slot.amount < blockData[slot.id].stackSize
if(!slot.id){
canSplit = true
slot.id = holding.id
slot.amount = 0
}
if(canSplit){
slot.amount ++
holding.amount --
if(holding.amount <= 0) holding.id = 0
}
}
}else{
let temp = inventory.holding
inventory.holding = inventory.crafting[idx]
inventory.crafting[idx] = temp
}
updateCraftingGrid()
}else if(screen === "inventory" && mouseX>craftResX && mouseX<craftResX+s && mouseY>craftResY && mouseY<craftResY+s && inventory.craftingRes && inventory.craftingRes.id){
//inv crafting output
inventory.holding = Object.assign({}, inventory.craftingRes)
for(let i=0; i<9; i++){
let block = inventory.crafting[i]
if(block && block.id){
block.amount --
if(block.amount < 1)inventory.crafting[i].id = 0
}
}
var r = inventory.holding && inventory.holding.id
if(r === blockIds.craftingTable){
achievment("Benchmaking")
}
updateCraftingGrid()
}else if(screen === "crafting" && mouseX>offX && mouseX<offX+(s*3) && mouseY>offY && mouseY<offY+(s*3)){}else{
inventory.holding = 0
}
if(!dontRedraw)drawScreens.inventory()
}
function moveInv(){
let s = inventory.size
let s2 = s / 2
let perRow = 13
let over = Math.round((mouseY + invScroll - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if(!survival){
var idx = 0;
for(var i=1; i<over+1; i++){
if(!blockData[i]) break;
idx ++;
if(blockData[i+1] && blockData[i+1].hidden)idx++;
}
over = idx;
}
let count = survival ? invLength : BLOCK_COUNT - 1
//for crafting
let offX = width - s*4
let offY = s * 2
let craftResX = offX+(s/2)
let craftResY = offY+(s*3)
let x = width / 2 - 9 / 2 * s + 25
let y = height - s * 1.5
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
//hotbar
} else if (over >= 0 && over < count && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2 && mouseY < s*9.5) {
if(survival){
if(!invItems[over]) invItems[over] = {id:0,amount:0}
if(inventory.spreadPlace === "invSpace" && inventory.spreadStart > -1 && invItems[inventory.spreadStart].amount > 1 && mouseDown){
inventory.spreading = true
}
if(inventory.spreading && !(invItems[over] && invItems[over].id) && over !== inventory.spreadStart && inventory.spreaded.length < invItems[inventory.spreadStart].amount){
if(inventory.spreaded.length){
invItems[over] = invItems[inventory.spreadStart]
inventory.spreaded.push(over)
}else{
invItems[over] = invItems[inventory.spreadStart]
inventory.spreaded.push(inventory.spreadStart, over)
}
}
}
}
}
function releaseInv(){
let s = inventory.size
let s2 = s / 2
let perRow = 13
let over = Math.round((mouseY + invScroll - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if(!survival){
var idx = 0;
for(var i=1; i<over+1; i++){
if(!blockData[i]) break;
idx ++;
if(blockData[i+1] && blockData[i+1].hidden)idx++;
}
over = idx;
}
let count = survival ? invLength : BLOCK_COUNT - 1
//for crafting
let offX = width - s*4
let offY = s * 2
let craftResX = offX+(s/2)
let craftResY = offY+(s*3)
let x = width / 2 - 9 / 2 * s + 25
let y = height - s * 1.5
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
//hotbar
} else if (over >= 0 && over < count && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2 && mouseY < s*9.5) {
if(survival){
if(!invItems[over]) invItems[over] = {id:0,amount:0}
if(inventory.spreadPlace === "invSpace" && inventory.spreaded.length){
//a/b with remainder
var a=invItems[inventory.spreadStart].amount
var b=inventory.spreaded.length
var n=a/b
var f=floor(n)
var r=n-f
n=f
r=floor(r*b)//sometimes not precise so use floor
//n = result   r = remainder
var id = invItems[inventory.spreadStart].id
for(var i=0; i<inventory.spreaded.length; i++){
invItems[inventory.spreaded[i]] = {id:id, amount:n}
}
if(r) inventory.holding = {id:id, amount:r}
inventory.spreaded = []
}
inventory.spreadStart = -1
inventory.spreading = false
}
}
}
function drawCrafting(mouse) {
drawInv(true, mouse)
let s = inventory.size
let s2 = s/2
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
let offX = width - s*4
let offY = s * 2
//draw grid
ctx.lineWidth = 1
ctx.strokeStyle = "black"
ctx.beginPath()
let y = s*3+offY
let x
for(x=0; x<4; x++){
ctx.moveTo(x*s+offX, offY)
ctx.lineTo(x*s+offX, y)
}
x = s*3+offX
for(y=0; y<4; y++){
ctx.moveTo(offX, y*s+offY)
ctx.lineTo(x, y*s+offY)
}
ctx.stroke()
//icons
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
for(y=0; y<3; y++){
for(x=0; x<3; x++){
let idx = (y*3) + x
if(inventory.crafting[idx] && inventory.crafting[idx].id){
let X = x*s+offX, Y = y*s+offY
drawIcon(X+s2,Y+s2, inventory.crafting[idx].id, inventory.crafting[idx])
ctx2.fillText(inventory.crafting[idx].amount, X+s, Y+s)
}
}
}
x = Math.floor((mouseX - offX) / s)
y = Math.floor((mouseY - offY) / s)
let over = (y * 3) + x
if(!(x >= 0 && x < 3 && y >= 0 && y < 3)){
over = -1
}else if(over > -1 && over < 9){
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.strokeRect(x*s+offX, y*s+offY, s,s)
}
x = offX + (s)
y = offY + (s*4)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(inventory.craftingRes && inventory.craftingRes.id){
drawIcon(x+s2, y+s2, inventory.craftingRes.id, inventory.craftingRes)
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
ctx2.fillText(inventory.craftingRes.amount, x+s, y+s)
}
ctx.drawImage(gl.canvas,0,0)
if(inventory.craftingRes && inventory.craftingRes.id){
let name = blockData[inventory.craftingRes.id].Name || blockData[inventory.craftingRes.id].name
if(name !== "" && over){
ctx.textAlign = "left"
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
ctx.drawImage(canvas2,0,0)
}
function clickCrafting(mouse) {
clickInv(true, mouse)
let s = inventory.size
let s2 = s/2
let offX = width - s*4
let offY = s * 2
let x = offX + (s)
let y = offY + (s*4)
//get thing from output
let over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over && inventory.craftingRes && inventory.craftingRes.id){
inventory.holding = Object.assign({}, inventory.craftingRes)
for(let i=0; i<9; i++){
let block = inventory.crafting[i]
if(block && block.id){
block.amount --
if(block.amount < 1)inventory.crafting[i].id = 0
}
}
//achievments
var r = inventory.holding && inventory.holding.id
if(r && blockData[r].pickaxe){
achievment("Time to Mine!")
}
if(r === blockIds.stonePickaxe){
achievment("Getting an Upgrade")
}
if(r === blockIds.bread){
achievment("Bake Bread")
}
if(r && blockData[r].sword){
achievment("Time to Strike!")
}
if(r && blockData[r].hoe){
achievment("Time to Farm!")
}
}
//grid
if(mouseX>offX && mouseX<offX+(s*3) && mouseY>offY && mouseY<offY+(s*3)){
let X = Math.floor((mouseX - offX) / s)
let Y = Math.floor((mouseY - offY) / s)
let idx = (Y*3)+X
let temp = inventory.holding
if(mouse === 2 && inventory.holding.amount > 1){
if(!inventory.crafting[idx]) inventory.crafting[idx] = {id:0,amount:0}
let holding = inventory.holding
let slot = inventory.crafting[idx]
if(holding.id){
var canSplit = holding.id === slot.id && slot.amount < blockData[slot.id].stackSize
if(!slot.id){
canSplit = true
slot.id = holding.id
slot.amount = 0
}
if(canSplit){
slot.amount ++
holding.amount --
if(holding.amount <= 0) holding.id = 0
}
}
}else{
inventory.holding = inventory.crafting[idx]
inventory.crafting[idx] = temp
}
}
updateCraftingGrid()
drawScreens.crafting()
}
function drawFurnace(){
drawInv(true)
let s = inventory.size
let s2 = s/2
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
var toPlay
var data = world.getTags(furnaceData.x, furnaceData.y, furnaceData.z)
if(!data || !(data&&data.furnace)){
var block = world.getBlock(furnaceData.x, furnaceData.y, furnaceData.z)
if(blockData[block].name === "furnace"){
data = {furnace:true, input:0, fuel:0, output:0, smeltStart:0, burnStart:0, canBurn:false, smelting:false, xp:0}
world.setTags(furnaceData.x, furnaceData.y, furnaceData.z, data)
}else toPlay = true //furnace doesn't exsist here
}
furnaceData.data = data
data.smelting = data.input && data.fuel && smelts[data.input.id] && smeltFuel[data.fuel.id] && true
if(data.smelting){
var smeltTo = smelts[data.input.id]
var fuel = smeltFuel[data.fuel.id]
var seconds = (Date.now() - data.smeltStart) / 1000
var progress = seconds * 20 //ticks
var burnProgress = (Date.now() - data.burnStart) / 1000
data.progress = progress / smeltTo.time
data.burnProgress = 1-(burnProgress / fuel.time)
if(progress >= smeltTo.time){
var a = floor(progress/smeltTo.time)
for(var i=0; i<a; i++){
data.input.amount --
data.xp += smeltTo.xp
if(data.output){
data.output.amount ++
}else{
data.output = {id:smeltTo.id, amount:1}
}
if(data.input.amount >= 0){
data.input = 0
break
}
}
data.smeltStart += (a/20)*smeltTo.time*1000
}
if(burnProgress >= fuel.time){
data.canBurn = false
}
if(!data.canBurn){
var a = floor(burnProgress/fuel.time)
for(var i=0; i<a; i++){
data.fuel.amount --
if(data.fuel.amount === 0){
data.fuel = 0
break
}
}
data.burnStart += a*fuel.time*1000
data.canBurn = true
}
}
var block = world.getBlock(furnaceData.x,furnaceData.y,furnaceData.z)
var needs
if((block & SOUTH) === SOUTH){
needs = SOUTH
}else if((block & WEST) === WEST){
needs = WEST
}else if((block & EAST) === EAST){
needs = EAST
}else{
needs = NORTH
}
needs |= blockIds.furnace
if(data.smelting){
needs |= SLAB
}
if(!toPlay && block !== needs){
world.setBlock(furnaceData.x,furnaceData.y,furnaceData.z, needs, false, false, false, true)//last argument is keepTags
}
let offX = width - s*4
let offY = s * 2
ctx.font = "20px mojangles"
ctx.fillStyle = "white"
ctx.textAlign = "left"
ctx.fillText("Furnace", offX, offY - s2)
//font for numbers
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
let x = offX+s2-2
let y = offY+s
fill(100)
ctx.fillRect(x,y,4,s)
if(data.burnProgress){
fill(255,data.burnProgress*255,0)
let h = data.burnProgress*s
ctx.fillRect(x,y+s-h,4,h)
}
x = offX+s
y = offY+s
ctx.strokeStyle = "black"
ctx.lineWidth = 1
ctx.beginPath()
ctx.moveTo(x+s,y+s2)
ctx.lineTo(x+s2,y)
ctx.moveTo(x+s,y+s2)
ctx.lineTo(x+s2,y+s)
ctx.stroke()
y = y+s2-2
fill(0)
ctx.fillRect(x,y,s,4)
if(data.progress){
fill(255)
ctx.fillRect(x,y,s*data.progress,4)
}
//input
x = offX
y = offY
let over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(data.input && data.input.id){
drawIcon(x+s2, y+s2, data.input.id, data.input)
ctx2.fillText(data.input.amount, x+s, y+s)
}
//fuel
x = offX
y = offY + (s*2)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(data.fuel && data.fuel.id){
drawIcon(x+s2, y+s2, data.fuel.id, data.fuel)
ctx2.fillText(data.fuel.amount, x+s, y+s)
}
//output
x = offX + (s*2)
y = offY + s
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(data.output && data.output.id){
drawIcon(x+s2, y+s2, data.output.id, data.output)
ctx2.fillText(data.output.amount, x+s, y+s)
}
ctx.drawImage(gl.canvas,0,0)
if(over && data.output && data.output.id){ //this is right aligned so you can see it
let name = blockData[data.output.id].Name || blockData[data.output.id].name
if(name !== "" && over){
ctx.textAlign = "left"
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX-w-20, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10-w-20, mouseY+13+2);
}
}
ctx.drawImage(canvas2,0,0)
if(toPlay) play()
}
function clickFurnace(mouse){
let s = inventory.size
let s2 = s/2
let offX = width - s*4
let offY = s * 2
var data = furnaceData.data //inventory.furnaceData.data
let temp
var clicked
//input
let x = offX
let y = offY
let over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over){
temp = data.input
data.input = inventory.holding
inventory.holding = temp
data.smeltStart = Date.now()
data.burnStart = Date.now()
clicked = true
}
//fuel
x = offX
y = offY + (s*2)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over){
temp = data.fuel
data.fuel = inventory.holding
inventory.holding = temp
data.burnStart = Date.now()
data.smeltStart = Date.now()
clicked = true
}
//output
x = offX + (s*2)
y = offY + s
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over){
inventory.holding = data.output
if(data.output && data.output.id){
var xp = data.xp
data.xp = 0
world.addEntity(new ExperienceOrb(p.x,p.y,p.z, xp))
}
data.output = 0
clicked = true
}
if(!clicked)clickInv(true, mouse)
drawScreens.furnace()
}
let unpauseDelay = 0
function mmoved(e) {
let mouseS = settings.mouseSense / 30000
p.rx -= e.movementY * mouseS
p.ry += e.movementX * mouseS
while(p.ry > Math.PI*2) {
p.ry -= Math.PI*2
}
while(p.ry < 0) {
p.ry += Math.PI*2
}
if(p.rx > Math.PI / 2) {
p.rx = Math.PI / 2
}
if(p.rx < -Math.PI / 2) {
p.rx = -Math.PI / 2
}
}
function trackMouse(e) {
if (screen !== "play") {
cursor("")
mouseX = e.x
mouseY = e.y
if(screen !== "main menu" && !(screen === "furnace" && furnaceData.data.smelting)){
drawScreens[screen]()
Button.draw()
Slider.draw()
Slider.drag()
}
}
if(screen === "inventory" || screen === "crafting" || screen === "furnace") moveInv()
}
document.onmousemove = trackMouse
win.pTouch = {x: -100, y: 0};
canvas.addEventListener("touchstart", function(e) {
pTouch.x = e.changedTouches[0].pageX;
pTouch.y = e.changedTouches[0].pageY;
pTouch.touching = mouseDown=true
pTouch.touchStart = Date.now()
pTouch.moved = false
pTouch.canDig = true
}, false);
canvas.addEventListener("touchmove", function(e) {
e.movementY = -(e.changedTouches[0].pageY - pTouch.y);
e.movementX = -(e.changedTouches[0].pageX - pTouch.x);
pTouch.x = e.changedTouches[0].pageX;
pTouch.y = e.changedTouches[0].pageY;
mmoved(e);
pTouch.moved = true
if(Date.now() - pTouch.touchStart < touchMoveLimit && e.movementX < 10 && e.movementY < 10){
pTouch.canDig = false
}
e.preventDefault();
}, false);
var touchend = e => {
pTouch.touching = mouseDown = false
}
canvas.addEventListener("touchend",touchend,false)
canvas.addEventListener("touchcancel",touchend,false)
document.onpointerlockchange = function() {
if (doc.pointerLockElement === canvas) {
doc.onmousemove = mmoved
} else {
doc.onmousemove = trackMouse
if (screen === "play" && !freezeFrame) {
changeScene("pause")
unpauseDelay = Date.now() + 1000
}
}
for (let key in Key) {
Key[key] = false
}
}
canvas.onmousedown = function(e) {
mouseX = e.x
mouseY = e.y
mouseDown = true
let block, index
switch(e.button) {
case 0:
Key.leftMouse = true
break
case 1:
Key.middleMouse = true
if (!hitBox.pos || survival) break
updateHUD = true
block = world.getBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2]) & 0x3ff
index = -1
for(var i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i].id === block){
index = i
break
}
}
if (index >= 0) {
inventory.hotbarSlot = index
} else {
inventory.hotbar[inventory.hotbarSlot].id = block
}
break
case 2:
Key.rightMouse = true
break
}
if(screen === "play") {
if (doc.pointerLockElement !== canvas) {
getPointer()
p.lastBreak = Date.now()
} else {
place = false
if(e.button === 0) {
if(Key.control) {
place = true
} else if(entHitbox.ent){
holding = inventory.hotbar[inventory.hotbarSlot].id
entClick()
}else if(!survival){
changeWorldBlock(0)
}
}
holding = inventory.hotbar[inventory.hotbarSlot].id
if(e.button === 2 && holding) {
place = true
}
if(place) {
p.spyglassStart = Date.now()
newWorldBlock()
}
}
} else if (screen === "inventory" || screen === "crafting" || screen === "furnace") {
if(mouseDown && mouseX >= width-barW){
draggingInvBar = true
invBarOffset = mouseY-map(invScroll, 0, invHeight, (barH/2), height-(barH/2))
}
if(screen === "crafting")clickCrafting(e.button)
else if(screen === "furnace")clickFurnace(e.button)
else clickInv(false, e.button)
}
Button.click()
Slider.click()
}
canvas.onmouseup = function(e) {
switch(e.button) {
case 0:
Key.leftMouse = false
break
case 1:
Key.middleMouse = false
break
case 2:
Key.rightMouse = false
break
}
mouseDown = false
Slider.release()
draggingInvBar = false
if(screen === "inventory" || screen === "crafting" || screen === "furnace") releaseInv()
}
for(var onscreencontrol in onscreenControls){
var onscreencontrolElement = onscreenControls[onscreencontrol]
onscreencontrolElement.value = onscreencontrol
onscreencontrolElement.onmousedown=function(){
canvas.onkeydown({key:this.value})
}
onscreencontrolElement.onmouseup=function(){
canvas.onkeyup({key:this.value})
}
onscreencontrolElement.addEventListener("touchstart",onscreencontrolElement.onmousedown)
onscreencontrolElement.addEventListener("touchend",onscreencontrolElement.onmouseup)
onscreencontrolElement.addEventListener("touchcancel",onscreencontrolElement.onmouseup)
}
onscreenControls[" "].addEventListener("click",function(){
if (!survival && !p.spectator) {//fly toggle
if (Date.now() < p.lastJump + 400) {
p.flying ^= true
} else {
p.lastJump = Date.now()
}
}
})
let lastForward = 0
onscreenControls.w.addEventListener("touchstart",function(){
if (Date.now() < lastForward + 400) { //sprint toggle
player.sprinting = true
} else {
lastForward = Date.now()
}
})
onscreenControls.w.addEventListener("touchend",() => p.sprinting = false)
onscreenControls.w.addEventListener("touchcancel",() => p.sprinting = false)
onscreenControls[" "].addEventListener("mousedown",function(){
Key[" "]=true
})
onscreenControls[" "].addEventListener("mouseup",function(){
Key[" "]=false
})
onscreenControls[" "].addEventListener("touchstart",function(){
Key[" "]=true
})
onscreenControls[" "].addEventListener("touchend",function(){
Key[" "]=false
})
onscreenControl_Element.onclick = e => {mouseX = e.x; mouseY = e.y}
let changeSlot = () => {
for(let i = 0; i < inventory.hotbar.length; i ++) {
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
x -= inventory.size/2
y -= inventory.size/2
if((mouseX>x)&&(mouseY>y)&&(mouseX < x+inventory.size)&&(mouseY < y+inventory.size)){
inventory.hotbarSlot = i
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
}
i ++
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
x -= inventory.size/2
y -= inventory.size/2
if((mouseX>x)&&(mouseY>y)&&(mouseX < x+inventory.size)&&(mouseY < y+inventory.size)){
changeScene("inventory")
}
}
onscreenControl_Element.addEventListener("click",changeSlot)
onscreenControl_Element.addEventListener("touchend",changeSlot)
canvas.onkeydown = function(e) {
let k = e.key.toLowerCase()
if (e.preventDefault && k === " ") {
e.preventDefault()
}
if (e.repeat || Key[k]) {
return
}
Key[k] = true
if (k === "t") {
initTextures()
}
if (k === controlMap.cycleBlockShapes.key) {
blockMode = blockMode === CUBE ? SLAB : (blockMode === SLAB ? STAIR : (blockMode === STAIR ? FENCE : (blockMode === FENCE ? WALLPOST : (blockMode === WALLPOST ? WALL : (blockMode === WALL ? WALLU : (blockMode === WALLU ? FENCQ : CUBE))))))
updateHUD = true
}
if (screen === "play") {
if(k === controlMap.pause.key) {
releasePointer()
changeScene("pause")
}
if(k === controlMap.superBreaker.key) {
p.autoBreak = !p.autoBreak
updateHUD = true
if(survival) p.autoBreak = false
}
if(k === controlMap.hyperBuilder.key) {
p.autoBuild = !p.autoBuild
updateHUD = true
if(survival) p.autoBuild = false
}
if (k === controlMap.jump.key && !p.spectator) {
if (Date.now() < p.lastJump + 400) {
p.flying ^= true
if(survival) p.flying = false
} else {
p.lastJump = Date.now()
}
}
if (k === controlMap.zoom.key) {
p.FOV(10, 300)
}
if (k === controlMap.sneak.key && !p.flying) {
p.sneaking = true
if (p.sprinting) {
p.FOV(settings.fov, 100)
}
p.sprinting = false
p.speed = 0.03
p.bottomH = 1.32
}
if (k === controlMap.spectator.key && !survival) {
p.spectator = !p.spectator
p.flying = true
p.onGround = false
updateHUD = true
}
if (k === controlMap.thirdPerson.key){
p.thirdPerson = !p.thirdPerson
}
if (k === controlMap.inventory.key) {
changeScene("inventory")
releasePointer()
achievment("Taking Inventory")
}
if (k === ";") {
releasePointer()
freezeFrame = true
}
if(k === controlMap.chat.key){
Messages.showInput()
}
if (k === controlMap.dropItem.key && inventory.hotbar[inventory.hotbarSlot] && inventory.hotbar[inventory.hotbarSlot].id) {
let d = p.direction
let block = holding || inventory.hotbar[inventory.hotbarSlot].id
block = block < isCube ? block | blockMode : block
world.addEntity(new Item(p.x + (d.x), p.y + (d.y), p.z + (d.z), d.x/4, d.y/4, d.z/4, block))
if(survival){
inventory.hotbar[inventory.hotbarSlot].amount --
updateHUD = true
}
}
if(Number(k)) {
inventory.hotbarSlot = Number(k) - 1
inventory.showName = 1.5
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
} else if (screen === "pause") {
if(k === controlMap.pause.key) {
play()
}
} else if (screen === "inventory" || screen === "crafting" || screen === "furnace") {
if (k === controlMap.inventory.key) {
if(screen === "crafting" || screen === "inventory"){
for(var i=0; i<9; i++){
if(inventory.crafting[i] && inventory.crafting[i].id){
for(var n=0; n<inventory.crafting[i].amount; n++)newInvItem(inventory.crafting[i].id)
inventory.crafting[i].id = 0
}
}
inventory.craftingRes = 0
}
play()
}
if (k === controlMap.cycleBlockShapes.key) {
drawScreens.inventory()
}
}
}
canvas.onkeyup = function(e) {
let k = e.key.toLowerCase()
Key[k] = false
if(k === "escape" && (screen === "pause" || screen === "inventory" || screen === "options" && previousScreen === "pause") && Date.now() > unpauseDelay) {
play()
}
if (screen === "play") {
if (k === controlMap.zoom.key) {
p.FOV(settings.fov, 300)
}
if (k === controlMap.sneak.key && p.sneaking) {
p.sneaking = false
p.speed = 0.075
p.bottomH = 1.62
// p.y += 0.3
}
}
}
canvas.onblur = function() {
for (let key in Key) {
Key[key] = false
}
mouseDown = false
Slider.release()
}
canvas.oncontextmenu = function(e) {
e.preventDefault()
}
window.onbeforeunload = e => { 
if (screen === "play" && Key.control) {
releasePointer()
e.preventDefault()
e.returnValue = "Q is the sprint button; Ctrl + W closes the page."
return true
}
}
canvas.onwheel = e => {
e.preventDefault()
e.stopPropagation()
if(screen === "play"){
if (e.deltaY > 0) {
inventory.hotbarSlot++
} else if (e.deltaY < 0) {
inventory.hotbarSlot--
}
if (inventory.hotbarSlot > 8) {
inventory.hotbarSlot = 0
} else if (inventory.hotbarSlot < 0) {
inventory.hotbarSlot = 8
}
updateHUD = true
holding = inventory.hotbar[inventory.hotbarSlot].id
}
if(screen === "inventory" || screen === "crafting" || screen === "furnace"){
invScroll += e.deltaY
if(invScroll < 0) invScroll = 0
if(invScroll > invHeight) invScroll = invHeight
drawScreens[screen]()
}
}
document.onwheel = e => {} // Shouldn't do anything, but it helps with a Khan Academy bug somewhat
window.onresize = e => {
width = window.innerWidth
height = window.innerHeight
canvas.height = height
canvas.width = width
ctx.imageSmoothingEnabled = false
canvas2.width = width
canvas2.height = height
gl.canvas.height = height
gl.canvas.width = width
gl.viewport(0, 0, width, height)
initButtons()
initBackgrounds()
inventory.size = 40 * min(width, height) / 600
inventory.ts = inventory.size / 16
genIcons()
use3d()
p.FOV(p.currentFov + 0.0001)
if (screen === "play") {
play()
} else {
drawScreens[screen]()
Button.draw()
Slider.draw()
}
}
function use2d() {
gl.disableVertexAttribArray(glCache.aTexture)
gl.disableVertexAttribArray(glCache.aShadow)
gl.disableVertexAttribArray(glCache.aVertex)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.useProgram(program2D)
gl.enableVertexAttribArray(glCache.aVertex2)
gl.enableVertexAttribArray(glCache.aTexture2)
gl.enableVertexAttribArray(glCache.aShadow2)
}
function use3d() {
gl.disableVertexAttribArray(glCache.aTexture2)
gl.disableVertexAttribArray(glCache.aShadow2)
gl.disableVertexAttribArray(glCache.aVertex2)
gl.useProgram(program3D)
gl.enableVertexAttribArray(glCache.aVertex)
gl.enableVertexAttribArray(glCache.aTexture)
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)
}
let maxLoad = 1
function startLoad() {
// Runs when the loading screen is opened; cache the player's position
p2.x = p.x
p2.y = p.y
p2.z = p.z
maxLoad = world.loadFrom.length + 9
}
function initWebglPrograms(){
modelView = new Float32Array(16)
glCache = {}
win.glCache = glCache
program3D = createProgramObject(gl, vertexShaderSrc3D, fragmentShaderSrc3D)
program2D = createProgramObject(gl, vertexShaderSrc2D, fragmentShaderSrc2D)
skyboxProgram = createProgramObject(gl, skyboxVertex, skyboxFragment);
programEntity = createProgramObject(gl, vertexShaderSrcEntity, fragmentShaderSrcEntity)
programParticle = createProgramObject(gl, vertexShaderSrcParticle, fragmentShaderSrcParticle)
skybox = new Skybox()
gl.useProgram(program2D)
glCache.uSampler2 = gl.getUniformLocation(program2D, "uSampler")
glCache.aTexture2 = gl.getAttribLocation(program2D, "aTexture")
glCache.aVertex2 = gl.getAttribLocation(program2D, "aVertex")
glCache.aShadow2 = gl.getAttribLocation(program2D, "aShadow")
gl.useProgram(skyboxProgram)
glCache.skyboxVertex = gl.getAttribLocation(skyboxProgram, "aVertex");
glCache.skyboxTime = gl.getUniformLocation(skyboxProgram, "time");
glCache.skyboxView = gl.getUniformLocation(skyboxProgram, "uView");
gl.useProgram(programEntity)
glCache.uSamplerEntity = gl.getUniformLocation(programEntity, "uSampler")
glCache.uLightLevelEntity = gl.getUniformLocation(programEntity, "uLightLevel")
glCache.uViewEntity = gl.getUniformLocation(programEntity, "uView")
glCache.harmEffectEntity = gl.getUniformLocation(programEntity, "harmEffect")
glCache.aTextureEntity = gl.getAttribLocation(programEntity, "aTexture")
glCache.aVertexEntity = gl.getAttribLocation(programEntity, "aVertex")
glCache.isTextureAtlasEntity = gl.getUniformLocation(programEntity, "isTextureAtlas")
glCache.tintEntity = gl.getUniformLocation(programEntity, "tint")
gl.uniform1i(glCache.isTextureAtlasEntity, 1)
gl.uniform3f(glCache.tintEntity, 1,1,1)
gl.useProgram(programParticle)
glCache.uSamplerParticle = gl.getUniformLocation(programParticle, "uSampler")
glCache.uLightLevelParticle = gl.getUniformLocation(programParticle, "uLightLevel")
glCache.uViewParticle = gl.getUniformLocation(programParticle, "uView")
glCache.aTextureParticle = gl.getAttribLocation(programParticle, "aTexture")
glCache.aVertexParticle = gl.getAttribLocation(programParticle, "aVertex")
glCache.isTextureAtlasParticle = gl.getUniformLocation(programParticle, "isTextureAtlas")
gl.uniform1i(glCache.isTextureAtlasParticle, 1)
gl.useProgram(program3D)
glCache.uSampler = gl.getUniformLocation(program3D, "uSampler")
glCache.uPos = gl.getUniformLocation(program3D, "uPos")
glCache.uDist = gl.getUniformLocation(program3D, "uDist")
glCache.uTime = gl.getUniformLocation(program3D, "uTime")
glCache.aShadow = gl.getAttribLocation(program3D, "aShadow")
glCache.aSkylight = gl.getAttribLocation(program3D, "aSkylight")
glCache.aBlocklight = gl.getAttribLocation(program3D, "aBlocklight")
glCache.aTexture = gl.getAttribLocation(program3D, "aTexture")
glCache.aVertex = gl.getAttribLocation(program3D, "aVertex")
glCache.skyColor = gl.getUniformLocation(program3D, "skyColor")
glCache.inWater = gl.getUniformLocation(program3D, "inWater")
glCache.uTrans = gl.getUniformLocation(program3D, "uTrans")
gl.uniform1i(glCache.uTrans, 0)
gl.uniform1f(glCache.uDist, 1000)
}
win.initWebglPrograms = initWebglPrograms
function initWebgl() {
if (!win.gl) {
let canv = document.createElement('canvas')
canv.width = ctx.canvas.width
canv.height = ctx.canvas.height
canv.style.position = "absolute"
canv.style.zIndex = -1
canv.style.top = "0px"
canv.style.left = "0px"
gl = canv.getContext("webgl", { preserveDrawingBuffer: true, antialias: false, premultipliedAlpha: false})
let ext = gl.getExtension('OES_element_index_uint')
if (!ext) {
alert("Please use a supported browser, or update your current browser.")
}
gl.viewport(0, 0, canv.width, canv.height)
gl.enable(gl.DEPTH_TEST)
gl.enable(gl.BLEND)
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
win.gl = gl
glExtensions = []
const availableExtensions = gl.getSupportedExtensions()
for (let i = 0; i < availableExtensions.length; i++) {
const extensionName = availableExtensions[i]
glExtensions[extensionName.replace(/[A-Z]+_/g, "")] = gl.getExtension(extensionName)
}
} else {
gl = win.gl
}
if (!document.body.contains(gl.canvas)) {
document.body.append(gl.canvas)
}
initWebglPrograms()
//Send the block textures to the GPU
initTextures()
initShapes()
/*var data = []
var rt = Math.PId/360
var s = sin(-rt), c = cos(-rt)
for(var deg=0; deg<Math.PId; deg+=rt){
var s2 = sin(deg+rt), c2 = cos(deg+rt)
data.push(s,0,c, s2,0,c, s2,1,c2, s,1,c2)
s = s2, c = c2
}*/
/*data.push(1,1,1,-1,1,1,-1,-1,1,1,-1,1)
tex.push(0,0,1,0,1,4,0,4)
data.push(-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1)
tex.push(0,0,1,0,1,4,0,4)
win.panoramaVerts = data*/
// These buffers are only used for drawing the main menu blocks
sideEdgeBuffers = {}
for (let side in shapes.cube.verts) {
let edgeBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, edgeBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapes.cube.verts[side][0]), gl.STATIC_DRAW)
sideEdgeBuffers[side] = edgeBuffer
}
texCoordsBuffers = []
for (let t in textureCoords) {
let buff = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buff)
gl.bufferData(gl.ARRAY_BUFFER, textureCoords[t], gl.STATIC_DRAW)
texCoordsBuffers.push(buff)
}
//Bind the Vertex Array Object (VAO) that will be used to draw everything
indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexOrder, gl.STATIC_DRAW)
//Tell it not to render the insides of blocks
gl.enable(gl.CULL_FACE)
gl.cullFace(gl.BACK)
gl.lineWidth(2)
blockOutlines = false
gl.enable(gl.POLYGON_OFFSET_FILL)
gl.polygonOffset(1, 1)
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
}
function initBackgrounds() {
// Home screen background
const HALF_PI = Math.PI / 2
const blocks = [
7, 4, 1, 7,
7, 4, 2, 7,
7, 4, 3, 7,
7, 4, 4, 7,
7, 5, 1, 7,
7, 5, 2, 7,
7, 5, 3, 7,
6, 4, 0, 7,
6, 4, 1, 7,
6, 4, 2, 7,
6, 4, 3, 7,
6, 4, 4, 7,
6, 5, 0, 7,
6, 5, 1, 7,
6, 5, 2, 7,
6, 5, 3, 7,
6, 5, 4, 7,
6, 6, 3, 7,
6, 6, 4, 7,
6, 7, 3, 7,
5, 0, -1, 1,
5, 0, 0, 1,
5, 0, 1, 1,
5, 0, 2, 1,
5, 1, 2, 29,
5, 2, 2, 29,
5, 3, 2, 29,
5, 4, 2, 29,
5, 5, 2, 29,
5, 6, 2, 29,
5, 4, 0, 7,
5, 4, 1, 7,
5, 4, 3, 7,
5, 4, 4, 7,
5, 5, 0, 7,
5, 5, 1, 7,
5, 5, 3, 7,
5, 5, 4, 7,
5, 6, 1, 7,
5, 6, 3, 7,
5, 7, 1, 7,
5, 7, 2, 7,
5, 7, 3, 7,
4, -1, -1, 1,
4, -1, 0, 1,
4, -1, 1, 1,
4, -1, 2, 1,
4, 0, 3, 1,
4, 0, 4, 1,
4, 0, 5, 1,
4, 0, 6, 1,
4, 0, 7, 5,
4, 0, 8, 5,
4, 0, 9, 5,
4, 0, 10, 5,
4, 4, 0, 7,
4, 4, 1, 7,
4, 4, 2, 7,
4, 4, 3, 7,
4, 4, 4, 7,
4, 5, 0, 7,
4, 5, 1, 7,
4, 5, 2, 7,
4, 5, 3, 7,
4, 5, 4, 7,
4, 6, 1, 7,
4, 6, 2, 7,
4, 6, 3, 7,
4, 7, 4, 7,
3, -1, -1, 1,
3, -1, 0, 1,
3, -1, 1, 1,
3, -1, 2, 1,
3, -1, 3, 1,
3, -1, 4, 1,
3, 0, 5, 1,
3, 0, 6, 1,
3, 0, 7, 1,
3, 0, 8, 5,
3, 0, 9, 5,
3, 0, 10, 5,
3, 4, 1, 7,
3, 4, 2, 7,
3, 4, 3, 7,
3, 4, 4, 7,
3, 5, 1, 7,
3, 5, 2, 7,
3, 5, 3, 7,
2, -1, -1, 1,
2, -1, 0, 1,
2, -1, 1, 1,
2, -1, 2, 1,
2, -1, 3, 1,
2, -1, 4, 1,
2, -1, 5, 1,
2, -1, 6, 1,
2, -1, 7, 1,
2, 0, 8, 5,
2, 0, 9, 5,
2, 0, 10, 5,
1, -2, -1, 1,
1, -2, 0, 1,
1, -2, 1, 1,
1, -2, 2, 1,
1, -2, 3, 1,
1, -1, 4, 1,
1, -1, 5, 1,
1, -1, 6, 1,
1, -1, 7, 1,
1, -1, 8, 1,
1, -1, 9, 5,
1, -1, 10, 5,
0, -2, -1, 1,
0, -2, 0, 1,
0, -2, 1, 1,
0, -2, 2, 1,
0, -2, 3, 1,
0, -2, 4, 1,
0, -2, 5, 1,
0, -1, 6, 1,
0, -1, 7, 1,
0, -1, 8, 1,
0, -1, 9, 5,
0, -1, 10, 5,
-1, -2, -1, 1,
-1, -2, 0, 1,
-1, -2, 1, 1,
-1, -2, 2, 1,
-1, -2, 3, 1,
-1, -2, 4, 1,
-1, -2, 5, 1,
-1, -2, 6, 1,
-1, -2, 7, 1,
-1, -1, 8, 1,
-1, -1, 9, 1,
-1, -1, 10, 1,
-2, -2, -1, 1,
-2, -2, 0, 1,
-2, -2, 1, 1,
-2, -2, 2, 1,
-2, -2, 3, 1,
-2, -2, 4, 1,
-2, -2, 5, 1,
-2, -2, 6, 1,
-2, -2, 7, 1,
-2, -2, 8, 1,
-2, -2, 9, 1,
-2, -1, 10, 1,
-3, -2, -1, 1,
-3, -2, 0, 1,
-3, -2, 1, 1,
-3, -2, 2, 1,
-3, -2, 3, 1,
-3, -2, 4, 1,
-3, -2, 5, 1,
-3, -2, 6, 1,
-3, -2, 7, 1,
-3, -2, 8, 1,
-3, -2, 9, 1,
-3, -2, 10, 1,
-3, -2, 11, 1,
-3, -2, 12, 1,
-4, -2, -1, 1,
-4, -2, 0, 1,
-4, -2, 1, 1,
-4, -2, 2, 1,
-4, -2, 3, 1,
-4, -2, 4, 1,
-4, -2, 5, 1,
-4, -2, 6, 1,
-4, -2, 7, 1,
-4, -2, 8, 1,
-4, -2, 9, 1,
-4, -2, 10, 1,
-4, -2, 11, 1,
-4, -2, 12, 1,
-5, -2, -1, 1,
-5, -2, 0, 1,
-5, -2, 1, 1,
-5, -2, 2, 1,
-5, -2, 3, 1,
-5, -2, 4, 1,
-5, -2, 5, 1,
-5, -2, 6, 1,
-5, -2, 7, 1,
-5, -2, 8, 1,
-5, -2, 9, 1,
-5, -2, 10, 1,
-5, -2, 11, 1,
-5, -2, 12, 1,
-6, -2, -1, 1,
-6, -2, 0, 1,
-6, -2, 1, 1,
-6, -2, 2, 1,
-6, -2, 3, 1,
-6, -2, 4, 1,
-6, -2, 5, 1,
-6, -2, 6, 1,
-6, -2, 7, 1,
-6, -2, 8, 1,
-6, -2, 9, 1,
-6, -2, 10, 1,
-6, -2, 11, 1,
-7, -2, 3, 1,
-7, -2, 4, 1,
-7, -2, 5, 1,
-7, -2, 6, 1,
-7, -2, 7, 1,
-7, -2, 8, 1,
-7, -2, 9, 1,
-8, -2, 2, 1,
-8, -2, 3, 1,
-8, -2, 4, 1,
-8, -2, 5, 1,
-8, -2, 6, 1,
-8, -2, 7, 1,
-8, -2, 8, 1,
-8, -1, 8, 33,//birch tree
-8, 0, 8, 33,
-9, 1, 10, 7,
-8, 1, 10, 7,
-7, 1, 10, 7,
-10, 1, 9, 7,
-9, 1, 9, 7,
-8, 1, 9, 7,
-7, 1, 9, 7,
-6, 1, 9, 7,
-10, 1, 8, 7,
-9, 1, 8, 7,
-8, 1, 8, 7,
-7, 1, 8, 7,
-6, 1, 8, 7,
-10, 1, 7, 7,
-9, 1, 7, 7,
-8, 1, 7, 7,
-7, 1, 7, 7,
-6, 1, 7, 7,
-9, 1, 6, 7,
-8, 1, 6, 7,
-7, 1, 6, 7,
-9, 2, 10, 7,
-8, 2, 10, 7,
-7, 2, 10, 7,
-10, 2, 9, 7,
-9, 2, 9, 7,
-8, 2, 9, 7,
-7, 2, 9, 7,
-6, 2, 9, 7,
-10, 2, 8, 7,
-9, 2, 8, 7,
-8, 2, 8, 7,
-7, 2, 8, 7,
-6, 2, 8, 7,
-10, 2, 7, 7,
-9, 2, 7, 7,
-8, 2, 7, 7,
-7, 2, 7, 7,
-6, 2, 7, 7,
-9, 2, 6, 7,
-8, 2, 6, 7,
-7, 2, 6, 7,
-7, 3, 8, 7,//topper leaves
-9, 3, 8, 7,
-8, 3, 7, 7,
-8, 3, 9, 7,
-7, 4, 8, 7,
-9, 4, 8, 7,
-8, 4, 7, 7,
-8, 4, 9, 7,
3, 1, 8, 141,//cactus
3, 2, 8, 141,
];
var mainBG = document.createElement("canvas");
mainBG.width = gl.canvas.width;
mainBG.height = gl.canvas.height;
var mainBGRot = 0//-HALF_PI / 3;
win.mainBGW = 0
win.renderMainBG = function(){
//*
//mainBGRot += 0.05
mainBGRot += 0.002;
if(mainBGRot > Math.PId){
mainBGRot = 0;
}/*/
mainBGRot += 0.001;
if(mainBGRot > 1){
mainBGRot = 0;
}//*/
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
//remove or add the slash to toggle comment
//can be: //* or /*
/*
gl.useProgram(program3D)
FOV(100)
initModelView(null, 1, 1.5, 5, -HALF_PI / 25, mainBGRot)//-HALF_PI / 3
gl.disableVertexAttribArray(glCache.aShadow)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttrib1f(glCache.aShadow, 1.0)
gl.vertexAttrib1f(glCache.aSkylight, 1.0)
gl.vertexAttrib1f(glCache.aBlocklight, 1.0)
gl.uniform3f(glCache.skyColor, sky[0], sky[1], sky[2])
for (let i = 0; i < blocks.length; i += 4) {
block2(blocks[i + 0], blocks[i + 1], blocks[i + 2], blocks[i + 3])
}
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)/*/
gl.useProgram(program3D)
//FOV(90)
initModelView(null, 0, 0, 0, 0, mainBGRot, 1,1)
gl.disableVertexAttribArray(glCache.aShadow)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttrib1f(glCache.aShadow, 1.0)
gl.vertexAttrib1f(glCache.aSkylight, 1.0)
gl.vertexAttrib1f(glCache.aBlocklight, 1.0)
gl.uniform1i(glCache.uSampler, 4)
gl.bindTexture(gl.TEXTURE_2D, panoramaTexture)
vertexAttribPointer("aVertex", program3D, "aVertex", 3, panoramaVertBuffer)
vertexAttribPointer("aTexture", program3D, "aTexture", 2, panoramaTexBuffer)
gl.disable(gl.CULL_FACE)
gl.drawElements(gl.TRIANGLES, panoramaSize*6, gl.UNSIGNED_INT, 0)
gl.uniform1i(glCache.uTrans, 1)
gl.drawElements(gl.TRIANGLES, panoramaSize*6, gl.UNSIGNED_INT, 0)
gl.uniform1i(glCache.uTrans, 0)
gl.enable(gl.CULL_FACE)
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)
gl.uniform1i(glCache.uSampler, 0)
//*/
}
// Dirt background
use2d()
let aspect = width / height
let stack = height / 96
let bright = 0.4
if (dirtBuffer) {
gl.deleteBuffer(dirtBuffer)
}
dirtBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, dirtBuffer)
let bgCoords = new Float32Array([
-1, -1, 0, stack, bright,
1, -1, stack * aspect, stack, bright,
1, 1, stack * aspect, 0, bright,
-1, 1, 0, 0, bright
])
gl.bufferData(gl.ARRAY_BUFFER, bgCoords, gl.STATIC_DRAW)
gl.uniform1i(glCache.uSampler2, 1)
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
gl.vertexAttribPointer(glCache.aVertex2, 2, gl.FLOAT, false, 20, 0)
gl.vertexAttribPointer(glCache.aTexture2, 2, gl.FLOAT, false, 20, 8)
gl.vertexAttribPointer(glCache.aShadow2, 1, gl.FLOAT, false, 20, 16)
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
let pixels = new Uint8Array(width * height * 4)
gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
dirtbg = ctx.createImageData(width, height)
dirtbg.data.set(pixels)
// Netherrack background
bright = 0.4
if (netherBuffer) {
gl.deleteBuffer(netherBuffer)
}
netherBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, netherBuffer)
bgCoords = new Float32Array([
-1, -1, 0, stack, bright,
1, -1, stack * aspect, stack, bright,
1, 1, stack * aspect, 0, bright,
-1, 1, 0, 0, bright
])
gl.bufferData(gl.ARRAY_BUFFER, bgCoords, gl.STATIC_DRAW)
gl.uniform1i(glCache.uSampler2, 2) //netherrack textures uses TEXTURE2 so the number is 2
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
gl.vertexAttribPointer(glCache.aVertex2, 2, gl.FLOAT, false, 20, 0)
gl.vertexAttribPointer(glCache.aTexture2, 2, gl.FLOAT, false, 20, 8)
gl.vertexAttribPointer(glCache.aShadow2, 1, gl.FLOAT, false, 20, 16)
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
pixels = new Uint8Array(width * height * 4)
gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
netherbg = ctx.createImageData(width, height)
netherbg.data.set(pixels)
}
function initPlayer() {
p = new Camera()
p.speed = 0.075
p.velocity = new PVector(0, 0, 0)
p.pos = new Float32Array(3)
p.sprintSpeed = 1.5
p.flySpeed = 2.5
p.x = 8
p.y = superflat ? 6 : (round(noiseProfile.noise(8 * generator.smooth, 8 * generator.smooth) * generator.height) + 2 + generator.extra)
p.z = 8
p.previousX = 8
p.previousY = 70
p.previousZ = 8
p.w = 3 / 8
p.bottomH = 1.62
p.topH = 0.18
p.onGround = false
p.jumpSpeed = 0.3
p.sprinting = false
p.maxYVelocity = 1.5
p.gravityStength = -0.032
p.lastUpdate = performance.now()
p.lastBreak = Date.now()
p.lastPlace = Date.now()
p.lastJump = Date.now()
p.autoBreak = false
p.autoBuild = false
p.flying = false
p.sneaking = false
p.spectator = false
p.health = 20
p.oxygen = 20
p.food = 20
p.foodSaturation = 5
p.foodTimer = 0
p.foodExhaustion = 0
p.foodJitter = 0
p.eatStart = 0
p.eating = false
p.lastY = 0 //y the last time it touched the ground
p.character = new Character(1)
p.thirdPerson = false
p.spyglassTimer = 0
p.spyglassStart = 0
p.prevUsingSpyglass = false
p.usingSpyglass = false
p.lastXP = 0
p.XP = 0
p.level = 0
p.nextLevel = 0
setLevel()
p.burning = false
p.burnTime = 0
p.burnStart = 0
win.player = p
win.p2 = p2
}
function respawn(){
let spawn = world.spawnPoint
p.x = spawn.x
p.z = spawn.z
/*p.y = 0
while(world.getBlock(0, p.y, 0)){
p.y ++;
if(p.y > maxHeight) break;
}*/
p.y = spawn.y
p.health = 20
p.oxygen = 20
witherEffect = 0
harmEffect = 0
healEffect = 0
p.foodSaturation = 5
p.foodTimer = 0
p.foodExhaustion = 0
p.food = 20
p.lastXP = 0
p.XP = 0
freezeEffect = 0
dieMessage = username+" died because ¯\\_(ツ)_/¯"
}
function initWorldsMenu() {
while (window.worlds.firstChild) {
window.worlds.removeChild(window.worlds.firstChild)
}
selectedWorld = 0
window.boxCenterTop.value = ""
const deselect = () => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
}
function addWorld(name, version, size, id, edited, thumbnail) {
let div = doc.createElement("div")
div.className = "world"
div.onclick = e => {
deselect()
div.classList.add("selected")
selectedWorld = id
}
let br = "<br>"
div.id = id
div.innerHTML = "<img class='thumbnail'"+(thumbnail ? (" src='" + thumbnail + "'") : "")+"><div class='thumbnailHover'></div>"
div.innerHTML += "<strong>" + Messages.format(name) + "</strong>" + br
if (edited){
let str = (new Date(edited).toLocaleDateString(undefined, {
year: "numeric",
month: "short",
day: "numeric",
hour: "numeric",
minute: "2-digit"
}))
div.innerHTML += str + br
}
div.innerHTML += version + br
div.innerHTML += `${size.toLocaleString()} bytes used`
window.worlds.appendChild(div)
}
worlds = {}
if (loadString) {
try {
let tempWorld = new World()
tempWorld.loadSave(loadString)
let now = Date.now()
addWorld(`${tempWorld.name} (Pre-loaded)`, tempWorld.version, loadString.length, now)
worlds[now] = {
code: loadString,
id: now
}
}
catch(e) {
console.log("Unable to load hardcoded save.")
console.error(e)
}
}
loadFromDB().then(res => {
if(res && res.length) {
let index = res.findIndex(obj => obj.id === "settings")
if (index >= 0) {
Object.assign(settings, res[index].data) // Stored data overrides any hardcoded settings
p.FOV(settings.fov)
res.splice(index, 1)
}
}
if (res && res.length) {
res = res.map(d => d.data).filter(d => d && d.code).sort((a, b) => b.edited - a.edited)
for (let data of res) {
addWorld(data.name, data.version, (data.code.length + 60), data.id, data.edited, data.thumbnail)
worlds[data.id] = data
}
}
window.worlds.onclick = Button.draw
window.boxCenterTop.onkeyup = Button.draw
}).catch(e => console.error(e))
superflat = false
trees = true
caves = true
survival = false
}
var servers = {}
async function initServersMenu() {
while (window.servers.firstChild) {
window.servers.removeChild(window.servers.firstChild)
}
selectedWorld = null
const deselect = () => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
}
function addWorld(name, id, host, players) {
let div = doc.createElement("div")
div.className = "world"
div.onclick = e => {
deselect()
div.classList.add("selected")
selectedWorld = id
}
let br = "<br>"
div.id = id
div.innerHTML = "<div class='ping'>Pinging...</div>"
div.innerHTML += "<strong>" + Messages.format(name)+ "</strong>" + br
div.innerHTML += "Hosted by "+host + br
div.innerHTML += players.length+" player"+(players.length===1 ? "" : "s")+" online"
servers[id] = {
id:id,
name:name,
host:host
}
window.servers.appendChild(div)
}
var worlds;
await getWorlds(pings => {
if(screen !== "multiplayer menu") return
var elems = window.servers.querySelectorAll(".world")
for(var i=0; i<elems.length; i++){
var el = elems[i]
var p = el.querySelector(".ping")
var ping = pings[el.id]
if(typeof ping === "number"){
var y
if(ping > 800) y = 32*2
else if(ping > 600) y = 24*2
else if(ping > 400) y = 16*2
else if(ping > 200) y = 8*2
else y = 0
p.innerHTML = ping+" miliseconds<div class='img' style='background-position:0 "+y+"px;'></div>"
}else if(ping === "timeout"){
p.innerHTML = "Ping timed out"
}else{
p.innerHTML = "Error"
}
}
}).then(r => worlds=r)
if(worlds === "notLoggedIn") return changeScene("main menu")
if(worlds === "offline") return window.servers.innerHTML = "<div class='message'>You are offline. Connect to the internet first.</div>"
worlds.forEach(r => addWorld(r.name, r.id, r.host, r.players))
window.servers.onclick = Button.draw
superflat = false
trees = true
caves = true
survival = false
}
let marketplace = {}; win.marketplaceData = null
async function initMarketplace(){
marketplaceData = await fetch("https://16f81.codesandbox.io/maps.json")
await new Promise((resolve, reject) => {
marketplaceData.text().then(r => {marketplaceData = JSON.parse(r); resolve()})
})
marketplace = {}
window.marketplace.innerHTML = ""
const deselect = () => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
}
function addWorld(name, version, size, id, edited) {
let div = doc.createElement("div")
div.className = "world"
div.onclick = e => {
deselect()
div.classList.add("selected")
selectedWorld = id
}
let br = "<br>"
div.id = id
div.innerHTML = "<strong>" + Messages.format(name) + "</strong>" + br
if (edited){
let str = (new Date(edited).toLocaleDateString(undefined, {
year: "numeric",
month: "short",
day: "numeric",
hour: "numeric",
minute: "2-digit"
}))
div.innerHTML += str + br
}
div.innerHTML += version + br
div.innerHTML += `${size.toLocaleString()} bytes used`
window.marketplace.appendChild(div)
superflat = false
trees = true
caves = true
survival = false
}
let tempWorld = new World()
marketplaceData.forEach(data => {
let loadString, mod
if(typeof data === "object"){
loadString = data.loadString
mod = data.mod
}else loadString = data
tempWorld.loadSave(loadString)
let now = Date.now()
addWorld(tempWorld.name, tempWorld.version, loadString.length, now)
marketplace[now] = {
code: loadString,
id: now,
name: tempWorld.name,
version: tempWorld.version,
mod: mod,
}
})
window.marketplace.onclick = Button.draw
}
function saveFromMarketplace(){
let save = marketplace[selectedWorld]
saveToDB(save.id, {
id: save.id,
edited: Date.now(),
name: save.name,
version: save.version,
code: save.code,
mod: save.mod
})
initWorldsMenu()
changeScene("loadsave menu")
}
var sounds = {
click: "click.ogg",
damage: {
bigfall: "damage/fallbig.ogg",
smallfall: "damage/fallsmall.ogg",
hit1: "damage/hit1.ogg",
hit2: "damage/hit2.ogg",
hit3: "damage/hit3.ogg",
drown1: "damage/drown1.ogg",
drown2: "damage/drown2.ogg",
drown3: "damage/drown3.ogg",
drown4: "damage/drown4.ogg",
freeze1: "damage/freeze1.ogg",
freeze2: "damage/freeze2.ogg",
freeze3: "damage/freeze3.ogg",
freeze4: "damage/freeze4.ogg",
freeze5: "damage/freeze5.ogg"
},
block: {
grass: {
dig1: "grass/dig1.ogg",
dig2: "grass/dig2.ogg",
dig3: "grass/dig3.ogg",
dig4: "grass/dig4.ogg",
step1: "grass/step1.ogg",
step2: "grass/step2.ogg",
step3: "grass/step3.ogg",
step4: "grass/step4.ogg",
step5: "grass/step5.ogg",
step6: "grass/step6.ogg",
},
stone: {
dig1: "stone/dig1.ogg",
dig2: "stone/dig2.ogg",
dig3: "stone/dig3.ogg",
dig4: "stone/dig4.ogg",
step1: "stone/step1.ogg",
step2: "stone/step2.ogg",
step3: "stone/step3.ogg",
step4: "stone/step4.ogg",
step5: "stone/step5.ogg",
step6: "stone/step6.ogg",
},
gravel: {
dig1: "gravel/dig1.ogg",
dig2: "gravel/dig2.ogg",
dig3: "gravel/dig3.ogg",
dig4: "gravel/dig4.ogg",
step1: "gravel/step1.ogg",
step2: "gravel/step2.ogg",
step3: "gravel/step3.ogg",
step4: "gravel/step4.ogg",
},
sand: {
dig1: "sand/dig1.ogg",
dig2: "sand/dig2.ogg",
dig3: "sand/dig3.ogg",
dig4: "sand/dig4.ogg",
step1: "sand/step1.ogg",
step2: "sand/step2.ogg",
step3: "sand/step3.ogg",
step4: "sand/step4.ogg",
step5: "sand/step5.ogg",
},
basalt: {
dig1: "basalt/dig1.ogg",
dig2: "basalt/dig2.ogg",
dig3: "basalt/dig3.ogg",
dig4: "basalt/dig4.ogg",
dig5: "basalt/dig5.ogg",
step1: "basalt/step1.ogg",
step2: "basalt/step2.ogg",
step3: "basalt/step3.ogg",
step4: "basalt/step4.ogg",
step5: "basalt/step5.ogg",
step6: "basalt/step6.ogg",
},
chain: {
dig1: "chain/dig1.ogg",
dig2: "chain/dig2.ogg",
dig3: "chain/dig3.ogg",
dig4: "chain/dig4.ogg",
step1: "chain/step1.ogg",
step2: "chain/step2.ogg",
step3: "chain/step3.ogg",
step4: "chain/step4.ogg",
step5: "chain/step5.ogg",
step6: "chain/step6.ogg",
},
cloth: {
dig1: "cloth/dig1.ogg",
dig2: "cloth/dig2.ogg",
dig3: "cloth/dig3.ogg",
dig4: "cloth/dig4.ogg",
step1: "cloth/step1.ogg",
step2: "cloth/step2.ogg",
step3: "cloth/step3.ogg",
step4: "cloth/step4.ogg",
},
fungus: {
dig1: "fungus/dig1.ogg",
dig2: "fungus/dig2.ogg",
dig3: "fungus/dig3.ogg",
dig4: "fungus/dig4.ogg",
dig5: "fungus/dig3.ogg",
dig6: "fungus/dig4.ogg",
},
glass: {
dig1: "glass/dig1.ogg",
dig2: "glass/dig2.ogg",
dig3: "glass/dig3.ogg",
},
lantern: {
dig1: "lantern/dig1.ogg",
dig2: "lantern/dig2.ogg",
dig3: "lantern/dig3.ogg",
dig4: "lantern/dig4.ogg",
dig5: "lantern/dig5.ogg",
dig6: "lantern/dig6.ogg",
place1: "lantern/place1.ogg",
place2: "lantern/place2.ogg",
place3: "lantern/place3.ogg",
place4: "lantern/place4.ogg",
place5: "lantern/place5.ogg",
place6: "lantern/place6.ogg",
},
nether_bricks: {
dig1: "nether_bricks/dig1.ogg",
dig2: "nether_bricks/dig2.ogg",
dig3: "nether_bricks/dig3.ogg",
dig4: "nether_bricks/dig4.ogg",
dig5: "nether_bricks/dig5.ogg",
dig6: "nether_bricks/dig6.ogg",
step1: "nether_bricks/step1.ogg",
step2: "nether_bricks/step2.ogg",
step3: "nether_bricks/step3.ogg",
step4: "nether_bricks/step4.ogg",
step5: "nether_bricks/step5.ogg",
step6: "nether_bricks/step6.ogg",
},
nether_ore: {
dig1: "nether_ore/dig1.ogg",
dig2: "nether_ore/dig2.ogg",
dig3: "nether_ore/dig3.ogg",
dig4: "nether_ore/dig4.ogg",
step1: "nether_ore/step1.ogg",
step2: "nether_ore/step2.ogg",
step3: "nether_ore/step3.ogg",
step4: "nether_ore/step4.ogg",
step5: "nether_ore/step5.ogg",
},
nether_sprouts: {
dig1: "nether_sprouts/dig1.ogg",
dig2: "nether_sprouts/dig2.ogg",
dig3: "nether_sprouts/dig3.ogg",
dig4: "nether_sprouts/dig4.ogg",
step1: "nether_sprouts/step1.ogg",
step2: "nether_sprouts/step2.ogg",
step3: "nether_sprouts/step3.ogg",
step4: "nether_sprouts/step4.ogg",
step5: "nether_sprouts/step5.ogg",
},
netherite: {
dig1: "netherite/dig1.ogg",
dig2: "netherite/dig2.ogg",
dig3: "netherite/dig3.ogg",
dig4: "netherite/dig4.ogg",
step1: "netherite/step1.ogg",
step2: "netherite/step2.ogg",
step3: "netherite/step3.ogg",
step4: "netherite/step4.ogg",
step5: "netherite/step5.ogg",
step6: "netherite/step6.ogg",
},
netherrack: {
dig1: "netherrack/dig1.ogg",
dig2: "netherrack/dig2.ogg",
dig3: "netherrack/dig3.ogg",
dig4: "netherrack/dig4.ogg",
dig5: "netherrack/dig5.ogg",
dig6: "netherrack/dig6.ogg",
step1: "netherrack/step1.ogg",
step2: "netherrack/step2.ogg",
step3: "netherrack/step3.ogg",
step4: "netherrack/step4.ogg",
step5: "netherrack/step5.ogg",
step6: "netherrack/step6.ogg",
},
netherwart: {
dig1: "netherwart/dig1.ogg",
dig2: "netherwart/dig2.ogg",
dig3: "netherwart/dig3.ogg",
dig4: "netherwart/dig4.ogg",
dig5: "netherwart/dig5.ogg",
dig6: "netherwart/dig6.ogg",
step1: "netherwart/step1.ogg",
step2: "netherwart/step2.ogg",
step3: "netherwart/step3.ogg",
step4: "netherwart/step4.ogg",
step5: "netherwart/step5.ogg",
},
nylium: {
dig1: "nylium/dig1.ogg",
dig2: "nylium/dig2.ogg",
dig3: "nylium/dig3.ogg",
dig4: "nylium/dig4.ogg",
dig5: "nylium/dig5.ogg",
dig6: "nylium/dig6.ogg",
step1: "nylium/step1.ogg",
step2: "nylium/step2.ogg",
step3: "nylium/step3.ogg",
step4: "nylium/step4.ogg",
step5: "nylium/step5.ogg",
step6: "nylium/step6.ogg",
},
roots: {
dig1: "roots/dig1.ogg",
dig2: "roots/dig2.ogg",
dig3: "roots/dig3.ogg",
dig4: "roots/dig4.ogg",
dig5: "roots/dig5.ogg",
dig6: "roots/dig6.ogg",
step1: "roots/step1.ogg",
step2: "roots/step2.ogg",
step3: "roots/step3.ogg",
step4: "roots/step4.ogg",
step5: "roots/step5.ogg",
},
shroomlight: {
dig1: "shroomlight/dig1.ogg",
dig2: "shroomlight/dig2.ogg",
dig3: "shroomlight/dig3.ogg",
dig4: "shroomlight/dig4.ogg",
dig5: "shroomlight/dig5.ogg",
step1: "shroomlight/step1.ogg",
step2: "shroomlight/step2.ogg",
step3: "shroomlight/step3.ogg",
step4: "shroomlight/step4.ogg",
step5: "shroomlight/step5.ogg",
step6: "shroomlight/step6.ogg",
},
soul_sand: {
dig1: "soul_sand/dig1.ogg",
dig2: "soul_sand/dig2.ogg",
dig3: "soul_sand/dig3.ogg",
dig4: "soul_sand/dig4.ogg",
dig5: "soul_sand/dig5.ogg",
dig6: "soul_sand/dig6.ogg",
dig7: "soul_sand/dig7.ogg",
dig8: "soul_sand/dig8.ogg",
dig9: "soul_sand/dig9.ogg",
step1: "soul_sand/step1.ogg",
step2: "soul_sand/step2.ogg",
step3: "soul_sand/step3.ogg",
step4: "soul_sand/step4.ogg",
step5: "soul_sand/step5.ogg",
},
stem: {
dig1: "stem/dig1.ogg",
dig2: "stem/dig2.ogg",
dig3: "stem/dig3.ogg",
dig4: "stem/dig4.ogg",
dig5: "stem/dig5.ogg",
dig6: "stem/dig6.ogg",
step1: "stem/step1.ogg",
step2: "stem/step2.ogg",
step3: "stem/step3.ogg",
step4: "stem/step4.ogg",
step5: "stem/step5.ogg",
step6: "stem/step6.ogg",
},
wood: {
dig1: "wood/dig1.ogg",
dig2: "wood/dig2.ogg",
dig3: "wood/dig3.ogg",
dig4: "wood/dig4.ogg",
step1: "wood/step1.ogg",
step2: "wood/step2.ogg",
step3: "wood/step3.ogg",
step4: "wood/step4.ogg",
step5: "wood/step5.ogg",
step6: "wood/step6.ogg",
},
anvil: {
land: "random/anvil_land.ogg"
},
amethyst: {
dig1: "amethyst/break1.ogg",
dig2: "amethyst/break2.ogg",
dig3: "amethyst/break3.ogg",
dig4: "amethyst/break4.ogg",
place1: "amethyst/place1.ogg",
place2: "amethyst/place2.ogg",
place3: "amethyst/place3.ogg",
place4: "amethyst/place4.ogg",
step1: "amethyst/step1.ogg",
step2: "amethyst/step2.ogg",
step3: "amethyst/step3.ogg",
step4: "amethyst/step4.ogg",
step5: "amethyst/step5.ogg",
step6: "amethyst/step6.ogg",
step7: "amethyst/step7.ogg",
step8: "amethyst/step8.ogg",
step9: "amethyst/step9.ogg",
step10: "amethyst/step10.ogg",
step11: "amethyst/step11.ogg",
step12: "amethyst/step12.ogg",
step13: "amethyst/step13.ogg",
step14: "amethyst/step14.ogg",
},
amethyst_cluster: {
dig1: "amethyst_cluster/break1.ogg",
dig2: "amethyst_cluster/break2.ogg",
dig3: "amethyst_cluster/break3.ogg",
dig4: "amethyst_cluster/break4.ogg",
place1: "amethyst_cluster/place1.ogg",
place2: "amethyst_cluster/place2.ogg",
place3: "amethyst_cluster/place3.ogg",
place4: "amethyst_cluster/place4.ogg",
},
deepslate:{
dig1:"deepslate/break1.ogg",
dig2:"deepslate/break2.ogg",
dig3:"deepslate/break3.ogg",
dig4:"deepslate/break4.ogg",
place1:"deepslate/place1.ogg",
place2:"deepslate/place2.ogg",
place3:"deepslate/place3.ogg",
place4:"deepslate/place4.ogg",
place5:"deepslate/place5.ogg",
place6:"deepslate/place6.ogg",
step1:"deepslate/step1.ogg",
step2:"deepslate/step2.ogg",
step3:"deepslate/step3.ogg",
step4:"deepslate/step4.ogg",
step5:"deepslate/step5.ogg",
step6:"deepslate/step6.ogg",
},
deepslate_bricks:{
place1:"deepslate_bricks/place1.ogg",
place2:"deepslate_bricks/place2.ogg",
place3:"deepslate_bricks/place3.ogg",
place4:"deepslate_bricks/place4.ogg",
place5:"deepslate_bricks/place5.ogg",
place6:"deepslate_bricks/place6.ogg",
step1:"deepslate_bricks/step1.ogg",
step2:"deepslate_bricks/step2.ogg",
step3:"deepslate_bricks/step3.ogg",
step4:"deepslate_bricks/step4.ogg",
step5:"deepslate_bricks/step5.ogg",
},
end_portal:{
eyeplace1:"end_portal/eyeplace1.ogg",
eyeplace2:"end_portal/eyeplace2.ogg",
eyeplace3:"end_portal/eyeplace3.ogg"
},
portal:{
portal:"portal/portal.ogg",
travel:"portal/travel.ogg",
trigger:"portal/trigger.ogg",
},
},
entity: {
generic: {
explode1: "random/explode1.ogg",
explode2: "random/explode2.ogg",
explode3: "random/explode3.ogg",
explode4: "random/explode4.ogg",
},
tnt: {
fuse: "random/fuse.ogg"
},
item: {
pickup: "random/plop.ogg",
break: "random/break.ogg"
},
witch:{
ambient1:"witch/ambient1.ogg",
ambient2:"witch/ambient2.ogg",
ambient3:"witch/ambient3.ogg",
ambient4:"witch/ambient4.ogg",
ambient5:"witch/ambient5.ogg",
celebrate:"witch/celebrate.ogg",
},
ender_dragon:{
end:"ender_dragon/end.ogg",
},
},
item:{
spyglass:{
use:"spyglass/use.ogg",
stop:"spyglass/stop.ogg"
}
},
experience:{
orb:"random/orb.ogg",
levelup:"random/levelup.ogg"
},
liquid:{
enter: "liquid/enter.ogg",
exit: "liquid/exit.ogg",
splash: "liquid/splash.ogg"
},
eat: {
1: "random/eat1.ogg",
2: "random/eat2.ogg",
3: "random/eat3.ogg",
burp:"random/burp.ogg"
},
/*music:{
menu:{
1:"music/menu/menu1.ogg",
2:"music/menu/menu2.ogg",
3:"music/menu/menu3.ogg",
4:"music/menu/menu4.ogg",
},
game:{
creative:{
1:"music/game/creative/creative1.ogg",
2:"music/game/creative/creative2.ogg",
3:"music/game/creative/creative3.ogg",
4:"music/game/creative/creative4.ogg",
5:"music/game/creative/creative5.ogg",
6:"music/game/creative/creative6.ogg",
}
}
},*/
}
var soundVolumes = {
}
win.sounds = sounds
function loadSoundBuffer(url){
return new Promise((resolve, reject) => {
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'arraybuffer';
request.onerror = reject
request.onload = function() {
audioCtx.decodeAudioData(request.response, function(buffer) {
resolve(buffer)
}, reject);
}
request.send();
})
}
async function initAudioCtx(){
try{
window.AudioContext = window.AudioContext || window.webkitAudioContext;
audioCtx = new AudioContext();
}catch(e) {
alert('Web Audio API is not supported in this browser');
return
}
async function loadSoundsObj(obj){
for(var i in obj){
if(typeof obj[i] === "object"){
loadSoundsObj(obj[i])
}else{
var url
if(obj[i].startsWith("https://")){
url = obj[i]
}else{
url = "https://16f81.codesandbox.io/sounds/"+obj[i]
}
let loadIt = true
if(url.startsWith("https://16f81.codesandbox.io/sounds/music/") && urlParams.has("no_music")) loadIt = false
if(loadIt){
await loadSoundBuffer(url).then(buffer => {
obj[i] = buffer
loadDone()
}).catch(() => {
loadDone()
})
}else loadDone()
}
}
}
loadSoundsObj(sounds)
}
function playSound(name, start, volume, onend){ //from https://www.html5rocks.com/en/tutorials/webaudio/intro/
if(!soundOn) return
var sound
var soundVol
if(name.includes(".")){
sound = sounds
soundVol = soundVolumes
name = name.split(".")
for(var i=0; i<name.length; i++){
var n = name[i]
if(sound[n]){
sound = sound[n]
}else return
if(soundVol[n]){soundVol = soundVol[n]}
}
}else{
sound = sounds[name]
soundVol = soundVolumes[name]
if(!sound) return
}
if(!volume && volume !== 0) volume = 1
if((typeof soundVol === "object") || (!soundVol && soundVol !== 0)) soundVol = 1
volume *= soundVol
var buffer = sound
if(audioCtx && (typeof buffer !== "string") && volume > 0){
var source = audioCtx.createBufferSource();
source.buffer = buffer;
if( (!(volume || volume === 0)) || volume === 1){
source.connect(audioCtx.destination);
}else{
var gainNode = audioCtx.createGain();
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
gainNode.gain.value = volume;
}
if(onend) source.onended = onend
source.start(start ? audioCtx.currentTime + (start/1000) : 0);
return true
}
}
win.playSound = playSound
function blockSound(blockID, type, x,y,z, volume){
var block = blockData[blockID]
if(!(volume || volume === 0)) volume = posSound(x,y,z)
var sound
switch(type){
case "place":
sound = block.placeSound || block.digSound
break;
case "dig":
sound = block.digSound
break;
case "step":
sound = block.stepSound
break;
case "breaking":
sound = block.stepSound
break;
case "land":
sound = block.landSound || block.digSound
}
if(typeof sound === "function") return sound()
if(Array.isArray(sound)){
sound = sound[Math.floor(Math.random()*sound.length)]
}
if(sound){
playSound(sound, 0, volume)
if(multiplayer) send({type:"playSound", data:sound, x:x,y:y,z:z})
}
}
win.blockSound = blockSound
function hitSound(){
var i = Math.ceil(Math.random()*3)
playSound("damage.hit"+i)
if(multiplayer) send({type:"playSound", data:"damage.hit"+i, x:p.x,y:p.y,z:p.z})
}
function drownHurtSound(){
var i = Math.ceil(Math.random()*4)
playSound("damage.drown"+i)
if(multiplayer) send({type:"playSound", data:"damage.drown"+i, x:p.x,y:p.y,z:p.z})
}
function freezeHurtSound(){
var i = Math.ceil(Math.random()*5)
playSound("damage.freeze"+i)
if(multiplayer) send({type:"playSound", data:"damage.freeze"+i, x:p.x,y:p.y,z:p.z})
}
win.hitSound = hitSound
var explodeSounds = ["entity.generic.explode1", "entity.generic.explode2", "entity.generic.explode3", "entity.generic.explode4"]
function explodeSound(x,y,z){
var sound = explodeSounds[Math.floor(Math.random()*explodeSounds.length)]
playSound(sound, 0, posSound(x,y,z))
if(multiplayer) send({type:"playSound", data:sound, x:x,y:y,z:z})
}
win.explodeSound = explodeSound
function posSound(x,y,z){
var volume = 1
if((x || x===0) && (y || y===0) && (z || z===0)){
var falloff = volume > 16 ? 16*volume : 16
var dist = dist3(x,y,z, p2.x, p2.y, p2.z)
volume = dist > falloff ? volume - ((dist - falloff) / 10) : volume
if(volume < 0) volume = 0
}
return volume
}
function eatSound(){
var i = Math.ceil(Math.random()*3)
playSound("eat."+i)
if(multiplayer) send({type:"playSound", data:"eat."+i, x:p.x,y:p.y,z:p.z})
}
let maxStartLoad = 0, loaded = 0
win.allLoaded = false
function findObjValueAmount(obj){
for(var i in obj){
if(typeof obj[i] === "object"){
findObjValueAmount(obj[i])
}else maxStartLoad ++
}
}
findObjValueAmount(sounds)
for(var image in images) maxStartLoad ++
loadProg.innerHTML = `0% 0/${maxStartLoad}`
function loadDone(){
loaded ++
let percent = Math.floor(loaded * 100 / maxStartLoad)
loadProg.innerHTML = `${percent}% ${loaded}/${maxStartLoad}`
loadBar.style.width = percent+"%"
if(loaded === maxStartLoad){
allLoaded = true
loader.style.opacity = 0
setTimeout(() => {
loader.style.opacity = 1
loader.classList.add("hidden")
finishedLoading()
},1000)
}
if(loaded > maxStartLoad){
console.log("loaded > maxStartLoad\nloaded = "+loaded)
}
}
function createNewWorld(){
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
world.id = Date.now()
let name = boxCenterTop.value || "World"
let number = ""
while(true) {
let match = false
for (let id in worlds) {
if (worlds[id].name === name + number) {
match = true
break
}
}
if (match) {
number = number ? number + 1 : 1
} else {
name = name + number
break
}
}
world.name = name.replace(/;/g, "\u037e")
world.loadChunks()
world.chunkGenQueue.sort(sortChunks)
if(survival) setHotbar([0,0,0,0,0,0,0,0,0])
changeScene("loading")
}
function playSelectedWorld(){
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
let code
let inv
let surviv
let mod
let nether
let ent
if (!selectedWorld && !boxCenterTop.value.startsWith("JSON")) {
code = boxCenterTop.value
} else {
let data = worlds[selectedWorld]
if(boxCenterTop.value.startsWith("JSON")){
data = boxCenterTop.value.replace("JSON","")
try{
data = JSON.parse(data)
}catch(e){
alert(e)
}
}
if (data) {
code = data.code
world.id = data.id
world.edited = data.edited
inv = data.inv
surviv = data.surviv
nether = data.nether
ent = data.ent
if(data.achievments) achievments = data.achievments
playersInv = data.playersInv || {}
try{
world.mod = data.mod
mod = Object.constructor("return "+data.mod)()
}catch(e){console.log("error loading mod: "+e)}
}
}
if (code) {
try {
world.loadSave(code)
world.id = world.id || Date.now()
}
catch(e) {
alert("Unable to load save")
return
}
}
if (nether) {
let world = dimensions.nether
try {
world.loadSave(nether)
world.id = world.id || Date.now()
}
catch(e) {
alert("Unable to load save")
return
}
}
if(inv){
world.loadInv(inv)
}else if(survival) setHotbar([0,0,0,0,0,0,0,0,0])
if(surviv){world.loadSurvivStr(surviv)}else{cheats = !survival}
if(ent){
for(var i=0; i<ent.length; i++){
let world = getWorld(ent[i].dimension)
world.posEntity(ent[i])
}
}
if(mod){
try{mod()}catch(e){console.log(e)}
}
changeScene("loading")
}
function setupHelp(){
//Setup images
var divs = document.querySelectorAll("div[img]")
for(var i=0; i<divs.length; i++){
var d = divs[i]
d.style.backgroundSize = "100%"
d.style.imageRendering = "pixelated"
d.style.display = "inline-block"
d.style.verticalAlign = "middle"
var img = d.getAttribute("img")
var w, h
if(img === "heart"){
w = h = 18
d.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAXElEQVQoU3XQQRKAIAiF4Z97ua8j19572UCSTytWjHwCgzGi9dQAzfEHj/YrwOJXgFqhFGl8pw4GepUXdADbBzqBvXeKnVaYwE0uPkEFuZcOio4+QqY8J5igAi9cnpgXB7uKmTQAAAAASUVORK5CYII=)"
}else if(img === "halfHeart"){
w = h = 18
d.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAY0lEQVQoU4WOwQ3AMAgDzS50i/zbkTtAxmCXVLiBoKhS+YDMYSxYNeYoAOoMF7xGVVWVopl5E14R6B1ojctjQgEuqPz9hG4A5w/ETBUMp5opPBJ0KAAmL1/S8XrF3O0Qwf34AVFaJQc+FQukAAAAAElFTkSuQmCC)"
}else if(img === "deadHeart"){
w = h = 18
d.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAT0lEQVQoU62OwQ3AMAwCz1N4//E8RSqjuiVRn/ULocMQvLduGYBr2uhbmSlRVbgGQqkx7esjO/QvtG3yyq6aTeNv2wYQdYwV6MAXpOozfAGB1SIH1uYKrgAAAABJRU5ErkJggg==)"
}
var a = parseInt(d.getAttribute("amount"))
if(a){
d.style.backgroundSize = (100/a)+"% 100%"
d.style.width = (w * a)+"px"
}else d.style.width = w+"px"
d.style.height = h+"px"
}
//Setup collapsibles
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
var c = coll[i]
var title = document.createElement("div")
title.classList.add("title")
title.innerHTML = c.getAttribute("title")
var content = document.createElement("div")
content.classList.add("content")
content.innerHTML = c.innerHTML
c.innerHTML = ""
c.appendChild(title)
c.appendChild(content)
content.style.maxHeight = "0px"
title.addEventListener("click", function() {
var content = this.nextElementSibling
this.classList.toggle("active")
if (content.style.maxHeight !== "0px"){
content.style.maxHeight = "0px";
} else {
content.style.maxHeight = content.scrollHeight + "px";
}
})
}
//Set recipes collapsible
var recipes = document.querySelector("#recipes .content")
var size = inventory.size
var s2 = size/2
var icons = {}
var ix = -s2, iy = s2
function addIcon(id){
ix += size
if(ix > gl.canvas.width - s2){
ix = s2
iy += size
}
drawIcon(ix, iy, id)
icons[id] = [ix,iy]
}
use3d()
FOV(90)
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
var ic = document.createElement("canvas")
ic.width = ic.height = size
var ictx = ic.getContext("2d")
var rhtml = ""
for(var c in crafts){
var r = crafts[c]
if(r.hidden) continue
var arr = c.split(",")
rhtml += "<div class='recipe'>"
rhtml += r.name+"<br><br>"
rhtml += "<div class='grid'>"
//Grid
for(var a=0; a<arr.length; a++){
var id = parseInt(arr[a])
if(id) {
if(!icons[id]){
addIcon(id)
var xy = icons[id]
ictx.clearRect(0,0,size,size)
ictx.drawImage(gl.canvas, xy[0]-s2,xy[1]-s2, size,size, 0,0,size,size)
icons[id] = ic.toDataURL()
}
var img = icons[id]
rhtml += "<img src='"+img+"' style='width:"+size+"px;height:"+size+"px;' title='"+blockData[id].name+"'>"
}else{
rhtml += "<div style='width:"+size+"px;height:"+size+"px;'></div>"
}
if(a%3===2 && a !== 8){
rhtml += "<br>"
}
}
rhtml += "</div>"
//Result
var id = r.id
if(!icons[id]){
addIcon(id)
var xy = icons[id]
ictx.clearRect(0,0,size,size)
ictx.drawImage(gl.canvas, xy[0]-s2,xy[1]-s2, size,size, 0,0,size,size)
icons[id] = ic.toDataURL()
}
var img = icons[id]
rhtml += "<br><div class='result' style='margin-left:"+size+"px;margin-top:"+size+"px;'>"
rhtml += "<img src='"+img+"' style='width:"+size+"px;height:"+size+"px;' title='"+blockData[id].name+"'>"
rhtml += "<div class='number'>"+r.amount+"</div>"
rhtml += "</div><br><br>"
if(r.shapeless){
rhtml += "Shapeless"
}else if(r.shaped){
rhtml += "Shaped"
}else{
rhtml += "Fixed"
}
rhtml += "</div>"
}
recipes.innerHTML = rhtml
}
function initPanorama(){
const shape = shapes.panorama
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
var ts = 16
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = texShapeVerts[0]*ts
texture[index + 1] = texShapeVerts[1]*ts*4
texture[index + 2] = texShapeVerts[2]*ts
texture[index + 3] = texShapeVerts[3]*ts*4
texture[index + 4] = texShapeVerts[4]*ts
texture[index + 5] = texShapeVerts[5]*ts*4
texture[index + 6] = texShapeVerts[6]*ts
texture[index + 7] = texShapeVerts[7]*ts*4
index += 8
}
texNum++
}
panoramaVertBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, panoramaVertBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(new Float32Array(shapeVerts.flat(Infinity))), gl.STATIC_DRAW)
panoramaTexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, panoramaTexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(new Float32Array(texture)), gl.STATIC_DRAW)
panoramaSize = size
}
function initEverything() {
console.log("Initializing world.")
setSeed(Math.random() * 2000000000 | 0)
console.log("worldSeed "+worldSeed)
win.islandGenerator = new Generator();
generatedChunks = 0
crack.shape = shapes.cube
initWebgl()
constVersion(version)
initPlayer()
fetch("https://server.nathaniel2006.repl.co/getuser",{credentials:'include'}).then(r => r.text()).then(r => {
username = r || "Steve"
p.character.changeBlock(abs(r.hashCode()) % 80 + 1)
})
message.innerHTML = "".split("").reverse().join("")
crack.entity = new crackEntity("crack1",0,0,0)
for(var i=0; i<crack.length; i++){crack.entity.cacheTexture(crack[i])}
entityFire = new EntityFire()
fireBlock = new FireBlock(blockIds.fire | SLAB, 0,0,0) //the fire that shows up on your screen
initBackgrounds()
initParticles()
initPanorama()
drawScreens[screen]()
Button.draw()
Slider.draw()
p.FOV(settings.fov)
initWorldsMenu()
initMarketplace()
initButtons()
initAudioCtx()
setupHelp()
}
function finishedLoading(){
// See if a user followed a link here.
if (urlParams.has("target")) {
changeScene("multiplayer menu")
initMultiplayer(urlParams.get("target"))
}
}
// Define all the scene draw functions
let clear,dirt,nether
(function() {
var splashs = [
"Multiplayer!",
"Survival!",
"Flowers? Make a garden!",
"Nether!",
"Can't break bedrock.",
"Chat with a slash!",
"Watch out from\nthe falling sand!",
"Hard Parkour!",
"Log => 4 planks\n2 Planks => 4 sticks\n1 stick + 1 coal\n=\ntorch",
"Annoying cactus!",
"Nice looking flowers.",
"I like watermelon.",
"Have you played\nMinecraft?",
"So, you read splash text.",
document.documentElement.outerHTML.split("\n").length+" lines of code.",
"Island world type\nhas a volcano.",
"Have you realized\npunching wood\nhurts your hand?",
"Don't make a tnt\ncube over\nsomeone's mansion.",
"Awesome!",
"Fun!",
"Build!",
"Mine!",
"Craft!",
"Would you like a potion of fun?",
"Falling anvils are\neven more annoying\nthan sand!",
"No tnt!!!",
"Don't mess\naround with\nuranium!!!",
"Why does my\nhouse have a\nhole in the\nroof???",
"§1C§2o§3l§4o§5r§6m§7a§8t§9i§ac",
"Using WebGL!",
"Who has awesome hair?",
"Supercalifragilisticexpialidocious!",
"Really really fun!",
"Not kidding",
"Punch diamonds!",
"Very long useless text,\nglorbouirewsoytuderkoilsykrojeticfilistikmensuiklit",
"Play for 10 hours!",
"Also try VVVVVV!",
"Also try Terraria!",
"Why are you reading this???",
"Really. You read\n splash text.",
"Umm... Why are\nthe trees floating?",
"No robots",
"Kick 'em up!",
"Gotta eat some soup!",
"Disgusting soup.",
"This is a very\ncool splash.",
"Hey, you!", 
"Can render 400,000 blocks!", 
"Updates incoming", 
"No hidden fees!", 
"Hippopotamus!",
"Gotta catch them all!", 
"Not greyscale", 
"Nope.", 
"Sometimes, having a giant monitor is really helpful.",
"Also try Ultimate Platformer", 
"What's the opposite of right? Wrong!", 
"Feeling snackish? I know the feeling.", 
"Hey look! It's invisible!", 
"LG logo is pacman!", 
"Don't mine bedrock", 
"Cross-platform, if you build the platform",
"I have a nice\nhouse!",
"TNT can be satisfying!",
"Griefing could be fun!"
]
let splash = ""
function rdmSplash(){
splash = splashs[Math.floor(Math.random()*splashs.length)]
}
win.rdmSplash = rdmSplash
win.setSplash = function(s){
splash = splashs[s]
}
rdmSplash()
setInterval(() => rdmSplash(), 60000)
function drawTitle() {
let title = "Minecraft"
let titleWidth = images.minecraft.width*1.6
let titleHeight = images.minecraft.height*1.6
let subtext = "JAVASCRIPT EDITION"
let font = "mojangles,monospace"
strokeWeight(1)
ctx.textAlign = 'center'
/*
ctx.font = "bold 110px " + font
fill(/*30*-/70)
text(title, width / 2, 158)
//fill(40)
text(title, width / 2, 155)
ctx.font = "bold 111px " + font
//fill(50)
text(title, width / 2, 152)
//fill(70)
text(title, width / 2, 150)
//fill(90)
ctx.font = "bold 112px " + font
text(title, width / 2, 148)
fill(110)
text(title, width / 2, 145)*/
ctx.drawImage(images.minecraft, width/2 - (titleWidth/2), 145 - titleHeight, titleWidth,titleHeight)
ctx.font = "bold 32px " + font
fill(50)
text(subtext, width / 2-1, 180)
text(subtext, width / 2+1, 180)
text(subtext, width / 2, 179)
text(subtext, width / 2, 181)
ctx.font = "bold 32px " + font
fill(150)
text(subtext, width / 2, 180)
fill(230,220,0)
ctx.translate(width/2 + 280,170)
ctx.rotate(-Math.PI/8);
var s = (size/40)*6+25
ctx.font = "bold "+s+"px " + font
text(splash, 0,0, s)
ctx.rotate(Math.PI/8);
ctx.translate(-(width/2+280),-170)
}
clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height)
dirt = () => ctx.putImageData(dirtbg, 0, 0)
nether = () => ctx.putImageData(netherbg, 0, 0)
var size = 0
var sizes = 0
var sizess = 1
drawScreens["main menu"] = () => {
clear()
sizes += sizess
if((sizes > 5) || (sizes < -5)){
sizess = -sizess
}
size += sizes
drawTitle()
fill(220)
ctx.font = "18px mojangles"
ctx.textAlign = 'left'
text("Minecraft " + version, 2, height - 2)
ctx.textAlign = "right"
text("Copyright Nojang ABC. Do distrubute!", width - 2, height - 2)
}
drawScreens.play = () => {
ctx2.clearRect(0,0,width,height)
var now = Date.now()
tick = false
if(now - lastTick > 50){
lastTick = now
tick = true
}
p.rz = 0
if(survival && p.y < 0){
if(now-lastBlockHarm > 500){
lastBlockHarm = now
damage(4, username+" fell out of the world.")
}
}
if(controlMap.place.pressed && holding && blockData[holding].edible && (blockData[holding].eatWhenFull||(!survival) ? true : p.food < 20)){
var block = blockData[holding]
if(p.eating){
var time = now - p.eatStart
if(now - eatSoundTimer > 250){
eatSoundTimer = now
eatSound()
}
if(time > 1610){
p.eating = false
p.food += block.food
p.foodSaturation += block.saturation
if(survival && inventory.hotbar[inventory.hotbarSlot]){
inventory.hotbar[inventory.hotbarSlot].amount --;
updateHUD = true
}
if(p.food >= 20){
playSound("eat.burp")
if(multiplayer) send({type:"playSound", data:"eat.burp", x:p.x,y:p.y,z:p.z})
}
}
}else{
p.eating = true
p.eatStart = now
}
}else if(p.eating) p.eating = false
if(p.sneaking || p.eating || p.usingSpyglass){
p.sprinting = false
p.speed = 0.03
if(p.sneaking)p.bottomH = 1.32
}else if(!p.sprinting){
p.sneaking = false
p.speed = 0.075
p.bottomH = 1.62
}
for(var i=0; i<9; i++){
if(inventory.hotbar[i].id && inventory.hotbar[i].amount < 1){
inventory.hotbar[i] = 0
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
if(inventory.hotbar[i].id && inventory.hotbar[i].animation > 1){
inventory.hotbar[i].animation -= 0.04
if(inventory.hotbar[i].animation < 1) inventory.hotbar[i].animation = 1
updateHUD = true
}
if(inventory.hotbar[i] && (blockData[inventory.hotbar[i].id].pickaxe || blockData[inventory.hotbar[i].id].sword || blockData[inventory.hotbar[i].id].shovel || blockData[inventory.hotbar[i].id].axe || blockData[inventory.hotbar[i].id].hoe || inventory.hotbar[i].id===blockIds.flintAndSteel)){
if(inventory.hotbar[i].durability <= 0){
inventory.hotbar[i] = 0
holding = inventory.hotbar[inventory.hotbarSlot].id
playSound("entity.item.break")
if(multiplayer) send({type:"playSound", data:"entity.item.break", x:p.x,y:p.y,z:p.z})
updateHUD = true
}else if(!inventory.hotbar[i].durability){
inventory.hotbar[i].durability = blockData[inventory.hotbar[i].id].durability
}
}
}
if((now - attackCooldownStart) / 1000 * 20 > attackCooldownTime){
if(attackCooldown !== 0) updateHUD = true
attackCooldown = 0
}else{
let prog = (now - attackCooldownStart) / 1000 * 20
attackCooldown = prog / attackCooldownTime
updateHUD = true
}
p.prevUsingSpyglass = p.usingSpyglass
p.usingSpyglass = false
if(controlMap.place.pressed && holding && blockData[holding].spyglass){
p.spyglassTimer = Date.now() - p.spyglassStart
p.usingSpyglass = p.spyglassTimer < 60000
}
if(!p.prevUsingSpyglass && p.usingSpyglass){
p.FOV(settings.fov/10, 300)
playSound("item.spyglass.use")
if(multiplayer) send({type:"playSound", data:"item.spyglass.use", x:p.x,y:p.y,z:p.z})
}else if(p.prevUsingSpyglass && !p.usingSpyglass){
p.FOV(settings.fov, 300)
playSound("item.spyglass.stop")
if(multiplayer) send({type:"playSound", data:"item.spyglass.stop", x:p.x,y:p.y,z:p.z})
}
if(p.usingSpyglass || p.prevUsingSpyglass){
updateHUD = true
}
standingOn = world.getBlock(p2.x,p2.y-2,p2.z)
controls()
runGravity()
if(survival){
cracks()
}
if(witherEffect>0){
witherEffect --;
if(survival && now-lastBlockHarm > witherTime){
lastBlockHarm = now
loseHealthEffect = 60
damage(witherDamage, username+" got withered. Ew.")
}
}
if(survival && tick){
if(powder){
freezeEffect ++
if(freezeEffect > 140){
freezeEffect = 140
if(now - lastFreezeHealth > 2000 && survival){
lastFreezeHealth = now
loseHealthEffect = 60
damage(1,username+" froze to death.", false, "freeze")
}
}else{
lastFreezeHealth = now
updateHUD = true
}
}else if(freezeEffect > 0){
freezeEffect --
updateHUD = true
}
}
/*if(now - lastHeal > healTime) {
lastHeal = now
if(p.health < 20){
p.health += 1
healEffect = 40
updateHUD = true
}
}*/
if(survival){
if(p.foodSaturation > p.food) p.foodSaturation = p.food
/*if(p.food > 17 || p.food === 0){
var timer = now - p.foodTimer
if(timer >= 4000){
p.foodTimer = now
if(p.food === 0){
p.health --
harmEffect = 40
hitSound()
updateHUD = true
}else if(p.foodSaturation > 0 && p.health < 20){
p.health ++
healEffect = 40
updateHUD = true
}
}*/
/*if((timer === 500 || timer === 0) && p.food >= 20 && p.health < 20 && p.foodExhaustion > 0){
var heal = min(p.foodSaturation/6, 1)
p.health += heal
if(p.food > 18){
p.foodExhaustion += heal*6
}
healEffect = 40
updateHUD = true
}
}*/
var healTimer = now-lastHeal
if(p.health < 20){
var heal
if(p.foodSaturation > 0 && p.food === 20 && healTimer >= 500){
heal = 1
}else if(p.food >= 18 && healTimer >= 4000){
heal = 1
}
if(heal){
lastHeal = now
p.health += heal
healEffect = 40
updateHUD = true
}
if(p.food < 18 && p.food > 0) lastHeal = now
}
if(p.health > 1 && p.food <= 0 && healTimer >= 4000){
lastHeal = now
damage(1, username+" starved to death.")
}
if(p.foodExhaustion >= 4){
p.foodExhaustion = 0
p.foodSaturation --
if(p.foodSaturation <= 0){
p.food --
}
}
if(p.food > 20) p.food = 20
if(p.food < 0) p.food = 0
if(p.foodSaturation < 0) p.foodSaturation = 0
if(tick){
if(p.foodSaturation <= 0 || p.foodJitter > -1){
p.foodJitter ++
if(p.foodJitter > 10) p.foodJitter = -1
updateHUD = true
}else{
p.foodJitter = -1
}
}
}
if(liquid) p.burnTimer = 0
if(survival && p.burnTimer > 0){
if(now - p.burnStart > 500){
p.burnStart = now
p.burnTimer --
damage(1, username+" burned up.")
}
}
p.burning = p.burnTimer > 0
if(!survival) p.burnTimer = 0
var blockHere = world.getBlock(p2.x, p2.y, p2.z)
inWater = 0
if(blockHere === blockIds.Water) inWater = 1
if(blockHere === blockIds.Lava) inWater = 2
var blockAtFeet = world.getBlock(p2.x, p2.y-1, p2.z)
if(!p.flying && controlMap.jump.pressed && ((blockHere && blockData[blockHere].ladder) || (blockAtFeet && blockData[blockAtFeet].ladder))){
p.velocity.y = 0
p.y += 0.04
}
if(survival){
if(liquid && blockHere === blockIds.Water){
if(p.oxygen > 0){
if(now - lastLoseOxygen > 1000){
p.oxygen --
lastLoseOxygen = now
updateHUD = true
}
}else{
if(now-lastBlockHarm > 500){
lastBlockHarm = now
damage(1, username+" drowned.",false, "drown")
}
}
}else if(p.oxygen < 20 && now - lastGetOxygen > 300){
lastGetOxygen = now
p.oxygen = (Math.floor(p.oxygen/2)*2) + 2
updateHUD = true
}
}
if(p.health > 20) {
p.health = 20;
}
if(p.oxygen > 20) {
p.oxygen = 20;
}
if(harmEffect > 0){
harmEffect --
p.rz = max(harmEffect-20,0) / 200
p.character.harmEffect = harmEffect
updateHUD = true
}
if(healEffect > 0){
healEffect --
updateHUD = true
}
if(loseHealthEffect > 0){
loseHealthEffect --
updateHUD = true
}
resolveContactsAndUpdatePosition(now)
if(p.health < 5 && tick) updateHUD = true //for hearts shaking
if (updateHUD) {
clear()
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
hud()
ctx.drawImage(gl.canvas, 0, 0)
updateHUD = false
freezeFrame = false
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
}
defineWorld()
if(harmEffect > 0){
fill(255,0,0, harmEffect)
ctx.fillRect(0,0,width,height)
}
if(portalEffect > 0){
fill(255,0,255, portalEffect)
ctx.fillRect(0,0,width,height)
updateHUD = true
portalEffect --
}
if(mouseDown && touchScreen){
ctx.beginPath()
fill(255)
strokeWeight(2)
ellipse(pTouch.x, pTouch.y, 70,70)
ctx.stroke()
if(pTouch.digProg > 0){
ctx.beginPath()
let r = pTouch.digProg * 70
ellipse(pTouch.x, pTouch.y, r,r)
ctx.fill()
}
updateHUD=true
}
if(survival)ctx.drawImage(canvas2,0,0)
if(p.health < 1){
die()
drawScreens.dead()
Button.draw()
Slider.draw()
}
if(titleOpacity > 0){
titleOpacity --
let alpha = titleOpacity/100
ctx.font = "80px mojangles"
ctx.textAlign = "center"
ctx.fillStyle = titleColor
ctx.globalAlpha = alpha > 1 ? 1 : alpha
text(title, width/2, height/2, 80)
if(subtitle){
ctx.font = "40px mojangles"
text(subtitle, width/2, height/2+50, 40)
}
ctx.globalAlpha = 1
updateHUD = true
}
if(sideMessageTime > 0){
sideMessageTime --
var x
var w = 200
if(sideMessageTime > 540){
x = 1 - ((sideMessageTime - 540) / 60)
}else if(sideMessageTime > 60){
x = 1
}else{
x = sideMessageTime / 60
}
x = width - (x * w)
ctx.clearRect(width-w,0,w,50)
ctx.fillStyle = "#223"
ctx.fillRect(x, 0,w,50)
ctx.textBaseline = "top"
ctx.fillStyle = "white"
ctx.font = "10px mojangles"
ctx.fillText(sideMessageTitle, x+5, 5, w-10)
ctx.fillStyle = "#aaa"
ctx.fillText(sideMessageContent, x+5, 20, w-10)
ctx.textBaseline = "alphabetic"
}
if(inventory.showName > 0){
inventory.showName -= 0.02
updateHUD = true
}
if((controlMap.forward.pressed || controlMap.backward.pressed || controlMap.left.pressed || controlMap.right.pressed) && p.onGround){
let limit = 500
if(p.sprinting) limit = 250
if(now - lastStepSound > limit){
lastStepSound = now
blockSound(standingOn, "step", p.x,p.y,p.z, 1)
}
}
}
drawScreens.dead = () => {
ctx.drawImage(gl.canvas, 0, 0)
ctx.fillStyle = "rgba(255,0,0,50%)"
ctx.fillRect(0,0,width,height)
fill(0)
ctx.font = "50px Arial"
ctx.textAlign = "center"
ctx.fillText("You died", width/2, 100)
ctx.font = "20px Arial"
ctx.fillText(dieMessage, width/2, 140)
ctx.fillText("Score: "+p.level, width/2, 160)
}
drawScreens.loading = () => {
world = dimensions.overworld
// This is really stupid, but it basically works by teleporting the player around to each chunk I'd like to load.
// If chunks loaded from a save aren't generated, they're deleted from the save, so this loads them all.
let frameStart = win.performance.now()+1
let sub = maxLoad - world.loadFrom.length - 9
if (superflat === "island") {
if (win.islandGenerator.stage < 10) {
if (!win.islandGenerator.seedSet) {
win.islandGenerator.SetSeed(noiseProfile.seed)
}
win.islandGenerator.Generate(frameStart);
}   else {
let standing = true
if (world.loadFrom.length) {
let load = world.loadFrom[0]
p.x = load.x * 16
p.y = load.y * 16
p.z = load.z * 16
standing = false
} else {
p.x = p2.x
p.y = p2.y
p.z = p2.z
let cx = p.x >> 4
let cz = p.z >> 4
for (let x = cx - 1; x <= cx + 1; x++) {
for (let z = cz - 1; z <= cz + 1; z++) {
if (!world.chunks[x] || !world.chunks[x][z] || !world.chunks[x][z].buffer) {
standing = false
} else {
sub++
}
}
}
}
if (standing) {
play()
return
}
world.tick()
}
}   else {
let standing = true
if (world.loadFrom.length) {
let load = world.loadFrom[0]
p.x = load.x * 16
p.y = load.y * 16
p.z = load.z * 16
standing = false
} else {
p.x = p2.x
p.y = p2.y
p.z = p2.z
let cx = p.x >> 4
let cz = p.z >> 4
for (let x = cx - 1; x <= cx + 1; x++) {
for (let z = cz - 1; z <= cz + 1; z++) {
if (!world.chunks[x] || !world.chunks[x][z] || !world.chunks[x][z].buffer) {
standing = false
} else {
sub++
}
}
}
}
if (standing) {
play()
return
}
world.tick()
}
let progress = Math.round( (superflat==="island"?50:100) * sub / maxLoad)
if(superflat === "island")progress += Math.round((win.islandGenerator.stage/9.0+win.islandGenerator.h/win.islandGenerator.size*3/9)*50)
dirt()
fill(255)
textSize(25)
ctx.textAlign = "center"
text(`Loading... ${progress}% complete (${sub} / ${maxLoad})`, width / 2, height / 2)
}
drawScreens.netherLoading = () => {
world = dimensions.nether
let frameStart = win.performance.now()+1
let sub = maxLoad - world.loadFrom.length - 9
let standing = true
if (world.loadFrom.length) {
let load = world.loadFrom[0]
p.x = load.x * 16
p.y = load.y * 16
p.z = load.z * 16
standing = false
} else {
p.x = p2.x
p.y = p2.y
p.z = p2.z
let cx = p.x >> 4
let cz = p.z >> 4
for (let x = cx - 1; x <= cx + 1; x++) {
for (let z = cz - 1; z <= cz + 1; z++) {
if (!world.chunks[x] || !world.chunks[x][z] || !world.chunks[x][z].buffer) {
standing = false
} else {
sub++
}
}
}
}
if (standing) {
play()
return
}
world.tick()
let progress = Math.round(100 * sub / maxLoad)
nether()
fill(255)
textSize(25)
ctx.textAlign = "center"
text(`Loading... ${progress}% complete (${sub} / ${maxLoad})`, width / 2, height / 2)
}
drawScreens.inventory = drawInv
drawScreens.crafting = drawCrafting
drawScreens.furnace = drawFurnace
drawScreens.pause = () => {
strokeWeight(1)
clear()
textSize(50)
fill(0, 0, 0)
ctx.textAlign = 'center'
text("Paused", width / 2, 60)
}
drawScreens.options = () => {
clear()
}
drawScreens.help = () => {
dirt()
ctx.textAlign = 'center'
textSize(25)
fill(255)
text("Help", width / 2, 40)
}
drawScreens["creation menu"] = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Create New World", width / 2, 20)
}
drawScreens["loadsave menu"] = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Select World", width / 2, 20)
}
drawScreens["broken world"] = () => {
dirt()
ctx.textAlign = 'center'
fill(255)
textSize(25)
text("This world is an old world.\nIt might be broken.\nAre you sure you want to load it?", width / 2, height / 2 - 50, 25)
}
drawScreens["multiplayer menu"] = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Select server", width / 2, 20)
}
drawScreens["multiplayer connecting"] = () => {
dirt()
ctx.textAlign = 'center'
fill(255)
textSize(25)
text("Connecting...", width / 2, height / 2)
}
drawScreens.editworld = dirt
drawScreens.marketplace = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Marketplace", width / 2, 20)
}
})()
// Give the font time to load and redraw the homescreen
setTimeout(e => {
drawScreens[screen]()
Button.draw()
Slider.draw()
}, 100)
let debugMenu = false
function gameLoop() {
let frameStart = performance.now()
if (!gl) {
initEverything()
releasePointer()
}
if(allLoaded){
if(screen === "options"){
if(previousScreen === "main menu"){
if(analytics.frames % 2 === 0)renderMainBG()
}
}
if(screen === "main menu"){
if(analytics.frames % 2 === 0)renderMainBG()
drawScreens[screen]()
Button.draw()
Slider.draw()
}
if (screen === "play" || screen === "loading" || screen === "netherLoading") {
drawScreens[screen]()
if(touchScreen && screen === "play") Button.draw()
}
if(screen === "furnace" && furnaceData.data.smelting){
drawScreens[screen]()
}
}
if (Date.now() - analytics.lastUpdate > 500 && analytics.frames) {
analytics.displayedTickTime = (analytics.totalTickTime / analytics.frames).toFixed(1)
analytics.displayedRenderTime = (analytics.totalRenderTime / analytics.frames).toFixed(1)
analytics.displayedFrameTime = (analytics.totalFrameTime / analytics.frames).toFixed(1)
analytics.fps = round(analytics.frames * 1000 / (Date.now() - analytics.lastUpdate))
analytics.displayedwFrameTime = analytics.worstFrameTime.toFixed(1)
analytics.frames = 0
analytics.totalRenderTime = 0
analytics.totalTickTime = 0
analytics.totalFrameTime = 0
analytics.worstFrameTime = 0
analytics.lastUpdate = Date.now()
updateHUD = true
}
analytics.frames++
analytics.totalFrameTime += performance.now() - frameStart
analytics.worstFrameTime = max(performance.now() - frameStart, analytics.worstFrameTime)
win.raf = requestAnimationFrame(gameLoop)
}
return gameLoop
}
var init = MineCraft()
if (window.parent.raf) {
window.cancelAnimationFrame(window.parent.raf)
console.log("Canceled", window.parent.raf)
}
init()
function hcyl(bottom, height, radius, id) {
let radsq = radius * radius
let innerRadsq = (radius - 1.2) * (radius - 1.2)
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq && d >= innerRadsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function cyl(bottom, height, radius, id) {
let radsq = radius * radius
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function sphereoid(w, h, d, id) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
let w3 = (w - 1.5) * (w - 1.5)
let h3 = (h - 1.5) * (h - 1.5)
let d3 = (d - 1.5) * (d - 1.5)
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
let n2 = x * x / w3 + y * y / h3 + z * z / d3
if (n < 1 && n2 >= 1) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function sphereoidAt(X,Y,Z,w, h, d, id) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
let w3 = (w - 1.5) * (w - 1.5)
let h3 = (h - 1.5) * (h - 1.5)
let d3 = (d - 1.5) * (d - 1.5)
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
let n2 = x * x / w3 + y * y / h3 + z * z / d3
if (n < 1 && n2 >= 1) {
world.setBlock(X + x, Y + y, Z + z, id)
}
}
}
}
}
function ball(X,Y,Z,w, h, d, id) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
if (n < 1) {
world.setBlock(X + x, Y + y, Z + z, id)
}
}
}
}
}
function explode(x,y,z, r, liquid){
/*world.setBlock(x,y,z,blockIds.air);
for(var i=radius; i>0; i--){
sphereoidAt(x,y,z,i,i,i, blockIds.air)
}*/
//ball(x,y,z,r,r,r,0)
if(!liquid)world.setBlock(x,y,z, 0)
let w2 = r * r
let h2 = w2
let d2 = w2
for (let Y = -r; Y < r; Y++) {
for (let X = -r; X <= r; X++) {
for (let Z = -r; Z <= r; Z++) {
let n = X * X / w2 + Y * Y / h2 + Z * Z / d2
if (n < 1) {
if(world.getBlock(X + x, Y + y, Z + z) === blockIds.tnt){
blockData[blockIds.tnt].explode(X+x,Y+y,Z+z)
}
if(Math.random() > 0.5){
var time = Math.random()*1000
if(time < 10){
world.particles.push(new ExplodeParticle(X + x, Y + y, Z + z))
}else{
setTimeout(() => world.particles.push(new ExplodeParticle(X + x, Y + y, Z + z)), time)
}
}
if(!liquid)world.setBlock(X + x, Y + y, Z + z, 0)
}
}
}
}
for(var i=0; i<world.entities.length; i++){
var ent = world.entities[i]
var dist = dist3(x,y,z, ent.x, ent.y, ent.z)
if(dist <= r){
var X = ent.x - x; ent.velx += ((Math.sign(X)*r)-X)/5
var Y = ent.y - y; ent.vely += ((Math.sign(Y)*r)-Y)/5
var Z = ent.z - z; ent.velz += ((Math.sign(Z)*r)-Z)/5
}
}
var p = player
var dist = dist3(x,y,z, p.x, p.y, p.z)
if(dist <= r){
var X = p.x - x; p.velocity.x += ((Math.sign(X)*r)-X)/5
var Y = p.y - y; p.velocity.y += ((Math.sign(Y)*r)-Y)/5
var Z = p.z - z; p.velocity.z += ((Math.sign(Z)*r)-Z)/5
}
explodeSound(x,y,z)
}
function fall(x,y,z,b){
if(world.getBlock(x,y-1,z)) return
setTimeout(() => {
world.setBlock(x,y,z, 0)
world.addEntity(new BlockEntity(b, x,y,z, true))
}, 100)
}
function blockParticles(block,x,y,z,amount){
for(var i=0; i<amount; i++) world.particles.push(new BlockParticle(blockData[block].textures[2], x,y,z))
}
if (("serviceWorker" in navigator) && location.origin === "https://16f81.codesandbox.io.repl.co") {
window.addEventListener("load", function() {
navigator.serviceWorker
.register("/sw.js")
.then(res => console.log("service worker registered"))
.catch(err => console.log("service worker not registered", err))
})
}
function scrollToEl(id){
var el = document.getElementById(id)
if(el) el.scrollIntoView()
}
