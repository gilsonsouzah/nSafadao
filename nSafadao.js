//nSafadao 
(function($) {
	
    var self = $.nSafadao = new function(){};
	
    $.extend(self, {

    	nSafadaoBackgrounds : [
    		'http://musicasparabaixar10.com.br/wp-content/uploads/2015/12/Wesley-Safad%C3%A3o.png'
    	],

        nSafadaoImgs : [
			'https://s2.vagalume.com/wesley-safadao/images/wesley-safadao.jpg',
			'http://www.somdofole.com.br/wp-content/uploads/2016/03/revelacoesdewesleysafadao1.jpg',
			'http://www.wesleysafadao.com.br/files/images/w7.jpg',
			'http://www.folhavitoria.com.br/entretenimento/blogs/na-balada/wp-content/uploads/2015/12/Wesley-Safad%C3%A3o.png',
			'http://akamai.sscdn.co/uploadfile/letras/fotos/9/c/3/c/9c3c0fd6a9f3f111a501e41e66938d53.jpg',
			'http://extra.globo.com/incoming/18305681-590-a84/w448h673-PROP/Wesley-Safadao.jpg',
			'http://zh.rbsdirect.com.br/imagesrc/17860922.jpg',
			'http://s2.glbimg.com/3Msq0aPRY2u9uGMkg3QDbk6mGB4=/e.glbimg.com/og/ed/f/original/2015/12/03/foto2.jpg',
			'https://studiosol-a.akamaihd.net/letras/168x298/fotos/0/b/6/f/0b6f88e4767a5d2cc1822c217b69f788.jpg',
			'http://www.wesleysafadao.com.br/files/images/serrinha.jpeg',
			'http://entretenimento.r7.com/blogs/fabiola-reipert/files/2015/11/wesley-5.jpg',
			'http://entretenimento.r7.com/blogs/fabiola-reipert/files/2015/11/safadao-2.jpg',
			'http://www.aratuonline.com.br/universoaxe/wp-content/uploads/sites/2/2015/03/weskey_avatar_twitter-e1425921874859.jpg',
			'http://imirante.com/imagens/2014/06/03/wesleyhor030306.jpg',
			'http://extra.globo.com/incoming/15097333-e37-0f2/w640h360-PROP/wesley-safadao.jpg',
			'https://pbs.twimg.com/profile_images/1355205951/_SafadaoFacts_400x400.JPG',
			'http://imguol.com/c/bol/fotos/64/2016/01/14/wesley-oliveira-da-silva-mais-conhecido-como-wesley-safadao-nasceu-no-dia-6-de-setembro-de-1988-em-fortaleza-ce-aos-27-anos-de-idade-o-cantor-ja-tem-8-cds-e-2-dvds-lancados-na-sua-carreira-que-o-1452780591820_500x500.jpg',
			'http://www.suamusica.com.br/dirs4/343025/518599/big_cd_cover.jpg',
			'https://www.queroabada.com.br/upload/wesley-safadao_5309.jpg',
			'http://s2.glbimg.com/jGDdAD-lKlZgoZ1AfU6iz56_5X4=/620x0/top/s.glbimg.com/jo/eg/f/original/2015/05/21/mg_6769.jpg',
			'http://s2.glbimg.com/Yfb9xdhtiqt3gv-0KGHtz9OcT4I=/288x0/top/s.glbimg.com/jo/eg/f/original/2015/10/31/3d582fea944ab9c30606ed855344acd4.gif',
			'http://todateen.uol.com.br/tt/wp-content/uploads/2015/11/cabelao.jpg',
			'http://1.bp.blogspot.com/-CZfymQJNCvY/VDgznOdLOYI/AAAAAAAASvo/2rSYZYfdXPY/s1600/20130118151249187747a.jpeg.gif',
			'http://www.eshoje.jor.br/_midias/jpg/2015/08/28/wesley_imprensa04-141256.jpg',
			'https://41.media.tumblr.com/a4dabfd1bd872dc3f0a28b966d614ce1/tumblr_nxi65shqtj1ts0zh0o2_400.png'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nSafadaoImgs, 3000);
     	self.handleLogo(self.nSafadaoBackgrounds, 3000);
    });
})(jQuery);
