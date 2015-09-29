/**
 *	new PileSlider组件对象时可选的传入参数。
 * 如：
 	{
 		domObj:									$(".pileSlider")
 		pileAreaWidthRatio: 		1/3, 			// 堆叠效果区域的宽度比例。
		itemSizeZoomRatio: 			0.8,			// 堆叠的条目大小递变的缩放比例
		itemOffsetTopRatio:			2/3,			// 条目堆叠垂直方向的偏移比例
		itemOffsetRightRatio:		2/5,			// 条目堆叠水平方向的偏移比例
 	}
 * 
 * **/

function PileSlider(options) {
	this.opts = $.extend(true, {
		"domObj": 							null,	// 组件操作的dom对象。(必须传递的参数)
		"pileAreaWidthRatio":		2/5,	// 堆叠效果区域的宽度比例。
		"itemSizeZoomRatio":		0.8,	// 堆叠的条目大小递变的缩放比例
		"itemOffsetTopRatio": 	2/3,	// 条目堆叠垂直方向的偏移比例
		"itemOffsetRightRatio":	2/5		// 条目堆叠水平方向的偏移比例
	}, options);
	
	// 根据组件环境来设置的变量。
	this.setVars = {
		itemLen:								4,								// 条目个数
		pileAreaWidth:					300,							// 堆叠效果区域的宽度。
		position:								[],			// 条目的位置。由width，top，right，zIndex值确定。
		itemSerialNumberMap:		[]			// 给初始化后的item编号
	};
	
	// 原型方式创建类型的共享方法。并且只在第一次new对象时创建。
	if(typeof this.init != "function") {
		PileSlider.prototype.init = function() {
			var items = this.opts.domObj.find(".item");
			this.setVars.itemLen = items.length;
			var itemLen = this.setVars.itemLen;

			// 将items倒序，防止初始化时条目的闪动。
			var itemTemp =  new Array();
			for(var i = itemLen - 1; i >= 0; i--) {
				itemTemp.push(items[i]);
			}
			items = itemTemp;
			itemTemp = null;
			
			// 计算和初始化的相关数据。
			var sliderWidth = this.opts.domObj.width();
			
			// 根据条目数量和容器宽度计算堆叠效果区域的宽度
			if(this.opts.pileAreaWidthRatio == undefined) {
				if(itemLen <= 4) {
					this.opts.pileAreaWidthRatio = 6/18;
				} else if(itemLen <= 6) {
					this.opts.pileAreaWidthRatio = 7/18;
				} else if(itemLen <= 8) {
					this.opts.pileAreaWidthRatio = 8/18;
				} else {
					alert("幻灯片的数量过多，请控制在不大于8个范围！")
					return;
				}
			}
			this.setVars.pileAreaWidth = sliderWidth *  this.opts.pileAreaWidthRatio;
			
			var itemWidthBirth = $(items).first().width();
			var itemHeightBirth = $(items).first().height();
			// 按比例设置当前环境item的最大宽度和高度。
			var itemWidthMax = sliderWidth * (1 - this.opts.pileAreaWidthRatio);
			var itemHeightMax = itemHeightBirth * (itemWidthMax / itemWidthBirth);
			
			// 计算组件的高度。
			this.opts.domObj.height(itemHeightMax);
			
			// 根据条目的数量创建相应数量的控制状态点。
			this.opts.domObj.find(".sliderCtrl").empty();
			for(var i = 0; i < itemLen; i++) {
				this.opts.domObj.find(".sliderCtrl").append((i == 0)? "<i class='active'></i>": "<i></i>");
			}
			
			// 计算item的递变宽、高、上方偏移量、条目水平堆叠间距。
			var itemWidth, itemHeight, itemOffsetTop, itemOffsetRight, itemOffsetRightsSpace;
			itemOffsetRightsSpace = new Array();
			for(var i = 0; i < itemLen; i++) {
//				this.setVars.pileZIndexs.push(itemLen-i);
				if(i == 0) {
					itemWidth = itemWidthMax;
					itemHeight = itemHeightMax;
					itemOffsetTop = 0;
					itemOffsetRight = 0;
				} else {
					itemWidth = itemWidthMax * Math.pow(this.opts.itemSizeZoomRatio, i);
					itemHeight = itemHeightMax * Math.pow(this.opts.itemSizeZoomRatio, i);
					
					itemOffsetTop = 
						((itemHeight / this.opts.itemSizeZoomRatio) - itemHeight) *
						this.opts.itemOffsetTopRatio +
						this.setVars.position[i-1].top;
					itemOffsetRight = itemWidth * 
						this.opts.itemOffsetRightRatio;
				}
				itemOffsetRightsSpace.push(itemOffsetRight);
				
				this.setVars.position.push({
					"zIndex": itemLen-i, 
					"width":   itemWidth,
					"top":		 itemOffsetTop
				});
			}	
			
			// 根据slider所在容器按比例计算堆叠效果区域item的水平堆叠间距
			var itemOffsetRightsSpaceTotal = 0;
			$.each(itemOffsetRightsSpace, function(idx, item) {
				itemOffsetRightsSpaceTotal += item;
			});
			for(var i = 0; i < itemLen; i++) {
				if(i != 0) {
					itemOffsetRightsSpace[i] = 
						(itemOffsetRightsSpace[i] / itemOffsetRightsSpaceTotal) *
							this.setVars.pileAreaWidth;
				}
			}
			// 根据slider所在容器计算出的item的水平堆叠间距计算出item的右边偏移量
			for(var i = 0; i < itemLen; i++) {
				var minusSpace = 0
				for(var j = 0; j <= i; j++) {
					minusSpace += itemOffsetRightsSpace[j];
				}
				this.setVars.position[i].right = this.setVars.pileAreaWidth - minusSpace;
			}
			
			// 最后根据计算出的数据堆叠出正确显示效果的每个条目
			for(var i = 0; i < itemLen; i++) {
				$(items[i]).css(this.setVars.position[i]);
			}
			
			// 初始化完成后给item编号。
			for(var i = 0; i < itemLen; i++) {
				var itemMap = {
					"no": i,
					"ele": items[i]
				};
				this.setVars.itemSerialNumberMap.push(itemMap);
			}
		};
		
		// 绑定点击事件。
		PileSlider.prototype.clickEvent = function() {
			var other = this;
			var itemSerialNumberMap = this.setVars.itemSerialNumberMap;
			var itemLen = this.setVars.itemLen;
			var sliderCtrls = this.opts.domObj.find(".sliderCtrl i");
			
			this.opts.domObj.find(".item").click(function() {
				for(var i = 0; i < itemLen; i++) {
					if(this == itemSerialNumberMap[i].ele) {
						// 设置控制状态点的样式
						var sliderCtrl = other.opts.domObj.find(".sliderCtrl i");
						$.each(sliderCtrl, function(idx, item) {
							if(idx == itemSerialNumberMap[i].no) {
								$.each(sliderCtrl, function(idx, item) {
									$(item).removeClass("active");
								});
								$(item).addClass("active");
							}
						});
						// 调用计算所有item的位置
						other.computeItemsPosition(itemSerialNumberMap[i].no, 
							itemSerialNumberMap);
					}
				}
			});
			this.opts.domObj.find(".sliderCtrl i").click(function() {
				for(var i = 0; i < itemLen; i++) {
					$(sliderCtrls[i]).removeClass("active");
					var no = jQuery.inArray(this, sliderCtrls);	
					other.computeItemsPosition(no, itemSerialNumberMap);
				}
				$(this).addClass("active");
			});
		}; 
		
		// 当点击事件触发时重新计算item的显示位置。
		PileSlider.prototype.computeItemsPosition =
			function(no, itemSerialNumberMap) {
			
			var itemLen = this.setVars.itemLen;
			for(var i = 0; i < itemLen; i++) {
				// 找到当前活动对象时重新排序itemSerialNumberMap数组
				if(no == itemSerialNumberMap[i].no) {
					var itemSerialNumberMapTemp = new Array(itemLen);
					for(var j = 0; j < itemLen; j++) {
						if(i >= itemLen) {
							i = 0;
						} 
						itemSerialNumberMapTemp[j] = itemSerialNumberMap[i++];
					}
					this.setVars.itemSerialNumberMap = itemSerialNumberMapTemp;
				}
			}
			// 重新计算item的位置。
			for(var i = 0 ; i < itemLen; i++) {
				$(this.setVars.itemSerialNumberMap[i].ele).css(this.setVars.position[i]);
			}
			
		}; 
		
		PileSlider.prototype.run = function() {
			this.init();
			this.clickEvent();
		};
	}
}

