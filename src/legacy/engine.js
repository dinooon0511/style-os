
  const KEY='styleos_premium_beta10';
  const COLORS={burgundy:['Бордовый','#743744'],red:['Красный','#b53f3e'],white:['Белый','#f6f4ef'],cream:['Молочный','#eee5d8'],beige:['Бежевый','#d4c1a3'],olive:['Оливковый','#72775c'],black:['Чёрный','#2e302c'],gray:['Серый','#979894'],charcoal:['Графит','#565854'],navy:['Тёмно-синий','#394659'],blue:['Синий','#738eb2'],brown:['Коричневый','#8a6a4e'],khaki:['Хаки','#8a8773']};
  const TYPES={tee:'Футболка',polo:'Поло',shirt:'Рубашка',knit:'Трикотаж',hoodie:'Худи',jeans:'Джинсы',trousers:'Брюки',chinos:'Чиносы',shorts:'Шорты',sneakers:'Кеды',loafers:'Лоферы',derby:'Дерби',boots:'Ботинки',jacket:'Куртка',blazer:'Пиджак',overshirt:'Овершот',coat:'Пальто'};
  const GROUP={tee:'top',polo:'top',shirt:'top',knit:'top',hoodie:'top',overshirt:'layer',jacket:'layer',blazer:'layer',coat:'layer',jeans:'bottom',trousers:'bottom',chinos:'bottom',shorts:'bottom',sneakers:'shoes',loafers:'shoes',derby:'shoes',boots:'shoes'};
  // Editorial imagery supplied by the project owner; product/catalog item photos are unchanged.
  const editorialPhotos={
    img8928:'https://drive.google.com/thumbnail?id=15NsMrVR-en4h63J9EnFW3lnnsbh0f_8F&sz=w1600',
    img8929:'https://drive.google.com/thumbnail?id=1boUUHAylDzVGYqTFfOxQeuczriPhMRkK&sz=w1600',
    img8930:'https://drive.google.com/thumbnail?id=1sldZFBHdZn93arV_SYiNLaFHHCUF6Gid&sz=w1600',
    img8931:'https://drive.google.com/thumbnail?id=1CqlxQ2N6YB_oiAkQGcBP8WN1LhvhM_TP&sz=w1600',
    img8932:'https://drive.google.com/thumbnail?id=1fUmZKozn4HVMqI8n0IJA3HMmomQkoMpO&sz=w1600',
    img8933:'https://drive.google.com/thumbnail?id=1LK7FCVPIg2lIo0oRaHNtT4vx_nbPZsZv&sz=w1600',
    img8934:'https://drive.google.com/thumbnail?id=1VDs-UDGqarWq-22XJpXXRjyVIMUMPdzO&sz=w1600',
    img8935:'https://drive.google.com/thumbnail?id=1e1xmpe0n2qtk4w8gkBXHZnXSGvBQkfQX&sz=w1600',
    img8936:'https://drive.google.com/thumbnail?id=1lxCbE4Wvb8ndo4iON3ByL8f1iWKj1xDi&sz=w1600',
    img8937:'https://drive.google.com/thumbnail?id=1RUhyGQNLUREGTKm52QzbG1W1sWL39kPJ&sz=w1600',
    img8938:'https://drive.google.com/thumbnail?id=1Q6GQlQZOZBOJqWFq8C2Zr38gj_v9wBjP&sz=w1600',
    img8939:'https://drive.google.com/thumbnail?id=1_THcYl0w1AEiO3Xl7V0pP-YVGI2H9ZgZ&sz=w1600',
    img8940:'https://drive.google.com/thumbnail?id=1l-U1WEAJYR6O71Ln4gLUXlEwIJyykL5B&sz=w1600',
    img8941:'https://drive.google.com/thumbnail?id=1X7I4ziALfQ2-XtSkG2b2ttl8mKfJcql2&sz=w1600',
    img8942:'https://drive.google.com/thumbnail?id=1KCZe9mW0Kyzt-7OGQXsGte_YCtP3mmQ6&sz=w1600',
    img8943:'https://drive.google.com/thumbnail?id=10q7hi9VZI8961I13IvSoS_BeKqQ0XmPt&sz=w1600',
    img8944:'https://drive.google.com/thumbnail?id=1YBjEhD5N82QsQ_j0kYC2UnbIz0Uv1sxJ&sz=w1600'
  };
  const stylePhotos={
    minimal:editorialPhotos.img8942,
    classic:editorialPhotos.img8935,
    smart:editorialPhotos.img8934,
    oldmoney:editorialPhotos.img8931,
    casual:editorialPhotos.img8929
  };
  const catalogHero=editorialPhotos.img8939;
  const lookPhotos={
    everyday:[editorialPhotos.img8928,editorialPhotos.img8941,editorialPhotos.img8942],
    office:[editorialPhotos.img8935,editorialPhotos.img8930,editorialPhotos.img8934],
    date:[editorialPhotos.img8943,editorialPhotos.img8931,editorialPhotos.img8938],
    restaurant:[editorialPhotos.img8936,editorialPhotos.img8940,editorialPhotos.img8933],
    travel:[editorialPhotos.img8944,editorialPhotos.img8937,editorialPhotos.img8939],
    event:[editorialPhotos.img8930,editorialPhotos.img8934,editorialPhotos.img8935],
    university:[editorialPhotos.img8933,editorialPhotos.img8929,editorialPhotos.img8941]
  };
  const recipes=[
    {id:'r1',title:'Чистая база',style:'minimal',occasions:['everyday','travel','university'],weather:['warm','mild'],slots:[['tee',['white','cream']],['jeans',['navy','blue']],['sneakers',['white']]],reason:'Беспроигрышная база для повседневных задач.'},
    {id:'r2',title:'Городской минимализм',style:'minimal',occasions:['everyday','date'],weather:['mild','hot'],slots:[['tee',['black','white']],['trousers',['charcoal','beige']],['sneakers',['white','black']]],reason:'Чистые линии и спокойная палитра.'},
    {id:'r3',title:'Спокойный smart casual',style:'smart',occasions:['office','date','restaurant'],weather:['mild','hot'],slots:[['polo',['cream','navy']],['trousers',['charcoal','beige']],['loafers',['brown','black']]],reason:'Собранный образ без лишней формальности.'},
    {id:'r4',title:'Офис без галстука',style:'classic',occasions:['office','restaurant'],weather:['mild','hot'],slots:[['shirt',['white','blue']],['trousers',['charcoal','beige']],['derby',['black']]],reason:'Аккуратный комплект для офиса и встреч.'},
    {id:'r5',title:'Свидание в городе',style:'oldmoney',occasions:['date','restaurant'],weather:['mild','cold'],slots:[['knit',['navy','gray','cream']],['trousers',['charcoal','beige']],['loafers',['brown','black']]],reason:'Мягкая фактура и тёплая, уверенная подача.'},
    {id:'r6',title:'Городская осень',style:'oldmoney',occasions:['everyday','date','travel'],weather:['cold'],slots:[['knit',['gray','navy']],['jeans',['navy','blue']],['boots',['brown','black']],['coat',['brown']]],reason:'Многослойность и спокойная осенняя эстетика.'},
    {id:'r7',title:'Современная классика',style:'classic',occasions:['event','restaurant','date'],weather:['mild'],slots:[['shirt',['white']],['trousers',['charcoal']],['blazer',['navy']],['loafers',['brown']]],reason:'Структурный образ для более нарядного случая.'},
    {id:'r8',title:'Лёгкий выходной',style:'casual',occasions:['everyday','travel'],weather:['hot'],slots:[['tee',['white','black']],['shorts',['beige']],['sneakers',['white']]],reason:'Максимально лёгкий комплект для тёплой погоды.'}
  ];
  function buildCoreCatalog(){
    const specs=[
      [['tee',30],['shirt',20],['polo',10]],
      [['knit',30],['hoodie',20]],
      [['jeans',28],['trousers',28],['chinos',16],['shorts',8]],
      [['jacket',25],['overshirt',15],['coat',15]],
      [['blazer',10]],
      [['sneakers',18],['loafers',12],['derby',7],['boots',8]]
    ];
    const colors=['black','white','cream','gray','charcoal','navy','blue','beige','brown','olive'];
    const fits=['regular','relaxed','wide','straight','oversized','slim'];
    const labels={regular:'Regular',relaxed:'Relaxed',wide:'Wide',straight:'Straight',oversized:'Oversized',slim:'Slim'};
    let n=0,items=[];
    for(const block of specs)for(const [type,count] of block)for(let i=0;i<count;i++){
      const fit=['sneakers','loafers','derby','boots'].includes(type)?'regular':fits[(i+Math.floor(i/10))%fits.length];
      const color=colors[(i*3+Math.floor(i/10))%colors.length];
      const season=['coat','boots'].includes(type)?'cold':type==='shorts'?'warm':['knit','hoodie','jacket','overshirt','blazer'].includes(type)?'mild':'all';
      items.push({id:'core-'+String(++n).padStart(3,'0'),brand:'STYLE OS',name:TYPES[type]+' · '+labels[fit],type,color,fit,season,source:'style_os_reference',photo:'',image_status:'illustration_only',sku:'',url:'',price:null,availability:'not_for_sale'});
    }
    if(items.length!==300)throw Error('Core catalog count');
    return items;
  }
  const embeddedCatalog = [{"id":"lm-mp002xm00vag","sku":"MP002XM00VAG","name":"Белая футболка","type":"tee","subtype":"tee","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm00vag/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1jf6EeesVzi_AObvrDyOzOsU5c1R6xAwD&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22od9","sku":"MP002XM22OD9","name":"Коричневая футболка","type":"tee","subtype":"tee","color":"brown","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22od9/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1leA_C6K_tqPBq2qUSvRW1kLljrk0zVHp&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22odc","sku":"MP002XM22ODC","name":"Серая футболка","type":"tee","subtype":"tee","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22odc/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=18i0kAavFEs1TZW4YSE6NeUPzOI8x61ES&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00vaf","sku":"MP002XM00VAF","name":"Чёрная футболка","type":"tee","subtype":"tee","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm00vaf/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Ia1fYsBf7RLstch4WcMrd4OYjJKe6ekZ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm02exp","sku":"MP002XM02EXP","name":"Белое поло","type":"polo","subtype":"polo","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm02exp/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=12TtA95sji5RHlLds6to8Di97F4Wzsw2a&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm02hod","sku":"MP002XM02HOD","name":"Бежевое поло","type":"polo","subtype":"polo","color":"beige","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm02hod/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1EcgVU7w1vR1eS5sqpiMvo5EZrOuV22K0&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm02exo","sku":"MP002XM02EXO","name":"Чёрное поло","type":"polo","subtype":"polo","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm02exo/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1lIukiH70G2J193zQdFJMUfhSCEY1P2Rq&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22tj6","sku":"MP002XM22TJ6","name":"Коричневое поло","type":"polo","subtype":"polo","color":"brown","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22tj6/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=181zFQrj2xks-UVNTihRuWwjV-f3Ok5w1&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22tj7","sku":"MP002XM22TJ7","name":"Серое поло","type":"polo","subtype":"polo","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22tj7/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1OeGDcVacJmdpJGirDxLVjOP-mvv3VJIa&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0ndwp","sku":"MP002XM0NDWP","name":"Белая майка","type":"tee","subtype":"tank","color":"white","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/mp002xm0ndwp/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1UC2Lqm75zgFv0ypE7iAOO0f45JkIuDZ_&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0ndwq","sku":"MP002XM0NDWQ","name":"Чёрная майка","type":"tee","subtype":"tank","color":"black","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/mp002xm0ndwq/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1nDJGRvCPZu48-6cLBFdnRwm3NCvS83S0&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rvbs","sku":"MP002XM0RVBS","name":"Белая рубашка","type":"shirt","subtype":"shirt","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm0rvbs/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1b9apdKfulJ4x4wVO1wHgAGwpndNlSk9u&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rvbo","sku":"MP002XM0RVBO","name":"Голубая рубашка","type":"shirt","subtype":"shirt","color":"blue","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm0rvbo/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1h0BpmXTN8yJNbhse_lcAXRNX1KmMMsU1&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00yat","sku":"MP002XM00YAT","name":"Чёрная рубашка","type":"shirt","subtype":"shirt","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm00yat/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1kgmE-s9pWQiHkfqv0-bIooGLrA_QvwN0&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x8k2","sku":"MP002XM0X8K2","name":"Серая рубашка","type":"shirt","subtype":"shirt","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm0x8k2/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1TIhmiJleEcKHdpKNXlvI9RTQir0rTgCn&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0wdsu","sku":"MP002XM0WDSU","name":"Чёрная водолазка","type":"knit","subtype":"turtleneck","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0wdsu/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Wzz5Wki6w6bLmM9QaqxFTLpme5CS_JmC&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0wdso","sku":"MP002XM0WDSO","name":"Белая водолазка","type":"knit","subtype":"turtleneck","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0wdso/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1AYyYHeDYfj-7Z8tvcIZTh6YM5Iv243YC&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0wdss","sku":"MP002XM0WDSS","name":"Серая водолазка","type":"knit","subtype":"turtleneck","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0wdss/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1xtaySSoCEzdvDngE-Elv7d8cEmr8zAfh&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22ql9","sku":"MP002XM22QL9","name":"Коричневая водолазка","type":"knit","subtype":"turtleneck","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm22ql9/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1-CMeBnt9yAioJfPaDMJltoIhm4N6V4pJ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm012ep","sku":"MP002XM012EP","name":"Бордовая водолазка","type":"knit","subtype":"turtleneck","color":"burgundy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm012ep/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1QxYk2a-k-QPApw0QsXnKw6v6TdswNL5g&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00ul8","sku":"MP002XM00UL8","name":"Синий джемпер с небольшим горлом","type":"knit","subtype":"knit","color":"navy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm00ul8/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1_CyMwuWhx1EDD-Ye0vmkhiOrtsM4Yifc&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00ul7","sku":"MP002XM00UL7","name":"Чёрный джемпер с небольшим горлом","type":"knit","subtype":"knit","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm00ul7/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1r6ZTzJaP9ATrqiSIaNbyVkNAJzUZsm8N&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00ock","sku":"MP002XM00OCK","name":"Бежевый джемпер","type":"knit","subtype":"knit","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm00ock/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1K8AoDSPpHAEqZK4p9IyJAYZQWQYNKabs&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00ocn","sku":"MP002XM00OCN","name":"Коричневый джемпер","type":"knit","subtype":"knit","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm00ocn/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1kpvGry65ClsIMIR_0Mi1jbxNEyeOAxZA&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00ocj","sku":"MP002XM00OCJ","name":"Серый джемпер","type":"knit","subtype":"knit","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm00ocj/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1hMhK85uRkgEpp8lp-HP9d7ALFpBPM_pn&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0st86","sku":"MP002XM0ST86","name":"Белый джемпер","type":"knit","subtype":"knit","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0st86/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1tKEubOm0PbWvR3B-9JBdHxtZiWlWM74u&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0wg7h","sku":"MP002XM0WG7H","name":"Бордовый джемпер","type":"knit","subtype":"knit","color":"burgundy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0wg7h/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1RbrqNDlEh7CDCHEXyVsJunXvJLMe_g8U&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm01xrc","sku":"MP002XM01XRC","name":"Белое худи","type":"hoodie","subtype":"hoodie","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm01xrc/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1CZJ_kE-EujCEW0khkwHBmjBKhcQFF9my&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm01xrb","sku":"MP002XM01XRB","name":"Чёрное худи","type":"hoodie","subtype":"hoodie","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm01xrb/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1BPj6-p-AFT40uEPmVjCd3e1UHc9YpckU&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm01hoy","sku":"XD001XM01HOY","name":"Коричневое худи","type":"hoodie","subtype":"hoodie","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm01hoy/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1QvEkGjiYAhoq_SgM1wGjQVJtiG93MfP8&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm01hpb","sku":"XD001XM01HPB","name":"Бежевое худи","type":"hoodie","subtype":"hoodie","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm01hpb/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1u3Owt4LL_BspFUu_IcH9trBfuTt9VTGH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm01hov","sku":"XD001XM01HOV","name":"Голубое худи","type":"hoodie","subtype":"hoodie","color":"blue","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm01hov/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1pqAujmcUe_htWlcBe-PkFEfD5Pg5Hr3k&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm01hp9","sku":"XD001XM01HP9","name":"Серое худи","type":"hoodie","subtype":"hoodie","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm01hp9/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1UW9zo6eEVee5kBGcPUrIyCdZe-1DafnV&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm01hp8","sku":"XD001XM01HP8","name":"Бордовое худи","type":"hoodie","subtype":"hoodie","color":"burgundy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm01hp8/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1GjIvjstAgyMZh_yToGp8itvMJBKt5hLZ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22t37","sku":"MP002XM22T37","name":"Белый лонгслив","type":"tee","subtype":"longsleeve","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22t37/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1jnzGhiQl9kID025hEz_DC0a4_rFIDZF9&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22t38","sku":"MP002XM22T38","name":"Чёрный лонгслив","type":"tee","subtype":"longsleeve","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22t38/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1AY4PI1NQOt3-97hwVU_nQgG5I8YdpFcf&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22tsw","sku":"MP002XM22TSW","name":"Серый лонгслив","type":"tee","subtype":"longsleeve","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22tsw/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1hZwTKRdIRAbmqvQy6iRa3YVXtmJlkrnb&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rtdo","sku":"MP002XM0RTDO","name":"Бордовый лонгслив","type":"tee","subtype":"longsleeve","color":"burgundy","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm0rtdo/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1BXo_f6ICCp1dNPqvkQ4LIKspOEFoVCnx&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm02bdk","sku":"MP002XM02BDK","name":"Голубой лонгслив","type":"tee","subtype":"longsleeve","color":"blue","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm02bdk/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1zQbIg7G9qxboJa2DuP5Z756u-FzBUkUo&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafi288601","sku":"RTLAFI288601","name":"Коричневый кардиган","type":"knit","subtype":"cardigan","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafi288601/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1OVtlfnqihgbxjGaFqUw-5i-cUl4PPhqV&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafi288701","sku":"RTLAFI288701","name":"Бордовый кардиган","type":"knit","subtype":"cardigan","color":"burgundy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafi288701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1m_eFtvwSmXmFtQ20plZbCMG91Y7niFYm&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaej818502","sku":"RTLAEJ818502","name":"Зелёный кардиган","type":"knit","subtype":"cardigan","color":"olive","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaej818502/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1AWPFsZehBGLJszbtuFbZqY2EYy39nB34&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rum5","sku":"MP002XM0RUM5","name":"Чёрный кардиган","type":"knit","subtype":"cardigan","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0rum5/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1uczXA7Gz89c4pqfnRNV63L3BCMpBAzRJ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rum4","sku":"MP002XM0RUM4","name":"Серый кардиган","type":"knit","subtype":"cardigan","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0rum4/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1zFJZ4NVXG5jwSx1-PAlzw7wNpg-9hg-V&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm008mr","sku":"MP002XM008MR","name":"Белый кардиган","type":"knit","subtype":"cardigan","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm008mr/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1k0yqvaT241n9J80Rn4kXTXvj4_DYOFfO&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafr791401","sku":"RTLAFR791401","name":"Коричневая кофта-кардиган","type":"knit","subtype":"cardigan","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafr791401/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=11Et6UdoslzIAfyhaBONYEYDByV0M7nqJ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x9uk","sku":"MP002XM0X9UK","name":"Чёрная кофта-кардиган","type":"knit","subtype":"cardigan","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0x9uk/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1TAP5F_pB6AmsXAil15MR82ke8y_d5qeH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x9ul","sku":"MP002XM0X9UL","name":"Серая кофта-кардиган","type":"knit","subtype":"cardigan","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0x9ul/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1VgoOpjKRGeYQW3OsYw9GjFwypuzTKLS4&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rsjh","sku":"MP002XM0RSJH","name":"Белая кофта-кардиган","type":"knit","subtype":"cardigan","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0rsjh/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=12C6kM2QQ3Wl8gO1aonJ9tm5K-b24izVo&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm00oco","sku":"MP002XM00OCO","name":"Чёрное зип-худи","type":"hoodie","subtype":"ziphoodie","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm00oco/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1jfgTQ13RVJkSL2qGebvpiBSfzklrAncy&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0ro5d","sku":"MP002XM0RO5D","name":"Белое зип-худи","type":"hoodie","subtype":"ziphoodie","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0ro5d/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=13KxrmGfiBC-DdO2Yb-f7Wchvga3ZCY2O&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22tez","sku":"MP002XM22TEZ","name":"Коричневый пиджак","type":"blazer","subtype":"blazer","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm22tez/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1nkE1WCXUiH3gduQO2wMk3AfmySd2eNk2&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rt1e","sku":"MP002XM0RT1E","name":"Чёрный пиджак","type":"blazer","subtype":"blazer","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0rt1e/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1YzJ_OK-FPm0J9hBtreQ4BKWc_2QVku0E&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaen967601","sku":"RTLAEN967601","name":"Синий пиджак","type":"blazer","subtype":"blazer","color":"navy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaen967601/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1K71HapJYLOXe2veUreENrNq3S3aeQtEv&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rt18","sku":"MP002XM0RT18","name":"Серый пиджак","type":"blazer","subtype":"blazer","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0rt18/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1VpWipJv3tDvESTY4FaDVD17LuuhY70lU&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaev815101","sku":"RTLAEV815101","name":"Зелёный пиджак","type":"blazer","subtype":"blazer","color":"olive","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaev815101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1g-yJoXCtoPK-98ERtZ4cICCCmEB5xXAA&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafg953401","sku":"RTLAFG953401","name":"Бежевый пиджак","type":"blazer","subtype":"blazer","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafg953401/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1W_RGs2lZeKustlYMewQMbfwgNvZ-1piY&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rugl","sku":"MP002XM0RUGL","name":"Чёрный свитер с горлом","type":"knit","subtype":"sweater","color":"black","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0rugl/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1u7mcrpF70Hj2GlvAY7mnVkQ41Quh4Wne&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0ruge","sku":"MP002XM0RUGE","name":"Коричневый свитер с горлом","type":"knit","subtype":"sweater","color":"brown","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0ruge/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1l0O1HR5I-kGZjNHxz_PbCtgZc9KVVvyq&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rugd","sku":"MP002XM0RUGD","name":"Серый свитер с горлом","type":"knit","subtype":"sweater","color":"gray","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0rugd/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1gDCJMGEcwvTqmJnNRSR-LjBdDIT5TLm4&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rugi","sku":"MP002XM0RUGI","name":"Бордовый свитер с горлом","type":"knit","subtype":"sweater","color":"burgundy","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0rugi/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1T16LTxzvm8hinw_fuKTe-r3N8VnK34Nx&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rug0","sku":"MP002XM0RUG0","name":"Синий свитер с горлом","type":"knit","subtype":"sweater","color":"navy","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0rug0/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1zabNjJUHhKDlxWNPcOsu-1C_rEGGdLQ9&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22rao","sku":"MP002XM22RAO","name":"Чёрная джинсовая куртка","type":"jacket","subtype":"denimjacket","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm22rao/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1uDvyOIxXYpOOPv0GyRVKH2y-e0M-IbMJ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaev089502","sku":"RTLAEV089502","name":"Синяя джинсовая куртка","type":"jacket","subtype":"denimjacket","color":"navy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaev089502/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1AQgIrGO_4KRwL4bVPdlIa3kTQtiMgPOE&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm05zjf","sku":"MP002XM05ZJF","name":"Бежевая джинсовая куртка","type":"jacket","subtype":"denimjacket","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm05zjf/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1HURx-DXFJda8BkKHpoe0kx6g9S6NGiLv&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaez590701","sku":"RTLAEZ590701","name":"Белая джинсовая куртка","type":"jacket","subtype":"denimjacket","color":"white","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaez590701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1f_3EKmKMCC2YolVpfVUXXyYO5dfMLIJV&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaei323101","sku":"RTLAEI323101","name":"Коричневая кожаная куртка","type":"jacket","subtype":"leatherjacket","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaei323101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1OvN1rT-mrB1Gbz6GJ8mRrxGD_1w2o3AT&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22n47","sku":"MP002XM22N47","name":"Чёрная кожаная куртка","type":"jacket","subtype":"leatherjacket","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm22n47/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1y_df7yw74-foN_S6_Bxnu7JGX_3ECuBr&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaff876901","sku":"RTLAFF876901","name":"Бежевая замшевая куртка","type":"jacket","subtype":"suedejacket","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlaff876901/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1bTBd7D1DEgeA4bdifqM-bGFrr49rMUq0&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm01qmb","sku":"MP002XM01QMB","name":"Коричневая замшевая куртка","type":"jacket","subtype":"suedejacket","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm01qmb/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1cU8V2bSVUs_ohA88pGeRN2DMxEth8oWf&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafg334201","sku":"RTLAFG334201","name":"Бежевый бомбер с горлом","type":"jacket","subtype":"bomber","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafg334201/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Fa5pCVYv7Bh7PAADHfpPWx2HwT7F2vgc&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0weys","sku":"MP002XM0WEYS","name":"Чёрный бомбер с горлом","type":"jacket","subtype":"bomber","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm0weys/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Qttkjm-SEnl81KI1PzC6fKvOxU3hBRVY&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaew221701","sku":"RTLAEW221701","name":"Серая дублёнка","type":"coat","subtype":"shearling","color":"gray","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlaew221701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1x7bg1NoEc4sl6px1BdL4k5uEHu2MAV-k&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0147c","sku":"MP002XM0147C","name":"Коричневая дублёнка","type":"coat","subtype":"shearling","color":"brown","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0147c/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=19l1ZnQOVtXtagC8K6eq-cdQ23lMe06Qf&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x97s","sku":"MP002XM0X97S","name":"Чёрная дублёнка","type":"coat","subtype":"shearling","color":"black","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm0x97s/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Av9qRT47Cr_TtpFmzHkZZv1YP6HGrBeS&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaek292101","sku":"RTLAEK292101","name":"Серая зимняя куртка","type":"jacket","subtype":"winterjacket","color":"gray","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlaek292101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1kbL-q9LzzpnLkZ9NaafzgvXr_7N6y64q&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafh497301","sku":"RTLAFH497301","name":"Зелёная зимняя куртка","type":"jacket","subtype":"winterjacket","color":"olive","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlafh497301/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1a8TTSQS_VCvkV0Zw2S8Nb4kEkIzKom5e&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafh497801","sku":"RTLAFH497801","name":"Чёрная зимняя куртка","type":"jacket","subtype":"winterjacket","color":"black","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlafh497801/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1TtxGwPzeXy7-tDWMaoKKZzbMhxNLq_TH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafh497901","sku":"RTLAFH497901","name":"Бордовая зимняя куртка","type":"jacket","subtype":"winterjacket","color":"burgundy","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlafh497901/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1vYKcirdOBriivWBY4XhgpsyUyBZHgW5e&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaeh523701","sku":"RTLAEH523701","name":"Коричневая зимняя куртка","type":"jacket","subtype":"winterjacket","color":"brown","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlaeh523701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Rpesh6-BI30ZgkCSVOhUfY3XCeRkt7h6&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafh336001","sku":"RTLAFH336001","name":"Бежевая зимняя куртка","type":"jacket","subtype":"winterjacket","color":"beige","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/rtlafh336001/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1vLASOgqSuVZMZgjuUqwRdQhrt5lK5Y3D&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22r5j","sku":"MP002XM22R5J","name":"Синяя зимняя куртка","type":"jacket","subtype":"winterjacket","color":"navy","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm22r5j/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=14uCfi5lCQ-eyWykhh8TGmBo0LBdWbi5Z&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm05txi","sku":"MP002XM05TXI","name":"Коричневое пальто","type":"coat","subtype":"coat","color":"brown","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm05txi/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Y7MBmx4lmB9pdQrjdjF4NVIld6XiUp51&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm05xg6","sku":"MP002XM05XG6","name":"Чёрное пальто","type":"coat","subtype":"coat","color":"black","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm05xg6/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1DZCeEqKLLjzlLGkGIRK6y98uLIKf6XjH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm05vya","sku":"MP002XM05VYA","name":"Серое пальто","type":"coat","subtype":"coat","color":"gray","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm05vya/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1ilzRnX69HUNNI0575PcfIG-PrskUIWOu&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm019m7","sku":"MP002XM019M7","name":"Бежевое пальто","type":"coat","subtype":"coat","color":"beige","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm019m7/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1uVgHsX9tQ-BlKY0-Z_imhpp6k8eoD26I&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm018j0","sku":"XD001XM018J0","name":"Бежевый тренч","type":"coat","subtype":"trench","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm018j0/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1XR1vJougV4r1xULfLzr8dn8R9v8ftIRh&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafi437401","sku":"RTLAFI437401","name":"Чёрная лёгкая куртка","type":"jacket","subtype":"jacket","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafi437401/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1jsK-zBn9UGhZzMjcL97wwZvcbvTiw5RH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafi437701","sku":"RTLAFI437701","name":"Коричневая лёгкая куртка","type":"jacket","subtype":"jacket","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafi437701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=19-3SGHO77sMdHmFeGjZZvhN6CBgebW61&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafc974801","sku":"RTLAFC974801","name":"Бежевая лёгкая куртка","type":"jacket","subtype":"jacket","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafc974801/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1ZgsXoSBqtu9KEpoOZcDK7OPqaAUwAmfi&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafi437801","sku":"RTLAFI437801","name":"Серая лёгкая куртка","type":"jacket","subtype":"jacket","color":"gray","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafi437801/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=12SR5HNAY2DWZwQu1ArLbgRxlrWGI7T1D&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm12hyr","sku":"MP002XM12HYR","name":"Бордовая лёгкая куртка","type":"jacket","subtype":"jacket","color":"burgundy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/mp002xm12hyr/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1otU23JcR-exIiY2v1AOJ05IBkqLiIdsu&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaff724901","sku":"RTLAFF724901","name":"Чёрные широкие брюки","type":"trousers","subtype":"trousers","color":"black","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/rtlaff724901/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1r-tDaJak1-hCi4NunIfb2ctWEUn5ObNw&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafj635101","sku":"RTLAFJ635101","name":"Серые широкие брюки","type":"trousers","subtype":"trousers","color":"gray","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/rtlafj635101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1MeYd52_CI4HUQFcZztuedawwb7CUXpuu&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafj635001","sku":"RTLAFJ635001","name":"Бордовые широкие брюки","type":"trousers","subtype":"trousers","color":"burgundy","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/rtlafj635001/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1PomBuBcXouokZVr4d8uhPmlfqxgJKxZA&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22n43","sku":"MP002XM22N43","name":"Коричневые широкие брюки","type":"trousers","subtype":"trousers","color":"brown","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/mp002xm22n43/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1s61ZR811fJgQ-CDng4SEFiyrynZwdyrj&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaer059501","sku":"RTLAER059501","name":"Бежевые широкие брюки","type":"trousers","subtype":"trousers","color":"beige","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/rtlaer059501/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1jJBUhLUaWnHeet6hJVSii3MTrlvjQ5eZ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x2gh","sku":"MP002XM0X2GH","name":"Белые широкие брюки","type":"trousers","subtype":"trousers","color":"white","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/mp002xm0x2gh/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1sMfqOPB3PJDZZB_R220D64qV88M2mGBL&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaeh380201","sku":"RTLAEH380201","name":"Чёрные узкие брюки","type":"trousers","subtype":"trousers","color":"black","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/rtlaeh380201/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1saBxXzm5z7HbToQEXMkrDJanJPN7bi4a&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rpmm","sku":"MP002XM0RPMM","name":"Серые узкие брюки","type":"trousers","subtype":"trousers","color":"gray","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/mp002xm0rpmm/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1ZshFlCujLHSSBBfAGDLjwXjcJmf8VExH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm01p27","sku":"MP002XM01P27","name":"Коричневые узкие брюки","type":"trousers","subtype":"trousers","color":"brown","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/mp002xm01p27/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1SAhxT2e6rEIeUPKhVlP98JBk7xoCZsUc&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm02app","sku":"MP002XM02APP","name":"Бежевые узкие брюки","type":"trousers","subtype":"trousers","color":"beige","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/mp002xm02app/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=11Jnwre9gwIsF511xO-6tu9Yj4pFEEODM&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rs68","sku":"MP002XM0RS68","name":"Чёрные широкие джинсы","type":"jeans","subtype":"jeans","color":"black","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/mp002xm0rs68/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1EbF92YEMxnFeXQGjpVulQETAGnbsRFLD&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaff762101","sku":"RTLAFF762101","name":"Синие широкие джинсы","type":"jeans","subtype":"jeans","color":"navy","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/rtlaff762101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=14yQwF7k00UONDQ-mrsBuqDf3Mv1zb_oW&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtladz339701","sku":"RTLADZ339701","name":"Голубые широкие джинсы","type":"jeans","subtype":"jeans","color":"blue","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/rtladz339701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1h-ZXWLeuSg2QgYwb_Vzt9hMLsCYlonNV&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x9nt","sku":"MP002XM0X9NT","name":"Бежевые широкие джинсы","type":"jeans","subtype":"jeans","color":"beige","fit":"wide","season":"all","url":"https://www.lamoda.ru/p/mp002xm0x9nt/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1JJCprUOzgV4I4LxqRXMkDpPS4iqkGte5&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0weur","sku":"MP002XM0WEUR","name":"Чёрные узкие джинсы","type":"jeans","subtype":"jeans","color":"black","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/mp002xm0weur/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=18k5p4X9zmAW0cpeNHHLtC1Jw9XK2bEC1&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafg288301","sku":"RTLAFG288301","name":"Синие узкие джинсы","type":"jeans","subtype":"jeans","color":"navy","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/rtlafg288301/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1SbnLZ6h4EaVcED3j9xVM1TAeW1LH-WHm&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd908701","sku":"RTLAFD908701","name":"Голубые узкие джинсы","type":"jeans","subtype":"jeans","color":"blue","fit":"slim","season":"all","url":"https://www.lamoda.ru/p/rtlafd908701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1dhOfPJZUAM__siowtKj9bHFx_xJUT2wh&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm1zc7y","sku":"MP002XM1ZC7Y","name":"Белые джинсы","type":"jeans","subtype":"jeans","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm1zc7y/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1jOQvdlKPAjc6tfnzwftxpM5hs6YxPEaJ&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rraj","sku":"MP002XM0RRAJ","name":"Чёрные джинсовые шорты","type":"shorts","subtype":"shorts","color":"black","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/mp002xm0rraj/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1zyJVicJmWvbsroZeEcxAV2tdzaApL5Qf&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaea037101","sku":"RTLAEA037101","name":"Синие джинсовые шорты","type":"shorts","subtype":"shorts","color":"navy","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaea037101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=10JQ4b37vB4UVZd7yb6JwC_-DDAl2Td8C&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaet995501","sku":"RTLAET995501","name":"Голубые джинсовые шорты","type":"shorts","subtype":"shorts","color":"blue","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaet995501/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Zj2KhrXNmscpy-d08CZCANclUFro9Quq&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rls9","sku":"MP002XM0RLS9","name":"Белые джинсовые шорты","type":"shorts","subtype":"shorts","color":"white","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/mp002xm0rls9/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1THq0in_TVLXOeDpulMXuhW3jrOTscsRK&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaex715801","sku":"RTLAEX715801","name":"Коричневые джинсовые шорты","type":"shorts","subtype":"shorts","color":"brown","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaex715801/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1Pm_sZ57CQ65rMAJ_xJUbCbMxITGEqfYS&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaex715901","sku":"RTLAEX715901","name":"Серые джинсовые шорты","type":"shorts","subtype":"shorts","color":"gray","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaex715901/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1V-suR9hxJcZDT3wfyIT19X1Nf9CQl5P0&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaes932901","sku":"RTLAES932901","name":"Серые брючные шорты","type":"shorts","subtype":"shorts","color":"gray","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaes932901/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1S6DknwknyV2zmXQjcptNXbmZTTnlvRve&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaey812001","sku":"RTLAEY812001","name":"Чёрные брючные шорты","type":"shorts","subtype":"shorts","color":"black","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaey812001/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1POtdOYVTUi0IWd44uB-U3BEmjaejB2Qu&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0rt1n","sku":"MP002XM0RT1N","name":"Белые брючные шорты","type":"shorts","subtype":"shorts","color":"white","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/mp002xm0rt1n/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=119WQ5UhMYM7gm9MJmcTmsg4vY3-_K5oN&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm0x2gx","sku":"MP002XM0X2GX","name":"Коричневые брючные шорты","type":"shorts","subtype":"shorts","color":"brown","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/mp002xm0x2gx/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1ujISUseoAYwe6SPt09Gz1sikuovqBGHv&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafm122801","sku":"RTLAFM122801","name":"Коричневые спортивные шорты","type":"shorts","subtype":"shorts","color":"brown","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlafm122801/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=16jM_VGXrEvAgyVvNsUZLpilr3-XW8ewA&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaex329701","sku":"RTLAEX329701","name":"Чёрные спортивные шорты","type":"shorts","subtype":"shorts","color":"black","fit":"regular","season":"warm","url":"https://www.lamoda.ru/p/rtlaex329701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1FDSW_1nHKsE9veWMrh5ERpOTfyy02WIS&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22tmo","sku":"MP002XM22TMO","name":"Чёрные спортивные брюки","type":"trousers","subtype":"joggers","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22tmo/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1yquuyf2mNbxWxYr1E6Tuz7FuOYspp2Xe&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm22tmn","sku":"MP002XM22TMN","name":"Серые спортивные брюки","type":"trousers","subtype":"joggers","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/mp002xm22tmn/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1ez4ysCe99Qh0x3LsltWmkTn7Ij3rZAC9&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd828501","sku":"RTLAFD828501","name":"Чёрные дерби","type":"derby","subtype":"derby","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafd828501/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=13mtMhnFGrsGzsfp7-OpS8A8zCGZt7FI8&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd828401","sku":"RTLAFD828401","name":"Коричневые дерби","type":"derby","subtype":"derby","color":"brown","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafd828401/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=12OnwiukQVDdYhm53Mb2E8RUGw6gEPxKY&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd947101","sku":"RTLAFD947101","name":"Коричневые челси","type":"boots","subtype":"chelsea","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafd947101/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1aa84vpbgYxxkENLv_ryIIGgy7nE0UrSv&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd947201","sku":"RTLAFD947201","name":"Чёрные челси","type":"boots","subtype":"chelsea","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafd947201/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1wXxx4RS6u7GlGmLh-WbrCXXggBhWbxU4&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd947001","sku":"RTLAFD947001","name":"Чёрные лоферы","type":"loafers","subtype":"loafers","color":"black","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafd947001/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1kk9r--fJ6psUOglIbtp9kC7CHNZxa79l&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafd946901","sku":"RTLAFD946901","name":"Коричневые лоферы","type":"loafers","subtype":"loafers","color":"brown","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlafd946901/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=16KpDl8vqPFXbo0Nt7cQdPu3M2oObUbep&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm01fwj","sku":"XD001XM01FWJ","name":"Бежевые лоферы","type":"loafers","subtype":"loafers","color":"beige","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/xd001xm01fwj/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1X8MeDW1Rh8PpVXGk9NoCqVlup3770wPH&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlabl658301","sku":"RTLABL658301","name":"Синие лоферы","type":"loafers","subtype":"loafers","color":"navy","fit":"regular","season":"mild","url":"https://www.lamoda.ru/p/rtlabl658301/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1cPqMoaoPZtcVRiapg4Ix93fVVIW8WS1I&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaef025803","sku":"RTLAEF025803","name":"Чёрные спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaef025803/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1uVGaL20OiGPT8DtORQpG2pZe98_bBm5p&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaew013902","sku":"RTLAEW013902","name":"Коричневые спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"brown","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaew013902/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=140kdI07CPkKXhpMdTMsSHD4eGy1ZKU0h&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaef026001","sku":"RTLAEF026001","name":"Голубые спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"blue","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaef026001/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1aOgasH6nCf8Z-hqzmNsPgPO_vw8gzajK&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaen086001","sku":"RTLAEN086001","name":"Зелёные спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"olive","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaen086001/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=12UsX6a33nJ09wgDFN8VrOjjduNAigD9w&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafr527301","sku":"RTLAFR527301","name":"Белые спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafr527301/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1LXFRJxPGwEaICMcYJOK-FwJN-6wU6NkU&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaef025903","sku":"RTLAEF025903","name":"Красные спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"red","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaef025903/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1vysLu8it8lNt2rm4GVxR15fJBTxKfWZf&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafn239301","sku":"RTLAFN239301","name":"Серые спортивные кроссовки","type":"sneakers","subtype":"trainers","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafn239301/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=11WajpNInV4vNes-U3gvX-F6yoA3AKhXo&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafm150601","sku":"RTLAFM150601","name":"Серые кеды","type":"sneakers","subtype":"sneakers","color":"gray","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafm150601/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1XfeqGim0l-q4BP4nMRcnsSaFqqzeYmND&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaet549501","sku":"RTLAET549501","name":"Белые кеды","type":"sneakers","subtype":"sneakers","color":"white","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaet549501/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1d94_QVqjzY5XQE5OOTeMkH5vGweIJmrR&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafq605401","sku":"RTLAFQ605401","name":"Синие кеды","type":"sneakers","subtype":"sneakers","color":"navy","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafq605401/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=164RYCMXLa3a-I_50wHILpipWSN7hhqU5&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafo325201","sku":"RTLAFO325201","name":"Коричневые кеды","type":"sneakers","subtype":"sneakers","color":"brown","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafo325201/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1zm7Av5z6xnOQn5oSgJc8cmwCzXsGWi4F&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafn231701","sku":"RTLAFN231701","name":"Бежевые кеды","type":"sneakers","subtype":"sneakers","color":"beige","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafn231701/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1XFPQq_V4ACN14BZXwjRVdsXys4b2jn6n&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafo325601","sku":"RTLAFO325601","name":"Зелёные кеды","type":"sneakers","subtype":"sneakers","color":"olive","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafo325601/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1xBFEYW9zCvT4wzUfcBAyak4iLQ2fZ57R&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlafk782601","sku":"RTLAFK782601","name":"Бордовые кеды","type":"sneakers","subtype":"sneakers","color":"burgundy","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlafk782601/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1vYYQX0qcnhuoU27NP97kL0ylzm1PKC81&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-rtlaed937601","sku":"RTLAED937601","name":"Чёрные кеды","type":"sneakers","subtype":"sneakers","color":"black","fit":"regular","season":"all","url":"https://www.lamoda.ru/p/rtlaed937601/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1DxVoEsH90dc6wrzQlydgfK8o8Bj1UREa&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm013dm","sku":"XD001XM013DM","name":"Коричневые зимние ботинки","type":"boots","subtype":"boots","color":"brown","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/xd001xm013dm/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1GmE7S-TXQIV5A-38lfXa6g7eu1sTAwLh&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm061e1","sku":"MP002XM061E1","name":"Синие зимние ботинки","type":"boots","subtype":"boots","color":"navy","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm061e1/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1S6ztLUfgEg7t8dniDftMqNFEdimkdHrk&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-mp002xm061dp","sku":"MP002XM061DP","name":"Чёрные зимние ботинки","type":"boots","subtype":"boots","color":"black","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/mp002xm061dp/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1MByxpopWo-sAURlWB6ZDK9M1CrD100Bp&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"},{"id":"lm-xd001xm016hb","sku":"XD001XM016HB","name":"Бежевые зимние ботинки","type":"boots","subtype":"boots","color":"beige","fit":"regular","season":"cold","url":"https://www.lamoda.ru/p/xd001xm016hb/","price":null,"brand":"","material":"","sizes":[],"availability":"unknown","source":"lamoda","photo":"https://drive.google.com/thumbnail?id=1ohNutpf_THLFY9t1DPY7CMt6C2HaZl5v&sz=w1200","image_status":"user_cutout_google_drive","size_status":"unverified"}];

  // Russian grammatical agreement for catalog, imported and manually entered items.
  const COLOR_FORMS={"burgundy":["Бордовый","Бордовая","Бордовое","Бордовые"],"red":["Красный","Красная","Красное","Красные"],"white":["Белый","Белая","Белое","Белые"],"cream":["Молочный","Молочная","Молочное","Молочные"],"beige":["Бежевый","Бежевая","Бежевое","Бежевые"],"olive":["Зелёный","Зелёная","Зелёное","Зелёные"],"black":["Чёрный","Чёрная","Чёрное","Чёрные"],"gray":["Серый","Серая","Серое","Серые"],"charcoal":["Графитовый","Графитовая","Графитовое","Графитовые"],"navy":["Синий","Синяя","Синее","Синие"],"blue":["Голубой","Голубая","Голубое","Голубые"],"brown":["Коричневый","Коричневая","Коричневое","Коричневые"],"khaki":["Хаки","Хаки","Хаки","Хаки"]};
  function clothingGender(name,type){
    const nouns=[
      [1,/(?:футболка|майка|рубашка|водолазка|куртка|дублёнка|кофта-кардиган)(?:\s|$)/i],
      [2,/(?:худи|поло|пальто)(?:\s|$)/i],
      [3,/(?:джинсы|брюки|шорты|лоферы|кроссовки|ботинки|кеды|дерби|челси|чиносы)(?:\s|$)/i],
      [0,/(?:джемпер|кардиган|пиджак|свитер|бомбер|лонгслив|тренч)(?:\s|$)/i]
    ];
    for(const [gender,pattern] of nouns)if(pattern.test(name))return gender;
    return ({tee:1,polo:2,shirt:1,hoodie:2,jeans:3,trousers:3,chinos:3,shorts:3,sneakers:3,loafers:3,derby:3,boots:3,jacket:1,blazer:0,coat:2})[type]??null;
  }
  function normalizeClothingName(name,type){
    if(typeof name!=='string')return name;
    let corrected=name.trim(),gender=clothingGender(corrected,type);
    if(gender!==null)for(const variants of Object.values(COLOR_FORMS)){
      const original=variants.find(form=>corrected.toLowerCase().startsWith(form.toLowerCase()+' '));
      if(original){corrected=variants[gender]+corrected.slice(original.length);break;}
    }
    return corrected.replace(/^(\S+)\s+(брюки|джинсы)\s+(широкие|узкие)$/i,'$1 $3 $2');
  }
  function normalizeStoredItemNames(){
    let updated=false;
    const fix=item=>{
      if(!item||typeof item!=='object')return;
      const canonical=embeddedCatalog.find(p=>p.id===item.catalogId||p.id===item.id||p.sku&&p.sku===item.sku);
      const corrected=canonical?.name||normalizeClothingName(item.name,item.type);
      if(typeof corrected==='string'&&item.name!==corrected){item.name=corrected;updated=true;}
    };
    for(const item of store.wardrobe||[])fix(item);
    for(const look of Object.values(store.savedLookDetails||{}))for(const item of look?.parts||[])fix(item);
    for(const look of store.daily?.candidates||[])for(const item of look?.parts||[])fix(item);
    return updated;
  }
  const defaultProfile={name:'Dmitriy',style:'minimal',budget:'5000-15000',topSize:'M',bottomSize:'M',shoeSize:'42',palette:['white','cream','beige','navy','olive']};
  let state={screen:'home',filters:{wardrobe:'all',catalog:'all',outfitOccasion:'everyday',outfitWeather:'mild',catalogSearch:'',styleCollection:'all',ownedOnly:false},sheet:null,catalog:[],likedLooks:[]};
  let store;
  function seedWardrobe(catalog){
    const need=['lm-mp002xm00vag','lm-mp002xm0rvbs','lm-rtlafj635101','lm-rtlafd947001','lm-mp002xm05vya','lm-mp002xm00ock'];
    const ids=new Set(need);
    return catalog.filter(x=>ids.has(x.id)).map(x=>({...x,ownedId:'own_'+x.id,source:'catalog'}));
  }
  function loadStore(){
    try{ store = JSON.parse(localStorage.getItem(KEY)); } catch(e){}
    if(!store) store={onboarded:false,wardrobe:[],savedLooks:[],wish:[],profile:{...defaultProfile}};
    if(!store.profile) store.profile={...defaultProfile};
    if(!Array.isArray(store.feedback)) store.feedback=[];
  }
  function saveStore(){scheduleCloudSave();}
  function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  const userIcon='<svg width="52" height="52" viewBox="0 0 64 64" fill="none" aria-hidden="true"><circle cx="32" cy="23" r="12" fill="currentColor"/><path d="M10 55c0-13 9-20 22-20s22 7 22 20" fill="currentColor"/></svg>';
  function avatarMarkup(){return store.profile?.avatar?'<img alt="Фото профиля" src="'+escapeHtml(store.profile.avatar)+'">':userIcon;}
  async function uploadAvatar(file){
    if(!file)return;
    if(!file.type.startsWith('image/')||file.size>12*1024*1024){toast('Нужна фотография размером до 12 МБ');return;}
    try{
      const image=await createImageBitmap(file),canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
      const ctx=canvas.getContext('2d'),side=Math.min(image.width,image.height);
      ctx.drawImage(image,(image.width-side)/2,(image.height-side)/2,side,side,0,0,256,256);image.close?.();
      store.profile.avatar=canvas.toDataURL('image/jpeg',.76);saveStore();renderScreens();toast('Фото профиля сохранено');
    }catch(e){toast('Не удалось открыть фотографию');}
  }

  const SUPABASE_URL='https://maqhxkhltckttfwhyoqn.supabase.co';
  const SUPABASE_PUBLISHABLE='sb_publishable_PI-la72WM_8vQClRljs1NQ__O4I4FRp';
  let sb=null,authUser=null,cloudTimer=null,cloudPending=false,cloudWriting=false,cloudRevision=0,recoveringPassword=false;
  const SYNC_SECTIONS=['profile','wardrobe','savedLooks','savedLookDetails','wish','feedback','daily','onboarded','city','forecast'];
  let syncMode='legacy',syncVersions={},syncBaseline={},syncDirty={},syncBlocked={},cloudWritePromise=null,syncStatusTimer=null;
  function newUserStore(){return {onboarded:false,wardrobe:[],savedLooks:[],savedLookDetails:{},wish:[],feedback:[],profile:{...defaultProfile}};}
  function authMessage(message){const el=document.getElementById('authMessage');if(el)el.textContent=message||'';}
  function authDisplay(mode='login'){
    const el=document.getElementById('styleAuth');if(!el)return;
    el.classList.add('visible');
    el.dataset.mode=mode;
    const titles={register:'Регистрация',reset:'Забыли пароль?',password:'Новый пароль',login:'Войти в STYLE OS'};
    const descriptions={register:'Сохраняй гардероб и собирай образы.',reset:'Укажи почту — отправим ссылку для восстановления.',password:'Придумай новый пароль для своего аккаунта.',login:'Твой гардероб и образы всегда под рукой.'};
    document.getElementById('authHeading').textContent=titles[mode]||titles.login;
    document.getElementById('authDescription').textContent=descriptions[mode]||descriptions.login;
    document.getElementById('authPassword').style.display=mode==='reset'?'none':'block';
    const emailLabel=document.querySelector('#styleAuth label[for="authEmail"]');
    const emailField=document.getElementById('authEmail');
    emailLabel.style.display=mode==='password'?'none':'block';
    emailField.style.display=mode==='password'?'none':'block';
    emailField.required=mode!=='password';
    const pass=document.getElementById('authPass');
    pass.required=mode!=='reset';
    pass.autocomplete=mode==='register'||mode==='password'?'new-password':'current-password';
    pass.placeholder=mode==='register'||mode==='password'?'Не менее 10 символов':'Введите пароль';
    pass.type='password';
    const eye=document.querySelector('.authVisibility');if(eye){eye.setAttribute('aria-pressed','false');eye.setAttribute('aria-label','Показать пароль');}
    document.getElementById('authSubmit').textContent=mode==='register'?'Зарегистрироваться':mode==='reset'?'Отправить письмо':mode==='password'?'Изменить пароль':'Войти';
    const alt=document.getElementById('authAlternate');
    alt.innerHTML=mode==='register'?'Уже есть аккаунт? <button type="button" onclick="window.styleAuth.display(\'login\')">Войти</button>':mode==='login'?'Нет аккаунта? <button type="button" onclick="window.styleAuth.display(\'register\')">Зарегистрироваться</button>':'<button type="button" onclick="window.styleAuth.display(\'login\')">Вернуться ко входу</button>';
    document.getElementById('authResetLink').style.display=mode==='login'?'inline-block':'none';
    authMessage('');
  }
  function toggleAuthPassword(button){
    const field=document.getElementById('authPass');if(!field)return;
    const visible=field.type==='password';field.type=visible?'text':'password';
    button.setAttribute('aria-pressed',String(visible));button.setAttribute('aria-label',visible?'Скрыть пароль':'Показать пароль');
  }
  function authHide(){
    const panel=document.getElementById('styleAuth');
    if(panel?.contains(document.activeElement))document.activeElement.blur();
    panel?.classList.remove('visible');
  }
  function authFriendly(e){
    const x=String(e?.message||e||'Не удалось выполнить запрос');
    if(/invalid login credentials/i.test(x))return 'Проверь почту и пароль.';
    if(/email not confirmed/i.test(x))return 'Подтверди адрес почты по ссылке в письме.';
    return x;
  }
  async function authSubmit(e){
    e.preventDefault();
    const mode=document.getElementById('styleAuth').dataset.mode;
    const email=document.getElementById('authEmail').value.trim();
    const password=document.getElementById('authPass').value;
    const button=document.getElementById('authSubmit');button.disabled=true;authMessage('Выполняем запрос…');
    try{
      if(!sb)throw Error('Модуль авторизации пока не загрузился. Обнови страницу.');
      if(mode==='register'){
        if(password.length<10)throw Error('Используй пароль не короче 10 символов.');
        const {data,error}=await sb.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}});
        if(error)throw error;
        authMessage(data.session?'Аккаунт создан. Выполняется вход…':'Проверь почту и перейди по ссылке для подтверждения регистрации.');
        if(data.session)await activateAccount(data.user);
      }else if(mode==='reset'){
        const {error}=await sb.auth.resetPasswordForEmail(email,{redirectTo:location.origin+location.pathname});if(error)throw error;
        authMessage('Если адрес зарегистрирован, письмо с восстановлением отправлено.');
      }else if(mode==='password'){
        if(password.length<10)throw Error('Используй пароль не короче 10 символов.');
        const {error}=await sb.auth.updateUser({password});if(error)throw error;
        recoveringPassword=false;authMessage('Пароль обновлён.');authHide();
      }else{
        const {data,error}=await sb.auth.signInWithPassword({email,password});if(error)throw error;
        await activateAccount(data.user);
      }
    }catch(err){authMessage(authFriendly(err));}finally{button.disabled=false;}
  }
  async function activateAccount(user){
    if(!user)return;
    if(authUser?.id===user.id){if(!recoveringPassword)authHide();return;}
    authUser=user;clearTimeout(cloudTimer);cloudPending=false;cloudRevision++;
    syncVersions={};syncBaseline={};syncDirty={};syncBlocked={};
    const {data,error}=await sb.from('user_state').select('data').eq('user_id',user.id).maybeSingle();
    if(error){authUser=null;authDisplay('login');authMessage('Не удалось открыть личные данные: '+authFriendly(error));return;}
    store=data?.data&&typeof data.data==='object'?{...newUserStore(),...data.data}:newUserStore();
    const {data:sectionRows,error:sectionError}=await sb.from('user_state_sections').select('section,data,version').eq('user_id',user.id);
    syncMode=sectionError?'legacy':'sections';
    if(sectionError)console.warn('Section sync is not enabled yet: apply supabase/migrations/20261102_section_sync.sql',sectionError);
    if(syncMode==='sections'){
      for(const row of sectionRows||[]){
        if(SYNC_SECTIONS.includes(row.section)){store[row.section]=row.data;syncVersions[row.section]=Number(row.version)||0;}
      }
      // The database migration backfills legacy records. For an empty new account,
      // insert initial sections rather than writing a monolithic JSON document.
      if(!(sectionRows||[]).length&&data?.data){
        for(const name of SYNC_SECTIONS)if(Object.hasOwn(store,name))syncDirty[name]=JSON.stringify(store[name]);
      }
    }else if(!data?.data){
      const legacy=localStorage.getItem(KEY);
      if(legacy&&confirm('На этом устройстве найден прежний локальный гардероб. Перенести его в твой аккаунт?')){
        try{const parsed=JSON.parse(legacy);if(parsed&&typeof parsed==='object')store={...newUserStore(),...parsed};}catch(e){}
      }
    }
    for(const name of SYNC_SECTIONS)syncBaseline[name]=JSON.stringify(store[name]??null);
    restoreSyncJournal(user.id);
    if(syncMode==='sections'&&!(sectionRows||[]).length){
      for(const name of SYNC_SECTIONS)if(Object.hasOwn(store,name)&&!syncDirty[name])syncDirty[name]=JSON.stringify(store[name]);
      persistSyncJournal();
    }
    if(!store.profile)store.profile={...defaultProfile};
    if(!Array.isArray(store.wardrobe))store.wardrobe=[];
    if(!Array.isArray(store.savedLooks))store.savedLooks=[];
    if(!store.savedLookDetails||typeof store.savedLookDetails!=='object')store.savedLookDetails={};
    if(!Array.isArray(store.wish))store.wish=[];
    if(!Array.isArray(store.feedback))store.feedback=[];
    if(normalizeStoredItemNames())scheduleCloudSave();
    if(Object.keys(syncDirty).length||cloudPending)scheduleCloudSave();
    state.screen='home';state.sheet=null;
    buildOnboarding();
    document.getElementById('onboarding').classList.toggle('show',store.onboarded===false);
    if(store.forecast?.day===dayKey())state.filters.outfitWeather=store.forecast.mode;
    renderScreens();if(!recoveringPassword)authHide();
  }
  function syncJournalKey(){return authUser?'styleos_sync_journal_v2_'+authUser.id:null;}
  function persistSyncJournal(){
    const key=syncJournalKey();if(!key)return;
    try{
      if(syncMode==='sections'){
        const payload={mode:'sections',pending:Object.fromEntries(Object.entries(syncDirty).map(([k,v])=>[k,{value:v,version:syncVersions[k]||0}]))};
        if(Object.keys(payload.pending).length)localStorage.setItem(key,JSON.stringify(payload));else localStorage.removeItem(key);
      }else if(cloudPending)localStorage.setItem(key,JSON.stringify({mode:'legacy',pending:JSON.stringify(store)}));
      else localStorage.removeItem(key);
    }catch(err){console.error('Local sync journal:',err);syncIndicator('error','Нет места для сохранения. Освободи память устройства.');}
  }
  function restoreSyncJournal(userId){
    let saved=null;
    try{saved=JSON.parse(localStorage.getItem('styleos_sync_journal_v2_'+userId)||'null');}catch(err){console.warn('Sync journal:',err);}
    if(!saved)return;
    if(syncMode==='sections'&&saved.mode==='sections'){
      for(const [name,item] of Object.entries(saved.pending||{})){
        if(!SYNC_SECTIONS.includes(name)||typeof item?.value!=='string')continue;
        try{
          store[name]=JSON.parse(item.value);
          syncDirty[name]=item.value;
          // A version mismatch is a conflict. Never silently overwrite newer server data.
          if((syncVersions[name]||0)!==(Number(item.version)||0))syncBlocked[name]=true;
        }catch(err){console.warn('Skipping damaged local section',name,err);}
      }
    }else if(syncMode==='legacy'&&saved.mode==='legacy'&&typeof saved.pending==='string'){
      try{store={...store,...JSON.parse(saved.pending)};cloudPending=true;}catch(err){console.warn('Damaged pending snapshot:',err);}
    }
    if(Object.keys(syncBlocked).length)syncIndicator('conflict','Есть изменения с другого устройства. Локальная копия сохранена.');
    else syncIndicator('pending','Восстанавливаем несохранённые изменения…');
  }
  function syncIndicator(kind,message){
    const el=document.getElementById('styleSyncStatus');if(!el)return;
    clearTimeout(syncStatusTimer);
    el.dataset.kind=kind;el.textContent=message;el.hidden=false;
    if(kind==='saved')syncStatusTimer=setTimeout(()=>{el.hidden=true;},2200);
  }
  function hasSyncPending(){return syncMode==='sections'?Object.keys(syncDirty).length>0:cloudPending;}
  function scheduleCloudSave(){
    if(!authUser||!sb)return;
    if(syncMode==='sections'){
      for(const name of SYNC_SECTIONS){
        const value=JSON.stringify(store[name]??null);
        if(value!==syncBaseline[name])syncDirty[name]=value;
      }
      cloudPending=Object.keys(syncDirty).length>0;
    }else cloudPending=true;
    if(!cloudPending)return;
    cloudRevision++;
    persistSyncJournal(); // Synchronous durable journal, before any network request.
    if(Object.keys(syncBlocked).length){
      syncIndicator('conflict','Конфликт версий. Локальные изменения сохранены на устройстве.');
      return;
    }
    syncIndicator('pending',navigator.onLine===false?'Нет сети · ожидает сохранения':'Сохраняем…');
    clearTimeout(cloudTimer);
    cloudTimer=setTimeout(()=>{flushCloudSave();},0);
  }
  async function flushCloudSave(){
    if(cloudWritePromise)return cloudWritePromise;
    if(!authUser||!sb||!hasSyncPending())return;
    if(navigator.onLine===false){syncIndicator('pending','Нет сети · изменения сохранены на устройстве');return;}
    const userId=authUser.id;
    cloudWritePromise=(async()=>{
      cloudWriting=true;
      try{
        if(syncMode==='legacy'){
          const payload=JSON.parse(JSON.stringify(store));
          const revision=cloudRevision;
          const {error}=await sb.from('user_state').upsert({user_id:userId,data:payload},{onConflict:'user_id'});
          if(error)throw error;
          if(cloudRevision===revision)cloudPending=false;
        }else{
          for(const name of Object.keys(syncDirty)){
            if(syncBlocked[name]||authUser?.id!==userId)continue;
            const encoded=syncDirty[name],expected=syncVersions[name]||0;
            const {data,error}=await sb.rpc('styleos_save_section',{p_section:name,p_data:JSON.parse(encoded),p_expected_version:expected});
            if(error)throw error;
            if(!data?.ok){
              syncBlocked[name]=true;
              syncIndicator('conflict','Конфликт изменений. Локальная версия не удалена.');
              continue;
            }
            syncVersions[name]=Number(data.version);
            syncBaseline[name]=encoded;
            if(syncDirty[name]===encoded)delete syncDirty[name];
            persistSyncJournal();
          }
          cloudPending=Object.keys(syncDirty).length>0;
        }
        if(authUser?.id===userId){
          persistSyncJournal();
          if(!hasSyncPending())syncIndicator('saved','Сохранено в облаке');
        }
      }catch(err){
        console.error('Cloud save:',err);
        syncIndicator('error','Не удалось сохранить в облаке · повторим автоматически');
        cloudPending=true;persistSyncJournal();
        clearTimeout(cloudTimer);
        cloudTimer=setTimeout(()=>{flushCloudSave();},5000);
      }finally{cloudWriting=false;}
    })();
    try{await cloudWritePromise;}finally{cloudWritePromise=null;}
    if(authUser?.id===userId&&hasSyncPending()&&!Object.keys(syncBlocked).length&&navigator.onLine!==false){
      clearTimeout(cloudTimer);cloudTimer=setTimeout(()=>{flushCloudSave();},70);
    }
  }
  async function logoutAccount(){
    await flushCloudSave();
    if(hasSyncPending()){
      syncIndicator('error','Данные ещё не сохранены. Дождись синхронизации перед выходом.');
      return;
    }
    const {error}=await sb.auth.signOut();if(error){toast(authFriendly(error));return;}
    authUser=null;store=newUserStore();syncDirty={};syncBlocked={};
    document.getElementById('onboarding').classList.remove('show');authDisplay('login');
  }
  window.addEventListener('online',()=>{if(authUser&&hasSyncPending()){syncIndicator('pending','Соединение восстановлено · сохраняем…');flushCloudSave();}});
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&authUser&&hasSyncPending())flushCloudSave();});
  async function startAuth(){
    if(!window.supabase?.createClient){authDisplay();authMessage('Библиотека Supabase не загрузилась. Проверь соединение и обнови страницу.');return;}
    sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
    sb.auth.onAuthStateChange((event,session)=>{
      if(event==='PASSWORD_RECOVERY'){recoveringPassword=true;authDisplay('password');return;}
      if(event==='SIGNED_OUT'){authUser=null;store=newUserStore();authDisplay('login');return;}
      if(event==='SIGNED_IN'&&session?.user&&!authUser)setTimeout(()=>activateAccount(session.user),0);
    });
    const {data,error}=await sb.auth.getUser();
    if(data?.user)await activateAccount(data.user);
    else {authDisplay('login');if(error&&error.name!=='AuthSessionMissingError')authMessage(authFriendly(error));}
  }
  function icon(name){ return `<span style="font-size:18px">${name}</span>`; }
  function colorHex(c){ return (COLORS[c]||['','#d9d4cb'])[1]; }
  function clothSVG(item){
    const c=colorHex(item.color||'beige');
    const type=item.type||'tee';
    let path='';
    if(['tee','polo','shirt','knit','hoodie','overshirt','blazer','jacket','coat'].includes(type)){
      path='<path d="M36 17L48 23H52L64 17L86 29L95 48L82 55L76 44V107H24V44L18 55L5 48L14 29Z" fill="'+c+'" stroke="#b7b5ae" stroke-width="1.5"/><path d="M36 17Q50 39 64 17" fill="none" stroke="#b7b5ae" stroke-width="1.5"/>';
      if(['shirt','overshirt','blazer','coat'].includes(type))path+='<path d="M50 33V107" stroke="#a9a9a1" stroke-width="1.5"/>';
    }else if(['jeans','trousers','chinos','shorts'].includes(type)){
      const bottom=type==='shorts'?66:110;
      path='<path d="M26 15H74L69 '+bottom+'H54L50 55L46 '+bottom+'H31Z" fill="'+c+'" stroke="#b7b5ae" stroke-width="1.5"/>';
    }else{
      path='<path d="M18 77Q30 71 36 45L50 37L64 45Q72 69 87 78L92 88L83 95H20L10 88Z" fill="'+c+'" stroke="#b7b5ae" stroke-width="1.5"/><path d="M11 88H91" stroke="#b7b5ae" stroke-width="2"/>';
    }
    return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 120"><rect x="1" y="1" width="98" height="118" rx="16" fill="#f2f1ed"/>'+path+'</svg>');
  }
  function formatPrice(p){ return p ? new Intl.NumberFormat('ru-RU').format(p) + ' ₽' : 'Цена на Lamoda'; }
  const catalogPhotoBySku=new Map(embeddedCatalog.filter(p=>p.sku).map(p=>[p.sku,p.photo]));
  const catalogPhotoById=new Map(embeddedCatalog.map(p=>[p.id,p.photo]));
  // Compact garment names in outfit cards, based on the actual product rather than its broad category.
  function itemTypeLabel(item){
    const name=String(item?.name||'').toLowerCase();
    const terms=[
      ['зип-худи','Зип-худи'],['кофта-кардиган','Кофта-кардиган'],
      ['лонгслив','Лонгслив'],['водолазка','Водолазка'],['джемпер','Джемпер'],
      ['кардиган','Кардиган'],['свитер','Свитер'],['худи','Худи'],
      ['майка','Майка'],['футболка','Футболка'],['поло','Поло'],
      ['рубашка','Рубашка'],['пиджак','Пиджак'],['пальто','Пальто'],
      ['дублёнка','Дублёнка'],['тренч','Тренч'],['бомбер','Бомбер'],
      ['куртка','Куртка'],['джинсы','Джинсы'],['брюки','Брюки'],
      ['чиносы','Чиносы'],['шорты','Шорты'],['кроссовки','Кроссовки'],
      ['кеды','Кеды'],['ботинки','Ботинки'],['челси','Челси'],
      ['лоферы','Лоферы'],['дерби','Дерби'],['овершот','Овершот']
    ];
    for(const [term,label] of terms){
      if(name.includes(term))return label;
    }
    return TYPES[item?.type]||'Вещь';
  }
  function productImage(item,fullSize=false){
    // O(1) photo lookup instead of scanning 151 catalog entries for each tile.
    const photo=catalogPhotoBySku.get(item.sku)||catalogPhotoById.get(item.catalogId)||catalogPhotoById.get(item.id)||item.photo;
    if(!photo)return clothSVG(item);
    // Google Drive generates resized thumbnails. Request full 1200px only for
    // expanded product details; grid tiles use 720px (retina friendly).
    if(!fullSize&&photo.includes('drive.google.com/thumbnail?'))return photo.replace(/([?&]sz=)w\d+/,'$1w720');
    return photo;
  }
  function getOccLabel(v){ return ({everyday:'На каждый день',office:'Офис',date:'Свидание',restaurant:'Ужин',travel:'Поездка',event:'Мероприятие',university:'Учёба'})[v] || v; }
  function getWeatherLabel(v){ return ({hot:'Тепло',mild:'Прохладно',cold:'Холодно'})[v] || v; }
  function uniq(arr){ return [...new Set(arr)]; }
  function byType(type){ return state.catalog.filter(i=>i.type===type); }
  function paletteScore(parts){ const neutral=['white','cream','beige','gray','charcoal','black','navy','olive']; return parts.reduce((sum,p)=> sum + (neutral.includes(p.color)?1:0),0); }
  function seasonOK(item, weather){ if(weather==='mild') return ['all','mild','warm','cold'].includes(item.season) || !item.season; if(weather==='hot') return ['all','warm'].includes(item.season)||!item.season; if(weather==='cold') return ['all','cold'].includes(item.season)||!item.season; return true; }
  function ownItems(){ return store.wardrobe; }
  // STYLE OS v2: deterministic combinations; no AI calls, measurements or new form fields.
  const STYLE_MODES={
    minimal:{label:'Минимализм',colors:['black','white','cream','gray','charcoal','beige','navy'],types:['tee','knit','shirt','trousers','jeans','loafers','sneakers','coat'],fits:['regular','straight','relaxed','wide']},
    dark_minimal:{label:'Тёмный минимализм',colors:['black','charcoal','gray','navy'],types:['tee','knit','trousers','jeans','jacket','loafers','boots'],fits:['regular','straight','wide','relaxed']},
    smart:{label:'Smart casual',colors:['navy','cream','white','beige','charcoal','brown','gray'],types:['polo','shirt','knit','trousers','chinos','loafers','derby','blazer'],fits:['regular','straight','relaxed','wide']},
    classic:{label:'Современная классика',colors:['navy','charcoal','black','white','cream','brown'],types:['shirt','knit','blazer','trousers','coat','derby','loafers'],fits:['regular','straight','relaxed','wide']},
    oldmoney:{label:'Old money',colors:['navy','brown','cream','beige','white','olive','gray'],types:['polo','shirt','knit','trousers','chinos','loafers','coat'],fits:['regular','straight','relaxed']},
    utility:{label:'Workwear',colors:['olive','brown','beige','cream','black','navy','gray'],types:['overshirt','jacket','tee','jeans','chinos','boots','sneakers'],fits:['regular','straight','relaxed','wide','oversized']},
    soft_tailoring:{label:'Soft tailoring',colors:['charcoal','brown','beige','cream','navy','gray','white'],types:['shirt','knit','polo','trousers','blazer','loafers','derby','jacket'],fits:['regular','straight','relaxed','wide']},
    casual:{label:'Повседневный',colors:['black','white','cream','gray','navy','olive','brown','beige'],types:['tee','hoodie','shirt','jeans','chinos','sneakers','jacket'],fits:['regular','relaxed','wide','oversized']},
    summer_relaxed:{label:'Летний relaxed',colors:['white','cream','beige','brown','olive','navy','black'],types:['tee','polo','shirt','shorts','chinos','trousers','loafers','sneakers'],fits:['regular','relaxed','wide']},
    winter_layered:{label:'Зимняя многослойность',colors:['charcoal','black','brown','navy','cream','olive','gray'],types:['knit','hoodie','shirt','coat','jacket','overshirt','jeans','trousers','boots'],fits:['regular','relaxed','wide','oversized']}
  };
  const PALETTES=[['black','charcoal','gray','white'],['brown','beige','cream','olive'],['navy','blue','white','gray'],['olive','black','gray','cream'],['brown','charcoal','cream','white'],['beige','white','cream','navy']];
  function normalizeFit(x){let f=String(x.fit||'regular').toLowerCase();return ['oversized','baggy','wide','relaxed','straight','slim','skinny'].find(t=>f.includes(t))||'regular';}
  function itemTags(x){
    let type=x.type,fit=normalizeFit(x);
    return {type,fit,color:x.color||'unknown',group:GROUP[type]||'top',
      volume:['wide','baggy','oversized','relaxed'].includes(fit)?'wide':['slim','skinny'].includes(fit)?'narrow':'regular',
      formality:['blazer','derby'].includes(type)?3:['trousers','loafers','shirt','coat'].includes(type)?2:['polo','knit','chinos','boots'].includes(type)?1:0,
      season:x.season||'all',structured:['jacket','blazer','overshirt','coat'].includes(type)};
  }
  function compatibility(parts,style,weather,occasion){
    const tags=parts.map(itemTags),colors=tags.map(t=>t.color),reasons=[],warnings=[],fired=[];
    let score=32;
    const add=(id,delta,message)=>{score+=delta;fired.push(id);if(message&&delta>0)reasons.push(message);};
    if(colors.every(c=>['black','white','cream','beige','gray','charcoal','navy','brown','olive','blue'].includes(c)))add('C01',8,'Спокойная цветовая гамма связывает вещи.');
    if(PALETTES.some(p=>colors.every(c=>p.includes(c))))add('C02',7,'Оттенки образуют согласованную палитру.');
    if(new Set(colors).size<=3)add('C03',4,'Небольшое количество оттенков сохраняет цельность.');
    const top=tags.find(t=>t.group==='top'),bottom=tags.find(t=>t.group==='bottom'),shoes=tags.find(t=>t.group==='shoes'),layer=tags.find(t=>t.group==='layer');
    if(bottom?.volume==='wide'){
      if(top?.volume!=='wide')add('P01',9,'Собранный верх балансирует свободные брюки.');
      else if(top)add('P02',4,'Свободные силуэты образуют расслабленный комплект.');
      if(layer?.structured)add('P03',5,'Структурный верхний слой поддерживает пропорции.');
    }
    if(bottom&&shoes){
      if(bottom.formality>=2&&shoes.formality>=2)add('F01',8,'Обувь согласована с формальностью брюк.');
      if(bottom.formality<=1&&shoes.formality<=1)add('F02',6,'Повседневный низ и обувь сочетаются по стилю.');
      if(Math.abs(bottom.formality-shoes.formality)>=3)add('F04',-8);
    }
    if(tags.some(t=>t.type==='shirt')&&tags.some(t=>t.type==='knit'))add('L01',5,'Рубашка и трикотаж создают гармоничную многослойность.');
    const mode=STYLE_MODES[style]||STYLE_MODES.casual;
    add('S01',Math.round(tags.filter(t=>mode.types.includes(t.type)).length/tags.length*12));
    add('S02',Math.round(tags.filter(t=>mode.colors.includes(t.color)).length/tags.length*7));
    if(weather==='hot'&&tags.some(t=>['coat','hoodie'].includes(t.type))){add('W01',-28);warnings.push('В жару верхний слой может быть слишком тёплым.');}
    if(weather==='cold'&&!tags.some(t=>['coat','jacket','overshirt','hoodie','knit'].includes(t.type))){add('W02',-18);warnings.push('Для холода желательно добавить утепляющий слой.');}
    if(occasion==='office'&&tags.some(t=>t.type==='shorts'))add('O01',-22);
    if(tags.filter(t=>t.group==='bottom').length!==1||tags.filter(t=>t.group==='shoes').length!==1)add('X01',-30);
    return {score:Math.max(0,Math.min(100,score)),explanations:[...new Set(reasons)].slice(0,3),warnings,rules:fired};
  }
  function preferenceBonus(parts,style){
    let feedback=store.feedback||[],bonus=0;const ids=new Set(parts.map(x=>x.catalogId||x.id));
    for(const v of feedback){let overlap=(v.items||[]).filter(id=>ids.has(id)).length;bonus+=(v.value===1?1:-1)*overlap*2;if(v.style===style)bonus+=(v.value===1?2:-2);}
    return Math.max(-12,Math.min(12,bonus));
  }
  function getStyleMode(){let user=store.profile?.style;return STYLE_MODES[user]?user:'minimal';}
  function partsAreMissing(parts){return parts.some(p=>p.missing);}
  function isBaseUnderlayer(item){
    return ['tee','polo','shirt'].includes(item?.type);
  }
  function requiresBaseUnderlayer(item){
    // Open-front knitwear and zip-up hoodies are never styled directly on bare skin.
    return /кардиган|зип[- ]?худи|на молнии|на пуговицах|расст[её]гива/i.test(item?.name||'');
  }
  function isKnitMidlayer(item){
    return ['knit','hoodie'].includes(item?.type);
  }
  function generateLooks({occasion,weather,ownedOnly=false,limit=5,mix=false,anchorItem=null}){
    const owned=ownItems(),catalog=state.catalog,preferred=getStyleMode();
    const occasionStyles={
      everyday:['casual','minimal','utility','dark_minimal','oldmoney','smart'],
      office:['classic','soft_tailoring','smart','minimal','oldmoney'],
      date:['oldmoney','smart','soft_tailoring','minimal','casual','classic'],
      restaurant:['classic','soft_tailoring','oldmoney','smart','minimal'],
      travel:['casual','utility','minimal','summer_relaxed','dark_minimal']
    };
    const styles=[...(occasionStyles[occasion]||occasionStyles.everyday),preferred].filter((x,i,a)=>a.indexOf(x)===i&&STYLE_MODES[x]).slice(0,6);
    const allowed=(x,group)=>{
      if(weather==='hot')return !['knit','hoodie','coat','jacket','blazer','overshirt','boots'].includes(x.type)&&x.season!=='cold';
      if(weather==='cold')return x.type!=='shorts'&&x.season!=='warm'&&(group!=='layer'||['coat','jacket','overshirt'].includes(x.type));
      return x.type!=='coat'&&x.season!=='cold';
    };
    const pools={};
    for(const group of ['top','bottom','shoes','layer']){
      const own=owned.filter(x=>GROUP[x.type]===group&&allowed(x,group)).map(x=>({...x,missing:false}));
      const ids=new Set(own.map(x=>x.id));
      const suggestions=ownedOnly?[]:catalog.filter(x=>GROUP[x.type]===group&&!ids.has(x.id)&&allowed(x,group)).map(x=>({...x,missing:true}));
      pools[group]=[...own,...suggestions];
      if(anchorItem&&GROUP[anchorItem.type]===group&&!pools[group].some(x=>(x.ownedId||x.id)===(anchorItem.ownedId||anchorItem.id)))pools[group].unshift({...anchorItem,missing:false});
    }
    // Every owned bottom is kept in consideration, irrespective of catalogue ranking.
    const candidates=[],seen=new Set();
    const key=x=>x.ownedId||x.catalogId||x.id;
    const pick=(group,style,limit,pool=pools[group])=>[...pool].sort((a,b)=>
      (anchorItem?Number((b.ownedId||b.id)===(anchorItem.ownedId||anchorItem.id))-Number((a.ownedId||a.id)===(anchorItem.ownedId||anchorItem.id)):0)||
      Number(a.missing)-Number(b.missing)||
      Number(STYLE_MODES[style].types.includes(b.type))-Number(STYLE_MODES[style].types.includes(a.type))||
      Number(STYLE_MODES[style].colors.includes(b.color))-Number(STYLE_MODES[style].colors.includes(a.color))
    ).slice(0,limit);
    for(const style of styles){
      const tops=pick('top',style,ownedOnly?12:12),bottoms=pick('bottom',style,ownedOnly?100:24),shoes=pick('shoes',style,ownedOnly?10:6),layers=pick('layer',style,ownedOnly?12:9);
      // Select base layers and knitwear independently: a wardrobe rich in sweaters
      // must not push every tee or shirt out of the candidate pool.
      const bases=pick('top',style,ownedOnly?10:9,pools.top.filter(isBaseUnderlayer));
      const mids=pick('top',style,ownedOnly?10:9,pools.top.filter(isKnitMidlayer));
      const shells=layers.filter(x=>['coat','jacket','blazer'].includes(x.type));
      const overs=layers.filter(x=>x.type==='overshirt');
      const variants=[];
      for(const base of tops)if(!requiresBaseUnderlayer(base))variants.push([base]);
      for(const base of bases)for(const mid of mids){
        if(key(base)===key(mid))continue;
        // A bulky high collar pairs best with a thin tee, not another shirt collar.
        if(base.type!=='tee'&&/водолазка|с горлом/i.test(mid.name||''))continue;
        variants.push([base,mid]);
      }
      for(const base of bases.slice(0,5))for(const mid of mids.slice(0,5))for(const over of overs.slice(0,2)){
        if(base.type!=='tee'&&/водолазка|с горлом/i.test(mid.name||''))continue;
        variants.push([base,mid,over]);
      }
      variants.sort((a,b)=>{
        const anchored=list=>anchorItem&&list.some(x=>(x.ownedId||x.id)===(anchorItem.ownedId||anchorItem.id));
        const preferred=list=>list.some(isKnitMidlayer)&&list.some(isBaseUnderlayer);
        return Number(anchored(b))-Number(anchored(a))||
          Number(preferred(b))-Number(preferred(a))||
          Number(a.some(x=>x.type==='shirt'))-Number(b.some(x=>x.type==='shirt'))||a.length-b.length;
      });
      // Keep both single-layer and layered outfits in the search, instead of
      // letting the much larger set of layered combinations hide all basics.
      const consideredVariants=[...variants.filter(v=>v.length>1).slice(0,26),...variants.filter(v=>v.length===1).slice(0,12),...variants.filter(v=>v.length>1).slice(26,42)];
      // Include coat over a shirt and knit layer; five pieces total including trousers and shoes.
      const outerOptions=weather==='hot'?[null]:weather==='cold'?shells.filter(x=>['coat','jacket'].includes(x.type)):[null,...shells,...overs];
      if(weather==='cold'&&!outerOptions.length)continue;
      for(const base of consideredVariants)for(const bottom of bottoms)for(const shoe of shoes)for(const outer of outerOptions.slice(0,5)){
        const parts=[...base,bottom,shoe,...(outer?[outer]:[])];
        if(new Set(parts.map(key)).size!==parts.length)continue;
        if(anchorItem&&!parts.some(p=>(p.ownedId||p.id)===(anchorItem.ownedId||anchorItem.id)))continue;
        if(parts.length>6)continue;
        if(base.some(requiresBaseUnderlayer)&&!base.some(isBaseUnderlayer))continue;
        if(ownedOnly&&parts.some(p=>p.missing))continue;
        if(weather==='cold'&&!outer)continue;
        if(weather==='mild'&&!outer&&!base.some(p=>['knit','hoodie'].includes(p.type)))continue;
        const id=parts.map(key).sort().join('|');
        if(seen.has(id))continue;seen.add(id);
        const missing=parts.filter(p=>p.missing),ev=compatibility(parts,style,weather,occasion);
        let score=ev.score+preferenceBonus(parts,style)-missing.length*11;
        if(base.some(isKnitMidlayer)&&base.some(isBaseUnderlayer))score+=base.some(p=>p.type==='knit')?17:7;
        if(base.length===1&&base[0].type==='knit')score-=14;
        if(base.length>1&&base.some(p=>p.type==='shirt')&&base.some(p=>p.type==='knit'&&!['turtleneck','sweater'].includes(p.subtype)))score+=6;
        if(base.length>1&&base.some(p=>p.type==='shirt')&&base.some(p=>['turtleneck','sweater'].includes(p.subtype)))score-=24;
        const formalShoe=['loafers','derby'].includes(shoe.type);
        const tailoredBottom=['trousers','chinos'].includes(bottom.type);
        const relaxedBottom=['jeans','joggers','shorts'].includes(bottom.subtype||bottom.type)||bottom.type==='jeans'||bottom.type==='shorts';
        if(occasion==='office')score+=(tailoredBottom?16:-10)+(formalShoe?11:-7)+(['blazer','coat'].includes(outer?.type)?6:0)+(base.some(p=>p.type==='shirt')?5:0);
        if(occasion==='restaurant')score+=(tailoredBottom?17:-6)+(formalShoe?13:-8)+(['blazer','coat'].includes(outer?.type)?10:0)+(base.some(p=>p.type==='shirt')?7:0);
        if(occasion==='date')score+=(tailoredBottom?8:0)+(formalShoe?5:0)+(base.some(p=>['shirt','polo','knit'].includes(p.type))?8:0)+(base.some(p=>p.type==='hoodie')?-12:0);
        if(occasion==='everyday')score+=(relaxedBottom?10:0)+(shoe.type==='sneakers'?10:0)+(base.length===1?8:0)+(base.some(p=>p.type==='shirt')?-5:0);
        if(occasion==='travel')score+=(relaxedBottom?10:0)+(shoe.type==='sneakers'?13:-5)+(base.some(p=>p.type==='hoodie')?5:0);
        if(outer?.type==='coat'&&bottom.type==='trousers')score+=12;
        if(outer?.type==='coat'&&bottom.type==='jeans'){
          const fit=normalizeFit(bottom);
          if(['wide','relaxed','straight','baggy'].includes(fit))score+=9;
          else if(['slim','skinny'].includes(fit))score-=5;
          else score+=3;
        }
        if(weather==='cold'&&base.some(p=>['knit','hoodie'].includes(p.type)))score+=8;
        if(['office','restaurant'].includes(occasion)&&['classic','smart','soft_tailoring'].includes(style))score+=5;
        if(score<42)continue;
        const explanations=[...ev.explanations];
        if(base.some(p=>p.type==='knit')&&base.some(isBaseUnderlayer))explanations.push('Футболка или рубашка под трикотажем делает комплект удобнее.');
        if(base.some(requiresBaseUnderlayer))explanations.push('Под расстёгивающейся вещью предусмотрен нижний слой.');
        candidates.push({id:'v2_'+candidates.length,title:STYLE_MODES[style].label,style,occasion,weather,parts,missing,
          score:Math.max(0,Math.min(100,score)),reason:ev.explanations.join(' ')||'Сочетание по типу, цвету и силуэту.',
          explanations,warnings:ev.warnings,rules:ev.rules,identity:id});
      }
    }
    candidates.sort((a,b)=>b.score-a.score||a.missing.length-b.missing.length);
    // Diversify bottoms and silhouettes; for Explore mix ready and shopping looks.
    const selected=[],used=new Map(),usedLooks=new Set();
    const selectFrom=(pool,count)=>{
      for(let n=0;n<count;n++){
        let best=null,bestRank=-Infinity;
        for(const look of pool.slice(0,6500)){
          if(usedLooks.has(look.identity))continue;
          const bottom=look.parts.find(p=>GROUP[p.type]==='bottom');
          const bottomId=key(bottom),repeat=used.get(bottomId)||0;
          const overlap=selected.reduce((max,l)=>Math.max(max,look.parts.filter(p=>l.parts.some(z=>key(z)===key(p))).length),0);
          const usedShirts=selected.filter(l=>l.parts.some(p=>p.type==='shirt')).length;
          const rank=look.score-repeat*24-overlap*5+(bottom.type==='trousers'?3:0)-
            (look.parts.some(p=>p.type==='shirt')?usedShirts*9:0);
          if(rank>bestRank){bestRank=rank;best=look;}
        }
        if(!best)break;
        selected.push(best);usedLooks.add(best.identity);
        const bottom=best.parts.find(p=>GROUP[p.type]==='bottom'),id=key(bottom);
        used.set(id,(used.get(id)||0)+1);
      }
    };
    if(mix&&!ownedOnly){
      const ready=candidates.filter(l=>l.missing.length===0);
      const shopping=candidates.filter(l=>l.missing.length>0);
      selectFrom(ready,Math.ceil(limit/2));
      selectFrom(shopping,Math.floor(limit/2));
      if(selected.length<limit)selectFrom(candidates,limit-selected.length);
    }else selectFrom(candidates,limit);
    return selected;
  }

  function weatherMode(temp,wind,low=temp,rain=0){return temp<=15||low<=10||(wind>=30&&temp<=18)||(rain>=4&&temp<=17)?'cold':temp>=23&&low>=17?'hot':'mild';}
  async function updateForecast(){
    if(!store.city||!Number.isFinite(store.city.lat))return;
    const day=dayKey();if(store.forecast?.day===day)return;
    try{
      const url='https://api.open-meteo.com/v1/forecast?latitude='+encodeURIComponent(store.city.lat)+'&longitude='+encodeURIComponent(store.city.lon)+'&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&timezone=auto&forecast_days=3';
      const res=await fetch(url);if(!res.ok)throw Error('weather unavailable');const j=await res.json(),i=0;
      const high=j.daily.temperature_2m_max[i],low=j.daily.temperature_2m_min[i],wind=j.daily.wind_speed_10m_max[i],rain=j.daily.precipitation_sum[i];
      const mode=weatherMode((high+low)/2,wind,low,rain);
      store.forecast={day,high,low,wind,rain,mode,source:'Open-Meteo',tomorrow:j.daily.time[1],tomorrowHigh:j.daily.temperature_2m_max[1],tomorrowLow:j.daily.temperature_2m_min[1]};
      state.filters.outfitWeather=mode;saveStore();renderScreens();
    }catch(e){toast('Прогноз недоступен — выбери погоду вручную');}
  }
  let cityTimer,cityController,cityResults=[];
  function onCityInput(value){clearTimeout(cityTimer);cityTimer=setTimeout(()=>searchCities(value),250);}
  async function searchCities(value){
    const root=document.getElementById('citySuggestions');if(!root)return;
    if(value.trim().length<2){cityResults=[];root.innerHTML='';return;}
    cityController?.abort();cityController=new AbortController();root.innerHTML='<div class="helper" style="padding:12px">Ищем города…</div>';
    try{
      const res=await fetch('https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(value.trim())+'&count=7&language=ru',{signal:cityController.signal});
      if(!res.ok)throw Error('search failed');const result=await res.json();cityResults=result.results||[];
      root.innerHTML=cityResults.length?cityResults.map((c,i)=>'<button class="citySuggestion" onclick="window.appAction(&quot;chooseCity&quot;,'+i+')">'+escapeHtml(c.name)+(c.admin1&&c.admin1!==c.name?' · '+escapeHtml(c.admin1):'')+'<small>'+escapeHtml(c.country||'')+'</small></button>').join(''):'<div class="helper" style="padding:12px">Город не найден</div>';
    }catch(e){if(e.name!=='AbortError')root.innerHTML='<div class="helper" style="padding:12px">Поиск временно недоступен</div>';}
  }
  function chooseCity(index){
    const city=cityResults[index];if(!city)return;
    store.city={label:city.name,country:city.country,lat:city.latitude,lon:city.longitude};
    store.forecast=null;saveStore();closeSheet();renderHome();updateForecast();
  }
  async function setCityManual(){
    const name=document.getElementById('citySearch')?.value.trim();if(!name)return;
    try{
      const res=await fetch('https://geocoding-api.open-meteo.com/v1/search?name='+encodeURIComponent(name)+'&count=1&language=ru');
      const data=await res.json(),city=data.results?.[0];if(!city){toast('Город не найден');return;}
      store.city={label:city.name,country:city.country,lat:city.latitude,lon:city.longitude};
      store.forecast=null;saveStore();closeSheet();updateForecast();renderHome();
    }catch(e){toast('Не удалось найти город');}
  }
  let gpsCityLookupKey='';
  async function resolveGpsCity(lat,lon){
    const valid=(v)=>typeof v==='string'&&v.trim()&&v!=='Моё местоположение';
    try{
      const response=await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+encodeURIComponent(lat)+'&longitude='+encodeURIComponent(lon)+'&localityLanguage=ru');
      if(response.ok){
        const data=await response.json();
        const label=[data.city,data.locality,data.principalSubdivision].find(valid);
        if(label)return label;
      }
    }catch(e){}
    try{
      const response=await fetch('https://nominatim.openstreetmap.org/reverse?format=json&zoom=10&accept-language=ru&lat='+encodeURIComponent(lat)+'&lon='+encodeURIComponent(lon));
      if(response.ok){
        const data=await response.json(),a=data.address||{};
        const label=[a.city,a.town,a.village,a.municipality,a.county,a.state].find(valid);
        if(label)return label;
      }
    }catch(e){}
    return null;
  }
  async function updateGpsCityName(lat,lon){
    const key=lat+','+lon;
    if(gpsCityLookupKey===key)return;
    gpsCityLookupKey=key;
    const label=await resolveGpsCity(lat,lon);
    if(!store.city||store.city.lat!==lat||store.city.lon!==lon)return;
    store.city.label=label||'Город не определён';
    saveStore();
    renderHome();
    if(!label)toast('Не удалось определить название города. Выбери город вручную.');
  }
  function setCityGps(){
    if(!navigator.geolocation){toast('Геолокация не поддерживается');return;}
    navigator.geolocation.getCurrentPosition(position=>{
      const lat=position.coords.latitude,lon=position.coords.longitude;
      gpsCityLookupKey='';
      store.city={label:'Определяем город…',lat,lon};
      store.forecast=null;saveStore();closeSheet();updateForecast();renderHome();
      updateGpsCityName(lat,lon);
    },()=>toast('Геолокация не разрешена — выбери город вручную'),{enableHighAccuracy:false,timeout:12000});
  }
  function dayKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
  function dailyData(){
    const key=dayKey()+'-'+(store.forecast?.day===dayKey()?store.forecast.mode:state.filters.outfitWeather);
    const wardrobeSignature=store.wardrobe.map(x=>x.ownedId||x.id).sort().join('|');
    if(!store.daily||store.daily.key!==key||store.daily.wardrobeSignature!==wardrobeSignature||!Array.isArray(store.daily.candidates)||store.daily.candidates.some(l=>l.missing?.length||!l.parts?.every(p=>store.wardrobe.some(w=>(w.ownedId||w.id)===(p.ownedId||p.id))))){
      store.daily={key,wardrobeSignature,selected:null,index:0,votes:{},candidates:dailyLooks().map(l=>({...l}))};
      saveStore();
    }
    return store.daily;
  }
  function dailyOptions(){return dailyData().candidates;}
  function chosenDaily(){const d=store.daily;return d&&d.key===dayKey()+'-'+(store.forecast?.day===dayKey()?store.forecast.mode:state.filters.outfitWeather)&&d.wardrobeSignature===store.wardrobe.map(x=>x.ownedId||x.id).sort().join('|')?d.candidates.find(l=>l.identity===d.selected):null;}
  function dailyVote(value){
    const d=dailyData(),l=dailyOptions()[d.index];if(!l)return;
    d.votes[l.identity]=value;d.index++;
    store.feedback.push({items:l.parts.map(p=>p.catalogId||p.id),style:l.style,value:value==='like'?1:-1});
    store.feedback=store.feedback.slice(-150);saveStore();renderSheet();
  }
  function dailyChoose(key){
    const d=dailyData();if(!dailyOptions().some(l=>l.identity===key))return;
    d.selected=key;saveStore();closeSheet();renderHome();toast('Образ дня выбран');
  }
  function animateDailyVote(value){
    const card=document.getElementById('dailySwipe');
    if(!card||card.dataset.leaving==='yes')return;
    card.dataset.leaving='yes';
    card.classList.remove('dailyDragging');
    const direction=value==='like'?1:-1;
    const left=card.querySelector('.dailySwipeNo'),right=card.querySelector('.dailySwipeYes');
    if(left)left.style.opacity=direction<0?'1':'0';
    if(right)right.style.opacity=direction>0?'1':'0';
    card.style.transition='transform 350ms cubic-bezier(.2,.76,.2,1),opacity 350ms ease';
    card.style.transform='translate3d('+(direction*120)+'vw,0,0) rotate('+(direction*14)+'deg)';
    card.style.opacity='0';
    document.querySelectorAll('.dailyVoteActions button').forEach(b=>b.disabled=true);
    window.setTimeout(()=>dailyVote(value),355);
  }
  function initDailySwipe(){
    const card=document.getElementById('dailySwipe');if(!card)return;
    let startX=0,startY=0,lastX=0,active=false,dragging=false,axis=null;
    let pointerId=null;
    function begin(x,y){
      if(card.dataset.leaving==='yes')return;
      startX=lastX=x;startY=y;active=true;dragging=false;axis=null;
      card.style.transition='none';card.style.opacity='1';
    }
    function move(x,y){
      if(!active||card.dataset.leaving==='yes')return false;
      const dx=x-startX,dy=y-startY;
      if(!axis&&Math.max(Math.abs(dx),Math.abs(dy))>6)axis=Math.abs(dx)>Math.abs(dy)*1.05?'horizontal':'vertical';
      if(axis!=='horizontal')return false;
      dragging=true;lastX=x;
      const angle=Math.max(-12,Math.min(12,dx*.065));
      card.classList.add('dailyDragging');
      card.style.transform='translate3d('+dx+'px,0,0) rotate('+angle+'deg)';
      const left=card.querySelector('.dailySwipeNo'),right=card.querySelector('.dailySwipeYes');
      if(left)left.style.opacity=String(Math.min(1,Math.max(0,-dx/70)));
      if(right)right.style.opacity=String(Math.min(1,Math.max(0,dx/70)));
      return true;
    }
    function finish(x){
      if(!active)return;active=false;
      const dx=(typeof x==='number'?x:lastX)-startX;
      if(dragging&&Math.abs(dx)>=72){animateDailyVote(dx>0?'like':'dislike');return;}
      card.classList.remove('dailyDragging');
      card.style.transition='transform 280ms cubic-bezier(.2,.75,.2,1)';
      card.style.transform='translate3d(0,0,0) rotate(0deg)';
      for(const badge of card.querySelectorAll('.dailySwipeNo,.dailySwipeYes'))badge.style.opacity='0';
      dragging=false;axis=null;
    }
    // Explicit Touch Events prevent the iOS Safari scroll container swallowing horizontal drags.
    card.addEventListener('touchstart',e=>{
      if(e.touches.length!==1)return;
      begin(e.touches[0].clientX,e.touches[0].clientY);
    },{passive:true});
    card.addEventListener('touchmove',e=>{
      if(e.touches.length!==1||!active)return;
      if(move(e.touches[0].clientX,e.touches[0].clientY)&&e.cancelable)e.preventDefault();
    },{passive:false});
    card.addEventListener('touchend',e=>{finish(e.changedTouches[0]?.clientX);},{passive:true});
    card.addEventListener('touchcancel',()=>finish(lastX),{passive:true});
    // Mouse and stylus support use Pointer Events without duplicating touch gestures.
    card.addEventListener('pointerdown',e=>{
      if(e.pointerType==='touch'||(e.button!==0&&e.pointerType!=='pen'))return;
      pointerId=e.pointerId;begin(e.clientX,e.clientY);
      if(card.setPointerCapture)card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove',e=>{
      if(e.pointerType==='touch'||pointerId!==e.pointerId)return;
      move(e.clientX,e.clientY);
    });
    card.addEventListener('pointerup',e=>{
      if(e.pointerType==='touch'||pointerId!==e.pointerId)return;
      pointerId=null;finish(e.clientX);
    });
    card.addEventListener('pointercancel',e=>{
      if(e.pointerType==='touch'||pointerId!==e.pointerId)return;
      pointerId=null;finish(lastX);
    });
  }
    function todayLooks(){ return generateLooks({occasion:state.filters.outfitOccasion, weather:state.filters.outfitWeather,ownedOnly:state.filters.ownedOnly,limit:10,mix:true}); }

  function anchorWeather(item){
    const current=store.forecast?.day===dayKey()?store.forecast.mode:'mild';
    if(item.type==='shorts'||item.season==='warm')return 'hot';
    if(['coat','boots'].includes(item.type)||item.season==='cold')return 'cold';
    if(['knit','hoodie','jacket','blazer','overshirt'].includes(item.type)&&current==='hot')return 'mild';
    return current;
  }
  function createAnchorLooks(item){
    return generateLooks({
      occasion:state.filters.outfitOccasion,
      weather:state.filters.outfitWeather,
      ownedOnly:state.filters.ownedOnly,
      anchorItem:item,
      limit:10,
      mix:true
    }).map((look,index)=>({...look,id:'anchored_'+(item.ownedId||item.id)+'_'+state.filters.outfitOccasion+'_'+state.filters.outfitWeather+'_'+index,anchorSource:true}));
  }
  function activeAnchorItem(){
    return store.wardrobe.find(item=>(item.ownedId||item.id)===state.anchorItemId);
  }
  function refreshAnchorLooks(){
    const item=activeAnchorItem();
    state.anchorLooks=item?createAnchorLooks(item):[];
  }
  function filterAnchorPicker(){
    const list=document.getElementById('anchorPickerList');
    if(!list)return;
    const category=state.anchorCategory||'all',query=(state.anchorQuery||'').trim().toLowerCase();
    const selected=state.anchorItemId;
    const matches=store.wardrobe.filter(item=>
      (category==='all'||GROUP[item.type]===category||item.type===category)&&
      (!query||[item.name,item.brand,item.sku,itemTypeLabel(item),COLORS[item.color]?.[0]].join(' ').toLowerCase().includes(query))
    );
    list.innerHTML=matches.map(item=>{
      const id=item.ownedId||item.id;
      const chosen=id===selected;
      return `<button type='button' class='anchorPickerItem ${chosen?'selected':''}' aria-pressed='${chosen}' onclick='window.appAction("chooseAnchor",${JSON.stringify(id)})'><img src='${productImage(item)}' alt=''><span><strong>${escapeHtml(itemTypeLabel(item))}</strong><small>${escapeHtml(item.name)}</small></span><span aria-hidden='true' class='anchorPickerCheck'>${chosen?'✓':'○'}</span></button>`;
    }).join('')||'<p class="anchorPickerNoResults">По этому запросу вещей нет.</p>';
    document.querySelectorAll('#anchorPickerCategories button').forEach(button=>button.classList.toggle('selected',button.dataset.category===category));
    const submit=document.getElementById('anchorPickerSubmit');
    if(submit)submit.disabled=!activeAnchorItem();
  }
  function dailyLooks(){return generateLooks({occasion:'everyday',weather:store.forecast?.day===dayKey()?store.forecast.mode:state.filters.outfitWeather,ownedOnly:true}).filter(l=>l.missing.length===0&&l.parts.every(p=>store.wardrobe.some(w=>(w.ownedId||w.id)===(p.ownedId||p.id))));}
  function lookPhoto(look,index=0){
    const options=lookPhotos[look.occasion]||[stylePhotos[look.style]||stylePhotos.casual];
    return options[index%options.length];
  }
  function openSheet(kind,payload){ state.sheet={kind,payload}; renderSheet(); }
  function closeSheet(){ state.sheet=null; document.getElementById('sheetBackdrop').classList.remove('show'); document.getElementById('sheet').classList.remove('show'); }
  document.getElementById('sheetBackdrop').onclick=closeSheet;
  function outfitFiltersMarkup(){
 const occ=state.filters.outfitOccasion,weather=state.filters.outfitWeather;
 return `<div class='sheetHandle'></div><div class='lookbookFilterSheet'><div class='lookbookOverline'>STYLE OS / НАСТРОЙКИ</div><h2>Подбор образов</h2><p>Укажи повод и погоду — образы подстроятся под твой день.</p>
 <div class='lookbookFilterGroup'><strong>Повод</strong><div class='lookbookFilterChoices'>${[['everyday','Повседневность'],['office','Офис'],['date','Свидание'],['restaurant','Ужин'],['travel','Поездка']].map(([k,v])=>`<button type='button' class='${occ===k?'selected':''}' aria-pressed='${occ===k}' onclick='window.appAction("outfitFilterOccasion","${k}")'>${v}</button>`).join('')}</div></div>
 <div class='lookbookFilterGroup'><strong>Погода</strong><div class='lookbookFilterChoices'>${[['hot','Тепло'],['mild','Прохладно'],['cold','Холодно']].map(([k,v])=>`<button type='button' class='${weather===k?'selected':''}' aria-pressed='${weather===k}' onclick='window.appAction("outfitFilterWeather","${k}")'>${v}</button>`).join('')}</div></div>
 <label class='lookbookFilterOwned'><span><strong>Только мой гардероб</strong><small>Без вещей, которые нужно докупить</small></span><input type='checkbox' ${state.filters.ownedOnly?'checked':''} onchange='window.appAction("outfitFilterOwned",this.checked?"true":"false")'></label>
 <button type='button' class='lookbookOpen' onclick='window.appAction("closeSheet")'>Показать образы →</button></div>`;
}
  function renderSheet(){
    const sheet=document.getElementById('sheet');
    if(!state.sheet){ sheet.className='sheet'; sheet.innerHTML=''; return; }
    const {kind,payload}=state.sheet;
    let html='';


    if(kind==='outfitFilters'){html=outfitFiltersMarkup();}
    if(kind==='city'){
      html=`<div class='sheetHandle'></div><div class='sheetSection'><h2 class='sheetTitle'>Город и погода</h2><p class='helper'>Начни вводить название города и выбери его из подсказок. Прогноз берётся из Open-Meteo.</p><div style='display:flex;gap:7px;margin-top:16px'><input id='citySearch' oninput='window.appAction("cityInput",this.value)' placeholder='Например, Санкт-Петербург' style='min-width:0;flex:1;padding:10px;border:1px solid #ddd;border-radius:10px'><button class='btn dark small' onclick='window.appAction("setCityManual")'>Найти</button></div><div id='citySuggestions' class='citySuggestions' role='listbox'></div><button class='btn line' style='width:100%;margin-top:10px' onclick='window.appAction("setCityGps")'>Определить местоположение</button></div>`;
    }
    if(kind==='daily'){
      const d=dailyData(),looks=dailyOptions(),current=d.selected?null:looks[d.index];
      const noCandidates=looks.length===0;
      const likes=looks.filter(l=>d.votes[l.identity]==='like');
      const options=d.selected?looks:(likes.length?likes:looks);
      const next=looks[d.index+1];
      const progress=looks.map((_,idx)=>`<i class='${idx<=d.index?'filled':''}'></i>`).join('');
      html=`<div class='dailyEditorialScreen'>
        <header class='dailyEditorialHeader'><div class='dailyEditorialOverline'>STYLE OS / DAILY</div><h2>${current?'Твой образ на сегодня':'Твой выбор на сегодня'}</h2><div class='dailyEditorialProgress'><span>${current?String(d.index+1).padStart(2,'0'):'✓'} <em>из ${String(looks.length).padStart(2,'0')}</em></span><div class='dailyEditorialBars'>${progress}</div></div></header>
        ${current?`<div class='dailySwipeStage'>
          ${next?`<div class='dailySwipeUnder' aria-hidden='true'><div class='dailyEditorialPicture' style='background-image:linear-gradient(180deg,transparent 67%,rgba(16,18,16,.15)),url("${lookPhoto(next,d.index+1)}")'></div><div class='dailyEditorialUnderText'>${escapeHtml(next.title)}</div></div>`:''}
          <div id='dailySwipe' class='dailySwipeCard dailyEditorialCard'>
            <span class='dailySwipeNo dailyEditorialReaction'>НЕ НРАВИТСЯ</span><span class='dailySwipeYes dailyEditorialReaction'>♡ НРАВИТСЯ</span>
            <div class='dailyEditorialPicture' style='background-image:linear-gradient(180deg,rgba(15,18,16,.06),transparent 40%,rgba(15,18,16,.07)),url("${lookPhoto(current,d.index)}")'><span class='dailyEditorialCategory'>${escapeHtml(getOccLabel(current.occasion))}</span></div>
            <div class='dailyEditorialInfo'><h3>${escapeHtml(current.title)}</h3><p>Вещей в образе: ${current.parts.length}</p><div class='dailyEditorialItems'>${current.parts.map(p=>`<div class='dailyEditorialPiece'><img src='${productImage(p)}' alt='${escapeHtml(itemTypeLabel(p))}' loading='lazy'></div>`).join('')}</div><div class='dailyEditorialFoot'><span>✓ Вещи уже есть</span><span>·</span><span>Подходит под погоду</span></div></div>
          </div>
        </div>
        <div class='dailyEditorialVoteActions dailyVoteActions'><button type='button' class='dailyEditorialVoteNo' onclick='window.appAction("dailyVote","dislike")' aria-label='Не нравится'><span>×</span><small>Не нравится</small></button><div class='dailyEditorialSwipeHint'>‹ &nbsp; Свайпай влево<br>или вправо &nbsp; ›</div><button type='button' class='dailyEditorialVoteYes' onclick='window.appAction("dailyVote","like")' aria-label='Нравится'><span>♡</span><small>Нравится</small></button></div>`:
        `<div class='dailyEditorialFinal'><p>${noCandidates?'В гардеробе пока нет полного комплекта для этой погоды. Добавь подходящие вещи.':likes.length?'Выбери один из понравившихся образов.':'Ты просмотрел все варианты. Можно выбрать любой из них.'}</p><div class='dailyEditorialFinalList'>${options.map((look,index)=>`<article class='dailyEditorialFinalRow'><button type='button' class='dailyEditorialFinalPreview' onclick='window.appAction("dailyPreview","${look.identity}")'><img src='${lookPhoto(look,index)}' alt='' loading='lazy'><span><strong>${escapeHtml(look.title)}</strong><small>${look.parts.length} вещи · Просмотреть</small></span></button><button type='button' class='dailyEditorialFinalChoose' onclick='window.appAction("dailyChoose","${look.identity}")'>Выбрать</button></article>`).join('')}</div></div>`}
        <div class='dailyEditorialExtra'><button type='button' onclick='window.appAction("dailyOutfits")'>Перейти к образам</button><button type='button' onclick='window.appAction("dailyReset")'>Начать заново</button></div>
      </div>`;
    }
    if(kind==='dailyPreview'){
      const l=payload;
      html=`<div class='sheetHandle'></div><div class='sheetSection'><div class='subtle'>STYLE OS / ПРЕДПРОСМОТР</div><h2 class='sheetTitle'>${l.title}</h2><p class='helper'>${l.reason}</p></div><div class='dailyPieces dailyPreviewPieces'>${l.parts.map(p=>`<div><img src='${productImage(p)}' alt='${itemTypeLabel(p)}'><small>${itemTypeLabel(p)}${p.missing?' · докупить':''}</small></div>`).join('')}</div><div class='sheetSection' style='display:flex;gap:8px'><button class='btn line' onclick='window.appAction("dailyBack")'>Назад</button><button class='btn dark' onclick='window.appAction("dailyChoose","${l.identity}")'>Выбрать этот образ</button></div>`;
    }

    if(kind==='anchorPicker'){
      const selected=activeAnchorItem();
      const categories=[['all','Все'],['top','Верх'],['bottom','Низ'],['shoes','Обувь'],['layer','Верхняя одежда']];
      html=`<div class='sheetHandle'></div><div class='anchorPickerSheet'><h2 class='sheetTitle'>Выбрать вещь</h2><p class='sheetSub'>Выбери одну вещь из гардероба — она будет в каждом из 10 образов.</p>
        <label class='anchorPickerSearch'><span aria-hidden='true'>⌕</span><input type='search' id='anchorPickerSearch' placeholder='Название, цвет или категория' value='${escapeHtml(state.anchorQuery||'')}' oninput='window.appAction("anchorQuery",this.value)' autocomplete='off' aria-label='Найти вещь'></label>
        <div class='anchorPickerCategories' id='anchorPickerCategories'>${categories.map(([key,label])=>`<button type='button' data-category='${key}' class='${(state.anchorCategory||'all')===key?'selected':''}' onclick='window.appAction("anchorCategory","${key}")'>${label}</button>`).join('')}</div>
        <div class='anchorPickerList' id='anchorPickerList'></div>
        ${!store.wardrobe.length?`<div class='empty'>В гардеробе пока нет вещей. Сначала добавь вещь.</div>`:''}
        <div class='sheetFooter'><button class='btn line' onclick='window.appAction("switchTab","wardrobe")'>Гардероб</button><button id='anchorPickerSubmit' class='btn dark' ${selected?'':'disabled'} onclick='window.appAction("generateAnchorLooks")'>Подобрать образы</button></div></div>`;
    }
    if(kind==='anchorResults'){
      const looks=state.anchorLooks||[],chosen=store.wardrobe.find(x=>x.ownedId===state.anchorItemId);
      html=`<div class='sheetHandle'></div><h2 class='sheetTitle'>Образы с выбранной вещью</h2>
        <p class='sheetSub'>${escapeHtml(chosen?.name||'Твоя вещь')} · ${looks.length} вариантов</p>
        <div style='display:grid;gap:12px;margin:16px 0'>${looks.map((look,index)=>`<article class='outfitCard'><div class='outfitFlatlay'><div class='outfitFlatlayGrid'>${look.parts.map(item=>`<div class='outfitFlatlayItem'><img src='${productImage(item)}' alt=''><span>${escapeHtml(itemTypeLabel(item)||'Вещь')}${item.missing?' · докупить':''}</span></div>`).join('')}</div></div><div class='outfitIntro'><span class='subtle'>Вариант ${index+1}</span><h3>${escapeHtml(look.title)}</h3><p>${escapeHtml(look.reason)}</p></div><div class='outfitBody'><div class='heroCaption'><span class='${look.missing.length?'stateNeed':'stateGood'}'>${look.missing.length?'Докупить: '+look.missing.length:'Полный комплект'}</span><button class='btn dark small' onclick='window.appAction("openAnchorLook",${index})'>Открыть</button></div></div></article>`).join('')}</div>
        <div class='sheetFooter'><button class='btn line' onclick='window.appAction("openAnchorPicker")'>Другая вещь</button><button class='btn dark' onclick='window.appAction("generateAnchorLooks")'>Обновить подборку</button></div>`;
    }
    if(kind==='item'){
      const item=payload;
      html=`<div class='sheetHandle'></div><div class='itemVisual' style='height:${GROUP[item.type]==='shoes'?290:270}px;border-radius:24px;overflow:hidden'><img alt='' src='${productImage(item,true)}' decoding='async' style='width:100%;height:100%;object-fit:contain;object-position:center center;transform:translateY(${GROUP[item.type]==='shoes'?-14:-5}px) scale(${GROUP[item.type]==='shoes'?1.02:.96});transform-origin:center center'></div><div class='itemInfoGlass'><div class='sheetSection'><h2 class='sheetTitle'>${item.brand ? item.brand+' — ' : ''}${item.name}</h2><p class='sheetSub'>${itemTypeLabel(item)} · ${COLORS[item.color][0]} · ${item.fit||'regular'}</p></div>
      <div class='list'>
        <div class='listRow'><span>Категория</span><strong>${itemTypeLabel(item)}</strong></div>
        <div class='listRow'><span>Цвет</span><strong>${COLORS[item.color][0]}</strong></div>
        <div class='listRow'><span>Материал</span><strong>${item.material || 'Не указан'}</strong></div>
        <div class='listRow'><span>Артикул</span><strong>${item.sku || '—'}</strong></div>
      </div></div>
      <div class='sheetFooter'>
        <button class='btn line' onclick='window.appAction("removeOrCopy","${item.ownedId||item.id}")'>${item.ownedId ? 'Удалить' : 'Копировать артикул'}</button>
        <button class='btn dark' onclick='window.appAction("buildFromItem","${item.ownedId||item.id}")'>Собрать образ</button>
      </div>`;
    }
    if(kind==='product'){
      const p=payload;
      html=`<div class='sheetHandle'></div><div class='itemVisual' style='height:${GROUP[p.type]==='shoes'?290:270}px;border-radius:24px;overflow:hidden'><img alt='' src='${productImage(p,true)}' decoding='async' style='width:100%;height:100%;object-fit:contain;object-position:center center;transform:translateY(${GROUP[p.type]==='shoes'?-14:-5}px) scale(${GROUP[p.type]==='shoes'?1.02:.96});transform-origin:center center'></div><div class='itemInfoGlass'><div class='sheetSection'><h2 class='sheetTitle'>${p.brand} — ${p.name}</h2><p class='sheetSub'>${itemTypeLabel(p)} · ${COLORS[p.color][0]} · ${formatPrice(p.price)}</p></div>
      <div class='list'>
        <div class='listRow'><span>Посадка</span><strong>${p.fit || 'regular'}</strong></div>
        <div class='listRow'><span>Сезон</span><strong>${p.season === 'all' ? 'Всесезонная' : p.season === 'cold' ? 'Холодный сезон' : 'Тёплый сезон'}</strong></div>
        <div class='listRow'><span>Материал</span><strong>${p.material || 'Не указан'}</strong></div>
        <div class='listRow'><span>Артикул Lamoda</span><strong>${p.sku || '—'}</strong></div>
      </div></div>
      <div class='sheetFooter'>
        <button class='btn line' onclick='window.appAction("copySku","${p.id}")'>Копировать артикул</button>
        <button class='btn dark' onclick='window.appAction("addFromCatalog","${p.id}")'>Добавить в гардероб</button>
      </div>
      <div class='section' style='padding:0 2px 8px'><button class='btn primary' style='width:100%' onclick='window.open("${p.url}","_blank")'>Открыть на Lamoda</button></div>`;
    }
    if(kind==='look'){
      const look=payload;
      const isDailySelection=chosenDaily()?.identity===look.identity;
      const missing=look.missing.length;
      const count=look.parts.length;
      const owned=count-missing;
      const reason=escapeHtml((look.explanations||[look.reason]).join(' ').replace(/\\s+/g,' ').slice(0,190));
      const title=escapeHtml(outfitDisplayTitle(look));
      html=`<div class='sheetHandle'></div>
        ${look.anchorSource?`<div class='lookDetailBack'><button type='button' onclick='window.appAction("backToAnchorPage")'>← К образам</button></div>`:''}
        <div class='lookDetailHero' style='background-image:linear-gradient(0deg,rgba(10,14,10,.68),transparent 65%),url("${lookPhoto(look)}")'>
          <div class='lookDetailHeroCopy'><span class='lookDetailOccasion'>${escapeHtml(getOccLabel(look.occasion))}</span><h2>${title}</h2></div>
        </div>
        <section class='lookDetailBody'>
          <h3>Почему сочетается</h3>
          <p class='lookDetailReason'>${reason}</p>
          ${(look.warnings||[]).length?`<p class='lookDetailWarning'>${escapeHtml(look.warnings.join(' '))}</p>`:''}
          <div class='lookDetailProducts' style='--look-cols:${Math.min(4,count)}'>
            ${look.parts.map((p,i)=>`<button type='button' class='lookDetailProduct' aria-label='${escapeHtml(itemTypeLabel(p))}. ${p.missing?'Нужно докупить':'Есть в гардеробе'}. Открыть карточку вещи' onclick='window.appAction("openLookPart",${i})'>
              <span class='lookDetailProductPhoto'><img src='${productImage(p)}' alt='${escapeHtml(itemTypeLabel(p))}' loading='lazy'><span class='lookDetailStatus ${p.missing?'need':'owned'}' aria-hidden='true'><span>${p.missing?'−':'✓'}</span></span></span>
              <strong>${escapeHtml(itemTypeLabel(p))}</strong>
              <small>${escapeHtml(COLORS[p.color]?.[0]||p.name||'')}</small>
            </button>`).join('')}
          </div>
          <div class='lookDetailInventory'><div class='lookDetailInventoryHead'><span class='lookDetailInventoryIcon' aria-hidden='true'>${missing?'−':'✓'}</span><span>${missing?`${owned} ${owned===1?'вещь':owned>=2&&owned<=4?'вещи':'вещей'} в гардеробе · ${missing} докупить`:'Все вещи есть в гардеробе'}</span></div><div class='lookDetailTrack' role='progressbar' aria-valuemin='0' aria-valuemax='${count}' aria-valuenow='${owned}' aria-label='Вещи в гардеробе'><span style='width:${count?Math.round(owned/count*100):0}%'></span></div></div>
          <div class='lookDetailRating' aria-label='Оценить рекомендацию'><span>Подходит тебе?</span><button type='button' onclick='window.appAction("rateLook","like")'>Да</button><button type='button' onclick='window.appAction("rateLook","dislike")'>Нет</button></div>
        </section>
        <div class='lookDetailActions'><button type='button' class='lookDetailSave' onclick='window.appAction("saveLook","${look.id}")'>Сохранить образ</button><button type='button' class='lookDetailShop' onclick='window.appAction("${isDailySelection?'rechooseDaily':'shoppingFromLook'}"${isDailySelection?'':',"'+look.id+'"'})'>${isDailySelection?'Выбрать образ заново':'Что докупить'}</button></div>`;
    }
    if(kind==='addItem'){
      const q=(state.addQuery||'').toLowerCase().trim(), cat=state.addCategory||'all';
      const items=state.catalog.filter(p=>(cat==='all'||GROUP[p.type]===cat) &&
        (!q||[p.brand,p.name,p.sku,itemTypeLabel(p),TYPES[p.type],COLORS[p.color]?.[0]].join(' ').toLowerCase().includes(q)));
      html=`<div class='sheetHandle'></div><h2 class='sheetTitle'>Добавить вещь</h2>
        <p class='sheetSub'>Все ${state.catalog.length} товаров Lamoda. Поиск по названию, бренду, цвету или артикулу.</p>
        <div class='search'><span>⌕</span><input id='addSearch' value='${(state.addQuery||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;')}' placeholder='Найти вещь' oninput='window.appAction("addSearch",this.value)'></div>
        <div class='chips' style='margin:12px 0'>${[['all','Все'],['top','Верх'],['bottom','Низ'],['shoes','Обувь'],['layer','Слои']].map(([k,v])=>`<button class='chip ${cat===k?'active':''}' onclick='window.appAction("addCategory","${k}")'>${v}</button>`).join('')}</div>
        <div class='helper' style='margin-bottom:8px'>Найдено: ${items.length}</div>
        <div class='grid2'>${items.map(p=>`<article class='itemCard catalogProductCard' onclick='window.appAction("addFromCatalog","${p.id}")'><div class='itemVisual catalogProductVisual'><img alt='${escapeHtml(p.name)}' src='${productImage(p)}' loading='lazy' decoding='async'></div><div class='itemBody catalogProductBody'><div class='catalogProductEyebrow'>${escapeHtml(p.brand||'STYLE OS')}</div><div class='catalogProductName'>${escapeHtml(p.name)}</div><div class='catalogProductFoot'><span class='catalogProductColor'><i style='background:${colorHex(p.color)}'></i>${escapeHtml(COLORS[p.color]?.[0]||'Цвет не указан')}</span></div></div></article>`).join('')}</div>
        <div class='sheetFooter'><button class='btn line' onclick='window.appAction("manualForm")'>Добавить вручную</button><button class='btn dark' onclick='window.appAction("switchTab","catalog")'>Каталог</button></div>`;
    }
    if(kind==='editProfile'){
      const p=store.profile;
      html=`<div class='sheetHandle'></div><h2 class='sheetTitle'>Мои настройки</h2><p class='sheetSub'>Размеры, эстетика и бюджет помогают сделать подбор точнее.</p><div class='fields'>
        <div class='field'><label>Имя</label><input id='profileName' value='${p.name||''}'></div>
        <div class='field'><label>Стиль</label><select id='profileStyle'>${[['minimal','Минимализм'],['dark_minimal','Тёмный минимализм'],['smart','Smart casual'],['classic','Современная классика'],['oldmoney','Old money'],['utility','Workwear'],['soft_tailoring','Soft tailoring'],['casual','Повседневный'],['summer_relaxed','Летний relaxed'],['winter_layered','Зимняя многослойность']].map(([k,v])=>`<option value='${k}' ${p.style===k?'selected':''}>${v}</option>`).join('')}</select></div>
        <div class='field'><label>Размер верха</label><select id='profileTop'>${['S','M','L','XL','XXL'].map(v=>`<option ${p.topSize===v?'selected':''}>${v}</option>`).join('')}</select></div>
        <div class='field'><label>Размер низа</label><select id='profileBottom'>${['S','M','L','XL','XXL'].map(v=>`<option ${p.bottomSize===v?'selected':''}>${v}</option>`).join('')}</select></div>
        <div class='field'><label>Размер обуви</label><select id='profileShoe'>${['39','40','41','42','43','44','45','46'].map(v=>`<option ${p.shoeSize===v?'selected':''}>${v}</option>`).join('')}</select></div>
        <div class='field'><label>Бюджет</label><select id='profileBudget'>${[['0-5000','До 5 000 ₽'],['5000-15000','5 000–15 000 ₽'],['15000+','От 15 000 ₽']].map(([k,v])=>`<option value='${k}' ${p.budget===k?'selected':''}>${v}</option>`).join('')}</select></div>
      </div><div class='sheetFooter'><button class='btn line' onclick='window.appAction("closeSheet")'>Отмена</button><button class='btn dark' onclick='window.appAction("saveProfile")'>Сохранить</button></div>`;
    }
    if(kind==='savedLooks'){
      const saved=store.savedLooks.map(id=>({id,look:findSavedLook(id)}));
      html=`<div class='sheetHandle'></div><h2 class='sheetTitle'>Сохранённые образы</h2><p class='sheetSub'>Твои избранные сочетания</p><div class='list'>${saved.length?saved.map(r=>`<div class='savedLookCard'><img alt='' src='${r.look?.parts?.[0]?productImage(r.look.parts[0]):lookPhotos.everyday}'><div class='savedLookInfo'><strong>${escapeHtml(r.look?.title||'Сохранённый образ')}</strong><small>${r.look?.parts?.length?r.look.parts.length+' вещи · посмотреть состав':'Старый образ пока не восстановлен'}</small>${r.look?`<button class='btn dark small' onclick='window.appAction("viewSaved","${r.id}")'>Посмотреть</button>`:''}</div><button class='btn line small' onclick='window.appAction("removeSaved","${r.id}")'>Удалить</button></div>`).join(''):`<div class='empty'>Пока нет сохранённых образов. Открой «Образы» и сохрани понравившийся вариант.</div>`}</div>`;
    }
    if(kind==='manualForm'){
      html=`<div class='sheetHandle'></div><h2 class='sheetTitle'>Новая вещь</h2><p class='sheetSub'>Минимальный быстрый ввод — без фото, но с ключевыми характеристиками.</p>
      <div class='fields'>
        <div class='field'><label>Название</label><input id='manualName' placeholder='Например, Базовая футболка'></div>
        <div class='field'><label>Тип вещи</label><select id='manualType'>${Object.entries(TYPES).map(([k,v])=>`<option value='${k}'>${v}</option>`).join('')}</select></div>
        <div class='field'><label>Цвет</label><select id='manualColor'>${Object.entries(COLORS).map(([k,v])=>`<option value='${k}'>${v[0]}</option>`).join('')}</select></div>
        <div class='field'><label>Посадка</label><select id='manualFit'><option value='regular'>Regular</option><option value='slim'>Slim</option><option value='relaxed'>Relaxed</option></select></div>
        <div class='field'><label>Сезон</label><select id='manualSeason'><option value='all'>Всесезонная</option><option value='warm'>Тёплый сезон</option><option value='cold'>Холодный сезон</option></select></div>
      </div>
      <div class='sheetFooter'><button class='btn line' onclick='window.appAction("openAdd")'>Назад</button><button class='btn dark' onclick='window.appAction("saveManual")'>Сохранить вещь</button></div>`;
    }
    sheet.classList.toggle('dailyPickerSheet',kind==='daily');
    sheet.classList.toggle('lookDetailSheet',kind==='look');
    sheet.classList.toggle('itemDetailSheet',kind==='item'||kind==='product');
    sheet.innerHTML=html+'<button type="button" class="sheetClose" aria-label="Закрыть" onclick="window.appAction(&quot;closeSheet&quot;)"><svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 5L19 19M19 5L5 19"/></svg></button>';
    if(kind==='anchorPicker')filterAnchorPicker();
    if(kind==='daily')initDailySwipe();
    document.getElementById('sheetBackdrop').classList.add('show');
    sheet.classList.add('show');
  }
  function toast(text){
    const t=document.createElement('div'); t.textContent=text; t.style.cssText='position:fixed;left:50%;bottom:110px;transform:translateX(-50%);background:#232722;color:#fff;padding:12px 14px;border-radius:14px;z-index:99;box-shadow:0 14px 30px rgba(0,0,0,.18);font-size:13px';
    document.body.appendChild(t); setTimeout(()=>{t.style.opacity='0';t.style.transition='.24s';},1700); setTimeout(()=>t.remove(),2100);
  }
  function renderHome(){
    if(store.city?.label==='Моё местоположение'&&Number.isFinite(store.city.lat)&&Number.isFinite(store.city.lon))updateGpsCityName(store.city.lat,store.city.lon);
    const looks=todayLooks();
    const picked=chosenDaily();
    const lead=picked||dailyLooks()[0]||looks[0]||null;
    const city=store.city?escapeHtml(store.city.label):'Город не выбран';
    const weather=store.forecast?.day===dayKey()?' · '+Math.round(store.forecast.low)+'…'+Math.round(store.forecast.high)+'°':'';
    const heroImage=lead?lookPhoto(lead,0):editorialPhotos.img8939;
    const heroTitle=lead?escapeHtml(lead.title):'Твой первый образ';
    const heroDescription=lead?(lead.missing?.length?'Нужно докупить '+lead.missing.length+' вещ. · '+lead.parts.length+' вещи в образе':lead.parts.length+' вещи · готов к носке'):'Добавь вещи в гардероб — и мы подберём сочетания';
    const screen=document.getElementById('homeScreen');
    screen.innerHTML=`<div class='homeEditorial'>
      <header class='homeEditorialHeader'>
        <div><div class='homeEditorialKicker'>PERSONAL STYLE SYSTEM</div><h1>STYLE OS</h1></div>
        <div class='homeEditorialHeaderRight'><button type='button' class='homeEditorialWeather' onclick='window.appAction("openCity")' aria-label='Выбрать город'><span>${city}</span><small>${weather||'Указать погоду'}</small></button><button class='avatar' aria-label='Мой профиль' onclick='window.appAction("switchTab","profile")'>${avatarMarkup()}</button></div>
      </header>
      <section class='homeEditorialFeatured'>
        <div class='homeEditorialPhoto' style='background-image:linear-gradient(180deg,rgba(12,15,12,.12),rgba(12,15,12,.02) 60%,rgba(12,15,12,.12)),url("${heroImage}")'><span class='homeEditorialPhotoTag'>ОБРАЗ ДНЯ</span></div>
        <div class='homeEditorialFeatureBody'><div class='homeEditorialFeatureCopy'><h2>${heroTitle}</h2><p>${escapeHtml(heroDescription)}</p></div><button type='button' class='homeEditorialMainAction' onclick='window.appAction("openLeadLook")'>${picked?'Смотреть образ':'Выбрать образ'} <span aria-hidden='true'>→</span></button></div>
      </section>
      <div class='homeEditorialQuick' aria-label='Быстрые действия'>
        <button type='button' class='homeEditorialQuickItem' onclick='window.appAction("switchTab","outfits")'><span class='homeEditorialQuickIcon' aria-hidden='true'>✦</span><span><strong>Собрать образ</strong><small>Для любого случая</small></span><i aria-hidden='true'>›</i></button>
        <button type='button' class='homeEditorialQuickItem' onclick='window.appAction("switchTab","catalog")'><span class='homeEditorialQuickIcon' aria-hidden='true'>⌕</span><span><strong>Что докупить</strong><small>Подобрать вещи</small></span><i aria-hidden='true'>›</i></button>
        <button type='button' class='homeEditorialQuickItem' onclick='window.appAction("openAdd")'><span class='homeEditorialQuickIcon' aria-hidden='true'>＋</span><span><strong>Добавить вещь</strong><small>В свой гардероб</small></span><i aria-hidden='true'>›</i></button>
      </div>
      ${looks.length?`<section class='homeEditorialSection'><div class='homeEditorialSectionHeading'><h2>Сегодня тебе подойдут</h2><button type='button' aria-label='Смотреть все образы' onclick='window.appAction("switchTab","outfits")'>›</button></div><div class='homeEditorialSuggestions'>${looks.slice(0,4).map((look,index)=>`<button type='button' class='homeEditorialSuggestion' onclick='window.appAction("openLook","${look.id}")' style='background-image:linear-gradient(180deg,transparent 35%,rgba(12,14,11,.68)),url("${lookPhoto(look,index)}")'><span>${escapeHtml(look.title)}</span><small>${look.missing.length?'Нужно докупить: '+look.missing.length:'Готов к носке'}</small></button>`).join('')}</div></section>`:''}
      <section class='homeEditorialSection'><div class='homeEditorialSectionHeading'><h2>Коллекции стиля</h2></div><div class='homeEditorialCollections'><div class='homeEditorialCollection' style='background-image:linear-gradient(180deg,transparent 30%,rgba(12,14,11,.65)),url("${stylePhotos.minimal}")'><span>Минимализм</span></div><div class='homeEditorialCollection' style='background-image:linear-gradient(180deg,transparent 30%,rgba(12,14,11,.65)),url("${stylePhotos.oldmoney}")'><span>Old money</span></div><div class='homeEditorialCollection' style='background-image:linear-gradient(180deg,transparent 30%,rgba(12,14,11,.65)),url("${stylePhotos.smart}")'><span>Smart casual</span></div></div></section>
    </div>`;
  }
  function renderWardrobe(){
    const cat=state.filters.wardrobe;
    const items=cat==='all' ? store.wardrobe : store.wardrobe.filter(i=>GROUP[i.type]===cat || i.type===cat);
    const screen=document.getElementById('wardrobeScreen');
    screen.innerHTML=`<div class='wardrobeEditorial catalogEditorial'>
      <header class='catalogEditorialHeader'><div><div class='catalogEditorialKicker'>STYLE OS / MY WARDROBE</div><h1>Гардероб</h1></div><span class='catalogEditorialCount'>${store.wardrobe.length} вещей</span></header>
      <div class='wardrobeEditorialChips catalogEditorialChips chips'>${[['all','Все'],['top','Верх'],['bottom','Низ'],['shoes','Обувь'],['layer','Слои']].map(([k,v])=>`<button class='chip ${cat===k?'active':''}' onclick='window.appAction("setWardrobeFilter","${k}")'>${v}</button>`).join('')}</div>
      ${items.length?`<div class='catalogEditorialGrid grid2'>${items.map(item=>`<article class='catalogEditorialItem' role='button' tabindex='0' onclick='window.appAction("openOwned","${item.ownedId}")' onkeydown='if(event.key==="Enter"||event.key===" "){event.preventDefault();window.appAction("openOwned","${item.ownedId}")}'><div class='catalogEditorialVisual'><img alt='${escapeHtml(item.name)}' src='${productImage(item)}' loading='lazy' decoding='async'></div><div class='catalogEditorialDetails'><div class='catalogEditorialName'>${escapeHtml(item.name)}</div><div class='catalogEditorialSeason'>${catalogSeasonLabel(item.season)}</div><div class='catalogEditorialColor'><i style='background:${colorHex(item.color)}'></i><span>${COLORS[item.color]?.[0]||'Цвет не указан'}</span></div></div></article>`).join('')}</div>`:`<div class='card empty wardrobeEditorialEmpty'><h3>Пока пусто</h3><p>Добавь первые вещи — из каталога или вручную.</p><button class='btn dark' onclick='window.appAction("openAdd")'>Добавить вещь</button></div>`}
      <div class='fabSpacer'></div>
    </div>`;
    document.getElementById('floatingAdd').classList.remove('hidden');
  }
    function outfitDisplayTitle(look){const titles={minimal:'Городская база',dark_minimal:'Тихий минимализм',smart:'Современный ритм',classic:'Деловая классика',oldmoney:'Сдержанный характер',utility:'Городская практичность',soft_tailoring:'Спокойная элегантность',casual:'На каждый день',summer_relaxed:'Лёгкий силуэт',winter_layered:'Тёплый городской образ'};return titles[look?.style]||look?.title||'Готовый образ';}
  function outfitVisibleLooks(){return (state.outfitMode==='anchor'?state.anchorLooks||[]:todayLooks()).slice(0,10);}
  function switchLookbook(direction,targetIndex){
    const count=outfitVisibleLooks().length;
    if(count<2||window.lookbookAnimating)return;
    window.lookbookAnimating=true;
    const photo=document.querySelector('#outfitsScreen .lookbookPhoto');
    const finish=()=>{
      state.outfitIndex=targetIndex===undefined?((state.outfitIndex||0)+direction+count)%count:Math.max(0,Math.min(count-1,targetIndex));
      renderOutfits();
      const incoming=document.querySelector('#outfitsScreen .lookbookPhoto');
      if(incoming){
        incoming.style.transition='none';
        incoming.style.transform='translate3d('+(-direction*45)+'px,0,0)';
        incoming.style.opacity='.65';
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
          incoming.style.transition='transform 260ms cubic-bezier(.2,.75,.2,1),opacity 260ms ease';
          incoming.style.transform='translate3d(0,0,0)';
          incoming.style.opacity='1';
          setTimeout(()=>{incoming.style.transition='';incoming.style.transform='';incoming.style.opacity='';window.lookbookAnimating=false;},280);
        }));
      }else window.lookbookAnimating=false;
    };
    if(!photo){finish();return;}
    photo.style.transition='transform 190ms ease-in,opacity 190ms ease-in';
    photo.style.transform='translate3d('+(-direction*110)+'%,0,0)';
    photo.style.opacity='0';
    setTimeout(finish,195);
  }
  function initLookbookSwipe(){
    const photo=document.querySelector('#outfitsScreen .lookbookPhoto');
    if(!photo)return;
    let startX=0,startY=0,lastX=0,tracking=false,horizontal=false;
    photo.addEventListener('touchstart',event=>{
      if(event.touches.length!==1||window.lookbookAnimating){tracking=false;return;}
      startX=lastX=event.touches[0].clientX;
      startY=event.touches[0].clientY;
      tracking=true;horizontal=false;
      photo.style.transition='none';
    },{passive:true});
    photo.addEventListener('touchmove',event=>{
      if(!tracking||event.touches.length!==1)return;
      const dx=event.touches[0].clientX-startX,dy=event.touches[0].clientY-startY;
      if(!horizontal&&Math.abs(dx)>9&&Math.abs(dx)>Math.abs(dy)*1.2)horizontal=true;
      if(!horizontal)return;
      if(event.cancelable)event.preventDefault();
      lastX=event.touches[0].clientX;
      photo.style.transform='translate3d('+Math.max(-120,Math.min(120,dx))+'px,0,0)';
    },{passive:false});
    photo.addEventListener('touchend',event=>{
      if(!tracking)return;
      tracking=false;
      const dx=(event.changedTouches[0]?.clientX??lastX)-startX;
      if(horizontal&&Math.abs(dx)>45){
        photo.style.transform='';
        switchLookbook(dx<0?1:-1);
      }else{
        photo.style.transition='transform 230ms ease-out';
        photo.style.transform='translate3d(0,0,0)';
      }
    },{passive:true});
    photo.addEventListener('touchcancel',()=>{
      tracking=false;photo.style.transition='transform 230ms ease-out';photo.style.transform='translate3d(0,0,0)';
    },{passive:true});
  }
  function renderOutfits(){
 const anchored=state.outfitMode==='anchor',anchor=anchored?activeAnchorItem():null;
 const looks=outfitVisibleLooks(),count=looks.length;
 state.outfitIndex=Math.max(0,Math.min(state.outfitIndex||0,count-1));
 const index=state.outfitIndex,look=looks[index],occ=state.filters.outfitOccasion,weather=state.filters.outfitWeather;
 const summary=[getOccLabel(occ),getWeatherLabel(weather),state.filters.ownedOnly?'Только мои вещи':'С докупкой'];
 const screen=document.getElementById('outfitsScreen');
 screen.innerHTML=`<div class='lookbookPage'>
 <header class='lookbookHeader'><h1>Образы</h1><div class='lookbookModes' role='group' aria-label='Способ подбора'><button type='button' class='${anchored?'':'active'}' ${anchored?'':'aria-current="page"'} onclick='window.appAction("showReadyOutfits")'>Готовые</button><button type='button' class='${anchored?'active':''}' ${anchored?'aria-current="page"':''} onclick='window.appAction("openAnchorPicker")'>По вещи</button></div></header>
 <button class='lookbookFilters' onclick='window.appAction("openOutfitFilters")' aria-label='Настроить подбор: ${escapeHtml(summary.join(', '))}'><span class='lookbookFilterIcon' aria-hidden='true'>☷</span><span class='lookbookFilterSummary'>${summary.map(escapeHtml).join('<i>·</i>')}</span><span aria-hidden='true' class='lookbookChevron'>›</span></button>
 ${look?`<div class='lookbookStory'>
 <div class='lookbookPhoto' style='background-image:linear-gradient(90deg,rgba(12,16,12,.56),rgba(12,16,12,.04) 77%),url("${lookPhoto(look,index)}")'>
 <div class='lookbookPhotoCopy'><span class='lookbookKicker'>STYLE OS / LOOK ${String(index+1).padStart(2,'0')}</span><h2>${escapeHtml(outfitDisplayTitle(look))}</h2><p>${escapeHtml(getOccLabel(look.occasion))}</p></div></div>
 <div class='lookbookPhotoControls'>
 ${anchored&&anchor?`<button type='button' class='anchorHeroPick' onclick='window.appAction("openAnchorPicker")' aria-label='Изменить выбранную вещь'><img src='${productImage(anchor)}' alt='${escapeHtml(itemTypeLabel(anchor))}'><span class='anchorHeroChange' aria-hidden='true'><svg viewBox='0 0 24 24' width='17' height='17' fill='none' stroke='currentColor' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'><path d='M20 11a8 8 0 1 0-2.5 5.8'/><path d='M20 4v7h-7'/></svg></span></button>`:''}
 <div class='lookbookPagination' aria-label='Образ ${index+1} из ${count}'><span>${String(index+1).padStart(2,'0')} / ${String(count).padStart(2,'0')}</span><div class='lookbookProgress'>${looks.map((_,i)=>`<button type='button' aria-label='Образ ${i+1}' class='${i===index?'selected':''}' onclick='window.appAction("setOutfitIndex",${i})'></button>`).join('')}</div></div>
 <div class='lookbookArrows'><button type='button' ${count<2?'disabled':''} aria-label='Предыдущий образ' onclick='window.appAction("outfitPrev")'><span aria-hidden='true'>←</span></button><button type='button' ${count<2?'disabled':''} aria-label='Следующий образ' onclick='window.appAction("outfitNext")'><span aria-hidden='true'>→</span></button></div></div>
 <section class='lookbookDetails'><div class='lookbookOverline'>ОБРАЗ ${String(index+1).padStart(2,'0')} / ${String(count).padStart(2,'0')}</div><h2>${escapeHtml(outfitDisplayTitle(look))}</h2><p>${escapeHtml((look.reason||'Продуманное сочетание оттенков и фактур для твоего гардероба.').split('. ')[0].slice(0,160))}</p>
 <div class='lookbookPieces'>${look.parts.map((item,i)=>`<button type='button' class='lookbookPiece' aria-label='Открыть ${escapeHtml(itemTypeLabel(item))}' onclick='window.appAction("openOutfitPart","${look.id}:${i}")'><img src='${productImage(item)}' alt='${escapeHtml(itemTypeLabel(item))}' loading='lazy'><span>${escapeHtml(itemTypeLabel(item))}</span>${item.missing?`<small>Докупить</small>`:''}</button>`).join('')}</div>
 <div class='lookbookAvailability'>${look.missing.length?`<span class='lookbookNeed'>○</span> Нужно докупить: ${look.missing.length}`:`<span class='lookbookCheck'>✓</span> Все вещи есть`}</div><button type='button' class='lookbookOpen' onclick='window.appAction("openLook","${look.id}")'>Открыть образ <span aria-hidden='true'>→</span></button></section></div>

 <button type='button' class='lookbookReload' onclick='window.appAction("shuffle")'>Другой повод ↻</button>`:`<div class='lookbookEmpty'><h2>Пока нет подходящих образов</h2><p>${anchored?'Попробуй другие фильтры или выбери другую вещь.':'Попробуй другую погоду или разреши предложения вещей из каталога.'}</p><button type='button' class='lookbookOpen' onclick='window.appAction("openOutfitFilters")'>Изменить настройки</button></div>`}
 </div>`;
 document.getElementById('floatingAdd').classList.add('hidden');
 initLookbookSwipe();
}
  function catalogSeasonLabel(season){
    return ({all:'Все сезоны',warm:'Весна · Лето',mild:'Весна · Осень',cold:'Осень · Зима',hot:'Лето'})[season]||'Все сезоны';
  }
  function renderCatalog(){
    const cat=state.filters.catalog, q=state.filters.catalogSearch.toLowerCase();
    let list=state.catalog.filter(item=> !q || `${item.brand} ${item.name} ${item.sku}`.toLowerCase().includes(q));
    if(cat!=='all') list=list.filter(item=> GROUP[item.type]===cat || item.type===cat);
    const screen=document.getElementById('catalogScreen');
    screen.innerHTML=`<div class='catalogEditorial'>
      <header class='catalogEditorialHeader'><div><div class='catalogEditorialKicker'>STYLE OS / EDITED SELECTION</div><h1>Каталог</h1></div><span class='catalogEditorialCount'>${state.catalog.length} вещей</span></header>
      <div class='catalogEditorialHero' style='background-image:linear-gradient(90deg,rgba(16,19,16,.45),rgba(16,19,16,.03) 80%),url("${catalogHero}")'><h2>Вещи,<br>которые<br>сочетаются</h2></div>
      <div class='catalogEditorialSearch search'><span aria-hidden='true'>⌕</span><input value='${escapeHtml(state.filters.catalogSearch)}' oninput='window.appAction("searchCatalog", this.value)' placeholder='Поиск по вещам' aria-label='Поиск по вещам'></div>
      <div class='catalogEditorialChips chips'>${[['all','Все'],['top','Верх'],['bottom','Низ'],['shoes','Обувь'],['layer','Слои']].map(([k,v])=>`<button class='chip ${cat===k?'active':''}' onclick='window.appAction("setCatalogFilter","${k}")'>${v}</button>`).join('')}</div>
      <div class='catalogEditorialGrid grid2'>${list.map(item=>`<article class='catalogEditorialItem' onclick='window.appAction("openProduct","${item.id}")' role='button' tabindex='0' onkeydown='if(event.key==="Enter"||event.key===" "){event.preventDefault();window.appAction("openProduct","${item.id}")}'><div class='catalogEditorialVisual'><img alt='${escapeHtml(item.name)}' src='${productImage(item)}' loading='lazy' decoding='async'></div><div class='catalogEditorialDetails'><div class='catalogEditorialName'>${escapeHtml(item.name)}</div><div class='catalogEditorialSeason'>${catalogSeasonLabel(item.season)}</div><div class='catalogEditorialColor'><i style='background:${colorHex(item.color)}'></i><span>${COLORS[item.color]?.[0]||'Цвет не указан'}</span></div></div></article>`).join('')}</div>
    </div>`;
    document.getElementById('floatingAdd').classList.add('hidden');
  }
  function renderProfile(){
    const p=store.profile;
    const screen=document.getElementById('profileScreen');
    screen.innerHTML=`<div class='topbar'><div><div class='subtle'>STYLE OS / ACCOUNT</div><div class='brand'>Мой профиль</div></div><button class='btn line small' onclick='window.styleAuth.logout()'>Выйти</button></div>
      <section class='profileHero profileHeroBlack'>
        <div class='profilePortraitRow'>
          <div class='profilePortraitMetric'><strong>${store.wardrobe.length}</strong><small>вещей в гардеробе</small></div>
          <button class='profileAvatar' aria-label='Изменить фото профиля' onclick='window.appAction("chooseAvatar")'>${avatarMarkup()}</button>
          <div class='profilePortraitMetric'><strong>${store.savedLooks.length}</strong><small>сохранённых образов</small></div>
        </div>
        <input type='file' id='profileAvatarFile' accept='image/*' hidden onchange='window.uploadStyleAvatar(this.files[0])'>
        <h2>${escapeHtml(p.name||'Пользователь')}</h2>
        <p>Твой персональный стиль</p>
        <div class='profileActions'><button type='button' onclick='window.appAction("editProfile")'>Редактировать</button><button type='button' onclick='window.appAction("chooseAvatar")'>Изменить фото</button></div>
      </section>
      <section class='profilePanel'><div class='sectionHead'><div><h2 class='sectionTitle'>Моя коллекция</h2><div class='sectionHint'>Всё, что делает стиль твоим</div></div></div>
        <div class='listRow' onclick='window.appAction("openSaved")'><div><strong>♡ Сохранённые образы</strong><div class='helper'>${store.savedLooks.length} сохранено · открыть подборку</div></div><span>›</span></div>
        <div class='listRow' onclick='window.appAction("switchTab","wardrobe")'><div><strong>Мой гардероб</strong><div class='helper'>${store.wardrobe.length} вещей</div></div><span>›</span></div>
      </section>
      <section class='profilePanel'><div class='sectionHead'><div><h2 class='sectionTitle'>Параметры стиля</h2><div class='sectionHint'>Используются при составлении образов</div></div></div>
        <div class='listRow'><span>Основной стиль</span><strong>${escapeHtml(p.style)}</strong></div>
        <div class='listRow'><span>Верх / низ</span><strong>${escapeHtml(p.topSize)} / ${escapeHtml(p.bottomSize)}</strong></div>
        <div class='listRow'><span>Размер обуви</span><strong>${escapeHtml(p.shoeSize)}</strong></div>
        <div class='listRow'><span>Бюджет</span><strong>${escapeHtml(p.budget)}</strong></div>
        <button class='btn line' style='width:100%;margin-top:12px' onclick='window.appAction("editProfile")'>Изменить параметры</button>
      </section>`;
    document.getElementById('floatingAdd').classList.add('hidden');
  }
  function findSavedLook(id){
    if(store.savedLookDetails?.[id]?.parts?.length)return store.savedLookDetails[id];
    for(const occasion of ['everyday','office','date','restaurant','travel','event','university']){
      for(const weather of ['cold','mild','hot']){
        const match=generateLooks({occasion,weather,ownedOnly:false,limit:30,mix:true}).find(l=>l.id===id);
        if(match){store.savedLookDetails??={};store.savedLookDetails[id]=match;saveStore();return match;}
      }
    }
    return null;
  }
  function renderSavedLooksSheet(){
    const all=todayLooks();
    openSheet('savedCustom',{list: store.savedLooks.map(id=> all.find(l=>l.id===id)).filter(Boolean)});
  }
  function renderScreens(){
    // Only build the visible screen. Avoid computing outfits and 151 catalog cards
    // at every save/navigation; unseen screens render on first visit.
    const views={home:renderHome,wardrobe:renderWardrobe,outfits:renderOutfits,catalog:renderCatalog,profile:renderProfile};
    const render=views[state.screen]||renderHome;
    render();
    document.querySelectorAll('.screen').forEach(el=>el.classList.toggle('active',el.id===state.screen+'Screen'));
    document.querySelectorAll('.tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.screen===state.screen));
    document.getElementById('floatingAdd').classList.toggle('hidden',state.screen!=='wardrobe');
  }
  function buildOnboarding(){
    const root=document.getElementById('onboarding');
    root.innerHTML=`
      <section class='onbSlide active' data-step='0'>
        <div class='onbHero' style='--onb-img:url(${stylePhotos.oldmoney})'>
          <span class='glassTag'>STYLE OS</span>
          <h2>Твой личный стиль — без перегруза и хаоса.</h2>
          <p>Добавь вещи, получай готовые комплекты и рекомендации покупок под свой гардероб.</p>
        </div>
        <div class='sheetFooter' style='position:static; margin:18px 0 0; padding:0; background:none'><button class='btn line' onclick='window.appAction("skipOnboarding")'>Пропустить</button><button class='btn dark' onclick='window.appAction("nextOnboarding")'>Дальше</button></div>
      </section>
      <section class='onbSlide' data-step='1'>
        <div><div class='subtle'>Шаг 2 из 3</div><div class='brand' style='margin:8px 0 10px'>Что тебе ближе?</div><div class='sectionHint'>Выбери один основной вектор. Потом это можно поменять в профиле.</div></div>
        <div class='choiceGrid'>
          <div class='choiceCard active' data-style='minimal'><div class='pic' style='--img:url(${stylePhotos.minimal})'></div><strong>Minimal</strong><div class='helper'>Нейтральная база</div></div>
          <div class='choiceCard' data-style='oldmoney'><div class='pic' style='--img:url(${stylePhotos.oldmoney})'></div><strong>Old money</strong><div class='helper'>Сдержанная роскошь</div></div>
          <div class='choiceCard' data-style='smart'><div class='pic' style='--img:url(${stylePhotos.smart})'></div><strong>Smart casual</strong><div class='helper'>Собранно и спокойно</div></div>
          <div class='choiceCard' data-style='classic'><div class='pic' style='--img:url(${stylePhotos.classic})'></div><strong>Classic</strong><div class='helper'>Форма и структура</div></div>
        </div>
        <div class='sheetFooter' style='position:static; margin:18px 0 0; padding:0; background:none'><button class='btn line' onclick='window.appAction("prevOnboarding")'>Назад</button><button class='btn dark' onclick='window.appAction("nextOnboarding")'>Дальше</button></div>
      </section>
      <section class='onbSlide' data-step='2'>
        <div><div class='subtle'>Шаг 3 из 3</div><div class='brand' style='margin:8px 0 10px'>Пара быстрых настроек</div><div class='sectionHint'>Это нужно, чтобы рекомендации стали персональнее.</div></div>
        <div class='toggleGrid' id='budgetToggle'><div class='toggleCard active' data-budget='0-5000'>До 5 000</div><div class='toggleCard' data-budget='5000-15000'>5 000–15 000</div><div class='toggleCard' data-budget='15000+'>15 000+</div></div>
        <div class='fields' style='margin-top:16px'>
          <div class='field'><label>Размер верха</label><select id='onbTop'><option>M</option><option>S</option><option>L</option><option>XL</option></select></div>
          <div class='field'><label>Размер обуви</label><select id='onbShoe'><option>42</option><option>41</option><option>43</option><option>44</option></select></div>
        </div>
        <div class='sheetFooter' style='position:static; margin:18px 0 0; padding:0; background:none'><button class='btn line' onclick='window.appAction("prevOnboarding")'>Назад</button><button class='btn dark' onclick='window.appAction("finishOnboarding")'>Начать</button></div>
      </section>`;
    let current=0;
    function showStep(index){
      current=index;
      root.querySelectorAll('.onbSlide').forEach((s,i)=>s.classList.toggle('active', i===index));
    }
    root.addEventListener('click', e=>{
      const styleCard=e.target.closest('.choiceCard');
      if(styleCard){ root.querySelectorAll('.choiceCard').forEach(el=>el.classList.remove('active')); styleCard.classList.add('active'); store.profile.style=styleCard.dataset.style; }
      const budget=e.target.closest('#budgetToggle .toggleCard');
      if(budget){ root.querySelectorAll('#budgetToggle .toggleCard').forEach(el=>el.classList.remove('active')); budget.classList.add('active'); store.profile.budget=budget.dataset.budget; }
    });
    window.appAction = appAction;
    state.onboardingController={showStep,get current(){return current;}};
  }
  function appAction(action,payload){
    if(action==='closeSheet'){ closeSheet(); }
    if(action==='openOutfitFilters'){openSheet('outfitFilters');}
    if(action==='setOutfitIndex'){const count=outfitVisibleLooks().length;const target=Number(payload)||0;if(count>1&&target!==state.outfitIndex)switchLookbook(target>state.outfitIndex?1:-1,target);}
    if(action==='outfitNext'){switchLookbook(1);}
    if(action==='outfitPrev'){switchLookbook(-1);}
    if(action==='outfitFilterOccasion'){
      state.filters.outfitOccasion=payload;state.outfitIndex=0;
      if(state.outfitMode==='anchor')refreshAnchorLooks();
      renderHome();renderOutfits();openSheet('outfitFilters');
    }
    if(action==='outfitFilterWeather'){
      state.filters.outfitWeather=payload;state.outfitIndex=0;
      if(state.outfitMode==='anchor')refreshAnchorLooks();
      renderHome();renderOutfits();openSheet('outfitFilters');
    }
    if(action==='outfitFilterOwned'){
      state.filters.ownedOnly=payload==='true';state.outfitIndex=0;
      if(state.outfitMode==='anchor')refreshAnchorLooks();
      renderOutfits();openSheet('outfitFilters');
    }
    if(action==='showReadyOutfits'){
      state.outfitMode='ready';state.outfitIndex=0;closeSheet();renderOutfits();
    }
    if(action==='openAnchorPicker'){
      state.anchorCategory='all';state.anchorQuery='';
      openSheet('anchorPicker');
    }
    if(action==='anchorQuery'){state.anchorQuery=payload;filterAnchorPicker();}
    if(action==='anchorCategory'){state.anchorCategory=payload;filterAnchorPicker();}
    if(action==='chooseAnchor'){state.anchorItemId=payload;filterAnchorPicker();}
    if(action==='generateAnchorLooks'){
      const selected=activeAnchorItem();
      if(!selected){toast('Сначала выбери вещь');return;}
      const looks=createAnchorLooks(selected);
      if(!looks.length){toast('Не удалось подобрать образы с этой вещью. Попробуй изменить фильтры.');return;}
      state.anchorLooks=looks;state.outfitMode='anchor';state.outfitIndex=0;
      closeSheet();state.screen='outfits';renderScreens();
    }
    if(action==='backToAnchorPage'){closeSheet();state.screen='outfits';renderScreens();}
    if(action==='backToAnchorResults'){closeSheet();state.screen='outfits';renderScreens();}
    if(action==='openAnchorLook'){
      const look=state.anchorLooks?.[Number(payload)];
      if(look)openSheet('look',look);
    }
    if(action==='openCity'){openSheet('city');}
    if(action==='setCityManual'){setCityManual();}
    if(action==='cityInput'){onCityInput(payload);}
    if(action==='chooseCity'){chooseCity(Number(payload));}
    if(action==='setCityGps'){setCityGps();}
    if(action==='dailyVote'){animateDailyVote(payload);}
    if(action==='dailyPreview'){const l=dailyOptions().find(x=>x.identity===payload);if(l)openSheet('dailyPreview',l);}
    if(action==='dailyBack'){openSheet('daily');}
    if(action==='dailyChoose'){dailyChoose(payload);}
    if(action==='dailyReset'){store.daily=null;saveStore();openSheet('daily');}
    if(action==='rechooseDaily'){store.daily=null;saveStore();openSheet('daily');}
    if(action==='dailyOutfits'){closeSheet();state.screen='outfits';renderScreens();}
    if(action==='saveProfile'){
      store.profile.name=document.getElementById('profileName').value.trim()||'Пользователь';
      store.profile.style=document.getElementById('profileStyle').value;
      store.profile.topSize=document.getElementById('profileTop').value;
      store.profile.bottomSize=document.getElementById('profileBottom').value;
      store.profile.shoeSize=document.getElementById('profileShoe').value;
      store.profile.budget=document.getElementById('profileBudget').value;
      saveStore(); closeSheet();renderScreens();toast('Настройки сохранены');
    }
    if(action==='removeSaved'){ store.savedLooks=store.savedLooks.filter(x=>x!==payload);if(store.savedLookDetails)delete store.savedLookDetails[payload];saveStore();openSheet('savedLooks');renderScreens(); }
    if(action==='switchTab'){ state.screen=payload; closeSheet(); renderScreens(); }
    if(action==='setWardrobeFilter'){ state.filters.wardrobe=payload; renderWardrobe(); }
    if(action==='setCatalogFilter'){ state.filters.catalog=payload; renderCatalog(); }
    if(action==='setOccasion'){ state.filters.outfitOccasion=payload; renderHome(); renderOutfits(); }
    if(action==='setOwnedOnly'){state.filters.ownedOnly=payload==='true';renderOutfits();}
    if(action==='setWeather'){ state.filters.outfitWeather=payload; renderHome(); renderOutfits(); }
    if(action==='searchCatalog'){ state.filters.catalogSearch=payload; const input=document.activeElement; const at=input && input.selectionStart; renderCatalog(); const next=document.querySelector('#catalogScreen .search input'); if(next){next.focus(); if(at!==null) next.setSelectionRange(at,at); } }
    if(action==='openAdd'){ state.addQuery='';state.addCategory='all';openSheet('addItem'); }
    if(action==='addCategory'){state.addCategory=payload;openSheet('addItem');}
    if(action==='addSearch'){state.addQuery=payload;const input=document.activeElement;const at=input?.selectionStart;openSheet('addItem');const next=document.getElementById('addSearch');if(next){next.focus();try{next.setSelectionRange(at,at)}catch(e){}}}
    if(action==='manualForm'){ openSheet('manualForm'); }
    if(action==='saveManual'){
      const item={id:'manual_'+Date.now(), ownedId:'manual_'+Date.now(), brand:'Моя вещь', name:normalizeClothingName(document.getElementById('manualName').value || 'Новая вещь',document.getElementById('manualType').value), type:document.getElementById('manualType').value, color:document.getElementById('manualColor').value, fit:document.getElementById('manualFit').value, season:document.getElementById('manualSeason').value, material:'', sku:'', price:null, url:''};
      store.wardrobe.unshift(item); saveStore(); closeSheet(); toast('Вещь добавлена'); renderScreens();
    }
    if(action==='openOwned'){ const item=store.wardrobe.find(i=>i.ownedId===payload); if(item) openSheet('item',item); }
    if(action==='openProduct'){ const item=state.catalog.find(i=>i.id===payload); if(item) openSheet('product',item); }
    if(action==='addFromCatalog'){
      const item=state.catalog.find(i=>i.id===payload); if(!item) return;
      if(store.wardrobe.some(w=>w.id===item.id || w.catalogId===item.id)){ toast('Эта вещь уже есть в гардеробе'); return; }
      store.wardrobe.unshift({...item, ownedId:'own_'+item.id, catalogId:item.id, source:'catalog'}); saveStore(); toast('Добавлено в гардероб'); closeSheet(); renderScreens();
    }
    if(action==='copySku'){
      const item=state.catalog.find(i=>i.id===payload); if(!item) return; navigator.clipboard?.writeText(item.sku || ''); toast('Артикул скопирован');
    }
    if(action==='openLookPart'||action==='openLeadPart'){
      const look=action==='openLeadPart'?todayLooks()[0]:(state.sheet?.kind==='look'?state.sheet.payload:null);
      const part=look?.parts[Number(payload)];
      if(part){
        const full=state.catalog.find(c=>c.id===(part.catalogId||part.id));
        openSheet(part.missing?'product':'item',part.missing?(full||part):part);
      }
    }
    if(action==='openOutfitPart'){
      const [id,index]=String(payload).split(':');
      const look=outfitVisibleLooks().find(x=>x.id===id);
      const part=look?.parts[Number(index)];
      if(part){
        const full=state.catalog.find(x=>x.id===(part.catalogId||part.id));
        openSheet(part.missing?'product':'item',part.missing?(full||part):part);
      }
    }
    if(action==='rateLook'){
      const look=state.sheet?.kind==='look'?state.sheet.payload:null;
      if(look){store.feedback.push({items:look.parts.map(p=>p.catalogId||p.id),style:look.style,value:payload==='like'?1:-1});
        store.feedback=store.feedback.slice(-100);saveStore();closeSheet();renderScreens();toast('Спасибо! Учтём в следующих образах.');}
    }
    if(action==='openLeadLook'){const chosen=chosenDaily();if(chosen)openSheet('look',chosen);else openSheet('daily');}
    if(action==='openLook'){const look=outfitVisibleLooks().find(l=>l.id===payload)||todayLooks().find(l=>l.id===payload);if(look)openSheet('look',look);}
    if(action==='saveLook'){
      const look=state.sheet?.kind==='look'?state.sheet.payload:todayLooks().find(l=>l.id===payload);
      if(look){if(!store.savedLooks.includes(payload))store.savedLooks.push(payload);
        store.savedLookDetails??={};store.savedLookDetails[payload]=JSON.parse(JSON.stringify(look));
        saveStore();toast('Образ сохранён');closeSheet();renderScreens();}
    }
    if(action==='shoppingFromLook'){ state.screen='catalog'; closeSheet(); renderScreens(); }
    if(action==='removeOrCopy'){
      const owned=store.wardrobe.find(i=>i.ownedId===payload);
      if(owned){ store.wardrobe = store.wardrobe.filter(i=>i.ownedId!==payload); saveStore(); toast('Вещь удалена'); closeSheet(); renderScreens(); }
    }
    if(action==='buildFromItem'){ state.screen='outfits'; closeSheet(); renderScreens(); }
    if(action==='shuffle'){ const keys=['everyday','office','date','restaurant','travel'];state.filters.outfitOccasion=keys[(keys.indexOf(state.filters.outfitOccasion)+1)%keys.length];if(state.outfitMode==='anchor')refreshAnchorLooks();state.outfitIndex=0;renderHome();renderOutfits(); }
    if(action==='editProfile'){ openSheet('editProfile'); }
    if(action==='openSaved'){ openSheet('savedLooks'); }
    if(action==='viewSaved'){const look=findSavedLook(payload);if(look)openSheet('look',look);}
    if(action==='chooseAvatar'){document.getElementById('profileAvatarFile')?.click();}
    if(action==='skipOnboarding'){ store.onboarded=true; if(!store.wardrobe.length) store.wardrobe=seedWardrobe(state.catalog); saveStore(); document.getElementById('onboarding').classList.remove('show'); renderScreens(); }
    if(action==='nextOnboarding'){ state.onboardingController.showStep(Math.min(2, state.onboardingController.current+1)); }
    if(action==='prevOnboarding'){ state.onboardingController.showStep(Math.max(0, state.onboardingController.current-1)); }
    if(action==='finishOnboarding'){
      store.profile.topSize=document.getElementById('onbTop').value; store.profile.bottomSize=document.getElementById('onbTop').value; store.profile.shoeSize=document.getElementById('onbShoe').value; store.onboarded=true; if(!store.wardrobe.length) store.wardrobe=seedWardrobe(state.catalog); saveStore(); document.getElementById('onboarding').classList.remove('show'); renderScreens(); toast('STYLE OS готов к работе');
    }
  }
  async function init(){
    store=newUserStore();
    state.catalog=embeddedCatalog;
    document.getElementById('onboarding').classList.remove('show');
    buildOnboarding();
    if(store.forecast?.day===dayKey())state.filters.outfitWeather=store.forecast.mode;
    document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{state.screen=btn.dataset.screen; closeSheet(); renderScreens();}));
    document.getElementById('floatingAdd').onclick=()=>openSheet('addItem');
    window.appAction=appAction;
    window.uploadStyleAvatar=uploadAvatar;
    window.styleAuth={display:authDisplay,submit:authSubmit,logout:logoutAccount,togglePassword:toggleAuthPassword};
    startAuth().catch(err=>{authDisplay();authMessage("Ошибка инициализации: "+authFriendly(err));});
  }
  init();
