<template>
	<view class="friend">
		<view class="friend-left">
			<wd-badge show-zero modelValue="0" max="99">
				<wd-img radius="12" :width="45" :height="45" :src="ListImageSrc" />
			</wd-badge>
		</view>
		<view class="message">
			<view class="top">
				<wd-text bold="true" color="black" :text="MessageName" />
				<wd-text text="12:30" />
			</view>
			<view class="bottom">
				<wd-text lines="1"
					text="芦叶满汀洲，寒沙带浅流。二十年重过南楼。柳下系船犹未稳，能几日，又中秋。黄鹤断矶头，故人曾到否？旧江山浑是新愁。欲买桂花同载酒，终不似，少年游。"></wd-text>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		ListImageSrc: String,
		MessageName: {
			type: String,
			default: '名字'
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