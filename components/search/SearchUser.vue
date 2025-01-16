<template>
	<view class="search-user">
		<view class="user classify">
			<view class="user-title">用户</view>
			<view class="user-list">
				<view class="list-left">
					<wd-img width="75rpx" height="75rpx" radius="20rpx" src="../../static/images/img/four.png" />
					<text class="list-text">开发的实力</text>
				</view>
				<view class="list-button">
					<wd-button size="small">发信息</wd-button>
				</view>
			</view>
		</view>
		<view class="group classify">
			<view class="group-title">群组</view>
			<view class="user-list">
				<view class="list-left">
					<wd-img width="75rpx" height="75rpx" radius="20rpx" src="../../static/images/img/four.png" />
					<text class="list-text">开发的实力</text>
				</view>
				<view class="list-button">
					<wd-button size="small">发信息</wd-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
</script>

<style lang="scss">
	.search-user {
		.classify {
			.user-title {
				height: 70rpx;
				width: 100%;
				padding-left: 35rpx;
				margin-top: 10rpx;
				margin-bottom: 10rpx;
				font-size: 40rpx;
				font-weight: 800;
			}

			.group-title {
				height: 70rpx;
				width: 100%;
				padding-left: 35rpx;
				margin-top: 10rpx;
				margin-bottom: 10rpx;
				font-size: 40rpx;
				font-weight: 800;
			}

			.user-list {
				width: 100%;
				height: 100rpx;
				border-top: 2rpx solid gainsboro;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.list-left {
					height: 100%;
					padding-left: 35rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					.list-text {
						padding-left: 20rpx;
					}
				}

				.list-button {
					height: 100%;
					display: flex;
					align-items: center;
					padding-right: 20rpx;
				}
			}
		}
	}
</style>