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
			'https://41.media.tumblr.com/a4dabfd1bd872dc3f0a28b966d614ce1/tumblr_nxi65shqtj1ts0zh0o2_400.png',
			'http://ak-hdl.buzzfed.com/static/2015-07/20/10/imagebuzz/webdr04/anigif_optimized-14309-1437404155-1.gif',
			'http://www.oimparcial.com.br/_midias/jpg/2015/07/30/rtemagicc_weslwy_cortacabelo_jpg-85011.jpg',
			'http://revistajacaraipe.com.br/wp-content/uploads/2015/08/safad%C3%A3o-c%C3%B3pia.jpg',
			'http://cnews.com.br/content/images/sites/Frisson/Wesley%20Safad%C3%A3o%20Ferrovia.jpg',
			'http://fw.atarde.uol.com.br/2015/08/340x255_wesley-safadao_1547355.jpg',
			'http://static2.blastingnews.com/media/photogallery/2015/12/25/290x290/b_290x290/foto-divulgacao-portal-o-povo_540533.jpg',
			'http://www.noticiasdematogrosso.com.br/wp-content/uploads/2015/11/wesley.jpg',
			'http://www.robertajungmann.com.br/uploads/posts/thumbs/dsc_5925.jpg',
			'http://imguol.com/c/entretenimento/6f/2016/02/04/wesley-safadao-agita-o-publico-com-seu-trio-coco-bambu-no-circuito-barra-ondina-em-salvador-1454622985265_956x500.jpg',
			'http://www.rb.am.br/wp-content/uploads/2015/08/safadao-celular.jpg',
			'http://static2.blastingnews.com/media/photogallery/2015/11/2/290x290/b_290x290/a-crise-pega-quem-acredita-nela-diz-safadao_482301.jpg',
			'http://imirante.com/imagens/2015/04/28/safa2804.jpg',
			'http://extra.globo.com/incoming/16150722-d50-36c/w448/2013_602692534-2013040532399.jpg_20130405.jpg',
			'http://jgdprod-us.s3.amazonaws.com/wp-content/uploads/sites/5/2015/12/22090054/wesley-safad%C3%A3o-iron-maiden1.jpg',
			'http://g.glbimg.com/og/gs/gsat4/f/thumbs/materia/2015/11/18/image.jpg',
			'http://luiscardoso.com.br/wp-content/uploads/2015/11/image27.jpg',
			'http://f.i.uol.com.br/fotografia/2015/11/06/564757-970x600-1.jpeg',
			'http://static1.purepeople.com.br/articles/4/10/27/34/@/1349939-wesley-safadao-esta-em-alta-e-financeira-950x0-2.jpg',
			'http://www.tribunahoje.com/vgmidia/imagens/211610_ext_arquivo.jpg',
			'http://queromeuingresso.com.br/images/publicacao/banda-de-wesley-safadao-sofre-acidente-340.gif',
			'http://rd1.ig.com.br/wp-content/uploads/2016/01/divulga%C3%A7%C3%A3oo.jpg',
			'http://metropolitanafm.uol.com.br/wp-content/uploads/2016/01/1-2-460x460.jpg',
			'http://atribunanaweb.com.br/pub/images/wesley%20safadao.png',
			'http://s2.glbimg.com/iz7CzNRmIFDxF2feCUKvNpOwC80=/top/s.glbimg.com/jo/eg/f/original/2015/10/31/wesley_safadao_-_raphaelcastello_-_020.jpg',
			'http://cdn.makeagif.com/media/6-10-2015/2j__zt.gif',
			'http://4.bp.blogspot.com/_AL1l_AQD5FY/S7OGjHZGUvI/AAAAAAAABkI/P-_qKX5OdmQ/s1600/wesley+safad%C3%A3o.jpg',
			'http://billboard.com.br/wp-content/uploads/2015/11/wesley.jpg',
			'http://cdn.playbuzz.com/cdn/608dd2c5-69ac-4480-95fc-6a4a091ce689/4ff28b7b-859d-4a1f-88fa-a9eb137660c7.jpg',
			'http://imgsapp.divirta-se.uai.com.br/app/noticia_133890394703/2015/07/30/170104/20150730105002548029i.jpg',
			'http://4.bp.blogspot.com/-vUTWuDEp3fc/Vb-bwtRwBII/AAAAAAAACUw/Q9kMBxyyH0s/s1600/L%25C3%25ADder%2Bda%2Bbanda%2BGarota%2BSafada%2BWesley%2BSafad%25C3%25A3o%2Btem%2Bo%2Bsegundo%2Bmaior%2Bcach%25C3%25AA.jpg',
			'http://s2.glbimg.com/nOyCQwT31lJmdHvBJZWLflpZO_Y=/620x465/s.glbimg.com/jo/g1/f/original/2015/06/14/ivaldo-wesley.jpg',
			'http://rd1.ig.com.br/wp-content/uploads/2016/01/wesleysafadao2.jpg',
			'http://static1.purepeople.com.br/articles/1/97/29/1/@/1284601-puro-sucesso-wesley-safadao-arrasta-mul-950x0-3.jpg',
			'http://parceiros.statig.com.br/hugogloss/wp-content/uploads/2015/10/safadao-iron-maiden-3.jpg',
			'http://jgdprod-us.s3.amazonaws.com/wp-content/uploads/sites/5/2015/12/22090054/wesley-safad%C3%A3o-jedi.jpg',
			'http://www.zinecultural.com/Materiais/5543/404063.png',
			'https://40.media.tumblr.com/622b955537bee584db8c267572cb981d/tumblr_inline_nyqlzs148u1smwd90_540.jpg'
        ],

        nSafadaoSounds: [
        	'https://api.soundcloud.com/tracks/212975515/stream?client_id=6fe9ed8a7148a74c9cedcb2e11c0639b',
        	'https://api.soundcloud.com/tracks/187024789/stream?client_id=6fe9ed8a7148a74c9cedcb2e11c0639b',
        	'https://api.soundcloud.com/tracks/229089222/stream?client_id=6fe9ed8a7148a74c9cedcb2e11c0639b',
        	'https://api.soundcloud.com/tracks/146476532/stream?client_id=6fe9ed8a7148a74c9cedcb2e11c0639b',
        	'https://api.soundcloud.com/tracks/241811445/stream?client_id=6fe9ed8a7148a74c9cedcb2e11c0639b',
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
        },

        handleSound: function (lstSounds)
        {
        	var sound = new Audio(lstSounds[Math.floor(Math.random() * lstSounds.length)]);
			sound.play();
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nSafadaoImgs, 3000);
     	self.handleLogo(self.nSafadaoBackgrounds, 3000);
     	self.handleSound(self.nSafadaoSounds);
    });
})(jQuery);
