<template>
	<view class="user-content">
		<wd-img width="400rpx" height="400rpx" src="../../static/images/img/three.png" />
		<view class="user-text">
			<wd-text text="备注文本" color="#272832" size="52rpx" />
			<wd-text text="网名文本" color="#272832" size="28rpx" />
			<view class="introduce-text">
				<wd-text text="介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本"
					color="#272832" size="28rpx" />
			</view>
		</view>
		<view class="add-user-button">
			<wd-button block>加为好友</wd-button>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.user-content {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 100rpx;

		.user-text {
			width: 85%;
			box-sizing: border-box;
			padding-top: 48rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.introduce-text {
				width: 100%;
				padding-top: 20rpx;
				letter-spacing: -0.48px;
				line-height: 48rpx;
			}
		}

		.add-user-button {
			width: 90%;
			height: 100rpx;
			position: absolute;
			bottom: 30rpx;
		}
	}
</style>