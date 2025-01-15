<template>
	<view class="friend">
		<!-- 左侧头像和消息提示 -->
		<view class="friend-left">
			<!-- 消息提示徽章 -->
			<wd-badge :hidden="MessageTip === 0" :modelValue="MessageTip" :max="99">
				<!-- 头像 -->
				<wd-img radius="12" :width="45" :height="45" :src="ListImageSrc" />
			</wd-badge>
		</view>
		<!-- 右侧消息内容 -->
		<view class="message">
			<!-- 消息顶部：名字和时间 -->
			<view class="top">
				<wd-text size="36rpx" color="black" :text="MessageName" />
				<wd-text size="24rpx" :text="MessageTime" />
			</view>
			<!-- 消息底部：内容 -->
			<view class="bottom">
				<wd-text :lines="1" :text="MessageContent" />
			</view>
		</view>
	</view>
</template>

<script setup>
	// 定义组件接收的属性
	const props = defineProps({
		ListImageSrc: {
			type: String,
			default: '', // 头像图片地址，默认为空
		},
		MessageTip: {
			type: Number,
			default: 0, // 消息提示数量，默认为 0
		},
		MessageName: {
			type: String,
			default: '名字', // 消息发送者名字，默认为“名字”
		},
		MessageTime: {
			type: String,
			default: '', // 消息时间，默认为空
		},
		MessageContent: {
			type: String,
			default: '', // 消息内容，默认为空
		},
	});
</script>

<style lang="scss">
	.friend {
		margin-top: 5rpx; // 上边距
		display: flex; // 使用 Flex 布局
		box-sizing: border-box; // 盒模型
		height: 130rpx; // 固定高度
		width: 100%; // 宽度 100%
		border-bottom: 1rpx solid $uni-border-color; // 底部边框

		// 左侧头像区域
		.friend-left {
			height: 130rpx; // 高度与父容器一致
			width: 20%; // 宽度占 20%
			display: flex;
			align-items: center; // 垂直居中
			justify-content: center; // 水平居中
		}

		// 右侧消息区域
		.message {
			height: 130rpx; // 高度与父容器一致
			width: 80%; // 宽度占 80%
			display: flex;
			flex-direction: column; // 垂直排列
			justify-content: center; // 垂直居中
			align-items: center; // 水平居中

			// 消息顶部：名字和时间
			.top {
				width: 100%; // 宽度 100%
				height: 50%; // 高度占 50%
				box-sizing: border-box;
				padding-right: 20rpx; // 右侧内边距
				display: flex;
				align-items: center; // 垂直居中
				justify-content: space-between; // 两端对齐
			}

			// 消息底部：内容
			.bottom {
				width: 100%; // 宽度 100%
				height: 50%; // 高度占 50%
			}
		}
	}
</style>