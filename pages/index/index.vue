<template>
	<view class="content">
		<!-- 顶部栏 -->
		<view class="top-bar">
			<!-- 左侧区域 -->
			<view class="top-bar-left">
				<!-- 头像 -->
				<image src="/static/images/img/four.png" mode=""></image>
			</view>
			<!-- 中间区域 -->
			<view class="top-bar-center">
				<!-- logo -->
				<image src="/static/images/img/logo.png" mode=""></image>
			</view>
			<!-- 右侧区域 -->
			<view class="top-bar-right">
				<!-- 搜索按钮 -->
				<view class="search">
					<image src="/static/svg/search.svg" mode=""></image>
				</view>
				<!-- 添加按钮 -->
				<view class="add">
					<image src="/static/svg/add.svg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	// 这里可以放置组件的逻辑代码
</script>

<style lang="scss">
	.content {

		// 顶部栏样式
		.top-bar {
			position: fixed; // 固定定位
			top: 0; // 距离顶部 0
			left: 0; // 距离左侧 0
			width: 100%; // 宽度 100%
			height: 88rpx; // 高度 88rpx
			box-sizing: border-box; // 盒模型为 border-box
			background: $uni-bg-color; // 背景颜色
			border-bottom: 1px solid $uni-border-color; // 底部边框
			padding: 0 $uni-spacing-col-base; // 左右内边距
			display: flex; // 使用 Flexbox 布局
			align-items: center; // 垂直居中
			justify-content: space-between; // 左右分布

			// 左侧区域样式
			&-left {
				display: flex; // 使用 Flexbox 布局
				align-items: center; // 垂直居中

				// 头像图片样式
				image {
					width: 68rpx; // 宽度 68rpx
					height: 68rpx; // 高度 68rpx
					border-radius: 16rpx; // 圆角 16rpx
				}
			}

			// 中间区域样式
			&-center {
				display: flex; // 使用 Flexbox 布局
				align-items: center; // 垂直居中
				justify-content: center; // 水平居中
				position: relative; // 相对定位
				left: 20rpx; // 往右移动 20rpx

				// logo 图片样式
				image {
					width: 88rpx; // 宽度 88rpx
					height: 42rpx; // 高度 42rpx
				}
			}

			// 右侧区域样式
			&-right {
				display: flex; // 使用 Flexbox 布局
				align-items: center; // 垂直居中

				// 搜索按钮样式
				.search,
				// 添加按钮样式
				.add {
					width: 88rpx; // 宽度 88rpx
					height: 88rpx; // 高度 88rpx
					display: flex; // 使用 Flexbox 布局
					align-items: center; // 垂直居中
					justify-content: center; // 水平居中
				}

				// 图片样式
				image {
					width: 52rpx; // 宽度 52rpx
					height: 52rpx; // 高度 52rpx
				}
			}
		}
	}
</style>