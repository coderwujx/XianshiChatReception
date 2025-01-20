<template>
	<view class="top-bar">
		<view class="top-left" @click="handLeft">
			<wd-icon name="thin-arrow-left" size="45rpx" />
		</view>
		<view class="top-right" @click="handRight">
			<wd-icon name="ellipsis" size="50rpx" />
		</view>
	</view>
</template>

<script setup>
	const handLeft = () => {
		uni.navigateBack({
			delta: 1
		});
	}
	const handRight = () => {
		console.log("点击了右边")
	}
</script>

<style lang="scss">
	.top-bar {
		height: calc(100rpx + var(--status-bar-height));
		width: 100%;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: var(--status-bar-height);
		padding-left: 20rpx;
		padding-right: 20rpx;

		.top-left {
			height: 50rpx;
			width: 50rpx;
		}

		.top-right {
			height: 50rpx;
			width: 50rpx;
		}

	}
</style>