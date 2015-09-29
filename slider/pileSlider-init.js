$(document).ready(function(){
	pileSlider.init();
	
	// 运行函数监听点击事件
	pileSlider.clickEvent();
});

var pileSlider = {
	variable: {
		pileAreaWidthRatio: 		1/3, 			// 堆叠效果区域的宽度比例。
		itemSizeZoomRatio: 			0.8,			// 堆叠的条目大小递变的缩放比例
		itemWidthRatio: 				2/3,			// 条目宽度占组件容器的宽度比例
		itemOffsetTopRatio:			2/3,			// 条目堆叠垂直方向的偏移比例
		itemOffsetRightRatio:		2/5,			// 条目堆叠水平方向的偏移比例
		
		
		// 根据环境确定的变量。
		itemLen:								4,								//条目个数
		pileAreaWidth:					300,							//堆叠效果区域的宽度。
		itemWidths: 						new Array(),  		// 条目宽度
		itemHeights: 						new Array(), 			// 条目高度	
		itemOffsetTops: 				new Array(),			// 条目上方的偏移量。
	 	itemOffsetRights: 			new Array(), 			// 条目右边的偏移量。
		pileZIndexs:						new Array(),		 	// 条目堆叠的优先指数
		itemSerialNumberMap:		new Array(),			// 给初始化后的item编号
	},
	// 初始化组件数据
	init: function() {
		var items = $(".pileSlider .item");
		this.variable.itemLen = items.length;
		var itemLen = this.variable.itemLen;
		
		// 计算初始化的相关数据。
		var sliderWidth = $(".pileSlider").width();
		var itemWidthBirth = $(".pileSlider .item").width();
		var itemHeightBirth = $(".pileSlider .item").height();
		// 设置当前环境的相关变量值。
		var itemWidthMax = sliderWidth * this.variable.itemWidthRatio;
		var itemHeightMax = itemHeightBirth * (itemWidthMax / itemWidthBirth);
		
		// 根据条目数量计算堆叠效果区域的宽度
		if(itemLen <= 4) {
			this.variable.pileAreaWidthRatio = 6/18;
		} else if(itemLen <= 6) {
			this.variable.pileAreaWidthRatio = 7/18;
		} else if(itemLen <= 8) {
			this.variable.pileAreaWidthRatio = 8/18;
		} else {
			alert("幻灯片的数量过多，请控制在不大于8个范围！")
			return;
		}
		this.variable.pileAreaWidth = sliderWidth *  this.variable.pileAreaWidthRatio;
		
		// 根据条目的数量创建相应数量的控制状态点。
		$(".pileSlider .sliderCtrl").empty();
		for(var i = 0; i < itemLen; i++) {
			$(".pileSlider .sliderCtrl").append((i == 0)? "<i class='active'></i>": "<i></i>");
		}
		
		// 计算item的递变宽和高。
		var itemWidth, itemHeight, itemOffsetTop, itemOffsetRight, itemOffsetRightsSpace;
		itemOffsetRightsSpace = new Array();
		for(var i = 0; i < itemLen; i++) {
			this.variable.pileZIndexs.push(itemLen-i);
			if(i == 0) {
				itemWidth = itemWidthMax;
				itemHeight = itemHeightMax;
				itemOffsetTop = 0;
				itemOffsetRight = 0;
			} else {
				itemWidth = itemWidthMax * Math.pow(this.variable.itemSizeZoomRatio, i);
				itemHeight = itemHeightMax * Math.pow(this.variable.itemSizeZoomRatio, i);
				itemOffsetTop = 
					((itemHeight / this.variable.itemSizeZoomRatio) - itemHeight) *
					this.variable.itemOffsetTopRatio +
					this.variable.itemOffsetTops[i-1];
				itemOffsetRight = itemWidth * 
					this.variable.itemOffsetRightRatio;
			}
			
			this.variable.itemWidths.push(itemWidth);
			this.variable.itemHeights.push(itemHeight);
			this.variable.itemOffsetTops.push(itemOffsetTop);
			itemOffsetRightsSpace.push(itemOffsetRight);
		}	
		
		// 按比例计算堆叠效果区域item的水平堆叠间距
		var itemOffsetRightsSpaceTotal = 0;
		$.each(itemOffsetRightsSpace, function(idx, item) {
			itemOffsetRightsSpaceTotal += item;
		});
		for(var i = 0; i < itemLen; i++) {
			if(i != 0) {
				itemOffsetRightsSpace[i] = 
					(itemOffsetRightsSpace[i] / itemOffsetRightsSpaceTotal) *
						this.variable.pileAreaWidth;
			}
		}
		// 根据item的水平堆叠间距计算出item的右边偏移量
		for(var i = 0; i < itemLen; i++) {
			var minusSpace = 0
			for(var j = 0; j <= i; j++) {
				minusSpace += itemOffsetRightsSpace[j];
			}
			this.variable.itemOffsetRights.push(
				this.variable.pileAreaWidth - minusSpace);
		}
		
		// 最后根据计算出的数据堆叠出正确显示效果的每个条目
		for(var i = 0; i < itemLen; i++) {
			this.computePosition(items[i], i);
		}
		// 计算组件的高度。
		$(".pileSlider").height(itemHeightMax);
		
		// 初始化完成后给item编号。
		for(var i = 0; i < itemLen; i++) {
			var itemMap = {
				"no": i,
				"ele": items[i]
			};
			this.variable.itemSerialNumberMap.push(itemMap);
		}
	},
	
	// 点击事件。
	clickEvent: function() {
		var itemSerialNumberMap = this.variable.itemSerialNumberMap;
		var itemLen = this.variable.itemLen;
		var sliderCtrls = $(".pileSlider .sliderCtrl i");
		
		$(".pileSlider .item").click(function() {
			for(var i = 0; i < itemLen; i++) {
				if(this == itemSerialNumberMap[i].ele) {
					// 设置控制状态点的样式
					var sliderCtrl = $(".pileSlider .sliderCtrl i");
					$.each(sliderCtrl, function(idx, item) {
						if(idx == itemSerialNumberMap[i].no) {
							$.each(sliderCtrl, function(idx, item) {
								$(item).removeClass("active");
							});
							$(item).addClass("active");
						}
					});
					// 调用计算所有item的位置
					pileSlider.computeItemsPosition(itemSerialNumberMap[i].no, 
						itemSerialNumberMap);
				}
			}
		});
		
		$(".pileSlider .sliderCtrl i").click(function() {
			for(var i = 0; i < itemLen; i++) {
				$(sliderCtrls[i]).removeClass("active");
				var no = jQuery.inArray(this, sliderCtrls);	
				pileSlider.computeItemsPosition(no, itemSerialNumberMap);
			}
			$(this).addClass("active");
		});
	}, 
	
	computeItemsPosition: function(no, itemSerialNumberMap) {
		var itemLen = this.variable.itemLen;
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
				this.variable.itemSerialNumberMap = itemSerialNumberMapTemp;
			}
		}
		// 重新计算item的位置。
		var tempArray = this.variable.itemSerialNumberMap
		for(var i = 0 ; i < itemLen; i++) {
			this.computePosition(this.variable.itemSerialNumberMap[i].ele, i);
		}
		
	}, 
	
	computePosition: function(item, i) {
		item.style.zIndex = this.variable.pileZIndexs[i];
		item.style.top = this.variable.itemOffsetTops[i] + "px";
		item.style.right = this.variable.itemOffsetRights[i] + "px";
		item.style.width = this.variable.itemWidths[i] + "px";
	}
	
	
}
