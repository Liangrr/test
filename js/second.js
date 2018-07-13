	var lun = (function(){
		$li = $('.content ul li');
		return{
			init(){
				this.events();
			},
			events(){
				var _this = this;
				$li.on('mouseenter',function(){
					$(this).find('.move').css('bottom','0');
					$(this).css('margin','2px 10px 13px 10px');
				});
				$li.on('mouseleave',function(){
					$(this).find('.move').css('bottom','-90px');
					$(this).css('margin','5px 10px 10px 10px');
				})
			}
		}
	})();
	lun.init();