$(function() {
	
	

	
	
	
  var _menus = $('.left-menus');
  var _fixed_menu = $('.fixed-nav');
  var _resize = function() {
    var _width = $(window).width()
    var _margin_left = 0
    if(_width > 1200) {
      _margin_left = (_width - 1200) / 2;
    } 
    _menus.attr('style', 'width: 258px; margin-left:' + _margin_left + 'px;');
    //_fixed_menu.attr('style', 'right:' + _margin_left + 'px;')
	  _fixed_menu.attr('style', 'right:' + 0 + 'px;')
  }
  
  _resize()
  $(window).resize(_resize)
  
  $('.hover-a a.hover').hover(function() {
    $(this).parent().addClass('active')
    $(this).parent().off('mouseleave').on('mouseleave', function() {
      $(this).removeClass('active')
    })
  })
  
  $('.click-a a.click').off('click').on('click', function() {
    $(this).parent().toggleClass('active')
  })
  
  $('.hover-target').hover(function() {
    var $target = $($(this).attr('data-target'))
    if($target.length) {
      $target.show()
      $(this).addClass('active')
      var $this = $(this)
      $(this).parent().siblings().off('mouseenter').on('mouseenter', function() {
        $this.removeClass('active')
        $target.hide()
      })
    }
  })
  $('.nav-links').on('mouseleave', function() {
    $(this).find('.hover-target').removeClass('active')
    $(this).find('.second-menus').hide()
  })
  
  $('.hover-target01').hover(function() {
    var $target = $($(this).attr('data-target'))
    if($target.length) {
      $(this).addClass('active')
      $target.show()
      var _target = $(this)
      $target.off('mouseleave').on('mouseleave', function() {
        $target.hide()
        _target.removeClass('active')
      })
      $target.siblings('.second-box').hide()
      $(this).siblings('li').removeClass('active')
    }
  }, function() {
    
  })
  $('.left-menus').off('mouseleave').on('mouseleave', function() {
    $(this).find('ul li').removeClass('active')
    $(this).find('.second-box').hide()
  })
  
  $('.tab-box').find('.tab-index .panel-index').on('click', function() {
    console.log($(this).attr('data-target'))
    var $target = $('.tab-box').find($(this).attr('data-target'))
    if($(this).hasClass('active')) return
    if(!$target.length) return
    $(this).addClass('active')
    $(this).siblings('.panel-index').removeClass('active')
    $target.show().siblings('.tab-panel').hide()
  })
  
  
  
  
  
  
  
//城市选择切换
	$(".location-box").slide({
		titCell:".members-list a",
		mainCell:".cities-lists",
		titOnClassName:"active",
		trigger:"click",
		delayTime:0
		
	})
  
  $(".banner-nav").mouseenter(function () {
  	$(".search-box").removeClass("active")
  })
  
  

	
  
})



