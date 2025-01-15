<template>
	<view class="friend">
		<view class="friend-left">
			<wd-badge :hidden="MessageTip === 0" :modelValue="MessageTip" max="99">
				<wd-img radius="12" :width="45" :height="45" :src="ListImageSrc" />
			</wd-badge>
		</view>
		<view class="message">
			<view class="top">
				<wd-text size="36rpx" color="black" :text="MessageName" />
				<wd-text size="24rpx" :text="MessageTime" />
			</view>
			<view class="bottom">
				<wd-text lines="1" :text="MessageContent" />
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		ListImageSrc: {
			type: String,
			default: ''
		},
		MessageTip: {
			type: Number,
			default: 0
		},
		MessageName: {
			type: String,
			default: '名字'
		},
		MessageTime: {
			type: String,
			default: ''
		},
		MessageContent: {
			type: String,
			default: ''
		}
	});
</script>

<style lang="scss">
	.friend {
		margin-top: 5rpx;
		display: flex;
		box-sizing: border-box;
		height: 130rpx;
		width: 100%;
		border-bottom: 1rpx solid $uni-border-color;

		.friend-left {
			height: 130rpx;
			width: 20%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.message {
			height: 130rpx;
			width: 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.top {
				width: 100%;
				height: 50%;
				box-sizing: border-box;
				padding-right: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.bottom {
				width: 100%;
				height: 50%;
			}
		}
	}
</style>