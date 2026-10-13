(function(){
  'use strict';
  var project=document.body.getAttribute('data-project')||'bakery';
  var translations=window.I18N_TRANSLATIONS||{};
  var english={
    'হোম':'Home','কেক':'Cakes','ডেজার্ট':'Desserts','মিষ্টি':'Sweets','পেস্ট্রি':'Pastries','বেকারি':'Bakery','স্ন্যাকস':'Snacks',
    'ফ্রেম':'Frames','সানগ্লাস':'Sunglasses','লেন্স':'Lenses','কন্টাক্ট লেন্স':'Contact lenses','চোখ পরীক্ষা':'Eye exam',
    'আমার সাজেশন':'My recommendations','কাস্টম অর্ডার':'Custom order','ক্যাটেগরি':'Category','দাম':'Price','সাজান':'Sort by',
    'সব':'All','সব দাম':'All prices','সব পণ্য':'All products','সব ক্যাটেগরি':'All categories','পণ্য ফিল্টার':'Filter products',
    'ফিল্টার রিসেট':'Reset filters','ফিল্টার রিসেট করুন':'Reset filters','দাম রেঞ্জ':'Price range','কার্ট':'Cart',
    'আমার অর্ডার':'My orders','আমার সাজেশন':'My recommendations','যোগাযোগ':'Contact','গ্রাহকসেবা':'Customer service',
    'ওভারভিউ':'Overview','অর্ডার':'Orders','পণ্য':'Products','ইনভেন্টরি':'Inventory','রিপোর্ট':'Reports',
    'চোখ পরীক্ষার সময় নিন':'Book an eye exam','শোরুমে ফিটিং':'In-store fitting','অপ্টোমেট্রিস্ট যাচাই':'Optometrist verified',
    'বিকাশ / নগদ':'bKash / Nagad','বিকাশ':'bKash','নগদ':'Nagad','আমাদের ডেজার্ট সম্ভার':'Our dessert collection',
    'মিষ্টি এক ছোঁয়া':'A sweet touch','আপনার জন্য সাজেশন':'Recommendations for you',
    'ডেলিভারির তারিখ বেছে নিন':'Choose a delivery date','ডেলিভারির সময় বেছে নিন':'Choose a delivery time',
    'প্রেসক্রিপশন আপলোড করুন':'Upload a prescription','ডান ও বাম চোখের পাওয়ার বেছে নিন':'Choose power for both eyes',
    'স্টকে আছে':'In stock','← হোমে ফিরুন':'← Back to home','← ফিরে যান':'← Back',
    'প্রধান মেনু':'Main menu','অ্যাকাউন্ট মেনু':'Account menu','অ্যাডমিন মেনু':'Admin menu',
    'সার্চ মুছুন':'Clear search','পণ্য খুঁজুন':'Search products','গাইডের অগ্রগতি':'Guide progress',
    'গোল':'Round','ডিম্বাকৃতি':'Oval','চৌকো':'Square','আয়তাকার':'Rectangular','হৃদয়াকৃতি':'Heart-shaped',
    'চশমার অফার ও সংগ্রহ':'Eyewear offers and collection','পরিবারের জন্য':'For the family','নতুন লুক':'A fresh look','প্রতিদিনের স্বস্তি':'Everyday comfort',
    'সব বয়সে মানানসই চশমা':'Eyewear for every age','কাজে ও স্টাইলে নতুন ফ্রেম':'New frames for work and style','পড়া ও চলাফেরায় পরিষ্কার দৃষ্টি':'Clear vision for reading and daily life',
    'স্কুল থেকে দৈনন্দিন জীবন—পছন্দের ফ্রেম খুঁজুন, শোরুমে ফিটিং যাচাই করুন।':'From school to daily life, find a frame you love and check the fit in store.',
    'আপনার মুখের আকৃতি ও ব্যবহার অনুযায়ী ফ্রেম বেছে নিন।':'Choose frames for your face shape and daily use.',
    'চোখ পরীক্ষার সময় নিন; পাওয়ার ও লেন্স অপ্টোমেট্রিস্ট যাচাই করবেন।':'Book an eye exam; an optometrist will check your prescription and lenses.',
    'চশমা পরা শিশু ও তার মা':'A child wearing glasses with his mother','চশমা পরা তরুণ পেশাজীবী নারী':'A young professional woman wearing glasses',
    'চশমা পরে বই পড়ছেন প্রবীণ ব্যক্তি':'An older man reading a book while wearing glasses','আগের স্লাইড':'Previous slide','পরের স্লাইড':'Next slide',
    'স্লাইড 1 দেখুন':'Show slide 1','স্লাইড 2 দেখুন':'Show slide 2','স্লাইড 3 দেখুন':'Show slide 3'
  };
  var bangla={
    'Home':'হোম','Cakes':'কেক','Dessert':'ডেজার্ট','Desserts':'ডেজার্ট','Sweets':'মিষ্টি','Pastry':'পেস্ট্রি','Pastries':'পেস্ট্রি',
    'Bakery':'বেকারি','Snacks':'স্ন্যাকস','Eyeglass Frames':'চশমার ফ্রেম','Sunglasses':'সানগ্লাস','Lenses':'লেন্স',
    'Contact Lenses':'কন্টাক্ট লেন্স','Accessories':'এক্সেসরিজ','OUR COLLECTION':'আমাদের সংগ্রহ',
    'Add to Cart':'কার্টে যোগ করুন','Order Now':'এখনই অর্ডার করুন','Order on WhatsApp':'হোয়াটসঅ্যাপে অর্ডার',
    'Description':'বিবরণ','Related Products':'সম্পর্কিত পণ্য','View All Dessert →':'সব ডেজার্ট দেখুন →',
    'View All Frames →':'সব ফ্রেম দেখুন →','Dashboard':'ড্যাশবোর্ড','User Dashboard':'ব্যবহারকারী ড্যাশবোর্ড',
    'Admin Dashboard':'অ্যাডমিন ড্যাশবোর্ড','Category:':'ক্যাটেগরি:','Total':'মোট','Frame':'ফ্রেম','Lens':'লেন্স',
    'Upload prescription':'প্রেসক্রিপশন আপলোড','Select lens':'লেন্স বাছুন','Lens package':'লেন্স প্যাকেজ',
    'Lens type':'লেন্সের ধরন','Lens details':'লেন্সের বিস্তারিত','← Back to types':'← ধরনে ফিরুন',
    'Pending':'অপেক্ষমাণ','Confirmed':'নিশ্চিত','Preparing':'প্রস্তুত হচ্ছে','Delivered':'পৌঁছেছে','Cancelled':'বাতিল',
    'Paid':'পরিশোধিত','Home Page':'হোমপেজ','Homepage':'হোমপেজ','Profile':'প্রোফাইল','Settings':'সেটিংস',
    'All':'সব','All prices':'সব দাম','Sort by':'সাজান'
  };
  var textState=new WeakMap(),attrState=new WeakMap();
  var lang='bn';
  try{lang=localStorage.getItem('idcal-language-'+project)==='en'?'en':'bn'}catch(e){}
  function latinDigits(s){return s.replace(/[০-৯]/g,function(c){return String(c.charCodeAt(0)-0x09e6)})}
  function translate(s){
    var match=String(s).match(/^(\s*)([\s\S]*?)(\s*)$/),core=match[2],out=core;
    if(!core)return s;
    if(lang==='en'){
      out=english[core]||translations[core]||core;
      if(out===core){
        var count=core.match(/^([০-৯0-9]+)টি পণ্য$/);
        var result=core.match(/^ফলাফল: “(.+)”$/);
        if(count)out=latinDigits(count[1])+' products';
        else if(result)out='Results: “'+result[1]+'”';
        else if(core.indexOf(' কার্টে যোগ হয়েছে')>-1)out=core.replace(' কার্টে যোগ হয়েছে',' added to cart');
      }
    }else out=bangla[core]||core;
    return match[1]+(lang==='en'?latinDigits(out):out)+match[3];
  }
  function skip(element){return !element||/^(SCRIPT|STYLE|NOSCRIPT)$/.test(element.tagName)||!!element.closest('.langbar')}
  function translateNode(node){
    if(skip(node.parentElement))return;
    var rec=textState.get(node),actual=node.nodeValue;
    if(!rec){rec={source:actual,rendered:actual};textState.set(node,rec)}
    else if(actual!==rec.rendered)rec.source=actual;
    var next=translate(rec.source);rec.rendered=next;
    if(actual!==next)node.nodeValue=next;
  }
  function translateAttributes(el){
    if(skip(el))return;
    var state=attrState.get(el)||{};
    ['placeholder','aria-label','title','alt'].forEach(function(name){
      if(!el.hasAttribute(name))return;
      var actual=el.getAttribute(name),rec=state[name];
      if(!rec)rec=state[name]={source:actual,rendered:actual};
      else if(actual!==rec.rendered)rec.source=actual;
      var next=translate(rec.source);rec.rendered=next;
      if(actual!==next)el.setAttribute(name,next);
    });
    attrState.set(el,state);
  }
  function scan(root){
    if(root.nodeType===Node.TEXT_NODE){translateNode(root);return}
    if(root.nodeType!==Node.ELEMENT_NODE)return;
    translateAttributes(root);
    var walk=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);
    while(walk.nextNode()){
      var n=walk.currentNode;
      if(n.nodeType===Node.TEXT_NODE)translateNode(n);
      else translateAttributes(n);
    }
  }
  function setLanguage(next){
    lang=next==='en'?'en':'bn';
    window.AppI18n.language=lang;
    document.documentElement.lang=lang;
    document.title=lang==='en'?(project==='optical'?'IDCAL Optical — Homepage and dashboards':'IDCAL Cake & Pastery — Homepage and dashboards'):
      (project==='optical'?'IDCAL Optical: Optical Recommendation সহ হোমপেজ, Dashboard ও Roadmap':'IDCAL Cake & Pastery: হোমপেজ, ফিচার, Dashboard ও Roadmap');
    try{localStorage.setItem('idcal-language-'+project,lang)}catch(e){}
    document.querySelectorAll('.langbar [data-lang]').forEach(function(button){var active=button.getAttribute('data-lang')===lang;button.classList.toggle('on',active);button.setAttribute('aria-pressed',String(active))});
    scan(document.body);
  }
  window.AppI18n={language:lang,setLanguage:setLanguage,translate:translate};
  document.addEventListener('click',function(e){var button=e.target.closest('.langbar [data-lang]');if(button)setLanguage(button.getAttribute('data-lang'))});
  var observer=new MutationObserver(function(changes){changes.forEach(function(change){
    if(change.type==='characterData')translateNode(change.target);
    else if(change.type==='attributes')translateAttributes(change.target);
    else change.addedNodes.forEach(scan);
  })});
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title','alt']});
  setLanguage(lang);
})();
