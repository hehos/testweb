/**
 *   Unslider by @idiot and @damirfoy
 *   Contributors:
 *   - @ShamoX
 *
 */

(function ($, f) {
    var Unslider = function () {
        //  Object clone
        var _ = this;

        //  Set some options
        _.o = {
            speed: 500,     // animation speed, false for no transition (integer or boolean)
            delay: 3000,    // delay between slides, false for no autoplay (integer or boolean)  自动播放幻灯片的延迟时间。
            init: 0,        // init delay, false for no delay (integer or boolean)  开始自动播放slider的等待时间
            pause: !f,      // pause on hover (boolean) 是否鼠标移上暂停
            loop: !f,       // infinitely looping (boolean) 循环切换
            keys: f,        // keyboard shortcuts (boolean)
            dots: f,        // display dots pagination (boolean)  是否显示分页点
            arrows: f,      // display prev/next arrows (boolean)  是否显示左右切换箭头
            prev: '&larr;', // text or html inside prev button (string)
            next: '&rarr;', // same as for prev option
            fluid: true,       // is it a percentage width? (boolean)  流动布局
            starting: f,    // invoke before animation (function with argument)
            easing: 'swing',// easing function to use for animation
            autoplay: true,  // enable autoplay on initialisation  自动播放幻灯片
            complete: f,    // invoke after animation (function with argument)

            items: '.items',   // slides container selector
            item: '.items li',    // slidable items selector
            dots: '.dots',  // 控制点
            dot: '.dot',
            arrows: '.arrows',  // 控制箭头
            arrow: '.arrow',
            prev: "prev",  // 控制箭头的左右方向
            next: "next"
        };

        _.init = function (el, o) {
            _.el = el;

            //  Current indeed
            _.i = 0;

            //  Check whether we're passing any options in to Unslider
            var o = _.o = $.extend(_.o, o);
            var ul = _.ul = el.find(_.o.items);
            var max = _.max = [0, 0];
            var li = _.li = _.ul.find(_.o.item);
            var len = li.length;

            debugger;
            //  Set the relative widths
            ul.width((len * 100) + '%');
            li.width((100 / len) + '%');

            // 计算容器的宽和高
            li.each(function (index) {
                var me = $(this),
                    width = me.outerWidth(),
                    height = me.outerHeight();
                //console.log(index + "{" + "width:" + width + ",height" + height + "}");

                //  Set the max values
                if (width > max[0]) max[0] = width;
                if (height > max[1]) max[1] = height;
            });

            console.log(max);

            //  Set the main element
            el.css({ width: max[0], height: li.first().outerHeight() });
            if (!o.fluid) {
                li.width(max[0]);
            }

            //  Autoslide
            // autoplay、delay、delay具有父子逻辑关系
            o.autoplay && setTimeout(function () {
                if (o.delay | 0) {
                    _.play();

                    if (o.delay) {
                        el.on('mouseover mouseout', function (e) {
                            _.stop();
                            e.type === 'mouseout' && _.play();
                        });
                    }
                }
            }, o.init | 0);

            //  Keypresses
            if (o.keys) {
                $(document).keydown(function (e) {
                    switch (e.which) {
                        case 37:
                            _.prev(); // Left
                            break;
                        case 39:
                            _.next(); // Right
                            break;
                        case 27:
                            _.stop(); // Esc
                            break;
                    }
                });
            }

            //  Dot pagination
            o.dots && nav('dot');

            //  Arrows support
            o.arrows && nav('arrow');

            //  Patch for fluid-width sliders. Screw those guys.
            o.fluid && $(window).resize(function () {
                _.r && clearTimeout(_.r);

                _.r = setTimeout(function () {
                    var styl = {height: li.eq(_.i).outerHeight()},
                        width = el.outerWidth();

                    ul.css(styl);
                    styl['width'] = Math.min(Math.round((width / el.parent().width()) * 100), 100) + '%';
                    el.css(styl);
                    li.css({width: width + 'px'});
                }, 50);
            }).resize();

            //  Move support
            if ($.event.special['move'] || $.Event('move')) {
                el.on('movestart', function (e) {
                    if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
                        e.preventDefault();
                    } else {
                        el.data("left", _.ul.offset().left / el.width() * 100);
                    }
                }).on('move', function (e) {
                    var left = 100 * e.distX / el.width();
                    var leftDelta = 100 * e.deltaX / el.width();
                    _.ul[0].style.left = parseInt(_.ul[0].style.left.replace("%", "")) + leftDelta + "%";

                    _.ul.data("left", left);
                }).on('moveend', function (e) {
                    var left = _.ul.data("left");
                    if (Math.abs(left) > 30) {
                        var i = left > 0 ? _.i - 1 : _.i + 1;
                        if (i < 0 || i >= len) i = _.i;
                        _.to(i);
                    } else {
                        _.to(_.i);
                    }
                });
            }

            return _;
        };

        //  Move Unslider to a slide index
        _.to = function (index, callback) {
            if (_.t) {
                _.stop();
                _.play();
            }

            var o = _.o,
                el = _.el,
                ul = _.ul,
                li = _.li,
                current = _.i,
                target = li.eq(index);

            //  Check if it's out of bounds
            if (index >= li.length) index = 0;
            if (index < 0) index = li.length - 1;

            $.isFunction(o.starting) && !callback && o.starting(el, li.eq(current));

            //  To slide or not to slide
            if ((!target.length || index < 0) && o.loop === f) return;

            var speed = callback ? 5 : o.speed | 0,
                easing = o.easing,
                obj = {height: target.outerHeight()};

            if (!ul.queue('fx').length) {
                //  Handle those pesky dots
                el.find("." + _.o.dot).eq(index).
                    addClass('active').siblings().removeClass('active');

                el.animate(obj, speed, easing) &&
                ul.animate(
                    $.extend({left: '-' + index + '00%'}, obj),
                    speed,
                    easing,
                    function (data) {
                        _.i = index;

                        $.isFunction(o.complete) && !callback && o.complete(el, target);
                    });
            }
        };

        //  Autoplay functionality
        _.play = function () {
            _.t = setInterval(function () {
                _.to(_.i + 1);
            }, _.o.delay | 0);
        };

        //  Stop autoplay
        _.stop = function () {
            _.t = clearInterval(_.t);
            return _;
        };

        //  Move to previous/next slide
        _.next = function () {
            return _.stop().to(_.i + 1);
        };

        _.prev = function () {
            return _.stop().to(_.i - 1);
        };

        //  Create dots and arrows
        function nav(name) {
            if(name == _.o.dot) {
                var dots = _.el.find("." + _.o.dots);
                var dot = dots.find("." + _.o.dot).eq(0).clone();
                dots.empty();
                $.each(_.li, function (index) {
                    dots.append(dot);
                });
            }

            _.el.find("." + name).click(function () {
                var me = $(this);
                me.hasClass(_.o.dot) ?
                    _.stop().to(me.index()) :
                    me.hasClass(_.o.prev) ?
                    _.prev() : _.next();
            });
        };
    };

    //  Create a jQuery plugin
    $.fn.unslider = function (o) {
        var len = this.length;

        //  Enable multiple-slider support
        return this.each(function (index) {
            //  Cache a copy of $(this), so it
            var me = $(this),
                key = 'unslider' + (len > 1 ? '-' + ++index : ''),
                instance = (new Unslider).init(me, o);

            //  Invoke an Unslider instance
            me.data(key, instance).data('key', key);
        });
    };

    Unslider.version = "1.0.0";
})(jQuery, false);
