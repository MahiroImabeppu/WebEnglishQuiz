//英単語リストから問題のパターンを絞る用
function Q_selecter(pattern,NUM_OF_QUESTION){
    let qRange;
    switch(pattern){
        case "A":
            qRange = 0*NUM_OF_QUESTION;
            break;
        
        case "B":
            qRange = 1*NUM_OF_QUESTION;
            break;

        case "C":
            qRange = 2*NUM_OF_QUESTION;
            break;
        
        case "D":
            qRange = 3*NUM_OF_QUESTION;
            break;
        case "E":
            qRange = 4*NUM_OF_QUESTION;
            break;
        default:
            qRange = words.length;
            break;
    }

    return qRange;
}



//全英単語からパターンごとに問題数分を返す
function Q_ListGen(pattern, wordList){
    var qList = []
    var tmp= Q_selecter(pattern, NUM_OF_QUESTION);
    for(var i = tmp; i < tmp + NUM_OF_QUESTION;i++){
        qList.push(wordList[i]);
    }
    return qList;
}

//array shuffle https://www.nxworld.net/tips/js-array-shuffle.html より
function shuffle(array){
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//https://qiita.com/ekzemplaro/items/f62d9c9fe61e7eeb3b8f 参考
//urlから値を受け取る用
function getParam(){
    let url   = location.href;
    parameters    = url.split("?");
    parameters.shift();
    let paramArray = [];
    parameters.forEach(element => {
        paramArray.push(element.split("="));
    });
    return paramArray;
}

function getEnglishWordList(){
    const WORD = [
        ["1","stupendous","膨大な","adj","0"],
        ["2","load","荷物","n","0"],
        ["3","vital","必要な","adj","0"],
        ["4","prohibit","禁じる","v","0"],
        ["5","predisposition","体質","n","0"],
        ["6","wound","傷","n","0"],
        ["7","deliberately","わざと","adv","0"],
        ["8","assessor","査定","n","0"],
        ["9","kingdom","王国","n","0"],
        ["10","angler","鮟鱇","n","0"],
        ["11","consult","相談する","v","0"],
        ["12","voluble","口八丁","n","0"],
        ["13","inspire","奮起させる","v","0"],
        ["14","aggregation","集合","n","0"],
        ["15","rural","田舎の","adv","0"],
        ["16","wicker","小枝細工","n","0"],
        ["17","divorce","離婚","n","0"],
        ["18","supersede","取り替える","v","0"],
        ["19","amuse","楽しませる","v","0"],
        ["20","corollary","当然の結果","n","0"],
        ["21","ethnic","民族的な","adj","0"],
        ["22","dismiss","無視する","v","0"],
        ["23","judicious","賢明","adj","0"],
        ["24","confront","立ち向かう","v","0"],
        ["25","barely","かろうじて","adv","0"],
        ["26","intimate","親密な","adj","0"],
        ["27","facetious","ふざけた","adj","0"],
        ["28","smolder","くすぶり","v","0"],
        ["29","burst","破裂する","v","0"],
        ["30","accuse","非難する","v","0"],
        ["31","forgery","偽造","n","0"],
        ["32","prime","主要な","adj","0"],
        ["33","lately","最近","adv","0"],
        ["34","vector","ベクター","n","0"],
        ["35","dissect","解剖します","v","0"],
        ["36","enterprise","企業","n","0"],
        ["37","facility","設備","n","0"],
        ["38","preponderance","優勢","n","0"],
        ["39","strain","負担","n","0"],
        ["40","cataclysm","破局","n","0"],
        ["41","welfare","福祉","n","0"],
        ["42","casual","気楽な","adj","0"],
        ["43","pounce","急襲","v","0"],
        ["44","impersonate","偽装","v","0"],
        ["45","alderman","市会議員","n","0"],
        ["46","scum","あきます","v","0"],
        ["47","tropical","熱帯","adv","0"],
        ["48","oblige","強いる","v","0"],
        ["49","esoteric","難解な","adj","0"],
        ["50","solvent","溶媒","n","0"],
        ["51","reverse","反対にする","v","0"],
        ["52","specialize","専攻する","v","0"],
        ["53","transmit","伝える","v","0"],
        ["54","depress","憂鬱にさせる","v","0"],
        ["55","zest","熱意","n","0"],
        ["56","assure","保証する","v","0"],
        ["57","arrest","逮捕する","v","0"],
        ["58","insulation","絶縁","n","0"],
        ["59","track","小道","n","0"],
        ["60","scacely","ほとんど～ない","adv","0"],
        ["61","susceptibility","敏感","n","0"],
        ["62","opinionated","独善的な","adj","0"],
        ["63","interlock","インターロック","v","0"],
        ["64","onus","責任","n","0"],
        ["65","perspective","見方","n","0"],
        ["66","recuperate","回復します","v","0"],
        ["67","restrict","制限する","v","0"],
        ["68","latter","後者の","adj","0"],
        ["69","faculty","学部","n","0"],
        ["70","stock","株","n","0"],
        ["71","repudiate","否認します","v","0"],
        ["72","dissertation","論説","n","0"],
        ["73","abdicate","放棄します","v","0"],
        ["74","indolent","無痛","adj","0"],
        ["75","accordingly","それ相応に","adv","0"],
        ["76","bow","お辞儀する","v","0"],
        ["77","crochet","かぎ針編み","n","0"],
        ["78","rebuttal","反論","n","0"],
        ["79","balm","香油","n","0"],
        ["80","ellipse","楕円","n","0"],
        ["81","thesaurus","シソーラス","n","0"],
        ["82","impertinent","生意気","adj","0"],
        ["83","attach","くっつける","v","0"],
        ["84","grain","穀物","n","0"],
        ["85","embroidery","刺繍","n","0"],
        ["86","vehicle","車","n","0"],
        ["87","sophisticated","高度な","adj","0"],
        ["88","forage","飼料","n","0"],
        ["89","fluctuate","変動する","v","0"],
        ["90","appointment","予約","n","0"],
        ["91","airtight","気密","n","0"],
        ["92","capture","捕らえる","v","0"],
        ["93","peal","とどろきます","v","0"],
        ["94","peevish","努りっぽいです","adj","0"],
        ["95","honor","名誉","n","0"],
        ["96","precisely","正確に","adv","0"],
        ["97","untenable","理不尽","adj","0"],
        ["98","consignment","託送","n","0"],
        ["99","contravene","違反","v","0"],
        ["100","interpret","解釈する","v","0"],
        ["101","upholstery","内装","n","0"],
        ["102","affront","侮辱","v","0"],
        ["103","synopsis","シノプシス","n","0"],
        ["104","precious","貴重な","adv","0"],
        ["105","compose","組み立てる","v","0"],
        ["106","reimburse","返済します","v","0"],
        ["107","minor","小さい","adv","0"],
        ["108","primordial","原始の","adj","0"],
        ["109","loiter","ぶらつきます","v","0"],
        ["110","cavalry","騎兵","n","0"],
        ["111","beneath","～の下で","adv","0"],
        ["112","meanwhile","その間に","adv","0"],
        ["113","overlook","見落とす","v","0"],
        ["114","accustomed","慣れた","adj","0"],
        ["115","scruffy","みすぼらしい","adj","0"],
        ["116","modest","控えめな","adj","0"],
        ["117","territory","領土","n","0"],
        ["118","genus","類","n","0"],
        ["119","fabrication","製作","n","0"],
        ["120","treasure","財宝","n","0"],
        ["121","outlay","経費","n","0"],
        ["122","waft","漂わせる","v","0"],
        ["123","ineligible","不適格","adj","0"],
        ["124","emergency","緊急事態","n","0"],
        ["125","altogether","完全に","adv","0"],
        ["126","transitory","一時","adj","0"],
        ["127","eliminate","除去する","v","0"],
        ["128","cheer","励ます","v","0"],
        ["129","stallion","種馬","n","0"],
        ["130","contemporary","現代の","adj","0"],
        ["131","redress","救済","v","0"],
        ["132","peculiar","独特の","adj","0"],
        ["133","fee","謝礼","n","0"],
        ["134","resist","抵抗する","v","0"],
        ["135","substitute","代わりに用いる","v","0"],
        ["136","armistice","休戦","n","0"],
        ["137","accompany","同伴する","v","0"],
        ["138","wheel","車輪","n","0"],
        ["139","span","期間","n","0"],
        ["140","contract","契約","n","0"],
        ["141","lisp","舌足らずの発音","v","0"],
        ["142","occupation","職業","n","0"],
        ["143","acreage","作付面積","n","0"],
        ["144","condescend","わざわざしてください","v","0"],
        ["145","trap","わな","n","0"],
        ["146","objective","目的","n","0"],
        ["147","trace","跡をたどる","v","0"],
        ["148","scrabble","ひっかきます","v","0"],
        ["149","pile","積み重ね","n","0"],
        ["150","ovary","卵巣","n","0"],
        ["151","salient","顕著","adj","0"],
        ["152","inscrutable","解せません","adj","0"],
        ["153","trial","試み","n","0"],
        ["154","sundry","諸","n","0"],
        ["155","tight","きつい","adj","0"],
        ["156","hedgehog","ヘッジホッグ","n","0"],
        ["157","puberty","思春期","n","0"],
        ["158","lonely","孤独だ","adv","0"],
        ["159","steady","しっかりした","adj","0"],
        ["160","jovial","嬉々たる","adj","0"],
        ["161","genuine","本物の","adj","0"],
        ["162","ancillary","付属的","adj","0"],
        ["163","frame","わく","n","0"],
        ["164","allay","和らげる","v","0"],
        ["165","mature","成熟した","adj","0"],
        ["166","pike","パイク","n","0"],
        ["167","vague","漠然とした","adv","0"],
        ["168","fluffy","ふわっとしました","adj","0"],
        ["169","delicate","繊細な","adj","0"],
        ["170","virile","剛健な","adj","0"],
        ["171","ruin","台無しにする","v","0"],
        ["172","abhorrent","大嫌いな","adj","0"],
        ["173","galley","厨房","n","0"],
        ["174","visible","目に見える","adv","0"],
        ["175","grasp","理解する","v","0"],
        ["176","fulfill","果たす","v","0"],
        ["177","hedonism","快楽主義","n","0"],
        ["178","haphazard","行き当たりばったり","n","0"],
        ["179","equivalent","同等のもの","n","0"],
        ["180","internal","内部の","adj","0"],
        ["181","dawn","夜明け","n","0"],
        ["182","embryonic","胚","n","0"],
        ["183","passive","受動的な","adj","0"],
        ["184","senior","先輩の","adj","0"],
        ["185","weigh","重さがある","v","0"],
        ["186","leaden","鉛色の","adj","0"],
        ["187","spoil","甘やかす","v","0"],
        ["188","shoal","浅瀬","n","0"],
        ["189","dally","ぐずぐずします","v","0"],
        ["190","principal","主要な","adv","0"],
        ["191","crash","激突する","v","0"],
        ["192","insecticide","殺虫剤","n","0"],
        ["193","proportion","比率","n","0"],
        ["194","stuff","物","n","0"],
        ["195","pique","立腹","n","0"],
        ["196","detrimental","有害","adj","0"],
        ["197","daft","狂おしいです","adj","0"],
        ["198","glucose","グルコース","n","0"],
        ["199","row","列","n","0"],
        ["200","tenancy","テナント","n","0"],
        ["201","minimum","最小限の","adj","0"],
        ["202","capricious","気まぐれ","adj","0"],
        ["203","enthusiasm","熱意","n","0"],
        ["204","detract","そらします","v","0"],
        ["205","found","設立する","v","0"],
        ["206","ruminate","反芻","v","0"],
        ["207","slacken","緩みます","v","0"],
        ["208","tempestuous","激しいです","adj","0"],
        ["209","numerous","たくさんの","adv","0"],
        ["210","rank","地位","n","0"],
        ["211","dribble","ドリブルする","v","0"],
        ["212","diction","語法","n","0"],
        ["213","prejudice","偏見","n","0"],
        ["214","temporary","一時的な","adv","0"],
        ["215","recrimination","逆襲","n","0"],
        ["216","collapse","崩壊する","v","0"],
        ["217","democracy","民主主義","n","0"],
        ["218","rough","荒い","adj","0"],
        ["219","brevity","簡潔","n","0"],
        ["220","agrarian","農地の","adj","0"],
        ["221","border","国境地帯","n","0"],
        ["222","protest","抗議","n","0"],
        ["223","garish","けばけば","adj","0"],
        ["224","induction","誘導","n","0"],
        ["225","oxide","酸化物","n","0"],
        ["226","regret","後悔する","v","0"],
        ["227","cultivate","育む","v","0"],
        ["228","cease","を止める","v","0"],
        ["229","rapt","うっとりとしました","adj","0"],
        ["230","keen","鋭い","adj","0"],
        ["231","breed","繁殖する","v","0"],
        ["232","statistics","統計","n","0"],
        ["233","illustrate","示す","v","0"],
        ["234","wand","杖","n","0"],
        ["235","detest","忌み嫌う","v","0"],
        ["236","overall","全体的な","adj","0"],
        ["237","gratuitous","無料の","adj","0"],
        ["238","propagate","伝播","v","0"],
        ["239","plumb","おもり","n","0"],
        ["240","nettle","いらくさ","n","0"],
        ["241","ensure","確実にする","v","0"],
        ["242","postulate","公準","v","0"],
        ["243","subsistence","生存","n","0"],
        ["244","onlooker","傍観者","n","0"],
        ["245","stead","代わり","n","0"],
        ["246","decentralize","分散させます","v","0"],
        ["247","annual","年に一度の","adj","0"],
        ["248","stimulate","刺激する","v","0"],
        ["249","extrovert","外向性の人","n","0"],
        ["250","cryptic","秘密の","adj","0"],
        ["251","temper","気性","n","0"],
        ["252","nitrate","硝酸塩","n","0"],
        ["253","muck","泥","n","0"],
        ["254","dull","退屈させる","adj","0"],
        ["255","kindred","同系","n","0"],
        ["256","faith","信頼","n","0"],
        ["257","solstice","夏至","n","0"],
        ["258","matron","寡婦","n","0"],
        ["259","hoist","ホイスト","v","0"],
        ["260","mite","だに","n","0"],
        ["261","proceed","進む","v","0"],
        ["262","topography","地勢","n","0"],
        ["263","antagonize","拮抗","v","0"],
        ["264","guilty","有罪の","adj","0"],
        ["265","bitter","つらい","adj","0"],
        ["266","incredulous","疑い深いです","adj","0"],
        ["267","generous","気前の良い","adv","0"],
        ["268","sum","金額","n","0"],
        ["269","height","高さ","n","0"],
        ["270","hermit","隠者","n","0"],
        ["271","whitewash","うわべのごまかし","n","0"],
        ["272","zenith","天頂","n","0"],
        ["273","dingy","薄汚いです","adj","0"],
        ["274","review","再検討","n","0"],
        ["275","concrete","具体的な","adj","0"],
        ["276","accession","即位","n","0"],
        ["277","bequeath","遺します","v","0"],
        ["278","vulture","禿鷹","n","0"],
        ["279","gentile","異教徒","n","0"],
        ["280","pursue","追及する","v","0"],
        ["281","profusion","豊富","n","0"],
        ["282","demoralize","士気をくじきます","v","0"],
        ["283","demonstrate","明らかに示す","v","0"],
        ["284","shelter","避難","n","0"],
        ["285","flail","からざお","n","0"],
        ["286","douse","濡らします","v","0"],
        ["287","awful","ひどい","adj","0"],
        ["288","obey","従う","v","0"],
        ["289","witness","証人","n","0"],
        ["290","ostentatious","派手な","adj","0"],
        ["291","homogeneous","同種の","adj","0"],
        ["292","artificial","人工","adv","0"],
        ["293","interrupt","妨げる","v","0"],
        ["294","forfeit","没収","n","0"],
        ["295","loose","ゆるい","adj","0"],
        ["296","slave","奴隷","n","0"],
        ["297","javelin","やり","n","0"],
        ["298","valor","勇気","n","0"],
        ["299","tune","曲","n","0"],
        ["300","invest","投資する","v","0"],
        ["301","qualify","適任である","v","0"],
    ];

    return WORD;
}